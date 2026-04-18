import React, { useRef, useEffect, useState } from 'react'
import './srto-canvas.css'
import { AreaProps } from '../srto';
import { SimRailDataTypes } from '../../../types/simrail-data-types';
import { SRTO_Tracks } from './srto-data/srto-trackData';
import { SRTO_Nodes } from './srto-data/srto-nodeData';
import { SRTO_Signals } from './srto-data/srto-signalData';
import { SRTO_DataTypes } from './srto-data/srto-dataTypes';
const inDev = process.env.NODE_ENV === 'development'
const CANVAS_WORLD_WIDTH = 2560
const CANVAS_WORLD_HEIGHT = 2000
const MIN_ZOOM_FIT = 1
const MIN_ZOOM_EXTENDED = 0.25
const MAX_ZOOM = 4

interface ISelfProps {
    SRTOCanvasProps: {
        trainList: SimRailDataTypes.FilteredTrainList[],
        stationList: SimRailDataTypes.StationData[]
        selectedArea: AreaProps
        isShowLongStationNames: boolean
        isShowTestTrains: boolean
        setShowTestTrains: React.Dispatch<React.SetStateAction<boolean>>
        allowExtendedView: boolean
        setAllowExtendedView: React.Dispatch<React.SetStateAction<boolean>>
    }
}

const TRAIN_BASE_PATH: Record<'left' | 'right', Path2D> = {
    'left': (() => {
        const p = new Path2D();
        p.moveTo(0, 0);
        p.lineTo(4, 7);
        p.lineTo(50, 7);
        p.lineTo(50, -7);
        p.lineTo(4, -7);
        p.closePath();
        return p;
    })(),
    'right': (() => {
        const p = new Path2D();
        p.moveTo(0, 0);
        p.lineTo(-4, 7)
        p.lineTo(-50, 7)
        p.lineTo(-50, -7)
        p.lineTo(-4, -7)
        p.closePath();
        return p;
    })()
}

const DiffAreaIcon: Path2D = (() => {
    const p = new Path2D();
    p.moveTo(0, 0);
    p.lineTo(20, 0);

    p.moveTo(0, -5);
    p.lineTo(20, -5);

    p.moveTo(7, -5);
    p.lineTo(14, -10);
    p.lineTo(20, -10);
    return p;
})()

const DispatchingPost: Record<'relay' | 'computer', Path2D> = {
    'relay': (() => {
        let p = new Path2D(`
M24 0 L30 5 M16 0 L30 10 M8 0 L30 15 M0 0 L30 20 M0 5 L22 20 M0 10 L14 20 M0 15 L6 20
M24 20 L30 15M16 20 L30 10 M8 20 L30 5 M0 20 L30 0 M0 15 L22 0 M0 10 L14 0 M0 5 L6 0
`);
        p.rect(-2, -2, 34, 24);
        p.rect(0, 0, 30, 20);
        return p;
    })(),
    'computer': (() => {
        const p = new Path2D();
        p.rect(-2, -2, 34, 24);
        p.rect(0, 0, 30, 20);
        return p;
    })()
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

export namespace CanvasDrawer {

    export function drawTracks(
        track_data: SRTO_DataTypes.TRACK[],
        ctx: CanvasRenderingContext2D,
        trackPathCache: WeakMap<SRTO_DataTypes.TRACK, Path2D>
    ) {

        if (!track_data) return;
        if (!ctx) return;

        ctx.lineWidth = 2.5
        ctx.lineCap = 'butt'
        ctx.lineJoin = 'bevel'

        for (const track of track_data) {
            if (track.trackColor === 'none') continue;

            let path = trackPathCache.get(track)
            if (!path) {
                path = new Path2D(track.trackSVG)
                trackPathCache.set(track, path)
            }

            ctx.strokeStyle = track.trackColor || 'white'
            ctx.stroke(path)
        }


    }

    export function drawSignals(
        signal_data: SRTO_DataTypes.SIGNAL[],
        train_data: SimRailDataTypes.FilteredTrainList[],
        ctx: CanvasRenderingContext2D,
    ) {

        if (!signal_data) return;
        if (!train_data) return;
        if (!ctx) return;

        ctx.lineWidth = 2
        ctx.lineJoin = 'bevel'
        const defaultSignalColor = 'gray'

        for (const signal of signal_data) {
            const signalCoords = () => {
                return {
                    sx: Number(signal.signalPos.x),
                    sy: Number(signal.signalPos.y)
                }
            }
            const { sx, sy } = signalCoords()
            ctx.beginPath();
            switch (signal.signalDirectionOnMap) {
                case 'left':
                    ctx.moveTo(sx + 2, sy)
                    ctx.lineTo(sx + 8, sy + 5)
                    ctx.lineTo(sx + 8, sy - 5)
                    ctx.closePath();
                    break;
                case 'right':
                    ctx.moveTo(sx - 2, sy)
                    ctx.lineTo(sx - 8, sy + 5)
                    ctx.lineTo(sx - 8, sy - 5)
                    ctx.closePath();
                    break;
                default:
                    break;
            }

            const signalColor = () => {

                const hasTrainSignal = train_data.find((train) => train.TrainData.SignalInFront?.split('@')[0] === signal.signalName)

                if (hasTrainSignal) return hasTrainSignal.TrainData.SignalInFrontSpeed > 0 ? 'lime' : 'red'

                return defaultSignalColor
            }

            ctx.strokeStyle = signalColor();
            ctx.fillStyle = signalColor();
            ctx.fill();
            ctx.stroke();
        }
    }

    export function drawNotations(
        node_data: SRTO_DataTypes.NODE[],
        station_data: SimRailDataTypes.StationData[],
        ctx: CanvasRenderingContext2D,
        isShowLongStationNames: boolean
    ) {
        if (!node_data) return;
        if (!station_data) return;
        if (!ctx) return;

        node_data.map((node) => {

            const { x, y } = node.nodePos
            switch (node.nodeType) {
                case 'trackMarker':

                    const metrics = ctx.measureText(node.text ?? 'n.t.')

                    ctx.fillStyle = 'black'
                    const rectHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
                    ctx.fillRect(x - (metrics.width / 2) - 1, y - 4, metrics.width + 2, rectHeight)


                    ctx.textAlign = 'center'
                    ctx.font = '10px monospace'
                    ctx.fillStyle = 'white'
                    ctx.textBaseline = 'middle'
                    ctx.fillText(node.text ?? 'n.t.', x, y)
                    break;
                case 'platform':

                    ctx.font = '8px monospace'

                    ctx.fillStyle = 'rgb(255, 180, 80)'
                    ctx.fillRect(x, y, node.width ?? 0, node.height ?? 0)

                    ctx.fillStyle = 'black'
                    ctx.fillText(node.text ?? '', x + (node.width ? node.width / 2 : 0), y + (node.height ? node.height / 2 : 0) + 1)
                    break;
                case 'stationName':

                    ctx.textBaseline = 'middle'
                    ctx.font = 'bold 18px monospace'

                    const displayedStationName = (!isShowLongStationNames ? node.stationName : node.stationPrefix) ?? 'No Name'

                    ctx.fillStyle = 'rgb(255, 220, 100)'
                    ctx.fillText(displayedStationName, x, y)

                    const underlineColor = () => {
                        const getStation = station_data.find((station) => station.Prefix === node.stationPrefix)
                        if (!getStation) return 'gray'
                        return getStation.DispatchedBy.length < 1 ? 'lime' : 'red'
                    }

                    ctx.fillStyle = underlineColor()
                    ctx.fillText('_'.repeat(displayedStationName.length), x, y + 2)
                    break;
                case 'simpleText':

                    ctx.fillStyle = node.textColor ?? 'white'
                    ctx.font = `${node.textSize ?? 10}px monospace`
                    ctx.textAlign = 'center'

                    ctx.fillText(node.text ?? '', x, y)
                    break;
                case 'differentScreenMarker':

                    const icon = DiffAreaIcon;
                    ctx.save();
                    ctx.translate(x, y)
                    ctx.strokeStyle = 'rgb(0, 150, 200)'
                    ctx.stroke(icon)
                    ctx.restore();
                    ctx.font = 'bold 16px monospace'
                    ctx.fillStyle = 'white'
                    ctx.fillText(node.text ?? '', x + 30, y - 1)


                    break;
                case 'trackBreakMarker':

                    const bm = () => {
                        return {
                            1: {
                                x: node.breakMarker?.firstMarker.x ?? 0,
                                y: node.breakMarker?.firstMarker.y ?? 0
                            },
                            2: {
                                x: node.breakMarker?.secondMarker.x ?? 0,
                                y: node.breakMarker?.secondMarker.y ?? 0
                            },
                        }
                    }
                    ctx.fillStyle = 'rgb(160, 0, 120)'
                    ctx.font = 'bold 18px monospace'
                    ctx.textAlign = 'center'

                    ctx.fillText(`[${node.text ?? '?'}]`, bm()[1].x, bm()[1].y)
                    ctx.fillText(`[${node.text ?? '?'}]`, bm()[2].x, bm()[2].y)



                    break;
                case 'dispatchingPost':

                    const post = DispatchingPost[node.postType ?? 'computer'];
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.lineWidth = 1
                    ctx.strokeStyle = 'white';
                    ctx.stroke(post);
                    ctx.restore();
                    ctx.fillStyle = 'white';
                    ctx.strokeStyle = 'black';
                    ctx.lineWidth = 5;
                    ctx.strokeRect(x + 7, y + 4, 16, 3);
                    ctx.fillRect(x + 7, y + 4, 16, 3);
                    ctx.beginPath();
                    ctx.lineWidth = 1.5;
                    ctx.arc(x + 15, y + 14, 3, 0, 2 * Math.PI)
                    ctx.fill()
                    ctx.stroke();
                    break;
            }
        })
    }

    export function drawTrains(
        train_data: SimRailDataTypes.FilteredTrainList[],
        signal_data: SRTO_DataTypes.SIGNAL[],
        ctx: CanvasRenderingContext2D
    ) {

        train_data.map((train) => {

            const isTrainOnSignal = signal_data.find((signal) => signal.signalName === train.TrainData.SignalInFront?.split('@')[0])

            if (!isTrainOnSignal) return;

            const tx = Number(isTrainOnSignal.trainPos.x)
            const ty = Number(isTrainOnSignal.trainPos.y)

            ctx.lineJoin = 'miter'
            ctx.lineWidth = 4
            ctx.strokeStyle = 'skyblue'

            const baseTrain = TRAIN_BASE_PATH[isTrainOnSignal.signalDirectionOnMap]
            ctx.save();
            ctx.translate(tx, ty);
            ctx.fillStyle = 'black'
            ctx.strokeStyle = 'skyblue'
            ctx.stroke(baseTrain);
            ctx.fill(baseTrain);
            ctx.restore();

            switch (isTrainOnSignal.signalDirectionOnMap) {
                case 'left':
                    ctx.font = 'bold 14px monospace'
                    ctx.fillStyle = 'white'
                    ctx.textAlign = 'center'
                    ctx.fillText(train.TrainNoLocal, tx + 26, ty + 1);
                    break;
                case 'right':
                    ctx.font = 'bold 14px monospace'
                    ctx.fillStyle = 'white'
                    ctx.textAlign = 'center'
                    ctx.fillText(train.TrainNoLocal, tx - 26, ty + 1);
                    break;
            }

        })


    }

    export function drawGhostTrains(
        signal_data: SRTO_DataTypes.SIGNAL[],
        ctx: CanvasRenderingContext2D
    ) {
        signal_data.map((signal) => {

            const baseTrain = TRAIN_BASE_PATH[signal.signalDirectionOnMap]

            const tc = () => {
                return {
                    x: Number(signal.trainPos.x),
                    y: Number(signal.trainPos.y)
                }
            }

            ctx.save();
            ctx.fillStyle = 'rgba(87, 255, 249, 0.3)'
            ctx.strokeStyle = 'rgba(100, 201, 255, 0.6)'
            ctx.translate(tc().x, tc().y)
            ctx.stroke(baseTrain);
            ctx.fill(baseTrain)
            ctx.restore();
        })
    }
}

export default function SRTO_Canvas({ SRTOCanvasProps }: ISelfProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trackPathCacheRef = useRef(new WeakMap<SRTO_DataTypes.TRACK, Path2D>());
    const viewRef = useRef({ zoom: 1, panX: 0, panY: 0 })
    const dragRef = useRef({ isDragging: false, lastX: 0, lastY: 0 })
    const rafRef = useRef<number | null>(null)
    const canvasSizeRef = useRef({ width: 0, height: 0, dpr: 0 })
    const [mouseWorldPos, setMouseWorldPos] = useState<{ x: number, y: number } | null>(null)
    const minZoom = SRTOCanvasProps.allowExtendedView ? MIN_ZOOM_EXTENDED : MIN_ZOOM_FIT

    const { TRACK_DATA, SIGNAL_DATA, NODE_DATA } = loadDataFromFile(SRTOCanvasProps.selectedArea);

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
    }, [TRACK_DATA, SIGNAL_DATA, NODE_DATA, SRTOCanvasProps.allowExtendedView, SRTOCanvasProps.trainList])

    const clampViewToBounds = (rect: DOMRect) => {
        if (SRTOCanvasProps.allowExtendedView) return

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
        CanvasDrawer.drawTracks(TRACK_DATA, ctx, trackPathCacheRef.current);
        if (!SIGNAL_DATA) return;
        CanvasDrawer.drawSignals(SIGNAL_DATA, SRTOCanvasProps.trainList, ctx);
        if (!NODE_DATA || !SRTOCanvasProps.stationList) return;
        CanvasDrawer.drawNotations(NODE_DATA, SRTOCanvasProps.stationList, ctx, SRTOCanvasProps.isShowLongStationNames);
        if (!SRTOCanvasProps.trainList) return;
        if (inDev) {
            if (SRTOCanvasProps.isShowTestTrains) {
                CanvasDrawer.drawGhostTrains(SIGNAL_DATA, ctx);
            } else {
                CanvasDrawer.drawTrains(SRTOCanvasProps.trainList, SIGNAL_DATA, ctx)
            }
        } else {
            CanvasDrawer.drawTrains(SRTOCanvasProps.trainList, SIGNAL_DATA, ctx)
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

        const zoomFactor = event.deltaY < 0 ? 1.2 : 0.8
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
    }

    function trainsCounter() {

        const trainsControlledByPlayers = SRTOCanvasProps.trainList.filter((train) => train.ControlledBy === 'user').length
        const allTrainsCount = SRTOCanvasProps.trainList.length;
        return `Trains: ${trainsControlledByPlayers}/${allTrainsCount}`
    }

    function stationsCounter() {
        const stationsControlledByPlayers = SRTOCanvasProps.stationList.filter((station) => station.DispatchedBy.length > 0).length
        const allStationsCount = SRTOCanvasProps.stationList.length

        return `Stations: ${stationsControlledByPlayers}/${allStationsCount}`
    }

    return (
        <>
            <div className='srtoCanvasContainer'>
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
                    {mouseWorldPos
                        ? `[x: ${mouseWorldPos.x} | y: ${mouseWorldPos.y}]`
                        : '[x: - | y: -]'}
                </div>
                <div className="svgCoordinates">
                    Extended view: {SRTOCanvasProps.allowExtendedView ? 'ON' : 'OFF'}
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
            </div>
        </>
    )
}