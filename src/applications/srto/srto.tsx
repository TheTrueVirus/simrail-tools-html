import './srtoStyles.css'
import { useEffect, useState } from "react"
import { SimRailDataTypes } from "../../types/simrail-data-types";
import { SR_DATA } from '../../functions/getSimRailData/getSimRailData';
import SRTO_SVG from './srto-worker/srto-svg';
import SRTO_Header from './srto-header/srto-header';
import SRTO_Disclaimer from '../../functions/srto-disclaimer/srto-disclaimer';
import SRTO_Canvas from './srto-worker/srto-canvas-own';

export interface AreaProps {
    areaID: string
    areaDisplayTitle: string
}

const DISCLAIMER_KEY = "srto_disclaimer_alpha0.1.0"

export default function SimRailTrackOverview() {

    const developmentTrain: SimRailDataTypes.FilteredTrainList = {
        TrainNoLocal: 'DEVDEV',
        Type: 'DEV',
        StartStation: 'Katowice',
        EndStation: 'Warszawa',
        TrainData: {
            SignalInFront: 'KO_E8',
            DistanceToSignalInFront: 100,
            SignalInFrontSpeed: 0,
        },
        ControlledBy: 'user'
    }

    const areaList = [
        {
            areaID: 'area1',
            areaDisplayTitle: 'L001/L004 | Katowice - Warszawa'
        },
    ]

    const [serverList, setServerList] = useState<SimRailDataTypes.ServerData[]>([]);
    const [stationList, setStationList] = useState<SimRailDataTypes.StationData[]>([]);
    const [trainList, setTrainList] = useState<SimRailDataTypes.FilteredTrainList[]>([]);

    const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
    //!!! make an option object, save it to localStorage and read localStorage onLoad in useEffect
    const [selectedServer, setServer] = useState<string>('int1');
    const [areaListState] = useState<AreaProps[]>(areaList);
    const [selectedArea, setArea] = useState<AreaProps>(areaList[0])
    const [isShowLongStationNames, SET_showLongStationsNames] = useState<boolean>(false);
    const [isShowTestTrains, setShowTestTrains] = useState<boolean>(false);
    const [allowExtendedView, setAllowExtendedView] = useState(false);
    const [showHeader, setShowHeader] = useState<boolean>(true);

    useEffect(() => {
        const accepted = localStorage.getItem(DISCLAIMER_KEY) === "true";
        setShowDisclaimer(!accepted);
    }, [])

    useEffect(() => {
        // fetch SimRail Server
        const intervalID = setInterval(getSimRailServerList, 5000);

        async function getSimRailServerList() {
            try {
                const DATA = await SR_DATA.Server();

                if (!DATA) return;

                setServerList(DATA);
            } catch (e) {
                console.error(e)
            }
        }
        getSimRailServerList();

        return () => clearInterval(intervalID)
    }, [])

    useEffect(() => {
        // fetch SimRail TrainData on selectedServer
        const intervalID = setInterval(getSimRailTrainData, 2000)

        async function getSimRailTrainData() {
            if (!selectedServer) return;

            const TRAINDATA = await SR_DATA.Trains(selectedServer);

            if (!TRAINDATA) return;

            const filteredTrainList = () => {
                return TRAINDATA.map((train) => {
                    return {
                        TrainNoLocal: train.TrainNoLocal,
                        Type: train.TrainName,
                        StartStation: train.StartStation,
                        EndStation: train.EndStation,
                        TrainData: {
                            SignalInFront: train.TrainData.SignalInFront,
                            SignalInFrontSpeed: train.TrainData.SignalInFrontSpeed,
                            DistanceToSignalInFront: train.TrainData.DistanceToSignalInFront
                        },
                        ControlledBy: train.Type
                    }
                })
            }

            setTrainList(filteredTrainList())
        }
        getSimRailTrainData();

        return () => clearInterval(intervalID)
    }, [selectedServer])

    useEffect(() => {
        const intervalID = setInterval(getSimRailStationData, 2000);

        async function getSimRailStationData() {
            if (!selectedServer) return;

            const STATIONDATA = await SR_DATA.Stations(selectedServer);

            if (!STATIONDATA) return;

            setStationList(STATIONDATA)
        }

        return () => clearInterval(intervalID)
    }, [selectedServer])

    const finalTrainList = process.env.NODE_ENV === 'development'
        ? [...trainList, developmentTrain]
        : trainList;

    const srtoOptions = {
        serverOptions: {
            serverList,
            getServer: selectedServer,
            setServer
        },
        areaOptions: {
            areaList: areaListState,
            getArea: selectedArea,
            setArea
        },
        stationNameOptions: {
            isShowLongStationNames,
            SET_showLongStationsNames,
        },
        testTrainOptions: {
            isShowTestTrains,
            setShowTestTrains
        },
        showHeaderOptions: {
            showHeader,
            setShowHeader,
        },
        extendedViewOption: {
            allowExtendedView,
            setAllowExtendedView
        }
    }

    const SRTO_SVG_ITEMS = {
        trainList: finalTrainList,
        stationList,
        selectedArea,
        isShowLongStationNames,
        isShowTestTrains, setShowTestTrains,
        allowExtendedView, setAllowExtendedView
    }

    const SRTOCanvasProps = {
        trainList: finalTrainList,
        stationList,
        selectedArea,
        isShowLongStationNames,
        isShowTestTrains, setShowTestTrains,
        allowExtendedView, setAllowExtendedView
    }

    return (
        <>
            <div className='srtoContainer'>
                {showDisclaimer &&
                    <SRTO_Disclaimer
                        DISCLAIMER_KEY={DISCLAIMER_KEY}
                        showDisclaimer={showDisclaimer}
                        setShowDisclaimer={setShowDisclaimer}
                    />
                }
                <SRTO_Header srtoOptions={srtoOptions} />
                {/* <SRTO_Canvas SRTOCanvasProps={SRTOCanvasProps} /> */}
                <SRTO_SVG SRTO_SVG_ITEMS={SRTO_SVG_ITEMS} />
            </div>
        </>
    )
}