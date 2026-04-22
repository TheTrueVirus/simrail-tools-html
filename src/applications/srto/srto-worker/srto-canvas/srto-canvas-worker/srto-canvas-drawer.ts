import { SimRailDataTypes } from "../../../../../types/simrail-data-types";
import { SRTO_DataTypes } from "../../srto-data/srto-dataTypes";

export const TRAIN_BASE_PATH: Record<'left' | 'right', Path2D> = {
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

export const SIGNAL_BASE_PATH: Record<'left' | 'right', Path2D> = {
    left: (() => {
        const p = new Path2D();
        p.moveTo(2, 0);
        p.lineTo(8, 5);
        p.lineTo(8, -5);
        p.closePath();
        return p;
    })(),
    right: (() => {
        const p = new Path2D();
        p.moveTo(-2, 0);
        p.lineTo(-8, 5);
        p.lineTo(-8, -5);
        p.closePath();
        return p;
    })()
}

export const DiffAreaIcon: Path2D = (() => {
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

export const DispatchingPost: Record<'relay' | 'computer', Path2D> = {
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

        ctx.lineJoin = 'bevel'
        const defaultSignalColor = 'gray'

        // Build a per-frame lookup to avoid O(signals * trains) scans.
        const signalColorByName = new Map<string, 'lime' | 'orange' | 'red'>()
        for (const train of train_data) {
            const signalName = train.TrainData.SignalInFront?.split('@')[0]
            if (!signalName) continue

            const nextColor: 'lime' | 'orange' | 'red' = train.TrainData.SignalInFrontSpeed === 0 ? 'red' : train.TrainData.SignalInFrontSpeed < 100 ? 'orange' : 'lime'
            const currentColor = signalColorByName.get(signalName)

            // If multiple trains point to the same signal, keep red as highest priority.
            if (!currentColor || currentColor !== 'red') {
                signalColorByName.set(signalName, nextColor)
            }
        }

        for (const signal of signal_data) {
            const sx = Number(signal.signalPos.x)
            const sy = Number(signal.signalPos.y)
            const signalColor = signalColorByName.get(signal.signalName) ?? defaultSignalColor

            const signalPath = SIGNAL_BASE_PATH[signal.signalDirectionOnMap]
            ctx.save();
            ctx.translate(sx, sy);
            ctx.lineWidth = 2;
            ctx.strokeStyle = signalColor;
            ctx.fillStyle = signalColor;
            ctx.fill(signalPath);
            ctx.stroke(signalPath);
            ctx.restore();
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

        for(const node of node_data) {

            const { x, y } = node.nodePos
            switch (node.nodeType) {
                case 'trackMarker':
                    ctx.textAlign = 'center'
                    ctx.font = '12px monospace'
                    ctx.textBaseline = 'middle'
                    const metrics = ctx.measureText(node.text ?? 'n.t.')
                    const rectHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
                    
                    ctx.fillStyle = 'black'
                    ctx.fillRect(x - (metrics.width / 2) - 1, y - 3, metrics.width + 2, rectHeight)
                    
                    ctx.fillStyle = 'white'
                    ctx.fillText(node.text ?? 'n.t.', x, y+0.5)
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

                    ctx.fillStyle = 'rgb(255, 200, 0)'
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
                    ctx.textAlign = 'left'
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
        }
    }

    export function drawTrains(
        train_data: SimRailDataTypes.FilteredTrainList[],
        signal_data: SRTO_DataTypes.SIGNAL[],
        ctx: CanvasRenderingContext2D
    ) {
        if(!ctx) return;
        if(!train_data) return;
        if(!signal_data) return;
 
        for(const train of train_data) {

            const isTrainOnSignal = signal_data.find((signal) => signal.signalName === train.TrainData.SignalInFront?.split('@')[0])

            if (!isTrainOnSignal) continue;

            const tx = Number(isTrainOnSignal.trainPos.x)
            const ty = Number(isTrainOnSignal.trainPos.y)

            const trainColors = () => {
                const isTrainControlledByPlayer = train.ControlledBy === 'user'

                return {
                    outlineColor: isTrainControlledByPlayer ? 'rgb(0, 128, 255)' : 'gray',
                    fillColor: 'black',
                    textColor: isTrainControlledByPlayer ? 'rgb(0, 255, 255)' : 'white'
                }
            }


            const baseTrain = TRAIN_BASE_PATH[isTrainOnSignal.signalDirectionOnMap]
            ctx.save();
            ctx.translate(tx, ty);
            ctx.fillStyle = trainColors().fillColor
            ctx.lineJoin = 'miter'
            ctx.lineWidth = 4
            ctx.strokeStyle = trainColors().outlineColor
            ctx.stroke(baseTrain);
            ctx.fill(baseTrain);
            ctx.restore();

            switch (isTrainOnSignal.signalDirectionOnMap) {
                case 'left':
                    ctx.font = 'bold 14px monospace'
                    ctx.fillStyle = trainColors().textColor
                    ctx.textAlign = 'center'
                    ctx.fillText(train.TrainNoLocal, tx + 26, ty + 1);
                    break;
                case 'right':
                    ctx.font = 'bold 14px monospace'
                    ctx.fillStyle = trainColors().textColor
                    ctx.textAlign = 'center'
                    ctx.fillText(train.TrainNoLocal, tx - 26, ty + 1);
                    break;
            }
        }
    }

    export function drawGhostTrains(
        signal_data: SRTO_DataTypes.SIGNAL[],
        ctx: CanvasRenderingContext2D
    ) {
        for(const signal of signal_data) {

            const baseTrain = TRAIN_BASE_PATH[signal.signalDirectionOnMap]

            const tc = () => {
                return {
                    x: Number(signal.trainPos.x),
                    y: Number(signal.trainPos.y)
                }
            }
            ctx.save();
            ctx.fillStyle = 'rgba(54, 154, 151, 0.3)'
            ctx.strokeStyle = 'rgba(78, 193, 255, 0.4)'
            // ctx.lineWidth = 1.5
            ctx.translate(tc().x, tc().y)
            ctx.stroke(baseTrain);
            ctx.fill(baseTrain)
            ctx.restore();
        }
    }
}
