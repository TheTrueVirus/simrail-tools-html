# Welcome to SimRail Track Overview (SRTO)

SRTO is a tool for dispatchers and train drivers. It shows trains on the track and signals on a visual track map.

This project is still under active development, so not all tracks are available yet. More tracks will be added with future updates. The goal is to publish updates weekly to keep everything current.

> [!NOTE]
> For a full changelog of this project, go to the [CHANGELOG](CHANGELOG.md)

> [!CAUTION]
> This application is still in active development. You may encounter bugs or unfinished features.  
> If you find an issue, please report it in the SimRail forum thread: [SimRail Forum Topic](https://forum.simrail.eu/topic/12629-simrail-track-overview-very-very-very-first-version/)  
> You can also open an issue in this repository. Feature requests and improvement suggestions are welcome too.  
> Your feedback helps improve the project. Thank you for your support.

## How to use SRTO

At the moment, you can:

- Zoom the map with your mouse wheel
- Pan the map by clicking and dragging, like in most map tools

More features, such as timetables and train tracking, are planned for later updates.

Current options include:

- Allowing map movement outside the normal map bounds (disabled by default)
- Switching station labels between full names and prefixes

A major change from version 0.1.0-alpha to 0.2.0-alpha is the rendering method, which changed from SVG to canvas.

The SVG renderer has been removed as of version `0.2.1-alpha` due to the lag-fix.

## Planned features (not finalized)

- [ ] Built-in changelog on the website with one-time visibility and a manual reopen option
- [ ] Train timetable and train tracking
- [ ] User-based color customization options
- [x] Saving options and latest server selections
