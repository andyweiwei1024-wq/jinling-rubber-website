import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/structured-data';
import { products, productCategories, getProductsByCategory } from '@/lib/products';
import { Language, defaultLanguage, languageList, languages } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  Shield, 
  CloudRain, 
  HardHat, 
  Globe2, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Factory,
  Truck,
  Leaf
} from 'lucide-react';

// Generate static params for all languages
export function generateStaticParams() {
  return languageList.map((lang) => ({ lang }));
}

interface PageProps {
  params?: Promise<{ lang?: string }>;
}

export default async function Home({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined };
  const lang = (resolvedParams.lang as Language) || defaultLanguage;
  const translations = getAllTranslations(lang);
  
  // Get translations with fallback
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  
  // Get category names with translation
  const getCategoryName = (categoryId: string) => {
    const categoryName = t(`categories.${categoryId}`);
    return categoryName !== categoryId ? categoryName : productCategories.find(c => c.id === categoryId)?.name || categoryId;
  };
  
  // Get featured products
  const featuredProducts = products.slice(0, 6);
  
  // Build navigation path
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  
  const features = [
    {
      icon: Shield,
      title: t('categories.protective-suits', 'Protective Suits'),
      description: t('home.features.quality.desc', 'Professional-grade protective suits for chemical, metallurgical, and hazardous environments.'),
    },
    {
      icon: CloudRain,
      title: t('categories.rainwear', 'Rainwear Series'),
      description: t('home.features.partners.desc', 'Waterproof rainwear with reflective strips for outdoor work and commuting.'),
    },
    {
      icon: HardHat,
      title: t('categories.workwear', 'Workwear Series'),
      description: t('home.features.export.desc', 'Durable workwear including overalls and aprons for various industries.'),
    },
    {
      icon: Globe2,
      title: t('home.features.response.title', 'Global Export'),
      description: t('home.features.response.desc', 'Products exported to 50+ countries with comprehensive logistics support.'),
    },
  ];

  const stats = [
    { label: t('home.stats.years', 'Years Experience'), value: '20+' },
    { label: t('home.stats.countries', 'Countries Served'), value: '50+' },
    { label: t('home.stats.products', 'Product Types'), value: '100+' },
    { label: t('home.stats.certifications', 'ISO 9001'), value: 'ISO 9001' },
  ];

  const reasons = [
    t('home.reasons.iso', 'ISO 9001:2015 Quality Management System Certified'),
    t('home.reasons.experience', '20+ years of manufacturing and export experience'),
    t('home.reasons.pricing', 'Competitive wholesale pricing for bulk orders'),
    t('home.reasons.customization', 'Comprehensive product range with customization options'),
    t('home.reasons.delivery', 'Fast delivery worldwide with reliable logistics partners'),
    t('home.reasons.support', 'Dedicated technical support and after-sales service'),
  ];

  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <LocalBusinessSchema />
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
              <Link href={navPath('/')} className="text-sm font-medium hover:text-blue-600 transition-colors">{t('nav.home', 'Home')}</Link>
              <Link href={navPath('/about')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">{t('nav.about', 'About')}</Link>
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
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
          <div className="absolute inset-0 bg-white/5 opacity-20" />
          <div className="container relative px-4 py-20 mx-auto sm:py-32">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-0">
                {t('home.badge', 'ISO 9001 Certified Manufacturer')}
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                {t('home.title', 'Professional Protective Suits & Rubber Products Manufacturer')}
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-2xl">
                {t('home.subtitle', 'Shanghai Jinling Rubber Products Co., Ltd. has over 20 years of experience in protective equipment, serving customers in 50+ countries worldwide.')}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href={navPath('/products')}>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    {t('home.viewProducts', 'View Products')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={navPath('/contact')}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    {t('home.contactUs', 'Contact Us')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 border-y">
          <div className="container px-4 py-12 mx-auto">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">{t('home.productRange', 'Product Range')}</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t('home.productRangeSubtitle', 'Professional protective equipment for various industries')}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-blue-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">{t('home.featuredProducts', 'Featured Products')}</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t('home.featuredProductsSubtitle', 'Explore our best-selling products trusted by customers worldwide')}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative bg-gray-200">
                    <img 
                      src={product.images.main} 
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {getCategoryName(product.category)}
                    </Badge>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <span className="text-xs text-muted-foreground">{product.nameEn}</span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Link href={navPath(`/products/${product.id}`)}>
                      <Button className="w-full">
                        {t('products.viewDetails', 'View Details')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href={navPath('/products')}>
                <Button size="lg">
                  {t('home.viewAllProducts', 'View All Products')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">{t('home.whyChooseUs', 'Why Choose Shanghai Jinling?')}</h2>
                <div className="space-y-4">
                  {reasons.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href={navPath('/about')} className="inline-block mt-8">
                  <Button variant="outline">
                    {t('home.learnMore', 'Learn More')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-6">
                  <Award className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">{t('home.features.quality.title', 'Quality Assured')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('home.features.quality.desc', 'Rigorous quality control processes ensure every product meets international standards.')}
                  </p>
                </Card>
                <Card className="p-6">
                  <Users className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">{t('home.features.partners.title', 'Global Partners')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('home.features.partners.desc', 'Trusted by distributors and enterprises in over 50 countries worldwide.')}
                  </p>
                </Card>
                <Card className="p-6">
                  <Factory className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">{t('home.features.export.title', 'Export Expertise')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('home.features.export.desc', 'Professional export team handles customs, documentation, and logistics.')}
                  </p>
                </Card>
                <Card className="p-6">
                  <Truck className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">{t('home.features.response.title', 'Fast Response')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('home.features.response.desc', 'Quick quotation turnaround and responsive customer support team.')}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t('home.cta.title', 'Ready to Start Your Project?')}</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              {t('home.cta.subtitle', 'Contact our sales team for product inquiries, quotations, and technical support. We respond within 24 hours.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={navPath('/contact')}>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  {t('home.cta.requestQuote', 'Request a Quote')}
                </Button>
              </Link>
              <a href="mailto:sales@shjinling.com">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" />
                  {t('home.cta.emailUs', 'Email Us Directly')}
                </Button>
              </a>
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
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>{t('contact.info.address.value', 'Shanghai, China')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>+86-21-XXXXXXXX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>sales@shjinling.com</span>
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
    </>
  );
}
