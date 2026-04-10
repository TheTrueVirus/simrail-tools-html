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
}

interface ISelfProps {
    SSP_OPTIONS: SSP_OPTIONS_TYPES
}

export default function SSP_OptionsMenu({ SSP_OPTIONS }: ISelfProps) {

    const [showOptionsMenu, SET_showOptionsMenu] = useState<boolean>(false);



    return (
        <>
            <div className="selectionContainer">
                <ServerSelection serverOptions={SSP_OPTIONS.OPTIONS_SERVER} />
                <AreaSelection areaOptions={SSP_OPTIONS.OPTIONS_AREA} />
            </div>
            <div className={`sspOptionsContainer`}>
                <div className={`sspOptions ${showOptionsMenu ? 'optionsOpen' : ''}`}>
                    <div className='sspOption_stationNameLength'>
                        <div>Short Stations</div>
                        <div>
                            <label className='optionCheckboxSlider'>
                                <input
                                    type="checkbox"
                                    className='optionCheckbox'
                                    checked={SSP_OPTIONS.OPTION_SHOWSTATIONNAMES.isShowLongStationNames}
                                    onChange={(e) => SSP_OPTIONS.OPTION_SHOWSTATIONNAMES.SET_showLongStationsNames(e.target.checked)}
                                />
                                <span className='checkboxSlider'></span>
                            </label>
                        </div>
                        <div>Long Stations</div>
                    </div>
                    {/* if non dev environement, remove option */}
                    { process.env.NODE_ENV === 'development'
                        ?
                            <div className='sspOption_showTestTrains'>
                                <div>
                                    <label className='optionCheckboxSlider'>
                                        <input
                                            type="checkbox"
                                            className='optionCheckbox'
                                            checked={SSP_OPTIONS.OPTION_SHOWTESTTRAINS.isShowTestTrains}
                                            onChange={(e) => SSP_OPTIONS.OPTION_SHOWTESTTRAINS.setShowTestTrains(e.target.checked)}
                                        />
                                        <span className='checkboxSlider'></span>
                                    </label>
                                </div>
                                <div>Show Test Trains (DEV ONLY)</div>
                            </div>
                        : <></>
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