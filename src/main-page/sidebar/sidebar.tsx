import { useState } from 'react'
import './sidebarStyles.css'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {

    const navigateTo = useNavigate();
    function UseClientSideNavigation(link : string) {navigateTo(link)}

    const [isSidebarVisible, SET_isSidebarVisible] = useState<boolean>(false);

    const SIDEBAR_ELEMENTS = [
        {
            elementID: "streckenspiegel",
            elementSVG:
            <svg width={40} height={25}>
                <line x1={20} x2={35} y1={5} y2={5} stroke='white' strokeWidth={3} strokeLinecap='round' />
                <line x1={10} x2={20} y1={12.5} y2={5} stroke='white' strokeWidth={3} />
                <line x1={5} x2={35} y1={12.5} y2={12.5} stroke='white' strokeWidth={3} strokeLinecap='round' />
                <line x1={5} x2={35} y1={20} y2={20} stroke='white' strokeWidth={3} strokeLinecap='round' />
            </svg>,
            elementText: "Streckenspiegel",
            elementTo: '/applications/simrail-ssp'
        },
        {
            elementID: "fahrplan",
            elementSVG:
            <svg width={40} height={25}>

            </svg>,
            elementText: "Buchfahrpläne",
            elementTo: '/applications/simrail-fahrplaene'
        },
    ]

    return(
        <>
            <div className={`sidebarSiteDarkness  ${isSidebarVisible ? 'darknessVisible' : 'darknessHidden'}`}></div>
            <div className="sbButtonContainer">
                <div className={`svgContainer sideBarButton ${isSidebarVisible ? 'sbButtonOpen' : 'sbButtonCollapsed'}`} onClick={() => {SET_isSidebarVisible(!isSidebarVisible)}}>
                    <svg width={40} height={40}>
                        <line x1={5} x2={35} y1={10} y2={10} stroke="white" strokeWidth={3} strokeLinecap="round" />
                        <line x1={5} x2={35} y1={20} y2={20} stroke="white" strokeWidth={3} strokeLinecap="round" />
                        <line x1={5} x2={35} y1={30} y2={30} stroke="white" strokeWidth={3} strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <div className={`sidebarContainer ${isSidebarVisible ? 'sidebarVisible' : 'sidebarCollapsed'}`}>
                <div className='sbTopSpace'>SimRail Tools</div>
                <div className={`sbElementList`}>
                    {
                        Object.entries(SIDEBAR_ELEMENTS).map(([index, element]) => (
                            <>
                                <div key={element.elementID} className='sbElement' onClick={() => {UseClientSideNavigation(element.elementTo)}}>
                                    <div className='sbElementIcon'>
                                        {element.elementSVG}
                                    </div>
                                    <div className='sbElementText'>{element.elementText}</div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}