export namespace SimRailDataTypes {

    export interface RAW_SERVER {
        result: string
        data: ServerData[]
    }

    export interface ServerData {
        ServerCode: string,
        ServerName: string,
        ServerRegion: string,
        IsActive: boolean,
        id: string
    }

    export interface RAW_STATIONS {
        result: string,
        data: StationData[]
    }

    export interface StationData {
        Name: string,
        Prefix: string,
        DifficultyLevel: number,
        Latititude: number,
        Longitude: number,
        MainImageURL: string,
        AdditionalImage1URL: string,
        AdditionalImage2URL: string,
        DispatchedBy: [
            {
                ServerCode: string,
                SteamId: string | null,
                XboxId: string | null
            }
        ]
        id: string
    }

    export interface RAW_TRAINS {
        result: string,
        data: TrainData[];
    }

    export interface TrainData {
        TrainNoLocal: string,
        TrainName: string,
        StartStation: string,
        EndStation: string,
        Vehicles: string[],
        ServerCode: string,
        TrainData: {
            ControlledBySteamID: string | null,
            ControlledByXboxID: string | null,
            InBorderStationArea: boolean,
            Latititute: number,
            Longitute: number,
            Velocity: number,
            SignalInFront: string,
            DistanceToSignalInFront: number,
            SignalInFrontSpeed: number,
            VDDelayedTimetableIndex: number,
            RequiredMapDLCs: string[] | null
        }
        RunId: string,
        id: string,
        Type: "bot" | "user";
    }

    export interface FilteredTrainList {
        TrainNoLocal: string
        Type: string
        StartStation: string
        EndStation: string
        Vehicles: string[]
        TrainData: {
            ControlledBySteamID: string | null,
            ControlledByXboxID: string | null,
            Velocity: number
            SignalInFront: string
            SignalInFrontSpeed: number
            DistanceToSignalInFront: number
        }
        ControlledBy: 'bot' | 'user'
    }

    export interface SteamUser {
        steamid: string,
        communityvisibilitystate: number
        profilestate: number
        personaname: string
        profileurl: string
        avatar: string
        avatarmedium: string
        avatarfull: string
        avatarhash: string
        personastate: number
        realname: string
        primaryclanid: string
        timecreated: number
        personastateflags: number
        gameserverip: string
        gameserversteamid: string
        gameextrainfo: string
        gameid: string
        loccountrycode: string
        locstatecode: string
    }
}