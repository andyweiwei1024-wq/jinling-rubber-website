import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { languageList, defaultLanguage } from './lib/i18n/config';

// Known routes that should have language prefix (for default language, no prefix needed)
const knownRoutes = [
  '/products',
  '/about',
  '/contact',
  '/certifications',
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname is a known route without language prefix
  // This handles cases like /certifications -> should work for default language
  const isKnownRoute = knownRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );
  
  // If it's a known route, let it pass through (default language has no prefix)
  if (isKnownRoute) {
    return NextResponse.next();
  }
  
  // Check if pathname already has a language prefix
  const pathnameHasLocale = languageList.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );
  
  // If pathname has a non-default language prefix, let it pass
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // For root and other paths, let it pass (default language)
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};
