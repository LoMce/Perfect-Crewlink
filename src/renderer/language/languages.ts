import languageNames from './language-names.json';

type Translation = Record<string, unknown>;
type LanguageResource = {
	translation: Translation;
	name: string;
};

const translations = import.meta.glob('../../../static/locales/*/translation.json', {
	eager: true,
	import: 'default',
}) as Record<string, Translation>;

const fallbackTranslation = translations['../../../static/locales/en/translation.json'];

const languages = Object.fromEntries(
	Object.entries(languageNames).map(([code, name]) => [
		code,
		{
			translation: translations[`../../../static/locales/${code}/translation.json`] ?? fallbackTranslation,
			name,
		},
	])
) as Record<string, LanguageResource>;

export default languages;
