# Perfect Crewlink

<p align="center">
  <img src="static/images/logos/sizes/256-BCL-Logo-shadow.png" alt="Perfect Crewlink logo" width="160">
</p>

<p align="center">
  <strong>A full desktop rewrite of BetterCrewLink built for a faster, cleaner, separate install.</strong>
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

Perfect Crewlink is the shipped app name now. The desktop client in this repository is a complete
rewrite of the original BetterCrewLink desktop app: **TypeScript + Vite** in the renderer,
**Tauri** for the desktop shell, and **Rust** for native window, process, and overlay work.

This repo exists because the old BetterCrewLink desktop path was carrying too much legacy weight.
The current app is not a thin fork. It is a practical rewrite focused on faster startup, lower
desktop overhead, better window behavior, cleaner overlay handling, easier iteration, and much
stronger mod compatibility.

## Why Perfect Crewlink

- Separate app identity so it can be installed alongside the original BetterCrewLink without
  collisions in executable names, installer identity, bundle identifier, or local settings.
- Faster, lighter desktop runtime than the old Electron-era path.
- Cleaner overlay lifecycle with better focus handling, fewer ghost windows, and fewer startup artifacts.
- Instant settings behavior so overlay and lobby options apply live while you edit them.
- Stronger mod support, including **AleLudu mode** for resized meeting cards.
- Modern build and release flow based on `npm`, Vite, Tauri, and Rust.
- First-class packaging for **Windows installers** and **Linux AppImage** releases.

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

## Release highlights

| Area | What changed |
| --- | --- |
| Branding | The app now ships as **Perfect Crewlink**, not BetterCrewLink |
| Side-by-side install | Separate executable, installer name, bundle identifier, and local storage keys |
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

This repository builds the **Perfect Crewlink** desktop app. It now has its own executable,
installer, bundle identifier, and local storage keys so it can coexist with the original
BetterCrewLink desktop app on the same system.

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

Perfect Crewlink is inspired by the original BetterCrewLink repository structure and feature set,
but it is now its own rewritten Tauri desktop client and install target.

## License

Distributed under the GNU General Public License v3.0. See [LICENSE](LICENSE).
