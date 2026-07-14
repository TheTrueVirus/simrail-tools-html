import { SetStateAction, useEffect, useRef, useState } from 'react'
import './srto-headerStyles.css'
import { SimRailDataTypes } from '../../../types/simrail-data-types'
import { AreaProps, USER_OPTIONS } from '../srto'
import { RenderOptionsProps } from '../srto'
import { AreaList, ServerList } from './serverScreenList'

const inDev = process.env.NODE_ENV === 'development'

const SR_FORUM_THREAD_LINK = 'https://forum.simrail.eu/topic/12629-srto-simrail-track-overview-the-first-look/'
const GITHUB_REPOSITORY_LINK = 'https://github.com/TheTrueVirus/simrail-tools-html'

interface ISelfProps {
    srtoHeaderOptions: {
        userOptions: typeof USER_OPTIONS
        setUserOptions: React.Dispatch<SetStateAction<typeof USER_OPTIONS>>
        showChangelog: boolean
        setShowChangelog: React.Dispatch<SetStateAction<boolean>>
        serverList: SimRailDataTypes.ServerData[]
        AreaList: AreaProps[]
        renderOptions: {
            devRenderOptions: RenderOptionsProps
            setDevRenderOptions: React.Dispatch<React.SetStateAction<RenderOptionsProps>>
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

export default function SRTO_Header({ srtoHeaderOptions }: ISelfProps) {

    const [isOptionsOpen, setOptionsOpen] = useState<boolean>(false);
    const optionListRef = useRef<HTMLDivElement>(null);
    const [openServerList, setOpenServerList] = useState<boolean>(false);
    const serverListRef = useRef<HTMLDivElement>(null);
    const [openAreaList, setOpenAreaList] = useState<boolean>(false);
    const areaListRef = useRef<HTMLDivElement>(null);
    const [timeString, setTimeString] = useState<string>('00:00 | 00:00');

    const selectedServer = srtoHeaderOptions.userOptions.selectedServer

    useEffect(() => {
        if (openServerList && serverListRef.current) {
            serverListRef.current.focus();
        }
    }, [openServerList])

    useEffect(() => {
        if (openAreaList && areaListRef.current) {
            areaListRef.current.focus();
        }
    }, [openAreaList])

    useEffect(() => {
        if (isOptionsOpen && optionListRef.current) {
            optionListRef.current.focus();
        }
    }, [isOptionsOpen])

    useEffect(() => {
        const intervalID = setInterval(getCurrentTime, 5000);

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

            setTimeString(`Local: ${localHHMM} | ${selectedServer.toUpperCase()}: ${serverHHMM}`);
        }
        getCurrentTime();

        return () => clearInterval(intervalID)
    }, [srtoHeaderOptions.userOptions.selectedServer])

    function setNewServerAndCloseList(serverCode: string) {
        srtoHeaderOptions.setUserOptions(prev => ({ ...prev, selectedServer: serverCode }));
        setOptionsOpen(false);
        setOpenServerList(false);
    }

    function setNewAreaAndCloseList(area: AreaProps) {
        srtoHeaderOptions.setUserOptions(prev => ({ ...prev, selectedArea: area }));
        setOptionsOpen(false);
        setOpenAreaList(false);
    }

    // function setNewAreaAndClose(area: AreaProps) {
    //      srtoHeaderOptions.setUserOptions(prev => ({...prev, selectedArea: area}));
    //      setOpenAreaList(false);
    // }

    const seperateOptionList = {
        "userOptions": [
            {
                optionID: 'option-stationNames',
                optionName: 'Show Short Station Names',
                optionKey: 'shortStationNames' as const,
                optionValue: srtoHeaderOptions.userOptions.shortStationNames,
                optionSetter: srtoHeaderOptions.setUserOptions,
                isDevOption: false
            },
            {
                optionID: 'option-allowExtendedView',
                optionName: 'Allow Extended View',
                optionKey: 'allowExtendedView' as const,
                optionValue: srtoHeaderOptions.userOptions.allowExtendedView,
                optionSetter: srtoHeaderOptions.setUserOptions,
                isDevOption: false
            },
            {
                optionID: 'option-flipScreen',
                optionName: 'Flip Screen',
                optionKey: 'flipScreen' as const,
                optionValue: srtoHeaderOptions.userOptions.flipScreen,
                optionSetter: srtoHeaderOptions.setUserOptions,
                isDevOption: false
            },
            // {
            //     optionID: 'option-showCoordinates',
            //     optionName: 'Show Coordinates',
            //     optionKey: 'showCoordinates' as const,
            //     optionValue: srtoHeaderOptions.userOptions.showCoordinates,
            //     optionSetter: srtoHeaderOptions.setUserOptions,
            //     isDevOption: false
            // },
        ],
        "devOptions": [
            {
                optionID: 'option-renderTracks_DEV',
                optionName: 'Render Tracks',
                renderOptionKey: 'renderTracks' as const,
                optionValue: srtoHeaderOptions.renderOptions.devRenderOptions.renderTracks,
                optionSetter: srtoHeaderOptions.renderOptions.setDevRenderOptions,
                isDevOption: true
            },
            {
                optionID: 'option-renderSignals_DEV',
                optionName: 'Render Signals',
                renderOptionKey: 'renderSignals' as const,
                optionValue: srtoHeaderOptions.renderOptions.devRenderOptions.renderSignals,
                optionSetter: srtoHeaderOptions.renderOptions.setDevRenderOptions,
                isDevOption: true
            },
            {
                optionID: 'option-renderNodes_DEV',
                optionName: 'Render Nodes',
                renderOptionKey: 'renderNodes' as const,
                optionValue: srtoHeaderOptions.renderOptions.devRenderOptions.renderNodes,
                optionSetter: srtoHeaderOptions.renderOptions.setDevRenderOptions,
                isDevOption: true
            },
            {
                optionID: 'option-renderTrains_DEV',
                optionName: 'Render Trains',
                renderOptionKey: 'renderTrains' as const,
                optionValue: srtoHeaderOptions.renderOptions.devRenderOptions.renderTrains,
                optionSetter: srtoHeaderOptions.renderOptions.setDevRenderOptions,
                isDevOption: true
            },
            {
                optionID: 'option-renderGhostTrains_DEV',
                optionName: 'Render Ghost Trains',
                renderOptionKey: 'renderGhostTrains' as const,
                optionValue: srtoHeaderOptions.renderOptions.devRenderOptions.renderGhostTrains,
                optionSetter: srtoHeaderOptions.renderOptions.setDevRenderOptions,
                isDevOption: true
            },
        ]
    }

    const ServerListProps = {
        serverListRef,
        openServerList,
        setOpenServerList,
        serverList: srtoHeaderOptions.serverList,
        selectedServer,
        setNewServerAndCloseList
    }
    const AreaListProps = {
        areaListRef,
        openAreaList,
        setOpenAreaList,
        areaList: srtoHeaderOptions.AreaList,
        setNewAreaAndCloseList
    }

    return (
        <>
            <div className={`srtoHeaderContainer`}>
                <div className='headerTitleContainer'>
                    <div className='srtoHeaderTitle' onClick={() => setOpenAreaList(true)}>SRTO : {srtoHeaderOptions.userOptions.selectedArea.areaDisplayTitle}</div>
                </div>
                {/* <div></div> */}
                <div className='clockContainer' onClick={() => setOpenServerList(prev => !prev)}>
                    <div className='srtoClock'>{timeString}</div>
                </div>
                <div className='headerOptionsContainer'>
                    <div className='switchScreenButton'>
                        <div className='switchScreenText' onClick={() => setOpenAreaList(true)}>Switch Screen</div>
                    </div>
                    <div className='switchServerButton' onClick={() => setOpenServerList(prev => !prev)}>
                        <div>Change Server</div>
                    </div>
                    <div className='openOptionsButton' onClick={() => { setOptionsOpen(prev => !prev) }}>
                        <div className={`optionsButtonCogWheel ${isOptionsOpen ? 'rotateCogWheel' : ''}`}>⛯</div>
                        <div className={`optionsButtonText ${isOptionsOpen ? 'optionsOpenText' : ''}`}>Settings<br /><br />Close</div>
                    </div>
                    <div ref={optionListRef} className={`optionListContainer ${isOptionsOpen ? 'openOptionsList' : ''}`} tabIndex={0}>
                        <div className='optionListTitle'>SETTINGS</div>
                        <div className='optionList'>
                            {
                                seperateOptionList.userOptions.map((option) => (
                                    option.isDevOption
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
                                                            onChange={(e) => option.optionSetter(prev => ({ ...prev, [option.optionKey]: e.target.checked }))}
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
                        <div className='siteButtonContainer'>
                            <a className='siteButtonLink' target='_blank' rel="noopener noreferrer" href={SR_FORUM_THREAD_LINK}>
                                <div className='siteButton siteForumThread'>
                                    <img className='siteButtonImage' src={process.env.PUBLIC_URL + '/assets/images/social-buttons/simrail-forum-logo.png'} />
                                    <div className='siteButtonText'>Forum Thread</div>
                                </div>
                            </a>
                            <a className='siteButtonLink' target='_blank' rel="noopener noreferrer" href={GITHUB_REPOSITORY_LINK}>
                                <div className='siteButton siteGithubRepo'>
                                    <img className='siteButtonImage' src={process.env.PUBLIC_URL + '/assets/images/social-buttons/github-white-icon.png'} />
                                    <div className='siteButtonText'>GitHub Repo</div>
                                </div>
                            </a>
                        </div>
                        {inDev &&
                            <>
                                <div className='devToolsContainer'>
                                    <div className='devToolsTitle'>Dev Tools</div>
                                    {
                                        seperateOptionList.devOptions.map((option) => (
                                            option.isDevOption && inDev
                                                ?
                                                <>
                                                    <div className='singleOptionContainer'>
                                                        <div className='optionSwitch'>
                                                            <label className='optionCheckboxSlider'>
                                                                <input
                                                                    type="checkbox"
                                                                    className='optionCheckbox'
                                                                    checked={option.optionValue}
                                                                    onChange={(e) => option.optionSetter(prev => ({ ...prev, [option.renderOptionKey]: e.target.checked }))}
                                                                />
                                                                <span className='checkboxSlider'></span>
                                                            </label>
                                                        </div>
                                                        <div className='optionName'>{option.optionName}</div>
                                                    </div>
                                                </>
                                                : <></>
                                        ))
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
                <ServerList {...ServerListProps} />
                <AreaList {...AreaListProps} />
            </div>
        </>
    )
}