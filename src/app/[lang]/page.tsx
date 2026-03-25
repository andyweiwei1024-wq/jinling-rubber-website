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

        {/* Certifications Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                {t('home.certifications.badge', 'Qualified Enterprise')}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">{t('home.certifications.title', 'Enterprise Qualifications & Certifications')}</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t('home.certifications.subtitle', 'We hold multiple international certifications and national qualifications, ensuring product quality and enterprise reliability')}
              </p>
            </div>
            
            {/* ISO Certifications */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center mb-6">{t('home.certifications.isoTitle', 'International Management System Certifications')}</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[1/1.4] bg-gray-100">
                    <img 
                      src={lang === 'zh' ? "/certifications/iso9001-zh.jpg" : "/certifications/iso9001-en.jpg"}
                      alt="ISO 9001 Certificate"
                      className="w-full h-full object-contain"
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
                    <img 
                      src={lang === 'zh' ? "/certifications/iso14001-zh.jpg" : "/certifications/iso14001-en.jpg"}
                      alt="ISO 14001 Certificate"
                      className="w-full h-full object-contain"
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
                    <img 
                      src={lang === 'zh' ? "/certifications/iso45001-zh.jpg" : "/certifications/iso45001-en.jpg"}
                      alt="ISO 45001 Certificate"
                      className="w-full h-full object-contain"
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
            <div>
              <h3 className="text-xl font-semibold text-center mb-6">{t('home.certifications.otherTitle', 'National Qualifications & Trademarks')}</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[1/1.4] bg-gray-100">
                    <img 
                      src="/certifications/production-license.png"
                      alt="Production License"
                      className="w-full h-full object-contain"
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
                    <img 
                      src="/certifications/trademark-1.png"
                      alt="Jinling Trademark"
                      className="w-full h-full object-contain"
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
                    <img 
                      src="/certifications/trademark-2.png"
                      alt="Graphic Trademark"
                      className="w-full h-full object-contain"
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

        {/* Certifications Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                {t('home.certifications.badge', 'Qualified Enterprise')}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">{t('home.certifications.title', 'Enterprise Qualifications & Certifications')}</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t('home.certifications.subtitle', 'Shanghai Jinling Rubber Products Co., Ltd. holds multiple international certifications, demonstrating our commitment to quality, environmental protection, and occupational health & safety.')}
              </p>
            </div>
            
            {/* Certification highlights */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{t('home.certifications.iso9001', 'ISO 9001:2015')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.certifications.iso9001Desc', 'Quality Management System')}</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">{t('home.certifications.iso14001', 'ISO 14001:2015')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.certifications.iso14001Desc', 'Environmental Management System')}</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">{t('home.certifications.iso45001', 'ISO 45001:2018')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.certifications.iso45001Desc', 'Occupational Health & Safety')}</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">{t('home.certifications.productionLicense', 'Production License')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.certifications.productionLicenseDesc', 'Special Labor Protection Products')}</p>
              </div>
            </div>

            {/* Certificate images */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* ISO 9001 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border group hover:shadow-xl transition-shadow">
                <div className="aspect-[1/1.4] relative bg-gray-100">
                  <img 
                    src={lang === 'zh' ? '/certificates/iso9001-zh.jpg' : '/certificates/iso9001-en.jpg'}
                    alt="ISO 9001 Quality Management System Certificate"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-blue-600 text-white">
                  <h4 className="font-semibold">{t('home.certifications.iso9001Title', 'Quality Management System Certificate')}</h4>
                  <p className="text-sm text-blue-100 mt-1">{t('home.certifications.iso9001Valid', 'Valid until: Nov 6, 2028')}</p>
                </div>
              </div>
              
              {/* ISO 14001 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border group hover:shadow-xl transition-shadow">
                <div className="aspect-[1/1.4] relative bg-gray-100">
                  <img 
                    src={lang === 'zh' ? '/certificates/iso14001-zh.jpg' : '/certificates/iso14001-en.jpg'}
                    alt="ISO 14001 Environmental Management System Certificate"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-green-600 text-white">
                  <h4 className="font-semibold">{t('home.certifications.iso14001Title', 'Environmental Management System Certificate')}</h4>
                  <p className="text-sm text-green-100 mt-1">{t('home.certifications.iso14001Valid', 'Valid until: Jul 9, 2027')}</p>
                </div>
              </div>
              
              {/* ISO 45001 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border group hover:shadow-xl transition-shadow">
                <div className="aspect-[1/1.4] relative bg-gray-100">
                  <img 
                    src={lang === 'zh' ? '/certificates/iso45001-zh.jpg' : '/certificates/iso45001-en.jpg'}
                    alt="ISO 45001 Occupational Health and Safety Management System Certificate"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-orange-600 text-white">
                  <h4 className="font-semibold">{t('home.certifications.iso45001Title', 'Occupational Health & Safety Certificate')}</h4>
                  <p className="text-sm text-orange-100 mt-1">{t('home.certifications.iso45001Valid', 'Valid until: Jul 9, 2027')}</p>
                </div>
              </div>
              
              {/* Production License */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border group hover:shadow-xl transition-shadow">
                <div className="aspect-[1/1.4] relative bg-gray-100">
                  <img 
                    src="/certificates/production-license.png"
                    alt="National Industrial Product Production License"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-purple-600 text-white">
                  <h4 className="font-semibold">{t('home.certifications.licenseTitle', 'National Industrial Product Production License')}</h4>
                  <p className="text-sm text-purple-100 mt-1">{t('home.certifications.licenseScope', 'Special Labor Protection Products')}</p>
                </div>
              </div>
              
              {/* Trademark 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border group hover:shadow-xl transition-shadow">
                <div className="aspect-[1/1.4] relative bg-gray-100">
                  <img 
                    src="/certificates/trademark-1.png"
                    alt="Trademark Registration Certificate - Jinling"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-indigo-600 text-white">
                  <h4 className="font-semibold">{t('home.certifications.trademarkTitle', 'Trademark Registration Certificate')}</h4>
                  <p className="text-sm text-indigo-100 mt-1">{t('home.certifications.trademarkName', 'Brand: 金铃 (Jinling)')}</p>
                </div>
              </div>
              
              {/* Trademark 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border group hover:shadow-xl transition-shadow">
                <div className="aspect-[1/1.4] relative bg-gray-100">
                  <img 
                    src="/certificates/trademark-2.png"
                    alt="Trademark Registration Certificate - Graphic Mark"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-teal-600 text-white">
                  <h4 className="font-semibold">{t('home.certifications.trademarkGraphicTitle', 'Trademark Registration Certificate')}</h4>
                  <p className="text-sm text-teal-100 mt-1">{t('home.certifications.trademarkGraphicName', 'Brand: Graphic Mark')}</p>
                </div>
              </div>
            </div>
            
            {/* Trust message */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('home.certifications.trustMessage', 'All certificates are issued by authoritative certification bodies and can be verified through official channels. We are committed to providing products and services that meet international standards.')}
              </p>
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
              <a href="mailto:andyweiwei1024@gmail.com">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
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
      </div>
    </>
  );
}
