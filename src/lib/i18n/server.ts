import 'server-only';
import fs from 'fs';
import path from 'path';
import { Language, defaultLanguage, languageList } from './config';

// Cache for translations
const translationsCache: Record<Language, Record<string, unknown>> = {} as Record<Language, Record<string, unknown>>;

// Load translation file
function loadTranslation(lang: Language): Record<string, unknown> {
  if (translationsCache[lang]) {
    return translationsCache[lang];
  }
  
  try {
    const filePath = path.join(process.cwd(), 'src/lib/i18n/translations', `${lang}.json`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const translations = JSON.parse(content);
    translationsCache[lang] = translations;
    return translations;
  } catch {
    console.warn(`Translation file not found for language: ${lang}`);
    return {};
  }
}

// Get nested value from object using dot notation
function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  
  return typeof current === 'string' ? current : undefined;
}

// Get translation for a key
export function getTranslation(lang: Language, key: string, fallback?: string): string {
  const translations = loadTranslation(lang);
  const value = getNestedValue(translations, key);
  
  if (value !== undefined) {
    return value;
  }
  
  // Fallback to default language
  if (lang !== defaultLanguage) {
    const defaultTranslations = loadTranslation(defaultLanguage);
    const defaultValue = getNestedValue(defaultTranslations, key);
    if (defaultValue !== undefined) {
      return defaultValue;
    }
  }
  
  return fallback || key;
}

// Get all translations for a language
export function getAllTranslations(lang: Language): Record<string, unknown> {
  return loadTranslation(lang);
}

// Get language from path
export function getLanguageFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && languageList.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }
  
  return defaultLanguage;
}

// Generate localized path
export function getLocalizedPath(pathname: string, lang: Language): string {
  const currentLang = getLanguageFromPath(pathname);
  
  // Remove current language prefix
  let pathWithoutLang = pathname;
  if (currentLang !== defaultLanguage && pathname.startsWith(`/${currentLang}`)) {
    pathWithoutLang = pathname.slice(`/${currentLang}`.length) || '/';
  }
  
  // Add new language prefix
  if (lang === defaultLanguage) {
    return pathWithoutLang || '/';
  }
  
  return `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
}

// Get alternate language links for SEO
export function getAlternateLanguageLinks(pathname: string): Array<{ lang: Language; href: string }> {
  const links: Array<{ lang: Language; href: string }> = [];
  const currentLang = getLanguageFromPath(pathname);
  
  // Get path without language prefix
  let pathWithoutLang = pathname;
  if (currentLang !== defaultLanguage && pathname.startsWith(`/${currentLang}`)) {
    pathWithoutLang = pathname.slice(`/${currentLang}`.length) || '/';
  }
  
  for (const lang of languageList) {
    if (lang === defaultLanguage) {
      links.push({ lang, href: pathWithoutLang || '/' });
    } else {
      links.push({ lang, href: `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}` });
    }
  }
  
  return links;
}
