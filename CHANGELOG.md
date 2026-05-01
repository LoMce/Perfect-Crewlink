<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:C51111,50:24C8DB,100:C51111&height=140&section=header&text=Changelog&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Perfect%20Crewlink%20release%20notes&descSize=16&descAlignY=60&descAlign=50" width="100%" alt="Changelog"/>

</div>

<img src="static/images/divider.svg" width="100%" alt="divider"/>

# <img src="https://img.shields.io/badge/v1.0.5-C51111?style=for-the-badge&logo=rocket&logoColor=white" alt="v1.0.5"/> &nbsp; Rust Meeting Cards + TOU Mira Cosmetics

<p>
<img src="https://img.shields.io/badge/RELEASED-2026--05--01-24C8DB?style=for-the-badge" alt="released"/>
&nbsp;
<img src="https://img.shields.io/badge/STATUS-STABLE-2ed573?style=for-the-badge" alt="stable"/>
&nbsp;
<img src="https://img.shields.io/badge/HIGHLIGHT-ALELUDU_MEETINGS-8b5cf6?style=for-the-badge" alt="highlight"/>
</p>

> **Perfect Crewlink v1.0.5** makes meeting highlights trust the game instead of guessing. It also restores active TOU Mira outfit cosmetics in Crewlink icons.

### <img src="https://img.shields.io/badge/-MEETING_HIGHLIGHTS-24C8DB?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Highlights now use Rust-read `MeetingHud.playerStates` / `PlayerVoteArea.TargetPlayerId`.
- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Dead players, guesses, swaps, and disconnects no longer reshuffle cards mid-meeting.
- <img src="https://img.shields.io/badge/IMPROVED-ffa502?style=flat-square"/> &nbsp; Unsupported meeting layouts hide highlights instead of showing wrong guesses.

### <img src="https://img.shields.io/badge/-ALELUDU_LAYOUT-8b5cf6?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/NEW-2ed573?style=flat-square"/> &nbsp; Added Settings → Overlay → **AleLudu meeting layout**.
- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; AleLudu 4-column highlights now render in the correct tablet area.
- <img src="https://img.shields.io/badge/REMOVED-57606f?style=flat-square"/> &nbsp; Removed old AleLudu calibration/debug UI and renderer-side card guessing.

### <img src="https://img.shields.io/badge/-TOU_MIRA_COSMETICS-2ed573?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; Crewlink icons now read active outfit hats, skins, and visors even when player names are already loaded.
- <img src="https://img.shields.io/badge/FIXED-C51111?style=flat-square"/> &nbsp; TOU Mira clothing no longer disappears when outfit dictionary order changes or active entries appear later.

### <img src="https://img.shields.io/badge/-PACKAGING-2ed573?style=flat-square" height="22"/>

- <img src="https://img.shields.io/badge/Windows-Installer-0078D4?style=flat-square&logo=windows11&logoColor=white"/> &nbsp; `Perfect Crewlink_1.0.5_x64-setup.exe`
- <img src="https://img.shields.io/badge/Windows-Portable-0078D4?style=flat-square&logo=windows11&logoColor=white"/> &nbsp; `perfectcrewlink.exe`

<img src="static/images/divider.svg" width="100%" alt="divider"/>

## Previous releases

### v1.0.4 — Overlay, voice, and TOU Mira cleanup

- Kept overlay attached to Among Us after Alt-Tab.
- Improved proximity audio panning, smoothing, camera, vent, and wall behavior.
- Improved vanilla and TOU Mira cosmetic lookup paths.

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
