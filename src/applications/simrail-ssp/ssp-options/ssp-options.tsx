import './sspoptionStyles.css'
import { SimRailDataTypes } from "../../../types/simrail-data-types";
import { AreaProps } from "../simrail-ssp";
import { AreaSelection } from "./areaselection/areaselection";
import ServerSelection from "./serverselection/serverselection";
import { useState } from 'react';

export interface SSP_OPTIONS_TYPES {
    OPTIONS_SERVER: {
        serverList: SimRailDataTypes.ServerData[],
        getServer: string,
        setServer: (server: string) => void
    }
    OPTIONS_AREA: {
        areaList: AreaProps[],
        getArea: AreaProps,
        setArea: ({ areaID, areaDisplayTitle }: AreaProps) => void
    }
    OPTION_SHOWSTATIONNAMES: {
        isShowLongStationNames: boolean,
        SET_showLongStationsNames: (value: boolean) => void
    }
    OPTION_SHOWTESTTRAINS: {
        isShowTestTrains: boolean,
        setShowTestTrains: (value: boolean) => void
    }
    OPTION_SHOWHEADER: {
        showHeader: boolean
        setShowHeader: (value: boolean) => void
    }
}

const isDev = process.env.NODE_ENV === 'development'

interface ISelfProps {
    SSP_OPTIONS: SSP_OPTIONS_TYPES
}

export default function SSP_OptionsMenu({ SSP_OPTIONS }: ISelfProps) {

    const optionsListToRender = [
        {
            optionsID: 'option_longStationNames',
            optionsName: 'Short Station Names',
            optionsValue: SSP_OPTIONS.OPTION_SHOWSTATIONNAMES.isShowLongStationNames,
            optionsState: SSP_OPTIONS.OPTION_SHOWSTATIONNAMES.SET_showLongStationsNames,
            isDevOnly: false
        },
        {
            optionsID: 'option_showHeader',
            optionsName: 'Show Header',
            optionsValue: SSP_OPTIONS.OPTION_SHOWHEADER.showHeader,
            optionsState: SSP_OPTIONS.OPTION_SHOWHEADER.setShowHeader,
            isDevOnly: false
        },
        {
            optionsID: 'option_showTestTrains_DEV',
            optionsName: 'Show Test Trains [DEV ONLY]',
            optionsValue: SSP_OPTIONS.OPTION_SHOWTESTTRAINS.isShowTestTrains,
            optionsState: SSP_OPTIONS.OPTION_SHOWTESTTRAINS.setShowTestTrains,
            isDevOnly: true
        },
    ]

    const [showOptionsMenu, SET_showOptionsMenu] = useState<boolean>(false);

    return (
        <>
            <div className="selectionContainer">
                <ServerSelection serverOptions={SSP_OPTIONS.OPTIONS_SERVER} />
                <AreaSelection areaOptions={SSP_OPTIONS.OPTIONS_AREA} />
            </div>
            <div className={`sspOptionsContainer`}>
                <div className={`sspOptions ${showOptionsMenu ? 'optionsOpen' : ''}`}>
                    {
                        optionsListToRender.map((option) => (
                            <>
                                <div className='optionRow' id={option.optionsID}>
                                    
                                    <div>{option.optionsName}</div>
                                </div>
                            </>
                        ))
                    }
                </div>
                <div className='sspOptionsHeader'>
                    <div className={`openOptionsButton ${showOptionsMenu ? 'rotateOptionsArrow' : ''}`} onClick={() => SET_showOptionsMenu(!showOptionsMenu)}>⇧</div>
                    <div className='sspOptionsTitle'>Options</div>
                </div>
            </div>
        </>
    )
}