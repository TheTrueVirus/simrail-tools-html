import { SSP_DATA_TYPES } from "./ssp-data-types";

export const SSP_NODES: SSP_DATA_TYPES.NODES = {
    "sspArea1": [

        //#region Additional Annotations (Track Breaks / Different Screen Areas)
        {
            nodeID: 'screenMarker-Gliwice',
            nodeType: 'differentScreenMarker',
            nodePos: { x: 20, y: 180 },
            text: 'Gliwice',
        },
        {
            nodeID: 'screenMarker-Gliwice',
            nodeType: 'differentScreenMarker',
            nodePos: { x: 20, y: 300 },
            text: 'Tychy / Bielsko-Biała',
        },
        {
            nodeID: 'screenMarker-SDandowka',
            nodeType: 'differentScreenMarker',
            nodePos: { x: 1900, y: 300 },
            text: 'S. Dandowka',
        },
        //#endregion

        //#region KTC/Bry <-> KO
        {
            nodeID: 'tm-21',
            nodeType: 'trackMarker',
            nodePos: { x: 50, y: 200 },
            text: '21',
        },
        {
            nodeID: 'tm-28',
            nodeType: 'trackMarker',
            nodePos: { x: 50, y: 220 },
            text: '28',
        },
        {
            nodeID: 'tm-17',
            nodeType: 'trackMarker',
            nodePos: { x: 130, y: 200 },
            text: '17',
        },
        {
            nodeID: 'tm-22',
            nodeType: 'trackMarker',
            nodePos: { x: 130, y: 220 },
            text: '22',
        },
        {
            nodeID: 'tm-1Ch',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 200 },
            text: '1Ch',
        },
        {
            nodeID: 'tm-2Ch',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 220 },
            text: '2Ch',
        },
        {
            nodeID: 'tm-Bry3a',
            nodeType: 'trackMarker',
            nodePos: { x: 60, y: 240 },
            text: '3a',
        },
        {
            nodeID: 'tm-Bry2a',
            nodeType: 'trackMarker',
            nodePos: { x: 60, y: 260 },
            text: '2a',
        },
        {
            nodeID: 'tm-Bry3b',
            nodeType: 'trackMarker',
            nodePos: { x: 130, y: 240 },
            text: '3b',
        },
        {
            nodeID: 'tm-Bry2b',
            nodeType: 'trackMarker',
            nodePos: { x: 130, y: 260 },
            text: '2b',
        },
        {
            nodeID: 'tm-3L',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 240 },
            text: '3L',
        },
        {
            nodeID: 'tm-2L',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 260 },
            text: '2L',
        },
        //#endregion

        //#region [KO] Katowice
        {
            nodeID: 'post_Katowice',
            nodeType: 'dispatchingPost',
            nodePos: { x: 480, y: 300 },
            postType: 'relay'
        },
        {
            nodeID: 'station_Katowice',
            nodeType: 'stationName',
            stationPrefix: 'KO',
            stationName: 'Katowice',
            nodePos: { x: 650, y: 110 },
        },
        {
            nodeID: 'peron_KO_p1',
            nodeType: 'platform',
            nodePos: { x: 440, y: 85 },
            width: 60,
            height: 10,
            text: 'Peron I'
        },
        {
            nodeID: 'peron_KO_p2',
            nodeType: 'platform',
            nodePos: { x: 440, y: 145 },
            width: 60,
            height: 30,
            text: 'Peron II'
        },
        {
            nodeID: 'peron_KO_p3',
            nodeType: 'platform',
            nodePos: { x: 420, y: 205 },
            width: 60,
            height: 10,
            text: 'Peron III'
        },
        {
            nodeID: 'peron_KO_p4',
            nodeType: 'platform',
            nodePos: { x: 420, y: 265 },
            width: 60,
            height: 10,
            text: 'Peron IV'
        },
        {
            nodeID: 'tm-KO_9',
            nodeType: 'trackMarker',
            nodePos: { x: 470, y: 80 },
            text: '9',
        },
        {
            nodeID: 'tm-KO_7',
            nodeType: 'trackMarker',
            nodePos: { x: 470, y: 100 },
            text: '7',
        },
        {
            nodeID: 'tm-KO_5',
            nodeType: 'trackMarker',
            nodePos: { x: 470, y: 120 },
            text: '5',
        },
        {
            nodeID: 'tm-KO_3',
            nodeType: 'trackMarker',
            nodePos: { x: 470, y: 140 },
            text: '3',
        },
        {
            nodeID: 'tm-KO_1',
            nodeType: 'trackMarker',
            nodePos: { x: 470, y: 180 },
            text: '1',
        },
        {
            nodeID: 'tm-KO_2',
            nodeType: 'trackMarker',
            nodePos: { x: 450, y: 200 },
            text: '2',
        },
        {
            nodeID: 'tm-KO_4',
            nodeType: 'trackMarker',
            nodePos: { x: 450, y: 220 },
            text: '4',
        },
        {
            nodeID: 'tm-KO_6',
            nodeType: 'trackMarker',
            nodePos: { x: 450, y: 240 },
            text: '6',
        },
        {
            nodeID: 'tm-KO_8',
            nodeType: 'trackMarker',
            nodePos: { x: 450, y: 260 },
            text: '8',
        },
        {
            nodeID: 'tm-KO_10',
            nodeType: 'trackMarker',
            nodePos: { x: 450, y: 280 },
            text: '10',
        },
        {
            nodeID: 'tm-KO_17',
            nodeType: 'trackMarker',
            nodePos: { x: 690, y: 140 },
            text: '17',
        },
        {
            nodeID: 'tm-KO_15',
            nodeType: 'trackMarker',
            nodePos: { x: 690, y: 160 },
            text: '15',
        },
        {
            nodeID: 'tm-KO_13',
            nodeType: 'trackMarker',
            nodePos: { x: 690, y: 180 },
            text: '13',
        },
        {
            nodeID: 'tm-KO_11',
            nodeType: 'trackMarker',
            nodePos: { x: 690, y: 200 },
            text: '11',
        },
        {
            nodeID: 'tm-KO_12',
            nodeType: 'trackMarker',
            nodePos: { x: 690, y: 220 },
            text: '12',
        },
        {
            nodeID: 'tm-KO_14',
            nodeType: 'trackMarker',
            nodePos: { x: 680, y: 240 },
            text: '14',
        },
        {
            nodeID: 'tm-KO_16',
            nodeType: 'trackMarker',
            nodePos: { x: 680, y: 260 },
            text: '16',
        },
        {
            nodeID: 'tm-KO_18',
            nodeType: 'trackMarker',
            nodePos: { x: 700, y: 280 },
            text: '18',
        },
        {
            nodeID: 'tm-KO_20',
            nodeType: 'trackMarker',
            nodePos: { x: 740, y: 300 },
            text: '20',
        },
        {
            nodeID: 'tm-KO_22',
            nodeType: 'trackMarker',
            nodePos: { x: 650, y: 300 },
            text: '22',
        },
        {
            nodeID: 'tm-KO_26',
            nodeType: 'trackMarker',
            nodePos: { x: 650, y: 320 },
            text: '26',
        },
        //#endregion

        //#region KO-KZ
        {
            nodeID: 'tm-KO_KZ_1S',
            nodeType: 'trackMarker',
            nodePos: { x: 920, y: 160 },
            text: '1S/1K',
        },
        {
            nodeID: 'tm-KO_KZ_2S',
            nodeType: 'trackMarker',
            nodePos: { x: 920, y: 180 },
            text: '2S/2K',
        },
        {
            nodeID: 'tm-KO_KZ_3M',
            nodeType: 'trackMarker',
            nodePos: { x: 920, y: 240 },
            text: '3M/3K',
        },
        {
            nodeID: 'tm-KO_KZ_4M',
            nodeType: 'trackMarker',
            nodePos: { x: 920, y: 260 },
            text: '4M/4K',
        },
        //#endregion

        //#region [KZ] Kat. Zawodzie
        {
            nodeID: 'post_KatowiceZawodzie',
            nodeType: 'dispatchingPost',
            nodePos: { x: 1030, y: 200 },
            postType: 'computer'
        },
        {
            nodeID: 'station_KatowiceZawodzie',
            nodeType: 'stationName',
            stationPrefix: 'KZ',
            stationName: 'Katowice Zawodzie',
            nodePos: { x: 1130, y: 110 },
        },
        {
            nodeID: 'peron_KZ_p1',
            nodeType: 'platform',
            nodePos: { x: 1100, y: 165 },
            width: 50,
            height: 10,
            text: 'Peron I'
        },
        {
            nodeID: 'peron_KZ_p2',
            nodeType: 'platform',
            nodePos: { x: 1100, y: 245 },
            width: 50,
            height: 10,
            text: 'Peron II'
        },
        {
            nodeID: 'tm-KZ_1',
            nodeType: 'trackMarker',
            nodePos: { x: 1140, y: 160 },
            text: '1',
        },
        {
            nodeID: 'tm-KZ_2',
            nodeType: 'trackMarker',
            nodePos: { x: 1140, y: 180 },
            text: '2',
        },
        {
            nodeID: 'tm-KZ_3',
            nodeType: 'trackMarker',
            nodePos: { x: 1140, y: 240 },
            text: '3',
        },
        {
            nodeID: 'tm-KZ_4',
            nodeType: 'trackMarker',
            nodePos: { x: 1140, y: 260 },
            text: '4',
        },
        {
            nodeID: 'tm-KZ_6',
            nodeType: 'trackMarker',
            nodePos: { x: 1140, y: 280 },
            text: '6',
        },
        {
            nodeID: 'tm-KZ_8',
            nodeType: 'trackMarker',
            nodePos: { x: 1140, y: 300 },
            text: '8',
        },
        {
            nodeID: 'tm-KZ_10',
            nodeType: 'trackMarker',
            nodePos: { x: 1140, y: 320 },
            text: '10',
        },
        //#endregion

        //#region KZ <-> SG
        {
            nodeID: 'peron_KSP',
            nodeType: 'platform',
            nodePos: { x: 1390, y: 165 },
            width: 50,
            height: 10,
            text: ''
        },
        {
            nodeID: 'po_KSP',
            nodeType: 'simpleText',
            nodePos: { x: 1420, y: 130 },
            text: 'K. Szopienice Płd.',
            textSize: 8,
            strokeWidth: 0.5,
            textColor: 'white'
        },
        {
            nodeID: 'tm-KZ_SG_3133',
            nodeType: 'trackMarker',
            nodePos: { x: 1330, y: 160 },
            text: '3133',
        },
        {
            nodeID: 'tm-KZ_SG_3148',
            nodeType: 'trackMarker',
            nodePos: { x: 1330, y: 180 },
            text: '3148',
        },
        {
            nodeID: 'tm-KZ_SG_3121',
            nodeType: 'trackMarker',
            nodePos: { x: 1410, y: 160 },
            text: '3121',
        },
        {
            nodeID: 'tm-KZ_SG_3138',
            nodeType: 'trackMarker',
            nodePos: { x: 1410, y: 180 },
            text: '3138',
        },
        {
            nodeID: 'tm-KZ_SG_3111',
            nodeType: 'trackMarker',
            nodePos: { x: 1490, y: 160 },
            text: '3111',
        },
        {
            nodeID: 'tm-KZ_SG_3128',
            nodeType: 'trackMarker',
            nodePos: { x: 1490, y: 180 },
            text: '3128',
        },
        //#endregion

        //#region [SG] Sosn. Glowny
        {
            nodeID: 'post_SosnowiecGlowny',
            nodeType: 'dispatchingPost',
            nodePos: { x: 1600, y: 190 },
            postType: 'computer'
        },
        {
            nodeID: 'station_SosnowiecGlowny',
            nodeType: 'stationName',
            stationPrefix: 'SG',
            stationName: 'Sosnowiec Główny',
            nodePos: { x: 1650, y: 110 },
        },
        {
            nodeID: 'peron_SG_p1',
            nodeType: 'platform',
            nodePos: { x: 1740, y: 205 },
            width: 35,
            height: 10,
            text: 'Peron I'
        },
        {
            nodeID: 'peron_SG_p2',
            nodeType: 'platform',
            nodePos: { x: 1760, y: 165 },
            width: 60,
            height: 10,
            text: 'Peron II'
        },
        // {
        //     nodeID: 'tm-SG_13',
        //     nodeType: 'trackMarker',
        //     nodePos: { x: 1910, y: 40 },
        //     text: '13',
        // },
        // {
        //     nodeID: 'tm-SG_11',
        //     nodeType: 'trackMarker',
        //     nodePos: { x: 1910, y: 60 },
        //     text: '11',
        // },
        {
            nodeID: 'tm-SG_9',
            nodeType: 'trackMarker',
            nodePos: { x: 1810, y: 80 },
            text: '9',
        },
        {
            nodeID: 'tm-SG_7',
            nodeType: 'trackMarker',
            nodePos: { x: 1810, y: 100 },
            text: '7',
        },
        {
            nodeID: 'tm-SG_5',
            nodeType: 'trackMarker',
            nodePos: { x: 1810, y: 120 },
            text: '5',
        },
        {
            nodeID: 'tm-SG_3',
            nodeType: 'trackMarker',
            nodePos: { x: 1810, y: 140 },
            text: '3',
        },
        {
            nodeID: 'tm-SG_1',
            nodeType: 'trackMarker',
            nodePos: { x: 1810, y: 160 },
            text: '1',
        },
        {
            nodeID: 'tm-SG_2',
            nodeType: 'trackMarker',
            nodePos: { x: 1810, y: 180 },
            text: '2',
        },
        {
            nodeID: 'tm-SG_4b',
            nodeType: 'trackMarker',
            nodePos: { x: 1760, y: 200 },
            text: '4b',
        },
        {
            nodeID: 'tm-SG_4a',
            nodeType: 'trackMarker',
            nodePos: { x: 1820, y: 200 },
            text: '4a',
        },
        //#endregion

        //#region SG <-> B
        {
            nodeID: 'tm-SG_B_3071',
            nodeType: 'trackMarker',
            nodePos: { x: 2030, y: 160 },
            text: '3071',
        },
        {
            nodeID: 'tm-SG_B_3080',
            nodeType: 'trackMarker',
            nodePos: { x: 2030, y: 180 },
            text: '3080',
        },
        {
            nodeID: 'tm-SG_B_3065',
            nodeType: 'trackMarker',
            nodePos: { x: 2110, y: 160 },
            text: '3065',
        },
        {
            nodeID: 'tm-SG_B_3074',
            nodeType: 'trackMarker',
            nodePos: { x: 2110, y: 180 },
            text: '3074',
        },
        //#endregion

        //#region [B] Bedzin
        {
            nodeID: 'post_Bedzin',
            nodeType: 'dispatchingPost',
            nodePos: { x: 2320, y: 230 },
            postType: 'relay'
        },
        {
            nodeID: 'station_Bedzin',
            nodeType: 'stationName',
            stationPrefix: 'B',
            stationName: 'Będzin',
            nodePos: { x: 2260, y: 110 },
        },
        {
            nodeID: 'peron_KSP',
            nodeType: 'platform',
            nodePos: { x: 2225, y: 165 },
            width: 50,
            height: 10,
            text: 'Peron I'
        },
        {
            nodeID: 'tm-B_1',
            nodeType: 'trackMarker',
            nodePos: { x: 2250, y: 160 },
            text: '1',
        },
        {
            nodeID: 'tm-B_2',
            nodeType: 'trackMarker',
            nodePos: { x: 2250, y: 180 },
            text: '2',
        },
        {
            nodeID: 'tm-B_4',
            nodeType: 'trackMarker',
            nodePos: { x: 2250, y: 200 },
            text: '4',
        },
        {
            nodeID: 'tm-B_6',
            nodeType: 'trackMarker',
            nodePos: { x: 2250, y: 220 },
            text: '6',
        },
        //#endregion

        //#region B <-> DG
        {
            nodeID: 'peron_BedzinMiasto1',
            nodeType: 'platform',
            nodePos: { x: 2380, y: 185 },
            width: 50,
            height: 10,
            text: ''
        },
        {
            nodeID: 'peron_BedzinMiasto2',
            nodeType: 'platform',
            nodePos: { x: 2380, y: 145 },
            width: 50,
            height: 10,
            text: ''
        },
        {
            nodeID: 'po_BedzinMiasto',
            nodeType: 'simpleText',
            nodePos: { x: 2405, y: 130 },
            text: 'Będzin Miasto',
            textSize: 8,
            strokeWidth: 0.5,
            textColor: 'white'
        },
        {
            nodeID: 'peron_BedzinKsawera',
            nodeType: 'platform',
            nodePos: { x: 40, y: 505 },
            width: 50,
            height: 10,
            text: ''
        },
        {
            nodeID: 'po_BedzinKsawera',
            nodeType: 'simpleText',
            nodePos: { x: 65, y: 480 },
            text: 'Będzin Ksawera',
            textSize: 8,
            strokeWidth: 0.5,
            textColor: 'white'
        },
        {
            nodeID: 'tm-B_DG_3037',
            nodeType: 'trackMarker',
            nodePos: { x: 2410, y: 160 },
            text: '3037',
        },
        {
            nodeID: 'tm-B_DG_3048',
            nodeType: 'trackMarker',
            nodePos: { x: 2410, y: 180 },
            text: '3048',
        },
        {
            nodeID: 'tm-B_DG_3023',
            nodeType: 'trackMarker',
            nodePos: { x: 2490, y: 160 },
            text: '3023',
        },
        {
            nodeID: 'tm-B_DG_3036',
            nodeType: 'trackMarker',
            nodePos: { x: 2490, y: 180 },
            text: '3036',
        },
        // SECOND SCREEN ROW
        {
            nodeID: 'tm-B_DG_3011',
            nodeType: 'trackMarker',
            nodePos: { x: 70, y: 500 },
            text: '3011',
        },
        {
            nodeID: 'tm-B_DG_3022',
            nodeType: 'trackMarker',
            nodePos: { x: 70, y: 520 },
            text: '3022',
        },
        //#endregion

        //#region Dabrowa Gornicza
        {
            nodeID: 'post_DabrowaGornicza',
            nodeType: 'dispatchingPost',
            nodePos: { x: 300, y: 535 },
            postType: 'computer'
        },
        {
            nodeID: 'station_DabrowaGornicza',
            nodeType: 'stationName',
            stationPrefix: 'DG',
            stationName: 'Dąbrowa Górnicza',
            nodePos: { x: 260, y: 470 },
        },
        {
            nodeID: 'peron_DabrowaGornicza',
            nodeType: 'platform',
            nodePos: { x: 230, y: 505 },
            width: 60,
            height: 10,
            text: 'Peron I'
        },
        {
            nodeID: 'tm-DG_1',
            nodeType: 'trackMarker',
            nodePos: { x: 225, y: 500 },
            text: '1',
        },
        {
            nodeID: 'tm-DG_2',
            nodeType: 'trackMarker',
            nodePos: { x: 260, y: 520 },
            text: '2',
        },
        //#endregion

        //#region DG <-> DGZ
        {
            nodeID: 'peron_DGGolonog',
            nodeType: 'platform',
            nodePos: { x: 480, y: 505 },
            width: 40,
            height: 10,
            text: ''
        },
        {
            nodeID: 'po_DGGolonog',
            nodeType: 'simpleText',
            nodePos: { x: 500, y: 480 },
            text: 'D. G. Gołonóg',
            textSize: 8,
            strokeWidth: 0.5,
            textColor: 'white'
        },
        {
            nodeID: 'peron_DGPogoria',
            nodeType: 'platform',
            nodePos: { x: 560, y: 505 },
            width: 40,
            height: 10,
            text: ''
        },
        {
            nodeID: 'po_DGGolonog',
            nodeType: 'simpleText',
            nodePos: { x: 580, y: 480 },
            text: 'D. G. Pogoria',
            textSize: 8,
            strokeWidth: 0.5,
            textColor: 'white'
        },
        {
            nodeID: 'tm-DG_DGZ_2983',
            nodeType: 'trackMarker',
            nodePos: { x: 410, y: 500 },
            text: '2983',
        },
        {
            nodeID: 'tm-DG_DGZ_2994',
            nodeType: 'trackMarker',
            nodePos: { x: 410, y: 520 },
            text: '2994',
        },
        {
            nodeID: 'tm-DG_DGZ_2971',
            nodeType: 'trackMarker',
            nodePos: { x: 490, y: 500 },
            text: '2971',
        },
        {
            nodeID: 'tm-DG_DGZ_2980',
            nodeType: 'trackMarker',
            nodePos: { x: 490, y: 520 },
            text: '2980',
        },
        {
            nodeID: 'tm-DG_DGZ_2955',
            nodeType: 'trackMarker',
            nodePos: { x: 570, y: 500 },
            text: '2955',
        },
        {
            nodeID: 'tm-DG_DGZ_2980',
            nodeType: 'trackMarker',
            nodePos: { x: 570, y: 520 },
            text: '2966',
        },
        {
            nodeID: 'tm-DG_DGZ_294a',
            nodeType: 'trackMarker',
            nodePos: { x: 650, y: 500 },
            text: '2941',
        },
        {
            nodeID: 'tm-DG_DGZ_2952',
            nodeType: 'trackMarker',
            nodePos: { x: 650, y: 520 },
            text: '2952',
        },
        //#endregion

        //#region Dabrowa Gornicza Zabkowice
        {
            nodeID: 'post_DabrowaGorniczaZabkowice',
            nodeType: 'dispatchingPost',
            nodePos: { x: 760, y: 535 },
            postType: 'relay'
        },
        {
            nodeID: 'station_DabrowaGorniczaZabkowice',
            nodeType: 'stationName',
            stationPrefix: 'DZ',
            stationName: 'Dąbrowa Górnicza Ząbkowice',
            nodePos: { x: 950, y: 470 },
        },
        {
            nodeID: 'peron_DabrowaGorniczaZabkowice_p1',
            nodeType: 'platform',
            nodePos: { x: 910, y: 505 },
            width: 60,
            height: 10,
            text: 'Peron I'
        },
        {
            nodeID: 'peron_DabrowaGorniczaZabkowice_p2',
            nodeType: 'platform',
            nodePos: { x: 910, y: 545 },
            width: 70,
            height: 50,
            text: 'Peron II'
        },
        {
            nodeID: 'peron_DabrowaGorniczaZabkowice_p3',
            nodeType: 'platform',
            nodePos: { x: 920, y: 645 },
            width: 70,
            height: 10,
            text: 'Peron III'
        },
        {
            nodeID: 'tm-DGZ_105',
            nodeType: 'trackMarker',
            nodePos: { x: 720, y: 580 },
            text: '105',
        },
        {
            nodeID: 'tm-DGZ_103',
            nodeType: 'trackMarker',
            nodePos: { x: 720, y: 600 },
            text: '103',
        },
        {
            nodeID: 'tm-DGZ_101',
            nodeType: 'trackMarker',
            nodePos: { x: 720, y: 620 },
            text: '101',
        },
        {
            nodeID: 'tm-DGZ_102',
            nodeType: 'trackMarker',
            nodePos: { x: 720, y: 640 },
            text: '102',
        },
        {
            nodeID: 'tm-DGZ_104',
            nodeType: 'trackMarker',
            nodePos: { x: 720, y: 660 },
            text: '104',
        },
        {
            nodeID: 'tm-DGZ_1b',
            nodeType: 'trackMarker',
            nodePos: { x: 815, y: 500 },
            text: '1b',
        },
        {
            nodeID: 'tm-DGZ_8b',
            nodeType: 'trackMarker',
            nodePos: { x: 875, y: 660 },
            text: '8b',
        },
        {
            nodeID: 'tm-DGZ_3',
            nodeType: 'trackMarker',
            nodePos: { x: 940, y: 520 },
            text: '3',
        },
        {
            nodeID: 'tm-DGZ_1a',
            nodeType: 'trackMarker',
            nodePos: { x: 940, y: 540 },
            text: '1a',
        },
        {
            nodeID: 'tm-DGZ_2',
            nodeType: 'trackMarker',
            nodePos: { x: 955, y: 600 },
            text: '2',
        },
        {
            nodeID: 'tm-DGZ_4',
            nodeType: 'trackMarker',
            nodePos: { x: 955, y: 620 },
            text: '4',
        },
        {
            nodeID: 'tm-DGZ_6',
            nodeType: 'trackMarker',
            nodePos: { x: 955, y: 640 },
            text: '6',
        },
        {
            nodeID: 'tm-DGZ_8b',
            nodeType: 'trackMarker',
            nodePos: { x: 955, y: 660 },
            text: '8b',
        },
        {
            nodeID: 'tm-DGZ_13',
            nodeType: 'trackMarker',
            nodePos: { x: 1085, y: 520 },
            text: '13',
        },
        {
            nodeID: 'tm-DGZ_11',
            nodeType: 'trackMarker',
            nodePos: { x: 1085, y: 540 },
            text: '11',
        },
        {
            nodeID: 'tm-DGZ_9',
            nodeType: 'trackMarker',
            nodePos: { x: 1085, y: 560 },
            text: '9',
        },
        {
            nodeID: 'tm-DGZ_10',
            nodeType: 'trackMarker',
            nodePos: { x: 1075, y: 580 },
            text: '10',
        },
        {
            nodeID: 'tm-DGZ_12',
            nodeType: 'trackMarker',
            nodePos: { x: 1075, y: 600 },
            text: '12',
        },
        {
            nodeID: 'tm-DGZ_14',
            nodeType: 'trackMarker',
            nodePos: { x: 1075, y: 620 },
            text: '14',
        },
        {
            nodeID: 'tm-DGZ_16',
            nodeType: 'trackMarker',
            nodePos: { x: 1075, y: 660 },
            text: '16',
        },
        {
            nodeID: 'tm-DGZ_B',
            nodeType: 'trackMarker',
            nodePos: { x: 1255, y: 540 },
            text: 'B',
        },
        {
            nodeID: 'tm-DGZ_E',
            nodeType: 'trackMarker',
            nodePos: { x: 1255, y: 560 },
            text: 'E',
        },
        {
            nodeID: 'tm-DGZ_A',
            nodeType: 'trackMarker',
            nodePos: { x: 1255, y: 580 },
            text: 'A',
        },
        {
            nodeID: 'tm-DGZ_H',
            nodeType: 'trackMarker',
            nodePos: { x: 1255, y: 600 },
            text: 'H',
        },
        //#endregion

        //#region TRACKS DABROWA GORNICZA ZABKOWICE - LAZYLC
        {
            nodeID: 'tm-DZ_LC_2899D',
            nodeType: 'trackMarker',
            nodePos: { x: 1300, y: 540 },
            text: '2899D',
        },
        {
            nodeID: 'tm-DZ_LC_2912D',
            nodeType: 'trackMarker',
            nodePos: { x: 1300, y: 560 },
            text: '2912D',
        },
        {
            nodeID: 'tm-DZ_LC_2899',
            nodeType: 'trackMarker',
            nodePos: { x: 1300, y: 580 },
            text: '2899',
        },
        {
            nodeID: 'tm-DZ_LC_2912',
            nodeType: 'trackMarker',
            nodePos: { x: 1300, y: 600 },
            text: '2912',
        },

        {
            nodeID: 'tm-DZ_LC_2885D',
            nodeType: 'trackMarker',
            nodePos: { x: 1380, y: 540 },
            text: '2885D',
        },
        {
            nodeID: 'tm-DZ_LC_2900D',
            nodeType: 'trackMarker',
            nodePos: { x: 1380, y: 560 },
            text: '2900D',
        },
        {
            nodeID: 'tm-DZ_LC_2885',
            nodeType: 'trackMarker',
            nodePos: { x: 1380, y: 580 },
            text: '2885',
        },
        {
            nodeID: 'tm-DZ_LC_2900',
            nodeType: 'trackMarker',
            nodePos: { x: 1380, y: 600 },
            text: '2900',
        },

        {
            nodeID: 'tm-DZ_LC_2869D',
            nodeType: 'trackMarker',
            nodePos: { x: 1460, y: 540 },
            text: '2869D',
        },
        {
            nodeID: 'tm-DZ_LC_2886D',
            nodeType: 'trackMarker',
            nodePos: { x: 1460, y: 560 },
            text: '2886D',
        },
        {
            nodeID: 'tm-DZ_LC_2869',
            nodeType: 'trackMarker',
            nodePos: { x: 1460, y: 580 },
            text: '2869',
        },
        {
            nodeID: 'tm-DZ_LC_2886',
            nodeType: 'trackMarker',
            nodePos: { x: 1460, y: 600 },
            text: '2886',
        },

        {
            nodeID: 'tm-DZ_LC_1_2851',
            nodeType: 'trackMarker',
            nodePos: { x: 1565, y: 540 },
            text: '28',
        },
        {
            nodeID: 'tm-DZ_LC_1_2868',
            nodeType: 'trackMarker',
            nodePos: { x: 1565, y: 560 },
            text: '28',
        },
        {
            nodeID: 'tm-DZ_LC_1_2853',
            nodeType: 'trackMarker',
            nodePos: { x: 1565, y: 580 },
            text: '28',
        },
        {
            nodeID: 'tm-DZ_LC_1_2870',
            nodeType: 'trackMarker',
            nodePos: { x: 1565, y: 600 },
            text: '28',
        },

        {
            nodeID: 'tm-DZ_LC_2_2851',
            nodeType: 'trackMarker',
            nodePos: { x: 1585, y: 540 },
            text: '51',
        },
        {
            nodeID: 'tm-DZ_LC_2_2868',
            nodeType: 'trackMarker',
            nodePos: { x: 1585, y: 560 },
            text: '68',
        },
        {
            nodeID: 'tm-DZ_LC_2_2853',
            nodeType: 'trackMarker',
            nodePos: { x: 1585, y: 580 },
            text: '53',
        },
        {
            nodeID: 'tm-DZ_LC_2_2870',
            nodeType: 'trackMarker',
            nodePos: { x: 1585, y: 600 },
            text: '70',
        },

        {
            nodeID: 'tm-DZ_LC_1P',
            nodeType: 'trackMarker',
            nodePos: { x: 1770, y: 500 },
            text: '1P',
        },
        {
            nodeID: 'tm-DZ_LC_2839',
            nodeType: 'trackMarker',
            nodePos: { x: 1770, y: 520 },
            text: '2839',
        },
        {
            nodeID: 'tm-DZ_LC_1_2841',
            nodeType: 'trackMarker',
            nodePos: { x: 1715, y: 540 },
            text: '28',
        },
        {
            nodeID: 'tm-DZ_LC_1_2852',
            nodeType: 'trackMarker',
            nodePos: { x: 1715, y: 560 },
            text: '28',
        },
        {
            nodeID: 'tm-DZ_LC_2_2841',
            nodeType: 'trackMarker',
            nodePos: { x: 1735, y: 540 },
            text: '41',
        },
        {
            nodeID: 'tm-DZ_LC_2_2852D',
            nodeType: 'trackMarker',
            nodePos: { x: 1737.5, y: 560 },
            text: '52D',
        },
        {
            nodeID: 'tm-DZ_LC_2_2870',
            nodeType: 'trackMarker',
            nodePos: { x: 1585, y: 580 },
            text: '70',
        },
        {
            nodeID: 'tm-DZ_LC_2_2853',
            nodeType: 'trackMarker',
            nodePos: { x: 1585, y: 600 },
            text: '53',
        },
        {
            nodeID: 'tm-DZ_LC_1_2852',
            nodeType: 'trackMarker',
            nodePos: { x: 1770, y: 580 },
            text: '2852',
        },
        {
            nodeID: 'tm-DZ_LC_1_2P',
            nodeType: 'trackMarker',
            nodePos: { x: 1770, y: 600 },
            text: '2P',
        },
        //#endregion

        //#region {LC] LAZY LC
        {
            nodeID: 'post_LazyLC',
            nodeType: 'dispatchingPost',
            nodePos: { x: 1930, y: 470 },
            postType: 'relay'
        },
        {
            nodeID: 'station_LazyLC',
            nodeType: 'stationName',
            stationPrefix: 'ŁC',
            stationName: 'Łazy Łc',
            nodePos: { x: 1900, y: 420 },
        },
        {
            nodeID: 'tm-LC_3',
            nodeType: 'trackMarker',
            nodePos: { x: 1910, y: 520 },
            text: '3',
        },
        {
            nodeID: 'tm-LC_1',
            nodeType: 'trackMarker',
            nodePos: { x: 1910, y: 540 },
            text: '1',
        },
        {
            nodeID: 'tm-LC_2',
            nodeType: 'trackMarker',
            nodePos: { x: 1910, y: 560 },
            text: '2',
        },
        {
            nodeID: 'tm-LC_4',
            nodeType: 'trackMarker',
            nodePos: { x: 1910, y: 580 },
            text: '4',
        },
        {
            nodeID: 'tm-LC_6',
            nodeType: 'trackMarker',
            nodePos: { x: 1910, y: 600 },
            text: '6',
        },
        //#endregion

        //#region LAZY LC <-> LAZY LB
        {
            nodeID: 'tm-LC_LB_7CB_1',
            nodeType: 'trackMarker',
            nodePos: { x: 1920, y: 460 },
            text: '7CB',
        },
        {
            nodeID: 'tm-LC_LB_7CB_2',
            nodeType: 'trackMarker',
            nodePos: { x: 2050, y: 380 },
            text: '7CB',
        },
        {
            nodeID: 'tm-LC_LB_3CB',
            nodeType: 'trackMarker',
            nodePos: { x: 2050, y: 520 },
            text: '3CB',
        },
        {
            nodeID: 'tm-LC_LB_1CB',
            nodeType: 'trackMarker',
            nodePos: { x: 2050, y: 540 },
            text: '1CB',
        },
        {
            nodeID: 'tm-LC_LB_2CB',
            nodeType: 'trackMarker',
            nodePos: { x: 2050, y: 560 },
            text: '2CB',
        },
        {
            nodeID: 'tm-LC_LB_4CB',
            nodeType: 'trackMarker',
            nodePos: { x: 2050, y: 580 },
            text: '4CB',
        },
        {
            nodeID: 'tm-LC_LB_6CB',
            nodeType: 'trackMarker',
            nodePos: { x: 2050, y: 600 },
            text: '6CB',
        },
        //#endregion

        //#region [LB] LAZY LB
        {
            nodeID: 'post_LazyLB',
            nodeType: 'dispatchingPost',
            nodePos: { x: 2260, y: 620 },
            postType: 'computer'
        },
        {
            nodeID: 'station_LazyLC',
            nodeType: 'stationName',
            stationPrefix: 'LB',
            stationName: 'Łazy',
            nodePos: { x: 2260, y: 420 },
        },
        {
            nodeID: 'peron_LazyLB_p2',
            nodeType: 'platform',
            nodePos: { x: 2160, y: 525 },
            width: 50,
            height: 10,
            text: 'Peron II'
        },
        {
            nodeID: 'peron_LazyLB_p1',
            nodeType: 'platform',
            nodePos: { x: 2160, y: 565 },
            width: 50,
            height: 10,
            text: 'Peron I'
        },
        {
            nodeID: 'tm-LB_3',
            nodeType: 'trackMarker',
            nodePos: { x: 2190, y: 520 },
            text: '3',
        },
        {
            nodeID: 'tm-LB_1',
            nodeType: 'trackMarker',
            nodePos: { x: 2190, y: 540 },
            text: '1',
        },
        {
            nodeID: 'tm-LB_2',
            nodeType: 'trackMarker',
            nodePos: { x: 2190, y: 560 },
            text: '2',
        },
        {
            nodeID: 'tm-LB_4',
            nodeType: 'trackMarker',
            nodePos: { x: 2190, y: 580 },
            text: '4',
        },
        {
            nodeID: 'tm-LB_6',
            nodeType: 'trackMarker',
            nodePos: { x: 2190, y: 600 },
            text: '6',
        },
        {
            nodeID: 'tm-LB_125',
            nodeType: 'trackMarker',
            nodePos: { x: 2270, y: 440 },
            text: '125',
        },
        {
            nodeID: 'tm-LB_123',
            nodeType: 'trackMarker',
            nodePos: { x: 2270, y: 460 },
            text: '123',
        },
        //#endregion

        //#region LAZYLB <-> LAZYLA
        {
            nodeID: 'tm-LB_LA_2795',
            nodeType: 'trackMarker',
            nodePos: { x: 2470, y: 520 },
            text: '2795',
        },
        {
            nodeID: 'tm-LB_LA_2794',
            nodeType: 'trackMarker',
            nodePos: { x: 2470, y: 540 },
            text: '2794',
        },
        {
            nodeID: 'tm-LB_LA_2781_1',
            nodeType: 'trackMarker',
            nodePos: { x: 2525, y: 520 },
            text: '2781',
        },
        {
            nodeID: 'tm-LB_LA_2790_1',
            nodeType: 'trackMarker',
            nodePos: { x: 2525, y: 540 },
            text: '2790',
        },
        //#endregion
    ]
}
