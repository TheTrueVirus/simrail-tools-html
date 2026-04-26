import { useState } from "react";
import { SimRailDataTypes } from "../../types/simrail-data-types";

async function fetchData(url : string) {

    try {

        const RESULT = await fetch(url);
        if(!RESULT.ok) {
            return null;
        }
        const DATA = await RESULT.json();

        if(!DATA || DATA === undefined || DATA === null) {
            return null;
        }

        return DATA;
    } catch (e) {
        console.error(e);
    }
}

async function SR_SERVER() {

    const SERVER_URL = 'https://panel.simrail.eu:8084/servers-open'

    try {
        const RAW_DATA : SimRailDataTypes.RAW_SERVER = await fetchData(SERVER_URL)
        
        if(!RAW_DATA) return null;

        const SERVER_DATA : SimRailDataTypes.ServerData[] = RAW_DATA.data;

        return SERVER_DATA;

    } catch (e) {
        console.error(e)
    }
}

async function SR_STATIONS(server : string) {
    
    if(!server) return null;

    const STATIONS_URL = `https://panel.simrail.eu:8084/stations-open?serverCode=${server}`

    try {
        const RAW_DATA : SimRailDataTypes.RAW_STATIONS = await fetchData(STATIONS_URL)

        if(!RAW_DATA) return null;

        const STATION_DATA : SimRailDataTypes.StationData[] = RAW_DATA.data;

        return STATION_DATA;
    } catch (e) {
        console.error(e)
    }
}

async function SR_TRAINS(server : string) {
    if(!server) return null

    const TRAINS_URL = `https://panel.simrail.eu:8084/trains-open?serverCode=${server}`

    try {
        const RAW_DATA : SimRailDataTypes.RAW_TRAINS = await fetchData(TRAINS_URL);

        if(!RAW_DATA) return null;

        const TRAIN_DATA : SimRailDataTypes.TrainData[] = RAW_DATA.data

        return TRAIN_DATA
    } catch (e) {

    }

}

async function SteamUser(steamid : string) {
    if(!steamid) return;

    const URL = `https://simrail-edr.emeraldnetwork.xyz/steam/${steamid}`

        try {
        const RAW_DATA : SimRailDataTypes.SteamUser = await fetchData(URL);

        if(!RAW_DATA) return null;

        const STEAM_USER : SimRailDataTypes.SteamUser = RAW_DATA

        return STEAM_USER
    } catch (e) {

    }
}


export const SR_DATA = {
    Server: SR_SERVER,
    Stations: SR_STATIONS,
    Trains: SR_TRAINS,
    SteamUser
}