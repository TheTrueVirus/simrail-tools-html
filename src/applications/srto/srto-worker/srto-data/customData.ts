import { SimRailDataTypes } from "../../../../types/simrail-data-types";
import { AreaProps } from "../../srto";

export const DEV_TRAIN: SimRailDataTypes.FilteredTrainList = {
  TrainNoLocal: 'KORTÜR',
  Type: 'O-II-A-I',
  StartStation: 'Katowice',
  EndStation: 'Warszawa',
  Vehicles: ["Impuls/36wed-007"],
  TrainData: {
    ControlledBySteamID: null,
    ControlledByXboxID: null,
    Velocity: 50,
    SignalInFront: '2439_LC_W42',
    DistanceToSignalInFront: 1280,
    SignalInFrontSpeed: 120,
  },
  ControlledBy: 'user'
}

export const serverListOnAbortOrEmpty: SimRailDataTypes.ServerData[] = [
  {
    "ServerCode": "cz1",
    "ServerName": "CZ1 (Česky)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "de1",
    "ServerName": "DE1 (Deutsch) [KEINE EVENTS]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "de2",
    "ServerName": "DE2 (Deutsch)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "de3",
    "ServerName": "DE3 (Deutsch)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "fr1",
    "ServerName": "FR1 (Français)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int1",
    "ServerName": "INT1 (International, Europe) [NO EVENTS]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int2",
    "ServerName": "INT2 (International, Europe)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int3",
    "ServerName": "INT3 (International, North America)",
    "ServerRegion": "North_America",
    "IsActive": false,
  },
  {
    "ServerCode": "int4",
    "ServerName": "INT4 (International, Europe)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int5",
    "ServerName": "INT5 (International, Europe) [PROVISIONAL TIMETABLE]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int6-off",
    "ServerRegion": "Asia",
    "ServerName": "INT6 (International, Asia)",
    "IsActive": false,
  },
  {
    "ServerCode": "int9",
    "ServerName": "INT9 (TESTING & TRAINING SERVER) [No moderation]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "pl1",
    "ServerName": "PL1 (Polski)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "pl2",
    "ServerName": "PL2 (Polski)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "pl3",
    "ServerName": "PL3 (Polski) [BEZ WYDARZEŃ]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "pl5",
    "ServerName": "PL5 (Polski) [TYMCZASOWY ROZKŁAD JAZDY]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "xbx1",
    "ServerName": "Xbox Polski 1",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "xbx2",
    "ServerName": "Xbox International 1",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "xbx3",
    "ServerName": "Xbox International 2",
    "ServerRegion": "Europe",
    "IsActive": false,
  }
]

export const AreaList: AreaProps[] = [
  {
    areaID: 'srto_screen1',
    areaDisplayTitle: 'S1 | Katowice - Warszawa'
  },
  {
    areaID: 'srto_screen2',
    areaDisplayTitle: 'S2 | Lodz Voivodeship - [Warszawa]'
  },
  {
    areaID: 'srto_screen3',
    areaDisplayTitle: '[SOON] S3 | Krakow - Psary - Sedziszow'
  },
  {
    areaID: 'srto_screen4',
    areaDisplayTitle: '[SOON] S4 | Staszic - Dandowka - DGT - Tunel'
  },
]