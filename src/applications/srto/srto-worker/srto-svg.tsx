import { JSX, useEffect, useRef, useState } from "react";
import { SimRailDataTypes } from "../../../types/simrail-data-types";
import { SRTO_SVG_BUILDER } from "./svg-builder/svg-builder";
import { SRTO_DataTypes } from "./srto-data/srto-dataTypes";
import { AreaProps } from "../srto";
import './svgStyles.css'

interface ISelfProps {
    SRTO_SVG_ITEMS: {
        trainList: SimRailDataTypes.FilteredTrainList[],
        stationList: SimRailDataTypes.StationData[],
        selectedArea: AreaProps,
        isShowLongStationNames: boolean,

        isShowTestTrains: boolean
        setShowTestTrains: React.Dispatch<React.SetStateAction<boolean>>

        allowExtendedView: boolean
        setAllowExtendedView: React.Dispatch<React.SetStateAction<boolean>>
    }
}

const isDev = process.env.NODE_ENV === 'development'

export default function SRTO_SVG({ SRTO_SVG_ITEMS }: ISelfProps) {

    const trainList = SRTO_SVG_ITEMS.trainList;
    const stationList = SRTO_SVG_ITEMS.stationList;
    const selectedArea = SRTO_SVG_ITEMS.selectedArea;
    const isShowLongStationNames = SRTO_SVG_ITEMS.isShowLongStationNames
    const isShowTestTrains = SRTO_SVG_ITEMS.isShowTestTrains
    const setShowTestTrains = SRTO_SVG_ITEMS.setShowTestTrains
    const allowExtendedView = SRTO_SVG_ITEMS.allowExtendedView
    const setAllowExtendedView = SRTO_SVG_ITEMS.setAllowExtendedView

    const INITIAL_VIEWBOX = { x: 0, y: 0, width: 2560, height: 2000 };
    const MIN_VIEWBOX_WIDTH = 400;
    const MAX_VIEWBOX_WIDTH = 2560;

    const [trackSVG, SET_trackSVG] = useState<JSX.Element[]>([]);
    const [signalSVG, SET_signalSVG] = useState<JSX.Element[]>([]);
    const [trainSVG, SET_trainSVG] = useState<JSX.Element[]>([]);
    const [nodeSVG, SET_nodeSVG] = useState<JSX.Element[]>([]);
    const [testTrainSVG, SET_testTrainSVG] = useState<JSX.Element[]>([])
    const [viewBox, setViewBox] = useState(INITIAL_VIEWBOX);
    const [isPanning, setIsPanning] = useState(false);
    const [mouseSvgPos, setMouseSvgPos] = useState<{ x: number; y: number } | null>(null);

    const svgRef = useRef<SVGSVGElement | null>(null);
    const panStartRef = useRef<{ x: number; y: number } | null>(null);

    function getDefaultViewBox() {
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect || rect.width === 0 || rect.height === 0) return INITIAL_VIEWBOX;

        return {
            x: 0,
            y: 0,
            width: INITIAL_VIEWBOX.width,
            height: INITIAL_VIEWBOX.width * (rect.height / rect.width),
        };
    }

    function clampViewBox(nextViewBox: typeof viewBox) {
        if (allowExtendedView) return nextViewBox;

        const maxX = Math.max(0, INITIAL_VIEWBOX.width - nextViewBox.width);
        const maxY = Math.max(0, INITIAL_VIEWBOX.height - nextViewBox.height);

        return {
            ...nextViewBox,
            x: Math.min(maxX, Math.max(0, nextViewBox.x)),
            y: Math.min(maxY, Math.max(0, nextViewBox.y)),
        };
    }

    const { TRACK_DATA, SIGNAL_DATA, NODE_DATA } = SRTO_SVG_BUILDER.loadDataFromFile(selectedArea);

    useEffect(() => {

        if (!TRACK_DATA) return;
        const TRACK_SVG = SRTO_SVG_BUILDER.drawTracksOntoSVG(TRACK_DATA);
        const SIGNAL_SVG = SRTO_SVG_BUILDER.drawSignalsOntoSVG(SIGNAL_DATA, trainList);
        const TRAIN_SVG = SRTO_SVG_BUILDER.drawTrainsOntoSVG(SIGNAL_DATA, trainList);
        const NODE_SVG = SRTO_SVG_BUILDER.drawNotationsOntoSVG(NODE_DATA, stationList, isShowLongStationNames);

        SET_trackSVG(TRACK_SVG)
        SET_signalSVG(SIGNAL_SVG)
        SET_trainSVG(TRAIN_SVG)
        SET_nodeSVG(NODE_SVG)

    }, [TRACK_DATA, SIGNAL_DATA, NODE_DATA, trainList])

    useEffect(() => {
        setViewBox(getDefaultViewBox());
        setIsPanning(false);
        panStartRef.current = null;
    }, [selectedArea])

    useEffect(() => {
        if (allowExtendedView) return;
        setViewBox((prev) => clampViewBox(prev));
    }, [allowExtendedView])

    useEffect(() => {
        if (!isShowTestTrains) {
            SET_testTrainSVG([<></>])
            return;
        };

        const TESTTRAIN_SVG = SRTO_SVG_BUILDER.drawTestTrainsOntoSVG(SIGNAL_DATA);

        SET_testTrainSVG(TESTTRAIN_SVG);
    }, [isShowTestTrains, SIGNAL_DATA])

    function onWheelZoom(event: React.WheelEvent<SVGSVGElement>) {
        // event.preventDefault();

        const svgElement = svgRef.current;
        if (!svgElement) return;

        const rect = svgElement.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const zoomFactor = event.deltaY < 0 ? 0.9 : 1.1;

        setViewBox((prev) => {
            const nextWidthRaw = prev.width * zoomFactor;
            const nextWidth = Math.min(MAX_VIEWBOX_WIDTH, Math.max(MIN_VIEWBOX_WIDTH, nextWidthRaw));
            const appliedZoom = nextWidth / prev.width;
            const nextHeight = prev.height * appliedZoom;

            const mouseSvgX = prev.x + ((event.clientX - rect.left) / rect.width) * prev.width;
            const mouseSvgY = prev.y + ((event.clientY - rect.top) / rect.height) * prev.height;

            const nextX = mouseSvgX - (mouseSvgX - prev.x) * appliedZoom;
            const nextY = mouseSvgY - (mouseSvgY - prev.y) * appliedZoom;

            return clampViewBox({ x: nextX, y: nextY, width: nextWidth, height: nextHeight });
        });
    }

    function onPanStart(event: React.MouseEvent<SVGSVGElement>) {
        if (event.button === 1) {
            event.preventDefault();
            setViewBox(getDefaultViewBox());
            setIsPanning(false);
            panStartRef.current = null;
            return;
        }

        if (event.button !== 0) return;

        setIsPanning(true);
        panStartRef.current = { x: event.clientX, y: event.clientY };
    }

    function onPanMove(event: React.MouseEvent<SVGSVGElement>) {
        updateMouseSvgPosition(event);

        if (!isPanning) return;

        const svgElement = svgRef.current;
        const panStart = panStartRef.current;
        if (!svgElement || !panStart) return;

        const rect = svgElement.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const pixelDeltaX = event.clientX - panStart.x;
        const pixelDeltaY = event.clientY - panStart.y;

        setViewBox((prev) => {
            const nextViewBox = {
                ...prev,
                x: prev.x - (pixelDeltaX / rect.width) * prev.width,
                y: prev.y - (pixelDeltaY / rect.height) * prev.height,
            };

            return clampViewBox(nextViewBox);
        });

        panStartRef.current = { x: event.clientX, y: event.clientY };
    }

    function updateMouseSvgPosition(event: React.MouseEvent<SVGSVGElement>) {
        const svgElement = svgRef.current;
        if (!svgElement) return;

        const rect = svgElement.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const x = viewBox.x + ((event.clientX - rect.left) / rect.width) * viewBox.width;
        const y = viewBox.y + ((event.clientY - rect.top) / rect.height) * viewBox.height;

        setMouseSvgPos({ x, y });
    }

    function onPanEnd() {
        setIsPanning(false);
        panStartRef.current = null;
    }

    function onMouseLeaveSvg() {
        onPanEnd();
        setMouseSvgPos(null);
    }

    function trainsCounter() {

        const trainsControlledByPlayers = trainList.filter((train) => train.ControlledBy === 'user').length
        const allTrainsCount = trainList.length;
        return `Trains: ${trainsControlledByPlayers}/${allTrainsCount}`
    }

    function stationsCounter() {
        const stationsControlledByPlayers = stationList.filter((station) => station.DispatchedBy.length > 0).length
        const allStationsCount = stationList.length

        return `Stations: ${stationsControlledByPlayers}/${allStationsCount}`
    }

    function onContextMenuSVG(event: React.MouseEvent<SVGSVGElement>) {
        event.preventDefault();

        if (event.shiftKey) {
            setAllowExtendedView((prev) => !prev);
            return;
        }

        console.log(event)
    }

    return (
        <>
            <div className="srto-container">
                <div className="svg-container">
                    <svg
                        ref={svgRef}
                        viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
                        preserveAspectRatio="xMinYMin meet"
                        id="srto-svg"
                        className="srto-svg"
                        width={'100%'}
                        height={'100%'}
                        onWheel={onWheelZoom}
                        onMouseDown={onPanStart}
                        onMouseMove={onPanMove}
                        onMouseUp={onPanEnd}
                        onMouseLeave={onMouseLeaveSvg}
                        onContextMenu={onContextMenuSVG}
                    >
                        <g id="srto-tracks">{trackSVG}</g>

                        <g id="srto-nodes">{nodeSVG}</g>

                        <g id="srto-signals">{signalSVG}</g>

                        <g id="srto-trains" className={`${isShowTestTrains ? 'hideTrainsFromPane' : ''}`}>{trainSVG}</g>

                        <g id="srto-testTrains" className={`${!isShowTestTrains ? 'hideTrainsFromPane' : ''}`}>{testTrainSVG}</g>

                        {/* <text x={2560/2} y={40} fontSize={50} fill='orange' stroke='orange' textAnchor="middle">CURRENTLY IN DEVELOPMENT</text> */}
                        {/* <text x={2560/2} y={1430} fontSize={50} fill='orange' stroke='orange' textAnchor="middle">CURRENTLY IN DEVELOPMENT</text> */}

                        {isDev &&
                            <>
                                {/* <line x1={0} x2={2560} y1={350} y2={350} stroke="gray" strokeWidth={1} strokeDasharray={5} strokeDashoffset={5} strokeLinecap="round" /> */}
                                {/* <line x1={0} x2={2560} y1={700} y2={700} stroke="gray" strokeWidth={1} strokeDasharray={5} strokeDashoffset={5} strokeLinecap="round" /> */}
                                {/* <rect x={0} y={0} width={INITIAL_VIEWBOX.width} height={INITIAL_VIEWBOX.height} stroke="red" fill="rgba(10, 0, 0, 0.1)" strokeWidth={1} /> */}
                            </>
                        }
                    </svg>
                </div>
            </div>
            <div className="infoContainer">
                <div className="trainsCounter">{trainsCounter()}</div>
                <div className="stationsCounter">{stationsCounter()}</div>
                <div className="svgCoordinates">
                    {mouseSvgPos
                        ? `[x: ${mouseSvgPos.x.toFixed(1)} | y: ${mouseSvgPos.y.toFixed(1)}]`
                        : '[x: - | y: -]'}
                </div>
                <div className="svgCoordinates">
                    Extended view: {allowExtendedView ? 'ON' : 'OFF'}
                </div>
                {isDev &&
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