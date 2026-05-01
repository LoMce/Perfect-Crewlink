import { invoke } from '@tauri-apps/api/core';

export async function readAudioFileAsDataUrl(path: string): Promise<string> {
	return await invoke('read_audio_file_as_data_url', { path });
}
