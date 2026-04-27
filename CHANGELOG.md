# SRTO CHANGELOG
> [!NOTE]
> This changelog contains a brief overview of what has changed in every new version. I might miss sometimes something, but the most things should be in here.

> [!IMPORTANT]
> ### This project is still under full development. You may encounter bugs!
> #### If you encounter any bugs or have any suggestions for improvements, let me now by writing a post into the forum thread or by opening an issue in the github repository. This will help me a lot!

## Version 0.2.3-alpha
### Hotfix: fixed signal lamps not showing in Firefox browsers
Update released on 26.04.2026
- value `r` in css-class `.signalLamp` had missing unit px
#### Additional Changes:
- fixed track bridging at Warszawa Wlochy

## Version 0.2.2-alpha
#### Overview: Map extension and signal image in hover tooltip
Update released on 26.04.2026
## Changes
#### **Extended the map from Szeligi down to Warszawa Wlochy**
fix: added missing platforms between Dabrowa Gornicza Zabkowice and Lazy Lc
fix: added missing platform at Opoczo Poludnie
fix: changed station prefix of Pilichowice and Biala Rawska to its originals
- added the main vehicle into train hover tooltip
- added a signal image into the train hover tooltip (without distant signal)
- options menu will now close on focus loss (and does not open on server change via clock click)

## Version 0.2.1-alpha
#### Overview: Map extension, performance fix and tooltip hover of trains and signals
Update released on 23.04.2026
## Changes
#### **Extended the map from Knapowka down to Szeligi**
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
- removed the ability to use the svg renderer due to the lag-fix

## Version 0.2.0-alpha:
Released on 18.04.2026
### Major changes
- changed main element from svg to canvas
    - that removes 600+ svg elements in the html tree to just a single canvas
    - improves performance and stability
- It might look like its laggier than before. That's because the logic isn't the best right now. On every zoom or pan of the map, everything gets re-drawn. I plan on making that better in future versions. Besides that, the performance and stability is still improved, altho it might not look like this. If you still want to use the old svg logic, then add a `?showSVG=true` to the url or Copy&Paste `https://thetruevirus.github.io/simrail-tools-html?showSVG=true` into your browser. Everything should look and work the same between both rendering options.
- reworked the whole header & integrated the options menu into the header
    - added a clock into the header which shows local time and selected server time
- added a footer into the visible area
    - shows train count (controlled by players / all trains)
    - shows station count (controlled by players / all stations)
    - shows current mouse coordinates
    - shows option extendedView enabled/disabled
    - on the right shows the current version of the application

### Changes and additions on the map
- shifted all elements and moved them closer together
- continued tracks from Lazy Lb to Knapowka
- added pan boundaries
    - by default, you can't pan Out-of-Bounds
    - enable the option `Allow Extended View` in the options to still extend your pan outside the designated area if you need it
- changed train color
    - train color now shows blue if the train is controlled by a player, otherwise the train stays gray if controlled by a bot
- changed several font sizes of text elements
    - station names
    - ph names
    - different area marker (e.g. Gliwice)
- added track break markers
    - A: Bedzin <-> Dabrowa Gornicza
    - B: Lazy Lb <-> Lazy La
    - C: CMK [ Gora Wlodowska <-> Psary ]