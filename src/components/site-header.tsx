'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Award, 
  CheckCircle2, 
  Shield
} from 'lucide-react';
import { useI18n } from '@/lib/i18n/client';

export function SiteHeader() {
  const { t, lang, navPath } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <Link href={navPath('/')} className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/logo.png" 
              alt="Jinling Logo" 
              className="w-11 h-11 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight">{t('site.name', 'Shanghai Jinling Rubber')}</span>
            <span className="text-xs text-muted-foreground">Shanghai Jinling Rubber</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href={navPath('/')} className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t('nav.home', 'Home')}
          </Link>
          <Link href={navPath('/about')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
            {t('nav.about', 'About')}
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors bg-transparent p-0">
                  {t('nav.certifications', 'Certifications')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-2">
                    <li>
                      <Link href={navPath('/certifications#iso')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">{t('nav.isoCert', 'ISO Certifications')}</span>
                        </div>
                        <p className="line-clamp-2 text-sm text-muted-foreground mt-1">ISO 9001 · ISO 14001 · ISO 45001</p>
                      </Link>
                    </li>
                    <li>
                      <Link href={navPath('/certifications#national')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span className="font-medium">{t('nav.nationalCert', 'National Qualifications')}</span>
                        </div>
                        <p className="line-clamp-2 text-sm text-muted-foreground mt-1">Production License · Trademarks</p>
                      </Link>
                    </li>
                    <li>
                      <Link href={navPath('/certifications')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-orange-600" />
                          <span className="font-medium">{t('nav.certifications', 'View All Certifications')}</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href={navPath('/products')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
            {t('nav.products', 'Products')}
          </Link>
          <Link href={navPath('/contact')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
            {t('nav.contact', 'Contact')}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher currentLanguage={lang} />
          <Link href={navPath('/contact')} className="hidden sm:inline-flex">
            <Button>{t('nav.getQuote', 'Get Quote')}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
