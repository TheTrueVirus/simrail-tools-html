import './sspDisclaimer.css'

interface ISelfProps {
    DISCLAIMER_KEY: string
    showDisclaimer: boolean,
    setShowDisclaimer: (value: boolean) => void
}


export default function SimRailSSP_Disclaimer({DISCLAIMER_KEY, showDisclaimer, setShowDisclaimer} : ISelfProps) {

    const onUnderstand = () => {
        localStorage.setItem(DISCLAIMER_KEY, "true")
        setShowDisclaimer(false);
    }

    return (
        <>
            <div className="disclaimerContainer">
                <div className="disclaimerBox">
                    <div className="disclaimerTitle">Wait! Please read before you proceed!</div>
                    <div className="disclaimerContent">
                        <h3>This site is currently in a very early stage of development and is far from finished.</h3>
                        <p>Features may be incomplete, missing, or behave unexpectedly. You may encounter <strong>bugs, visual glitches</strong>, or <strong>incorrect data</strong> at any point during your visit.<br/><br/>By continuing, you acknowledge that this tool is provided as-is, without any guarantees of accuracy, stability, or availability.<br/>I am actively working on improvements and appreciate your patience.<br/><br/>Thank You!</p>
                        <p>If you encounter any bugs or unexpected behaviour, you are welcome to report them either in the <strong><a href='https://forum.simrail.eu/topic/12629-simrail-track-overview-very-very-very-first-version/' target='_blank'>SimRail Forum Thread</a></strong> or on the GitHub repository. Your feedback helps improve this tool.</p>
                    </div>
                    <div className="disclaimerButtonContainer">
                        <button className="disclaimerButton" onClick={onUnderstand}>I understand</button>
                    </div>
                </div>
            </div>
        </>
    )
}