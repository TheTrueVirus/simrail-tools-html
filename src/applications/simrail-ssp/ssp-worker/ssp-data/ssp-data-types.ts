export namespace SSP_DATA_TYPES {

    export interface TRACKS {
        [area: string]: TRACK[]
    }
    export interface TRACK {
        trackID: string,
        trackSVG: string,
        trackColor: string,
    }
    export interface SIGNALS {
        [area: string]: SIGNAL[]
    }
    export interface SIGNAL {
        signalName: string,
        signalPos: {
            x: string,
            y: string
        }
        isSignalABS: boolean,
        signalDirectionOnMap: 'left' | 'right'
        trainPos: {
            x: string,
            y: string
        }
    }
    export interface NODES {
        [area: string]: NODE[]
    }
    export interface NODE {
        nodeID: string,
        nodeType: 'trackMarker' | 'platform' | 'dispatchingPost' | 'stationName' | 'simpleText' | 'simpleRect' | 'trackBreakMarker' | 'differentScreenMarker',
        nodePos: {
            x: number,
            y: number
        },
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
        stationPrefix?: string
        stationName?: string
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