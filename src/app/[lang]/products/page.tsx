import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger,
  TabsContent 
} from '@/components/ui/tabs';
import { 
  products, 
  productCategories, 
  getProductsByCategory,
  getProductName,
  getProductDescription,
  getProductFeatures,
  getCategoryName
} from '@/lib/products-i18n';
import { Language, defaultLanguage } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  params?: Promise<{ lang?: string }>;
}

export default async function ProductsPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined };
  const lang = (resolvedParams.lang as Language) || defaultLanguage;
  const translations = getAllTranslations(lang);
  
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;

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
            <Link href={navPath('/about')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">{t('nav.about', 'About')}</Link>
            <Link href={navPath('/products')} className="text-sm font-medium hover:text-blue-600 transition-colors">{t('nav.products', 'Products')}</Link>
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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t('products.title', 'Products')}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {t('products.subtitle', 'Explore our comprehensive range of protective equipment and rubber products')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <TabsList className="flex-wrap">
                <TabsTrigger value="all">{t('products.allProducts', 'All Products')}</TabsTrigger>
                {productCategories.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id} className="hidden sm:inline-flex">
                    {getCategoryName(cat.id, lang)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* All Products */}
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                    <div className="aspect-[4/3] relative bg-gray-200">
                      <img 
                        src={product.images.main} 
                        alt={getProductName(product, lang)}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="secondary" className="w-fit mb-2">
                        {getCategoryName(product.category, lang)}
                      </Badge>
                      <CardTitle className="text-lg">{getProductName(product, lang)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground line-clamp-2">{getProductDescription(product, lang)}</p>
                      <div className="mt-4 flex flex-wrap gap-1">
                        {getProductFeatures(product, lang).slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
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
            </TabsContent>

            {/* Category Tabs */}
            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {getProductsByCategory(category.id).map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                      <div className="aspect-[4/3] relative bg-gray-200">
                        <img 
                          src={product.images.main} 
                          alt={getProductName(product, lang)}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <Badge variant="secondary" className="w-fit mb-2">
                          {getCategoryName(product.category, lang)}
                        </Badge>
                        <CardTitle className="text-lg">{getProductName(product, lang)}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground line-clamp-2">{getProductDescription(product, lang)}</p>
                        <div className="mt-4 flex flex-wrap gap-1">
                          {getProductFeatures(product, lang).slice(0, 3).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
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
              </TabsContent>
            ))}
          </Tabs>

          {/* Custom Products CTA */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">{t('products.customProducts', 'Need Custom Solutions?')}</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              {t('products.customDesc', 'We offer OEM/ODM services for custom products. Contact our team for details.')}
            </p>
            <Link href={navPath('/contact')}>
              <Button size="lg">
                {t('products.requestCustom', 'Request Custom Quote')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto">
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
                  <span>+86-21-XXXXXXXX</span>
                </li>
                <li className="flex items-center gap-2">
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
  );
}
