import { useEffect, useRef, useState } from 'react'
import './srto-headerStyles.css'
import { SimRailDataTypes } from '../../../types/simrail-data-types'
import { AreaProps } from '../srto'

const isDev = process.env.NODE_ENV === 'development'

interface ISelfProps {
    srtoOptions: {
        serverOptions: {
            serverList: SimRailDataTypes.ServerData[]
            getServer: string,
            setServer: React.Dispatch<React.SetStateAction<string>>
        },
        areaOptions: {
            areaList: AreaProps[],
            getArea: AreaProps,
            setArea: React.Dispatch<React.SetStateAction<AreaProps>>
        },
        stationNameOptions: {
            isShowLongStationNames: boolean
            SET_showLongStationsNames: React.Dispatch<React.SetStateAction<boolean>>
        },
        testTrainOptions: {
            isShowTestTrains: boolean
            setShowTestTrains: React.Dispatch<React.SetStateAction<boolean>>
        },
        showHeaderOptions: {
            showHeader: boolean
            setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
        }
        extendedViewOption: {
            allowExtendedView: boolean,
            setAllowExtendedView: React.Dispatch<React.SetStateAction<boolean>>
        }
    }
}

const serverTimeOffset = {
    "cz1": +2,
    "de1": +2,
    "de2": -5,
    "de3": -2,
    "fr1": +2,
    "int1": +1,
    "int2": +2,
    "int3": -8,
    "int4": +12,
    "int5": +2,
    "int9": -3,
    "pl1": -9,
    "pl2": +2,
    "pl3": +2,
    "pl5": -4,
}

export default function SRTO_Header({ srtoOptions }: ISelfProps) {

    const [isOptionsOpen, setOptionsOpen] = useState<boolean>(false);
    const [openServerList, setOpenServerList] = useState<boolean>(false);
    const serverListRef = useRef<HTMLDivElement>(null);

    const selectedServer = srtoOptions.serverOptions.getServer
    const showHeader = srtoOptions.showHeaderOptions.showHeader

    useEffect(() => {
        if (openServerList && serverListRef.current) {
            serverListRef.current.focus();
        }
    }, [openServerList])

    function getCurrentTime() {
        const formatHHMM = (hours: number, minutes: number): string => {
            const paddedHours = String(hours).padStart(2, '0');
            const paddedMinutes = String(minutes).padStart(2, '0');
            return `${paddedHours}:${paddedMinutes}`;
        };

        const localTime = new Date();
        const localHHMM = formatHHMM(localTime.getHours(), localTime.getMinutes());

        const utcMs = localTime.getTime() + localTime.getTimezoneOffset() * 60 * 1000;
        const offsetHours = serverTimeOffset[selectedServer as keyof typeof serverTimeOffset] ?? 0;
        const serverTime = new Date(utcMs + (offsetHours * 60 * 60 * 1000));
        const serverHHMM = formatHHMM(serverTime.getHours(), serverTime.getMinutes());

        return `Local: ${localHHMM} | ${selectedServer.toUpperCase()}: ${serverHHMM}`;
    }

    function setNewServerAndCloseList(serverCode: string) {
        srtoOptions.serverOptions.setServer(serverCode);
        setOpenServerList(false);
    }

    function setNewAreaAndClose(area: AreaProps) {
        srtoOptions.areaOptions.setArea(area);
        // setOpenAreaList(false);
    }


    const seperateOptionList = [
        {
            optionID: 'option-stationNames',
            optionName: 'Show Short Station Names',
            optionValue: srtoOptions.stationNameOptions.isShowLongStationNames,
            optionSetter: srtoOptions.stationNameOptions.SET_showLongStationsNames,
            isDevOption: false
        },
        {
            optionID: 'option-showTestTrains_DEV',
            optionName: 'Show Test Trains [DEV ONLY]',
            optionValue: srtoOptions.testTrainOptions.isShowTestTrains,
            optionSetter: srtoOptions.testTrainOptions.setShowTestTrains,
            isDevOption: true
        },
        {
            optionID: 'option-allowExtendedView',
            optionName: 'Allow Extended View',
            optionValue: srtoOptions.extendedViewOption.allowExtendedView,
            optionSetter: srtoOptions.extendedViewOption.setAllowExtendedView,
            isDevOption: false
        },

    ]




    return (
        <>
            <div className={`srtoHeaderContainer ${!showHeader ? 'hideHeader' : ''}`}>
                <div className='headerTitleContainer'>
                    <div className='srtoHeaderTitle'>SRTO : {srtoOptions.areaOptions.getArea.areaDisplayTitle}</div>
                </div>
                <div className='clockContainer'>
                    <div className='srtoClock'>{getCurrentTime()}</div>
                </div>
                <div className='headerOptionsContainer'>
                    <div className='openOptionsButtonContainer' onClick={() => { setOptionsOpen(prev => !prev) }}>
                        <div className={`openOptionsButtons ${isOptionsOpen ? 'rotateCogWheel' : ''}`}>⛯</div>
                        <div className={`optionsText ${isOptionsOpen ? 'showOptionsText' : ''}`}>Close Settings</div>
                    </div>
                    <div className={`optionListContainer ${isOptionsOpen ? 'openOptionsList' : ''}`}>
                        <div className='optionListTitle'>SETTINGS</div>
                        <div className='serverSelection'>
                            <div className='changeServerButton' onClick={() => setOpenServerList(prev => !prev)}>
                                <div>Change Server</div>
                                <div style={{ fontSize: '14px' }}>Currently Selected: {selectedServer.toUpperCase()}</div>
                            </div>
                            <div ref={serverListRef} className={`serverSelectionList ${openServerList ? 'openServerList' : ''}`} tabIndex={0} onBlur={() => setOpenServerList(false)}>
                                <div className='serverListTitle'>SELECT A SERVER</div>
                                <div className='serverListContainer'>
                                    {
                                        srtoOptions.serverOptions.serverList.map((server) => (
                                            <>
                                                <div
                                                    className={`serverOption ${selectedServer === server.ServerCode ? '' : ''}`}
                                                    onClick={() => setNewServerAndCloseList(server.ServerCode)}
                                                >
                                                    <div className={`serverOnlineIndicator ${server.IsActive ? 'serverOnline' : 'serverOffline'}`}></div>
                                                    <div>{server.ServerName}</div>
                                                </div>
                                            </>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div className='bottomBorderLine'></div>
                        {
                            seperateOptionList.map((option) => (
                                option.isDevOption && !isDev
                                    ? <></>
                                    :
                                    <>
                                        <div className='singleOptionContainer'>
                                            <div className='optionSwitch'>
                                                <label className='optionCheckboxSlider'>
                                                    <input
                                                        type="checkbox"
                                                        className='optionCheckbox'
                                                        checked={option.optionValue}
                                                        onChange={(e) => option.optionSetter(e.target.checked)}
                                                    />
                                                    <span className='checkboxSlider'></span>
                                                </label>
                                            </div>
                                            <div className='optionName'>{option.optionName}</div>
                                        </div>
                                    </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}