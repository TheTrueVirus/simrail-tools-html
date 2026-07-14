import { useRef, useEffect, useLayoutEffect, useMemo, useState, SetStateAction } from 'react'
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
import { getNextSignalFromLastSignal } from '../srto-data/srto-nextSignalList';
const inDev = process.env.NODE_ENV === 'development'

interface ISelfProps {
    DATA: {
        trainList: SimRailDataTypes.FilteredTrainList[]
        lastSignalMapRef: React.RefObject<Map<string, string>>
        stationList: SimRailDataTypes.StationData[]
        steamUserList: Map<string, SimRailDataTypes.SteamUser>
    }
    CONSTANTS: {
        CURRENT_VERSION: string | undefined
        FORUM_LINK: string
        GITHUB_REPO_LINK: string
        GITHUB_PAGE_LINK: string
    }
    OPTIONS: {
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
    const trackPathCacheRef = useRef(new WeakMap<SRTO_DataTypes.TRACK_NODE, Path2D>());
    const viewRef = useRef({ zoom: 1, panX: 0, panY: 0 })
    const dragRef = useRef({ isDragging: false, lastX: 0, lastY: 0 })
    const rafRef = useRef<number | null>(null)
    const canvasSizeRef = useRef({ width: 0, height: 0, dpr: 0 })
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const { width: WORLD_W, height: WORLD_H } = SCREEN_DIMENSIONS[OPTIONS.userOptions.selectedArea.areaID];
    const canvasSettings = {
        CANVAS_WORLD_WIDTH: WORLD_W,
        CANVAS_WORLD_HEIGHT: WORLD_H,
        MIN_ZOOM_FIT: 1,
        MIN_ZOOM_EXTENDED: 0.25,
        MAX_ZOOM: 5,
        TOOLTIP_MARGIN: 30,
        TOOLTIP_OFFSET: 16,
    }

    const [showDevMenu, toggleDevMenu] = useState<boolean>(false);

    const allowExtendedViewRef = useRef(OPTIONS.userOptions.allowExtendedView);
    const minZoomRef = useRef(canvasSettings.MIN_ZOOM_FIT)
    useEffect(() => {
        allowExtendedViewRef.current = OPTIONS.userOptions.allowExtendedView
        minZoomRef.current = OPTIONS.userOptions.allowExtendedView ? canvasSettings.MIN_ZOOM_EXTENDED : canvasSettings.MIN_ZOOM_FIT
    }, [OPTIONS.userOptions.allowExtendedView])
    const signalDataRef = useRef<SRTO_DataTypes.SIGNAL[]>(null);
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

    useEffect(() => {
        viewRef.current.zoom = 1
        viewRef.current.panX = 0
        viewRef.current.panY = 0
    }, [OPTIONS.userOptions.selectedArea])

    const signalsByName = useMemo(() => {
        const map = new Map<string | null, SRTO_DataTypes.SIGNAL[]>()
        for (const sectionid in SIGNAL_DATA) {
            for(const signal of SIGNAL_DATA[sectionid]) {
                const mapKey = signal.signalName;
                const list = map.get(mapKey);
                if (list) {
                    list.push(signal)
                } else {
                    map.set(mapKey, [signal])
                }
            }
        }
        return map
    }, [SIGNAL_DATA])

    const trainHoverEntries = useMemo(() => {
        return DATA.trainList
            .flatMap((train) => {
                const signalName = train.TrainData.SignalInFront?.split('@')[0] ?? getNextSignalFromLastSignal(DATA.lastSignalMapRef.current.get(train.TrainNoLocal))
                if (!signalName) return []

                const signals = signalsByName.get(signalName) ?? []
                return signals.map((signal) => ({ train, signal }))
            })
            .filter((entry): entry is { train: SimRailDataTypes.FilteredTrainList, signal: SRTO_DataTypes.SIGNAL } => entry !== null)
    }, [DATA.trainList, signalsByName])

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

        const aboveTop = hoveredTarget.screenY - tooltipHeight + (25 / viewRef.current.zoom)
        const belowTop = hoveredTarget.screenY + canvasSettings.TOOLTIP_OFFSET + 45
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
        screenData,
        OPTIONS.userOptions,
        DATA.trainList,
    ])

    function drawCanvas() {
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

        ctx.fillStyle = 'rgb(0, 0, 0)'
        ctx.fillRect(0, 0, rect.width, rect.height)

        // Base scale always fits world width (2560) into current viewport width.
        const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH
        const { zoom, panX, panY } = viewRef.current

        ctx.save()
        ctx.translate(panX, panY)
        ctx.scale(fitScale * zoom, fitScale * zoom)

        if (OPTIONS.userOptions.flipScreen) {
            ctx.scale(-1, -1);
            ctx.translate(-canvasSettings.CANVAS_WORLD_WIDTH, -canvasSettings.CANVAS_WORLD_HEIGHT)
        }


        if (!screenData) return;
        if (OPTIONS.devRenderOptions.renderTracks)
            CanvasDrawer.drawTracks(screenData, ctx, trackPathCacheRef.current);
        if (OPTIONS.devRenderOptions.renderSignals)
            CanvasDrawer.drawSignals(screenData, DATA.trainList, ctx, { ...DATA, ...CONSTANTS, ...OPTIONS });

        if (!DATA.stationList) return;
        if (OPTIONS.devRenderOptions.renderNodes)
            CanvasDrawer.drawNotations(screenData, ctx, { ...DATA, ...CONSTANTS, ...OPTIONS }, canvasSettings);
        if (!DATA.trainList) return;
        if (inDev) {
            if (OPTIONS.devRenderOptions.renderGhostTrains) {
                CanvasDrawer.drawTrains(screenData, ctx, { ...DATA, ...CONSTANTS, ...OPTIONS })
                CanvasDrawer.drawGhostTrains(screenData, ctx);
            } else {
                if (OPTIONS.devRenderOptions.renderTrains)
                    CanvasDrawer.drawTrains(screenData, ctx, { ...DATA, ...CONSTANTS, ...OPTIONS })
            }
        } else {
            if (OPTIONS.devRenderOptions.renderTrains)
                CanvasDrawer.drawTrains(screenData, ctx, { ...DATA, ...CONSTANTS, ...OPTIONS })
        }
        ctx.restore()
    }

    function scheduleDraw() {
        if (rafRef.current !== null) return

        rafRef.current = window.requestAnimationFrame(() => {
            rafRef.current = null
            drawCanvas()
        })
    }

    const CanvasEventHandler = createCanvasEventHandler({
        REFS: {
            canvasRef,
            viewRef,
            dragRef,
            signalDataRef,
            minZoomRef,
            mouseWorldPosRef,
            hoveredTargetRef,
        },
        FUNCS: {
            scheduleDraw,
            setMouseWorldPos,
            setHoveredTarget,
        },
        SRTO_PROPS: { DATA, CONSTANTS, OPTIONS, canvasSettings, trainHoverEntries }
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
                                    <div className='tooltip-traindata-nextSignal'>{`${hoveredTarget.train.TrainData.DistanceToSignalInFront !== 0 ? `Next Signal: ${hoveredTarget.signal.signalName.split('@')[0]} [${hoveredTarget.train.TrainData.DistanceToSignalInFront > 1000 ? `${(hoveredTarget.train.TrainData.DistanceToSignalInFront / 1000).toFixed(1)} km` : `${(hoveredTarget.train.TrainData.DistanceToSignalInFront).toFixed(1)} m`}]` : 'Next Signal: > 5 km'}`}</div>
                                    <div className='tooltip-traindata-nextSignalSpeed'>Speed on Next Signal: {hoveredTarget.train.TrainData.SignalInFrontSpeed > 160 ? 'vMax' : `${hoveredTarget.train.TrainData.SignalInFrontSpeed} km/h`}</div>
                                    {/* <div className='tooltip-control'>{hoveredTarget.train.ControlledBy === 'user' ? getUsername(hoveredTarget.train.TrainData.ControlledBySteamID) : 'Bot'}</div> */}
                                    <div className='tooltip-control'>{hoveredTarget.train.TrainData.ControlledBySteamID !== null ? `User: ${(DATA.steamUserList.get(hoveredTarget.train.TrainData.ControlledBySteamID)?.personaname ?? 'Unknown Player')}` : 'Bot'}</div>
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
                                    <div className='trainTooltip-subtitle'>{hoveredTarget.signal.isSignalABS ?? hoveredTarget.signal.signalType?.split('-')[0].split('_')[0] === 'abs' ? 'ABS-Signal' : 'Station-Signal'}</div>
                                </div>
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
            {inDev &&
                <div className={`devInfoContainer ${showDevMenu ? 'devInfoVisible' : 'devInfoHidden'}`} onClick={() => toggleDevMenu(!showDevMenu)}>
                    <div className='devInfo-title'>DEV INFO</div>
                    <div className="devInfoBox">
                        <div className='devInfo-title'>SRTO-DATA Info:</div>
                        <div className="tracksCount">{`Track Count: ${(() => { let v = 0; for (const nodeid in screenData) { v = v + screenData[nodeid].TRACKS.length }; return v.toString() })()}`}</div>
                        <div className="signalCount">{`Signal Count: ${(() => { let v = 0; for (const nodeid in screenData) { v = v + screenData[nodeid].SIGNALS.length }; return v.toString() })()}`}</div>
                        <div className="nodesCount">{`Nodes Count: ${(() => { let v = 0; for (const nodeid in screenData) { v = v + screenData[nodeid].NODES.length }; return v.toString() })()}`}</div>
                    </div>
                    <div className='devInfo-statesContainer'>
                        <div className='devInfo-title'>States Info:</div>
                        <div className='devInfo-stateRef'>{`Is Canvas: ${canvasRef ? 'Yes' : 'No'}`}</div>
                        {mouseWorldPos
                            ? <div className='devInfo-stateRef'>{`Mouse: [ ${Object.entries(mouseWorldPos).map(([key, value]) => { return ` ${key}: ${value.toFixed(1)}` })} ]`}</div>
                            : <div className='devInfo-stateRef'>{`Mouse: [ x: - , y: - ]`}</div>
                        }
                        <div className='devInfo-stateRef'>{`viewRef: ${Object.entries(viewRef.current).map(([key, value]) => { return `${key}: ${value.toFixed(1)} ` })}`}</div>
                        <div className='devInfo-stateRef'>{`dragRef: ${Object.entries(dragRef.current).map(([key, value]) => { return `${key}: ${value} ` })}`}</div>
                        <div className='devInfo-stateRef'>{`dragRef: ${Object.entries(canvasSizeRef.current).map(([key, value]) => { return `${key}: ${value} ` })}`}</div>
                    </div>
                </div>
            }
        </>
    )
}