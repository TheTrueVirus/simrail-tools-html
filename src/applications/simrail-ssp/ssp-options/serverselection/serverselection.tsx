import { SimRailDataTypes } from '../../../../types/simrail-data-types';
import { useState } from 'react';
import { SSP_OPTIONS_TYPES } from '../ssp-options';

interface ISelfProps {
    serverOptions: SSP_OPTIONS_TYPES['OPTIONS_SERVER']
}

export default function ServerSelection({serverOptions}: ISelfProps) {

    const [isListOpen, changeListOpen] = useState<boolean>(false);

    function setServerAndClose(server : string) {
        serverOptions.setServer(server);
        changeListOpen(false);
        return;
    }

    return(
        <>
            <div className='serverSelectionContainer'>
                <div className='selectionText'>CURRENT SERVER =</div>
                <div className='selectionList'>
                    <div className='selectedOption' onClick={() => {changeListOpen(!isListOpen)}}>{serverOptions.getServer.toUpperCase()}</div>
                    <div className='serverSelectionList'>
                        <div className={`optionList ${isListOpen ? 'isOpen' : ''}`}>
                            <div className='selectServerText'>SELECT SERVER</div>
                            {serverOptions.serverList.map((server) => (
                                <div key={server.ServerCode} className={`option ${server.ServerCode === serverOptions.getServer ? 'currentOption' : ''}`} onClick={() => {setServerAndClose(server.ServerCode)}}>
                                    <span className={`${server.IsActive ? 'isOn' : 'isOff'}`}>■&nbsp;</span>
                                    {server.ServerCode.toUpperCase()}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}