import { SCREENID } from "../../srto"

export namespace SRTO_DataTypes {

/*
^           NEW TYPES FOR NEW DATA STRUCTURE
*/

    export type ScreenProps = {
        [screenNode: string]: ScreenNodeType
    }
    export type ScreenNodeType = {
        TRACKS: TRACK_NODE[]
        SIGNALS: SIGNAL[]
        NODES: NODE[]
    }

    export type TRACKS = {
        [K in SCREENID]: TRACK_SECTIONS
    }
    export interface TRACK_SECTIONS {
        [sectionid: string]: TRACK_NODE[]
    }
    export interface TRACK_NODE {
        trackID: string,
        trackSVG: string,
        trackColor: string,
    }
    export type SIGNALS = {
        [K in SCREENID]: SIGNAL_SECTIONS
    }
    export interface SIGNAL_SECTIONS {
        [sectionid: string]: SIGNAL[]
    }
    export interface SIGNAL {
        signalName: string,
        signalPos: {
            x: string,
            y: string
        }
        isSignalABS?: boolean,
        signalDirectionOnMap: 'left' | 'right'
        trainPos: {
            x: string,
            y: string
        }
        trainPosDistance?: { distanceToSignal: number, x: number, y: number, switchDirection?: boolean }[]
        signalType?: string
        invisibleSignal?: boolean
        /*
         * Signal-Typen:
         *      - "abs_standard"
         *      - "abs_last"
         *      - "apo-red-green"
         *      - "apo-red-green-white" (Sz??)
         *      - "station_standard" // 5 lamps and bars if needed
         *      - "station_sz" // only 2 lamps (red-white)
         */
    }
    export type NODES = {
        [K in SCREENID]: NODE_SECTIONS
    }
    export interface NODE_SECTIONS {
        [sectionid: string]: NODE[]
    }
    export interface NODE {
        nodeID: string,
        nodeType: 'trackMarker' | 'platform' | 'dispatchingPost' | 'stationName' | 'simpleText' | 'simpleRect' | 'trackBreakMarker' | 'differentScreenMarker',
        nodePos?: {
            x: number,
            y: number
        },
        nodePosFlipped?: {
            x: number,
            y: number,
        }
        breakMarker?: {
            firstMarker: {
                x: number
                y: number
            }
            secondMarker: {
                x: number
                y: number
            }
        }
        postType?: 'relay' | 'computer'
        postRotationAngle?: number,
        stationPrefix?: string
        stationName?: string
        seperateDisplayName?: string
        lcsControlledBy?: string
        botStation?: boolean
        height?: number,
        width?: number,
        textColor?: string,
        rectColor?: string,
        fillColor?: string,
        strokeWidth?: number,
        textSize?: number,
        text?: string,
    }
}