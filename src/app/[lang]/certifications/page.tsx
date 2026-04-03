import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Language, defaultLanguage, languageList } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { 
  Award, 
  Leaf, 
  Shield, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Generate static params for all languages
export function generateStaticParams() {
  return languageList.map((lang) => ({ lang }));
}

interface PageProps {
  params?: Promise<{ lang?: string }>;
}

export default async function CertificationsPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined };
  const lang = (resolvedParams.lang as Language) || defaultLanguage;
  
  // Get translations with fallback
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  
  // Build navigation path
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-0">
            {t('home.certifications.badge', 'Qualified Enterprise')}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t('home.certifications.title', 'Enterprise Qualifications & Certifications')}
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            {t('home.certifications.subtitle', 'We hold multiple international certifications and national qualifications, ensuring product quality and enterprise reliability')}
          </p>
        </div>
      </section>

      {/* Certifications Content */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          
          {/* ISO Certifications */}
          <div className="mb-12" id="iso">
            <h2 className="text-2xl font-semibold text-center mb-8">{t('home.certifications.isoTitle', 'International Management System Certifications')}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[1/1.4] bg-gray-100">
                  <Image 
                    src={lang === 'zh' ? "/certifications/iso9001-zh.jpg" : "/certifications/iso9001-en.jpg"}
                    alt="ISO 9001 Certificate"
                    width={600}
                    height={840}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg flex items-center justify-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    ISO 9001:2015
                  </CardTitle>
                  <CardDescription>{t('home.certifications.iso9001', 'Quality Management System')}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[1/1.4] bg-gray-100">
                  <Image 
                    src={lang === 'zh' ? "/certifications/iso14001-zh.jpg" : "/certifications/iso14001-en.jpg"}
                    alt="ISO 14001 Certificate"
                    width={600}
                    height={840}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg flex items-center justify-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    ISO 14001:2015
                  </CardTitle>
                  <CardDescription>{t('home.certifications.iso14001', 'Environmental Management System')}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[1/1.4] bg-gray-100">
                  <Image 
                    src={lang === 'zh' ? "/certifications/iso45001-zh.jpg" : "/certifications/iso45001-en.jpg"}
                    alt="ISO 45001 Certificate"
                    width={600}
                    height={840}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg flex items-center justify-center gap-2">
                    <Shield className="h-5 w-5 text-orange-600" />
                    ISO 45001:2018
                  </CardTitle>
                  <CardDescription>{t('home.certifications.iso45001', 'Occupational Health & Safety Management System')}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          
          {/* Other Certifications */}
          <div className="mb-12" id="national">
            <h2 className="text-2xl font-semibold text-center mb-8">{t('home.certifications.otherTitle', 'National Qualifications & Trademarks')}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[1/1.4] bg-gray-100">
                  <Image 
                    src="/certifications/production-license.png"
                    alt="Production License"
                    width={600}
                    height={840}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    {t('home.certifications.productionLicense', 'National Industrial Product Production License')}
                  </CardTitle>
                  <CardDescription>{t('home.certifications.productionLicenseDesc', 'Special Labor Protection Products')}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[1/1.4] bg-gray-100">
                  <Image 
                    src="/certifications/trademark-1.png"
                    alt="Jinling Trademark"
                    width={600}
                    height={840}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg flex items-center justify-center gap-2">
                    {t('home.certifications.trademark', 'Registered Trademark')}
                  </CardTitle>
                  <CardDescription>{t('home.certifications.trademark1Desc', 'Jinling Brand - Reg. No. 7759903')}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[1/1.4] bg-gray-100">
                  <Image 
                    src="/certifications/trademark-2.png"
                    alt="Graphic Trademark"
                    width={600}
                    height={840}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg flex items-center justify-center gap-2">
                    {t('home.certifications.trademark', 'Registered Trademark')}
                  </CardTitle>
                  <CardDescription>{t('home.certifications.trademark2Desc', 'Graphic Mark - Reg. No. 11441119')}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Trust message */}
          <div className="text-center bg-white rounded-xl p-8 shadow-sm border">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.certifications.trustMessage', 'All certificates are issued by authoritative certification bodies and can be verified through official channels. We are committed to providing products and services that meet international standards.')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">{t('certifications.cta.title', 'Interested in Our Products?')}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {t('certifications.cta.subtitle', 'Contact us for product inquiries, quotations, and technical support. We respond within 24 hours.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={navPath('/contact')}>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 min-w-[160px]">
                {t('nav.contact', 'Contact Us')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={navPath('/products')}>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 min-w-[160px]">
                {t('nav.products', 'View Products')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
