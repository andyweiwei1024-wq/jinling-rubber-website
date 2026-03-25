import { redirect } from 'next/navigation';
import { defaultLanguage } from '@/lib/i18n/config';

// Redirect to default language path
export default function AboutRedirectPage() {
  redirect(`/${defaultLanguage}/about`);
}
