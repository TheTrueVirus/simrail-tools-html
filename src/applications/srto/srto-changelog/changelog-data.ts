export const CHANGELOG_DATA = [
    // {
    //     version: '',
    //     subtitle: '',
    //     release_date: '',
    //     major_changes: null,
    //     additional_changes: null
    // },
    {
        version: '0.4.0-alpha',
        subtitle: 'MAJOR UPDATE',
        release_date: '23.07.2026',
        major_changes: `The "Łódź Voivodeship" screen has received a significant update and is nearing completion. Further changes are expected in upcoming updates as part of the planned track expansion (see Roadmap on GitHub).

The train hover tooltip now displays the name of the player currently driving the train. Dispatcher names for stations will follow in a future update, where they will be shown in a dedicated station information tooltip.`,
        additional_changes: `- Reworked signal box symbols
    - Signal boxes now render with proper rotation, matching the orientation of the dispatcher's panel
- Added a "New Version" notification for returning users on each new release — first-time visitors will not see this notification
- Added missing label "Józefinów"
- Added missing switch at Łódź Lublinek
- Corrected position of the Opoczno Południe signal box
- Added missing po "Łódź Radogoszcz Zachód" between Łódź Żabieniec and Zgierz
- Removed "to Koluszki" and "to Gałkówek" labels and added missing po "Żakowice"`
    },
    {
        version: '0.3.2-alpha',
        subtitle: 'Small fixes',
        release_date: '25.05.2026',
        major_changes: null,
        additional_changes: `- added missing platforms between Sedzice and Pabianice - stretched top row all the way to the right
- added missing platforms of "Pabianice Pólnocne", "Łódź Retkinia" and "Łódź Pabianicka"
- fixed Rozprza station Name and info text "to Gałkówek"
- switched signals 2426_LCH_F and 2426_LCH_E
        `
    },
    {
        version: '0.3.1-alpha',
        subtitle: 'HOTFIX',
        release_date: '16.05.2026',
        major_changes: null,
        additional_changes: `- fixed wrong positions of nodes in the Łódź Area aswell as station names of "Łazy" and "Łazy Łc" if the screen is flipped
- added a "Controlled by Łódź Widzew" node to "Łódź Marysin" and adjusted the positions of those`
    },
    {
        version: '0.3.0-alpha',
        subtitle: 'MAJOR UPDATE',
        release_date: '16.05.2026',
        major_changes: `A new screen has been added. It's observing the Łódź Voivodeship, currently expanding towards Koluszki
A new feature "Flip Screen" has been added in the options. This will flip the whole screen to align better with dispatching panels.

Logic is now checking whether there might be a possible next signal if no signal is given in the data. This is important for the Lodz Voivodeship area. The distance between several signals expands over 5 kilometers, which results "SignalInFront" beeing "null" in the data. This prediction of the next signal is not 100% correct.
Left track usage can't be predicted. As soon as the train has a signal in the data, it's corrected automatically.`,
        additional_changes: `- reworked the settings a little bit
    - moved the Change Server button directly into the header
    - I will probably change it again in the next update. I'm not happy at all with it.
- added a Change Screen button

Track Changes:
- small changes on border tracks
- added the entry signal for Sosnowiec Dandowka so the train at least doesn't dissapear if leaving Sosnowiec Poludniowy
- added Dabrowa Gornicza Huta Katowice onto Dabrowa Gornicza Zabkowice
- again added missing platforms between DZ and LC (peron 2 for Sikorka and mission platforms for Wiesiólka)
- reworked the bridging in the same area
- added Przemiarki onto Lacy Lc
- added Starzyny and Sprowa onto Psary
- added missing Signal "Wl_X" at Warszawa Wlochy
`
    },
    {
        version: '0.2.3-alpha',
        subtitle: 'HOTFIX',
        release_date: '26.04.2026',
        major_changes: null,
        additional_changes: `- value 'r' in css-class '.signalLamp' had missing unit px
- fixed track bridging at Warszawa Wlochy
        `
    },
    {
        version: '0.2.2-alpha',
        subtitle: null,
        release_date: '26.04.2026',
        major_changes: null,
        additional_changes: `Extended the map from Szeligi down to Warszawa Wlochy

fix: added missing platforms between Dabrowa Gornicza Zabkowice and Lazy Lc
fix: added missing platform at Opoczo Poludnie
fix: changed station prefix of Pilichowice and Biala Rawska to its originals
- added the main vehicle into train hover tooltip
- added a signal image into the train hover tooltip (without distant signal)
- options menu will now close on focus loss (and does not open on server change via clock click)`
    },
    {
        version: '0.2.1-alpha',
        subtitle: '',
        release_date: '23.04.2026',
        major_changes: null,
        additional_changes: `Extended the map from Knapowka down to Szeligi

- fixed laggy pan/zoom
    - instead of iterating the whole trainList per signal, created a map of signal and it's color on each frame (one time map of trainList per frame)
- added a hover tooltip for trains and signals
    - hovering over a train opens a small popup with the most important informations
    - hovering over a signal gives the signal name and shows if it's an ABS-Signal or a Station-Signal
- options and selected server will now save on change
    - revisiting the application will now select the latest server and enable options from last time
- Signals with a speed lower than 100 km/h will be shown in orange
- Animation of the options menu is now faster and more instant than "fancy" (by request)
- clicking on the clock now also opens the server selection menu (by request)
- removed the ability to use the svg renderer due to the lag-fix`
    },
    {
        version: '0.2.0-alpha',
        subtitle: 'MAJOR UPDATE',
        release_date: '18.04.2026',
        major_changes: `Changed main element from svg to canvas
    - that removes 600+ svg elements in the html tree to just a single canvas
    - improves performance and stability

    - added a clock into the header which shows local time and selected server time
- added a footer into the visible area
    - shows train count (controlled by players / all trains)
    - shows station count (controlled by players / all stations)
    - shows current mouse coordinates
    - shows option extendedView enabled/disabled
    - on the right shows the current version of the application`,
        additional_changes: `- shifted all elements and moved them closer together
- continued tracks from Lazy Lb to Knapowka
- added pan boundaries
    - by default, you can't pan Out-of-Bounds
    - enable the option 'Allow Extended View' in the options to still extend your pan outside the designated area if you need it
- changed train color
    - train color now shows blue if the train is controlled by a player, otherwise the train stays gray if controlled by a bot
- changed several font sizes of text elements
    - station names
    - ph names
    - different area marker (e.g. Gliwice)
- added track break markers
    - A: Bedzin <-> Dabrowa Gornicza
    - B: Lazy Lb <-> Lazy La
    - C: CMK [ Gora Wlodowska <-> Psary ]`
    }
]