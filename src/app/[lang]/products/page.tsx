import Link from 'next/link';
import Image from 'next/image';
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
    <>
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
                      <Image 
                        src={product.images.main} 
                        alt={getProductName(product, lang)}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                        loading="lazy"
                        quality={85}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="secondary" className="w-fit mb-2">
                        {getCategoryName(product.category, lang)}
                      </Badge>
                      <CardTitle className="text-lg">{getProductName(product, lang)} <span className="text-sm font-normal text-muted-foreground">({product.id})</span></CardTitle>
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
                      <Link href={navPath(`/products/${product.slug}`)}>
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
                        <Image 
                          src={product.images.main} 
                          alt={getProductName(product, lang)}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <Badge variant="secondary" className="w-fit mb-2">
                          {getCategoryName(product.category, lang)}
                        </Badge>
                        <CardTitle className="text-lg">{getProductName(product, lang)} <span className="text-sm font-normal text-muted-foreground">({product.id})</span></CardTitle>
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
                        <Link href={navPath(`/products/${product.slug}`)}>
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
    </>
  );
}
