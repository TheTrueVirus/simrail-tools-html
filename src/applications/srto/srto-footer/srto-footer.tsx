import './srto-footer-styles.css'
import { SimRailDataTypes } from "../../../types/simrail-data-types"
import { RenderOptionsProps, USER_OPTIONS } from "../srto"
import { SetStateAction } from 'react'

interface ISelfProps {
    DATA: {
        trainList: SimRailDataTypes.FilteredTrainList[]
        lastSignalMapRef: React.RefObject<Map<string, string>>
        stationList: SimRailDataTypes.StationData[]
        steamUserList: Map<string, SimRailDataTypes.SteamUser>
    }
    CONSTANTS: {
        CURRENT_VERSION: string | undefined
        FORUM_LINK: string
        GITHUB_REPO_LINK: string
        GITHUB_PAGE_LINK: string
    }
    OPTIONS: {
        userOptions: typeof USER_OPTIONS
        devRenderOptions: RenderOptionsProps
    }
    statusInformation: string
    setStatusInformation: React.Dispatch<SetStateAction<string>>
}

export default function SRTO_Footer({ DATA, CONSTANTS, OPTIONS, statusInformation }: ISelfProps) {

    function trainsCounter() {
        const trainsControlledByPlayers = DATA.trainList.filter((train) => train.ControlledBy === 'user').length
        const allTrainsCount = DATA.trainList.length;
        return `Trains: ${trainsControlledByPlayers}/${allTrainsCount}`
    }

    function stationsCounter() {
        const stationsControlledByPlayers = DATA.stationList.filter((station) => station.DispatchedBy.length > 0).length
        const allStationsCount = DATA.stationList.length
        return `Stations: ${stationsControlledByPlayers}/${allStationsCount}`
    }

    return (
        <>
            <div className="srtoFooterContainer">
                <div className="trainsCounter" title='Occupied / Total'>{trainsCounter()}</div>
                <div className="stationsCounter" title='Occupied / Total'>{stationsCounter()}</div>
                <div className='statusInformation'>{statusInformation}</div>
                <div className='copyrightVersionInfo'>
                    <div className='copyrightInfo'>Copyright (c) 2026 TheTrueVirus</div>
                    <div className='versionInfo'>{`SRTO-Version: ${CONSTANTS.CURRENT_VERSION ?? '?.?.?'}`}</div>
                </div>
            </div>
        </>
    )
}