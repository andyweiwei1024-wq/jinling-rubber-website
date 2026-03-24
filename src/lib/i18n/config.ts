// Supported languages configuration
export const languages = {
  en: { name: 'English', nativeName: 'English', dir: 'ltr', locale: 'en_US' },
  de: { name: 'German', nativeName: 'Deutsch', dir: 'ltr', locale: 'de_DE' },
  es: { name: 'Spanish', nativeName: 'Español', dir: 'ltr', locale: 'es_ES' },
  ru: { name: 'Russian', nativeName: 'Русский', dir: 'ltr', locale: 'ru_RU' },
  el: { name: 'Greek', nativeName: 'Ελληνικά', dir: 'ltr', locale: 'el_GR' },
  ja: { name: 'Japanese', nativeName: '日本語', dir: 'ltr', locale: 'ja_JP' },
  it: { name: 'Italian', nativeName: 'Italiano', dir: 'ltr', locale: 'it_IT' },
  pt: { name: 'Portuguese', nativeName: 'Português', dir: 'ltr', locale: 'pt_BR' },
  zh: { name: 'Chinese', nativeName: '中文', dir: 'ltr', locale: 'zh_CN' },
} as const;

export type Language = keyof typeof languages;
export const defaultLanguage: Language = 'en';
export const languageList = Object.keys(languages) as Language[];

// Language names for SEO hreflang
export const hreflangMap: Record<Language, string> = {
  en: 'en',
  de: 'de',
  es: 'es',
  ru: 'ru',
  el: 'el',
  ja: 'ja',
  it: 'it',
  pt: 'pt',
  zh: 'zh-cn',
};
