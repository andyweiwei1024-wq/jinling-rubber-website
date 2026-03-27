import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import '../globals.css';
import { Language, defaultLanguage, languageList, languages, hreflangMap } from '@/lib/i18n/config';
import { getAllTranslations, getLanguageFromPath } from '@/lib/i18n/server';
import { I18nProvider } from '@/lib/i18n/client';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({ subsets: ['latin'] });

// Generate static params for all languages
export function generateStaticParams() {
  return languageList.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}

// Generate metadata based on language
export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  
  // If language is not valid, return minimal metadata (redirect will happen in layout)
  if (langParam && !languageList.includes(langParam as Language)) {
    return { title: 'Redirecting...' };
  }
  
  const lang = (langParam as Language) || defaultLanguage;
  const translations = getAllTranslations(lang);
  
  const siteName = (translations.site as Record<string, string>)?.name || 'Shanghai Jinling Rubber';
  const siteFullName = (translations.site as Record<string, string>)?.fullName || 'Shanghai Jinling Rubber Products Co., Ltd.';
  const description = (translations.site as Record<string, string>)?.description || 'Professional manufacturer of protective suits, rainwear, and rubber products.';
  
  // Build alternate language links for SEO
  const alternateLanguages: Record<string, string> = {};
  for (const l of languageList) {
    alternateLanguages[hreflangMap[l]] = l === defaultLanguage 
      ? 'https://www.shjinling.com' 
      : `https://www.shjinling.com/${l}`;
  }
  
  return {
    metadataBase: new URL(process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://www.shjinling.com'),
    title: {
      default: `${siteFullName} | Professional Protective Suits & Rubber Products Manufacturer`,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: [
      'Shanghai Jinling Rubber',
      'Protective Suits',
      'Rainwear',
      'Workwear',
      'Rubber Products',
      'Protective Clothing',
      'Chemical Protection',
      'Heat Resistant Suit',
      'PVC Raincoat',
      'Industrial Protection',
      'Safety Equipment',
      'ISO 9001 Certified',
    ],
    authors: [{ name: siteFullName, url: 'https://www.shjinling.com' }],
    generator: 'Next.js',
    openGraph: {
      title: `${siteFullName} | Professional Protective Suits & Rubber Products Manufacturer`,
      description,
      url: 'https://www.shjinling.com',
      siteName,
      locale: languages[lang].locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteName} | Professional Protective Suits Manufacturer`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: lang === defaultLanguage 
        ? 'https://www.shjinling.com' 
        : `https://www.shjinling.com/${lang}`,
      languages: alternateLanguages,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang: langParam } = await params;
  
  // Validate language parameter - if not a valid language, redirect to default language path
  if (langParam && !languageList.includes(langParam as Language)) {
    // Redirect to the same path but with default language prefix
    // e.g., /blog -> /en/blog
    redirect(`/${defaultLanguage}/${langParam}`);
  }
  
  const lang = (langParam as Language) || defaultLanguage;
  const translations = getAllTranslations(lang);
  
  return (
    <html lang={lang === 'zh' ? 'zh-CN' : lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="CN-31" />
        <meta name="geo.placename" content="Shanghai" />
        <meta name="author" content="Shanghai Jinling Rubber Products Co., Ltd." />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        {/* Hreflang tags for multilingual SEO */}
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
        <I18nProvider initialLanguage={lang} initialTranslations={translations}>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
