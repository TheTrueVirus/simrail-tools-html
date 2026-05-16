# <b>SRTO CHANGELOG</b>
> [!NOTE]
> This changelog contains a brief overview of what has changed in every new version. I might miss sometimes something, but the most things should be in here.

> [!IMPORTANT]
> ### **This project is still under full development. You may encounter bugs!**
> #### _If you encounter any bugs or have any suggestions for improvements, let me now by writing a post into the forum thread or by opening an issue in the github repository. This will help me a lot!_

## **Version 0.3.1-alpha | HOTFIX**
Released on 16.05.2026
### <u>Changes</u>
- fixed wrong positions of nodes in the Łódź Area aswell as station names of `Łazy` and `Łazy Łc` if the screen is flipped
- added a `Controlled by Łódź Widzew` node to Łódź Marysin and adjusted the positions of those


## **Version 0.3.0-alpha**
#### Overview: New Screen "Łódź Voivodeship", Feature "Flip Screen" and some fixes
Update released on 16.05.2026
### <u>Major Changes</u>
A new screen has been added. It's observing the **Łódź Voivodeship**, currently expanding towards Koluszki</br>
A new feature "Flip Screen" has been added in the options. This will flip the whole screen to align better with dispatching panels.</br>

Logic is now checking whether there might be a possible next signal if no signal is given in the data. This is important for the Lodz Voivodeship area. The distance between several signals expands over 5 kilometers, which results `SignalInFront` beeing `null` in the data. This prediction of the next signal is not 100% correct.</br>
Left track usage can't be predicted. As soon as the train has a signal in the data, it's corrected automatically.
### <u>Additional Changes</u>
- reworked the settings a little bit
    - moved the Change Server button directly into the header
    - I will probably change it again in the next update. I'm not happy at all with it.
- added a `Change Screen` button

**Track Changes:**
- small changes on border tracks
- added the entry signal for Sosnowiec Dandowka so the train at least doesn't dissapear if leaving Sosnowiec Poludniowy
- added Dabrowa Gornicza Huta Katowice onto Dabrowa Gornicza Zabkowice
- again added missing platforms between DZ and LC (peron 2 for Sikorka and mission platforms for Wiesiólka)
- reworked the bridging in the same area
- added Przemiarki onto Lacy Lc
- added Starzyny and Sprowa onto Psary
- added missing Signal "Wl_X" at Warszawa Wlochy

#### <u>**What's to expect for the next version**</u>
- The logic gets a whole rework. The way the data gets called and prepared, the way the canvas renderes will change a bit. It's planned to poll all data together and then draw on them + an additional 2-FPS render so slight animations can be shown like Sz-Signal.
- The hover-popup will have a small change in the future.
- A window to always have the current observing train open with all information, as well as the signal (with animated changing lamps)

## **Version 0.2.3-alpha | HOTFIX**
### Hotfix: fixed signal lamps not showing in Firefox browsers
Update released on 26.04.2026
- value `r` in css-class `.signalLamp` had missing unit px
### <u>Additional Changes:</u>
- fixed track bridging at Warszawa Wlochy


## **Version 0.2.2-alpha**
#### Overview: Map extension and signal image in hover tooltip
Update released on 26.04.2026
### <u>Major Changes</u>
#### Extended the map from Szeligi down to Warszawa Wlochy

### <u>Additional Changes</u>
fix: added missing platforms between Dabrowa Gornicza Zabkowice and Lazy Lc
fix: added missing platform at Opoczo Poludnie
fix: changed station prefix of Pilichowice and Biala Rawska to its originals
- added the main vehicle into train hover tooltip
- added a signal image into the train hover tooltip (without distant signal)
- options menu will now close on focus loss (and does not open on server change via clock click)


## **Version 0.2.1-alpha**
#### Overview: Map extension, performance fix and tooltip hover of trains and signals
Update released on 23.04.2026
### <u>Major Changes</u>
#### Extended the map from Knapowka down to Szeligi
### <u>Additional Changes</u>
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



## **Version 0.2.0-alpha**
Update released on 18.04.2026
### <u>Major Changes</u>
- changed main element from svg to canvas
    - that removes 600+ svg elements in the html tree to just a single canvas
    - improves performance and stability
- It might look like its laggier than before. That's because the logic isn't the best right now. On every zoom or pan of the map, everything gets re-drawn. I plan on making that better in future versions. Besides that, the performance and stability is still improved, altho it might not look like this.<br>
**OUTDATED:** If you still want to use the old svg logic, then add a `?showSVG=true` to the url or Copy&Paste `https://thetruevirus.github.io/simrail-tools-html?showSVG=true` into your browser. Everything should look and work the same between both rendering options.
- reworked the whole header & integrated the options menu into the header
    - added a clock into the header which shows local time and selected server time
- added a footer into the visible area
    - shows train count (controlled by players / all trains)
    - shows station count (controlled by players / all stations)
    - shows current mouse coordinates
    - shows option extendedView enabled/disabled
    - on the right shows the current version of the application

### <u>Additional Changes</u>
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