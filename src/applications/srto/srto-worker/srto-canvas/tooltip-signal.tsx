import { HoveredTargetType } from "./srto-canvas";

type TrainHoveredTarget = Extract<HoveredTargetType, { type: 'train' }>;

export default function HoverToolTipSignal({ hoveredTarget }: { hoveredTarget: TrainHoveredTarget }) {

    if (!hoveredTarget) return <></>;

    const signalMetalColor = 'rgb(30, 30, 30)'

    const speed = hoveredTarget.train.TrainData.SignalInFrontSpeed
    const greenOrOffBar = speed >= 100 && speed < 160 ? 'greenBar' : 'offBar'
    const orangeOrOffBar = speed >= 60 && speed < 100 ? 'orangeBar' : 'offBar'

    const greenLamp = speed > 0 ? 'greenLamp' : 'lampOff'
    const orangeLamp1 = 'lampOff'
    const redLamp = speed === 0 ? 'redLamp' : 'lampOff'
    const orangeLamp2 = speed > 0 && speed < 160 ? 'orangeLamp' : 'lampOff'
    const whiteLamp = 'lampOff'
    const speednumber = speed === 50 || speed === 80 || speed === 130 || speed === 120 ? (speed/10).toString() : ''

    // ** redo because later signals have 2 underscores **
    const signalName = hoveredTarget.signal.signalName.split('_')[1]

    return (
        <>
            {!hoveredTarget.signal.isSignalABS ?
                <svg className="signalImage-svg" viewBox="0 0 100 300">
                    <defs>
                        <filter id="lampglow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="numberGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <defs>
                        <pattern id='polePattern' x={0} y={0} width={10} height={50} patternUnits='userSpaceOnUse'>
                            <rect x={0} y={0} width={20} height={25} fill='white' />
                            <rect x={0} y={25} width={20} height={25} fill='red' />
                        </pattern>
                        <pattern id='speedBarGreen' x={0} y={0} width={60} height={8}>
                            <rect className={`speedBar ${greenOrOffBar}`} x={5} y={0} width={11} height={8} />
                            <rect className={`speedBar ${greenOrOffBar}`} x={18} y={0} width={11} height={8} />
                            <rect className={`speedBar ${greenOrOffBar}`} x={31} y={0} width={11} height={8} />
                            <rect className={`speedBar ${greenOrOffBar}`} x={44} y={0} width={11} height={8} />
                        </pattern>
                        <pattern id='speedBarOrange' x={0} y={0} width={60} height={8}>
                            <rect className={`speedBar ${orangeOrOffBar}`} x={5} y={0} width={11} height={8} />
                            <rect className={`speedBar ${orangeOrOffBar}`} x={18} y={0} width={11} height={8} />
                            <rect className={`speedBar ${orangeOrOffBar}`} x={31} y={0} width={11} height={8} />
                            <rect className={`speedBar ${orangeOrOffBar}`} x={44} y={0} width={11} height={8} />
                        </pattern>
                    </defs>
                    <rect id='signalPole' x={45} y={5} width={10} height={290} fill='url(#polePattern)' />
                    <g id='signal-signalHead'>
                        <rect x={20} y={0} width={60} height={180} rx={40} ry={25} fill={signalMetalColor} />
                            <circle id='greenLamp' className={`signalLamp ${greenLamp}`} cx={50} cy={30} filter={greenLamp !== 'lampOff' ? "url(#lampglow)" : ''}/>
                            <circle id='orangeLamp1' className={`signalLamp ${orangeLamp1}`} cx={50} cy={60} filter={orangeLamp1 !== 'lampOff' ? "url(#lampglow)" : ''}/>
                            <circle id='redLamp' className={`signalLamp ${redLamp}`} cx={50} cy={90} filter={redLamp !== 'lampOff' ? "url(#lampglow)" : ''}/>
                            <circle id='orangeLamp2' className={`signalLamp ${orangeLamp2}`} cx={50} cy={120} filter={orangeLamp2 !== 'lampOff' ? "url(#lampglow)" : ''}/>
                            <circle id='whiteLamp' className={`signalLamp ${whiteLamp}`} cx={50} cy={150} filter={whiteLamp !== 'lampOff' ? "url(#lampglow)" : ''}/>
                    </g>
                    <g id='signal-nameSign'>
                        <rect x={30} y={170} width={40} height={20} fill='white' />
                        <text x={50} y={184} textAnchor='middle' fill='black' stroke='black' strokeWidth={0.5} fontSize={16}>{signalName}</text>
                    </g>
                    { (speed >= 60 && speed < 160) &&
                        <>
                            <g id='signal-signalSpeedBars'>
                                <rect x={20} y={190} width={60} height={30} fill={signalMetalColor} />
                                <polygon points='40,220 50,230 60,220' fill='rgb(20, 20, 20)' />
                                <rect x={20} y={195} width={60} height={8} fill='url(#speedBarGreen)' />
                                <rect x={20} y={207} width={60} height={8} fill='url(#speedBarOrange)' />
                            </g>
                        </>
                    }
                    { (speed === 50 || speed === 80 || speed === 120 || speed === 130) &&
                        <g id="signal-signalSpeedIndicator">
                            <rect x={35} y={230} width={30} height={35} fill={signalMetalColor}/>
                            <text x={50} y={255} fontSize={26} textAnchor="middle" fill="white" filter="url(#numberGlow)">{speednumber}</text>
                        </g>
                    }
                </svg>
                :
                <svg viewBox='0 0 100 300'>
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <defs>
                        <pattern id='polePattern' x={0} y={0} width={10} height={50} patternUnits='userSpaceOnUse'>
                            <rect x={0} y={0} width={20} height={25} fill='white' />
                            <rect x={0} y={25} width={20} height={25} fill='red' />
                        </pattern>
                    </defs>
                    <rect id='signalPole' x={45} y={5} width={10} height={290} fill='gray' />
                    <g id='signal-signalHead'>
                        <rect x={20} y={0} width={60} height={120} rx={40} ry={25} fill='rgb(21, 21, 21)' />
                            <circle id='greenLamp' className={`signalLamp ${greenLamp}`} cx={50} cy={30} filter={greenLamp !== 'lampOff' ? "url(#glow)" : ''} />
                            <circle id='redLamp' className={`signalLamp ${redLamp}`} cx={50} cy={60} filter={redLamp !== 'lampOff' ? "url(#glow)" : ''}/>
                            <circle id='orangeLamp1' className={`signalLamp ${orangeLamp1}`} cx={50} cy={90} filter={orangeLamp1 !== 'lampOff' ? "url(#glow)" : ''}/>
                    </g>
                    <g id='signal-nameSign'>
                        <rect x={30} y={115} width={40} height={20} fill='white' />
                        <text x={50} y={129} textAnchor='middle' fill='black' stroke='black' strokeWidth={0.5} fontSize={14}>{signalName}</text>
                    </g>
                </svg>
            }
        </>
    )
}