import { SRTO_DataTypes } from '../srto-dataTypes'

const NPT_COLOR = 'rgb(46, 46, 46)'
const phFontSize = 12

export const SRTO_SCREEN1_DATA: SRTO_DataTypes.ScreenProps = {
    "ADDITIONAL_ELEMENTS": {
        "TRACKS": [],
        "SIGNALS": [],
        "NODES": [
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
                nodePos: { x: 1940, y: 225 },
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
                nodeID: 'trackBreakMarker-LazyLB_LazyLazyLA',
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
        ]
    },
    "KATOWICETOWAROWA_BRYNOW": {
        "TRACKS": [
            {
                trackID: 'KATOWICETOWAROWA_BRYNOW',
                trackSVG: `
                M35,40 40,40 M45,40 50,40 M55,40 60,40 M65,40 70,40 M75,40 80,40 M85,40 90,40 M95,40 100,40 M105,40 110,40 M120,40 180,40 M200,40 260,40

                M15,140 20,140 M25,140 30,140 M35,140 40,140 M45,140 50,140 M55,140 60,140 M65,140 70,140 M75,140 80,140 M100,140 160,140 M180,140 240,140
                M15,160 20,160 M25,160 30,160 M35,160 40,160 M45,160 50,160 M55,160 60,160 M65,160 70,160 M75,160 80,160 M100,160 160,160 M180,160 240,160

                M25,180 30,180 M35,180 40,180 M45,180 50,180 M55,180 60,180 M65,180 70,180 M75,180 80,180 M85,180 90,180 M100,180 160,180 M180,180 240,180
                M25,200 30,200 M35,200 40,200 M45,200 50,200 M55,200 60,200 M65,200 70,200 M75,200 80,200 M85,200 90,200 M100,200 160,200 M180,200 240,200
                `,
                trackColor: 'gray',
            }
        ],
        "SIGNALS": [
            {
                //!!!
                //!!! BORDER SIGNAL
                //!!!
                invisibleSignal: true,
                signalName: 'l139_bry_o',
                signalPos: { x: '0', y: '0' },
                trainPos: { x: '35', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'l139_bry_a',
                signalPos: { x: '110', y: '40' },
                trainPos: { x: '125', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'l139_20',
                signalPos: { x: '190', y: '40' },
                trainPos: { x: '175', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'l139_15',
                signalPos: { x: '190', y: '40' },
                trainPos: { x: '205', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                //!!!
                //!!! BORDER SIGNAL
                //!!!
                invisibleSignal: true,
                signalName: 'l137_ktc_o',
                signalPos: { x: '0', y: '0' },
                trainPos: { x: '25', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'l137_ktc_x',
                signalPos: { x: '90', y: '140' },
                trainPos: { x: '75', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'l137_ktc_y',
                signalPos: { x: '90', y: '160' },
                trainPos: { x: '75', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'l137_ktc_u1',
                signalPos: { x: '90', y: '140' },
                trainPos: { x: '105', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'l137_ktc_u2',
                signalPos: { x: '90', y: '160' },
                trainPos: { x: '105', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'l137_21n',
                signalPos: { x: '170', y: '140' },
                trainPos: { x: '155', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'l137_22',
                signalPos: { x: '170', y: '160' },
                trainPos: { x: '155', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'l137_17',
                signalPos: { x: '170', y: '140' },
                trainPos: { x: '185', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'l137_16n',
                signalPos: { x: '170', y: '160' },
                trainPos: { x: '185', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            // BRYNOW
            //
            {
                signalName: 'l139_bry_H',
                signalPos: { x: '100', y: '180' },
                trainPos: { x: '85', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'l139_bry_J',
                signalPos: { x: '100', y: '200' },
                trainPos: { x: '85', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'l139_bry_d',
                signalPos: { x: '170', y: '180' },
                trainPos: { x: '155', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'l139_bry_e',
                signalPos: { x: '170', y: '200' },
                trainPos: { x: '155', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'l139_bry_b',
                signalPos: { x: '170', y: '180' },
                trainPos: { x: '185', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'l139_bry_c',
                signalPos: { x: '170', y: '200' },
                trainPos: { x: '185', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
        ],
        "NODES": [
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
        ]
    },
    "1614_KO_KATOWICE": { //^ Katowice
        "TRACKS": [
            {
                trackID: 'KATOWICE_STATION_NPT',
                /*
                SWITCH T13 TO T11 + TRACK 11
                SWITCH T12 TO T12 + TRACK 12
                DKW TRACK 11/12
                */
                trackSVG: `
                M595,120 597.5,125 597.5,135 600,140 M555,140 770,140
                M595,180 597.5,175 597.5,165 600,160 M555,160 750,160
                M610,140 630,160 M610,160 630,140`,
                trackColor: NPT_COLOR
            },
            {
                trackID: 'STATION_KATOWICE',
                /*
                ? LEFT SWITCHFIELD
                BRYNOW TOR 1 TO TRACK 9 / SWITCH TO TRACK 7 AND TRACK 5
                SWITCH 72 + DKW 68/69/70/71 + CONNECTION TO UPPER DKW + UPPER DKW 83/62/64/61/60 + SWITCH TO TRACK 7
                
                SWITCHES KTC UPPER TRACK TO BRY LOWER TRACK
                SWITCHES BRY LOWER TRACK TO KTC UPPER TRACK
                
                SWITCH TRACK 3 + DKW TRACK3/1
                TRACK CONNECTION KTC LOWER TRACK TO TRACK 1
                
                TRACK CONNECTIONS FROM KTC LOWER AND BRYNOW TRACKS TO TRACKS 4/6/8
                SWITCH CONNECTION FROM TRACK 8 TO TRACK 2
                SWITCH TO TRACK 10
                
                ? TRACKS
                TRACKS 9 TO 1 TO 10
                
                ? RIGHT SWITCHFIELD
                CONNECTION FROM TRACK 9 TO TRACK 17 + CONNECTION FROM TRACK 7 TO SWITCH
                CONNECTION FROM TRACK 7 TO TRACK 15 + CONNECTION FROM TRACK 5 TO SWITCH
                CONNECTION FROM TRACK 3 TO TRACK 13 + CONNECTION FROM TRACK 1 TO TRACK 13
                
                SWITCH CONNECTION FROM TRACK 17 TO TRACK 13
                
                CONNECTION FROM TRACK 2 TO TRACK 14 + CONNECTION FROM TRACK 4 TO SWITCH
                CONNECTION FROM TRACK 4 TO TRACK 16 + CONNECTION FROM TRACK 6 TO SWITCH
                CONNECTION FROM TRACK 6 TO TRACK 18 + CONNECTION FROM TRACK 8 TO SWITCH + CONNECTION TO TRACK 10
                
                CONNECTION TRACK 10 TO TRACK22/26
                DKW 42/44/43 + DKW 41/48/38 + SWITCH 40cd/35ab
                
                ?TRACKS 17/15/13/14/16/26
                
                TRACK17 + SWITCH TO TRACK 15
                
                SWITCH TRACK 15/13 + SWITCH TO SWITCHES TRACK 18
                SECOND SWITCH TRACK 15/13 TO TRACK 16
                
                CONNECTION T14 TO SWITCHES FROM T15
                CONNECTION T16 TO SW21
                CONNECTION T18 TO SW21 + SW14ab + SWITCHES TO ENTRY TRACK 15
                
                CON-SW21 + DKW 14cd/15cd/8ab/9ab
                
                TRACK26 TO T20
                CONNECTION T20 TO DKW
                
                CONNECTION TO ENTRY SIGNALS LK138
                
                */
                trackSVG: `
                M270,40 342.5,40 345,35 345,25 347.5,20 430,20
                M320,40 322.5,45 322.5,55 325,60 355,60 M335,60 355,80 M335,80 355,60 365,60 367.5,55 367.5,45 370,40 430,40 M380,40 400,20 M380,20 400,40 M410,40 412.5,45 412.5,55 415,60 430,60
                
                M260,140 262.5,145 262.5,155 265,160 M275,160 295,180 M305,180 307.5,185 307.5,195 310,200
                M260,200 262.5,195 262.5,185 265,180 M275,180 295,160 M305,160 307.5,155 307.5,145 310,140
                
                M250,140 320,140 322.5,135 322.5,85 325,80 430,80 M365,80 385,100 M365,100 385,80
                M340,160 342.5,155 342.5,105 345,100 395,100 397.5,105 397.5,115 400,120 430,120
                
                M250,160 410,160 M250,180 410,180 M250,200 410,200
                M365,200 367.5,195 367.5,185 370,180 M380,180 382.5,175 382.5,165 385,160 M395,160 397.5,155 397.5,145 400,140 410,140
                M395,200 397.5,205 397.5,215 400,220 410,220
                
                
                M440,20 500,20
                M440,40 500,40
                M440,60 500,60
                M440,80 500,80
                M440,120 500,120
                M420,140 480,140
                M420,160 480,160
                M420,180 480,180
                M420,200 480,200
                M420,220 480,220
                
                
                M510,20 535,20 537.5,25 537.5,35 540,40 M 520,40 550,40 552.5,45 552.5,75 555,80 640,80
                M510,40 520,40 522.5,45 522.5,55 525,60 M510,60 535,60 537.5,65 537.5,95 540,100 640,100
                M510,80 520,80 522.5,85 522.5,115 525,120 M510,120 640,120
                
                M565,80 567.5,85 567.5,95 570,100 M580,100 582.5,105 582.5,118 585,120
                
                M490,140 530,140 532.5,145 532.5,155 535,160 M510,160 545,160 547.5,165 547.5,175 550,180 640,180
                M490,160 515,160 517.5,165 517.5,175 520,180 M500,180 530,180 532.5,185 532.5,195 535,200 640,200
                M490,180 500,180 502.6,185 502.5,195 505,200 M490,200 515,200 517.5,205 517.5,215 520,220 M490,220 640,220
                
                M530,220 532.5,225 532.5,235 535,240 760,240 M545,240 547.5,245 547.5,255 550,260 570,260
                M555,240 575,220 M555,220 575,240 M585,220 605,200 M585,200 605,220 M615,200 617.5,195 617.5,185 620,180
                
                
                M650,100 730,100 M740,100 880,100
                M650,120 730,120 M740,120 880,120
                M650,180 710,180
                M650,200 710,200
                M650,220 740,220
                
                
                M650,80 800,80 802.5,85 802.5,95 805,100
                
                M750,100 752.5,105 752.5,115 755,120 M765,120 767.5,125 767.5,135 770,140 775,140 777.5,145 777.5,155 780,160 M790,160 792.5,165 792.5,175 795,180
                M785,100 787.5,105 787.5,115 790,120 800,120 802.5,125 802.5,155 805,160
                
                M720,180 745,180 747.5,175 747.5,165 750,160 840,160
                M720,200 730,200 732.5,195 732.5,185 735,180 M745,180 755,180 757.5,185 757.5,195 760,200 770,200
                M750,220 765,220 767.5,215 767.5,205 770,200 780,200 782.5,195 782.5,185 785,180 835,180 837.5,175 837.5,165 840,160 850,160 852.5,155 852.5,125 855,120 865,120 867.5,115 867.5,105 870,100
                
                M780,200 805,200 825,180
                
                M580,260 690,260 692.5,255 692.5,245 695,240
                M770,240 790,240 792.5,235 792.5,205 795,200
                
                M850,160 865,160 867.5,165 867.5,175 870,180 880,180
                M835,180 855,180 857.5,185 857.5,195 860,200 880,200`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'KO_T',
                signalPos: { x: '270', y: '40' },
                trainPos: { x: '255', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_S',
                signalPos: { x: '250', y: '140' },
                trainPos: { x: '235', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_R',
                signalPos: { x: '250', y: '160' },
                trainPos: { x: '235', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_P',
                signalPos: { x: '250', y: '180' },
                trainPos: { x: '235', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_O',
                signalPos: { x: '250', y: '200' },
                trainPos: { x: '235', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'KO_N9',
                signalPos: { x: '430', y: '20' },
                trainPos: { x: '445', y: '20' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N7',
                signalPos: { x: '430', y: '40' },
                trainPos: { x: '445', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N5',
                signalPos: { x: '430', y: '60' },
                trainPos: { x: '445', y: '60' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N3',
                signalPos: { x: '430', y: '80' },
                trainPos: { x: '445', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N1',
                signalPos: { x: '430', y: '120' },
                trainPos: { x: '445', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N2',
                signalPos: { x: '410', y: '140' },
                trainPos: { x: '425', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N4',
                signalPos: { x: '410', y: '160' },
                trainPos: { x: '425', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N6',
                signalPos: { x: '410', y: '180' },
                trainPos: { x: '425', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N8',
                signalPos: { x: '410', y: '200' },
                trainPos: { x: '425', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_N10',
                signalPos: { x: '410', y: '220' },
                trainPos: { x: '425', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            //~ INTERMEDIATE SIGNALS TO THE RIGHT SIDE
            {
                signalName: 'KO_M9',
                signalPos: { x: '510', y: '20' },
                trainPos: { x: '495', y: '20' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M7',
                signalPos: { x: '510', y: '40' },
                trainPos: { x: '495', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M5',
                signalPos: { x: '510', y: '60' },
                trainPos: { x: '495', y: '60' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M3',
                signalPos: { x: '510', y: '80' },
                trainPos: { x: '495', y: '80' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M1',
                signalPos: { x: '510', y: '120' },
                trainPos: { x: '495', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M2',
                signalPos: { x: '490', y: '140' },
                trainPos: { x: '475', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M4',
                signalPos: { x: '490', y: '160' },
                trainPos: { x: '475', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M6',
                signalPos: { x: '490', y: '180' },
                trainPos: { x: '475', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M8',
                signalPos: { x: '490', y: '200' },
                trainPos: { x: '475', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_M10',
                signalPos: { x: '490', y: '220' },
                trainPos: { x: '475', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            //~ INTERMEDIATE SIGNALS TO THE LEFT SIDE
            {
                signalName: 'KO_L',
                signalPos: { x: '640', y: '80' },
                trainPos: { x: '655', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_J',
                signalPos: { x: '640', y: '100' },
                trainPos: { x: '655', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_K',
                signalPos: { x: '640', y: '120' },
                trainPos: { x: '655', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_G14',
                signalPos: { x: '640', y: '180' },
                trainPos: { x: '655', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_G16',
                signalPos: { x: '640', y: '200' },
                trainPos: { x: '655', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_G18',
                signalPos: { x: '640', y: '220' },
                trainPos: { x: '655', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_F',
                signalPos: { x: '570', y: '260' },
                trainPos: { x: '585', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'KO_E15',
                signalPos: { x: '740', y: '100' },
                trainPos: { x: '715', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_E13',
                signalPos: { x: '740', y: '120' },
                trainPos: { x: '715', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_E14',
                signalPos: { x: '720', y: '180' },
                trainPos: { x: '705', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_E16',
                signalPos: { x: '720', y: '200' },
                trainPos: { x: '705', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_E18',
                signalPos: { x: '750', y: '220' },
                trainPos: { x: '730', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_E20',
                signalPos: { x: '770', y: '240' },
                trainPos: { x: '755', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'KO_D',
                signalPos: { x: '880', y: '100' },
                trainPos: { x: '895', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_C',
                signalPos: { x: '880', y: '120' },
                trainPos: { x: '895', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_B',
                signalPos: { x: '880', y: '180' },
                trainPos: { x: '895', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KO_A',
                signalPos: { x: '880', y: '200' },
                trainPos: { x: '895', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Katowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 480, y: 240 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-Katowice',
                nodeType: 'stationName',
                stationPrefix: 'KO',
                stationName: 'Katowice',
                nodePos: { x: 650, y: 50 },
                nodePosFlipped: { x: 600, y: 290 }
            },
            {
                nodeID: 'platform-Katowice_1',
                nodeType: 'platform',
                nodePos: { x: 440, y: 25 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-Katowice_2',
                nodeType: 'platform',
                nodePos: { x: 440, y: 85 },
                width: 60,
                height: 30,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Katowice_3',
                nodeType: 'platform',
                nodePos: { x: 420, y: 145 },
                width: 60,
                height: 10,
                text: 'Peron III'
            },
            {
                nodeID: 'platform-Katowice_4',
                nodeType: 'platform',
                nodePos: { x: 420, y: 205 },
                width: 60,
                height: 10,
                text: 'Peron IV'
            },
            {
                nodeID: 'trackMarker-Katowice_9',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 20 },
                text: '9',
            },
            {
                nodeID: 'trackMarker-Katowice_7',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 40 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-Katowice_5',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 60 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Katowice_3',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 80 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Katowice_1',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 120 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Katowice_2',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 140 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Katowice_4',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 160 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Katowice_6',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 180 },
                text: '6',
            },
            {
                nodeID: 'trackMarker-Katowice_8',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 200 },
                text: '8',
            },
            {
                nodeID: 'trackMarker-Katowice_10',
                nodeType: 'trackMarker',
                nodePos: { x: 450, y: 220 },
                text: '10',
            },
            {
                nodeID: 'trackMarker-Katowice_17',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 80 },
                text: '17',
            },
            {
                nodeID: 'trackMarker-Katowice_15',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 100 },
                text: '15',
            },
            {
                nodeID: 'trackMarker-Katowice_13',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 120 },
                text: '13',
            },
            {
                nodeID: 'trackMarker-Katowice_11',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 140 },
                text: '11',
            },
            {
                nodeID: 'trackMarker-Katowice_12',
                nodeType: 'trackMarker',
                nodePos: { x: 690, y: 160 },
                text: '12',
            },
            {
                nodeID: 'trackMarker-Katowice_14',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 180 },
                text: '14',
            },
            {
                nodeID: 'trackMarker-Katowice_16',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 200 },
                text: '16',
            },
            {
                nodeID: 'trackMarker-Katowice_18',
                nodeType: 'trackMarker',
                nodePos: { x: 700, y: 220 },
                text: '18',
            },
            {
                nodeID: 'trackMarker-Katowice_20',
                nodeType: 'trackMarker',
                nodePos: { x: 740, y: 240 },
                text: '20',
            },
            {
                nodeID: 'trackMarker-Katowice_22',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 240 },
                text: '22',
            },
            {
                nodeID: 'trackMarker-Katowice_26',
                nodeType: 'trackMarker',
                nodePos: { x: 650, y: 260 },
                text: '26',
            },
        ]
    },
    "KATOWICE_KATOWICEZAWODZIE": {
        "TRACKS": [
            {
                trackID: 'TRACKS_KATOWICE_KATOWICEZAWODZIE',
                trackSVG: `
                M890,100 950,100
                M890,120 950,120
                M890,180 950,180
                M890,200 950,200`,
                trackColor: 'gray'
            }
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
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
        ]
    },
    "1655_KZ_KATOWICEZAWODZIE": { //^ Katowice Zawodzie
        "TRACKS": [
            {
                trackID: 'KATOWICE_ZAWODZIE',
                /*
                TRACK 1
                TRACK 2
                TRACK 3
                TRACK 4
                SW53/52/51
                SW50/49/48/47
                SW42-SW38-TRACK10
                TRACK10-SW16-SW10
                SW21/22
                TRACK 6
                TRACK 8
                */
                trackSVG: `
                M960,100 1090,100 M1100,100 1180,100 M1190,100 1290,100
                M960,120 1090,120 M1100,120 1180,120 M1190,120 1290,120
                M960,180 1090,180 M1100,180 1180,180 M1190,180 1290,180
                M960,200 1090,200 M1100,200 1180,200 M1190,200 1280,200
                M970,100 972.5,105 972.5,115 975,120 M985,120 987.5,125 987.5,175 990,180
                M1000,200 1002.5,195 1002.5,185 1005,180 M1015,180 1017.5,175 1017.5,125 1020,120 M1030,120 1032.5,115 1032.5,105 1035,100
                M1030,180 1032.5,185 1032.5,195 1035,200 1045,200 1047.5,205 1047.5,215 1050,220 1060,220 1062.5,225 1062.5,235 1065,240 1075,240 1077.5,245 1077.5,255 1080,260 1100,260
                M1110,260 1170,260 M1180,260 1200,260 1202.5,255 1202.5,245 1205,240 1215,240 1217.5,235 1217.5,225 1220,220 1230,220 1232.5,215 1232.5,205 1235,200 1245,200 1247.5,195 1247.5,185 1250,180 1260,180 1262.5,175 1262.5,125 1265,120 1275,120 1277.5,115 1277.5,105 1280,100
                M1230,100 1232.5,105 1232.5,115 1235,120
                
                M1060,220 1090,220 M1100,220 1180,220 M1190,220 1220,220
                M1070,240 1100,240 M1110,240 1170,240 M1180,240 1210,240`,
                trackColor: 'white'
            }
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'KZ_J1S',
                signalPos: { x: '960', y: '100' },
                trainPos: { x: '945', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_O',
                signalPos: { x: '960', y: '120' },
                trainPos: { x: '945', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_P1M',
                signalPos: { x: '960', y: '180' },
                trainPos: { x: '945', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_P',
                signalPos: { x: '960', y: '200' },
                trainPos: { x: '945', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            //~ EXIT SIGNALS TO THE LEFT
            {
                signalName: 'KZ_K',
                signalPos: { x: '1090', y: '100' },
                trainPos: { x: '1115', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_K2',
                signalPos: { x: '1090', y: '120' },
                trainPos: { x: '1115', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_M',
                signalPos: { x: '1090', y: '180' },
                trainPos: { x: '1115', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_M4',
                signalPos: { x: '1090', y: '200' },
                trainPos: { x: '1115', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_N6',
                signalPos: { x: '1090', y: '220' },
                trainPos: { x: '1115', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_N8',
                signalPos: { x: '1100', y: '240' },
                trainPos: { x: '1115', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_N10',
                signalPos: { x: '1100', y: '260' },
                trainPos: { x: '1115', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            //~ EXIT SIGNALS TO THE RIGHT
            {
                signalName: 'KZ_D1',
                signalPos: { x: '1190', y: '100' },
                trainPos: { x: '1165', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_D2',
                signalPos: { x: '1190', y: '120' },
                trainPos: { x: '1165', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_E3',
                signalPos: { x: '1190', y: '180' },
                trainPos: { x: '1165', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_E',
                signalPos: { x: '1190', y: '200' },
                trainPos: { x: '1165', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_F',
                signalPos: { x: '1190', y: '220' },
                trainPos: { x: '1165', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_G',
                signalPos: { x: '1180', y: '240' },
                trainPos: { x: '1165', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_H',
                signalPos: { x: '1180', y: '260' },
                trainPos: { x: '1165', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_J2',
                signalPos: { x: '1290', y: '200' },
                trainPos: { x: '1275', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_default',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'KZ_B1',
                signalPos: { x: '1290', y: '100' },
                trainPos: { x: '1305', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_B2',
                signalPos: { x: '1290', y: '120' },
                trainPos: { x: '1305', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZw_A',
                signalPos: { x: '1290', y: '180' },
                trainPos: { x: '1305', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
            {
                signalName: 'KZ_J',
                signalPos: { x: '1290', y: '200' },
                trainPos: { x: '1305', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_default',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-KatowiceZawodzie',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1030, y: 140 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-KatowiceZawodzie',
                nodeType: 'stationName',
                stationPrefix: 'KZ',
                stationName: 'Katowice Zawodzie',
                nodePos: { x: 1130, y: 50 },
                nodePosFlipped: { x: 1130, y: 290 }
            },
            {
                nodeID: 'platform-KatowiceZawodzie_1',
                nodeType: 'platform',
                nodePos: { x: 1100, y: 105 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-KatowiceZawodzie_2',
                nodeType: 'platform',
                nodePos: { x: 1100, y: 185 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'trackMarker-KatowiceZawodzie_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 100 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-KatowiceZawodzie_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 120 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-KatowiceZawodzie_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 180 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-KatowiceZawodzie_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 200 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-KatowiceZawodzie_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 220 },
                text: '6',
            },
            {
                nodeID: 'trackMarker-KatowiceZawodzie_8',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 240 },
                text: '8',
            },
            {
                nodeID: 'trackMarker-KatowiceZawodzie_10',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 260 },
                text: '10',
            },
        ]
    },
    "KATOWICEZAWODZIE_SOSNOWIECGLOWNY": {
        "TRACKS": [
            {
                trackID: 'KATOWICEZAWODZIE_SOSNOWIECGLOWNY',
                trackSVG: `
                M1300,100 1360,100 M1380,100 1440,100 M1460,100 1520,100
                M1300,120 1360,120 M1370,120 1440,120 M1460,120 1520,120
                
                M1300,180 1305,180 M1310,180 1315,180 M1320,180 1325,180 M1330,180 1335,180 M1340,180 1345,180 M1350,180 1355,180
                M1300,200 1305,200 M1310,200 1315,200 M1320,200 1325,200 M1330,200 1335,200 M1340,200 1345,200 M1350,200 1355,200
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_3133N',
                signalPos: { x: '1370', y: '100' },
                trainPos: { x: '1355', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_3138',
                signalPos: { x: '1370', y: '120' },
                trainPos: { x: '1355', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_3133',
                signalPos: { x: '1370', y: '100' },
                trainPos: { x: '1385', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_3121N',
                signalPos: { x: '1450', y: '100' },
                trainPos: { x: '1435', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_3128',
                signalPos: { x: '1450', y: '120' },
                trainPos: { x: '1435', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_3121',
                signalPos: { x: '1450', y: '100' },
                trainPos: { x: '1465', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_3128N',
                signalPos: { x: '1450', y: '120' },
                trainPos: { x: '1465', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
        ],
        "NODES": [
            {
                nodeID: 'platform-KatowiceSzopienicePoludniowe',
                nodeType: 'platform',
                nodePos: { x: 1390, y: 105 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-KatowiceSzopienicePoludniowe',
                nodeType: 'simpleText',
                nodePos: { x: 1420, y: 80 },
                text: 'K. Szopienice Płd.',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'trackMarker-KZ_SG_3133',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 100 },
                text: '3133',
            },
            {
                nodeID: 'trackMarker-KZ_SG_3148',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 120 },
                text: '3148',
            },
            {
                nodeID: 'trackMarker-KZ_SG_3121',
                nodeType: 'trackMarker',
                nodePos: { x: 1410, y: 100 },
                text: '3121',
            },
            {
                nodeID: 'trackMarker-KZ_SG_3138',
                nodeType: 'trackMarker',
                nodePos: { x: 1410, y: 120 },
                text: '3138',
            },
            {
                nodeID: 'trackMarker-KZ_SG_3111',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 100 },
                text: '3111',
            },
            {
                nodeID: 'trackMarker-KZ_SG_3128',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 120 },
                text: '3128',
            },
        ]
    },
    "3993_SG_SOSNOWIECGLOWNY": { //^ Sosnowiec Glowny
        "TRACKS": [
            {
                trackID: '3993_SG_SOSNOWIECGLOWNY_NPT',
                /*
                TRACK 3
                */
                trackSVG: `
                M1720,80 1750,80 M1760,80 1860,80 M1870,80 1900,80`,
                trackColor: NPT_COLOR
            },
            {
                trackID: '3993_SG_SOSNOWIECGLOWNY',
                /*
                TRACK 1
                TRACK 3
                SWITCH 44/45
                SWITCH 41/38
                SW43-TRACK9
                TRACK9-SW15/8/5/3
                TRACK5
                TRACK7
                SW9/7/8/5
                
                Spl-Tracks
                */
                trackSVG: `
                M1530,100 1570,100 M1580,100 1640,100 M1650,100 1750,100 M1760,100 1860,100 M1870,100 1990,100
                M1530,120 1570,120 M1580,120 1640,120 M1650,120 1750,120 M1760,120 1860,120 M1870,120 1990,120
                M1660,100 1662.5,105 1662.5,115 1665,120
                M1710,120 1712.5,125 1712.5,135 1715,140
                M1680,140 1682.5,135 1682.5,125 1685,120 M1695,120 1697.5,115 1697.5,105 1700,100 M1710,100 1712.5,95 1712.5,85 1715,80 1725,80 1727.5,75 1727.5,65 1730,60 1740,60 1742.5,55 1742.5,25 1745,20 1770,20
                M1780,20 1840,20 M1850,20 1860,20 1862.5,25 1862.5,35 1865,40 1875,40 1877.5,45 1877.5,55 1880,60 1890,60 1892.5,65 1892.5,75 1895,80 1940,80 1960,100 M1970,100 1972.2,105 1972.5,115 1975,120
                M1740,60 1770,60 M1780,60 1840,60 M1850,60 1880,60
                M1755,60 1757.5,55 1757.5,45 1760,40 1770,40 M1780,40 1840,40 M1850,40 1870,40
                M1925,120 1927.5,115 1927.5,105 1930,100 
                
                M1550,100 1552.5,105 1552.5,115 1555,120 M1565,120 1567.5,125 1567.5,135 1565,140 1550,140
                M1550,160 1640,160 1642.5,155 1642.5,145 1645,140 1730,140 M1740,140 1860,140 M1870,140 1910,140 1912.5,135 1912.5,125 1915,120`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'SG_X',
                signalPos: { x: '1530', y: '100' },
                trainPos: { x: '1515', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_Y',
                signalPos: { x: '1530', y: '120' },
                trainPos: { x: '1515', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ ENTRY SIGNALS SOSNOWIEC POLUDNIOWY
            {
                signalName: 'SG_S',
                signalPos: { x: '1550', y: '140' },
                trainPos: { x: '1535', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_P',
                signalPos: { x: '1550', y: '160' },
                trainPos: { x: '1535', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ EXIT SIGNALS TO KZ
            {
                signalName: 'SG_U1',
                signalPos: { x: '1570', y: '100' },
                trainPos: { x: '1585', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_U2',
                signalPos: { x: '1570', y: '120' },
                trainPos: { x: '1585', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ INTERMEDIATE SIGNALS
            {
                signalName: 'SG_R1',
                signalPos: { x: '1650', y: '100' },
                trainPos: { x: '1635', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_R2',
                signalPos: { x: '1650', y: '120' },
                trainPos: { x: '1635', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ EXIT SIGNALS TO THE LEFT
            {
                signalName: 'SG_N9',
                signalPos: { x: '1770', y: '20' },
                trainPos: { x: '1785', y: '20' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N7',
                signalPos: { x: '1770', y: '40' },
                trainPos: { x: '1785', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N5',
                signalPos: { x: '1770', y: '60' },
                trainPos: { x: '1785', y: '60' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N3',
                signalPos: { x: '1750', y: '80' },
                trainPos: { x: '1785', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N1',
                signalPos: { x: '1750', y: '100' },
                trainPos: { x: '1785', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N2',
                signalPos: { x: '1750', y: '120' },
                trainPos: { x: '1785', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N4',
                signalPos: { x: '1730', y: '140' },
                trainPos: { x: '1745', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ EXIT SIGNALS TO THE RIGHT
            {
                signalName: 'SG_H9',
                signalPos: { x: '1850', y: '20' },
                trainPos: { x: '1835', y: '20' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H7',
                signalPos: { x: '1850', y: '40' },
                trainPos: { x: '1835', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H5',
                signalPos: { x: '1850', y: '60' },
                trainPos: { x: '1835', y: '60' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H3',
                signalPos: { x: '1870', y: '80' },
                trainPos: { x: '1835', y: '80' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H1',
                signalPos: { x: '1870', y: '100' },
                trainPos: { x: '1835', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H2',
                signalPos: { x: '1870', y: '120' },
                trainPos: { x: '1835', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H4',
                signalPos: { x: '1870', y: '140' },
                trainPos: { x: '1835', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'SG_B',
                signalPos: { x: '1990', y: '100' },
                trainPos: { x: '2005', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_A',
                signalPos: { x: '1990', y: '120' },
                trainPos: { x: '2005', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-SosnowiecGlowny',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1600, y: 130 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-SosnowiecGlowny',
                nodeType: 'stationName',
                stationPrefix: 'SG',
                stationName: 'Sosnowiec Główny',
                nodePos: { x: 1630, y: 50 },
                nodePosFlipped: { x: 1800, y: 175 }
            },
            {
                nodeID: 'platform-SosnowiecGlowny_1',
                nodeType: 'platform',
                nodePos: { x: 1740, y: 145 },
                width: 35,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform-SosnowiecGlowny_2',
                nodeType: 'platform',
                nodePos: { x: 1760, y: 105 },
                width: 60,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_9',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 20 },
                text: '9',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 40 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 60 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 80 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 100 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1810, y: 120 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 140 },
                text: '4b',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_4a',
                nodeType: 'trackMarker',
                nodePos: { x: 1820, y: 140 },
                text: '4a',
            },
        ]
    },
    "SOSNOWIECGLOWNY_SOSNOWIECPOLUDNIOWY": {
        "TRACKS": [
            {
                trackID: 'SOSNOWIECGLOWNY_SOSNOWIECPOLUDNIOWY',
                /*
                TRACK FROM KZ TO SPL (UPPER TO LOWER)
                TRACK FROM SG TO SPL (LOWER TO UPPER)
                */
                trackSVG: `
                M1540,140 1460,140 1457.5,145 1457.5,275 1460,280 1540,280
                M1540,160 1480,160 1477.5,165 1477.5,195 1480,200 1540,200`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [] //! NO NODES IN THIS CLUSTER
    },
    "4010_Spl1_SOSNOWIECPOLUDNIOWY": { //^ Sosnowiec Poludniowy
        "TRACKS": [
            {
                trackID: '4010_Spl1_SOSNOWIEC_POLUDNIOWY_NPT',
                /*
                SW38 + T6 + SW9
                */
                trackSVG: `
                M1610,240 1612.5,245 1612.5,255 1615,260 1640,260 M1650,260 1750,260 M1760,260 1770,260 1772.5,255 1772.5,245 1775,240
                M1820,220 1920,220`,
                trackColor: NPT_COLOR
            },
            {
                trackID: '4010_Spl1_SOSNOWIEC_POLUDNIOWY',
                /*
                FROM SIGNAL W + SW41 + SW36cd/33 + CONNECTION SW41
                FROM SIGNAL T + SW48 + SW39/36ab
                CONNECTOR SW36cd TO SW34/31 TO T2/4
                CONNECTOR SW39 TO TRACK 4
                
                TRACK 1/2/4
                
                T1 + SW7
                T2 TO SIGNAL A
                T4 + SW8/5
                */
                trackSVG: `
                M1550,200 1565,200 1567.5,205 1567.5,215 1570,220 1600,220 1602.5,215 1602.5,205 1605,200 M1560,200 1640,200
                M1550,280 1570,280 1572.5,275 1572.5,245 1575,240 1585,240 1587.5,235 1587.5,225 1590,220
                M1600,220 1640,220 M1610,220 1625,220 1627.5,225 1627.5,235 1630,240 1640,240
                M1585,240 1640,240
                
                M1650,200 1750,200
                M1650,220 1750,220
                M1650,240 1750,240
                
                M1760,200 1770,200 1772.5,205 1772.5,215 1775,220
                M1760,220 1810,220
                M1760,240 1785,240 1787.5,235 1787.5,225 1790,220`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'SPł1_W',
                signalPos: { x: '1550', y: '200' },
                trainPos: { x: '1535', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_T',
                signalPos: { x: '1550', y: '280' },
                trainPos: { x: '1535', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Spł1_J',
                signalPos: { x: '1640', y: '200' },
                trainPos: { x: '1660', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_K',
                signalPos: { x: '1640', y: '220' },
                trainPos: { x: '1660', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_L',
                signalPos: { x: '1640', y: '240' },
                trainPos: { x: '1660', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_M',
                signalPos: { x: '1640', y: '260' },
                trainPos: { x: '1660', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_C',
                signalPos: { x: '1760', y: '200' },
                trainPos: { x: '1715', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_B',
                signalPos: { x: '1760', y: '220' },
                trainPos: { x: '1715', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_D',
                signalPos: { x: '1760', y: '240' },
                trainPos: { x: '1715', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_E',
                signalPos: { x: '1760', y: '260' },
                trainPos: { x: '1715', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_A',
                signalPos: { x: '1810', y: '220' },
                trainPos: { x: '1840', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                //? ENTRY SIGNAL SOSNOWIEC_DANDOWKA
                signalName: 'SDn_W',
                signalPos: { x: '1930', y: '220' },
                trainPos: { x: '1890', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-SosnowiecPoludniowy',
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
                nodeID: 'platform-SosnowiecPoludniowy_1',
                nodeType: 'platform',
                nodePos: { x: 1660, y: 205 },
                width: 55,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Spl1_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 200 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Spl1_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 220 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Spl1_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 240 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Spl1_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 260 },
                text: '6',
            },
        ]
    },
    "SOSNOWIECGLOWNY_BEDZIN": {
        "TRACKS": [
            {
                trackID: 'TRACKS_SOSNOWIECGLOWNY_BEDZIN',
                trackSVG: `
                M2000,100 2060,100 M2080,100 2140,100
                M2000,120 2060,120 M2080,120 2140,120`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_3075N',
                signalPos: { x: '2070', y: '100' },
                trainPos: { x: '2055', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3076',
                signalPos: { x: '2070', y: '120' },
                trainPos: { x: '2055', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3071',
                signalPos: { x: '2070', y: '100' },
                trainPos: { x: '2085', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3070N',
                signalPos: { x: '2070', y: '120' },
                trainPos: { x: '2085', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-SosnowiecGlowny_Bedzin_3071',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 100 },
                text: '3071',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_Bedzin_3080',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 120 },
                text: '3080',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_Bedzin_3065',
                nodeType: 'trackMarker',
                nodePos: { x: 2110, y: 100 },
                text: '3065',
            },
            {
                nodeID: 'trackMarker-SosnowiecGlowny_Bedzin_3074',
                nodeType: 'trackMarker',
                nodePos: { x: 2110, y: 120 },
                text: '3074',
            },
        ]
    },
    "124_B_BEDZIN": { //^ BEDZIN
        "TRACKS": [
            {
                trackID: '124_BEDZIN',
                /*
                TRACK 1
                TRACK 2
                SW41/40/39/38/37 TRACK 6
                TRACK4
                SW15/14/13/12/11/10/9
                */
                trackSVG: `
                M2150,100 2200,100 M2210,100 2290,100 M2300,100 2360,100
                M2150,120 2200,120 M2210,120 2290,120 M2300,120 2360,120
                M2160,100 2162.5,105 2162.5,115 2165,120 2175,120 2177.5,125 2177.5,135 2180,140 2195,140 2197.5,145 2197.5,155 2200,160 2210,160 M2220,160 2280,160
                M2190,140 2200,140 M2210,140 2290,140 M2300,140 2310,140
                M2290,160 2300,160 2302.5,155 2302.5,145 2305,140 2315,140 2317.5,135 2317.5,125 2320,120 2330,120 2332.5,115 2332.5,105 2335,100 M2345,100 2347.5,105 2347.5,115 2350,120`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'B_R',
                signalPos: { x: '2150', y: '100' },
                trainPos: { x: '2135', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_S',
                signalPos: { x: '2150', y: '120' },
                trainPos: { x: '2135', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'B_K1',
                signalPos: { x: '2200', y: '100' },
                trainPos: { x: '2225', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_K2',
                signalPos: { x: '2200', y: '120' },
                trainPos: { x: '2225', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_K4',
                signalPos: { x: '2200', y: '140' },
                trainPos: { x: '2225', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_K6',
                signalPos: { x: '2210', y: '160' },
                trainPos: { x: '2225', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'B_E1',
                signalPos: { x: '2300', y: '100' },
                trainPos: { x: '2275', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_E2',
                signalPos: { x: '2300', y: '120' },
                trainPos: { x: '2275', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_E4',
                signalPos: { x: '2300', y: '140' },
                trainPos: { x: '2275', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_E6',
                signalPos: { x: '2290', y: '160' },
                trainPos: { x: '2275', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT AND ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'B_C',
                signalPos: { x: '2370', y: '100' },
                trainPos: { x: '2355', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_D',
                signalPos: { x: '2370', y: '120' },
                trainPos: { x: '2355', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_B',
                signalPos: { x: '2370', y: '100' },
                trainPos: { x: '2385', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_A',
                signalPos: { x: '2370', y: '120' },
                trainPos: { x: '2385', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Bedzin',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2320, y: 170 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-Bedzin',
                nodeType: 'stationName',
                stationPrefix: 'B',
                stationName: 'Będzin',
                nodePos: { x: 2250, y: 50 },
                nodePosFlipped: { x: 2250, y: 190 }
            },
            {
                nodeID: 'platform-Bedzin',
                nodeType: 'platform',
                nodePos: { x: 2225, y: 105 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Bedzin_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2250, y: 100 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Bedzin_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2250, y: 120 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Bedzin_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2250, y: 140 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Bedzin_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2250, y: 160 },
                text: '6',
            },
        ]
    },
    "BEDZIN_DABROWAGORNICZA": {
        "TRACKS": [
            {
                trackID: 'BEDZIN_DABROWAGORNICZA',
                /*
                3011-ABS SECOND SCREEN-ROW TO DG
                */
                trackSVG: `
                M2380,100 2440,100 M2460,100 2520,100 M2530,100 2540,100 2550,110 
                M2380,120 2440,120 M2460,120 2520,120 M2530,120 2540,120 2550,130

                M10,370 20,380 30,380 M40,380 100,380
                M10,390 20,400 30,400 M40,400 100,400`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_3037N',
                signalPos: { x: '2450', y: '100' },
                trainPos: { x: '2435', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_3036',
                signalPos: { x: '2450', y: '120' },
                trainPos: { x: '2435', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_3037',
                signalPos: { x: '2450', y: '100' },
                trainPos: { x: '2465', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3036N',
                signalPos: { x: '2450', y: '120' },
                trainPos: { x: '2465', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3023N',
                signalPos: { x: '2530', y: '100' },
                trainPos: { x: '2515', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3022',
                signalPos: { x: '2530', y: '120' },
                trainPos: { x: '2515', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3023',
                signalPos: { x: '30', y: '380' },
                trainPos: { x: '45', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_3022N',
                signalPos: { x: '30', y: '400' },
                trainPos: { x: '45', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'platform-BedzinMiasto_1',
                nodeType: 'platform',
                nodePos: { x: 2380, y: 125 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-BedzinMiasto_2',
                nodeType: 'platform',
                nodePos: { x: 2380, y: 85 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-BedzinMiasto',
                nodeType: 'simpleText',
                nodePos: { x: 2405, y: 70 },
                text: 'Będzin Miasto',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'trackMarker-Bedzin_DabrowaGornicza_3037',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 100 },
                text: '3037',
            },
            {
                nodeID: 'trackMarker-Bedzin_DabrowaGornicza_3048',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 120 },
                text: '3048',
            },
            {
                nodeID: 'trackMarker-Bedzin_DabrowaGornicza_3023',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 100 },
                text: '3023',
            },
            {
                nodeID: 'trackMarker-Bedzin_DabrowaGornicza_3036',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 120 },
                text: '3036',
            },
            {
                nodeID: 'platform-BedzinKsawera',
                nodeType: 'platform',
                nodePos: { x: 40, y: 385 },
                width: 50,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-BedzinKsawera',
                nodeType: 'simpleText',
                nodePos: { x: 70, y: 360 },
                text: 'Będzin Ksawera',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'trackMarker-Bedzin_DabrowaGornicza_3011',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 380 },
                text: '3011',
            },
            {
                nodeID: 'trackMarker-Bedzin_DabrowaGornicza_3022',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 400 },
                text: '3022',
            },
        ]
    },
    "719_DG_DABROWAGORNICZA": { //^ Dabrowa Gornicza
        "TRACKS": [
            {
                trackID: '719_DABROWAGORNICZA_NPT',
                trackSVG: `
                M530,400 527.5,405 527.5,415 525,420 M550,420 515,420 512.5,425 512.5,435 510,440 500,440 497.5,445 497.5,455 495,460 460,460
                M310,420 515,420 M330,420 327.5,425 327.5,435 325,440 330,440 315,440 312.5,445 312.5,455 310,460 M280,460 360,460 M325,460 327.5,465 327.5,475 330,480 360,480
                M330,440 500,440`,
                trackColor: 'none'
            },
            {
                trackID: '719_DABROWAGORNICZA',
                /*
                UPPER TRACK
                LOWER TRACK
                SW13/14 & SW12/11
                */
                trackSVG: `
                M110,380 150,380 M160,380 290,380 M300,380 370,380
                M110,400 150,400 M160,400 220,400 M230,400 290,400 M300,400 370,400
                M120,400 122.5,395 122.5,385 125,380 M135,380 137.5,385 137.5,395 140,400`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'DG_O',
                signalPos: { x: '110', y: '380' },
                trainPos: { x: '95', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_P',
                signalPos: { x: '110', y: '400' },
                trainPos: { x: '95', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_N1',
                signalPos: { x: '150', y: '380' },
                trainPos: { x: '235', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_N2',
                signalPos: { x: '150', y: '400' },
                trainPos: { x: '165', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_D',
                signalPos: { x: '230', y: '400' },
                trainPos: { x: '215', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_C1',
                signalPos: { x: '300', y: '380' },
                trainPos: { x: '285', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_C2',
                signalPos: { x: '300', y: '400' },
                trainPos: { x: '285', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_A',
                signalPos: { x: '370', y: '380' },
                trainPos: { x: '385', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_B',
                signalPos: { x: '370', y: '400' },
                trainPos: { x: '385', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-DabrowaGornicza',
                nodeType: 'dispatchingPost',
                nodePos: { x: 300, y: 415 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-DabrowaGornicza',
                nodeType: 'stationName',
                stationPrefix: 'DG',
                stationName: 'Dąbrowa Górnicza',
                nodePos: { x: 260, y: 350 },
                nodePosFlipped: { x: 260, y: 460 }
            },
            {
                nodeID: 'platform-DabrowaGornicza',
                nodeType: 'platform',
                nodePos: { x: 230, y: 385 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'tm-DabrowaGornicza_1',
                nodeType: 'trackMarker',
                nodePos: { x: 225, y: 380 },
                text: '1',
            },
            {
                nodeID: 'tm-DabrowaGornicza_2',
                nodeType: 'trackMarker',
                nodePos: { x: 260, y: 400 },
                text: '2',
            },
        ]
    },
    "DABROWAGORNICZA_DABROWAGORNICZAZABKOWICE": {
        "TRACKS": [
            {
                trackID: 'DABROWAGORNICZA_DABROWAGORNICZAZABKOWICE',
                trackSVG: `
                M380,380 440,380 M460,380 520,380 M540,380 600,380 M620,380 680,380
                M380,400 440,400 M460,400 520,400 M540,400 600,400 M620,400 680,400`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_2983N',
                signalPos: { x: '450', y: '380' },
                trainPos: { x: '435', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2980',
                signalPos: { x: '450', y: '400' },
                trainPos: { x: '435', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2983',
                signalPos: { x: '450', y: '380' },
                trainPos: { x: '465', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_2980N',
                signalPos: { x: '450', y: '400' },
                trainPos: { x: '465', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_2971N',
                signalPos: { x: '530', y: '380' },
                trainPos: { x: '515', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2966',
                signalPos: { x: '530', y: '400' },
                trainPos: { x: '515', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2971',
                signalPos: { x: '530', y: '380' },
                trainPos: { x: '545', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2966N',
                signalPos: { x: '530', y: '400' },
                trainPos: { x: '545', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2955N',
                signalPos: { x: '610', y: '380' },
                trainPos: { x: '595', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_2952',
                signalPos: { x: '610', y: '400' },
                trainPos: { x: '595', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_2955',
                signalPos: { x: '610', y: '380' },
                trainPos: { x: '625', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2952N',
                signalPos: { x: '610', y: '400' },
                trainPos: { x: '625', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2941',
                signalPos: { x: '690', y: '380' },
                trainPos: { x: '705', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'platform-DGGolonog',
                nodeType: 'platform',
                nodePos: { x: 480, y: 385 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-DGGolonog',
                nodeType: 'simpleText',
                nodePos: { x: 500, y: 360 },
                text: 'D. G. Gołonóg',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'platform-DGPogoria',
                nodeType: 'platform',
                nodePos: { x: 560, y: 385 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-DGGolonog',
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
        ]
    },
    "DABROWAGORNICZAHUTAKATOWICE_DGZABKOWICE": {
        "TRACKS": [
            {
                trackID: 'DABROWAGORNICZAHUTAKATOWICE_DGZABKOWICE',
                trackSVG: `
                M385,480 390,480 M395,480 400,480 M405,480 410,480 M415,480 420,480 M425,480 430,480 M435,480 440,480
                M385,500 390,500 M395,500 400,500 M405,500 410,500 M415,500 420,500 M425,500 430,500 M435,500 440,500
                M385,520 390,520 M395,520 400,520 M405,520 410,520 M415,520 420,520 M425,520 430,520 M435,520 440,520

                M530,500 590,500
                M530,520 590,520`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [] //! NO NODES IN THIS CLUSTER
    },
    "721_DGHK_DABROWAGORNICZAHUTAKATOWICE": { //^ Dabrowa Gornicza Huta Katowice
        "TRACKS": [
            {
                trackID: '721_DABROWAGORNICZAHUTAKATOWICE',
                trackSVG: `
                M450,500 520,500
                M450,520 520,520
                M450,480 480,480 482.5,485 482.5,495 485,500

                M470,520 472.5,515 472.5,505 475,500 M495,500 497.5,505 497.5,515 500,520`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'DGHK_N',
                signalPos: { x: '450', y: '480' },
                trainPos: { x: '437.5', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_M',
                signalPos: { x: '450', y: '500' },
                trainPos: { x: '437.5', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_L',
                signalPos: { x: '450', y: '520' },
                trainPos: { x: '437.5', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_G',
                signalPos: { x: '520', y: '500' },
                trainPos: { x: '535', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_H',
                signalPos: { x: '520', y: '520' },
                trainPos: { x: '535', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
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
        ]
    },
    "734_DZ_DABROWAGORNICZAZABKOWICE": { //^ Dabrowa Gornicza Zabkowice
        "TRACKS": [
            {
                trackID: '734_DABROWAGORNICZAZABKOWICE_LEFT',
                /*
                UPPER TRACK DG_DZA
                LOWER TRACK DG_DZA
                SW84/83 + SW81/82
                
                UPPER TRACK TO T1
                SW62cd/61 TO T3
                
                SW62ab/SW101cd
                
                SW31cd/51
                SW31cd/58
                SW57/55 + SW52/51
                
                DKW 103/104/102
                
                DGHK UPPER TRACK + T101 + T4
                DGHK LOWER TRACK + T102 + SW58/55 + T8
                */
                trackSVG: `
                M700,380 840,380
                M700,400 820,400
                M760,400 762.5,395 762.5,385 765,380 M785,380 787.5,385 787.5,395 790,400
                
                M835,380 840,380 842.5,385 842.5,415 845,420 900,420
                M865,420 867.5,415 867.5,405 870,400 900,400
                
                M855,420 852.5,425 852.5,495 850,500
                
                M810,400 820,400 822.5,405 822.5,455 825,460 875,460 877.5,465 877.5,475 880,480 910,480
                M800,400 802.5,405 802.5,475 805,480 865,480 867.5,485 867.5,495 870,500
                880,500 882.5,505 882.5,515 885,520 910,520 M880,500 890,500 892.5,495 892.5,485 895,480 M890,500 910,500
                
                M820,500 840,520 M820,520 840,500
                
                M810,500 870,500
                M810,520 850,520 852.5,525 852.5,535 855,540 910,540 M895,540 897.5,535 897.5,525 900,520`,
                trackColor: 'white'
            },
            {
                trackID: '734_DABROWAGORNICZAZABKOWICE_TRACKS',
                /*
                TRACK 3 TO SIGNAL
                TRACK 1 TO SWITCH
                TRACK 2 TO SIGNAL
                TRACK 4 TO SIGNAL
                TRACK 6 TO SIGNAL
                TRACK 8 TO SIGNAL
                */
                trackSVG: `
                M910,400 970,400
                M910,420 1000,420
                M910,480 980,480
                M920,500 1040,500
                M920,520 990,520
                M910,540 990,540`,
                trackColor: 'white'
            },
            {
                trackID: '734_DABROWAGORNICZAZABKOWICE_RIGHT',
                /*
                SWITCH FALL FROM TRACK 3 TO TRACK 12 [SW33/37/36/35/34]
                
                FREIGHT TRACKS:
                TRACK 13 + SW11/12cd
                TRACK 11
                TRACK 9 + SW18
                
                TRACK 12 TO SIGNAL + SW38/35ab TO T10 + SW17 + SIGNAL CONNECTION TRACK 12
                TRACK 12 UP TO SWITCH FIELD RIGHT SIDE
                
                SW43/42 + SW43/41
                TRACK 14 UP TO SWITCH FIELD RIGHT SIDE
                
                TRACK16 TO SWITCH FIELD RIGHT SIDE
                
                
                
                *SWITCH FIELD RIGHT SIDE
                TRACKS THROUGH THE FIELD
                
                
                SW8/5ab
                SW8/6ab
                DKW
                SW3cd/1
                SW4cd/2
                */
                trackSVG: `
                M980,400 990,400 992.5,405 992.5,415 995,420 1005,420 1007.5,425 1007.5,435 1010,440 1020,440 1022.5,445 1022.5,455 1025,460 1035,460 1037.5,465 1037.5,475 1040,480
                
                M990,400 1040,400 M1050,400 1120,400 M1130,400 1140,400 1142.5,405 1142.5,415 1145,420 1200,420
                M1005,420 1040,420 M1050,420 1160,420
                M1020,440 1040,440 M1050,440 1110,440 1112.5,435 1112.5,425 1115,420
                
                M990,480 1100,480 M1000,480 1002.5,475 1002.5,465 1005,460 1025,460 M1035,460 1100,460 M1110,460 1120,460 1122.5,465 1122.5,475 1125,480 M1110,480 1140,480
                M1140,480 1142.5,475 1142.5,445 1145,440 1160,440 1200,440
                
                M1000,520 1010,520 1012.5,525 1012.5,535 1015,540 M1010,520 1020,520 1022.5,515 1022.5,505 1025,500
                M1050,500 1160,500 1162.5,495 1162.5,465 1165,460 1200,460
                
                
                M1000,540 1110,540 M1120,540 1180,540 1182.5,535 1182.5,485 1185,480 1200,480
                
                M1200,420 1260,420
                M1200,440 1260,440
                M1200,460 1260,460
                M1200,480 1260,480
                
                
                M1200,420 1202.5,425 1202.5,435 1205,440
                M1200,480 1202.5,475 1202.5,465 1205,460
                M1215,440 1235,460 M1215,460 1235,440
                M1245,440 1247.5,435 1247.5,425 1250,420
                M1245,460 1247.5,465 1247.5,475 1250,480`,
                trackColor: 'white'
            },
            {
                trackID: '734_DABROWAGORNICZAZABKOWICE_FREIGHTTRACKS',
                /*
                SW252/251 + SW119/120
                SW118/117
                SW113/112
                
                TRACKS 105 / 103 / 101 / 102 / 104
                
                SW108/107/103ab
                SW106/105
                */
                trackSVG: `
                M600,500 680,500 M690,500 750,500 M760,500 810,500
                M600,520 680,520 M690,520 750,520 M760,520 810,520
                
                M610,500 612.5,505 612.5,515 615,520 M635,520 637.5,515 637.5,505 640,500
                M650,500 652.5,495 652.5,485 655,480 680,480 M665,480 667.5,475 667.5,465 670,460 680,460
                M650,520 652.5,525 652.5,535 655,540 680,540
                
                M690,460 750,460
                M690,480 750,480
                M690,500 750,500
                M690,520 750,520
                M680,540 750,540
                
                M760,460 770,460 772.5,465 772.5,475 775,480 M760,480 785,480 787.5,485 787.5,495 790,500
                M760,540 770,540 772.5,535 772.5,525 775,520`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS FROM DABROWA GORNICZA
            {
                signalName: 'DZ_W',
                signalPos: { x: '690', y: '380' },
                trainPos: { x: '675', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_X',
                signalPos: { x: '690', y: '400' },
                trainPos: { x: '675', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                //? EXIT SIGNAL TO DABROWA GORNICZA LEFT TRACK
                signalName: 'DZ_X2N',
                signalPos: { x: '690', y: '400' },
                trainPos: { x: '705', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ EXIT SIGNALS TO DABROWA GORNICZA
            {
                signalName: 'DZ_P',
                signalPos: { x: '900', y: '400' },
                trainPos: { x: '915', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_O',
                signalPos: { x: '900', y: '420' },
                trainPos: { x: '915', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_N4',
                signalPos: { x: '910', y: '500' },
                trainPos: { x: '925', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_N6',
                signalPos: { x: '910', y: '520' },
                trainPos: { x: '925', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ INTERMEDIATE SIGNALS TO LAZY
            {
                signalName: 'DZ_J',
                signalPos: { x: '980', y: '400' },
                trainPos: { x: '965', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_K',
                signalPos: { x: '990', y: '480' },
                trainPos: { x: '975', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_M',
                signalPos: { x: '1000', y: '520' },
                trainPos: { x: '985', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_L1',
                signalPos: { x: '1000', y: '540' },
                trainPos: { x: '985', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ G-SIGNALS + F
            {
                signalName: 'DZ_G13',
                signalPos: { x: '1040', y: '400' },
                trainPos: { x: '1055', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_G11',
                signalPos: { x: '1040', y: '420' },
                trainPos: { x: '1055', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_G9',
                signalPos: { x: '1040', y: '440' },
                trainPos: { x: '1055', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_F',
                signalPos: { x: '1040', y: '500' },
                trainPos: { x: '1055', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ C-SIGNALS + D
            {
                signalName: 'DZ_C13',
                signalPos: { x: '1130', y: '400' },
                trainPos: { x: '1115', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_C10',
                signalPos: { x: '1110', y: '460' },
                trainPos: { x: '1095', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_C12',
                signalPos: { x: '1110', y: '480' },
                trainPos: { x: '1095', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_D',
                signalPos: { x: '1120', y: '540' },
                trainPos: { x: '1105', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ ENTRY SIGNALS FROM LAZY LC
            {
                signalName: 'DZ_B',
                signalPos: { x: '1260', y: '420' },
                trainPos: { x: '1275', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_E',
                signalPos: { x: '1260', y: '440' },
                trainPos: { x: '1275', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_A',
                signalPos: { x: '1260', y: '460' },
                trainPos: { x: '1275', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_H',
                signalPos: { x: '1260', y: '480' },
                trainPos: { x: '1275', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ SIGNALS DGZ FREIGHT TRACKS ON THE LEFT SIDE
            {
                signalName: 'DZ_Y',
                signalPos: { x: '600', y: '500' },
                trainPos: { x: '585', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_Z',
                signalPos: { x: '600', y: '520' },
                trainPos: { x: '585', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_U105',
                signalPos: { x: '680', y: '460' },
                trainPos: { x: '695', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_U103',
                signalPos: { x: '680', y: '480' },
                trainPos: { x: '695', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_U101',
                signalPos: { x: '680', y: '500' },
                trainPos: { x: '695', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_U102',
                signalPos: { x: '680', y: '520' },
                trainPos: { x: '695', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S105',
                signalPos: { x: '760', y: '460' },
                trainPos: { x: '745', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S103',
                signalPos: { x: '760', y: '480' },
                trainPos: { x: '745', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S101',
                signalPos: { x: '760', y: '500' },
                trainPos: { x: '745', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S102',
                signalPos: { x: '760', y: '520' },
                trainPos: { x: '745', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S104',
                signalPos: { x: '760', y: '540' },
                trainPos: { x: '745', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-DabrowaGorniczaZabkowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 760, y: 415 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-DabrowaGorniczaZabkowice',
                nodeType: 'stationName',
                stationPrefix: 'DZ',
                stationName: 'Dąbrowa Górnicza Ząbkowice',
                nodePos: { x: 950, y: 350 },
                nodePosFlipped: { x: 950, y: 570 },
            },
            {
                nodeID: 'platform_DabrowaGorniczaZabkowice_1',
                nodeType: 'platform',
                nodePos: { x: 910, y: 385 },
                width: 60,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'platform_DabrowaGorniczaZabkowice_2',
                nodeType: 'platform',
                nodePos: { x: 910, y: 425 },
                width: 70,
                height: 50,
                text: 'Peron II'
            },
            {
                nodeID: 'platform_DabrowaGorniczaZabkowice_3',
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
        ]
    },
    "DABROWAGORNICZAZABKOWICE_LAZYLC": {
        "TRACKS": [
            {
                trackID: 'DABROWAGORNICZAZABKOWICE_LAZYLC',
                /*
                LK1 UPPER TRACK
                LK1 LOWER TRACK
                LK160
                LK186
                
                PRZEMIARKI UPPER TRACK
                PRZEMIARKI LOWER TRACK
                */
                trackSVG: `
                M1270,420 1330,420 M1350,420 1410,420 M1430,420 1490,420 M1520,420 1580,420 M1610,420 1680,420
                M1270,440 1330,440 M1350,440 1410,440 M1430,440 1490,440 M1520,440 1580,440 M1610,440 1680,440
                
                M1270,460 1330,460 M1350,460 1410,460 M1430,460 1490,460
                M1520,460 1580,460 M1590,460 1592.5,460 1595,455 1595,405 1597.5,400 1600,400 M1610,400 1680,400
                
                M1270,480 1330,480 M1350,480 1410,480 M1430,480 1490,480 M1520,480 1590,480
                M1600,480 1602.5,480 1605,475 1605,465 1607.5,460 1610,460 M1620,460 1680,460
                
                
                M1430,540 1502.5,540 1505,535 1505,385 1507.5,380 1680,380
                M1430,560 1522.5,560 1525,555 1525,505 1527.5,500 1612.5,500 1615,495 1615,485 1617.5,480 1680,480`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            //~ FIRST GROUP
            {
                signalName: 'L1_2899DN',
                signalPos: { x: '1340', y: '420' },
                trainPos: { x: '1325', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2900D',
                signalPos: { x: '1340', y: '440' },
                trainPos: { x: '1325', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                //! WRONG SIGNAL NAME | SIGNAL SHOULD HAVE "N" IN NAME [L160_2899N]
                signalName: 'L160_2899',
                signalPos: { x: '1340', y: '460' },
                trainPos: { x: '1325', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2900',
                signalPos: { x: '1340', y: '480' },
                trainPos: { x: '1325', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////////////
            {
                signalName: 'L1_2899D',
                signalPos: { x: '1340', y: '420' },
                trainPos: { x: '1355', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2900DN',
                signalPos: { x: '1340', y: '440' },
                trainPos: { x: '1355', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                //! WRONG SIGNAL NAME | SIGNAL SHOULD HAVE NOT "N" IN NAME [L160_2899]
                signalName: 'L160_2899N',
                signalPos: { x: '1340', y: '460' },
                trainPos: { x: '1355', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L186_2900N',
                signalPos: { x: '1340', y: '480' },
                trainPos: { x: '1355', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //~ SECOND GROUP
            {
                signalName: 'L1_2885DN',
                signalPos: { x: '1420', y: '420' },
                trainPos: { x: '1405', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2886D',
                signalPos: { x: '1420', y: '440' },
                trainPos: { x: '1405', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2885N',
                signalPos: { x: '1420', y: '460' },
                trainPos: { x: '1405', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////////////
            {
                signalName: 'L186_2886',
                signalPos: { x: '1420', y: '480' },
                trainPos: { x: '1405', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2885D',
                signalPos: { x: '1420', y: '420' },
                trainPos: { x: '1435', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2886DN',
                signalPos: { x: '1420', y: '440' },
                trainPos: { x: '1435', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2885',
                signalPos: { x: '1420', y: '460' },
                trainPos: { x: '1435', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2886N',
                signalPos: { x: '1420', y: '480' },
                trainPos: { x: '1435', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            //~ THIRD GROUP
            {
                signalName: 'L1_2869DN',
                signalPos: { x: '1500', y: '420' },
                trainPos: { x: '1485', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2868D',
                signalPos: { x: '1500', y: '440' },
                trainPos: { x: '1485', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2869N',
                signalPos: { x: '1500', y: '460' },
                trainPos: { x: '1485', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2870',
                signalPos: { x: '1500', y: '480' },
                trainPos: { x: '1485', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////////////
            {
                signalName: 'L1_2869D',
                signalPos: { x: '1510', y: '420' },
                trainPos: { x: '1525', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2868DN',
                signalPos: { x: '1510', y: '440' },
                trainPos: { x: '1525', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2869',
                signalPos: { x: '1510', y: '460' },
                trainPos: { x: '1525', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2869N',
                signalPos: { x: '1510', y: '480' },
                trainPos: { x: '1525', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //~ FOURTH GROUP
            {
                signalName: 'L1_2851N',
                signalPos: { x: '1590', y: '420' },
                trainPos: { x: '1575', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2852',
                signalPos: { x: '1590', y: '440' },
                trainPos: { x: '1575', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L160_2854',
                signalPos: { x: '1590', y: '460' },
                trainPos: { x: '1575', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L186_2852',
                signalPos: { x: '1600', y: '480' },
                trainPos: { x: '1585', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////////////
            {
                signalName: 'L1_2851',
                signalPos: { x: '1600', y: '420' },
                trainPos: { x: '1615', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2854N',
                signalPos: { x: '1600', y: '440' },
                trainPos: { x: '1615', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2853',
                signalPos: { x: '1600', y: '400' },
                trainPos: { x: '1615', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2851',
                signalPos: { x: '1610', y: '460' },
                trainPos: { x: '1625', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'simpleTest-po-DGSikorka',
                nodeType: 'simpleText',
                nodePos: { x: 1380, y: 395 },
                text: 'D. G. Sikorka',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'platform-DGSikorka_1',
                nodeType: 'platform',
                nodePos: { x: 1360, y: 425 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-DGSikorka_2',
                nodeType: 'platform',
                nodePos: { x: 1360, y: 485 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-Chruszczobrod',
                nodeType: 'simpleText',
                nodePos: { x: 1540, y: 355 },
                text: 'Chruszczobrod',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'platform-Chruszczobrod_1',
                nodeType: 'platform',
                nodePos: { x: 1520, y: 425 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-Chruszczobrod_2',
                nodeType: 'platform',
                nodePos: { x: 1520, y: 485 },
                width: 40,
                height: 6.5,
                text: ''
            },
            {
                nodeID: 'simpleText-po-Wiesiolka',
                nodeType: 'simpleText',
                nodePos: { x: 1660, y: 355 },
                text: 'Wiesiólka',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'platform-Wiesiolka_1',
                nodeType: 'platform',
                nodePos: { x: 1640, y: 411 },
                width: 40,
                height: 6.5,
                text: ''
            },
            {
                nodeID: 'platform-Wiesiolka_2',
                nodeType: 'platform',
                nodePos: { x: 1640, y: 442.5 },
                width: 40,
                height: 6.5,
                text: ''
            },
            {
                nodeID: 'platform-Wiesiolka_2',
                nodeType: 'platform',
                nodePos: { x: 1640, y: 451 },
                width: 40,
                height: 6.5,
                text: ''
            },
            {
                nodeID: 'trackMarker-DZ_LC_2899D',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 420 },
                text: '2899D',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2912D',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 440 },
                text: '2912D',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2899',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 460 },
                text: '2899',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2912',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 480 },
                text: '2912',
            },

            {
                nodeID: 'trackMarker-DZ_LC_2885D',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 420 },
                text: '2885D',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2900D',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 440 },
                text: '2900D',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2885',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 460 },
                text: '2885',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2900',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 480 },
                text: '2900',
            },

            {
                nodeID: 'trackMarker-DZ_LC_2869D',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 420 },
                text: '2869D',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2886D',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 440 },
                text: '2886D',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2869',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 460 },
                text: '2869',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2886',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 480 },
                text: '2886',
            },

            {
                nodeID: 'trackMarker-DZ_LC_2851',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 420 },
                text: '2851',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2868',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 440 },
                text: '2868',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2853',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 460 },
                text: '2853',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2870',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 480 },
                text: '2870',
            },

            {
                nodeID: 'trackMarker-DZ_LC_1P',
                nodeType: 'trackMarker',
                nodePos: { x: 1645, y: 380 },
                text: '1P',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2839',
                nodeType: 'trackMarker',
                nodePos: { x: 1645, y: 400 },
                text: '2839',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2841',
                nodeType: 'trackMarker',
                nodePos: { x: 1645, y: 420 },
                text: '2841',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2852D',
                nodeType: 'trackMarker',
                nodePos: { x: 1645, y: 440 },
                text: '2852D',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2852',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 460 },
                text: '2852',
            },
            {
                nodeID: 'trackMarker-DZ_LC_2P',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 480 },
                text: '2P',
            },
        ]
    },
    "3398_Pmi_PRZEMIARKI": { //^ Przemiarki
        "TRACKS": [
            {
                trackID: '3398_PRZEMIARKI',
                trackSVG: `
                M1370,540 1420,540
                M1370,560 1420,560
                M1380,560 1382.5,555 1382.5,545 1385,540 M1405,540 1407.5,545 1407.5,555 1410,560
                `,
                trackColor: 'white'
            },
            {
                trackID: 'TRACKS_DGT_PMI',
                trackSVG: `
                M1305,540 1310,540 M1315,540 1320,540 M1325,540 1330,540 M1335,540 1340,540 M1345,540 1350,540 M1355,540 1360,540
                M1305,560 1310,560 M1315,560 1320,560 M1325,560 1330,560 M1335,560 1340,560 M1345,560 1350,560 M1355,560 1360,560
                `,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'Pmi_B',
                signalPos: { x: '1420', y: '540' },
                trainPos: { x: '1435', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 3780, x: 1695, y: 380 },
                    { distanceToSignal: 3450, x: 1625, y: 380 },
                    { distanceToSignal: 3230, x: 1600, y: 380 },
                    { distanceToSignal: 2500, x: 1575, y: 380 },
                    { distanceToSignal: 2000, x: 1550, y: 380 },
                    { distanceToSignal: 1720, x: 1515, y: 380 },
                ]
            },
            {
                signalName: 'Pmi_A',
                signalPos: { x: '1420', y: '560' },
                trainPos: { x: '1435', y: '560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pmi_C',
                signalPos: { x: '1370', y: '540' },
                trainPos: { x: '1355', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pmi_D',
                signalPos: { x: '1370', y: '560' },
                trainPos: { x: '1355', y: '560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_B',
                invisibleSignal: true,
                signalPos: { x: '1290', y: '540' },
                trainPos: { x: '1305', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Przemiarki',
                nodeType: 'stationName',
                nodePos: { x: 1395, y: 520 },
                nodePosFlipped: { x: 1395, y: 580 },
                stationPrefix: 'Pr',
                stationName: 'Przemiarki',
            }
        ]
    },
    "2375_LC_LAZYLC": { //^ Lazy LC
        "TRACKS": [
            {
                trackID: '2375_LAZYLC',
                /*
                TRACK LK154/TOR1P FROM PRZEMIARKI
                TRACK LK160/TOR3 FROM DZ
                TRACK LK/TOR1 FROM DZ
                TRACK LK/TOR2 FROM DZ
                TRACK LK186/TOR4 FROM DZ
                TRACK LK154/TOR2P FROM PRZEMIARKI
                
                SW652/651 + SW650/649 + SW648/647
                SW658/657 + SW654/653
                SW646/645 + SW642/641 + SW614/613 + SW612/611
                SW616/615
                TRACK TO LK154/TOR7 LAZY LB
                */
                trackSVG: `
                M1690,380 1760,380
                M1690,400 1890,400
                M1690,420 1890,420
                M1690,440 1890,440
                M1690,460 1890,460
                M1690,480 1890,480
                
                M1710,480 1712.5,475 1712.5,465 1715,460 M1735,460 1737.5,455 1737.5,445 1740,440 M1760,440 1762.5,435 1762.5,425 1765,420
                M1725,400 1727.5,395 1727.5,385 1730,380 M1750,380 1752.5,385 1752.5,395 1755,400
                M1775,400 1777.5,405 1777.5,415 1780,420 M1800,420 1802.5,425 1802.5,435 1805,440 M1825,440 1827.5,445 1827.5,455 1830,460 M1850,460 1852.5,465 1852.5,475 1855,480
                M1865,420 1867.5,415 1867.5,405 1870,400
                M1740,380 1742.5,375 1742.5,345 1745,340 1755,340`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'LC_T',
                signalPos: { x: '1690', y: '380' },
                trainPos: { x: '1675', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_U',
                signalPos: { x: '1690', y: '400' },
                trainPos: { x: '1675', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_W1',
                signalPos: { x: '1690', y: '420' },
                trainPos: { x: '1675', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_W2',
                signalPos: { x: '1690', y: '440' },
                trainPos: { x: '1675', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_Y',
                signalPos: { x: '1690', y: '460' },
                trainPos: { x: '1675', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_Z',
                signalPos: { x: '1690', y: '480' },
                trainPos: { x: '1675', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            //
            {
                signalName: 'LC_S7',
                signalPos: { x: '1755', y: '340' },
                trainPos: { x: '1770', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S3',
                signalPos: { x: '1890', y: '400' },
                trainPos: { x: '1905', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S1',
                signalPos: { x: '1890', y: '420' },
                trainPos: { x: '1905', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S2',
                signalPos: { x: '1890', y: '440' },
                trainPos: { x: '1905', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S4',
                signalPos: { x: '1890', y: '460' },
                trainPos: { x: '1905', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S6',
                signalPos: { x: '1890', y: '480' },
                trainPos: { x: '1905', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost_LazyLC',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1810, y: 350 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-LazyLC',
                nodeType: 'stationName',
                stationPrefix: 'ŁC',
                stationName: 'Łazy Łc',
                nodePos: { x: 1780, y: 300 },
                nodePosFlipped: { x: 1780, y: 510 }
            },
            {
                nodeID: 'trackMarker_LazyLC_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 400 },
                text: '3',
            },
            {
                nodeID: 'trackMarker_LazyLC_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 420 },
                text: '1',
            },
            {
                nodeID: 'trackMarker_LazyLC_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 440 },
                text: '2',
            },
            {
                nodeID: 'trackMarker_LazyLC_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 460 },
                text: '4',
            },
            {
                nodeID: 'trackMarker_LazyLC_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 480 },
                text: '6',
            },
        ]
    },
    "LAZYLC_LAZYLB": {
        "TRACKS": [
            {
                trackID: 'LAZYLC_LAZYLB',
                trackSVG: `
                M1765,340 1825,340 1827.5,335 1827.5,305 1830,300 1960,300
                
                M1900,400 1960,400
                M1900,420 1960,420
                M1900,440 1960,440
                M1900,460 1960,460
                M1900,480 1960,480`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
            {
                nodeID: 'trackMarker_LazyLC_LazyLB_7CB_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1800, y: 340 },
                text: '7CB',
            },
            {
                nodeID: 'trackMarker_LazyLC_LazyLB_7CB_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 300 },
                text: '7CB',
            },
            {
                nodeID: 'trackMarker_LazyLC_LazyLB_3CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 400 },
                text: '3CB',
            },
            {
                nodeID: 'trackMarker_LazyLC_LazyLB_1CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 420 },
                text: '1CB',
            },
            {
                nodeID: 'trackMarker_LazyLC_LazyLB_2CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 440 },
                text: '2CB',
            },
            {
                nodeID: 'trackMarker_LazyLC_LazyLB_4CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 460 },
                text: '4CB',
            },
            {
                nodeID: 'trackMarker_LazyLC_LazyLB_6CB',
                nodeType: 'trackMarker',
                nodePos: { x: 1930, y: 480 },
                text: '6CB',
            },
        ]
    },
    "2371_LB_LAZYLB": { //^ Lazy LB
        "TRACKS": [
            {
                trackID: '2371_LAZYLB',
                /*
                TOR3 / TRACK 3 TO TOR 123LA
                TOR1 / TRACK 1 TO TOR 1LA
                TOR2 / TRACK 2 TO TOR 2LA
                TOR4 / TRACK 4 TO SW1063
                TOR6 / TRACK 6 TO TOR 224LA
                
                SW387/386 + SW385/384
                SW383/371
                TOR7 + SW372cd/371 + TO SW362cd + TRACK 125
                SW361cd TO TRACK 123 + SW1081
                
                CONNECTOR TRACK 125 TO TOR 125LA
                CONNECTOR SW361c TO SW1083 + SW1082/1080
                
                SW1087/1086 + SW1029cd/1034ab + SW1034cd/1053 + SW1052/1051
                SW1033/1032
                SW1058/1057
                
                *DKW-1071/1072/1073/1074
                */
                trackSVG: `
                M1970,400 2030,400 M2040,400 2100,400 M2110,400 2120,400 2122.5,395 2122.5,385 2125,380 2330,380
                M1970,420 2030,420 M2040,420 2100,420 M2110,420 2130,420 2132.5,415 2132.5,405 2135,400 2310,400
                M1970,440 2030,440 M2040,440 2100,440 M2110,440 2145,440 2147.5,435 2147.5,425 2150,420 2310,420
                M1970,460 2100,460 M2110,460 2190,460 2192.5,455 2192.5,425 2195,420 
                M1970,480 2100,480 M2110,480 2190,480 2192.5,485 2192.5,535 2195,540 2280,540
                
                M1990,440 1992.5,435 1992.5,425 1995,420 M2005,420 2007.5,415 2007.5,405 2010,400
                M2020,400 2022.5,395 2022.5,365 2025,360 2095,360
                M1970,300 2020,300 2022.5,305 2022.5,335 2025,340 2035,340 2037.5,345 2037.5,355 2040,360 M2035,340 2055,340 2057.5,335 2057.5,325 2060,320 2090,320 2092.5,325 2092.5,355 2095,360 2100,360 M2090,320 2110,320 M2120,320 2180,320
                M2095,360 2100,360 2102.5,355 2102.5,345 2105,340 2110,340 M2120,340 2180,340 2182.5,345 2182.5,375 2185,380
                
                M2180,320 2190,320 2192.5,325 2192.5,355 2195,360 2330,360
                M2100,360 2135,360 2137.5,365 2137.5,375 2140,380 M2160,380 2162.5,385 2162.5,395 2165,400
                
                M2205,380 2207.5,375 2207.5,365 2210,360 M2230,360 2232.5,365 2232.5,375 2235,380 M2245,380 2247.5,385 2247.5,395 2250,400 M2255,360 2257.5,365 2257.5,375 2260,380
                M2270,400 2272.5,395 2272.5,385 2275,380
                M2215,400 2217.5,405 2217.5,415 2220,420
                
                M2150,460 2170,480 M2150,480 2170,460`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'LB_P7',
                signalPos: { x: '1970', y: '300' },
                trainPos: { x: '1955', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_P3',
                signalPos: { x: '1970', y: '400' },
                trainPos: { x: '1955', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_P1',
                signalPos: { x: '1970', y: '420' },
                trainPos: { x: '1955', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_P2',
                signalPos: { x: '1970', y: '440' },
                trainPos: { x: '1955', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_M4',
                signalPos: { x: '1970', y: '460' },
                trainPos: { x: '1955', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_M6',
                signalPos: { x: '1970', y: '480' },
                trainPos: { x: '1955', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'LB_H3',
                signalPos: { x: '2030', y: '400' },
                trainPos: { x: '2045', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_H1',
                signalPos: { x: '2030', y: '420' },
                trainPos: { x: '2045', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_H2',
                signalPos: { x: '2030', y: '440' },
                trainPos: { x: '2045', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'LB_R3',
                signalPos: { x: '2110', y: '400' },
                trainPos: { x: '2095', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_R1',
                signalPos: { x: '2110', y: '420' },
                trainPos: { x: '2095', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_R2',
                signalPos: { x: '2110', y: '440' },
                trainPos: { x: '2095', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_O',
                signalPos: { x: '2110', y: '460' },
                trainPos: { x: '2095', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_N',
                signalPos: { x: '2110', y: '480' },
                trainPos: { x: '2095', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS FOR TRACKS 125/123
            {
                signalName: 'LB_J125',
                signalPos: { x: '2110', y: '320' },
                trainPos: { x: '2125', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_J123',
                signalPos: { x: '2110', y: '340' },
                trainPos: { x: '2125', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'LB_Q125',
                signalPos: { x: '2330', y: '360' },
                trainPos: { x: '2345', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_Q123',
                signalPos: { x: '2330', y: '380' },
                trainPos: { x: '2345', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_G1',
                signalPos: { x: '2310', y: '400' },
                trainPos: { x: '2325', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // MAIN POS AFTER SIGNAL
                    { distanceToSignal: 1250, x: 85, y: 720 },
                    { distanceToSignal: 950, x: 25, y: 720 },
                    // HALFT DISTANCE TO RETURN SIGNAL
                    { distanceToSignal: 750, x: 2485, y: 400 },
                    { distanceToSignal: 430, x: 2445, y: 400 },
                    // IN FRONT OF SIGNAL
                    { distanceToSignal: 270, x: 2375, y: 400 },
                    { distanceToSignal: 135, x: 2325, y: 400 },
                ]
            },
            {
                signalName: 'LB_G2',
                signalPos: { x: '2310', y: '420' },
                trainPos: { x: '2325', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // MAIN POS AFTER SIGNAL
                    { distanceToSignal: 1250, x: 85, y: 740 },
                    { distanceToSignal: 950, x: 25, y: 740 },
                    // HALFT DISTANCE TO RETURN SIGNAL
                    { distanceToSignal: 750, x: 2485, y: 420 },
                    { distanceToSignal: 430, x: 2445, y: 420 },
                    // IN FRONT OF SIGNAL
                    { distanceToSignal: 270, x: 2375, y: 420 },
                    { distanceToSignal: 135, x: 2325, y: 420 },
                ]
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost_LazyLB',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2140, y: 500 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Lazy',
                nodeType: 'stationName',
                stationPrefix: 'ŁB',
                stationName: 'Łazy',
                nodePos: { x: 2140, y: 300 },
                nodePosFlipped: { x: 2100, y: 510 }
            },
            {
                nodeID: 'platform-LazyLB_2',
                nodeType: 'platform',
                nodePos: { x: 2040, y: 405 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-LazyLB_1',
                nodeType: 'platform',
                nodePos: { x: 2040, y: 445 },
                width: 50,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-LazyLB_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 400 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-LazyLB_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 420 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-LazyLB_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 440 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-LazyLB_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 460 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-LazyLB_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 480 },
                text: '6',
            },
            {
                nodeID: 'trackMarker-LazyLB_125',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 320 },
                text: '125',
            },
            {
                nodeID: 'trackMarker-LazyLB_123',
                nodeType: 'trackMarker',
                nodePos: { x: 2150, y: 340 },
                text: '123',
            },
        ]
    },
    "LAZYLB_LAZYLA": {
        "TRACKS": [
            {
                trackID: 'LAZYLB_LAZYLA',
                trackSVG: `
                M2340,360 2540,360 2550,370
                M2340,380 2540,380 2550,390
                
                M2320,400 2430,400 M2440,400 2540,400 2550,410
                M2320,420 2430,420 M2440,420 2540,420 2550,430
                M2280,540 2540,540 2550,550

                M10,650 20,660 50,660
                M10,690 20,700 50,700
                M10,710 20,720 140,720 M150,720 250,720
                M10,730 20,740 140,740 M150,740 250,740
                
                M10,870 20,880 90,880`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_2791',
                signalPos: { x: '2440', y: '400' },
                trainPos: { x: '2420', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2790',
                signalPos: { x: '2440', y: '420' },
                trainPos: { x: '2420', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            //
            {
                signalName: 'L1_2781',
                signalPos: { x: '140', y: '720' },
                trainPos: { x: '155', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2780N',
                signalPos: { x: '140', y: '740' },
                trainPos: { x: '155', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-LazyLB_LazyLA_2795',
                nodeType: 'trackMarker',
                nodePos: { x: 2375, y: 400 },
                text: '2795',
            },
            {
                nodeID: 'trackMarker-LazyLB_LazyLA_2794',
                nodeType: 'trackMarker',
                nodePos: { x: 2375, y: 420 },
                text: '2794',
            },
            {
                nodeID: 'trackMarker-LazyLB_LazyLA_2781_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 400 },
                text: '2781',
            },
            {
                nodeID: 'trackMarker-LazyLB_LazyLA_2790_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 420 },
                text: '2790',
            },
            {
                nodeID: 'trackMarker-LazyLB_LazyLA_2781_2',
                nodeType: 'trackMarker',
                nodePos: { x: 80, y: 720 },
                text: '2781',
            },
            {
                nodeID: 'trackMarker-LazyLB_LazyLA_2790_2',
                nodeType: 'trackMarker',
                nodePos: { x: 80, y: 740 },
                text: '2790',
            },
            {
                nodeID: 'trackMarker-LazyLB_LazyLA_2781',
                nodeType: 'trackMarker',
                nodePos: { x: 200, y: 720 },
                text: '2779',
            },
            {
                nodeID: 'trackMarker-LazyLB_LazyLA_2790',
                nodeType: 'trackMarker',
                nodePos: { x: 200, y: 740 },
                text: '2778',
            },
        ]
    },
    "2374_LA_LAZYLA": { //^ Lazy La
        "TRACKS": [
            {
                trackID: '2374_LAZYLA',
                /*
                LK154 EXIT LEFT + SW83 + T119
                LK160 EXIT LEFT SIDE
                
                SW82/81ab + SW81cd/80ab + CONNECTOR SW77
                SW80cd/79 TO TRACK 113 + SW78 TO TRACK 115 TO TRACK 117
                SW77/80cd + TRACK 111
                
                SW75/74ab + TRACK 105
                SW74cd TO SW73 + TRACK 107 + TRACK 109
                
                SW72/71
                
                TRACKS FROM 119 TO 103
                
                TRACK LK160
                MAIN TRACKS LK1
                
                SW61 FROM T109/107 + SW60 + SW59/58
                
                T111/113 TO SW56 TO SW55
                T115/117 TO SW57 TO SW55
                SW55 TO SW54
                
                T119 TO SW53 + SW52/51
                SW50/49 + SW47/46
                SW36/35 + SW34/33 + SW32/31
                */
                trackSVG: `
                M50,660 100,660 M70,660 72.5,655 72.5,545 75,540 90,540
                M50,700 170,700
                
                M80,700 82.5,695 82.5,685 85,680 95,680 97.5,675 97.5,665 100,660 120,660
                M110,660 112.5,655 112.5,605 115,600 170,600 M125,600 127.5,595 127.5,585 130,580 170,580 M140,580 142.5,575 142.5,565 145,560 160,560 170,560
                M95,680 115,680 117.5,675 117.5,665 120,660 130,660 132.5,655 132.5,625 135,620 170,620
                
                M125,700 127.5,695 127.5,685 130,680 M115,680 170,680
                M140,680 142.5,675 142.5,665 145,660 170,660 M155,660 157.5,655 157.5,645 160,640 170,640
                
                M150,680 152.5,685 152.5,695 155,700
                
                
                M100,540 295,540
                M180,560 240,560
                M180,580 240,580
                M180,600 240,600
                M180,620 240,620
                M180,640 240,640
                M180,660 240,660
                M180,680 240,680
                M180,700 240,700
                
                
                M330,700 480,700
                M260,720 480,720
                M260,740 480,740
                
                
                M235,640 240,640 242.5,645 242.5,655 245,660 M240,660 255,660 257.5,665 257.5,675 260,680 M240,680 270,680 272.5,685 272.5,695 275,700 M240,700 285,700 287.5,705 287.5,715 290,720
                
                M235,600 240,600 242.5,605 242.5,615 245,620 M240,620 260,620
                M235,560 240,560 242.5,565 242.5,575 245,580 M240,580 255,580 257.5,585 257.5,615 260,620
                M260,620 285,620 287.5,625 287.5,675 290,680 M270,680 310,680
                
                M290,540 300,540 302.5,545 302.5,675 305,680 315,680 317.5,685 317.5,695 320,700 M285,700 330,700 332.5,705 332.5,715 335,720
                M345,720 347.5,725 347.5,735 350,740 M360,740 362.5,745 362.5,755 365,760 480,760
                M385,760 387.5,755 387.5,745 390,740 M400,740 402.5,735 402.5,725 405,720 M415,720 417.5,715 417.5,705 420,700`,
                trackColor: 'white'
            },
            {
                trackID: '0000_LAZYLA_LOWER_FREIGHT_TRACKS',
                /*
                ENTRY TRACK + SW120ab
                SW120cd + TRACK130
                SW119 + T114 + SW20
                SW129 + T138b + T138a
                
                SW129cd/125 + T136
                !SW126/125 + T134 [REWORK NEEDED]
                
                SW128 + T132
                
                SW132/131ab + T128
                SW131cd+130 + T126 + T124
                
                SW14/13/12ab + CONNECTORS FROM TRACKS 124/126/128/130
                
                T132
                
                T134 TO SW16
                T136 TO SW15
                T138 TO SW11ab
                
                !TRACKS GO UP
                
                DKW9/10/11/12
                */
                trackSVG: `
                M100,880 110,880 112.5,875 112.5,865 115,860 125,860
                M120,860 125,860 127.5,855 127.5,845 130,840 320,840
                M120,860 145,860 147.2,865 147.5,935 150,940 210,940 212.5,935 212.5,925 215,920
                M140,860 160,860 162.5,865 162.5,915 165,920 320,920
                
                M175,840 177.5,845 177.5,895 180,900 320,900
                M160,860 170,860 185,880 320,880
                
                M190,840 192.5,845 192.5,855 195,860 320,860
                
                M140,840 160,820 170,820 320,820
                M170,820 172.5,815 172.5,805 175,800 320,800 M175,800 185,800 187.5,795 187.5,785 190,780 320,780
                
                
                M330,780 340,780 342.5,785 342.5,795 345,800 M330,800 355,800 357.5,805 357.5,815 360,820 M330,820 370,820 372.5,825 372.5,835 375,840 M330,840 390,840
                M330,860 390,860
                
                M330,880 340,880 342.5,875 342.5,865 345,860
                M330,900 355,900 357.5,895 357.5,865 360,860
                M330,920 370,920 372.5,915 372.5,865 375,860
                
                
                M390,840 405,840 407.5,835 407.5,765 410,760 420,760 422.5,755 422.5,745 425,740
                M390,860 425,860 427.5,855 427.5,785 430,780 440,780 460,760
                
                M407.5,810 427.5,790 M427.5,810 407.5,790`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ EXIT SIGNALS UPPER FREIGHT GROUP
            {
                signalName: 'LA_F119',
                signalPos: { x: '90', y: '540' },
                trainPos: { x: '105', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F117',
                signalPos: { x: '170', y: '560' },
                trainPos: { x: '185', y: '560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F115',
                signalPos: { x: '170', y: '580' },
                trainPos: { x: '185', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F113',
                signalPos: { x: '170', y: '600' },
                trainPos: { x: '185', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F111',
                signalPos: { x: '170', y: '620' },
                trainPos: { x: '185', y: '620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F109',
                signalPos: { x: '170', y: '640' },
                trainPos: { x: '185', y: '640' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F107',
                signalPos: { x: '170', y: '660' },
                trainPos: { x: '185', y: '660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F105',
                signalPos: { x: '170', y: '680' },
                trainPos: { x: '185', y: '680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F103',
                signalPos: { x: '170', y: '700' },
                trainPos: { x: '185', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'LA_E1',
                signalPos: { x: '260', y: '720' },
                trainPos: { x: '245', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    // MAIN POS AFTER SIGNAL
                    { distanceToSignal: 1250, x: 2495, y: 400 },
                    { distanceToSignal: 950, x: 2535, y: 400 },
                    // HALFT DISTANCE TO RETURN SIGNAL
                    { distanceToSignal: 750, x: 75, y: 720 },
                    { distanceToSignal: 430, x: 135, y: 720 },
                    // IN FRONT OF SIGNAL
                    { distanceToSignal: 250, x: 205, y: 720 },
                    { distanceToSignal: 100, x: 245, y: 720 },
                ]
            },
            {
                signalName: 'LA_E2',
                signalPos: { x: '260', y: '740' },
                trainPos: { x: '245', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    // MAIN POS AFTER SIGNAL
                    { distanceToSignal: 1250, x: 2495, y: 420 },
                    { distanceToSignal: 950, x: 2535, y: 420 },
                    // HALFT DISTANCE TO RETURN SIGNAL
                    { distanceToSignal: 750, x: 75, y: 740 },
                    { distanceToSignal: 430, x: 135, y: 740 },
                    // IN FRONT OF SIGNAL
                    { distanceToSignal: 250, x: 205, y: 740 },
                    { distanceToSignal: 100, x: 245, y: 740 },
                ]
            },
            //~ ENTRY SIGNALS + EXIT SIGNALS LOWER FREIGHT GROUP
            {
                //? ENTRY SIGNAL LA_H324
                signalName: 'LA_H324',
                signalPos: { x: '100', y: '880' },
                trainPos: { x: '85', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E124',
                signalPos: { x: '330', y: '780' },
                trainPos: { x: '315', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E126',
                signalPos: { x: '330', y: '800' },
                trainPos: { x: '315', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E128',
                signalPos: { x: '330', y: '820' },
                trainPos: { x: '315', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E130',
                signalPos: { x: '330', y: '840' },
                trainPos: { x: '315', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E132',
                signalPos: { x: '330', y: '860' },
                trainPos: { x: '315', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E134',
                signalPos: { x: '330', y: '880' },
                trainPos: { x: '315', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E136',
                signalPos: { x: '330', y: '900' },
                trainPos: { x: '315', y: '900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E138',
                signalPos: { x: '330', y: '920' },
                trainPos: { x: '315', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'LA_D3',
                signalPos: { x: '480', y: '700' },
                trainPos: { x: '495', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_C1',
                signalPos: { x: '480', y: '720' },
                trainPos: { x: '495', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_C2',
                signalPos: { x: '480', y: '740' },
                trainPos: { x: '495', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_B',
                signalPos: { x: '480', y: '760' },
                trainPos: { x: '495', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-LazyLA',
                nodeType: 'dispatchingPost',
                nodePos: { x: 320, y: 940 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-LazyLA',
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
                nodeID: 'trackMarker-LazyLA_119',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 540 },
                text: '119',
            },
            {
                nodeID: 'trackMarker-LazyLA_117',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 560 },
                text: '117',
            },
            {
                nodeID: 'trackMarker-LazyLA_115',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 580 },
                text: '115',
            },
            {
                nodeID: 'trackMarker-LazyLA_113',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 600 },
                text: '113',
            },
            {
                nodeID: 'trackMarker-LazyLA_111',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 620 },
                text: '111',
            },
            {
                nodeID: 'trackMarker-LazyLA_109',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 640 },
                text: '109',
            },
            {
                nodeID: 'trackMarker-LazyLA_107',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 660 },
                text: '107',
            },
            {
                nodeID: 'trackMarker-LazyLA_105',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 680 },
                text: '105',
            },
            {
                nodeID: 'trackMarker-LazyLA_103',
                nodeType: 'trackMarker',
                nodePos: { x: 210, y: 700 },
                text: '103',
            },
            //
            // TRACK MARKER LOWER FREIGHT TRACKS
            //
            {
                nodeID: 'trackMarker-LazyLA_124',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 780 },
                text: '124',
            },
            {
                nodeID: 'trackMarker-LazyLA_126',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 800 },
                text: '126',
            },
            {
                nodeID: 'trackMarker-LazyLA_128',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 820 },
                text: '128',
            },
            {
                nodeID: 'trackMarker-LazyLA_130',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 840 },
                text: '130',
            },
            {
                nodeID: 'trackMarker-LazyLA_132',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 860 },
                text: '132',
            },
            {
                nodeID: 'trackMarker-LazyLA_134',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 880 },
                text: '134',
            },
            {
                nodeID: 'trackMarker-LazyLA_136',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 900 },
                text: '136',
            },
            {
                nodeID: 'trackMarker-LazyLA_138b',
                nodeType: 'trackMarker',
                nodePos: { x: 190, y: 920 },
                text: '138b',
            },
            {
                nodeID: 'trackMarker-LazyLA_138a',
                nodeType: 'trackMarker',
                nodePos: { x: 280, y: 920 },
                text: '138a',
            },
            {
                nodeID: 'trackMarker-LazyLA_144',
                nodeType: 'trackMarker',
                nodePos: { x: 180, y: 940 },
                text: '144',
            },
        ]
    },
    "LAZYLA_ZAWIERCIE": {
        "TRACKS": [
            {
                trackID: 'LAZYLA_ZAWIERCIE',
                trackSVG: `
                M490,700 550,700
                M490,720 790,720
                M490,740 790,740
                M490,760 550,760`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [], //! NO SIGNALS IN THIS CLUSTER
        "NODES": [
            {
                nodeID: 'trackMarker-LazyLA_Zawiercie_3ZW',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 700 },
                text: '3ZW',
            },
            {
                nodeID: 'trackMarker-LazyLA_Zawiercie_1ZW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 720 },
                text: '1ZW',
            },
            {
                nodeID: 'trackMarker-LazyLA_Zawiercie_1ZW_2',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 720 },
                text: '1ZW',
            },
            {
                nodeID: 'trackMarker-LazyLA_Zawiercie_2ZW_1',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 740 },
                text: '2ZW',
            },
            {
                nodeID: 'trackMarker-LazyLA_Zawiercie_2ZW_2',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 740 },
                text: '2ZW',
            },
            {
                nodeID: 'trackMarker-LazyLA_Zawiercie_4ZW',
                nodeType: 'trackMarker',
                nodePos: { x: 520, y: 760 },
                text: '4ZW',
            },
        ]
    },
    "5262_Zw_ZAWIERCIE": { //^ Zawiercie
        "TRACKS": [
            {
                trackID: '5262_ZAWIERCIE_FREIGHT_TRACKS',
                /*
                ENTRY TRACK 4 + TRACK104
                SW114/111ab + 111cd/109 + 109/ T120
                SW110[114]/108ab + 108cd/T114
                SW109 TO SW105 + T116/118
                SW104/103/101 + T112/110
                SW102
                
                *TRACKS 104 TO T120
                
                SW91 + SW93 + SW95
                T120 TO SW92 + SW90 + SW89
                CONTINUATION OF T106 + SW85/83
                */
                trackSVG: `
                M560,760 640,760 M635,780 690,780
                M580,760 582.5,765 582.5,775 585,780 595,780 597.5,785 597.5,875 600,880 610,880 612.5,885 612.5,935 615,940 690,940
                M605,880 620,880 622.5,885 622.5,895 625,900 635,900 637.5,905 637.5,915 640,920 690,920 M630,900 690,900
                M615,760 617.5,765 617.5,775 620,780 M590,780 630,780 632.5,785 632.5,875 635,880 690,880
                
                M625,780 640,780 642.5,785 642.5,815 645,820 655,820 657.5,825 657.5,835 660,840 670,840 672.5,845 672.5,855 675,860 690,860 M665,840 690,840
                M650,820 665,820 667.5,815 667.5,805 670,800 690,800 M660,820 690,820
                
                
                M650,760 760,760
                M700,780 760,780
                M700,800 760,800
                M700,820 760,820
                M700,840 760,840
                M700,860 760,860
                M700,880 760,880
                M700,900 760,900
                M700,920 760,920
                M700,940 760,940
                
                
                M770,760 890,760 M840,760 842.5,765 842.5,775 845,780
                M770,780 880,780
                M770,840 780,840 782.5,835 782.5,825 785,820 M770,880 780,880 782.5,875 782.5,865 785,860 M770,920 780,920 782.5,915 782.5,905 785,900
                M770,940 795,940 797.5,935 797.5,905 800,900 M770,900 810,900 812.5,895 812.5,865 815,860 M770,860 825,860 827.5,855 827.5,825 830,820 M770,820 840,820 842.5,815 842.5,805 845,800
                M770,800 855,800 875,780 885,780 887.5,775 887.5,765 890,760 940,760 M900,760 902.5,755 902.5,745 905,740`,
                trackColor: 'white'
            },
            {
                trackID: 'STATION_ZAWIERCIE',
                /*
                ENTRY TRACK TOR3
                ENTRY MAIN TRACK TOR 1
                ENTRY MAIN TRACK TOR 2
                SW75/76
                SW69/68
                
                
                SW67/65ab + 65cd/62 + 62/59 + TRACKS
                SW60/66
                CONNECTION SW63 TO T2
                SW63/61 + T4
                
                TRACK7
                TRACK5
                TRACK3
                TRACK1 (through till entry signal)
                SW21/20
                
                TRACK2
                TRACK4
                
                SW14/12 + 10/9 + 5/3
                SW13/11 + 8/7 + 6/4
                */
                trackSVG: `
                M560,700 700,700 M710,700 940,700
                M800,720 1020,720
                M800,740 935,740
                M885,720 887.5,725 887.5,735 890,740
                M920,740 922.5,735 922.5,725 925,720
                
                M930,720 935,720 937.5,715 937.5,705 940,700 950,700 1000,700 M950,700 952.5,695 952.5,685 955,680 1000,680 M965,680 967.5,675 967.5,665 970,660 1000,660 M980,660 982.5,665 982.5,675 985,680 1000,680
                M915,700 920,700 922.5,695 922.5,665 925,660 970,660
                M935,740 965,740 967.5,745 967.5,775 970,780 1020,780
                M935,740 937.5,745 937.5,755 940,760 950,760 952.5,765 952.5,795 955,800 970,800 
                
                
                M1010,660 1130,660 M1140,660 1150,660 1152.5,665 1152.5,675 1155,680 M1140,680 1165,680 1167.5,685 1167.5,695 1170,700
                M1010,680 1130,680
                M1010,700 1110,700 M1120,700 1250,700
                M1030,720 1090,720 M1100,720 1240,720
                M1130,720 1132.5,715 1132.5,705 1135,700
                
                M1030,780 1090,780 M1100,780 1135,780 1137.5,775 1137.5,745 1140,740 1240,740
                M980,800 1130,800 M1140,800 1150,800 1152.5,795 1152.5,765 1155,760 1250,760
                
                M1180,700 1182.5,705 1182.5,715 1185,720 M1210,720 1212.5,725 1212.5,735 1215,740 M1225,740 1227.5,745 1227.5,755 1230,760
                M1180,760 1182.5,755 1182.5,745 1185,740 M1195,740 1197.5,735 1197.5,725 1200,720 M1225,720 1227.5,715 1227.5,705 1230,700`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Zw_W',
                signalPos: { x: '560', y: '700' },
                trainPos: { x: '545', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_M',
                signalPos: { x: '800', y: '720' },
                trainPos: { x: '785', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_N',
                signalPos: { x: '800', y: '740' },
                trainPos: { x: '785', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_R',
                signalPos: { x: '560', y: '760' },
                trainPos: { x: '545', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ SIGNALS FREIGHT TRACKS LEFT
            {
                signalName: 'Zw_S3',
                signalPos: { x: '700', y: '700' },
                trainPos: { x: '715', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P4',
                signalPos: { x: '640', y: '760' },
                trainPos: { x: '655', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P104',
                signalPos: { x: '690', y: '780' },
                trainPos: { x: '705', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P106',
                signalPos: { x: '690', y: '800' },
                trainPos: { x: '705', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P108',
                signalPos: { x: '690', y: '820' },
                trainPos: { x: '705', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P110',
                signalPos: { x: '690', y: '840' },
                trainPos: { x: '705', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P112',
                signalPos: { x: '690', y: '860' },
                trainPos: { x: '705', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P114',
                signalPos: { x: '690', y: '880' },
                trainPos: { x: '705', y: '880' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P116',
                signalPos: { x: '690', y: '900' },
                trainPos: { x: '705', y: '900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P118',
                signalPos: { x: '690', y: '920' },
                trainPos: { x: '705', y: '920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P120',
                signalPos: { x: '690', y: '940' },
                trainPos: { x: '705', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS FREIGHT TRACKS LEFT
            {
                signalName: 'Zw_O4',
                signalPos: { x: '770', y: '760' },
                trainPos: { x: '755', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O104',
                signalPos: { x: '770', y: '780' },
                trainPos: { x: '755', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O106',
                signalPos: { x: '770', y: '800' },
                trainPos: { x: '755', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O108',
                signalPos: { x: '770', y: '820' },
                trainPos: { x: '755', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O110',
                signalPos: { x: '770', y: '840' },
                trainPos: { x: '755', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O112',
                signalPos: { x: '770', y: '860' },
                trainPos: { x: '755', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O114',
                signalPos: { x: '770', y: '880' },
                trainPos: { x: '755', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O116',
                signalPos: { x: '770', y: '900' },
                trainPos: { x: '755', y: '900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O118',
                signalPos: { x: '770', y: '920' },
                trainPos: { x: '755', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O120',
                signalPos: { x: '770', y: '940' },
                trainPos: { x: '755', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ SIGNALS LEFT OF PLATFORM
            {
                signalName: 'Zw_H7',
                signalPos: { x: '1000', y: '660' },
                trainPos: { x: '1015', y: '660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_H5',
                signalPos: { x: '1000', y: '680' },
                trainPos: { x: '1015', y: '680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_H3',
                signalPos: { x: '1000', y: '700' },
                trainPos: { x: '1015', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_G1',
                signalPos: { x: '1020', y: '720' },
                trainPos: { x: '1035', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_G2',
                signalPos: { x: '1020', y: '780' },
                trainPos: { x: '1035', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_H4',
                signalPos: { x: '970', y: '800' },
                trainPos: { x: '985', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS RIGHT SIDE OF PLATFORM
            {
                signalName: 'Zw_E7',
                signalPos: { x: '1140', y: '660' },
                trainPos: { x: '1115', y: '660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E5',
                signalPos: { x: '1140', y: '680' },
                trainPos: { x: '1115', y: '680' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E3',
                signalPos: { x: '1120', y: '700' },
                trainPos: { x: '1095', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E1',
                signalPos: { x: '1100', y: '720' },
                trainPos: { x: '1085', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E2',
                signalPos: { x: '1100', y: '780' },
                trainPos: { x: '1085', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E4',
                signalPos: { x: '1140', y: '800' },
                trainPos: { x: '1090', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Zw_D',
                signalPos: { x: '1250', y: '700' },
                trainPos: { x: '1265', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_C',
                signalPos: { x: '1250', y: '720' },
                trainPos: { x: '1265', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_B',
                signalPos: { x: '1250', y: '740' },
                trainPos: { x: '1265', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_A',
                signalPos: { x: '1250', y: '760' },
                trainPos: { x: '1265', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Zawiercie',
                nodeType: 'dispatchingPost',
                nodePos: { x: 900, y: 800 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-Zawiercie',
                nodeType: 'stationName',
                stationPrefix: 'Zw',
                stationName: 'Zawiercie',
                nodePos: { x: 950, y: 630 },
                nodePosFlipped: { x: 950, y: 860 }
            },
            {
                nodeID: 'platform-Zawiercie_P2',
                nodeType: 'platform',
                nodePos: { x: 1030, y: 725 },
                width: 60,
                height: 50,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-Zawiercie_P1',
                nodeType: 'platform',
                nodePos: { x: 1005, y: 805 },
                width: 85,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Zawiercie_3e',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 700 },
                text: '3e',
            },
            {
                nodeID: 'trackMarker-Zawiercie_3e',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 700 },
                text: '3e',
            },
            {
                nodeID: 'trackMarker-Zawiercie_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 705, y: 760 },
                text: '4b',
            },
            {
                nodeID: 'trackMarker-Zawiercie_104',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 780 },
                text: '104',
            },
            {
                nodeID: 'trackMarker-Zawiercie_106',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 800 },
                text: '106',
            },
            {
                nodeID: 'trackMarker-Zawiercie_108',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 820 },
                text: '108',
            },
            {
                nodeID: 'trackMarker-Zawiercie_110',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 840 },
                text: '110',
            },
            {
                nodeID: 'trackMarker-Zawiercie_112',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 860 },
                text: '112',
            },
            {
                nodeID: 'trackMarker-Zawiercie_114',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 880 },
                text: '114',
            },
            {
                nodeID: 'trackMarker-Zawiercie_116',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 900 },
                text: '116',
            },
            {
                nodeID: 'trackMarker-Zawiercie_118',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 920 },
                text: '118',
            },
            {
                nodeID: 'trackMarker-Zawiercie_120',
                nodeType: 'trackMarker',
                nodePos: { x: 730, y: 940 },
                text: '120',
            },
            {
                nodeID: 'trackMarker-Zawiercie_3d',
                nodeType: 'trackMarker',
                nodePos: { x: 820, y: 700 },
                text: '3d',
            },
            {
                nodeID: 'trackMarker-Zawiercie_4c',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 760 },
                text: '4c',
            },
            {
                nodeID: 'trackMarker-Zawiercie_3b',
                nodeType: 'trackMarker',
                nodePos: { x: 975, y: 700 },
                text: '3b',
            },
            {
                nodeID: 'trackMarker-Zawiercie_1b',
                nodeType: 'trackMarker',
                nodePos: { x: 980, y: 720 },
                text: '1b',
            },
            {
                nodeID: 'trackMarker-Zawiercie_2b',
                nodeType: 'trackMarker',
                nodePos: { x: 995, y: 780 },
                text: '2b',
            },
            {
                nodeID: 'trackMarker-Zawiercie_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 660 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-Zawiercie_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 680 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Zawiercie_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 700 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Zawiercie_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 720 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Zawiercie_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 780 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Zawiercie_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 800 },
                text: '4',
            },
        ]
    },
    "ZAWIERCIE_MYSZKOW": {
        "TRACKS": [
            {
                trackID: 'ZAWIERCIE_MYSZKOW',
                trackSVG: `
                M1260,720 1320,720
                M1260,740 1320,740
                            
                M1340,720 1400,720
                M1340,740 1400,740
                            
                M1420,720 1480,720
                M1420,740 1480,740
                
                M1500,720 1560,720
                M1500,740 1560,740
                
                M1580,720 1640,720
                M1580,740 1640,740
                
                M1660,720 1720,720
                M1660,740 1720,740
                
                M1750,720 1810,720
                M1750,740 1810,740
                
                M1830,720 1890,720
                M1830,740 1890,740
                
                M1910,720 1915,720 M1920,720 1925,720 M1930,720 1935,720 M1940,720 1945,720 M1950,720 1955,720 M1960,720 1965,720
                M1910,740 1915,740 M1920,740 1925,740 M1930,740 1935,740 M1940,740 1945,740 M1950,740 1955,740 M1960,740 1965,740`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_2729N',
                signalPos: { x: '1250', y: '720' },
                trainPos: { x: '1235', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2728',
                signalPos: { x: '1250', y: '740' },
                trainPos: { x: '1235', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2719N',
                signalPos: { x: '1330', y: '720' },
                trainPos: { x: '1315', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2718',
                signalPos: { x: '1330', y: '740' },
                trainPos: { x: '1315', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2719',
                signalPos: { x: '1330', y: '720' },
                trainPos: { x: '1345', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2718N',
                signalPos: { x: '1330', y: '740' },
                trainPos: { x: '1345', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_2707N',
                signalPos: { x: '1410', y: '720' },
                trainPos: { x: '1395', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2706',
                signalPos: { x: '1410', y: '740' },
                trainPos: { x: '1395', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2707',
                signalPos: { x: '1410', y: '720' },
                trainPos: { x: '1425', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2706N',
                signalPos: { x: '1410', y: '740' },
                trainPos: { x: '1425', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2693N',
                signalPos: { x: '1490', y: '720' },
                trainPos: { x: '1475', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2692',
                signalPos: { x: '1490', y: '740' },
                trainPos: { x: '1475', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2693',
                signalPos: { x: '1490', y: '720' },
                trainPos: { x: '1505', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2692N',
                signalPos: { x: '1490', y: '740' },
                trainPos: { x: '1505', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2677N',
                signalPos: { x: '1570', y: '720' },
                trainPos: { x: '1555', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2676',
                signalPos: { x: '1570', y: '740' },
                trainPos: { x: '1555', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2677',
                signalPos: { x: '1570', y: '720' },
                trainPos: { x: '1585', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2676N',
                signalPos: { x: '1570', y: '740' },
                trainPos: { x: '1585', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2665N',
                signalPos: { x: '1650', y: '720' },
                trainPos: { x: '1635', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2661',
                signalPos: { x: '1650', y: '740' },
                trainPos: { x: '1635', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2665',
                signalPos: { x: '1650', y: '720' },
                trainPos: { x: '1665', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2662N',
                signalPos: { x: '1650', y: '740' },
                trainPos: { x: '1665', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2651N',
                signalPos: { x: '1730', y: '720' },
                trainPos: { x: '1715', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2650',
                signalPos: { x: '1730', y: '740' },
                trainPos: { x: '1715', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2651',
                signalPos: { x: '1740', y: '720' },
                trainPos: { x: '1755', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2650N',
                signalPos: { x: '1740', y: '740' },
                trainPos: { x: '1755', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2637N',
                signalPos: { x: '1820', y: '720' },
                trainPos: { x: '1805', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2638',
                signalPos: { x: '1820', y: '740' },
                trainPos: { x: '1805', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2637',
                signalPos: { x: '1820', y: '720' },
                trainPos: { x: '1835', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2638N',
                signalPos: { x: '1820', y: '740' },
                trainPos: { x: '1835', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //~ 2777_My_MYSZKOW (AI STATION)
            {
                signalName: 'My_D',
                signalPos: { x: '1900', y: '720' },
                trainPos: { x: '1885', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'My_C',
                signalPos: { x: '1900', y: '740' },
                trainPos: { x: '1885', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'My_A',
                signalPos: { x: '1900', y: '720' },
                trainPos: { x: '1915', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'My_B',
                signalPos: { x: '1900', y: '740' },
                trainPos: { x: '1915', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                // fake signal to place exiting trains
                signalName: 'My_Z',
                invisibleSignal: true,
                signalPos: { x: '1980', y: '740' },
                trainPos: { x: '1965', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'simpleText-po-ZawiercieBorowePole',
                nodeType: 'simpleText',
                nodePos: { x: 1440, y: 680 },
                text: 'Zawiercie Borowe Pole',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'platform-ZawiercieBorowePole_p1',
                nodeType: 'platform',
                nodePos: { x: 1425, y: 707 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-ZawiercieBorowePole_p2',
                nodeType: 'platform',
                nodePos: { x: 1425, y: 743 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-MyszkowMrzyglod',
                nodeType: 'simpleText',
                nodePos: { x: 1650, y: 680 },
                text: 'Myszków Mrzygłód',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'platform-MyszkowMrzyglod_p1',
                nodeType: 'platform',
                nodePos: { x: 1660, y: 707 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-MyszkowMrzyglod_p2',
                nodeType: 'platform',
                nodePos: { x: 1610, y: 743 },
                width: 30,
                height: 10,
                text: ''
            },
            {
                nodeID: 'trackMarker-L1_2719',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 720 },
                text: '2719',
            },
            {
                nodeID: 'trackMarker-L1_2728',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 740 },
                text: '2728',
            },
            {
                nodeID: 'trackMarker-L1_2707',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 720 },
                text: '2707',
            },
            {
                nodeID: 'trackMarker-L1_2718',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 740 },
                text: '2718',
            },
            {
                nodeID: 'trackMarker-L1_2693',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 720 },
                text: '2693',
            },
            {
                nodeID: 'trackMarker-L1_2706',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 740 },
                text: '2706',
            },
            {
                nodeID: 'trackMarker-L1_2677',
                nodeType: 'trackMarker',
                nodePos: { x: 1530, y: 720 },
                text: '2677',
            },
            {
                nodeID: 'trackMarker-L1_2692',
                nodeType: 'trackMarker',
                nodePos: { x: 1530, y: 740 },
                text: '2692',
            },
            {
                nodeID: 'trackMarker-L1_2665',
                nodeType: 'trackMarker',
                nodePos: { x: 1610, y: 720 },
                text: '2665',
            },
            {
                nodeID: 'trackMarker-L1_2676',
                nodeType: 'trackMarker',
                nodePos: { x: 1610, y: 740 },
                text: '2676',
            },
            {
                nodeID: 'trackMarker-L1_2651',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 720 },
                text: '2651',
            },
            {
                nodeID: 'trackMarker-L1_2661',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 740 },
                text: '2661',
            },
            {
                nodeID: 'trackMarker-L1_2637',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 720 },
                text: '2637',
            },
            {
                nodeID: 'trackMarker-L1_2650',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 740 },
                text: '2650',
            },
            {
                nodeID: 'trackMarker-L1_2625',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 720 },
                text: '2625',
            },
            {
                nodeID: 'trackMarker-L1_2638',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 740 },
                text: '2638',
            },
        ]
    },
    "ZAWIERCIE_GORAWLODOWSKA": {
        "TRACKS": [
            {
                trackID: 'TRACKS_ZAWIERCIE_GORAWLODOWSKA',
                trackSVG: `
                M1260,700 1320,700
                M1260,760 1320,760
                
                M1340,700 1400,700
                M1340,760 1400,760
                
                M1420,700 1480,700
                M1420,760 1480,760
                
                M1500,700 1560,700
                M1490,760 1492.5,760 1495,765 1495,815 1497.5,820 1500,820
                M1510,820 1570,820
                
                M1580,700 1640,700
                M1590,820 1650,820
                
                M1660,700 1720,700
                M1730,700 1732.5,700 1735,705 1735,795 1737.5,800 1740,800
                M1670,820 1730,820
                
                M1750,800 1810,800
                M1750,820 1810,820
                
                M1830,800 1890,800
                M1830,820 1890,820
                
                M1910,800 1970,800
                M1910,820 1970,820`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_2213N',
                signalPos: { x: '1330', y: '700' },
                trainPos: { x: '1315', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2206',
                signalPos: { x: '1330', y: '760' },
                trainPos: { x: '1315', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                //!! SIGNAL HAS WRONG NAME - SHOULD BE NAMED "L4_2213"
                signalName: 'L1_2213',
                signalPos: { x: '1330', y: '700' },
                trainPos: { x: '1345', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2206N',
                signalPos: { x: '1330', y: '760' },
                trainPos: { x: '1345', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2199N',
                signalPos: { x: '1410', y: '700' },
                trainPos: { x: '1395', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2182',
                signalPos: { x: '1410', y: '760' },
                trainPos: { x: '1395', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2199',
                signalPos: { x: '1410', y: '700' },
                trainPos: { x: '1425', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2182N',
                signalPos: { x: '1410', y: '760' },
                trainPos: { x: '1425', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2183N',
                signalPos: { x: '1490', y: '700' },
                trainPos: { x: '1475', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2162',
                signalPos: { x: '1490', y: '760' },
                trainPos: { x: '1475', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2183',
                signalPos: { x: '1490', y: '700' },
                trainPos: { x: '1505', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2162N',
                signalPos: { x: '1500', y: '820' },
                trainPos: { x: '1515', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2161N',
                signalPos: { x: '1570', y: '700' },
                trainPos: { x: '1555', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2142',
                signalPos: { x: '1580', y: '820' },
                trainPos: { x: '1565', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2161',
                signalPos: { x: '1570', y: '700' },
                trainPos: { x: '1585', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2142N',
                signalPos: { x: '1580', y: '820' },
                trainPos: { x: '1595', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2141N',
                signalPos: { x: '1650', y: '700' },
                trainPos: { x: '1635', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2128',
                signalPos: { x: '1660', y: '820' },
                trainPos: { x: '1645', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2141',
                signalPos: { x: '1650', y: '700' },
                trainPos: { x: '1665', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2128N',
                signalPos: { x: '1660', y: '820' },
                trainPos: { x: '1675', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2119N',
                signalPos: { x: '1730', y: '700' },
                trainPos: { x: '1715', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2114',
                signalPos: { x: '1740', y: '820' },
                trainPos: { x: '1715', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2119',
                signalPos: { x: '1740', y: '800' },
                trainPos: { x: '1755', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2114N',
                signalPos: { x: '1740', y: '820' },
                trainPos: { x: '1755', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2103N',
                signalPos: { x: '1820', y: '800' },
                trainPos: { x: '1805', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2100',
                signalPos: { x: '1820', y: '820' },
                trainPos: { x: '1805', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2103',
                signalPos: { x: '1820', y: '800' },
                trainPos: { x: '1835', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2100N',
                signalPos: { x: '1820', y: '820' },
                trainPos: { x: '1835', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2085N',
                signalPos: { x: '1900', y: '800' },
                trainPos: { x: '1885', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2086',
                signalPos: { x: '1900', y: '820' },
                trainPos: { x: '1885', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2085',
                signalPos: { x: '1900', y: '800' },
                trainPos: { x: '1915', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2086N',
                signalPos: { x: '1900', y: '820' },
                trainPos: { x: '1915', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-L4_2213',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 700 },
                text: '2213',
            },
            {
                nodeID: 'trackMarker-L4_2228',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 760 },
                text: '2228',
            },
            {
                nodeID: 'trackMarker-L4_2199',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 700 },
                text: '2199',
            },
            {
                nodeID: 'trackMarker-L4_2206',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 760 },
                text: '2206',
            },
            {
                nodeID: 'trackMarker-L4_2183',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 700 },
                text: '2183',
            },
            {
                nodeID: 'trackMarker-L4_2182',
                nodeType: 'trackMarker',
                nodePos: { x: 1450, y: 760 },
                text: '2182',
            },
            {
                nodeID: 'trackMarker-L4_2161',
                nodeType: 'trackMarker',
                nodePos: { x: 1530, y: 700 },
                text: '2161',
            },
            {
                nodeID: 'trackMarker-L4_2162',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 820 },
                text: '2162',
            },
            {
                nodeID: 'trackMarker-L4_2141',
                nodeType: 'trackMarker',
                nodePos: { x: 1610, y: 700 },
                text: '2141',
            },
            {
                nodeID: 'trackMarker-L4_2142',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 820 },
                text: '2142',
            },
            {
                nodeID: 'trackMarker-L4_2119',
                nodeType: 'trackMarker',
                nodePos: { x: 1690, y: 700 },
                text: '2141',
            },
            {
                nodeID: 'trackMarker-L4_2128',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 820 },
                text: '2128',
            },
            {
                nodeID: 'trackMarker-L4_2103',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 800 },
                text: '2103',
            },
            {
                nodeID: 'trackMarker-L4_2114',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 820 },
                text: '2114',
            },
            {
                nodeID: 'trackMarker-L4_2085',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 800 },
                text: '2085',
            },
            {
                nodeID: 'trackMarker-L4_2100',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 820 },
                text: '2100',
            },
            {
                nodeID: 'trackMarker-L4_2073',
                nodeType: 'trackMarker',
                nodePos: { x: 1940, y: 800 },
                text: '2073',
            },
            {
                nodeID: 'trackMarker-L4_2086',
                nodeType: 'trackMarker',
                nodePos: { x: 1940, y: 820 },
                text: '2086',
            },
        ]
    },
    "1193_GW_GORAWLODOWSKA": { //^ Gora Wlodowska
        "TRACKS": [
            {
                trackID: '1193_GORAWLODOWSKA',
                /*
                UPPER TRACK
                LOWER TRACK
                
                SW31/29 + SW27/24 + T3 + SW6/5
                SW4/3 + SW2/1
                
                SW30/28 + T4 + SW10/8
                */
                trackSVG: `
                M1980,800 2040,800 M2050,800 2110,800 M2120,800 2190,800
                M1980,820 2040,820 M2050,820 2110,820 M2120,820 2190,820
                
                M2000,820 2002.5,815 2002.5,805 2005,800 M2025,800 2027.5,795 2027.5,785 2030,780 2040,780 M2050,780 2110,780 M2120,780 2130,780 2132.5,785 2132.5,795 2135,800
                M2155,800 2157.5,805 2157.5,815 2160,820 M2170,820 2172.5,815 2172.5,805 2175,800
                
                M2025,820 2027.5,825 2027.5,835 2030,840 2040,840 M2050,840 2110,840 M2120,840 2130,840 2132.5,835 2132.5,825 2135,820`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'GW_T',
                signalPos: { x: '1980', y: '800' },
                trainPos: { x: '1965', y: '800' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'GW_W',
                signalPos: { x: '1980', y: '820' },
                trainPos: { x: '1965', y: '820' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'GW_O',
                signalPos: { x: '2040', y: '780' },
                trainPos: { x: '2055', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'GW_N',
                signalPos: { x: '2040', y: '800' },
                trainPos: { x: '2055', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'GW_M',
                signalPos: { x: '2040', y: '820' },
                trainPos: { x: '2055', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'GW_L',
                signalPos: { x: '2040', y: '840' },
                trainPos: { x: '2055', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'GW_E',
                signalPos: { x: '2120', y: '780' },
                trainPos: { x: '2105', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'GW_F',
                signalPos: { x: '2120', y: '800' },
                trainPos: { x: '2105', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'GW_G',
                signalPos: { x: '2120', y: '820' },
                trainPos: { x: '2105', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'GW_H',
                signalPos: { x: '2120', y: '840' },
                trainPos: { x: '2105', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'GW_B',
                signalPos: { x: '2190', y: '800' },
                trainPos: { x: '2205', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'GW_A',
                signalPos: { x: '2190', y: '820' },
                trainPos: { x: '2205', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-GoraWlodowska',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1990, y: 830 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-GoraWlodowska',
                nodeType: 'stationName',
                stationPrefix: 'GW',
                stationName: 'Góra Włodowska',
                nodePos: { x: 2080, y: 740 },
                nodePosFlipped: { x: 2080, y: 880 }
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 780 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 800 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 820 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 840 },
                text: '4',
            },
        ]
    },
    "GORAWLODOWSKA_PSARY": {
        "TRACKS": [
            {
                trackID: 'GORAWLODOWSKA_PSARY',
                trackSVG: `
                M2200,800 2260,800 M2280,800 2340,800 M2360,800 2420,800 M2440,800 2500,800 M2510,800 2520,800 2530,810
                M2200,820 2260,820 M2280,820 2340,820 M2360,820 2420,820 M2440,820 2500,820 M2510,820 2520,820 2530,830

                M10,1050 20,1060 30,1060 M40,1060 100,1060 M120,1060 180,1060 M200,1060 260,1060 M280,1060 340,1060
                M10,1070 20,1080 30,1080 M40,1080 100,1080 M120,1080 180,1080 M200,1080 260,1080 M280,1080 340,1080
                
                M360,1060 420,1060 M440,1060 500,1060 M520,1060 580,1060 M600,1060 660,1060 M680,1060 740,1060 M760,1060 820,1060
                M360,1080 420,1080 M440,1080 500,1080 M520,1080 580,1080 M600,1080 660,1080 M680,1080 740,1080 M760,1080 820,1080
                
                M840,1060 900,1060 M920,1060 980,1060 M1000,1060 1060,1060 M1080,1060 1140,1060 M1160,1060 1220,1060 M1240,1060 1300,1060 M1320,1060 1380,1060
                M840,1080 900,1080 M920,1080 980,1080 M1000,1080 1060,1080 M1080,1080 1140,1080 M1160,1080 1220,1080 M1240,1080 1300,1080 M1320,1080 1380,1080`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            // Gora Wlodowska <-> Psary [ROW 3]
            {
                signalName: 'L4_2035N',
                signalPos: { x: '2270', y: '800' },
                trainPos: { x: '2255', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2036',
                signalPos: { x: '2270', y: '820' },
                trainPos: { x: '2255', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2035',
                signalPos: { x: '2270', y: '800' },
                trainPos: { x: '2285', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_2036N',
                signalPos: { x: '2270', y: '820' },
                trainPos: { x: '2285', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_2023N',
                signalPos: { x: '2350', y: '800' },
                trainPos: { x: '2335', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2022',
                signalPos: { x: '2350', y: '820' },
                trainPos: { x: '2335', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2023',
                signalPos: { x: '2350', y: '800' },
                trainPos: { x: '2365', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2022N',
                signalPos: { x: '2350', y: '820' },
                trainPos: { x: '2365', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_2009N',
                signalPos: { x: '2430', y: '800' },
                trainPos: { x: '2415', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2008',
                signalPos: { x: '2430', y: '820' },
                trainPos: { x: '2415', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2009',
                signalPos: { x: '2430', y: '800' },
                trainPos: { x: '2445', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2008N',
                signalPos: { x: '2430', y: '820' },
                trainPos: { x: '2445', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1995N',
                signalPos: { x: '2510', y: '800' },
                trainPos: { x: '2495', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1994',
                signalPos: { x: '2510', y: '820' },
                trainPos: { x: '2495', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            // Gora Wlodowska <-> Psary [ROW 4]
            {
                signalName: 'L4_1995',
                signalPos: { x: '30', y: '1060' },
                trainPos: { x: '45', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1994N',
                signalPos: { x: '30', y: '1080' },
                trainPos: { x: '45', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1981N',
                signalPos: { x: '110', y: '1060' },
                trainPos: { x: '95', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1980',
                signalPos: { x: '110', y: '1080' },
                trainPos: { x: '95', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1981',
                signalPos: { x: '110', y: '1060' },
                trainPos: { x: '125', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1980N',
                signalPos: { x: '110', y: '1080' },
                trainPos: { x: '125', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1967N',
                signalPos: { x: '190', y: '1060' },
                trainPos: { x: '175', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1966',
                signalPos: { x: '190', y: '1080' },
                trainPos: { x: '175', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1967',
                signalPos: { x: '190', y: '1060' },
                trainPos: { x: '205', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1966N',
                signalPos: { x: '190', y: '1080' },
                trainPos: { x: '205', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1951N',
                signalPos: { x: '270', y: '1060' },
                trainPos: { x: '255', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1950',
                signalPos: { x: '270', y: '1080' },
                trainPos: { x: '255', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1951',
                signalPos: { x: '270', y: '1060' },
                trainPos: { x: '285', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1950N',
                signalPos: { x: '270', y: '1080' },
                trainPos: { x: '285', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1935N',
                signalPos: { x: '350', y: '1060' },
                trainPos: { x: '335', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1936',
                signalPos: { x: '350', y: '1080' },
                trainPos: { x: '335', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1935',
                signalPos: { x: '350', y: '1060' },
                trainPos: { x: '365', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1936N',
                signalPos: { x: '350', y: '1080' },
                trainPos: { x: '365', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1917N',
                signalPos: { x: '430', y: '1060' },
                trainPos: { x: '415', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1918',
                signalPos: { x: '430', y: '1080' },
                trainPos: { x: '415', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1917',
                signalPos: { x: '430', y: '1060' },
                trainPos: { x: '445', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1918N',
                signalPos: { x: '430', y: '1080' },
                trainPos: { x: '445', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1897N',
                signalPos: { x: '510', y: '1060' },
                trainPos: { x: '495', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1898',
                signalPos: { x: '510', y: '1080' },
                trainPos: { x: '495', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1897',
                signalPos: { x: '510', y: '1060' },
                trainPos: { x: '525', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1898N',
                signalPos: { x: '510', y: '1080' },
                trainPos: { x: '525', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1881N',
                signalPos: { x: '590', y: '1060' },
                trainPos: { x: '575', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1882',
                signalPos: { x: '590', y: '1080' },
                trainPos: { x: '575', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1881',
                signalPos: { x: '590', y: '1060' },
                trainPos: { x: '605', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1882N',
                signalPos: { x: '590', y: '1080' },
                trainPos: { x: '605', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1859N',
                signalPos: { x: '670', y: '1060' },
                trainPos: { x: '655', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1858',
                signalPos: { x: '670', y: '1080' },
                trainPos: { x: '655', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1859',
                signalPos: { x: '670', y: '1060' },
                trainPos: { x: '685', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1858N',
                signalPos: { x: '670', y: '1080' },
                trainPos: { x: '685', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1841N',
                signalPos: { x: '750', y: '1060' },
                trainPos: { x: '735', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1842',
                signalPos: { x: '750', y: '1080' },
                trainPos: { x: '735', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1841',
                signalPos: { x: '750', y: '1060' },
                trainPos: { x: '765', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1842N',
                signalPos: { x: '750', y: '1080' },
                trainPos: { x: '765', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1827N',
                signalPos: { x: '830', y: '1060' },
                trainPos: { x: '815', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1828',
                signalPos: { x: '830', y: '1080' },
                trainPos: { x: '815', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1827',
                signalPos: { x: '830', y: '1060' },
                trainPos: { x: '845', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1828N',
                signalPos: { x: '830', y: '1080' },
                trainPos: { x: '845', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1807N',
                signalPos: { x: '910', y: '1060' },
                trainPos: { x: '895', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1806',
                signalPos: { x: '910', y: '1080' },
                trainPos: { x: '895', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1807',
                signalPos: { x: '910', y: '1060' },
                trainPos: { x: '925', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1806N',
                signalPos: { x: '910', y: '1080' },
                trainPos: { x: '925', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1789N',
                signalPos: { x: '990', y: '1060' },
                trainPos: { x: '975', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1788',
                signalPos: { x: '990', y: '1080' },
                trainPos: { x: '975', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1789',
                signalPos: { x: '990', y: '1060' },
                trainPos: { x: '1005', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1788N',
                signalPos: { x: '990', y: '1080' },
                trainPos: { x: '1005', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1773N',
                signalPos: { x: '1070', y: '1060' },
                trainPos: { x: '1055', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1774',
                signalPos: { x: '1070', y: '1080' },
                trainPos: { x: '1055', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1773',
                signalPos: { x: '1070', y: '1060' },
                trainPos: { x: '1085', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1774N',
                signalPos: { x: '1070', y: '1080' },
                trainPos: { x: '1085', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1759N',
                signalPos: { x: '1150', y: '1060' },
                trainPos: { x: '1135', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1758',
                signalPos: { x: '1150', y: '1080' },
                trainPos: { x: '1135', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1759',
                signalPos: { x: '1150', y: '1060' },
                trainPos: { x: '1165', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1758N',
                signalPos: { x: '1150', y: '1080' },
                trainPos: { x: '1165', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1743N',
                signalPos: { x: '1230', y: '1060' },
                trainPos: { x: '1215', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1742',
                signalPos: { x: '1230', y: '1080' },
                trainPos: { x: '1215', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1743',
                signalPos: { x: '1230', y: '1060' },
                trainPos: { x: '1245', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1742N',
                signalPos: { x: '1230', y: '1080' },
                trainPos: { x: '1245', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1727N',
                signalPos: { x: '1310', y: '1060' },
                trainPos: { x: '1295', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1726',
                signalPos: { x: '1310', y: '1080' },
                trainPos: { x: '1295', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1727',
                signalPos: { x: '1310', y: '1060' },
                trainPos: { x: '1325', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1726N',
                signalPos: { x: '1310', y: '1080' },
                trainPos: { x: '1325', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_2035',
                nodeType: 'trackMarker',
                nodePos: { x: 2230, y: 800 },
                text: '2035',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_2050',
                nodeType: 'trackMarker',
                nodePos: { x: 2230, y: 820 },
                text: '2050',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_2023',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 800 },
                text: '2023',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_2036',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 820 },
                text: '2036',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_2009',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 800 },
                text: '2009',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_2022',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 820 },
                text: '2022',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1995',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 800 },
                text: '1995',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_2008',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 820 },
                text: '2008',
            },
            // Gora Wlodowska <-> Psary [ROW 4]
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1981',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1060 },
                text: '1981',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1994',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1080 },
                text: '1994',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1967',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1060 },
                text: '1967',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1980',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1080 },
                text: '1980',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1951',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1060 },
                text: '1951',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1966',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1080 },
                text: '1966',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1935',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1060 },
                text: '1935',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1950',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1080 },
                text: '1950',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1917',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1060 },
                text: '1917',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1936',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1080 },
                text: '1936',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1897',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1060 },
                text: '1897',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1918',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1080 },
                text: '1918',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1881',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1060 },
                text: '1881',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1898',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1080 },
                text: '1898',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1859',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1060 },
                text: '1859',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1882',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1080 },
                text: '1882',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1841',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1060 },
                text: '1841',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1858',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1080 },
                text: '1858',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1827',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1060 },
                text: '1827',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1842',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1080 },
                text: '1842',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1807',
                nodeType: 'trackMarker',
                nodePos: { x: 870, y: 1060 },
                text: '1827',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1828',
                nodeType: 'trackMarker',
                nodePos: { x: 870, y: 1080 },
                text: '1828',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1789',
                nodeType: 'trackMarker',
                nodePos: { x: 950, y: 1060 },
                text: '1789',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1806',
                nodeType: 'trackMarker',
                nodePos: { x: 950, y: 1080 },
                text: '1806',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1773',
                nodeType: 'trackMarker',
                nodePos: { x: 1030, y: 1060 },
                text: '1773',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1788',
                nodeType: 'trackMarker',
                nodePos: { x: 1030, y: 1080 },
                text: '1788',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1759',
                nodeType: 'trackMarker',
                nodePos: { x: 1110, y: 1060 },
                text: '1759',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1774',
                nodeType: 'trackMarker',
                nodePos: { x: 1110, y: 1080 },
                text: '1774',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1743',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1060 },
                text: '1743',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1758',
                nodeType: 'trackMarker',
                nodePos: { x: 1190, y: 1080 },
                text: '1758',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1727',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1060 },
                text: '1727',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1742',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1080 },
                text: '1742',
            },

            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1713',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 1060 },
                text: '1713',
            },
            {
                nodeID: 'trackMarker-GoraWlodowska_Psary_1726',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 1080 },
                text: '1726',
            },
        ]
    },
    "KOZLOW_PSARY": {
        "TRACKS": [
            {
                trackID: 'STATION_SPROWA_STARZYNY',
                trackSVG: `
                M1390,1160 1425,1160 1427.5,1165 1427.5,1175 1430,1180
                M1390,1180 1470,1180 M1410,1180 1412.5,1185 1412.5,1195 1415,1200 1470,1200
                M1445,1180 1447.5,1185 1447.5,1195 1450,1200

                M1620,1180 1690,1180
                M1620,1200 1690,1200
                M1640,1200 1642.5,1195 1642.5,1185 1645,1180 M1665,1180 1667.5,1185 1667.5,1195 1670,1200
                `,
                trackColor: 'white'
            },
            {
                trackID: 'PSARY_AND_KONIECPOL_TO_STARZYNY_TO_SPROWA_TO_KOZLOW',
                trackSVG: `
                M1380,1100 1320,1100 M1310,1100 1300,1100 1297.5,1105 1297.5,1155 1300,1160 1310,1160 M1320,1160 1380,1160
                M1205,1180 1210,1180 M1215,1180 1220,1180 M1225,1180 1230,1180 M1235,1180 1240,1180 M1245,1180 1250,1180 M1255,1180 1260,1180 M1280,1180 1380,1180

                M1480,1180 1610,1180 M1700,1180 1830,1180
                M1480,1200 1610,1200 M1700,1200 1830,1200
                `,
                trackColor: 'gray'
            },
            {
                trackID: 'KOZLOW_SNEEKPEAK',
                trackSVG: `
                M1840,1180 1845,1180 M1850,1180 1855,1180 M1860,1180 1865,1180
                M1840,1200 1845,1200 M1850,1200 1855,1200 M1860,1200 1865,1200
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ABS SIGNALS PSARY -> STARZYNY
            {
                signalName: 'L570_15',
                signalPos: { x: '1310', y: '1100' },
                trainPos: { x: '1325', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L570_15N',
                signalPos: { x: '1310', y: '1160' },
                trainPos: { x: '1325', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //~ 1828_Ko_KONIECPOL
            {
                //? Asig Koniecpol
                signalName: '1830_Ko_J',
                signalPos: { x: '1270', y: '1180' },
                trainPos: { x: '1255', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                //? Esig Koniecpol
                signalName: '1830_Ko_A',
                signalPos: { x: '1270', y: '1180' },
                trainPos: { x: '1285', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ 4092_Str_STARZYNY
            {
                signalName: 'Str_C',
                signalPos: { x: '1390', y: '1160' },
                trainPos: { x: '1375', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Str_D',
                signalPos: { x: '1390', y: '1180' },
                trainPos: { x: '1375', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Str_B',
                signalPos: { x: '1470', y: '1180' },
                trainPos: { x: '1485', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'Str_A',
                signalPos: { x: '1470', y: '1200' },
                trainPos: { x: '1485', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ 4021_Sp_SPROWA
            {
                signalName: 'Sp_C',
                signalPos: { x: '1620', y: '1180' },
                trainPos: { x: '1605', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Sp_D',
                signalPos: { x: '1620', y: '1200' },
                trainPos: { x: '1605', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Sp_B',
                signalPos: { x: '1690', y: '1180' },
                trainPos: { x: '1705', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'Sp_A',
                signalPos: { x: '1690', y: '1200' },
                trainPos: { x: '1705', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //? Esigs Kozlow
            {
                signalName: 'Kz_B',
                signalPos: { x: '1840', y: '1180' },
                trainPos: { x: '1825', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Kz_C',
                signalPos: { x: '1840', y: '1200' },
                trainPos: { x: '1825', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Pa_Str_05',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 1100 },
                text: '05',
            },
            {
                nodeID: 'trackMarker-Pa_Str_15',
                nodeType: 'trackMarker',
                nodePos: { x: 1350, y: 1160 },
                text: '15',
            },

            // ? Starzyny
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
        ]
    },
    "3436_Ps_PSARY": { //^ Psary
        "TRACKS": [
            {
                trackID: '3436_PSARY',
                /*
                UPPER MAIN T1
                LOWER MAIN T2
                T3 FROM STARZYNY
                
                SW41/40
                SW37/35 + SW33/30
                
                SW25/22 + T3 + SW7/5
                SW31/27 + SW24/23 + T6 + SW11 + SW9/6
                
                SW4/3 + SW2/1
                */
                trackSVG: `
                M1390,1060 1500,1060 M1510,1060 1570,1060 M1580,1060 1670,1060
                M1390,1080 1500,1080 M1510,1080 1570,1080 M1580,1080 1670,1080
                M1390,1100 1500,1100 M1510,1100 1570,1100 M1580,1100 1600,1100
                
                M1410,1100 1412.5,1095 1412.5,1085 1415,1080
                M1430,1060 1432.5,1065 1432.5,1075 1435,1080 M1450,1080 1452.5,1075 1452.5,1065 1455,1060
                
                M1470,1060 1472.5,1055 1472.5,1045 1475,1040 1500,1040 M1510,1040 1570,1040 M1580,1040 1605,1040 1607.5,1045 1607.5,1055 1610,1060
                M1470,1080 1472.5,1085 1472.5,1095 1475,1100 M1485,1100 1487.5,1105 1487.5,1115 1490,1120 1500,1120 M1510,1120 1570,1120 M1580,1120 1590,1120 1592.5,1115 1592.5,1105 1595,1100 1605,1100 1607.5,1095 1607.5,1085 1610,1080
                
                M1625,1080 1627.5,1075 1627.5,1065 1630,1060 M1645,1060 1647.5,1065 1647.5,1075 1650,1080`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Ps_T',
                signalPos: { x: '1390', y: '1060' },
                trainPos: { x: '1375', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_V',
                signalPos: { x: '1390', y: '1080' },
                trainPos: { x: '1375', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_W',
                signalPos: { x: '1390', y: '1100' },
                trainPos: { x: '1375', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Ps_O',
                signalPos: { x: '1500', y: '1040' },
                trainPos: { x: '1515', y: '1040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_N',
                signalPos: { x: '1500', y: '1060' },
                trainPos: { x: '1515', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_M',
                signalPos: { x: '1500', y: '1080' },
                trainPos: { x: '1515', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_L',
                signalPos: { x: '1500', y: '1100' },
                trainPos: { x: '1515', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_K',
                signalPos: { x: '1500', y: '1120' },
                trainPos: { x: '1515', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Ps_E',
                signalPos: { x: '1580', y: '1040' },
                trainPos: { x: '1565', y: '1040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_F',
                signalPos: { x: '1580', y: '1060' },
                trainPos: { x: '1565', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_G',
                signalPos: { x: '1580', y: '1080' },
                trainPos: { x: '1565', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_H',
                signalPos: { x: '1580', y: '1100' },
                trainPos: { x: '1565', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_J',
                signalPos: { x: '1580', y: '1120' },
                trainPos: { x: '1565', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Ps_B',
                signalPos: { x: '1670', y: '1060' },
                trainPos: { x: '1685', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_A',
                signalPos: { x: '1670', y: '1080' },
                trainPos: { x: '1685', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Psary',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1440, y: 1110 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Psary',
                nodeType: 'stationName',
                stationPrefix: 'Ps',
                stationName: 'Psary',
                nodePos: { x: 1540, y: 1000 },
                nodePosFlipped: { x: 1540, y: 1150 }
            },
            {
                nodeID: 'trackMarker-Psary_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1040 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Psary_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1060 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Psary_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1080 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Psary_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1100 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Psary_6',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1120 },
                text: '6',
            },
        ]
    },
    "PSARY_KNAPOWKA": {
        "TRACKS": [
            {
                trackID: 'PSARY_KNAPOWKA',
                trackSVG: `
                M1680,1060 1740,1060 M1760,1060 1820,1060 M1840,1060 1900,1060 M1920,1060 1980,1060 M2000,1060 2060,1060
                M1680,1080 1740,1080 M1760,1080 1820,1080 M1840,1080 1900,1080 M1920,1080 1980,1080 M2000,1080 2060,1080`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1673N',
                signalPos: { x: '1750', y: '1060' },
                trainPos: { x: '1735', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1674',
                signalPos: { x: '1750', y: '1080' },
                trainPos: { x: '1735', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1673',
                signalPos: { x: '1750', y: '1060' },
                trainPos: { x: '1765', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1674N',
                signalPos: { x: '1750', y: '1080' },
                trainPos: { x: '1765', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_1655N',
                signalPos: { x: '1830', y: '1060' },
                trainPos: { x: '1815', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1656',
                signalPos: { x: '1830', y: '1080' },
                trainPos: { x: '1815', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1655',
                signalPos: { x: '1830', y: '1060' },
                trainPos: { x: '1845', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1656N',
                signalPos: { x: '1830', y: '1080' },
                trainPos: { x: '1845', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1641N',
                signalPos: { x: '1910', y: '1060' },
                trainPos: { x: '1895', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1642',
                signalPos: { x: '1910', y: '1080' },
                trainPos: { x: '1895', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1641',
                signalPos: { x: '1910', y: '1060' },
                trainPos: { x: '1925', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1642N',
                signalPos: { x: '1910', y: '1080' },
                trainPos: { x: '1925', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1625N',
                signalPos: { x: '1990', y: '1060' },
                trainPos: { x: '1975', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1624',
                signalPos: { x: '1990', y: '1080' },
                trainPos: { x: '1975', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1625',
                signalPos: { x: '1990', y: '1060' },
                trainPos: { x: '2005', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1624N',
                signalPos: { x: '1990', y: '1080' },
                trainPos: { x: '2005', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Psary_Knapowka_1673',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 1060 },
                text: '1673',
            },
            {
                nodeID: 'trackMarker-Psary_Knapowka_1686',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 1080 },
                text: '1686',
            },

            {
                nodeID: 'trackMarker-Psary_Knapowka_1655',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1060 },
                text: '1655',
            },
            {
                nodeID: 'trackMarker-Psary_Knapowka_1674',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1080 },
                text: '1674',
            },

            {
                nodeID: 'trackMarker-Psary_Knapowka_1641',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 1060 },
                text: '1641',
            },
            {
                nodeID: 'trackMarker-Psary_Knapowka_1656',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 1080 },
                text: '1656',
            },

            {
                nodeID: 'trackMarker-Psary_Knapowka_1625',
                nodeType: 'trackMarker',
                nodePos: { x: 1950, y: 1060 },
                text: '1625',
            },
            {
                nodeID: 'trackMarker-Psary_Knapowka_1642',
                nodeType: 'trackMarker',
                nodePos: { x: 1950, y: 1080 },
                text: '1642',
            },

            {
                nodeID: 'trackMarker-Psary_Knapowka_1611',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1060 },
                text: '1611',
            },
            {
                nodeID: 'trackMarker-Psary_Knapowka_1624',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1080 },
                text: '1624',
            },
        ]
    },
    "1772_Kn_KNAPOWKA": { //^ Knapowka
        "TRACKS": [
            {
                trackID: '1772_KNAPOWKA',
                /*
                SW6/5 + 4/3
                
                SW2/1 + Track to Czarnca
                */
                trackSVG: `
                M2070,1060 2180,1060
                M2070,1080 2180,1080
                
                M2090,1080 2092.5,1075 2092.5,1065 2095,1060 M2115,1060 2117.5,1065 2117.5,1075 2120,1080
                
                M2140,1080 2142.5,1085 2142.5,1095 2145,1100 2180,1100`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'Kn_E',
                signalPos: { x: '2070', y: '1060' },
                trainPos: { x: '2055', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_F',
                signalPos: { x: '2070', y: '1080' },
                trainPos: { x: '2055', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: 'Kn_C',
                signalPos: { x: '2180', y: '1060' },
                trainPos: { x: '2195', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_B',
                signalPos: { x: '2180', y: '1080' },
                trainPos: { x: '2195', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_A',
                signalPos: { x: '2180', y: '1100' },
                trainPos: { x: '2195', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_A',
                signalPos: { x: '2180', y: '1100' },
                trainPos: { x: '2195', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Knapowka',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2100, y: 1090 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Knapowka',
                nodeType: 'stationName',
                stationPrefix: 'Kn',
                stationName: 'Knapówka',
                nodePos: { x: 2120, y: 1000 },
                nodePosFlipped: { x: 2120, y: 1140 }
            },
        ]
    },
    "KNAPOWKA_WLOSZCZOWAPOLNOC": {
        "TRACKS": [
            {
                trackID: 'TRACKS_KNAPOWKA_WLOSZCZOWAPOLNOC_1',
                trackSVG: `
                M2190,1060 2250,1060 M2270,1060 2330,1060 M2340,1060 2350,1060 2360,1070
                M2190,1080 2250,1080 M2270,1080 2330,1080 M2340,1080 2350,1080 2360,1090
                
                M2190,1100 2250,1100 M2270,1100 2330,1100 M2350,1100 2355,1100 M2360,1100 2365,1100 M2370,1100 2375,1100 M2380,1100 2385,1100 M2390,1100 2395,1100 M2400,1100 2405,1100`,
                trackColor: 'gray'
            },
            {
                trackID: 'TRACKS_KNAPOWKA_WLOSZCZOWAPOLNOC_2',
                trackSVG: `
                M45,1220 50,1220 M55,1220 60,1220 M65,1220 70,1220 M75,1220 80,1220 M85,1220 90,1220 M95,1220 100,1220 M120,1220 180,1220 M200,1220 260,1220 M280,1220 340,1220 M360,1220 420,1220
                
                M330,1230 340,1240 350,1240 M360,1240 420,1240
                M330,1250 340,1260 350,1260 M360,1260 420,1260`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            //~ SIGNALS TOWARDS AND FROM CZARNZA TO KNAPOWKA
            {
                signalName: 'L571_19N',
                signalPos: { x: '2260', y: '1100' },
                trainPos: { x: '2245', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L571_19',
                signalPos: { x: '2260', y: '1100' },
                trainPos: { x: '2275', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'Cz_Z',
                signalPos: { x: '2340', y: '1100' },
                trainPos: { x: '2325', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Cz_O',
                signalPos: { x: '2340', y: '1100' },
                trainPos: { x: '2355', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS TOWARDS AND FROM ZELISLAWICE TO WLOSZCZOWA POLNOC
            {
                signalName: 'Zes_B',
                signalPos: { x: '110', y: '1220' },
                trainPos: { x: '95', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zes_A',
                signalPos: { x: '110', y: '1220' },
                trainPos: { x: '125', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'L572_59N',
                signalPos: { x: '190', y: '1220' },
                trainPos: { x: '175', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_59',
                signalPos: { x: '190', y: '1220' },
                trainPos: { x: '205', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L572_41N',
                signalPos: { x: '270', y: '1220' },
                trainPos: { x: '255', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_41',
                signalPos: { x: '270', y: '1220' },
                trainPos: { x: '285', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_25N',
                signalPos: { x: '350', y: '1220' },
                trainPos: { x: '335', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L572_25',
                signalPos: { x: '350', y: '1220' },
                trainPos: { x: '365', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //~ ABS SIGNALS KNAPOWKA <-> WLOSZCZOWA POLNOC
            {
                signalName: 'L4_1587N',
                signalPos: { x: '2260', y: '1060' },
                trainPos: { x: '2245', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1586',
                signalPos: { x: '2260', y: '1080' },
                trainPos: { x: '2245', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1587',
                signalPos: { x: '2260', y: '1060' },
                trainPos: { x: '2275', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1586N',
                signalPos: { x: '2260', y: '1080' },
                trainPos: { x: '2275', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },


            {
                signalName: 'L4_1565N',
                signalPos: { x: '2340', y: '1060' },
                trainPos: { x: '2325', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1564',
                signalPos: { x: '2340', y: '1080' },
                trainPos: { x: '2325', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            // Knapowka <-> Wloszczowa Polnoc [ROW 5]
            {
                signalName: 'L4_1565',
                signalPos: { x: '350', y: '1240' },
                trainPos: { x: '365', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1564N',
                signalPos: { x: '350', y: '1260' },
                trainPos: { x: '365', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            //~ Knapowka <-> Czarnza
            {
                nodeID: 'trackMarker-Kn_Cz_19',
                nodeType: 'trackMarker',
                nodePos: { x: 2220, y: 1100 },
                text: '19',
            },
            {
                nodeID: 'trackMarker-Kn_Cz_21',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 1100 },
                text: '21',
            },
            //~ Knapowka <-> Wloszczowa Polnoc
            {
                nodeID: 'trackMarker-Kn_WP_1587',
                nodeType: 'trackMarker',
                nodePos: { x: 2220, y: 1060 },
                text: '1587',
            },
            {
                nodeID: 'trackMarker-Kn_WP_1600',
                nodeType: 'trackMarker',
                nodePos: { x: 2220, y: 1080 },
                text: '1600',
            },
            {
                nodeID: 'trackMarker-Kn_WP_1565',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 1060 },
                text: '1565',
            },
            {
                nodeID: 'trackMarker-Kn_WP_1586',
                nodeType: 'trackMarker',
                nodePos: { x: 2300, y: 1080 },
                text: '1586',
            },
            //
            {
                nodeID: 'trackMarker-Kn_WP_1551',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1240 },
                text: '1551',
            },
            {
                nodeID: 'trackMarker-Kn_WP_1564',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1260 },
                text: '1564',
            },
            //~ Zelislawice <-> Wloszczowa Polnoc
            {
                nodeID: 'trackMarker-Zes-WP_59',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1220 },
                text: '59',
            },
            {
                nodeID: 'trackMarker-Zes-WP_41',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1220 },
                text: '41',
            },
            {
                nodeID: 'trackMarker-Zes-WP_25',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1220 },
                text: '25',
            },
            {
                nodeID: 'trackMarker-Zes-WP_11',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1220 },
                text: '11',
            },
        ]
    },
    "4987_WP_WLOSZCZOWAPOLNOC": { //^ Wloszczowa Polnoc
        "TRACKS": [
            {
                trackID: '4987_WLOSZCZOWAPOLNOC',
                /*
                T3
                T1
                T2

                SW35/33 + SW31/30 + SW28/26 + T4 + SW11/8
                SW29/27 + SW24/22 + SW21 + T5 + SW7 + SW6/5
                
                SW4/3 + SW2/1
                */
                trackSVG: `
                M440,1220 540,1220 M550,1220 610,1220 M620,1220 640,1220
                M430,1240 520,1240 M530,1240 600,1240 M610,1240 700,1240
                M430,1260 520,1260 M530,1260 600,1260 M610,1260 700,1260
                
                M460,1220 462.5,1225 462.5,1235 465,1240 M475,1240 477.5,1245 477.5,1255 480,1260 M505,1260 507.5,1265 507.5,1275 510,1280 520,1280 M530,1280 590,1280 M600,1280 620,1280 622.5,1275 622.5,1265 625,1260
                M490,1260 492.5,1255 492.5,1245 495,1240 M505,1240 507.5,1235 507.5,1225 510,1220 M520,1220 522.5,1215 522.5,1205 525,1200 540,1200 M550,1200 610,1200 M620,1200 630,1200 632.5,1205 632.5,1215 635,1220 645,1220 647.5,1225 647.5,1235 650,1240
                
                M660,1260 662.5,1255 662.5,1245 665,1240 M675,1240 677.5,1245 677.5,1255 680,1260`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'WP_S',
                signalPos: { x: '430', y: '1220' },
                trainPos: { x: '415', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_T',
                signalPos: { x: '430', y: '1240' },
                trainPos: { x: '415', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_U',
                signalPos: { x: '430', y: '1260' },
                trainPos: { x: '415', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNAL TO ZELISLAWICE
            {
                signalName: 'WP_R',
                signalPos: { x: '430', y: '1220' },
                trainPos: { x: '445', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'WP_P',
                signalPos: { x: '540', y: '1200' },
                trainPos: { x: '555', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_N',
                signalPos: { x: '540', y: '1220' },
                trainPos: { x: '555', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_M',
                signalPos: { x: '520', y: '1240' },
                trainPos: { x: '535', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_L',
                signalPos: { x: '520', y: '1260' },
                trainPos: { x: '535', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_K',
                signalPos: { x: '520', y: '1280' },
                trainPos: { x: '535', y: '1280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'WP_E',
                signalPos: { x: '620', y: '1200' },
                trainPos: { x: '605', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_F',
                signalPos: { x: '620', y: '1220' },
                trainPos: { x: '605', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_G',
                signalPos: { x: '610', y: '1240' },
                trainPos: { x: '595', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_H',
                signalPos: { x: '610', y: '1260' },
                trainPos: { x: '595', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_J',
                signalPos: { x: '600', y: '1280' },
                trainPos: { x: '585', y: '1280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'WP_B',
                signalPos: { x: '700', y: '1240' },
                trainPos: { x: '715', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_A',
                signalPos: { x: '700', y: '1260' },
                trainPos: { x: '715', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-WloszczowaPolnoc',
                nodeType: 'dispatchingPost',
                nodePos: { x: 470, y: 1290 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-WloszczowaPolnoc',
                nodeType: 'stationName',
                stationPrefix: 'WP',
                stationName: 'Włoszczowa Północ',
                nodePos: { x: 560, y: 1170 },
                nodePosFlipped: { x: 600, y: 1320 }
            },
            {
                nodeID: 'platform-WloszczowaPolnoc_P2',
                nodeType: 'platform',
                nodePos: { x: 550, y: 1205 },
                width: 40,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-WloszczowaPolnoc_P1',
                nodeType: 'platform',
                nodePos: { x: 530, y: 1285 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_5',
                nodeType: 'trackMarker',
                nodePos: { x: 580, y: 1200 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_3',
                nodeType: 'trackMarker',
                nodePos: { x: 580, y: 1220 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_1',
                nodeType: 'trackMarker',
                nodePos: { x: 565, y: 1240 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_2',
                nodeType: 'trackMarker',
                nodePos: { x: 565, y: 1260 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_4',
                nodeType: 'trackMarker',
                nodePos: { x: 560, y: 1280 },
                text: '4',
            },
        ]
    },
    "WLOSZCZOWAPOLNOC_OLSZAMOWICE": {
        "TRACKS": [
            {
                trackID: 'TRACKS_WLOSZCZOWAPOLNOC_OLSZAMOWICE',
                trackSVG: `
                M710,1240 770,1240 M790,1240 850,1240 M870,1240 930,1240 M950,1240 1010,1240 M1030,1240 1090,1240 M1110,1240 1170,1240 
                M710,1260 770,1260 M790,1260 850,1260 M870,1260 930,1260 M950,1260 1010,1260 M1030,1260 1090,1260 M1110,1260 1170,1260
                
                M1190,1240 1250,1240 M1270,1240 1330,1240 M1350,1240 1410,1240 M1430,1240 1490,1240 M1510,1240 1570,1240 M1590,1240 1650,1240 M1670,1240 1730,1240 M1750,1240 1810,1240 M1830,1240 1890,1240
                M1190,1260 1250,1260 M1270,1260 1330,1260 M1350,1260 1410,1260 M1430,1260 1490,1260 M1510,1260 1570,1260 M1590,1260 1650,1260 M1670,1260 1730,1260 M1750,1260 1810,1260 M1830,1260 1890,1260`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1511N',
                signalPos: { x: '780', y: '1240' },
                trainPos: { x: '765', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1510',
                signalPos: { x: '780', y: '1260' },
                trainPos: { x: '765', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1511',
                signalPos: { x: '780', y: '1240' },
                trainPos: { x: '795', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1510N',
                signalPos: { x: '780', y: '1260' },
                trainPos: { x: '795', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_1489N',
                signalPos: { x: '860', y: '1240' },
                trainPos: { x: '845', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1490',
                signalPos: { x: '860', y: '1260' },
                trainPos: { x: '845', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1489',
                signalPos: { x: '860', y: '1240' },
                trainPos: { x: '875', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1490N',
                signalPos: { x: '860', y: '1260' },
                trainPos: { x: '875', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1469N',
                signalPos: { x: '940', y: '1240' },
                trainPos: { x: '925', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1470',
                signalPos: { x: '940', y: '1260' },
                trainPos: { x: '925', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1469',
                signalPos: { x: '940', y: '1240' },
                trainPos: { x: '955', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1470N',
                signalPos: { x: '940', y: '1260' },
                trainPos: { x: '955', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1455N',
                signalPos: { x: '1020', y: '1240' },
                trainPos: { x: '1005', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1454',
                signalPos: { x: '1020', y: '1260' },
                trainPos: { x: '1005', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1455',
                signalPos: { x: '1020', y: '1240' },
                trainPos: { x: '1035', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1454N',
                signalPos: { x: '1020', y: '1260' },
                trainPos: { x: '1035', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1433N',
                signalPos: { x: '1100', y: '1240' },
                trainPos: { x: '1085', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1432',
                signalPos: { x: '1100', y: '1260' },
                trainPos: { x: '1085', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1433',
                signalPos: { x: '1100', y: '1240' },
                trainPos: { x: '1115', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1432N',
                signalPos: { x: '1100', y: '1260' },
                trainPos: { x: '1115', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1413N',
                signalPos: { x: '1180', y: '1240' },
                trainPos: { x: '1165', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1412',
                signalPos: { x: '1180', y: '1260' },
                trainPos: { x: '1165', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1413',
                signalPos: { x: '1180', y: '1240' },
                trainPos: { x: '1195', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1412N',
                signalPos: { x: '1180', y: '1260' },
                trainPos: { x: '1195', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1393N',
                signalPos: { x: '1260', y: '1240' },
                trainPos: { x: '1245', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1392',
                signalPos: { x: '1260', y: '1260' },
                trainPos: { x: '1245', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1393',
                signalPos: { x: '1260', y: '1240' },
                trainPos: { x: '1275', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1392N',
                signalPos: { x: '1260', y: '1260' },
                trainPos: { x: '1275', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1369N',
                signalPos: { x: '1340', y: '1240' },
                trainPos: { x: '1325', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1370',
                signalPos: { x: '1340', y: '1260' },
                trainPos: { x: '1325', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1369',
                signalPos: { x: '1340', y: '1240' },
                trainPos: { x: '1355', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1370N',
                signalPos: { x: '1340', y: '1260' },
                trainPos: { x: '1355', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1355N',
                signalPos: { x: '1420', y: '1240' },
                trainPos: { x: '1405', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1354',
                signalPos: { x: '1420', y: '1260' },
                trainPos: { x: '1405', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1355',
                signalPos: { x: '1420', y: '1240' },
                trainPos: { x: '1435', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1354N',
                signalPos: { x: '1420', y: '1260' },
                trainPos: { x: '1435', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1333N',
                signalPos: { x: '1500', y: '1240' },
                trainPos: { x: '1485', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1332',
                signalPos: { x: '1500', y: '1260' },
                trainPos: { x: '1485', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1333',
                signalPos: { x: '1500', y: '1240' },
                trainPos: { x: '1515', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1332N',
                signalPos: { x: '1500', y: '1260' },
                trainPos: { x: '1515', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1309N',
                signalPos: { x: '1580', y: '1240' },
                trainPos: { x: '1565', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1310',
                signalPos: { x: '1580', y: '1260' },
                trainPos: { x: '1565', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1309',
                signalPos: { x: '1580', y: '1240' },
                trainPos: { x: '1595', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1310N',
                signalPos: { x: '1580', y: '1260' },
                trainPos: { x: '1595', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1295N',
                signalPos: { x: '1660', y: '1240' },
                trainPos: { x: '1645', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1296',
                signalPos: { x: '1660', y: '1260' },
                trainPos: { x: '1645', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1295',
                signalPos: { x: '1660', y: '1240' },
                trainPos: { x: '1675', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1296N',
                signalPos: { x: '1660', y: '1260' },
                trainPos: { x: '1675', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1281N',
                signalPos: { x: '1740', y: '1240' },
                trainPos: { x: '1725', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1280',
                signalPos: { x: '1740', y: '1260' },
                trainPos: { x: '1725', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1281',
                signalPos: { x: '1740', y: '1240' },
                trainPos: { x: '1755', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1280N',
                signalPos: { x: '1740', y: '1260' },
                trainPos: { x: '1755', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1267N',
                signalPos: { x: '1820', y: '1240' },
                trainPos: { x: '1805', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1266',
                signalPos: { x: '1820', y: '1260' },
                trainPos: { x: '1805', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1267',
                signalPos: { x: '1820', y: '1240' },
                trainPos: { x: '1835', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1266N',
                signalPos: { x: '1820', y: '1260' },
                trainPos: { x: '1835', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1511',
                nodeType: 'trackMarker',
                nodePos: { x: 740, y: 1240 },
                text: '1511',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1526',
                nodeType: 'trackMarker',
                nodePos: { x: 740, y: 1260 },
                text: '1526',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1489',
                nodeType: 'trackMarker',
                nodePos: { x: 820, y: 1240 },
                text: '1489',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1510',
                nodeType: 'trackMarker',
                nodePos: { x: 820, y: 1260 },
                text: '1510',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1469',
                nodeType: 'trackMarker',
                nodePos: { x: 900, y: 1240 },
                text: '1469',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1490',
                nodeType: 'trackMarker',
                nodePos: { x: 900, y: 1260 },
                text: '1490',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1455',
                nodeType: 'trackMarker',
                nodePos: { x: 980, y: 1240 },
                text: '1455',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1470',
                nodeType: 'trackMarker',
                nodePos: { x: 980, y: 1260 },
                text: '1470',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1433',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 1240 },
                text: '1433',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1454',
                nodeType: 'trackMarker',
                nodePos: { x: 1060, y: 1260 },
                text: '1454',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1413',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 1240 },
                text: '1413',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1432',
                nodeType: 'trackMarker',
                nodePos: { x: 1140, y: 1260 },
                text: '1432',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1393',
                nodeType: 'trackMarker',
                nodePos: { x: 1220, y: 1240 },
                text: '1393',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1412',
                nodeType: 'trackMarker',
                nodePos: { x: 1220, y: 1260 },
                text: '1412',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1369',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 1240 },
                text: '1369',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1392',
                nodeType: 'trackMarker',
                nodePos: { x: 1300, y: 1260 },
                text: '1392',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1355',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 1240 },
                text: '1355',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1370',
                nodeType: 'trackMarker',
                nodePos: { x: 1380, y: 1260 },
                text: '1370',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1333',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 1240 },
                text: '1333',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1354',
                nodeType: 'trackMarker',
                nodePos: { x: 1460, y: 1260 },
                text: '1354',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1309',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1240 },
                text: '1309',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1332',
                nodeType: 'trackMarker',
                nodePos: { x: 1540, y: 1260 },
                text: '1332',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1295',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 1240 },
                text: '1295',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1310',
                nodeType: 'trackMarker',
                nodePos: { x: 1620, y: 1260 },
                text: '1310',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1281',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 1240 },
                text: '1281',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1296',
                nodeType: 'trackMarker',
                nodePos: { x: 1700, y: 1260 },
                text: '1296',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1267',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 1240 },
                text: '1267',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1280',
                nodeType: 'trackMarker',
                nodePos: { x: 1780, y: 1260 },
                text: '1280',
            },

            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1257',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 1240 },
                text: '1257',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochyoszczowaPolnoc_Olszamowice_1266',
                nodeType: 'trackMarker',
                nodePos: { x: 1860, y: 1260 },
                text: '1266',
            },
        ]
    },
    "2969_Ol_OLSZAMOWICE": { //^ Olszamowice
        "TRACKS": [
            {
                trackID: '2969_OLSZAMOWICE',
                /*
                T2
                T1
                
                SW33/32 + SW31/29
                
                SW28/26 + T3 + SW6/4
                SW30/27 + T4 + SW10/9
                
                SW5/3 + SW2/1
                */
                trackSVG: `
                M1900,1240 1980,1240 M1990,1240 2050,1240 M2060,1240 2140,1240
                M1900,1260 1980,1260 M1990,1260 2050,1260 M2060,1260 2140,1260
                
                M1920,1240 1922.5,1245 1922.5,1255 1925,1260 M1945,1260 1947.5,1255 1947.5,1245 1950,1240
                
                M1960,1240 1962.5,1235 1962.5,1225 1965,1220 1980,1220 M1990,1220 2050,1220 M2060,1220 2075,1220 2077.5,1225 2077.5,1235 2080,1240
                M1960,1260 1962.5,1265 1962.5,1275 1965,1280 1980,1280 M1990,1280 2050,1280 M2060,1280 2075,1280 2077.5,1275 2077.5,1265 2080,1260
                
                M2090,1260 2092.5,1255 2092.5,1245 2095,1240 M2115,1240 2117.5,1245 2117.5,1255 2120,1260`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Ol_T',
                signalPos: { x: '1900', y: '1240' },
                trainPos: { x: '1885', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_W',
                signalPos: { x: '1900', y: '1260' },
                trainPos: { x: '1885', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Ol_O',
                signalPos: { x: '1980', y: '1220' },
                trainPos: { x: '1995', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_N',
                signalPos: { x: '1980', y: '1240' },
                trainPos: { x: '1995', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_M',
                signalPos: { x: '1980', y: '1260' },
                trainPos: { x: '1995', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_L',
                signalPos: { x: '1980', y: '1280' },
                trainPos: { x: '1995', y: '1280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Ol_E',
                signalPos: { x: '2060', y: '1220' },
                trainPos: { x: '2045', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_F',
                signalPos: { x: '2060', y: '1240' },
                trainPos: { x: '2045', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_G',
                signalPos: { x: '2060', y: '1260' },
                trainPos: { x: '2045', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_H',
                signalPos: { x: '2060', y: '1280' },
                trainPos: { x: '2045', y: '1280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Ol_B',
                signalPos: { x: '2140', y: '1240' },
                trainPos: { x: '2155', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_A',
                signalPos: { x: '2140', y: '1260' },
                trainPos: { x: '2155', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Olszamowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1920, y: 1210 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-WloszczowaPolnoc',
                nodeType: 'stationName',
                stationPrefix: 'Ol',
                stationName: 'Olszamowice',
                nodePos: { x: 2020, y: 1170 },
                nodePosFlipped: { x: 2020, y: 1305 }
            },
            {
                nodeID: 'trackMarker-Olszamowice_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 1220 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Olszamowice_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 1240 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Olszamowice_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 1260 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Olszamowice_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2020, y: 1280 },
                text: '4',
            },
        ]
    },
    "OLSZAMOWICE_OPOCZNOPOLUDNIE": {
        "TRACKS": [
            {
                trackID: 'OLSZAMOWICE_OPOCZNOPOLUDNIE_1',
                trackSVG: `
                M2150,1240 2210,1240 M2230,1240 2290,1240 M2310,1240 2370,1240 M2390,1240 2450,1240 M2460,1240 2470,1240 2480,1250
                M2150,1260 2210,1260 M2230,1260 2290,1260 M2310,1260 2370,1260 M2390,1260 2450,1260 M2460,1260 2470,1260 2480,1270`,
                trackColor: 'gray'
            },
            {
                trackID: 'OLSZAMOWICE_OPOCZNOPOLUDNIE_2',
                /*
                TRACKS LEFT

                TRACKS RIGHT
                */
                trackSVG: `
                M10,1430 20,1440 30,1440 M40,1440 100,1440 M120,1440 180,1440 M200,1440 260,1440 M280,1440 340,1440 M360,1440 420,1440
                M10,1450 20,1460 30,1460 M40,1460 100,1460 M120,1460 180,1460 M200,1460 260,1460 M280,1460 340,1460 M360,1460 420,1460
                
                M510,1440 570,1440 M590,1440 650,1440 M670,1440 730,1440 M750,1440 810,1440 M830,1440 890,1440 M910,1440 970,1440 M990,1440 1050,1440
                M510,1460 570,1460 M590,1460 650,1460 M670,1460 730,1460 M750,1460 810,1460 M830,1460 890,1460 M910,1460 970,1460 M990,1460 1050,1460`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1217N',
                signalPos: { x: '2220', y: '1240' },
                trainPos: { x: '2205', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1216',
                signalPos: { x: '2220', y: '1260' },
                trainPos: { x: '2205', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1217',
                signalPos: { x: '2220', y: '1240' },
                trainPos: { x: '2235', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1216N',
                signalPos: { x: '2220', y: '1260' },
                trainPos: { x: '2235', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_1197N',
                signalPos: { x: '2300', y: '1240' },
                trainPos: { x: '2285', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1196',
                signalPos: { x: '2300', y: '1260' },
                trainPos: { x: '2285', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1997',
                signalPos: { x: '2300', y: '1240' },
                trainPos: { x: '2315', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1196N',
                signalPos: { x: '2300', y: '1260' },
                trainPos: { x: '2315', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1181N',
                signalPos: { x: '2380', y: '1240' },
                trainPos: { x: '2365', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1180',
                signalPos: { x: '2380', y: '1260' },
                trainPos: { x: '2365', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1181',
                signalPos: { x: '2380', y: '1240' },
                trainPos: { x: '2395', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1180N',
                signalPos: { x: '2380', y: '1260' },
                trainPos: { x: '2395', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1163N',
                signalPos: { x: '2460', y: '1240' },
                trainPos: { x: '2445', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1162',
                signalPos: { x: '2460', y: '1260' },
                trainPos: { x: '2445', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1163',
                signalPos: { x: '30', y: '1440' },
                trainPos: { x: '45', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1162N',
                signalPos: { x: '30', y: '1460' },
                trainPos: { x: '45', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1145N',
                signalPos: { x: '110', y: '1440' },
                trainPos: { x: '95', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1146',
                signalPos: { x: '110', y: '1460' },
                trainPos: { x: '95', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1145',
                signalPos: { x: '110', y: '1440' },
                trainPos: { x: '125', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1146N',
                signalPos: { x: '110', y: '1460' },
                trainPos: { x: '125', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1131N',
                signalPos: { x: '190', y: '1440' },
                trainPos: { x: '175', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1130',
                signalPos: { x: '190', y: '1460' },
                trainPos: { x: '175', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1131',
                signalPos: { x: '190', y: '1440' },
                trainPos: { x: '205', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1130N',
                signalPos: { x: '190', y: '1460' },
                trainPos: { x: '205', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1109N',
                signalPos: { x: '270', y: '1440' },
                trainPos: { x: '255', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1108',
                signalPos: { x: '270', y: '1460' },
                trainPos: { x: '255', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1109',
                signalPos: { x: '270', y: '1440' },
                trainPos: { x: '285', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1108N',
                signalPos: { x: '270', y: '1460' },
                trainPos: { x: '285', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1087N',
                signalPos: { x: '350', y: '1440' },
                trainPos: { x: '335', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1088',
                signalPos: { x: '350', y: '1460' },
                trainPos: { x: '335', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1087',
                signalPos: { x: '350', y: '1440' },
                trainPos: { x: '365', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1088N',
                signalPos: { x: '350', y: '1460' },
                trainPos: { x: '365', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1041N',
                signalPos: { x: '580', y: '1440' },
                trainPos: { x: '565', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1040',
                signalPos: { x: '580', y: '1460' },
                trainPos: { x: '565', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1041',
                signalPos: { x: '580', y: '1440' },
                trainPos: { x: '595', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1040N',
                signalPos: { x: '580', y: '1460' },
                trainPos: { x: '595', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1019N',
                signalPos: { x: '660', y: '1440' },
                trainPos: { x: '645', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1018',
                signalPos: { x: '660', y: '1460' },
                trainPos: { x: '645', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1019',
                signalPos: { x: '660', y: '1440' },
                trainPos: { x: '675', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1018N',
                signalPos: { x: '660', y: '1460' },
                trainPos: { x: '675', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1001N',
                signalPos: { x: '740', y: '1440' },
                trainPos: { x: '725', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1000',
                signalPos: { x: '740', y: '1460' },
                trainPos: { x: '725', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1001',
                signalPos: { x: '740', y: '1440' },
                trainPos: { x: '755', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1000N',
                signalPos: { x: '740', y: '1460' },
                trainPos: { x: '755', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_983N',
                signalPos: { x: '820', y: '1440' },
                trainPos: { x: '805', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_982',
                signalPos: { x: '820', y: '1460' },
                trainPos: { x: '805', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_983',
                signalPos: { x: '820', y: '1440' },
                trainPos: { x: '835', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_982N',
                signalPos: { x: '820', y: '1460' },
                trainPos: { x: '835', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_967N',
                signalPos: { x: '900', y: '1440' },
                trainPos: { x: '885', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_968',
                signalPos: { x: '900', y: '1460' },
                trainPos: { x: '885', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_967',
                signalPos: { x: '900', y: '1440' },
                trainPos: { x: '915', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_968N',
                signalPos: { x: '900', y: '1460' },
                trainPos: { x: '915', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_953N',
                signalPos: { x: '980', y: '1440' },
                trainPos: { x: '965', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_952',
                signalPos: { x: '980', y: '1460' },
                trainPos: { x: '965', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_953',
                signalPos: { x: '980', y: '1440' },
                trainPos: { x: '995', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_952N',
                signalPos: { x: '980', y: '1460' },
                trainPos: { x: '995', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1217',
                nodeType: 'trackMarker',
                nodePos: { x: 2180, y: 1240 },
                text: '1217',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1230',
                nodeType: 'trackMarker',
                nodePos: { x: 2180, y: 1260 },
                text: '1230',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1197',
                nodeType: 'trackMarker',
                nodePos: { x: 2260, y: 1240 },
                text: '1197',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1216',
                nodeType: 'trackMarker',
                nodePos: { x: 2260, y: 1260 },
                text: '1216',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1181',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 1240 },
                text: '1181',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1196',
                nodeType: 'trackMarker',
                nodePos: { x: 2340, y: 1260 },
                text: '1196',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1163',
                nodeType: 'trackMarker',
                nodePos: { x: 2420, y: 1240 },
                text: '1163',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1180',
                nodeType: 'trackMarker',
                nodePos: { x: 2420, y: 1260 },
                text: '1180',
            },
            // Olszamowice <-> Pilichowice [ROW 6]
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1145',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1440 },
                text: '1145',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1162',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1460 },
                text: '1162',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1131',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1440 },
                text: '1131',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1146',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1460 },
                text: '1146',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1109',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1440 },
                text: '1109',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1130',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1460 },
                text: '1130',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1087',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1440 },
                text: '1087',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1108',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1460 },
                text: '1108',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1069',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1440 },
                text: '1069',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1088',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1460 },
                text: '1088',
            },
            // Pilichowice <-> Opoczno Poludnie
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1041',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 1440 },
                text: '1041',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1056',
                nodeType: 'trackMarker',
                nodePos: { x: 540, y: 1460 },
                text: '1056',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1019',
                nodeType: 'trackMarker',
                nodePos: { x: 620, y: 1440 },
                text: '1019',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1040',
                nodeType: 'trackMarker',
                nodePos: { x: 620, y: 1460 },
                text: '1040',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1001',
                nodeType: 'trackMarker',
                nodePos: { x: 700, y: 1440 },
                text: '1001',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1018',
                nodeType: 'trackMarker',
                nodePos: { x: 700, y: 1460 },
                text: '1018',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_983',
                nodeType: 'trackMarker',
                nodePos: { x: 780, y: 1440 },
                text: '983',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_1000',
                nodeType: 'trackMarker',
                nodePos: { x: 780, y: 1460 },
                text: '1000',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_967',
                nodeType: 'trackMarker',
                nodePos: { x: 860, y: 1440 },
                text: '967',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_982',
                nodeType: 'trackMarker',
                nodePos: { x: 860, y: 1460 },
                text: '982',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_953',
                nodeType: 'trackMarker',
                nodePos: { x: 940, y: 1440 },
                text: '953',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_968',
                nodeType: 'trackMarker',
                nodePos: { x: 940, y: 1460 },
                text: '968',
            },

            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_939',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 1440 },
                text: '939',
            },
            {
                nodeID: 'trackMarker-Olszamowice_OpocznoPoludnie_952',
                nodeType: 'trackMarker',
                nodePos: { x: 1020, y: 1460 },
                text: '952',
            },
        ]
    },
    "3200_Pl_PILICHOWICE": { //^ Pilichowice
        "TRACKS": [
            {
                trackID: '3200_PILICHOWICE',
                trackSVG: `
                M430,1440 500,1440
                M430,1460 500,1460
                M450,1460 452.5,1455 452.5,1445 455,1440 M475,1440 477.5,1445 477.5,1455 480,1460`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'Pl_C',
                signalPos: { x: '430', y: '1440' },
                trainPos: { x: '415', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pl_D',
                signalPos: { x: '430', y: '1460' },
                trainPos: { x: '415', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pl_B',
                signalPos: { x: '500', y: '1440' },
                trainPos: { x: '515', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pl_A',
                signalPos: { x: '500', y: '1460' },
                trainPos: { x: '515', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Pilichowice',
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
        ]
    },
    "2993_OP_OPOCZNOPOLUDNIE": { //^ Opoczno Poludnie
        "TRACKS": [
            {
                trackID: '2993_OPOCZNOPOLUDNIE',
                /*
                T1
                T2
                
                SW30/29 + SW28/27
                
                SW26/25 + T3 + SW10/7
                SW22/21 + T4 + SW6/4
                
                SW5/3 + SW2/1
                */
                trackSVG: `
                M1060,1440 1150,1440 M1160,1440 1250,1440 M1260,1440 1350,1440
                M1060,1460 1170,1460 M1180,1460 1260,1460 M1270,1460 1350,1460
                
                M1080,1440 1082.5,1445 1082.5,1455 1085,1460 M1105,1460 1107.5,1455 1107.5,1445 1110,1440
                
                M1130,1440 1132.5,1435 1132.5,1425 1135,1420 1150,1420 M1160,1420 1250,1420 M1260,1420 1275,1420 1277.5,1425 1277.5,1435 1280,1440
                M1150,1460 1152.5,1465 1152.5,1475 1155,1480 1170,1480 M1180,1480 1240,1480 M1250,1480 1285,1480 1287.5,1475 1287.5,1465 1290,1460
                
                M1300,1440 1302.5,1445 1302.5,1455 1305,1460 M1325,1460 1327.5,1455 1327.5,1445 1330,1440`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'OP_T',
                signalPos: { x: '1060', y: '1440' },
                trainPos: { x: '1045', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_W',
                signalPos: { x: '1060', y: '1460' },
                trainPos: { x: '1045', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'OP_O',
                signalPos: { x: '1150', y: '1420' },
                trainPos: { x: '1165', y: '1420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_N',
                signalPos: { x: '1150', y: '1440' },
                trainPos: { x: '1165', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_M',
                signalPos: { x: '1170', y: '1460' },
                trainPos: { x: '1185', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_L',
                signalPos: { x: '1170', y: '1480' },
                trainPos: { x: '1185', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'OP_E',
                signalPos: { x: '1260', y: '1420' },
                trainPos: { x: '1245', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_F',
                signalPos: { x: '1260', y: '1440' },
                trainPos: { x: '1245', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_G',
                signalPos: { x: '1270', y: '1460' },
                trainPos: { x: '1255', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_H',
                signalPos: { x: '1250', y: '1480' },
                trainPos: { x: '1235', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'OP_B',
                signalPos: { x: '1350', y: '1440' },
                trainPos: { x: '1365', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_A',
                signalPos: { x: '1350', y: '1460' },
                trainPos: { x: '1365', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-OpocznoPoludnie',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1115, y: 1490 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-OpocznoPoludnie',
                nodeType: 'stationName',
                stationPrefix: 'Op',
                stationName: 'Opoczno Południe',
                nodePos: { x: 1205, y: 1380 },
                nodePosFlipped: { x: 1235, y: 1515 }
            },
            {
                nodeID: 'platform-OpocnoPoludnie',
                nodeType: 'platform',
                nodePos: { x: 1180, y: 1485 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1205, y: 1420 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1205, y: 1440 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1220, y: 1460 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1210, y: 1480 },
                text: '4',
            },
        ]
    },
    "OPOCZNOPOLUDNIE_IDZIKOWICE": {
        "TRACKS": [
            {
                trackID: 'OPOCZNOPOLUDNIE_IDZIKOWICE',
                trackSVG: `
                M1360,1440 1420,1440 M1440,1440 1500,1440 M1520,1440 1580,1440 M1600,1440 1660,1440 M1680,1440 1740,1440 M1760,1440 1820,1440
                M1360,1460 1420,1460 M1440,1460 1500,1460 M1520,1460 1580,1460 M1600,1460 1660,1460 M1680,1460 1740,1460 M1760,1460 1820,1460`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_901N',
                signalPos: { x: '1430', y: '1440' },
                trainPos: { x: '1415', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_900',
                signalPos: { x: '1430', y: '1460' },
                trainPos: { x: '1415', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_901',
                signalPos: { x: '1430', y: '1440' },
                trainPos: { x: '1445', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_900N',
                signalPos: { x: '1430', y: '1460' },
                trainPos: { x: '1445', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_885N',
                signalPos: { x: '1510', y: '1440' },
                trainPos: { x: '1495', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_886',
                signalPos: { x: '1510', y: '1460' },
                trainPos: { x: '1495', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_885',
                signalPos: { x: '1510', y: '1440' },
                trainPos: { x: '1525', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_886N',
                signalPos: { x: '1510', y: '1460' },
                trainPos: { x: '1525', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_869N',
                signalPos: { x: '1590', y: '1440' },
                trainPos: { x: '1575', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_868',
                signalPos: { x: '1590', y: '1460' },
                trainPos: { x: '1575', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_869',
                signalPos: { x: '1590', y: '1440' },
                trainPos: { x: '1605', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_868N',
                signalPos: { x: '1590', y: '1460' },
                trainPos: { x: '1605', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_855N',
                signalPos: { x: '1670', y: '1440' },
                trainPos: { x: '1655', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_854',
                signalPos: { x: '1670', y: '1460' },
                trainPos: { x: '1655', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_855',
                signalPos: { x: '1670', y: '1440' },
                trainPos: { x: '1685', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_854N',
                signalPos: { x: '1670', y: '1460' },
                trainPos: { x: '1685', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_839N',
                signalPos: { x: '1750', y: '1440' },
                trainPos: { x: '1735', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_840',
                signalPos: { x: '1750', y: '1460' },
                trainPos: { x: '1735', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_839',
                signalPos: { x: '1750', y: '1440' },
                trainPos: { x: '1765', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_840N',
                signalPos: { x: '1750', y: '1460' },
                trainPos: { x: '1765', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_901',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 1440 },
                text: '901',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_916',
                nodeType: 'trackMarker',
                nodePos: { x: 1390, y: 1460 },
                text: '916',
            },

            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_885',
                nodeType: 'trackMarker',
                nodePos: { x: 1470, y: 1440 },
                text: '885',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_900',
                nodeType: 'trackMarker',
                nodePos: { x: 1470, y: 1460 },
                text: '900',
            },

            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_869',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1440 },
                text: '869',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_886',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1460 },
                text: '886',
            },

            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_855',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1440 },
                text: '855',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_868',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1460 },
                text: '868',
            },

            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_839',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 1440 },
                text: '839',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_854',
                nodeType: 'trackMarker',
                nodePos: { x: 1710, y: 1460 },
                text: '854',
            },

            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_827',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1440 },
                text: '827',
            },
            {
                nodeID: 'trackMarker-OpocznoPoludnie_Idzikowice_840',
                nodeType: 'trackMarker',
                nodePos: { x: 1790, y: 1460 },
                text: '840',
            },
        ]
    },
    "1349_Id_IDZIKOWICE": { //^ Idzikowice
        "TRACKS": [
            {
                trackID: '1349_IDZIKOWICE',
                /*
                T1
                T2
                T4
                
                ?LEFT UPPER SWITCHES
                SW142/141ab
                SW126/125 + SW124/123ab
                SW123cd/121 + T7/9
                SW118/117ab + SW117cd + T5/3
                
                ?LEFT LOWER SWITCHES
                SW153/152
                SW145/143
                SW107/104 + T14
                SW103 + T12/10
                SW114/112ab + SW112cd/T8
                SWSW113/111ab + SW111cd/T6
                
                ?TRACKS
                
                ?RIGHT UPPER SWITCHES
                T9/7 TO SW57 TO SW54 + T5a/E
                T5 + SW54 + T3/SW52 + SW51
                
                ?RIGHT LOWER SWITCHES
                T14/12 + SW36 + SW22/21
                SW35cd/34
                T10/8 + SW37/33ab + T6/SW33ab + SW33cd/32ab + SW32cd/31
                SW20/19 + 18/16
                SW17/15 + SW12/9
                */
                trackSVG: `
                M1830,1440 1970,1440 M1980,1440 2080,1440 M2090,1440 2270,1440
                M1830,1460 1970,1460 M1980,1460 2080,1460 M2090,1460 2270,1460
                M1875,1480 1970,1480 M1980,1480 2080,1480 M2090,1480 2270,1480
                
                M1890,1440 1892.5,1435 1892.5,1425 1895,1420 1940,1420
                M1900,1460 1902.5,1455 1902.5,1445 1905,1440 M1915,1440 1917.5,1435 1917.5,1425 1920,1420
                M1930,1420 1932.5,1415 1932.5,1365 1935,1360 1970,1360 M1945,1360 1947.5,1355 1947.5,1345 1950,1340 1970,1340
                M1935,1440 1937.5,1435 1937.5,1425 1940,1420 1970,1420 M1950,1420 1952.5,1415 1952.5,1405 1955,1400 1970,1400
                
                M1850,1440 1852.5,1445 1852.5,1455 1855,1460
                M1870,1460 1872.5,1465 1872.5,1475 1875,1480 1880,1480
                M1910,1480 1912.5,1485 1912.5,1555 1915,1560 1925,1560 1927.5,1565 1927.5,1595 1930,1600 1970,1600
                M1940,1560 1942.5,1565 1942.5,1575 1945,1580 1970,1580 M1920,1560 1970,1560
                M1915,1460 1917.5,1465 1917.5,1475 1920,1480 M1930,1480 1932.5,1485 1932.5,1535 1935,1540 1970,1540
                M1935,1460 1937.5,1465 1937.5,1475 1940,1480 M1950,1480 1952.5,1485 1952.5,1495 1955,1500 1970,1500
                
                M1980,1340 2080,1340
                M1980,1360 2080,1360
                M1980,1400 2080,1400
                M1980,1420 2080,1420
                M1980,1480 2080,1480
                M1980,1500 2080,1500
                M1980,1540 2080,1540
                M1980,1560 2080,1560
                M1980,1580 2080,1580
                M1980,1600 2080,1600
                
                M2090,1340 2100,1340 2102.5,1345 2102.5,1355 2105,1360 M2090,1360 2115,1360 2117.5,1365 2117.5,1395 2120,1400 2270,1400
                M2090,1400 2130,1400 2132.5,1405 2132.5,1415 2135,1420 M2090,1420 2145,1420 2147.5,1425 2147.5,1435 2150,1440
                
                M2090,1600 2100,1600 2102.5,1595 2102.5,1585 2105,1580 M2090,1580 2115,1580 2155,1580 2157.5,1575 2157.5,1505 2160,1500 M2140,1500 2170,1500 2172.5,1495 2172.5,1485 2175,1480
                M2110,1580 2115,1580 2117.5,1575 2117.5,1545 2120,1540
                M2090,1560 2100,1560 2102.5,1555 2102.5,1545 2105,1540 M2090,1540 2130,1540 2132.5,1535 2132.5,1505 2135,1500 M2090,1500 2145,1500 2147.5,1495 2147.5,1485 2150,1480 M2160,1480 2162.5,1475 2162.5,1465 2165,1460
                M2180,1440 2182.5,1445 2182.5,1455 2185,1460 2200,1460 2202.5,1465 2202.5,1475 2205,1480
                M2210,1460 2212.5,1455 2212.5,1445 2215,1440 M2225,1440 2227.5,1435 2227.5,1425 2230,1420 2250,1420 2252.5,1415 2252.5,1405 2255,1400`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Id_W',
                signalPos: { x: '1830', y: '1440' },
                trainPos: { x: '1815', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_Z',
                signalPos: { x: '1830', y: '1460' },
                trainPos: { x: '1815', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Id_T9',
                signalPos: { x: '1970', y: '1340' },
                trainPos: { x: '2000', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_T7',
                signalPos: { x: '1970', y: '1360' },
                trainPos: { x: '2000', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_T5',
                signalPos: { x: '1970', y: '1400' },
                trainPos: { x: '2000', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_S',
                signalPos: { x: '1970', y: '1420' },
                trainPos: { x: '2000', y: '1420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_R',
                signalPos: { x: '1970', y: '1440' },
                trainPos: { x: '2000', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_P',
                signalPos: { x: '1970', y: '1460' },
                trainPos: { x: '2000', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_O',
                signalPos: { x: '1970', y: '1480' },
                trainPos: { x: '2000', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N6',
                signalPos: { x: '1970', y: '1500' },
                trainPos: { x: '2000', y: '1500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N8',
                signalPos: { x: '1970', y: '1540' },
                trainPos: { x: '2000', y: '1540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N10',
                signalPos: { x: '1970', y: '1560' },
                trainPos: { x: '2000', y: '1560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N12',
                signalPos: { x: '1970', y: '1580' },
                trainPos: { x: '2000', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N14',
                signalPos: { x: '1970', y: '1600' },
                trainPos: { x: '2000', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Id_F9',
                signalPos: { x: '2090', y: '1340' },
                trainPos: { x: '2060', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_F7',
                signalPos: { x: '2090', y: '1360' },
                trainPos: { x: '2060', y: '1360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_G',
                signalPos: { x: '2090', y: '1400' },
                trainPos: { x: '2060', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_H',
                signalPos: { x: '2090', y: '1420' },
                trainPos: { x: '2060', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_J',
                signalPos: { x: '2090', y: '1440' },
                trainPos: { x: '2060', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_K',
                signalPos: { x: '2090', y: '1460' },
                trainPos: { x: '2060', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_L',
                signalPos: { x: '2090', y: '1480' },
                trainPos: { x: '2060', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M6',
                signalPos: { x: '2090', y: '1500' },
                trainPos: { x: '2060', y: '1500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M8',
                signalPos: { x: '2090', y: '1540' },
                trainPos: { x: '2060', y: '1540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M10',
                signalPos: { x: '2090', y: '1560' },
                trainPos: { x: '2060', y: '1560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M12',
                signalPos: { x: '2090', y: '1580' },
                trainPos: { x: '2060', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M14',
                signalPos: { x: '2090', y: '1600' },
                trainPos: { x: '2060', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Id_E',
                signalPos: { x: '2270', y: '1400' },
                trainPos: { x: '2285', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_C',
                signalPos: { x: '2270', y: '1440' },
                trainPos: { x: '2285', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_B',
                signalPos: { x: '2270', y: '1460' },
                trainPos: { x: '2285', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_A',
                signalPos: { x: '2270', y: '1480' },
                trainPos: { x: '2285', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Idzikowice',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2180, y: 1530 },
                postType: 'relay'
            },
            {
                nodeID: 'stationName-Idzikowice',
                nodeType: 'stationName',
                stationPrefix: 'Id',
                stationName: 'Idzikowice',
                nodePos: { x: 2200, y: 1360 },
                nodePosFlipped: { x: 2030, y: 1630 }
            },
            {
                nodeID: 'trackMarker-Idzikowice_9',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1340 },
                text: '9',
            },
            {
                nodeID: 'trackMarker-Idzikowice_7',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1360 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-Idzikowice_5',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1400 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Idzikowice_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1420 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Idzikowice_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1440 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Idzikowice_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1460 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Idzikowice_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1480 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Idzikowice_6',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1500 },
                text: '6',
            },
            {
                nodeID: 'trackMarker-Idzikowice_8',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1540 },
                text: '8',
            },
            {
                nodeID: 'trackMarker-Idzikowice_10',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1560 },
                text: '10',
            },
            {
                nodeID: 'trackMarker-Idzikowice_12',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1580 },
                text: '12',
            },
            {
                nodeID: 'trackMarker-Idzikowice_14',
                nodeType: 'trackMarker',
                nodePos: { x: 2030, y: 1600 },
                text: '14',
            },
        ]
    },
    "IDZIKOWICE_RADZICE": {
        "TRACKS": [
            {
                trackID: 'IDZIKOWICE_RADZICE',
                /*
                LK574 TOR 1 RADZICE
                
                LK573 TOR 2 RADZICE
                */
                trackSVG: `
                M2280,1400 2340,1400 M2360,1400 2420,1400 M2440,1400 2500,1400
                
                M2280,1480 2340,1480 M2360,1480 2420,1480 M2440,1480 2500,1480`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L574_27',
                signalPos: { x: '2350', y: '1400' },
                trainPos: { x: '2335', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L574_27N',
                signalPos: { x: '2350', y: '1400' },
                trainPos: { x: '2365', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L573_21',
                signalPos: { x: '2350', y: '1480' },
                trainPos: { x: '2335', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L573_21N',
                signalPos: { x: '2350', y: '1480' },
                trainPos: { x: '2365', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L574_15N',
                signalPos: { x: '2430', y: '1400' },
                trainPos: { x: '2415', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L574_15',
                signalPos: { x: '2430', y: '1400' },
                trainPos: { x: '2445', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L573_33',
                signalPos: { x: '2430', y: '1480' },
                trainPos: { x: '2415', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L573_33N',
                signalPos: { x: '2430', y: '1480' },
                trainPos: { x: '2445', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'Rd1_K',
                signalPos: { x: '2510', y: '1400' },
                trainPos: { x: '2495', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Rd_J',
                signalPos: { x: '2510', y: '1400' },
                trainPos: { x: '99999', y: '99999' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: 'Rd_N',
                signalPos: { x: '2510', y: '1480' },
                trainPos: { x: '2495', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Rd_A',
                signalPos: { x: '2510', y: '1480' },
                trainPos: { x: '99999', y: '99999' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Idzikowice_Radzice_27',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1400 },
                text: '27',
            },
            {
                nodeID: 'trackMarker-Idzikowice_Radzice_07',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1480 },
                text: '07',
            },

            {
                nodeID: 'trackMarker-Idzikowice_Radzice_13',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 1400 },
                text: '13',
            },
            {
                nodeID: 'trackMarker-Idzikowice_Radzice_21',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 1480 },
                text: '21',
            },

            {
                nodeID: 'trackMarker-Idzikowice_Radzice_05',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1400 },
                text: '05',
            },
            {
                nodeID: 'trackMarker-Idzikowice_Radzice_33',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1480 },
                text: '33',
            },
        ]
    },
    "IDZKOWICE_STRZALKI": {
        "TRACKS": [
            {
                trackID: 'IDZKOWICE_STRZALKI_1',
                /*
                LK4 TOR 1 STRZALKI
                LK4 TOR 2 STRZALKI
                */
                trackSVG: `
                M2280,1440 2340,1440 M2360,1440 2420,1440 M2440,1440 2500,1440 M2510,1440 2520,1440 2530,1450
                M2280,1460 2340,1460 M2360,1460 2420,1460 M2440,1460 2500,1460 M2510,1460 2520,1460 2530,1470`,
                trackColor: 'gray'
            },
            {
                trackID: 'IDZKOWICE_STRZALKI_2',
                trackSVG: `
                M10,1570 20,1580 30,1580 M40,1580 100,1580 M120,1580 180,1580 M200,1580 260,1580 M280,1580 340,1580 M360,1580 420,1580 M440,1580 500,1580 M520,1580 580,1580 M600,1580 660,1580 M680,1580 740,1580
                M10,1590 20,1600 30,1600 M40,1600 100,1600 M120,1600 180,1600 M200,1600 260,1600 M280,1600 340,1600 M360,1600 420,1600 M440,1600 500,1600 M520,1600 580,1600 M600,1600 660,1600 M680,1600 740,1600`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            // Idzikowice <-> Strzalki [R6]
            {
                signalName: 'L4_785N',
                signalPos: { x: '2350', y: '1440' },
                trainPos: { x: '2335', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_784',
                signalPos: { x: '2350', y: '1460' },
                trainPos: { x: '2335', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_785',
                signalPos: { x: '2350', y: '1440' },
                trainPos: { x: '2365', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_784N',
                signalPos: { x: '2350', y: '1460' },
                trainPos: { x: '2365', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_765N',
                signalPos: { x: '2430', y: '1440' },
                trainPos: { x: '2415', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_766',
                signalPos: { x: '2430', y: '1460' },
                trainPos: { x: '2415', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_765',
                signalPos: { x: '2430', y: '1440' },
                trainPos: { x: '2445', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_766N',
                signalPos: { x: '2430', y: '1460' },
                trainPos: { x: '2445', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_751N',
                signalPos: { x: '2510', y: '1440' },
                trainPos: { x: '2495', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_750',
                signalPos: { x: '2510', y: '1460' },
                trainPos: { x: '2495', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            // Idzikowice <-> Strzalki [R7]
            {
                signalName: 'L4_751',
                signalPos: { x: '30', y: '1580' },
                trainPos: { x: '45', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_750N',
                signalPos: { x: '30', y: '1600' },
                trainPos: { x: '45', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_731N',
                signalPos: { x: '110', y: '1580' },
                trainPos: { x: '95', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_732',
                signalPos: { x: '110', y: '1600' },
                trainPos: { x: '95', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_731',
                signalPos: { x: '110', y: '1580' },
                trainPos: { x: '125', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_732N',
                signalPos: { x: '110', y: '1600' },
                trainPos: { x: '125', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_711N',
                signalPos: { x: '190', y: '1580' },
                trainPos: { x: '175', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_712',
                signalPos: { x: '190', y: '1600' },
                trainPos: { x: '175', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_711',
                signalPos: { x: '190', y: '1580' },
                trainPos: { x: '205', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_712N',
                signalPos: { x: '190', y: '1600' },
                trainPos: { x: '205', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_691N',
                signalPos: { x: '270', y: '1580' },
                trainPos: { x: '255', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_692',
                signalPos: { x: '270', y: '1600' },
                trainPos: { x: '255', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_691',
                signalPos: { x: '270', y: '1580' },
                trainPos: { x: '285', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_692N',
                signalPos: { x: '270', y: '1600' },
                trainPos: { x: '285', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_667N',
                signalPos: { x: '350', y: '1580' },
                trainPos: { x: '335', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_668',
                signalPos: { x: '350', y: '1600' },
                trainPos: { x: '335', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_667',
                signalPos: { x: '350', y: '1580' },
                trainPos: { x: '365', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_668N',
                signalPos: { x: '350', y: '1600' },
                trainPos: { x: '365', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_653N',
                signalPos: { x: '430', y: '1580' },
                trainPos: { x: '415', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_654',
                signalPos: { x: '430', y: '1600' },
                trainPos: { x: '415', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_653',
                signalPos: { x: '430', y: '1580' },
                trainPos: { x: '445', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_654N',
                signalPos: { x: '430', y: '1600' },
                trainPos: { x: '445', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_633N',
                signalPos: { x: '510', y: '1580' },
                trainPos: { x: '495', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_634',
                signalPos: { x: '510', y: '1600' },
                trainPos: { x: '495', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_633',
                signalPos: { x: '510', y: '1580' },
                trainPos: { x: '525', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_634N',
                signalPos: { x: '510', y: '1600' },
                trainPos: { x: '525', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_611N',
                signalPos: { x: '590', y: '1580' },
                trainPos: { x: '575', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_610',
                signalPos: { x: '590', y: '1600' },
                trainPos: { x: '575', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_611',
                signalPos: { x: '590', y: '1580' },
                trainPos: { x: '605', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_610N',
                signalPos: { x: '590', y: '1600' },
                trainPos: { x: '605', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_595N',
                signalPos: { x: '670', y: '1580' },
                trainPos: { x: '655', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_596',
                signalPos: { x: '670', y: '1600' },
                trainPos: { x: '655', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_595',
                signalPos: { x: '670', y: '1580' },
                trainPos: { x: '685', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_596N',
                signalPos: { x: '670', y: '1600' },
                trainPos: { x: '685', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            // Idzikowice <-> Strzalki [R6]
            {
                nodeID: 'trackMarker-Idzikowice_Strzalki_785',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1440 },
                text: '785',
            },
            {
                nodeID: 'trackMarker-Idzikowice_Strzalki_798',
                nodeType: 'trackMarker',
                nodePos: { x: 2310, y: 1460 },
                text: '798',
            },

            {
                nodeID: 'trackMarker-Idzikowice_Strzalki_765',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 1440 },
                text: '765',
            },
            {
                nodeID: 'trackMarker-Idzikowice_Strzalki_784',
                nodeType: 'trackMarker',
                nodePos: { x: 2390, y: 1460 },
                text: '784',
            },

            {
                nodeID: 'trackMarker-Idzikowice_Strzalki_751',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1440 },
                text: '751',
            },
            {
                nodeID: 'trackMarker-Idzikowice_Strzalki_766',
                nodeType: 'trackMarker',
                nodePos: { x: 2470, y: 1460 },
                text: '766',
            },
            // Idzikowice <-> Strzalki [R7]
            {
                nodeID: 'trackMarker-Idzikowice_St_731',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1580 },
                text: '731',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_750',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1600 },
                text: '750',
            },

            {
                nodeID: 'trackMarker-Idzikowice_St_711',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1580 },
                text: '711',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_732',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1600 },
                text: '732',
            },

            {
                nodeID: 'trackMarker-Idzikowice_St_691',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1580 },
                text: '691',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_712',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1600 },
                text: '712',
            },

            {
                nodeID: 'trackMarker-Idzikowice_St_667',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1580 },
                text: '667',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_692',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1600 },
                text: '692',
            },

            {
                nodeID: 'trackMarker-Idzikowice_St_653',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1580 },
                text: '653',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_668',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1600 },
                text: '668',
            },

            {
                nodeID: 'trackMarker-Idzikowice_St_633',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1580 },
                text: '633',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_654',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1600 },
                text: '654',
            },

            {
                nodeID: 'trackMarker-Idzikowice_St_611',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1580 },
                text: '611',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_634',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1600 },
                text: '634',
            },

            {
                nodeID: 'trackMarker-Idzikowice_St_595',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1580 },
                text: '595',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_610',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1600 },
                text: '610',
            },

            {
                nodeID: 'trackMarker-Idzikowice_St_581',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1580 },
                text: '581',
            },
            {
                nodeID: 'trackMarker-Idzikowice_St_596',
                nodeType: 'trackMarker',
                nodePos: { x: 710, y: 1600 },
                text: '596',
            },
        ]
    },
    "4147_St_STRZALKI": { //^ Strzalki
        "TRACKS": [
            {
                trackID: '4147_STRZALKI',
                /*
                T1
                T2

                SW28/27 + SW26/24 + T3 + SW8/6
                SW25/23 + SW22/21 + T4 + SW7/4

                SW5/3 + SW2/1
                */
                trackSVG: `
                M750,1580 820,1580 M830,1580 900,1580 M910,1580 970,1580
                M750,1600 830,1600 M840,1600 900,1600 M910,1600 970,1600
                
                M770,1600 772.5,1595 772.5,1585 775,1580 M785,1580 787.5,1575 787.5,1565 790,1560 800,1560 M810,1560 900,1560 M910,1560 920,1560 922.5,1565 922.5,1575 925,1580
                M795,1580 797.5,1585 797.5,1595 800,1600 M810,1600 812.5,1605 812.5,1615 815,1620 830,1620 M840,1620 900,1620 M910,1620 920,1620 922.5,1615 922.5,1605 925,1600
                
                M935,1580 937.5,1585 937.5,1595 940,1600 M950,1600 952.5,1595 952.5,1585 955,1580`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'St_W',
                signalPos: { x: '750', y: '1580' },
                trainPos: { x: '735', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_Z',
                signalPos: { x: '750', y: '1600' },
                trainPos: { x: '735', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'St_P',
                signalPos: { x: '800', y: '1560' },
                trainPos: { x: '820', y: '1560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_O',
                signalPos: { x: '820', y: '1580' },
                trainPos: { x: '835', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_N',
                signalPos: { x: '830', y: '1600' },
                trainPos: { x: '845', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_M',
                signalPos: { x: '830', y: '1620' },
                trainPos: { x: '845', y: '1620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'St_F',
                signalPos: { x: '910', y: '1560' },
                trainPos: { x: '890', y: '1560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_G',
                signalPos: { x: '910', y: '1580' },
                trainPos: { x: '895', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_H',
                signalPos: { x: '910', y: '1600' },
                trainPos: { x: '895', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_J',
                signalPos: { x: '910', y: '1620' },
                trainPos: { x: '895', y: '1620' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'St_B',
                signalPos: { x: '970', y: '1580' },
                trainPos: { x: '985', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_A',
                signalPos: { x: '970', y: '1600' },
                trainPos: { x: '985', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Strzalki',
                nodeType: 'dispatchingPost',
                nodePos: { x: 770, y: 1610 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Strzalki',
                nodeType: 'stationName',
                stationPrefix: 'St',
                stationName: 'Strzałki',
                nodePos: { x: 860, y: 1530 },
                nodePosFlipped: { x: 860, y: 1650 }
            },
            {
                nodeID: 'trackMarker-Strzalki_3',
                nodeType: 'trackMarker',
                nodePos: { x: 855, y: 1560 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Strzalki_1',
                nodeType: 'trackMarker',
                nodePos: { x: 865, y: 1580 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Strzalki_2',
                nodeType: 'trackMarker',
                nodePos: { x: 870, y: 1600 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Strzalki_4',
                nodeType: 'trackMarker',
                nodePos: { x: 870, y: 1620 },
                text: '4',
            },
        ]
    },
    "STRZALKI_SZELIGI": {
        "TRACKS": [
            {
                trackID: 'STRZALKI_SZELIGI_1',
                trackSVG: `
                M980,1580 1040,1580 M1060,1580 1120,1580 M1140,1580 1200,1580 M1220,1580 1280,1580 M1300,1580 1360,1580 M1380,1580 1440,1580 M1460,1580 1520,1580 M1540,1580 1600,1580 M1620,1580 1680,1580
                M980,1600 1040,1600 M1060,1600 1120,1600 M1140,1600 1200,1600 M1220,1600 1280,1600 M1300,1600 1360,1600 M1380,1600 1440,1600 M1460,1600 1520,1600 M1540,1600 1600,1600 M1620,1600 1680,1600

                M1770,1580 1830,1580 M1840,1580 1850,1580 1860,1590
                M1770,1600 1830,1600 M1840,1600 1850,1600 1860,1610`,
                trackColor: 'gray'
            },
            {
                trackID: 'STRZALKI_SZELIGI_2',
                trackSVG: `
                M10,1710 20,1720 30,1720 M40,1720 100,1720 M120,1720 180,1720 M200,1720 260,1720 M280,1720 340,1720 M360,1720 420,1720 M440,1720 500,1720 M520,1720 580,1720 M600,1720 660,1720
                M10,1730 20,1740 30,1740 M40,1740 100,1740 M120,1740 180,1740 M200,1740 260,1740 M280,1740 340,1740 M360,1740 420,1740 M440,1740 500,1740 M520,1740 580,1740 M600,1740 660,1740`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            // Strzalki <-> Szeligi [R7]
            {
                signalName: 'L4_543N',
                signalPos: { x: '1050', y: '1580' },
                trainPos: { x: '1035', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_544',
                signalPos: { x: '1050', y: '1600' },
                trainPos: { x: '1035', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_543',
                signalPos: { x: '1050', y: '1580' },
                trainPos: { x: '1065', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_544N',
                signalPos: { x: '1050', y: '1600' },
                trainPos: { x: '1065', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_529N',
                signalPos: { x: '1130', y: '1580' },
                trainPos: { x: '1115', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_530',
                signalPos: { x: '1130', y: '1600' },
                trainPos: { x: '1115', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_529',
                signalPos: { x: '1130', y: '1580' },
                trainPos: { x: '1145', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_530N',
                signalPos: { x: '1130', y: '1600' },
                trainPos: { x: '1145', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_515N',
                signalPos: { x: '1210', y: '1580' },
                trainPos: { x: '1195', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_516',
                signalPos: { x: '1210', y: '1600' },
                trainPos: { x: '1195', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_515',
                signalPos: { x: '1210', y: '1580' },
                trainPos: { x: '1225', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_516N',
                signalPos: { x: '1210', y: '1600' },
                trainPos: { x: '1225', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_499N',
                signalPos: { x: '1290', y: '1580' },
                trainPos: { x: '1275', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_500',
                signalPos: { x: '1290', y: '1600' },
                trainPos: { x: '1275', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_499',
                signalPos: { x: '1290', y: '1580' },
                trainPos: { x: '1305', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_500N',
                signalPos: { x: '1290', y: '1600' },
                trainPos: { x: '1305', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_477N',
                signalPos: { x: '1370', y: '1580' },
                trainPos: { x: '1355', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_476',
                signalPos: { x: '1370', y: '1600' },
                trainPos: { x: '1355', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_477',
                signalPos: { x: '1370', y: '1580' },
                trainPos: { x: '1385', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_476N',
                signalPos: { x: '1370', y: '1600' },
                trainPos: { x: '1385', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_455N',
                signalPos: { x: '1450', y: '1580' },
                trainPos: { x: '1435', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_456',
                signalPos: { x: '1450', y: '1600' },
                trainPos: { x: '1435', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_455',
                signalPos: { x: '1450', y: '1580' },
                trainPos: { x: '1465', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_456N',
                signalPos: { x: '1450', y: '1600' },
                trainPos: { x: '1465', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_439N',
                signalPos: { x: '1530', y: '1580' },
                trainPos: { x: '1515', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_438',
                signalPos: { x: '1530', y: '1600' },
                trainPos: { x: '1515', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_439',
                signalPos: { x: '1530', y: '1580' },
                trainPos: { x: '1545', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_438N',
                signalPos: { x: '1530', y: '1600' },
                trainPos: { x: '1545', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_421N',
                signalPos: { x: '1610', y: '1580' },
                trainPos: { x: '1595', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_422',
                signalPos: { x: '1610', y: '1600' },
                trainPos: { x: '1595', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_421',
                signalPos: { x: '1610', y: '1580' },
                trainPos: { x: '1625', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_422N',
                signalPos: { x: '1610', y: '1600' },
                trainPos: { x: '1625', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_383N',
                signalPos: { x: '1840', y: '1580' },
                trainPos: { x: '1825', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_384',
                signalPos: { x: '1840', y: '1600' },
                trainPos: { x: '1825', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            // Strzalki <-> Szeligi [R8]
            {
                signalName: 'L4_383',
                signalPos: { x: '30', y: '1720' },
                trainPos: { x: '45', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_384N',
                signalPos: { x: '30', y: '1740' },
                trainPos: { x: '45', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_361N',
                signalPos: { x: '110', y: '1720' },
                trainPos: { x: '95', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_360',
                signalPos: { x: '110', y: '1740' },
                trainPos: { x: '95', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_361',
                signalPos: { x: '110', y: '1720' },
                trainPos: { x: '125', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_360N',
                signalPos: { x: '110', y: '1740' },
                trainPos: { x: '125', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_345N',
                signalPos: { x: '190', y: '1720' },
                trainPos: { x: '175', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_346',
                signalPos: { x: '190', y: '1740' },
                trainPos: { x: '175', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_345',
                signalPos: { x: '190', y: '1720' },
                trainPos: { x: '205', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_346N',
                signalPos: { x: '190', y: '1740' },
                trainPos: { x: '205', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_331N',
                signalPos: { x: '270', y: '1720' },
                trainPos: { x: '255', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_332',
                signalPos: { x: '270', y: '1740' },
                trainPos: { x: '255', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_331',
                signalPos: { x: '270', y: '1720' },
                trainPos: { x: '285', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_332N',
                signalPos: { x: '270', y: '1740' },
                trainPos: { x: '285', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_307N',
                signalPos: { x: '350', y: '1720' },
                trainPos: { x: '335', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_308',
                signalPos: { x: '350', y: '1740' },
                trainPos: { x: '335', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_307',
                signalPos: { x: '350', y: '1720' },
                trainPos: { x: '365', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_308N',
                signalPos: { x: '350', y: '1740' },
                trainPos: { x: '365', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_291N',
                signalPos: { x: '430', y: '1720' },
                trainPos: { x: '415', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_292',
                signalPos: { x: '430', y: '1740' },
                trainPos: { x: '415', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_291',
                signalPos: { x: '430', y: '1720' },
                trainPos: { x: '445', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_292N',
                signalPos: { x: '430', y: '1740' },
                trainPos: { x: '445', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_277N',
                signalPos: { x: '510', y: '1720' },
                trainPos: { x: '495', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_276',
                signalPos: { x: '510', y: '1740' },
                trainPos: { x: '495', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_277',
                signalPos: { x: '510', y: '1720' },
                trainPos: { x: '525', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_276N',
                signalPos: { x: '510', y: '1740' },
                trainPos: { x: '525', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_261N',
                signalPos: { x: '590', y: '1720' },
                trainPos: { x: '575', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_262',
                signalPos: { x: '590', y: '1740' },
                trainPos: { x: '575', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_261',
                signalPos: { x: '590', y: '1720' },
                trainPos: { x: '605', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_262N',
                signalPos: { x: '590', y: '1740' },
                trainPos: { x: '605', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_543',
                nodeType: 'trackMarker',
                nodePos: { x: 1010, y: 1580 },
                text: '543',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_556',
                nodeType: 'trackMarker',
                nodePos: { x: 1010, y: 1600 },
                text: '556',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_529',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 1580 },
                text: '529',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_544',
                nodeType: 'trackMarker',
                nodePos: { x: 1090, y: 1600 },
                text: '544',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_515',
                nodeType: 'trackMarker',
                nodePos: { x: 1170, y: 1580 },
                text: '515',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_530',
                nodeType: 'trackMarker',
                nodePos: { x: 1170, y: 1600 },
                text: '530',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_499',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 1580 },
                text: '499',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_516',
                nodeType: 'trackMarker',
                nodePos: { x: 1250, y: 1600 },
                text: '516',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_477',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 1580 },
                text: '477',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_500',
                nodeType: 'trackMarker',
                nodePos: { x: 1330, y: 1600 },
                text: '500',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_455',
                nodeType: 'trackMarker',
                nodePos: { x: 1410, y: 1580 },
                text: '455',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_476',
                nodeType: 'trackMarker',
                nodePos: { x: 1410, y: 1600 },
                text: '476',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_439',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 1580 },
                text: '439',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_456',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 1600 },
                text: '456',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_421',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1580 },
                text: '421',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_438',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1600 },
                text: '438',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_407',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 1580 },
                text: '407',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_422',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 1600 },
                text: '422',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_383',
                nodeType: 'trackMarker',
                nodePos: { x: 1800, y: 1580 },
                text: '383',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_398',
                nodeType: 'trackMarker',
                nodePos: { x: 1800, y: 1600 },
                text: '398',
            },
            // Strzalki <-> Szeligi [R8]
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_361',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1720 },
                text: '361',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_384',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1740 },
                text: '384',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_345',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1720 },
                text: '345',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_360',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1740 },
                text: '360',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_331',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1720 },
                text: '331',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_346',
                nodeType: 'trackMarker',
                nodePos: { x: 230, y: 1740 },
                text: '346',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_307',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1720 },
                text: '307',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_332',
                nodeType: 'trackMarker',
                nodePos: { x: 310, y: 1740 },
                text: '332',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_291',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1720 },
                text: '291',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_308',
                nodeType: 'trackMarker',
                nodePos: { x: 390, y: 1740 },
                text: '308',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_277',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1720 },
                text: '277',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_292',
                nodeType: 'trackMarker',
                nodePos: { x: 470, y: 1740 },
                text: '292',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_261',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1720 },
                text: '261',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_276',
                nodeType: 'trackMarker',
                nodePos: { x: 550, y: 1740 },
                text: '276',
            },

            {
                nodeID: 'trackMarker-Strzalki_Szeligi_243',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1720 },
                text: '243',
            },
            {
                nodeID: 'trackMarker-Strzalki_Szeligi_262',
                nodeType: 'trackMarker',
                nodePos: { x: 630, y: 1740 },
                text: '262',
            },
        ]
    },
    "139_BR_BIALARAWSKA": { //^ Biala Rawska
        "TRACKS": [
            {
                trackID: '139_BIALARAWSKA',
                trackSVG: `
                M1690,1580 1760,1580
                M1690,1600 1760,1600
                M1710,1600 1712.5,1595 1712.5,1585 1715,1580 M1735,1580 1737.5,1585 1737.5,1595 1740,1600
                `,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'BR_C',
                signalPos: { x: '1690', y: '1580' },
                trainPos: { x: '1675', y: '1580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'BR_D',
                signalPos: { x: '1690', y: '1600' },
                trainPos: { x: '1675', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'BR_B',
                signalPos: { x: '1760', y: '1580' },
                trainPos: { x: '1775', y: '1580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'BR_A',
                signalPos: { x: '1760', y: '1600' },
                trainPos: { x: '1775', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-BialaRawska',
                nodeType: 'stationName',
                stationPrefix: 'BR',
                stationName: 'Biała Rawska',
                nodePos: { x: 1725, y: 1540 },
                nodePosFlipped: { x: 1725, y: 1640 }
            },
            {
                nodeID: 'simpleText-BialaRawska',
                nodeType: 'simpleText',
                nodePos: { x: 1725, y: 1560 },
                nodePosFlipped: { x: 1725, y: 1620 },
                textSize: 10,
                text: `Controlled by Strzałki`
            },
        ]
    },
    "4338_Sz_SZELIGI": { //^ Szeligi
        "TRACKS": [
            {
                trackID: '4338_SZELIGI',
                /*
                T1
                T2
                
                SW32/31 + SW30/29
                
                SW27/26 + //?T3 + SW10/8
                SW28/25 + //?T4 + SW9/7
                SW23 + T6 + SW12
                
                SW6/5 + SW4/2
                
                SW3/1 + CONNECTOR MARKÓW
                */
                trackSVG: `
                M670,1720 740,1720 M750,1720 830,1720 M840,1720 920,1720
                M670,1740 740,1740 M750,1740 830,1740 M840,1740 920,1740
                
                M690,1720 692.5,1725 692.5,1735 695,1740 M705,1740 707.5,1735 707.5,1725 710,1720
                
                M720,1720 722.5,1715 722.5,1705 725,1700 740,1700 M750,1700 830,1700 M840,1700 855,1700 857.5,1705 857.5,1715 860,1720
                M720,1740 722.5,1745 722.5,1755 725,1760 750,1760 M760,1760 820,1760 M830,1760 855,1760 857.5,1755 857.5,1745 860,1740
                M735,1760 737.5,1765 737.5,1775 740,1780 750,1780 M760,1780 820,1780 M830,1780 840,1780 842.5,1775 842.5,1765 845,1760
                
                M870,1720 872.5,1725 872.5,1735 875,1740 M885,1740 887.5,1735 887.5,1725 890,1720
                
                M900,1740 902.5,1745 902.5,1755 905,1760 M850,1760 920,1760`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Se_W',
                signalPos: { x: '670', y: '1720' },
                trainPos: { x: '655', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_Z',
                signalPos: { x: '670', y: '1740' },
                trainPos: { x: '655', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Se_S',
                signalPos: { x: '740', y: '1700' },
                trainPos: { x: '755', y: '1700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_R',
                signalPos: { x: '740', y: '1720' },
                trainPos: { x: '755', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_P',
                signalPos: { x: '740', y: '1740' },
                trainPos: { x: '755', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_O',
                signalPos: { x: '750', y: '1760' },
                trainPos: { x: '765', y: '1760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_N',
                signalPos: { x: '750', y: '1780' },
                trainPos: { x: '765', y: '1780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Se_F',
                signalPos: { x: '840', y: '1700' },
                trainPos: { x: '825', y: '1700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_G',
                signalPos: { x: '840', y: '1720' },
                trainPos: { x: '825', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_H',
                signalPos: { x: '840', y: '1740' },
                trainPos: { x: '825', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_J',
                signalPos: { x: '830', y: '1760' },
                trainPos: { x: '815', y: '1760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_K',
                signalPos: { x: '830', y: '1780' },
                trainPos: { x: '815', y: '1780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Se_C',
                signalPos: { x: '920', y: '1720' },
                trainPos: { x: '935', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_B',
                signalPos: { x: '920', y: '1740' },
                trainPos: { x: '935', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_A',
                signalPos: { x: '920', y: '1760' },
                trainPos: { x: '935', y: '1760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Szeligi',
                nodeType: 'dispatchingPost',
                nodePos: { x: 695, y: 1770 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Szeligi',
                nodeType: 'stationName',
                stationPrefix: 'Se',
                stationName: 'Szeligi',
                nodePos: { x: 790, y: 1670 },
                nodePosFlipped: { x: 790, y: 1810 }
            },
            {
                nodeID: 'trackMarker-Szeligi_3',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1700 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Szeligi_1',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1720 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Szeligi_2',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1740 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Szeligi_4',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1760 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Szeligi_6',
                nodeType: 'trackMarker',
                nodePos: { x: 790, y: 1780 },
                text: '6',
            },
        ]
    },
    "SZELIGI_MARKOW": {
        "TRACKS": [
            {
                trackID: 'SZELIGI_MARKOW',
                trackSVG: `
                M930,1760 990,1760 M1010,1760 1070,1760 M1090,1760 1095,1760 M1100,1760 1105,1760 M1110,1760 1115,1760 M1120,1760 1125,1760 M1130,1760 1135,1760 M1140,1760 1145,1760 M1150,1760 1155,1760`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L575_25',
                signalPos: { x: '1000', y: '1760' },
                trainPos: { x: '985', y: '1760' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L575_25N',
                signalPos: { x: '1000', y: '1760' },
                trainPos: { x: '1015', y: '1760' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'Mr_C',
                signalPos: { x: '1080', y: '1760' },
                trainPos: { x: '1065', y: '1760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Mr_E',
                signalPos: { x: '1080', y: '1760' },
                trainPos: { x: '1095', y: '1760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Szeligi_Markow_01',
                nodeType: 'trackMarker',
                nodePos: { x: 960, y: 1760 },
                text: '01',
            },
            {
                nodeID: 'trackMarker-Szeligi_Markow_15',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 1760 },
                text: '15',
            },
        ]
    },
    "SZELIGI_KORYTOW": {
        "TRACKS": [
            {
                trackID: 'SZELIGI_KORYTOW',
                trackSVG: `
                M930,1720 990,1720 M1010,1720 1070,1720 M1090,1720 1150,1720 M1170,1720 1230,1720
                M930,1740 990,1740 M1010,1740 1070,1740 M1090,1740 1150,1740 M1170,1740 1230,1740`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_197N',
                signalPos: { x: '1000', y: '1720' },
                trainPos: { x: '985', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_198',
                signalPos: { x: '1000', y: '1740' },
                trainPos: { x: '985', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_197',
                signalPos: { x: '1000', y: '1720' },
                trainPos: { x: '1015', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_198N',
                signalPos: { x: '1000', y: '1740' },
                trainPos: { x: '1015', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_185N',
                signalPos: { x: '1080', y: '1720' },
                trainPos: { x: '1065', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_184',
                signalPos: { x: '1080', y: '1740' },
                trainPos: { x: '1065', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_185',
                signalPos: { x: '1080', y: '1720' },
                trainPos: { x: '1095', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_184N',
                signalPos: { x: '1080', y: '1740' },
                trainPos: { x: '1095', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_167N',
                signalPos: { x: '1160', y: '1720' },
                trainPos: { x: '1145', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_168',
                signalPos: { x: '1160', y: '1740' },
                trainPos: { x: '1145', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_167',
                signalPos: { x: '1160', y: '1720' },
                trainPos: { x: '1175', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_168N',
                signalPos: { x: '1160', y: '1740' },
                trainPos: { x: '1175', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Szeligi_Korytow_197',
                nodeType: 'trackMarker',
                nodePos: { x: 960, y: 1720 },
                text: '197',
            },
            {
                nodeID: 'trackMarker-Szeligi_Korytow_214',
                nodeType: 'trackMarker',
                nodePos: { x: 960, y: 1740 },
                text: '214',
            },
            {
                nodeID: 'trackMarker-Szeligi_Korytow_185',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 1720 },
                text: '185',
            },
            {
                nodeID: 'trackMarker-Szeligi_Korytow_198',
                nodeType: 'trackMarker',
                nodePos: { x: 1040, y: 1740 },
                text: '198',
            },
            {
                nodeID: 'trackMarker-Szeligi_Korytow_167',
                nodeType: 'trackMarker',
                nodePos: { x: 1120, y: 1720 },
                text: '167',
            },
            {
                nodeID: 'trackMarker-Szeligi_Korytow_184',
                nodeType: 'trackMarker',
                nodePos: { x: 1120, y: 1740 },
                text: '184',
            },
            {
                nodeID: 'trackMarker-Szeligi_Korytow_155',
                nodeType: 'trackMarker',
                nodePos: { x: 1200, y: 1720 },
                text: '155',
            },
            {
                nodeID: 'trackMarker-Szeligi_Korytow_168',
                nodeType: 'trackMarker',
                nodePos: { x: 1200, y: 1740 },
                text: '168',
            },
        ]
    },
    "0000_Kr_KORYTOW": { //^ Korytow
        "TRACKS": [
            {
                trackID: '0000_KORYTOW',
                /*
                T1
                T2
                
                SW28/27
                SW25/23 + T3 + SW7/4
                SW26/24 + T4 + SW8/6
                SW5/3 + SW2/1
                */
                trackSVG: `
                M1240,1720 1300,1720 M1310,1720 1370,1720 M1380,1720 1450,1720
                M1240,1740 1300,1740 M1310,1740 1370,1740 M1380,1740 1450,1740
                
                M1260,1740 1262.5,1735 1262.5,1725 1265,1720
                M1285,1720 1287.5,1715 1287.5,1705 1290,1700 1300,1700 M1310,1700 1370,1700 M1380,1700 1390,1700 1392.5,1705 1392.5,1715 1395,1720
                M1285,1740 1287.5,1745 1287.5,1755 1290,1760 1300,1760 M1310,1760 1370,1760 M1380,1760 1390,1760 1392.5,1755 1392.5,1745 1395,1740
                M1410,1740 1412.5,1735 1412.5,1725 1415,1720 M1425,1720 1427.5,1725 1427.5,1735 1430,1740`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Kr_W',
                signalPos: { x: '1240', y: '1720' },
                trainPos: { x: '1225', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_Z',
                signalPos: { x: '1240', y: '1740' },
                trainPos: { x: '1225', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Kr_S',
                signalPos: { x: '1300', y: '1700' },
                trainPos: { x: '1315', y: '1700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_R',
                signalPos: { x: '1300', y: '1720' },
                trainPos: { x: '1315', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_P',
                signalPos: { x: '1300', y: '1740' },
                trainPos: { x: '1315', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_O',
                signalPos: { x: '1300', y: '1760' },
                trainPos: { x: '1315', y: '1760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Kr_F',
                signalPos: { x: '1380', y: '1700' },
                trainPos: { x: '1365', y: '1700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_G',
                signalPos: { x: '1380', y: '1720' },
                trainPos: { x: '1365', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_H',
                signalPos: { x: '1380', y: '1740' },
                trainPos: { x: '1365', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_J',
                signalPos: { x: '1380', y: '1760' },
                trainPos: { x: '1365', y: '1760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Kr_C',
                signalPos: { x: '1450', y: '1720' },
                trainPos: { x: '1465', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'Kr_B',
                signalPos: { x: '1450', y: '1740' },
                trainPos: { x: '1465', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Korytow',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1260, y: 1770 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Korytow',
                nodeType: 'stationName',
                stationPrefix: 'Kr',
                stationName: 'Korytów',
                nodePos: { x: 1340, y: 1670 },
                nodePosFlipped: { x: 1340, y: 1790 }
            },
            {
                nodeID: 'trackMarker-Korytow_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1340, y: 1700 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Korytow_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1340, y: 1720 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Korytow_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1340, y: 1740 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Korytow_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1340, y: 1760 },
                text: '4',
            },
        ]
    },
    "KORYTOW_GRODZISKMAZOWIECKI": {
        "TRACKS": [
            {
                trackID: 'KORYTOW_GRODZISKMAZOWIECKI_1',
                trackSVG: `
                M1460,1720 1520,1720 M1540,1720 1600,1720 M1620,1720 1680,1720 M1700,1720 1760,1720 M1770,1720 1780,1720 1790,1730
                M1460,1740 1520,1740 M1540,1740 1600,1740 M1620,1740 1680,1740 M1700,1740 1760,1740 M1770,1740 1780,1740 1790,1750
            `,
                trackColor: 'gray'
            },
            {
                trackID: 'KORYTOW_GRODZISKMAZOWIECKI_2',
                trackSVG: `
                M10,1910 20,1920 30,1920 M40,1920 100,1920 M120,1920 180,1920
                M10,1930 20,1940 30,1940 M40,1940 100,1940 M120,1940 180,1940
                
                M10,1970 20,1980 30,1980 M40,1980 100,1980 M120,1980 180,1980
                M10,1990 20,2000 30,2000 M40,2000 100,2000 M120,2000 180,2000`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            // Korytow <-> Grodzisk Mazowiecki [R8]
            {
                signalName: 'L4_109N',
                signalPos: { x: '1530', y: '1720' },
                trainPos: { x: '1515', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_108',
                signalPos: { x: '1530', y: '1740' },
                trainPos: { x: '1515', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_109',
                signalPos: { x: '1530', y: '1720' },
                trainPos: { x: '1545', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_108N',
                signalPos: { x: '1530', y: '1740' },
                trainPos: { x: '1545', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_91N',
                signalPos: { x: '1610', y: '1720' },
                trainPos: { x: '1595', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_90',
                signalPos: { x: '1610', y: '1740' },
                trainPos: { x: '1595', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_91',
                signalPos: { x: '1610', y: '1720' },
                trainPos: { x: '1625', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_90N',
                signalPos: { x: '1610', y: '1740' },
                trainPos: { x: '1625', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_73N',
                signalPos: { x: '1690', y: '1720' },
                trainPos: { x: '1675', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_74',
                signalPos: { x: '1690', y: '1740' },
                trainPos: { x: '1675', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_73',
                signalPos: { x: '1690', y: '1720' },
                trainPos: { x: '1705', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_74N',
                signalPos: { x: '1690', y: '1740' },
                trainPos: { x: '1705', y: '1740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_51N',
                signalPos: { x: '1770', y: '1720' },
                trainPos: { x: '1755', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_50',
                signalPos: { x: '1770', y: '1740' },
                trainPos: { x: '1755', y: '1740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            // Korytow / Zyrardow <-> Grodzisk Mazowiecki [R9]
            {
                signalName: 'L4_51',
                signalPos: { x: '30', y: '1920' },
                trainPos: { x: '45', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_50N',
                signalPos: { x: '30', y: '1940' },
                trainPos: { x: '45', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_341',
                signalPos: { x: '30', y: '1980' },
                trainPos: { x: '45', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_340N',
                signalPos: { x: '30', y: '2000' },
                trainPos: { x: '45', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_31N',
                signalPos: { x: '110', y: '1920' },
                trainPos: { x: '95', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_32',
                signalPos: { x: '110', y: '1940' },
                trainPos: { x: '95', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_31',
                signalPos: { x: '110', y: '1920' },
                trainPos: { x: '125', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_32N',
                signalPos: { x: '110', y: '1940' },
                trainPos: { x: '125', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_327N',
                signalPos: { x: '110', y: '1980' },
                trainPos: { x: '95', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_328',
                signalPos: { x: '110', y: '2000' },
                trainPos: { x: '95', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_327',
                signalPos: { x: '110', y: '1980' },
                trainPos: { x: '125', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_328N',
                signalPos: { x: '110', y: '2000' },
                trainPos: { x: '125', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_109',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 1720 },
                text: '109',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_122',
                nodeType: 'trackMarker',
                nodePos: { x: 1490, y: 1740 },
                text: '122',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_91',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1720 },
                text: '91',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_108',
                nodeType: 'trackMarker',
                nodePos: { x: 1570, y: 1740 },
                text: '108',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_73',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 1720 },
                text: '73',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_90',
                nodeType: 'trackMarker',
                nodePos: { x: 1650, y: 1740 },
                text: '90',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_51',
                nodeType: 'trackMarker',
                nodePos: { x: 1730, y: 1720 },
                text: '51',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_74',
                nodeType: 'trackMarker',
                nodePos: { x: 1730, y: 1740 },
                text: '74',
            },
            // Korytow <-> Grodzisk Mazowiecki [R9]
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_31',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1920 },
                text: '31',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_50',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1940 },
                text: '50',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_17',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1920 },
                text: '17',
            },
            {
                nodeID: 'trackMarker-Korytow_GrodziskMazowiecki_32',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1940 },
                text: '32',
            },
            //
            {
                nodeID: 'trackMarker-Zyrardow_GrodziskMazowiecki_327',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 1980 },
                text: '327',
            },
            {
                nodeID: 'trackMarker-Zyrardow_GrodziskMazowiecki_340',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 2000 },
                text: '340',
            },
            {
                nodeID: 'trackMarker-Zyrardow_GrodziskMazowiecki_315',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 1980 },
                text: '315',
            },
            {
                nodeID: 'trackMarker-Zyrardow_GrodziskMazowiecki_328',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 2000 },
                text: '328',
            },
        ]
    },
    "1251_GM_GRODZISKMAZOWIECKI": { //^ Grodzisk Mazowiecki
        "TRACKS": [
            {
                trackID: '1251_GRODZISKMAZOWIECKI',
                /*
                T1
                T2
                
                T3
                T4 partially
                
                SW66/63 + SW60/58
                
                SW65/62
                SW64/61 + SW59/57
                SW56/55 + SW54/52
                SW53/51
                
                SW43/36 + T11 + SW18/16
                
                SW42/38 + T14 + SW13/9
                SW44/31
                
                SW22/19 + SW17/14
                
                SW10/7 + SW6/4 + SW3/1
                */
                trackSVG: `
                M200,1920 350,1920 M360,1920 460,1920 M470,1920 560,1920
                M200,1940 350,1940 M360,1940 460,1940 M470,1940 560,1940
                
                M200,1980 305,1980 M315,1980 325,1980 M335,1980 370,1980 M380,1980 440,1980 M450,1980 515,1980 M525,1980 560,1980
                M200,2000 310,2000 M320,2000 360,2000 M380,2000 440,2000 M450,2000 530,2000 M540,2000 560,2000 
                
                M230,1920 232.5,1925 232.5,1935 235,1940 M255,1940 257.5,1935 257.5,1925 260,1920
                
                M230,1980 232.5,1975 232.5,1965 235,1960 240,1960 242.5,1955 242.5,1945 245,1940
                M240,2000 242.5,1995 242.5,1985 245,1980 M255,1980 257.5,1975 257.5,1965 260,1960 270,1960 272.5,1955 272.5,1945 275,1940
                M285,1940 287.5,1945 287.5,1975 290,1980 M300,1980 302.5,1985 302.5,1995 305,2000
                M310,1940 312.5,1935 312.5,1925 315,1920
                
                M330,1920 332.5,1915 332.5,1905 335,1900 350,1900 M360,1900 460,1900 M470,1900 480,1900 482.5,1905 482.5,1915 485,1920
                
                M330,1940 332.5,1945 332.5,1955 335,1960 350,1960 M360,1960 460,1960 M470,1960 500,1960 M490,1960 492.5,1955 492.5,1945 495,1940
                M340,1980 342.5,1975 342.5,1965 345,1960
                
                M460,2000 462.5,1995 462.5,1985 465,1980 M475,1980 477.5,1975 477.5,1965 480,1960
                M495,1960 500,1960 502.5,1965 502.5,1975 505,1980
                
                M510,1920 512.5,1925 512.5,1935 515,1940 M525,1940 527.5,1945 527.5,1975 530,1980 M540,1980 542.5,1985 542.5,1995 545,2000
                M535,1940 537.5,1935 537.5,1925 540,1920`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Gr_W',
                signalPos: { x: '190', y: '1920' },
                trainPos: { x: '175', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_X',
                signalPos: { x: '190', y: '1940' },
                trainPos: { x: '175', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_Y',
                signalPos: { x: '190', y: '1980' },
                trainPos: { x: '175', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_Z',
                signalPos: { x: '190', y: '2000' },
                trainPos: { x: '175', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Gr_P1',
                signalPos: { x: '190', y: '1920' },
                trainPos: { x: '205', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P2',
                signalPos: { x: '190', y: '1940' },
                trainPos: { x: '205', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P3',
                signalPos: { x: '190', y: '1980' },
                trainPos: { x: '205', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P4',
                signalPos: { x: '190', y: '2000' },
                trainPos: { x: '205', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS LEFT SIDE
            {
                signalName: 'Gr_O3',
                signalPos: { x: '305', y: '1980' },
                trainPos: { x: '320', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_O4',
                signalPos: { x: '310', y: '2000' },
                trainPos: { x: '320', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_N3',
                signalPos: { x: '335', y: '1980' },
                trainPos: { x: '320', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Gr_M11',
                signalPos: { x: '350', y: '1900' },
                trainPos: { x: '365', y: '1900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M1',
                signalPos: { x: '350', y: '1920' },
                trainPos: { x: '365', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M2',
                signalPos: { x: '350', y: '1940' },
                trainPos: { x: '365', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M14',
                signalPos: { x: '350', y: '1960' },
                trainPos: { x: '365', y: '1960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M3',
                signalPos: { x: '370', y: '1980' },
                trainPos: { x: '385', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_N4',
                signalPos: { x: '370', y: '2000' },
                trainPos: { x: '355', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M4',
                signalPos: { x: '370', y: '2000' },
                trainPos: { x: '385', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS RIGHT SIDE
            {
                signalName: 'Gr_H11',
                signalPos: { x: '470', y: '1900' },
                trainPos: { x: '455', y: '1900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H1',
                signalPos: { x: '470', y: '1920' },
                trainPos: { x: '455', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H2',
                signalPos: { x: '470', y: '1940' },
                trainPos: { x: '455', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H14',
                signalPos: { x: '470', y: '1960' },
                trainPos: { x: '455', y: '1960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H3',
                signalPos: { x: '450', y: '1980' },
                trainPos: { x: '435', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H4',
                signalPos: { x: '450', y: '2000' },
                trainPos: { x: '435', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_G3',
                signalPos: { x: '525', y: '1980' },
                trainPos: { x: '510', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_G4',
                signalPos: { x: '540', y: '2000' },
                trainPos: { x: '525', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Gr_D',
                signalPos: { x: '560', y: '1920' },
                trainPos: { x: '575', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_C',
                signalPos: { x: '560', y: '1940' },
                trainPos: { x: '575', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_B',
                signalPos: { x: '560', y: '1980' },
                trainPos: { x: '575', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_A',
                signalPos: { x: '560', y: '2000' },
                trainPos: { x: '575', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-GrodziskMazowiecki',
                nodeType: 'dispatchingPost',
                nodePos: { x: 360, y: 1870 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-GrodziskMazowiecki',
                nodeType: 'stationName',
                stationPrefix: 'Gr',
                stationName: 'Grodzisk Mazowiecki',
                nodePos: { x: 410, y: 1850 },
                nodePosFlipped: { x: 410, y: 2040 }
            },
            {
                nodeID: 'platform-GrodziskMazowiecki_2',
                nodeType: 'platform',
                nodePos: { x: 380, y: 1965 },
                width: 50,
                height: 10,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-GrodziskMazowiecki_1',
                nodeType: 'platform',
                nodePos: { x: 380, y: 2005 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_11',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1900 },
                text: '11',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_1',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1920 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_2',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1940 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_14',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1960 },
                text: '14',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_3',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 1980 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_3a',
                nodeType: 'trackMarker',
                nodePos: { x: 490, y: 1980 },
                text: '3a',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 340, y: 2000 },
                text: '4b',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_4',
                nodeType: 'trackMarker',
                nodePos: { x: 410, y: 2000 },
                text: '4',
            },
        ]
    },
    "GRODZISKMAZOWIECKI_PRUSZKOW": {
        "TRACKS": [
            {
                trackID: 'GRODZISKMAZOWIECKI_PRUSZKOW',
                trackSVG: `
                M570,1920 630,1920 M650,1920 710,1920 M730,1920 790,1920 M810,1920 870,1920 M890,1920 950,1920 M970,1920 1030,1920 M1050,1920 1110,1920
                M570,1940 630,1940 M650,1940 710,1940 M730,1940 790,1940 M810,1940 870,1940 M890,1940 950,1940 M970,1940 1030,1940 M1050,1940 1110,1940
                
                M570,1980 630,1980 M650,1980 710,1980 M730,1980 790,1980 M810,1980 870,1980 M890,1980 950,1980 M970,1980 1030,1980 M1050,1980 1110,1980
                M570,2000 630,2000 M650,2000 710,2000 M730,2000 790,2000 M810,2000 870,2000 M890,2000 950,2000 M970,2000 1030,2000 M1050,2000 1110,2000`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_267N',
                signalPos: { x: '640', y: '1920' },
                trainPos: { x: '625', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_266',
                signalPos: { x: '640', y: '1940' },
                trainPos: { x: '625', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_267',
                signalPos: { x: '640', y: '1920' },
                trainPos: { x: '655', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_266N',
                signalPos: { x: '640', y: '1940' },
                trainPos: { x: '655', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            //
            {
                signalName: 'L447_271N',
                signalPos: { x: '640', y: '1980' },
                trainPos: { x: '625', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_270',
                signalPos: { x: '640', y: '2000' },
                trainPos: { x: '625', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_271',
                signalPos: { x: '640', y: '1980' },
                trainPos: { x: '655', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_270N',
                signalPos: { x: '640', y: '2000' },
                trainPos: { x: '655', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_253SN',
                signalPos: { x: '720', y: '1920' },
                trainPos: { x: '705', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_252S',
                signalPos: { x: '720', y: '1940' },
                trainPos: { x: '705', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_253S',
                signalPos: { x: '720', y: '1920' },
                trainPos: { x: '735', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_252SN',
                signalPos: { x: '720', y: '1940' },
                trainPos: { x: '735', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_253N',
                signalPos: { x: '720', y: '1980' },
                trainPos: { x: '705', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_252',
                signalPos: { x: '720', y: '2000' },
                trainPos: { x: '705', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_253',
                signalPos: { x: '720', y: '1980' },
                trainPos: { x: '735', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_252N',
                signalPos: { x: '720', y: '2000' },
                trainPos: { x: '735', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_237SN',
                signalPos: { x: '800', y: '1920' },
                trainPos: { x: '785', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_238S',
                signalPos: { x: '800', y: '1940' },
                trainPos: { x: '785', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_237S',
                signalPos: { x: '800', y: '1920' },
                trainPos: { x: '815', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_238SN',
                signalPos: { x: '800', y: '1940' },
                trainPos: { x: '815', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_237N',
                signalPos: { x: '800', y: '1980' },
                trainPos: { x: '785', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_238',
                signalPos: { x: '800', y: '2000' },
                trainPos: { x: '785', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_237',
                signalPos: { x: '800', y: '1980' },
                trainPos: { x: '815', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_238N',
                signalPos: { x: '800', y: '2000' },
                trainPos: { x: '815', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_223SN',
                signalPos: { x: '880', y: '1920' },
                trainPos: { x: '865', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_222S',
                signalPos: { x: '880', y: '1940' },
                trainPos: { x: '865', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_223S',
                signalPos: { x: '880', y: '1920' },
                trainPos: { x: '895', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_222SN',
                signalPos: { x: '880', y: '1940' },
                trainPos: { x: '895', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_223N',
                signalPos: { x: '880', y: '1980' },
                trainPos: { x: '865', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_228',
                signalPos: { x: '880', y: '2000' },
                trainPos: { x: '865', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_223',
                signalPos: { x: '880', y: '1980' },
                trainPos: { x: '895', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_228N',
                signalPos: { x: '880', y: '2000' },
                trainPos: { x: '895', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_207SN',
                signalPos: { x: '960', y: '1920' },
                trainPos: { x: '945', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_208S',
                signalPos: { x: '960', y: '1940' },
                trainPos: { x: '945', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_207S',
                signalPos: { x: '960', y: '1920' },
                trainPos: { x: '975', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_208SN',
                signalPos: { x: '960', y: '1940' },
                trainPos: { x: '975', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_207N',
                signalPos: { x: '960', y: '1980' },
                trainPos: { x: '945', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_208',
                signalPos: { x: '960', y: '2000' },
                trainPos: { x: '945', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_207',
                signalPos: { x: '960', y: '1980' },
                trainPos: { x: '975', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_208N',
                signalPos: { x: '960', y: '2000' },
                trainPos: { x: '975', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_193SN',
                signalPos: { x: '1040', y: '1920' },
                trainPos: { x: '1025', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_194S',
                signalPos: { x: '1040', y: '1940' },
                trainPos: { x: '1025', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_193S',
                signalPos: { x: '1040', y: '1920' },
                trainPos: { x: '1055', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_194SN',
                signalPos: { x: '1040', y: '1940' },
                trainPos: { x: '1055', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_193N',
                signalPos: { x: '1040', y: '1980' },
                trainPos: { x: '1025', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_194',
                signalPos: { x: '1040', y: '2000' },
                trainPos: { x: '1025', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_193',
                signalPos: { x: '1040', y: '1980' },
                trainPos: { x: '1055', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_194N',
                signalPos: { x: '1040', y: '2000' },
                trainPos: { x: '1055', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'platform-Milanowek',
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
                nodeID: 'platform-Brwinów',
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
                nodeID: 'platform-Parzniew',
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
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_267S',
                nodeType: 'trackMarker',
                nodePos: { x: 600, y: 1920 },
                text: '267S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_280S',
                nodeType: 'trackMarker',
                nodePos: { x: 600, y: 1940 },
                text: '280S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_271',
                nodeType: 'trackMarker',
                nodePos: { x: 600, y: 1980 },
                text: '271',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_280',
                nodeType: 'trackMarker',
                nodePos: { x: 600, y: 2000 },
                text: '280',
            },

            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_253S',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 1920 },
                text: '253S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_266S',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 1940 },
                text: '266S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_253',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 1980 },
                text: '253',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_270',
                nodeType: 'trackMarker',
                nodePos: { x: 680, y: 2000 },
                text: '270',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_237S',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 1920 },
                text: '237S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_252S',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 1940 },
                text: '252S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_237',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 1980 },
                text: '237',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_252',
                nodeType: 'trackMarker',
                nodePos: { x: 760, y: 2000 },
                text: '252',
            },
            //
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_221S',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 1920 },
                text: '221S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_238S',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 1940 },
                text: '238S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_221',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 1980 },
                text: '221',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_238',
                nodeType: 'trackMarker',
                nodePos: { x: 840, y: 2000 },
                text: '238',
            },
            //
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_207S',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 1920 },
                text: '207S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_222S',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 1940 },
                text: '222S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_207',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 1980 },
                text: '207',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_228',
                nodeType: 'trackMarker',
                nodePos: { x: 920, y: 2000 },
                text: '228',
            },
            //
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_193S',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 1920 },
                text: '193S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_208S',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 1940 },
                text: '208S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_193',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 1980 },
                text: '193',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_208',
                nodeType: 'trackMarker',
                nodePos: { x: 1000, y: 2000 },
                text: '208',
            },
            //
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_181S',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 1920 },
                text: '181S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_194S',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 1940 },
                text: '194S',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_181',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 1980 },
                text: '181',
            },
            {
                nodeID: 'trackMarker-GrodziskMazowiecki_Pruszkow_194',
                nodeType: 'trackMarker',
                nodePos: { x: 1080, y: 2000 },
                text: '194',
            },
        ]
    },
    "3384_Pr_PRUSZKOW": { //^ Pruszkow
        "TRACKS": [
            {
                trackID: '3384_PRUSZKOW',
                /*
                T1
                T2
                
                T3
                T4
                
                SW71/70 + SW69/65/60 + SW59/57 + T5 + SW36
                SW68/63
                SW66/61
                SW58/56 + SW54/53/52ab + T7/11/13
                
                SW34/33 + SW33/30 + SW28/27
                
                SW12/9 + SW6/4 + SW3/1
                SW13/11 + SW10/7 + SW5/2
                 */
                trackSVG: `
                M1120,1920 1210,1920 M1220,1920 1320,1920 M1330,1920 1410,1920 M1420,1920 1510,1920
                M1120,1940 1210,1940 M1220,1940 1320,1940 M1330,1940 1360,1940 M1370,1940 1400,1940 M1410,1940 1510,1940
                
                M1120,1980 1210,1980 M1220,1980 1390,1980 M1400,1980 1510,1980
                M1120,2000 1210,2000 M1220,2000 1410,2000 M1420,2000 1510,2000
                
                M1140,1920 1142.5,1925 1142.5,1935 1145,1940 M1155,1940 1157.5,1945 1157.5,1955 1160,1960 1170,1960 1172.5,1965 1172.5,1975 1175,1980 M1185,1980 1187.5,1985 1187.5,1995 1190,2000 M1210,1960 M1165,1960 1210,1960 M1220,1960 1320,1960 M1330,1960 1340,1960 1342.5,1955 1342.5,1945 1345,1940
                M1140,2000 1142.5,1995 1142.5,1985 1145,1980
                M1180,1940 1182.5,1935 1182.5,1925 1185,1920
                M1200,1920 1202.5,1915 1202.5,1905 1205,1900 1215,1900 1217.5,1895 1217.5,1885 1220,1880 1230,1880 1232.5,1875 1232.5,1865 1235,1860 1250,1860 M1260,1860 1320,1860 M1225,1880 1250,1880 M1260,1880 1320,1880 M1210,1900 1250,1900 M1260,1900 1320,1900
                
                M1330,1860 1340,1860 1342.5,1865 1342.5,1875 1345,1880 M1330,1880 1355,1880 1357.5,1885 1357.5,1895 1360,1900 M1330,1900 1370,1900 1372.5,1905 1372.5,1915 1375,1920
                
                M1430,1920 1432.5,1925 1432.5,1935 1435,1940 M1465,1940 1467.5,1945 1467.5,1975 1470,1980 M1480,1980 1482.5,1985 1482.5,1995 1485,2000
                M1430,2000 1432.5,1995 1432.5,1985 1435,1980 M1445,1980 1447.5,1975 1447.5,1945 1450,1940 M1480,1940 1482.5,1935 1482.5,1925 1485,1920`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Pr_W',
                signalPos: { x: '1120', y: '1920' },
                trainPos: { x: '1105', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_X',
                signalPos: { x: '1120', y: '1940' },
                trainPos: { x: '1105', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_Y',
                signalPos: { x: '1120', y: '1980' },
                trainPos: { x: '1105', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_Z',
                signalPos: { x: '1120', y: '2000' },
                trainPos: { x: '1105', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Pr_L1',
                signalPos: { x: '1210', y: '1920' },
                trainPos: { x: '1225', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L2',
                signalPos: { x: '1210', y: '1940' },
                trainPos: { x: '1225', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L5',
                signalPos: { x: '1210', y: '1960' },
                trainPos: { x: '1225', y: '1960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L3',
                signalPos: { x: '1210', y: '1980' },
                trainPos: { x: '1225', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L4',
                signalPos: { x: '1210', y: '2000' },
                trainPos: { x: '1225', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_L13',
                signalPos: { x: '1250', y: '1860' },
                trainPos: { x: '1265', y: '1860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L11',
                signalPos: { x: '1250', y: '1880' },
                trainPos: { x: '1265', y: '1880' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L7',
                signalPos: { x: '1250', y: '1900' },
                trainPos: { x: '1265', y: '1900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS RIGHT SIDE
            {
                signalName: 'Pr_H13',
                signalPos: { x: '1330', y: '1860' },
                trainPos: { x: '1315', y: '1860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H11',
                signalPos: { x: '1330', y: '1880' },
                trainPos: { x: '1315', y: '1880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H7',
                signalPos: { x: '1330', y: '1900' },
                trainPos: { x: '1315', y: '1900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H1',
                signalPos: { x: '1330', y: '1920' },
                trainPos: { x: '1315', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_K2',
                signalPos: { x: '1330', y: '1940' },
                trainPos: { x: '1315', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_K5',
                signalPos: { x: '1330', y: '1960' },
                trainPos: { x: '1315', y: '1960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_J2',
                signalPos: { x: '1360', y: '1940' },
                trainPos: { x: '1375', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_G1',
                signalPos: { x: '1420', y: '1920' },
                trainPos: { x: '1405', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G2',
                signalPos: { x: '1410', y: '1940' },
                trainPos: { x: '1395', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G3',
                signalPos: { x: '1400', y: '1980' },
                trainPos: { x: '1385', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G4',
                signalPos: { x: '1420', y: '2000' },
                trainPos: { x: '1405', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Pr_D',
                signalPos: { x: '1510', y: '1920' },
                trainPos: { x: '1525', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_C',
                signalPos: { x: '1510', y: '1940' },
                trainPos: { x: '1525', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_B',
                signalPos: { x: '1510', y: '1980' },
                trainPos: { x: '1525', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_A',
                signalPos: { x: '1510', y: '2000' },
                trainPos: { x: '1525', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-Pruszkow',
                nodeType: 'dispatchingPost',
                nodePos: { x: 1310, y: 2020 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-Pruszkow',
                nodeType: 'stationName',
                stationPrefix: 'Pr',
                stationName: 'Pruszków',
                nodePos: { x: 1310, y: 1830 },
                nodePosFlipped: { x: 1250, y: 2035 }
            },
            {
                nodeID: 'platform-Pruszkow',
                nodeType: 'platform',
                nodePos: { x: 1350, y: 1985 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-Pruszkow_13',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 1860 },
                text: '13',
            },
            {
                nodeID: 'trackMarker-Pruszkow_11',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 1880 },
                text: '11',
            },
            {
                nodeID: 'trackMarker-Pruszkow_7',
                nodeType: 'trackMarker',
                nodePos: { x: 1290, y: 1900 },
                text: '7',
            },
            {
                nodeID: 'trackMarker-Pruszkow_1',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1920 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-Pruszkow_2',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1940 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-Pruszkow_5',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1960 },
                text: '5',
            },
            {
                nodeID: 'trackMarker-Pruszkow_3',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 1980 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-Pruszkow_4',
                nodeType: 'trackMarker',
                nodePos: { x: 1270, y: 2000 },
                text: '4',
            },
            {
                nodeID: 'trackMarker-Pruszkow_3c',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 1980 },
                text: '3c',
            },
            {
                nodeID: 'trackMarker-Pruszkow_4b',
                nodeType: 'trackMarker',
                nodePos: { x: 1370, y: 2000 },
                text: '4b',
            },
        ]
    },
    "PRUSZKOW_WARSZAWAWLOCHY": {
        "TRACKS": [
            {
                trackID: 'PRUSZKOW_WARSZAWAWLOCHY',
                /*
                S-Tracks
                
                WGT
                
                P-Tracks
                
                Golabki
                */
                trackSVG: `
                M1520,1920 1580,1920 M1600,1920 1660,1920 M1720,1880 1815,1880 1817.5,1885 1817.5,1915 1820,1920 1840,1920 1920,1920 M1940,1920 2000,1920 M2020,1920 2032.5,1920 M2052.5,1920 2120,1920
                M1520,1940 1580,1940 M1600,1940 1660,1940 M1760,1940 1840,1940                                             1920,1940 M1940,1940 2000,1940 M2020,1940 2032.5,1940 M2052.5,1940 2120,1940
                
                M1730,1900 1790,1900 1792.5,1895 1792.5,1885 M1792.5,1875 1792.5,1805 1795,1800 1860,1800 M1880,1800 1885,1800 M1890,1800 1895,1800 M1900,1800 1905,1800 M1910,1800 1915,1800 M1920,1800 1925,1800 M1930,1800 1935,1800
                M1740,1920 1800,1920 1802.5,1915 1802.5,1885 M1802.5,1875 1802.5,1825 1805,1820 1860,1820 M1880,1820 1885,1820 M1890,1820 1895,1820 M1900,1820 1905,1820 M1910,1820 1915,1820 M1920,1820 1925,1820 M1930,1820 1935,1820
                
                M1520,1980 1580,1980 M1600,1980 1660,1980 M1680,1980 1840,1980 M1860,1980 1920,1980 M1940,1980 2000,1980 M2020,1980 2030,1980 M2055,1980 2120,1980
                M1520,2000 1580,2000 M1600,2000 1660,2000 M1680,2000 1840,2000 M1860,2000 1920,2000 M1940,2000 2000,2000 M2020,2000 2025,2000 2027.5,2005 2027.5,2035 2030,2040 2110,2040
                
                M1865,1860 1870,1860 M1875,1860 1880,1860 M1885,1860 1890,1860 M1895,1860 1900,1860 M1905,1860 1910,1860 M1915,1860 1920,1860 M1940,1860 2000,1860
                M1865,1880 1870,1880 M1875,1880 1880,1880 M1885,1880 1890,1880 M1895,1880 1900,1880 M1905,1880 1910,1880 M1915,1880 1920,1880 M1940,1880 2000,1880`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_135SN',
                signalPos: { x: '1590', y: '1920' },
                trainPos: { x: '1575', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_140S',
                signalPos: { x: '1590', y: '1940' },
                trainPos: { x: '1575', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_135S',
                signalPos: { x: '1590', y: '1920' },
                trainPos: { x: '1605', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_140SN',
                signalPos: { x: '1590', y: '1940' },
                trainPos: { x: '1605', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            //
            {
                signalName: 'L447_139N',
                signalPos: { x: '1590', y: '1980' },
                trainPos: { x: '1575', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_140',
                signalPos: { x: '1590', y: '2000' },
                trainPos: { x: '1575', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_139',
                signalPos: { x: '1590', y: '1980' },
                trainPos: { x: '1605', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_140N',
                signalPos: { x: '1590', y: '2000' },
                trainPos: { x: '1605', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //*
            //* WGT SIGNALS
            //*
            {
                signalName: 'WGT_B',
                signalPos: { x: '1870', y: '1800' },
                trainPos: { x: '1855', y: '1800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WGT_A',
                signalPos: { x: '1870', y: '1820' },
                trainPos: { x: '1855', y: '1820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WGT_D',
                signalPos: { x: '1870', y: '1800' },
                trainPos: { x: '1885', y: '1800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WGT_C',
                signalPos: { x: '1870', y: '1820' },
                trainPos: { x: '1885', y: '1820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //*
            //* ABS REG-TRACK AT JOZEFINOW 
            //*
            {
                signalName: 'L447_127N',
                signalPos: { x: '1670', y: '1980' },
                trainPos: { x: '1655', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_128',
                signalPos: { x: '1670', y: '2000' },
                trainPos: { x: '1655', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_127',
                signalPos: { x: '1670', y: '1980' },
                trainPos: { x: '1685', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_128N',
                signalPos: { x: '1670', y: '2000' },
                trainPos: { x: '1685', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //*
            //* ABS REG-TRACK AFTER JOZEFINOW
            //*
            {
                signalName: 'L447_117N',
                signalPos: { x: '1850', y: '1980' },
                trainPos: { x: '1835', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_116',
                signalPos: { x: '1850', y: '2000' },
                trainPos: { x: '1835', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_117',
                signalPos: { x: '1850', y: '1980' },
                trainPos: { x: '1865', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_116N',
                signalPos: { x: '1850', y: '2000' },
                trainPos: { x: '1865', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L1_101SN',
                signalPos: { x: '1930', y: '1920' },
                trainPos: { x: '1915', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_102S',
                signalPos: { x: '1930', y: '1940' },
                trainPos: { x: '1915', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_101S',
                signalPos: { x: '1930', y: '1920' },
                trainPos: { x: '1945', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_102SN',
                signalPos: { x: '1930', y: '1940' },
                trainPos: { x: '1945', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            //
            {
                signalName: 'L447_101N',
                signalPos: { x: '1930', y: '1980' },
                trainPos: { x: '1915', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_102',
                signalPos: { x: '1930', y: '2000' },
                trainPos: { x: '1915', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_101',
                signalPos: { x: '1930', y: '1980' },
                trainPos: { x: '1945', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_102N',
                signalPos: { x: '1930', y: '2000' },
                trainPos: { x: '1945', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L1_87SN',
                signalPos: { x: '2010', y: '1920' },
                trainPos: { x: '1995', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_86S',
                signalPos: { x: '2010', y: '1940' },
                trainPos: { x: '1995', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_87S',
                signalPos: { x: '2010', y: '1920' },
                trainPos: { x: '2060', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_86SN',
                signalPos: { x: '2010', y: '1940' },
                trainPos: { x: '2060', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_87N',
                signalPos: { x: '2010', y: '1980' },
                trainPos: { x: '1995', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_86',
                signalPos: { x: '2010', y: '2000' },
                trainPos: { x: '1995', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_87',
                signalPos: { x: '2010', y: '1980' },
                trainPos: { x: '2060', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_86N',
                signalPos: { x: '2010', y: '2000' },
                trainPos: { x: '2035', y: '2040' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'platform-Piastów',
                nodeType: 'platform',
                nodePos: { x: 1690, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-Piastów',
                nodeType: 'simpleText',
                nodePos: { x: 1710, y: 1965 },
                text: 'Piastów',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'platform-WarszUrsusNiedzwiedek',
                nodeType: 'platform',
                nodePos: { x: 1880, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'simpleText-po-WarszUrsusNiedzwiedek',
                nodeType: 'simpleText',
                nodePos: { x: 1870, y: 2020 },
                text: 'W. Ursus Niedźwiadek',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'platform-WarszUrsus_1',
                nodeType: 'platform',
                nodePos: { x: 1960, y: 1985 },
                width: 40,
                height: 10,
                text: ''
            },
            {
                nodeID: 'platform-WarszUrsus_2',
                nodeType: 'platform',
                nodePos: { x: 1960, y: 2005 },
                width: 40,
                height: 7.5,
                text: ''
            },
            {
                nodeID: 'simpleText-po-WarszUrsus',
                nodeType: 'simpleText',
                nodePos: { x: 1980, y: 1965 },
                text: 'Warszawa Ursus',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_135S',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1920 },
                text: '135S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_148S',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1940 },
                text: '148S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_139',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 1980 },
                text: '139',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_148',
                nodeType: 'trackMarker',
                nodePos: { x: 1550, y: 2000 },
                text: '148',
            },
            //
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_127S',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1920 },
                text: '127S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_140S',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1940 },
                text: '140S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_127',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 1980 },
                text: '127',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_140',
                nodeType: 'trackMarker',
                nodePos: { x: 1630, y: 2000 },
                text: '140',
            },
            //
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_117',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 1980 },
                text: '117',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_128',
                nodeType: 'trackMarker',
                nodePos: { x: 1760, y: 2000 },
                text: '128',
            },
            //
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_101S',
                nodeType: 'trackMarker',
                nodePos: { x: 1870, y: 1920 },
                text: '101S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_116S',
                nodeType: 'trackMarker',
                nodePos: { x: 1840, y: 1940 },
                text: '116S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_101',
                nodeType: 'trackMarker',
                nodePos: { x: 1890, y: 1980 },
                text: '101',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_116',
                nodeType: 'trackMarker',
                nodePos: { x: 1890, y: 2000 },
                text: '116',
            },
            //
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_87S',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1920 },
                text: '87S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_102S',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1940 },
                text: '102S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_87',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1980 },
                text: '87',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_102',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 2000 },
                text: '102',
            },
            //
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_73S',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 1920 },
                text: '73S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_86S',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 1940 },
                text: '86S',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_73',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 1980 },
                text: '73',
            },
            {
                nodeID: 'trackMarker-Pruszkow_WarszawaWlochy_86',
                nodeType: 'trackMarker',
                nodePos: { x: 2070, y: 2040 },
                text: '86',
            },
        ]
    },
    "1539_Jz_JOZEFINOW": { //^ Jozefinow
        "TRACKS": [
            {
                trackID: '0000_JOZEFINOW',
                trackSVG: `
                M1670,1920 1690,1920 1692.5,1915 1692.5,1885 1695,1880 1710,1880 
                M1670,1940 1750,1940
                
                M1690,1920 1710,1920 1712.5,1915 1712.5,1905 1715,1900 1720,1900 
                M1720,1940 1722.5,1935 1722.5,1925 1725,1920 1730,1920`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'Jz_E',
                signalPos: { x: '1670', y: '1920' },
                trainPos: { x: '1655', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_F',
                signalPos: { x: '1670', y: '1940' },
                trainPos: { x: '1655', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_C',
                signalPos: { x: '1710', y: '1880' },
                trainPos: { x: '1725', y: '1880' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_D',
                signalPos: { x: '1720', y: '1900' },
                trainPos: { x: '1735', y: '1900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_B',
                signalPos: { x: '1730', y: '1920' },
                trainPos: { x: '1745', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_A',
                signalPos: { x: '1750', y: '1940' },
                trainPos: { x: '1765', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'stationName-Jozefinow',
                nodeType: 'stationName',
                stationPrefix: 'Jz',
                stationName: 'Józefinów',
                nodePos: { x: 1710, y: 1845 },
                nodePosFlipped: { x: 1710, y: 1845 }
            },
            {
                nodeID: 'simpleText-LCS_Jozefinow',
                nodeType: 'simpleText',
                nodePos: { x: 1710, y: 1860 },
                text: 'Controlled by Pruszkow',
                textSize: phFontSize,
                strokeWidth: 0.5,
                textColor: 'white'
            },
        ]
    },
    "4811_Wl_WARSZAWAWLOCHY": { //^ Warszawa Wlochy
        "TRACKS": [
            {
                trackID: '4811_WARSZAWAWLOCHY',
                /*
                T1
                T?
                T3
                T4
                T4

                SW10/9ab + SW9cd/7ab
                SW12/11 + SW8/6ab
                
                DKW/4/5/6/7
                
                SW5cd/2ab + SW2cd/1
                SW4cd/3
                */
                trackSVG: `
                M2130,1920 2160,1920 M2170,1920 2370,1920
                M2130,1940 2370,1940
                
                M2130,1980 2160,1980 M2170,1980 2230,1980 M2240,1980 2360,1980
                
                M2130,2040 2230,2040 M2240,2040 2360,2040
                
                M2010,1860 2045,1860 2047.5,1865 2047.5,1995 2050,2000 2055,2000 M2065,2000 2130,2000 M2140,2000 2150,2000 2152.5,1995 2152.5,1985 2155,1980
                M2040,1860 2060,1860 M2070,1860 2130,1860 M2140,1860 2150,1860 2152.5,1865 2152.5,1915 2155,1920
                
                M2010,1880 2035,1880 2037.5,1885 2037.5,2015 2040,2020 2115,2020 M2125,2020 2230,2020 M2240,2020 2360,2020
                
                
                M2250,1920 2252.5,1925 2252.5,1935 2255,1940 M2265,1940 2267.5,1945 2267.5,1975 2270,1980
                M2250,2020 2252.5,2025 2252.5,2035 2255,2040 M2265,2040 2267.5,2035 2267.5,2025 2270,2020
                
                M2280,1980 2320,2020 M2280,2020 2320,1980
                
                M2330,1980 2332.5,1975 2332.5,1945 2335,1940 M2345,1940 2347.5,1935 2347.5,1925 2350,1920
                M2330,2020 2332.5,2025 2332.5,2035 2335,2040`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //*
            //* SIGNALS Warszawa Golabki
            //*
            {
                signalName: 'Gl_A',
                signalPos: { x: '1930', y: '1860' },
                trainPos: { x: '1945', y: '1860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gl_B',
                signalPos: { x: '1930', y: '1880' },
                trainPos: { x: '1945', y: '1880' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gl_D',
                signalPos: { x: '1930', y: '1860' },
                trainPos: { x: '1915', y: '1860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gl_C',
                signalPos: { x: '1930', y: '1880' },
                trainPos: { x: '1915', y: '1880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ SIGNALS UPPER LEFT SIDE
            {
                signalName: 'Wl_Z',
                signalPos: { x: '2010', y: '1860' },
                trainPos: { x: '1995', y: '1860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_V',
                signalPos: { x: '2010', y: '1880' },
                trainPos: { x: '1995', y: '1880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_Y',
                signalPos: { x: '2060', y: '1860' },
                trainPos: { x: '2075', y: '1860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_P',
                signalPos: { x: '2140', y: '1860' },
                trainPos: { x: '2125', y: '1860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Wl_R',
                signalPos: { x: '2130', y: '1920' },
                trainPos: { x: '2115', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_S',
                signalPos: { x: '2130', y: '1940' },
                trainPos: { x: '2115', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_T',
                signalPos: { x: '2130', y: '1980' },
                trainPos: { x: '2115', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_X',
                signalPos: { x: '2055', y: '2000' },
                trainPos: { x: '2070', y: '2000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_U',
                signalPos: { x: '2140', y: '2000' },
                trainPos: { x: '2125', y: '2000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_L',
                signalPos: { x: '2115', y: '2020' },
                trainPos: { x: '2130', y: '2020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_W',
                signalPos: { x: '2120', y: '2040' },
                trainPos: { x: '2105', y: '2040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_K',
                signalPos: { x: '2120', y: '2040' },
                trainPos: { x: '2135', y: '2040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Wl_N',
                signalPos: { x: '2160', y: '1920' },
                trainPos: { x: '2175', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_M',
                signalPos: { x: '2160', y: '1980' },
                trainPos: { x: '2175', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Wl_G',
                signalPos: { x: '2240', y: '1980' },
                trainPos: { x: '2225', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_H',
                signalPos: { x: '2240', y: '2020' },
                trainPos: { x: '2225', y: '2020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_J',
                signalPos: { x: '2240', y: '2040' },
                trainPos: { x: '2225', y: '2040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNAL RIGHT SIDE
            {
                signalName: 'Wl_E',
                signalPos: { x: '2370', y: '1920' },
                trainPos: { x: '2385', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_D',
                signalPos: { x: '2370', y: '1940' },
                trainPos: { x: '2385', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_C',
                signalPos: { x: '2370', y: '1980' },
                trainPos: { x: '2385', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_B',
                signalPos: { x: '2370', y: '2020' },
                trainPos: { x: '2385', y: '2020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_A',
                signalPos: { x: '2370', y: '2040' },
                trainPos: { x: '2385', y: '2040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'dispatchingPost-WarszawaWlochy',
                nodeType: 'dispatchingPost',
                nodePos: { x: 2250, y: 2050 },
                postType: 'computer'
            },
            {
                nodeID: 'stationName-WarszawaWlochy',
                nodeType: 'stationName',
                stationPrefix: 'Wl',
                stationName: 'Warszawa Włochy',
                nodePos: { x: 2260, y: 1880 },
                nodePosFlipped: { x: 2150, y: 2080 }
            },
            {
                nodeID: 'platform-WarszawaWlochy_2',
                nodeType: 'platform',
                nodePos: { x: 2170, y: 1985 },
                width: 60,
                height: 30,
                text: 'Peron II'
            },
            {
                nodeID: 'platform-WarszawaWlochy_1',
                nodeType: 'platform',
                nodePos: { x: 2190, y: 2045 },
                width: 40,
                height: 10,
                text: 'Peron I'
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_1G',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1860 },
                text: '1G',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_2G',
                nodeType: 'trackMarker',
                nodePos: { x: 1970, y: 1880 },
                text: '2G',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_1a',
                nodeType: 'trackMarker',
                nodePos: { x: 2100, y: 1860 },
                text: '1a',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_3a',
                nodeType: 'trackMarker',
                nodePos: { x: 2080, y: 2000 },
                text: '3a',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_1',
                nodeType: 'trackMarker',
                nodePos: { x: 2200, y: 1920 },
                text: '1',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_3',
                nodeType: 'trackMarker',
                nodePos: { x: 2200, y: 1980 },
                text: '3',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_2',
                nodeType: 'trackMarker',
                nodePos: { x: 2165, y: 2020 },
                text: '2',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_4',
                nodeType: 'trackMarker',
                nodePos: { x: 2165, y: 2040 },
                text: '4',
            },
        ]
    },
    "WARSZAWAWLOCHY_WARSZAWAZACHODNIA": {
        "TRACKS": [
            {
                trackID: 'WARSZAWAWLOCHY_WARSZAWAZACHODNIA_1',
                trackSVG: `
                M2380,1920 2440,1920 M2460,1920 2520,1920 M2530,1920 2540,1920 2550,1930
                M2380,1940 2440,1940 M2460,1940 2520,1940 M2530,1940 2540,1940 2550,1950
                M2380,1980 2440,1980 M2460,1980 2520,1980 M2530,1980 2540,1980 2550,1990
                M2380,2020 2440,2020 M2460,2020 2520,2020 M2530,2020 2540,2020 2550,2030
                M2380,2040 2440,2040 M2460,2040 2520,2040 M2530,2040 2540,2040 2550,2050`,
                trackColor: 'gray'
            },
            {
                trackID: 'WARSZAWAWLOCHY_WARSZAWAZACHODNIA_2',
                trackSVG: `
                M10,2190 20,2200 30,2200 M40,2200 180,2200
                M10,2210 20,2220 30,2220 M40,2220 180,2220
                
                M10,2250 20,2260 30,2260 M40,2260 100,2260 M120,2260 180,2260
                M10,2290 20,2300 30,2300 M40,2300 100,2300 M120,2300 180,2300
                M10,2310 20,2320 30,2320 M40,2320 100,2320 M120,2320 180,2320`,
                trackColor: 'gray'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L447_63N',
                signalPos: { x: '2370', y: '1980' },
                trainPos: { x: '2355', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_62L',
                signalPos: { x: '2370', y: '2020' },
                trainPos: { x: '2355', y: '2020' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_62',
                signalPos: { x: '2370', y: '2040' },
                trainPos: { x: '2355', y: '2040' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L1_55SN',
                signalPos: { x: '2450', y: '1920' },
                trainPos: { x: '2435', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_60S',
                signalPos: { x: '2450', y: '1940' },
                trainPos: { x: '2435', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_57N',
                signalPos: { x: '2450', y: '1980' },
                trainPos: { x: '2435', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_56L',
                signalPos: { x: '2450', y: '2020' },
                trainPos: { x: '2435', y: '2020' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_56',
                signalPos: { x: '2450', y: '2040' },
                trainPos: { x: '2435', y: '2040' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L1_55S',
                signalPos: { x: '2450', y: '1920' },
                trainPos: { x: '2465', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_60SN',
                signalPos: { x: '2450', y: '1940' },
                trainPos: { x: '2465', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_57',
                signalPos: { x: '2450', y: '1980' },
                trainPos: { x: '2465', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L3_56LN',
                signalPos: { x: '2450', y: '2020' },
                trainPos: { x: '2465', y: '2020' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_56N',
                signalPos: { x: '2450', y: '2040' },
                trainPos: { x: '2465', y: '2040' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            //
            {
                signalName: 'L1_45SN',
                signalPos: { x: '2530', y: '1920' },
                trainPos: { x: '2515', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_46S',
                signalPos: { x: '2530', y: '1940' },
                trainPos: { x: '2515', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_49N',
                signalPos: { x: '2530', y: '1980' },
                trainPos: { x: '2515', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_52',
                signalPos: { x: '2530', y: '2020' },
                trainPos: { x: '2515', y: '2020' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_52',
                signalPos: { x: '2530', y: '2040' },
                trainPos: { x: '2515', y: '2040' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            // Warszawa Wlochy <-> Warszawa Zachodnia [R10]
            {
                signalName: 'L1_45S',
                signalPos: { x: '30', y: '2200' },
                trainPos: { x: '45', y: '2200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_46SN',
                signalPos: { x: '30', y: '2220' },
                trainPos: { x: '45', y: '2220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_49',
                signalPos: { x: '30', y: '2260' },
                trainPos: { x: '45', y: '2260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_52N',
                signalPos: { x: '30', y: '2300' },
                trainPos: { x: '45', y: '2300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_52N',
                signalPos: { x: '30', y: '2320' },
                trainPos: { x: '45', y: '2320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_43N',
                signalPos: { x: '110', y: '2260' },
                trainPos: { x: '95', y: '2260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L3_46L',
                signalPos: { x: '110', y: '2300' },
                trainPos: { x: '95', y: '2300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_42',
                signalPos: { x: '110', y: '2320' },
                trainPos: { x: '95', y: '2320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            //
            {
                signalName: 'L447_43',
                signalPos: { x: '110', y: '2260' },
                trainPos: { x: '125', y: '2260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_46LN',
                signalPos: { x: '110', y: '2300' },
                trainPos: { x: '125', y: '2300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_42N',
                signalPos: { x: '110', y: '2320' },
                trainPos: { x: '125', y: '2320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            {
                signalName: 'L447_37',
                signalPos: { x: '190', y: '2260' },
                trainPos: { x: '205', y: '2260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_38LN',
                signalPos: { x: '190', y: '2300' },
                trainPos: { x: '205', y: '2300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_36N',
                signalPos: { x: '190', y: '2320' },
                trainPos: { x: '205', y: '2320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "NODES": [
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_55S',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 1920 },
                text: '55S',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_62S',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 1940 },
                text: '62S',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_57',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 1980 },
                text: '57',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_62L',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 2020 },
                text: '62L',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_62',
                nodeType: 'trackMarker',
                nodePos: { x: 2410, y: 2040 },
                text: '62',
            },
            //
            //
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_45S',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 1920 },
                text: '45S',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_60S',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 1940 },
                text: '60S',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_49',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 1980 },
                text: '49',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_56L',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 2020 },
                text: '56L',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_56',
                nodeType: 'trackMarker',
                nodePos: { x: 2490, y: 2040 },
                text: '56',
            },


            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_39S',
                nodeType: 'trackMarker',
                nodePos: { x: 110, y: 2200 },
                text: '39S',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_46S',
                nodeType: 'trackMarker',
                nodePos: { x: 110, y: 2220 },
                text: '46S',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_43',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 2260 },
                text: '43',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_52L',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 2300 },
                text: '52L',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_50',
                nodeType: 'trackMarker',
                nodePos: { x: 70, y: 2320 },
                text: '50',
            },
            //
            //
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_37',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 2260 },
                text: '37',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_46L',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 2300 },
                text: '46L',
            },
            {
                nodeID: 'trackMarker-WarszawaWlochy_WarszawaZachodnia_42',
                nodeType: 'trackMarker',
                nodePos: { x: 150, y: 2320 },
                text: '42',
            },
        ]
    },
    "4837_WZ_WARSZAWAZACHODNIA": { //^ Warszawa Zachodnia
        "TRACKS": [
            {
                trackID: '4837_WARSZAWAZACHODNIA',
                /**/
                trackSVG: `
                M200,2200 260,2200 M265,2200 270,2200 M275,2200 280,2200 M285,2200 290,2200
                M200,2220 260,2220 M265,2220 270,2220 M275,2220 280,2220 M285,2220 290,2220
                M200,2260 260,2260 M265,2260 270,2260 M275,2260 280,2260 M285,2260 290,2260
                M200,2300 260,2300 M265,2300 270,2300 M275,2300 280,2300 M285,2300 290,2300
                M200,2320 260,2320 M265,2320 270,2320 M275,2320 280,2320 M285,2320 290,2320`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            {
                signalName: 'WDZ_W',
                signalPos: { x: '190', y: '2200' },
                trainPos: { x: '175', y: '2200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WDZ_Z',
                signalPos: { x: '190', y: '2220' },
                trainPos: { x: '175', y: '2220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WDZ_Q',
                signalPos: { x: '190', y: '2260' },
                trainPos: { x: '175', y: '2260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WDZ_T',
                signalPos: { x: '190', y: '2300' },
                trainPos: { x: '175', y: '2300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WDZ_O',
                signalPos: { x: '190', y: '2320' },
                trainPos: { x: '175', y: '2320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WDZ_U1',
                signalPos: { x: '190', y: '2200' },
                trainPos: { x: '205', y: '2200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WDZ_U2',
                signalPos: { x: '190', y: '2220' },
                trainPos: { x: '205', y: '2220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "NODES": []
    },

    // "__TEMPLATE__": {
    //     "TRACKS": [],
    //     "SIGNALS": [],
    //     "NODES": []
    // },
}