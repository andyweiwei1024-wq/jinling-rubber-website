import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Language, defaultLanguage, languages, isValidLanguage } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { caseStudies, CaseStudy } from '@/lib/cases';
import { getLocalizedCase } from '@/lib/cases-i18n';
import { 
  ChevronRight,
  Building2,
  MapPin,
  Quote,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe2,
  TrendingUp
} from 'lucide-react';

// Generate static params for all languages
export function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ lang?: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const langParam = resolvedParams?.lang;
  const lang = (langParam && isValidLanguage(langParam) ? langParam : defaultLanguage) as Language;
  
  const title = getTranslation(lang, 'cases.pageTitle', 'Customer Success Stories | Shanghai Jinling Rubber');
  const description = getTranslation(lang, 'cases.pageDescription', 'Read how leading companies worldwide trust Shanghai Jinling for their protective equipment needs. Success stories from petrochemical, mining, and outdoor industries.');
  
  return {
    title,
    description,
    alternates: {
      canonical: lang === defaultLanguage ? '/cases' : `/${lang}/cases`,
      languages: {
        'en': '/cases',
        'zh': '/zh/cases',
        'ar': '/ar/cases',
        'de': '/de/cases',
        'es': '/es/cases',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

interface PageProps {
  params?: Promise<{ lang?: string }>;
}

export default async function CasesPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined };
  const langParam = resolvedParams.lang;
  
  if (langParam && !isValidLanguage(langParam)) {
    notFound();
  }
  
  const lang = (langParam as Language) || defaultLanguage;
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  
  // Build navigation path
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  
  // Get localized case studies
  const localizedCases = caseStudies.map(item => getLocalizedCase(item, lang));
  
  // Stats
  const stats = [
    { icon: Users, value: '50+', label: t('cases.stats.clients', 'Global Clients') },
    { icon: Globe2, value: '50+', label: t('cases.stats.countries', 'Countries Served') },
    { icon: TrendingUp, value: '95%', label: t('cases.stats.satisfaction', 'Client Satisfaction') },
    { icon: CheckCircle2, value: '10+', label: t('cases.stats.years', 'Years Experience') },
  ];

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: t('nav.home', 'Home'), item: `https://jinling-rubber.com${navPath('')}` },
              { '@type': 'ListItem', position: 2, name: t('nav.cases', 'Case Studies'), item: `https://jinling-rubber.com${navPath('/cases')}` },
            ],
          }),
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container px-4 py-16 mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-blue-100 mb-6">
            <Link href={navPath('/')} className="hover:text-white">{t('nav.home', 'Home')}</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">{t('nav.cases', 'Case Studies')}</span>
          </nav>
          
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-0">
              <Users className="h-3 w-3 mr-1" />
              {t('cases.badge', 'Success Stories')}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {t('cases.title', 'Customer Success Stories')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('cases.subtitle', 'See how leading companies worldwide trust Shanghai Jinling for their protective equipment needs.')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-gray-50 border-y">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {localizedCases.map((caseStudy, index) => (
              <Card key={caseStudy.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {/* Case Image */}
                <div className="aspect-[16/9] relative bg-gray-200">
                  <Image 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white/90">
                      {caseStudy.industry}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      <MapPin className="h-3 w-3 mr-1" />
                      {caseStudy.country}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{caseStudy.summary}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Products Used */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">{t('cases.productsUsed', 'Products Used')}</p>
                    <div className="flex flex-wrap gap-1">
                      {caseStudy.products.map((product, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Results Preview */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">{t('cases.results', 'Results')}</p>
                    <div className="space-y-1">
                      {caseStudy.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  {caseStudy.testimonial && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <Quote className="h-4 w-4 text-blue-600 mb-2" />
                      <p className="text-sm text-muted-foreground italic line-clamp-3">
                        &ldquo;{caseStudy.testimonial}&rdquo;
                      </p>
                      {caseStudy.clientName && (
                        <p className="text-sm font-medium mt-2">
                          — {caseStudy.clientName}
                          {caseStudy.clientPosition && `, ${caseStudy.clientPosition}`}
                        </p>
                      )}
                    </div>
                  )}
                  
                  <Link href={navPath(`/cases/${caseStudy.slug}`)}>
                    <Button className="w-full">
                      {t('cases.readMore', 'Read Full Story')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('cases.cta.title', 'Ready to Join Our Success Stories?')}
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {t('cases.cta.subtitle', 'Contact our team to discuss how Shanghai Jinling can help meet your protective equipment needs.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={navPath('/contact')}>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 min-w-[180px]">
                {t('cases.cta.getInTouch', 'Get in Touch')}
              </Button>
            </Link>
            <Link href={navPath('/products')}>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 min-w-[180px]">
                {t('cases.cta.viewProducts', 'View Products')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Links */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">{t('cases.learnMore', 'Learn More')}</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Link href={navPath('/products')}>
              <Card className="h-full hover:border-blue-600 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t('nav.products', 'Products')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('cases.productsDesc', 'Explore our complete product range of protective suits, rainwear, and workwear.')}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href={navPath('/certifications')}>
              <Card className="h-full hover:border-blue-600 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t('nav.certifications', 'Certifications')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('cases.certificationsDesc', 'View our ISO certifications and quality assurance documentation.')}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href={navPath('/faq')}>
              <Card className="h-full hover:border-blue-600 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t('nav.faq', 'FAQ')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('cases.faqDesc', 'Find answers to common questions about our products and services.')}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
