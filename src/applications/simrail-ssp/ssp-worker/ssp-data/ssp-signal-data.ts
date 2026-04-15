import { SSP_DATA_TYPES } from "./ssp-data-types"

export const SSP_SIGNALS: SSP_DATA_TYPES.SIGNALS = {
    "sspArea1": [

        //
        //#region SSP SIGNALS AREA 1 [ROW 1]
        //

        //#region KTC / Brynow + ABS to/from Katowice
        {
            signalName: 'l139_bry_a',
            signalPos: { x: '110', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '125', y: '100' }
        },
        {
            signalName: 'l139_20',
            signalPos: { x: '190', y: '100' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '175', y: '100' }
        },
        {
            signalName: 'l139_15',
            signalPos: { x: '190', y: '100' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '205', y: '100' }
        },
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
            signalName: 'KO_T',
            signalPos: { x: '270', y: '100' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '255', y: '100' }
        },
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

        //#region [SG] Sosnowiec Glowny
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

        //#region [Spl1] Sosnowiec Poludniowy
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

        //#region Bedzin <-> Dabrowa Gornicza [ROW1]
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
        //#endregion

        //
        //#endregion
        //

        //
        //#region SSP SIGNALS AREA 1 [ROW 2]
        //

        //#region Bedzin <-> Dabrowa Gornicza [ROW2]
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

        //#region [DZ] Dabrowa Gornicza Zabkowice
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

        //#region Dabrowa Gornicza Zabkowice <-> Lazy LC

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

        //#region [LB] Lazy LB

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
            signalPos: { x: '2450', y: '480' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2465', y: '480' }
        },
        {
            signalName: 'LB_Q123',
            signalPos: { x: '2450', y: '500' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2465', y: '500' }
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

        //#region Lazy LB <-> Lazy LA [ROW1]
        {
            signalName: 'L1_2791',
            signalPos: { x: '2530', y: '520' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2515', y: '520' }
        },
        {
            signalName: 'L1_2790',
            signalPos: { x: '2530', y: '540' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2515', y: '540' }
        },
        //#endregion

        //
        //#endregion
        //

        //
        //#region SSP SIGNALS AREA 1 [ROW3]
        //

        //#region Lazy LB <-> Lazy LA [ROW2]
        {
            signalName: 'L1_2781',
            signalPos: { x: '140', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '155', y: '900' }
        },
        {
            signalName: 'L1_2780N',
            signalPos: { x: '140', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '155', y: '920' }
        },
        //#endregion

        //#region [LA] Lazy LA
        //? 
        //? EXIT SIGNALS UPPER FREIGHT GROUP
        //? 
        {
            signalName: 'LA_F119',
            signalPos: { x: '90', y: '720' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '105', y: '720' }
        },
        {
            signalName: 'LA_F117',
            signalPos: { x: '170', y: '740' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '740' }
        },
        {
            signalName: 'LA_F115',
            signalPos: { x: '170', y: '760' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '760' }
        },
        {
            signalName: 'LA_F113',
            signalPos: { x: '170', y: '780' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '780' }
        },
        {
            signalName: 'LA_F111',
            signalPos: { x: '170', y: '800' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '800' }
        },
        {
            signalName: 'LA_F109',
            signalPos: { x: '170', y: '820' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '820' }
        },
        {
            signalName: 'LA_F107',
            signalPos: { x: '170', y: '840' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '840' }
        },
        {
            signalName: 'LA_F105',
            signalPos: { x: '170', y: '860' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '860' }
        },
        {
            signalName: 'LA_F103',
            signalPos: { x: '170', y: '880' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '185', y: '880' }
        },
        //?
        //? ENTRY SIGNALS LEFT SIDE
        //?
        {
            signalName: 'LA_E1',
            signalPos: { x: '260', y: '900' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '245', y: '900' }
        },
        {
            signalName: 'LA_E2',
            signalPos: { x: '260', y: '920' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '245', y: '920' }
        },
        //?
        //? ENTRY SIGNALS + EXIT SIGNALS LOWER FREIGHT GROUP
        //?
        {
            //? ENTRY SIGNAL LA_H324
            signalName: 'LA_H324',
            signalPos: { x: '100', y: '1060' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '85', y: '1060' }
        },
        {
            signalName: 'LA_E124',
            signalPos: { x: '330', y: '960' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '315', y: '960' }
        },
        {
            signalName: 'LA_E126',
            signalPos: { x: '330', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '315', y: '980' }
        },
        {
            signalName: 'LA_E128',
            signalPos: { x: '330', y: '1000' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '315', y: '1000' }
        },
        {
            signalName: 'LA_E130',
            signalPos: { x: '330', y: '1020' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '315', y: '1020' }
        },
        {
            signalName: 'LA_E132',
            signalPos: { x: '330', y: '1040' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '315', y: '1040' }
        },
        {
            signalName: 'LA_E134',
            signalPos: { x: '330', y: '1060' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '315', y: '1060' }
        },
        {
            signalName: 'LA_E136',
            signalPos: { x: '330', y: '1080' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '315', y: '1080' }
        },
        {
            signalName: 'LA_E138',
            signalPos: { x: '330', y: '1100' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '315', y: '1100' }
        },
        //?
        //? ENTRY SIGNALS RIGHT SIDE
        //?
        {
            signalName: 'LA_D3',
            signalPos: { x: '480', y: '880' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '495', y: '880' }
        },
        {
            signalName: 'LA_C1',
            signalPos: { x: '480', y: '900' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '495', y: '900' }
        },
        {
            signalName: 'LA_C2',
            signalPos: { x: '480', y: '920' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '495', y: '920' }
        },
        {
            signalName: 'LA_B',
            signalPos: { x: '480', y: '940' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '495', y: '940' }
        },
        //#endregion

        //#region [Zw] Zawiercie

        //
        // ENTRY SIGNALS LEFT SIDE
        //
        {
            signalName: 'Zw_W',
            signalPos: { x: '560', y: '880' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '545', y: '880' }
        },
        {
            signalName: 'Zw_M',
            signalPos: { x: '800', y: '900' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '785', y: '900' }
        },
        {
            signalName: 'Zw_N',
            signalPos: { x: '800', y: '920' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '785', y: '920' }
        },
        {
            signalName: 'Zw_R',
            signalPos: { x: '560', y: '940' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '545', y: '940' }
        },

        //
        // SIGNALS FREIGHT TRACKS LEFT
        //
        {
            signalName: 'Zw_S3',
            signalPos: { x: '700', y: '880' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '715', y: '880' }
        },
        {
            signalName: 'Zw_P4',
            signalPos: { x: '640', y: '940' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '655', y: '940' }
        },
        {
            signalName: 'Zw_P104',
            signalPos: { x: '690', y: '960' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '960' }
        },
        {
            signalName: 'Zw_P106',
            signalPos: { x: '690', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '980' }
        },
        {
            signalName: 'Zw_P108',
            signalPos: { x: '690', y: '1000' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '1000' }
        },
        {
            signalName: 'Zw_P110',
            signalPos: { x: '690', y: '1020' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '1020' }
        },
        {
            signalName: 'Zw_P112',
            signalPos: { x: '690', y: '1040' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '1040' }
        },
        {
            signalName: 'Zw_P114',
            signalPos: { x: '690', y: '1060' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '1060' }
        },
        {
            signalName: 'Zw_P116',
            signalPos: { x: '690', y: '1080' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '1080' }
        },
        {
            signalName: 'Zw_P118',
            signalPos: { x: '690', y: '1100' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '1100' }
        },
        {
            signalName: 'Zw_P120',
            signalPos: { x: '690', y: '1120' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '705', y: '1120' }
        },

        //
        // SIGNALS FREIGHT TRACKS LEFT
        //
        {
            signalName: 'Zw_O4',
            signalPos: { x: '770', y: '940' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '940' }
        },
        {
            signalName: 'Zw_O104',
            signalPos: { x: '770', y: '960' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '960' }
        },
        {
            signalName: 'Zw_O106',
            signalPos: { x: '770', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '980' }
        },
        {
            signalName: 'Zw_O108',
            signalPos: { x: '770', y: '1000' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '1000' }
        },
        {
            signalName: 'Zw_O110',
            signalPos: { x: '770', y: '1020' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '1020' }
        },
        {
            signalName: 'Zw_O112',
            signalPos: { x: '770', y: '1040' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '1040' }
        },
        {
            signalName: 'Zw_O114',
            signalPos: { x: '770', y: '1060' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '1060' }
        },
        {
            signalName: 'Zw_O116',
            signalPos: { x: '770', y: '1080' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '1080' }
        },
        {
            signalName: 'Zw_O118',
            signalPos: { x: '770', y: '1100' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '1100' }
        },
        {
            signalName: 'Zw_O120',
            signalPos: { x: '770', y: '1120' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '755', y: '1120' }
        },

        //
        // SIGNALS LEFT OF PLATFORM
        //
        {
            signalName: 'Zw_H7',
            signalPos: { x: '1000', y: '840' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1015', y: '840' }
        },
        {
            signalName: 'Zw_H5',
            signalPos: { x: '1000', y: '860' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1015', y: '860' }
        },
        {
            signalName: 'Zw_H3',
            signalPos: { x: '1000', y: '880' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1015', y: '880' }
        },
        {
            signalName: 'Zw_G1',
            signalPos: { x: '1020', y: '900' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1035', y: '900' }
        },
        {
            signalName: 'Zw_G2',
            signalPos: { x: '1020', y: '960' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1035', y: '960' }
        },
        {
            signalName: 'Zw_H4',
            signalPos: { x: '970', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '985', y: '980' }
        },

        //
        // SIGNALS RIGHT SIDE OF PLATFORM
        //
        {
            signalName: 'Zw_E7',
            signalPos: { x: '1140', y: '840' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1115', y: '840' }
        },
        {
            signalName: 'Zw_E5',
            signalPos: { x: '1140', y: '860' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1115', y: '860' }
        },
        {
            signalName: 'Zw_E3',
            signalPos: { x: '1120', y: '880' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1095', y: '880' }
        },
        {
            signalName: 'Zw_E1',
            signalPos: { x: '1100', y: '900' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1085', y: '900' }
        },
        {
            signalName: 'Zw_E2',
            signalPos: { x: '1100', y: '960' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1085', y: '960' }
        },
        {
            signalName: 'Zw_E4',
            signalPos: { x: '1140', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1090', y: '980' }
        },

        //
        // ENTRY SIGNALS RIGHT SIDE
        //
        {
            signalName: 'Zw_D',
            signalPos: { x: '1250', y: '880' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1265', y: '880' }
        },
        {
            signalName: 'Zw_C',
            signalPos: { x: '1250', y: '900' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1265', y: '900' }
        },
        {
            signalName: 'Zw_B',
            signalPos: { x: '1250', y: '920' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1265', y: '920' }
        },
        {
            signalName: 'Zw_A',
            signalPos: { x: '1250', y: '940' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1265', y: '940' }
        },

        //#endregion

        //#region Zawiercie <-> Myszkow / Gora Wlodowska

        //#region Zawiercie <-> Myszkow

        //? ABS SIGNALS IN STATION AREA
        {
            signalName: 'L1_2729N',
            signalPos: { x: '1250', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '900' }
        },
        {
            signalName: 'L1_2728',
            signalPos: { x: '1250', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1235', y: '920' }
        },


        {
            signalName: 'L1_2719N',
            signalPos: { x: '1330', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1315', y: '900' }
        },
        {
            signalName: 'L1_2718',
            signalPos: { x: '1330', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1315', y: '920' }
        },
        {
            signalName: 'L1_2719',
            signalPos: { x: '1330', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1345', y: '900' }
        },
        {
            signalName: 'L1_2718N',
            signalPos: { x: '1330', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1345', y: '920' }
        },


        {
            signalName: 'L1_2707N',
            signalPos: { x: '1410', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1395', y: '900' }
        },
        {
            signalName: 'L1_2706',
            signalPos: { x: '1410', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1395', y: '920' }
        },
        {
            signalName: 'L1_2707',
            signalPos: { x: '1410', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1425', y: '900' }
        },
        {
            signalName: 'L1_2706N',
            signalPos: { x: '1410', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1425', y: '920' }
        },


        {
            signalName: 'L1_2693N',
            signalPos: { x: '1490', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1475', y: '900' }
        },
        {
            signalName: 'L1_2692',
            signalPos: { x: '1490', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1475', y: '920' }
        },
        {
            signalName: 'L1_2693',
            signalPos: { x: '1490', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1505', y: '900' }
        },
        {
            signalName: 'L1_2692N',
            signalPos: { x: '1490', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1505', y: '920' }
        },


        {
            signalName: 'L1_2677N',
            signalPos: { x: '1570', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1555', y: '900' }
        },
        {
            signalName: 'L1_2676',
            signalPos: { x: '1570', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1555', y: '920' }
        },
        {
            signalName: 'L1_2677',
            signalPos: { x: '1570', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1585', y: '900' }
        },
        {
            signalName: 'L1_2676N',
            signalPos: { x: '1570', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1585', y: '920' }
        },


        {
            signalName: 'L1_2665N',
            signalPos: { x: '1650', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '900' }
        },
        {
            signalName: 'L1_2661',
            signalPos: { x: '1650', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '920' }
        },
        {
            signalName: 'L1_2665',
            signalPos: { x: '1650', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1665', y: '900' }
        },
        {
            signalName: 'L1_2662N',
            signalPos: { x: '1650', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1665', y: '920' }
        },


        {
            signalName: 'L1_2651N',
            signalPos: { x: '1730', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1715', y: '900' }
        },
        {
            signalName: 'L1_2650',
            signalPos: { x: '1730', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1715', y: '920' }
        },
        {
            signalName: 'L1_2651',
            signalPos: { x: '1740', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1755', y: '900' }
        },
        {
            signalName: 'L1_2650N',
            signalPos: { x: '1740', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1755', y: '920' }
        },


        {
            signalName: 'L1_2637N',
            signalPos: { x: '1820', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1805', y: '900' }
        },
        {
            signalName: 'L1_2638',
            signalPos: { x: '1820', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1805', y: '920' }
        },
        {
            signalName: 'L1_2637',
            signalPos: { x: '1820', y: '900' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1835', y: '900' }
        },
        {
            signalName: 'L1_2638N',
            signalPos: { x: '1820', y: '920' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1835', y: '920' }
        },


        //#endregion

        //#region Myszkow (BOT STATION)
        {
            signalName: 'My_D',
            signalPos: { x: '1900', y: '900' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1885', y: '900' }
        },
        {
            signalName: 'My_C',
            signalPos: { x: '1900', y: '920' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1885', y: '920' }
        },
        {
            signalName: 'My_A',
            signalPos: { x: '1900', y: '900' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1915', y: '900' }
        },
        {
            signalName: 'My_B',
            signalPos: { x: '1900', y: '920' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1915', y: '920' }
        },
        //#endregion

        //#region Zawiercie <-> Gora Wlodowska
        {
            signalName: 'L4_2213N',
            signalPos: { x: '1330', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1315', y: '880' }
        },
        {
            signalName: 'L4_2206',
            signalPos: { x: '1330', y: '940' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1315', y: '940' }
        },
        {
            signalName: 'L4_2213',
            signalPos: { x: '1330', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1345', y: '880' }
        },
        {
            signalName: 'L4_2206N',
            signalPos: { x: '1330', y: '940' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1345', y: '940' }
        },


        {
            signalName: 'L4_2199N',
            signalPos: { x: '1410', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1395', y: '880' }
        },
        {
            signalName: 'L4_2182',
            signalPos: { x: '1410', y: '940' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1395', y: '940' }
        },
        {
            signalName: 'L4_2199',
            signalPos: { x: '1410', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1425', y: '880' }
        },
        {
            signalName: 'L4_2182N',
            signalPos: { x: '1410', y: '940' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1425', y: '940' }
        },


        {
            signalName: 'L4_2183N',
            signalPos: { x: '1490', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1475', y: '880' }
        },
        {
            signalName: 'L4_2162',
            signalPos: { x: '1490', y: '940' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1475', y: '940' }
        },
        {
            signalName: 'L4_2183',
            signalPos: { x: '1490', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1505', y: '880' }
        },
        {
            signalName: 'L4_2162N',
            signalPos: { x: '1500', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1515', y: '1000' }
        },


        {
            signalName: 'L4_2161N',
            signalPos: { x: '1570', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1555', y: '880' }
        },
        {
            signalName: 'L4_2142',
            signalPos: { x: '1580', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1565', y: '1000' }
        },
        {
            signalName: 'L4_2161',
            signalPos: { x: '1570', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1585', y: '880' }
        },
        {
            signalName: 'L4_2142N',
            signalPos: { x: '1580', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1595', y: '1000' }
        },


        {
            signalName: 'L4_2141N',
            signalPos: { x: '1650', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1635', y: '880' }
        },
        {
            signalName: 'L4_2128',
            signalPos: { x: '1660', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1645', y: '1000' }
        },
        {
            signalName: 'L4_2141',
            signalPos: { x: '1650', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1665', y: '880' }
        },
        {
            signalName: 'L4_2128N',
            signalPos: { x: '1660', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1675', y: '1000' }
        },


        {
            signalName: 'L4_2119N',
            signalPos: { x: '1730', y: '880' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1715', y: '880' }
        },
        {
            signalName: 'L4_2114',
            signalPos: { x: '1740', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1715', y: '1000' }
        },
        {
            signalName: 'L4_2119',
            signalPos: { x: '1740', y: '980' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1755', y: '980' }
        },
        {
            signalName: 'L4_2114N',
            signalPos: { x: '1740', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1755', y: '1000' }
        },


        {
            signalName: 'L4_2103N',
            signalPos: { x: '1820', y: '980' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1805', y: '980' }
        },
        {
            signalName: 'L4_2100',
            signalPos: { x: '1820', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1805', y: '1000' }
        },
        {
            signalName: 'L4_2103',
            signalPos: { x: '1820', y: '980' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1835', y: '980' }
        },
        {
            signalName: 'L4_2100N',
            signalPos: { x: '1820', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1835', y: '1000' }
        },


        {
            signalName: 'L4_2085N',
            signalPos: { x: '1900', y: '980' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1885', y: '980' }
        },
        {
            signalName: 'L4_2086',
            signalPos: { x: '1900', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1885', y: '1000' }
        },
        {
            signalName: 'L4_2085',
            signalPos: { x: '1900', y: '980' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1915', y: '980' }
        },
        {
            signalName: 'L4_2086N',
            signalPos: { x: '1900', y: '1000' },
            isSignalABS: true,
            signalDirectionOnMap: 'left',
            trainPos: { x: '1915', y: '1000' }
        },
        //#endregion
        //#endregion

        //#region Gora Wlodowska

        //
        // ENTRY SIGNALS RIGHT SIDE
        //
        {
            signalName: 'GW_T',
            signalPos: { x: '1980', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1965', y: '980' }
        },
        {
            signalName: 'GW_W',
            signalPos: { x: '1980', y: '1000' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '1965', y: '1000' }
        },

        //
        // EXIT SIGNALS LEFT SIDE
        //
        {
            signalName: 'GW_O',
            signalPos: { x: '2040', y: '960' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2055', y: '960' }
        },
        {
            signalName: 'GW_N',
            signalPos: { x: '2040', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2055', y: '980' }
        },
        {
            signalName: 'GW_M',
            signalPos: { x: '2040', y: '1000' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2055', y: '1000' }
        },
        {
            signalName: 'GW_L',
            signalPos: { x: '2040', y: '1020' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2055', y: '1020' }
        },

        //
        // EXIT SIGNALS RIGHT SIDE
        //
        {
            signalName: 'GW_E',
            signalPos: { x: '2120', y: '960' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2105', y: '960' }
        },
        {
            signalName: 'GW_F',
            signalPos: { x: '2120', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2105', y: '980' }
        },
        {
            signalName: 'GW_G',
            signalPos: { x: '2120', y: '1000' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2105', y: '1000' }
        },
        {
            signalName: 'GW_H',
            signalPos: { x: '2120', y: '1020' },
            isSignalABS: false,
            signalDirectionOnMap: 'right',
            trainPos: { x: '2105', y: '1020' }
        },
        //
        // ENTRY SIGNALS RIGHT SIDE
        //
        {
            signalName: 'GW_B',
            signalPos: { x: '2190', y: '980' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2205', y: '980' }
        },
        {
            signalName: 'GW_A',
            signalPos: { x: '2190', y: '1000' },
            isSignalABS: false,
            signalDirectionOnMap: 'left',
            trainPos: { x: '2205', y: '1000' }
        },

        //#endregion

        //#region Gora Wlodowska <-> Psary

        //#endregion

        //
        //#endregion
        //
    ]
}
