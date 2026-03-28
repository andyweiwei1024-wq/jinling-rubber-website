import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Language, defaultLanguage, languages, isValidLanguage } from '@/lib/i18n/config';
import { getTranslation } from '@/lib/i18n/server';
import { caseStudies, getCaseStudySchema } from '@/lib/cases';
import { 
  ChevronRight,
  ChevronLeft,
  MapPin,
  Building2,
  Quote,
  ArrowRight,
  CheckCircle2,
  Package
} from 'lucide-react';

// Generate static params for all languages and cases
export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  Object.keys(languages).forEach((lang) => {
    caseStudies.forEach((caseStudy) => {
      params.push({ lang, slug: caseStudy.slug });
    });
  });
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ lang?: string; slug?: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const langParam = resolvedParams?.lang;
  const slug = resolvedParams?.slug;
  const lang = (langParam && isValidLanguage(langParam) ? langParam : defaultLanguage) as Language;
  
  const caseStudy = caseStudies.find(c => c.slug === slug);
  if (!caseStudy) {
    return { title: 'Case Study Not Found' };
  }
  
  const title = lang === 'zh' ? caseStudy.title : caseStudy.titleEn;
  const description = lang === 'zh' ? caseStudy.summary : caseStudy.summaryEn;
  
  return {
    title: `${title} | Shanghai Jinling Rubber`,
    description,
    alternates: {
      canonical: lang === defaultLanguage ? `/cases/${slug}` : `/${lang}/cases/${slug}`,
      languages: {
        'en': `/cases/${slug}`,
        'zh': `/zh/cases/${slug}`,
        'ar': `/ar/cases/${slug}`,
        'de': `/de/cases/${slug}`,
        'es': `/es/cases/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      images: [caseStudy.image],
    },
  };
}

interface PageProps {
  params?: Promise<{ lang?: string; slug?: string }>;
}

export default async function CaseDetailPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined, slug: undefined };
  const langParam = resolvedParams.lang;
  const slug = resolvedParams.slug;
  
  if (langParam && !isValidLanguage(langParam)) {
    notFound();
  }
  
  const lang = (langParam as Language) || defaultLanguage;
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  
  // Find the case study
  const caseStudy = caseStudies.find(c => c.slug === slug);
  if (!caseStudy) {
    notFound();
  }
  
  // Get localized content
  const localizedCase = {
    title: lang === 'zh' ? caseStudy.title : caseStudy.titleEn,
    summary: lang === 'zh' ? caseStudy.summary : caseStudy.summaryEn,
    industry: lang === 'zh' ? caseStudy.industry : caseStudy.industryEn,
    country: lang === 'zh' ? caseStudy.country : caseStudy.countryEn,
    products: lang === 'zh' ? caseStudy.products : caseStudy.productsEn,
    challenge: lang === 'zh' ? caseStudy.challenge : caseStudy.challengeEn,
    solution: lang === 'zh' ? caseStudy.solution : caseStudy.solutionEn,
    results: lang === 'zh' ? caseStudy.results : caseStudy.resultsEn,
    testimonial: lang === 'zh' ? caseStudy.testimonial : caseStudy.testimonialEn,
    clientName: lang === 'zh' ? caseStudy.clientName : caseStudy.clientNameEn,
    clientPosition: lang === 'zh' ? caseStudy.clientPosition : caseStudy.clientPositionEn,
    image: caseStudy.image,
  };
  
  // Get schema for structured data
  const caseSchema = getCaseStudySchema(caseStudy, lang);
  
  // Find related cases (same industry)
  const relatedCases = caseStudies
    .filter(c => c.id !== caseStudy.id && c.industry === caseStudy.industry)
    .slice(0, 2);

  return (
    <>
      {/* Case Study Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
      />
      
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
              { '@type': 'ListItem', position: 3, name: localizedCase.title, item: `https://jinling-rubber.com${navPath(`/cases/${slug}`)}` },
            ],
          }),
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container px-4 py-12 mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-blue-100 mb-6">
            <Link href={navPath('/')} className="hover:text-white">{t('nav.home', 'Home')}</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={navPath('/cases')} className="hover:text-white">{t('nav.cases', 'Case Studies')}</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">{localizedCase.title}</span>
          </nav>
          
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">
                  <Building2 className="h-3 w-3 mr-1" />
                  {localizedCase.industry}
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">
                  <MapPin className="h-3 w-3 mr-1" />
                  {localizedCase.country}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {localizedCase.title}
              </h1>
              <p className="text-xl text-blue-100">
                {localizedCase.summary}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={localizedCase.image}
                alt={localizedCase.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Products Used */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Package className="h-5 w-5 text-blue-600" />
                {t('cases.productsUsed', 'Products Used')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {localizedCase.products.map((product, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                    {product}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Challenge */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-red-600">
                  {t('cases.challenge', 'The Challenge')}
                </h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {localizedCase.challenge}
                </p>
              </CardContent>
            </Card>
            
            {/* Solution */}
            <Card className="mb-8 border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-600">
                  {t('cases.solution', 'Our Solution')}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {localizedCase.solution}
                </div>
              </CardContent>
            </Card>
            
            {/* Results */}
            <Card className="mb-8 border-green-200 bg-green-50/50">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-green-600">
                  {t('cases.results', 'Results & Impact')}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {localizedCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial */}
            {localizedCase.testimonial && (
              <Card className="mb-8 bg-gray-900 text-white">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-blue-400 mb-4" />
                  <blockquote className="text-lg italic mb-4">
                    "{localizedCase.testimonial}"
                  </blockquote>
                  {localizedCase.clientName && (
                    <div className="text-sm text-gray-400">
                      <span className="font-semibold text-white">{localizedCase.clientName}</span>
                      {localizedCase.clientPosition && (
                        <span>, {localizedCase.clientPosition}</span>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t">
              <Link href={navPath('/cases')}>
                <Button variant="outline">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {t('cases.backToCases', 'Back to Case Studies')}
                </Button>
              </Link>
              <Link href={navPath('/contact')}>
                <Button>
                  {t('cases.startProject', 'Start Your Project')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold mb-8">{t('cases.relatedCases', 'Related Case Studies')}</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {relatedCases.map((related) => {
                const relatedLocalized = {
                  title: lang === 'zh' ? related.title : related.titleEn,
                  summary: lang === 'zh' ? related.summary : related.summaryEn,
                  country: lang === 'zh' ? related.country : related.countryEn,
                };
                return (
                  <Link key={related.id} href={navPath(`/cases/${related.slug}`)}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="aspect-[16/9] relative">
                        <img 
                          src={related.image}
                          alt={relatedLocalized.title}
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">
                          <MapPin className="h-3 w-3 mr-1" />
                          {relatedLocalized.country}
                        </Badge>
                        <h3 className="font-semibold mb-2">{relatedLocalized.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedLocalized.summary}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
