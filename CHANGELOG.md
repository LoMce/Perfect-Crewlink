# Changelog

## v1.0.1 - 2026-04-10

### Overlay

- Fixed the alt-tab/focus restore bug that could make the overlay highlight the wrong player.
- Improved overlay talk detection so quieter audible players light up more reliably.

### App State

- Fixed Perfect Crewlink getting stuck on the public lobbies flow after Among Us closed.
- The app now returns to the waiting screen when the game exits.

### Public Lobby Browser

- Fixed stale public-list rows being shown as `UNAVAILABLE` even after the server said the lobby was no longer public.
- Added automatic retry for transient lobby-code lookup failures instead of caching a bad unavailable state.
