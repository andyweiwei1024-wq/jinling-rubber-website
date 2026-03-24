import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  products, 
  getProductById, 
  getProductsByCategory,
  getProductName,
  getProductDescription,
  getProductFeatures,
  getProductApplications,
  getCategoryName,
  getLocalizedSpecs
} from '@/lib/products-i18n';
import { Language, defaultLanguage, languageList } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  ArrowLeft, 
  Mail, 
  Phone,
  Shield,
  Layers,
  Thermometer,
  Droplets,
  Wind,
  Zap,
  Leaf,
  ArrowRight
} from 'lucide-react';

interface PageProps {
  params?: Promise<{ lang?: string; id: string }>;
}

// Generate static params
export function generateStaticParams() {
  const params = [];
  
  for (const lang of languageList) {
    for (const product of products) {
      params.push({ lang, id: product.id });
    }
  }
  
  return params;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined, id: '' };
  const lang = (resolvedParams.lang as Language) || defaultLanguage;
  const product = getProductById(resolvedParams.id);
  
  if (!product) {
    notFound();
  }
  
  const translations = getAllTranslations(lang);
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  
  // Get related products
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  // Map feature icons
  const getFeatureIcon = (index: number) => {
    const icons = [Shield, Layers, Thermometer, Droplets, Wind, Zap, Leaf];
    return icons[index % icons.length];
  };
  
  // Get localized product data
  const productName = getProductName(product, lang);
  const productDesc = getProductDescription(product, lang);
  const productFeatures = getProductFeatures(product, lang);
  const productApplications = getProductApplications(product, lang);
  const categoryName = getCategoryName(product.category, lang);
  const specs = getLocalizedSpecs(product.specifications, lang);

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container px-4 mx-auto">
          <Link href={navPath('/products')} className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('productDetails.backToList', 'Back to Products')}
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <main className="flex-1">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              {/* 主图 - 使用 object-contain 保持图片完整显示 */}
              <div className="relative bg-gray-50 rounded-xl overflow-hidden border">
                <div className="aspect-square sm:aspect-[4/3] lg:aspect-square max-h-[500px] mx-auto">
                  <img 
                    src={product.images.main} 
                    alt={productName}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
              {/* 侧面图 */}
              {product.images.side && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border">
                    <img 
                      src={product.images.main} 
                      alt={productName}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border">
                    <img 
                      src={product.images.side} 
                      alt={`${productName} side view`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
              )}
              {/* 附加图片 */}
              {product.images.additional && product.images.additional.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.images.additional.slice(0, 3).map((img: string, idx: number) => (
                    <div key={idx} className="aspect-square bg-gray-50 rounded-lg overflow-hidden border">
                      <img 
                        src={img} 
                        alt={`${productName} detail ${idx + 1}`} 
                        className="w-full h-full object-contain p-2 hover:scale-105 transition-transform cursor-pointer" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="secondary" className="mb-4">
                {categoryName}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight mb-2">{productName}</h1>
              
              <p className="text-muted-foreground mb-8">{productDesc}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">{t('productDetails.features', 'Key Features')}</h3>
                <div className="grid gap-3">
                  {productFeatures.map((feature, index) => {
                    const Icon = getFeatureIcon(index);
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full flex-shrink-0">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">{t('productDetails.applications', 'Applications')}</h3>
                <div className="flex flex-wrap gap-2">
                  {productApplications.map((app, index) => (
                    <Badge key={index} variant="outline">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              {specs.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">{t('productDetails.specifications', 'Product Specifications')}</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <dl className="space-y-3">
                        {specs.map((spec, index) => (
                          <div key={index} className="flex justify-between">
                            <dt className="text-muted-foreground">{spec.label}</dt>
                            <dd className="font-medium">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={navPath('/contact')} className="flex-1">
                  <Button className="w-full" size="lg">
                    {t('products.requestQuote', 'Request Quote')}
                  </Button>
                </Link>
                <a href="mailto:sales@shjinling.com" className="flex-1">
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    {t('products.emailUs', 'Email Us')}
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6">{t('products.relatedProducts', 'Related Products')}</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedProducts.map((p) => (
                  <Link key={p.id} href={navPath(`/products/${p.id}`)}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] relative bg-gray-200">
                        <img src={p.images.main} alt={getProductName(p, lang)} className="object-cover w-full h-full" />
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">{getCategoryName(p.category, lang)}</Badge>
                        <h3 className="font-semibold">{getProductName(p, lang)}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{getProductDescription(p, lang)}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

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
                {t('footer.description', 'Leading manufacturer and exporter of protective suits, rainwear, and workwear.')}
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
            <p>© {new Date().getFullYear()} {t('footer.copyright', 'Shanghai Jinling Rubber Products Co., Ltd.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
