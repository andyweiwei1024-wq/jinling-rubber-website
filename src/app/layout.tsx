import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Language, defaultLanguage } from '@/lib/i18n/config';
import { getAllTranslations } from '@/lib/i18n/server';
import { I18nProvider } from '@/lib/i18n/client';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

// Default language (English) layout
export async function generateMetadata(): Promise<Metadata> {
  const lang = defaultLanguage;
  const translations = getAllTranslations(lang);
  
  const siteName = (translations.site as Record<string, string>)?.name || 'Shanghai Jinling Rubber';
  const description = (translations.site as Record<string, string>)?.description || 'Professional manufacturer of protective suits, rainwear, and rubber products.';
  
  return {
    metadataBase: new URL(process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://www.shjinling.com'),
    title: {
      default: 'Shanghai Jinling Rubber Products Co., Ltd. | Professional Protective Suits & Rubber Products Manufacturer',
      template: '%s | Shanghai Jinling Rubber',
    },
    description,
    keywords: [
      'Shanghai Jinling Rubber',
      'Protective Suits',
      'Rainwear',
      'Workwear',
      'Rubber Products',
      'ISO 9001 Certified',
    ],
    alternates: {
      canonical: 'https://www.shjinling.com',
      languages: {
        'en': 'https://www.shjinling.com',
        'de': 'https://www.shjinling.com/de',
        'es': 'https://www.shjinling.com/es',
        'ru': 'https://www.shjinling.com/ru',
        'el': 'https://www.shjinling.com/el',
        'ja': 'https://www.shjinling.com/ja',
        'it': 'https://www.shjinling.com/it',
        'pt': 'https://www.shjinling.com/pt',
        'zh-cn': 'https://www.shjinling.com/zh',
        'x-default': 'https://www.shjinling.com',
      },
    },
  };
}

export default function RootLayout({ children }: LayoutProps) {
  const translations = getAllTranslations(defaultLanguage);
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="CN-31" />
        <meta name="geo.placename" content="Shanghai" />
        <link rel="alternate" hrefLang="en" href="https://www.shjinling.com" />
        <link rel="alternate" hrefLang="de" href="https://www.shjinling.com/de" />
        <link rel="alternate" hrefLang="es" href="https://www.shjinling.com/es" />
        <link rel="alternate" hrefLang="ru" href="https://www.shjinling.com/ru" />
        <link rel="alternate" hrefLang="el" href="https://www.shjinling.com/el" />
        <link rel="alternate" hrefLang="ja" href="https://www.shjinling.com/ja" />
        <link rel="alternate" hrefLang="it" href="https://www.shjinling.com/it" />
        <link rel="alternate" hrefLang="pt" href="https://www.shjinling.com/pt" />
        <link rel="alternate" hrefLang="zh-cn" href="https://www.shjinling.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://www.shjinling.com" />
      </head>
      <body className={inter.className}>
        <I18nProvider initialLanguage={defaultLanguage} initialTranslations={translations}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
