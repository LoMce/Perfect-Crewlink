// @ts-ignore
import defaultBoop from '../../static/sounds/lobby_boop.wav';
import { readAudioFileAsDataUrl } from '../common/tauri-audio';

type SinkAudioElement = HTMLAudioElement & {
	setSinkId?: (sinkId: string) => Promise<void>;
};

const customSoundCache = new Map<string, string>();

async function getCustomSoundSrc(path: string): Promise<string> {
	const cached = customSoundCache.get(path);
	if (cached) {
		return cached;
	}

	const dataUrl = await readAudioFileAsDataUrl(path);
	customSoundCache.set(path, dataUrl);
	return dataUrl;
}

export async function playLobbyNotificationSound(path?: string, speaker?: string): Promise<void> {
	const audio = new Audio() as SinkAudioElement;
	try {
		audio.src = path ? await getCustomSoundSrc(path) : defaultBoop;
	} catch {
		audio.src = defaultBoop;
	}

	if (speaker && speaker.toLowerCase() !== 'default' && audio.setSinkId) {
		await audio.setSinkId(speaker).catch(() => undefined);
	}

	await audio.play();
}
