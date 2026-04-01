import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Language, defaultLanguage, languages, isValidLanguage } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { faqItems, faqCategories, getFAQSchema, FAQItem } from '@/lib/faq';
import { getLocalizedFAQ, getFAQCategoryName } from '@/lib/faq-i18n';
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  ChevronRight,
  Search,
  Package,
  Truck,
  Settings,
  ShieldCheck
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
  
  const title = getTranslation(lang, 'faq.pageTitle', 'Frequently Asked Questions | Shanghai Jinling Rubber');
  const description = getTranslation(lang, 'faq.pageDescription', 'Find answers to common questions about our protective suits, rainwear, ordering process, shipping, and after-sales service. Professional protective equipment manufacturer since 1990.');
  
  return {
    title,
    description,
    alternates: {
      canonical: lang === defaultLanguage ? '/faq' : `/${lang}/faq`,
      languages: {
        'en': '/faq',
        'zh': '/zh/faq',
        'ar': '/ar/faq',
        'de': '/de/faq',
        'es': '/es/faq',
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

export default async function FAQPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined };
  const langParam = resolvedParams.lang;
  
  if (langParam && !isValidLanguage(langParam)) {
    notFound();
  }
  
  const lang = (langParam as Language) || defaultLanguage;
  const translations = getAllTranslations(lang);
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  
  // Build navigation path
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  
  // Group FAQ items by category
  const faqByCategory = faqCategories.map(category => ({
    ...category,
    name: getFAQCategoryName(category, lang),
    items: faqItems
      .filter(item => item.category === category.id)
      .map(item => getLocalizedFAQ(item, lang)),
  })).filter(category => category.items.length > 0);
  
  // Get FAQ schema for structured data
  const faqSchema = getFAQSchema(faqItems, lang);
  
  // Category icons
  const categoryIcons: Record<string, React.ElementType> = {
    'products': Package,
    'ordering': Settings,
    'shipping': Truck,
    'customization': Settings,
    'after-sales': ShieldCheck,
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              { '@type': 'ListItem', position: 2, name: t('nav.faq', 'FAQ'), item: `https://jinling-rubber.com${navPath('/faq')}` },
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
            <span className="text-white">{t('nav.faq', 'FAQ')}</span>
          </nav>
          
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-0">
              <HelpCircle className="h-3 w-3 mr-1" />
              {t('faq.badge', 'Help Center')}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {t('faq.title', 'Frequently Asked Questions')}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {t('faq.subtitle', 'Find answers to common questions about our products, ordering, shipping, and more.')}
            </p>
            
            {/* Search placeholder */}
            <div className="relative max-w-xl mx-auto">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 px-4 py-3">
                <Search className="h-5 w-5 text-blue-100 mr-3" />
                <input
                  type="text"
                  placeholder={t('faq.searchPlaceholder', 'Search for answers...')}
                  className="bg-transparent border-none outline-none text-white placeholder-blue-100 flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Category Navigation */}
      <section className="bg-gray-50 border-b sticky top-0 z-10">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Button variant="ghost" size="sm" className="whitespace-nowrap">
              {t('faq.allCategories', 'All Categories')}
            </Button>
            {faqByCategory.map(category => {
              const Icon = categoryIcons[category.id] || HelpCircle;
              return (
                <Button key={category.id} variant="ghost" size="sm" className="whitespace-nowrap">
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {faqByCategory.map(category => {
              const Icon = categoryIcons[category.id] || HelpCircle;
              return (
                <div key={category.id} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <Badge variant="secondary">{category.items.length}</Badge>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {category.items.map((item, index) => (
                      <AccordionItem key={item.id} value={item.id} className="bg-white border rounded-lg px-4">
                        <AccordionTrigger className="text-left font-medium hover:text-blue-600">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground whitespace-pre-line">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">{t('faq.stillHaveQuestions', 'Still Have Questions?')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {t('faq.stillHaveQuestionsDesc', 'Can\'t find the answer you\'re looking for? Our team is here to help!')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={navPath('/contact')}>
                    <Button size="lg" className="min-w-[180px]">
                      <Mail className="mr-2 h-5 w-5" />
                      {t('faq.contactUs', 'Contact Us')}
                    </Button>
                  </Link>
                  <a href="tel:+86-21-65392338">
                    <Button size="lg" variant="outline" className="min-w-[180px]">
                      <Phone className="mr-2 h-5 w-5" />
                      {t('faq.callUs', 'Call Us')}
                    </Button>
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t('faq.responseTime', 'We typically respond within 24 hours.')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Related Links */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">{t('faq.relatedResources', 'Related Resources')}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link href={navPath('/products')}>
                <Card className="h-full hover:border-blue-600 transition-colors cursor-pointer">
                  <CardHeader>
                    <Package className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">{t('nav.products', 'Products')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {t('faq.productsDesc', 'Browse our complete product catalog of protective suits, rainwear, and workwear.')}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={navPath('/blog')}>
                <Card className="h-full hover:border-blue-600 transition-colors cursor-pointer">
                  <CardHeader>
                    <HelpCircle className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">{t('nav.blog', 'Blog')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {t('faq.blogDesc', 'Read our latest articles on product guides, industry news, and safety tips.')}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={navPath('/certifications')}>
                <Card className="h-full hover:border-blue-600 transition-colors cursor-pointer">
                  <CardHeader>
                    <ShieldCheck className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">{t('nav.certifications', 'Certifications')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {t('faq.certificationsDesc', 'View our ISO certifications and quality assurance documentation.')}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
