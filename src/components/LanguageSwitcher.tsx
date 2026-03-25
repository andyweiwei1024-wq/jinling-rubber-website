'use client';

import * as React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages, Language } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange?: (lang: Language) => void;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

export function LanguageSwitcher({ 
  currentLanguage, 
  onLanguageChange,
  variant = 'ghost',
  size = 'default'
}: LanguageSwitcherProps) {
  const handleLanguageChange = (lang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    } else {
      // Default behavior: navigate to new URL
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
        const languageList = Object.keys(languages) as Language[];
        for (const l of languageList) {
          if (l !== 'en' && (currentPath.startsWith(`/${l}/`) || currentPath === `/${l}`)) {
            pathWithoutLang = currentPath.slice(`/${l}`.length) || '/';
            break;
          }
        }
      }
      
      // Add new language prefix
      if (lang === 'en') {
        newPath = pathWithoutLang || '/';
      } else {
        newPath = `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
      }
      
      window.location.href = newPath;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languages[currentLanguage].nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {(Object.keys(languages) as Language[]).map((code) => {
          const lang = languages[code];
          return (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`cursor-pointer ${currentLanguage === code ? 'bg-accent' : ''}`}
            >
              <span className="font-medium">{lang.nativeName}</span>
              <span className="ml-auto text-muted-foreground text-sm">
                {lang.name}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
