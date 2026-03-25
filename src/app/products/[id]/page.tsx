import { redirect } from 'next/navigation';
import { defaultLanguage } from '@/lib/i18n/config';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Redirect to default language path
export default async function ProductDetailRedirectPage({ params }: PageProps) {
  const { id } = await params;
  redirect(`/${defaultLanguage}/products/${id}`);
}
