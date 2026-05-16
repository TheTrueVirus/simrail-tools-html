import './srto-footer-styles.css'
import { SimRailDataTypes } from "../../../types/simrail-data-types"
import { RenderOptionsProps, USER_OPTIONS } from "../srto"

const appVersion = process.env.REACT_APP_VERSION || 'dev'

interface ISelfProps {
    SRTO_PROPS: {
        trainList: SimRailDataTypes.FilteredTrainList[]
        lastSignalMapRef: React.RefObject<Map<string, string>>
        stationList: SimRailDataTypes.StationData[]
        // userList: SimRailDataTypes.SteamUser[] | null
        userOptions: typeof USER_OPTIONS
        devRenderOptions: RenderOptionsProps
    }
}

export default function SRTO_Footer({SRTO_PROPS}: ISelfProps) {

    function trainsCounter() {
        const trainsControlledByPlayers = SRTO_PROPS.trainList.filter((train) => train.ControlledBy === 'user').length
        const allTrainsCount = SRTO_PROPS.trainList.length;
        return `Trains: ${trainsControlledByPlayers}/${allTrainsCount}`
    }

    function stationsCounter() {
        const stationsControlledByPlayers = SRTO_PROPS.stationList.filter((station) => station.DispatchedBy.length > 0).length
        const allStationsCount = SRTO_PROPS.stationList.length
        return `Stations: ${stationsControlledByPlayers}/${allStationsCount}`
    }

    return (
        <>
            <div className="srtoFooterContainer">
                <div className="trainsCounter">{trainsCounter()}</div>
                <div className="stationsCounter">{stationsCounter()}</div>
                <div className='copyrightVersionInfo'>
                    <div className='copyrightInfo'>Copyright (c) 2026 TheTrueVirus</div>
                    <div className='versionInfo'>{`SRTO-Version: ${appVersion}`}</div>
                </div>
            </div>
        </>
    )
}