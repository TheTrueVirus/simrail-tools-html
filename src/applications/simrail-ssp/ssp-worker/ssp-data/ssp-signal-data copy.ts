import { SSP_DATA_TYPES } from "./ssp-data-types"


export const SSP_SIGNALS: SSP_DATA_TYPES.SIGNALS = {
    "sspArea1": [
        //#region KTC / BRY
        //
        {
            signalName: 'l137_ktc_x',
            signalPos: { x: '90', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '75', y: '200' }
        },
        {
            signalName: 'l137_ktc_y',
            signalPos: { x: '90', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '75', y: '220' }
        },
        {
            signalName: 'l137_ktc_u1',
            signalPos: { x: '90', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '105', y: '200' }
        },
        {
            signalName: 'l137_ktc_u2',
            signalPos: { x: '90', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '105', y: '220' }
        },
        {
            signalName: 'l137_21n',
            signalPos: { x: '170', y: '200' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '155', y: '200' }
        },
        {
            signalName: 'l137_22',
            signalPos: { x: '170', y: '220' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '155', y: '220' }
        },
        {
            signalName: 'l137_17',
            signalPos: { x: '170', y: '200' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '200' }
        },
        {
            signalName: 'l137_16n',
            signalPos: { x: '170', y: '220' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '220' }
        },
        //
        // BRYNOW
        //
        {
            signalName: 'l139_bry_H',
            signalPos: { x: '100', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '85', y: '240' }
        },
        {
            signalName: 'l139_bry_J',
            signalPos: { x: '100', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '85', y: '260' }
        },
        {
            signalName: 'l139_bry_d',
            signalPos: { x: '170', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '155', y: '240' }
        },
        {
            signalName: 'l139_bry_e',
            signalPos: { x: '170', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '155', y: '260' }
        },
        {
            signalName: 'l139_bry_b',
            signalPos: { x: '170', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '240' }
        },
        {
            signalName: 'l139_bry_c',
            signalPos: { x: '170', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '260' }
        },
        //#endregion

        //#region [KO] KATOWICE
        //
        {
            signalName: 'KO_S',
            signalPos: { x: '250', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '235', y: '200' }
        },
        {
            signalName: 'KO_R',
            signalPos: { x: '250', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '235', y: '220' }
        },
        {
            signalName: 'KO_P',
            signalPos: { x: '250', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '235', y: '240' }
        },
        {
            signalName: 'KO_O',
            signalPos: { x: '250', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '235', y: '260' }
        },
        //
        // EXIT SIGNALS LEFT SIDE
        //
        {
            signalName: 'KO_N9',
            signalPos: { x: '450', y: '80' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '465', y: '80' }
        },
        {
            signalName: 'KO_N7',
            signalPos: { x: '450', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '465', y: '100' }
        },
        {
            signalName: 'KO_N5',
            signalPos: { x: '450', y: '120' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '465', y: '120' }
        },
        {
            signalName: 'KO_N3',
            signalPos: { x: '450', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '465', y: '140' }
        },
        {
            signalName: 'KO_N1',
            signalPos: { x: '450', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '465', y: '180' }
        },
        {
            signalName: 'KO_N2',
            signalPos: { x: '430', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '200' }
        },
        {
            signalName: 'KO_N4',
            signalPos: { x: '430', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '220' }
        },
        {
            signalName: 'KO_N6',
            signalPos: { x: '430', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '240' }
        },
        {
            signalName: 'KO_N8',
            signalPos: { x: '430', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '260' }
        },
        {
            signalName: 'KO_N10',
            signalPos: { x: '430', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '280' }
        },
        //
        // BETWEEN SIGNALS TO THE RIGHT SIDE
        //
        {
            signalName: 'KO_M9',
            signalPos: { x: '530', y: '80' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '515', y: '80' }
        },
        {
            signalName: 'KO_M7',
            signalPos: { x: '530', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '515', y: '100' }
        },
        {
            signalName: 'KO_M5',
            signalPos: { x: '530', y: '120' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '515', y: '120' }
        },
        {
            signalName: 'KO_M3',
            signalPos: { x: '530', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '515', y: '140' }
        },
        {
            signalName: 'KO_M1',
            signalPos: { x: '530', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '515', y: '180' }
        },
        {
            signalName: 'KO_M2',
            signalPos: { x: '510', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '200' }
        },
        {
            signalName: 'KO_M4',
            signalPos: { x: '510', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '220' }
        },
        {
            signalName: 'KO_M6',
            signalPos: { x: '510', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '240' }
        },
        {
            signalName: 'KO_M8',
            signalPos: { x: '510', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '260' }
        },
        {
            signalName: 'KO_M10',
            signalPos: { x: '510', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '280' }
        },
        //
        // BETWEEN SIGNALS TO THE LEFT SIDE
        //
        {
            signalName: 'KO_L',
            signalPos: { x: '660', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '675', y: '140' }
        },
        {
            signalName: 'KO_J',
            signalPos: { x: '660', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '675', y: '160' }
        },
        {
            signalName: 'KO_K',
            signalPos: { x: '660', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '675', y: '180' }
        },
        {
            signalName: 'KO_G14',
            signalPos: { x: '660', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '675', y: '240' }
        },
        {
            signalName: 'KO_G16',
            signalPos: { x: '660', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '675', y: '260' }
        },
        {
            signalName: 'KO_G18',
            signalPos: { x: '660', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '675', y: '280' }
        },
        {
            signalName: 'KO_F',
            signalPos: { x: '590', y: '320' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '605', y: '320' }
        },
        {
            signalName: 'KO_E15',
            signalPos: { x: '760', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '735', y: '160' }
        },
        {
            signalName: 'KO_E13',
            signalPos: { x: '760', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '735', y: '180' }
        },
        {
            signalName: 'KO_E14',
            signalPos: { x: '740', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '725', y: '240' }
        },
        {
            signalName: 'KO_E16',
            signalPos: { x: '740', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '725', y: '260' }
        },
        {
            signalName: 'KO_E18',
            signalPos: { x: '770', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '750', y: '280' }
        },
        {
            signalName: 'KO_E20',
            signalPos: { x: '790', y: '300' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '775', y: '300' }
        },
        //
        // ENTRY SIGNALS RIGHT SIDE
        //
        {
            signalName: 'KO_D',
            signalPos: { x: '950', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '965', y: '160' }
        },
        {
            signalName: 'KO_C',
            signalPos: { x: '950', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '965', y: '180' }
        },
        {
            signalName: 'KO_B',
            signalPos: { x: '950', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '965', y: '240' }
        },
        {
            signalName: 'KO_A',
            signalPos: { x: '950', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '965', y: '260' }
        },
        //#endregion    

        //#region [KZ] KAT. ZAWODZIE
        //
        // ***ENTRY SIGNALS LEFT SIDE***
        {
            signalName: 'KZ_J1S',
            signalPos: { x: '1030', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1015', y: '160' }
        },
        {
            signalName: 'KZ_O',
            signalPos: { x: '1030', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1015', y: '180' }
        },
        {
            signalName: 'KZ_P1M',
            signalPos: { x: '1030', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1015', y: '240' }
        },
        {
            signalName: 'KZ_P',
            signalPos: { x: '1030', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1015', y: '260' }
        },
        //
        // ***EXIT SIGNALS TO THE LEFT***
        //
        {
            signalName: 'KZ_K',
            signalPos: { x: '1160', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1185', y: '160' }
        },
        {
            signalName: 'KZ_K2',
            signalPos: { x: '1160', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1185', y: '180' }
        },
        {
            signalName: 'KZ_M',
            signalPos: { x: '1160', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1185', y: '240' }
        },
        {
            signalName: 'KZ_M4',
            signalPos: { x: '1160', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1185', y: '260' }
        },
        {
            signalName: 'KZ_N6',
            signalPos: { x: '1160', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1185', y: '280' }
        },
        {
            signalName: 'KZ_N8',
            signalPos: { x: '1170', y: '300' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1185', y: '300' }
        },
        {
            signalName: 'KZ_N10',
            signalPos: { x: '1170', y: '320' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1185', y: '320' }
        },
        //
        // ***EXIT SIGNALS TO THE RIGHT***
        //
        {
            signalName: 'KZ_D1',
            signalPos: { x: '1260', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '160' }
        },
        {
            signalName: 'KZ_D2',
            signalPos: { x: '1260', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '180' }
        },
        {
            signalName: 'KZ_E3',
            signalPos: { x: '1260', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '240' }
        },
        {
            signalName: 'KZ_E',
            signalPos: { x: '1260', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '260' }
        },
        {
            signalName: 'KZ_F',
            signalPos: { x: '1260', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '280' }
        },
        {
            signalName: 'KZ_G',
            signalPos: { x: '1250', y: '300' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '300' }
        },
        {
            signalName: 'KZ_H',
            signalPos: { x: '1250', y: '320' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '320' }
        },
        {
            signalName: 'KZ_J2',
            signalPos: { x: '1360', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1345', y: '260' }
        },
        //
        // ***ENTRY SIGNALS RIGHT SIDE***
        //
        {
            signalName: 'KZ_B1',
            signalPos: { x: '1360', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1375', y: '160' }
        },
        {
            signalName: 'KZ_B2',
            signalPos: { x: '1360', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1375', y: '180' }
        },
        {
            signalName: 'KZw_A',
            signalPos: { x: '1360', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1375', y: '240' }
        },
        {
            signalName: 'KZ_J',
            signalPos: { x: '1360', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1375', y: '260' }
        },
        //#endregion

        //#region KZ <-> SG
        //
        {
            signalName: 'L1_3133N',
            signalPos: { x: '1440', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1425', y: '160' }
        },
        {
            signalName: 'L1_3138',
            signalPos: { x: '1440', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1425', y: '180' }
        },

        {
            signalName: 'L1_3133',
            signalPos: { x: '1440', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1455', y: '160' }
        },
        {
            signalName: 'L1_3121N',
            signalPos: { x: '1520', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1505', y: '160' }
        },
        {
            signalName: 'L1_3128',
            signalPos: { x: '1520', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1505', y: '180' }
        },
        {
            signalName: 'L1_3121',
            signalPos: { x: '1520', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1535', y: '160' }
        },
        {
            signalName: 'L1_3128N',
            signalPos: { x: '1520', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1535', y: '180' }
        },
        //#endregion

        //#region [SG] Sos. Glowny
        //
        {
            signalName: 'SG_X',
            signalPos: { x: '1600', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1585', y: '160' }
        },
        {
            signalName: 'SG_Y',
            signalPos: { x: '1600', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1585', y: '180' }
        },
        {
            signalName: 'SG_U1',
            signalPos: { x: '1660', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1675', y: '160' }
        },
        {
            signalName: 'SG_U2',
            signalPos: { x: '1660', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1675', y: '180' }
        },
        {
            signalName: 'SG_S',
            signalPos: { x: '1620', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1605', y: '220' }
        },
        {
            signalName: 'SG_P',
            signalPos: { x: '1620', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1605', y: '240' }
        },
        {
            signalName: 'SG_R1',
            signalPos: { x: '1740', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1725', y: '160' }
        },
        {
            signalName: 'SG_R2',
            signalPos: { x: '1740', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1725', y: '180' }
        },
        //
        // EXIT SIGNALS TO THE LEFT
        //
        {
            signalName: 'SG_N13',
            signalPos: { x: '1870', y: '40' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1885', y: '40' }
        },
        {
            signalName: 'SG_N11',
            signalPos: { x: '1870', y: '60' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1885', y: '60' }
        },
        {
            signalName: 'SG_N9',
            signalPos: { x: '1860', y: '80' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1875', y: '80' }
        },
        {
            signalName: 'SG_N7',
            signalPos: { x: '1860', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1875', y: '100' }
        },
        {
            signalName: 'SG_N5',
            signalPos: { x: '1860', y: '120' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1875', y: '120' }
        },
        {
            signalName: 'SG_N3',
            signalPos: { x: '1840', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1875', y: '140' }
        },
        {
            signalName: 'SG_N1',
            signalPos: { x: '1840', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1875', y: '160' }
        },
        {
            signalName: 'SG_N2',
            signalPos: { x: '1840', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1875', y: '180' }
        },
        {
            signalName: 'SG_N4',
            signalPos: { x: '1820', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1835', y: '200' }
        },
        //
        // EXIT SIGNALS TO THE RIGHT
        //
        {
            signalName: 'SG_H9',
            signalPos: { x: '1940', y: '80' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1925', y: '80' }
        },
        {
            signalName: 'SG_H7',
            signalPos: { x: '1940', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1925', y: '100' }
        },
        {
            signalName: 'SG_H5',
            signalPos: { x: '1940', y: '120' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1925', y: '120' }
        },
        {
            signalName: 'SG_H3',
            signalPos: { x: '1960', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1925', y: '140' }
        },
        {
            signalName: 'SG_H1',
            signalPos: { x: '1960', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1925', y: '160' }
        },
        {
            signalName: 'SG_H2',
            signalPos: { x: '1960', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1925', y: '180' }
        },
        {
            signalName: 'SG_H4',
            signalPos: { x: '1960', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1925', y: '200' }
        },
        //
        // ENTRY SIGNALS RIGHT SIDE
        //
        {
            //FROM BEDIN UNUSED TRACK
            signalName: 'SG_C',
            signalPos: { x: '2090', y: '110' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2105', y: '110' }
        },
        {
            signalName: 'SG_B',
            signalPos: { x: '2080', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2095', y: '160' }
        },
        {
            signalName: 'SG_A',
            signalPos: { x: '2080', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2095', y: '180' }
        },
        //#endregion

        //#region [Spl] Sosn. Polud.
        {
            signalName: 'SPł1_T',
            signalPos: { x: '1540', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1555', y: '220' }
        },
        {
            signalName: 'Spl_W',
            signalPos: { x: '1540', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1555', y: '240' }
        },
        //#endregion

        //#region SG <-> B
        //
        {
            signalName: 'L1_3075N',
            signalPos: { x: '2160', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2145', y: '160' }
        },
        {
            signalName: 'L1_3076',
            signalPos: { x: '2160', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2145', y: '180' }
        },
        {
            signalName: 'L1_3071',
            signalPos: { x: '2160', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2175', y: '160' }
        },
        {
            signalName: 'L1_3070N',
            signalPos: { x: '2160', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2175', y: '180' }
        },
        //#endregion

        //#region [B] Bedzin
        //

        //
        // ENTRY SIGNALS LEFT SIDE
        //
        {
            // FROM SG UNUSED TRACK
            signalName: 'B_P',
            signalPos: { x: '2240', y: '110' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2225', y: '110' }
        },
        {
            signalName: 'B_R',
            signalPos: { x: '2240', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2225', y: '160' }
        },
        {
            signalName: 'B_S',
            signalPos: { x: '2240', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2225', y: '180' }
        },
        //
        // EXIT SIGNALS LEFT SIDE
        //
        {
            signalName: 'B_K1',
            signalPos: { x: '2300', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2325', y: '160' }
        },
        {
            signalName: 'B_K2',
            signalPos: { x: '2300', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2325', y: '180' }
        },
        {
            signalName: 'B_K4',
            signalPos: { x: '2300', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2325', y: '200' }
        },
        {
            signalName: 'B_K6',
            signalPos: { x: '2310', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2325', y: '220' }
        },
        //
        // EXIT SIGNALS RIGHT SIDE
        //
        {
            signalName: 'B_E1',
            signalPos: { x: '2400', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2375', y: '160' }
        },
        {
            signalName: 'B_E2',
            signalPos: { x: '2400', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2375', y: '180' }
        },
        {
            signalName: 'B_E4',
            signalPos: { x: '2400', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2375', y: '200' }
        },
        {
            signalName: 'B_E6',
            signalPos: { x: '2390', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2375', y: '220' }
        },

        //
        // BLOCK SIGNALS AND ENTRY SIGNALS RIGHT SIDE
        //
        {
            signalName: 'B_C',
            signalPos: { x: '2470', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2455', y: '160' }
        },
        {
            signalName: 'B_D',
            signalPos: { x: '2470', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2455', y: '180' }
        },
        {
            signalName: 'B_B',
            signalPos: { x: '2470', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2485', y: '160' }
        },
        {
            signalName: 'B_A',
            signalPos: { x: '2470', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2485', y: '180' }
        },
        //
        // REPEATING RIGHT ENTRY SIGNALS FOR SECOND SCREEN ROW
        {
            signalName: 'B_B',
            signalPos: { x: '60', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '75', y: '500' }
        },
        {
            signalName: 'B_A',
            signalPos: { x: '60', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '75', y: '520' }
        },
        //#endregion

        //#region B <-> DG
        //
        //
        // SIGNALS ON THE RIGHT SIDE FIRST SCREEN ROW
        {
            signalName: 'L1_3037N',
            signalPos: { x: '2550', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2535', y: '160' }
        },
        {
            signalName: 'L1_3036',
            signalPos: { x: '2550', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2535', y: '180' }
        },
        //
        //
        // SIGNALS ON THE LEFT SIDE SECOND SCREEN ROW
        {
            signalName: 'L1_3037N',
            signalPos: { x: '140', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '125', y: '500' }
        },
        {
            signalName: 'L1_3036',
            signalPos: { x: '140', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '125', y: '520' }
        },
        {
            signalName: 'L1_3037',
            signalPos: { x: '140', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '155', y: '500' }
        },
        {
            signalName: 'L1_3036N',
            signalPos: { x: '140', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '155', y: '520' }
        },
        {
            signalName: 'L1_3023N',
            signalPos: { x: '220', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '205', y: '500' }
        },
        {
            signalName: 'L1_3022',
            signalPos: { x: '220', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '205', y: '520' }
        },
        {
            signalName: 'L1_3023',
            signalPos: { x: '220', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '235', y: '500' }
        },
        {
            signalName: 'L1_3022N',
            signalPos: { x: '220', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '235', y: '520' }
        },
        //#endregion

        //#region [DG] Dabrowa Gornicza
        {
            signalName: 'DG_O',
            signalPos: { x: '300', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '285', y: '500' }
        },
        {
            signalName: 'DG_P',
            signalPos: { x: '300', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '285', y: '520' }
        },
        {
            signalName: 'DG_N1',
            signalPos: { x: '340', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '425', y: '500' }
        },
        {
            signalName: 'DG_N2',
            signalPos: { x: '340', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '355', y: '520' }
        },
        {
            signalName: 'DG_D',
            signalPos: { x: '420', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '405', y: '520' }
        },
        {
            signalName: 'DG_C1',
            signalPos: { x: '490', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '475', y: '500' }
        },
        {
            signalName: 'DG_C2',
            signalPos: { x: '490', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '475', y: '520' }
        },
        {
            signalName: 'DG_A',
            signalPos: { x: '560', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '575', y: '500' }
        },
        {
            signalName: 'DG_B',
            signalPos: { x: '560', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '575', y: '520' }
        },
        //#endregion

        //#region DG <-> DZA
        {
            signalName: 'L1_2983N',
            signalPos: { x: '640', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '625', y: '500' }
        },
        {
            signalName: 'L1_2980',
            signalPos: { x: '640', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '625', y: '520' }
        },
        {
            signalName: 'L1_2983',
            signalPos: { x: '640', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '500' }
        },
        {
            signalName: 'L1_2980N',
            signalPos: { x: '640', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '520' }
        },
        {
            signalName: 'L1_2971N',
            signalPos: { x: '720', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '705', y: '500' }
        },
        {
            signalName: 'L1_2966',
            signalPos: { x: '720', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '705', y: '520' }
        },
        {
            signalName: 'L1_2971',
            signalPos: { x: '720', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '735', y: '500' }
        },
        {
            signalName: 'L1_2966N',
            signalPos: { x: '720', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '735', y: '520' }
        },
        {
            signalName: 'L1_2955N',
            signalPos: { x: '800', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '785', y: '500' }
        },
        {
            signalName: 'L1_2952',
            signalPos: { x: '800', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '785', y: '520' }
        },
        {
            signalName: 'L1_2955',
            signalPos: { x: '800', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '815', y: '500' }
        },
        {
            signalName: 'L1_2952N',
            signalPos: { x: '800', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '815', y: '520' }
        },
        {
            signalName: 'L1_2941',
            signalPos: { x: '880', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '895', y: '500' }
        },
        //#endregion

        //#region [DZA] D.G. Zabkowice
        //
        // ENTRY SIGNALS FROM DABROWA GORNICZA
        //
        {
            signalName: 'DZ_W',
            signalPos: { x: '880', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '865', y: '500' }
        },
        {
            signalName: 'DZ_X',
            signalPos: { x: '880', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '865', y: '520' }
        },
        {
            // EXIT SIGNAL TO DABROWA GORNICZA LEFT TRACK
            signalName: 'DZ_X2N',
            signalPos: { x: '880', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '895', y: '520' }
        },
        //
        // EXIT SIGNALS TO DABROWA GORNICZA
        //
        {
            signalName: 'DZ_P',
            signalPos: { x: '1090', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1105', y: '520' }
        },
        {
            signalName: 'DZ_O',
            signalPos: { x: '1090', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1105', y: '540' }
        },
        {
            signalName: 'DZ_N4',
            signalPos: { x: '1100', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '620' }
        },
        {
            signalName: 'DZ_N6',
            signalPos: { x: '1100', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '640' }
        },
        //
        // ZSIG TO LAZY
        //
        {
            signalName: 'DZ_J',
            signalPos: { x: '1170', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1155', y: '520' }
        },
        {
            signalName: 'DZ_K',
            signalPos: { x: '1180', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1165', y: '600' }
        },
        {
            signalName: 'DZ_M',
            signalPos: { x: '1190', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1175', y: '640' }
        },
        {
            signalName: 'DZ_L',
            signalPos: { x: '1190', y: '660' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1175', y: '660' }
        },
        //
        // G-SIGNALS + F
        // 
        {
            signalName: 'DZ_G13',
            signalPos: { x: '1230', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1245', y: '520' }
        },
        {
            signalName: 'DZ_G11',
            signalPos: { x: '1230', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1245', y: '540' }
        },
        {
            signalName: 'DZ_G9',
            signalPos: { x: '1230', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1245', y: '560' }
        },
        {
            signalName: 'DZ_F',
            signalPos: { x: '1230', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1245', y: '620' }
        },
        //
        // C-SIGNALS + D
        //
        {
            signalName: 'DZ_C13',
            signalPos: { x: '1320', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1305', y: '520' }
        },
        {
            signalName: 'DZ_C10',
            signalPos: { x: '1300', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1285', y: '580' }
        },
        {
            signalName: 'DZ_C12',
            signalPos: { x: '1300', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1285', y: '600' }
        },
        {
            signalName: 'DZ_D',
            signalPos: { x: '1310', y: '660' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1295', y: '660' }
        },
        //
        // ENTRY SIGNALS FROM LAZY LC
        //
        {
            signalName: 'DZ_B',
            signalPos: { x: '1450', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1465', y: '540' }
        },
        {
            signalName: 'DZ_E',
            signalPos: { x: '1450', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1465', y: '560' }
        },
        {
            signalName: 'DZ_A',
            signalPos: { x: '1450', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1465', y: '580' }
        },
        {
            signalName: 'DZ_H',
            signalPos: { x: '1450', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1465', y: '600' }
        },
        //
        // SIGNALS DGZ FREIGHT TRACKS ON THE LEFT SIDE
        //
        {
            signalName: 'DZ_Y',
            signalPos: { x: '790', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '775', y: '620' }
        },
        {
            signalName: 'DZ_Z',
            signalPos: { x: '790', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '775', y: '640' }
        },
        {
            signalName: 'DZ_U105',
            signalPos: { x: '870', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '885', y: '580' }
        },
        {
            signalName: 'DZ_U103',
            signalPos: { x: '870', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '885', y: '600' }
        },
        {
            signalName: 'DZ_U101',
            signalPos: { x: '870', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '885', y: '620' }
        },
        {
            signalName: 'DZ_U102',
            signalPos: { x: '870', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '885', y: '640' }
        },
        {
            signalName: 'DZ_S105',
            signalPos: { x: '950', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '935', y: '580' }
        },
        {
            signalName: 'DZ_S103',
            signalPos: { x: '950', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '935', y: '600' }
        },
        {
            signalName: 'DZ_S101',
            signalPos: { x: '950', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '935', y: '620' }
        },
        {
            signalName: 'DZ_S102',
            signalPos: { x: '950', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '935', y: '640' }
        },
        {
            signalName: 'DZ_S104',
            signalPos: { x: '950', y: '660' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '935', y: '660' }
        },
        //#endregion

        //#region DZ <-> Lazy LC

        //
        // FIRST GROUP
        //
        {
            signalName: 'L1_2899DN',
            signalPos: { x: '1530', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1515', y: '540' }
        },
        {
            signalName: 'L1_2900D',
            signalPos: { x: '1530', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1515', y: '560' }
        },
        {
            // WRONG SIGNAL NAME | SIGNAL SHOULD HAVE "N" IN NAME [L160_2899N]
            signalName: 'L160_2899',
            signalPos: { x: '1530', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1515', y: '580' }
        },
        {
            signalName: 'L186_2900',
            signalPos: { x: '1530', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1515', y: '600' }
        },
        {
            signalName: 'L1_2899D',
            signalPos: { x: '1530', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1545', y: '540' }
        },
        {
            signalName: 'L1_2900DN',
            signalPos: { x: '1530', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1545', y: '560' }
        },
        {
            // WRONG SIGNAL NAME | SIGNAL SHOULD HAVE NOT "N" IN NAME [L160_2899]
            signalName: 'L160_2899N',
            signalPos: { x: '1530', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1545', y: '580' }
        },
        {
            signalName: 'L186_2900N',
            signalPos: { x: '1530', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1545', y: '600' }
        },

        //
        // SECOND GROUP
        //
        {
            signalName: 'L1_2885DN',
            signalPos: { x: '1610', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1595', y: '540' }
        },
        {
            signalName: 'L1_2886D',
            signalPos: { x: '1610', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1595', y: '560' }
        },
        {
            signalName: 'L160_2885N',
            signalPos: { x: '1610', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1595', y: '580' }
        },
        {
            signalName: 'L186_2886',
            signalPos: { x: '1610', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1595', y: '600' }
        },
        {
            signalName: 'L1_2885D',
            signalPos: { x: '1610', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1625', y: '540' }
        },
        {
            signalName: 'L1_2886DN',
            signalPos: { x: '1610', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1625', y: '560' }
        },
        {
            signalName: 'L160_2885',
            signalPos: { x: '1610', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1625', y: '580' }
        },
        {
            signalName: 'L186_2886N',
            signalPos: { x: '1610', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1625', y: '600' }
        },

        //
        // THIRD GROUP
        //
        {
            signalName: 'L1_2869DN',
            signalPos: { x: '1690', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1675', y: '540' }
        },
        {
            signalName: 'L1_2868D',
            signalPos: { x: '1690', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1675', y: '560' }
        },
        {
            signalName: 'L160_2869N',
            signalPos: { x: '1690', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1675', y: '580' }
        },
        {
            signalName: 'L186_2870',
            signalPos: { x: '1690', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1675', y: '600' }
        },
        ////////////////////////////////////////////////
        {
            signalName: 'L1_2869D',
            signalPos: { x: '1690', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1705', y: '540' }
        },
        {
            signalName: 'L1_2868DN',
            signalPos: { x: '1690', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1705', y: '560' }
        },
        {
            signalName: 'L160_2869',
            signalPos: { x: '1690', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1705', y: '580' }
        },
        {
            signalName: 'L186_2869N',
            signalPos: { x: '1690', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1705', y: '600' }
        },
        //
        // FOURTH GROUP
        //
        {
            signalName: 'L1_2851N',
            signalPos: { x: '1840', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1825', y: '540' }
        },
        {
            signalName: 'L1_2852',
            signalPos: { x: '1840', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1825', y: '560' }
        },
        {
            signalName: 'L160_2854',
            signalPos: { x: '1840', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1825', y: '580' }
        },
        {
            signalName: 'L186_2852',
            signalPos: { x: '1840', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1825', y: '600' }
        },
        ////
        {
            signalName: 'L1_2851',
            signalPos: { x: '1840', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1855', y: '540' }
        },
        {
            signalName: 'L1_2854N',
            signalPos: { x: '1840', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1855', y: '560' }
        },
        {
            signalName: 'L160_2853',
            signalPos: { x: '1840', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1855', y: '580' }
        },
        {
            signalName: 'L186_2851',
            signalPos: { x: '1840', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1855', y: '600' }
        },
        //#endregion

        //#region [LC] Lazy LC
        {
            signalName: 'LC_T',
            signalPos: { x: '2000', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1985', y: '500' }
        },
        {
            signalName: 'LC_U',
            signalPos: { x: '2000', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1985', y: '520' }
        },
        {
            signalName: 'LC_W1',
            signalPos: { x: '2000', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1985', y: '540' }
        },
        {
            signalName: 'LC_W2',
            signalPos: { x: '2000', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1985', y: '560' }
        },
        {
            signalName: 'LC_Y',
            signalPos: { x: '2000', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1985', y: '580' }
        },
        {
            signalName: 'LC_Z',
            signalPos: { x: '2000', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1985', y: '600' }
        },
        //
        //
        //
        {
            signalName: 'LC_S7',
            signalPos: { x: '2065', y: '460' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2080', y: '460' }
        },
        {
            signalName: 'LC_S3',
            signalPos: { x: '2200', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2215', y: '520' }
        },
        {
            signalName: 'LC_S1',
            signalPos: { x: '2200', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2215', y: '540' }
        },
        {
            signalName: 'LC_S2',
            signalPos: { x: '2200', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2215', y: '560' }
        },
        {
            signalName: 'LC_S4',
            signalPos: { x: '2200', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2215', y: '580' }
        },
        {
            signalName: 'LC_S6',
            signalPos: { x: '2200', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2215', y: '600' }
        },
        //#endregion
        
        //#region [LB] LAZY LB
        {
            signalName: 'LB_P7',
            signalPos: { x: '2280', y: '380' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2265', y: '380' }
        },
        {
            signalName: 'LB_P3',
            signalPos: { x: '2280', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2265', y: '520' }
        },
        {
            signalName: 'LB_P1',
            signalPos: { x: '2280', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2265', y: '540' }
        },
        {
            signalName: 'LB_P2',
            signalPos: { x: '2280', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2265', y: '560' }
        },
        {
            signalName: 'LB_M4',
            signalPos: { x: '2280', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2265', y: '580' }
        },
        {
            signalName: 'LB_M6',
            signalPos: { x: '2280', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2265', y: '600' }
        },

        //#endregion
    ]
}