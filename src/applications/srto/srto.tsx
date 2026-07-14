import './srtoStyles.css'
import { useEffect, useRef, useState } from "react"
import { SimRailDataTypes } from "../../types/simrail-data-types";
import { SR_DATA } from '../../functions/getSimRailData/getSimRailData';
import SRTO_Header from './srto-header/srto-header';
import SRTO_Disclaimer from './srto-disclaimer/srto-disclaimer';
import SRTO_Canvas from './srto-worker/srto-canvas/srto-canvas';
import SRTO_Footer from './srto-footer/srto-footer';

export type SCREENID = "srto_screen1" | "srto_screen2" | "srto_screen3" | "srto_screen4"
export interface AreaProps {
    areaID: SCREENID
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
    selectedArea: AreaList[0],
    shortStationNames: false,
    allowExtendedView: false,
    flipScreen: false,
    //showCoordinates: true
}

const DISCLAIMER_KEY = "srto_disclaimer_accepted"

export default function SimRailTrackOverview() {

    const [serverList, setServerList] = useState<SimRailDataTypes.ServerData[]>([]);
    const [stationList, setStationList] = useState<SimRailDataTypes.StationData[]>([]);
    const [trainList, setTrainList] = useState<SimRailDataTypes.FilteredTrainList[]>([]);
    const lastSignalMapRef = useRef<Map<string, string>>(new Map())

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
            const validArea = AreaList.find(area => area.areaID === p?.selectedArea?.areaID);

            if (!validArea) {
                p.selectedArea = AreaList[0]
            }

            const isValid =
                p &&
                typeof p.selectedServer === "string" &&
                typeof validArea === typeof AreaList &&
                typeof p.selectedArea.areaDisplayTitle === "string" &&
                typeof p.shortStationNames === "boolean" &&
                typeof p.allowExtendedView === "boolean" &&
                typeof p.flipScreen === "boolean";

            return isValid ? p : defaultOptions
        } catch {
            return defaultOptions
        }
    }

    useEffect(() => {
        localStorage.setItem('USER_OPTIONS', JSON.stringify(userOptions))
    }, [userOptions])

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
            const trainData = filteredTrainList()
            updateLatestSignal(trainData)
            setTrainList(trainData)
        }
        getSimRailTrainData();
        lastSignalMapRef.current.clear();

        return () => clearInterval(intervalID)
    }, [userOptions.selectedServer])

    function updateLatestSignal(trainData: SimRailDataTypes.FilteredTrainList[]) {
        for(const train of trainData) {
            const key = train.TrainNoLocal
            const signal = train.TrainData.SignalInFront?.split('@')[0] ?? null

            if(signal){
                lastSignalMapRef.current.set(key, signal)
            }
        }
        // console.debug(lastSignalMapRef.current)
    }

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
        lastSignalMapRef,
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
                <SRTO_Footer SRTO_PROPS={SRTO_PROPS} />

            </div>
        </>
    )
}