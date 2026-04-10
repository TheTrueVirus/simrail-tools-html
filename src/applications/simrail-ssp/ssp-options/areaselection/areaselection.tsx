import { useState } from 'react';
import { AreaProps } from '../../simrail-ssp';
import { SSP_OPTIONS_TYPES } from '../ssp-options';

interface ISelfProps {
    areaOptions: SSP_OPTIONS_TYPES['OPTIONS_AREA']
}

export function AreaSelection({ areaOptions }: ISelfProps) {

    const [isListOpen, changeListOpen] = useState<boolean>(false);

    function setAreaAndClose(area: AreaProps) {
        console.log(`Changed area to ${area.areaDisplayTitle}`)
        areaOptions.setArea(area)
        changeListOpen(false);
    }


    return (
        <>
            <div className="areaSelectionContainer">
                <div className='selectionText'>AREA = </div>
                <div className='selectionList'>
                    <div className='areaSelectionList'>
                        <div className="selectedOption" onClick={() => changeListOpen(!isListOpen)}>{areaOptions.getArea.areaDisplayTitle}</div>
                        <div className={`optionList ${isListOpen ? 'isOpen' : ''}`}>
                            {areaOptions.areaList.map((area) => (
                                <div key={area.areaID} className='option' onClick={() => setAreaAndClose(area)}>
                                    {area.areaDisplayTitle}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}