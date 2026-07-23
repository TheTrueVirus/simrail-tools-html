import { SRTO_DataTypes } from '../srto-dataTypes'

const NPT_COLOR = 'rgba(20, 20, 20, 1)';
const phFontSize = 12;

export const SRTO_SCREEN2_DATA: SRTO_DataTypes.ScreenProps = {
    "ADDITIONAL_ELEMENTS": {
        "TRACKS": [],
        "SIGNALS": [],
        "NODES": [
            {
                nodeID: 'dsm-ZdunskaWolaK',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1290, y: 270 },
                text: 'Tarnowskie Góry',
                textSize: 12
            },
            {
                nodeID: 'dsm-Dionizow',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 1110, y: 65 },
                text: 'Inowrocław',
                textSize: 12
            },
            {
                nodeID: 'dsm-Dionizow',
                nodeType: 'differentScreenMarker',
                nodePos: { x: 2370, y: 2450 },
                text: 'Warszawa',
                textSize: 12
            },
            {
                nodeID: 'tbm-Pabianice_LodzLublinek',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2530, y: 90 },
                    secondMarker: { x: 30, y: 330 },
                },
                text: 'A'
            },
            {
                nodeID: 'tbm-Galkoweg_Koluszki',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2400, y: 745 },
                    secondMarker: { x: 790, y: 1310 },
                },
                text: 'B'
            },
            {
                nodeID: 'tbm-Galkoweg_Zakowice',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2400, y: 805 },
                    secondMarker: { x: 360, y: 1730 },
                },
                text: 'C'
            },
            {
                nodeID: 'tbm-Baby_Rokiciny',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 510, y: 960 },
                    secondMarker: { x: 30, y: 1170 },
                },
                text: 'D'
            },
            {
                nodeID: 'tbm-Baby_Rokiciny',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2520, y: 1180 },
                    secondMarker: { x: 30, y: 1430 },
                },
                text: 'E'
            },
            {
                nodeID: 'tbm-Koluszki_Rogow',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2510, y: 1420 },
                    secondMarker: { x: 30, y: 1870 },
                },
                text: 'F'
            },
            {
                nodeID: 'tbm-Plycwia_Skierniewice',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2530, y: 1870 },
                    secondMarker: { x: 470, y: 2170 },
                },
                text: 'G'
            },
            {
                nodeID: 'tbm-Skierniewice_Zyrardow',
                nodeType: 'trackBreakMarker',
                nodePos: { x: 0, y: 0 },
                breakMarker: {
                    firstMarker: { x: 2230, y: 2150 },
                    secondMarker: { x: 30, y: 2370 },
                },
                text: 'H'
            },
        ]
    },
    "3792_Se_SEDZICE": { //^ Sedzice
        "TRACKS": [
            {
                trackID: '3792_SEDZICE',
                trackSVG: `
                M10,140 15,140 M20,140 25,140 M40,140 210,140
                M10,160 15,160 M20,160 25,160 M30,160 35,160 M40,160 45,160 150,160 M160,160 210,160


                M10,120 15,120 M20,120 25,120 M40,120 170,120 172.5,125 172.5,135 175,140
                M10,180 15,180 M20,180 25,180 M40,180 150,180 M160,180 170,180 172.5,175 172.5,165 175,160

                M185,160 187.5,155 187.5,145 190,140
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3792_Se_G',
                signalPos: { x: '27.5', y: '120' },
                trainPos: { x: '45', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3792_Se_F',
                signalPos: { x: '27.5', y: '140' },
                trainPos: { x: '45', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3792_Se_H',
                signalPos: { x: '27.5', y: '180' },
                trainPos: { x: '45', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '3792_Se_B',
                signalPos: { x: '160', y: '160' },
                trainPos: { x: '145', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3792_Se_C',
                signalPos: { x: '160', y: '180' },
                trainPos: { x: '145', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3792_Se_A',
                signalPos: { x: '210', y: '140' },
                trainPos: { x: '225', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3792_Se_Sz2N',
                signalPos: { x: '210', y: '160' },
                trainPos: { x: '225', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Sedzice',
                nodeType: 'stationName',
                stationPrefix: 'Se',
                stationName: 'Sędzice',
                nodePos: { x: 95, y: 80 },
                nodePosFlipped: { x: 95, y: 230 }
            },
            {
                nodeID: 'platform-Sedzice_3',
                nodeType: 'platform',
                nodePos: { x: 100, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'platform-Sedzice_2',
                nodeType: 'platform',
                nodePos: { x: 95, y: 165 },
                width: 55,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Sedzice_1',
                nodeType: 'platform',
                nodePos: { x: 105, y: 185 },
                width: 45,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Sedzice_3',
                nodeType: 'trackMarker',
                nodePos: { x: 95, y: 120 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Sedzice_1',
                nodeType: 'trackMarker',
                nodePos: { x: 95, y: 140 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Sedzice_2',
                nodeType: 'trackMarker',
                nodePos: { x: 95, y: 160 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Sedzice_4a',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 180 },
                text: '4a',
            },
            {
                nodeID: 'trackMarker-Sedzice_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 125, y: 180 },
                text: '4b',
            },
        ]
    },
    "SEDZICE_SIERADZ": {
        "TRACKS": [
            {
                trackID: 'SEDZICE_SIERADZ',
                trackSVG: `
                M220,140 280,140
                M220,160 280,160
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
            {
                nodeID: 'trackMarker-Sedzice_Sieradz_1S',
                nodeType: 'trackMarker',
                nodePos: { x: 250, y: 140 },
                text: '1S',
            },
            {
                nodeID: 'trackMarker-Sedzice_Sieradz_2S',
                nodeType: 'trackMarker',
                nodePos: { x: 250, y: 160 },
                text: '2S',
            },
        ]
    },
    "3827_Si_SIERADZ": { //^ Sieradz
        "TRACKS": [
            {
                trackID: '3827_SIERADZ',
                /*
                T1
                T2

                SW 1D2 + SW 2U1

                SW 1U3 + T3 + SW 3D1
                SW 3U5 + T5 + SW 5D3

                SW2D4 + T4 + SW4U2
                */
                trackSVG: `
                M290,140 380,140 M390,140 480,140 M490,140 580,140
                M290,160 480,160 M490,160 580,160

                M310,140 312.5,145 312.5,155 315,160 M335,160 337.5,155 337.5,145 340,140

                M350,140 352.5,135 352.5,125 355,120 380,120 M390,120 480,120 M490,120 515,120 517.5,125 517.5,135 520,140
                M365,120 367.5,115 367.5,105 370,100 380,100 M390,100 480,100 M490,100 500,100 502.5,105 502.5,115 505,120

                M350,160 352.5,165 352.5,175 355,180 380,180 M390,180 480,180 M490,180 515,180 517.5,175 517.5,165 520,160

                M530,140 532.5,145 532.5,155 535,160 M555,160 557.5,155 557.5,145 560,140
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3827_Si_Sz1N',
                signalPos: { x: '290', y: '140' },
                trainPos: { x: '275', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard', //! sz only?
            },
            {
                signalName: '3827_Si_K',
                signalPos: { x: '290', y: '160' },
                trainPos: { x: '275', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_mechanical-2flap',
                //signalType: "mechanical"
            },

            {
                signalName: '3827_Si_N',
                signalPos: { x: '380', y: '100' },
                trainPos: { x: '395', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_mechanical-2flap',
                //signalType: "mechanical"
            },
            {
                signalName: '3827_Si_J',
                signalPos: { x: '380', y: '120' },
                trainPos: { x: '395', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_mechanical-2flap',
                //signalType: "mechanical"
            },
            {
                signalName: '3827_Si_G',
                signalPos: { x: '380', y: '140' },
                trainPos: { x: '395', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_mechanical-2flap',
                //signalType: "mechanical"
            },
            {
                signalName: '3827_Si_F',
                signalPos: { x: '380', y: '180' },
                trainPos: { x: '395', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_mechanical-2flap',
                //signalType: "mechanical"
            },

            {
                signalName: '3827_Si_L',
                signalPos: { x: '490', y: '100' },
                trainPos: { x: '475', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_B',
                signalPos: { x: '490', y: '120' },
                trainPos: { x: '475', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_C',
                signalPos: { x: '490', y: '140' },
                trainPos: { x: '475', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_D',
                signalPos: { x: '490', y: '160' },
                trainPos: { x: '475', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_E',
                signalPos: { x: '490', y: '180' },
                trainPos: { x: '475', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3827_Si_A',
                signalPos: { x: '580', y: '140' },
                trainPos: { x: '595', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_A2',
                signalPos: { x: '580', y: '160' },
                trainPos: { x: '595', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard', //! sz only?
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Sieradz',
                nodeType: 'stationName',
                stationPrefix: 'Si',
                stationName: 'Sieradz',
                nodePos: { x: 435, y: 70 },
                nodePosFlipped: { x: 435, y: 230 }
            },
            {
                nodeID: 'platform-Sieradz_2',
                nodeType: 'platform',
                nodePos: { x: 430, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Sieradz_1',
                nodeType: 'platform',
                nodePos: { x: 440, y: 185 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Sieradz_5',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 100 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Sieradz_3',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 120 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Sieradz_1',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 140 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Sieradz_2',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 160 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Sieradz_4',
                nodeType: 'trackMarker',
                nodePos: { x: 435, y: 180 },
                text: '4',
            },
        ]
    },
    "2582_Me_APO_MEKA": { //^ APO Meka
        "TRACKS": [
            {
                trackID: '2582_APO_MEKA',
                /**/
                trackSVG: `
                M590,140 710,140 M730,140 850,140
                M590,160 710,160 M730,160 850,160
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: '2582_Me_C',
                signalPos: { x: '720', y: '140' },
                trainPos: { x: '705', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
                //signalType: "apo-red-green"
            },
            {
                signalName: '2582_Me_D',
                signalPos: { x: '720', y: '160' },
                trainPos: { x: '705', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
                //signalType: "apo-red-green"
            },
            {
                signalName: '2582_Me_B',
                signalPos: { x: '720', y: '140' },
                trainPos: { x: '735', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
                //signalType: "apo-red-green"
            },
            {
                signalName: '2582_Me_A',
                signalPos: { x: '720', y: '160' },
                trainPos: { x: '735', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
                //signalType: "apo-red-green"
            },
        ],
        "NODES": [
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
                nodeID: 'trackMarker-Sieradz_ZdunskaWola_1M',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 140 },
                text: 'it1M',
            },
            {
                nodeID: 'trackMarker-Sieradz_ZdunskaWola_2M',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 160 },
                text: 'it2M',
            },
            {
                nodeID: 'trackMarker-Sieradz_ZdunskaWola_1S',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 140 },
                text: 'it1S',
            },
            {
                nodeID: 'trackMarker-Sieradz_ZdunskaWola_2S',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 160 },
                text: 'it2S',
            },
        ]
    },
    "5291_ZW_ZDUNSKAWOLA": { //^ Zdunska Wola
        "TRACKS": [
            {
                trackID: '5291_ZDUNSKAWOLA',
                /*
                T1
                T2

                SW38/37 + SW36/35

                SW34/31 + SW30abcd
                T3
                T5
                T7

                SW15/12 + SW9/8 + SW7/5 + SW2/1 + Tor1K

                SW33/32 + T4
                SW18/16 + SW13/10 + SW6/3 + Tor1D

                */
                trackSVG: `
                M860,140 980,140 M990,140 1050,140 M1060,140 1170,140
                M860,160 980,160 M990,160 1050,160 M1060,160 1170,160

                M880,160 882.5,155 882.5,145 885,140 M905,140 907.5,145 907.5,155 910,160

                M930,140 932.5,135 932.5,125 935,120 945,120 947.5,115 947.5,105 950,100 960,100 962.5,95 962.5,85 965,80 970,80
                M935,120 980,120 M990,120 1050,120 M1060,120 1070,120
                M950,100 980,100 M990,100 1050,100 M1060,100 1070,100
                M965,80 980,80 M990,80 1050,80 M1060,80 1070,80

                M1060,80 1075,80 1077.5,85 1077.5,95 1080,100 M1060,100 1090,100 1092.5,105 1092.5,115 1095,120 M1060,120 1105,120 1107.5,125 1107.5,135 1110,140 M1120,140 1122.5,145 1122.5,155 1125,160 M1135,160 1137.5,165 1137.5,175 1140,180 M1060,180 1170,180


                M945,160 947.5,165 947.5,175 950,180 980,180 M990,180 1050,180
                M1060,180 1070,180 1072.5,175 1072.5,165 1075,160 M1090,160 1092.5,155 1092.5,145 1095,140 M1135,140 1137.5,135 1137.5,125 1140,120 M1100,120 1170,120

                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '5291_ZW_P',
                signalPos: { x: '860', y: '140' },
                trainPos: { x: '845', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_R',
                signalPos: { x: '860', y: '160' },
                trainPos: { x: '845', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5291_ZW_L7',
                signalPos: { x: '980', y: '80' },
                trainPos: { x: '995', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_L5',
                signalPos: { x: '980', y: '100' },
                trainPos: { x: '995', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_L3',
                signalPos: { x: '980', y: '120' },
                trainPos: { x: '995', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_L1',
                signalPos: { x: '980', y: '140' },
                trainPos: { x: '995', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_K2',
                signalPos: { x: '980', y: '160' },
                trainPos: { x: '995', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_K4',
                signalPos: { x: '980', y: '180' },
                trainPos: { x: '995', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '5291_ZW_G7',
                signalPos: { x: '1060', y: '80' },
                trainPos: { x: '1045', y: '80' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_G5',
                signalPos: { x: '1060', y: '100' },
                trainPos: { x: '1045', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_G3',
                signalPos: { x: '1060', y: '120' },
                trainPos: { x: '1045', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_G1',
                signalPos: { x: '1060', y: '140' },
                trainPos: { x: '1045', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_H2',
                signalPos: { x: '1060', y: '160' },
                trainPos: { x: '1045', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_H4',
                signalPos: { x: '1060', y: '180' },
                trainPos: { x: '1045', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5291_ZW_D',
                signalPos: { x: '1170', y: '120' },
                trainPos: { x: '1185', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_C',
                signalPos: { x: '1170', y: '140' },
                trainPos: { x: '1185', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_B',
                signalPos: { x: '1170', y: '160' },
                trainPos: { x: '1185', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_A',
                signalPos: { x: '1170', y: '180' },
                trainPos: { x: '1185', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-ZdunskaWola',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1110, y: 85 },
                postType: 'computer',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-ZdunskaWola',
                nodeType: 'stationName',
                stationPrefix: 'ZW',
                stationName: 'Zduńska Wola',
                nodePos: { x: 1020, y: 50 },
                nodePosFlipped: { x: 1020, y: 220 }
            },
            {
                nodeID: 'platform-ZdunskaWola_2',
                nodeType: 'platform',
                nodePos: { x: 990, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-ZdunskaWola_1',
                nodeType: 'platform',
                nodePos: { x: 990, y: 185 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-ZdunskaWola_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 80 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-ZdunskaWola_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 100 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-ZdunskaWola_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 120 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-ZdunskaWola_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 140 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-ZdunskaWola_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 160 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-ZdunskaWola_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 180 },
                text: '4',
            },
        ]
    },
    "5292_ZWK_ZDUNSKAWOLAKARSZNICE": { //^ Zdunska Wola Karsznice
        "TRACKS": [
            {
                trackID: '5292_ZDUNSKAWOLAKARSZNICE',
                trackSVG: `
                M1180,180 1240,180 1242.5,185 1242.5,235 1245,240 1320,240
                M1320,220 1260,220 1257.5,215 1257.5,185 1260,180 1320,180
                M1345,220 1350,220 M1355,220 1360,220 M1365,220 1370,220 M1375,220 1380,220 M1385,220 1390,220 M1395,220 1400,220
                M1345,240 1350,240 M1355,240 1360,240 M1365,240 1370,240 M1375,240 1380,240 M1385,240 1390,240 M1395,240 1400,240
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: '5292_ZWK_V',
                signalPos: { x: '1330', y: '220' },
                trainPos: { x: '1315', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5292_ZWK_X',
                signalPos: { x: '1330', y: '240' },
                trainPos: { x: '1315', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5292_ZWK_W51',
                signalPos: { x: '1330', y: '220' },
                trainPos: { x: '1345', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5292_ZWK_W31',
                signalPos: { x: '1330', y: '240' },
                trainPos: { x: '1345', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-ZdunskaWola_ZWK_1K',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 180 },
                text: 'it1K',
            },
            {
                nodeID: 'trackMarker-ZdunskaWolaK_Ga_1K',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 180 },
                text: 'it1K',
            },
        ]
    },
    "779_Di_DIONIZOW": { //^ Dionizow
        "TRACKS": [
            {
                trackID: '779_DIONIZOW',
                trackSVG: `
                M1100,20 1105,20 M1110,20 1115,20 M1120,20 1125,20 M1130,20 1135,20 M1140,20 1145,20 M1150,20 1155,20
                M1100,40 1105,40 M1110,40 1115,40 M1120,40 1125,40 M1130,40 1135,40 M1140,40 1145,40 M1150,40 1155,40
                M1180,20 1255,20 1257.5,25 1257.5,115 1260,120 1320,120
                M1180,40 1240,40 1242.5,45 1242.5,115 1240,120 1180,120
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: '779_Di_D1',
                signalPos: { x: '1170', y: '20' },
                trainPos: { x: '1155', y: '20' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '779_Di_D',
                signalPos: { x: '1170', y: '40' },
                trainPos: { x: '1155', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '779_Di_C',
                signalPos: { x: '1170', y: '20' },
                trainPos: { x: '1185', y: '20' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '779_Di_B',
                signalPos: { x: '1170', y: '40' },
                trainPos: { x: '1185', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-ZdunskaWola_Di_1D',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 120 },
                text: 'it1D',
            },
            {
                nodeID: 'trackMarker-Di_Ga_1D',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 120 },
                text: 'it1D',
            },
        ]
    },
    "ZDUNSKAWOLA_GAJEWNIKI": {
        "TRACKS": [
            {
                trackID: 'ZDUNSKAWOLA_GAJEWNIKI',
                trackSVG: `
                M1180,140 1320,140
                M1180,160 1320,160
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
            {
                nodeID: 'trackMarker-ZdunskaWola_Ga_1G',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 140 },
                text: 'it1G',
            },
            {
                nodeID: 'trackMarker-ZdunskaWola_Ga_2G',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 160 },
                text: 'it2G',
            },
        ]
    },
    "919_Ga_GAJEWNIKI": { //^ Gajewniki
        "TRACKS": [
            {
                trackID: '919_GAJEWNIKI',
                /**/
                trackSVG: `
                M1330,140 1420,140
                M1330,160 1420,160

                M1330,120 1350,120 1352.5,125 1352.5,135 1355,140 M1365,140 1367.5,145 1367.5,155 1370,160
                M1330,180 1380,180 1382.5,175 1382.5,165 1385,160 M1395,160 1397.5,155 1397.5,145 1400,140
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '919_Ga_C',
                signalPos: { x: '1330', y: '120' },
                trainPos: { x: '1315', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '919_Ga_D',
                signalPos: { x: '1330', y: '140' },
                trainPos: { x: '1315', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '919_Ga_E',
                signalPos: { x: '1330', y: '160' },
                trainPos: { x: '1315', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '919_Ga_F',
                signalPos: { x: '1330', y: '180' },
                trainPos: { x: '1315', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '919_Ga_B',
                signalPos: { x: '1420', y: '140' },
                trainPos: { x: '1435', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '919_Ga_A',
                signalPos: { x: '1420', y: '160' },
                trainPos: { x: '1435', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Gajewniki',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1370, y: 105 },
                postType: 'computer',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-ZdunskaWola',
                nodeType: 'stationName',
                stationPrefix: 'Ga',
                stationName: 'Gajewniki',
                nodePos: { x: 1370, y: 70 },
                nodePosFlipped: { x: 1370, y: 200 }
            },
        ]
    },
    "292_Bo_APO_BORSZEWICE": { //^ APO Borszewice
        "TRACKS": [
            {
                trackID: '292_APO_BORSZEWICE',
                /**/
                trackSVG: `
                M1430,140 1490,140 M1510,140 1570,140
                M1430,160 1490,160 M1510,160 1570,160
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: '292_Bo_C',
                signalPos: { x: '1500', y: '140' },
                trainPos: { x: '1485', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '292_Bo_D',
                signalPos: { x: '1500', y: '160' },
                trainPos: { x: '1485', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '292_Bo_B',
                signalPos: { x: '1500', y: '140' },
                trainPos: { x: '1515', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            {
                signalName: '292_Bo_A',
                signalPos: { x: '1500', y: '160' },
                trainPos: { x: '1515', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
        ],
        "NODES": [
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
                nodeID: 'trackMarker-Gajewniki_Lask_1B',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 140 },
                text: 'it1B',
            },
            {
                nodeID: 'trackMarker-Gajewniki_Lask_2B',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 160 },
                text: 'it2B',
            },
            {
                nodeID: 'trackMarker-Gajewniki_Lask_1L',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 140 },
                text: 'it1L',
            },
            {
                nodeID: 'trackMarker-Gajewniki_Lask_2L',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 160 },
                text: 'it2L',
            },
        ]
    },
    "2360_La_LASK": { //^ Lask
        "TRACKS": [
            {
                trackID: '2360_LASK',
                /*
                T1
                T2

                SW23/22 + SW21/20

                SW16 + T3 + SW7

                SW19/18 + T4 + 9cd/6
                SW17 + T6 + SW9ab

                DKW4/3/2/1
                */
                trackSVG: `
                M1580,140 1670,140 M1680,140 1740,140 M1750,140 1830,140
                M1580,160 1670,160 M1680,160 1740,160 M1750,160 1830,160

                M1600,140 1602.5,145 1602.5,155 1605,160 M1615,160 1617.5,155 1617.5,145 1620,140

                M1635,140 1637.5,135 1637.5,125 1640,120 1670,120 M1680,120 1740,120 M1750,120 1775,120 1777.5,125 1777.5,135 1780,140

                M1630,160 1632.5,165 1632.5,175 1635,180 1670,180 M1680,180 1740,180 M1750,180 1775,180 1777.5,175 1777.5,165 1780,160
                M1640,180 1645,180 1647.5,185 1647.5,195 1650,200 1670,200 M1680,200 1740,200 M1750,200 1760,200 1762.5,195 1762.5,185 1765,180

                M1790,140 1810,160 M1790,160 1810,140
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '2360_La_P',
                signalPos: { x: '1580', y: '140' },
                trainPos: { x: '1565', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_R',
                signalPos: { x: '1580', y: '160' },
                trainPos: { x: '1565', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2360_La_N',
                signalPos: { x: '1670', y: '120' },
                trainPos: { x: '1685', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_M',
                signalPos: { x: '1670', y: '140' },
                trainPos: { x: '1685', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_L',
                signalPos: { x: '1670', y: '160' },
                trainPos: { x: '1685', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_K',
                signalPos: { x: '1670', y: '180' },
                trainPos: { x: '1685', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_J',
                signalPos: { x: '1670', y: '200' },
                trainPos: { x: '1685', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2360_La_C',
                signalPos: { x: '1750', y: '120' },
                trainPos: { x: '1735', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_D',
                signalPos: { x: '1750', y: '140' },
                trainPos: { x: '1735', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_E',
                signalPos: { x: '1750', y: '160' },
                trainPos: { x: '1735', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_F',
                signalPos: { x: '1750', y: '180' },
                trainPos: { x: '1735', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_G',
                signalPos: { x: '1750', y: '200' },
                trainPos: { x: '1735', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2360_La_B',
                signalPos: { x: '1830', y: '140' },
                trainPos: { x: '1845', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_A',
                signalPos: { x: '1830', y: '160' },
                trainPos: { x: '1845', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Lask',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1650, y: 85 },
                postType: 'computer',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-Lask',
                nodeType: 'stationName',
                stationPrefix: 'La',
                stationName: 'Łask',
                nodePos: { x: 1710, y: 70 },
                nodePosFlipped: { x: 1710, y: 235 }
            },
            {
                nodeID: 'platform-Lask_2',
                nodeType: 'platform',
                nodePos: { x: 1680, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Lask_2',
                nodeType: 'platform',
                nodePos: { x: 1680, y: 205 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Lask_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 120 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Lask_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 140 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Lask_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 160 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Lask_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 180 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Lask_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 200 },
                text: '6',
            },
        ]
    },
    "802_Db_APO_KOLUMNA_DOBRON": { //^ APO Kolumna / APO Dobron
        "TRACKS": [
            {
                trackID: '802_APO_KOLUMNA_DOBRON',
                /**/
                trackSVG: `
                M1840,140 1900,140 M1910,140 1950,140 M1960,140 2020,140 M2030,140 2070,140 M2080,140 2210,140
                M1840,160 1900,160 M1910,160 1950,160 M1960,160 2020,160 M2030,160 2070,160 M2080,160 2210,160
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            //~ APO Kolumna
            {
                signalName: '802_Db_H',
                signalPos: { x: '1910', y: '140' },
                trainPos: { x: '1895', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_J',
                signalPos: { x: '1910', y: '160' },
                trainPos: { x: '1895', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_F',
                signalPos: { x: '1950', y: '140' },
                trainPos: { x: '1965', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_E',
                signalPos: { x: '1950', y: '160' },
                trainPos: { x: '1965', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            //~ APO Dobron
            {
                signalName: '802_Db_C',
                signalPos: { x: '2030', y: '140' },
                trainPos: { x: '2015', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_D',
                signalPos: { x: '2030', y: '160' },
                trainPos: { x: '2015', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_B',
                signalPos: { x: '2070', y: '140' },
                trainPos: { x: '2085', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_A',
                signalPos: { x: '2070', y: '160' },
                trainPos: { x: '2085', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Lask_Pabianice_1K',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 140 },
                text: 'it1K',
            },
            {
                nodeID: 'trackMarker-Lask_Pabianice_2K',
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
                nodeID: 'trackMarker-Lask_Pabianice_1D',
                nodeType: 'trackMarker',
                nodePos: { x: 1990, y: 140 },
                text: 'it1D',
            },
            {
                nodeID: 'trackMarker-Lask_Pabianice_2D',
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
                nodeID: 'trackMarker-Lask_Pabianice_1P',
                nodeType: 'trackMarker',
                nodePos: { x: 2145, y: 140 },
                text: 'it1P',
            },
            {
                nodeID: 'trackMarker-Lask_Pabianice_2P',
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
        ]
    },
    "3093_Pa_PABIANICE": { //^ Pabianice
        "TRACKS": [
            {
                trackID: '3093_PABIANICE',
                /*
                T1
                T2

                SW42/41 + SW40/39

                SW37 + T5 + SW9/6

                SW38/36 + T4
                */
                trackSVG: `
                M2220,140 2300,140 M2310,140 2370,140 M2380,140 2470,140
                M2220,160 2300,160 M2310,160 2370,160 M2380,160 2470,160

                M2240,160 2242.5,155 2242.5,145 2245,140 M2255,140 2257.5,145 2257.5,155 2260,160

                M2280,140 2282.5,135 2282.5,125 2285,120 2300,120 M2310,120 2370,120 M2380,120 2390,120 2392.5,125 2392.5,135 2395,140
                
                M2270,160 2272.5,165 2272.5,175 2275,180 2300,180 M2310,180 2370,180 M2380,180 2405,180 2407.5,175 2407.5,165 2410,160

                M2420,140 2422.5,145 2422.5,155 2425,160 M2445,160 2447.5,155 2447.5,145 2450,140
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3093_Pa_P',
                signalPos: { x: '2220', y: '140' },
                trainPos: { x: '2205', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_R',
                signalPos: { x: '2220', y: '160' },
                trainPos: { x: '2205', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3093_Pa_N',
                signalPos: { x: '2300', y: '120' },
                trainPos: { x: '2315', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_M',
                signalPos: { x: '2300', y: '140' },
                trainPos: { x: '2315', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_L',
                signalPos: { x: '2300', y: '160' },
                trainPos: { x: '2315', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_K',
                signalPos: { x: '2300', y: '180' },
                trainPos: { x: '2315', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '3093_Pa_C',
                signalPos: { x: '2380', y: '120' },
                trainPos: { x: '2365', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_D',
                signalPos: { x: '2380', y: '140' },
                trainPos: { x: '2365', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_E',
                signalPos: { x: '2380', y: '160' },
                trainPos: { x: '2365', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_F',
                signalPos: { x: '2380', y: '180' },
                trainPos: { x: '2365', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3093_Pa_B',
                signalPos: { x: '2470', y: '140' },
                trainPos: { x: '2485', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_A',
                signalPos: { x: '2470', y: '160' },
                trainPos: { x: '2485', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Pabianice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2240, y: 105 },
                postType: 'computer',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-Pabianice',
                nodeType: 'stationName',
                stationPrefix: 'Pa',
                stationName: 'Pabianice',
                nodePos: { x: 2340, y: 70 },
                nodePosFlipped: { x: 2340, y: 220 }
            },
            {
                nodeID: 'platform-Pabianice_2',
                nodeType: 'platform',
                nodePos: { x: 2310, y: 145 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Pabianice_1',
                nodeType: 'platform',
                nodePos: { x: 2310, y: 185 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Pabianice_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 120 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Pabianice_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 140 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Pabianice_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 160 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Pabianice_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 180 },
                text: '4',
            },
        ]
    },
    "PABIANICE_LODZLUBLINEK": {
        "TRACKS": [
            {
                trackID: 'PABIANICE_LODZLUBLINEK',
                /**/
                trackSVG: `
                M2480,140 2540,140 2550,150
                M2480,160 2540,160 2550,170

                M10,350 20,360 100,360
                M10,370 20,380 100,380
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
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
                nodeID: 'trackMarker-Pabianice_Lb_1L',
                nodeType: 'trackMarker',
                nodePos: { x: 2510, y: 140 },
                text: 'it1L',
            },
            {
                nodeID: 'trackMarker-Pabianice_Lb_2L',
                nodeType: 'trackMarker',
                nodePos: { x: 2510, y: 160 },
                text: 'it2L',
            },
            {
                nodeID: 'trackMarker-Pabianice_Lb_1P',
                nodeType: 'trackMarker',
                nodePos: { x: 60, y: 360 },
                text: 'it1P',
            },
            {
                nodeID: 'trackMarker-Pabianice_Lb_2P',
                nodeType: 'trackMarker',
                nodePos: { x: 60, y: 380 },
                text: 'it2P',
            },
        ]
    },
    "2330_Lb_LODZLUBLINEK": { //^ Lodz Lublinek
        "TRACKS": [
            {
                trackID: '2330_LODZLUBLINEK',
                /*
                T1
                T2

                SW40/39
                */
                trackSVG: `
                M110,360 190,360 M200,360 260,360 M270,360 360,360
                M110,380 190,380 M200,380 260,380 M270,380 360,380

                M130,380 132.5,375 132.5,365 135,360 M145,360 147.5,355 147.5,345 150,340 160,340 162.5,335 162.5,325 165,320 170,320
                M160,360 162.5,365 162.5,375 165,380 M175,380 177.5,385 177.5,395 180,400 190,400

                M170,320 190,320 M200,320 260,320 M270,320
                M160,340 190,340 M200,340 260,340 M270,340
                M180,400 190,400 M200,400 260,400 M270,400

                M270,320 280,320 282.5,325 282.5,335 285,340 M270,340 305,340 307.5,345 307.5,355 310,360
                M270,400 295,400 297.5,395 297.5,385 300,380

                M320,380 322.5,375 322.5,365 325,360 M335,360 337.5,365 337.5,375 340,380
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '2330_Lb_P',
                signalPos: { x: '110', y: '360' },
                trainPos: { x: '95', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_R',
                signalPos: { x: '110', y: '380' },
                trainPos: { x: '95', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2330_Lb_O',
                signalPos: { x: '190', y: '320' },
                trainPos: { x: '205', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_N',
                signalPos: { x: '190', y: '340' },
                trainPos: { x: '205', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_M',
                signalPos: { x: '190', y: '360' },
                trainPos: { x: '205', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_L',
                signalPos: { x: '190', y: '380' },
                trainPos: { x: '205', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_K',
                signalPos: { x: '190', y: '400' },
                trainPos: { x: '205', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2330_Lb_C',
                signalPos: { x: '270', y: '320' },
                trainPos: { x: '255', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_D',
                signalPos: { x: '270', y: '340' },
                trainPos: { x: '255', y: '340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_E',
                signalPos: { x: '270', y: '360' },
                trainPos: { x: '255', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_F',
                signalPos: { x: '270', y: '380' },
                trainPos: { x: '255', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_G',
                signalPos: { x: '270', y: '400' },
                trainPos: { x: '255', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2330_Lb_B',
                signalPos: { x: '360', y: '360' },
                trainPos: { x: '375', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_A',
                signalPos: { x: '360', y: '380' },
                trainPos: { x: '375', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-LodzLublinek',
                nodeType: 'dispatchingPost',
                nodePos: { x: 185, y: 415 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-LodzLublinek',
                nodeType: 'stationName',
                stationPrefix: 'Lb',
                stationName: 'Łódź Lublinek',
                nodePos: { x: 230, y: 290 },
                nodePosFlipped: { x: 230, y: 460 }
            },
            {
                nodeID: 'platform-LodzLublinek_2',
                nodeType: 'platform',
                nodePos: { x: 205, y: 345 },
                width: 40,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-LodzLublinek_1',
                nodeType: 'platform',
                nodePos: { x: 205, y: 385 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-LodzLublinek_7',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 320 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-LodzLublinek_5',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 340 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-LodzLublinek_1',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 360 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-LodzLublinek_2',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 380 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-LodzLublinek_4',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 400 },
                text: '4',
            },
        ]
    },
    "LODZLUBLINEK_RETKINIA": {
        "TRACKS": [
            {
                trackID: 'LODZLUBLINEK_RETKINIA',
                /**/
                trackSVG: `
                M370,360 430,360
                M370,380 430,380
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
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
                nodeID: 'trackMarker-LodzLublinek_Retkinia_it1',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 360 },
                text: 'it1',
            },
            {
                nodeID: 'trackMarker-LodzLublinek_Retkinia_it2',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 380 },
                text: 'it2',
            },
        ]
    },
    "3577_Rt_RETKINIA": {
        "TRACKS": [
            {
                trackID: '3577_RETKINIA',
                /**/
                trackSVG: `
                M440,360 510,360
                M440,380 510,380

                M460,380 462.5,375 462.5,365 465,360
                M480,360 482.5,365 482.5,375 485,380


                M475,380 477.5,385 477.5,435 480,440 520,440
                M495,380 497.5,385 497.5,415 500,420 520,420
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3577_Rt_E',
                signalPos: { x: '440', y: '360' },
                trainPos: { x: '425', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3577_Rt_F',
                signalPos: { x: '440', y: '380' },
                trainPos: { x: '425', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3577_Rt_D',
                signalPos: { x: '510', y: '360' },
                trainPos: { x: '525', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3577_Rt_C',
                signalPos: { x: '510', y: '380' },
                trainPos: { x: '525', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3577_Rt_B',
                signalPos: { x: '520', y: '420' },
                trainPos: { x: '535', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3577_Rt_A',
                signalPos: { x: '520', y: '440' },
                trainPos: { x: '535', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Retkinia',
                nodeType: 'dispatchingPost',
                nodePos: { x: 440, y: 395 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-Retkinia',
                nodeType: 'stationName',
                stationPrefix: 'Rt',
                stationName: 'Retkinia',
                nodePos: { x: 490, y: 320 },
                nodePosFlipped: { x: 490, y: 470 }
            },
        ]
    },
    "RETKINIA_LODZKALISKA": {
        "TRACKS": [
            {
                trackID: 'RETKINIA_LODZKALISKA',
                trackSVG: `
                M520,360 780,360
                M520,380 780,380

                M530,420 590,420
                M530,440 590,440
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
            {
                nodeID: 'trackMarker-Retkinia_LodzKaliska_1K',
                nodeType: 'trackMarker',
                nodePos: { x: 590, y: 360 },
                text: '1K',
            },
            {
                nodeID: 'trackMarker-Retkinia_LodzKaliska_2K',
                nodeType: 'trackMarker',
                nodePos: { x: 590, y: 380 },
                text: '2K',
            },
            {
                nodeID: 'trackMarker-Retkinia_LodzKaliska_1R',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 360 },
                text: '1R',
            },
            {
                nodeID: 'trackMarker-Retkinia_LodzKaliska_2R',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 380 },
                text: '2R',
            },

            {
                nodeID: 'trackMarker-Retkinia_LodzKaliska_1',
                nodeType: 'trackMarker',
                nodePos: { x: 560, y: 420 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Retkinia_LodzKaliska_2',
                nodeType: 'trackMarker',
                nodePos: { x: 560, y: 440 },
                text: '2',
            },
        ]
    },
    "2432_LK_LODZKALISKA": {
        "TRACKS": [
            {
                trackID: '2432_LODZKALISKA',
                /*
                !!!
                !!! UPPER SECTION OF LODZ KALISKA
                !!!
                *TOR 1R FROM RETKINIA UPPER TRACK (T4 + TOR Z2 LODZ ZABIENIEC)
                *TOR 2R FROM RETKINIA LOWER TRACK (T8 + SW74ab)

                *SW109cd/107ab
                *SW108/106ab
                *SW105cd/102ab

                *SW107cd + T3 + /T13 + SW11/8
                *SW104 + T1 TO TOR 1Z LODZ ZABIENIEC
                *SW106cd + T2 + SW79
                *SW102cd + T6 + SW75ab

                *SW103/101 (CONNECTOR SWITCH T2/T1)
                *SW82/78 (CONNECTOR SWITCH T8/T6)

                *SW80/71 + SW68cd/65ab
                *SW75cd/68ab
                *SW77/70
                *SW69cd/59
                *SW57/51
                *SW9/7 + SW5/3


                !!!
                !!! LOWER SECTION OF LODZ KALISKA
                !!!

                *TOR 3R FROM RETKINIA (LK539)
                *TOR 4R FROM RETKINIA (LK539)

                *TOR 1C FROM CHOJNY UPPER TRACK + T151 TO SW69ab
                *TOR 2C FROM CHOJNY LOWER TRACK + T152 TO SW25 + SW12/10

                *SW229/228 + SW227/223ab
                *SW219cd/217ab + SW217cd + SW216 -> T81 + SW110/109ab

                *T203 + SW159
                *T205 + SW154ab
                *SW213 + T207 + SW156

                *SW160/155 (CONNECTOR T202/201)
                *SW154c/153ab + SW153cd/152

                *SW158 + T154 + SW22
                *SW151 + T32 + SW29
                *SW81/76/61
                *SW74cd/66
                */
                trackSVG: `
                M790,360 830,360 832.5,365 832.5,385 835,390 925,390 927.5,395 927.5,415 930,420 980,420 M990,420 1050,420 M1060,420 1240,420 M1250,420 1330,420 M1340,420 1480,420
                M790,380 810,380 812.5,385 812.5,405 815,410 895,410 897.5,415 897.5,455 900,460 980,460 M990,460 1050,460 M1060,460 1190,460 1192.5,465 1192.5,515 1195,520

                M845,410 847.5,405 847.5,395 850,390
                M865,410 867.5,405 867.5,395 870,390
                M885,410 887.5,405 887.5,395 890,390

                M860,390 862.5,385 862.5,365 865,360 980,360 M990,360 1050,360 M1060,360 1105,360 1107.5,365 1107.5,375 1110,380 1240,380 M1250,380 1330,380 M1340,380 1400,380 1402.5,385 1402.5,395 1405,400
                M955,360 957.5,365 957.5,375 960,380 980,380 M990,380 1050,380 M1060,380 1090,380 1092.5,385 1092.5,395 1095,400 1240,400 M1250,400 1330,400 M1340,400 1480,400
                M880,390 882.5,385 882.5,380 885,375 940,375 942.5,380 942.5,395 945,400 980,400 M990,400 1050,400 M1060,400 1070,400 1072.5,405 1072.5,415 1075,420
                M910,390 912.5,395 912.5,435 915,440 980,440 M990,440 1050,440 M1060,440 1090,440 1092.5,435 1092.5,425 1095,420

                M965,400 967.5,395 967.5,385 970,380
                M1070,460 1072.5,455 1072.5,445 1075,440

                M1120,380 1122.5,385 1122.5,395 1125,400 M1155,400 1157.5,395 1157.5,385 1160,380
                M1105,420 1107.5,417 1107.5,413 1110,410 1140,410 1142.5,407 1142.5,403 1145,400
                M1130,440 1132.5,435 1132.5,413 1135,410
                M1170,420 1172.5,415 1172.5,405 1175,400
                M1220,400 1222.5,405 1222.5,415 1225,420
                M1420,420 1422.5,415 1422.5,405 1425,400 M1455,400 1457.5,405 1457.5,415 1460,420




                M600,420 640,420 642.5,425 642.5,515 640,520
                M600,440 620,440 622.5,445 622.5,515 620,520

                M580,520 740,520 M750,520 830,520 M840,520 870,520 872.5,515 872.5,505 875,500 980,500 M990,500 1090,500 M1100,500 1110,500 1112.5,495 1112.5,445 1115,440 1155,440 1157.5,435 1157.5,425 1160,420
                M580,540 740,540 M750,540 830,540 M840,540 880,540 882.5,535 882.5,525 885,520 980,520 M990,520 1090,520 M1100,520 1220,520 1222.5,515 1222.5,505 1220,500 1205,500 1202.5,495 1202.5,475 1205,470 1240,470 M1250,470 1310,470 M1320,470 1330,470 1332.5,465 1332.5,445 1335,440 1400,440 1402.5,435 1402.5,425 1405,420

                M600,520 602.5,525 602.5,535 605,540 M625,540 627.5,535 627.5,525 630,520
                M670,520 672.5,515 672.5,505 675,500 685,500 687.5,495 687.5,485 690,480 705,480 707.5,475 707.5,435 710,430 740,430 M750,430 810,430 M820,430 870,430 872.5,425 872.5,415 875,410 M830,430 832.5,425 832.5,415 835,410
                
                M680,500 740,500 M750,500 830,500 M840,500 855,500 857.5,495 857.5,485 860,480
                M700,480 740,480 M750,480 830,480 M840,480 910,480 912.5,485 912.5,495 915,500
                M720,480 722.5,475 722.5,465 725,460 740,460 M750,460 830,460 M840,460 870,460 872.5,465 872.5,475 875,480

                M855,540 857.5,535 857.5,525 860,520
                M930,500 932.5,505 932.5,515 935,520 M945,520 947.5,525 947.5,535 950,540

                M900,520 902.5,525 902.5,535 905,540 980,540 M990,540 1090,540 M1100,540 1250,540 M1260,540 1320,540 M1330,540 1365,540 1367.5,535 1367.5,445 1370,440
                M960,540 962.5,545 962.5,555 965,560 980,560 M990,560 1320,560 M1330,560 1345,560 1347.5,555 1347.5,545 1350,540
                M1170,520 1172.5,515 1172.5,445 1175,440 1185,440 1187.5,435 1187.5,425 1190,420
                M1205,520 1207.5,525 1207.5,535 1210,540
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //ENTRY SIGNALS LK14
            {
                signalName: '2432_LK_T',
                signalPos: { x: '790', y: '360' },
                trainPos: { x: '775', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_U',
                signalPos: { x: '790', y: '380' },
                trainPos: { x: '775', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // ENTRY SIGNALS LK539
            {
                signalName: '2432_LK_V',
                signalPos: { x: '600', y: '420' },
                trainPos: { x: '585', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_W',
                signalPos: { x: '600', y: '440' },
                trainPos: { x: '585', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // ENTRY SIGNALS CHOJNY
            {
                signalName: '2432_LK_Y',
                signalPos: { x: '580', y: '520' },
                trainPos: { x: '565', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_Z',
                signalPos: { x: '580', y: '540' },
                trainPos: { x: '565', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // SIGNALS T18 - T202
            {
                signalName: '2432_LK_P18',
                signalPos: { x: '740', y: '430' },
                trainPos: { x: '755', y: '430' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P207',
                signalPos: { x: '740', y: '460' },
                trainPos: { x: '755', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P205',
                signalPos: { x: '740', y: '480' },
                trainPos: { x: '755', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P203',
                signalPos: { x: '740', y: '500' },
                trainPos: { x: '755', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P201',
                signalPos: { x: '740', y: '520' },
                trainPos: { x: '755', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P202',
                signalPos: { x: '740', y: '540' },
                trainPos: { x: '755', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2432_LK_L18',
                signalPos: { x: '820', y: '430' },
                trainPos: { x: '805', y: '430' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L207',
                signalPos: { x: '840', y: '460' },
                trainPos: { x: '825', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L205',
                signalPos: { x: '840', y: '480' },
                trainPos: { x: '825', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L203',
                signalPos: { x: '840', y: '500' },
                trainPos: { x: '825', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L201',
                signalPos: { x: '840', y: '520' },
                trainPos: { x: '825', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L202',
                signalPos: { x: '840', y: '540' },
                trainPos: { x: '825', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            //
            {
                signalName: '2432_LK_K3',
                signalPos: { x: '980', y: '360' },
                trainPos: { x: '995', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K1',
                signalPos: { x: '980', y: '380' },
                trainPos: { x: '995', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K2',
                signalPos: { x: '980', y: '400' },
                trainPos: { x: '995', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K4',
                signalPos: { x: '980', y: '420' },
                trainPos: { x: '995', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K6',
                signalPos: { x: '980', y: '440' },
                trainPos: { x: '995', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K8',
                signalPos: { x: '980', y: '460' },
                trainPos: { x: '995', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_J151',
                signalPos: { x: '980', y: '500' },
                trainPos: { x: '995', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_J152',
                signalPos: { x: '980', y: '520' },
                trainPos: { x: '995', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_J154',
                signalPos: { x: '980', y: '540' },
                trainPos: { x: '995', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_J32',
                signalPos: { x: '980', y: '560' },
                trainPos: { x: '995', y: '560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '2432_LK_G3',
                signalPos: { x: '1060', y: '360' },
                trainPos: { x: '1045', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G1',
                signalPos: { x: '1060', y: '380' },
                trainPos: { x: '1045', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G2',
                signalPos: { x: '1060', y: '400' },
                trainPos: { x: '1045', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G4',
                signalPos: { x: '1060', y: '420' },
                trainPos: { x: '1045', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G6',
                signalPos: { x: '1060', y: '440' },
                trainPos: { x: '1045', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G8',
                signalPos: { x: '1060', y: '460' },
                trainPos: { x: '1045', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_H151',
                signalPos: { x: '1100', y: '500' },
                trainPos: { x: '1085', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_H152',
                signalPos: { x: '1100', y: '520' },
                trainPos: { x: '1085', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_H154',
                signalPos: { x: '1100', y: '540' },
                trainPos: { x: '1085', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            //
            {
                signalName: '2432_LK_F13',
                signalPos: { x: '1240', y: '380' },
                trainPos: { x: '1255', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_F101',
                signalPos: { x: '1240', y: '400' },
                trainPos: { x: '1255', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_F102',
                signalPos: { x: '1240', y: '420' },
                trainPos: { x: '1255', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_F18',
                signalPos: { x: '1240', y: '470' },
                trainPos: { x: '1255', y: '470' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_F30',
                signalPos: { x: '1250', y: '540' },
                trainPos: { x: '1265', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2432_LK_E13',
                signalPos: { x: '1340', y: '380' },
                trainPos: { x: '1325', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E101',
                signalPos: { x: '1340', y: '400' },
                trainPos: { x: '1325', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E102',
                signalPos: { x: '1340', y: '420' },
                trainPos: { x: '1325', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E18',
                signalPos: { x: '1320', y: '470' },
                trainPos: { x: '1305', y: '470' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E30',
                signalPos: { x: '1330', y: '540' },
                trainPos: { x: '1315', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E32',
                signalPos: { x: '1330', y: '560' },
                trainPos: { x: '1315', y: '560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            // ENTRY SIGNALS LODZ ZABIENIEC
            //
            {
                signalName: '2432_LK_A1',
                signalPos: { x: '1480', y: '400' },
                trainPos: { x: '1495', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_A2',
                signalPos: { x: '1480', y: '420' },
                trainPos: { x: '1495', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-LodzKaliska',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1130, y: 350 },
                postType: 'computer',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-LodzKaliska',
                nodeType: 'stationName',
                stationPrefix: 'LK',
                stationName: 'Łódź Kaliska',
                nodePos: { x: 1100, y: 320 },
                nodePosFlipped: { x: 1100, y: 590 }
            },
            {
                nodeID: 'platform-LodzKaliska_3',
                nodeType: 'platform',
                nodePos: { x: 990, y: 365 },
                width: 50,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'platform-LodzKaliska_2',
                nodeType: 'platform',
                nodePos: { x: 990, y: 405 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-LodzKaliska_1',
                nodeType: 'platform',
                nodePos: { x: 990, y: 465 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-LodzKaliska_4',
                nodeType: 'platform',
                nodePos: { x: 1030, y: 485 },
                width: 60,
                height: 10,
                text: 'Peron IV'
            },
            {
                nodeID: 'platform-LodzKaliska_5',
                nodeType: 'platform',
                nodePos: { x: 1030, y: 525 },
                width: 60,
                height: 10,
                text: 'Peron V'
            },
            {
                nodeID: 'trackMarker-LodzKaliska_18',
                nodeType: 'trackMarker',
                nodePos: { x: 780, y: 430 },
                text: '18',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_207',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 460 },
                text: '207',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_205',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 480 },
                text: '205',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_203',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 500 },
                text: '203',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_201',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 520 },
                text: '201',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_202',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 540 },
                text: '202',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 360 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 380 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 400 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 420 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 440 },
                text: '6',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 460 },
                text: '8',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_151',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 500 },
                text: '151',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_152',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 520 },
                text: '152',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_154',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 540 },
                text: '154',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_32',
                nodeType: 'trackMarker',
                nodePos: { x: 1150, y: 560 },
                text: '32',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_13',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 380 },
                text: '13',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_101',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 400 },
                text: '101',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_102',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 420 },
                text: '102',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_18',
                nodeType: 'trackMarker',
                nodePos: { x: 1280, y: 470 },
                text: '18',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_30',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 540 },
                text: '30',
            },
        ]
    },
    "LODZKALISKA_LODZZABIENIEC": {
        "TRACKS": [
            {
                trackID: 'LODZKALISKA_LODZZABIENIEC',
                trackSVG: `
                M1490,400 1550,400
                M1490,420 1550,420
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": []
    },
    "2463_LZ_LODZZABIENIEC": {
        "TRACKS": [
            {
                trackID: '2463_LODZZABIENIEC',
                /*
                T1
                T2

                SW44/43 + SW42/41
                
                SW40/39 + SW38/37
                SW35/34 + SW33/32

                T7 + SW9ab
                T5 + SW9cd/8cd
                T6 + 13ab/12
                T8 + SW13cd

                SW8ab/7 + SW2/1

                 */
                trackSVG: `
                M1560,400 1620,400 M1630,400 1690,400 M1700,400 1740,400 M1750,400 1810,400 M1820,400 1910,400
                M1560,420 1620,420 M1630,420 1690,420 M1700,420 1740,420 M1750,420 1810,420 M1820,420 1910,420

                M1580,420 1582.5,415 1582.5,405 1585,400 M1605,400 1607.5,405 1607.5,415 1610,420

                M1710,400 1712.5,395 1712.5,385 1715,380 1725,380 1727.5,375 1727.5,365 1730,360 1740,360
                M1710,420 1712.5,425 1712.5,435 1715,440 1725,440 1727.5,445 1727.5,455 1730,460 1740,460

                M1735,360 1740,360 M1750,360 1810,360 M1820,360 1830,360 1832.5,365 1832.5,375 1835,380
                M1720,380 1740,380 M1750,380 1810,380 M1820,380 1845,380 1847.5,385 1847.5,395 1850,400
                M1720,440 1740,440 M1750,440 1810,440 M1820,440 1845,440 1847.5,435 1847.5,425 1850,420
                M1735,460 1740,460 M1750,460 1810,460 M1820,460 1830,460 1832.5,455 1832.5,445 1835,440

                M1860,400 1862.5,405 1862.5,415 1865,420 M1885,420 1887.5,415 1887.5,405 1890,400
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '2463_LZ_W',
                signalPos: { x: '1560', y: '400' },
                trainPos: { x: '1545', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_X',
                signalPos: { x: '1560', y: '420' },
                trainPos: { x: '1545', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_U',
                signalPos: { x: '1620', y: '400' },
                trainPos: { x: '1635', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_T',
                signalPos: { x: '1620', y: '420' },
                trainPos: { x: '1635', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_R',
                signalPos: { x: '1700', y: '400' },
                trainPos: { x: '1685', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_S',
                signalPos: { x: '1700', y: '420' },
                trainPos: { x: '1685', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2463_LZ_P',
                signalPos: { x: '1740', y: '360' },
                trainPos: { x: '1755', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_O',
                signalPos: { x: '1740', y: '380' },
                trainPos: { x: '1755', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_N',
                signalPos: { x: '1740', y: '400' },
                trainPos: { x: '1755', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_M',
                signalPos: { x: '1740', y: '420' },
                trainPos: { x: '1755', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_L',
                signalPos: { x: '1740', y: '440' },
                trainPos: { x: '1755', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_K',
                signalPos: { x: '1740', y: '460' },
                trainPos: { x: '1755', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '2463_LZ_C',
                signalPos: { x: '1820', y: '360' },
                trainPos: { x: '1805', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_D',
                signalPos: { x: '1820', y: '380' },
                trainPos: { x: '1805', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_E',
                signalPos: { x: '1820', y: '400' },
                trainPos: { x: '1805', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_F',
                signalPos: { x: '1820', y: '420' },
                trainPos: { x: '1805', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_G',
                signalPos: { x: '1820', y: '440' },
                trainPos: { x: '1805', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_H',
                signalPos: { x: '1820', y: '460' },
                trainPos: { x: '1805', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2463_LZ_B',
                signalPos: { x: '1910', y: '400' },
                trainPos: { x: '1925', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_A',
                signalPos: { x: '1910', y: '420' },
                trainPos: { x: '1925', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-LodzZabieniec',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1675, y: 445 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-LodzZabieniec',
                nodeType: 'stationName',
                stationPrefix: 'LZ',
                stationName: 'Łódź Żabieniec',
                nodePos: { x: 1780, y: 330 },
                nodePosFlipped: { x: 1780, y: 490 }
            },
            {
                nodeID: 'platform-LodzZabieniec_2',
                nodeType: 'platform',
                nodePos: { x: 1632.5, y: 385 },
                width: 55,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-LodzZabieniec_1',
                nodeType: 'platform',
                nodePos: { x: 1632.5, y: 425 },
                width: 55,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_1c',
                nodeType: 'trackMarker',
                nodePos: { x: 1660, y: 400 },
                text: '1c',
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_2b',
                nodeType: 'trackMarker',
                nodePos: { x: 1660, y: 420 },
                text: '2b',
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 360 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 380 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 400 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 420 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 440 },
                text: '6',
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 460 },
                text: '8',
            },
        ]
    },
    "LODZZABIENIEC_ZGIERZ": {
        "TRACKS": [
            {
                trackID: 'LODZZABIENIEC_ZGIERZ',
                trackSVG: `
                M1920,400 1980,400
                M1920,420 1980,420
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
            {
                nodeID: "text-po-LodzRadogoszczZachod",
                nodeType: "simpleText",
                nodePos: { x: 1950, y: 360 },
                nodePosFlipped: { x: 1950, y: 445 },
                text: "Łódź Radogoszcz Zachód",
                textSize: 12
            },
            {
                nodeID: 'platform-LodzRadogoszczZachod-1',
                nodeType: 'platform',
                nodePos: { x: 1930, y: 387.5 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'platform-LodzRadogoszczZachod-2',
                nodeType: 'platform',
                nodePos: { x: 1930, y: 425 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_Zgierz_1Z',
                nodeType: 'trackMarker',
                nodePos: { x: 1950, y: 400 },
                text: '1Z',
            },
            {
                nodeID: 'trackMarker-LodzZabieniec_Zgierz_2Z',
                nodeType: 'trackMarker',
                nodePos: { x: 1950, y: 420 },
                text: '2Z',
            },
        ]
    },
    "5311_Zg_ZGIERZ": {
        "TRACKS": [
            {
                trackID: '5311_ZGIERZ',
                /*
                T5
                T3
                *TOR 1M (Lodz Widzew)

                *SW41/40 + SW37/31 + SW30ab/28ab
                *SW39 + T1
                *SW35cd/30ab
                *SW32 + T4 + SW5ab
                *SW22 + T6 + SW7

                *SW38/34 + T7 + SW4

                *SW5cd/3 + SW2/1cd
                */
                trackSVG: `
                M1990,400 2110,400 M2120,400 2180,400 M2190,400 2200,400 2202.5,405 2202.5,415 2205,420
                M1990,420 2110,420 M2120,420 2180,420 M2190,420 2280,420
                M1990,480 2015,480 2017.5,475 2017.5,465 2020,460 2035,460 2037.5,455 2037.5,445 2040,440

                M2010,400 2012.5,405 2012.5,415 2015,420 M2035,420 2037.5,415 2037.5,405 2040,400 M2065,420 2067.5,415 2067.5,405 2070,400
                M2025,420 2027.5,425 2027.5,435 2030,440 2110,440 M2120,440 2180,440 M2190,440 2280,440
                M2050,440 2052.5,435 2052.5,425 2055,420
                M2065,440 2067.5,445 2067.5,455 2070,460 2110,460 M2120,460 2180,460 M2190,460 2215,460 2217.5,455 2217.5,445 2220,440
                M2090,460 2092.5,465 2092.5,475 2095,480 2110,480 M2120,480 2180,480 M2190,480 2200,480 2202.5,475 2202.5,465 2205,460
                
                M2025,400 2027.5,395 2027.5,385 2030,380 2110,380 M2120,380 2180,380 M2190,380 2215,380 2217.5,385 2217.5,415 2220,420
                M2080,400 2082.5,397 2082.5,393 2085,390 2095,390 2097.5,387 2097.5,383 2100,380

                M2230,440 2232.5,435 2232.5,425 2235,420 M2255,420 2257.5,425 2257.5,435 2260,440
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '5311_Zg_T',
                signalPos: { x: '1990', y: '400' },
                trainPos: { x: '1975', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_S',
                signalPos: { x: '1990', y: '420' },
                trainPos: { x: '1975', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_R',
                signalPos: { x: '1990', y: '480' },
                trainPos: { x: '1975', y: '480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
                //! distance: 6084m
                trainPosDistance: [
                    { distanceToSignal: 5810, x: 1537.5, y: 600, switchDirection: false },
                    { distanceToSignal: 5227, x: 1605, y: 600, switchDirection: false },
                    { distanceToSignal: 4060, x: 1665, y: 600, switchDirection: false },
                    { distanceToSignal: 3905, x: 1725, y: 600, switchDirection: false },
                    { distanceToSignal: 2485, x: 1785, y: 600, switchDirection: false },
                    { distanceToSignal: 2330, x: 1845, y: 600, switchDirection: false },
                    { distanceToSignal: 1150, x: 1905, y: 600, switchDirection: false },
                    { distanceToSignal: 0, x: 1975, y: 480, switchDirection: false },
                ]
            },

            {
                signalName: '5311_Zg_K',
                signalPos: { x: '2110', y: '380' },
                trainPos: { x: '2125', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_L',
                signalPos: { x: '2110', y: '400' },
                trainPos: { x: '2125', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_M',
                signalPos: { x: '2110', y: '420' },
                trainPos: { x: '2125', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_N',
                signalPos: { x: '2110', y: '440' },
                trainPos: { x: '2125', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_O',
                signalPos: { x: '2110', y: '460' },
                trainPos: { x: '2125', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_P',
                signalPos: { x: '2110', y: '480' },
                trainPos: { x: '2125', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '5311_Zg_H',
                signalPos: { x: '2190', y: '380' },
                trainPos: { x: '2175', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_G',
                signalPos: { x: '2190', y: '400' },
                trainPos: { x: '2175', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_F',
                signalPos: { x: '2190', y: '420' },
                trainPos: { x: '2175', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_E',
                signalPos: { x: '2190', y: '440' },
                trainPos: { x: '2175', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_D',
                signalPos: { x: '2190', y: '460' },
                trainPos: { x: '2175', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_C',
                signalPos: { x: '2190', y: '480' },
                trainPos: { x: '2175', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5311_Zg_A',
                signalPos: { x: '2280', y: '420' },
                trainPos: { x: '2295', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_B',
                signalPos: { x: '2280', y: '440' },
                trainPos: { x: '2295', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Zgierz',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2037.5, y: 470 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Zgierz',
                nodeType: 'stationName',
                stationPrefix: 'Zg',
                stationName: 'Zgierz',
                nodePos: { x: 2120, y: 340 },
                nodePosFlipped: { x: 2130, y: 510 }
            },
            {
                nodeID: 'platform-Zgierz_1',
                nodeType: 'platform',
                nodePos: { x: 2135, y: 365 },
                width: 45,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Zgierz_2',
                nodeType: 'platform',
                nodePos: { x: 2135, y: 405 },
                width: 45,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Zgierz_3',
                nodeType: 'platform',
                nodePos: { x: 2135, y: 445 },
                width: 45,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'trackMarker-Zgierz_7',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 380 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-Zgierz_5',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 400 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Zgierz_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 420 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Zgierz_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 440 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Zgierz_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 460 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Zgierz_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 480 },
                text: '6',
            },
        ]
    },
    "ZGIERZ_5317_ZP_ZGIERZPOLNOC_1057_Gl_GLINNIK": {
        "TRACKS": [
            {
                trackID: 'ZGIERZ_ZGIERZ_POLNOC_GLINNIK',
                trackSVG: `
                M2290,420 2352.5,420 2355,415 2355,385 2357.5,380 2420,380
                M2290,440 2352.5,440 2355,445 2355,475 2357.5,480 2420,480
                `,
                trackColor: 'gray'
            },
            {
                trackID: 'ZGIERZ_POLNOC__GLINNIK',
                trackSVG: `
                M2430,380 2450,380 M2460,380 2520,380 M2530,380 2535,380 M2540,380 2545,380 M2550,380 2555,380
                M2440,380 2442.5,385 2442.5,395 2445,400 2450,400 M2460,400 2520,400 M2530,400 2535,400 M2540,400 2545,400 M2550,400 2555,400

                M2430,480 2450,480 M2460,480 2520,480 M2530,480 2535,480 M2540,480 2545,480 M2550,480 2555,480
                M2440,480 2442.5,475 2442.5,465 2445,460 2450,460 M2460,460 2520,460 M2530,460 2535,460 M2540,460 2545,460 M2550,460 2555,460
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //ZGIERZ POLNOC
            {
                signalName: '5314_ZP_B',
                signalPos: { x: '2430', y: '380' },
                trainPos: { x: '2415', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_E',
                signalPos: { x: '2450', y: '380' },
                trainPos: { x: '2465', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_D',
                signalPos: { x: '2450', y: '400' },
                trainPos: { x: '2465', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_K',
                signalPos: { x: '2530', y: '380' },
                trainPos: { x: '2515', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_L',
                signalPos: { x: '2530', y: '400' },
                trainPos: { x: '2515', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            // Glinnik
            //
            {
                signalName: '1057_Gl_F',
                signalPos: { x: '2430', y: '480' },
                trainPos: { x: '2415', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '1057_Gl_E',
                signalPos: { x: '2450', y: '460' },
                trainPos: { x: '2465', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '1057_Gl_D',
                signalPos: { x: '2450', y: '480' },
                trainPos: { x: '2465', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '1057_Gl_C',
                signalPos: { x: '2530', y: '460' },
                trainPos: { x: '2515', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '1057_Gl_B',
                signalPos: { x: '2530', y: '480' },
                trainPos: { x: '2515', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
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
        ]
    },
    "LODZKALISKA_LODZCHOJNY": {
        "TRACKS": [
            {
                trackID: 'LODZKALISKA_LODZCHOJNY',
                trackSVG: `
                M570,520 470,520 M450,520 350,520 M340,520 310,520 307.5,525 307.5,815 310,820 340,820 M350,820 410,820
                M570,540 470,540 M450,540 350,540 M340,540 330,540 327.5,545 327.5,795 330,800 340,800 M350,800 410,800
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            // WRONG ORDER - NOW RIGHT TO LEFT TR/BR/TL/BL
            {
                signalName: 'L25_33',
                signalPos: { x: '460', y: '520' },
                trainPos: { x: '475', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L25_32N',
                signalPos: { x: '460', y: '540' },
                trainPos: { x: '475', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L25_33N',
                signalPos: { x: '460', y: '520' },
                trainPos: { x: '445', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L25_32',
                signalPos: { x: '460', y: '540' },
                trainPos: { x: '445', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },

            {
                signalName: 'L25_47',
                signalPos: { x: '340', y: '520' },
                trainPos: { x: '355', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L25_46N',
                signalPos: { x: '340', y: '540' },
                trainPos: { x: '355', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L25_47N',
                signalPos: { x: '340', y: '820' },
                trainPos: { x: '355', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L25_46',
                signalPos: { x: '340', y: '800' },
                trainPos: { x: '355', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-LodzKaliska_LodzChojny_21',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 520 },
                text: '21',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_LodzChojny_32',
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
                nodeID: 'trackMarker-LodzKaliska_LodzChojny_33',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 520 },
                text: '33',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_LodzChojny_46',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 540 },
                text: '46',
            },
            // TURN AROUND
            {
                nodeID: 'trackMarker-LodzKaliska_LodzChojny_62',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 800 },
                text: '62',
            },
            {
                nodeID: 'trackMarker-LodzKaliska_LodzChojny_47',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 820 },
                text: '47',
            },
        ]
    },
    "2426_LCH_LODZCHOJNY": {
        "TRACKS": [
            {
                trackID: '2426_LODZCHOJNY',
                /*
                T2
                T1

                SW3/4

                SW10/11/12

                SW7/8/9
                */
                trackSVG: `
                M430,800 500,800 M510,800 570,800 M580,800 690,800
                M430,820 470,820 M480,820 540,820 M550,820 690,820

                M440,820 442.5,815 442.5,805 445,800

                M485,780 487.5,775 487.5,765 490,760 500,760 M510,760 570,760 M580,760 590,760 592.5,765 592.5,775 595,780
                M470,800 472.5,795 472.5,785 475,780 500,780 M510,780 570,780 M580,780 605,780 607.5,785 607.5,795 610,800
                

                M455,820 457.5,825 457.5,835 460,840 470,840 M480,840 540,840 M550,840 560,840 562.5,835 562.5,825 565,820

                M585,820 587.5,815 587.5,805 590,800 M625,800 627.5,805 627.5,815 630,820 M650,800 652.5,805 652.5,815 655,820

                M665,820 667.5,825 667.5,995 670,1000 690,1000
                M640,820 642.5,825 642.5,1015 645,1020 690,1020
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '2426_LCH_X',
                signalPos: { x: '420', y: '800' },
                trainPos: { x: '405', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_sz'
            },
            {
                signalName: '2426_LCH_A',
                signalPos: { x: '420', y: '820' },
                trainPos: { x: '405', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_X22',
                signalPos: { x: '420', y: '800' },
                trainPos: { x: '435', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_A12',
                signalPos: { x: '420', y: '820' },
                trainPos: { x: '435', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },

            {
                signalName: '2426_LCH_D',
                signalPos: { x: '500', y: '760' },
                trainPos: { x: '515', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_C',
                signalPos: { x: '500', y: '780' },
                trainPos: { x: '515', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_B',
                signalPos: { x: '500', y: '800' },
                trainPos: { x: '515', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_F',
                signalPos: { x: '470', y: '820' },
                trainPos: { x: '485', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_sz'
            },
            {
                signalName: '2426_LCH_E',
                signalPos: { x: '470', y: '840' },
                trainPos: { x: '485', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_sz'
            },

            {
                signalName: '2426_LCH_G',
                signalPos: { x: '580', y: '760' },
                trainPos: { x: '565', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_H',
                signalPos: { x: '580', y: '780' },
                trainPos: { x: '565', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_M',
                signalPos: { x: '580', y: '800' },
                trainPos: { x: '565', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_sz'
            },
            {
                signalName: '2426_LCH_J',
                signalPos: { x: '550', y: '820' },
                trainPos: { x: '535', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_K',
                signalPos: { x: '550', y: '840' },
                trainPos: { x: '535', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },

            {
                signalName: '2426_LCH_R',
                signalPos: { x: '690', y: '800' },
                trainPos: { x: '705', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_S',
                signalPos: { x: '690', y: '820' },
                trainPos: { x: '705', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2426_LCH_P',
                signalPos: { x: '690', y: '1000' },
                trainPos: { x: '705', y: '1000' },
                trainPosDistance: [
                    { distanceToSignal: 2860, x: 865, y: 1000 },
                    { distanceToSignal: 2750, x: 825, y: 1000 },
                    { distanceToSignal: 2250, x: 795, y: 1000 },
                    { distanceToSignal: 2040, x: 775, y: 1000 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_O',
                signalPos: { x: '690', y: '1020' },
                trainPos: { x: '705', y: '1020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-LodzChojny',
                nodeType: 'dispatchingPost',
                nodePos: { x: 585, y: 830 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-LodzChojny',
                nodeType: 'stationName',
                stationPrefix: 'LCH',
                stationName: 'Łódź Chojny',
                nodePos: { x: 555, y: 725 },
                nodePosFlipped: { x: 525, y: 880 }
            },
            {
                nodeID: 'platform-LodzChojny_4',
                nodeType: 'platform',
                nodePos: { x: 517.5, y: 782.5 },
                width: 40,
                height: 10,
                text: 'Peron IV'
            },
            {
                nodeID: 'platform-LodzChojny_3',
                nodeType: 'platform',
                nodePos: { x: 517.5, y: 802.5 },
                width: 40,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'platform-LodzChojny_1',
                nodeType: 'platform',
                nodePos: { x: 480, y: 807.5 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker_LodzChojny_6',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 760 },
                text: '6',
            },
            {
                nodeID: 'trackMarker_LodzChojny_4',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 780 },
                text: '4',
            },
            {
                nodeID: 'trackMarker_LodzChojny_2',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 800 },
                text: '2',
            },
            {
                nodeID: 'trackMarker_LodzChojny_1',
                nodeType: 'trackMarker',
                nodePos: { x: 510, y: 820 },
                text: '1',
            },
            {
                nodeID: 'trackMarker_LodzChojny_3',
                nodeType: 'trackMarker',
                nodePos: { x: 510, y: 840 },
                text: '3',
            },
        ]
    },
    "LODZCHOJNY_2427_LD_LODZDABROWA_LODZWIDZEW_LODZFABRYCZNA": {
        "TRACKS": [
            {
                trackID: 'TRACKS_LODZCHOJNY_LODZWIDZEW',
                trackSVG: `
                M700,800 870,800
                M700,820 760,820 M770,820 800,820 M810,820 870,820
                M725,840 730,840 M735,840 740,840 M745,840 750,840 M755,840 760,840 M765,840 770,840 M780,840 785,840 787.5,835 787.5,825 790,820

                M725,760 730,760 M735,760 740,760 M745,760 750,760 M755,760 760,760 M765,760 770,760 M775,760 780,760 M785,760 790,760 M810,760 870,760
                M725,780 730,780 M735,780 740,780 M745,780 750,780 M755,780 760,780 M765,780 770,780 M775,780 780,780 M785,780 790,780 M810,780 870,780
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            //~ Lodz Dabrowa
            {
                signalName: '2427_LD_A',
                signalPos: { x: '770', y: '820' },
                trainPos: { x: '755', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'apo-red-green',
            },
            {
                signalName: '2427_LD_B',
                signalPos: { x: '780', y: '840' },
                trainPos: { x: '765', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'apo-red-green',
            },
            {
                signalName: '2427_LD_C',
                signalPos: { x: '800', y: '820' },
                trainPos: { x: '815', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'apo-red-green',
            },
            //~ Lodz Fabryczna
            {
                signalName: '2457_LW_B2',
                signalPos: { x: '800', y: '760' },
                trainPos: { x: '785', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_B1',
                signalPos: { x: '800', y: '780' },
                trainPos: { x: '785', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_C2',
                signalPos: { x: '800', y: '760' },
                trainPos: { x: '815', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_C1',
                signalPos: { x: '800', y: '780' },
                trainPos: { x: '815', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker_LodzChojny_LW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 800 },
                text: 'it2W',
            },
            {
                nodeID: 'trackMarker_LodzChojny_LW_1',
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
                nodeID: 'trackMarker_LodzChojny_LW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 800 },
                text: 'it2C',
            },
            {
                nodeID: 'trackMarker_LodzChojny_LW_1',
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
        ]
    },
    "2457_LW_LODZWIDZEW": {
        "TRACKS": [
            {
                trackID: '2457_LODZWIDZEW',
                /*
                MARYSIN TOR 1M + T4 + SW49/50

                FABRYCZNA TOR 2F + T2 + TOR 2A ANDREZJOW
                FABRYCZNA TOR 1F + T1 + TOR 1A ANDREZJOW

                CHONY TOR 1C + T3 + TOR 2O OLECHOW
                CHONY TOR 2C + T5 + TOR 1O OLECHOW

                *SW6/7 + SW8/9 + SW10/11
                *SW12/13 + SW15/16 + SW19/20 + SW27/28 + T7 + SW44/46

                SW14/17cd + SW17ab/18cd + SW18ab/21
                *SW22/23 + SW25/26

                SW21 + T104 + SW48
                SW28 + T102 + SW42

                T8
                T6

                SW51/53 + SW56/57 + SW60/61
                SW52/54 + SW58/59 + SW62/63
                */
                trackSVG: `
                M880,740 1030,740 M1040,740 1120,740 M1130,740 1190,740 1192.5,745 1192.5,755 1195,760

                M880,760 1030,760 M1040,760 1120,760 M1130,760 1270,760
                M880,780 1030,780 M1040,780 1120,780 M1130,780 1270,780

                M880,800 1030,800 M1040,800 1120,800 M1130,800 1180,800 1182.5,805 1182.5,815 1185,820 1270,820
                M880,820 1030,820 M1040,820 1120,820 M1130,820 1160,820 1162.5,825 1162.5,835 1165,840 1270,840

                M900,820 902.5,815 902.5,805 905,800 M915,800 917.5,795 917.5,785 920,780 M930,780 932.5,775 932.5,765 935,760
                M945,760 947.5,765 947.5,775 950,780 M960,780 962.5,785 962.5,795 965,800 M975,800 977.5,805 977.5,815 980,820 M990,820 992.5,825 992.5,835 995,840 1030,840 M1040,840 1120,840 M1130,840 1140,840 1142.5,835 1142.5,825 1145,820
                
                M955,760 957.5,755 957.5,745 960,740 M970,740 972.5,735 972.5,725 975,720 985,720 987.5,715 987.5,705 990,700 1005,700
                M1000,720 1002.5,725 1002.5,735 1005,740 M1015,740 1017.5,745 1017.5,755 1020,760

                M1000,700 1002.5,695 1002.5,645 1005,640 1015,640 1050,640 M1060,640 1120,640 M1130,640 1170,640 1172.5,645 1172.5,735 1175,740
                M1035,640 1037.5,645 1037.5,655 1040,660 1050,660 M1060,660 1120,660 M1130,660 1140,660 1142.5,655 1142.6,645 1145,640

                M1005,700 1030,700 M1040,700 1120,700 M1130,700 1140,700 1142.5,705 1142.5,715 1145,720
                M980,720 1030,720 M1040,720 1120,720 M1130,720 1155,720 1157.5,725 1157.5,735 1160,740

                M1205,760 1207.5,765 1207.5,775 1210,780 M1220,780 1222.5,785 1222.5,815 1225,820 M1250,820 1252.5,825 1252.5,835 1255,840
                M1205,840 1207.5,835 1207.5,825 1210,820 M1235,820 1237.5,815 1237.5,785 1240,780 M1250,780 1252.5,775 1252.5,765 1255,760
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            // ENTRY SIGNALS LEFT SIDE
            {
                signalName: '2457_LW_A',
                signalPos: { x: '880', y: '740' },
                trainPos: { x: '865', y: '740' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
                trainPosDistance: [
                    { distanceToSignal: 4910, x: 1382.5, y: 600, switchDirection: true },
                    { distanceToSignal: 2020, x: 1315, y: 600, switchDirection: true },
                    { distanceToSignal: 1870, x: 1255, y: 600, switchDirection: true },
                    { distanceToSignal: 1100, x: 1195, y: 600, switchDirection: true },
                    { distanceToSignal: 500, x: 825, y: 740, switchDirection: false },
                    { distanceToSignal: 0, x: 865, y: 740, switchDirection: false },
                ]
            },
            {
                signalName: '2457_LW_D',
                signalPos: { x: '880', y: '760' },
                trainPos: { x: '865', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_E',
                signalPos: { x: '880', y: '780' },
                trainPos: { x: '865', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_G',
                signalPos: { x: '880', y: '800' },
                trainPos: { x: '865', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_H',
                signalPos: { x: '880', y: '820' },
                trainPos: { x: '865', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // EXIT SIGNALS LEFT SIDE
            {
                signalName: '2457_LW_N104',
                signalPos: { x: '1050', y: '640' },
                trainPos: { x: '1065', y: '640' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_N102',
                signalPos: { x: '1050', y: '660' },
                trainPos: { x: '1065', y: '660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_M8',
                signalPos: { x: '1030', y: '700' },
                trainPos: { x: '1045', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_M6',
                signalPos: { x: '1030', y: '720' },
                trainPos: { x: '1045', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_M4',
                signalPos: { x: '1030', y: '740' },
                trainPos: { x: '1045', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L2',
                signalPos: { x: '1030', y: '760' },
                trainPos: { x: '1045', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L1',
                signalPos: { x: '1030', y: '780' },
                trainPos: { x: '1045', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L3',
                signalPos: { x: '1030', y: '800' },
                trainPos: { x: '1045', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L5',
                signalPos: { x: '1030', y: '820' },
                trainPos: { x: '1045', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L7',
                signalPos: { x: '1030', y: '840' },
                trainPos: { x: '1045', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // EXIT SIGNALS RIGHT SIDE
            {
                signalName: '2457_LW_P104',
                signalPos: { x: '1130', y: '640' },
                trainPos: { x: '1115', y: '640' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_P102',
                signalPos: { x: '1130', y: '660' },
                trainPos: { x: '1115', y: '660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_R8',
                signalPos: { x: '1130', y: '700' },
                trainPos: { x: '1115', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_R6',
                signalPos: { x: '1130', y: '720' },
                trainPos: { x: '1115', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_R4',
                signalPos: { x: '1130', y: '740' },
                trainPos: { x: '1095', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S2',
                signalPos: { x: '1130', y: '760' },
                trainPos: { x: '1095', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S1',
                signalPos: { x: '1130', y: '780' },
                trainPos: { x: '1095', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S3',
                signalPos: { x: '1130', y: '800' },
                trainPos: { x: '1095', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S5',
                signalPos: { x: '1130', y: '820' },
                trainPos: { x: '1095', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S7',
                signalPos: { x: '1130', y: '840' },
                trainPos: { x: '1095', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // ENTRY SIGNALS RIGHT SIDE
            {
                signalName: '2457_LW_W',
                signalPos: { x: '1270', y: '760' },
                trainPos: { x: '1285', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_V',
                signalPos: { x: '1270', y: '780' },
                trainPos: { x: '1285', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2457_LW_U',
                signalPos: { x: '1270', y: '820' },
                trainPos: { x: '1285', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_T',
                signalPos: { x: '1270', y: '840' },
                trainPos: { x: '1285', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-LodzWidzew',
                nodeType: 'dispatchingPost',
                nodePos: { x: 920, y: 830 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-LodzWidzew',
                nodeType: 'stationName',
                stationPrefix: 'LW',
                stationName: 'Łódź Widzew',
                nodePos: { x: 1080, y: 615 },
                nodePosFlipped: { x: 1080, y: 875 }
            },
            {
                nodeID: 'platform-LodzWidzew_3',
                nodeType: 'platform',
                nodePos: { x: 1042.5, y: 745 },
                width: 60,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'platform-LodzWidzew_2',
                nodeType: 'platform',
                nodePos: { x: 1042.5, y: 785 },
                width: 60,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-LodzWidzew_1',
                nodeType: 'platform',
                nodePos: { x: 1042.5, y: 825 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-LodzWidzew_104',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 640 },
                text: '104',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_102',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 660 },
                text: '102',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 700 },
                text: '8',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 720 },
                text: '6',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 740 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 760 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 780 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 800 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 820 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 840 },
                text: '7',
            },
        ]
    },
    "2437_LM_LODZMARYSIN": {
        "TRACKS": [
            {
                trackID: 'TRACKS_LODZWIDZEW_LODZMARYSIN',
                trackSVG: `
                M760,730 770,740 870,740

                M1180,610 1190,600 1370,600

                M1550,600 1912.5,600 1915,595 1915,485 1917.5,480 1980,480
                `,
                trackColor: 'gray'
            },
            {
                trackID: '2437_LODZMARYSIN',
                trackSVG: `
                M1380,600 1420,600 M1430,600 1490,600 M1500,600 1540,600
                M1400,600 1402.5,605 1402.5,615 1405,620 1420,620 M1430,620 1490,620 M1500,620 1515,620 1517.5,615 1517.5,605 1520,600
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '2437_LM_A',
                signalPos: { x: '1380', y: '600' },
                trainPos: { x: '1365', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
                trainPosDistance: [
                    { distanceToSignal: 4912, x: 885, y: 740, switchDirection: true },
                    { distanceToSignal: 4300, x: 815, y: 740, switchDirection: true },
                    { distanceToSignal: 3700, x: 775, y: 740, switchDirection: true },
                    { distanceToSignal: 3045, x: 1245, y: 600, switchDirection: false },
                    { distanceToSignal: 2890, x: 1305, y: 600, switchDirection: false },
                    { distanceToSignal: 0, x: 1365, y: 600, switchDirection: false },
                ]
            },

            {
                signalName: '2437_LM_D',
                signalPos: { x: '1420', y: '600' },
                trainPos: { x: '1435', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2437_LM_C',
                signalPos: { x: '1420', y: '620' },
                trainPos: { x: '1435', y: '620' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '2437_LM_E',
                signalPos: { x: '1500', y: '600' },
                trainPos: { x: '1485', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2437_LM_F',
                signalPos: { x: '1500', y: '620' },
                trainPos: { x: '1485', y: '620' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '2437_LM_H',
                signalPos: { x: '1540', y: '600' },
                trainPos: { x: '1555', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
                //! distance: 6243m
                trainPosDistance: [
                    { distanceToSignal: 4400, x: 1925, y: 480 },
                    { distanceToSignal: 3480, x: 1855, y: 600 },
                    { distanceToSignal: 3330, x: 1795, y: 600 },
                    { distanceToSignal: 1910, x: 1735, y: 600 },
                    { distanceToSignal: 1750, x: 1675, y: 600 },
                    { distanceToSignal: 590, x: 1615, y: 600 },
                    { distanceToSignal: 0, x: 1555, y: 600 },
                ]
            },
        ],
        "NODES": [
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
        ]
    },
    "2439_LOA_B_C_LODZOLECHOW": {
        "TRACKS": [
            {
                trackID: 'LODZCHOJNY_LODZOLECHOW',
                trackSVG: `
                M700,1000 760,1000
                M700,1020 760,1020

                M1280,820 1340,820
                M1280,840 1340,840
                `,
                trackColor: 'gray'
            },
            {
                trackID: '2439_LODZOLECHOW_NPT',
                trackSVG: `
                M1430,840 1432.5,845 1432.5,855 1430,860 1420,860 
                M1445,840 1447.5,845 1447.5,875 1445,880 1430,880
                M1345,860 1350,860 M1355,860 1360,860 M1365,860 1370,860 M1375,860 1380,860 M1385,860 1390,860 M1395,860 1400,860 M1405,860 1410,860
                M1345,880 1350,880 M1355,880 1360,880 M1365,880 1370,880 M1375,880 1380,880 M1385,880 1390,880 M1395,880 1400,880 M1405,880 1410,880 M1415,880 1420,880

                M1345,900 1350,900 M1355,900 1360,900 M1365,900 1370,900 M1375,900 1380,900 M1385,900 1390,900 M1395,900 1400,900 M1405,900 1410,900 M1415,900 1420,900 M1425,900 1430,900 M1435,900 1440,900
                M1445,900 1450,900 M1455,900 1460,900 M1465,900 1470,900 M1475,900 1480,900 M1485,900 1490,900 M1495,900 1500,900 M1505,900 1510,900 M1515,900 1517.5,900
                M1542.5,900 1545,900 M1550,900 1555,900 M1560,900 1565,900 M1570,900 1575,900 M1580,900 1585,900 M1590,900 1595,900 M1600,900 1605,900

                M1345,920 1350,920 M1355,920 1360,920 M1365,920 1370,920 M1375,920 1380,920 M1385,920 1390,920 M1395,920 1400,920 M1405,920 1410,920 M1415,920 1420,920 M1425,920 1430,920 M1435,920 1440,920
                M1445,920 1450,920 M1455,920 1460,920 M1465,920 1470,920 M1475,920 1480,920 M1485,920 1490,920 M1495,920 1500,920 M1505,920 1510,920 M1515,920 1517.5,920
                M1542.5,920 1545,920 M1550,920 1555,920 M1560,920 1565,920 M1570,920 1575,920 M1580,920 1585,920 M1590,920 1595,920

                M1620,900 1635,900 1637.5,905 1637.5,935 1640,940
                M1610,920 1620,920 1622.5,925 1622.5,935 1625,940
                `,
                trackColor: 'rgba(255,255,255,0.15)'
            },
            {
                trackID: '2439_LODZOLECHOW',
                trackSVG: `
                M770,1000 920,1000
                M770,1020 920,1020
                M790,1020 792.5,1015 792.5,1005 795,1000 M805,1020 807.5,1015 807.5,1005 810,1000 M830,1000 832.5,1005 832.5,1015 835,1020

                M930,1000 1140,1000
                M930,1020 1100,1020

                M1150,1000 1190,1000
                M1110,1020 1180,1020
                M1160,1020 1162.5,1015 1162.5,1005 1165,1000 M1175,1000 1177.5,995 1177.5,985 1180,980 1190,980

                M1200,980 1255,980 1257.5,975 1257.5,965 1260,960 1330,960
                M1200,1000 1260,1000
                M1190,1020 1260,1020

                M1270,1000 1440,1000
                M1270,1020 1420,1020
                M1340,960 1350,960 1352.5,965 1352.5,995 1355,1000

                M1365,1000 1385,1020 M1365,1020 1385,1000

                M1400,1000 1402.5,995 1402.5,945 1405,940 1420,940
                M1410,1020 1412.5,1015 1412.5,1005 1415,1000 M1425,1000 1427.5,995 1427.5,965 1430,960 1440,960

                M1430,940 1517.5,940 M1542.5,940 1600,940
                M1450,960 1517.5,960 M1542.5,960 1610,960
                M1610,940 1680,940
                M1620,960 1680,960
                
                M1630,940 1632.5,945 1632.5,955 1635,960
                M1650,940 1670,960 M1650,960 1670,940

                M1450,1000 1520,1000 1522.5,995 1522.5,845 1520,840 1470,840
                M1430,1020 1535,1020 1537.5,1015 1537.5,825 1535,820 1470,820
                M1435,820 1437.5,825 1437.5,835 1440,840
                M1360,820 1460,820
                M1360,840 1460,840
                M1400,820 1420,840 M1400,840 1420,820
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!! SIGNALS IN LODZ OLECHOW ARE THE FIRST SIGNALS WITH A DISTANCE POSITIONING OF TRAINS !!!
            // !!!                     ALWAYS KEEP A NORMAL TRAINPOS AS FALLBACK                       !!!
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            {
                signalName: '2439_LOA_C',
                signalPos: { x: '770', y: '1000' },
                trainPos: { x: '755', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOA_D',
                signalPos: { x: '770', y: '1020' },
                trainPos: { x: '755', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOA_E12',
                signalPos: { x: '920', y: '1000' },
                trainPos: { x: '935', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // 2210m
                    { distanceToSignal: 1750, x: 1155, y: 1000 },
                    { distanceToSignal: 1500, x: 1085, y: 1000 },
                    { distanceToSignal: 950, x: 1050, y: 1000 },
                    { distanceToSignal: 750, x: 990, y: 1000 },
                ]
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOA_E11',
                signalPos: { x: '920', y: '1020' },
                trainPos: { x: '935', y: '1020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // LODZ OLECHOW [LOB]
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOB_N12',
                signalPos: { x: '1150', y: '1000' },
                trainPos: { x: '1135', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOB_N11',
                signalPos: { x: '1110', y: '1020' },
                trainPos: { x: '1095', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 2200, x: 825, y: 1020 },
                    { distanceToSignal: 1900, x: 860, y: 1020 },
                    { distanceToSignal: 1570, x: 915, y: 1020 },
                    { distanceToSignal: 830, x: 985, y: 1020 },
                    { distanceToSignal: 625, x: 1040, y: 1020 },
                ]
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOB_O24',
                signalPos: { x: '1190', y: '980' },
                trainPos: { x: '1205', y: '980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOB_O22',
                signalPos: { x: '1190', y: '1000' },
                trainPos: { x: '1205', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 1490, x: 1385, y: 1000 },
                    { distanceToSignal: 1390, x: 1355, y: 1000 },
                    { distanceToSignal: 1270, x: 1345, y: 1000 },
                    { distanceToSignal: 1060, x: 1290, y: 1000 },
                    { distanceToSignal: 940, x: 1275, y: 1000 },
                ]
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOB_O21',
                signalPos: { x: '1180', y: '1020' },
                trainPos: { x: '1195', y: '1020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // LODZ OLECHOW [LOC]
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOC_T22',
                signalPos: { x: '1270', y: '1000' },
                trainPos: { x: '1255', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOC_T21',
                signalPos: { x: '1270', y: '1020' },
                trainPos: { x: '1255', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 1160, x: 1175, y: 1020 },
                ]
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOC_T24',
                signalPos: { x: '1340', y: '960' },
                trainPos: { x: '1325', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '2439_LOC_V32',
                signalPos: { x: '1420', y: '940' },
                trainPos: { x: '1433.5', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 1080, x: 1615, y: 940 },
                    { distanceToSignal: 720, x: 1545.5, y: 940 },
                    { distanceToSignal: 500, x: 1462.5, y: 940 },
                ]
            },
            {
                signalName: '2439_LOC_V31',
                signalPos: { x: '1440', y: '960' },
                trainPos: { x: '1453.5', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_V41',
                signalPos: { x: '1440', y: '1000' },
                trainPos: { x: '1453.5', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // 1850m
                    { distanceToSignal: 1600, x: 1415, y: 840, switchDirection: true },
                    { distanceToSignal: 1160, x: 1455, y: 840, switchDirection: true },
                    { distanceToSignal: 730, x: 1525, y: 840, switchDirection: true },
                ]
            },
            {
                signalName: '2439_LOC_V42',
                signalPos: { x: '1420', y: '1020' },
                trainPos: { x: '1433.5', y: '1020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // SIGNALS FROM LODZ WIDZEW
            {
                signalName: '2439_LOC_Y2',
                signalPos: { x: '1350', y: '820' },
                trainPos: { x: '1335', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_Y1',
                signalPos: { x: '1350', y: '840' },
                trainPos: { x: '1335', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_X2',
                signalPos: { x: '1350', y: '820' },
                trainPos: { x: '1365', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // 466m
                    { distanceToSignal: 80, x: 1400, y: 820 },
                ]
            },
            {
                signalName: '2439_LOC_X1',
                signalPos: { x: '1350', y: '840' },
                trainPos: { x: '1365', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                //? NPT SIGNAL
                signalName: '2439_LOC_W43',
                signalPos: { x: '1420', y: '860' },
                trainPos: { x: '1405', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //? NPT SIGNAL
                signalName: '2439_LOC_W44',
                signalPos: { x: '1430', y: '880' },
                trainPos: { x: '1415', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOC_W42',
                signalPos: { x: '1460', y: '820' },
                trainPos: { x: '1475', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // DISTANCE FROM T21: 2000m
                    { distanceToSignal: 1660, x: 1340, y: 1020, switchDirection: true },
                    { distanceToSignal: 1470, x: 1375, y: 1020, switchDirection: true },
                    { distanceToSignal: 1260, x: 1415, y: 1020, switchDirection: true },
                    { distanceToSignal: 540, x: 1525, y: 1020, switchDirection: true },
                ]
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOC_W41',
                signalPos: { x: '1460', y: '840' },
                trainPos: { x: '1475', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // DISTANCE FROM T21: 1950
                    { distanceToSignal: 1610, x: 1340, y: 1020, switchDirection: true },
                    { distanceToSignal: 1470, x: 1365, y: 1020, switchDirection: true },
                    { distanceToSignal: 1160, x: 1435, y: 1000, switchDirection: true },
                    { distanceToSignal: 500, x: 1510, y: 1000, switchDirection: true },
                    // lower 625 -> return default trainPos
                ]
            },
            // SIGNALS FROM GALKOWEG
            {
                signalName: '2439_LOC_W34',
                signalPos: { x: '1620', y: '900' },
                trainPos: { x: '1605', y: '900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_W33',
                signalPos: { x: '1610', y: '920' },
                trainPos: { x: '1597.5', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_W32',
                signalPos: { x: '1610', y: '940' },
                trainPos: { x: '1597.5', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOC_W31',
                signalPos: { x: '1620', y: '960' },
                trainPos: { x: '1605', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOC_Z2',
                signalPos: { x: '1680', y: '940' },
                trainPos: { x: '1695', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                //! DISTANCE POSITIONING
                signalName: '2439_LOC_Z1',
                signalPos: { x: '1680', y: '960' },
                trainPos: { x: '1695', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: "simpleText-po_LodzOlechowWiadukt",
                nodeType: "simpleText",
                nodePos: { x: 890, y: 975 },
                nodePosFlipped: { x: 890, y: 1045 },
                text: "Łódź Olechów Wiadukt",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-LodzOlechowWiadukt_1',
                nodeType: 'platform',
                nodePos: { x: 860, y: 985 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-LodzOlechowWiadukt_2',
                nodeType: 'platform',
                nodePos: { x: 860, y: 1025 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: "simpleText-po_LodzOlechowZachod",
                nodeType: "simpleText",
                nodePos: { x: 1015, y: 955 },
                nodePosFlipped: { x: 1015, y: 1065 },
                text: "Łódź Olechów Zachód",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-LodzOlechowZachod_1',
                nodeType: 'platform',
                nodePos: { x: 985, y: 985 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-LodzOlechowZachod_2',
                nodeType: 'platform',
                nodePos: { x: 985, y: 1025 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: "simpleText-po_LodzOlechowWschod",
                nodeType: "simpleText",
                nodePos: { x: 1317.5, y: 940 },
                nodePosFlipped: { x: 1317.5, y: 1045 },
                text: "Łódź Olechów Wschód",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-LodzOlechowWschod_1',
                nodeType: 'platform',
                nodePos: { x: 1285, y: 985 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-LodzOlechowWschod_2',
                nodeType: 'platform',
                nodePos: { x: 1285, y: 1025 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'trackMarker-LOA_2',
                nodeType: 'trackMarker',
                nodePos: { x: 890, y: 1000 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-LOA_1',
                nodeType: 'trackMarker',
                nodePos: { x: 890, y: 1020 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-LOB_12',
                nodeType: 'trackMarker',
                nodePos: { x: 1015, y: 1000 },
                text: '12',
            },
            {
                nodeID: 'trackMarker-LOB_11',
                nodeType: 'trackMarker',
                nodePos: { x: 1015, y: 1020 },
                text: '11',
            },
            {
                nodeID: 'trackMarker-LOC_22a',
                nodeType: 'trackMarker',
                nodePos: { x: 1230, y: 1000 },
                text: '22a',
            },
            {
                nodeID: 'trackMarker-LOC_21a',
                nodeType: 'trackMarker',
                nodePos: { x: 1225, y: 1020 },
                text: '21a',
            },
            {
                nodeID: 'trackMarker-LOC_24a',
                nodeType: 'trackMarker',
                nodePos: { x: 1230, y: 980 },
                text: '24a',
            },
            {
                nodeID: 'trackMarker-LOC_24b',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 960 },
                text: '24b',
            },
            {
                nodeID: 'trackMarker-LOC_22b',
                nodeType: 'trackMarker',
                nodePos: { x: 1315, y: 1000 },
                text: '22b',
            },
            {
                nodeID: 'trackMarker-LOC_21b',
                nodeType: 'trackMarker',
                nodePos: { x: 1315, y: 1020 },
                text: '21b',
            },
        ]
    },
    "LODZWIDZEW_LODZOLECHOW_GALKOWEG": {
        "TRACKS": [
            {
                trackID: 'LODZWIDZEW_LODZOLECHOW_GALKOWEG',
                trackSVG: `
                M1280,760 1340,760 M1360,760 1420,760
                M1280,780 1340,780 M1360,780 1420,780
                
                M1510,760 1570,760 M1590,760 1650,760 M1670,760 1730,760 M1750,760 1810,760 M1830,760 1890,760
                M1510,780 1570,780 M1590,780 1650,780 M1670,780 1730,780 M1750,780 1810,780 M1830,780 1890,780

                M1690,940 1780,940 1782.5,935 1782.5,825 1785,820 1890,820
                M1690,960 1795,960 1797.5,955 1797.5,845 1800,840 1890,840
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L17_82N',
                signalPos: { x: '1350', y: '760' },
                trainPos: { x: '1335', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_81',
                signalPos: { x: '1350', y: '780' },
                trainPos: { x: '1335', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_82',
                signalPos: { x: '1350', y: '760' },
                trainPos: { x: '1365', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_81N',
                signalPos: { x: '1350', y: '780' },
                trainPos: { x: '1365', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //
            {
                signalName: 'L17_124N',
                signalPos: { x: '1580', y: '760' },
                trainPos: { x: '1565', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_121',
                signalPos: { x: '1580', y: '780' },
                trainPos: { x: '1565', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_124',
                signalPos: { x: '1580', y: '760' },
                trainPos: { x: '1595', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_121N',
                signalPos: { x: '1580', y: '780' },
                trainPos: { x: '1595', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //
            {
                signalName: 'L17_138N',
                signalPos: { x: '1660', y: '760' },
                trainPos: { x: '1645', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_137',
                signalPos: { x: '1660', y: '780' },
                trainPos: { x: '1645', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_138',
                signalPos: { x: '1660', y: '760' },
                trainPos: { x: '1675', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_137N',
                signalPos: { x: '1660', y: '780' },
                trainPos: { x: '1675', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            //
            {
                signalName: 'L17_152N',
                signalPos: { x: '1740', y: '760' },
                trainPos: { x: '1725', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_151',
                signalPos: { x: '1740', y: '780' },
                trainPos: { x: '1725', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_152',
                signalPos: { x: '1740', y: '760' },
                trainPos: { x: '1755', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_151N',
                signalPos: { x: '1740', y: '780' },
                trainPos: { x: '1755', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            //
            {
                signalName: 'L17_166N',
                signalPos: { x: '1820', y: '760' },
                trainPos: { x: '1805', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_167',
                signalPos: { x: '1820', y: '780' },
                trainPos: { x: '1805', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_166',
                signalPos: { x: '1820', y: '760' },
                trainPos: { x: '1835', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_167N',
                signalPos: { x: '1820', y: '780' },
                trainPos: { x: '1835', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-82',
                nodeType: 'trackMarker',
                nodePos: { x: 1310, y: 760 },
                text: '82',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-67',
                nodeType: 'trackMarker',
                nodePos: { x: 1310, y: 780 },
                text: '67',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-102',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 760 },
                text: '102',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-81',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 780 },
                text: '81',
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
                nodeID: 'trackMarker-LodzWidzew_Galkowek-124',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 760 },
                text: '124',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-107',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 780 },
                text: '107',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-138',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 760 },
                text: '138',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-121',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 780 },
                text: '121',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-152',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 760 },
                text: '152',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-137',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 780 },
                text: '137',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-166',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 760 },
                text: '166',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-151',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 780 },
                text: '151',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-180',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 760 },
                text: '180',
            },
            {
                nodeID: 'trackMarker-LodzWidzew_Galkowek-167',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 780 },
                text: '167',
            },
        ]
    },
    "2422_LA_LODZADRZEJOW": {
        "TRACKS": [
            {
                trackID: '2422_LODZADRZEJOW',
                trackSVG: `
                M1430,760 1500,760
                M1430,780 1500,780
                M1450,760 1452.5,765 1452.5,775 1455,780 M1475,780 1477.5,775 1477.5,765 1480,760
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '2422_LA_A',
                signalPos: { x: '1430', y: '760' },
                trainPos: { x: '1415', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2422_LA_B',
                signalPos: { x: '1430', y: '780' },
                trainPos: { x: '1415', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2422_LA_H',
                signalPos: { x: '1500', y: '760' },
                trainPos: { x: '1515', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2422_LA_G',
                signalPos: { x: '1500', y: '780' },
                trainPos: { x: '1515', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "NODES": [
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
        ]
    },
    "924_G_GALKOWEG": {
        "TRACKS": [
            {
                trackID: '924_GALKOWEG',
                /*
                T2
                T1
                T3
                T5

                SW3/4 + SW11/12
                SW1/2 + SW7/8
                SW5/6
                SW13/14

                SW9/10 + T7 + SW21/22


                */
                trackSVG: `
                M1900,760 1980,760 M1990,760 2050,760 M2060,760 2150,760
                M1900,780 1980,780 M1990,780 2050,780 M2060,780 2150,780
                M1900,820 1980,820 M1990,820 2050,820 M2060,820 2150,820
                M1900,840 1980,840 M1990,840 2050,840 M2060,840 2150,840

                M1920,760 1922.5,765 1922.5,775 1925,780 M1955,780 1957.5,775 1957.5,765 1960,760
                M1920,820 1922.5,825 1922.5,835 1925,840 M1940,840 1942.5,835 1942.5,825 1945,820
                M1932.5,820 1935,815 1935,785 1937.5,780
                M1962.5,820 1965,815 1965,785 1967.5,780

                M1950,840 1952.5,845 1952.5,855 1955,860 1980,860 M1990,860 2050,860 M2060,860 2070,860 2072.5,855 2072.5,845 2075,840

                M2085,840 2087.5,835 2087.5,825 2090,820 M2120,820 2122.5,825 2122.5,835 2125,840
                M2095,760 2097.5,765 2097.5,775 2100,780 M2130,780 2132.5,775 2132.5,765 2135,760
                M2080,780 2082.5,785 2082.5,795 2085,800 2095,800 2097.5,805 2097.5,815 2100,820
                M2115,780 2117.5,785 2117.5,795 2120,800 2130,800 2132.5,805 2132.5,815 2135,820
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '924_G_A',
                signalPos: { x: '1900', y: '760' },
                trainPos: { x: '1885', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_B',
                signalPos: { x: '1900', y: '780' },
                trainPos: { x: '1885', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_C',
                signalPos: { x: '1900', y: '820' },
                trainPos: { x: '1885', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_D',
                signalPos: { x: '1900', y: '840' },
                trainPos: { x: '1885', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_J',
                signalPos: { x: '1980', y: '760' },
                trainPos: { x: '1995', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_H',
                signalPos: { x: '1980', y: '780' },
                trainPos: { x: '1995', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_G',
                signalPos: { x: '1980', y: '820' },
                trainPos: { x: '1995', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_F',
                signalPos: { x: '1980', y: '840' },
                trainPos: { x: '1995', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_E',
                signalPos: { x: '1980', y: '860' },
                trainPos: { x: '1995', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_K',
                signalPos: { x: '2060', y: '760' },
                trainPos: { x: '2045', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_L',
                signalPos: { x: '2060', y: '780' },
                trainPos: { x: '2045', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_M',
                signalPos: { x: '2060', y: '820' },
                trainPos: { x: '2045', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_N',
                signalPos: { x: '2060', y: '840' },
                trainPos: { x: '2045', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_O',
                signalPos: { x: '2060', y: '860' },
                trainPos: { x: '2045', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_T',
                signalPos: { x: '2150', y: '760' },
                trainPos: { x: '2180', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_S',
                signalPos: { x: '2150', y: '780' },
                trainPos: { x: '2180', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_R',
                signalPos: { x: '2150', y: '820' },
                trainPos: { x: '2180', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_P',
                signalPos: { x: '2150', y: '840' },
                trainPos: { x: '2180', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //!!!
            //!!! AGAIN FOR KOLUSZKI AREA
            //!!!
            {
                signalName: '924_G_T',
                signalPos: { x: '790', y: '1340' },
                trainPos: { x: '820', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_S',
                signalPos: { x: '790', y: '1360' },
                trainPos: { x: '820', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Galkoweg',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2110, y: 720 },
                postType: 'computer',
                postRotationAngle: 180,
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
                nodeID: 'trackMarker-G_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 760 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-G_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 780 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-G_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 820 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-G_5',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 840 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-G_7',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 860 },
                text: '7',
            },
        ]
    },
    "GALKOWEG_KOLUSZKI": {
        "TRACKS": [
            {
                trackID: 'GALKOWEK_ZAKOWICEPOLUDNIOWE_TO_KOLUSZKI_1',
                trackSVG: `
                M2160,760 2260,760 M2280,760 2380,760 M2390,760 2400,760 2410,770
                M2160,780 2260,780 M2280,780 2380,780 M2390,780 2400,780 2410,790

                M2160,820 2400,820 2410,830
                M2160,840 2400,840 2410,850
                `,
                trackColor: 'gray'
            },
            {
                trackID: 'TRACKS_GALKOWEK_KOLUSZKI_2',
                trackSVG: `
                M770,1330 780,1340 790,1340 M800,1340 900,1340 M920,1340 1020,1340
                M770,1350 780,1360 790,1360 M800,1360 900,1360 M920,1360 1020,1360
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L17_222N',
                signalPos: { x: '2270', y: '760' },
                trainPos: { x: '2240', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_219',
                signalPos: { x: '2270', y: '780' },
                trainPos: { x: '2240', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_222',
                signalPos: { x: '2270', y: '760' },
                trainPos: { x: '2300', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_219N',
                signalPos: { x: '2270', y: '780' },
                trainPos: { x: '2300', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //!!!
            //!!! AGAIN FOR KOLUSZKI
            //!!!
            {
                signalName: 'L17_222N',
                signalPos: { x: '910', y: '1340' },
                trainPos: { x: '880', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_219',
                signalPos: { x: '910', y: '1360' },
                trainPos: { x: '880', y: '1360' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_222',
                signalPos: { x: '910', y: '1340' },
                trainPos: { x: '940', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_219N',
                signalPos: { x: '910', y: '1360' },
                trainPos: { x: '940', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //!
            //? ENTRY SIGNALS KOLUSZKI AT GALKOWEK
            {
                signalName: '1803_KO_R2',
                signalPos: { x: '2390', y: '760' },
                trainPos: { x: '2360', y: '760' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_R1',
                signalPos: { x: '2390', y: '780' },
                trainPos: { x: '2360', y: '780' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Galkowek_Koluszki-222',
                nodeType: 'trackMarker',
                nodePos: { x: 2210, y: 760 },
                text: '222',
            },
            {
                nodeID: 'trackMarker-Galkowek_Koluszki-203',
                nodeType: 'trackMarker',
                nodePos: { x: 2210, y: 780 },
                text: '203',
            },
            {
                nodeID: "simpleText-po-Zakowice-1",
                nodeType: "simpleText",
                nodePos: { x: 2350, y: 730 },
                nodePosFlipped: { x: 2350, y: 730 },
                text: "Żakowice",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Zakowice-1-1',
                nodeType: 'platform',
                nodePos: { x: 2325, y: 745 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Zakowice-2-1',
                nodeType: 'platform',
                nodePos: { x: 2325, y: 785 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'trackMarker-Galkowek_Koluszki-242',
                nodeType: 'trackMarker',
                nodePos: { x: 2330, y: 760 },
                text: '242',
            },
            {
                nodeID: 'trackMarker-Galkowek_Koluszki-219',
                nodeType: 'trackMarker',
                nodePos: { x: 2330, y: 780 },
                text: '219',
            },
            //!!!
            //!!! AGAIN FOR KOLUSZKI
            //!!!
            {
                nodeID: 'trackMarker-Galkowek_Koluszki-222',
                nodeType: 'trackMarker',
                nodePos: { x: 850, y: 1340 },
                text: '222',
            },
            {
                nodeID: 'trackMarker-Galkowek_Koluszki-203',
                nodeType: 'trackMarker',
                nodePos: { x: 850, y: 1360 },
                text: '203',
            },
            {
                nodeID: "simpleText-po-Zakowice-2",
                nodeType: "simpleText",
                nodePos: { x: 990, y: 1310 },
                nodePosFlipped: { x: 990, y: 1310 },
                text: "Żakowice",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Zakowice-1-2',
                nodeType: 'platform',
                nodePos: { x: 965, y: 1325 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Zakowice-2-2',
                nodeType: 'platform',
                nodePos: { x: 965, y: 1365 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'trackMarker-Galkowek_Koluszki-242',
                nodeType: 'trackMarker',
                nodePos: { x: 970, y: 1340 },
                text: '242',
            },
            {
                nodeID: 'trackMarker-Galkowek_Koluszki-219',
                nodeType: 'trackMarker',
                nodePos: { x: 970, y: 1360 },
                text: '219',
            },
        ]
    },
    "3617_Ro_ROZPRZA": {
        "TRACKS": [
            {
                trackID: '3617_ROZPRZA',
                trackSVG: `
                M10,980 15,980 M20,980 25,980 M40,980 100,980 M110,980 180,980
                M10,1000 15,1000 M20,1000 25,1000 M30,1000 35,1000 M40,1000 100,1000 M110,1000 180,1000
                M10,1020 15,1020 M20,1020 25,1020 M40,1020 100,1020 M110,1020 135,1020 137.5,1015 137.5,1005 140,1000
                M10,1040 15,1040 M20,1040 25,1040 M40,1040 100,1040 M110,1040 120,1040 122.5,1035 122.5,1025 125,1020

                M110,980 120,980 122.5,985 122.5,995 125,1000 M155,1000 157.5,995 157.5,985 160,980
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3617_Ro_J',
                signalPos: { x: '27.5', y: '980' },
                trainPos: { x: '45', y: '980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_H',
                signalPos: { x: '27.5', y: '1020' },
                trainPos: { x: '45', y: '1020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_G',
                signalPos: { x: '27.5', y: '1040' },
                trainPos: { x: '45', y: '1040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_E',
                signalPos: { x: '110', y: '980' },
                trainPos: { x: '95', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_B',
                signalPos: { x: '110', y: '1000' },
                trainPos: { x: '95', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_C',
                signalPos: { x: '110', y: '1020' },
                trainPos: { x: '95', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_D',
                signalPos: { x: '110', y: '1040' },
                trainPos: { x: '95', y: '1040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_A',
                signalPos: { x: '180', y: '980' },
                trainPos: { x: '195', y: '980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_F',
                signalPos: { x: '180', y: '1000' },
                trainPos: { x: '195', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Rozprza',
                nodeType: 'stationName',
                stationPrefix: 'Ro',
                stationName: 'Rozprza',
                nodePos: { x: 105, y: 945 },
                nodePosFlipped: { x: 105, y: 1080 }
            },
            {
                nodeID: 'trackMarker-Rozprza_1',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 980 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Rozprza_2',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1000 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Rozprza_4',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1020 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Rozprza_6',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1040 },
                text: '6',
            },
        ]
    },
    "ROZPRZA_PIOTRKOWTRYBUNALSKI": {
        "TRACKS": [
            {
                trackID: 'ROZPRZA_PIOTRKOWTRYBUNALSKI_1',
                trackSVG: `
                M190,980 250,980 M270,980 330,980 M350,980 410,980 M430,980 490,980 M500,980 510,980 520,990
                M190,1000 250,1000 M270,1000 330,1000 M350,1000 410,1000 M430,1000 490,1000 M500,1000 510,1000 520,1010
                `,
                trackColor: 'gray'
            },
            {
                trackID: 'ROZPRZA_PIOTRKOWTRYBUNALSKI_2',
                trackSVG: `
                M10,1190 20,1200 30,1200 M40,1200 100,1200 M120,1200 180,1200
                M10,1210 20,1220 30,1220 M40,1220 100,1220 M120,1220 180,1220
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1541N',
                signalPos: { x: '260', y: '980' },
                trainPos: { x: '245', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1540',
                signalPos: { x: '260', y: '1000' },
                trainPos: { x: '245', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1541',
                signalPos: { x: '260', y: '980' },
                trainPos: { x: '275', y: '980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1540N',
                signalPos: { x: '260', y: '1000' },
                trainPos: { x: '275', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_1525N',
                signalPos: { x: '340', y: '980' },
                trainPos: { x: '325', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1524',
                signalPos: { x: '340', y: '1000' },
                trainPos: { x: '325', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1525',
                signalPos: { x: '340', y: '980' },
                trainPos: { x: '355', y: '980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1524N',
                signalPos: { x: '340', y: '1000' },
                trainPos: { x: '355', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1509N',
                signalPos: { x: '420', y: '980' },
                trainPos: { x: '405', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1510',
                signalPos: { x: '420', y: '1000' },
                trainPos: { x: '405', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1509',
                signalPos: { x: '420', y: '980' },
                trainPos: { x: '435', y: '980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1510N',
                signalPos: { x: '420', y: '1000' },
                trainPos: { x: '435', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1497N',
                signalPos: { x: '500', y: '980' },
                trainPos: { x: '485', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1496',
                signalPos: { x: '500', y: '1000' },
                trainPos: { x: '485', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1497',
                signalPos: { x: '30', y: '1200' },
                trainPos: { x: '45', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1496N',
                signalPos: { x: '30', y: '1220' },
                trainPos: { x: '45', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1481N',
                signalPos: { x: '110', y: '1200' },
                trainPos: { x: '95', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1480',
                signalPos: { x: '110', y: '1220' },
                trainPos: { x: '95', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1481',
                signalPos: { x: '110', y: '1200' },
                trainPos: { x: '125', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1480N',
                signalPos: { x: '110', y: '1220' },
                trainPos: { x: '125', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1541',
                nodeType: 'trackMarker',
                nodePos: { x: 220, y: 980 },
                text: '1541',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1556',
                nodeType: 'trackMarker',
                nodePos: { x: 220, y: 1000 },
                text: '1556',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1525',
                nodeType: 'trackMarker',
                nodePos: { x: 300, y: 980 },
                text: '1525',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1540',
                nodeType: 'trackMarker',
                nodePos: { x: 300, y: 1000 },
                text: '1540',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1509',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 980 },
                text: '1509',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1524',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 1000 },
                text: '1524',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1497',
                nodeType: 'trackMarker',
                nodePos: { x: 460, y: 980 },
                text: '1497',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1510',
                nodeType: 'trackMarker',
                nodePos: { x: 460, y: 1000 },
                text: '1510',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1481',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1200 },
                text: '1481',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1496',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1220 },
                text: '1496',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1467',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1200 },
                text: '1467',
            },
            {
                nodeID: 'trackMarker-Rozprza_PiotrkowTrybunalski_1480',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1220 },
                text: '1480',
            },
        ]
    },
    "3223_PT_PIOTRKOWTRYBUNALSKI": {
        "TRACKS": [
            {
                trackID: '3223_PIOTRKOWTRYBUNALSKI',
                /*
                Durchgehendes Gleis Oben
                Durchgehendes Gleis Unten

                SW1/2 + SW3/4

                *Treppe hoch + T29
                *T27
                *T25
                *T23 + SW zu T21

                Treppe runter

                T26
                *T28
                *T30
                *T32
                *T34
                */
                trackSVG: `
                M200,1200 300,1200 M310,1200 680,1200 M690,1200 850,1200
                M200,1220 430,1220 M440,1220 750,1220 M760,1220 850,1220

                M210,1220 212.5,1215 212.5,1205 215,1200 M235,1200 237.5,1205 237.5,1215 240,1220

                M250,1200 252.5,1195 252.5,1185 255,1180 265,1180 267.5,1175 267.5,1145 270,1140 280,1140 282.5,1135 282.5,1125 285,1120 310,1120 M320,1120 380,1120 M390,1120 420,1120 422.5,1125 422.5,1175 425,1180
                M280,1140 300,1140 M310,1140 370,1140 M380,1140 390,1140 392.5,1145 392.5,1155 395,1160
                M280,1180 282.5,1175 282.5,1165 285,1160 300,1160 M310,1160 370,1160 M380,1160 405,1160 407.5,1165 407.5,1175 410,1180 
                M260,1180 300,1180 M310,1180 370,1180 M380,1180 470,1180 472.5,1185 472.5,1195 475,1200


                M255,1220 257.5,1225 257.5,1235 260,1240 270,1240 272.5,1245 272.5,1255 275,1260 285,1260 287.5,1265 287.5,1275 290,1280 300,1280 302.5,1285 302.5,1295 305,1300 315,1300 317.5,1305 317.5,1315 320,1320 325,1320

                M280,1260 410,1260 M420,1260 470,1260 472.5,1255 472.5,1225 475,1220
                M295,1280 390,1280 M400,1280 425,1280 427.5,1275 427.5,1265 430,1260
                M310,1300 390,1300 M400,1300 410,1300 412.5,1295 412.5,1285 415,1280
                M325,1320 350,1320 M360,1320 420,1320 M430,1320 440,1320 442.5,1315 442.5,1265 445,1260
                M320,1320 335,1320 337.5,1325 337.5,1335 340,1340 350,1340 M360,1340 430,1340 M440,1340 455,1340 457.5,1335 457.5,1265 460,1260

                M465,1180 510,1180 M520,1180 635,1180 637.5,1175 637.5,1165 640,1160 680,1160 M690,1160 750,1160 M760,1160 770,1160 772.5,1165 772.5,1175 775,1180 795,1180 797.5,1185 797.5,1195 800,1200
                M465,1260 560,1260 562.5,1255 562.5,1225 565,1220 M555,1260 570,1260 572.5,1255 572.5,1245 575,1240 590,1240 592.5,1235 592.5,1225 595,1220
                M605,1220 607.5,1215 607.5,1205 610,1200 M620,1200 622.5,1195 622.5,1185 625,1180

                M515,1200 517.5,1205 517.5,1215 520,1220

                M810,1200 812.5,1205 812.5,1215 815,1220 M825,1220 827.5,1215 827.5,1205 830,1200
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3223_PT_U',
                signalPos: { x: '190', y: '1200' },
                trainPos: { x: '175', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_5l',
            },
            {
                signalName: '3223_PT_W',
                signalPos: { x: '190', y: '1220' },
                trainPos: { x: '175', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_5l',
            },
            {
                signalName: '3223_PT_Z1',
                signalPos: { x: '190', y: '1200' },
                trainPos: { x: '205', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_4l_g-r-o-w',
            },
            {
                signalName: '3223_PT_Z2',
                signalPos: { x: '190', y: '1220' },
                trainPos: { x: '205', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station-4l_g-r-o-w',
            },

            {
                signalName: '3223_PT_R29',
                signalPos: { x: '310', y: '1120' },
                trainPos: { x: '325', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station-old_4l_g-r-g-w',
            },
            {
                signalName: '3223_PT_R27',
                signalPos: { x: '300', y: '1140' },
                trainPos: { x: '315', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station-old_4l_g-r-g-w',
            },
            {
                signalName: '3223_PT_R25',
                signalPos: { x: '300', y: '1160' },
                trainPos: { x: '315', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station-old_4l_g-r-g-w',
            },
            {
                signalName: '3223_PT_R23',
                signalPos: { x: '300', y: '1180' },
                trainPos: { x: '315', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station-old_4l_g-r-g-w_w24',
            },
            {
                signalName: '3223_PT_R21',
                signalPos: { x: '300', y: '1200' },
                trainPos: { x: '315', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station-old_4l_g-r-o-w_w24',
            },

            {
                signalName: '3223_PT_L32',
                signalPos: { x: '350', y: '1320' },
                trainPos: { x: '365', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'station-old_4l_g-r-o-w_w24',
            },
            {
                signalName: '3223_PT_L34',
                signalPos: { x: '350', y: '1340' },
                trainPos: { x: '365', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'station-old_4l_g-r-o-w_w24',
            },
            //? GT RIGHT SIDE
            {
                signalName: '3223_PT_H29',
                signalPos: { x: '390', y: '1120' },
                trainPos: { x: '375', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            {
                signalName: '3223_PT_H27',
                signalPos: { x: '380', y: '1140' },
                trainPos: { x: '365', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            {
                signalName: '3223_PT_H25',
                signalPos: { x: '380', y: '1160' },
                trainPos: { x: '365', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            {
                signalName: '3223_PT_H23',
                signalPos: { x: '380', y: '1180' },
                trainPos: { x: '365', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            {
                signalName: '3223_PT_J22',
                signalPos: { x: '440', y: '1220' },
                trainPos: { x: '425', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_5l_g-o-r-o-w',
            },
            {
                signalName: '3223_PT_J26',
                signalPos: { x: '420', y: '1260' },
                trainPos: { x: '405', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            {
                signalName: '3223_PT_J28',
                signalPos: { x: '400', y: '1280' },
                trainPos: { x: '385', y: '1280' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            {
                signalName: '3223_PT_J30',
                signalPos: { x: '400', y: '1300' },
                trainPos: { x: '385', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            {
                signalName: '3223_PT_J32',
                signalPos: { x: '430', y: '1320' },
                trainPos: { x: '415', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            {
                signalName: '3223_PT_J34',
                signalPos: { x: '440', y: '1340' },
                trainPos: { x: '425', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'station-old_4l_o-r-o-w',
            },
            //
            {
                signalName: '3223_PT_G',
                signalPos: { x: '510', y: '1180' },
                trainPos: { x: '525', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station-old_5l_o-r-o-g-w',
            },
            //
            {
                signalName: '3223_PT_F',
                signalPos: { x: '680', y: '1160' },
                trainPos: { x: '695', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_5l_g-o-r-o-w',
            },
            {
                signalName: '3223_PT_E',
                signalPos: { x: '680', y: '1200' },
                trainPos: { x: '695', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_5l_g-o-r-o-w',
            },
            //
            {
                signalName: '3223_PT_C',
                signalPos: { x: '760', y: '1160' },
                trainPos: { x: '745', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_5l_g-o-r-o-w_w24',
            },
            {
                signalName: '3223_PT_D',
                signalPos: { x: '760', y: '1220' },
                trainPos: { x: '745', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_5l_g-o-r-o-w_w24',
            },
            //
            {
                signalName: '3223_PT_A',
                signalPos: { x: '850', y: '1200' },
                trainPos: { x: '865', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_5l_g-o-r-o-w_w24',
            },
            {
                signalName: '3223_PT_B',
                signalPos: { x: '850', y: '1220' },
                trainPos: { x: '865', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_5l_g-o-r-o-w_w24',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-PiotrkowTrybunalski',
                nodeType: 'stationName',
                stationPrefix: 'PT',
                stationName: 'Piotrków Trybunalski',
                nodePos: { x: 550, y: 1135 },
                nodePosFlipped: { x: 700, y: 1260 }
            },
            {
                nodeID: 'platform-PiotrkowTrybunalski_2',
                nodeType: 'platform',
                nodePos: { x: 690, y: 1165 },
                width: 60,
                height: 30,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-PiotrkowTrybunalski_1',
                nodeType: 'platform',
                nodePos: { x: 685, y: 1225 },
                width: 65,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_29',
                nodeType: 'trackMarker',
                nodePos: { x: 350, y: 1120 },
                text: '29',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_27',
                nodeType: 'trackMarker',
                nodePos: { x: 340, y: 1140 },
                text: '27',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_25',
                nodeType: 'trackMarker',
                nodePos: { x: 340, y: 1160 },
                text: '25',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_23',
                nodeType: 'trackMarker',
                nodePos: { x: 340, y: 1180 },
                text: '23',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_21',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 1200 },
                text: '21',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_22',
                nodeType: 'trackMarker',
                nodePos: { x: 360, y: 1220 },
                text: '22',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_26',
                nodeType: 'trackMarker',
                nodePos: { x: 340, y: 1260 },
                text: '26',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_28',
                nodeType: 'trackMarker',
                nodePos: { x: 360, y: 1280 },
                text: '28',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_30',
                nodeType: 'trackMarker',
                nodePos: { x: 360, y: 1300 },
                text: '30',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_32',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1320 },
                text: '32',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_34',
                nodeType: 'trackMarker',
                nodePos: { x: 395, y: 1340 },
                text: '34',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_3',
                nodeType: 'trackMarker',
                nodePos: { x: 720, y: 1160 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_1',
                nodeType: 'trackMarker',
                nodePos: { x: 720, y: 1200 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_2',
                nodeType: 'trackMarker',
                nodePos: { x: 720, y: 1220 },
                text: '2',
            },
        ]
    },
    "PIOTRKOWTRYBUNALSKI_BABY": {
        "TRACKS": [
            {
                trackID: 'PIOTRKOWTRYBUNALSKI_BABY',
                trackSVG: `
                M860,1200 920,1200 M940,1200 1000,1200 M1020,1200 1080,1200 M1100,1200 1160,1200 M1180,1200 1240,1200
                M1260,1200 1320,1200 M1340,1200 1400,1200 M1420,1200 1480,1200 M1500,1200 1560,1200 M1580,1200 1640,1200

                M860,1220 920,1220 M940,1220 1000,1220 M1020,1220 1080,1220 M1100,1220 1160,1220 M1180,1220 1240,1220
                M1260,1220 1320,1220 M1340,1220 1400,1220 M1420,1220 1480,1220 M1500,1220 1560,1220 M1580,1220 1640,1220
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1423N',
                signalPos: { x: '930', y: '1200' },
                trainPos: { x: '915', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1424P',
                signalPos: { x: '930', y: '1220' },
                trainPos: { x: '915', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1423P',
                signalPos: { x: '930', y: '1200' },
                trainPos: { x: '945', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1424N',
                signalPos: { x: '930', y: '1220' },
                trainPos: { x: '945', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_1413N',
                signalPos: { x: '1010', y: '1200' },
                trainPos: { x: '995', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1412P',
                signalPos: { x: '1010', y: '1220' },
                trainPos: { x: '995', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1413P',
                signalPos: { x: '1010', y: '1200' },
                trainPos: { x: '1025', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1412N',
                signalPos: { x: '1010', y: '1220' },
                trainPos: { x: '1025', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1399N',
                signalPos: { x: '1090', y: '1200' },
                trainPos: { x: '1075', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1400P',
                signalPos: { x: '1090', y: '1220' },
                trainPos: { x: '1075', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1399P',
                signalPos: { x: '1090', y: '1200' },
                trainPos: { x: '1105', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1400N',
                signalPos: { x: '1090', y: '1220' },
                trainPos: { x: '1105', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1385N',
                signalPos: { x: '1170', y: '1200' },
                trainPos: { x: '1155', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1386P',
                signalPos: { x: '1170', y: '1220' },
                trainPos: { x: '1155', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1385P',
                signalPos: { x: '1170', y: '1200' },
                trainPos: { x: '1185', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1386N',
                signalPos: { x: '1170', y: '1220' },
                trainPos: { x: '1185', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1373N',
                signalPos: { x: '1250', y: '1200' },
                trainPos: { x: '1235', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1372P',
                signalPos: { x: '1250', y: '1220' },
                trainPos: { x: '1235', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1373P',
                signalPos: { x: '1250', y: '1200' },
                trainPos: { x: '1265', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1372N',
                signalPos: { x: '1250', y: '1220' },
                trainPos: { x: '1265', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1357N',
                signalPos: { x: '1330', y: '1200' },
                trainPos: { x: '1315', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1358P',
                signalPos: { x: '1330', y: '1220' },
                trainPos: { x: '1315', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1357P',
                signalPos: { x: '1330', y: '1200' },
                trainPos: { x: '1345', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1358N',
                signalPos: { x: '1330', y: '1220' },
                trainPos: { x: '1345', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1343N',
                signalPos: { x: '1410', y: '1200' },
                trainPos: { x: '1395', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1342P',
                signalPos: { x: '1410', y: '1220' },
                trainPos: { x: '1395', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1343P',
                signalPos: { x: '1410', y: '1200' },
                trainPos: { x: '1425', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1342N',
                signalPos: { x: '1410', y: '1220' },
                trainPos: { x: '1425', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1329N',
                signalPos: { x: '1490', y: '1200' },
                trainPos: { x: '1475', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1328P',
                signalPos: { x: '1490', y: '1220' },
                trainPos: { x: '1475', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1329P',
                signalPos: { x: '1490', y: '1200' },
                trainPos: { x: '1505', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1328N',
                signalPos: { x: '1490', y: '1220' },
                trainPos: { x: '1505', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1315N',
                signalPos: { x: '1570', y: '1200' },
                trainPos: { x: '1555', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1314P',
                signalPos: { x: '1570', y: '1220' },
                trainPos: { x: '1555', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1315P',
                signalPos: { x: '1570', y: '1200' },
                trainPos: { x: '1585', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1314N',
                signalPos: { x: '1570', y: '1220' },
                trainPos: { x: '1585', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1423',
                nodeType: 'trackMarker',
                nodePos: { x: 890, y: 1200 },
                text: '1423',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1434',
                nodeType: 'trackMarker',
                nodePos: { x: 890, y: 1220 },
                text: '1434',
            },
            //
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1413',
                nodeType: 'trackMarker',
                nodePos: { x: 970, y: 1200 },
                text: '1413',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1424',
                nodeType: 'trackMarker',
                nodePos: { x: 970, y: 1220 },
                text: '1424',
            },
            //
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1399',
                nodeType: 'trackMarker',
                nodePos: { x: 1050, y: 1200 },
                text: '1399',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1412',
                nodeType: 'trackMarker',
                nodePos: { x: 1050, y: 1220 },
                text: '1412',
            },
            //
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1385',
                nodeType: 'trackMarker',
                nodePos: { x: 1130, y: 1200 },
                text: '1385',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1400',
                nodeType: 'trackMarker',
                nodePos: { x: 1130, y: 1220 },
                text: '1400',
            },
            //?
            {
                nodeID: "simpleText-po-Jarosty",
                nodeType: "simpleText",
                nodePos: { x: 1170, y: 1170 },
                nodePosFlipped: { x: 1170, y: 1250 },
                text: "Jarosty",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Jarosty_1',
                nodeType: 'platform',
                nodePos: { x: 1129, y: 1225 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Jarosty_2',
                nodeType: 'platform',
                nodePos: { x: 1181, y: 1185 },
                width: 30,
                height: 10,
                text: ''
            },
            //?
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1373',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 1200 },
                text: '1373',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1386',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 1220 },
                text: '1386',
            },
            //
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1357',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 1200 },
                text: '1357',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1372',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 1220 },
                text: '1372',
            },
            //
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1343',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 1200 },
                text: '1343',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1358',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 1220 },
                text: '1358',
            },
            //
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1329',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 1200 },
                text: '1329',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1342',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 1220 },
                text: '1342',
            },
            //?
            {
                nodeID: "simpleText-po-Moszczenica",
                nodeType: "simpleText",
                nodePos: { x: 1436, y: 1170 },
                nodePosFlipped: { x: 1436, y: 1250 },
                text: "Moszczenica",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Moszczenica-1',
                nodeType: 'platform',
                nodePos: { x: 1422, y: 1225 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Moszczenica-2',
                nodeType: 'platform',
                nodePos: { x: 1422, y: 1185 },
                width: 30,
                height: 10,
                text: ''
            },
            //?
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1315',
                nodeType: 'trackMarker',
                nodePos: { x: 1530, y: 1200 },
                text: '1315',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1328',
                nodeType: 'trackMarker',
                nodePos: { x: 1530, y: 1220 },
                text: '1328',
            },
            //
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1305',
                nodeType: 'trackMarker',
                nodePos: { x: 1610, y: 1200 },
                text: '1305',
            },
            {
                nodeID: 'trackMarker-PiotrkowTrybunalski_Baby_1314',
                nodeType: 'trackMarker',
                nodePos: { x: 1610, y: 1220 },
                text: '1314',
            },
        ]
    },
    "60_Ba_BABY": {
        "TRACKS": [
            {
                trackID: '60_BABY',
                trackSVG: `
                M1650,1200 1750,1200 M1760,1200 1820,1200 M1830,1200 1940,1200
                M1650,1220 1770,1220 M1780,1220 1840,1220 M1850,1220 1940,1220

                M1720,1200 1722.5,1205 1722.5,1215 1725,1220

                M1735,1200 1737.5,1195 1737.5,1185 1740,1180 1740,1180 1750,1180 M1760,1180 1820,1180 M1830,1180 1840,1180 1842.5,1185 1842.5,1195 1845,1200
                M1735,1220 1737.5,1225 1737.5,1235 1740,1240 1770,1240 M1780,1240 1840,1240 M1850,1240 1875,1240 1877.5,1235 1877.5,1225 1880,1220
                M1750,1240 1752.5,1245 1752.5,1255 1755,1260 1770,1260 M1780,1260 1840,1260 M1850,1260 1860,1260 1862.5,1255 1862.5,1245 1865,1240

                M1890,1220 1892.5,1215 1892.5,1205 1895,1200 M1915,1200 1917.5,1205 1917.5,1215 1920,1220
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '60_Ba_S',
                signalPos: { x: '1650', y: '1200' },
                trainPos: { x: '1635', y: '1200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_T',
                signalPos: { x: '1650', y: '1220' },
                trainPos: { x: '1635', y: '1220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '60_Ba_O',
                signalPos: { x: '1750', y: '1180' },
                trainPos: { x: '1765', y: '1180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_N',
                signalPos: { x: '1750', y: '1200' },
                trainPos: { x: '1765', y: '1200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_M',
                signalPos: { x: '1770', y: '1220' },
                trainPos: { x: '1785', y: '1220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_L',
                signalPos: { x: '1770', y: '1240' },
                trainPos: { x: '1785', y: '1240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_K',
                signalPos: { x: '1770', y: '1260' },
                trainPos: { x: '1785', y: '1260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '60_Ba_D',
                signalPos: { x: '1830', y: '1180' },
                trainPos: { x: '1815', y: '1180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_E',
                signalPos: { x: '1830', y: '1200' },
                trainPos: { x: '1815', y: '1200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_F',
                signalPos: { x: '1850', y: '1220' },
                trainPos: { x: '1835', y: '1220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_G',
                signalPos: { x: '1850', y: '1240' },
                trainPos: { x: '1835', y: '1240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_H',
                signalPos: { x: '1850', y: '1260' },
                trainPos: { x: '1835', y: '1260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '60_Ba_B',
                signalPos: { x: '1940', y: '1200' },
                trainPos: { x: '1955', y: '1200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_A',
                signalPos: { x: '1940', y: '1220' },
                trainPos: { x: '1955', y: '1220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Baby',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1700, y: 1150 },
                postType: 'relay',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-Baby',
                nodeType: 'stationName',
                stationPrefix: 'Ba',
                stationName: 'Baby',
                nodePos: { x: 1800, y: 1145 },
                nodePosFlipped: { x: 1800, y: 1285 }
            },
            {
                nodeID: 'platform-Baby-1',
                nodeType: 'platform',
                nodePos: { x: 1655, y: 1185 },
                width: 55,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Baby-2',
                nodeType: 'platform',
                nodePos: { x: 1655, y: 1225 },
                width: 55,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'trackMarker-Baby_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1180 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Baby_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1200 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Baby_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 1220 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Baby_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 1240 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Baby_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 1260 },
                text: '6',
            },
        ]
    },
    "BABY_ROKICINY": {
        "TRACKS": [
            {
                trackID: 'BABY_ROKICINY',
                trackSVG: `
                M1950,1200 2010,1200 M2030,1200 2090,1200 M2110,1200 2170,1200 M2190,1200 2250,1200 M2270,1200 2330,1200 M2350,1200 2410,1200 M2430,1200 2490,1200 M2500,1200 2510,1200 2520,1210
                M1950,1220 2010,1220 M2030,1220 2090,1220 M2110,1220 2170,1220 M2190,1220 2250,1220 M2270,1220 2330,1220 M2350,1220 2410,1220 M2430,1220 2490,1220 M2500,1220 2510,1220 2520,1230

                M10,1450 20,1460 30,1460 M40,1460 100,1460 M120,1460 180,1460 M200,1460 260,1460
                M10,1470 20,1480 30,1480 M40,1480 100,1480 M120,1480 180,1480 M200,1480 260,1480
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1273N',
                signalPos: { x: '2020', y: '1200' },
                trainPos: { x: '2005', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1274',
                signalPos: { x: '2020', y: '1220' },
                trainPos: { x: '2005', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1273',
                signalPos: { x: '2020', y: '1200' },
                trainPos: { x: '2035', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1274N',
                signalPos: { x: '2020', y: '1220' },
                trainPos: { x: '2035', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_1259N',
                signalPos: { x: '2100', y: '1200' },
                trainPos: { x: '2085', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1258',
                signalPos: { x: '2100', y: '1220' },
                trainPos: { x: '2085', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1259',
                signalPos: { x: '2100', y: '1200' },
                trainPos: { x: '2115', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1258N',
                signalPos: { x: '2100', y: '1220' },
                trainPos: { x: '2115', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1243N',
                signalPos: { x: '2180', y: '1200' },
                trainPos: { x: '2165', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1242',
                signalPos: { x: '2180', y: '1220' },
                trainPos: { x: '2165', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1243',
                signalPos: { x: '2180', y: '1200' },
                trainPos: { x: '2195', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1242N',
                signalPos: { x: '2180', y: '1220' },
                trainPos: { x: '2195', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1227N',
                signalPos: { x: '2260', y: '1200' },
                trainPos: { x: '2245', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1226',
                signalPos: { x: '2260', y: '1220' },
                trainPos: { x: '2245', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1227',
                signalPos: { x: '2260', y: '1200' },
                trainPos: { x: '2275', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1226N',
                signalPos: { x: '2260', y: '1220' },
                trainPos: { x: '2275', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1213N',
                signalPos: { x: '2340', y: '1200' },
                trainPos: { x: '2325', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1212',
                signalPos: { x: '2340', y: '1220' },
                trainPos: { x: '2325', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1213',
                signalPos: { x: '2340', y: '1200' },
                trainPos: { x: '2355', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1212N',
                signalPos: { x: '2340', y: '1220' },
                trainPos: { x: '2355', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1199N',
                signalPos: { x: '2420', y: '1200' },
                trainPos: { x: '2405', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1198',
                signalPos: { x: '2420', y: '1220' },
                trainPos: { x: '2405', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1199',
                signalPos: { x: '2420', y: '1200' },
                trainPos: { x: '2435', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1198N',
                signalPos: { x: '2420', y: '1220' },
                trainPos: { x: '2435', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1185N',
                signalPos: { x: '2500', y: '1200' },
                trainPos: { x: '2485', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1186',
                signalPos: { x: '2500', y: '1220' },
                trainPos: { x: '2485', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1185',
                signalPos: { x: '30', y: '1460' },
                trainPos: { x: '45', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1186N',
                signalPos: { x: '30', y: '1480' },
                trainPos: { x: '45', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1169N',
                signalPos: { x: '110', y: '1460' },
                trainPos: { x: '95', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1170',
                signalPos: { x: '110', y: '1480' },
                trainPos: { x: '95', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1169',
                signalPos: { x: '110', y: '1460' },
                trainPos: { x: '125', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1170N',
                signalPos: { x: '110', y: '1480' },
                trainPos: { x: '125', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1155N',
                signalPos: { x: '190', y: '1460' },
                trainPos: { x: '175', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1156',
                signalPos: { x: '190', y: '1480' },
                trainPos: { x: '175', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1155',
                signalPos: { x: '190', y: '1460' },
                trainPos: { x: '205', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1156N',
                signalPos: { x: '190', y: '1480' },
                trainPos: { x: '205', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1273',
                nodeType: 'trackMarker',
                nodePos: { x: 1980, y: 1200 },
                text: '1273',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1284',
                nodeType: 'trackMarker',
                nodePos: { x: 1980, y: 1220 },
                text: '1284',
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1259',
                nodeType: 'trackMarker',
                nodePos: { x: 2060, y: 1200 },
                text: '1259',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1274',
                nodeType: 'trackMarker',
                nodePos: { x: 2060, y: 1220 },
                text: '1274',
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1243',
                nodeType: 'trackMarker',
                nodePos: { x: 2140, y: 1200 },
                text: '1243',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1258',
                nodeType: 'trackMarker',
                nodePos: { x: 2140, y: 1220 },
                text: '1258',
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1227',
                nodeType: 'trackMarker',
                nodePos: { x: 2220, y: 1200 },
                text: '1227',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1242',
                nodeType: 'trackMarker',
                nodePos: { x: 2220, y: 1220 },
                text: '1242',
            },
            //? Wolborka
            {
                nodeID: "simpleText-po-Wolborka",
                nodeType: "simpleText",
                nodePos: { x: 2220, y: 1170 },
                nodePosFlipped: { x: 2220, y: 1250 },
                text: "Wolbórka",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Wolborka',
                nodeType: 'platform',
                nodePos: { x: 2200, y: 1205 },
                width: 40,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1213',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 1200 },
                text: '1213',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1226',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 1220 },
                text: '1226',
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1199',
                nodeType: 'trackMarker',
                nodePos: { x: 2380, y: 1200 },
                text: '1199',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1212',
                nodeType: 'trackMarker',
                nodePos: { x: 2380, y: 1220 },
                text: '1212',
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1185',
                nodeType: 'trackMarker',
                nodePos: { x: 2460, y: 1200 },
                text: '1185',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1198',
                nodeType: 'trackMarker',
                nodePos: { x: 2460, y: 1220 },
                text: '1198',
            },
            //? Laznow
            {
                nodeID: "simpleText-po-Laznow",
                nodeType: "simpleText",
                nodePos: { x: 2471.75, y: 1170 },
                nodePosFlipped: { x: 2471.75, y: 1250 },
                text: "Łaznów",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Laznow-1',
                nodeType: 'platform',
                nodePos: { x: 2453, y: 1185 },
                width: 35,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Laznow-2',
                nodeType: 'platform',
                nodePos: { x: 2453, y: 1225 },
                width: 35,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1169',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1460 },
                text: '1169',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1186',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1480 },
                text: '1186',
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1155',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1460 },
                text: '1155',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1170',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1480 },
                text: '1170',
            },
            //
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1145',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1460 },
                text: '1145',
            },
            {
                nodeID: 'trackMarker-Baby_Rokiciny_1156',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1480 },
                text: '1156',
            },
        ]
    },
    "3594_Ro_ROKICINY": {
        "TRACKS": [
            {
                trackID: '3594_ROKICINY',
                trackSVG: `
                M270,1460 380,1460 M390,1460 490,1460 M500,1460 550,1460
                M270,1480 380,1480 M390,1480 490,1480 M500,1480 550,1480

                M350,1480 352.5,1475 352.5,1465 355,1460

                M365,1460 367.5,1455 367.5,1445 370,1440 380,1440 M390,1440 490,1440 M500,1440 515,1440 517.5,1445 517.5,1455 520,1460
                M365,1480 367.5,1485 367.5,1495 370,1500 380,1500 M390,1500 490,1500 M500,1500 510,1500 512.5,1495 512.5,1485 515,1480

                M530,1460 532.5,1465 532.5,1475 535,1480
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3594_Ro_N',
                signalPos: { x: '270', y: '1460' },
                trainPos: { x: '255', y: '1460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3594_Ro_O',
                signalPos: { x: '270', y: '1480' },
                trainPos: { x: '255', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3594_Ro_L',
                signalPos: { x: '380', y: '1440' },
                trainPos: { x: '410', y: '1440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3594_Ro_K',
                signalPos: { x: '380', y: '1460' },
                trainPos: { x: '410', y: '1460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3594_Ro_J',
                signalPos: { x: '380', y: '1480' },
                trainPos: { x: '410', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3594_Ro_H',
                signalPos: { x: '380', y: '1500' },
                trainPos: { x: '410', y: '1500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '3594_Ro_D',
                signalPos: { x: '500', y: '1440' },
                trainPos: { x: '470', y: '1440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3594_Ro_E',
                signalPos: { x: '500', y: '1460' },
                trainPos: { x: '470', y: '1460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3594_Ro_F',
                signalPos: { x: '500', y: '1480' },
                trainPos: { x: '470', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3594_Ro_G',
                signalPos: { x: '500', y: '1500' },
                trainPos: { x: '470', y: '1500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3594_Ro_B',
                signalPos: { x: '550', y: '1460' },
                trainPos: { x: '580', y: '1460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3594_Ro_A',
                signalPos: { x: '550', y: '1480' },
                trainPos: { x: '580', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Rokiciny',
                nodeType: 'dispatchingPost',
                nodePos: { x: 333, y: 1410 },
                postType: 'relay',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-Rokiciny',
                nodeType: 'stationName',
                stationPrefix: 'Ro',
                stationName: 'Rokiciny',
                nodePos: { x: 420, y: 1410 },
                nodePosFlipped: { x: 420, y: 1540 }
            },
            {
                nodeID: 'platform-Rokiciny-2',
                nodeType: 'platform',
                nodePos: { x: 295, y: 1445 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Rokiciny-1',
                nodeType: 'platform',
                nodePos: { x: 295, y: 1485 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Rokiciny-3',
                nodeType: 'trackMarker',
                nodePos: { x: 440, y: 1440 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Rokiciny-1',
                nodeType: 'trackMarker',
                nodePos: { x: 440, y: 1460 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Rokiciny-2',
                nodeType: 'trackMarker',
                nodePos: { x: 440, y: 1480 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Rokiciny-4',
                nodeType: 'trackMarker',
                nodePos: { x: 440, y: 1500 },
                text: '4',
            },
        ]
    },
    "ROKICINY_KOLUSZKI": {
        "TRACKS": [
            {
                trackID: 'TRACKS_ROKICINY_KOLUSZKI',
                trackSVG: `
                M560,1460 660,1460 M680,1460 780,1460 M800,1460 900,1460 M920,1460 1020,1460
                M560,1480 660,1480 M680,1480 780,1480 M800,1480 900,1480 M920,1480 1020,1480
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1115N',
                signalPos: { x: '670', y: '1460' },
                trainPos: { x: '640', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1116',
                signalPos: { x: '670', y: '1480' },
                trainPos: { x: '640', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1115',
                signalPos: { x: '670', y: '1460' },
                trainPos: { x: '700', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1116N',
                signalPos: { x: '670', y: '1480' },
                trainPos: { x: '700', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            {
                signalName: 'L1_1103N',
                signalPos: { x: '790', y: '1460' },
                trainPos: { x: '760', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1102',
                signalPos: { x: '790', y: '1480' },
                trainPos: { x: '760', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1103',
                signalPos: { x: '790', y: '1460' },
                trainPos: { x: '820', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1102N',
                signalPos: { x: '790', y: '1480' },
                trainPos: { x: '820', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            {
                signalName: 'L1_1089N',
                signalPos: { x: '910', y: '1460' },
                trainPos: { x: '880', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1090',
                signalPos: { x: '910', y: '1480' },
                trainPos: { x: '880', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1089',
                signalPos: { x: '910', y: '1460' },
                trainPos: { x: '940', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1090N',
                signalPos: { x: '910', y: '1480' },
                trainPos: { x: '940', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Rokiciny_Koluszki_1115',
                nodeType: 'trackMarker',
                nodePos: { x: 610, y: 1460 },
                text: '1115',
            },
            {
                nodeID: 'trackMarker-Rokiciny_Koluszki_1126',
                nodeType: 'trackMarker',
                nodePos: { x: 610, y: 1480 },
                text: '1126',
            },
            //? Chrusty Nowe
            {
                nodeID: "simpleText-po-ChrustyNowe",
                nodeType: "simpleText",
                nodePos: { x: 730, y: 1430 },
                nodePosFlipped: { x: 730, y: 1505 },
                text: "Chrusty Nowe",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-ChrustyNowe-1',
                nodeType: 'platform',
                nodePos: { x: 710, y: 1445 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-ChrustyNowe-2',
                nodeType: 'platform',
                nodePos: { x: 710, y: 1485 },
                width: 40,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Rokiciny_Koluszki_1103',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 1460 },
                text: '1103',
            },
            {
                nodeID: 'trackMarker-Rokiciny_Koluszki_1116',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 1480 },
                text: '1116',
            },
            //
            {
                nodeID: 'trackMarker-Rokiciny_Koluszki_1089',
                nodeType: 'trackMarker',
                nodePos: { x: 850, y: 1460 },
                text: '1089',
            },
            {
                nodeID: 'trackMarker-Rokiciny_Koluszki_1102',
                nodeType: 'trackMarker',
                nodePos: { x: 850, y: 1480 },
                text: '1102',
            },
            //
            {
                nodeID: 'trackMarker-Rokiciny_Koluszki_1077',
                nodeType: 'trackMarker',
                nodePos: { x: 970, y: 1460 },
                text: '1077',
            },
            {
                nodeID: 'trackMarker-Rokiciny_Koluszki_1090',
                nodeType: 'trackMarker',
                nodePos: { x: 970, y: 1480 },
                text: '1090',
            },
        ]
    },
    "ZAKOWICE--KOLUSZKI--SLOTWINY--MIKOLAJOW": {
        "TRACKS": [
            {
                trackID: 'GALKOWEK_ZAKOWICE_1',
                trackSVG: `
                M340,1750 350,1760 590,1760
                M340,1770 350,1780 590,1780
                `,
                trackColor: 'gray'
            },
            {
                trackID: 'ZAKOWICE__KOLUSZKI--SLOTWINY',
                /*
                LK535 Zakowice <-> Koluszki

                LK537 Zakowice <-> Slotwiny
                */
                trackSVG: `
                M860,1680 912.5,1680 915,1675 915,1555 917.5,1550 1020,1550

                M860,1700 1020,1700
                `,
                trackColor: 'gray'
            },
            {
                trackID: 'KOLUSZKI--SLOTWINY',
                /*
                UPPER CONNECTION LK1 -> SLOTWINY

                LOWER CONNECTION LK534
                */
                trackSVG: `
                M1020,1530 937.5,1530 935,1535 935,1545 M935,1555 935,1695 M935,1705 935,1715 937.5,1720 1020,1720

                M1020,1570 957.5,1570 955,1575 955,1675 957.5,1680 1020,1680
                `,
                trackColor: 'gray'
            },
            {
                trackID: 'ZAKOWICE--MIKOLAJOW--SLOTWINY',
                trackSVG: `
                M860,1760 1430,1760
                M860,1780 1430,1780

                M1330,1660 1430,1660
                M1330,1680 1430,1680
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [] //! NO NODES IN THIS CLUSTER
    },
    "5377_ZP_ZAKOWICEPOLUDNIOWE": {
        "TRACKS": [
            {
                trackID: '5377_ZAKOWICEPOLUDNIOWE',
                /*
                T1
                T2

                SW1/2 + SW3/4

                SW5/6 + T11
                */
                trackSVG: `
                M600,1760 850,1760
                M600,1780 850,1780

                M680,1760 682.5,1765 682.5,1775 685,1780 M705,1780 707.5,1775 707.5,1765 710,1760

                M720,1760 722.5,1755 722.5,1705 725,1700 740,1700 M750,1700 810,1700 M820,1700 850,1700
                M830,1700 832.5,1695 832.5,1685 835,1680 850,1680
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '5377_ZP_A',
                signalPos: { x: '600', y: '1760' },
                trainPos: { x: '585', y: '1760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_B',
                signalPos: { x: '600', y: '1780' },
                trainPos: { x: '585', y: '1780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5377_ZP_E',
                signalPos: { x: '740', y: '1700' },
                trainPos: { x: '755', y: '1700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_T',
                signalPos: { x: '820', y: '1700' },
                trainPos: { x: '805', y: '1700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5377_ZP_W',
                signalPos: { x: '850', y: '1680' },
                trainPos: { x: '865', y: '1680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_U',
                signalPos: { x: '850', y: '1700' },
                trainPos: { x: '865', y: '1700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_D',
                signalPos: { x: '850', y: '1760' },
                trainPos: { x: '865', y: '1760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_C',
                signalPos: { x: '850', y: '1780' },
                trainPos: { x: '865', y: '1780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-ZakowicePoludniowe',
                nodeType: 'stationName',
                stationPrefix: 'ZP',
                stationName: 'Żakowice Południowe',
                nodePos: { x: 720, y: 1660 },
                nodePosFlipped: { x: 720, y: 1820 }
            },
            {
                nodeID: 'platform-ZakowicePoludiowe-2',
                nodeType: 'platform',
                nodePos: { x: 605, y: 1745 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-ZakowicePoludiowe-1',
                nodeType: 'platform',
                nodePos: { x: 605, y: 1785 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-ZakowicePoludniowe_11',
                nodeType: 'trackMarker',
                nodePos: { x: 780, y: 1700 },
                text: '11',
            },
        ]
    },
    "3928_Sl_SLOTWINY": {
        "TRACKS": [
            {
                trackID: '3928_SLOTWINY',
                /*
                T1 + TOR 3M
                TOR1ZP + SW5

                TOR3K + SW1
                SW2/4cd + SW4ab + T7

                T2 + TOR4M
                T5
                T9

                SW42/43 + SW38/39
                */
                trackSVG: `
                M1030,1680 1140,1680 M1150,1680 1230,1680 M1240,1680 1320,1680
                M1030,1700 1100,1700 1102.5,1695 1102.5,1685 1105,1680

                M1030,1720 1050,1720 1052.5,1715 1052.5,1705 1055,1700
                M1070,1680 1072.5,1685 1072.5,1695 1075,1700 M1085,1700 1087.5,1705 1087.5,1715 1090,1720 1140,1720 M1150,1720 1230,1720 M1240,1720 1260,1720 1262.5,1715 1262.5,1705 1265,1700

                M1125,1680 1127.5,1675 1127.5,1665 1130,1660 1140,1660 M1150,1660 1230,1660 M1240,1660 1320,1660
                M1110,1720 1112.5,1715 1112.5,1705 1115,1700 1140,1700 M1150,1700 1230,1700 M1240,1700 1275,1700 1277.5,1695 1277.5,1685 1280,1680
                M1125,1720 1127.5,1725 1127.5,1735 1130,1740 1140,1740 M1150,1740 1230,1740 M1240,1740 1245,1740 1247.5,1735 1247.5,1725 1250,1720

                M1260,1660 1262.5,1665 1262.5,1675 1265,1680 M1295,1680 1297.5,1675 1297.5,1665 1300,1660
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3928_Sl_A',
                signalPos: { x: '1030', y: '1680' },
                trainPos: { x: '1015', y: '1680' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_B',
                signalPos: { x: '1030', y: '1700' },
                trainPos: { x: '1015', y: '1700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_C',
                signalPos: { x: '1030', y: '1720' },
                trainPos: { x: '1015', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3928_Sl_F',
                signalPos: { x: '1140', y: '1660' },
                trainPos: { x: '1155', y: '1660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_G',
                signalPos: { x: '1140', y: '1680' },
                trainPos: { x: '1155', y: '1680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_D5',
                signalPos: { x: '1140', y: '1700' },
                trainPos: { x: '1155', y: '1700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_D7',
                signalPos: { x: '1140', y: '1720' },
                trainPos: { x: '1155', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_D9',
                signalPos: { x: '1140', y: '1740' },
                trainPos: { x: '1155', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '3928_Sl_H',
                signalPos: { x: '1240', y: '1660' },
                trainPos: { x: '1225', y: '1660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_J',
                signalPos: { x: '1240', y: '1680' },
                trainPos: { x: '1225', y: '1680' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_K5',
                signalPos: { x: '1240', y: '1700' },
                trainPos: { x: '1225', y: '1700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_K7',
                signalPos: { x: '1240', y: '1720' },
                trainPos: { x: '1225', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_K9',
                signalPos: { x: '1240', y: '1740' },
                trainPos: { x: '1225', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3928_Sl_M',
                signalPos: { x: '1320', y: '1660' },
                trainPos: { x: '1335', y: '1660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_N',
                signalPos: { x: '1320', y: '1680' },
                trainPos: { x: '1335', y: '1680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Slotwiny',
                nodeType: 'stationName',
                stationPrefix: 'Sł',
                stationName: 'Słotwiny',
                nodePos: { x: 1190, y: 1615 },
                nodePosFlipped: { x: 1190, y: 1820 }
            },
            {
                nodeID: 'simpleText-Slotwiny_Controlled',
                nodeType: 'simpleText',
                text: 'Controlled by Żakowice Południowe',
                nodePos: { x: 1190, y: 1630 },
                nodePosFlipped: { x: 1190, y: 1805 },
                textSize: 10
            },
            {
                nodeID: 'platform-Slotwiny-1',
                nodeType: 'platform',
                nodePos: { x: 1160, y: 1647.5 },
                width: 50,
                height: 7.5,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Slotwiny-2',
                nodeType: 'platform',
                nodePos: { x: 1160, y: 1685 },
                width: 50,
                height: 7.5,
                text: 'Peron II'
            },
            {
                nodeID: 'trackMarker-Slotwiny_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1660 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Slotwiny_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1680 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Slotwiny_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1700 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Slotwiny_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1720 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-Slotwiny_9',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1740 },
                text: '9',
            },
        ]
    },
    "2628_Mi_MIKOLAJOW": {
        "TRACKS": [
            {
                trackID: '2628_MIKOLAJOW',
                /*

                */
                trackSVG: `
                M1440,1660 1520,1660 M1530,1660 1630,1660 M1640,1660 1645,1660 M1650,1660 1655,1660 M1660,1660 1665,1660
                M1440,1680 1520,1680 M1530,1680 1630,1680 M1640,1680 1645,1680 M1650,1680 1655,1680 M1660,1680 1665,1680

                M1440,1760 1460,1760 1462.5,1755 1462.5,1665 1465,1660
                M1440,1780 1480,1780 1482.5,1775 1482.5,1685 1485,1680

                M1500,1660 1502.5,1655 1502.5,1645 1505,1640 1520,1640 M1530,1640 1630,1640 M1640,1640 1645,1640 M1650,1640 1655,1640 M1660,1640 1665,1640
                M1500,1680 1502.5,1685 1502.5,1695 1505,1700 1520,1700 M1530,1700 1630,1700 M1640,1700 1645,1700 M1650,1700 1655,1700 M1660,1700 1665,1700
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '2628_Mi_A',
                signalPos: { x: '1440', y: '1660' },
                trainPos: { x: '1425', y: '1660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_B',
                signalPos: { x: '1440', y: '1680' },
                trainPos: { x: '1425', y: '1680' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_C',
                signalPos: { x: '1440', y: '1760' },
                trainPos: { x: '1425', y: '1760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_D',
                signalPos: { x: '1440', y: '1780' },
                trainPos: { x: '1425', y: '1780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2628_Mi_J',
                signalPos: { x: '1520', y: '1640' },
                trainPos: { x: '1535', y: '1640' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_H',
                signalPos: { x: '1520', y: '1660' },
                trainPos: { x: '1535', y: '1660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_G',
                signalPos: { x: '1520', y: '1680' },
                trainPos: { x: '1535', y: '1680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_F',
                signalPos: { x: '1520', y: '1700' },
                trainPos: { x: '1535', y: '1700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2628_Mi_M',
                signalPos: { x: '1640', y: '1640' },
                trainPos: { x: '1595', y: '1640' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_N',
                signalPos: { x: '1640', y: '1660' },
                trainPos: { x: '1595', y: '1660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_O',
                signalPos: { x: '1640', y: '1680' },
                trainPos: { x: '1595', y: '1680' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_P',
                signalPos: { x: '1640', y: '1700' },
                trainPos: { x: '1595', y: '1700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Mikolajow',
                nodeType: 'stationName',
                stationPrefix: 'Mi',
                stationName: 'Mikołajów',
                nodePos: { x: 1560, y: 1615 },
                nodePosFlipped: { x: 1560, y: 1730 }
            },
            {
                nodeID: 'trackMarker-Mikolajow-2',
                nodeType: 'trackMarker',
                nodePos: { x: 1580, y: 1640 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Mikolajow-1',
                nodeType: 'trackMarker',
                nodePos: { x: 1580, y: 1660 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Mikolajow-3',
                nodeType: 'trackMarker',
                nodePos: { x: 1580, y: 1680 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Mikolajow-5',
                nodeType: 'trackMarker',
                nodePos: { x: 1580, y: 1700 },
                text: '5',
            },
        ]
    },
    "1803_KO_KOLUSZKI": {
        "TRACKS": [
            {
                trackID: '1803_KOLUSZKI',
                /*
                *TOR2G + T5 + T105 + SW10
                *TOR1G + T3 + T103 + SW25/21

                *T1 (LK1 left-right)
                *T2 (LK1 left-right)

                *TOR1Z + T4 + SW65cd/61
                *TOR1S + T6 + T104 + SW16/13
                ----
                ----
                ----
                *SW144/143

                *INNER CURVE (T3s)
                *OUTER CURVE (T4s)
                *SW157/156
                *CURVE LK1/Slotwiny_LK536

                *SW129/118
                *SW120b/120a
                *SW127/125 + SW126/123
                *SW124/122ab + SW122cd/121

                *SW115/112ab
                *SW119/114
                *SW116/113ab + SW113cd/109ab
                *DKW 110/117/105/107

                *SW112cd/104 + T8/108
                *T10

                ?SW111 + T7 + T107

                *SW78/76ab + SW76cd/T106
                *DKW74cd/73/70/69ab
                *SW69cd/68ab + SW68cd/65ab

                *SW67b/64a
                *SW72/67a
                ?SW64b + T109 + SW22
                ?SW63cd + T111 + SW19

                *SW62/59
                *SW60/57 + SW52/51
                */
                trackSVG: `
                M1030,1340 1100,1340 M1110,1340 1200,1340 1202.5,1345 1202.5,1375 1205,1380 1270,1380 M1280,1380 1440,1380 M1450,1380 1550,1380 M1560,1380 1575,1380 1577.5,1385 1577.5,1395 1580,1400 1720,1400 M1730,1400 1830,1400 M1840,1400 1880,1400 1882.5,1405 1882.5,1415 1885,1420 1895,1420 1897.5,1425 1897.5,1435 1900,1440
                M1030,1360 1100,1360 M1110,1360 1190,1360 1192.5,1365 1192.5,1415 1195,1420 1270,1420 M1280,1420 1440,1420 M1450,1420 1550,1420 M1560,1420 1720,1420 M1730,1420 1830,1420 M1840,1420 1860,1420 1862.5,1425 1862.5,1435 1865,1440

                M1030,1460 1100,1460 M1110,1460 1270,1460 M1280,1460 1400,1460 1402.5,1455 1402.5,1445 1405,1440 1440,1440 M1450,1440 1550,1440 M1560,1440 1720,1440 M1730,1440 1830,1440 M1840,1440 2010,1440
                M1030,1480 1100,1480 M1110,1480 1270,1480 M1280,1480 1440,1480 M1450,1480 1550,1480 M1560,1480 1720,1480 M1730,1480 1830,1480 M1840,1480 2010,1480

                M1030,1550 1310,1550 1312.5,1545 1312.5,1505 1315,1500 1440,1500 M1450,1500 1550,1500 M1560,1500 1660,1500 1662.5,1495 1662.5,1485 1665,1480
                M1030,1570 1325,1570 1327.5,1565 1327.5,1525 1330,1520 1440,1520 M1450,1520 1550,1520 M1560,1520 1700,1520 M1710,1520 1810,1520 M1820,1520 1865,1520 1867.5,1515 1867.5,1485 1870,1480



                M1060,1340 1062.5,1345 1062.5,1355 1065,1360

                M1050,1360 1052.5,1365 1052.5,1395 1055,1400 1100,1400 M1110,1400 1170,1400 1172.5,1405 1172.5,1415 1170,1420 1110,1420 M1100,1420 1070,1420 1067.5,1425 1067.5,1455 1065,1460
                M1080,1360 1082.5,1365 1082.5,1375 1085,1380 1100,1380 M1110,1380 1180,1380 1182.5,1385 1182.5,1435 1180,1440 1110,1440 M1100,1440 1080,1440 1077.5,1445 1077.5,1475 1075,1480
                M1050,1460 1052.5,1465 1052.5,1475 1055,1480
                M1065,1480 1067.5,1485 1067.5,1495 1070,1500 1100,1500 1102.5,1505 1102.5,1525 1100,1530 1030,1530

                M1300,1460 1302.5,1455 1302.5,1445 1305,1440 1390,1440 1392.5,1435 1392.5,1405 1395,1400 1400,1400 1402.5,1395 1402.5,1385 1405,1380
                M1380,1420 1382.5,1415 1382.5,1405 1385,1400 1400,1400
                M1310,1460 1312.5,1465 1312.5,1475 1315,1480 M1325,1480 1327.5,1485 1327.5,1495 1330,1500
                M1340,1520 1342.5,1515 1342.5,1505 1345,1500 M1355,1500 1357.5,1495 1357.5,1485 1360,1480

                M1385,1500 1387.5,1505 1387.5,1515 1390,1520
                M1390,1480 1392.5,1475 1392.5,1465 1395,1460
                M1400,1480 1402.5,1485 1402.5,1495 1405,1500 M1415,1500 1417.5,1505 1417.5,1515 1420,1520
                M1410,1440 1430,1420 M1410,1420 1430,1440

                M1400,1520 1402.5,1525 1402.5,1555 1405,1560 1440,1560 M1450,1560 1550,1560 M1560,1560 1700,1560 M1710,1560 1810,1560 M1820,1560 1835,1560 1837.5,1555 1837.5,1545 1840,1540
                M1415,1560 1417.5,1565 1417.5,1575 1420,1580 1440,1580 M1450,1580 1550,1580 M1560,1580 1575,1580 1577.5,1575 1577.5,1565 1580,1560

                M1415,1380 1417.5,1375 1417.5,1365 1420,1360 1440,1360 M1450,1360 1550,1360 M1560,1360 1670,1360 1672.5,1365 1672.5,1375 1675,1380 1720,1380 M1730,1380 1810,1380 M1820,1380 1900,1380 1902.5,1385 1902.5,1405 1905,1410 1915,1410 1917.5,1415 1917.5,1435 1920,1440

                M1570,1500 1572.5,1505 1572.5,1515 1575,1520 M1585,1520 1587.5,1525 1587.5,1535 1590,1540 1700,1540 M1710,1540 1810,1540 M1820,1540 1850,1540 1852.5,1535 1852.5,1525 1855,1520
                M1600,1540 1620,1560 M1600,1560 1620,1540
                M1630,1540 1632.5,1535 1632.5,1525 1635,1520 M1645,1520 1647.5,1515 1647.5,1505 1650,1500

                M1600,1400 1602.5,1395 1602.5,1385 1605,1380 1645,1380 1647.5,1375 1647.5,1365 1650,1360
                M1610,1420 1612.5,1415 1612.5,1385 1615,1380
                M1630,1380 1632.5,1375 1632.5,1345 1635,1340 1680,1340 1682.5,1345 1682.5,1355 1685,1360 1720,1360 M1730,1360 1810,1360 M1820,1360 1835,1360 1837.5,1365 1837.5,1375 1840,1380
                M1645,1340 1647.5,1335 1647.5,1325 1650,1320 1690,1320 1692.5,1325 1692.5,1335 1695,1340 1720,1340 M1730,1340 1810,1340 M1820,1340 1855,1340 1857.5,1345 1857.5,1375 1860,1380

                M1665,1420 1667.5,1425 1667.5,1435 1670,1440
                M1680,1480 1682.5,1475 1682.5,1445 1685,1440 M1705,1440 1707.5,1445 1707.5,1475 1710,1480

                M1880,1440 1882.5,1445 1882.5,1475 1885,1480
                M1930,1480 1932.5,1475 1932.5,1445 1935,1440
                M1980,1440 1982.5,1445 1982.5,1475 1985,1480
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: '1803_KO_R2',
                signalPos: { x: '1030', y: '1340' },
                trainPos: { x: '1000', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_R1',
                signalPos: { x: '1030', y: '1360' },
                trainPos: { x: '1000', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '1803_KO_U1',
                signalPos: { x: '1030', y: '1460' },
                trainPos: { x: '1000', y: '1460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_U2',
                signalPos: { x: '1030', y: '1480' },
                trainPos: { x: '1000', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '1803_KO_T',
                signalPos: { x: '1030', y: '1530' },
                trainPos: { x: '1015', y: '1530' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_M',
                signalPos: { x: '1030', y: '1550' },
                trainPos: { x: '1015', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_N',
                signalPos: { x: '1030', y: '1570' },
                trainPos: { x: '1015', y: '1570' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: '1803_KO_O2',
                signalPos: { x: '1100', y: '1340' },
                trainPos: { x: '1115', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_O1',
                signalPos: { x: '1100', y: '1360' },
                trainPos: { x: '1115', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_P2',
                signalPos: { x: '1100', y: '1380' },
                trainPos: { x: '1115', y: '1380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_P1',
                signalPos: { x: '1100', y: '1400' },
                trainPos: { x: '1115', y: '1400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_S3',
                signalPos: { x: '1100', y: '1420' },
                trainPos: { x: '1115', y: '1420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_S4',
                signalPos: { x: '1100', y: '1440' },
                trainPos: { x: '1115', y: '1440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_S1',
                signalPos: { x: '1100', y: '1460' },
                trainPos: { x: '1115', y: '1460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_S2',
                signalPos: { x: '1100', y: '1480' },
                trainPos: { x: '1115', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ INTERMEDIATE SIGNALS LEFT TO RIGHT
            {
                signalName: '1803_KO_K2',
                signalPos: { x: '1280', y: '1380' },
                trainPos: { x: '1265', y: '1380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_K1',
                signalPos: { x: '1280', y: '1420' },
                trainPos: { x: '1265', y: '1420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_L1',
                signalPos: { x: '1280', y: '1460' },
                trainPos: { x: '1265', y: '1460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_L2',
                signalPos: { x: '1280', y: '1480' },
                trainPos: { x: '1265', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ TRACK SIGNALS LEFT SIDE
            {
                signalName: '1803_KO_J7',
                signalPos: { x: '1440', y: '1360' },
                trainPos: { x: '1475', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J5',
                signalPos: { x: '1440', y: '1380' },
                trainPos: { x: '1475', y: '1380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J3',
                signalPos: { x: '1440', y: '1420' },
                trainPos: { x: '1475', y: '1420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J1',
                signalPos: { x: '1440', y: '1440' },
                trainPos: { x: '1475', y: '1440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J2',
                signalPos: { x: '1440', y: '1480' },
                trainPos: { x: '1475', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J4',
                signalPos: { x: '1440', y: '1500' },
                trainPos: { x: '1475', y: '1500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J6',
                signalPos: { x: '1440', y: '1520' },
                trainPos: { x: '1475', y: '1520' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J8',
                signalPos: { x: '1440', y: '1560' },
                trainPos: { x: '1475', y: '1560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J10',
                signalPos: { x: '1440', y: '1580' },
                trainPos: { x: '1475', y: '1580' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ TRACK SIGNALS RIGHT SIDE
            {
                signalName: '1803_KO_G7',
                signalPos: { x: '1560', y: '1360' },
                trainPos: { x: '1525', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G5',
                signalPos: { x: '1560', y: '1380' },
                trainPos: { x: '1525', y: '1380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G3',
                signalPos: { x: '1560', y: '1420' },
                trainPos: { x: '1525', y: '1420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G1',
                signalPos: { x: '1560', y: '1440' },
                trainPos: { x: '1525', y: '1440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G2',
                signalPos: { x: '1560', y: '1480' },
                trainPos: { x: '1525', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G4',
                signalPos: { x: '1560', y: '1500' },
                trainPos: { x: '1525', y: '1500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G6',
                signalPos: { x: '1560', y: '1520' },
                trainPos: { x: '1525', y: '1520' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G8',
                signalPos: { x: '1560', y: '1560' },
                trainPos: { x: '1525', y: '1560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G10',
                signalPos: { x: '1560', y: '1580' },
                trainPos: { x: '1525', y: '1580' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ GT TRACK SIGNALS LEFT SIDE
            {
                signalName: '1803_KO_E111',
                signalPos: { x: '1720', y: '1340' },
                trainPos: { x: '1735', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E109',
                signalPos: { x: '1720', y: '1360' },
                trainPos: { x: '1735', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E107',
                signalPos: { x: '1720', y: '1380' },
                trainPos: { x: '1735', y: '1380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E105',
                signalPos: { x: '1720', y: '1400' },
                trainPos: { x: '1735', y: '1400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E103',
                signalPos: { x: '1720', y: '1420' },
                trainPos: { x: '1735', y: '1420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E101',
                signalPos: { x: '1720', y: '1440' },
                trainPos: { x: '1735', y: '1440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E102',
                signalPos: { x: '1720', y: '1480' },
                trainPos: { x: '1735', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E104',
                signalPos: { x: '1700', y: '1520' },
                trainPos: { x: '1715', y: '1520' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E106',
                signalPos: { x: '1700', y: '1540' },
                trainPos: { x: '1715', y: '1540' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E108',
                signalPos: { x: '1700', y: '1560' },
                trainPos: { x: '1715', y: '1560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ GT TRACK SIGNALS RIGHT SIDE
            {
                signalName: '1803_KO_C111',
                signalPos: { x: '1820', y: '1340' },
                trainPos: { x: '1805', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C109',
                signalPos: { x: '1820', y: '1360' },
                trainPos: { x: '1805', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C107',
                signalPos: { x: '1820', y: '1380' },
                trainPos: { x: '1805', y: '1380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C105',
                signalPos: { x: '1840', y: '1400' },
                trainPos: { x: '1825', y: '1400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C103',
                signalPos: { x: '1840', y: '1420' },
                trainPos: { x: '1825', y: '1420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C101',
                signalPos: { x: '1840', y: '1440' },
                trainPos: { x: '1825', y: '1440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C102',
                signalPos: { x: '1840', y: '1480' },
                trainPos: { x: '1825', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C104',
                signalPos: { x: '1820', y: '1520' },
                trainPos: { x: '1805', y: '1520' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C106',
                signalPos: { x: '1820', y: '1540' },
                trainPos: { x: '1805', y: '1540' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C108',
                signalPos: { x: '1820', y: '1560' },
                trainPos: { x: '1805', y: '1560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //* ENTRY SIGNALS FROM ROGOW (RIGHT SIDE)
            {
                signalName: '1803_KO_B',
                signalPos: { x: '2010', y: '1440' },
                trainPos: { x: '2040', y: '1440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_A',
                signalPos: { x: '2010', y: '1480' },
                trainPos: { x: '2040', y: '1480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Koluszki',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1620, y: 1450 },
                postType: 'computer',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-Koluszki',
                nodeType: 'stationName',
                stationPrefix: 'Ko',
                stationName: 'Koluszki',
                nodePos: { x: 1450, y: 1330 },
                nodePosFlipped: { x: 1500, y: 1620 }
            },
            {
                nodeID: 'platform-Koluszki-Peron1',
                nodeType: 'platform',
                nodePos: { x: 1460, y: 1385 },
                width: 80,
                height: 30,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Koluszki-Peron2',
                nodeType: 'platform',
                nodePos: { x: 1460, y: 1445 },
                width: 80,
                height: 30,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Koluszki-Peron3',
                nodeType: 'platform',
                nodePos: { x: 1460, y: 1525 },
                width: 80,
                height: 30,
                text: 'Peron III'
            },
            {
                nodeID: 'trackMarker-Koluszki_5b',
                nodeType: 'trackMarker',
                nodePos: { x: 1155, y: 1340 },
                text: '5b',
            },
            {
                nodeID: 'trackMarker-Koluszki_3b',
                nodeType: 'trackMarker',
                nodePos: { x: 1155, y: 1360 },
                text: '3b',
            },
            {
                nodeID: 'trackMarker-Koluszki_4s',
                nodeType: 'trackMarker',
                nodePos: { x: 1145, y: 1380 },
                text: '4s',
            },
            {
                nodeID: 'trackMarker-Koluszki_3s',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 1420 },
                text: '3s',
            },
            {
                nodeID: 'trackMarker-Koluszki_1c',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1460 },
                text: '1c',
            },
            {
                nodeID: 'trackMarker-Koluszki_2c',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1480 },
                text: '2c',
            },
            //~ TRACK MARKERS
            {
                nodeID: 'trackMarker-Koluszki_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1360 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-Koluszki_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1380 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Koluszki_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1420 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Koluszki_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1440 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Koluszki_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1480 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Koluszki_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1500 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Koluszki_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1520 },
                text: '6',
            },
            {
                nodeID: 'trackMarker-Koluszki_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1560 },
                text: '8',
            },
            {
                nodeID: 'trackMarker-Koluszki_10',
                nodeType: 'trackMarker',
                nodePos: { x: 1500, y: 1580 },
                text: '10',
            },
            //~ GT TRACK MARKERS
            {
                nodeID: 'trackMarker-Koluszki_111',
                nodeType: 'trackMarker',
                nodePos: { x: 1770, y: 1340 },
                text: '111',
            },
            {
                nodeID: 'trackMarker-Koluszki_109',
                nodeType: 'trackMarker',
                nodePos: { x: 1770, y: 1360 },
                text: '109',
            },
            {
                nodeID: 'trackMarker-Koluszki_107',
                nodeType: 'trackMarker',
                nodePos: { x: 1770, y: 1380 },
                text: '107',
            },
            {
                nodeID: 'trackMarker-Koluszki_105',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 1400 },
                text: '105',
            },
            {
                nodeID: 'trackMarker-Koluszki_103',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 1420 },
                text: '103',
            },
            {
                nodeID: 'trackMarker-Koluszki_101',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 1440 },
                text: '101',
            },
            {
                nodeID: 'trackMarker-Koluszki_102',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 1480 },
                text: '102',
            },
            {
                nodeID: 'trackMarker-Koluszki_104',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 1520 },
                text: '104',
            },
            {
                nodeID: 'trackMarker-Koluszki_106',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 1540 },
                text: '106',
            },
            {
                nodeID: 'trackMarker-Koluszki_108',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 1560 },
                text: '108',
            },
        ]
    },
    "KOLUSZKI_ROGOW_1": {
        "TRACKS": [
            {
                trackID: 'KOLUSZKI_ROGOW',
                trackSVG: `
                M2020,1440 2120,1440 M2140,1440 2240,1440 M2260,1440 2360,1440 M2380,1440 2480,1440 M2490,1440 2500,1440 2510,1450
                M2020,1480 2120,1480 M2140,1480 2240,1480 M2260,1480 2360,1480 M2380,1480 2480,1480 M2490,1480 2500,1480 2510,1490
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1021N',
                signalPos: { x: '2130', y: '1440' },
                trainPos: { x: '2100', y: '1440' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1020',
                signalPos: { x: '2130', y: '1480' },
                trainPos: { x: '2100', y: '1480' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1021',
                signalPos: { x: '2130', y: '1440' },
                trainPos: { x: '2160', y: '1440' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_1020N',
                signalPos: { x: '2130', y: '1480' },
                trainPos: { x: '2160', y: '1480' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_1013N',
                signalPos: { x: '2250', y: '1440' },
                trainPos: { x: '2220', y: '1440' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1014',
                signalPos: { x: '2250', y: '1480' },
                trainPos: { x: '2220', y: '1480' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1013',
                signalPos: { x: '2250', y: '1440' },
                trainPos: { x: '2280', y: '1440' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_1014N',
                signalPos: { x: '2250', y: '1480' },
                trainPos: { x: '2280', y: '1480' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_1003N',
                signalPos: { x: '2370', y: '1440' },
                trainPos: { x: '2340', y: '1440' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1002',
                signalPos: { x: '2370', y: '1480' },
                trainPos: { x: '2340', y: '1480' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1003',
                signalPos: { x: '2370', y: '1440' },
                trainPos: { x: '2400', y: '1440' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_1002N',
                signalPos: { x: '2370', y: '1480' },
                trainPos: { x: '2400', y: '1480' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_987N',
                signalPos: { x: '2490', y: '1440' },
                trainPos: { x: '2460', y: '1440' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_988',
                signalPos: { x: '2490', y: '1480' },
                trainPos: { x: '2460', y: '1480' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Koluszki_Rogow_1021',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 1440 },
                text: '1021',
            },
            {
                nodeID: 'trackMarker-Koluszki_Rogow_1036',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 1480 },
                text: '1036',
            },
            //
            {
                nodeID: 'trackMarker-Koluszki_Rogow_1013',
                nodeType: 'trackMarker',
                nodePos: { x: 2190, y: 1440 },
                text: '1013',
            },
            {
                nodeID: 'trackMarker-Koluszki_Rogow_1028',
                nodeType: 'trackMarker',
                nodePos: { x: 2190, y: 1480 },
                text: '1028',
            },
            //
            {
                nodeID: 'trackMarker-Koluszki_Rogow_1003',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1440 },
                text: '1003',
            },
            {
                nodeID: 'trackMarker-Koluszki_Rogow_1014',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1480 },
                text: '1014',
            },
            //
            {
                nodeID: "simpleText-po-Wągry",
                nodeType: "simpleText",
                nodePos: { x: 2430, y: 1410 },
                nodePosFlipped: { x: 2430, y: 1510 },
                text: "Wągry",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Wągry-1',
                nodeType: 'platform',
                nodePos: { x: 2400, y: 1425 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Wągry-2',
                nodeType: 'platform',
                nodePos: { x: 2400, y: 1485 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'trackMarker-Koluszki_Rogow_987',
                nodeType: 'trackMarker',
                nodePos: { x: 2430, y: 1440 },
                text: '987',
            },
            {
                nodeID: 'trackMarker-Koluszki_Rogow_1002',
                nodeType: 'trackMarker',
                nodePos: { x: 2430, y: 1480 },
                text: '1002',
            },
        ]
    },
    "KOLUSZKI_ROGOW_2": {
        "TRACKS": [
            {
                trackID: 'KOLUSZKI_ROGOW',
                trackSVG: `
                M10,1890 20,1900 30,1900 M40,1900 140,1900 M160,1900 260,1900
                M10,1910 20,1920 30,1920 M40,1920 140,1920 M160,1920 260,1920
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_987',
                signalPos: { x: '30', y: '1900' },
                trainPos: { x: '60', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_988N',
                signalPos: { x: '30', y: '1920' },
                trainPos: { x: '60', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_979N',
                signalPos: { x: '150', y: '1900' },
                trainPos: { x: '120', y: '1900' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_978',
                signalPos: { x: '150', y: '1920' },
                trainPos: { x: '120', y: '1920' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_979',
                signalPos: { x: '150', y: '1900' },
                trainPos: { x: '180', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_978N',
                signalPos: { x: '150', y: '1920' },
                trainPos: { x: '180', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Koluszki_Rogow_979',
                nodeType: 'trackMarker',
                nodePos: { x: 90, y: 1900 },
                text: '979',
            },
            {
                nodeID: 'trackMarker-Koluszki_Rogow_988',
                nodeType: 'trackMarker',
                nodePos: { x: 90, y: 1920 },
                text: '988',
            },
            //
            {
                nodeID: 'trackMarker-Koluszki_Rogow_965',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 1900 },
                text: '965',
            },
            {
                nodeID: 'trackMarker-Koluszki_Rogow_978',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 1920 },
                text: '978',
            },
        ]
    },
    "3590_Rg_ROGOW": {
        "TRACKS": [
            {
                trackID: '3590_ROGOW',
                /*
                T1
                T2

                SW31/30 + SW29/28 + T3 + SW8/7

                SW4/3 + SW2/1
                */
                trackSVG: `
                M270,1900 320,1900 M330,1900 430,1900 M440,1900 550,1900
                M270,1920 360,1920 M370,1920 470,1920 M480,1920 550,1920

                M290,1920 292.5,1915 292.5,1905 295,1900 M305,1900 307.5,1895 307.5,1885 310,1880 320,1880 M330,1880 430,1880 M440,1880 455,1880 457.5,1885 457.5,1895 460,1900
                M340,1920 342.5,1925 342.5,1935 345,1940 360,1940 M370,1940 470,1940 M480,1940 495,1940 497.5,1935 497.5,1925 500,1920

                M510,1900 512.5,1905 512.5,1915 515,1920 M525,1920 527.5,1915 527.5,1905 530,1900
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3590_Rg_L',
                signalPos: { x: '270', y: '1900' },
                trainPos: { x: '240', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3590_Rg_M',
                signalPos: { x: '270', y: '1920' },
                trainPos: { x: '240', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3590_Rg_K',
                signalPos: { x: '320', y: '1880' },
                trainPos: { x: '350', y: '1880' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3590_Rg_J',
                signalPos: { x: '320', y: '1900' },
                trainPos: { x: '350', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3590_Rg_H',
                signalPos: { x: '360', y: '1920' },
                trainPos: { x: '390', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3590_Rg_G',
                signalPos: { x: '360', y: '1940' },
                trainPos: { x: '390', y: '1940' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~
            {
                signalName: '3590_Rg_C',
                signalPos: { x: '440', y: '1880' },
                trainPos: { x: '410', y: '1880' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3590_Rg_D',
                signalPos: { x: '440', y: '1900' },
                trainPos: { x: '410', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3590_Rg_E',
                signalPos: { x: '480', y: '1920' },
                trainPos: { x: '450', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3590_Rg_F',
                signalPos: { x: '480', y: '1940' },
                trainPos: { x: '450', y: '1940' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3590_Rg_B',
                signalPos: { x: '550', y: '1900' },
                trainPos: { x: '580', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3590_Rg_A',
                signalPos: { x: '550', y: '1920' },
                trainPos: { x: '580', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Rogow',
                nodeType: 'dispatchingPost',
                nodePos: { x: 400, y: 1955 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Rogow',
                nodeType: 'stationName',
                stationPrefix: 'Rg',
                stationName: 'Rogów',
                nodePos: { x: 410, y: 1850 },
                nodePosFlipped: { x: 360, y: 1965 }
            },
            {
                nodeID: 'platform-Rogow-Peron1',
                nodeType: 'platform',
                nodePos: { x: 375, y: 1905 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Rogow_3',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 1880 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Rogow_1',
                nodeType: 'trackMarker',
                nodePos: { x: 380, y: 1900 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Rogow_2',
                nodeType: 'trackMarker',
                nodePos: { x: 420, y: 1920 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Rogow_4',
                nodeType: 'trackMarker',
                nodePos: { x: 420, y: 1940 },
                text: '4',
            },
        ]
    },
    "ROGOW_PLYCWIA": {
        "TRACKS": [
            {
                trackID: 'TRACKS_ROGOW_PLYCWIA',
                trackSVG: `
                M560,1900 660,1900 M680,1900 780,1900 M800,1900 900,1900 M920,1900 1020,1900 M1040,1900 1140,1900 M1160,1900 1260,1900 M1280,1900 1380,1900 M1400,1900 1500,1900 M1520,1900 1620,1900
                M560,1920 660,1920 M680,1920 780,1920 M800,1920 900,1920 M920,1920 1020,1920 M1040,1920 1140,1920 M1160,1920 1260,1920 M1280,1920 1380,1920 M1400,1920 1500,1920 M1520,1920 1620,1920
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_931N',
                signalPos: { x: '670', y: '1900' },
                trainPos: { x: '640', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_932',
                signalPos: { x: '670', y: '1920' },
                trainPos: { x: '640', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_931',
                signalPos: { x: '670', y: '1900' },
                trainPos: { x: '700', y: '1900' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_932N',
                signalPos: { x: '670', y: '1920' },
                trainPos: { x: '700', y: '1920' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_925N',
                signalPos: { x: '790', y: '1900' },
                trainPos: { x: '760', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_922',
                signalPos: { x: '790', y: '1920' },
                trainPos: { x: '760', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_925',
                signalPos: { x: '790', y: '1900' },
                trainPos: { x: '820', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_922N',
                signalPos: { x: '790', y: '1920' },
                trainPos: { x: '820', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_909N',
                signalPos: { x: '910', y: '1900' },
                trainPos: { x: '880', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_910',
                signalPos: { x: '910', y: '1920' },
                trainPos: { x: '880', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_909',
                signalPos: { x: '910', y: '1900' },
                trainPos: { x: '940', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_910N',
                signalPos: { x: '910', y: '1920' },
                trainPos: { x: '940', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_893N',
                signalPos: { x: '1030', y: '1900' },
                trainPos: { x: '1000', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_894',
                signalPos: { x: '1030', y: '1920' },
                trainPos: { x: '1000', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_893',
                signalPos: { x: '1030', y: '1900' },
                trainPos: { x: '1060', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_894N',
                signalPos: { x: '1030', y: '1920' },
                trainPos: { x: '1060', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_879N',
                signalPos: { x: '1150', y: '1900' },
                trainPos: { x: '1120', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_878',
                signalPos: { x: '1150', y: '1920' },
                trainPos: { x: '1120', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_879',
                signalPos: { x: '1150', y: '1900' },
                trainPos: { x: '1180', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_878N',
                signalPos: { x: '1150', y: '1920' },
                trainPos: { x: '1180', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_863N',
                signalPos: { x: '1270', y: '1900' },
                trainPos: { x: '1240', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_864',
                signalPos: { x: '1270', y: '1920' },
                trainPos: { x: '1240', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_863',
                signalPos: { x: '1270', y: '1900' },
                trainPos: { x: '1300', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_864N',
                signalPos: { x: '1270', y: '1920' },
                trainPos: { x: '1300', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_851N',
                signalPos: { x: '1390', y: '1900' },
                trainPos: { x: '1360', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_850',
                signalPos: { x: '1390', y: '1920' },
                trainPos: { x: '1360', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_851',
                signalPos: { x: '1390', y: '1900' },
                trainPos: { x: '1420', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_850N',
                signalPos: { x: '1390', y: '1920' },
                trainPos: { x: '1420', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_833N',
                signalPos: { x: '1510', y: '1900' },
                trainPos: { x: '1480', y: '1900' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_834',
                signalPos: { x: '1510', y: '1920' },
                trainPos: { x: '1480', y: '1920' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_833',
                signalPos: { x: '1510', y: '1900' },
                trainPos: { x: '1540', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_834N',
                signalPos: { x: '1510', y: '1920' },
                trainPos: { x: '1540', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Rogow_Plycwia_931',
                nodeType: 'trackMarker',
                nodePos: { x: 610, y: 1900 },
                text: '931',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_946',
                nodeType: 'trackMarker',
                nodePos: { x: 610, y: 1920 },
                text: '946',
            },
            //
            {
                nodeID: 'trackMarker-Rogow_Plycwia_925',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 1900 },
                text: '925',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_932',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 1920 },
                text: '932',
            },
            //
            {
                nodeID: "simpleText-po-PrzylekDuzy",
                nodeType: "simpleText",
                nodePos: { x: 790, y: 1870 },
                nodePosFlipped: { x: 790, y: 1950 },
                text: "Przyłęk Duży",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-PrzylekDuzy-1',
                nodeType: 'platform',
                nodePos: { x: 725, y: 1925 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-PrzylekDuzy-2',
                nodeType: 'platform',
                nodePos: { x: 805, y: 1885 },
                width: 50,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Rogow_Plycwia_909',
                nodeType: 'trackMarker',
                nodePos: { x: 850, y: 1900 },
                text: '909',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_922',
                nodeType: 'trackMarker',
                nodePos: { x: 850, y: 1920 },
                text: '922',
            },
            //
            {
                nodeID: "simpleText-po-Krosnowa",
                nodeType: "simpleText",
                nodePos: { x: 990, y: 1870 },
                nodePosFlipped: { x: 990, y: 1950 },
                text: "Krosnowa",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Krosnowa-1',
                nodeType: 'platform',
                nodePos: { x: 965, y: 1925 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Krosnowa-2',
                nodeType: 'platform',
                nodePos: { x: 965, y: 1885 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_893',
                nodeType: 'trackMarker',
                nodePos: { x: 970, y: 1900 },
                text: '893',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_910',
                nodeType: 'trackMarker',
                nodePos: { x: 970, y: 1920 },
                text: '910',
            },
            //
            {
                nodeID: 'trackMarker-Rogow_Plycwia_879',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 1900 },
                text: '879',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_894',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 1920 },
                text: '894',
            },
            //
            {
                nodeID: 'trackMarker-Rogow_Plycwia_863',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 1900 },
                text: '863',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_878',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 1920 },
                text: '878',
            },
            //
            {
                nodeID: 'trackMarker-Rogow_Plycwia_851',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 1900 },
                text: '851',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_864',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 1920 },
                text: '864',
            },
            //
            {
                nodeID: "simpleText-po-LipceReymontowskie",
                nodeType: "simpleText",
                nodePos: { x: 1430, y: 1870 },
                nodePosFlipped: { x: 1430, y: 1950 },
                text: "Lipce Reymontowskie",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-LipceReymontowskie-1',
                nodeType: 'platform',
                nodePos: { x: 1405, y: 1925 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-LipceReymontowskie-2',
                nodeType: 'platform',
                nodePos: { x: 1405, y: 1885 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_833',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 1900 },
                text: '833',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_850',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 1920 },
                text: '850',
            },
            //
            {
                nodeID: 'trackMarker-Rogow_Plycwia_817',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1900 },
                text: '817',
            },
            {
                nodeID: 'trackMarker-Rogow_Plycwia_834',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1920 },
                text: '834',
            },
        ]
    },
    "3251_Pl_PLYCWIA": {
        "TRACKS": [
            {
                trackID: '3251_PLYCWIA',
                /*
                T1
                T2
                
                SW26/25 + SW24/23
                SW22/21 + T3 + SW12/11
                SW16/15 + T4 + SW5/3
                SW6/4 + SW2/1
                */
                trackSVG: `
                M1630,1900 1700,1900 M1710,1900 1820,1900 M1830,1900 1860,1900 M1870,1900 1970,1900 M1980,1900 2050,1900
                M1630,1920 1700,1920 M1710,1920 1810,1920 M1820,1920 1850,1920 M1860,1920 1970,1920 M1980,1920 2050,1920

                M1650,1900 1652.5,1905 1652.5,1915 1655,1920 M1670,1920 1672.5,1915 1672.5,1905 1675,1900
                M1685,1900 1687.5,1895 1687.5,1885 1690,1880 1700,1880 M1710,1880 1820,1880 M1830,1880 1840,1880 1842.5,1885 1842.5,1895 1845,1900
                M1835,1920 1837.5,1925 1837.5,1935 1840,1940 1850,1940 M1860,1940 1970,1940 M1980,1940 2000,1940 2002.5,1935 2002.5,1925 2005,1920
                M1990,1900 1992.5,1905 1992.5,1915 1995,1920 M2025,1920 2027.5,1915 2027.5,1905 2030,1900
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3251_Pl_T',
                signalPos: { x: '1630', y: '1900' },
                trainPos: { x: '1600', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_U',
                signalPos: { x: '1630', y: '1920' },
                trainPos: { x: '1600', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3251_Pl_R',
                signalPos: { x: '1700', y: '1880' },
                trainPos: { x: '1735', y: '1880' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_P',
                signalPos: { x: '1700', y: '1900' },
                trainPos: { x: '1735', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_O',
                signalPos: { x: '1700', y: '1920' },
                trainPos: { x: '1730', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~
            {
                signalName: '3251_Pl_H',
                signalPos: { x: '1830', y: '1880' },
                trainPos: { x: '1795', y: '1880' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_J',
                signalPos: { x: '1830', y: '1900' },
                trainPos: { x: '1795', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_M',
                signalPos: { x: '1820', y: '1920' },
                trainPos: { x: '1790', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3251_Pl_G',
                signalPos: { x: '1860', y: '1900' },
                trainPos: { x: '1890', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_L',
                signalPos: { x: '1850', y: '1920' },
                trainPos: { x: '1885', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_K',
                signalPos: { x: '1850', y: '1940' },
                trainPos: { x: '1885', y: '1940' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~
            {
                signalName: '3251_Pl_D',
                signalPos: { x: '1980', y: '1900' },
                trainPos: { x: '1950', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_E',
                signalPos: { x: '1980', y: '1920' },
                trainPos: { x: '1945', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_F',
                signalPos: { x: '1980', y: '1940' },
                trainPos: { x: '1945', y: '1940' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3251_Pl_B',
                signalPos: { x: '2050', y: '1900' },
                trainPos: { x: '2080', y: '1900' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_A',
                signalPos: { x: '2050', y: '1920' },
                trainPos: { x: '2080', y: '1920' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Plycwia',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1850, y: 1870 },
                postType: 'computer',
                postRotationAngle: 180,
            },
            {
                nodeID: 'stationName-Plycwia',
                nodeType: 'stationName',
                stationPrefix: 'Pł',
                stationName: 'Płyćwia',
                nodePos: { x: 1805, y: 1845 },
                nodePosFlipped: { x: 1805, y: 1970 }
            },
            {
                nodeID: 'platform-Plycwia-Peron1',
                nodeType: 'platform',
                nodePos: { x: 1890, y: 1885 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Plycwia-Peron1',
                nodeType: 'platform',
                nodePos: { x: 1890, y: 1923.5 },
                width: 60,
                height: 7.5,
                text: 'Peron II'
            },
            {
                nodeID: 'trackMarker-Plycwia_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1765, y: 1880 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Plycwia_1a',
                nodeType: 'trackMarker',
                nodePos: { x: 1765, y: 1900 },
                text: '1a',
            },
            {
                nodeID: 'trackMarker-Plycwia_2a',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 1920 },
                text: '2a',
            },
            {
                nodeID: 'trackMarker-Plycwia_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1920, y: 1900 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Plycwia_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1915, y: 1920 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Plycwia_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1915, y: 1940 },
                text: '4',
            },
        ]
    },
    "PLYCWIA_SKIERNIEWICE_1": {
        "TRACKS": [
            {
                trackID: 'TRACKS_PLYCWIA_SKIERNIEWICE',
                trackSVG: `
                M2060,1900 2160,1900 M2180,1900 2280,1900 M2300,1900 2400,1900 M2420,1900 2520,1900 M2530,1900 2540,1900 2550,1910
                M2060,1920 2160,1920 M2180,1920 2280,1920 M2300,1920 2400,1920 M2420,1920 2520,1920 M2530,1920 2540,1920 2550,1930
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_779N',
                signalPos: { x: '2170', y: '1900' },
                trainPos: { x: '2140', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_780',
                signalPos: { x: '2170', y: '1920' },
                trainPos: { x: '2140', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_779',
                signalPos: { x: '2170', y: '1900' },
                trainPos: { x: '2200', y: '1900' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_780N',
                signalPos: { x: '2170', y: '1920' },
                trainPos: { x: '2200', y: '1920' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_767N',
                signalPos: { x: '2290', y: '1900' },
                trainPos: { x: '2260', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_766',
                signalPos: { x: '2290', y: '1920' },
                trainPos: { x: '2260', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_767',
                signalPos: { x: '2290', y: '1900' },
                trainPos: { x: '2320', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_766N',
                signalPos: { x: '2290', y: '1920' },
                trainPos: { x: '2320', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_755N',
                signalPos: { x: '2410', y: '1900' },
                trainPos: { x: '2380', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_748',
                signalPos: { x: '2410', y: '1920' },
                trainPos: { x: '2380', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_755',
                signalPos: { x: '2410', y: '1900' },
                trainPos: { x: '2440', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_748N',
                signalPos: { x: '2410', y: '1920' },
                trainPos: { x: '2440', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_737N',
                signalPos: { x: '2530', y: '1900' },
                trainPos: { x: '2500', y: '1900' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_738',
                signalPos: { x: '2530', y: '1920' },
                trainPos: { x: '2500', y: '1920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_779',
                nodeType: 'trackMarker',
                nodePos: { x: 2110, y: 1900 },
                text: '779',
            },
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_779',
                nodeType: 'trackMarker',
                nodePos: { x: 2110, y: 1920 },
                text: '792',
            },
            //
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_767',
                nodeType: 'trackMarker',
                nodePos: { x: 2230, y: 1900 },
                text: '767',
            },
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_780',
                nodeType: 'trackMarker',
                nodePos: { x: 2230, y: 1920 },
                text: '780',
            },
            //
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_755',
                nodeType: 'trackMarker',
                nodePos: { x: 2350, y: 1900 },
                text: '755',
            },
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_766',
                nodeType: 'trackMarker',
                nodePos: { x: 2350, y: 1920 },
                text: '766',
            },
            //
            {
                nodeID: "simpleText-po-Makow",
                nodeType: "simpleText",
                nodePos: { x: 2410, y: 1870 },
                nodePosFlipped: { x: 2410, y: 1950 },
                text: "Maków",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Makow-1',
                nodeType: 'platform',
                nodePos: { x: 2345, y: 1925 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Makow-2',
                nodeType: 'platform',
                nodePos: { x: 2425, y: 1885 },
                width: 50,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_737',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1900 },
                text: '737',
            },
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_748',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1920 },
                text: '748',
            },
        ]
    },
    "PLYCWIA_SKIERNIEWICE_2": {
        "TRACKS": [
            {
                trackID: 'TRACKS_PLYCWIA_SKIERNIEWICE',
                trackSVG: `
                M450,2190 460,2200 470,2200 M480,2200 580,2200 M600,2200 700,2200 M720,2200 820,2200 M840,2200 940,2200
                M450,2220 460,2230 470,2230 M480,2230 580,2230 M600,2230 700,2230 M720,2230 820,2230 M840,2230 940,2230
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_737',
                signalPos: { x: '470', y: '2200' },
                trainPos: { x: '500', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_738N',
                signalPos: { x: '470', y: '2230' },
                trainPos: { x: '500', y: '2230' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_723N',
                signalPos: { x: '590', y: '2200' },
                trainPos: { x: '560', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_722',
                signalPos: { x: '590', y: '2230' },
                trainPos: { x: '560', y: '2230' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_723',
                signalPos: { x: '590', y: '2200' },
                trainPos: { x: '620', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_722N',
                signalPos: { x: '590', y: '2230' },
                trainPos: { x: '620', y: '2230' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_707N',
                signalPos: { x: '710', y: '2200' },
                trainPos: { x: '680', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_708',
                signalPos: { x: '710', y: '2230' },
                trainPos: { x: '680', y: '2230' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_707',
                signalPos: { x: '710', y: '2200' },
                trainPos: { x: '740', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_708N',
                signalPos: { x: '710', y: '2230' },
                trainPos: { x: '740', y: '2230' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_693N',
                signalPos: { x: '830', y: '2200' },
                trainPos: { x: '800', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_692',
                signalPos: { x: '830', y: '2230' },
                trainPos: { x: '800', y: '2230' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_693',
                signalPos: { x: '830', y: '2200' },
                trainPos: { x: '860', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_692N',
                signalPos: { x: '830', y: '2230' },
                trainPos: { x: '860', y: '2230' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_723',
                nodeType: 'trackMarker',
                nodePos: { x: 530, y: 2200 },
                text: '723',
            },
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_738',
                nodeType: 'trackMarker',
                nodePos: { x: 530, y: 2230 },
                text: '738',
            },
            //
            {
                nodeID: "simpleText-po-DabrowiceSkierniewickie",
                nodeType: "simpleText",
                nodePos: { x: 650, y: 2170 },
                nodePosFlipped: { x: 650, y: 2255 },
                text: "Dąbrowice Skierniewickie",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-DabrowiceSkierniewickie-1',
                nodeType: 'platform',
                nodePos: { x: 620, y: 2185 },
                width: 60,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-DabrowiceSkierniewickie-2',
                nodeType: 'platform',
                nodePos: { x: 620, y: 2235 },
                width: 60,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_707',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 2200 },
                text: '707',
            },
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_722',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 2230 },
                text: '722',
            },

            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_693',
                nodeType: 'trackMarker',
                nodePos: { x: 770, y: 2200 },
                text: '693',
            },
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_708',
                nodeType: 'trackMarker',
                nodePos: { x: 770, y: 2230 },
                text: '708',
            },

            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_679',
                nodeType: 'trackMarker',
                nodePos: { x: 890, y: 2200 },
                text: '679',
            },
            {
                nodeID: 'trackMarker-Plycwia_Skierniewice_692',
                nodeType: 'trackMarker',
                nodePos: { x: 890, y: 2230 },
                text: '692',
            },
        ]
    },
    "113_Be_BELCHOW_SKIERNIEWICE": {
        "TRACKS": [
            {
                trackID: '113_BELCHOW',
                trackSVG: `
                M10,1980 15,1980 M20,1980 25,1980 M30,1980 35,1980 M50,1980 150,1980 M160,1980 170,1980 172.5,1985 172.5,1995 175,2000
                M10,2000 15,2000 M20,2000 25,2000 M30,2000 35,2000 M50,2000 150,2000 M160,2000 185,2000 187.5,2005 187.5,2015 190,2020
                M10,2020 15,2020 M20,2020 25,2020 M30,2020 35,2020 M50,2020 150,2020 M160,2020 240,2020
                M10,2050 15,2050 M20,2050 25,2050 M30,2050 35,2050 M50,2050 150,2050 M160,2050 240,2050
                M10,2070 15,2070 M20,2070 25,2070 M30,2070 35,2070 M50,2070 150,2070 M160,2070 180,2070 182.5,2065 182.5,2055 185,2050
                M200,2020 202.5,2025 202.5,2045 205,2050 M215,2050 217.5,2045 217.5,2025 220,2020
                `,
                trackColor: 'white'
            },
            {
                trackID: 'BELCHOW_SKIERNIEWICE',
                trackSVG: `
                M250,2020 350,2020 M360,2020 460,2020 M470,2020 570,2020 M590,2020 690,2020 M710,2020 810,2020 M830,2020 930,2020
                M250,2050 350,2050 M360,2050 460,2050 M470,2050 570,2050 M590,2050 690,2050 M710,2050 810,2050 M830,2050 930,2050
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            //~ SIGNALS IN BELCHOW
            {
                signalName: '113_Be_N',
                signalPos: { x: '37.5', y: '1980' },
                trainPos: { x: '55', y: '1980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_M',
                signalPos: { x: '37.5', y: '2000' },
                trainPos: { x: '55', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_L',
                signalPos: { x: '37.5', y: '2020' },
                trainPos: { x: '90', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_K',
                signalPos: { x: '37.5', y: '2050' },
                trainPos: { x: '90', y: '2050' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_J',
                signalPos: { x: '37.5', y: '2070' },
                trainPos: { x: '55', y: '2070' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '113_Be_C',
                signalPos: { x: '160', y: '1980' },
                trainPos: { x: '145', y: '1980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_D',
                signalPos: { x: '160', y: '2000' },
                trainPos: { x: '145', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_E',
                signalPos: { x: '160', y: '2020' },
                trainPos: { x: '140', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_F',
                signalPos: { x: '160', y: '2050' },
                trainPos: { x: '140', y: '2050' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_G',
                signalPos: { x: '160', y: '2070' },
                trainPos: { x: '145', y: '2070' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '113_Be_B',
                signalPos: { x: '240', y: '2020' },
                trainPos: { x: '270', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_A',
                signalPos: { x: '240', y: '2050' },
                trainPos: { x: '270', y: '2050' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //? ABS SIGNALS BELCHOW <-> SKIERNIEWICE
            {
                signalName: 'L11_93N',
                signalPos: { x: '360', y: '2020' },
                trainPos: { x: '330', y: '2020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_94',
                signalPos: { x: '360', y: '2050' },
                trainPos: { x: '330', y: '2050' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: 'L11_83',
                signalPos: { x: '460', y: '2020' },
                trainPos: { x: '490', y: '2020' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_82N',
                signalPos: { x: '460', y: '2050' },
                trainPos: { x: '490', y: '2050' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L11_69N',
                signalPos: { x: '580', y: '2020' },
                trainPos: { x: '550', y: '2020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_70',
                signalPos: { x: '580', y: '2050' },
                trainPos: { x: '550', y: '2050' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_69',
                signalPos: { x: '580', y: '2020' },
                trainPos: { x: '610', y: '2020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_70N',
                signalPos: { x: '580', y: '2050' },
                trainPos: { x: '610', y: '2050' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L11_53N',
                signalPos: { x: '700', y: '2020' },
                trainPos: { x: '670', y: '2020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_52',
                signalPos: { x: '700', y: '2050' },
                trainPos: { x: '670', y: '2050' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_53',
                signalPos: { x: '700', y: '2020' },
                trainPos: { x: '730', y: '2020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_52N',
                signalPos: { x: '700', y: '2050' },
                trainPos: { x: '730', y: '2050' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L11_37N',
                signalPos: { x: '820', y: '2020' },
                trainPos: { x: '790', y: '2020' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_36',
                signalPos: { x: '820', y: '2050' },
                trainPos: { x: '790', y: '2050' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_37',
                signalPos: { x: '820', y: '2020' },
                trainPos: { x: '850', y: '2020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_36N',
                signalPos: { x: '820', y: '2050' },
                trainPos: { x: '850', y: '2050' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Belchow',
                nodeType: 'stationName',
                stationPrefix: 'Be',
                stationName: 'Bełchów',
                nodePos: { x: 100, y: 1955 },
                nodePosFlipped: { x: 100, y: 2100 }
            },
            {
                nodeID: 'platform-Belchow-Peron1',
                nodeType: 'platform',
                nodePos: { x: 85, y: 2025 },
                width: 60,
                height: 20,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Belchow_5',
                nodeType: 'trackMarker',
                nodePos: { x: 100, y: 1980 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Belchow_3',
                nodeType: 'trackMarker',
                nodePos: { x: 100, y: 2000 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Belchow_1',
                nodeType: 'trackMarker',
                nodePos: { x: 100, y: 2020 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Belchow_2',
                nodeType: 'trackMarker',
                nodePos: { x: 100, y: 2050 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Belchow_4',
                nodeType: 'trackMarker',
                nodePos: { x: 100, y: 2070 },
                text: '4',
            },
            //? BELCHOW <-> SKIERNIEWICE
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_93',
                nodeType: 'trackMarker',
                nodePos: { x: 300, y: 2020 },
                text: '93',
            },
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_102',
                nodeType: 'trackMarker',
                nodePos: { x: 300, y: 2050 },
                text: '102',
            },
            //
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_83',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 2020 },
                text: '83',
            },
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_94',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 2050 },
                text: '94',
            },
            //
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_69',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 2020 },
                text: '69',
            },
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_82',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 2050 },
                text: '82',
            },
            //
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_53',
                nodeType: 'trackMarker',
                nodePos: { x: 640, y: 2020 },
                text: '53',
            },
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_68',
                nodeType: 'trackMarker',
                nodePos: { x: 640, y: 2050 },
                text: '68',
            },
            //
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_37',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 2020 },
                text: '37',
            },
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_52',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 2050 },
                text: '52',
            },
            //
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_23',
                nodeType: 'trackMarker',
                nodePos: { x: 880, y: 2020 },
                text: '23',
            },
            {
                nodeID: 'trackMarker-Belchow_Skierniewice_36',
                nodeType: 'trackMarker',
                nodePos: { x: 880, y: 2050 },
                text: '36',
            },
        ]
    },
    "3877_Sk_SKIERNIEWICE": {
        "TRACKS": [
            {
                trackID: '3877_Sk_SKIERNIEWICE',
                /*
                *TOR 1B + T102 + T202
                *TOR 2B + T101b + T201
                *T1
                *T2

                *OUTER CURVE - SW94/93 + T501 + SW81/82 + SW83/85
                *INNER CURVE - SW95/92 + T502 + SW84/86
                *SW88/87 + SW85/83

                *SW69/67 + SW65/61
                *SW58/55 + SW53/49
                *SW63/60 + SW56/50
                *SW66/64 + SW62/59
                *SW52/47 + SW45/42
                *SW46/43

                ~~~ UPPER AREA ~~~
                *SW44/41 + T104 + T204 + T304 + SW4/3
                *SW201/202 + SW203/207
                *SW209/211 + SW212/213
                *SW215/217 + SW219 + T208 + DTSW301
                *T206 + DTSW303
                *SW214/216 + SW218/220 + T205 + UTSW302
                *T203 + SW304/306
                *SW305/308 + SW311/314
                *SW307/309 + SW310/312

                ~~~ LOWER AREA ~~~
                *SW48 + T3 + SW16
                *SW23/22
                *SW24/21 + T4b + T4a3/4a1 + TOR1M
                *SW14/12
                *SW13/11
                *SW6/5 + SW2/1
                */
                trackSVG: `
                M940,2020 1020,2020 M1030,2020 1107.5,2020 1110,2025 1110,2035 1112.5,2040 1170,2040 M1180,2040 1330,2040 M1340,2040 1470,2040 M1480,2040 1650,2040 M1660,2040 1720,2040 M1730,2040 1840,2040 M1850,2040 1925,2040 1927.5,2045 1927.5,2110 1925,2115 1825,2115 1822.5,2120 1822.5,2215 1825,2220 1895,2220 1897.5,2222.5 1897.5,2227.5 1900,2230 1960,2230
                M940,2050 1020,2050 M1030,2050 1097.5,2050 1100,2055 1100,2065 1102.5,2070 1170,2070 M1180,2070 1330,2070 M1340,2070 1470,2070 M1480,2070 1650,2070 M1660,2070 1720,2070 M1730,2070 1840,2070 M1850,2070 1910,2070 1912.5,2075 1912.5,2095 1910,2100 1810,2100 1807.5,2105 1807.5,2235 1810,2240 1870,2240 M1880,2240 1885,2240 1887.5,2245 1887.5,2255 1890,2260
                M950,2200 1010,2200 M1020,2200 1150,2200 M1160,2200 1330,2200 M1340,2200 1440,2200 M1450,2200 1500,2200 M1510,2200 1570,2200 M1580,2200 1650,2200 M1660,2200 1727.5,2200 1730,2195 1730,2175 1732.5,2170 1802.5,2170 M1827.5,2170 1840,2170 M1850,2170 1960,2170
                M950,2230 1010,2230 M1020,2230 1150,2230 M1160,2230 1330,2230 M1340,2230 1440,2230 M1450,2230 1500,2230 M1510,2230 1570,2230 M1580,2230 1650,2230 M1660,2230 1737.5,2230 1740,2225 1740,2205 1742.5,2200 1802.5,2200 M1827.5,2200 1840,2200 M1850,2200 1960,2200

                M980,2230 982.5,2225 982.5,2205 985,2200 M995,2200 997.5,2195 997.5,2175 1000,2170 1010,2170 M1020,2170 1090,2170 1092.5,2165 1092.5,2085 1090,2080 1030,2080 M1020,2080 1000,2080 997.5,2075 997.5,2055 995,2050
                M970,2200 972.5,2195 972.5,2145 975,2140 1010,2140 M1020,2140 1080,2140 1082.5,2135 1082.5,2115 1080,2110 1030,2110 M1020,2110 975,2110 972.5,2105 972.5,2055 970,2050
                M955,2050 957.5,2045 957.5,2025 960,2020 M980,2020 982.5,2025 982.5,2045 985,2050

                M1200,2070 1202.5,2075 1202.5,2195 1205,2200 M1225,2200 1227.5,2195 1227.5,2075 1230,2070
                M1250,2070 1252.5,2075 1252.5,2195 1255,2200 M1275,2200 1277.5,2195 1277.5,2075 1280,2070
                M1235,2040 1237.5,2045 1237.5,2065 1240,2070 M1265,2070 1267.5,2065 1267.5,2045 1270,2040
                M1215,2200 1217.5,2205 1217.5,2225 1220,2230 M1235,2230 1237.5,2225 1237.5,2205 1240,2200
                M1285,2200 1287.5,2205 1287.5,2225 1290,2230 M1310,2230 1312.5,2225 1312.5,2205 1315,2200
                M1300,2070 1302.5,2075 1302.5,2135 1305,2140 1315,2140 1317.5,2145 1317.5,2165 1320,2170

                M1290,2040 1292.5,2035 1292.5,2025 1295,2020 1310,2020 M1320,2020 1380,2020 M1390,2020 1470,2020 M1480,2020 1650,2020 M1660,2020 1720,2020 M1730,2020 1840,2020 M1850,2020 1940,2020 1942.5,2025 1942.5,2125 1940,2130 1840,2130 1837.5,2135 1837.5,2145 1840,2150 1900,2150 M1910,2150 1920,2150 1922.5,2155 1922.5,2165 1925,2170
                M1490,2070 1492.5,2065 1492.5,2045 1495,2040 M1510,2040 1512.5,2035 1512.5,2025 1515,2020
                M1545,2020 1547.5,2025 1547.5,2035 1550,2040 M1565,2040 1567.5,2045 1567.5,2065 1570,2070
                M1620,2020 1622.5,2015 1622.5,2005 1625,2000 1635,2000 1637.5,1995 1637.5,1985 1640,1980 1650,1980 M1660,1980 1720,1980 M1730,1980 1740,1980 1742.5,1985 1742.5,1995 1745,2000
                M1635,2000 1650,2000 M1660,2000 1720,2000 M1730,2000 1755,2000 1757.5,2005 1757.5,2015 1760,2020
                M1590,2070 1592.5,2075 1592.5,2085 1595,2090 1605,2090 1607.5,2095 1607.5,2105 1610,2110 1650,2110 M1660,2110 1720,2110 M1730,2110 1755,2110 1757.5,2105 1757.5,2095 1760,2090
                M1605,2090 1650,2090 M1660,2090 1720,2090 M1730,2090 1770,2090 1772.5,2085 1772.5,2075 1775,2070
                M1770,2020 1772.5,2025 1772.5,2035 1775,2040 M1825,2040 1827.5,2045 1827.5,2065 1830,2070
                M1785,2070 1787.5,2065 1787.5,2045 1790,2040 M1810,2040 1812.5,2035 1812.5,2025 1815,2020


                M1300,2200 1302.5,2195 1302.5,2175 1305,2170 1330,2170 M1340,2170 1440,2170 M1450,2170 1500,2170 M1510,2170 1570,2170 M1580,2170 1590,2170 1592.5,2175 1592.5,2195 1595,2200
                M1485,2200 1487.5,2195 1487.5,2175 1490,2170
                M1485,2230 1487.5,2235 1487.5,2245 1490,2250 1500,2250 M1510,2250 1570,2250 M1580,2250 1630,2250 1632.5,2252.5 1632.5,2257.5 1635,2260 1650,2260 M1660,2260 1780,2260 M1790,2260 1960,2260
                M1605,2250 1607.5,2245 1607.5,2235 1610,2230
                M1620,2200 1622.5,2205 1622.5,2225 1625,2230
                M1900,2200 1902.5,2195 1902.5,2175 1905,2170 M1935,2170 1937.5,2175 1937.5,2195 1940,2200
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS BELCHOW
            {
                signalName: '3877_Sk_Y',
                signalPos: { x: '940', y: '2020' },
                trainPos: { x: '910', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_Z',
                signalPos: { x: '940', y: '2050' },
                trainPos: { x: '910', y: '2050' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ ENTRY SIGNALS PLYCWIA
            {
                signalName: '3877_Sk_W',
                signalPos: { x: '950', y: '2200' },
                trainPos: { x: '920', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_X',
                signalPos: { x: '950', y: '2230' },
                trainPos: { x: '920', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: '3877_Sk_U401',
                signalPos: { x: '1020', y: '2020' },
                trainPos: { x: '1035', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_U402',
                signalPos: { x: '1020', y: '2050' },
                trainPos: { x: '1035', y: '2050' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_U501',
                signalPos: { x: '1020', y: '2080' },
                trainPos: { x: '1035', y: '2080' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_U502',
                signalPos: { x: '1020', y: '2110' },
                trainPos: { x: '1035', y: '2110' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_V502',
                signalPos: { x: '1010', y: '2140' },
                trainPos: { x: '1025', y: '2140' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_V501',
                signalPos: { x: '1010', y: '2170' },
                trainPos: { x: '1025', y: '2170' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_V1',
                signalPos: { x: '1010', y: '2200' },
                trainPos: { x: '1025', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_V2',
                signalPos: { x: '1010', y: '2230' },
                trainPos: { x: '1025', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ Intermediate Signals LEFT SIDE TO RIGHT
            {
                signalName: '3877_Sk_S401',
                signalPos: { x: '1180', y: '2040' },
                trainPos: { x: '1165', y: '2040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_S402',
                signalPos: { x: '1180', y: '2070' },
                trainPos: { x: '1165', y: '2070' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_S1',
                signalPos: { x: '1160', y: '2200' },
                trainPos: { x: '1145', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_S2',
                signalPos: { x: '1160', y: '2230' },
                trainPos: { x: '1145', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ Intermediate Signals LEFT SIDE TO LEFT (TRACK SIGNALS)
            {
                signalName: '3877_Sk_R104',
                signalPos: { x: '1310', y: '2020' },
                trainPos: { x: '1325', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R102',
                signalPos: { x: '1330', y: '2040' },
                trainPos: { x: '1345', y: '2040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R101',
                signalPos: { x: '1330', y: '2070' },
                trainPos: { x: '1345', y: '2070' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R3',
                signalPos: { x: '1330', y: '2170' },
                trainPos: { x: '1345', y: '2170' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R1',
                signalPos: { x: '1330', y: '2200' },
                trainPos: { x: '1345', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R2',
                signalPos: { x: '1330', y: '2230' },
                trainPos: { x: '1345', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //^ RIGHT SIDE SIGNAL TRACK 104
            {
                signalName: '3877_Sk_P104',
                signalPos: { x: '1390', y: '2020' },
                trainPos: { x: '1375', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ MIDDLE SIGNALS TO THE RIGHT
            {
                signalName: '3877_Sk_N104',
                signalPos: { x: '1480', y: '2020' },
                trainPos: { x: '1465', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_N102',
                signalPos: { x: '1480', y: '2040' },
                trainPos: { x: '1465', y: '2040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_N101',
                signalPos: { x: '1480', y: '2070' },
                trainPos: { x: '1465', y: '2070' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_P3',
                signalPos: { x: '1450', y: '2170' },
                trainPos: { x: '1405', y: '2170' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_P1',
                signalPos: { x: '1450', y: '2200' },
                trainPos: { x: '1405', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_P2',
                signalPos: { x: '1450', y: '2230' },
                trainPos: { x: '1405', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ SIGNALS LOWER TRACK
            {
                signalName: '3877_Sk_M3',
                signalPos: { x: '1500', y: '2170' },
                trainPos: { x: '1515', y: '2170' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_M1',
                signalPos: { x: '1500', y: '2200' },
                trainPos: { x: '1515', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_M2',
                signalPos: { x: '1500', y: '2230' },
                trainPos: { x: '1515', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_M4',
                signalPos: { x: '1500', y: '2250' },
                trainPos: { x: '1515', y: '2250' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //^
            {
                signalName: '3877_Sk_L3',
                signalPos: { x: '1580', y: '2170' },
                trainPos: { x: '1565', y: '2170' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_L1',
                signalPos: { x: '1580', y: '2200' },
                trainPos: { x: '1565', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_L2',
                signalPos: { x: '1580', y: '2230' },
                trainPos: { x: '1565', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_L4',
                signalPos: { x: '1580', y: '2250' },
                trainPos: { x: '1565', y: '2250' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ Intermediate Signals RIGHT SIDE TO LEFT
            {
                signalName: '3877_Sk_K208',
                signalPos: { x: '1650', y: '1980' },
                trainPos: { x: '1665', y: '1980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K206',
                signalPos: { x: '1650', y: '2000' },
                trainPos: { x: '1665', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K204',
                signalPos: { x: '1650', y: '2020' },
                trainPos: { x: '1665', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K202',
                signalPos: { x: '1650', y: '2040' },
                trainPos: { x: '1665', y: '2040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K201',
                signalPos: { x: '1650', y: '2070' },
                trainPos: { x: '1665', y: '2070' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K203',
                signalPos: { x: '1650', y: '2090' },
                trainPos: { x: '1665', y: '2090' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K205',
                signalPos: { x: '1650', y: '2110' },
                trainPos: { x: '1665', y: '2110' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //^
            {
                signalName: '3877_Sk_J1',
                signalPos: { x: '1650', y: '2200' },
                trainPos: { x: '1665', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_J2',
                signalPos: { x: '1650', y: '2230' },
                trainPos: { x: '1665', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_J4',
                signalPos: { x: '1650', y: '2260' },
                trainPos: { x: '1665', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //^ EXIT SIGNAL TRACK 4 TO PM
            {
                signalName: '3877_Sk_E4',
                signalPos: { x: '1790', y: '2260' },
                trainPos: { x: '1775', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ INTERMEDIATE SIGNALS RIGHT SIDE TO RIGHT
            {
                signalName: '3877_Sk_H208',
                signalPos: { x: '1730', y: '1980' },
                trainPos: { x: '1715', y: '1980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H206',
                signalPos: { x: '1730', y: '2000' },
                trainPos: { x: '1715', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H204',
                signalPos: { x: '1730', y: '2020' },
                trainPos: { x: '1715', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H202',
                signalPos: { x: '1730', y: '2040' },
                trainPos: { x: '1715', y: '2040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H201',
                signalPos: { x: '1730', y: '2070' },
                trainPos: { x: '1715', y: '2070' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H203',
                signalPos: { x: '1730', y: '2090' },
                trainPos: { x: '1715', y: '2090' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H205',
                signalPos: { x: '1730', y: '2110' },
                trainPos: { x: '1715', y: '2110' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //^ ZSIG RIGHT TO LEFT FROM CONNECTOR
            {
                signalName: '3877_Sk_G304',
                signalPos: { x: '1840', y: '2020' },
                trainPos: { x: '1855', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_G302',
                signalPos: { x: '1840', y: '2040' },
                trainPos: { x: '1855', y: '2040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_G301',
                signalPos: { x: '1840', y: '2070' },
                trainPos: { x: '1855', y: '2070' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ ZSIG RIGHT TO RIGHT LOWER PART
            {
                signalName: '3877_Sk_F304',
                signalPos: { x: '1910', y: '2150' },
                trainPos: { x: '1895', y: '2150' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_F1',
                signalPos: { x: '1850', y: '2170' },
                trainPos: { x: '1797.5', y: '2170' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_F2',
                signalPos: { x: '1850', y: '2200' },
                trainPos: { x: '1797.5', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_E301',
                signalPos: { x: '1880', y: '2240' },
                trainPos: { x: '1865', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ FINAL EXIT SIGNALS TO ZYRARDOW
            {
                signalName: '3877_Sk_B11',
                signalPos: { x: '1970', y: '2170' },
                trainPos: { x: '1955', y: '2170' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_A21',
                signalPos: { x: '1970', y: '2200' },
                trainPos: { x: '1955', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: '3877_Sk_B',
                signalPos: { x: '1970', y: '2170' },
                trainPos: { x: '1985', y: '2170' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_A',
                signalPos: { x: '1970', y: '2200' },
                trainPos: { x: '1985', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_D',
                signalPos: { x: '1960', y: '2230' },
                trainPos: { x: '1975', y: '2230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_C',
                signalPos: { x: '1960', y: '2260' },
                trainPos: { x: '1975', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Skierniewice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1210, y: 2240 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Skierniewice',
                nodeType: 'stationName',
                stationPrefix: 'Sk',
                stationName: 'Skierniewice',
                nodePos: { x: 1440, y: 1990 },
                nodePosFlipped: { x: 1340, y: 2290 }
            },
            {
                nodeID: 'platform-Skierniewice-Peron3',
                nodeType: 'platform',
                nodePos: { x: 1325, y: 2000 },
                width: 47.5,
                height: 12.5,
                text: 'Peron III'
            },
            {
                nodeID: 'platform-Skierniewice-Peron2',
                nodeType: 'platform',
                nodePos: { x: 1345, y: 2175 },
                width: 65,
                height: 20,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Skierniewice-Peron1',
                nodeType: 'platform',
                nodePos: { x: 1345, y: 2235 },
                width: 65,
                height: 12.5,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Skierniewice_401',
                nodeType: 'trackMarker',
                nodePos: { x: 1070, y: 2020 },
                text: '401',
            },
            {
                nodeID: 'trackMarker-Skierniewice_402',
                nodeType: 'trackMarker',
                nodePos: { x: 1135, y: 2070 },
                text: '402',
            },
            {
                nodeID: 'trackMarker-Skierniewice_502',
                nodeType: 'trackMarker',
                nodePos: { x: 1050, y: 2140 },
                text: '502',
            },
            {
                nodeID: 'trackMarker-Skierniewice_501',
                nodeType: 'trackMarker',
                nodePos: { x: 1050, y: 2170 },
                text: '501',
            },
            {
                nodeID: 'trackMarker-Skierniewice_1l',
                nodeType: 'trackMarker',
                nodePos: { x: 1045, y: 2200 },
                text: '1l',
            },
            {
                nodeID: 'trackMarker-Skierniewice_2m',
                nodeType: 'trackMarker',
                nodePos: { x: 1045, y: 2230 },
                text: '2m',
            },
            {
                nodeID: 'trackMarker-Skierniewice_1k',
                nodeType: 'trackMarker',
                nodePos: { x: 1125, y: 2200 },
                text: '1k',
            },
            {
                nodeID: 'trackMarker-Skierniewice_2l',
                nodeType: 'trackMarker',
                nodePos: { x: 1125, y: 2230 },
                text: '2l',
            },
            {
                nodeID: 'trackMarker-Skierniewice_104a',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 2020 },
                text: '104a',
            },
            {
                nodeID: 'trackMarker-Skierniewice_104b',
                nodeType: 'trackMarker',
                nodePos: { x: 1430, y: 2020 },
                text: '104b',
            },
            {
                nodeID: 'trackMarker-Skierniewice_102',
                nodeType: 'trackMarker',
                nodePos: { x: 1405, y: 2040 },
                text: '102',
            },
            {
                nodeID: 'trackMarker-Skierniewice_101b',
                nodeType: 'trackMarker',
                nodePos: { x: 1405, y: 2070 },
                text: '101b',
            },
            {
                nodeID: 'trackMarker-Skierniewice_3c',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 2170 },
                text: '3c',
            },
            {
                nodeID: 'trackMarker-Skierniewice_1g',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 2200 },
                text: '1g',
            },
            {
                nodeID: 'trackMarker-Skierniewice_2h',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 2230 },
                text: '2h',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_3a',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 2170 },
                text: '3c',
            },
            {
                nodeID: 'trackMarker-Skierniewice_1o',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 2200 },
                text: '1g',
            },
            {
                nodeID: 'trackMarker-Skierniewice_2f',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 2230 },
                text: '2h',
            },
            {
                nodeID: 'trackMarker-Skierniewice_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 2250 },
                text: '4b',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_208',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 1980 },
                text: '208',
            },
            {
                nodeID: 'trackMarker-Skierniewice_206',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 2000 },
                text: '206',
            },
            {
                nodeID: 'trackMarker-Skierniewice_204',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 2020 },
                text: '204',
            },
            {
                nodeID: 'trackMarker-Skierniewice_202',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 2040 },
                text: '202',
            },
            {
                nodeID: 'trackMarker-Skierniewice_201',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 2070 },
                text: '201',
            },
            {
                nodeID: 'trackMarker-Skierniewice_203',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 2090 },
                text: '203',
            },
            {
                nodeID: 'trackMarker-Skierniewice_205',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 2110 },
                text: '205',
            },
            {
                nodeID: 'trackMarker-Skierniewice_1d3',
                nodeType: 'trackMarker',
                nodePos: { x: 1695, y: 2200 },
                text: '1d3',
            },
            {
                nodeID: 'trackMarker-Skierniewice_2d3',
                nodeType: 'trackMarker',
                nodePos: { x: 1695, y: 2230 },
                text: '2d3',
            },
            {
                nodeID: 'trackMarker-Skierniewice_4a3',
                nodeType: 'trackMarker',
                nodePos: { x: 1685, y: 2260 },
                text: '4a3',
            },
            {
                nodeID: 'trackMarker-Skierniewice_1d1',
                nodeType: 'trackMarker',
                nodePos: { x: 1770, y: 2170 },
                text: '1d1',
            },
            {
                nodeID: 'trackMarker-Skierniewice_2d1',
                nodeType: 'trackMarker',
                nodePos: { x: 1775, y: 2200 },
                text: '2d1',
            },
            {
                nodeID: 'trackMarker-Skierniewice_4a1',
                nodeType: 'trackMarker',
                nodePos: { x: 1755, y: 2260 },
                text: '4a1',
            },
            {
                nodeID: 'trackMarker-Skierniewice_304',
                nodeType: 'trackMarker',
                nodePos: { x: 1895, y: 2020 },
                text: '304',
            },
            {
                nodeID: 'trackMarker-Skierniewice_302',
                nodeType: 'trackMarker',
                nodePos: { x: 1885, y: 2040 },
                text: '302',
            },
            {
                nodeID: 'trackMarker-Skierniewice_301b',
                nodeType: 'trackMarker',
                nodePos: { x: 1840, y: 2240 },
                text: '301b',
            },
        ]
    },
    "3459_PM_PUSZCZAMARIANSKA": {
        "TRACKS": [
            {
                trackID: 'TRACKS_SKIERNIEWICE_PUSZCZAMARIANSKA',
                trackSVG: `
                M1970,2230 2147.2,2230 2150,2235 2150,2275 2152.5,2280 2310,2280
                M1970,2260 2127.5,2260 2130,2265 2130,2295 2132.5,2300 2310,2300
                `,
                trackColor: 'gray'
            },
            {
                trackID: '3459_PUSZCZAMARIANSKA',
                /**/
                trackSVG: `
                M2320,2280 2410,2280 M2420,2280 2520,2280
                M2320,2300 2410,2300 M2420,2300 2520,2300

                M2340,2280 2342.5,2285 2342.5,2295 2345,2300 M2365,2300 2367.5,2295 2367.5,2285 2370,2280
                M2380,2280 2382.5,2275 2382.5,2265 2385,2260 2395,2260 2397.5,2255 2397.5,2245 2400,2240 2410,2240 M2420,2240 2520,2240
                M2390,2260 2410,2260 M2420,2260 2520,2260

                M2535,2240 2540,2240 M2545,2240 2550,2240 M2555,2240 2560,2240 M2565,2240
                M2535,2260 2540,2260 M2545,2260 2550,2260 M2555,2260 2560,2260 M2565,2260
                M2535,2280 2540,2280 M2545,2280 2550,2280 M2555,2280 2560,2280 M2565,2280
                M2535,2300 2540,2300 M2545,2300 2550,2300 M2555,2300 2560,2300 M2565,2300
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3459_PM_A',
                signalPos: { x: '2320', y: '2280' },
                trainPos: { x: '2300', y: '2280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3459_PM_B',
                signalPos: { x: '2320', y: '2300' },
                trainPos: { x: '2300', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3459_PM_F',
                signalPos: { x: '2410', y: '2240' },
                trainPos: { x: '2440', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3459_PM_E',
                signalPos: { x: '2410', y: '2260' },
                trainPos: { x: '2440', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3459_PM_D',
                signalPos: { x: '2410', y: '2280' },
                trainPos: { x: '2440', y: '2280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3459_PM_C',
                signalPos: { x: '2410', y: '2300' },
                trainPos: { x: '2440', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '3459_PM_L',
                signalPos: { x: '2532.5', y: '2240' },
                trainPos: { x: '2505', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3459_PM_M',
                signalPos: { x: '2532.5', y: '2260' },
                trainPos: { x: '2505', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3459_PM_N',
                signalPos: { x: '2532.5', y: '2280' },
                trainPos: { x: '2505', y: '2280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3459_PM_O',
                signalPos: { x: '2532.5', y: '2300' },
                trainPos: { x: '2505', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Skierniewice',
                nodeType: 'stationName',
                stationPrefix: 'PM',
                stationName: 'Puszcza Mariańska',
                nodePos: { x: 2400, y: 2210 },
                nodePosFlipped: { x: 2400, y: 2320 }
            },
        ]
    },
    "SKIERNIEWICE_ZYRARDOW_1": {
        "TRACKS": [
            {
                trackID: 'TRACKS_SKIERNIEWICE_RADZIWILLOWMAZOWIECKI_1',
                trackSVG: `
                M1980,2170 2080,2170 M2100,2170 2200,2170 M2210,2170 2220,2170 2230,2180
                M1980,2200 2080,2200 M2100,2200 2200,2200 M2210,2200 2220,2200 2230,2210
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_595N',
                signalPos: { x: '2090', y: '2170' },
                trainPos: { x: '2060', y: '2170' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_596',
                signalPos: { x: '2090', y: '2200' },
                trainPos: { x: '2060', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_595',
                signalPos: { x: '2090', y: '2170' },
                trainPos: { x: '2120', y: '2170' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_596N',
                signalPos: { x: '2090', y: '2200' },
                trainPos: { x: '2120', y: '2200' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_581N',
                signalPos: { x: '2210', y: '2170' },
                trainPos: { x: '2180', y: '2170' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_580',
                signalPos: { x: '2210', y: '2200' },
                trainPos: { x: '2180', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_595',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 2170 },
                text: '595',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_610',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 2200 },
                text: '610',
            },
            //
            {
                nodeID: "simpleText-po-SkierniewiceRawka",
                nodeType: "simpleText",
                nodePos: { x: 2010, y: 2140 },
                nodePosFlipped: { x: 2010, y: 2140 },
                text: "Skierniewice Rawka",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-SkierniewiceRawka-1',
                nodeType: 'platform',
                nodePos: { x: 1985, y: 2155 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-SkierniewiceRawka-2',
                nodeType: 'platform',
                nodePos: { x: 1985, y: 2205 },
                width: 50,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_581',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 2170 },
                text: '581',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_596',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 2200 },
                text: '596',
            },
        ]
    },
    "SKIERNIEWICE_ZYRARDOW_2": {
        "TRACKS": [
            {
                trackID: 'TRACKS_SKIERNIEWICE_RADZIWILLOWMAZOWIECKI_2',
                trackSVG: `
                M10,2390 20,2400 30,2400 M40,2400 140,2400 M160,2400 260,2400
                M10,2410 20,2420 30,2420 M40,2420 140,2420 M160,2420 260,2420
                `,
                trackColor: 'gray'
            },
            {
                trackID: 'TRACKS_RADZIWILLOWMAZOWIECKI_ZYRARDOW',
                trackSVG: `
                M350,2400 450,2400 M470,2400 570,2400 M590,2400 690,2400 M710,2400 810,2400 M830,2400 930,2400 M950,2400 1050,2400 M1070,2400 1170,2400
                M350,2420 450,2420 M470,2420 570,2420 M590,2420 690,2420 M710,2420 810,2420 M830,2420 930,2420 M950,2420 1050,2420 M1070,2420 1170,2420
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_581',
                signalPos: { x: '30', y: '2400' },
                trainPos: { x: '60', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_580N',
                signalPos: { x: '30', y: '2420' },
                trainPos: { x: '60', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_565N',
                signalPos: { x: '150', y: '2400' },
                trainPos: { x: '120', y: '2400' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_566',
                signalPos: { x: '150', y: '2420' },
                trainPos: { x: '120', y: '2420' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_565',
                signalPos: { x: '150', y: '2400' },
                trainPos: { x: '180', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_566N',
                signalPos: { x: '150', y: '2420' },
                trainPos: { x: '180', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            // after RADZIWILLOW MAZOWIECKIE
            {
                signalName: 'L1_533N',
                signalPos: { x: '460', y: '2400' },
                trainPos: { x: '430', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_532',
                signalPos: { x: '460', y: '2420' },
                trainPos: { x: '430', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_533',
                signalPos: { x: '460', y: '2400' },
                trainPos: { x: '490', y: '2400' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_532N',
                signalPos: { x: '460', y: '2420' },
                trainPos: { x: '490', y: '2420' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_517N',
                signalPos: { x: '580', y: '2400' },
                trainPos: { x: '550', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_518',
                signalPos: { x: '580', y: '2420' },
                trainPos: { x: '550', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_517',
                signalPos: { x: '580', y: '2400' },
                trainPos: { x: '610', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_518N',
                signalPos: { x: '580', y: '2420' },
                trainPos: { x: '610', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_499N',
                signalPos: { x: '700', y: '2400' },
                trainPos: { x: '670', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_502',
                signalPos: { x: '700', y: '2420' },
                trainPos: { x: '670', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_499',
                signalPos: { x: '700', y: '2400' },
                trainPos: { x: '730', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_502N',
                signalPos: { x: '700', y: '2420' },
                trainPos: { x: '730', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_483N',
                signalPos: { x: '820', y: '2400' },
                trainPos: { x: '790', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_484',
                signalPos: { x: '820', y: '2420' },
                trainPos: { x: '790', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_483',
                signalPos: { x: '820', y: '2400' },
                trainPos: { x: '850', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_484N',
                signalPos: { x: '820', y: '2420' },
                trainPos: { x: '850', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_467N',
                signalPos: { x: '940', y: '2400' },
                trainPos: { x: '910', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_466',
                signalPos: { x: '940', y: '2420' },
                trainPos: { x: '910', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_467',
                signalPos: { x: '940', y: '2400' },
                trainPos: { x: '970', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_466N',
                signalPos: { x: '940', y: '2420' },
                trainPos: { x: '970', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_451N',
                signalPos: { x: '1060', y: '2400' },
                trainPos: { x: '1030', y: '2400' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_452',
                signalPos: { x: '1060', y: '2420' },
                trainPos: { x: '1030', y: '2420' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_451',
                signalPos: { x: '1060', y: '2400' },
                trainPos: { x: '1090', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_452N',
                signalPos: { x: '1060', y: '2420' },
                trainPos: { x: '1090', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_565',
                nodeType: 'trackMarker',
                nodePos: { x: 90, y: 2400 },
                text: '565',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_580',
                nodeType: 'trackMarker',
                nodePos: { x: 90, y: 2420 },
                text: '580',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_551',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 2400 },
                text: '551',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_566',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 2420 },
                text: '566',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_533',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 2400 },
                text: '533',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_546',
                nodeType: 'trackMarker',
                nodePos: { x: 400, y: 2420 },
                text: '546',
            },
            //
            {
                nodeID: "simpleText-po-Jesionka",
                nodeType: "simpleText",
                nodePos: { x: 540, y: 2370 },
                nodePosFlipped: { x: 540, y: 2450 },
                text: "Jesionka",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Jesionka-1',
                nodeType: 'platform',
                nodePos: { x: 515, y: 2385 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Jesionka-2',
                nodeType: 'platform',
                nodePos: { x: 515, y: 2425 },
                width: 50,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_517',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 2400 },
                text: '517',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_532',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 2420 },
                text: '532',
            },
            //
            {
                nodeID: "simpleText-po-SuchaZyrardowska",
                nodeType: "simpleText",
                nodePos: { x: 700, y: 2370 },
                nodePosFlipped: { x: 700, y: 2450 },
                text: "Sucha Żyrardowska",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-SuchaZyrardowska-1',
                nodeType: 'platform',
                nodePos: { x: 635, y: 2385 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-SuchaZyrardowska-2',
                nodeType: 'platform',
                nodePos: { x: 715, y: 2425 },
                width: 50,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_499',
                nodeType: 'trackMarker',
                nodePos: { x: 640, y: 2400 },
                text: '499',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_518',
                nodeType: 'trackMarker',
                nodePos: { x: 640, y: 2420 },
                text: '518',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_483',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 2400 },
                text: '483',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_502',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 2420 },
                text: '502',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_467',
                nodeType: 'trackMarker',
                nodePos: { x: 880, y: 2400 },
                text: '467',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_484',
                nodeType: 'trackMarker',
                nodePos: { x: 880, y: 2420 },
                text: '484',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_451',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 2400 },
                text: '451',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_466',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 2420 },
                text: '466',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_439',
                nodeType: 'trackMarker',
                nodePos: { x: 1120, y: 2400 },
                text: '439',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_452',
                nodeType: 'trackMarker',
                nodePos: { x: 1120, y: 2420 },
                text: '452',
            },
        ]
    },
    "3531_RM_RADZIWILLOWMAZOWIECKI": {
        "TRACKS": [
            {
                trackID: '3531_RADZIWILLOWMAZOWIECKI',
                trackSVG: `
                M270,2400 340,2400
                M270,2420 340,2420
                M290,2420 292.5,2415 292.5,2405 295,2400 M315,2400 317.5,2405 317.5,2415 320,2420
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '3531_RM_C',
                signalPos: { x: '270', y: '2400' },
                trainPos: { x: '240', y: '2400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3531_RM_D',
                signalPos: { x: '270', y: '2420' },
                trainPos: { x: '240', y: '2420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3531_RM_B',
                signalPos: { x: '340', y: '2400' },
                trainPos: { x: '370', y: '2400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3531_RM_A',
                signalPos: { x: '340', y: '2420' },
                trainPos: { x: '370', y: '2420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-RadziwillowMazowiecki',
                nodeType: 'stationName',
                stationPrefix: 'RM',
                stationName: 'Radziwiłłów Mazowiecki',
                nodePos: { x: 305, y: 2350 },
                nodePosFlipped: { x: 305, y: 2470 }
            },
            {
                nodeID: "text-lcs-RadziwillowMazowiecki",
                nodeType: "simpleText",
                nodePos: { x: 305, y: 2365 },
                nodePosFlipped: { x: 305, y: 2455 },
                text: "Controlled by Żyrardów",
                textSize: 10
            },
            {
                nodeID: 'platform-RadziwillowMazowiecki-1',
                nodeType: 'platform',
                nodePos: { x: 205, y: 2382.5 },
                width: 50,
                height: 12.5,
                text: ''
            },
            {
                nodeID: 'platform-RadziwillowMazowiecki-2',
                nodeType: 'platform',
                nodePos: { x: 205, y: 2425 },
                width: 50,
                height: 12.5,
                text: ''
            },
        ]
    },
    "5431_Zy_ZYRARDOW": {
        "TRACKS": [
            {
                trackID: '5431_ZYRARDOW',
                /*
                T1
                T2

                SW40/39 + SW35/33
                SW34/32 + T4 + SW7/4
                SW31 + SW23 + T8 + SW8
                SW22/21 + T3 + SW9/6

                SW5/3 + SW2/1

                */
                trackSVG: `
                M1180,2400 1240,2400 M1250,2400 1420,2400 M1430,2400 1520,2400
                M1180,2420 1260,2420 M1270,2420 1420,2420 M1430,2420 1520,2420

                M1200,2400 1202.5,2405 1202.5,2415 1205,2420 M1225,2420 1227.5,2415 1227.5,2405 1230,2400
                M1245,2420 1247.5,2425 1247.5,2435 1250,2440 1280,2440 M1290,2440 1420,2440 M1430,2440 1465,2440 1467.5,2435 1467.5,2425 1470,2420
                M1265,2440 1267.5,2445 1267.5,2475 1270,2480 1315,2480 1317.5,2475 1317.5,2465 1320,2460 1330,2460 M1340,2460 1420,2460 M1430,2460 1445,2460 1447.5,2455 1447.5,2445 1450,2440
                M1295,2400 1297.5,2395 1297.5,2385 1300,2380 1310,2380 M1320,2380 1420,2380 M1430,2380 1445,2380 1447.5,2385 1447.5,2395 1450,2400
                M1480,2400 1482.5,2405 1482.5,2415 1485,2420 M1495,2420 1497.5,2415 1497.5,2405 1500,2400
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: '5431_Zy_G',
                signalPos: { x: '1180', y: '2400' },
                trainPos: { x: '1150', y: '2400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_H',
                signalPos: { x: '1180', y: '2420' },
                trainPos: { x: '1150', y: '2420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '5431_Zy_E3',
                signalPos: { x: '1310', y: '2380' },
                trainPos: { x: '1330', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F1',
                signalPos: { x: '1240', y: '2400' },
                trainPos: { x: '1255', y: '2400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F2',
                signalPos: { x: '1260', y: '2420' },
                trainPos: { x: '1290', y: '2420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F4',
                signalPos: { x: '1280', y: '2440' },
                trainPos: { x: '1295', y: '2440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F8',
                signalPos: { x: '1330', y: '2460' },
                trainPos: { x: '1350', y: '2460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '5431_Zy_D3',
                signalPos: { x: '1430', y: '2380' },
                trainPos: { x: '1410', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D1',
                signalPos: { x: '1430', y: '2400' },
                trainPos: { x: '1410', y: '2400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D2',
                signalPos: { x: '1430', y: '2420' },
                trainPos: { x: '1410', y: '2420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D4',
                signalPos: { x: '1430', y: '2440' },
                trainPos: { x: '1380', y: '2440' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D8',
                signalPos: { x: '1430', y: '2460' },
                trainPos: { x: '1410', y: '2460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '5431_Zy_B',
                signalPos: { x: '1520', y: '2400' },
                trainPos: { x: '1550', y: '2400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_A',
                signalPos: { x: '1520', y: '2420' },
                trainPos: { x: '1550', y: '2420' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Zyrardow',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1280, y: 2490 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Zyrardow',
                nodeType: 'stationName',
                stationPrefix: 'Zy',
                stationName: 'Żyrardów',
                nodePos: { x: 1330, y: 2350 },
                nodePosFlipped: { x: 1365, y: 2500 }
            },
            {
                nodeID: 'platform-Zyrardow-1',
                nodeType: 'platform',
                nodePos: { x: 1250, y: 2382.5 },
                width: 40,
                height: 12.5,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Zyrardow-2',
                nodeType: 'platform',
                nodePos: { x: 1290, y: 2423.5 },
                width: 50,
                height: 12.5,
                text: 'Peron II'
            },
            {
                nodeID: 'trackMarker-Zyrardow-1a',
                nodeType: 'trackMarker',
                nodePos: { x: 1275, y: 2400 },
                text: '1a',
            },
            {
                nodeID: 'trackMarker-Zyrardow-3',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 2380 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Zyrardow-1',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 2400 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Zyrardow-2',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 2420 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Zyrardow-4',
                nodeType: 'trackMarker',
                nodePos: { x: 1355, y: 2440 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Zyrardow-8',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 2460 },
                text: '8',
            },
        ]
    },
    "ZYRARDOW_GRODZISKMAZOWIECKI": {
        "TRACKS": [
            {
                trackID: 'TRACKS_ZYRARDOW_GRODZISKMAZOWIECKI',
                trackSVG: `
                M1530,2400 1630,2400 M1650,2400 1750,2400 M1770,2400 1870,2400 M1890,2400 1990,2400 M2010,2400 2110,2400 M2130,2400 2230,2400 M2250,2400 2350,2400
                M1530,2420 1630,2420 M1650,2420 1750,2420 M1770,2420 1870,2420 M1890,2420 1990,2420 M2010,2420 2110,2420 M2130,2420 2230,2420 M2250,2420 2350,2420

                M2370,2400 2375,2400 M2380,2400 2385,2400 M2390,2400 2395,2400 M2400,2400 2405,2400 M2410,2400 2415,2400 M2420,2400 2425,2400 M2430,2400 2435,2400
                M2370,2420 2375,2420 M2380,2420 2385,2420 M2390,2420 2395,2420 M2400,2420 2405,2420 M2410,2420 2415,2420 M2420,2420 2425,2420 M2430,2420 2435,2420
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_397N',
                signalPos: { x: '1640', y: '2400' },
                trainPos: { x: '1610', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_398',
                signalPos: { x: '1640', y: '2420' },
                trainPos: { x: '1610', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_397',
                signalPos: { x: '1640', y: '2400' },
                trainPos: { x: '1670', y: '2400' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_398N',
                signalPos: { x: '1640', y: '2420' },
                trainPos: { x: '1670', y: '2420' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_383N',
                signalPos: { x: '1760', y: '2400' },
                trainPos: { x: '1730', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_382',
                signalPos: { x: '1760', y: '2420' },
                trainPos: { x: '1730', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_383',
                signalPos: { x: '1760', y: '2400' },
                trainPos: { x: '1790', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_382N',
                signalPos: { x: '1760', y: '2420' },
                trainPos: { x: '1790', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_367N',
                signalPos: { x: '1880', y: '2400' },
                trainPos: { x: '1850', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_368',
                signalPos: { x: '1880', y: '2420' },
                trainPos: { x: '1850', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_367',
                signalPos: { x: '1880', y: '2400' },
                trainPos: { x: '1910', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_368N',
                signalPos: { x: '1880', y: '2420' },
                trainPos: { x: '1910', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_355N',
                signalPos: { x: '2000', y: '2400' },
                trainPos: { x: '1970', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_354',
                signalPos: { x: '2000', y: '2420' },
                trainPos: { x: '1970', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_355',
                signalPos: { x: '2000', y: '2400' },
                trainPos: { x: '2030', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_354N',
                signalPos: { x: '2000', y: '2420' },
                trainPos: { x: '2030', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_341N',
                signalPos: { x: '2120', y: '2400' },
                trainPos: { x: '2090', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_340',
                signalPos: { x: '2120', y: '2420' },
                trainPos: { x: '2090', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_341',
                signalPos: { x: '2120', y: '2400' },
                trainPos: { x: '2150', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_340N',
                signalPos: { x: '2120', y: '2420' },
                trainPos: { x: '2150', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_327N',
                signalPos: { x: '2240', y: '2400' },
                trainPos: { x: '2210', y: '2400' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_328',
                signalPos: { x: '2240', y: '2420' },
                trainPos: { x: '2210', y: '2420' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_327',
                signalPos: { x: '2240', y: '2400' },
                trainPos: { x: '2270', y: '2400' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_328N',
                signalPos: { x: '2240', y: '2420' },
                trainPos: { x: '2270', y: '2420' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            //^ ENTRY AND EXIT SIGNALS OF GRODZISK MAZOWIECKI
            //
            {
                signalName: 'Gr_Y',
                signalPos: { x: '2360', y: '2400' },
                trainPos: { x: '2330', y: '2400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_Z',
                signalPos: { x: '2360', y: '2420' },
                trainPos: { x: '2330', y: '2420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P3',
                signalPos: { x: '2360', y: '2400' },
                trainPos: { x: '2375', y: '2400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P4',
                signalPos: { x: '2360', y: '2420' },
                trainPos: { x: '2375', y: '2420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: "simpleText-po-Międzyborów",
                nodeType: "simpleText",
                nodePos: { x: 1580, y: 2370 },
                nodePosFlipped: { x: 1580, y: 2450 },
                text: "Międzyborów",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Międzyborów-1',
                nodeType: 'platform',
                nodePos: { x: 1555, y: 2385 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Międzyborów-2',
                nodeType: 'platform',
                nodePos: { x: 1555, y: 2425 },
                width: 50,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_397',
                nodeType: 'trackMarker',
                nodePos: { x: 1580, y: 2400 },
                text: '397',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_412',
                nodeType: 'trackMarker',
                nodePos: { x: 1580, y: 2420 },
                text: '412',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_383',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 2400 },
                text: '383',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_398',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 2420 },
                text: '398',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_367',
                nodeType: 'trackMarker',
                nodePos: { x: 1820, y: 2400 },
                text: '367',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_382',
                nodeType: 'trackMarker',
                nodePos: { x: 1820, y: 2420 },
                text: '382',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_355',
                nodeType: 'trackMarker',
                nodePos: { x: 1940, y: 2400 },
                text: '355',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_368',
                nodeType: 'trackMarker',
                nodePos: { x: 1940, y: 2420 },
                text: '368',
            },
            //
            {
                nodeID: "simpleText-po-Jaktorow",
                nodeType: "simpleText",
                nodePos: { x: 2060, y: 2370 },
                nodePosFlipped: { x: 2060, y: 2450 },
                text: "Jaktorów",
                textSize: phFontSize
            },
            {
                nodeID: 'platform-Jaktorow-1',
                nodeType: 'platform',
                nodePos: { x: 2035, y: 2385 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Jaktorw-2',
                nodeType: 'platform',
                nodePos: { x: 2035, y: 2425 },
                width: 50,
                height: 10,
                text: ''
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_341',
                nodeType: 'trackMarker',
                nodePos: { x: 2060, y: 2400 },
                text: '341',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_354',
                nodeType: 'trackMarker',
                nodePos: { x: 2060, y: 2420 },
                text: '354',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_327',
                nodeType: 'trackMarker',
                nodePos: { x: 2180, y: 2400 },
                text: '327',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_340',
                nodeType: 'trackMarker',
                nodePos: { x: 2180, y: 2420 },
                text: '340',
            },
            //
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_315',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 2400 },
                text: '315',
            },
            {
                nodeID: 'trackMarker-Skierniewice_Zyrardow_328',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 2420 },
                text: '328',
            },
        ]
    },
    // "__TEMPLATE__": {
    //     "TRACKS": [
    //         {
    //             trackID: '',
    //             /**/
    //             trackSVG: ``,
    //             trackColor: 'white'
    //         },
    //     ],
    //     "SIGNALS": [
    //         {
    //             signalName: '',
    //             signalPos: { x: '0', y: '0' },
    //             trainPos: { x: '0', y: '0' },
    //             signalType: 'station_standard',
    //             signalDirectionOnMap: 'right',
    //         },
    //     ],
    //     "NODES": []
    // },
}