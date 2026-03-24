// Supported languages configuration
// 只保留英语和中文
export const languages = {
  en: { name: 'English', nativeName: 'English', dir: 'ltr', locale: 'en_US' },
  zh: { name: 'Chinese', nativeName: '中文', dir: 'ltr', locale: 'zh_CN' },
} as const;

export type Language = keyof typeof languages;
export const defaultLanguage: Language = 'en';
export const languageList = Object.keys(languages) as Language[];

// Language names for SEO hreflang
export const hreflangMap: Record<Language, string> = {
  en: 'en',
  zh: 'zh-cn',
};
