// Supported languages configuration
// 支持多语言：英语、中文、阿拉伯语、德语、西班牙语
export const languages = {
  en: { name: 'English', nativeName: 'English', dir: 'ltr', locale: 'en_US' },
  zh: { name: 'Chinese', nativeName: '中文', dir: 'ltr', locale: 'zh_CN' },
  ar: { name: 'Arabic', nativeName: 'العربية', dir: 'rtl', locale: 'ar_SA' },
  de: { name: 'German', nativeName: 'Deutsch', dir: 'ltr', locale: 'de_DE' },
  es: { name: 'Spanish', nativeName: 'Español', dir: 'ltr', locale: 'es_ES' },
} as const;

export type Language = keyof typeof languages;
export const defaultLanguage: Language = 'en';
export const languageList = Object.keys(languages) as Language[];

// Language names for SEO hreflang
export const hreflangMap: Record<Language, string> = {
  en: 'en',
  zh: 'zh-cn',
  ar: 'ar',
  de: 'de',
  es: 'es',
};

// Check if a string is a valid language code
export function isValidLanguage(lang: string | undefined): lang is Language {
  return lang !== undefined && lang in languages;
}

// Check if language is RTL
export function isRTLLanguage(lang: Language): boolean {
  return languages[lang].dir === 'rtl';
}
