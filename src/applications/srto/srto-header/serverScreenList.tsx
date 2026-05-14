import { SimRailDataTypes } from "../../../types/simrail-data-types"
import { AreaProps } from "../srto"

type ServerListProps = {
    serverListRef: React.RefObject<HTMLDivElement | null>
    openServerList: boolean,
    setOpenServerList: React.Dispatch<React.SetStateAction<boolean>>
    serverList: SimRailDataTypes.ServerData[]
    selectedServer: string
    setNewServerAndCloseList: (serverCode: string) => void
}
interface AreaListProps {
    areaListRef: React.RefObject<HTMLDivElement | null>
    openAreaList: boolean
    setOpenAreaList: React.Dispatch<React.SetStateAction<boolean>>
    areaList: AreaProps[]
    setNewAreaAndCloseList: (area: AreaProps) => void
}

function ServerList(listProps: ServerListProps) {


    return (
        <>
            <div ref={listProps.serverListRef} className={`selectionList serverList ${listProps.openServerList ? 'openList' : ''}`} tabIndex={0} onBlur={() => listProps.setOpenServerList(false)}>
                <div className='listTitle'>SELECT A SERVER</div>
                <div className='listContainer'>
                    {
                        listProps.serverList.map((server) => (
                            <>
                                <div
                                    className={`serverOption ${listProps.selectedServer === server.ServerCode ? 'isSelected' : ''}`}
                                    onClick={() => listProps.setNewServerAndCloseList(server.ServerCode)}
                                >
                                    <div className={`serverOnlineIndicator ${server.IsActive ? 'serverOnline' : 'serverOffline'}`}></div>
                                    <div>{server.ServerName}</div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>
        </>
    )
}



function AreaList(listProps: AreaListProps) {



    return (
        <>
            <div ref={listProps.areaListRef} className={`selectionList areaList ${listProps.openAreaList ? 'openList' : ''}`} tabIndex={0} onBlur={() => listProps.setOpenAreaList(false)}>
                <div className='listTitle'>Select an Area to observe</div>
                <div className='listContainer'>
                    {
                        listProps.areaList.map((area) => (
                            <>
                                <div
                                    className={`areaOption`}
                                    onClick={() => listProps.setNewAreaAndCloseList(area)}
                                >
                                    <div>{area.areaDisplayTitle}</div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


export {
    ServerList,
    AreaList
}