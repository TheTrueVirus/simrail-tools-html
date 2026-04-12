import './sspStyles.css'
import { useEffect, useState } from "react"
import { SimRailDataTypes } from "../../types/simrail-data-types";
import { SR_DATA } from '../../functions/getSimRailData/getSimRailData';
import SimRailSSP_SVG from './ssp-worker/ssp-areas/area1/ssp-svg-area';
import SSP_OptionsMenu from './ssp-options/ssp-options';
import SimRailSSP_Header from './ssp-header/ssp-header';
import SimRailSSP_Disclaimer from '../../functions/sspDisclamer/ssp-disclaimer';

export interface AreaProps {
    areaID: string
    areaDisplayTitle: string
}

const DISCLAIMER_KEY = "ssp_disclaimer_alpha0.0.1"

export default function SimRailStreckenspiegel() {

    const developmentTrain: SimRailDataTypes.TrainData = {
        TrainNoLocal: 'DEVDEV',
        TrainName: 'DEV',
        StartStation: 'Katowice',
        EndStation: 'Warszawa',
        Vehicles: [],
        ServerCode: 'de1',
        TrainData: {
            ControlledBySteamID: null,
            ControlledByXboxID: null,
            InBorderStationArea: true,
            Latititute: 50.0,
            Longitute: 30.0,
            Velocity: 40,
            SignalInFront: 'KO_E8',
            DistanceToSignalInFront: 100,
            SignalInFrontSpeed: 0,
            VDDelayedTimetableIndex: 0,
            RequiredMapDLCs: null
        },
        RunId: '',
        id: '',
        Type: 'user'
    }

    const areaList = [
        {
            areaID: 'sspArea1',
            areaDisplayTitle: 'P1 | Katowice - [Lazy]'
        },
    ]

    const [GET_serverList, SET_serverList] = useState<SimRailDataTypes.ServerData[]>([]);
    const [GET_stationList, SET_stationList] = useState<SimRailDataTypes.StationData[]>([]);
    const [fetchedTrains, SET_fetchedTrains] = useState<SimRailDataTypes.TrainData[]>([]);
    const [selectedServer, SET_selectedServer] = useState<string>('int1');
    const [GET_areaList] = useState<AreaProps[]>(areaList);
    const [selectedArea, SET_selectedArea] = useState<AreaProps>(areaList[0])
    const [isShowLongStationNames, SET_showLongStationsNames] = useState<boolean>(true);
    const [isShowTestTrains, setShowTestTrains] = useState<boolean>(false);
    const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);

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

                SET_serverList(DATA);
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

            SET_fetchedTrains(TRAINDATA)
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

            SET_stationList(STATIONDATA)
        }

        return () => clearInterval(intervalID)
    }, [selectedServer])

    const finalTrainList = process.env.NODE_ENV === 'development'
        ? [...fetchedTrains, developmentTrain]
        : fetchedTrains;

    const SSP_OPTIONS = {
        OPTIONS_SERVER: {
            serverList: GET_serverList,
            getServer: selectedServer,
            setServer: SET_selectedServer
        },
        OPTIONS_AREA: {
            areaList: GET_areaList,
            getArea: selectedArea,
            setArea: SET_selectedArea
        },
        OPTION_SHOWSTATIONNAMES: {
            isShowLongStationNames,
            SET_showLongStationsNames,
        },
        OPTION_SHOWTESTTRAINS: {
            isShowTestTrains,
            setShowTestTrains
        }
    }
    const SSP_SVG_ITEMS = {
        trainList: finalTrainList,
        stationList: GET_stationList,
        selectedArea,
        isShowLongStationNames,
        isShowTestTrains,
        setShowTestTrains
    }

    return (
        <>
            <div className='sspContainer'>
                {showDisclaimer &&
                    <SimRailSSP_Disclaimer DISCLAIMER_KEY={DISCLAIMER_KEY} showDisclaimer={showDisclaimer} setShowDisclaimer={setShowDisclaimer} />
                }
                <SimRailSSP_Header/>
                <SimRailSSP_SVG SSP_SVG_ITEMS={SSP_SVG_ITEMS} />
                <SSP_OptionsMenu SSP_OPTIONS={SSP_OPTIONS} />

            </div>
        </>
    )
}