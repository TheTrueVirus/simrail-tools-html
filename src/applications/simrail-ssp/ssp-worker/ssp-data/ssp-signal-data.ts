import { SSP_DATA_TYPES } from "./ssp-data-types"


export const SSP_SIGNALS: SSP_DATA_TYPES.SIGNALS = {
    "sspArea1": [
        //#region Katowice Towarowa KTC / Brynow
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

        //#region [KO] Katowice
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
            signalPos: { x: '430', y: '80' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '80' }
        },
        {
            signalName: 'KO_N7',
            signalPos: { x: '430', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '100' }
        },
        {
            signalName: 'KO_N5',
            signalPos: { x: '430', y: '120' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '120' }
        },
        {
            signalName: 'KO_N3',
            signalPos: { x: '430', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '140' }
        },
        {
            signalName: 'KO_N1',
            signalPos: { x: '430', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '445', y: '180' }
        },
        {
            signalName: 'KO_N2',
            signalPos: { x: '410', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '425', y: '200' }
        },
        {
            signalName: 'KO_N4',
            signalPos: { x: '410', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '425', y: '220' }
        },
        {
            signalName: 'KO_N6',
            signalPos: { x: '410', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '425', y: '240' }
        },
        {
            signalName: 'KO_N8',
            signalPos: { x: '410', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '425', y: '260' }
        },
        {
            signalName: 'KO_N10',
            signalPos: { x: '410', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '425', y: '280' }
        },
        //
        // BETWEEN SIGNALS TO THE RIGHT SIDE
        //
        {
            signalName: 'KO_M9',
            signalPos: { x: '510', y: '80' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '80' }
        },
        {
            signalName: 'KO_M7',
            signalPos: { x: '510', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '100' }
        },
        {
            signalName: 'KO_M5',
            signalPos: { x: '510', y: '120' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '120' }
        },
        {
            signalName: 'KO_M3',
            signalPos: { x: '510', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '140' }
        },
        {
            signalName: 'KO_M1',
            signalPos: { x: '510', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '495', y: '180' }
        },
        {
            signalName: 'KO_M2',
            signalPos: { x: '490', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '475', y: '200' }
        },
        {
            signalName: 'KO_M4',
            signalPos: { x: '490', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '475', y: '220' }
        },
        {
            signalName: 'KO_M6',
            signalPos: { x: '490', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '475', y: '240' }
        },
        {
            signalName: 'KO_M8',
            signalPos: { x: '490', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '475', y: '260' }
        },
        {
            signalName: 'KO_M10',
            signalPos: { x: '490', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '475', y: '280' }
        },
        //
        // BETWEEN SIGNALS TO THE LEFT SIDE
        //
        {
            signalName: 'KO_L',
            signalPos: { x: '640', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '140' }
        },
        {
            signalName: 'KO_J',
            signalPos: { x: '640', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '160' }
        },
        {
            signalName: 'KO_K',
            signalPos: { x: '640', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '180' }
        },
        {
            signalName: 'KO_G14',
            signalPos: { x: '640', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '240' }
        },
        {
            signalName: 'KO_G16',
            signalPos: { x: '640', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '260' }
        },
        {
            signalName: 'KO_G18',
            signalPos: { x: '640', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '280' }
        },
        {
            signalName: 'KO_F',
            signalPos: { x: '570', y: '320' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '585', y: '320' }
        },
        {
            signalName: 'KO_E15',
            signalPos: { x: '740', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '715', y: '160' }
        },
        {
            signalName: 'KO_E13',
            signalPos: { x: '740', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '715', y: '180' }
        },
        {
            signalName: 'KO_E14',
            signalPos: { x: '720', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '705', y: '240' }
        },
        {
            signalName: 'KO_E16',
            signalPos: { x: '720', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '705', y: '260' }
        },
        {
            signalName: 'KO_E18',
            signalPos: { x: '750', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '730', y: '280' }
        },
        {
            signalName: 'KO_E20',
            signalPos: { x: '770', y: '300' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '300' }
        },
        //
        // ENTRY SIGNALS RIGHT SIDE
        //
        {
            signalName: 'KO_D',
            signalPos: { x: '880', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '895', y: '160' }
        },
        {
            signalName: 'KO_C',
            signalPos: { x: '880', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '895', y: '180' }
        },
        {
            signalName: 'KO_B',
            signalPos: { x: '880', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '895', y: '240' }
        },
        {
            signalName: 'KO_A',
            signalPos: { x: '880', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '895', y: '260' }
        },
        //#endregion    

        //#region [KZ] Katowice Zawodzie
        //
        // ***ENTRY SIGNALS LEFT SIDE***
        {
            signalName: 'KZ_J1S',
            signalPos: { x: '960', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '945', y: '160' }
        },
        {
            signalName: 'KZ_O',
            signalPos: { x: '960', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '945', y: '180' }
        },
        {
            signalName: 'KZ_P1M',
            signalPos: { x: '960', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '945', y: '240' }
        },
        {
            signalName: 'KZ_P',
            signalPos: { x: '960', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '945', y: '260' }
        },
        //
        // ***EXIT SIGNALS TO THE LEFT***
        //
        {
            signalName: 'KZ_K',
            signalPos: { x: '1090', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '160' }
        },
        {
            signalName: 'KZ_K2',
            signalPos: { x: '1090', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '180' }
        },
        {
            signalName: 'KZ_M',
            signalPos: { x: '1090', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '240' }
        },
        {
            signalName: 'KZ_M4',
            signalPos: { x: '1090', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '260' }
        },
        {
            signalName: 'KZ_N6',
            signalPos: { x: '1090', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '280' }
        },
        {
            signalName: 'KZ_N8',
            signalPos: { x: '1100', y: '300' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '300' }
        },
        {
            signalName: 'KZ_N10',
            signalPos: { x: '1100', y: '320' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1115', y: '320' }
        },
        //
        // ***EXIT SIGNALS TO THE RIGHT***
        //
        {
            signalName: 'KZ_D1',
            signalPos: { x: '1190', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1165', y: '160' }
        },
        {
            signalName: 'KZ_D2',
            signalPos: { x: '1190', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1165', y: '180' }
        },
        {
            signalName: 'KZ_E3',
            signalPos: { x: '1190', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1165', y: '240' }
        },
        {
            signalName: 'KZ_E',
            signalPos: { x: '1190', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1165', y: '260' }
        },
        {
            signalName: 'KZ_F',
            signalPos: { x: '1190', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1165', y: '280' }
        },
        {
            signalName: 'KZ_G',
            signalPos: { x: '1180', y: '300' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1165', y: '300' }
        },
        {
            signalName: 'KZ_H',
            signalPos: { x: '1180', y: '320' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1165', y: '320' }
        },
        {
            signalName: 'KZ_J2',
            signalPos: { x: '1290', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1275', y: '260' }
        },
        //
        // ***ENTRY SIGNALS RIGHT SIDE***
        //
        {
            signalName: 'KZ_B1',
            signalPos: { x: '1290', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1305', y: '160' }
        },
        {
            signalName: 'KZ_B2',
            signalPos: { x: '1290', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1305', y: '180' }
        },
        {
            signalName: 'KZw_A',
            signalPos: { x: '1290', y: '240' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1305', y: '240' }
        },
        {
            signalName: 'KZ_J',
            signalPos: { x: '1290', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1305', y: '260' }
        },
        //#endregion

        //#region Katowice Zawodzie <-> Sosnowiec Glowny
        //
        {
            signalName: 'L1_3133N',
            signalPos: { x: '1370', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1355', y: '160' }
        },
        {
            signalName: 'L1_3138',
            signalPos: { x: '1370', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1355', y: '180' }
        },

        {
            signalName: 'L1_3133',
            signalPos: { x: '1370', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1385', y: '160' }
        },
        {
            signalName: 'L1_3121N',
            signalPos: { x: '1450', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1435', y: '160' }
        },
        {
            signalName: 'L1_3128',
            signalPos: { x: '1450', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1435', y: '180' }
        },
        {
            signalName: 'L1_3121',
            signalPos: { x: '1450', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1465', y: '160' }
        },
        {
            signalName: 'L1_3128N',
            signalPos: { x: '1450', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1465', y: '180' }
        },
        //#endregion

        //#region [SG] Sos. Glowny
        //
        {
            signalName: 'SG_X',
            signalPos: { x: '1530', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1515', y: '160' }
        },
        {
            signalName: 'SG_Y',
            signalPos: { x: '1530', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1515', y: '180' }
        },
        {
            signalName: 'SG_U1',
            signalPos: { x: '1570', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1585', y: '160' }
        },
        {
            signalName: 'SG_U2',
            signalPos: { x: '1570', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1585', y: '180' }
        },
        {
            signalName: 'SG_S',
            signalPos: { x: '1550', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1535', y: '200' }
        },
        {
            signalName: 'SG_P',
            signalPos: { x: '1550', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1535', y: '220' }
        },
        {
            signalName: 'SG_R1',
            signalPos: { x: '1650', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '160' }
        },
        {
            signalName: 'SG_R2',
            signalPos: { x: '1650', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '180' }
        },
        //
        // EXIT SIGNALS TO THE LEFT
        //
        // {
        //     signalName: 'SG_N13',
        //     signalPos: { x: '1780', y: '40' },
        //     isSignalABS: false,
        //     signalDirectionOnMap: 'left',
        //     trainPos: { x: '1795', y: '40' }
        // },
        // {
        //     signalName: 'SG_N11',
        //     signalPos: { x: '1780', y: '60' },
        //     isSignalABS: false,
        //     signalDirectionOnMap: 'left',
        //     trainPos: { x: '1795', y: '60' }
        // },
        {
            signalName: 'SG_N9',
            signalPos: { x: '1770', y: '80' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1785', y: '80' }
        },
        {
            signalName: 'SG_N7',
            signalPos: { x: '1770', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1785', y: '100' }
        },
        {
            signalName: 'SG_N5',
            signalPos: { x: '1770', y: '120' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1785', y: '120' }
        },
        {
            signalName: 'SG_N3',
            signalPos: { x: '1750', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1785', y: '140' }
        },
        {
            signalName: 'SG_N1',
            signalPos: { x: '1750', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1785', y: '160' }
        },
        {
            signalName: 'SG_N2',
            signalPos: { x: '1750', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1785', y: '180' }
        },
        {
            signalName: 'SG_N4',
            signalPos: { x: '1730', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1745', y: '200' }
        },
        //
        // EXIT SIGNALS TO THE RIGHT
        //
        {
            signalName: 'SG_H9',
            signalPos: { x: '1850', y: '80' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1835', y: '80' }
        },
        {
            signalName: 'SG_H7',
            signalPos: { x: '1850', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1835', y: '100' }
        },
        {
            signalName: 'SG_H5',
            signalPos: { x: '1850', y: '120' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1835', y: '120' }
        },
        {
            signalName: 'SG_H3',
            signalPos: { x: '1870', y: '140' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1835', y: '140' }
        },
        {
            signalName: 'SG_H1',
            signalPos: { x: '1870', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1835', y: '160' }
        },
        {
            signalName: 'SG_H2',
            signalPos: { x: '1870', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1835', y: '180' }
        },
        {
            signalName: 'SG_H4',
            signalPos: { x: '1870', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1835', y: '200' }
        },
        //
        // ENTRY SIGNALS RIGHT SIDE
        //
        // {
        //     //FROM BEDIN UNUSED TRACK
        //     signalName: 'SG_C',
        //     signalPos: { x: '2000', y: '110' },
        //     isSignalABS: false,
        //     signalDirectionOnMap: 'left',
        //     trainPos: { x: '2015', y: '110' }
        // },
        {
            signalName: 'SG_B',
            signalPos: { x: '1990', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2005', y: '160' }
        },
        {
            signalName: 'SG_A',
            signalPos: { x: '1990', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2005', y: '180' }
        },
        //#endregion

        //#region [Spl] Sosn. Polud.
        {
            signalName: 'SPl1_T',
            signalPos: { x: '1590', y: '340' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1575', y: '340' }
        },
        {
            signalName: 'Spl1_W',
            signalPos: { x: '1590', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1575', y: '260' }
        },
        {
            signalName: 'Spl1_J',
            signalPos: { x: '1680', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1695', y: '260' }
        },
        {
            signalName: 'Spl1_K',
            signalPos: { x: '1680', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1695', y: '280' }
        },
        {
            signalName: 'Spl1_L',
            signalPos: { x: '1680', y: '300' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1695', y: '300' }
        },
        {
            signalName: 'Spl1_M',
            signalPos: { x: '1680', y: '320' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1695', y: '320' }
        },
        {
            signalName: 'Spl1_C',
            signalPos: { x: '1760', y: '260' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1745', y: '260' }
        },
        {
            signalName: 'Spl1_B',
            signalPos: { x: '1760', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1745', y: '280' }
        },
        {
            signalName: 'Spl1_D',
            signalPos: { x: '1760', y: '300' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1745', y: '300' }
        },
        {
            signalName: 'Spl1_E',
            signalPos: { x: '1760', y: '320' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1745', y: '320' }
        },
        {
            signalName: 'Spl1_A',
            signalPos: { x: '1810', y: '280' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1825', y: '280' }
        },
        //#endregion

        //#region Sosnowiec Glowny <-> Bedzin
        //
        {
            signalName: 'L1_3075N',
            signalPos: { x: '2070', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2055', y: '160' }
        },
        {
            signalName: 'L1_3076',
            signalPos: { x: '2070', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2055', y: '180' }
        },
        {
            signalName: 'L1_3071',
            signalPos: { x: '2070', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2085', y: '160' }
        },
        {
            signalName: 'L1_3070N',
            signalPos: { x: '2070', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2085', y: '180' }
        },
        //#endregion

        //#region [B] Bedzin
        //

        //
        // ENTRY SIGNALS LEFT SIDE
        //
        // {
        //     // FROM SG UNUSED TRACK
        //     signalName: 'B_P',
        //     signalPos: { x: '2140', y: '110' },
        //     isSignalABS: false,
        //     signalDirectionOnMap: 'right',
        //     trainPos: { x: '2125', y: '110' }
        // },
        {
            signalName: 'B_R',
            signalPos: { x: '2150', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2135', y: '160' }
        },
        {
            signalName: 'B_S',
            signalPos: { x: '2150', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2135', y: '180' }
        },
        //
        // EXIT SIGNALS LEFT SIDE
        //
        {
            signalName: 'B_K1',
            signalPos: { x: '2200', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2225', y: '160' }
        },
        {
            signalName: 'B_K2',
            signalPos: { x: '2200', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2225', y: '180' }
        },
        {
            signalName: 'B_K4',
            signalPos: { x: '2200', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2225', y: '200' }
        },
        {
            signalName: 'B_K6',
            signalPos: { x: '2210', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2225', y: '220' }
        },
        //
        // EXIT SIGNALS RIGHT SIDE
        //
        {
            signalName: 'B_E1',
            signalPos: { x: '2300', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2275', y: '160' }
        },
        {
            signalName: 'B_E2',
            signalPos: { x: '2300', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2275', y: '180' }
        },
        {
            signalName: 'B_E4',
            signalPos: { x: '2300', y: '200' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2275', y: '200' }
        },
        {
            signalName: 'B_E6',
            signalPos: { x: '2290', y: '220' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2275', y: '220' }
        },

        //
        // BLOCK SIGNALS AND ENTRY SIGNALS RIGHT SIDE
        //
        {
            signalName: 'B_C',
            signalPos: { x: '2370', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2355', y: '160' }
        },
        {
            signalName: 'B_D',
            signalPos: { x: '2370', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2355', y: '180' }
        },
        {
            signalName: 'B_B',
            signalPos: { x: '2370', y: '160' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2385', y: '160' }
        },
        {
            signalName: 'B_A',
            signalPos: { x: '2370', y: '180' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2385', y: '180' }
        },
        //#endregion

        //#region Bedzin <-> Dabrowa Gornicza
        //
        //
        // SIGNALS ON THE RIGHT SIDE FIRST SCREEN ROW
        {
            signalName: 'L1_3037N',
            signalPos: { x: '2450', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2435', y: '160' }
        },
        {
            signalName: 'L1_3036',
            signalPos: { x: '2450', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2435', y: '180' }
        },
        {
            signalName: 'L1_3037',
            signalPos: { x: '2450', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2465', y: '160' }
        },
        {
            signalName: 'L1_3036N',
            signalPos: { x: '2450', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2465', y: '180' }
        },
        {
            signalName: 'L1_3023N',
            signalPos: { x: '2530', y: '160' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2515', y: '160' }
        },
        {
            signalName: 'L1_3022',
            signalPos: { x: '2530', y: '180' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2515', y: '180' }
        },
        //
        // SECOND ROW
        //
        {
            signalName: 'L1_3023',
            signalPos: { x: '30', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '45', y: '500' }
        },
        {
            signalName: 'L1_3022N',
            signalPos: { x: '30', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '45', y: '520' }
        },
        //#endregion

        //#region [DG] Dabrowa Gornicza
        {
            signalName: 'DG_O',
            signalPos: { x: '110', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '95', y: '500' }
        },
        {
            signalName: 'DG_P',
            signalPos: { x: '110', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '95', y: '520' }
        },
        {
            signalName: 'DG_N1',
            signalPos: { x: '150', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '235', y: '500' }
        },
        {
            signalName: 'DG_N2',
            signalPos: { x: '150', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '165', y: '520' }
        },
        {
            signalName: 'DG_D',
            signalPos: { x: '230', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '215', y: '520' }
        },
        {
            signalName: 'DG_C1',
            signalPos: { x: '300', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '285', y: '500' }
        },
        {
            signalName: 'DG_C2',
            signalPos: { x: '300', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '285', y: '520' }
        },
        {
            signalName: 'DG_A',
            signalPos: { x: '370', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '385', y: '500' }
        },
        {
            signalName: 'DG_B',
            signalPos: { x: '370', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '385', y: '520' }
        },
        //#endregion

        //#region Dabrowa Gornicza <-> Dabrowa Gornicza Zabkowice
        {
            signalName: 'L1_2983N',
            signalPos: { x: '450', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '435', y: '500' }
        },
        {
            signalName: 'L1_2980',
            signalPos: { x: '450', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '435', y: '520' }
        },
        {
            signalName: 'L1_2983',
            signalPos: { x: '450', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '465', y: '500' }
        },
        {
            signalName: 'L1_2980N',
            signalPos: { x: '450', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '465', y: '520' }
        },
        {
            signalName: 'L1_2971N',
            signalPos: { x: '530', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '515', y: '500' }
        },
        {
            signalName: 'L1_2966',
            signalPos: { x: '530', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '515', y: '520' }
        },
        {
            signalName: 'L1_2971',
            signalPos: { x: '530', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '545', y: '500' }
        },
        {
            signalName: 'L1_2966N',
            signalPos: { x: '530', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '545', y: '520' }
        },
        {
            signalName: 'L1_2955N',
            signalPos: { x: '610', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '595', y: '500' }
        },
        {
            signalName: 'L1_2952',
            signalPos: { x: '610', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '595', y: '520' }
        },
        {
            signalName: 'L1_2955',
            signalPos: { x: '610', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '625', y: '500' }
        },
        {
            signalName: 'L1_2952N',
            signalPos: { x: '610', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '625', y: '520' }
        },
        {
            signalName: 'L1_2941',
            signalPos: { x: '690', y: '500' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '500' }
        },
        //#endregion

        //#region [DZA] Dabrowa Gornicza Zabkowice
        //
        // ENTRY SIGNALS FROM DABROWA GORNICZA
        //
        {
            signalName: 'DZ_W',
            signalPos: { x: '690', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '675', y: '500' }
        },
        {
            signalName: 'DZ_X',
            signalPos: { x: '690', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '675', y: '520' }
        },
        {
            // EXIT SIGNAL TO DABROWA GORNICZA LEFT TRACK
            signalName: 'DZ_X2N',
            signalPos: { x: '690', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '520' }
        },
        //
        // EXIT SIGNALS TO DABROWA GORNICZA
        //
        {
            signalName: 'DZ_P',
            signalPos: { x: '900', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '915', y: '520' }
        },
        {
            signalName: 'DZ_O',
            signalPos: { x: '900', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '915', y: '540' }
        },
        {
            signalName: 'DZ_N4',
            signalPos: { x: '910', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '925', y: '620' }
        },
        {
            signalName: 'DZ_N6',
            signalPos: { x: '910', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '925', y: '640' }
        },
        //
        // ZSIG TO LAZY
        //
        {
            signalName: 'DZ_J',
            signalPos: { x: '980', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '965', y: '520' }
        },
        {
            signalName: 'DZ_K',
            signalPos: { x: '990', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '975', y: '600' }
        },
        {
            signalName: 'DZ_M',
            signalPos: { x: '1000', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '985', y: '640' }
        },
        {
            signalName: 'DZ_L',
            signalPos: { x: '1000', y: '660' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '985', y: '660' }
        },
        //
        // G-SIGNALS + F
        // 
        {
            signalName: 'DZ_G13',
            signalPos: { x: '1040', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1055', y: '520' }
        },
        {
            signalName: 'DZ_G11',
            signalPos: { x: '1040', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1055', y: '540' }
        },
        {
            signalName: 'DZ_G9',
            signalPos: { x: '1040', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1055', y: '560' }
        },
        {
            signalName: 'DZ_F',
            signalPos: { x: '1040', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1055', y: '620' }
        },
        //
        // C-SIGNALS + D
        //
        {
            signalName: 'DZ_C13',
            signalPos: { x: '1130', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1115', y: '520' }
        },
        {
            signalName: 'DZ_C10',
            signalPos: { x: '1110', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1095', y: '580' }
        },
        {
            signalName: 'DZ_C12',
            signalPos: { x: '1110', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1095', y: '600' }
        },
        {
            signalName: 'DZ_D',
            signalPos: { x: '1120', y: '660' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1105', y: '660' }
        },
        //
        // ENTRY SIGNALS FROM LAZY LC
        //
        {
            signalName: 'DZ_B',
            signalPos: { x: '1260', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1275', y: '540' }
        },
        {
            signalName: 'DZ_E',
            signalPos: { x: '1260', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1275', y: '560' }
        },
        {
            signalName: 'DZ_A',
            signalPos: { x: '1260', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1275', y: '580' }
        },
        {
            signalName: 'DZ_H',
            signalPos: { x: '1260', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1275', y: '600' }
        },
        //
        // SIGNALS DGZ FREIGHT TRACKS ON THE LEFT SIDE
        //
        {
            signalName: 'DZ_Y',
            signalPos: { x: '600', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '585', y: '620' }
        },
        {
            signalName: 'DZ_Z',
            signalPos: { x: '600', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '585', y: '640' }
        },
        {
            signalName: 'DZ_U105',
            signalPos: { x: '680', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '695', y: '580' }
        },
        {
            signalName: 'DZ_U103',
            signalPos: { x: '680', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '695', y: '600' }
        },
        {
            signalName: 'DZ_U101',
            signalPos: { x: '680', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '695', y: '620' }
        },
        {
            signalName: 'DZ_U102',
            signalPos: { x: '680', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '695', y: '640' }
        },
        {
            signalName: 'DZ_S105',
            signalPos: { x: '760', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '745', y: '580' }
        },
        {
            signalName: 'DZ_S103',
            signalPos: { x: '760', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '745', y: '600' }
        },
        {
            signalName: 'DZ_S101',
            signalPos: { x: '760', y: '620' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '745', y: '620' }
        },
        {
            signalName: 'DZ_S102',
            signalPos: { x: '760', y: '640' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '745', y: '640' }
        },
        {
            signalName: 'DZ_S104',
            signalPos: { x: '760', y: '660' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '745', y: '660' }
        },
        //#endregion

        //#region Dabrowa Gornicza Zabkowice <-> LAZY LC

        //
        // FIRST GROUP
        //
        {
            signalName: 'L1_2899DN',
            signalPos: { x: '1340', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1325', y: '540' }
        },
        {
            signalName: 'L1_2900D',
            signalPos: { x: '1340', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1325', y: '560' }
        },
        {
            // WRONG SIGNAL NAME | SIGNAL SHOULD HAVE "N" IN NAME [L160_2899N]
            signalName: 'L160_2899',
            signalPos: { x: '1340', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1325', y: '580' }
        },
        {
            signalName: 'L186_2900',
            signalPos: { x: '1340', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1325', y: '600' }
        },
        {
            signalName: 'L1_2899D',
            signalPos: { x: '1340', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1355', y: '540' }
        },
        {
            signalName: 'L1_2900DN',
            signalPos: { x: '1340', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1355', y: '560' }
        },
        {
            // WRONG SIGNAL NAME | SIGNAL SHOULD HAVE NOT "N" IN NAME [L160_2899]
            signalName: 'L160_2899N',
            signalPos: { x: '1340', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1355', y: '580' }
        },
        {
            signalName: 'L186_2900N',
            signalPos: { x: '1340', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1355', y: '600' }
        },

        //
        // SECOND GROUP
        //
        {
            signalName: 'L1_2885DN',
            signalPos: { x: '1420', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1405', y: '540' }
        },
        {
            signalName: 'L1_2886D',
            signalPos: { x: '1420', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1405', y: '560' }
        },
        {
            signalName: 'L160_2885N',
            signalPos: { x: '1420', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1405', y: '580' }
        },
        {
            signalName: 'L186_2886',
            signalPos: { x: '1420', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1405', y: '600' }
        },
        {
            signalName: 'L1_2885D',
            signalPos: { x: '1420', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1435', y: '540' }
        },
        {
            signalName: 'L1_2886DN',
            signalPos: { x: '1420', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1435', y: '560' }
        },
        {
            signalName: 'L160_2885',
            signalPos: { x: '1420', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1435', y: '580' }
        },
        {
            signalName: 'L186_2886N',
            signalPos: { x: '1420', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1435', y: '600' }
        },

        //
        // THIRD GROUP
        //
        {
            signalName: 'L1_2869DN',
            signalPos: { x: '1500', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1485', y: '540' }
        },
        {
            signalName: 'L1_2868D',
            signalPos: { x: '1500', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1485', y: '560' }
        },
        {
            signalName: 'L160_2869N',
            signalPos: { x: '1500', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1485', y: '580' }
        },
        {
            signalName: 'L186_2870',
            signalPos: { x: '1500', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1485', y: '600' }
        },
        ////////////////////////////////////////////////
        {
            signalName: 'L1_2869D',
            signalPos: { x: '1500', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1515', y: '540' }
        },
        {
            signalName: 'L1_2868DN',
            signalPos: { x: '1500', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1515', y: '560' }
        },
        {
            signalName: 'L160_2869',
            signalPos: { x: '1500', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1515', y: '580' }
        },
        {
            signalName: 'L186_2869N',
            signalPos: { x: '1500', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1515', y: '600' }
        },
        //
        // FOURTH GROUP
        //
        {
            signalName: 'L1_2851N',
            signalPos: { x: '1650', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '540' }
        },
        {
            signalName: 'L1_2852',
            signalPos: { x: '1650', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '560' }
        },
        {
            signalName: 'L160_2854',
            signalPos: { x: '1650', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '580' }
        },
        {
            signalName: 'L186_2852',
            signalPos: { x: '1650', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '600' }
        },
        ////
        {
            signalName: 'L1_2851',
            signalPos: { x: '1650', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1665', y: '540' }
        },
        {
            signalName: 'L1_2854N',
            signalPos: { x: '1650', y: '560' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1665', y: '560' }
        },
        {
            signalName: 'L160_2853',
            signalPos: { x: '1650', y: '580' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1665', y: '580' }
        },
        {
            signalName: 'L186_2851',
            signalPos: { x: '1650', y: '600' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1665', y: '600' }
        },
        //#endregion

        //#region [LC] Lazy LC
        {
            signalName: 'LC_T',
            signalPos: { x: '1810', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1795', y: '500' }
        },
        {
            signalName: 'LC_U',
            signalPos: { x: '1810', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1795', y: '520' }
        },
        {
            signalName: 'LC_W1',
            signalPos: { x: '1810', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1795', y: '540' }
        },
        {
            signalName: 'LC_W2',
            signalPos: { x: '1810', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1795', y: '560' }
        },
        {
            signalName: 'LC_Y',
            signalPos: { x: '1810', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1795', y: '580' }
        },
        {
            signalName: 'LC_Z',
            signalPos: { x: '1810', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1795', y: '600' }
        },
        //
        //
        //
        {
            signalName: 'LC_S7',
            signalPos: { x: '1875', y: '460' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1890', y: '460' }
        },
        {
            signalName: 'LC_S3',
            signalPos: { x: '2010', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2025', y: '520' }
        },
        {
            signalName: 'LC_S1',
            signalPos: { x: '2010', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2025', y: '540' }
        },
        {
            signalName: 'LC_S2',
            signalPos: { x: '2010', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2025', y: '560' }
        },
        {
            signalName: 'LC_S4',
            signalPos: { x: '2010', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2025', y: '580' }
        },
        {
            signalName: 'LC_S6',
            signalPos: { x: '2010', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2025', y: '600' }
        },
        //#endregion
        
        //#region [LB] LAZY LB

        //
        // ENTRY SIGNALS LEFT SIDE
        //
        {
            signalName: 'LB_P7',
            signalPos: { x: '2090', y: '380' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2075', y: '380' }
        },
        {
            signalName: 'LB_P3',
            signalPos: { x: '2090', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2075', y: '520' }
        },
        {
            signalName: 'LB_P1',
            signalPos: { x: '2090', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2075', y: '540' }
        },
        {
            signalName: 'LB_P2',
            signalPos: { x: '2090', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2075', y: '560' }
        },
        {
            signalName: 'LB_M4',
            signalPos: { x: '2090', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2075', y: '580' }
        },
        {
            signalName: 'LB_M6',
            signalPos: { x: '2090', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2075', y: '600' }
        },

        //
        // EXIT SIGNALS LEFT SIDE
        //
        {
            signalName: 'LB_H3',
            signalPos: { x: '2150', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2165', y: '520' }
        },
        {
            signalName: 'LB_H1',
            signalPos: { x: '2150', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2165', y: '540' }
        },
        {
            signalName: 'LB_H2',
            signalPos: { x: '2150', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2165', y: '560' }
        },

        //
        // EXIT SIGNALS RIGHT SIDE
        //
        {
            signalName: 'LB_R3',
            signalPos: { x: '2230', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2215', y: '520' }
        },
        {
            signalName: 'LB_R1',
            signalPos: { x: '2230', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2215', y: '540' }
        },
        {
            signalName: 'LB_R2',
            signalPos: { x: '2230', y: '560' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2215', y: '560' }
        },
        {
            signalName: 'LB_O',
            signalPos: { x: '2230', y: '580' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2215', y: '580' }
        },
        {
            signalName: 'LB_N',
            signalPos: { x: '2230', y: '600' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2215', y: '600' }
        },

        //
        // EXIT SIGNALS FOR TRACKS 125/123
        //
        {
            signalName: 'LB_J125',
            signalPos: { x: '2230', y: '440' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2245', y: '440' }
        },
        {
            signalName: 'LB_J123',
            signalPos: { x: '2230', y: '460' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2245', y: '460' }
        },
        //
        // ENTRY SIGNALS RIGHT SIDE
        //
        {
            signalName: 'LB_Q125',
            signalPos: { x: '2450', y: '440' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2465', y: '440' }
        },
        {
            signalName: 'LB_Q123',
            signalPos: { x: '2450', y: '460' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2465', y: '460' }
        },
        {
            signalName: 'LB_G1',
            signalPos: { x: '2430', y: '520' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2445', y: '520' }
        },
        {
            signalName: 'LB_G2',
            signalPos: { x: '2430', y: '540' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2445', y: '540' }
        },
        //#endregion

        //#region LAZY LB <-> LAZY LA
        {
            signalName: 'L1_2791',
            signalPos: { x: '2510', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2495', y: '520' }
        },
        {
            signalName: 'L1_2790',
            signalPos: { x: '2510', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2495', y: '540' }
        },
        //#endregion
    ]
}
