import { SSP_DATA_TYPES } from "../ssp-data/ssp-data-types";
import { SSP_TRACKS } from "../ssp-data/ssp-track-data";
import { SSP_SIGNALS } from "../ssp-data/ssp-signal-data";
import { SSP_NODES } from "../ssp-data/ssp-node-data";
import { SimRailDataTypes } from "../../../../types/simrail-data-types";

export namespace SVG_WORKER {

    export function loadDataFromFile(area: keyof typeof SSP_TRACKS) {

        const TRACK_DATA: SSP_DATA_TYPES.TRACK[] = SSP_TRACKS[area];
        const SIGNAL_DATA: SSP_DATA_TYPES.SIGNAL[] = SSP_SIGNALS[area];
        const NODE_DATA: SSP_DATA_TYPES.NODE[] = SSP_NODES[area]

        return {
            TRACK_DATA,
            SIGNAL_DATA,
            NODE_DATA
        }
    }

    export function drawTracksOntoSVG(track_data: SSP_DATA_TYPES.TRACK[]) {

        const strokeWidth: number = 2.5;

        const svg = () => {
            return Object.entries(track_data).map(([index, track]) => (
                <>
                    <g id={`group-${track.trackID}`}>
                        <path id={track.trackID} d={track.trackSVG} stroke={track.trackColor} strokeWidth={strokeWidth} fill="none" />
                    </g>
                </>
            ))
        }
        return svg()
    }

    export function drawSignalsOntoSVG(signal_data: SSP_DATA_TYPES.SIGNAL[], trainList: SimRailDataTypes.FilteredTrainList[]) {


        const svg = () => {
            return Object.entries(signal_data).map(([index, signal]) => {

                const SIGNAL_POINTS = () => {

                    const signalx = signal.signalPos.x
                    const signaly = signal.signalPos.y

                    switch (signal.signalDirectionOnMap) {
                        case "left":
                            const signalTipLeft = `${Number(signalx) + 1}, ${signaly}`
                            const signalTopLeft = `${Number(signalx) + 8}, ${Number(signaly) + 5}`
                            const signalBotLeft = `${Number(signalx) + 8}, ${Number(signaly) - 5}`

                            return `${signalTipLeft} ${signalTopLeft} ${signalBotLeft}`
                        case "right":
                            const signalTipRight = `${Number(signalx) - 1}, ${signaly}`
                            const signalTopRight = `${Number(signalx) - 8}, ${Number(signaly) + 5}`
                            const signalBotRight = `${Number(signalx) - 8}, ${Number(signaly) - 5}`

                            return `${signalTipRight} ${signalTopRight} ${signalBotRight}`
                    }
                }

                const SIGNAL_COLOR = () => {
                    const DEF_SIGNAL_COLOR: string = "gray"

                    const isTrainOnSignal = trainList.find((train, tI) => train.TrainData.SignalInFront?.split('@')[0] === signal.signalName)
                    if (isTrainOnSignal) {
                        return isTrainOnSignal.TrainData.SignalInFrontSpeed > 0 ? 'lime' : 'red';
                    } else {
                        return DEF_SIGNAL_COLOR;
                    }
                }

                return (
                    <>
                        <polygon id={signal.signalName} points={SIGNAL_POINTS()} fill={SIGNAL_COLOR()} strokeWidth={0}><title>{`${signal.signalName.toUpperCase()}`}</title></polygon>
                    </>
                )
            })
        }
        return svg()
    }

    export function drawTrainsOntoSVG(signal_data: SSP_DATA_TYPES.SIGNAL[], trainList: SimRailDataTypes.FilteredTrainList[]) {

        const svg = () => {
            return trainList.flatMap((train) => {

                const matches = signal_data.filter((signal) => signal.signalName === train.TrainData.SignalInFront?.split('@')[0])

                if (matches.length === 0) return <></>

                if (matches) {
                    const trainsvgs = matches.map((signal) => {

                        const isTrainStoppedOnABS = () => {
                            if (signal.isSignalABS && train.TrainData.SignalInFrontSpeed === 0 && train.TrainData.DistanceToSignalInFront < 25) {
                                return true;
                            } else {
                                return false;
                            }
                        }


                        const trainShapeCoords = () => {
                            const { x: tX, y: tY } = { x: Number(signal.trainPos.x), y: Number(signal.trainPos.y) }
                            switch (signal.signalDirectionOnMap) {
                                case "left":
                                    return { pathPoints: `M${tX - 3},${tY} ${tX + 2},${tY - 7} ${tX + 53},${tY - 7} ${tX + 53},${tY + 7} ${tX + 2},${tY + 7} Z`, trainNumberPos: { x: `${tX + 27}`, y: `${tY + 5}` } }

                                case "right":
                                    return { pathPoints: `M${tX + 3},${tY} ${tX - 2},${tY - 7} ${tX - 53},${tY - 7} ${tX - 53},${tY + 7} ${tX - 2},${tY + 7} Z`, trainNumberPos: { x: `${tX - 27}`, y: `${tY + 5}` } }
                            }
                        }

                        const trainNumberColor = train.ControlledBy === 'user' ? 'rgb(0,255,255)' : 'white'
                        const trainFillColor = train.ControlledBy === 'user' ? 'rgb(0, 0, 0)' : 'black'
                        const trainStrokeColor = train.ControlledBy === 'user' ? 'rgb(0,255,255)' : 'rgb(100, 100, 100)'

                        const { pathPoints, trainNumberPos } = trainShapeCoords();
                        return (
                            <>
                                <g id={`train-${train.TrainNoLocal}_signal-${signal.signalName}`}>
                                    <path
                                        d={pathPoints}
                                        className={`${isTrainStoppedOnABS() ? 'trainStoppedAtABS' : ''}`}
                                        stroke={trainStrokeColor}
                                        fill={trainFillColor}
                                        strokeWidth={2}
                                    />
                                    <text
                                        x={trainNumberPos.x}
                                        y={trainNumberPos.y}
                                        fontSize={15}
                                        stroke={trainNumberColor}
                                        fill={trainNumberColor}
                                        textAnchor="middle"
                                        strokeWidth={0}>
                                        {train.TrainNoLocal}
                                        <title>{`Train: ${train.TrainNoLocal}\nType: ${train.Type}\nStart: ${train.StartStation}\nEnd: ${train.EndStation}`}</title>
                                    </text>
                                </g>
                            </>
                        )
                    })
                    return trainsvgs
                } else {
                    return <></>;
                }
            })
        }
        return svg();
    }

    export function drawNotationsOntoSVG(note_data: SSP_DATA_TYPES.NODE[], stationList: SimRailDataTypes.StationData[], isShowLongStationNames: boolean) {

        const svg = () => {
            return note_data.map((node, index) => {

                const { x: nx, y: ny } = node.nodePos
                switch (node.nodeType) {
                    case 'trackMarker':
                        return (
                            <>
                                <g id={`nodeGroup_${node.nodeID}`}>
                                    <rect x={(node.nodePos.x - 0.4) - (node.text ? node.text.length * 2.8 : 0)} y={node.nodePos.y - 4} fill="black" width={node.text ? node.text.length * 10 * 0.58 : 20} height={8} />
                                    <text x={node.nodePos.x - (node.text ? node.text.length * 2.8 : 0)} y={node.nodePos.y + 3} fill="white" strokeWidth={0} textAnchor="start" fontSize={10}>{node.text}</text>
                                </g>
                            </>
                        )
                    case 'dispatchingPost':
                        switch (node.postType) {
                            case 'relay':
                                return (
                                    <>
                                        <g id={`nodeGroup_${node.nodeID}`}>
                                            <rect x={nx - 2} y={ny - 2} width={34} height={24} stroke="white" fill='none' strokeWidth={1} />
                                            <rect x={nx} y={ny} width={30} height={20} stroke="white" fill='none' strokeWidth={1} />
                                            {/* LEFT TO RIGHT LINES */}
                                            <line x1={nx + 24} x2={nx + 30} y1={ny} y2={ny + 5} stroke="white" strokeWidth={1} />
                                            <line x1={nx + 16} x2={nx + 30} y1={ny} y2={ny + 10} stroke="white" strokeWidth={1} />
                                            <line x1={nx + 8} x2={nx + 30} y1={ny} y2={ny + 15} stroke="white" strokeWidth={1} />
                                            <line x1={nx} x2={nx + 30} y1={ny} y2={ny + 20} stroke="white" strokeWidth={1} />
                                            <line x1={nx} x2={nx + 22} y1={ny + 5} y2={ny + 20} stroke="white" strokeWidth={1} />
                                            <line x1={nx} x2={nx + 14} y1={ny + 10} y2={ny + 20} stroke="white" strokeWidth={1} />
                                            <line x1={nx} x2={nx + 6} y1={ny + 15} y2={ny + 20} stroke="white" strokeWidth={1} />
                                            {/* RIGHT TO LEFT LINES */}
                                            <line x1={nx + 24} x2={nx + 30} y1={ny + 20} y2={ny + 15} stroke="white" strokeWidth={1} />
                                            <line x1={nx + 16} x2={nx + 30} y1={ny + 20} y2={ny + 10} stroke="white" strokeWidth={1} />
                                            <line x1={nx + 8} x2={nx + 30} y1={ny + 20} y2={ny + 5} stroke="white" strokeWidth={1} />
                                            <line x1={nx} x2={nx + 30} y1={ny + 20} y2={ny} stroke="white" strokeWidth={1} />
                                            <line x1={nx} x2={nx + 22} y1={ny + 15} y2={ny} stroke="white" strokeWidth={1} />
                                            <line x1={nx} x2={nx + 14} y1={ny + 10} y2={ny} stroke="white" strokeWidth={1} />
                                            <line x1={nx} x2={nx + 6} y1={ny + 5} y2={ny} stroke="white" strokeWidth={1} />
                                            <rect x={nx + 7.5} y={ny + 3} width={15} height={4} stroke="black" fill="white" strokeWidth={2} />
                                            <circle cx={nx + 15} cy={ny + 13} r={3} fill="white" stroke="black" strokeWidth={2} />
                                        </g>
                                    </>
                                )
                            case 'computer':
                                return (
                                    <>
                                        <g id={`nodeGroup_${node.nodeID}`}>
                                            <rect x={nx - 2} y={ny - 2} width={34} height={24} stroke="white" fill='none' strokeWidth={1} />
                                            <rect x={nx} y={ny} width={30} height={20} stroke="white" fill='none' strokeWidth={1} />
                                            <rect x={nx + 7.5} y={ny + 3} width={15} height={4} stroke="black" fill="white" strokeWidth={2} />
                                            <circle cx={nx + 15} cy={ny + 13} r={3} fill="white" stroke="black" strokeWidth={2} />
                                        </g>
                                    </>
                                )
                            default:
                                return (
                                    <></>
                                )
                        }
                    case 'stationName':

                        const snColor = 'rgb(255, 220, 130)'
                        const isStationAvailableOnServer = stationList.find((station) => station.Prefix === node.stationPrefix)


                        const pr = node.stationPrefix ?? 'NA'
                        const sn = node.stationName ?? 'Loading...'
                        const fs = 18
                        const nodeText = () => {
                            if (node.stationName && node.stationPrefix) {
                                if (!isShowLongStationNames) {
                                    return node.stationName
                                } else {
                                    return node.stationPrefix
                                }
                            } else {
                                return 'NO NAME'
                            }
                        }
                        const takenColor = () => {
                            if (isStationAvailableOnServer) {
                                if (isStationAvailableOnServer.DispatchedBy.length <= 0) {
                                    return 'lime'

                                } else {
                                    return 'red'
                                }
                            } else {
                                return 'gray'
                            }
                        }

                        return (
                            <>
                                <g id={`nodeGroup_${node.nodeID}`}>
                                    <text x={nx} y={ny} stroke={snColor} fill={snColor} textAnchor="middle" strokeWidth={1} fontSize={fs}>{`${nodeText()}`}</text>
                                    <text x={nx} y={ny + 4} textAnchor="middle" stroke={takenColor()} fill={takenColor()} strokeWidth={1} fontSize={fs}>{"_".repeat(nodeText().length)}</text>
                                    {/* <text x={nx} y={ny-25} textAnchor="middle" stroke={takenColor()} fill={takenColor()} strokeWidth={1} fontSize={fs}>{'■'}</text> */}
                                </g>
                            </>
                        )
                    case 'platform':

                        const platformColor = 'rgb(255, 180, 90)'

                        return (
                            <>
                                <g id={`nodeGroup_${node.nodeID}`}>
                                    <rect x={nx} y={ny} width={node.width} height={node.height} fill={platformColor} />
                                    <text x={nx + ((node.width ?? 50) / 2)} y={ny + 2.5 + ((node.height ?? 10) / 2)} textAnchor="middle" fontSize={8} fill="black" stroke="black" strokeWidth={0.5}>{node.text}</text>
                                </g>
                            </>
                        )
                    case 'simpleText':
                        return (
                            <>
                                <g id={`nodeGroup_${node.nodeID}`}>
                                    <text
                                        x={nx}
                                        y={ny}
                                        fontSize={node.textSize ?? 10}
                                        stroke={node.textColor ?? 'white'}
                                        textAnchor="middle"
                                        fill={node.textColor}
                                        strokeWidth={node.strokeWidth ?? 1}
                                    >
                                        {node.text}
                                    </text>
                                </g>
                            </>
                        )
                    case 'simpleRect':
                        return (
                            <>
                                <g id={`nodeGroup_${node.nodeID}`}>
                                    <rect />
                                </g>
                            </>
                        )
                    case 'differentScreenMarker':
                        return (
                            <>
                                <g id={`nodeGroup_${node.nodeID}`}>
                                    <line x1={nx + 10} x2={nx + 15} y1={ny - 12} y2={ny - 12} stroke="lightblue" strokeWidth={1.3} />
                                    <line x1={nx + 5} x2={nx + 10.3} y1={ny - 7} y2={ny - 12.2} stroke="lightblue" strokeWidth={1.3} />
                                    <line x1={nx} x2={nx + 15} y1={ny - 7} y2={ny - 7} stroke="lightblue" strokeWidth={1.2} />
                                    <line x1={nx} x2={nx + 15} y1={ny - 4} y2={ny - 4} stroke="lightblue" strokeWidth={1.2} />
                                    <text x={nx + 20} y={ny - 5} stroke="white" fill="white" fontSize={16} strokeWidth={0.5}>{node.text ?? 'Unknown'}</text>
                                </g>
                            </>
                        )
                    case 'trackBreakMarker':

                        const marker = node.breakMarker
                        const color = 'rgb(200, 0, 255)'

                        return (
                            <>
                                <g id={`nodeGroup_${node.nodeID}`}>
                                    <text x={marker?.firstMarker.x} y={marker?.firstMarker.y} textAnchor="middle" stroke={color} fill={color} fontSize={16} strokeWidth={0.5}>{`[${node.text}]`}</text>
                                    <text x={marker?.secondMarker.x} y={marker?.secondMarker.y} textAnchor="middle" stroke={color} fill={color} fontSize={16} strokeWidth={0.5}>{`[${node.text}]`}</text>
                                </g>
                            </>
                        )
                    default:
                        return <></>
                }
            })
        }
        return svg();
    }




    export function drawTestTrainsOntoSVG(signal_data: SSP_DATA_TYPES.SIGNAL[]) {

        const svg = () => signal_data.map((signal) => {


            const trainShapeCoords = () => {
                const { x: tX, y: tY } = { x: Number(signal.trainPos.x), y: Number(signal.trainPos.y) }
                switch (signal.signalDirectionOnMap) {
                    case "left":
                        return { pathPoints: `M${tX},${tY} ${tX + 5},${tY - 7} ${tX + 50},${tY - 7} ${tX + 50},${tY + 7} ${tX + 5},${tY + 7} Z`, trainNumberPos: { x: `${tX + 27}`, y: `${tY + 4}` } }

                    case "right":
                        return { pathPoints: `M${tX},${tY} ${tX - 5},${tY - 7} ${tX - 50},${tY - 7} ${tX - 50},${tY + 7} ${tX - 5},${tY + 7} Z`, trainNumberPos: { x: `${tX - 27}`, y: `${tY + 4}` } }
                }
            }
            const { pathPoints, trainNumberPos } = trainShapeCoords();


            return (
                <>
                    <g id={`TESTTRAIN_signal-${signal.signalName}`}>
                        <path
                            d={pathPoints}
                            stroke="rgba(140, 230, 255, 0.35)"
                            fill="rgba(140, 230, 255, 0.15)"
                            strokeWidth={2}
                        />
                        <text
                            x={trainNumberPos.x}
                            y={trainNumberPos.y}
                            fontSize={13}
                            stroke="white"
                            fill="white"
                            textAnchor="middle"
                            strokeWidth={0}>
                            {''}
                            <title>{`THIS IS A TEST TRAIN FOR TESTING PURPOSES ONLY`}</title>
                        </text>
                    </g>
                </>
            )
        })

        return svg();
    }
}