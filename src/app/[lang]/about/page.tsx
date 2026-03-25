import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Language, defaultLanguage } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Globe2, 
  Factory,
  CheckCircle2,
  ArrowRight,
  Shield,
  Leaf,
  Heart
} from 'lucide-react';

interface PageProps {
  params?: Promise<{ lang?: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined };
  const lang = (resolvedParams.lang as Language) || defaultLanguage;
  const translations = getAllTranslations(lang);
  
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  
  const timeline = [
    {
      year: '2003',
      title: t('about.timeline.2003.title', 'Company Founded'),
      description: t('about.timeline.2003.desc', 'Shanghai Jinling Rubber Products Co., Ltd. was established in Shanghai.'),
    },
    {
      year: '2008',
      title: t('about.timeline.2008.title', 'Protective Suits Division'),
      description: t('about.timeline.2008.desc', 'Expanded product line to include professional protective suits.'),
    },
    {
      year: '2012',
      title: t('about.timeline.2012.title', 'ISO 9001 Certification'),
      description: t('about.timeline.2012.desc', 'Achieved ISO 9001 quality management system certification.'),
    },
    {
      year: '2016',
      title: t('about.timeline.2016.title', 'Global Export Initiative'),
      description: t('about.timeline.2016.desc', 'Started comprehensive export services to global markets.'),
    },
    {
      year: '2020',
      title: t('about.timeline.2020.title', 'Product Line Expansion'),
      description: t('about.timeline.2020.desc', 'Expanded to over 100 product types across multiple categories.'),
    },
    {
      year: '2024',
      title: t('about.timeline.2024.title', 'Continued Growth'),
      description: t('about.timeline.2024.desc', 'Serving customers in 50+ countries with quality products.'),
    },
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.coreValues.quality.title', 'Quality First'),
      description: t('about.coreValues.quality.desc', 'Rigorous quality control standards throughout our manufacturing process.'),
    },
    {
      icon: Users,
      title: t('about.coreValues.customer.title', 'Customer Focus'),
      description: t('about.coreValues.customer.desc', 'Our customers are at the heart of everything we do.'),
    },
    {
      icon: Target,
      title: t('about.coreValues.innovation.title', 'Innovation'),
      description: t('about.coreValues.innovation.desc', 'Continuous investment in research and development.'),
    },
    {
      icon: Heart,
      title: t('about.coreValues.integrity.title', 'Integrity'),
      description: t('about.coreValues.integrity.desc', 'Conducting business with honesty and transparency.'),
    },
    {
      icon: Leaf,
      title: t('about.coreValues.sustainability.title', 'Sustainability'),
      description: t('about.coreValues.sustainability.desc', 'Committed to environmental responsibility through green manufacturing.'),
    },
    {
      icon: Globe2,
      title: t('about.coreValues.global.title', 'Global Vision'),
      description: t('about.coreValues.global.desc', 'Aiming to be a leading global supplier of protective equipment.'),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto">
          <Link href={navPath('/')} className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <span className="text-xl font-bold text-white">金铃</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">{t('site.name', 'Shanghai Jinling Rubber')}</span>
              <span className="text-xs text-muted-foreground">Shanghai Jinling Rubber</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href={navPath('/')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">{t('nav.home', 'Home')}</Link>
            <Link href={navPath('/about')} className="text-sm font-medium hover:text-blue-600 transition-colors">{t('nav.about', 'About')}</Link>
            <Link href={navPath('/products')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">{t('nav.products', 'Products')}</Link>
            <Link href={navPath('/contact')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">{t('nav.contact', 'Contact')}</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLanguage={lang} />
            <Link href={navPath('/contact')} className="hidden sm:inline-flex">
              <Button>{t('nav.getQuote', 'Get Quote')}</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t('about.title', 'About Us')}
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              {t('about.subtitle', 'A leading manufacturer of protective suits and rubber products, dedicated to quality, innovation, and customer satisfaction since 2003.')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4">{t('about.companyProfile', 'Company Profile')}</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-6">{t('about.whoWeAre', 'Who We Are')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.whoWeAreDesc', 'Shanghai Jinling Rubber Products Co., Ltd. is a professional manufacturer and exporter specializing in protective suits, rainwear, and workwear. Located in Shanghai, China\'s economic hub, we have been serving global customers with quality products and reliable services for over two decades.')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600">5000+</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.facility', 'Sq. Meters Facility')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.team', 'Team Members')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.countries', 'Countries Served')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.productTypes', 'Product Types')}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="grid gap-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ISO 9001:2015</h3>
                    <p className="text-sm text-muted-foreground">Quality Management System Certified</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                    <Globe2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Global Export</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive export services worldwide</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                    <Factory className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Advanced Manufacturing</h3>
                    <p className="text-sm text-muted-foreground">Modern production facilities and equipment</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">{t('about.journey', 'Our Journey')}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t('about.journeySubtitle', 'From a local manufacturer to a global supplier')}
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card>
                      <CardHeader>
                        <Badge variant="outline" className="w-fit mb-2">{item.year}</Badge>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-100" />
                  </div>
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">{t('about.values', 'Our Core Values')}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t('about.valuesSubtitle', 'The principles that guide our business')}
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t('about.cta.title', 'Partner With Us')}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {t('about.cta.subtitle', 'Join our global network of satisfied customers and distributors.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={navPath('/contact')}>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                {t('about.cta.contactUs', 'Contact Us Today')}
              </Button>
            </Link>
            <Link href={navPath('/products')}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('about.cta.viewProducts', 'View Our Products')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                  <span className="text-lg font-bold text-white">金铃</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">{t('site.name', 'Shanghai Jinling Rubber')}</span>
                  <span className="text-xs text-gray-400">Shanghai Jinling Rubber</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-md">
                {t('footer.description', 'Leading manufacturer and exporter of protective suits, rainwear, and workwear. Serving global markets since 2003.')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{t('footer.quickLinks', 'Quick Links')}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href={navPath('/')} className="hover:text-white transition-colors">{t('nav.home', 'Home')}</Link></li>
                <li><Link href={navPath('/about')} className="hover:text-white transition-colors">{t('nav.about', 'About')}</Link></li>
                <li><Link href={navPath('/products')} className="hover:text-white transition-colors">{t('nav.products', 'Products')}</Link></li>
                <li><Link href={navPath('/contact')} className="hover:text-white transition-colors">{t('nav.contact', 'Contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{t('footer.contactInfo', 'Contact Info')}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span>{t('contact.info.address.value', 'Shanghai, China')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>+86-21-65392338</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>andyweiwei1024@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© {new Date().getFullYear()} {t('footer.copyright', 'Shanghai Jinling Rubber Products Co., Ltd. All rights reserved.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
