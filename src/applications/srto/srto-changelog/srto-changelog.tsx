import './srto-changelog.css'
import { CHANGELOG_DATA } from './changelog-data'
import { SetStateAction, useEffect, useState } from 'react'

interface ISelfProps {
    CURRENT_VERSION: string | undefined
    showChangelog: boolean
    setShowChangelog: React.Dispatch<SetStateAction<boolean>>
}

export function SRTO_CHANGELOG({CURRENT_VERSION, showChangelog, setShowChangelog}: ISelfProps) {

    const STORED_VERSION = localStorage.getItem('VERSION');
    const HAS_VISITED_SITE = localStorage.getItem('srto_disclaimer_accepted') !== null
    const isFirstIndexNewVersion = CHANGELOG_DATA[0].version !== STORED_VERSION
    const GITHUB_CHANGELOG_LINK = 'https://github.com/TheTrueVirus/simrail-tools-html/blob/master/CHANGELOG.md'

    const [showNewVersionInfo, setShowNewVersionInfo] = useState<boolean>(false);

    function storeCurrentVersionAndCloseInformation() {
        localStorage.setItem('VERSION', CURRENT_VERSION ?? 'NO_VERSION')
        setShowNewVersionInfo(false);
    }

    useEffect(() => {
        if (STORED_VERSION !== CURRENT_VERSION && STORED_VERSION !== null) setShowNewVersionInfo(true);
        if (STORED_VERSION === null && HAS_VISITED_SITE === true) {
            setShowNewVersionInfo(true);
        } else {
            storeCurrentVersionAndCloseInformation();
        }
    }, [])

    return (
        <>
            <div className={`changelogContainer ${showChangelog && 'showChangelog'}`}>
                <div className='changelogHeader'>
                    <div className='changelogTopTitle'>SimRail Track Overview Changelog</div>
                    <div className='openChangelogLinkButton'>
                        <a className='' target='_blank' rel="noopener noreferrer" href={GITHUB_CHANGELOG_LINK}>View Changelog on GitHub</a>
                    </div>
                </div>
                <div className='changelogListContainer'>
                    {
                        CHANGELOG_DATA.map((change, index) => (
                            <>
                                <div className={`changeBox ${index !== 0 && 'topBorder'}`}>
                                    <div className='changelogTitle'>{`SRTO Version ${change.version}`}{change.subtitle && <><span>{` | ${change.subtitle}`}</span></>}{index === 0 && isFirstIndexNewVersion && <><span id='newestUpdateInfo'>CURRENT VERSION | NEW</span></>}</div>
                                    <div className='changelogReleaseDate'>{`Update was released on ${change.release_date}`}</div>
                                    {change.major_changes &&
                                        <>
                                            <div className='majorChangesBox changeMiddleBox'>
                                                <div className='majorChangesTitle changesMiddleTitle'>Major Changes</div>
                                                <div className='majorChangesText changesContent'>{change.major_changes}</div>
                                            </div>
                                        </>
                                    }
                                    {change.additional_changes &&
                                        <>
                                            <div className='additionalChangesBox changeMiddleBox'>
                                                <div className='additionalChangesTile changesMiddleTitle'>{change.major_changes ? 'Additional Changes' : 'Changes'}</div>
                                                <div className='additionalChangesText changesContent'>{change.additional_changes}</div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </>
                        ))
                    }

                </div>
                <div className='closeChangelogButtonContainer' onClick={() => setShowChangelog(false)}>
                    <div className='closeChangelogButton' >{'Close Changelog'}</div>
                </div>
            </div>

            <div className={`newVersionInformation ${showNewVersionInfo && 'showNewVersionInfo'}`}>
                <div className='newVersionText'>You are using a new version of SRTO!</div>
                <div className='newVersionClose' onClick={() => storeCurrentVersionAndCloseInformation()}>Close</div>
            </div>
        </>
    )
}