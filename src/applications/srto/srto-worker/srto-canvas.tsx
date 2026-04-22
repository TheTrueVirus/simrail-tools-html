import React, { useRef, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import './srto-canvas.css'
import { AreaProps, RenderOptionsProps } from '../srto';
import { SimRailDataTypes } from '../../../types/simrail-data-types';
import { SRTO_Tracks } from './srto-data/srto-trackData';
import { SRTO_Nodes } from './srto-data/srto-nodeData';
import { SRTO_Signals } from './srto-data/srto-signalData';
import { SRTO_DataTypes } from './srto-data/srto-dataTypes';
import { CanvasDrawer, TRAIN_BASE_PATH, SIGNAL_BASE_PATH } from './srto-canvas-drawer/srto-canvas-drawer';
const inDev = process.env.NODE_ENV === 'development'
const appVersion = process.env.REACT_APP_VERSION || 'dev'
const CANVAS_WORLD_WIDTH = 2560
const CANVAS_WORLD_HEIGHT = 3000
const MIN_ZOOM_FIT = 1
const MIN_ZOOM_EXTENDED = 0.25
const MAX_ZOOM = 4
const TOOLTIP_MARGIN = 10
const TOOLTIP_OFFSET = 12

interface ISelfProps {
    SRTO_OPTIONS: {
        trainList: SimRailDataTypes.FilteredTrainList[],
        stationList: SimRailDataTypes.StationData[]
        selectedArea: AreaProps
        isShowLongStationNames: boolean
        isShowTestTrains: boolean
        setShowTestTrains: React.Dispatch<React.SetStateAction<boolean>>
        allowExtendedView: boolean
        setAllowExtendedView: React.Dispatch<React.SetStateAction<boolean>>
        devRenderOptions: RenderOptionsProps
    }
}

function loadDataFromFile(area: AreaProps) {
    const TRACK_DATA = SRTO_Tracks[area.areaID];
    const SIGNAL_DATA = SRTO_Signals[area.areaID];
    const NODE_DATA = SRTO_Nodes[area.areaID];
    return {
        TRACK_DATA,
        SIGNAL_DATA,
        NODE_DATA
    }
}

export default function SRTO_Canvas({ SRTO_OPTIONS }: ISelfProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trackPathCacheRef = useRef(new WeakMap<SRTO_DataTypes.TRACK, Path2D>());
    const viewRef = useRef({ zoom: 1, panX: 0, panY: 0 })
    const dragRef = useRef({ isDragging: false, lastX: 0, lastY: 0 })
    const rafRef = useRef<number | null>(null)
    const canvasSizeRef = useRef({ width: 0, height: 0, dpr: 0 })
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const [mouseWorldPos, setMouseWorldPos] = useState<{ x: number, y: number } | null>(null)
    const [hoveredTarget, setHoveredTarget] = useState<
        | { type: 'train', train: SimRailDataTypes.FilteredTrainList, screenX: number, screenY: number }
        | { type: 'signal', signal: SRTO_DataTypes.SIGNAL, screenX: number, screenY: number }
        | null
    >(null)
    const [tooltipPosition, setTooltipPosition] = useState<{ left: number, top: number } | null>(null)
    const minZoom = SRTO_OPTIONS.allowExtendedView ? MIN_ZOOM_EXTENDED : MIN_ZOOM_FIT

    const { TRACK_DATA, SIGNAL_DATA, NODE_DATA } = loadDataFromFile(SRTO_OPTIONS.selectedArea);
    const signalByName = useMemo(() => {
        const map = new Map<string, SRTO_DataTypes.SIGNAL>()
        for (const signal of SIGNAL_DATA) {
            map.set(signal.signalName, signal)
        }
        return map
    }, [SIGNAL_DATA])

    const trainHoverEntries = useMemo(() => {
        return SRTO_OPTIONS.trainList
            .map((train) => {
                const signalName = train.TrainData.SignalInFront?.split('@')[0]
                const signal = signalByName.get(signalName)
                return signal ? { train, signal } : null
            })
            .filter((entry): entry is { train: SimRailDataTypes.FilteredTrainList, signal: SRTO_DataTypes.SIGNAL } => entry !== null)
    }, [SRTO_OPTIONS.trainList, signalByName])

    useLayoutEffect(() => {
        if (!hoveredTarget) {
            setTooltipPosition(null)
            return
        }

        const tooltipElement = tooltipRef.current
        if (!tooltipElement) return

        const tooltipWidth = tooltipElement.offsetWidth
        const tooltipHeight = tooltipElement.offsetHeight

        const desiredLeft = hoveredTarget.screenX - (tooltipWidth / 2)
        const maxLeft = Math.max(TOOLTIP_MARGIN, window.innerWidth - TOOLTIP_MARGIN - tooltipWidth)
        const left = Math.min(maxLeft, Math.max(TOOLTIP_MARGIN, desiredLeft))

        const aboveTop = hoveredTarget.screenY - tooltipHeight - TOOLTIP_OFFSET
        const belowTop = hoveredTarget.screenY + TOOLTIP_OFFSET + 14
        const top = aboveTop < TOOLTIP_MARGIN ? belowTop : aboveTop

        setTooltipPosition({ left, top })
    }, [hoveredTarget])

    useEffect(() => {
        scheduleDraw()

        const handleResize = () => scheduleDraw()
        window.addEventListener('resize', handleResize)

        const canvas = canvasRef.current
        if (canvas) {
            canvas.addEventListener('wheel', handleWheel, { passive: false })
        }

        return () => {
            window.removeEventListener('resize', handleResize)

            if (canvas) {
                canvas.removeEventListener('wheel', handleWheel)
            }

            if (rafRef.current !== null) {
                window.cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
        }
    }, [
        TRACK_DATA,
        SIGNAL_DATA,
        NODE_DATA,
        SRTO_OPTIONS.allowExtendedView,
        SRTO_OPTIONS.trainList,
        SRTO_OPTIONS.isShowLongStationNames,
    ])

    const clampViewToBounds = (rect: DOMRect) => {
        if (SRTO_OPTIONS.allowExtendedView) return

        const fitScale = rect.width / CANVAS_WORLD_WIDTH
        const scale = fitScale * viewRef.current.zoom

        const scaledWorldWidth = CANVAS_WORLD_WIDTH * scale
        const scaledWorldHeight = CANVAS_WORLD_HEIGHT * scale

        if (scaledWorldWidth <= rect.width) {
            viewRef.current.panX = (rect.width - scaledWorldWidth) / 2
        } else {
            const minPanX = rect.width - scaledWorldWidth
            const maxPanX = 0
            viewRef.current.panX = Math.min(maxPanX, Math.max(minPanX, viewRef.current.panX))
        }

        if (scaledWorldHeight <= rect.height) {
            viewRef.current.panY = (rect.height - scaledWorldHeight) / 2
        } else {
            const minPanY = rect.height - scaledWorldHeight
            const maxPanY = 0
            viewRef.current.panY = Math.min(maxPanY, Math.max(minPanY, viewRef.current.panY))
        }
    }

    const resetView = (rect: DOMRect) => {
        viewRef.current.zoom = 1
        viewRef.current.panX = 0
        viewRef.current.panY = 0
        clampViewToBounds(rect)
    }

    const drawCanvas = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const rect = canvas.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1

        clampViewToBounds(rect)

        const nextWidth = Math.floor(rect.width * dpr)
        const nextHeight = Math.floor(rect.height * dpr)
        const sizeChanged =
            canvasSizeRef.current.width !== nextWidth ||
            canvasSizeRef.current.height !== nextHeight ||
            canvasSizeRef.current.dpr !== dpr

        if (sizeChanged) {
            canvas.width = nextWidth
            canvas.height = nextHeight
            canvasSizeRef.current = {
                width: nextWidth,
                height: nextHeight,
                dpr,
            }
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, rect.width, rect.height)

        // Base scale always fits world width (2560) into current viewport width.
        const fitScale = rect.width / CANVAS_WORLD_WIDTH
        const { zoom, panX, panY } = viewRef.current

        ctx.save()
        ctx.translate(panX, panY)
        ctx.scale(fitScale * zoom, fitScale * zoom)

        if (!TRACK_DATA) return;
        if(SRTO_OPTIONS.devRenderOptions.renderTracks)
            CanvasDrawer.drawTracks(TRACK_DATA, ctx, trackPathCacheRef.current);
        if (!SIGNAL_DATA) return;
        if(SRTO_OPTIONS.devRenderOptions.renderSignals)
            CanvasDrawer.drawSignals(SIGNAL_DATA, SRTO_OPTIONS.trainList, ctx);
        if (!NODE_DATA || !SRTO_OPTIONS.stationList) return;
        if(SRTO_OPTIONS.devRenderOptions.renderNodes)
            CanvasDrawer.drawNotations(NODE_DATA, SRTO_OPTIONS.stationList, ctx, SRTO_OPTIONS.isShowLongStationNames);
        if (!SRTO_OPTIONS.trainList) return;
        if (inDev) {
            if (SRTO_OPTIONS.devRenderOptions.renderGhostTrains) {
                CanvasDrawer.drawGhostTrains(SIGNAL_DATA, ctx);
            } else {
                if(SRTO_OPTIONS.devRenderOptions.renderTrains)
                    CanvasDrawer.drawTrains(SRTO_OPTIONS.trainList, SIGNAL_DATA, ctx)
            }
        } else {
            if(SRTO_OPTIONS.devRenderOptions.renderTrains)
            CanvasDrawer.drawTrains(SRTO_OPTIONS.trainList, SIGNAL_DATA, ctx)
        }
        ctx.restore()
    }

    const scheduleDraw = () => {
        if (rafRef.current !== null) return

        rafRef.current = window.requestAnimationFrame(() => {
            rafRef.current = null
            drawCanvas()
        })
    }

    const handleWheel = (event: WheelEvent) => {
        event.preventDefault()

        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top
        const fitScale = rect.width / CANVAS_WORLD_WIDTH

        const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9
        const prevZoom = viewRef.current.zoom
        const nextZoom = Math.min(MAX_ZOOM, Math.max(minZoom, prevZoom * zoomFactor))

        if (nextZoom === prevZoom) return

        const prevScale = fitScale * prevZoom
        const nextScale = fitScale * nextZoom

        // Keep the world point under the cursor fixed while zooming.
        const worldX = (mouseX - viewRef.current.panX) / prevScale
        const worldY = (mouseY - viewRef.current.panY) / prevScale

        viewRef.current.zoom = nextZoom
        viewRef.current.panX = mouseX - worldX * nextScale
        viewRef.current.panY = mouseY - worldY * nextScale
        clampViewToBounds(rect)

        scheduleDraw()
    }

    const handleMouseDown: React.MouseEventHandler<HTMLCanvasElement> = (event) => {
        if (event.button === 1) {
            event.preventDefault()

            const canvas = canvasRef.current
            if (!canvas) return

            const rect = canvas.getBoundingClientRect()
            resetView(rect)
            scheduleDraw()
            return
        }

        if (event.button !== 0) return

        dragRef.current.isDragging = true
        dragRef.current.lastX = event.clientX
        dragRef.current.lastY = event.clientY
        setHoveredTarget(null)
    }

    const handleMouseMove: React.MouseEventHandler<HTMLCanvasElement> = (event) => {
        const canvas = canvasRef.current
        if (canvas) {
            const rect = canvas.getBoundingClientRect()
            const mouseX = event.clientX - rect.left
            const mouseY = event.clientY - rect.top
            const fitScale = rect.width / CANVAS_WORLD_WIDTH
            const scale = fitScale * viewRef.current.zoom
            const worldX = (mouseX - viewRef.current.panX) / scale
            const worldY = (mouseY - viewRef.current.panY) / scale
            setMouseWorldPos({ x: Math.round(worldX), y: Math.round(worldY) })

            if (!dragRef.current.isDragging) {
                const ctx = canvas.getContext('2d')
                if (ctx && SIGNAL_DATA) {
                    let hit: typeof hoveredTarget = null

                    for (const { train, signal } of trainHoverEntries) {
                        const tx = Number(signal.trainPos.x)
                        const ty = Number(signal.trainPos.y)
                        const path = TRAIN_BASE_PATH[signal.signalDirectionOnMap]
                        if (ctx.isPointInPath(path, worldX - tx, worldY - ty)) {
                            hit = {
                                type: 'train',
                                train,
                                screenX: (tx+(signal.signalDirectionOnMap === 'right' ? -25 : 25 )) * scale + viewRef.current.panX,
                                screenY: (ty-10) * scale + viewRef.current.panY
                            }
                            break
                        }
                    }

                    if (!hit) {
                        for (const signal of SIGNAL_DATA) {
                            const sx = Number(signal.signalPos.x)
                            const sy = Number(signal.signalPos.y)
                            const signalPath = SIGNAL_BASE_PATH[signal.signalDirectionOnMap]
                            if (ctx.isPointInPath(signalPath, worldX - sx, worldY - sy)) {
                                hit = {
                                    type: 'signal',
                                    signal,
                                    screenX: sx * scale + viewRef.current.panX,
                                    screenY: sy * scale + viewRef.current.panY,
                                }
                                break
                            }
                        }
                    }

                    canvas.style.cursor = hit ? 'pointer' : 'default'
                    setHoveredTarget(hit)
                }
            }
        }

        if (!dragRef.current.isDragging) return

        const deltaX = event.clientX - dragRef.current.lastX
        const deltaY = event.clientY - dragRef.current.lastY

        dragRef.current.lastX = event.clientX
        dragRef.current.lastY = event.clientY

        viewRef.current.panX += deltaX
        viewRef.current.panY += deltaY

        if (canvas) {
            const rect = canvas.getBoundingClientRect()
            clampViewToBounds(rect)
        }
        scheduleDraw()
    }

    const handleMouseUpOrLeave: React.MouseEventHandler<HTMLCanvasElement> = () => {
        dragRef.current.isDragging = false
    }

    const handleMouseLeave: React.MouseEventHandler<HTMLCanvasElement> = () => {
        dragRef.current.isDragging = false
        setMouseWorldPos(null)
        setHoveredTarget(null)

        const canvas = canvasRef.current
        if (canvas) {
            canvas.style.cursor = 'default'
        }
    }

    function trainsCounter() {

        const trainsControlledByPlayers = SRTO_OPTIONS.trainList.filter((train) => train.ControlledBy === 'user').length
        const allTrainsCount = SRTO_OPTIONS.trainList.length;
        return `Trains: ${trainsControlledByPlayers}/${allTrainsCount}`
    }

    function stationsCounter() {
        const stationsControlledByPlayers = SRTO_OPTIONS.stationList.filter((station) => station.DispatchedBy.length > 0).length
        const allStationsCount = SRTO_OPTIONS.stationList.length

        return `Stations: ${stationsControlledByPlayers}/${allStationsCount}`
    }

    return (
        <>
            <div className='srtoCanvasContainer'>
                {hoveredTarget && (
                    <div
                        className='hoverTooltip'
                        ref={tooltipRef}
                        style={{
                            left: tooltipPosition?.left ?? hoveredTarget.screenX,
                            top: tooltipPosition?.top ?? hoveredTarget.screenY,
                            visibility: tooltipPosition ? 'visible' : 'hidden'
                        }}
                    >
                        {hoveredTarget.type === 'train' && (
                            <>
                                <div className='trainTooltip-title'>{`${hoveredTarget.train.TrainNoLocal} | ${hoveredTarget.train.Type}`}</div>
                                <div className='trainTooltip-route'>{hoveredTarget.train.StartStation} → {hoveredTarget.train.EndStation}</div>
                                <div className='trainTooltip-traindata-speed'>Current Speed: {hoveredTarget.train.TrainData.Velocity.toFixed(0)} km/h</div>
                                <div className='trainTooltip-traindata-nextSignal'>Next Signal: {hoveredTarget.train.TrainData.SignalInFront.split('@')[0]} [{hoveredTarget.train.TrainData.DistanceToSignalInFront > 1000 ? `${(hoveredTarget.train.TrainData.DistanceToSignalInFront/1000).toFixed(1)} km` : `${hoveredTarget.train.TrainData.DistanceToSignalInFront.toFixed(1)} m`}]</div>
                                <div className='trainTooltip-traindata-nextSignalSpeed-speed'>Speed on Next Signal: {hoveredTarget.train.TrainData.SignalInFrontSpeed > 160 ? 'vMax' : `${hoveredTarget.train.TrainData.SignalInFrontSpeed} km/h`}</div>
                                <div className='trainTooltip-control'>{hoveredTarget.train.ControlledBy === 'user' ? 'Player' : 'Bot'}</div>
                            </>
                        )}
                        {hoveredTarget.type === 'signal' && (
                            <>
                                <div className='trainTooltip-title'>{hoveredTarget.signal.signalName}</div>
                                <div className='trainTooltip-subtitle'>{hoveredTarget.signal.isSignalABS ? 'ABS-Signal' : 'Station-Signal'}</div>
                            </>
                        )}
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className='srto-canvas'
                    onAuxClick={(event) => {
                        if (event.button === 1) {
                            event.preventDefault()
                        }
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
            <div className="infoContainer">
                <div className="trainsCounter">{trainsCounter()}</div>
                <div className="stationsCounter">{stationsCounter()}</div>
                <div className="canvasWorldCoordinates">
                    MousePos:
                    {mouseWorldPos
                        ? ` [x: ${mouseWorldPos.x} | y: ${mouseWorldPos.y}]`
                        : ' [x: - | y: -]'}
                </div>
                {/* <div>{`ViewRef - X:${viewRef.current.panX.toFixed(0)} Y: ${viewRef.current.panY.toFixed(0)} Zoom: ${viewRef.current.zoom.toFixed(2)}`}</div> */}
                <div className="svgCoordinates">
                    Extended view: {SRTO_OPTIONS.allowExtendedView ? 'ON' : 'OFF'}
                </div>
                {inDev &&
                    <>
                        <div className="devInfo">
                            <div className="tracksCount">{`Track Count: ${TRACK_DATA.length}`}</div>
                            <div className="signalCount">{`SignalCount: ${SIGNAL_DATA.length}`}</div>
                            <div className="nodesCount">{`Nodes Count: ${NODE_DATA.length}`}</div>
                        </div>
                    </>
                }
                <div className='versionInfo'>{`SRTO-Version: ${appVersion}`}</div>
            </div>
        </>
    )
}