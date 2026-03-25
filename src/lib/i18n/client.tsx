'use client';

import { createContext, useContext, useCallback, useMemo } from 'react';
import { Language, defaultLanguage, languageList, languages } from './config';

interface I18nContextType {
  language: Language;
  lang: Language; // alias for language
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  navPath: (path: string) => string;
  languages: typeof languages;
  languageList: Language[];
  defaultLanguage: Language;
}

const I18nContext = createContext<I18nContextType | null>(null);

// Simple client-side translations (embedded for hydration)
const clientTranslations: Partial<Record<Language, Record<string, unknown>>> = {};

export function I18nProvider({ 
  children, 
  initialLanguage = defaultLanguage,
  initialTranslations 
}: { 
  children: React.ReactNode;
  initialLanguage?: Language;
  initialTranslations?: Record<string, unknown>;
}) {
  const language = initialLanguage;
  
  // Store initial translations
  if (initialTranslations && !clientTranslations[language]) {
    clientTranslations[language] = initialTranslations;
  }
  
  // Get nested value from object using dot notation
  const getNestedValue = useCallback((obj: Record<string, unknown>, path: string): string | undefined => {
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
  }, []);
  
  // Translation function
  const t = useCallback((key: string, fallback?: string): string => {
    const translations = clientTranslations[language];
    
    if (translations) {
      const value = getNestedValue(translations, key);
      if (value !== undefined) {
        return value;
      }
    }
    
    // Fallback to default language
    if (language !== defaultLanguage) {
      const defaultTranslations = clientTranslations[defaultLanguage];
      if (defaultTranslations) {
        const defaultValue = getNestedValue(defaultTranslations, key);
        if (defaultValue !== undefined) {
          return defaultValue;
        }
      }
    }
    
    return fallback || key;
  }, [language, getNestedValue]);
  
  // Set language - navigate to new URL
  const setLanguage = useCallback((lang: Language) => {
    const currentPath = window.location.pathname;
    let newPath: string;
    
    // Remove current language prefix (including /en for default language)
    let pathWithoutLang = currentPath;
    
    // Check for all language prefixes
    if (currentPath.startsWith('/en/') || currentPath === '/en') {
      // Remove /en prefix
      pathWithoutLang = currentPath.slice(3) || '/';
    } else {
      // Check for other language prefixes
      for (const l of languageList) {
        if (l !== defaultLanguage && (currentPath.startsWith(`/${l}/`) || currentPath === `/${l}`)) {
          pathWithoutLang = currentPath.slice(`/${l}`.length) || '/';
          break;
        }
      }
    }
    
    // Add new language prefix
    if (lang === defaultLanguage) {
      newPath = pathWithoutLang || '/';
    } else {
      newPath = `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    }
    
    window.location.href = newPath;
  }, []);
  
  // Navigation path builder - adds language prefix if needed
  const navPath = useCallback((path: string): string => {
    if (language === defaultLanguage) {
      return path;
    }
    return `/${language}${path === '/' ? '' : path}`;
  }, [language]);
  
  const value = useMemo(() => ({
    language,
    lang: language, // alias for convenience
    setLanguage,
    t,
    navPath,
    languages,
    languageList,
    defaultLanguage,
  }), [language, setLanguage, t, navPath]);
  
  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export { languages, languageList, defaultLanguage };
export type { Language };
