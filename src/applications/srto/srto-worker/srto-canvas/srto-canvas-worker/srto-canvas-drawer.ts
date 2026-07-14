import { SimRailDataTypes } from "../../../../../types/simrail-data-types";
import { RenderOptionsProps, USER_OPTIONS } from "../../../srto";
import { SRTO_DataTypes } from "../../srto-data/srto-dataTypes";
import { getNextSignalFromLastSignal } from "../../srto-data/srto-nextSignalList";

interface SRTO_PROPS {
    trainList: SimRailDataTypes.FilteredTrainList[]
    lastSignalMapRef: React.RefObject<Map<string, string>>
    stationList: SimRailDataTypes.StationData[]
    userOptions: typeof USER_OPTIONS
    devRenderOptions: RenderOptionsProps
}
interface CanvasSettingsProps {
    CANVAS_WORLD_WIDTH: number,
    CANVAS_WORLD_HEIGHT: number,
    MIN_ZOOM_FIT: number,
    MIN_ZOOM_EXTENDED: number,
    MAX_ZOOM: number,
    TOOLTIP_MARGIN: number,
    TOOLTIP_OFFSET: number,
}

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
        let p = new Path2D(`M0 0 L21 18 M7 0 L28 18 M14 0 L28 12 M21 0 L28 6 M0 6 L14 18 M0 12 L7 18 M0 18 L21 0 M7 18 L28 0 M14 18 L28 6 M21 18 L28 12 M0 12 L14 0 M0 6 L7 0`);
        p.rect(-2, -2, 32, 22);
        p.rect(0, 0, 28, 18);
        return p;
    })(),
    'computer': (() => {
        const p = new Path2D();
        p.rect(-2, -2, 32, 22);
        p.rect(0, 0, 28, 18);
        return p;
    })()
}

export namespace CanvasDrawer {

    export function drawTracks(
        screenData: SRTO_DataTypes.ScreenProps | null,
        ctx: CanvasRenderingContext2D,
        trackPathCache: WeakMap<SRTO_DataTypes.TRACK_NODE, Path2D>
    ) {
        if (!screenData) return;
        if (!ctx) return;

        ctx.lineWidth = 2.5
        ctx.lineCap = 'butt'
        ctx.lineJoin = 'bevel'

        for (const node in screenData) {
            for (const tracknode of screenData[node].TRACKS) {
                if (tracknode.trackColor === 'none') continue;

                let path = trackPathCache.get(tracknode)
                if (!path) {
                    path = new Path2D(tracknode.trackSVG)
                    trackPathCache.set(tracknode, path)
                }

                ctx.strokeStyle = tracknode.trackColor || 'white'
                ctx.stroke(path)
            }
        }
    }

    export function drawSignals(
        screenData: SRTO_DataTypes.ScreenProps | null,
        train_data: SimRailDataTypes.FilteredTrainList[],
        ctx: CanvasRenderingContext2D,
        SRTO_PROPS: SRTO_PROPS,
    ) {
        if (!screenData) return;
        if (!train_data) return;
        if (!ctx) return;

        ctx.lineJoin = 'bevel'
        const defaultSignalColor = 'gray'

        // Build a per-frame lookup to avoid O(signals * trains) scans.
        const signalColorByName = new Map<string, 'lime' | 'orange' | 'red'>()
        for (const train of train_data) {
            const signalName = train.TrainData.SignalInFront ?? train.TrainData.SignalInFrontPredictive ?? null
            if (!signalName) continue

            const nextColor: 'lime' | 'orange' | 'red' = train.TrainData.SignalInFrontSpeed === 0 ? 'red' : train.TrainData.SignalInFrontSpeed < 100 ? 'orange' : 'lime'
            const currentColor = signalColorByName.get(signalName)

            // If multiple trains point to the same signal, keep red as highest priority.
            if (!currentColor || currentColor !== 'red') {
                signalColorByName.set(signalName, nextColor)
            }
        }

        for (const node in screenData) {
            for (const signal of screenData[node].SIGNALS) {
                if (signal.invisibleSignal) continue;
                const { sx, sy } = { sx: Number(signal.signalPos.x), sy: Number(signal.signalPos.y) }
                const signalColor = signalColorByName.get(signal.signalName) ?? defaultSignalColor

                ctx.save();
                ctx.translate(sx, sy);
                if (SRTO_PROPS.userOptions.flipScreen) {
                    ctx.scale(-1, -1);
                }
                const signalDirection = SRTO_PROPS.userOptions.flipScreen ? signal.signalDirectionOnMap === 'right' ? 'left' : 'right' : signal.signalDirectionOnMap
                const signalPath = SIGNAL_BASE_PATH[signalDirection]
                ctx.lineWidth = 2;
                ctx.strokeStyle = signalColor;
                ctx.fillStyle = signalColor;
                ctx.fill(signalPath);
                ctx.stroke(signalPath);
                ctx.restore();
            }
        }
    }

    export function drawNotations(
        screenData: SRTO_DataTypes.ScreenProps | null,
        ctx: CanvasRenderingContext2D,
        SRTO_PROPS: SRTO_PROPS,
        canvasSettings: CanvasSettingsProps
    ) {
        if (!screenData) return;
        if (!SRTO_PROPS.stationList) return;
        if (!ctx) return;

        const userOptions = SRTO_PROPS.userOptions
        const stationData = SRTO_PROPS.stationList
        for (const nodeid in screenData) {
            for (const node of screenData[nodeid].NODES) {
                const { x, y } = ((SRTO_PROPS.userOptions.flipScreen && node.nodePosFlipped) ? node.nodePosFlipped : node.nodePos) ?? { x: 0, y: 0 }
                ctx.save();
                ctx.translate(x, y);
                if (userOptions.flipScreen) {
                    ctx.scale(-1, -1);
                }
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                switch (node.nodeType) {
                    case 'trackMarker':
                        ctx.font = '12px monospace'
                        const tm_metrics = ctx.measureText(node.text ?? '');
                        const tm_height = tm_metrics.actualBoundingBoxAscent + tm_metrics.actualBoundingBoxDescent
                        const tm_width = tm_metrics.width

                        ctx.fillStyle = 'black'
                        ctx.fillRect(-(tm_width / 2) - 2, -5, tm_width + 4, tm_height + 2)

                        ctx.fillStyle = 'white'
                        ctx.fillText(node.text ?? 'n.t.', 0, 1)
                        break;
                    case 'platform':
                        ctx.font = '8px monospace'

                        if (!userOptions.flipScreen) {
                            // non-flipped
                            ctx.fillStyle = 'rgb(255, 180, 80)'
                            ctx.fillRect(0, 0, node.width ?? 0, node.height ?? 0)

                            ctx.fillStyle = 'black'
                            ctx.fillText(node.text ?? '', (node.width ? node.width / 2 : 0), (node.height ? node.height / 2 : 0) + 1)

                        } else {
                            // flipped
                            ctx.fillStyle = 'rgb(255, 180, 80)'
                            ctx.fillRect(-(node.width ?? 1), -(node.height ?? 1), node.width ?? 0, node.height ?? 0)

                            ctx.fillStyle = 'black'
                            ctx.fillText(node.text ?? '', -(node.width ? node.width / 2 : 0), -(node.height ? node.height / 2 : 0) + 1)

                        }
                        break;
                    case 'stationName':
                        ctx.font = 'bold 18px monospace'

                        const displayedStationName = (!userOptions.shortStationNames ? (node.seperateDisplayName ?? node.stationName) : node.stationPrefix) ?? '?????'

                        ctx.fillStyle = 'rgb(255, 200, 0)'
                        ctx.fillText(displayedStationName, 0, 0)

                        const underlineColor = () => {
                            const getStation = stationData.find((station) => station.Name === node.stationName)
                            if (!getStation) return 'transparent'
                            return getStation.DispatchedBy.length < 1 ? 'lime' : 'red'
                        }
                        ctx.fillStyle = underlineColor()
                        ctx.fillText('_'.repeat(displayedStationName.length), 0, 2)
                        break;
                    case 'simpleText':
                        ctx.fillStyle = node.textColor ?? 'white'
                        ctx.font = `${node.textSize ?? 10}px monospace`
                        ctx.textAlign = 'center'
                        ctx.textBaseline = 'middle'
                        ctx.fillText(node.text ?? '', 0, 0)
                        break;
                    case 'differentScreenMarker':
                        ctx.font = 'bold 16px monospace'
                        ctx.fillStyle = 'white'
                        const dsm_metrics = ctx.measureText(node.text ?? '');
                        const dsm_height = dsm_metrics.actualBoundingBoxAscent + dsm_metrics.actualBoundingBoxDescent
                        const dsm_width = dsm_metrics.width

                        const icon = DiffAreaIcon;
                        ctx.textAlign = 'left'
                        ctx.textBaseline = 'alphabetic'
                        if (userOptions.flipScreen) {
                            // flipped
                            ctx.fillText(node.text ?? '', -dsm_width, dsm_height)
                        } else {
                            // not flipped (original)
                            ctx.fillText(node.text ?? '', +26, 0)
                        }
                        ctx.save();
                        if (userOptions.flipScreen) {
                            // flipped
                            ctx.translate(-dsm_width - 26, dsm_height)
                        } else {
                            // not flipped (original)
                            ctx.translate(0, 0)
                        }
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = 'rgb(0, 150, 200)'
                        ctx.stroke(icon)
                        ctx.restore();
                        break;
                    case 'trackBreakMarker':
                        ctx.save();
                        if (userOptions.flipScreen) {
                            ctx.translate(-canvasSettings.CANVAS_WORLD_WIDTH, -canvasSettings.CANVAS_WORLD_HEIGHT);
                        }
                        const bm = () => {
                            if (!userOptions.flipScreen) {
                                // non-flipped
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
                            } else {
                                // flipped
                                return {
                                    1: {
                                        x: node.breakMarker?.firstMarker.x ? canvasSettings.CANVAS_WORLD_WIDTH - node.breakMarker?.firstMarker.x : 0,
                                        y: node.breakMarker?.firstMarker.y ? canvasSettings.CANVAS_WORLD_HEIGHT - node.breakMarker?.firstMarker.y : 0
                                    },
                                    2: {
                                        x: node.breakMarker?.secondMarker.x ? canvasSettings.CANVAS_WORLD_WIDTH - node.breakMarker?.secondMarker.x : 0,
                                        y: node.breakMarker?.secondMarker.y ? canvasSettings.CANVAS_WORLD_HEIGHT - node.breakMarker?.secondMarker.y : 0
                                    },
                                }
                            }

                        }
                        ctx.fillStyle = 'rgb(160, 0, 120)'
                        ctx.font = 'bold 18px monospace'
                        ctx.textBaseline = 'middle'

                        ctx.fillText(`[${node.text ?? '?'}]`, bm()[1].x, bm()[1].y)
                        ctx.fillText(`[${node.text ?? '?'}]`, bm()[2].x, bm()[2].y)
                        ctx.restore();
                        break;
                    case 'dispatchingPost':
                        ctx.save();
                        if (userOptions.flipScreen) ctx.translate(-30, -20);
                        const post = DispatchingPost[node.postType ?? 'computer'];
                        ctx.lineWidth = 0.5
                        ctx.strokeStyle = 'white';
                        ctx.stroke(post);

                        ctx.fillStyle = 'white';
                        ctx.strokeStyle = 'black';
                        ctx.lineWidth = 3;
                        ctx.strokeRect(6, 4, 16, 3);
                        ctx.fillRect(6, 4, 16, 3);
                        ctx.beginPath();
                        ctx.lineWidth = 1.5;
                        ctx.arc(14, 12.5, 3, 0, 2 * Math.PI)
                        ctx.fill()
                        ctx.stroke();
                        ctx.restore();
                        break;
                }
                ctx.restore();
            }
        }
    }

    export function drawTrains(
        screenData: SRTO_DataTypes.ScreenProps | null,
        ctx: CanvasRenderingContext2D,
        SRTO_PROPS: SRTO_PROPS
    ) {
        if (!ctx) return;
        if (!SRTO_PROPS.trainList) return;
        if (!screenData) return;

        const userOptions = SRTO_PROPS.userOptions
        const trainData = SRTO_PROPS.trainList

        function searchSignal(signalName: string | null) {
            let signals: SRTO_DataTypes.SIGNAL[] = []
            for (const node in screenData) {
                const foundSignal = screenData[node].SIGNALS.filter((signal) => signalName === signal.signalName);
                if (foundSignal) signals.push(...foundSignal);
            }
            return signals
        }
        for (const train of trainData) {

            const signalOfTrain = train.TrainData.SignalInFront ?? train.TrainData.SignalInFrontPredictive ?? null
            if (!signalOfTrain) continue;

            const trainOnSignals = searchSignal(signalOfTrain)
            if (!trainOnSignals) continue;


            const trainCoordsAndDirection = (signal: SRTO_DataTypes.SIGNAL) => {
                const positions = signal.trainPosDistance
                // return fallback position if no distance positioning given
                if (!positions) return { x: signal.trainPos.x, y: signal.trainPos.y, dir: false }

                for (const pos of positions) {
                    if (train.TrainData.DistanceToSignalInFront > pos.distanceToSignal) {
                        return { x: pos.x, y: pos.y, dir: pos.switchDirection }
                    }
                    continue;
                }
                return { x: signal.trainPos.x, y: signal.trainPos.y, dir: false }
            }

            for (const trainOnSignal of trainOnSignals) {
                const tx = Number(trainCoordsAndDirection(trainOnSignal).x)
                const ty = Number(trainCoordsAndDirection(trainOnSignal).y)
                const dir = trainCoordsAndDirection(trainOnSignal).dir

                const trainColors = () => {
                    const isTrainControlledByPlayer = train.ControlledBy === 'user'

                    return {
                        outlineColor: isTrainControlledByPlayer ? 'rgb(0, 128, 255)' : 'darkgray',
                        fillColor: 'black',
                        textColor: isTrainControlledByPlayer ? 'rgb(0, 255, 255)' : 'white'
                    }
                }
                ctx.save();
                ctx.translate(tx, ty);
                if (userOptions.flipScreen) {
                    ctx.scale(-1, -1);
                }
                const signalDirectionOnFlip = userOptions.flipScreen ? trainOnSignal.signalDirectionOnMap === 'right' ? 'left' : 'right' : trainOnSignal.signalDirectionOnMap
                const signalDirectionOnDistance = dir ? signalDirectionOnFlip === 'left' ? 'right' : 'left' : signalDirectionOnFlip

                const baseTrain = TRAIN_BASE_PATH[signalDirectionOnDistance]
                ctx.fillStyle = trainColors().fillColor
                ctx.lineJoin = 'miter'
                ctx.lineWidth = 4
                ctx.strokeStyle = trainColors().outlineColor
                ctx.stroke(baseTrain);
                ctx.fill(baseTrain);

                ctx.font = 'bold 14px monospace'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = trainColors().textColor
                ctx.fillText(train.TrainNoLocal, signalDirectionOnDistance === 'right' ? -26 : 26, 1);
                ctx.restore();
            }

        }
    }

    export function drawGhostTrains(
        screenData: SRTO_DataTypes.ScreenProps | null,
        ctx: CanvasRenderingContext2D
    ) {
        for (const node in screenData) {
            for (const signal of screenData[node].SIGNALS) {

                const distancePos = signal.trainPosDistance
                ctx.lineWidth = 4

                if (distancePos) {
                    for (const pos of distancePos) {
                        const trainDirection = pos.switchDirection ? signal.signalDirectionOnMap === 'right' ? 'left' : 'right' : signal.signalDirectionOnMap
                        const baseTrain = TRAIN_BASE_PATH[trainDirection]
                        ctx.save();
                        ctx.fillStyle = 'rgba(255, 160, 80, 0.25)'
                        ctx.strokeStyle = 'rgba(255, 100, 80, 0.4)'
                        // ctx.lineWidth = 1.5
                        ctx.translate(pos.x, pos.y)
                        ctx.stroke(baseTrain);
                        ctx.fill(baseTrain);
                        ctx.fillStyle = 'rgb(255, 255, 255)'
                        ctx.font = 'bold 14px monospace'
                        ctx.textAlign = 'center'
                        ctx.textBaseline = 'middle'
                        ctx.fillText(pos.distanceToSignal.toString(), trainDirection === 'right' ? -26 : 26, 1)
                        ctx.restore();
                    }
                }
                const tc = () => {
                    return {
                        x: Number(signal.trainPos.x),
                        y: Number(signal.trainPos.y)
                    }
                }
                const baseTrain = TRAIN_BASE_PATH[signal.signalDirectionOnMap]
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
}