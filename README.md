# Perfect Crewlink

<p align="center">
  <img src="static/images/logos/sizes/256-BCL-Logo-shadow.png" alt="Perfect Crewlink logo" width="160">
</p>

<p align="center">
  <strong>A modern desktop fork of BetterCrewLink rebuilt for performance, stability, and mod support.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/App-Perfect%20Crewlink-BA68C8" alt="App: Perfect Crewlink">
  <img src="https://img.shields.io/badge/Repo-Perfect%20Crewlink-1D1A23" alt="Repo: Perfect Crewlink">
  <img src="https://img.shields.io/badge/Frontend-TypeScript%20%2B%20Vite-3178C6?logo=typescript&logoColor=white" alt="TypeScript + Vite">
  <img src="https://img.shields.io/badge/Desktop-Tauri-24C8DB?logo=tauri&logoColor=white" alt="Tauri">
  <img src="https://img.shields.io/badge/Native-Rust-000000?logo=rust&logoColor=white" alt="Rust">
  <img src="https://img.shields.io/badge/Platform-Windows%2010%2F11-0078D4?logo=windows11&logoColor=white" alt="Windows 10/11">
  <img src="https://img.shields.io/badge/Linux-AppImage-6E40C9?logo=linux&logoColor=white" alt="Linux AppImage">
</p>

Perfect Crewlink is a modern desktop fork of BetterCrewLink rebuilt around **TypeScript + Vite**,
**Tauri**, and **Rust**. It keeps the core proximity-chat experience, then pushes the desktop side
further with faster startup, lower overhead, cleaner overlay behavior, stronger window handling,
better settings flow, and better compatibility with current modded play.

## Why Perfect Crewlink

- Faster, lighter desktop runtime than the old Electron-era stack.
- Cleaner overlay lifecycle with better focus handling, fewer ghost windows, and fewer startup artifacts.
- Instant settings behavior so overlay and lobby options apply live while you edit them.
- Stronger mod support, including **AleLudu mode** for resized meeting cards.
- Dedicated Windows and Linux packaging, including AppImage releases.
- A codebase that is far easier to build, debug, and extend than the legacy desktop client.

## What you get

- Full desktop rewrite centered on **TypeScript + Tauri + Rust**
- Perfect Crewlink app branding, executable, installer, and storage identity
- AleLudu compatibility toggle for meeting overlay positioning
- Windows and Linux release support, including AppImage packaging
- Public lobby browser with in-app access
- More overlay positioning options and live overlay preview while editing settings
- Bug fixes across startup, overlay visibility, settings sync, lobby publishing, and lobby browser windows
- Better window management around focus, taskbar behavior, and shutdown
- Repo layout and tooling that are ready to clone, install, and build immediately

## Highlights

| Area | What changed |
| --- | --- |
| Identity | Dedicated executable, installer, bundle identifier, and local settings storage |
| Overlay | Cleaner startup, focus, visibility, and settings behavior |
| Public lobbies | Faster access, more reliable publishing, cleaner browser window |
| Mod support | Includes **AleLudu mode** for custom meeting-card layouts |
| Packaging | Windows installer plus Linux AppImage release assets |

## Legacy vs rewrite

| Area | Legacy BetterCrewLink desktop | Perfect Crewlink |
| --- | --- | --- |
| Desktop shell | Older desktop stack | Tauri desktop shell |
| Native integration | Harder to maintain | Rust-native window/process layer |
| Frontend workflow | Older web tooling | TypeScript + Vite |
| Overlay behavior | More timing and lifecycle issues | Stable init sync, better focus handling, live settings updates |
| Mod compatibility | Generic support | Includes **AleLudu mode** for custom meeting card layouts |
| Settings flow | Some settings only applied after closing dialogs | Settings apply immediately where expected |
| Build flow | Older docs and mixed tooling | `npm` + Tauri workflow documented end to end |

## What ships here

This repository builds the **Perfect Crewlink** desktop app for Windows and Linux, with its own
desktop binaries, installer output, bundle identifier, and release assets.

## Quick start

### Prerequisites

- Node.js 20 or newer
- Rust stable toolchain
- Windows 10 or Windows 11 with Visual Studio 2022 Build Tools and WebView2 Runtime
- Or Ubuntu 22.04+ with GTK/WebKitGTK build dependencies for Tauri

### Run in development

```bash
git clone https://github.com/artriy/Perfect-Crewlink.git
cd Perfect-Crewlink
npm ci
npm run tauri -- dev
```

### Build a release locally

```bash
npm run typecheck
npm run tauri -- build
```

Build outputs:

- `src-tauri/target/release/perfectcrewlink.exe`
- `src-tauri/target/release/bundle/nsis/Perfect Crewlink_3.1.4_x64-setup.exe`
- `src-tauri/target/release/bundle/appimage/*.AppImage`

## Development notes

- The renderer lives in [`src/renderer`](src/renderer).
- Shared desktop/game contracts live in [`src/common`](src/common).
- Native windowing, process attach, and overlay logic live in [`src-tauri`](src-tauri).
- Static assets and translations live in [`static`](static).
- Tauri helper scripts live in [`scripts`](scripts).

Useful commands:

```bash
npm ci
npm run dev:web
npm run tauri -- dev
npm run typecheck
npm run build
npm run tauri -- build
```

## Compatibility focus

This desktop rewrite is aimed at modern proximity chat usage on Windows and includes the recent
fixes for:

- instant settings sync
- lobby browser behavior
- overlay focus and visibility
- alt-tab and taskbar interaction
- public lobby publishing
- AleLudu meeting-card compatibility

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow, build requirements, and pull
request expectations.

## Credits

- Original BetterCrewLink project: [OhMyGuus/BetterCrewLink](https://github.com/OhMyGuus/BetterCrewLink)
- Original CrewLink project: [ottomated/CrewLink](https://github.com/ottomated/CrewLink)

Perfect Crewlink builds on that lineage, then takes the desktop client in a different direction
with a Tauri + Rust rewrite, stronger desktop behavior, and a release flow built for current use.

## License

Distributed under the GNU General Public License v3.0. See [LICENSE](LICENSE).
