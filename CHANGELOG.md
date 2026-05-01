<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:C51111,50:24C8DB,100:C51111&height=140&section=header&text=Changelog&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Lobby%20alerts%2C%20smooth%20boops%2C%20and%20faint%20voice%20highlights&descSize=16&descAlignY=60&descAlign=50" width="100%" alt="Changelog"/>

<br/>

<img src="https://img.shields.io/badge/Perfect_Crewlink-v1.0.6-C51111?style=for-the-badge&logo=rocket&logoColor=white" alt="Perfect Crewlink v1.0.6"/>
&nbsp;
<img src="https://img.shields.io/badge/RELEASED-2026--05--02-24C8DB?style=for-the-badge" alt="released"/>
&nbsp;
<img src="https://img.shields.io/badge/STATUS-STABLE-2ed573?style=for-the-badge" alt="stable"/>

</div>

<img src="static/images/divider.svg" width="100%" alt="divider"/>

# <img src="https://img.shields.io/badge/v1.0.6-C51111?style=for-the-badge&logo=rocket&logoColor=white" alt="v1.0.6"/> &nbsp; The Lobby Alerts & Soft Voice Release

> **Perfect Crewlink v1.0.6** makes lobby watching useful, quiet voices visible, and notifications pleasant instead of noisy.

<div align="center">

| <img src="https://img.shields.io/badge/LOBBIES-JOINABLE_ALERTS-24C8DB?style=for-the-badge" alt="lobbies"/> | <img src="https://img.shields.io/badge/SOUND-CUSTOM_BOOPS-8b5cf6?style=for-the-badge" alt="sound"/> | <img src="https://img.shields.io/badge/VOICE-FAINT_TALKERS-2ed573?style=for-the-badge" alt="voice"/> |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Watch public lobbies until joinable                                                                        | Smooth default boop or custom audio                                                                 | Lower overlay activity thresholds                                                                    |

</div>

<img src="static/images/divider.svg" width="100%" alt="divider"/>

### <img src="https://img.shields.io/badge/-LOBBY_ALERTS-24C8DB?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/NEW-2ed573?style=flat-square"/> &nbsp; Added a bell button to Lobby Browser rows to watch a lobby until it becomes joinable.
- <img src="https://img.shields.io/badge/NEW-2ed573?style=flat-square"/> &nbsp; Watched lobbies notify when they are in the lobby, have open slots, and have a usable code.
- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; If desktop notifications are blocked, the lobby window still flashes in the taskbar.

### <img src="https://img.shields.io/badge/-NOTIFICATION_SOUND-8b5cf6?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/NEW-2ed573?style=flat-square"/> &nbsp; Added Settings → Audio → **Lobby notification sound**.
- <img src="https://img.shields.io/badge/NEW-2ed573?style=flat-square"/> &nbsp; Added custom audio file support for MP3, WAV, OGG, FLAC, AAC, M4A, and WebM.
- <img src="https://img.shields.io/badge/IMPROVED-24C8DB?style=flat-square"/> &nbsp; Replaced the sharp chime default with a short smooth boop.

### <img src="https://img.shields.io/badge/-VOICE_OVERLAY-2ed573?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Very faint remote voices now trigger overlay highlights more reliably.
- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Overlay talking state now follows audible low-level speech instead of requiring louder peaks.

<img src="static/images/divider.svg" width="100%" alt="divider"/>

### <img src="https://img.shields.io/badge/-DOWNLOADS-2ed573?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/Windows_Installer-0078D4?style=flat-square&logo=windows11&logoColor=white"/> &nbsp; `Perfect Crewlink_1.0.6_x64-setup.exe`
- <img src="https://img.shields.io/badge/Windows_Portable-0078D4?style=flat-square&logo=windows11&logoColor=white"/> &nbsp; `perfectcrewlink.exe`

<img src="static/images/divider.svg" width="100%" alt="divider"/>

## Previous releases

### v1.0.5 — Reliable meetings and voice

- Fixed meeting highlights using Rust-read `MeetingHud` card IDs.
- Fixed stale remote audio streams and failed WebRTC transport display.
- Fixed TOU Mira hats, skins, visors, and clothing from active outfit data.

### v1.0.4 — Overlay, voice, and TOU Mira cleanup

- Kept overlay attached to Among Us after Alt-Tab.
- Improved proximity audio panning and game-window behavior.
- Improved early TOU Mira cosmetic lookup paths.

### v1.0.3 — AleLudu overlay groundwork

- Added earlier AleLudu meeting overlay support.
- Improved meeting slot stability after mid-meeting deaths.
- Returned to waiting screen cleanly when Among Us closes.

<img src="static/images/divider.svg" width="100%" alt="divider"/>

<div align="center">

<img src="static/images/footer.svg" width="100%" alt="footer"/>

<br/>

<sub><strong>Perfect Crewlink</strong> &middot; Changelog v1.0.6 &middot; 2026-05-02</sub>

</div>
