export const OVERLAY_STATE_KEYS = {
	gameState: 'perfectcrewlink.overlay.gameState',
	voiceState: 'perfectcrewlink.overlay.voiceState',
	settings: 'perfectcrewlink.overlay.settings',
	playerColors: 'perfectcrewlink.overlay.playerColors',
} as const;

const LEGACY_OVERLAY_STATE_KEYS: Record<string, string> = {
	[OVERLAY_STATE_KEYS.gameState]: 'bettercrewlink.overlay.gameState',
	[OVERLAY_STATE_KEYS.voiceState]: 'bettercrewlink.overlay.voiceState',
	[OVERLAY_STATE_KEYS.settings]: 'bettercrewlink.overlay.settings',
	[OVERLAY_STATE_KEYS.playerColors]: 'bettercrewlink.overlay.playerColors',
};

export function writeOverlayState<T>(key: string, value: T): void {
	if (typeof window === 'undefined' || !window.localStorage) {
		return;
	}

	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch {
		// Ignore storage write failures and keep the event path alive.
	}
}

export function readOverlayState<T>(key: string): T | null {
	if (typeof window === 'undefined' || !window.localStorage) {
		return null;
	}

	try {
		const rawValue = window.localStorage.getItem(key) ?? window.localStorage.getItem(LEGACY_OVERLAY_STATE_KEYS[key] ?? '');
		return rawValue ? (JSON.parse(rawValue) as T) : null;
	} catch {
		return null;
	}
}
