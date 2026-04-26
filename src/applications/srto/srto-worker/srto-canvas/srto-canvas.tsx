import { useRef, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import './srto-canvas.css'
import { AreaProps, RenderOptionsProps, USER_OPTIONS } from '../../srto';
import { SimRailDataTypes } from '../../../../types/simrail-data-types';
import { SRTO_Tracks } from '../srto-data/srto-trackData';
import { SRTO_Nodes } from '../srto-data/srto-nodeData';
import { SRTO_Signals } from '../srto-data/srto-signalData';
import { SRTO_DataTypes } from '../srto-data/srto-dataTypes';
import { CanvasDrawer } from './srto-canvas-worker/srto-canvas-drawer';
import { createCanvasEventHandler } from './srto-canvas-worker/srto-canvas-eventHandler';
import HoverToolTipSignal from './tooltip-signal';
const inDev = process.env.NODE_ENV === 'development'
const appVersion = process.env.REACT_APP_VERSION || 'dev'

const canvasSettings = {
    CANVAS_WORLD_WIDTH: 2560,
    CANVAS_WORLD_HEIGHT: 3000,
    MIN_ZOOM_FIT: 1,
    MIN_ZOOM_EXTENDED: 0.25,
    MAX_ZOOM: 4,
    TOOLTIP_MARGIN: 10,
    TOOLTIP_OFFSET: 12,
}

interface ISelfProps {
    SRTO_PROPS: {
        trainList: SimRailDataTypes.FilteredTrainList[],
        stationList: SimRailDataTypes.StationData[]
        userOptions: typeof USER_OPTIONS
        devRenderOptions: RenderOptionsProps
    }
}

export type HoveredTargetType = 
    { type: 'train', train: SimRailDataTypes.FilteredTrainList, signal: SRTO_DataTypes.SIGNAL, screenX: number, screenY: number } |
    { type: 'signal', signal: SRTO_DataTypes.SIGNAL, screenX: number, screenY: number } |
    null



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

export default function SRTO_Canvas({ SRTO_PROPS }: ISelfProps) {

    const { TRACK_DATA, SIGNAL_DATA, NODE_DATA } = loadDataFromFile(SRTO_PROPS.userOptions.selectedArea);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trackPathCacheRef = useRef(new WeakMap<SRTO_DataTypes.TRACK, Path2D>());
    const viewRef = useRef({ zoom: 1, panX: 0, panY: 0 })
    const dragRef = useRef({ isDragging: false, lastX: 0, lastY: 0 })
    const rafRef = useRef<number | null>(null)
    const canvasSizeRef = useRef({ width: 0, height: 0, dpr: 0 })
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const allowExtendedViewRef = useRef(SRTO_PROPS.userOptions.allowExtendedView);
    const minZoomRef = useRef(canvasSettings.MIN_ZOOM_FIT)
    useEffect(() => {
        allowExtendedViewRef.current = SRTO_PROPS.userOptions.allowExtendedView
        minZoomRef.current = SRTO_PROPS.userOptions.allowExtendedView ? canvasSettings.MIN_ZOOM_EXTENDED : canvasSettings.MIN_ZOOM_FIT
    }, [SRTO_PROPS.userOptions.allowExtendedView])
    const signalDataRef = useRef(SIGNAL_DATA);
    useEffect(() => {
        signalDataRef.current = SIGNAL_DATA;
    }, [SIGNAL_DATA])

    const [mouseWorldPos, setMouseWorldPos] = useState<{ x: number, y: number } | null>(null)
    const mouseWorldPosRef = useRef(mouseWorldPos);
    useEffect(() => {
        mouseWorldPosRef.current = mouseWorldPos
    }, [mouseWorldPos])
    const [hoveredTarget, setHoveredTarget] = useState<HoveredTargetType>(null)
    const hoveredTargetRef = useRef(hoveredTarget)
    useEffect(() => {
        hoveredTargetRef.current = hoveredTarget
    }, [hoveredTarget])
    const [tooltipPosition, setTooltipPosition] = useState<{ left: number, top: number } | null>(null)


    const signalByName = useMemo(() => {
        const map = new Map<string, SRTO_DataTypes.SIGNAL>()
        for (const signal of SIGNAL_DATA) {
            map.set(signal.signalName, signal)
        }
        return map
    }, [SIGNAL_DATA])

    const trainHoverEntries = useMemo(() => {
        return SRTO_PROPS.trainList
            .map((train) => {
                const signalName = train.TrainData.SignalInFront?.split('@')[0]
                const signal = signalByName.get(signalName)
                return signal ? { train, signal } : null
            })
            .filter((entry): entry is { train: SimRailDataTypes.FilteredTrainList, signal: SRTO_DataTypes.SIGNAL } => entry !== null)
    }, [SRTO_PROPS.trainList, signalByName])

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
        const maxLeft = Math.max(canvasSettings.TOOLTIP_MARGIN, window.innerWidth - canvasSettings.TOOLTIP_MARGIN - tooltipWidth)
        const left = Math.min(maxLeft, Math.max(canvasSettings.TOOLTIP_MARGIN, desiredLeft))

        const aboveTop = hoveredTarget.screenY - tooltipHeight - canvasSettings.TOOLTIP_OFFSET
        const belowTop = hoveredTarget.screenY + canvasSettings.TOOLTIP_OFFSET + 14
        const top = aboveTop < canvasSettings.TOOLTIP_MARGIN ? belowTop : aboveTop

        setTooltipPosition({ left, top })
    }, [hoveredTarget])

    useEffect(() => {
        scheduleDraw()

        const handleResize = () => scheduleDraw()
        window.addEventListener('resize', handleResize)

        const canvas = canvasRef.current
        if (canvas) {
            canvas.addEventListener('wheel', CanvasEventHandler.handleWheel, { passive: false })
        }

        return () => {
            window.removeEventListener('resize', handleResize)

            if (canvas) {
                canvas.removeEventListener('wheel', CanvasEventHandler.handleWheel)
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
        SRTO_PROPS.userOptions.allowExtendedView,
        SRTO_PROPS.trainList,
        SRTO_PROPS.userOptions.shortStationNames,
    ])

    const drawCanvas = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const rect = canvas.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1

        CanvasEventHandler.clampViewToBounds(rect)

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
        const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH
        const { zoom, panX, panY } = viewRef.current

        ctx.save()
        ctx.translate(panX, panY)
        ctx.scale(fitScale * zoom, fitScale * zoom)

        if (!TRACK_DATA) return;
        if (SRTO_PROPS.devRenderOptions.renderTracks)
            CanvasDrawer.drawTracks(TRACK_DATA, ctx, trackPathCacheRef.current);
        if (!SIGNAL_DATA) return;
        if (SRTO_PROPS.devRenderOptions.renderSignals)
            CanvasDrawer.drawSignals(SIGNAL_DATA, SRTO_PROPS.trainList, ctx);
        if (!NODE_DATA || !SRTO_PROPS.stationList) return;
        if (SRTO_PROPS.devRenderOptions.renderNodes)
            CanvasDrawer.drawNotations(NODE_DATA, SRTO_PROPS.stationList, ctx, SRTO_PROPS.userOptions.shortStationNames);
        if (!SRTO_PROPS.trainList) return;
        if (inDev) {
            if (SRTO_PROPS.devRenderOptions.renderGhostTrains) {
                CanvasDrawer.drawGhostTrains(SIGNAL_DATA, ctx);
            } else {
                if (SRTO_PROPS.devRenderOptions.renderTrains)
                    CanvasDrawer.drawTrains(SRTO_PROPS.trainList, SIGNAL_DATA, ctx)
            }
        } else {
            if (SRTO_PROPS.devRenderOptions.renderTrains)
                CanvasDrawer.drawTrains(SRTO_PROPS.trainList, SIGNAL_DATA, ctx)
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

    function trainsCounter() {

        const trainsControlledByPlayers = SRTO_PROPS.trainList.filter((train) => train.ControlledBy === 'user').length
        const allTrainsCount = SRTO_PROPS.trainList.length;
        return `Trains: ${trainsControlledByPlayers}/${allTrainsCount}`
    }

    function stationsCounter() {
        const stationsControlledByPlayers = SRTO_PROPS.stationList.filter((station) => station.DispatchedBy.length > 0).length
        const allStationsCount = SRTO_PROPS.stationList.length

        return `Stations: ${stationsControlledByPlayers}/${allStationsCount}`
    }

    const CanvasEventHandler = createCanvasEventHandler({
        canvasRef,
        viewRef,
        dragRef,
        scheduleDraw,
        SRTO_PROPS,
        signalDataRef,
        canvasSettings,
        minZoomRef,
        mouseWorldPosRef,
        setMouseWorldPos,
        hoveredTargetRef,
        setHoveredTarget,
        trainHoverEntries
    })

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
                                <div className='tooltip-info'>
                                    <div className='tooltip-title'>{`${hoveredTarget.train.TrainNoLocal} | ${hoveredTarget.train.Type}`}</div>
                                    <div className='tooltip-vehicle'>Vehicle: {hoveredTarget.train.Vehicles[0].split('/')[1].split(':')[0]}</div>
                                    <div className='tooltip-route'>
                                        <div className='tooltip-route-title'>Route</div>
                                        <div className='tooltip-route-text'>{hoveredTarget.train.StartStation} → {hoveredTarget.train.EndStation}</div>
                                    </div>
                                    <div className='tooltip-traindata-speed'>Current Speed: {hoveredTarget.train.TrainData.Velocity.toFixed(0)} km/h</div>
                                    <div className='tooltip-traindata-nextSignal'>Next Signal: {hoveredTarget.train.TrainData.SignalInFront.split('@')[0]} [{hoveredTarget.train.TrainData.DistanceToSignalInFront > 1000 ? `${(hoveredTarget.train.TrainData.DistanceToSignalInFront / 1000).toFixed(1)} km` : `${hoveredTarget.train.TrainData.DistanceToSignalInFront.toFixed(1)} m`}]</div>
                                    <div className='tooltip-traindata-nextSignalSpeed'>Speed on Next Signal: {hoveredTarget.train.TrainData.SignalInFrontSpeed > 160 ? 'vMax' : `${hoveredTarget.train.TrainData.SignalInFrontSpeed} km/h`}</div>
                                    {/* <div className='tooltip-control'>{hoveredTarget.train.ControlledBy === 'user' ? getUsername(hoveredTarget.train.TrainData.ControlledBySteamID) : 'Bot'}</div> */}
                                    <div className='tooltip-control'>{hoveredTarget.train.ControlledBy === 'user' ? 'Player' : 'Bot'}</div>
                                </div>
                                <div className='trainTooltip-signalImage'>
                                    <HoverToolTipSignal hoveredTarget={hoveredTarget} />
                                </div>
                            </>
                        )}
                        {hoveredTarget.type === 'signal' && (
                            <>
                                <div>
                                <div className='trainTooltip-title'>{hoveredTarget.signal.signalName}</div>
                                <div className='trainTooltip-subtitle'>{hoveredTarget.signal.isSignalABS ? 'ABS-Signal' : 'Station-Signal'}</div>
                                </div>
                                <div></div>
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
                    onMouseDown={CanvasEventHandler.handleMouseDown}
                    onMouseMove={CanvasEventHandler.handleMouseMove}
                    onMouseUp={CanvasEventHandler.handleMouseUpOrLeave}
                    onMouseLeave={CanvasEventHandler.handleMouseLeave}
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
                    Extended view: {SRTO_PROPS.userOptions.allowExtendedView ? 'ON' : 'OFF'}
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