import './srtoStyles.css'
import { useEffect, useRef, useState } from "react"
import { SimRailDataTypes } from "../../types/simrail-data-types";
import { SR_DATA } from '../../functions/getSimRailData/getSimRailData';
import SRTO_Header from './srto-header/srto-header';
import SRTO_Disclaimer from './srto-disclaimer/srto-disclaimer';
import SRTO_Canvas from './srto-worker/srto-canvas/srto-canvas';
import SRTO_Footer from './srto-footer/srto-footer';
import { getNextSignalFromLastSignal } from './srto-worker/srto-data/srto-nextSignalList';
import { AreaList, DEV_TRAIN, serverListOnAbortOrEmpty } from './srto-worker/srto-data/customData';
import { SRTO_CHANGELOG } from './srto-changelog/srto-changelog';

const DISCLAIMER_KEY = "srto_disclaimer_accepted"
const CURRENT_VERSION = process.env.REACT_APP_VERSION

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


export default function SimRailTrackOverview() {

    const [serverList, setServerList] = useState<SimRailDataTypes.ServerData[]>([]);
    const [stationList, setStationList] = useState<SimRailDataTypes.StationData[]>([]);
    const [trainList, setTrainList] = useState<SimRailDataTypes.FilteredTrainList[]>([]);
    const lastSignalMapRef = useRef<Map<string, string>>(new Map())
    const steamUserMapRef = useRef<Map<string, SimRailDataTypes.SteamUser>>(new Map());

    const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
    const [showChangelog, setShowChangelog] = useState<boolean>(false);
    const [userOptions, setUserOptions] = useState<typeof USER_OPTIONS>(() => getUserOptionsOrDefault())
    const [devRenderOptions, setDevRenderOptions] = useState<RenderOptionsProps>(RenderOptions)

    useEffect(() => {
        const accepted = localStorage.getItem(DISCLAIMER_KEY) === "true";
        setShowDisclaimer(!accepted);
    }, [])

    useEffect(() => {
        localStorage.setItem('USER_OPTIONS', JSON.stringify(userOptions))
    }, [userOptions])

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
        // fetch SimRail Server
        let isFetching = false
        let cancelled = false;
        let activeController: AbortController | null = null;

        async function getSimRailServerList() {
            if (isFetching) return;
            isFetching = true;

            const controller = new AbortController();
            activeController = controller;
            const FETCH_TIMEOUTID = window.setTimeout(() => controller.abort(), 15000)

            try {
                const DATA = await SR_DATA.Server(controller.signal);

                if (cancelled) return;

                setServerList(DATA ?? serverListOnAbortOrEmpty);
            } catch (e) {
                if (cancelled) return;

                // Optional: ignore expected abort logs
                if (e instanceof DOMException && e.name === "AbortError") {
                    setServerList(serverListOnAbortOrEmpty);
                    return;
                }

                console.error(e);
                setServerList(serverListOnAbortOrEmpty);
            } finally {
                window.clearTimeout(FETCH_TIMEOUTID);
                if (activeController === controller) activeController = null;
                isFetching = false;
            }
        }

        const intervalID = setInterval(getSimRailServerList, 5000);
        getSimRailServerList();

        return () => {
            cancelled = true;
            clearInterval(intervalID);
            activeController?.abort();
        }
    }, [])

    useEffect(() => {
        // fetch stationData and trainData - building steamIDSet - fetching steamUser - setting states
        let isFetching = false
        let cancelled = false;
        let activeController: AbortController | null = null;

        function mapTrainData(raw: SimRailDataTypes.TrainData[]): SimRailDataTypes.FilteredTrainList[] {
            return raw.map((train) => ({
                TrainNoLocal: train.TrainNoLocal,
                Type: train.TrainName,
                StartStation: train.StartStation,
                EndStation: train.EndStation,
                Vehicles: train.Vehicles,
                TrainData: {
                    ControlledBySteamID: train.TrainData.ControlledBySteamID,
                    ControlledByXboxID: train.TrainData.ControlledByXboxID,
                    Velocity: train.TrainData.Velocity,
                    SignalInFront: train.TrainData.SignalInFront?.split('@')[0] ?? null,
                    SignalInFrontPredictive: train.TrainData.SignalInFront ?? getNextSignalFromLastSignal(lastSignalMapRef.current.get(train.TrainNoLocal)) ?? null,
                    SignalInFrontSpeed: train.TrainData.SignalInFrontSpeed,
                    DistanceToSignalInFront: train.TrainData.DistanceToSignalInFront
                },
                ControlledBy: train.Type
            }));
        }
        function collectSteamIDs(trainData: SimRailDataTypes.FilteredTrainList[], stationData: SimRailDataTypes.StationData[]) {
            const ids = new Set<string>();

            for (const station of stationData) {
                const steamid = station.DispatchedBy?.[0]?.SteamId ?? null
                if (steamid) ids.add(steamid)
            }

            for (const train of trainData) {
                const steamid = train.TrainData.ControlledBySteamID ?? null
                if (steamid) ids.add(steamid)
            }

            return Array.from(ids);
        }

        async function getSimRailUserData(steamIDSet: string[], signal: AbortSignal) {
            if (!Array.isArray(steamIDSet)) return;

            for (const steamid of steamIDSet) {
                try {
                    if (steamUserMapRef.current.has(steamid)) continue;

                    const USER_DATA = await SR_DATA.SteamUser(steamid, signal);
                    if (USER_DATA) steamUserMapRef.current.set(steamid, USER_DATA);
                } catch (e) {
                    if (e instanceof DOMException && e.name === "AbortError") break;
                    console.error(e);
                    continue;
                }
            }
        }

        function updateLatestSignal(trainData: SimRailDataTypes.FilteredTrainList[]) {
            for (const train of trainData) {
                const key = train.TrainNoLocal
                const signal = train.TrainData.SignalInFront ?? null

                if (signal) {
                    lastSignalMapRef.current.set(key, signal)
                }
            }
        }

        async function getSimRailStationAndTrainData() {
            if (!userOptions.selectedServer) return;
            if (isFetching || cancelled) return;
            isFetching = true;

            const controller = new AbortController();
            activeController = controller;
            const FETCH_TIMEOUTID = window.setTimeout(() => controller.abort(), 8000);

            try {
                const [stationResult, trainResult] = await Promise.allSettled([
                    SR_DATA.Stations(userOptions.selectedServer, controller.signal),
                    SR_DATA.Trains(userOptions.selectedServer, controller.signal),
                ]);

                if (cancelled || controller.signal.aborted) return;

                const STATIONDATA = stationResult.status === "fulfilled" ? (stationResult.value ?? []) : [];
                const TRAINDATA_RAW = trainResult.status === "fulfilled" ? trainResult.value : null;

                const TRAINDATA = TRAINDATA_RAW ? mapTrainData(TRAINDATA_RAW) : []

                const steamIDSet = collectSteamIDs(TRAINDATA, STATIONDATA);


                await getSimRailUserData(steamIDSet, controller.signal);
                updateLatestSignal(TRAINDATA)
                setStationList(STATIONDATA);
                setTrainList(TRAINDATA);
            } catch (e) {
                if (
                    cancelled ||
                    controller.signal.aborted ||
                    (e instanceof DOMException && e.name === "AbortError")
                ) {
                    return;
                }

                console.error(e);
                setStationList([]);
                setTrainList([]);
            } finally {
                window.clearTimeout(FETCH_TIMEOUTID);
                if (activeController === controller) activeController = null;
                isFetching = false;
            }
        }

        const intervalID = setInterval(getSimRailStationAndTrainData, 2000);
        setStationList([]);
        setTrainList([]);
        steamUserMapRef.current.clear();
        lastSignalMapRef.current.clear();
        getSimRailStationAndTrainData();

        return () => {
            cancelled = true;
            window.clearInterval(intervalID);
            activeController?.abort();
        };
    }, [userOptions.selectedServer])

    const finalTrainList = process.env.NODE_ENV === 'development'
        ? [...trainList, DEV_TRAIN]
        : trainList;

    const srtoHeaderOptions = {
        userOptions,
        setUserOptions,
        showChangelog,
        setShowChangelog,
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
        steamUserList: steamUserMapRef.current,
        userOptions,
        devRenderOptions,
        CURRENT_VERSION
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

                <SRTO_CHANGELOG {...{ CURRENT_VERSION, showChangelog, setShowChangelog }} />

                <SRTO_Header srtoHeaderOptions={srtoHeaderOptions} />
                <SRTO_Canvas SRTO_PROPS={SRTO_PROPS} />
                <SRTO_Footer SRTO_PROPS={SRTO_PROPS} />

            </div>
        </>
    )
}