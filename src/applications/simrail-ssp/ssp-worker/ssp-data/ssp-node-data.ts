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
            nodeID: 'screenMarker-Tychy',
            nodeType: 'differentScreenMarker',
            nodePos: { x: 20, y: 300 },
            text: 'Tychy / Bielsko-Biała',
        },
        {
            nodeID: 'screenMarker-SDandowka',
            nodeType: 'differentScreenMarker',
            nodePos: { x: 1850, y: 310 },
            text: 'S. Dańdówka',
        },
        {
            nodeID: 'trackBreakMarker-Bedzin_DabrowaGornicza',
            nodePos: { x: 0, y: 0 },
            nodeType: 'trackBreakMarker',
            text: 'A',
            breakMarker: {
                firstMarker: { x: 2530, y: 140 },
                secondMarker: { x: 40, y: 550 }
            }
        },
        {
            nodeID: 'trackBreakMarker-LazyLB_LazyLA',
            nodePos: { x: 0, y: 0 },
            nodeType: 'trackBreakMarker',
            text: 'B',
            breakMarker: {
                firstMarker: { x: 2530, y: 420 },
                secondMarker: { x: 40, y: 780 }
            }
        },
        //#endregion

        //
        //#region SSP ANNOTATIONS AREA 1 [ROW1]
        //


        //#region KTC / Brynow <-> Katowice
        {
            nodeID: 'tm-Bry_BRY_1',
            nodeType: 'trackMarker',
            nodePos: { x: 80, y: 100 },
            text: 'BRY_1',
        },
        {
            nodeID: 'tm-20',
            nodeType: 'trackMarker',
            nodePos: { x: 150, y: 100 },
            text: '20',
        },
        {
            nodeID: 'tm-15',
            nodeType: 'trackMarker',
            nodePos: { x: 230, y: 100 },
            text: '15',
        },
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

        //#region Katowice <-> Katowice Zawodzie
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

        //#region [KZ] Katowice Zawodzie
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

        //#region Katowice Zawodzie <-> Sosnowiec Glowny
        {
            nodeID: 'peron_KSP',
            nodeType: 'platform',
            nodePos: { x: 1390, y: 165 },
            width: 50,
            height: 10,
            text: ''
        },
        {
            nodeID: 'po-KatowiceSzopienicePoludniowe',
            nodeType: 'simpleText',
            nodePos: { x: 1420, y: 140 },
            text: 'K. Szopienice Płd.',
            textSize: 12,
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

        //#region [SG] Sosnowiec Glowny
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
            nodePos: { x: 1630, y: 110 },
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

        //#region [Spl] Sosnowiec Poludniowy
        {
            nodeID: 'dispatchingPost_SosnowiecPoludniowy',
            nodeType: 'dispatchingPost',
            nodePos: { x: 1560, y: 290 },
            postType: 'computer'
        },
        {
            nodeID: 'stationName-SosnowiecPoludniowy',
            nodeType: 'stationName',
            stationPrefix: 'Spł1',
            stationName: 'Sosnowiec Południowy',
            nodePos: { x: 1700, y: 240 },
        },

        //#endregion

        //#region Sosnowiec Glowny <-> Bedzin
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

        //#region Bedzin <-> Dabrowa Gornicza [ROW1]
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
            nodeID: 'po-BedzinMiasto',
            nodeType: 'simpleText',
            nodePos: { x: 2405, y: 130 },
            text: 'Będzin Miasto',
            textSize: 12,
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
            nodeID: 'po-BedzinKsawera',
            nodeType: 'simpleText',
            nodePos: { x: 70, y: 480 },
            text: 'Będzin Ksawera',
            textSize: 12,
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
        //#endregion

        //
        //#endregion
        //

        //
        //#region SSP ANNOTATIONS AREA 1 [ROW2]
        //
        
        //#region Bedzin <-> Dabrowa Gornicza [ROW1]
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

        //#region [DG] Dabrowa Gornicza
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

        //#region Dabrowa Gornicza <-> Dabrowa Gornicza Zabkowice
        {
            nodeID: 'peron_DGGolonog',
            nodeType: 'platform',
            nodePos: { x: 480, y: 505 },
            width: 40,
            height: 10,
            text: ''
        },
        {
            nodeID: 'po-DGGolonog',
            nodeType: 'simpleText',
            nodePos: { x: 500, y: 480 },
            text: 'D. G. Gołonóg',
            textSize: 12,
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
            nodeID: 'po-DGGolonog',
            nodeType: 'simpleText',
            nodePos: { x: 580, y: 540 },
            text: 'D. G. Pogoria',
            textSize: 12,
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

        //#region [DZ] Dabrowa Gornicza Zabkowice
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

        //#region Dabrowa Gornicza Zabkowice <-> Lazy LC
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

        //#region [LC] Lazy LC
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

        //#region Lazy LC <-> Lazy LB
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

        //#region [LB] Lazy LB
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

        //#region Lazy LB <-> Lazy LA [ROW2]
        {
            nodeID: 'tm-LB_LA_2795',
            nodeType: 'trackMarker',
            nodePos: { x: 2480, y: 520 },
            text: '2795',
        },
        {
            nodeID: 'tm-LB_LA_2794',
            nodeType: 'trackMarker',
            nodePos: { x: 2480, y: 540 },
            text: '2794',
        },
        //#endregion

        //
        //#endregion
        //

        //
        //#region SSP ANNOTATIONS AREA 1 [ROW3]
        //

        //#region Lazy LB <-> Lazy LA [ROW3]
        {
            nodeID: 'tm-LB_LA_2781',
            nodeType: 'trackMarker',
            nodePos: { x: 80, y: 900 },
            text: '2781',
        },
        {
            nodeID: 'tm-LB_LA_2790',
            nodeType: 'trackMarker',
            nodePos: { x: 80, y: 920 },
            text: '2790',
        },
        {
            nodeID: 'tm-LB_LA_2781',
            nodeType: 'trackMarker',
            nodePos: { x: 200, y: 900 },
            text: '2779',
        },
        {
            nodeID: 'tm-LB_LA_2790',
            nodeType: 'trackMarker',
            nodePos: { x: 200, y: 920 },
            text: '2778',
        },
        //#endregion

        //#region [LA] Lazy LA
        {
            nodeID: 'post_LazyLA',
            nodeType: 'dispatchingPost',
            nodePos: { x: 320, y: 1120 },
            postType: 'relay'
        },
        {
            nodeID: 'station_LazyLA',
            nodeType: 'stationName',
            stationPrefix: 'ŁA',
            stationName: 'Łazy Ła',
            nodePos: { x: 420, y: 780 },
        },
        //
        // TRACK MARKER UPPER FREIGHT TRACKS
        //
        {
            nodeID: 'tm-LA_119',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 720 },
            text: '119',
        },
        {
            nodeID: 'tm-LA_117',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 740 },
            text: '117',
        },
        {
            nodeID: 'tm-LA_115',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 760 },
            text: '115',
        },
        {
            nodeID: 'tm-LA_113',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 780 },
            text: '113',
        },
        {
            nodeID: 'tm-LA_111',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 800 },
            text: '111',
        },
        {
            nodeID: 'tm-LA_109',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 820 },
            text: '109',
        },
        {
            nodeID: 'tm-LA_107',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 840 },
            text: '107',
        },
        {
            nodeID: 'tm-LA_105',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 860 },
            text: '105',
        },
        {
            nodeID: 'tm-LA_103',
            nodeType: 'trackMarker',
            nodePos: { x: 210, y: 880 },
            text: '103',
        },
        //
        // TRACK MARKER LOWER FREIGHT TRACKS
        //
        {
            nodeID: 'tm-LA_124',
            nodeType: 'trackMarker',
            nodePos: { x: 280, y: 960 },
            text: '124',
        },
        {
            nodeID: 'tm-LA_126',
            nodeType: 'trackMarker',
            nodePos: { x: 280, y: 980 },
            text: '126',
        },
        {
            nodeID: 'tm-LA_128',
            nodeType: 'trackMarker',
            nodePos: { x: 280, y: 1000 },
            text: '128',
        },
        {
            nodeID: 'tm-LA_130',
            nodeType: 'trackMarker',
            nodePos: { x: 280, y: 1020 },
            text: '130',
        },
        {
            nodeID: 'tm-LA_132',
            nodeType: 'trackMarker',
            nodePos: { x: 280, y: 1040 },
            text: '132',
        },
        {
            nodeID: 'tm-LA_134',
            nodeType: 'trackMarker',
            nodePos: { x: 280, y: 1060 },
            text: '134',
        },
        {
            nodeID: 'tm-LA_136',
            nodeType: 'trackMarker',
            nodePos: { x: 280, y: 1080 },
            text: '136',
        },
        {
            nodeID: 'tm-LA_138b',
            nodeType: 'trackMarker',
            nodePos: { x: 190, y: 1100 },
            text: '138b',
        },
        {
            nodeID: 'tm-LA_138a',
            nodeType: 'trackMarker',
            nodePos: { x: 280, y: 1100 },
            text: '138a',
        },
        {
            nodeID: 'tm-LA_144',
            nodeType: 'trackMarker',
            nodePos: { x: 180, y: 1120 },
            text: '144',
        },
        //#endregion

        //#region Lazy LA <-> Zawiercie
        {
            nodeID: 'tm-LA_ZW_3ZW',
            nodeType: 'trackMarker',
            nodePos: { x: 520, y: 880 },
            text: '3ZW',
        },
        {
            nodeID: 'tm-LA_ZW_1ZW',
            nodeType: 'trackMarker',
            nodePos: { x: 520, y: 900 },
            text: '1ZW',
        },
        {
            nodeID: 'tm-LA_ZW_2ZW',
            nodeType: 'trackMarker',
            nodePos: { x: 520, y: 920 },
            text: '2ZW',
        },
        {
            nodeID: 'tm-LA_ZW_4ZW',
            nodeType: 'trackMarker',
            nodePos: { x: 520, y: 940 },
            text: '4ZW',
        },
        //#endregion

        //#region [Zw] Zawiercie
        {
            nodeID: 'post_Zawiercie',
            nodeType: 'dispatchingPost',
            nodePos: { x: 900, y: 980 },
            postType: 'relay'
        },
        {
            nodeID: 'station_Zawiercie',
            nodeType: 'stationName',
            stationPrefix: 'Zw',
            stationName: 'Zawiercie',
            nodePos: { x: 950, y: 780 },
        },
        {
            nodeID: 'peron_Zawiercie_P2',
            nodeType: 'platform',
            nodePos: { x: 1030, y: 905 },
            width: 60,
            height: 50,
            text: 'Peron II'
        },
        {
            nodeID: 'peron_Zawiercie_P1',
            nodeType: 'platform',
            nodePos: { x: 1005, y: 985 },
            width: 85,
            height: 10,
            text: 'Peron I'
        },
        {
            nodeID: 'tm-ZW_3e',
            nodeType: 'trackMarker',
            nodePos: { x: 630, y: 880 },
            text: '3e',
        },
        {
            nodeID: 'tm-ZW_3e',
            nodeType: 'trackMarker',
            nodePos: { x: 630, y: 880 },
            text: '3e',
        },
        {
            nodeID: 'tm-ZW_4b',
            nodeType: 'trackMarker',
            nodePos: { x: 705, y: 940 },
            text: '4b',
        },
        {
            nodeID: 'tm-ZW_104',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 960 },
            text: '104',
        },
        {
            nodeID: 'tm-ZW_106',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 980 },
            text: '106',
        },
        {
            nodeID: 'tm-ZW_108',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 1000 },
            text: '108',
        },
        {
            nodeID: 'tm-ZW_110',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 1020 },
            text: '110',
        },
        {
            nodeID: 'tm-ZW_112',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 1040 },
            text: '112',
        },
        {
            nodeID: 'tm-ZW_114',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 1060 },
            text: '114',
        },
        {
            nodeID: 'tm-ZW_116',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 1080 },
            text: '116',
        },
        {
            nodeID: 'tm-ZW_118',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 1100 },
            text: '118',
        },
        {
            nodeID: 'tm-ZW_120',
            nodeType: 'trackMarker',
            nodePos: { x: 730, y: 1120 },
            text: '120',
        },
        {
            nodeID: 'tm-ZW_3d',
            nodeType: 'trackMarker',
            nodePos: { x: 820, y: 880 },
            text: '3d',
        },
        {
            nodeID: 'tm-ZW_4c',
            nodeType: 'trackMarker',
            nodePos: { x: 920, y: 940 },
            text: '4c',
        },
        {
            nodeID: 'tm-ZW_3b',
            nodeType: 'trackMarker',
            nodePos: { x: 975, y: 880 },
            text: '3b',
        },
        {
            nodeID: 'tm-ZW_1b',
            nodeType: 'trackMarker',
            nodePos: { x: 980, y: 900 },
            text: '1b',
        },
        {
            nodeID: 'tm-ZW_2b',
            nodeType: 'trackMarker',
            nodePos: { x: 995, y: 960 },
            text: '2b',
        },
        {
            nodeID: 'tm-ZW_7',
            nodeType: 'trackMarker',
            nodePos: { x: 1060, y: 840 },
            text: '7',
        },
        {
            nodeID: 'tm-ZW_5',
            nodeType: 'trackMarker',
            nodePos: { x: 1060, y: 860 },
            text: '5',
        },
        {
            nodeID: 'tm-ZW_3',
            nodeType: 'trackMarker',
            nodePos: { x: 1060, y: 880 },
            text: '3',
        },
        {
            nodeID: 'tm-ZW_1',
            nodeType: 'trackMarker',
            nodePos: { x: 1060, y: 900 },
            text: '1',
        },
        {
            nodeID: 'tm-ZW_2',
            nodeType: 'trackMarker',
            nodePos: { x: 1060, y: 960 },
            text: '2',
        },
        {
            nodeID: 'tm-ZW_4',
            nodeType: 'trackMarker',
            nodePos: { x: 1060, y: 980 },
            text: '4',
        },
        //#endregion

        //#region Zawiercie <-> Myszkow / Gora Wlodowska

            //#region Zawiercie <-> Myszkow
        {
            nodeID: 'po-ZawiercieBorowePole',
            nodeType: 'simpleText',
            nodePos: { x: 1440, y: 860 },
            text: 'Zawiercie Borowe Pole',
            textSize: 12,
            strokeWidth: 0.5,
            textColor: 'white'
        },
        {
            nodeID: 'peron_ZawiercieBorowePole_p1',
            nodeType: 'platform',
            nodePos: { x: 1425, y: 887 },
            width: 30,
            height: 10,
            text: ''
        },
        {
            nodeID: 'peron_ZawiercieBorowePole_p2',
            nodeType: 'platform',
            nodePos: { x: 1425, y: 923 },
            width: 30,
            height: 10,
            text: ''
        },
        {
            nodeID: 'po-MyszkowMrzyglod',
            nodeType: 'simpleText',
            nodePos: { x: 1650, y: 860 },
            text: 'Myszków Mrzygłód',
            textSize: 12,
            strokeWidth: 0.5,
            textColor: 'white'
        },
        {
            nodeID: 'peron_MyszkowMrzyglod_p1',
            nodeType: 'platform',
            nodePos: { x: 1660, y: 887 },
            width: 30,
            height: 10,
            text: ''
        },
        {
            nodeID: 'peron_MyszkowMrzyglod_p2',
            nodeType: 'platform',
            nodePos: { x: 1610, y: 923 },
            width: 30,
            height: 10,
            text: ''
        },
        {
            nodeID: 'tm-L1_2719',
            nodeType: 'trackMarker',
            nodePos: { x: 1290, y: 900 },
            text: '2719',
        },
        {
            nodeID: 'tm-L1_2728',
            nodeType: 'trackMarker',
            nodePos: { x: 1290, y: 920 },
            text: '2728',
        },
        {
            nodeID: 'tm-L1_2707',
            nodeType: 'trackMarker',
            nodePos: { x: 1370, y: 900 },
            text: '2707',
        },
        {
            nodeID: 'tm-L1_2718',
            nodeType: 'trackMarker',
            nodePos: { x: 1370, y: 920 },
            text: '2718',
        },
        {
            nodeID: 'tm-L1_2693',
            nodeType: 'trackMarker',
            nodePos: { x: 1450, y: 900 },
            text: '2693',
        },
        {
            nodeID: 'tm-L1_2706',
            nodeType: 'trackMarker',
            nodePos: { x: 1450, y: 920 },
            text: '2706',
        },
        {
            nodeID: 'tm-L1_2677',
            nodeType: 'trackMarker',
            nodePos: { x: 1530, y: 900 },
            text: '2677',
        },
        {
            nodeID: 'tm-L1_2692',
            nodeType: 'trackMarker',
            nodePos: { x: 1530, y: 920 },
            text: '2692',
        },
        {
            nodeID: 'tm-L1_2665',
            nodeType: 'trackMarker',
            nodePos: { x: 1610, y: 900 },
            text: '2665',
        },
        {
            nodeID: 'tm-L1_2676',
            nodeType: 'trackMarker',
            nodePos: { x: 1610, y: 920 },
            text: '2676',
        },
        {
            nodeID: 'tm-L1_2651',
            nodeType: 'trackMarker',
            nodePos: { x: 1690, y: 900 },
            text: '2651',
        },
        {
            nodeID: 'tm-L1_2661',
            nodeType: 'trackMarker',
            nodePos: { x: 1690, y: 920 },
            text: '2661',
        },
        {
            nodeID: 'tm-L1_2637',
            nodeType: 'trackMarker',
            nodePos: { x: 1780, y: 900 },
            text: '2637',
        },
        {
            nodeID: 'tm-L1_2650',
            nodeType: 'trackMarker',
            nodePos: { x: 1780, y: 920 },
            text: '2650',
        },
        {
            nodeID: 'tm-L1_2625',
            nodeType: 'trackMarker',
            nodePos: { x: 1860, y: 900 },
            text: '2625',
        },
        {
            nodeID: 'tm-L1_2638',
            nodeType: 'trackMarker',
            nodePos: { x: 1860, y: 920 },
            text: '2638',
        },


        //#endregion


            //#region Zawiercie <-> Gora Wlodowska
        {
            nodeID: 'tm-L4_2213',
            nodeType: 'trackMarker',
            nodePos: { x: 1290, y: 880 },
            text: '2213',
        },
        {
            nodeID: 'tm-L4_2228',
            nodeType: 'trackMarker',
            nodePos: { x: 1290, y: 940 },
            text: '2228',
        },
        {
            nodeID: 'tm-L4_2199',
            nodeType: 'trackMarker',
            nodePos: { x: 1370, y: 880 },
            text: '2199',
        },
        {
            nodeID: 'tm-L4_2206',
            nodeType: 'trackMarker',
            nodePos: { x: 1370, y: 940 },
            text: '2206',
        },
        {
            nodeID: 'tm-L4_2183',
            nodeType: 'trackMarker',
            nodePos: { x: 1450, y: 880 },
            text: '2183',
        },
        {
            nodeID: 'tm-L4_2182',
            nodeType: 'trackMarker',
            nodePos: { x: 1450, y: 940 },
            text: '2182',
        },
        {
            nodeID: 'tm-L4_2161',
            nodeType: 'trackMarker',
            nodePos: { x: 1530, y: 880 },
            text: '2161',
        },
        {
            nodeID: 'tm-L4_2162',
            nodeType: 'trackMarker',
            nodePos: { x: 1540, y: 1000 },
            text: '2162',
        },
        {
            nodeID: 'tm-L4_2141',
            nodeType: 'trackMarker',
            nodePos: { x: 1610, y: 880 },
            text: '2141',
        },
        {
            nodeID: 'tm-L4_2142',
            nodeType: 'trackMarker',
            nodePos: { x: 1620, y: 1000 },
            text: '2142',
        },
        {
            nodeID: 'tm-L4_2119',
            nodeType: 'trackMarker',
            nodePos: { x: 1690, y: 880 },
            text: '2141',
        },
        {
            nodeID: 'tm-L4_2128',
            nodeType: 'trackMarker',
            nodePos: { x: 1700, y: 1000 },
            text: '2128',
        },
        {
            nodeID: 'tm-L4_2103',
            nodeType: 'trackMarker',
            nodePos: { x: 1780, y: 980 },
            text: '2103',
        },
        {
            nodeID: 'tm-L4_2114',
            nodeType: 'trackMarker',
            nodePos: { x: 1780, y: 1000 },
            text: '2114',
        },
        {
            nodeID: 'tm-L4_2085',
            nodeType: 'trackMarker',
            nodePos: { x: 1860, y: 980 },
            text: '2085',
        },
        {
            nodeID: 'tm-L4_2100',
            nodeType: 'trackMarker',
            nodePos: { x: 1860, y: 1000 },
            text: '2100',
        },
        {
            nodeID: 'tm-L4_2073',
            nodeType: 'trackMarker',
            nodePos: { x: 1940, y: 980 },
            text: '2073',
        },
        {
            nodeID: 'tm-L4_2086',
            nodeType: 'trackMarker',
            nodePos: { x: 1940, y: 1000 },
            text: '2086',
        },
        //#endregion

        //#endregion

        //#region [GW] Gora Wlodowska
        {
            nodeID: 'post_GoraWlodowska',
            nodeType: 'dispatchingPost',
            nodePos: { x: 1990, y: 1010 },
            postType: 'computer'
        },
        {
            nodeID: 'station_GoraWlodowska',
            nodeType: 'stationName',
            stationPrefix: 'GW',
            stationName: 'Góra Włodowska',
            nodePos: { x: 2080, y: 920 },
        },
        {
            nodeID: 'tm-GW_3',
            nodeType: 'trackMarker',
            nodePos: { x: 2080, y: 960 },
            text: '3',
        },
        {
            nodeID: 'tm-GW_1',
            nodeType: 'trackMarker',
            nodePos: { x: 2080, y: 980 },
            text: '1',
        },
        {
            nodeID: 'tm-GW_2',
            nodeType: 'trackMarker',
            nodePos: { x: 2080, y: 1000 },
            text: '2',
        },
        {
            nodeID: 'tm-GW_4',
            nodeType: 'trackMarker',
            nodePos: { x: 2080, y: 1020 },
            text: '4',
        },
        //#endregion

        //
        //#endregion
        //
    ]
}