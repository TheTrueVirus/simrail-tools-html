import './sspStyles.css'
import { useEffect, useState } from "react"
import { SimRailDataTypes } from "../../types/simrail-data-types";
import { SR_DATA } from '../../functions/getSimRailData/getSimRailData';
import SimRailSSP_SVG from './ssp-worker/ssp-svg-area';
import SimRailSSP_Header from './ssp-header/ssp-header';
import SimRailSSP_Disclaimer from '../../functions/sspDisclamer/ssp-disclaimer';
import SRTO_Canvas from './ssp-worker/srto-canvas-own';

export interface AreaProps {
    areaID: string
    areaDisplayTitle: string
}

const DISCLAIMER_KEY = "ssp_disclaimer_alpha0.0.1"

export default function SimRailStreckenspiegel() {

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
            areaID: 'sspArea1',
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

    const sspOptions = {
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

    const SSP_SVG_ITEMS = {
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
            <div className='sspContainer'>
                {showDisclaimer &&
                    <SimRailSSP_Disclaimer
                        DISCLAIMER_KEY={DISCLAIMER_KEY}
                        showDisclaimer={showDisclaimer}
                        setShowDisclaimer={setShowDisclaimer}
                    />
                }
                <SimRailSSP_Header sspOptions={sspOptions} />
                {/* <SRTO_Canvas SRTOCanvasProps={SRTOCanvasProps} /> */}
                <SimRailSSP_SVG SSP_SVG_ITEMS={SSP_SVG_ITEMS} />
            </div>
        </>
    )
}