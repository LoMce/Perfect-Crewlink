<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:C51111,50:24C8DB,100:C51111&height=140&section=header&text=Changelog&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Meetings%2C%20voice%2C%20and%20TOU%20Mira%20cosmetics%20fixed&descSize=16&descAlignY=60&descAlign=50" width="100%" alt="Changelog"/>

<br/>

<img src="https://img.shields.io/badge/Perfect_Crewlink-v1.0.5-C51111?style=for-the-badge&logo=rocket&logoColor=white" alt="Perfect Crewlink v1.0.5"/>
&nbsp;
<img src="https://img.shields.io/badge/RELEASED-2026--05--01-24C8DB?style=for-the-badge" alt="released"/>
&nbsp;
<img src="https://img.shields.io/badge/STATUS-STABLE-2ed573?style=for-the-badge" alt="stable"/>

</div>

<img src="static/images/divider.svg" width="100%" alt="divider"/>

# <img src="https://img.shields.io/badge/v1.0.5-C51111?style=for-the-badge&logo=rocket&logoColor=white" alt="v1.0.5"/> &nbsp; The Reliable Meetings & Voice Release

> **Perfect Crewlink v1.0.5** makes meeting highlights, voice status, and TOU Mira cosmetics match what is really happening in-game.

<div align="center">

| <img src="https://img.shields.io/badge/MEETINGS-RUST_CARDS-24C8DB?style=for-the-badge" alt="meetings"/> | <img src="https://img.shields.io/badge/VOICE-STALE_STREAMS_FIXED-8b5cf6?style=for-the-badge" alt="voice"/> | <img src="https://img.shields.io/badge/COSMETICS-TOU_MIRA_READY-2ed573?style=for-the-badge" alt="cosmetics"/> |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Real `MeetingHud` card IDs                                                                              | Dropped voice shows immediately                                                                            | Active outfit clothes render                                                                                  |

</div>

<img src="static/images/divider.svg" width="100%" alt="divider"/>

### <img src="https://img.shields.io/badge/-MEETING_CARDS-24C8DB?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Highlights use Rust-read `MeetingHud.playerStates` / `PlayerVoteArea.TargetPlayerId`.
- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Guesses, deaths, swaps, and disconnects no longer move highlights to the wrong card.
- <img src="https://img.shields.io/badge/NEW-2ed573?style=flat-square"/> &nbsp; Added Settings → Overlay → **AleLudu meeting layout**.

### <img src="https://img.shields.io/badge/-VOICE_STATUS-8b5cf6?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Stale remote audio streams and failed WebRTC transports now show as no-voice/disconnected.
- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; You no longer need someone else to talk before noticing a broken voice link.

### <img src="https://img.shields.io/badge/-TOU_MIRA_COSMETICS-2ed573?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Hats, skins, visors, and clothing load from active outfit data.
- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Outfit dictionary order no longer drops visible clothes from Crewlink icons.

<img src="static/images/divider.svg" width="100%" alt="divider"/>

### <img src="https://img.shields.io/badge/-DOWNLOADS-2ed573?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/Windows_Installer-0078D4?style=flat-square&logo=windows11&logoColor=white"/> &nbsp; `Perfect Crewlink_1.0.5_x64-setup.exe`
- <img src="https://img.shields.io/badge/Windows_Portable-0078D4?style=flat-square&logo=windows11&logoColor=white"/> &nbsp; `perfectcrewlink.exe`

<img src="static/images/divider.svg" width="100%" alt="divider"/>

## Previous releases

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

<sub><strong>Perfect Crewlink</strong> &middot; Changelog v1.0.5 &middot; 2026-05-01</sub>

</div>
