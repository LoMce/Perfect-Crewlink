// @ts-ignore
import redAliveimg from '../../static/images/avatar/placeholder.png'; // @ts-ignore
import rainbowAliveimg from '../../static/images/avatar/rainbow-alive.png'; // @ts-ignore
import rainbowDeadeimg from '../../static/images/avatar/rainbow-dead.png';
import { invoke } from '@tauri-apps/api/core';

import { ModsType } from '../common/Mods';
import { DEFAULT_PLAYERCOLORS } from '../common/playerColors';
export const redAlive = redAliveimg;

export enum cosmeticType {
	base,
	hat,
	hat_back,
}
interface hatData {
	image: string;
	back_image: string;
	top: string | undefined;
	width: string | undefined;
	left: string | undefined;
	multi_color: boolean | undefined;
	mod: ModsType | undefined;
}
let hatCollection: {
	[mod: string]: {
		defaultWidth: string;
		defaultTop: string;
		defaultLeft: string;
		hats: {
			[id: string]: hatData;
		};
	};
} = {};

export interface HatDementions {
	top: string;
	left: string;
	width: string;
}

let requestingHats = false;
export var initializedHats = false;

export function initializeHats() {
	if (initializedHats || requestingHats) {
		return;
	}
	requestingHats = true;
	fetch(`${HAT_COLLECTION_URL}/hats.json`)
		.then((response) => response.json())
		.then((data) => {
			hatCollection = data;
			initializedHats = true;
		});
	return undefined;
}

const HAT_COLLECTION_URL =  'https://cdn.jsdelivr.net/gh/OhMyGuus/BetterCrewLink-Hats@master/'; //'https://raw.githubusercontent.com/OhMyGuus/BetterCrewlink-Hats/master';
function getModHat(color: number, id = '', mod: ModsType, back = false) {
	if (!initializedHats) {
		return '';
	}
	const hatBase = getHat(id, mod);
	const hat = back ? hatBase?.back_image : hatBase?.image;
	const multiColor = hatBase?.multi_color;
	if (hat && hatBase) {
		if (!multiColor) return `${HAT_COLLECTION_URL}${hatBase.mod}/${hat}`;
		else return `generate://localhost/${HAT_COLLECTION_URL}${hatBase.mod}/${hat}?color=${color}`;
	}
	return undefined;
}



function getHat(id: string, modType: ModsType): hatData | undefined {
	if (!initializedHats) {
		return undefined;
	}
	for (const mod of ['NONE' as ModsType, modType]) {
		const modHatList = hatCollection[mod];
		const hat = modHatList?.hats[id];
		if (hat) {
			hat.top = hat?.top ?? modHatList?.defaultTop;
			hat.width = hat?.width ?? modHatList?.defaultWidth;
			hat.left = hat?.left ?? modHatList?.defaultLeft;
			hat.mod = mod;
			return hat;
		}
	}
	return undefined;
}

export function getHatDementions(id: string, mod: ModsType): HatDementions {
	const hat = getHat(id, mod);
	return {
		top: hat?.top ?? '0',
		width: hat?.width ?? '0',
		left: hat?.left ?? '0',
	};
}

export const RainbowColorId = -99234;
const generatedBaseCache = new Map<string, Promise<string>>();
const resolvedBaseCache = new Map<string, string>();

async function generateBaseAvatar(color: string, shadow: string, isAlive: boolean): Promise<string> {
	return invoke<string>('generate_avatar_base', { color, shadow, isAlive });
}

function getBaseCacheKey(colorId: number, isAlive: boolean, playerColors: string[][]) {
	if (colorId === RainbowColorId) {
		return `${isAlive ? 'player' : 'ghost'}:rainbow`;
	}
	const [color, shadow] = playerColors[colorId] ?? DEFAULT_PLAYERCOLORS[0];
	return `${isAlive ? 'player' : 'ghost'}:${color}:${shadow}`;
}

export function peekGeneratedBase(colorId: number, isAlive: boolean, playerColors: string[][] = DEFAULT_PLAYERCOLORS) {
	if (colorId === RainbowColorId) {
		return isAlive ? rainbowAliveimg : rainbowDeadeimg;
	}
	return resolvedBaseCache.get(getBaseCacheKey(colorId, isAlive, playerColors));
}

export function getGeneratedBase(
	colorId: number,
	isAlive: boolean,
	playerColors: string[][] = DEFAULT_PLAYERCOLORS
): Promise<string> {
	if (colorId === RainbowColorId) {
		return Promise.resolve(isAlive ? rainbowAliveimg : rainbowDeadeimg);
	}

	const [color, shadow] = playerColors[colorId] ?? DEFAULT_PLAYERCOLORS[0];
	const cacheKey = `${isAlive ? 'player' : 'ghost'}:${color}:${shadow}`;
	const resolved = resolvedBaseCache.get(cacheKey);
	if (resolved) {
		return Promise.resolve(resolved);
	}

	const cached = generatedBaseCache.get(cacheKey);
	if (cached) {
		return cached;
	}

	const promise = generateBaseAvatar(color, shadow, isAlive).then((dataUrl) => {
		resolvedBaseCache.set(cacheKey, dataUrl);
		return dataUrl;
	});
	generatedBaseCache.set(cacheKey, promise);
	return promise;
}

export function getCosmetic(
	color: number,
	isAlive: boolean,
	type: cosmeticType,
	id = '',
	mod: ModsType = 'NONE'
): string {
	if (type === cosmeticType.base) {
		if (color == RainbowColorId) {
			return isAlive ? rainbowAliveimg : rainbowDeadeimg;
		}
		return peekGeneratedBase(color, isAlive) ?? redAliveimg;
	} else {
		const modHat = getModHat(color, id, mod, type === cosmeticType.hat_back);
		if (modHat) return modHat;
	}
	return '';
}
