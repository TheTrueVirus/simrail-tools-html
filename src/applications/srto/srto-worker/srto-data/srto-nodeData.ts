import { SRTO_DataTypes } from "./srto-dataTypes"

const phFontSize = 12

export const SRTO_Nodes: SRTO_DataTypes.NODES = {
    "srto_screen1": {
        "ADDITIONAL_NODES": [
            {
                nodeID: 'wip-info',
                nodePos: { x: 1290, y: 2300 },
                nodeType: 'simpleText',
                text: 'W.I.P. | Warszawa Zachodnia / Centralna / Wschodnia',
                textColor: 'white',
                textSize: 20
            },
            {
                nodeID: 'screenMarker-Gliwice',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 20, y: 120 },
                text: 'Gliwice',
            },
            {
                nodeID: 'screenMarker-Tychy',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 20, y: 240 },
                text: 'Tychy / Bielsko-Biała',
            },
            {
                nodeID: 'screenMarker-SDandowka',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1880, y: 225 },
                text: 'S. Dańdówka',
            },
            {
                nodeID: 'screenMarker-Częstochowa', // Myszkow
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1900, y: 700 },
                text: 'Częstochowa',
            },
            {
                nodeID: 'screenMarker-Częstochowa-2', // Koniecpol
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1150, y: 1160 },
                text: 'Częstochowa',
            },
            {
                nodeID: 'screenMarker-Krakow',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1815, y: 1160 },
                text: 'Kraków',
            },
            {
                nodeID: 'screenMarker-Czarnca',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 2330, y: 1130 },
                text: 'Kielce',
            },
            {
                nodeID: 'screenMarker-Zelislawice',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 40, y: 1190 },
                text: 'Zelislawice',
            },
            {
                nodeID: 'screenMarker-Idzikowice_TomaszowMazowiecki',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 2350, y: 1380 },
                text: 'Tomaszów Mazowiecki',
            },
            {
                nodeID: 'screenMarker-Idzikowice_Radom',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 2350, y: 1510 },
                text: 'Radom',
            },
            {
                nodeID: 'screenMarker-Szeligi_Markow',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1090, y: 1790 },
                text: 'Mszczonów',
            },
            {
                nodeID: 'screenMarker-Łódź_Voivodeship',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 10, y: 2030 },
                text: 'Łódź Voivodeship',
            },
            {
                nodeID: 'trackBreakMarker-Bedzin_DabrowaGornicza',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'A',
                breakMarker: {
                    firstMarker: { x: 2530, y: 80 },
                    secondMarker: { x: 40, y: 340 }
                }
            },
            {
                nodeID: 'trackBreakMarker-LazyLB_LazyLA',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'B',
                breakMarker: {
                    firstMarker: { x: 2530, y: 340 },
                    secondMarker: { x: 40, y: 770 }
                }
            },
            {
                nodeID: 'trackBreakMarker-CMK_C',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'C',
                breakMarker: {
                    firstMarker: { x: 2530, y: 780 },
                    secondMarker: { x: 40, y: 1030 }
                }
            },
            {
                nodeID: 'trackBreakMarker-CMK_D',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'D',
                breakMarker: {
                    firstMarker: { x: 2360, y: 1030 },
                    secondMarker: { x: 300, y: 1260 }
                }
            },
            {
                nodeID: 'trackBreakMarker-CMK_E',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'E',
                breakMarker: {
                    firstMarker: { x: 2480, y: 1210 },
                    secondMarker: { x: 40, y: 1410 }
                }
            },
            {
                nodeID: 'trackBreakMarker-CMK_F',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'F',
                breakMarker: {
                    firstMarker: { x: 2535, y: 1425 },
                    secondMarker: { x: 40, y: 1550 }
                }
            },
            {
                nodeID: 'trackBreakMarker-CMK_G',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'G',
                breakMarker: {
                    firstMarker: { x: 1850, y: 1560 },
                    secondMarker: { x: 40, y: 1690 }
                }
            },
            {
                nodeID: 'trackBreakMarker-CMK_H',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'H',
                breakMarker: {
                    firstMarker: { x: 1790, y: 1700 },
                    secondMarker: { x: 40, y: 1890 }
                }
            },
            {
                nodeID: 'trackBreakMarker-Wlochy_Zachodnia',
                nodePos: { x: 0, y: 0 },
                nodeType: 'trackBreakMarker',
                text: 'J',
                breakMarker: {
                    firstMarker: { x: 2540, y: 1900 },
                    secondMarker: { x: 40, y: 2170 }
                }
            },
        ],
        "KTC_BRY": [
            {
                nodeID: 'tm-Bry_KO_20',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 40 },
                text: '20',
            },
            {
                nodeID: 'tm-Bry_KO_15',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 40 },
                text: '15',
            },

            {
                nodeID: 'tm-KTC_KO_21',
                nodeType: 'trackMarker',
                nodePos: { x: 130, y: 140 },
                text: '21',
            },
            {
                nodeID: 'tm-KTC_KO_28',
                nodeType: 'trackMarker',
                nodePos: { x: 130, y: 160 },
                text: '28',
            },
            {
                nodeID: 'tm-KTC_KO_17',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 140 },
                text: '17',
            },
            {
                nodeID: 'tm-KTC_KO_22',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 160 },
                text: '22',
            },
            {
                nodeID: 'tm-Bry3',
                nodeType: 'trackMarker',
                nodePos: { x: 130, y: 180 },
                text: '3',
            },
            {
                nodeID: 'tm-Bry2',
                nodeType: 'trackMarker',
                nodePos: { x: 130, y: 200 },
                text: '2',
            },
            {
                nodeID: 'tm-Bry_KO_3L',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 180 },
                text: '3L',
            },
            {
                nodeID: 'tm-Bry_KO_2L',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 200 },
                text: '2L',
            },
        ],
        "KATOWICE": [
            {
                nodeID: 'post_Katowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 480, y: 240 },
                postType: 'relay'
            },
            {
                nodeID: 'station_Katowice',
                nodeType: 'stationName',
                stationPrefix: 'KO',
                stationName: 'Katowice',
                nodePos: { x: 650, y: 50 },
                nodePosFlipped: { x: 600, y: 290 }
            },
            {
                nodeID: 'peron_KO_p1',
                nodeType: 'platform',
                nodePos: { x: 440, y: 25 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'peron_KO_p2',
                nodeType: 'platform',
                nodePos: { x: 440, y: 85 },
                width: 60,
                height: 30,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_KO_p3',
                nodeType: 'platform',
                nodePos: { x: 420, y: 145 },
                width: 60,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'peron_KO_p4',
                nodeType: 'platform',
                nodePos: { x: 420, y: 205 },
                width: 60,
                height: 10,
                text: 'Peron IV'
            },
            {
                nodeID: 'tm-KO_9',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 20 },
                text: '9',
            },
            {
                nodeID: 'tm-KO_7',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 40 },
                text: '7',
            },
            {
                nodeID: 'tm-KO_5',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 60 },
                text: '5',
            },
            {
                nodeID: 'tm-KO_3',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 80 },
                text: '3',
            },
            {
                nodeID: 'tm-KO_1',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 120 },
                text: '1',
            },
            {
                nodeID: 'tm-KO_2',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 140 },
                text: '2',
            },
            {
                nodeID: 'tm-KO_4',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 160 },
                text: '4',
            },
            {
                nodeID: 'tm-KO_6',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 180 },
                text: '6',
            },
            {
                nodeID: 'tm-KO_8',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 200 },
                text: '8',
            },
            {
                nodeID: 'tm-KO_10',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 220 },
                text: '10',
            },
            {
                nodeID: 'tm-KO_17',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 80 },
                text: '17',
            },
            {
                nodeID: 'tm-KO_15',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 100 },
                text: '15',
            },
            {
                nodeID: 'tm-KO_13',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 120 },
                text: '13',
            },
            {
                nodeID: 'tm-KO_11',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 140 },
                text: '11',
            },
            {
                nodeID: 'tm-KO_12',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 160 },
                text: '12',
            },
            {
                nodeID: 'tm-KO_14',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 180 },
                text: '14',
            },
            {
                nodeID: 'tm-KO_16',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 200 },
                text: '16',
            },
            {
                nodeID: 'tm-KO_18',
                nodeType: 'trackMarker',
                nodePos: { x: 700, y: 220 },
                text: '18',
            },
            {
                nodeID: 'tm-KO_20',
                nodeType: 'trackMarker',
                nodePos: { x: 740, y: 240 },
                text: '20',
            },
            {
                nodeID: 'tm-KO_22',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 240 },
                text: '22',
            },
            {
                nodeID: 'tm-KO_26',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 260 },
                text: '26',
            },
        ],
        "KO_KZ": [
            {
                nodeID: 'tm-KO_KZ_1S',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 100 },
                text: '1S/1K',
            },
            {
                nodeID: 'tm-KO_KZ_2S',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 120 },
                text: '2S/2K',
            },
            {
                nodeID: 'tm-KO_KZ_3M',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 180 },
                text: '3M/3K',
            },
            {
                nodeID: 'tm-KO_KZ_4M',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 200 },
                text: '4M/4K',
            },
        ],
        "KATOWICE_ZAWODZIE": [
            {
                nodeID: 'post_KatowiceZawodzie',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1030, y: 140 },
                postType: 'computer'
            },
            {
                nodeID: 'station_KatowiceZawodzie',
                nodeType: 'stationName',
                stationPrefix: 'KZ',
                stationName: 'Katowice Zawodzie',
                nodePos: { x: 1130, y: 50 },
                nodePosFlipped: { x: 1130, y: 290 }
            },
            {
                nodeID: 'peron_KZ_p1',
                nodeType: 'platform',
                nodePos: { x: 1100, y: 105 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'peron_KZ_p2',
                nodeType: 'platform',
                nodePos: { x: 1100, y: 185 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'tm-KZ_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 100 },
                text: '1',
            },
            {
                nodeID: 'tm-KZ_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 120 },
                text: '2',
            },
            {
                nodeID: 'tm-KZ_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 180 },
                text: '3',
            },
            {
                nodeID: 'tm-KZ_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 200 },
                text: '4',
            },
            {
                nodeID: 'tm-KZ_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 220 },
                text: '6',
            },
            {
                nodeID: 'tm-KZ_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 240 },
                text: '8',
            },
            {
                nodeID: 'tm-KZ_10',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 260 },
                text: '10',
            },
        ],
        "KZ_SG": [
            {
                nodeID: 'peron_KSP',
                nodeType: 'platform',
                nodePos: { x: 1390, y: 105 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-KatowiceSzopienicePoludniowe',
                nodeType: 'simpleText',
                nodePos: { x: 1420, y: 80 },
                text: 'K. Szopienice Płd.',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'tm-KZ_SG_3133',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 100 },
                text: '3133',
            },
            {
                nodeID: 'tm-KZ_SG_3148',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 120 },
                text: '3148',
            },
            {
                nodeID: 'tm-KZ_SG_3121',
                nodeType: 'trackMarker',
                nodePos: { x: 1410, y: 100 },
                text: '3121',
            },
            {
                nodeID: 'tm-KZ_SG_3138',
                nodeType: 'trackMarker',
                nodePos: { x: 1410, y: 120 },
                text: '3138',
            },
            {
                nodeID: 'tm-KZ_SG_3111',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 100 },
                text: '3111',
            },
            {
                nodeID: 'tm-KZ_SG_3128',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 120 },
                text: '3128',
            },
        ],
        "SOSNOWIEC_GLOWNY": [
            {
                nodeID: 'post_SosnowiecGlowny',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1600, y: 130 },
                postType: 'computer'
            },
            {
                nodeID: 'station_SosnowiecGlowny',
                nodeType: 'stationName',
                stationPrefix: 'SG',
                stationName: 'Sosnowiec Główny',
                nodePos: { x: 1630, y: 50 },
                nodePosFlipped: { x: 1800, y: 175 }
            },
            {
                nodeID: 'peron_SG_p1',
                nodeType: 'platform',
                nodePos: { x: 1740, y: 145 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'peron_SG_p2',
                nodeType: 'platform',
                nodePos: { x: 1760, y: 105 },
                width: 60,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'tm-SG_9',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 20 },
                text: '9',
            },
            {
                nodeID: 'tm-SG_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 40 },
                text: '7',
            },
            {
                nodeID: 'tm-SG_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 60 },
                text: '5',
            },
            {
                nodeID: 'tm-SG_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 80 },
                text: '3',
            },
            {
                nodeID: 'tm-SG_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 100 },
                text: '1',
            },
            {
                nodeID: 'tm-SG_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 120 },
                text: '2',
            },
            {
                nodeID: 'tm-SG_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 140 },
                text: '4b',
            },
            {
                nodeID: 'tm-SG_4a',
                nodeType: 'trackMarker',
                nodePos: { x: 1820, y: 140 },
                text: '4a',
            },
        ],
        "SOSNOWIEC_POLUDNIOWY": [
            {
                nodeID: 'dispatchingPost_SosnowiecPoludniowy',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1530, y: 230 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-SosnowiecPoludniowy',
                nodeType: 'stationName',
                stationPrefix: 'Spł1',
                stationName: 'Sosnowiec Południowy',
                nodePos: { x: 1660, y: 180 },
                nodePosFlipped: { x: 1680, y: 290 }
            },
            {
                nodeID: 'tm-Spl_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1680, y: 200 },
                text: '1',
            },
            {
                nodeID: 'tm-Spl_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1680, y: 220 },
                text: '2',
            },
            {
                nodeID: 'tm-Spl_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1680, y: 240 },
                text: '4',
            },
            {
                nodeID: 'tm-Spl_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1680, y: 260 },
                text: '6',
            },
        ],
        "SG_B": [
            {
                nodeID: 'tm-SG_B_3071',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 100 },
                text: '3071',
            },
            {
                nodeID: 'tm-SG_B_3080',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 120 },
                text: '3080',
            },
            {
                nodeID: 'tm-SG_B_3065',
                nodeType: 'trackMarker',
                nodePos: { x: 2110, y: 100 },
                text: '3065',
            },
            {
                nodeID: 'tm-SG_B_3074',
                nodeType: 'trackMarker',
                nodePos: { x: 2110, y: 120 },
                text: '3074',
            },
        ],
        "BEDZIN": [
            {
                nodeID: 'post_Bedzin',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2320, y: 170 },
                postType: 'relay'
            },
            {
                nodeID: 'station_Bedzin',
                nodeType: 'stationName',
                stationPrefix: 'B',
                stationName: 'Będzin',
                nodePos: { x: 2250, y: 50 },
                nodePosFlipped: { x: 2250, y: 190 }
            },
            {
                nodeID: 'peron_KSP',
                nodeType: 'platform',
                nodePos: { x: 2225, y: 105 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-B_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2250, y: 100 },
                text: '1',
            },
            {
                nodeID: 'tm-B_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2250, y: 120 },
                text: '2',
            },
            {
                nodeID: 'tm-B_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2250, y: 140 },
                text: '4',
            },
            {
                nodeID: 'tm-B_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2250, y: 160 },
                text: '6',
            },
        ],
        "B_DG": [
            {
                nodeID: 'peron_BedzinMiasto1',
                nodeType: 'platform',
                nodePos: { x: 2380, y: 125 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_BedzinMiasto2',
                nodeType: 'platform',
                nodePos: { x: 2380, y: 85 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-BedzinMiasto',
                nodeType: 'simpleText',
                nodePos: { x: 2405, y: 70 },
                text: 'Będzin Miasto',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'tm-B_DG_3037',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 100 },
                text: '3037',
            },
            {
                nodeID: 'tm-B_DG_3048',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 120 },
                text: '3048',
            },
            {
                nodeID: 'tm-B_DG_3023',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 100 },
                text: '3023',
            },
            {
                nodeID: 'tm-B_DG_3036',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 120 },
                text: '3036',
            },
            {
                nodeID: 'peron_BedzinKsawera',
                nodeType: 'platform',
                nodePos: { x: 40, y: 385 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-BedzinKsawera',
                nodeType: 'simpleText',
                nodePos: { x: 70, y: 360 },
                text: 'Będzin Ksawera',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'tm-B_DG_3011',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 380 },
                text: '3011',
            },
            {
                nodeID: 'tm-B_DG_3022',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 400 },
                text: '3022',
            },
        ],
        "DABROWA_GORNICZA": [
            {
                nodeID: 'post_DabrowaGornicza',
                nodeType: 'dispatchingPost',
                nodePos: { x: 300, y: 415 },
                postType: 'computer'
            },
            {
                nodeID: 'station_DabrowaGornicza',
                nodeType: 'stationName',
                stationPrefix: 'DG',
                stationName: 'Dąbrowa Górnicza',
                nodePos: { x: 260, y: 350 },
                nodePosFlipped: { x: 260, y: 460 }
            },
            {
                nodeID: 'peron_DabrowaGornicza',
                nodeType: 'platform',
                nodePos: { x: 230, y: 385 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-DG_1',
                nodeType: 'trackMarker',
                nodePos: { x: 225, y: 380 },
                text: '1',
            },
            {
                nodeID: 'tm-DG_2',
                nodeType: 'trackMarker',
                nodePos: { x: 260, y: 400 },
                text: '2',
            },
        ],
        "DG_DZ": [
            {
                nodeID: 'peron_DGGolonog',
                nodeType: 'platform',
                nodePos: { x: 480, y: 385 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-DGGolonog',
                nodeType: 'simpleText',
                nodePos: { x: 500, y: 360 },
                text: 'D. G. Gołonóg',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_DGPogoria',
                nodeType: 'platform',
                nodePos: { x: 560, y: 385 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-DGGolonog',
                nodeType: 'simpleText',
                nodePos: { x: 580, y: 420 },
                text: 'D. G. Pogoria',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'tm-DG_DGZ_2983',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 380 },
                text: '2983',
            },
            {
                nodeID: 'tm-DG_DGZ_2994',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 400 },
                text: '2994',
            },
            {
                nodeID: 'tm-DG_DGZ_2971',
                nodeType: 'trackMarker',
                nodePos: { x: 490, y: 380 },
                text: '2971',
            },
            {
                nodeID: 'tm-DG_DGZ_2980',
                nodeType: 'trackMarker',
                nodePos: { x: 490, y: 400 },
                text: '2980',
            },
            {
                nodeID: 'tm-DG_DGZ_2955',
                nodeType: 'trackMarker',
                nodePos: { x: 570, y: 380 },
                text: '2955',
            },
            {
                nodeID: 'tm-DG_DGZ_2980',
                nodeType: 'trackMarker',
                nodePos: { x: 570, y: 400 },
                text: '2966',
            },
            {
                nodeID: 'tm-DG_DGZ_294a',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 380 },
                text: '2941',
            },
            {
                nodeID: 'tm-DG_DGZ_2952',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 400 },
                text: '2952',
            },
        ],
        "DABROWA_GORNICZA_HUTA_KATOWICE": [
            {
                nodeID: 'dispatchingPost-DabrowaGorniczaHutaKatowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 470, y: 530 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-DabrowaGorniczaHutaKatowice',
                nodeType: 'stationName',
                stationPrefix: 'DGHK',
                stationName: 'Dąbrowa Górnicza Huta Katowice',
                seperateDisplayName: 'D.G. Huta Katowice',
                nodePos: { x: 485, y: 455 },
                nodePosFlipped: { x: 485, y: 570 },
            },
        ],
        "DABROWA_GORNICZA_ZABKOWICE": [
            {
                nodeID: 'post_DabrowaGorniczaZabkowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 760, y: 415 },
                postType: 'relay'
            },
            {
                nodeID: 'station_DabrowaGorniczaZabkowice',
                nodeType: 'stationName',
                stationPrefix: 'DZ',
                stationName: 'Dąbrowa Górnicza Ząbkowice',
                nodePos: { x: 950, y: 350 },
                nodePosFlipped: { x: 950, y: 570 },
            },
            {
                nodeID: 'peron_DabrowaGorniczaZabkowice_p1',
                nodeType: 'platform',
                nodePos: { x: 910, y: 385 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'peron_DabrowaGorniczaZabkowice_p2',
                nodeType: 'platform',
                nodePos: { x: 910, y: 425 },
                width: 70,
                height: 50,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_DabrowaGorniczaZabkowice_p3',
                nodeType: 'platform',
                nodePos: { x: 920, y: 525 },
                width: 70,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'tm-DGZ_105',
                nodeType: 'trackMarker',
                nodePos: { x: 720, y: 460 },
                text: '105',
            },
            {
                nodeID: 'tm-DGZ_103',
                nodeType: 'trackMarker',
                nodePos: { x: 720, y: 480 },
                text: '103',
            },
            {
                nodeID: 'tm-DGZ_101',
                nodeType: 'trackMarker',
                nodePos: { x: 720, y: 500 },
                text: '101',
            },
            {
                nodeID: 'tm-DGZ_102',
                nodeType: 'trackMarker',
                nodePos: { x: 720, y: 520 },
                text: '102',
            },
            {
                nodeID: 'tm-DGZ_104',
                nodeType: 'trackMarker',
                nodePos: { x: 720, y: 540 },
                text: '104',
            },
            {
                nodeID: 'tm-DGZ_1b',
                nodeType: 'trackMarker',
                nodePos: { x: 815, y: 380 },
                text: '1b',
            },
            {
                nodeID: 'tm-DGZ_8b',
                nodeType: 'trackMarker',
                nodePos: { x: 875, y: 540 },
                text: '8b',
            },
            {
                nodeID: 'tm-DGZ_3',
                nodeType: 'trackMarker',
                nodePos: { x: 940, y: 400 },
                text: '3',
            },
            {
                nodeID: 'tm-DGZ_1a',
                nodeType: 'trackMarker',
                nodePos: { x: 940, y: 420 },
                text: '1a',
            },
            {
                nodeID: 'tm-DGZ_2',
                nodeType: 'trackMarker',
                nodePos: { x: 955, y: 480 },
                text: '2',
            },
            {
                nodeID: 'tm-DGZ_4',
                nodeType: 'trackMarker',
                nodePos: { x: 955, y: 500 },
                text: '4',
            },
            {
                nodeID: 'tm-DGZ_6',
                nodeType: 'trackMarker',
                nodePos: { x: 955, y: 520 },
                text: '6',
            },
            {
                nodeID: 'tm-DGZ_8b',
                nodeType: 'trackMarker',
                nodePos: { x: 955, y: 540 },
                text: '8b',
            },
            {
                nodeID: 'tm-DGZ_13',
                nodeType: 'trackMarker',
                nodePos: { x: 1085, y: 400 },
                text: '13',
            },
            {
                nodeID: 'tm-DGZ_11',
                nodeType: 'trackMarker',
                nodePos: { x: 1085, y: 420 },
                text: '11',
            },
            {
                nodeID: 'tm-DGZ_9',
                nodeType: 'trackMarker',
                nodePos: { x: 1085, y: 440 },
                text: '9',
            },
            {
                nodeID: 'tm-DGZ_10',
                nodeType: 'trackMarker',
                nodePos: { x: 1075, y: 460 },
                text: '10',
            },
            {
                nodeID: 'tm-DGZ_12',
                nodeType: 'trackMarker',
                nodePos: { x: 1075, y: 480 },
                text: '12',
            },
            {
                nodeID: 'tm-DGZ_14',
                nodeType: 'trackMarker',
                nodePos: { x: 1075, y: 500 },
                text: '14',
            },
            {
                nodeID: 'tm-DGZ_16',
                nodeType: 'trackMarker',
                nodePos: { x: 1075, y: 540 },
                text: '16',
            },
            {
                nodeID: 'tm-DGZ_B',
                nodeType: 'trackMarker',
                nodePos: { x: 1255, y: 420 },
                text: 'B',
            },
            {
                nodeID: 'tm-DGZ_E',
                nodeType: 'trackMarker',
                nodePos: { x: 1255, y: 440 },
                text: 'E',
            },
            {
                nodeID: 'tm-DGZ_A',
                nodeType: 'trackMarker',
                nodePos: { x: 1255, y: 460 },
                text: 'A',
            },
            {
                nodeID: 'tm-DGZ_H',
                nodeType: 'trackMarker',
                nodePos: { x: 1255, y: 480 },
                text: 'H',
            },
        ],
        "DZ_LC": [
            {
                nodeID: 'po-DGSikorka',
                nodeType: 'simpleText',
                nodePos: { x: 1380, y: 395 },
                text: 'D. G. Sikorka',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_DGSikorka_1',
                nodeType: 'platform',
                nodePos: { x: 1360, y: 425 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_DGSikorka_2',
                nodeType: 'platform',
                nodePos: { x: 1360, y: 485 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-Chruszczobrod',
                nodeType: 'simpleText',
                nodePos: { x: 1540, y: 355 },
                text: 'Chruszczobrod',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_Chruszczobrod_1',
                nodeType: 'platform',
                nodePos: { x: 1520, y: 425 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_Chruszczobrod_2',
                nodeType: 'platform',
                nodePos: { x: 1520, y: 485 },
                width: 40,
                height: 6.5,
                text: ''
            },
            {
                nodeID: 'po-Wiesiolka',
                nodeType: 'simpleText',
                nodePos: { x: 1660, y: 355 },
                text: 'Wiesiólka',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_Wiesiolka_1',
                nodeType: 'platform',
                nodePos: { x: 1640, y: 411 },
                width: 40,
                height: 6.5,
                text: ''
            },
            {
                nodeID: 'peron_Wiesiolka_2',
                nodeType: 'platform',
                nodePos: { x: 1640, y: 442.5 },
                width: 40,
                height: 6.5,
                text: ''
            },
            {
                nodeID: 'peron_Wiesiolka_2',
                nodeType: 'platform',
                nodePos: { x: 1640, y: 451 },
                width: 40,
                height: 6.5,
                text: ''
            },
            {
                nodeID: 'tm-DZ_LC_2899D',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 420 },
                text: '2899D',
            },
            {
                nodeID: 'tm-DZ_LC_2912D',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 440 },
                text: '2912D',
            },
            {
                nodeID: 'tm-DZ_LC_2899',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 460 },
                text: '2899',
            },
            {
                nodeID: 'tm-DZ_LC_2912',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 480 },
                text: '2912',
            },

            {
                nodeID: 'tm-DZ_LC_2885D',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 420 },
                text: '2885D',
            },
            {
                nodeID: 'tm-DZ_LC_2900D',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 440 },
                text: '2900D',
            },
            {
                nodeID: 'tm-DZ_LC_2885',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 460 },
                text: '2885',
            },
            {
                nodeID: 'tm-DZ_LC_2900',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 480 },
                text: '2900',
            },

            {
                nodeID: 'tm-DZ_LC_2869D',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 420 },
                text: '2869D',
            },
            {
                nodeID: 'tm-DZ_LC_2886D',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 440 },
                text: '2886D',
            },
            {
                nodeID: 'tm-DZ_LC_2869',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 460 },
                text: '2869',
            },
            {
                nodeID: 'tm-DZ_LC_2886',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 480 },
                text: '2886',
            },

            {
                nodeID: 'tm-DZ_LC_2851',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 420 },
                text: '2851',
            },
            {
                nodeID: 'tm-DZ_LC_2868',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 440 },
                text: '2868',
            },
            {
                nodeID: 'tm-DZ_LC_2853',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 460 },
                text: '2853',
            },
            {
                nodeID: 'tm-DZ_LC_2870',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 480 },
                text: '2870',
            },

            {
                nodeID: 'tm-DZ_LC_1P',
                nodeType: 'trackMarker',
                nodePos: { x: 1645, y: 380 },
                text: '1P',
            },
            {
                nodeID: 'tm-DZ_LC_2839',
                nodeType: 'trackMarker',
                nodePos: { x: 1645, y: 400 },
                text: '2839',
            },
            {
                nodeID: 'tm-DZ_LC_2841',
                nodeType: 'trackMarker',
                nodePos: { x: 1645, y: 420 },
                text: '2841',
            },
            {
                nodeID: 'tm-DZ_LC_2852D',
                nodeType: 'trackMarker',
                nodePos: { x: 1645, y: 440 },
                text: '2852D',
            },
            {
                nodeID: 'tm-DZ_LC_2852',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 460 },
                text: '2852',
            },
            {
                nodeID: 'tm-DZ_LC_2P',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 480 },
                text: '2P',
            },
            {
                nodeID: 'stationName-Przemiarki',
                nodeType: 'stationName',
                nodePos: { x: 1395, y: 520 },
                nodePosFlipped: { x: 1395, y: 580 },
                stationPrefix: 'Pr',
                stationName: 'Przemiarki',
            }
        ],
        "LAZY_LC": [
            {
                nodeID: 'post_LazyLC',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1810, y: 350 },
                postType: 'relay'
            },
            {
                nodeID: 'station_LazyLC',
                nodeType: 'stationName',
                stationPrefix: 'ŁC',
                stationName: 'Łazy Łc',
                nodePos: { x: 1780, y: 300 },
                nodePosFlipped: { x: 1780, y: 510 }
            },
            {
                nodeID: 'tm-LC_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 400 },
                text: '3',
            },
            {
                nodeID: 'tm-LC_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 420 },
                text: '1',
            },
            {
                nodeID: 'tm-LC_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 440 },
                text: '2',
            },
            {
                nodeID: 'tm-LC_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 460 },
                text: '4',
            },
            {
                nodeID: 'tm-LC_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 480 },
                text: '6',
            },
        ],
        "LC_LB": [
            {
                nodeID: 'tm-LC_LB_7CB_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1800, y: 340 },
                text: '7CB',
            },
            {
                nodeID: 'tm-LC_LB_7CB_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 300 },
                text: '7CB',
            },
            {
                nodeID: 'tm-LC_LB_3CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 400 },
                text: '3CB',
            },
            {
                nodeID: 'tm-LC_LB_1CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 420 },
                text: '1CB',
            },
            {
                nodeID: 'tm-LC_LB_2CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 440 },
                text: '2CB',
            },
            {
                nodeID: 'tm-LC_LB_4CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 460 },
                text: '4CB',
            },
            {
                nodeID: 'tm-LC_LB_6CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 480 },
                text: '6CB',
            },
        ],
        "LAZY_LB": [
            {
                nodeID: 'post_LazyLB',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2140, y: 500 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Lazy',
                nodeType: 'stationName',
                stationPrefix: 'LB',
                stationName: 'Łazy',
                nodePos: { x: 2140, y: 300 },
                nodePosFlipped: { x: 2100, y: 510 }
            },
            {
                nodeID: 'peron_LazyLB_p2',
                nodeType: 'platform',
                nodePos: { x: 2040, y: 405 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_LazyLB_p1',
                nodeType: 'platform',
                nodePos: { x: 2040, y: 445 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-LB_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 400 },
                text: '3',
            },
            {
                nodeID: 'tm-LB_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 420 },
                text: '1',
            },
            {
                nodeID: 'tm-LB_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 440 },
                text: '2',
            },
            {
                nodeID: 'tm-LB_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 460 },
                text: '4',
            },
            {
                nodeID: 'tm-LB_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 480 },
                text: '6',
            },
            {
                nodeID: 'tm-LB_125',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 320 },
                text: '125',
            },
            {
                nodeID: 'tm-LB_123',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 340 },
                text: '123',
            },
        ],
        "LB_LA": [
            {
                nodeID: 'tm-LB_LA_2795',
                nodeType: 'trackMarker',
                nodePos: { x: 2375, y: 400 },
                text: '2795',
            },
            {
                nodeID: 'tm-LB_LA_2794',
                nodeType: 'trackMarker',
                nodePos: { x: 2375, y: 420 },
                text: '2794',
            },
            {
                nodeID: 'tm-LB_LA_2781_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 400 },
                text: '2781',
            },
            {
                nodeID: 'tm-LB_LA_2790_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 420 },
                text: '2790',
            },
            {
                nodeID: 'tm-LB_LA_2781_2',
                nodeType: 'trackMarker',
                nodePos: { x: 80, y: 720 },
                text: '2781',
            },
            {
                nodeID: 'tm-LB_LA_2790_2',
                nodeType: 'trackMarker',
                nodePos: { x: 80, y: 740 },
                text: '2790',
            },
            {
                nodeID: 'tm-LB_LA_2781',
                nodeType: 'trackMarker',
                nodePos: { x: 200, y: 720 },
                text: '2779',
            },
            {
                nodeID: 'tm-LB_LA_2790',
                nodeType: 'trackMarker',
                nodePos: { x: 200, y: 740 },
                text: '2778',
            },
        ],
        "LAZY_LA": [
            {
                nodeID: 'post_LazyLA',
                nodeType: 'dispatchingPost',
                nodePos: { x: 320, y: 940 },
                postType: 'relay'
            },
            {
                nodeID: 'station_LazyLA',
                nodeType: 'stationName',
                stationPrefix: 'ŁA',
                stationName: 'Łazy Ła',
                nodePos: { x: 380, y: 630 },
                nodePosFlipped: { x: 265, y: 950 }
            },
            //
            // TRACK MARKER UPPER FREIGHT TRACKS
            //
            {
                nodeID: 'tm-LA_119',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 540 },
                text: '119',
            },
            {
                nodeID: 'tm-LA_117',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 560 },
                text: '117',
            },
            {
                nodeID: 'tm-LA_115',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 580 },
                text: '115',
            },
            {
                nodeID: 'tm-LA_113',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 600 },
                text: '113',
            },
            {
                nodeID: 'tm-LA_111',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 620 },
                text: '111',
            },
            {
                nodeID: 'tm-LA_109',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 640 },
                text: '109',
            },
            {
                nodeID: 'tm-LA_107',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 660 },
                text: '107',
            },
            {
                nodeID: 'tm-LA_105',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 680 },
                text: '105',
            },
            {
                nodeID: 'tm-LA_103',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 700 },
                text: '103',
            },
            //
            // TRACK MARKER LOWER FREIGHT TRACKS
            //
            {
                nodeID: 'tm-LA_124',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 780 },
                text: '124',
            },
            {
                nodeID: 'tm-LA_126',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 800 },
                text: '126',
            },
            {
                nodeID: 'tm-LA_128',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 820 },
                text: '128',
            },
            {
                nodeID: 'tm-LA_130',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 840 },
                text: '130',
            },
            {
                nodeID: 'tm-LA_132',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 860 },
                text: '132',
            },
            {
                nodeID: 'tm-LA_134',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 880 },
                text: '134',
            },
            {
                nodeID: 'tm-LA_136',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 900 },
                text: '136',
            },
            {
                nodeID: 'tm-LA_138b',
                nodeType: 'trackMarker',
                nodePos: { x: 190, y: 920 },
                text: '138b',
            },
            {
                nodeID: 'tm-LA_138a',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 920 },
                text: '138a',
            },
            {
                nodeID: 'tm-LA_144',
                nodeType: 'trackMarker',
                nodePos: { x: 180, y: 940 },
                text: '144',
            },
        ],
        "LA_Zw": [
            {
                nodeID: 'tm-LA_ZW_3ZW',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 700 },
                text: '3ZW',
            },
            {
                nodeID: 'tm-LA_ZW_1ZW',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 720 },
                text: '1ZW',
            },
            {
                nodeID: 'tm-LA_ZW_2ZW',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 740 },
                text: '2ZW',
            },
            {
                nodeID: 'tm-LA_ZW_4ZW',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 760 },
                text: '4ZW',
            },
        ],
        "ZAWIERCIE": [
            {
                nodeID: 'post_Zawiercie',
                nodeType: 'dispatchingPost',
                nodePos: { x: 900, y: 800 },
                postType: 'relay'
            },
            {
                nodeID: 'station_Zawiercie',
                nodeType: 'stationName',
                stationPrefix: 'Zw',
                stationName: 'Zawiercie',
                nodePos: { x: 950, y: 630 },
                nodePosFlipped: { x: 950, y: 860 }
            },
            {
                nodeID: 'peron_Zawiercie_P2',
                nodeType: 'platform',
                nodePos: { x: 1030, y: 725 },
                width: 60,
                height: 50,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_Zawiercie_P1',
                nodeType: 'platform',
                nodePos: { x: 1005, y: 805 },
                width: 85,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-ZW_3e',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 700 },
                text: '3e',
            },
            {
                nodeID: 'tm-ZW_3e',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 700 },
                text: '3e',
            },
            {
                nodeID: 'tm-ZW_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 705, y: 760 },
                text: '4b',
            },
            {
                nodeID: 'tm-ZW_104',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 780 },
                text: '104',
            },
            {
                nodeID: 'tm-ZW_106',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 800 },
                text: '106',
            },
            {
                nodeID: 'tm-ZW_108',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 820 },
                text: '108',
            },
            {
                nodeID: 'tm-ZW_110',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 840 },
                text: '110',
            },
            {
                nodeID: 'tm-ZW_112',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 860 },
                text: '112',
            },
            {
                nodeID: 'tm-ZW_114',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 880 },
                text: '114',
            },
            {
                nodeID: 'tm-ZW_116',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 900 },
                text: '116',
            },
            {
                nodeID: 'tm-ZW_118',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 920 },
                text: '118',
            },
            {
                nodeID: 'tm-ZW_120',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 940 },
                text: '120',
            },
            {
                nodeID: 'tm-ZW_3d',
                nodeType: 'trackMarker',
                nodePos: { x: 820, y: 700 },
                text: '3d',
            },
            {
                nodeID: 'tm-ZW_4c',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 760 },
                text: '4c',
            },
            {
                nodeID: 'tm-ZW_3b',
                nodeType: 'trackMarker',
                nodePos: { x: 975, y: 700 },
                text: '3b',
            },
            {
                nodeID: 'tm-ZW_1b',
                nodeType: 'trackMarker',
                nodePos: { x: 980, y: 720 },
                text: '1b',
            },
            {
                nodeID: 'tm-ZW_2b',
                nodeType: 'trackMarker',
                nodePos: { x: 995, y: 780 },
                text: '2b',
            },
            {
                nodeID: 'tm-ZW_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 660 },
                text: '7',
            },
            {
                nodeID: 'tm-ZW_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 680 },
                text: '5',
            },
            {
                nodeID: 'tm-ZW_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 700 },
                text: '3',
            },
            {
                nodeID: 'tm-ZW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 720 },
                text: '1',
            },
            {
                nodeID: 'tm-ZW_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 780 },
                text: '2',
            },
            {
                nodeID: 'tm-ZW_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 800 },
                text: '4',
            },
        ],
        "Zw_My": [
            {
                nodeID: 'po-ZawiercieBorowePole',
                nodeType: 'simpleText',
                nodePos: { x: 1440, y: 680 },
                text: 'Zawiercie Borowe Pole',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_ZawiercieBorowePole_p1',
                nodeType: 'platform',
                nodePos: { x: 1425, y: 707 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_ZawiercieBorowePole_p2',
                nodeType: 'platform',
                nodePos: { x: 1425, y: 743 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-MyszkowMrzyglod',
                nodeType: 'simpleText',
                nodePos: { x: 1650, y: 680 },
                text: 'Myszków Mrzygłód',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_MyszkowMrzyglod_p1',
                nodeType: 'platform',
                nodePos: { x: 1660, y: 707 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_MyszkowMrzyglod_p2',
                nodeType: 'platform',
                nodePos: { x: 1610, y: 743 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'tm-L1_2719',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 720 },
                text: '2719',
            },
            {
                nodeID: 'tm-L1_2728',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 740 },
                text: '2728',
            },
            {
                nodeID: 'tm-L1_2707',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 720 },
                text: '2707',
            },
            {
                nodeID: 'tm-L1_2718',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 740 },
                text: '2718',
            },
            {
                nodeID: 'tm-L1_2693',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 720 },
                text: '2693',
            },
            {
                nodeID: 'tm-L1_2706',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 740 },
                text: '2706',
            },
            {
                nodeID: 'tm-L1_2677',
                nodeType: 'trackMarker',
                nodePos: { x: 1530, y: 720 },
                text: '2677',
            },
            {
                nodeID: 'tm-L1_2692',
                nodeType: 'trackMarker',
                nodePos: { x: 1530, y: 740 },
                text: '2692',
            },
            {
                nodeID: 'tm-L1_2665',
                nodeType: 'trackMarker',
                nodePos: { x: 1610, y: 720 },
                text: '2665',
            },
            {
                nodeID: 'tm-L1_2676',
                nodeType: 'trackMarker',
                nodePos: { x: 1610, y: 740 },
                text: '2676',
            },
            {
                nodeID: 'tm-L1_2651',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 720 },
                text: '2651',
            },
            {
                nodeID: 'tm-L1_2661',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 740 },
                text: '2661',
            },
            {
                nodeID: 'tm-L1_2637',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 720 },
                text: '2637',
            },
            {
                nodeID: 'tm-L1_2650',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 740 },
                text: '2650',
            },
            {
                nodeID: 'tm-L1_2625',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 720 },
                text: '2625',
            },
            {
                nodeID: 'tm-L1_2638',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 740 },
                text: '2638',
            },
        ],
        "Zw_GW": [
            {
                nodeID: 'tm-L4_2213',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 700 },
                text: '2213',
            },
            {
                nodeID: 'tm-L4_2228',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 760 },
                text: '2228',
            },
            {
                nodeID: 'tm-L4_2199',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 700 },
                text: '2199',
            },
            {
                nodeID: 'tm-L4_2206',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 760 },
                text: '2206',
            },
            {
                nodeID: 'tm-L4_2183',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 700 },
                text: '2183',
            },
            {
                nodeID: 'tm-L4_2182',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 760 },
                text: '2182',
            },
            {
                nodeID: 'tm-L4_2161',
                nodeType: 'trackMarker',
                nodePos: { x: 1530, y: 700 },
                text: '2161',
            },
            {
                nodeID: 'tm-L4_2162',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 820 },
                text: '2162',
            },
            {
                nodeID: 'tm-L4_2141',
                nodeType: 'trackMarker',
                nodePos: { x: 1610, y: 700 },
                text: '2141',
            },
            {
                nodeID: 'tm-L4_2142',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 820 },
                text: '2142',
            },
            {
                nodeID: 'tm-L4_2119',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 700 },
                text: '2141',
            },
            {
                nodeID: 'tm-L4_2128',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 820 },
                text: '2128',
            },
            {
                nodeID: 'tm-L4_2103',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 800 },
                text: '2103',
            },
            {
                nodeID: 'tm-L4_2114',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 820 },
                text: '2114',
            },
            {
                nodeID: 'tm-L4_2085',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 800 },
                text: '2085',
            },
            {
                nodeID: 'tm-L4_2100',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 820 },
                text: '2100',
            },
            {
                nodeID: 'tm-L4_2073',
                nodeType: 'trackMarker',
                nodePos: { x: 1940, y: 800 },
                text: '2073',
            },
            {
                nodeID: 'tm-L4_2086',
                nodeType: 'trackMarker',
                nodePos: { x: 1940, y: 820 },
                text: '2086',
            },
        ],
        "GORA_WLODOWSKA": [
            {
                nodeID: 'post_GoraWlodowska',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1990, y: 830 },
                postType: 'computer'
            },
            {
                nodeID: 'station_GoraWlodowska',
                nodeType: 'stationName',
                stationPrefix: 'GW',
                stationName: 'Góra Włodowska',
                nodePos: { x: 2080, y: 740 },
                nodePosFlipped: { x: 2080, y: 880 }
            },
            {
                nodeID: 'tm-GW_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 780 },
                text: '3',
            },
            {
                nodeID: 'tm-GW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 800 },
                text: '1',
            },
            {
                nodeID: 'tm-GW_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 820 },
                text: '2',
            },
            {
                nodeID: 'tm-GW_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 840 },
                text: '4',
            },
        ],
        "GW_Ps": [
            {
                nodeID: 'tm-GW_PS_2035',
                nodeType: 'trackMarker',
                nodePos: { x: 2230, y: 800 },
                text: '2035',
            },
            {
                nodeID: 'tm-GW_PS_2050',
                nodeType: 'trackMarker',
                nodePos: { x: 2230, y: 820 },
                text: '2050',
            },

            {
                nodeID: 'tm-GW_PS_2023',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 800 },
                text: '2023',
            },
            {
                nodeID: 'tm-GW_PS_2036',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 820 },
                text: '2036',
            },

            {
                nodeID: 'tm-GW_PS_2009',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 800 },
                text: '2009',
            },
            {
                nodeID: 'tm-GW_PS_2022',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 820 },
                text: '2022',
            },

            {
                nodeID: 'tm-GW_PS_1995',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 800 },
                text: '1995',
            },
            {
                nodeID: 'tm-GW_PS_2008',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 820 },
                text: '2008',
            },
            // Gora Wlodowska <-> Psary [ROW 4]
            {
                nodeID: 'tm-GW_PS_1981',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1060 },
                text: '1981',
            },
            {
                nodeID: 'tm-GW_PS_1994',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1080 },
                text: '1994',
            },

            {
                nodeID: 'tm-GW_PS_1967',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1060 },
                text: '1967',
            },
            {
                nodeID: 'tm-GW_PS_1980',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1080 },
                text: '1980',
            },

            {
                nodeID: 'tm-GW_PS_1951',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1060 },
                text: '1951',
            },
            {
                nodeID: 'tm-GW_PS_1966',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1080 },
                text: '1966',
            },

            {
                nodeID: 'tm-GW_PS_1935',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1060 },
                text: '1935',
            },
            {
                nodeID: 'tm-GW_PS_1950',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1080 },
                text: '1950',
            },

            {
                nodeID: 'tm-GW_PS_1917',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1060 },
                text: '1917',
            },
            {
                nodeID: 'tm-GW_PS_1936',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1080 },
                text: '1936',
            },

            {
                nodeID: 'tm-GW_PS_1897',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1060 },
                text: '1897',
            },
            {
                nodeID: 'tm-GW_PS_1918',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1080 },
                text: '1918',
            },

            {
                nodeID: 'tm-GW_PS_1881',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1060 },
                text: '1881',
            },
            {
                nodeID: 'tm-GW_PS_1898',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1080 },
                text: '1898',
            },

            {
                nodeID: 'tm-GW_PS_1859',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1060 },
                text: '1859',
            },
            {
                nodeID: 'tm-GW_PS_1882',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1080 },
                text: '1882',
            },

            {
                nodeID: 'tm-GW_PS_1841',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1060 },
                text: '1841',
            },
            {
                nodeID: 'tm-GW_PS_1858',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1080 },
                text: '1858',
            },

            {
                nodeID: 'tm-GW_PS_1827',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1060 },
                text: '1827',
            },
            {
                nodeID: 'tm-GW_PS_1842',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1080 },
                text: '1842',
            },

            {
                nodeID: 'tm-GW_PS_1807',
                nodeType: 'trackMarker',
                nodePos: { x: 870, y: 1060 },
                text: '1827',
            },
            {
                nodeID: 'tm-GW_PS_1828',
                nodeType: 'trackMarker',
                nodePos: { x: 870, y: 1080 },
                text: '1828',
            },

            {
                nodeID: 'tm-GW_PS_1789',
                nodeType: 'trackMarker',
                nodePos: { x: 950, y: 1060 },
                text: '1789',
            },
            {
                nodeID: 'tm-GW_PS_1806',
                nodeType: 'trackMarker',
                nodePos: { x: 950, y: 1080 },
                text: '1806',
            },

            {
                nodeID: 'tm-GW_PS_1773',
                nodeType: 'trackMarker',
                nodePos: { x: 1030, y: 1060 },
                text: '1773',
            },
            {
                nodeID: 'tm-GW_PS_1788',
                nodeType: 'trackMarker',
                nodePos: { x: 1030, y: 1080 },
                text: '1788',
            },

            {
                nodeID: 'tm-GW_PS_1759',
                nodeType: 'trackMarker',
                nodePos: { x: 1110, y: 1060 },
                text: '1759',
            },
            {
                nodeID: 'tm-GW_PS_1774',
                nodeType: 'trackMarker',
                nodePos: { x: 1110, y: 1080 },
                text: '1774',
            },

            {
                nodeID: 'tm-GW_PS_1743',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1060 },
                text: '1743',
            },
            {
                nodeID: 'tm-GW_PS_1758',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1080 },
                text: '1758',
            },

            {
                nodeID: 'tm-GW_PS_1727',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1060 },
                text: '1727',
            },
            {
                nodeID: 'tm-GW_PS_1742',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1080 },
                text: '1742',
            },

            {
                nodeID: 'tm-GW_PS_1713',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 1060 },
                text: '1713',
            },
            {
                nodeID: 'tm-GW_PS_1726',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 1080 },
                text: '1726',
            },
        ],
        "PSARY": [
            {
                nodeID: 'post_Psary',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1440, y: 1110 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Psary',
                nodeType: 'stationName',
                stationPrefix: 'Ps',
                stationName: 'Psary',
                nodePos: { x: 1540, y: 1000 },
                nodePosFlipped: { x: 1540, y: 1150 }
            },
            {
                nodeID: 'tm-PS_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1040 },
                text: '3',
            },
            {
                nodeID: 'tm-PS_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1060 },
                text: '1',
            },
            {
                nodeID: 'tm-PS_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1080 },
                text: '2',
            },
            {
                nodeID: 'tm-PS_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1100 },
                text: '4',
            },
            {
                nodeID: 'tm-PS_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1120 },
                text: '6',
            },
        ],
        "STARZYNY_SPROWA__KOZLOW_ENTRY": [
            {
                nodeID: 'tm-Pa_Str_05',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 1100 },
                text: '05',
            },
            {
                nodeID: 'tm-Pa_Str_15',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 1160 },
                text: '15',
            },
        ],
        "STARZYNY_SPROWA": [
            //? Starzyny
            // {
            //     nodeID: 'dispatchingPost-Starzyny',
            //     nodeType: 'dispatchingPost',
            //     nodePos: { x: 1435, y: 1150 },
            //     postType: 'computer'
            // },
            {
                nodeID: 'stationName-Starzyny',
                nodeType: 'stationName',
                stationPrefix: 'Str',
                stationName: 'Starzyny',
                nodePos: { x: 1430, y: 1145 },
                nodePosFlipped: { x: 1430, y: 1215 }
            },
            //? Sprowa
            {
                nodeID: 'dispatchingPost-Sprowa',
                nodeType: 'stationName',
                stationPrefix: 'Sp',
                stationName: 'Sprowa',
                nodePos: { x: 1655, y: 1145 },
                nodePosFlipped: { x: 1655, y: 1165 }
            },
            {
                nodeID: 'simpleText-stationName-Sprowa',
                nodeType: 'simpleText',
                nodePos: { x: 1655, y: 1160 },
                nodePosFlipped: { x: 1655, y: 1150 },
                textSize: 10,
                text: `Controlled by Starzyny`
            },
        ],
        "Ps_Kn": [
            {
                nodeID: 'tm-PS_KN_1673',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 1060 },
                text: '1673',
            },
            {
                nodeID: 'tm-PS_KN_1686',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 1080 },
                text: '1686',
            },

            {
                nodeID: 'tm-PS_KN_1655',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1060 },
                text: '1655',
            },
            {
                nodeID: 'tm-PS_KN_1674',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1080 },
                text: '1674',
            },

            {
                nodeID: 'tm-PS_KN_1641',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 1060 },
                text: '1641',
            },
            {
                nodeID: 'tm-PS_KN_1656',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 1080 },
                text: '1656',
            },

            {
                nodeID: 'tm-PS_KN_1625',
                nodeType: 'trackMarker',
                nodePos: { x: 1950, y: 1060 },
                text: '1625',
            },
            {
                nodeID: 'tm-PS_KN_1642',
                nodeType: 'trackMarker',
                nodePos: { x: 1950, y: 1080 },
                text: '1642',
            },

            {
                nodeID: 'tm-PS_KN_1611',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1060 },
                text: '1611',
            },
            {
                nodeID: 'tm-PS_KN_1624',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1080 },
                text: '1624',
            },
        ],
        "KNAPOWKA": [
            {
                nodeID: 'post_Knapowka',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2100, y: 1090 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Knapowka',
                nodeType: 'stationName',
                stationPrefix: 'Kn',
                stationName: 'Knapówka',
                nodePos: { x: 2120, y: 1000 },
                nodePosFlipped: { x: 2120, y: 1140 }
            },
        ],
        "Kn_Cz": [
            {
                nodeID: 'tm-Kn_Cz_19',
                nodeType: 'trackMarker',
                nodePos: { x: 2220, y: 1100 },
                text: '19',
            },
            {
                nodeID: 'tm-Kn_Cz_21',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 1100 },
                text: '21',
            },
        ],
        "Kn_WP": [
            {
                nodeID: 'tm-Kn_WP_1587',
                nodeType: 'trackMarker',
                nodePos: { x: 2220, y: 1060 },
                text: '1587',
            },
            {
                nodeID: 'tm-Kn_WP_1600',
                nodeType: 'trackMarker',
                nodePos: { x: 2220, y: 1080 },
                text: '1600',
            },
            {
                nodeID: 'tm-Kn_WP_1565',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 1060 },
                text: '1565',
            },
            {
                nodeID: 'tm-Kn_WP_1586',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 1080 },
                text: '1586',
            },
            //
            {
                nodeID: 'tm-Kn_WP_1551',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1240 },
                text: '1551',
            },
            {
                nodeID: 'tm-Kn_WP_1564',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1260 },
                text: '1564',
            },
        ],
        "Zes_WP": [
            {
                nodeID: 'tm-Zes-WP_59',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1220 },
                text: '59',
            },
            {
                nodeID: 'tm-Zes-WP_41',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1220 },
                text: '41',
            },
            {
                nodeID: 'tm-Zes-WP_25',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1220 },
                text: '25',
            },
            {
                nodeID: 'tm-Zes-WP_11',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1220 },
                text: '11',
            },
        ],
        "WLOSZCZOWA_POLNOC": [
            {
                nodeID: 'post_WloszczowaPolnoc',
                nodeType: 'dispatchingPost',
                nodePos: { x: 470, y: 1290 },
                postType: 'computer'
            },
            {
                nodeID: 'station_WloszczowaPolnoc',
                nodeType: 'stationName',
                stationPrefix: 'WP',
                stationName: 'Włoszczowa Północ',
                nodePos: { x: 560, y: 1170 },
                nodePosFlipped: { x: 600, y: 1320 }
            },
            {
                nodeID: 'peron_WloszczowaPolnoc_P2',
                nodeType: 'platform',
                nodePos: { x: 550, y: 1205 },
                width: 40,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_WloszczowaPolnoc_P1',
                nodeType: 'platform',
                nodePos: { x: 530, y: 1285 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-WP_5',
                nodeType: 'trackMarker',
                nodePos: { x: 580, y: 1200 },
                text: '5',
            },
            {
                nodeID: 'tm-WP_3',
                nodeType: 'trackMarker',
                nodePos: { x: 580, y: 1220 },
                text: '3',
            },
            {
                nodeID: 'tm-WP_1',
                nodeType: 'trackMarker',
                nodePos: { x: 565, y: 1240 },
                text: '1',
            },
            {
                nodeID: 'tm-WP_2',
                nodeType: 'trackMarker',
                nodePos: { x: 565, y: 1260 },
                text: '2',
            },
            {
                nodeID: 'tm-WP_4',
                nodeType: 'trackMarker',
                nodePos: { x: 560, y: 1280 },
                text: '4',
            },
        ],
        "WP_Ol": [
            {
                nodeID: 'tm-WP_Ol_1511',
                nodeType: 'trackMarker',
                nodePos: { x: 740, y: 1240 },
                text: '1511',
            },
            {
                nodeID: 'tm-WP_Ol_1526',
                nodeType: 'trackMarker',
                nodePos: { x: 740, y: 1260 },
                text: '1526',
            },

            {
                nodeID: 'tm-WP_Ol_1489',
                nodeType: 'trackMarker',
                nodePos: { x: 820, y: 1240 },
                text: '1489',
            },
            {
                nodeID: 'tm-WP_Ol_1510',
                nodeType: 'trackMarker',
                nodePos: { x: 820, y: 1260 },
                text: '1510',
            },

            {
                nodeID: 'tm-WP_Ol_1469',
                nodeType: 'trackMarker',
                nodePos: { x: 900, y: 1240 },
                text: '1469',
            },
            {
                nodeID: 'tm-WP_Ol_1490',
                nodeType: 'trackMarker',
                nodePos: { x: 900, y: 1260 },
                text: '1490',
            },

            {
                nodeID: 'tm-WP_Ol_1455',
                nodeType: 'trackMarker',
                nodePos: { x: 980, y: 1240 },
                text: '1455',
            },
            {
                nodeID: 'tm-WP_Ol_1470',
                nodeType: 'trackMarker',
                nodePos: { x: 980, y: 1260 },
                text: '1470',
            },

            {
                nodeID: 'tm-WP_Ol_1433',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 1240 },
                text: '1433',
            },
            {
                nodeID: 'tm-WP_Ol_1454',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 1260 },
                text: '1454',
            },

            {
                nodeID: 'tm-WP_Ol_1413',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 1240 },
                text: '1413',
            },
            {
                nodeID: 'tm-WP_Ol_1432',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 1260 },
                text: '1432',
            },

            {
                nodeID: 'tm-WP_Ol_1393',
                nodeType: 'trackMarker',
                nodePos: { x: 1220, y: 1240 },
                text: '1393',
            },
            {
                nodeID: 'tm-WP_Ol_1412',
                nodeType: 'trackMarker',
                nodePos: { x: 1220, y: 1260 },
                text: '1412',
            },

            {
                nodeID: 'tm-WP_Ol_1369',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 1240 },
                text: '1369',
            },
            {
                nodeID: 'tm-WP_Ol_1392',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 1260 },
                text: '1392',
            },

            {
                nodeID: 'tm-WP_Ol_1355',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 1240 },
                text: '1355',
            },
            {
                nodeID: 'tm-WP_Ol_1370',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 1260 },
                text: '1370',
            },

            {
                nodeID: 'tm-WP_Ol_1333',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 1240 },
                text: '1333',
            },
            {
                nodeID: 'tm-WP_Ol_1354',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 1260 },
                text: '1354',
            },

            {
                nodeID: 'tm-WP_Ol_1309',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1240 },
                text: '1309',
            },
            {
                nodeID: 'tm-WP_Ol_1332',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1260 },
                text: '1332',
            },

            {
                nodeID: 'tm-WP_Ol_1295',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 1240 },
                text: '1295',
            },
            {
                nodeID: 'tm-WP_Ol_1310',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 1260 },
                text: '1310',
            },

            {
                nodeID: 'tm-WP_Ol_1281',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 1240 },
                text: '1281',
            },
            {
                nodeID: 'tm-WP_Ol_1296',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 1260 },
                text: '1296',
            },

            {
                nodeID: 'tm-WP_Ol_1267',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 1240 },
                text: '1267',
            },
            {
                nodeID: 'tm-WP_Ol_1280',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 1260 },
                text: '1280',
            },

            {
                nodeID: 'tm-WP_Ol_1257',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 1240 },
                text: '1257',
            },
            {
                nodeID: 'tm-WP_Ol_1266',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 1260 },
                text: '1266',
            },
        ],
        "OLSZAMOWICE": [
            {
                nodeID: 'post_Olszamowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1920, y: 1210 },
                postType: 'computer'
            },
            {
                nodeID: 'station_WloszczowaPolnoc',
                nodeType: 'stationName',
                stationPrefix: 'Ol',
                stationName: 'Olszamowice',
                nodePos: { x: 2020, y: 1170 },
                nodePosFlipped: { x: 2020, y: 1305 }
            },
            {
                nodeID: 'tm-Ol_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 1220 },
                text: '3',
            },
            {
                nodeID: 'tm-Ol_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 1240 },
                text: '1',
            },
            {
                nodeID: 'tm-Ol_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 1260 },
                text: '2',
            },
            {
                nodeID: 'tm-Ol_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 1280 },
                text: '4',
            },
        ],
        "Ol_OP": [
            {
                nodeID: 'tm-Ol_Pl_1217',
                nodeType: 'trackMarker',
                nodePos: { x: 2180, y: 1240 },
                text: '1217',
            },
            {
                nodeID: 'tm-Ol_Pl_1230',
                nodeType: 'trackMarker',
                nodePos: { x: 2180, y: 1260 },
                text: '1230',
            },

            {
                nodeID: 'tm-Ol_Pl_1197',
                nodeType: 'trackMarker',
                nodePos: { x: 2260, y: 1240 },
                text: '1197',
            },
            {
                nodeID: 'tm-Ol_Pl_1216',
                nodeType: 'trackMarker',
                nodePos: { x: 2260, y: 1260 },
                text: '1216',
            },

            {
                nodeID: 'tm-Ol_Pl_1181',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 1240 },
                text: '1181',
            },
            {
                nodeID: 'tm-Ol_Pl_1196',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 1260 },
                text: '1196',
            },

            {
                nodeID: 'tm-Ol_Pl_1163',
                nodeType: 'trackMarker',
                nodePos: { x: 2420, y: 1240 },
                text: '1163',
            },
            {
                nodeID: 'tm-Ol_Pl_1180',
                nodeType: 'trackMarker',
                nodePos: { x: 2420, y: 1260 },
                text: '1180',
            },
            // Olszamowice <-> Pilichowice [ROW 6]
            {
                nodeID: 'tm-Ol_Pl_1145',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1440 },
                text: '1145',
            },
            {
                nodeID: 'tm-Ol_Pl_1162',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1460 },
                text: '1162',
            },

            {
                nodeID: 'tm-Ol_Pl_1131',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1440 },
                text: '1131',
            },
            {
                nodeID: 'tm-Ol_Pl_1146',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1460 },
                text: '1146',
            },

            {
                nodeID: 'tm-Ol_Pl_1109',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1440 },
                text: '1109',
            },
            {
                nodeID: 'tm-Ol_Pl_1130',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1460 },
                text: '1130',
            },

            {
                nodeID: 'tm-Ol_Pl_1087',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1440 },
                text: '1087',
            },
            {
                nodeID: 'tm-Ol_Pl_1108',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1460 },
                text: '1108',
            },

            {
                nodeID: 'tm-Ol_Pl_1069',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1440 },
                text: '1069',
            },
            {
                nodeID: 'tm-Ol_Pl_1088',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1460 },
                text: '1088',
            },
            // [Pl] Pilichowice
            {
                nodeID: 'station_Pilichowice',
                nodeType: 'stationName',
                stationPrefix: 'Pl',
                stationName: 'Pilichowice',
                nodePos: { x: 465, y: 1400 },
                nodePosFlipped: { x: 465, y: 1500 }
            },
            {
                nodeID: 'simpleText_Pilichowice_Olszamowice',
                nodeType: 'simpleText',
                nodePos: { x: 465, y: 1420 },
                nodePosFlipped: { x: 465, y: 1480 },
                textSize: 10,
                text: `Controlled by Olszamowice`
            },
            // Pilichowice <-> Opoczno Poludnie
            {
                nodeID: 'tm-Pl_OP_1041',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 1440 },
                text: '1041',
            },
            {
                nodeID: 'tm-Pl_OP_1056',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 1460 },
                text: '1056',
            },

            {
                nodeID: 'tm-Pl_OP_1019',
                nodeType: 'trackMarker',
                nodePos: { x: 620, y: 1440 },
                text: '1019',
            },
            {
                nodeID: 'tm-Pl_OP_1040',
                nodeType: 'trackMarker',
                nodePos: { x: 620, y: 1460 },
                text: '1040',
            },

            {
                nodeID: 'tm-Pl_OP_1001',
                nodeType: 'trackMarker',
                nodePos: { x: 700, y: 1440 },
                text: '1001',
            },
            {
                nodeID: 'tm-Pl_OP_1018',
                nodeType: 'trackMarker',
                nodePos: { x: 700, y: 1460 },
                text: '1018',
            },

            {
                nodeID: 'tm-Pl_OP_983',
                nodeType: 'trackMarker',
                nodePos: { x: 780, y: 1440 },
                text: '983',
            },
            {
                nodeID: 'tm-Pl_OP_1000',
                nodeType: 'trackMarker',
                nodePos: { x: 780, y: 1460 },
                text: '1000',
            },

            {
                nodeID: 'tm-Pl_OP_967',
                nodeType: 'trackMarker',
                nodePos: { x: 860, y: 1440 },
                text: '967',
            },
            {
                nodeID: 'tm-Pl_OP_982',
                nodeType: 'trackMarker',
                nodePos: { x: 860, y: 1460 },
                text: '982',
            },

            {
                nodeID: 'tm-Pl_OP_953',
                nodeType: 'trackMarker',
                nodePos: { x: 940, y: 1440 },
                text: '953',
            },
            {
                nodeID: 'tm-Pl_OP_968',
                nodeType: 'trackMarker',
                nodePos: { x: 940, y: 1460 },
                text: '968',
            },

            {
                nodeID: 'tm-Pl_OP_939',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 1440 },
                text: '939',
            },
            {
                nodeID: 'tm-Pl_OP_952',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 1460 },
                text: '952',
            },
        ],
        "OPOCZNO_POLUDNIE": [
            {
                nodeID: 'post_OpocznoPoludnie',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1115, y: 1490 },
                postType: 'relay'
            },
            {
                nodeID: 'station_OpocznoPoludnie',
                nodeType: 'stationName',
                stationPrefix: 'Op',
                stationName: 'Opoczno Południe',
                nodePos: { x: 1205, y: 1380 },
                nodePosFlipped: { x: 1235, y: 1515 }
            },
            {
                nodeID: 'peron_OpocnoPoludnie',
                nodeType: 'platform',
                nodePos: { x: 1180, y: 1485 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-OP_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1205, y: 1420 },
                text: '3',
            },
            {
                nodeID: 'tm-OP_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1205, y: 1440 },
                text: '1',
            },
            {
                nodeID: 'tm-OP_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1220, y: 1460 },
                text: '2',
            },
            {
                nodeID: 'tm-OP_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 1480 },
                text: '4',
            },
        ],
        "OP_Id": [
            {
                nodeID: 'tm-OP_Id_901',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 1440 },
                text: '901',
            },
            {
                nodeID: 'tm-OP_Id_916',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 1460 },
                text: '916',
            },

            {
                nodeID: 'tm-OP_Id_885',
                nodeType: 'trackMarker',
                nodePos: { x: 1470, y: 1440 },
                text: '885',
            },
            {
                nodeID: 'tm-OP_Id_900',
                nodeType: 'trackMarker',
                nodePos: { x: 1470, y: 1460 },
                text: '900',
            },

            {
                nodeID: 'tm-OP_Id_869',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1440 },
                text: '869',
            },
            {
                nodeID: 'tm-OP_Id_886',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1460 },
                text: '886',
            },

            {
                nodeID: 'tm-OP_Id_855',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1440 },
                text: '855',
            },
            {
                nodeID: 'tm-OP_Id_868',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1460 },
                text: '868',
            },

            {
                nodeID: 'tm-OP_Id_839',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 1440 },
                text: '839',
            },
            {
                nodeID: 'tm-OP_Id_854',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 1460 },
                text: '854',
            },

            {
                nodeID: 'tm-OP_Id_827',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1440 },
                text: '827',
            },
            {
                nodeID: 'tm-OP_Id_840',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1460 },
                text: '840',
            },
        ],
        "IDZIKOWICE": [
            {
                nodeID: 'post_Idzikowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2180, y: 1530 },
                postType: 'relay'
            },
            {
                nodeID: 'station_Idzikowice',
                nodeType: 'stationName',
                stationPrefix: 'Id',
                stationName: 'Idzikowice',
                nodePos: { x: 2200, y: 1360 },
                nodePosFlipped: { x: 2030, y: 1630 }
            },
            {
                nodeID: 'tm-Id_9',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1340 },
                text: '9',
            },
            {
                nodeID: 'tm-Id_7',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1360 },
                text: '7',
            },
            {
                nodeID: 'tm-Id_5',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1400 },
                text: '5',
            },
            {
                nodeID: 'tm-Id_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1420 },
                text: '3',
            },
            {
                nodeID: 'tm-Id_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1440 },
                text: '1',
            },
            {
                nodeID: 'tm-Id_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1460 },
                text: '2',
            },
            {
                nodeID: 'tm-Id_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1480 },
                text: '4',
            },
            {
                nodeID: 'tm-Id_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1500 },
                text: '6',
            },
            {
                nodeID: 'tm-Id_8',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1540 },
                text: '8',
            },
            {
                nodeID: 'tm-Id_10',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1560 },
                text: '10',
            },
            {
                nodeID: 'tm-Id_12',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1580 },
                text: '12',
            },
            {
                nodeID: 'tm-Id_14',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1600 },
                text: '14',
            },
        ],
        "Id_Rd": [
            {
                nodeID: 'tm-Id_Rd_27',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1400 },
                text: '27',
            },
            {
                nodeID: 'tm-Id_Rd_07',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1480 },
                text: '07',
            },

            {
                nodeID: 'tm-Id_Rd_13',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 1400 },
                text: '13',
            },
            {
                nodeID: 'tm-Id_Rd_21',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 1480 },
                text: '21',
            },

            {
                nodeID: 'tm-Id_Rd_05',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1400 },
                text: '05',
            },
            {
                nodeID: 'tm-Id_Rd_33',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1480 },
                text: '33',
            },
        ],
        "Id_St": [
            // Idzikowice <-> Strzalki [R6]
            {
                nodeID: 'tm-Id_Sz_785',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1440 },
                text: '785',
            },
            {
                nodeID: 'tm-Id_Sz_798',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1460 },
                text: '798',
            },

            {
                nodeID: 'tm-Id_Sz_765',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 1440 },
                text: '765',
            },
            {
                nodeID: 'tm-Id_Sz_784',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 1460 },
                text: '784',
            },

            {
                nodeID: 'tm-Id_Sz_751',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1440 },
                text: '751',
            },
            {
                nodeID: 'tm-Id_Sz_766',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1460 },
                text: '766',
            },
            // Idzikowice <-> Strzalki [R7]
            {
                nodeID: 'tm-Id_St_731',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1580 },
                text: '731',
            },
            {
                nodeID: 'tm-Id_St_750',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1600 },
                text: '750',
            },

            {
                nodeID: 'tm-Id_St_711',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1580 },
                text: '711',
            },
            {
                nodeID: 'tm-Id_St_732',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1600 },
                text: '732',
            },

            {
                nodeID: 'tm-Id_St_691',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1580 },
                text: '691',
            },
            {
                nodeID: 'tm-Id_St_712',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1600 },
                text: '712',
            },

            {
                nodeID: 'tm-Id_St_667',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1580 },
                text: '667',
            },
            {
                nodeID: 'tm-Id_St_692',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1600 },
                text: '692',
            },

            {
                nodeID: 'tm-Id_St_653',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1580 },
                text: '653',
            },
            {
                nodeID: 'tm-Id_St_668',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1600 },
                text: '668',
            },

            {
                nodeID: 'tm-Id_St_633',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1580 },
                text: '633',
            },
            {
                nodeID: 'tm-Id_St_654',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1600 },
                text: '654',
            },

            {
                nodeID: 'tm-Id_St_611',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1580 },
                text: '611',
            },
            {
                nodeID: 'tm-Id_St_634',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1600 },
                text: '634',
            },

            {
                nodeID: 'tm-Id_St_595',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1580 },
                text: '595',
            },
            {
                nodeID: 'tm-Id_St_610',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1600 },
                text: '610',
            },

            {
                nodeID: 'tm-Id_St_581',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1580 },
                text: '581',
            },
            {
                nodeID: 'tm-Id_St_596',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1600 },
                text: '596',
            },
        ],
        "STRZALKI": [
            {
                nodeID: 'post_Strzalki',
                nodeType: 'dispatchingPost',
                nodePos: { x: 770, y: 1610 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Strzalki',
                nodeType: 'stationName',
                stationPrefix: 'St',
                stationName: 'Strzałki',
                nodePos: { x: 860, y: 1530 },
                nodePosFlipped: { x: 860, y: 1650 }
            },
            {
                nodeID: 'tm-St_3',
                nodeType: 'trackMarker',
                nodePos: { x: 855, y: 1560 },
                text: '3',
            },
            {
                nodeID: 'tm-St_1',
                nodeType: 'trackMarker',
                nodePos: { x: 865, y: 1580 },
                text: '1',
            },
            {
                nodeID: 'tm-St_2',
                nodeType: 'trackMarker',
                nodePos: { x: 870, y: 1600 },
                text: '2',
            },
            {
                nodeID: 'tm-St_4',
                nodeType: 'trackMarker',
                nodePos: { x: 870, y: 1620 },
                text: '4',
            },
        ],
        "St_Se": [
            {
                nodeID: 'tm-St_Se_543',
                nodeType: 'trackMarker',
                nodePos: { x: 1010, y: 1580 },
                text: '543',
            },
            {
                nodeID: 'tm-St_Se_556',
                nodeType: 'trackMarker',
                nodePos: { x: 1010, y: 1600 },
                text: '556',
            },

            {
                nodeID: 'tm-St_Se_529',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 1580 },
                text: '529',
            },
            {
                nodeID: 'tm-St_Se_544',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 1600 },
                text: '544',
            },

            {
                nodeID: 'tm-St_Se_515',
                nodeType: 'trackMarker',
                nodePos: { x: 1170, y: 1580 },
                text: '515',
            },
            {
                nodeID: 'tm-St_Se_530',
                nodeType: 'trackMarker',
                nodePos: { x: 1170, y: 1600 },
                text: '530',
            },

            {
                nodeID: 'tm-St_Se_499',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 1580 },
                text: '499',
            },
            {
                nodeID: 'tm-St_Se_516',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 1600 },
                text: '516',
            },

            {
                nodeID: 'tm-St_Se_477',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 1580 },
                text: '477',
            },
            {
                nodeID: 'tm-St_Se_500',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 1600 },
                text: '500',
            },

            {
                nodeID: 'tm-St_Se_455',
                nodeType: 'trackMarker',
                nodePos: { x: 1410, y: 1580 },
                text: '455',
            },
            {
                nodeID: 'tm-St_Se_476',
                nodeType: 'trackMarker',
                nodePos: { x: 1410, y: 1600 },
                text: '476',
            },

            {
                nodeID: 'tm-St_Se_439',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 1580 },
                text: '439',
            },
            {
                nodeID: 'tm-St_Se_456',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 1600 },
                text: '456',
            },

            {
                nodeID: 'tm-St_Se_421',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1580 },
                text: '421',
            },
            {
                nodeID: 'tm-St_Se_438',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1600 },
                text: '438',
            },

            {
                nodeID: 'tm-St_Se_407',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 1580 },
                text: '407',
            },
            {
                nodeID: 'tm-St_Se_422',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 1600 },
                text: '422',
            },
            //
            // BIALA RAWSKA
            //
            {
                nodeID: 'station_BialaRawska',
                nodeType: 'stationName',
                stationPrefix: 'BR',
                stationName: 'Biała Rawska',
                nodePos: { x: 1725, y: 1540 },
                nodePosFlipped: { x: 1725, y: 1640 }
            },
            {
                nodeID: 'simpleText_BialaRawska',
                nodeType: 'simpleText',
                nodePos: { x: 1725, y: 1560 },
                nodePosFlipped: { x: 1725, y: 1620 },
                textSize: 10,
                text: `Controlled by Strzałki`
            },
            //
            {
                nodeID: 'tm-St_Se_383',
                nodeType: 'trackMarker',
                nodePos: { x: 1800, y: 1580 },
                text: '383',
            },
            {
                nodeID: 'tm-St_Se_398',
                nodeType: 'trackMarker',
                nodePos: { x: 1800, y: 1600 },
                text: '398',
            },
            // Strzalki <-> Szeligi [R8]
            {
                nodeID: 'tm-St_Se_361',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1720 },
                text: '361',
            },
            {
                nodeID: 'tm-St_Se_384',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1740 },
                text: '384',
            },

            {
                nodeID: 'tm-St_Se_345',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1720 },
                text: '345',
            },
            {
                nodeID: 'tm-St_Se_360',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1740 },
                text: '360',
            },

            {
                nodeID: 'tm-St_Se_331',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1720 },
                text: '331',
            },
            {
                nodeID: 'tm-St_Se_346',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1740 },
                text: '346',
            },

            {
                nodeID: 'tm-St_Se_307',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1720 },
                text: '307',
            },
            {
                nodeID: 'tm-St_Se_332',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1740 },
                text: '332',
            },

            {
                nodeID: 'tm-St_Se_291',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1720 },
                text: '291',
            },
            {
                nodeID: 'tm-St_Se_308',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1740 },
                text: '308',
            },

            {
                nodeID: 'tm-St_Se_277',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1720 },
                text: '277',
            },
            {
                nodeID: 'tm-St_Se_292',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1740 },
                text: '292',
            },

            {
                nodeID: 'tm-St_Se_261',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1720 },
                text: '261',
            },
            {
                nodeID: 'tm-St_Se_276',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1740 },
                text: '276',
            },

            {
                nodeID: 'tm-St_Se_243',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1720 },
                text: '243',
            },
            {
                nodeID: 'tm-St_Se_262',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1740 },
                text: '262',
            },
        ],
        "SZELIGI": [
            {
                nodeID: 'post_Szeligi',
                nodeType: 'dispatchingPost',
                nodePos: { x: 695, y: 1770 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Szeligi',
                nodeType: 'stationName',
                stationPrefix: 'Se',
                stationName: 'Szeligi',
                nodePos: { x: 790, y: 1670 },
                nodePosFlipped: { x: 790, y: 1810 }
            },
            {
                nodeID: 'tm-Se_3',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1700 },
                text: '3',
            },
            {
                nodeID: 'tm-Se_1',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1720 },
                text: '1',
            },
            {
                nodeID: 'tm-Se_2',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1740 },
                text: '2',
            },
            {
                nodeID: 'tm-Se_4',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1760 },
                text: '4',
            },
            {
                nodeID: 'tm-Se_6',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1780 },
                text: '6',
            },
        ],
        "Se_Mr_Kr": [
            {
                nodeID: 'tm-Se_Mr_01',
                nodeType: 'trackMarker',
                nodePos: { x: 960, y: 1760 },
                text: '01',
            },
            {
                nodeID: 'tm-Se_Mr_15',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 1760 },
                text: '15',
            },
            {
                nodeID: 'tm-Se_Kr_197',
                nodeType: 'trackMarker',
                nodePos: { x: 960, y: 1720 },
                text: '197',
            },
            {
                nodeID: 'tm-Se_Kr_214',
                nodeType: 'trackMarker',
                nodePos: { x: 960, y: 1740 },
                text: '214',
            },
            {
                nodeID: 'tm-Se_Kr_185',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 1720 },
                text: '185',
            },
            {
                nodeID: 'tm-Se_Kr_198',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 1740 },
                text: '198',
            },
            {
                nodeID: 'tm-Se_Kr_167',
                nodeType: 'trackMarker',
                nodePos: { x: 1120, y: 1720 },
                text: '167',
            },
            {
                nodeID: 'tm-Se_Kr_184',
                nodeType: 'trackMarker',
                nodePos: { x: 1120, y: 1740 },
                text: '184',
            },
            {
                nodeID: 'tm-Se_Kr_155',
                nodeType: 'trackMarker',
                nodePos: { x: 1200, y: 1720 },
                text: '155',
            },
            {
                nodeID: 'tm-Se_Kr_168',
                nodeType: 'trackMarker',
                nodePos: { x: 1200, y: 1740 },
                text: '168',
            },
        ],
        "KORYTOW": [
            {
                nodeID: 'post_Korytow',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1260, y: 1770 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Korytow',
                nodeType: 'stationName',
                stationPrefix: 'Kr',
                stationName: 'Korytów',
                nodePos: { x: 1340, y: 1670 },
                nodePosFlipped: { x: 1340, y: 1790 }
            },
            {
                nodeID: 'tm-Kr_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1340, y: 1700 },
                text: '3',
            },
            {
                nodeID: 'tm-Kr_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1340, y: 1720 },
                text: '1',
            },
            {
                nodeID: 'tm-Kr_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1340, y: 1740 },
                text: '2',
            },
            {
                nodeID: 'tm-Kr_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1340, y: 1760 },
                text: '4',
            },
        ],
        "Kr_Gr": [
            {
                nodeID: 'tm-Kr_Gr_109',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 1720 },
                text: '109',
            },
            {
                nodeID: 'tm-Kr_Gr_122',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 1740 },
                text: '122',
            },
            {
                nodeID: 'tm-Kr_Gr_91',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1720 },
                text: '91',
            },
            {
                nodeID: 'tm-Kr_Gr_108',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1740 },
                text: '108',
            },
            {
                nodeID: 'tm-Kr_Gr_73',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 1720 },
                text: '73',
            },
            {
                nodeID: 'tm-Kr_Gr_90',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 1740 },
                text: '90',
            },
            {
                nodeID: 'tm-Kr_Gr_51',
                nodeType: 'trackMarker',
                nodePos: { x: 1730, y: 1720 },
                text: '51',
            },
            {
                nodeID: 'tm-Kr_Gr_74',
                nodeType: 'trackMarker',
                nodePos: { x: 1730, y: 1740 },
                text: '74',
            },
            // Korytow <-> Grodzisk Mazowiecki [R9]
            {
                nodeID: 'tm-Kr_Gr_31',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1920 },
                text: '31',
            },
            {
                nodeID: 'tm-Kr_Gr_50',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1940 },
                text: '50',
            },
            {
                nodeID: 'tm-Kr_Gr_17',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1920 },
                text: '17',
            },
            {
                nodeID: 'tm-Kr_Gr_32',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1940 },
                text: '32',
            },
            //
            {
                nodeID: 'tm-Zy_Gr_327',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1980 },
                text: '327',
            },
            {
                nodeID: 'tm-Zy_Gr_340',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 2000 },
                text: '340',
            },
            {
                nodeID: 'tm-Zy_Gr_315',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1980 },
                text: '315',
            },
            {
                nodeID: 'tm-Zy_Gr_328',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 2000 },
                text: '328',
            },
        ],
        "GRODZISK_MAZOWIECKI": [
            {
                nodeID: 'post_GrodziskMazowiecki',
                nodeType: 'dispatchingPost',
                nodePos: { x: 360, y: 1870 },
                postType: 'computer'
            },
            {
                nodeID: 'station_GrodziskMazowiecki',
                nodeType: 'stationName',
                stationPrefix: 'Gr',
                stationName: 'Grodzisk Mazowiecki',
                nodePos: { x: 410, y: 1850 },
                nodePosFlipped: { x: 410, y: 2040 }
            },
            {
                nodeID: 'peron_GrodziskMazowiecki_2',
                nodeType: 'platform',
                nodePos: { x: 380, y: 1965 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_GrodziskMazowiecki_1',
                nodeType: 'platform',
                nodePos: { x: 380, y: 2005 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-Gr_11',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1900 },
                text: '11',
            },
            {
                nodeID: 'tm-Gr_1',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1920 },
                text: '1',
            },
            {
                nodeID: 'tm-Gr_2',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1940 },
                text: '2',
            },
            {
                nodeID: 'tm-Gr_14',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1960 },
                text: '14',
            },
            {
                nodeID: 'tm-Gr_3',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1980 },
                text: '3',
            },
            {
                nodeID: 'tm-Gr_3a',
                nodeType: 'trackMarker',
                nodePos: { x: 490, y: 1980 },
                text: '3a',
            },
            {
                nodeID: 'tm-Gr_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 340, y: 2000 },
                text: '4b',
            },
            {
                nodeID: 'tm-Gr_4',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 2000 },
                text: '4',
            },
        ],
        "Gr_Pr": [
            {
                nodeID: 'peron_Milanowek',
                nodeType: 'platform',
                nodePos: { x: 660, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-Milanowek',
                nodeType: 'simpleText',
                nodePos: { x: 680, y: 1965 },
                text: 'Milanówek',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_Brwinów',
                nodeType: 'platform',
                nodePos: { x: 890, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-Brwinów',
                nodeType: 'simpleText',
                nodePos: { x: 910, y: 1965 },
                text: 'Brwinów',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_Parzniew',
                nodeType: 'platform',
                nodePos: { x: 1060, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-Parzniew',
                nodeType: 'simpleText',
                nodePos: { x: 1080, y: 1965 },
                text: 'Parzniew',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'tm-Gr_Pr_267S',
                nodeType: 'trackMarker',
                nodePos: { x: 600, y: 1920 },
                text: '267S',
            },
            {
                nodeID: 'tm-Gr_Pr_280S',
                nodeType: 'trackMarker',
                nodePos: { x: 600, y: 1940 },
                text: '280S',
            },
            {
                nodeID: 'tm-Gr_Pr_271',
                nodeType: 'trackMarker',
                nodePos: { x: 600, y: 1980 },
                text: '271',
            },
            {
                nodeID: 'tm-Gr_Pr_280',
                nodeType: 'trackMarker',
                nodePos: { x: 600, y: 2000 },
                text: '280',
            },

            {
                nodeID: 'tm-Gr_Pr_253S',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 1920 },
                text: '253S',
            },
            {
                nodeID: 'tm-Gr_Pr_266S',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 1940 },
                text: '266S',
            },
            {
                nodeID: 'tm-Gr_Pr_253',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 1980 },
                text: '253',
            },
            {
                nodeID: 'tm-Gr_Pr_270',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 2000 },
                text: '270',
            },
            {
                nodeID: 'tm-Gr_Pr_237S',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 1920 },
                text: '237S',
            },
            {
                nodeID: 'tm-Gr_Pr_252S',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 1940 },
                text: '252S',
            },
            {
                nodeID: 'tm-Gr_Pr_237',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 1980 },
                text: '237',
            },
            {
                nodeID: 'tm-Gr_Pr_252',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 2000 },
                text: '252',
            },
            //
            {
                nodeID: 'tm-Gr_Pr_221S',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 1920 },
                text: '221S',
            },
            {
                nodeID: 'tm-Gr_Pr_238S',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 1940 },
                text: '238S',
            },
            {
                nodeID: 'tm-Gr_Pr_221',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 1980 },
                text: '221',
            },
            {
                nodeID: 'tm-Gr_Pr_238',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 2000 },
                text: '238',
            },
            //
            {
                nodeID: 'tm-Gr_Pr_207S',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 1920 },
                text: '207S',
            },
            {
                nodeID: 'tm-Gr_Pr_222S',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 1940 },
                text: '222S',
            },
            {
                nodeID: 'tm-Gr_Pr_207',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 1980 },
                text: '207',
            },
            {
                nodeID: 'tm-Gr_Pr_228',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 2000 },
                text: '228',
            },
            //
            {
                nodeID: 'tm-Gr_Pr_193S',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 1920 },
                text: '193S',
            },
            {
                nodeID: 'tm-Gr_Pr_208S',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 1940 },
                text: '208S',
            },
            {
                nodeID: 'tm-Gr_Pr_193',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 1980 },
                text: '193',
            },
            {
                nodeID: 'tm-Gr_Pr_208',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 2000 },
                text: '208',
            },
            //
            {
                nodeID: 'tm-Gr_Pr_181S',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 1920 },
                text: '181S',
            },
            {
                nodeID: 'tm-Gr_Pr_194S',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 1940 },
                text: '194S',
            },
            {
                nodeID: 'tm-Gr_Pr_181',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 1980 },
                text: '181',
            },
            {
                nodeID: 'tm-Gr_Pr_194',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 2000 },
                text: '194',
            },
        ],
        "PRUSZKOW": [
            {
                nodeID: 'post_Pruszkow',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1310, y: 2020 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Pruszkow',
                nodeType: 'stationName',
                stationPrefix: 'Pr',
                stationName: 'Pruszków',
                nodePos: { x: 1310, y: 1830 },
                nodePosFlipped: { x: 1250, y: 2035 }
            },
            {
                nodeID: 'peron_Pruszkow',
                nodeType: 'platform',
                nodePos: { x: 1350, y: 1985 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-Pr_13',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 1860 },
                text: '13',
            },
            {
                nodeID: 'tm-Pr_11',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 1880 },
                text: '11',
            },
            {
                nodeID: 'tm-Pr_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 1900 },
                text: '7',
            },
            {
                nodeID: 'tm-Pr_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1920 },
                text: '1',
            },
            {
                nodeID: 'tm-Pr_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1940 },
                text: '2',
            },
            {
                nodeID: 'tm-Pr_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1960 },
                text: '5',
            },
            {
                nodeID: 'tm-Pr_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1980 },
                text: '3',
            },
            {
                nodeID: 'tm-Pr_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 2000 },
                text: '4',
            },
            {
                nodeID: 'tm-Pr_3c',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 1980 },
                text: '3c',
            },
            {
                nodeID: 'tm-Pr_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 2000 },
                text: '4b',
            },
        ],
        "Pr_Jz_Wl": [
            {
                nodeID: 'peron_Piastów',
                nodeType: 'platform',
                nodePos: { x: 1690, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-Piastów',
                nodeType: 'simpleText',
                nodePos: { x: 1710, y: 1965 },
                text: 'Piastów',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_WarszUrsusNiedzwiedek',
                nodeType: 'platform',
                nodePos: { x: 1880, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'po-WarszUrsusNiedzwiedek',
                nodeType: 'simpleText',
                nodePos: { x: 1870, y: 2020 },
                text: 'W. Ursus Niedźwiadek',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'peron_WarszUrsus_1',
                nodeType: 'platform',
                nodePos: { x: 1960, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_WarszUrsus_2',
                nodeType: 'platform',
                nodePos: { x: 1960, y: 2005 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'po-WarszUrsus',
                nodeType: 'simpleText',
                nodePos: { x: 1980, y: 1965 },
                text: 'Warszawa Ursus',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'tm-Pr_Wl_135S',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1920 },
                text: '135S',
            },
            {
                nodeID: 'tm-Pr_Wl_148S',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1940 },
                text: '148S',
            },
            {
                nodeID: 'tm-Pr_Wl_139',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1980 },
                text: '139',
            },
            {
                nodeID: 'tm-Pr_Wl_148',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 2000 },
                text: '148',
            },
            //
            {
                nodeID: 'tm-Pr_Wl_127S',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1920 },
                text: '127S',
            },
            {
                nodeID: 'tm-Pr_Wl_140S',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1940 },
                text: '140S',
            },
            {
                nodeID: 'tm-Pr_Wl_127',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1980 },
                text: '127',
            },
            {
                nodeID: 'tm-Pr_Wl_140',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 2000 },
                text: '140',
            },
            //
            {
                nodeID: 'tm-Pr_Wl_117',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 1980 },
                text: '117',
            },
            {
                nodeID: 'tm-Pr_Wl_128',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 2000 },
                text: '128',
            },
            //
            {
                nodeID: 'tm-Pr_Wl_101S',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 1920 },
                text: '101S',
            },
            {
                nodeID: 'tm-Pr_Wl_116S',
                nodeType: 'trackMarker',
                nodePos: { x: 1840, y: 1940 },
                text: '116S',
            },
            {
                nodeID: 'tm-Pr_Wl_101',
                nodeType: 'trackMarker',
                nodePos: { x: 1890, y: 1980 },
                text: '101',
            },
            {
                nodeID: 'tm-Pr_Wl_116',
                nodeType: 'trackMarker',
                nodePos: { x: 1890, y: 2000 },
                text: '116',
            },
            //
            {
                nodeID: 'tm-Pr_Wl_87S',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1920 },
                text: '87S',
            },
            {
                nodeID: 'tm-Pr_Wl_102S',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1940 },
                text: '102S',
            },
            {
                nodeID: 'tm-Pr_Wl_87',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1980 },
                text: '87',
            },
            {
                nodeID: 'tm-Pr_Wl_102',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 2000 },
                text: '102',
            },
            //
            {
                nodeID: 'tm-Pr_Wl_73S',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 1920 },
                text: '73S',
            },
            {
                nodeID: 'tm-Pr_Wl_86S',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 1940 },
                text: '86S',
            },
            {
                nodeID: 'tm-Pr_Wl_73',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 1980 },
                text: '73',
            },
            {
                nodeID: 'tm-Pr_Wl_86',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 2040 },
                text: '86',
            },
        ],
        "WARSZAWA_WLOCHY": [
            {
                nodeID: 'post_WarszawaWlochy',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2250, y: 2050 },
                postType: 'computer'
            },
            {
                nodeID: 'station_WarszawaWlochy',
                nodeType: 'stationName',
                stationPrefix: 'Wl',
                stationName: 'Warszawa Włochy',
                nodePos: { x: 2260, y: 1880 },
                nodePosFlipped: { x: 2150, y: 2080 }
            },
            {
                nodeID: 'peron_WarszawaWlochy_2',
                nodeType: 'platform',
                nodePos: { x: 2170, y: 1985 },
                width: 60,
                height: 30,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_WarszawaWlochy_1',
                nodeType: 'platform',
                nodePos: { x: 2190, y: 2045 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-Wl_1G',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1860 },
                text: '1G',
            },
            {
                nodeID: 'tm-Wl_2G',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1880 },
                text: '2G',
            },
            {
                nodeID: 'tm-Wl_1a',
                nodeType: 'trackMarker',
                nodePos: { x: 2100, y: 1860 },
                text: '1a',
            },
            {
                nodeID: 'tm-Wl_3a',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 2000 },
                text: '3a',
            },
            {
                nodeID: 'tm-Wl_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2200, y: 1920 },
                text: '1',
            },
            {
                nodeID: 'tm-Wl_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2200, y: 1980 },
                text: '3',
            },
            {
                nodeID: 'tm-Wl_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2165, y: 2020 },
                text: '2',
            },
            {
                nodeID: 'tm-Wl_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2165, y: 2040 },
                text: '4',
            },
        ],
        "Wl_WZD": [
            {
                nodeID: 'tm-Wl_WZD_55S',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 1920 },
                text: '55S',
            },
            {
                nodeID: 'tm-Wl_WZD_62S',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 1940 },
                text: '62S',
            },
            {
                nodeID: 'tm-Wl_WZD_57',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 1980 },
                text: '57',
            },
            {
                nodeID: 'tm-Wl_WZD_62L',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 2020 },
                text: '62L',
            },
            {
                nodeID: 'tm-Wl_WZD_62',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 2040 },
                text: '62',
            },
            //
            //
            {
                nodeID: 'tm-Wl_WZD_45S',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 1920 },
                text: '45S',
            },
            {
                nodeID: 'tm-Wl_WZD_60S',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 1940 },
                text: '60S',
            },
            {
                nodeID: 'tm-Wl_WZD_49',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 1980 },
                text: '49',
            },
            {
                nodeID: 'tm-Wl_WZD_56L',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 2020 },
                text: '56L',
            },
            {
                nodeID: 'tm-Wl_WZD_56',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 2040 },
                text: '56',
            },


            {
                nodeID: 'tm-Wl_WZD_39S',
                nodeType: 'trackMarker',
                nodePos: { x: 110, y: 2200 },
                text: '39S',
            },
            {
                nodeID: 'tm-Wl_WZD_46S',
                nodeType: 'trackMarker',
                nodePos: { x: 110, y: 2220 },
                text: '46S',
            },
            {
                nodeID: 'tm-Wl_WZD_43',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 2260 },
                text: '43',
            },
            {
                nodeID: 'tm-Wl_WZD_52L',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 2300 },
                text: '52L',
            },
            {
                nodeID: 'tm-Wl_WZD_50',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 2320 },
                text: '50',
            },
            //
            //
            {
                nodeID: 'tm-Wl_WZD_37',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 2260 },
                text: '37',
            },
            {
                nodeID: 'tm-Wl_WZD_46L',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 2300 },
                text: '46L',
            },
            {
                nodeID: 'tm-Wl_WZD_42',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 2320 },
                text: '42',
            },
        ]
    },
    "srto_screen2": {
        "ADDITIONAL_MARKER": [
            {
                nodeID: '',
                nodeType: 'simpleText',
                nodePos: { x: 1800, y: 1550 },
                text: '--- KOLUSZKI & MORE IS WORK IN PROGRESS ---',
                textSize: 20
            },
            {
                nodeID: '',
                nodeType: 'simpleText',
                nodePos: { x: 1135, y: 1450 },
                text: 'to Gałkówek',
                textSize: 16,
                textColor: 'rgb(120, 120, 120)'
            },
            {
                nodeID: '',
                nodeType: 'simpleText',
                nodePos: { x: 2330, y: 731 },
                text: 'to Koluszki',
                textSize: 16,
                textColor: 'rgb(120, 120, 120)'
            },
            {
                nodeID: 'trackBreaker-Pabianice_LodzLublinek',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2530, y: 90 },
                    secondMarker: { x: 40, y: 320 },
                },
                text: 'A'
            },
            {
                nodeID: 'trackBreaker-Galkoweg_Koluszki',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2395, y: 730 },
                    secondMarker: { x: 1070, y: 1450 },
                },
                text: 'B'
            },
            {
                nodeID: 'trackBreaker-Baby_Rokiciny',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2500, y: 1170 },
                    secondMarker: { x: 30, y: 1570 },
                },
                text: 'C'
            },
        ],
        "SEDZICE": [
            {
                nodeID: 'station_Sedzice',
                nodeType: 'stationName',
                stationPrefix: 'Se',
                stationName: 'Sędzice',
                nodePos: { x: 95, y: 80 },
                nodePosFlipped: { x: 95, y: 230 }
            },
            {
                nodeID: 'peron_Sedzice_3',
                nodeType: 'platform',
                nodePos: { x: 100, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'peron_Sedzice_2',
                nodeType: 'platform',
                nodePos: { x: 95, y: 165 },
                width: 55,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_Sedzice_1',
                nodeType: 'platform',
                nodePos: { x: 105, y: 185 },
                width: 45,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-Se_3',
                nodeType: 'trackMarker',
                nodePos: { x: 95, y: 120 },
                text: '3',
            },
            {
                nodeID: 'tm-Se_1',
                nodeType: 'trackMarker',
                nodePos: { x: 95, y: 140 },
                text: '1',
            },
            {
                nodeID: 'tm-Se_2',
                nodeType: 'trackMarker',
                nodePos: { x: 95, y: 160 },
                text: '2',
            },
            {
                nodeID: 'tm-Se_4a',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 180 },
                text: '4a',
            },
            {
                nodeID: 'tm-Se_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 125, y: 180 },
                text: '4b',
            },
        ],
        "SEDZICE_SIERADZ": [
            {
                nodeID: 'tm-Se_Si_1S',
                nodeType: 'trackMarker',
                nodePos: { x: 250, y: 140 },
                text: '1S',
            },
            {
                nodeID: 'tm-Se_Si_2S',
                nodeType: 'trackMarker',
                nodePos: { x: 250, y: 160 },
                text: '2S',
            },
        ],
        "SIERADZ": [
            {
                nodeID: 'station_Sieradz',
                nodeType: 'stationName',
                stationPrefix: 'Si',
                stationName: 'Sieradz',
                nodePos: { x: 435, y: 70 },
                nodePosFlipped: { x: 435, y: 230 }
            },
            {
                nodeID: 'peron_Sieradz_2',
                nodeType: 'platform',
                nodePos: { x: 430, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_Sieradz_1',
                nodeType: 'platform',
                nodePos: { x: 440, y: 185 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-Si_5',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 100 },
                text: '5',
            },
            {
                nodeID: 'tm-Si_3',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 120 },
                text: '3',
            },
            {
                nodeID: 'tm-Si_1',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 140 },
                text: '1',
            },
            {
                nodeID: 'tm-Si_2',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 160 },
                text: '2',
            },
            {
                nodeID: 'tm-Si_4',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 180 },
                text: '4',
            },
        ],
        "SIERADZ_ZDUNSKAWOLA": [
            {
                nodeID: "text-SieradzWarta",
                nodeType: "simpleText",
                nodePos: { x: 612.5, y: 115 },
                nodePosFlipped: { x: 612.5, y: 185 },
                text: "Sieradz Warta",
                textSize: 12
            },
            {
                nodeID: 'platform-SieradzWarta-2',
                nodeType: 'platform',
                nodePos: { x: 590, y: 127.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-SieradzWarta-2',
                nodeType: 'platform',
                nodePos: { x: 590, y: 165 },
                width: 40,
                height: 7.5,
                text: ''
            },

            {
                nodeID: "text-SieradzMeka",
                nodeType: "simpleText",
                nodePos: { x: 692.5, y: 185 },
                nodePosFlipped: { x: 692.5, y: 115 },
                text: "Sieradz Męka",
                textSize: 12
            },
            {
                nodeID: 'platform-SieradzMeka-2',
                nodeType: 'platform',
                nodePos: { x: 670, y: 127.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-SieradzMeka-2',
                nodeType: 'platform',
                nodePos: { x: 670, y: 165 },
                width: 40,
                height: 7.5,
                text: ''
            },

            {
                nodeID: "text_APOMeka",
                nodeType: "simpleText",
                nodePos: { x: 720, y: 95 },
                nodePosFlipped: { x: 720, y: 210 },
                text: "APO Męka",
                textSize: 14
            },

            {
                nodeID: "text-MekaWola",
                nodeType: "simpleText",
                nodePos: { x: 752.5, y: 115 },
                nodePosFlipped: { x: 752.5, y: 185 },
                text: "Męka Wola",
                textSize: 12
            },
            {
                nodeID: 'platform-SieradzWarta-2',
                nodeType: 'platform',
                nodePos: { x: 730, y: 127.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-SieradzWarta-2',
                nodeType: 'platform',
                nodePos: { x: 730, y: 165 },
                width: 40,
                height: 7.5,
                text: ''
            },

            {
                nodeID: "text-Izabelow",
                nodeType: "simpleText",
                nodePos: { x: 832.5, y: 185 },
                nodePosFlipped: { x: 832.5, y: 115 },
                text: "Izabelów",
                textSize: 12
            },
            {
                nodeID: 'platform-Izabelow-2',
                nodeType: 'platform',
                nodePos: { x: 810, y: 127.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-Izabelow-2',
                nodeType: 'platform',
                nodePos: { x: 810, y: 165 },
                width: 40,
                height: 7.5,
                text: ''
            },

            {
                nodeID: 'tm-Si_ZW_1M',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 140 },
                text: 'it1M',
            },
            {
                nodeID: 'tm-Si_ZW_2M',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 160 },
                text: 'it2M',
            },
            {
                nodeID: 'tm-Si_ZW_1S',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 140 },
                text: 'it1S',
            },
            {
                nodeID: 'tm-Si_ZW_2S',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 160 },
                text: 'it2S',
            },
        ],
        "ZDUNSKA_WOLA": [
            {
                nodeID: 'post_ZdunskaWola',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1110, y: 85 },
                postType: 'computer'
            },
            {
                nodeID: 'station_ZdunskaWola',
                nodeType: 'stationName',
                stationPrefix: 'ZW',
                stationName: 'Zduńska Wola',
                nodePos: { x: 1020, y: 50 },
                nodePosFlipped: { x: 1020, y: 220 }
            },
            {
                nodeID: 'peron_ZdunskaWola_2',
                nodeType: 'platform',
                nodePos: { x: 990, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_ZdunskaWola_1',
                nodeType: 'platform',
                nodePos: { x: 990, y: 185 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-ZW_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 80 },
                text: '7',
            },
            {
                nodeID: 'tm-ZW_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 100 },
                text: '5',
            },
            {
                nodeID: 'tm-ZW_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 120 },
                text: '3',
            },
            {
                nodeID: 'tm-ZW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 140 },
                text: '1',
            },
            {
                nodeID: 'tm-ZW_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 160 },
                text: '2',
            },
            {
                nodeID: 'tm-ZW_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 180 },
                text: '4',
            },
        ],
        "ZDUNSKAWOLA_GAJEWNIKI__ZWK_Dionizów": [
            {
                nodeID: 'text-Dionizow',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1110, y: 65 },
                text: 'Inowrocław',
                textSize: 12
            },
            {
                nodeID: 'text-ZdunskaWolaK',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1290, y: 270 },
                text: 'Tarnowskie Góry',
                textSize: 12
            },
            {
                nodeID: 'tm-ZW_Di_1D',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 120 },
                text: 'it1D',
            },
            {
                nodeID: 'tm-ZW_Ga_1G',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 140 },
                text: 'it1G',
            },
            {
                nodeID: 'tm-ZW_Ga_2G',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 160 },
                text: 'it2G',
            },
            {
                nodeID: 'tm-ZW_ZWK_1K',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 180 },
                text: 'it1K',
            },

            {
                nodeID: 'tm-Di_Ga_1D',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 120 },
                text: 'it1D',
            },
            {
                nodeID: 'tm-ZWK_Ga_1K',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 180 },
                text: 'it1K',
            },
        ],
        "GAJEWNIKI": [
            {
                nodeID: 'post_Gajewniki',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1370, y: 105 },
                postType: 'computer'
            },
            {
                nodeID: 'station_ZdunskaWola',
                nodeType: 'stationName',
                stationPrefix: 'Ga',
                stationName: 'Gajewniki',
                nodePos: { x: 1370, y: 70 },
                nodePosFlipped: { x: 1370, y: 200 }
            },
        ],
        "GAJEWNIKI_LASK": [
            {
                nodeID: "text_APOBorszewice",
                nodeType: "simpleText",
                nodePos: { x: 1500, y: 110 },
                nodePosFlipped: { x: 1500, y: 190 },
                text: "APO Borszewice",
                textSize: 14
            },
            {
                nodeID: 'platform-Borszewice-1',
                nodeType: 'platform',
                nodePos: { x: 1460, y: 127.5 },
                width: 30,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-Borszewice-2',
                nodeType: 'platform',
                nodePos: { x: 1460, y: 165 },
                width: 30,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'tm-Ga_La_1B',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 140 },
                text: 'it1B',
            },
            {
                nodeID: 'tm-Ga_La_2B',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 160 },
                text: 'it2B',
            },
            {
                nodeID: 'tm-Ga_La_1L',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 140 },
                text: 'it1L',
            },
            {
                nodeID: 'tm-Ga_La_2L',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 160 },
                text: 'it2L',
            },
        ],
        "LASK": [
            {
                nodeID: 'post_Lask',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1650, y: 85 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Lask',
                nodeType: 'stationName',
                stationPrefix: 'La',
                stationName: 'Łask',
                nodePos: { x: 1710, y: 70 },
                nodePosFlipped: { x: 1710, y: 235 }
            },
            {
                nodeID: 'peron_Lask_2',
                nodeType: 'platform',
                nodePos: { x: 1680, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_Lask_2',
                nodeType: 'platform',
                nodePos: { x: 1680, y: 205 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-La_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 120 },
                text: '3',
            },
            {
                nodeID: 'tm-La_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 140 },
                text: '1',
            },
            {
                nodeID: 'tm-La_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 160 },
                text: '2',
            },
            {
                nodeID: 'tm-La_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 180 },
                text: '4',
            },
            {
                nodeID: 'tm-La_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 200 },
                text: '6',
            },
        ],
        "LASK_PABIANICE": [
            {
                nodeID: 'tm-La_Pa_1K',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 140 },
                text: 'it1K',
            },
            {
                nodeID: 'tm-La_Pa_2K',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 160 },
                text: 'it2K',
            },

            {
                nodeID: "text_APOKolumna",
                nodeType: "simpleText",
                nodePos: { x: 1930, y: 110 },
                nodePosFlipped: { x: 1930, y: 190 },
                text: "APO Kolumna",
                textSize: 12
            },
            {
                nodeID: 'platform-Kolumna-1',
                nodeType: 'platform',
                nodePos: { x: 1910, y: 127.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-Kolumna-2',
                nodeType: 'platform',
                nodePos: { x: 1910, y: 165 },
                width: 40,
                height: 7.5,
                text: ''
            },

            {
                nodeID: 'tm-La_Pa_1D',
                nodeType: 'trackMarker',
                nodePos: { x: 1990, y: 140 },
                text: 'it1D',
            },
            {
                nodeID: 'tm-La_Pa_2D',
                nodeType: 'trackMarker',
                nodePos: { x: 1990, y: 160 },
                text: 'it2D',
            },

            {
                nodeID: "text_APODobroń",
                nodeType: "simpleText",
                nodePos: { x: 2050, y: 110 },
                nodePosFlipped: { x: 2050, y: 190 },
                text: "APO Dobroń",
                textSize: 12
            },
            {
                nodeID: 'platform-Kolumna-1',
                nodeType: 'platform',
                nodePos: { x: 2030, y: 127.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-Kolumna-2',
                nodeType: 'platform',
                nodePos: { x: 2030, y: 165 },
                width: 40,
                height: 7.5,
                text: ''
            },

            {
                nodeID: 'tm-La_Pa_1P',
                nodeType: 'trackMarker',
                nodePos: { x: 2145, y: 140 },
                text: 'it1P',
            },
            {
                nodeID: 'tm-La_Pa_2P',
                nodeType: 'trackMarker',
                nodePos: { x: 2145, y: 160 },
                text: 'it2P',
            },

            {
                nodeID: "text_Chechło",
                nodeType: "simpleText",
                nodePos: { x: 2145, y: 110 },
                nodePosFlipped: { x: 2145, y: 190 },
                text: "Chechło",
                textSize: 12
            },
            {
                nodeID: 'platform-Chechło-1',
                nodeType: 'platform',
                nodePos: { x: 2125, y: 127.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-Chechło-2',
                nodeType: 'platform',
                nodePos: { x: 2125, y: 165 },
                width: 40,
                height: 7.5,
                text: ''
            },
        ],
        "PABIANICE": [
            {
                nodeID: 'post_Pabianice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2240, y: 105 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Pabianice',
                nodeType: 'stationName',
                stationPrefix: 'Pa',
                stationName: 'Pabianice',
                nodePos: { x: 2340, y: 70 },
                nodePosFlipped: { x: 2340, y: 220 }
            },
            {
                nodeID: 'peron_Pabianice_2',
                nodeType: 'platform',
                nodePos: { x: 2310, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_Pabianice_1',
                nodeType: 'platform',
                nodePos: { x: 2310, y: 185 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-Pa_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 120 },
                text: '3',
            },
            {
                nodeID: 'tm-Pa_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 140 },
                text: '1',
            },
            {
                nodeID: 'tm-Pa_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 160 },
                text: '2',
            },
            {
                nodeID: 'tm-Pa_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 180 },
                text: '4',
            },
        ],
        "PABIANICE_LODZLUBLINEK": [
            {
                nodeID: "text-po-PabianicePolnocne",
                nodeType: "simpleText",
                nodePos: { x: 2495, y: 110 },
                nodePosFlipped: { x: 2495, y: 190 },
                text: "Pabianice Północne",
                textSize: 12
            },
            {
                nodeID: 'platform-PabianicePolnocne-1',
                nodeType: 'platform',
                nodePos: { x: 2480, y: 127.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-PabianicePolnocne-2',
                nodeType: 'platform',
                nodePos: { x: 2480, y: 165 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'tm-Pa_Lb_1L',
                nodeType: 'trackMarker',
                nodePos: { x: 2510, y: 140 },
                text: 'it1L',
            },
            {
                nodeID: 'tm-Pa_Lb_2L',
                nodeType: 'trackMarker',
                nodePos: { x: 2510, y: 160 },
                text: 'it2L',
            },
            {
                nodeID: 'tm-Pa_Lb_1P',
                nodeType: 'trackMarker',
                nodePos: { x: 60, y: 360 },
                text: 'it1P',
            },
            {
                nodeID: 'tm-Pa_Lb_2P',
                nodeType: 'trackMarker',
                nodePos: { x: 60, y: 380 },
                text: 'it2P',
            },
        ],
        "LODZ_LUBLINEK": [
            {
                nodeID: 'post_LodzLublinek',
                nodeType: 'dispatchingPost',
                nodePos: { x: 185, y: 415 },
                postType: 'computer'
            },
            {
                nodeID: 'station_LodzLublinek',
                nodeType: 'stationName',
                stationPrefix: 'Lb',
                stationName: 'Łódź Lublinek',
                nodePos: { x: 230, y: 290 },
                nodePosFlipped: { x: 230, y: 460 }
            },
            {
                nodeID: 'peron_LodzLublinek_2',
                nodeType: 'platform',
                nodePos: { x: 205, y: 345 },
                width: 40,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_LodzLublinek_1',
                nodeType: 'platform',
                nodePos: { x: 205, y: 385 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-Lb_7',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 320 },
                text: '7',
            },
            {
                nodeID: 'tm-Lb_5',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 340 },
                text: '5',
            },
            {
                nodeID: 'tm-Lb_1',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 360 },
                text: '1',
            },
            {
                nodeID: 'tm-Lb_2',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 380 },
                text: '2',
            },
            {
                nodeID: 'tm-Lb_4',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 400 },
                text: '4',
            },
        ],
        "LODZLUBLINEK_RETKINIA": [
            {
                nodeID: "text-po-LodzRetkinia",
                nodeType: "simpleText",
                nodePos: { x: 400, y: 340 },
                nodePosFlipped: { x: 390, y: 405 },
                text: "Łódź Retkinia",
                textSize: 12
            },
            {
                nodeID: 'platform-LodzRetkinia-1',
                nodeType: 'platform',
                nodePos: { x: 390, y: 347.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-LodzRetkinia-2',
                nodeType: 'platform',
                nodePos: { x: 390, y: 385 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'tm-Lb_Rt_it1',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 360 },
                text: 'it1',
            },
            {
                nodeID: 'tm-Lb_Rt_it2',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 380 },
                text: 'it2',
            },
        ],
        "RETKINIA": [
            {
                nodeID: 'post_Retkinia',
                nodeType: 'dispatchingPost',
                nodePos: { x: 440, y: 395 },
                postType: 'relay'
            },
            {
                nodeID: 'station_Retkinia',
                nodeType: 'stationName',
                stationPrefix: 'Rt',
                stationName: 'Retkinia',
                nodePos: { x: 490, y: 320 },
                nodePosFlipped: { x: 490, y: 470 }
            },
        ],
        "RETKINIA_LODZKALISKA": [
            {
                nodeID: 'tm-Rt_LK_1K',
                nodeType: 'trackMarker',
                nodePos: { x: 590, y: 360 },
                text: '1K',
            },
            {
                nodeID: 'tm-Rt_LK_2K',
                nodeType: 'trackMarker',
                nodePos: { x: 590, y: 380 },
                text: '2K',
            },
            {
                nodeID: 'tm-Rt_LK_1R',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 360 },
                text: '1R',
            },
            {
                nodeID: 'tm-Rt_LK_2R',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 380 },
                text: '2R',
            },

            {
                nodeID: 'tm-Rt_LK_1',
                nodeType: 'trackMarker',
                nodePos: { x: 560, y: 420 },
                text: '1',
            },
            {
                nodeID: 'tm-Rt_LK_2',
                nodeType: 'trackMarker',
                nodePos: { x: 560, y: 440 },
                text: '2',
            },
        ],
        "LODZ_KALISKA": [
            {
                nodeID: 'post_LodzKaliska',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1130, y: 350 },
                postType: 'computer'
            },
            {
                nodeID: 'station_LodzKaliska',
                nodeType: 'stationName',
                stationPrefix: 'LK',
                stationName: 'Łódź Kaliska',
                nodePos: { x: 1100, y: 320 },
                nodePosFlipped: { x: 1100, y: 590 }
            },
            {
                nodeID: 'peron_LodzKaliska_3',
                nodeType: 'platform',
                nodePos: { x: 990, y: 365 },
                width: 50,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'peron_LodzKaliska_2',
                nodeType: 'platform',
                nodePos: { x: 990, y: 405 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_LodzKaliska_1',
                nodeType: 'platform',
                nodePos: { x: 990, y: 465 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'peron_LodzKaliska_4',
                nodeType: 'platform',
                nodePos: { x: 1030, y: 485 },
                width: 60,
                height: 10,
                text: 'Peron IV'
            },
            {
                nodeID: 'peron_LodzKaliska_5',
                nodeType: 'platform',
                nodePos: { x: 1030, y: 525 },
                width: 60,
                height: 10,
                text: 'Peron V'
            },
            {
                nodeID: 'tm-LK_18',
                nodeType: 'trackMarker',
                nodePos: { x: 780, y: 430 },
                text: '18',
            },
            {
                nodeID: 'tm-LK_207',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 460 },
                text: '207',
            },
            {
                nodeID: 'tm-LK_205',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 480 },
                text: '205',
            },
            {
                nodeID: 'tm-LK_203',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 500 },
                text: '203',
            },
            {
                nodeID: 'tm-LK_201',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 520 },
                text: '201',
            },
            {
                nodeID: 'tm-LK_202',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 540 },
                text: '202',
            },
            {
                nodeID: 'tm-LK_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 360 },
                text: '3',
            },
            {
                nodeID: 'tm-LK_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 380 },
                text: '1',
            },
            {
                nodeID: 'tm-LK_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 400 },
                text: '2',
            },
            {
                nodeID: 'tm-LK_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 420 },
                text: '4',
            },
            {
                nodeID: 'tm-LK_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 440 },
                text: '6',
            },
            {
                nodeID: 'tm-LK_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 460 },
                text: '8',
            },
            {
                nodeID: 'tm-LK_151',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 500 },
                text: '151',
            },
            {
                nodeID: 'tm-LK_152',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 520 },
                text: '152',
            },
            {
                nodeID: 'tm-LK_154',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 540 },
                text: '154',
            },
            {
                nodeID: 'tm-LK_32',
                nodeType: 'trackMarker',
                nodePos: { x: 1150, y: 560 },
                text: '32',
            },
            {
                nodeID: 'tm-LK_13',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 380 },
                text: '13',
            },
            {
                nodeID: 'tm-LK_101',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 400 },
                text: '101',
            },
            {
                nodeID: 'tm-LK_102',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 420 },
                text: '102',
            },
            {
                nodeID: 'tm-LK_18',
                nodeType: 'trackMarker',
                nodePos: { x: 1280, y: 470 },
                text: '18',
            },
            {
                nodeID: 'tm-LK_30',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 540 },
                text: '30',
            },
        ],
        "LODZ_ZABIENIEC": [
            {
                nodeID: 'post_LodzZabieniec',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1675, y: 445 },
                postType: 'computer'
            },
            {
                nodeID: 'station_LodzZabieniec',
                nodeType: 'stationName',
                stationPrefix: 'LZ',
                stationName: 'Łódź Żabieniec',
                nodePos: { x: 1780, y: 330 },
                nodePosFlipped: { x: 1780, y: 490 }
            },
            {
                nodeID: 'peron_LodzZabieniec_2',
                nodeType: 'platform',
                nodePos: { x: 1632.5, y: 385 },
                width: 55,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_LodzZabieniec_1',
                nodeType: 'platform',
                nodePos: { x: 1632.5, y: 425 },
                width: 55,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-LZ_1c',
                nodeType: 'trackMarker',
                nodePos: { x: 1660, y: 400 },
                text: '1c',
            },
            {
                nodeID: 'tm-LZ_2b',
                nodeType: 'trackMarker',
                nodePos: { x: 1660, y: 420 },
                text: '2b',
            },
            {
                nodeID: 'tm-LZ_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 360 },
                text: '7',
            },
            {
                nodeID: 'tm-LZ_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 380 },
                text: '5',
            },
            {
                nodeID: 'tm-LZ_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 400 },
                text: '1',
            },
            {
                nodeID: 'tm-LZ_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 420 },
                text: '2',
            },
            {
                nodeID: 'tm-LZ_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 440 },
                text: '6',
            },
            {
                nodeID: 'tm-LZ_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 460 },
                text: '8',
            },
        ],
        "LODZZABIENIEC_ZGIERZ": [
            {
                nodeID: 'tm-LZ_Zg_1Z',
                nodeType: 'trackMarker',
                nodePos: { x: 1950, y: 400 },
                text: '1Z',
            },
            {
                nodeID: 'tm-LZ_Zg_2Z',
                nodeType: 'trackMarker',
                nodePos: { x: 1950, y: 420 },
                text: '2Z',
            },
        ],
        "LODZWIDZEW_LODZMARYSIN_ZGIERZ": [
            {
                nodeID: "text-po-LodzStoki",
                nodeType: "simpleText",
                nodePos: { x: 1280, y: 615 },
                text: "Łódź Stoki",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-LodzStoki',
                nodeType: 'platform',
                nodePos: { x: 1250, y: 585 },
                width: 60,
                height: 10,
                text: ''
            },
            //? Lodz Marysin
            {
                nodeID: 'stationName-LodzMarysin',
                nodeType: 'stationName',
                stationPrefix: 'Zg',
                stationName: 'Łódź Marysin',
                nodePos: { x: 1460, y: 545 },
                nodePosFlipped: { x: 1460, y: 670 }
            },
            {
                nodeID: "text-lcs-LodzMarysin",
                nodeType: "simpleText",
                nodePos: { x: 1460, y: 560 },
                nodePosFlipped: { x: 1460, y: 655 },
                text: "Controlled by Łódź Widzew",
                textSize: 10
            },
            {
                nodeID: 'platform-LodzMarysin-1',
                nodeType: 'platform',
                nodePos: { x: 1432.5, y: 585 },
                width: 55,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-LodzMarysin-2',
                nodeType: 'platform',
                nodePos: { x: 1432.5, y: 625 },
                width: 55,
                height: 10,
                text: 'Peron II'
            },
            //
            {
                nodeID: "text-po-LodzWarszawska",
                nodeType: "simpleText",
                nodePos: { x: 1580, y: 580 },
                nodePosFlipped: { x: 1580, y: 640 },
                text: "Łódź Warszawska",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-LodzWarszawska',
                nodeType: 'platform',
                nodePos: { x: 1550, y: 605 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: "text-po-LodzArturowek",
                nodeType: "simpleText",
                nodePos: { x: 1700, y: 580 },
                nodePosFlipped: { x: 1700, y: 640 },
                text: "Łódź Arturówek",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-LodzArturowek',
                nodeType: 'platform',
                nodePos: { x: 1670, y: 605 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: "text-po-LodzRadogoszczWschod",
                nodeType: "simpleText",
                nodePos: { x: 1820, y: 560 },
                nodePosFlipped: { x: 1820, y: 660 },
                text: "Łódź Radogoszcz Wschód",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-LodzRadogoszczWschod',
                nodeType: 'platform',
                nodePos: { x: 1790, y: 605 },
                width: 60,
                height: 10,
                text: ''
            },
        ],
        "ZGIERZ": [
            {
                nodeID: 'post_Zgierz',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2037.5, y: 470 },
                postType: 'computer'
            },
            {
                nodeID: 'station_Zgierz',
                nodeType: 'stationName',
                stationPrefix: 'Zg',
                stationName: 'Zgierz',
                nodePos: { x: 2120, y: 340 },
                nodePosFlipped: { x: 2130, y: 510 }
            },
            {
                nodeID: 'peron_Zgierz_1',
                nodeType: 'platform',
                nodePos: { x: 2135, y: 365 },
                width: 45,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'peron_Zgierz_2',
                nodeType: 'platform',
                nodePos: { x: 2135, y: 405 },
                width: 45,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_Zgierz_3',
                nodeType: 'platform',
                nodePos: { x: 2135, y: 445 },
                width: 45,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'tm-Zg_7',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 380 },
                text: '7',
            },
            {
                nodeID: 'tm-Zg_5',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 400 },
                text: '5',
            },
            {
                nodeID: 'tm-Zg_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 420 },
                text: '3',
            },
            {
                nodeID: 'tm-Zg_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 440 },
                text: '1',
            },
            {
                nodeID: 'tm-Zg_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 460 },
                text: '4',
            },
            {
                nodeID: 'tm-Zg_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 480 },
                text: '6',
            },
        ],
        "ZGIERZ_POLNOC__GLINNIK": [
            {
                nodeID: 'po-ZgierzJaracza',
                nodeType: 'platform',
                nodePos: { x: 2305, y: 405 },
                width: 35,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'text-po-ZgierzPolnoc',
                nodeType: 'simpleText',
                nodePos: { x: 2310, y: 395 },
                text: 'Zgierz Jaracza',
                textSize: 10
            },
            {
                nodeID: 'station-ZgierzPolnoc',
                nodeType: 'simpleText',
                nodePos: { x: 2490, y: 350 },
                nodePosFlipped: { x: 2490, y: 350 },
                text: 'Zgierz Północ',
                textSize: 14
            },
            {
                nodeID: 'po-ZgierzPolnoc_1',
                nodeType: 'platform',
                nodePos: { x: 2462.5, y: 365 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'po-ZgierzPolnoc_2',
                nodeType: 'platform',
                nodePos: { x: 2462.5, y: 405 },
                width: 40,
                height: 10,
                text: 'Peron II'
            },
            //
            //
            {
                nodeID: 'po-ZgierzRudunki',
                nodeType: 'platform',
                nodePos: { x: 2305, y: 447.5 },
                width: 35,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'text-po-ZgierzRudunki',
                nodeType: 'simpleText',
                nodePos: { x: 2310, y: 470 },
                text: 'Zgierz Rudunki',
                textSize: 10
            },
            {
                nodeID: 'po-Smardzew',
                nodeType: 'platform',
                nodePos: { x: 2365, y: 465 },
                width: 30,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'text-po-Smardzew',
                nodeType: 'simpleText',
                nodePos: { x: 2385, y: 455 },
                text: 'Smardzew',
                textSize: 10
            },
            {
                nodeID: 'po-Smardzew',
                nodeType: 'platform',
                nodePos: { x: 2385, y: 487.5 },
                width: 30,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'text-po-GlinnikWies',
                nodeType: 'simpleText',
                nodePos: { x: 2400, y: 505 },
                text: 'Glinnik Wieś',
                textSize: 10
            },
            {
                nodeID: 'station-Glinnik',
                nodeType: 'simpleText',
                nodePos: { x: 2490, y: 510 },
                nodePosFlipped: { x: 2490, y: 510 },
                text: 'Glinnik',
                textSize: 14
            },
            {
                nodeID: 'platform-Glinnik',
                nodeType: 'platform',
                nodePos: { x: 2462.5, y: 445 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Glinnik',
                nodeType: 'platform',
                nodePos: { x: 2462.5, y: 485 },
                width: 40,
                height: 10,
                text: 'Peron II'
            },
        ],
        "LODZKALISKA_LODZCHOJNY": [
            {
                nodeID: 'tm-LK_LCH_21',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 520 },
                text: '21',
            },
            {
                nodeID: 'tm-LK_LCH_32',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 540 },
                text: '32',
            },

            {
                nodeID: "text-po-LodzPabianicka",
                nodeType: "simpleText",
                nodePos: { x: 400, y: 490 },
                nodePosFlipped: { x: 400, y: 565 },
                text: "Łódź Pabianicka",
                textSize: 12
            },
            {
                nodeID: 'platform-LodzPabianicka-1',
                nodeType: 'platform',
                nodePos: { x: 380, y: 507.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-LodzPabianicka-2',
                nodeType: 'platform',
                nodePos: { x: 380, y: 545 },
                width: 40,
                height: 7.5,
                text: ''
            },

            {
                nodeID: 'tm-LK_LCH_33',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 520 },
                text: '33',
            },
            {
                nodeID: 'tm-LK_LCH_46',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 540 },
                text: '46',
            },
            // TURN AROUND
            {
                nodeID: 'tm-LK_LCH_62',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 800 },
                text: '62',
            },
            {
                nodeID: 'tm-LK_LCH_47',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 820 },
                text: '47',
            },
        ],
        "LODZ_CHOJNY": [
            {
                nodeID: 'post_LodzChojny',
                nodeType: 'dispatchingPost',
                nodePos: { x: 585, y: 830 },
                postType: 'relay'
            },
            {
                nodeID: 'station_LodzChojny',
                nodeType: 'stationName',
                stationPrefix: 'LCH',
                stationName: 'Łódź Chojny',
                nodePos: { x: 555, y: 725 },
                nodePosFlipped: { x: 525, y: 880 }
            },
            {
                nodeID: 'peron_LodzChojny_4',
                nodeType: 'platform',
                nodePos: { x: 517.5, y: 782.5 },
                width: 40,
                height: 10,
                text: 'Peron IV'
            },
            {
                nodeID: 'peron_LodzChojny_3',
                nodeType: 'platform',
                nodePos: { x: 517.5, y: 802.5 },
                width: 40,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'peron_LodzChojny_1',
                nodeType: 'platform',
                nodePos: { x: 480, y: 807.5 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-LCH_6',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 760 },
                text: '6',
            },
            {
                nodeID: 'tm-LCH_4',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 780 },
                text: '4',
            },
            {
                nodeID: 'tm-LCH_2',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 800 },
                text: '2',
            },
            {
                nodeID: 'tm-LCH_1',
                nodeType: 'trackMarker',
                nodePos: { x: 510, y: 820 },
                text: '1',
            },
            {
                nodeID: 'tm-LCH_3',
                nodeType: 'trackMarker',
                nodePos: { x: 510, y: 840 },
                text: '3',
            },
        ],
        "LODZCHOJNY_LODZWIDZEW": [
            {
                nodeID: 'tm-LCH_LW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 800 },
                text: 'it2W',
            },
            {
                nodeID: 'tm-LCH_LW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 820 },
                text: 'it1W',
            },
            {
                nodeID: "text-po-LodzDabrowa",
                nodeType: "simpleText",
                nodePos: { x: 730, y: 855 },
                nodePosFlipped: { x: 730, y: 855 },
                text: "Łódź Dąbrowa",
                textSize: 12
            },
            {
                nodeID: 'platform-LodzDabrowa-1',
                nodeType: 'platform',
                nodePos: { x: 710, y: 787.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-LodzDabrowa-2',
                nodeType: 'platform',
                nodePos: { x: 710, y: 825 },
                width: 40,
                height: 7.5,
                text: ''
            },

            {
                nodeID: 'tm-LCH_LW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 800 },
                text: 'it2C',
            },
            {
                nodeID: 'tm-LCH_LW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 820 },
                text: 'it1C',
            },
            {
                nodeID: "text-po-LodzZarzew",
                nodeType: "simpleText",
                nodePos: { x: 840, y: 855 },
                nodePosFlipped: { x: 840, y: 855 },
                text: "Łódź Zarzew",
                textSize: 12
            },
            {
                nodeID: 'platform-LodzZarzew-1',
                nodeType: 'platform',
                nodePos: { x: 820, y: 787.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-LodzZarzew-2',
                nodeType: 'platform',
                nodePos: { x: 820, y: 825 },
                width: 40,
                height: 7.5,
                text: ''
            },
        ],
        "LODZ_WIDZEW": [
            {
                nodeID: 'post_LodzWidzew',
                nodeType: 'dispatchingPost',
                nodePos: { x: 920, y: 830 },
                postType: 'computer'
            },
            {
                nodeID: 'station_LodzWidzew',
                nodeType: 'stationName',
                stationPrefix: 'LW',
                stationName: 'Łódź Widzew',
                nodePos: { x: 1080, y: 615 },
                nodePosFlipped: { x: 1080, y: 875 }
            },
            {
                nodeID: 'peron_LodzWidzew_3',
                nodeType: 'platform',
                nodePos: { x: 1042.5, y: 745 },
                width: 60,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'peron_LodzWidzew_2',
                nodeType: 'platform',
                nodePos: { x: 1042.5, y: 785 },
                width: 60,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_LodzWidzew_1',
                nodeType: 'platform',
                nodePos: { x: 1042.5, y: 825 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-LW_104',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 640 },
                text: '104',
            },
            {
                nodeID: 'tm-LW_102',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 660 },
                text: '102',
            },
            {
                nodeID: 'tm-LW_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 700 },
                text: '8',
            },
            {
                nodeID: 'tm-LW_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 720 },
                text: '6',
            },
            {
                nodeID: 'tm-LW_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 740 },
                text: '4',
            },
            {
                nodeID: 'tm-LW_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 760 },
                text: '2',
            },
            {
                nodeID: 'tm-LW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 780 },
                text: '1',
            },
            {
                nodeID: 'tm-LW_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 800 },
                text: '3',
            },
            {
                nodeID: 'tm-LW_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 820 },
                text: '5',
            },
            {
                nodeID: 'tm-LW_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 840 },
                text: '7',
            },
        ],
        "LODZWIDZEW_LODZANDRZEJOW_GALKOWEG": [
            {
                nodeID: 'trackMarker-LW_G-82',
                nodeType: 'trackMarker',
                nodePos: { x: 1310, y: 760 },
                text: '82',
            },
            {
                nodeID: 'trackMarker-LW_G-67',
                nodeType: 'trackMarker',
                nodePos: { x: 1310, y: 780 },
                text: '67',
            },
            {
                nodeID: 'trackMarker-LW_G-102',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 760 },
                text: '102',
            },
            {
                nodeID: 'trackMarker-LW_G-81',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 780 },
                text: '81',
            },
            //
            // Lodz Andrzejow
            //
            {
                nodeID: 'stationName-LodzAndrzejow',
                nodeType: 'stationName',
                stationPrefix: 'LA',
                stationName: 'Łódź Andrzejów',
                nodePos: { x: 1465, y: 715 },
                nodePosFlipped: { x: 1465, y: 725 }
            },
            {
                nodeID: "stationControlled-LodzAndrzejow",
                nodeType: "simpleText",
                nodePos: { x: 1465, y: 730 },
                nodePosFlipped: { x: 1465, y: 710 },
                text: "Controlled by Gałkówek",
                textSize: 10
            },
            //
            {
                nodeID: 'platform-LodzAndrzejow-1',
                nodeType: 'platform',
                nodePos: { x: 1513, y: 745 },
                width: 35,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-LodzAndrzejow-2',
                nodeType: 'platform',
                nodePos: { x: 1513, y: 785 },
                width: 35,
                height: 10,
                text: ''
            },
            // BEDON
            {
                nodeID: "text-po-Bedon",
                nodeType: "simpleText",
                nodePos: { x: 1620, y: 735 },
                nodePosFlipped: { x: 1620, y: 805 },
                text: "Bedoń",
                textSize: 10
            },
            {
                nodeID: 'platform-Bedon-1',
                nodeType: 'platform',
                nodePos: { x: 1602.5, y: 745 },
                width: 35,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Bedon-1',
                nodeType: 'platform',
                nodePos: { x: 1602.5, y: 785 },
                width: 35,
                height: 10,
                text: ''
            },
            // JUSTYNOW
            {
                nodeID: "text-po-Justynow",
                nodeType: "simpleText",
                nodePos: { x: 1780, y: 735 },
                nodePosFlipped: { x: 1780, y: 805 },
                text: "Justynów",
                textSize: 10
            },
            {
                nodeID: 'platform-Justynow-1',
                nodeType: 'platform',
                nodePos: { x: 1762.5, y: 745 },
                width: 35,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Justynow-2',
                nodeType: 'platform',
                nodePos: { x: 1762.5, y: 785 },
                width: 35,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-LW_G-124',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 760 },
                text: '124',
            },
            {
                nodeID: 'trackMarker-LW_G-107',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 780 },
                text: '107',
            },
            {
                nodeID: 'trackMarker-LW_G-138',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 760 },
                text: '138',
            },
            {
                nodeID: 'trackMarker-LW_G-121',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 780 },
                text: '121',
            },
            {
                nodeID: 'trackMarker-LW_G-152',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 760 },
                text: '152',
            },
            {
                nodeID: 'trackMarker-LW_G-137',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 780 },
                text: '137',
            },
            {
                nodeID: 'trackMarker-LW_G-166',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 760 },
                text: '166',
            },
            {
                nodeID: 'trackMarker-LW_G-151',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 780 },
                text: '151',
            },
            {
                nodeID: 'trackMarker-LW_G-180',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 760 },
                text: '180',
            },
            {
                nodeID: 'trackMarker-LW_G-167',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 780 },
                text: '167',
            },
        ],
        "GALKOWEG": [
            {
                nodeID: 'dispatchingPost-Galkoweg',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2110, y: 720 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Galkoweg',
                nodeType: 'stationName',
                stationPrefix: 'G',
                stationName: 'Gałkówek',
                nodePos: { x: 2020, y: 715 },
                nodePosFlipped: { x: 2020, y: 895 }
            },
            {
                nodeID: 'platform-Galkoweg-1',
                nodeType: 'platform',
                nodePos: { x: 2010, y: 742.5 },
                width: 40,
                height: 12.5,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Galkoweg-2',
                nodeType: 'platform',
                nodePos: { x: 2010, y: 785 },
                width: 40,
                height: 12.5,
                text: 'Peron II'
            },
            {
                nodeID: 'trackMarker-G-2',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 760 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-G-1',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 780 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-G-3',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 820 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-G-5',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 840 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-G-7',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 860 },
                text: '7',
            },
        ],
        "GALKOWEG_KOLUSZKI": [
            {
                nodeID: 'trackMarker-G_KO-222',
                nodeType: 'trackMarker',
                nodePos: { x: 2210, y: 760 },
                text: '222',
            },
            {
                nodeID: 'trackMarker-G_KO-203',
                nodeType: 'trackMarker',
                nodePos: { x: 2210, y: 780 },
                text: '203',
            },
            {
                nodeID: 'trackMarker-G_KO-242',
                nodeType: 'trackMarker',
                nodePos: { x: 2330, y: 760 },
                text: '242',
            },
            {
                nodeID: 'trackMarker-G_KO-219',
                nodeType: 'trackMarker',
                nodePos: { x: 2330, y: 780 },
                text: '219',
            },
            //!!!
            //!!! AGAIN FOR KOLUSZKI
            //!!!
            {
                nodeID: 'trackMarker-G_KO-222',
                nodeType: 'trackMarker',
                nodePos: { x: 1130, y: 1480 },
                text: '222',
            },
            {
                nodeID: 'trackMarker-G_KO-203',
                nodeType: 'trackMarker',
                nodePos: { x: 1130, y: 1500 },
                text: '203',
            },
            {
                nodeID: 'trackMarker-G_KO-242',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 1480 },
                text: '242',
            },
            {
                nodeID: 'trackMarker-G_KO-219',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 1500 },
                text: '219',
            },
        ],
        "LODZ_OLECHOW": [
            {
                nodeID: "text_po_LodzOlechowWiadukt",
                nodeType: "simpleText",
                nodePos: { x: 890, y: 975 },
                nodePosFlipped: { x: 890, y: 1045 },
                text: "Łódź Olechów Wiadukt",
                textSize: phFontSize
            },
            {
                nodeID: 'peron_LodzOlechowWiadukt_1',
                nodeType: 'platform',
                nodePos: { x: 860, y: 985 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_LodzOlechowWiadukt_2',
                nodeType: 'platform',
                nodePos: { x: 860, y: 1025 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: "text_po_LodzOlechowZachod",
                nodeType: "simpleText",
                nodePos: { x: 1015, y: 955 },
                nodePosFlipped: { x: 1015, y: 1065 },
                text: "Łódź Olechów Zachód",
                textSize: phFontSize
            },
            {
                nodeID: 'peron_LodzOlechowZachod_1',
                nodeType: 'platform',
                nodePos: { x: 985, y: 985 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_LodzOlechowZachod_2',
                nodeType: 'platform',
                nodePos: { x: 985, y: 1025 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: "text_po_LodzOlechowWschod",
                nodeType: "simpleText",
                nodePos: { x: 1317.5, y: 940 },
                nodePosFlipped: { x: 1317.5, y: 1045 },
                text: "Łódź Olechów Wschód",
                textSize: phFontSize
            },
            {
                nodeID: 'peron_LodzOlechowWschod_1',
                nodeType: 'platform',
                nodePos: { x: 1285, y: 985 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'peron_LodzOlechowWschod_2',
                nodeType: 'platform',
                nodePos: { x: 1285, y: 1025 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'tm-LOA_2',
                nodeType: 'trackMarker',
                nodePos: { x: 890, y: 1000 },
                text: '2',
            },
            {
                nodeID: 'tm-LOA_1',
                nodeType: 'trackMarker',
                nodePos: { x: 890, y: 1020 },
                text: '1',
            },
            {
                nodeID: 'tm-LOA_12',
                nodeType: 'trackMarker',
                nodePos: { x: 1015, y: 1000 },
                text: '12',
            },
            {
                nodeID: 'tm-LOA_11',
                nodeType: 'trackMarker',
                nodePos: { x: 1015, y: 1020 },
                text: '11',
            },
            {
                nodeID: 'tm-LOA_22a',
                nodeType: 'trackMarker',
                nodePos: { x: 1230, y: 1000 },
                text: '22a',
            },
            {
                nodeID: 'tm-LOA_21a',
                nodeType: 'trackMarker',
                nodePos: { x: 1225, y: 1020 },
                text: '21a',
            },
            {
                nodeID: 'tm-LOA_24a',
                nodeType: 'trackMarker',
                nodePos: { x: 1230, y: 980 },
                text: '24a',
            },
            {
                nodeID: 'tm-LOA_24b',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 960 },
                text: '24b',
            },
            {
                nodeID: 'tm-LOA_22b',
                nodeType: 'trackMarker',
                nodePos: { x: 1315, y: 1000 },
                text: '22b',
            },
            {
                nodeID: 'tm-LOA_21b',
                nodeType: 'trackMarker',
                nodePos: { x: 1315, y: 1020 },
                text: '21b',
            },
        ],
        "ROZPRZA": [
            {
                nodeID: 'stationName-Rozprza',
                nodeType: 'stationName',
                stationPrefix: 'Ro',
                stationName: 'Rozprza',
                nodePos: { x: 105, y: 1165 },
                nodePosFlipped: { x: 105, y: 1300 }
            },
            {
                nodeID: 'tm-Ro_1',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1200 },
                text: '1',
            },
            {
                nodeID: 'tm-Ro_2',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1220 },
                text: '2',
            },
            {
                nodeID: 'tm-Ro_4',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1240 },
                text: '4',
            },
            {
                nodeID: 'tm-Ro_6',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1260 },
                text: '6',
            },
        ],
        "ROZPRA_PIOTRKOW_TRYBUNALSKI": [
            {
                nodeID: 'tm-Ro_PT_1541',
                nodeType: 'trackMarker',
                nodePos: { x: 220, y: 1200 },
                text: '1541',
            },
            {
                nodeID: 'tm-Ro_PT_1556',
                nodeType: 'trackMarker',
                nodePos: { x: 220, y: 1220 },
                text: '1556',
            },
            {
                nodeID: 'tm-Ro_PT_1525',
                nodeType: 'trackMarker',
                nodePos: { x: 300, y: 1200 },
                text: '1525',
            },
            {
                nodeID: 'tm-Ro_PT_1540',
                nodeType: 'trackMarker',
                nodePos: { x: 300, y: 1220 },
                text: '1540',
            },
            {
                nodeID: 'tm-Ro_PT_1509',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 1200 },
                text: '1509',
            },
            {
                nodeID: 'tm-Ro_PT_1524',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 1220 },
                text: '1524',
            },
            {
                nodeID: 'tm-Ro_PT_1497',
                nodeType: 'trackMarker',
                nodePos: { x: 460, y: 1200 },
                text: '1497',
            },
            {
                nodeID: 'tm-Ro_PT_1510',
                nodeType: 'trackMarker',
                nodePos: { x: 460, y: 1220 },
                text: '1510',
            },
            {
                nodeID: 'tm-Ro_PT_1481',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 1200 },
                text: '1481',
            },
            {
                nodeID: 'tm-Ro_PT_1496',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 1220 },
                text: '1496',
            },
            {
                nodeID: 'tm-Ro_PT_1467',
                nodeType: 'trackMarker',
                nodePos: { x: 620, y: 1200 },
                text: '1467',
            },
            {
                nodeID: 'tm-Ro_PT_1480',
                nodeType: 'trackMarker',
                nodePos: { x: 620, y: 1220 },
                text: '1480',
            },
        ],
        "PIOTRKOW_TRYBUNALSKI": [
            {
                nodeID: 'station_PiotrkowTrybunalski',
                nodeType: 'stationName',
                stationPrefix: 'PT',
                stationName: 'Piotrków Trybunalski',
                nodePos: { x: 1020, y: 1135 },
                nodePosFlipped: { x: 1060, y: 1300 }
            },
            {
                nodeID: 'peron_PiotrkowTrybunalski_2',
                nodeType: 'platform',
                nodePos: { x: 1160, y: 1165 },
                width: 60,
                height: 30,
                text: 'Peron II'
            },
            {
                nodeID: 'peron_PiotrkowTrybunalski_1',
                nodeType: 'platform',
                nodePos: { x: 1155, y: 1225 },
                width: 65,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-PT_29',
                nodeType: 'trackMarker',
                nodePos: { x: 820, y: 1120 },
                text: '29',
            },
            {
                nodeID: 'tm-PT_27',
                nodeType: 'trackMarker',
                nodePos: { x: 810, y: 1140 },
                text: '27',
            },
            {
                nodeID: 'tm-PT_25',
                nodeType: 'trackMarker',
                nodePos: { x: 810, y: 1160 },
                text: '25',
            },
            {
                nodeID: 'tm-PT_23',
                nodeType: 'trackMarker',
                nodePos: { x: 810, y: 1180 },
                text: '23',
            },
            {
                nodeID: 'tm-PT_21',
                nodeType: 'trackMarker',
                nodePos: { x: 850, y: 1200 },
                text: '21',
            },
            {
                nodeID: 'tm-PT_22',
                nodeType: 'trackMarker',
                nodePos: { x: 830, y: 1220 },
                text: '22',
            },
            {
                nodeID: 'tm-PT_26',
                nodeType: 'trackMarker',
                nodePos: { x: 810, y: 1260 },
                text: '26',
            },
            {
                nodeID: 'tm-PT_28',
                nodeType: 'trackMarker',
                nodePos: { x: 830, y: 1280 },
                text: '28',
            },
            {
                nodeID: 'tm-PT_30',
                nodeType: 'trackMarker',
                nodePos: { x: 830, y: 1300 },
                text: '30',
            },
            {
                nodeID: 'tm-PT_32',
                nodeType: 'trackMarker',
                nodePos: { x: 860, y: 1320 },
                text: '32',
            },
            {
                nodeID: 'tm-PT_34',
                nodeType: 'trackMarker',
                nodePos: { x: 865, y: 1340 },
                text: '34',
            },
            {
                nodeID: 'tm-PT_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1160 },
                text: '3',
            },
            {
                nodeID: 'tm-PT_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1200 },
                text: '1',
            },
            {
                nodeID: 'tm-PT_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1220 },
                text: '2',
            },
        ],
        "PIOTROKOWTRYBUNALKSI_BABY": [
            {
                nodeID: 'tm-PT_Ba_1423',
                nodeType: 'trackMarker',
                nodePos: { x: 1360, y: 1200 },
                text: '1423',
            },
            {
                nodeID: 'tm-PT_Ba_1434',
                nodeType: 'trackMarker',
                nodePos: { x: 1360, y: 1220 },
                text: '1434',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1413',
                nodeType: 'trackMarker',
                nodePos: { x: 1440, y: 1200 },
                text: '1413',
            },
            {
                nodeID: 'tm-PT_Ba_1424',
                nodeType: 'trackMarker',
                nodePos: { x: 1440, y: 1220 },
                text: '1424',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1399',
                nodeType: 'trackMarker',
                nodePos: { x: 1520, y: 1200 },
                text: '1399',
            },
            {
                nodeID: 'tm-PT_Ba_1412',
                nodeType: 'trackMarker',
                nodePos: { x: 1520, y: 1220 },
                text: '1412',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1385',
                nodeType: 'trackMarker',
                nodePos: { x: 1600, y: 1200 },
                text: '1385',
            },
            {
                nodeID: 'tm-PT_Ba_1400',
                nodeType: 'trackMarker',
                nodePos: { x: 1600, y: 1220 },
                text: '1400',
            },
            //?
            {
                nodeID: "text-po-Jarosty",
                nodeType: "simpleText",
                nodePos: { x: 1640, y: 1170 },
                nodePosFlipped: { x: 1640, y: 1250 },
                text: "Jarosty",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Jarosty_1',
                nodeType: 'platform',
                nodePos: { x: 1599, y: 1225 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Jarosty_2',
                nodeType: 'platform',
                nodePos: { x: 1651, y: 1185 },
                width: 30,
                height: 10,
                text: ''
            },
            //?
            {
                nodeID: 'tm-PT_Ba_1373',
                nodeType: 'trackMarker',
                nodePos: { x: 1680, y: 1200 },
                text: '1373',
            },
            {
                nodeID: 'tm-PT_Ba_1386',
                nodeType: 'trackMarker',
                nodePos: { x: 1680, y: 1220 },
                text: '1386',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1357',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 1200 },
                text: '1357',
            },
            {
                nodeID: 'tm-PT_Ba_1372',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 1220 },
                text: '1372',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1343',
                nodeType: 'trackMarker',
                nodePos: { x: 1840, y: 1200 },
                text: '1343',
            },
            {
                nodeID: 'tm-PT_Ba_1358',
                nodeType: 'trackMarker',
                nodePos: { x: 1840, y: 1220 },
                text: '1358',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1329',
                nodeType: 'trackMarker',
                nodePos: { x: 1920, y: 1200 },
                text: '1329',
            },
            {
                nodeID: 'tm-PT_Ba_1342',
                nodeType: 'trackMarker',
                nodePos: { x: 1920, y: 1220 },
                text: '1342',
            },
            //?
            {
                nodeID: "text-po-Moszczenica",
                nodeType: "simpleText",
                nodePos: { x: 1906, y: 1170 },
                nodePosFlipped: { x: 1906, y: 1250 },
                text: "Moszczenica",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Moszczenica-1',
                nodeType: 'platform',
                nodePos: { x: 1892, y: 1225 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Moszczenica-2',
                nodeType: 'platform',
                nodePos: { x: 1892, y: 1185 },
                width: 30,
                height: 10,
                text: ''
            },
            //?
            {
                nodeID: 'tm-PT_Ba_1315',
                nodeType: 'trackMarker',
                nodePos: { x: 2000, y: 1200 },
                text: '1315',
            },
            {
                nodeID: 'tm-PT_Ba_1328',
                nodeType: 'trackMarker',
                nodePos: { x: 2000, y: 1220 },
                text: '1328',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1305',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 1200 },
                text: '1305',
            },
            {
                nodeID: 'tm-PT_Ba_1314',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 1220 },
                text: '1314',
            },
        ],
        "BABY": [
            {
                nodeID: 'dispatchingPost-Baby',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2170, y: 1150 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-Baby',
                nodeType: 'stationName',
                stationPrefix: 'Ba',
                stationName: 'Baby',
                nodePos: { x: 2270, y: 1145 },
                nodePosFlipped: { x: 2270, y: 1285 }
            },
            {
                nodeID: 'platform-Baby-1',
                nodeType: 'platform',
                nodePos: { x: 2125, y: 1185 },
                width: 55,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Baby-2',
                nodeType: 'platform',
                nodePos: { x: 2125, y: 1225 },
                width: 55,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'trackMarker-Baby_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2260, y: 1180 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Baby_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2260, y: 1200 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Baby_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2280, y: 1220 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Baby_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2280, y: 1240 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Baby_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2280, y: 1260 },
                text: '6',
            },
        ],
        "BABY_ROKICINY": [
            {
                nodeID: 'tm-PT_Ba_1273',
                nodeType: 'trackMarker',
                nodePos: { x: 2450, y: 1200 },
                text: '1273',
            },
            {
                nodeID: 'tm-PT_Ba_1284',
                nodeType: 'trackMarker',
                nodePos: { x: 2450, y: 1220 },
                text: '1284',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1259',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1600 },
                text: '1259',
            },
            {
                nodeID: 'tm-PT_Ba_1274',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1620 },
                text: '1274',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1243',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1600 },
                text: '1243',
            },
            {
                nodeID: 'tm-PT_Ba_1258',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1620 },
                text: '1258',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1227',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1600 },
                text: '1227',
            },
            {
                nodeID: 'tm-PT_Ba_1242',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1620 },
                text: '1242',
            },
            //? Wolborka
            {
                nodeID: "text-po-Wolborka",
                nodeType: "simpleText",
                nodePos: { x: 230, y: 1570 },
                nodePosFlipped: { x: 230, y: 1645 },
                text: "Wolbórka",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Wolborka',
                nodeType: 'platform',
                nodePos: { x: 210, y: 1605 },
                width: 40,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'tm-PT_Ba_1213',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1600 },
                text: '1213',
            },
            {
                nodeID: 'tm-PT_Ba_1226',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1620 },
                text: '1226',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1199',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1600 },
                text: '1199',
            },
            {
                nodeID: 'tm-PT_Ba_1212',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1620 },
                text: '1212',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1185',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1600 },
                text: '1185',
            },
            {
                nodeID: 'tm-PT_Ba_1198',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1620 },
                text: '1198',
            },
            //? Laznow
            {
                nodeID: "text-po-Laznow",
                nodeType: "simpleText",
                nodePos: { x: 481.75, y: 1570 },
                nodePosFlipped: { x: 481.75, y: 1645 },
                text: "Łaznów",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Laznow-1',
                nodeType: 'platform',
                nodePos: { x: 463, y: 1585 },
                width: 35,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Laznow-2',
                nodeType: 'platform',
                nodePos: { x: 463, y: 1625 },
                width: 35,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'tm-PT_Ba_1169',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1600 },
                text: '1169',
            },
            {
                nodeID: 'tm-PT_Ba_1186',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1620 },
                text: '1186',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1155',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1600 },
                text: '1155',
            },
            {
                nodeID: 'tm-PT_Ba_1170',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1620 },
                text: '1170',
            },
            //
            {
                nodeID: 'tm-PT_Ba_1145',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1600 },
                text: '1145',
            },
            {
                nodeID: 'tm-PT_Ba_1156',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1620 },
                text: '1156',
            },
        ],
        "ROKICINY": [
            {
                nodeID: 'dispatchingPost-Rokiciny',
                nodeType: 'dispatchingPost',
                nodePos: { x: 800, y: 1550 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-Rokiciny',
                nodeType: 'stationName',
                stationPrefix: 'Ro',
                stationName: 'Rokiciny',
                nodePos: { x: 900, y: 1540 },
                nodePosFlipped: { x: 900, y: 1680 }
            },
            {
                nodeID: 'platform-Rokiciny-2',
                nodeType: 'platform',
                nodePos: { x: 775, y: 1585 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Rokiciny-1',
                nodeType: 'platform',
                nodePos: { x: 775, y: 1625 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Rokiciny-3',
                nodeType: 'trackMarker',
                nodePos: { x: 900, y: 1580 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Rokiciny-1',
                nodeType: 'trackMarker',
                nodePos: { x: 900, y: 1600 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Rokiciny-2',
                nodeType: 'trackMarker',
                nodePos: { x: 900, y: 1620 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Rokiciny-4',
                nodeType: 'trackMarker',
                nodePos: { x: 900, y: 1640 },
                text: '4',
            },
        ],
        "ROKICINY_KOLUSZKI": [
            {
                nodeID: 'tm-Ro_KO_1115',
                nodeType: 'trackMarker',
                nodePos: { x: 1030, y: 1600 },
                text: '1115',
            },
            {
                nodeID: 'tm-PT_Ba_1126',
                nodeType: 'trackMarker',
                nodePos: { x: 1030, y: 1620 },
                text: '1126',
            },
            //
            {
                nodeID: 'tm-Ro_KO_1103',
                nodeType: 'trackMarker',
                nodePos: { x: 1110, y: 1600 },
                text: '1103',
            },
            {
                nodeID: 'tm-PT_Ba_1116',
                nodeType: 'trackMarker',
                nodePos: { x: 1110, y: 1620 },
                text: '1116',
            },
            //? Chrusty Nowe
            {
                nodeID: "text-po-ChrustyNowe",
                nodeType: "simpleText",
                nodePos: { x: 1110, y: 1570 },
                nodePosFlipped: { x: 1110, y: 1645 },
                text: "Chrusty Nowe",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-ChrustyNowe-1',
                nodeType: 'platform',
                nodePos: { x: 1090, y: 1585 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-ChrustyNowe-2',
                nodeType: 'platform',
                nodePos: { x: 1090, y: 1625 },
                width: 40,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'tm-Ro_KO_1089',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1600 },
                text: '1089',
            },
            {
                nodeID: 'tm-PT_Ba_1102',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1620 },
                text: '1102',
            },
            //
            {
                nodeID: 'tm-Ro_KO_1077',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1600 },
                text: '1077',
            },
            {
                nodeID: 'tm-PT_Ba_1090',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1620 },
                text: '1090',
            },
        ],
        "__TEMPLATE__": [],
    },
    "srto_screen3": {},
    "srto_screen4": {}
}