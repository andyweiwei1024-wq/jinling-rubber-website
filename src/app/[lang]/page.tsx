import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/structured-data';
import { 
  products, 
  productCategories, 
  getProductsByCategory,
  getProductName,
  getProductDescription,
  getProductFeatures,
  getCategoryName as getCategoryNameLocalized
} from '@/lib/products-i18n';
import { Language, defaultLanguage, languageList, languages, isValidLanguage } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
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
  Leaf,
  Twitter,
  Linkedin,
  MessageCircle
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
  const langParam = resolvedParams.lang;
  
  // If lang parameter exists but is not a valid language, return 404
  if (langParam && !isValidLanguage(langParam)) {
    notFound();
  }
  
  const lang = (langParam as Language) || defaultLanguage;
  const translations = getAllTranslations(lang);
  
  // Get translations with fallback
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
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
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
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

        {/* Company Overview Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                  {t('home.companyOverview.badge', 'Since 1990')}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-6">{t('home.companyOverview.title', 'About Shanghai Jinling Rubber Products Co., Ltd.')}</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t('home.companyOverview.desc1', 'Shanghai Jinling Rubber Products Co., Ltd. was awarded the title of Shanghai "Five-Star Integrity Enterprise" in February 2015. From the establishment of Shanghai Jinling Rainwear and Clothing Factory in 1990 to the founding of Shanghai Jinling Rubber Products Co., Ltd. in 1997, we have been specializing in the R&D and production of "Jinling" brand rubber waterproof, acid-alkali resistant, oil-proof, chemical-proof, and various protective clothing for decades.')}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t('home.companyOverview.desc2', 'Our products include rubber waterproof suits, rainwear made of nylon, oxford, spring yarn, PU, PVC coated fabrics, and special coated materials. In July 2001, "Jinling" brand protective clothing was certified as a National Quality Trusted Brand. In April 2002, China General Chamber of Commerce awarded the "Quality Excellence Certificate" for our rubber-bonded rainwear.')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>{t('home.companyOverview.cert1', 'ISO 9001:2015')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <span>{t('home.companyOverview.cert2', 'ISO 14001:2015')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-5 w-5 text-orange-600" />
                    <span>{t('home.companyOverview.cert3', 'Safety Production License')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>{t('home.companyOverview.cert4', 'Five-Star Integrity')}</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-800 mb-1">{t('home.companyOverview.philosophy', 'Company Philosophy')}</p>
                  <p className="text-sm text-blue-600 mb-3">{t('home.companyOverview.philosophyText', 'Pursuing Excellence, Transcending the Ordinary')}</p>
                  <p className="text-sm font-medium text-blue-800 mb-1">{t('home.companyOverview.mission', 'Company Mission')}</p>
                  <p className="text-sm text-blue-600">{t('home.companyOverview.missionText', 'Practical Innovation, Customer First, Dedicated to Providing Quality Service')}</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/factory-aerial.png" 
                    alt={t('home.companyOverview.factoryAlt', 'Shanghai Jinling Factory Aerial View')}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{t('home.companyOverview.factoryCaption', 'Shanghai Jinling Rubber Products Co., Ltd. Factory')}</p>
                  </div>
                </div>
              </div>
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
                      alt={getProductName(product, lang)}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {getCategoryNameLocalized(product.category, lang)}
                    </Badge>
                    <CardTitle className="text-lg">{getProductName(product, lang)} <span className="text-sm font-normal text-muted-foreground">({product.id})</span></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{getProductDescription(product, lang)}</p>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {getProductFeatures(product, lang).slice(0, 3).map((feature, idx) => (
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
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 min-w-[180px]">
                  {t('home.cta.requestQuote', 'Request a Quote')}
                </Button>
              </Link>
              <a href="mailto:andyweiwei1024@gmail.com">
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 min-w-[180px]">
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
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
                    <img 
                      src="/logo.png" 
                      alt="Jinling Logo" 
                      className="w-[150%] h-[150%] object-contain object-center -ml-[3mm] -mt-[2mm]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white">{t('site.name', 'Shanghai Jinling Rubber')}</span>
                    <span className="text-xs text-gray-400">Shanghai Jinling Rubber</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 max-w-md">
                  {t('footer.description', 'Leading manufacturer and exporter of protective suits, rainwear, and workwear. Serving global markets since 2003.')}
                </p>
                {/* Social Media Links */}
                <div className="flex items-center gap-3 mt-4">
                  <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-800 hover:bg-blue-500 rounded-full transition-colors" title="Twitter">
                    <Twitter className="h-4 w-4 text-gray-300 hover:text-white" />
                  </a>
                  <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors" title="Facebook">
                    <svg className="h-4 w-4 text-gray-300 hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-full transition-colors" title="LinkedIn">
                    <Linkedin className="h-4 w-4 text-gray-300 hover:text-white" />
                  </a>
                  <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors" title="Microsoft Teams">
                    <svg className="h-4 w-4 text-gray-300 hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.625 8.073h-5.27V5.073a1.5 1.5 0 0 0-1.5-1.5h-3.51a1.5 1.5 0 0 0-1.5 1.5v3h-5.47a1.5 1.5 0 0 0-1.5 1.5v8.354a1.5 1.5 0 0 0 1.5 1.5h15.25a1.5 1.5 0 0 0 1.5-1.5v-8.354a1.5 1.5 0 0 0-1.5-1.5zm-7.77-3v3h-1.71v-3h1.71zm-6.51 12.354v-8.354h5.97v9.854H6.845a.5.5 0 0 1-.5-.5zm13.75.5h-4.78v-9.854h5.28a.5.5 0 0 1 .5.5v8.354a.5.5 0 0 1-.5.5zm-10.47-7.104h2v2h-2zm0 3.5h2v2h-2z"/>
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-800 hover:bg-green-500 rounded-full transition-colors" title="WhatsApp">
                    <MessageCircle className="h-4 w-4 text-gray-300 hover:text-white" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">{t('footer.quickLinks', 'Quick Links')}</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href={navPath('/')} className="hover:text-white transition-colors">{t('nav.home', 'Home')}</Link></li>
                  <li><Link href={navPath('/about')} className="hover:text-white transition-colors">{t('nav.about', 'About')}</Link></li>
                  <li><Link href={navPath('/products')} className="hover:text-white transition-colors">{t('nav.products', 'Products')}</Link></li>
                  <li><Link href={navPath('/blog')} className="hover:text-white transition-colors">{t('nav.blog', 'Blog')}</Link></li>
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
                    <span>+86-21-65392338</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
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
    </>
  );
}
