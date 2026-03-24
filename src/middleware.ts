import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { languageList, defaultLanguage } from './lib/i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname already has a language prefix
  const pathnameIsMissingLocale = languageList.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`
  );
  
  // Redirect if there is no language prefix (except for default language)
  // For default language (English), we don't add prefix
  if (pathnameIsMissingLocale && pathname !== '/') {
    // No redirect needed - default language has no prefix
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};
