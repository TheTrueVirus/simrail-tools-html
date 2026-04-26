import './srtoStyles.css'
import { useEffect, useRef, useState } from "react"
import { SimRailDataTypes } from "../../types/simrail-data-types";
import { SR_DATA } from '../../functions/getSimRailData/getSimRailData';
import SRTO_Header from './srto-header/srto-header';
import SRTO_Disclaimer from './srto-disclaimer/srto-disclaimer';
import SRTO_Canvas from './srto-worker/srto-canvas/srto-canvas';

export interface AreaProps {
    areaID: string
    areaDisplayTitle: string
}

export interface RenderOptionsProps {
    renderTracks: boolean
    renderSignals: boolean
    renderNodes: boolean
    renderTrains: boolean
    renderGhostTrains: boolean
}

const RenderOptions: RenderOptionsProps = {
    renderTracks: true,
    renderSignals: true,
    renderNodes: true,
    renderTrains: true,
    renderGhostTrains: false
}

export const USER_OPTIONS = {
    selectedServer: 'int1',
    selectedArea: { areaID: 'srto_area1', areaDisplayTitle: 'A1 | Katowice - Warszawa' },
    shortStationNames: false,
    allowExtendedView: false,
    //showCoordinates: true
}

export const AreaList = [
    {
        areaID: 'srto_area1',
        areaDisplayTitle: 'A1 | Katowice - Warszawa'
    },
]

const DISCLAIMER_KEY = "srto_disclaimer_accepted"

export default function SimRailTrackOverview() {

    // async function getSimRailUser() {
    //     const trainData = trainListRef.current
    //     if (!userOptions.selectedServer || !trainData) return;

    //     const SR_USER = [];

    //     for (const train of trainData) {
    //         const steamID = train.TrainData.ControlledBySteamID
    //         if (!steamID) continue;

    //         const STEAMUSER_RAW = await SR_DATA.SteamUser(steamID);

    //         if (!STEAMUSER_RAW) continue;

    //         SR_USER.push(STEAMUSER_RAW);
    //     }

    //     setUserList(SR_USER);
    // }

    const developmentTrain: SimRailDataTypes.FilteredTrainList = {
        TrainNoLocal: 'KORTÜR',
        Type: 'O-II-A-I',
        StartStation: 'Katowice',
        EndStation: 'Warszawa',
        Vehicles: ["Impuls/36wed-007"],
        TrainData: {
            ControlledBySteamID: null,
            ControlledByXboxID: null,
            Velocity: 50,
            SignalInFront: 'SG_N3',
            DistanceToSignalInFront: 100,
            SignalInFrontSpeed: 120,
        },
        ControlledBy: 'user'
    }

    const [serverList, setServerList] = useState<SimRailDataTypes.ServerData[]>([]);
    const [stationList, setStationList] = useState<SimRailDataTypes.StationData[]>([]);
    const [trainList, setTrainList] = useState<SimRailDataTypes.FilteredTrainList[]>([]);
    // const isDataLoaded = useRef<boolean>(false);
    // const trainListRef = useRef<SimRailDataTypes.FilteredTrainList[] | null>(null);
    // useEffect(() => {
    //     trainListRef.current = trainList;
    // }, [trainList])
    // const [userList, setUserList] = useState<SimRailDataTypes.SteamUser[]>([])
    // const userListRef = useRef<SimRailDataTypes.SteamUser[] | null>(null);
    // useEffect(() => {
    //     userListRef.current = userList
    // }, [userList])

    const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
    const [userOptions, setUserOptions] = useState<typeof USER_OPTIONS>(() => getUserOptionsOrDefault())
    const [devRenderOptions, setDevRenderOptions] = useState<RenderOptionsProps>(RenderOptions)

    useEffect(() => {
        const accepted = localStorage.getItem(DISCLAIMER_KEY) === "true";
        setShowDisclaimer(!accepted);
    }, [])

    function getUserOptionsOrDefault() {
        const defaultOptions = USER_OPTIONS
        const optionsFromStorage = localStorage.getItem('USER_OPTIONS')
        if (!optionsFromStorage) return defaultOptions

        try {
            const p = JSON.parse(optionsFromStorage)

            const isValid =
                p &&
                typeof p.selectedServer === "string" &&
                typeof p.selectedArea &&
                typeof p.selectedArea.areaID === "string" &&
                typeof p.selectedArea.areaDisplayTitle === "string" &&
                typeof p.shortStationNames === "boolean" &&
                typeof p.allowExtendedView === "boolean"

            return isValid ? p : defaultOptions
        } catch {
            return defaultOptions
        }
    }

    useEffect(() => {
        localStorage.setItem('USER_OPTIONS', JSON.stringify(userOptions))
    }, [userOptions])

    // useEffect(() => {
    //     if(
    //         !isDataLoaded.current &&
    //         userOptions.selectedServer &&
    //         trainList.length > 0 &&
    //         stationList.length > 0
    //     ) {
    //         isDataLoaded.current = true;
    //         getSimRailUser();
    //     }
    // }, [trainListRef.current, stationList])

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
            if (!userOptions.selectedServer) return;

            const TRAINDATA = await SR_DATA.Trains(userOptions.selectedServer);

            if (!TRAINDATA) return;

            const filteredTrainList = () => {
                return TRAINDATA.map((train) => {
                    return {
                        TrainNoLocal: train.TrainNoLocal,
                        Type: train.TrainName,
                        StartStation: train.StartStation,
                        EndStation: train.EndStation,
                        Vehicles: train.Vehicles,
                        TrainData: {
                            ControlledBySteamID: train.TrainData.ControlledBySteamID,
                            ControlledByXboxID: train.TrainData.ControlledByXboxID,
                            Velocity: train.TrainData.Velocity,
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
    }, [userOptions.selectedServer])

    useEffect(() => {
        const intervalID = setInterval(getSimRailStationData, 2000);

        async function getSimRailStationData() {
            if (!userOptions.selectedServer) return;

            const STATIONDATA = await SR_DATA.Stations(userOptions.selectedServer);

            if (!STATIONDATA) return;

            setStationList(STATIONDATA)
        }
        getSimRailStationData()


        return () => clearInterval(intervalID)
    }, [userOptions.selectedServer])

    // useEffect(() => {
    //     console.debug('useEffect for "getSimRailUser" mounting')
    //     const intervalID = setInterval(getSimRailUser, 10000);

    //     console.debug('Running "getSimRailUser()"')
    //     getSimRailUser();
    //     return () => {
    //         console.debug('useEffect for "getSimRailUser" unmounting')
    //         clearInterval(intervalID)
    //     }
    // }, [userOptions.selectedServer, isDataLoaded])

    const finalTrainList = process.env.NODE_ENV === 'development'
        ? [...trainList, developmentTrain]
        : trainList;

    const srtoHeaderOptions = {
        userOptions,
        setUserOptions,
        serverList,
        AreaList,
        renderOptions: {
            devRenderOptions, setDevRenderOptions
        }
    }

    const SRTO_PROPS = {
        trainList: finalTrainList,
        stationList,
        // userList: userListRef.current,
        userOptions,
        devRenderOptions
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

                <SRTO_Header srtoHeaderOptions={srtoHeaderOptions} />
                <SRTO_Canvas SRTO_PROPS={SRTO_PROPS} />

            </div>
        </>
    )
}