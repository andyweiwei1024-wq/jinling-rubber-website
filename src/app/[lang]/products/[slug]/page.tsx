import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductImageGallery } from '@/components/ProductImageGallery';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  products,
  getProductBySlug,
  getProductById,
  getProductsByCategory,
  getProductUrl
} from '@/lib/products';
import {
  getProductName,
  getProductDescription,
  getProductFeatures,
  getProductApplications,
  getCategoryName,
  getLocalizedSpecs
} from '@/lib/products-i18n';
import { Language, defaultLanguage, languageList } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { ProductSchema, BreadcrumbSchema } from '@/components/structured-data';
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
  ArrowRight,
  Home,
  Package
} from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

// Generate static params for all products
export function generateStaticParams() {
  const params = [];

  for (const lang of languageList) {
    for (const product of products) {
      params.push({ lang, slug: product.slug });
    }
  }

  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  const productName = lang === 'zh' ? product.name : product.nameEn;
  const productDesc = lang === 'zh' ? product.description : product.descriptionEn;
  const categoryName = lang === 'zh'
    ? (products.find(p => p.category === product.category)?.category || product.category)
    : (products.find(p => p.category === product.category)?.categoryEn || product.category);

  const title = `${productName} | ${categoryName} | Shanghai Jinling Rubber`;
  const description = productDesc.slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'product',
      images: [product.images.main],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.images.main],
    },
    alternates: {
      canonical: `https://www.shjinling.com/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const product = getProductBySlug(slug);

  // If not found by slug, try to find by id (for backward compatibility)
  if (!product) {
    const productById = getProductById(slug);
    if (productById) {
      // Redirect to new slug URL
      redirect(`/${lang}/products/${productById.slug}`);
    }
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

  // Breadcrumb items
  const breadcrumbItems = [
    { name: lang === 'zh' ? '首页' : 'Home', url: navPath('/') },
    { name: lang === 'zh' ? '产品中心' : 'Products', url: navPath('/products') },
    { name: categoryName, url: navPath(`/products?category=${product.category}`) },
    { name: productName, url: navPath(`/products/${product.slug}`) },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <ProductSchema
        name={productName}
        description={productDesc}
        image={product.images.main}
        category={categoryName}
        brand="Shanghai Jinling Rubber"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container px-4 mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={navPath('/')}>
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={navPath('/products')}>
                  <Package className="h-4 w-4 mr-1" />
                  {t('nav.products', 'Products')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={navPath(`/products?category=${product.category}`)}>
                  {categoryName}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{productName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Product Detail */}
      <main className="flex-1">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Product Images */}
            <ProductImageGallery
              mainImage={product.images.main}
              sideImage={product.images.side}
              additionalImages={product.images.additional || []}
              productName={productName}
            />

            {/* Product Info */}
            <div>
              <Badge variant="secondary" className="mb-4">
                {categoryName}
              </Badge>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold tracking-tight">{productName}</h1>
                <span className="text-lg text-muted-foreground">({product.id})</span>
              </div>

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
                <a href="mailto:andyweiwei1024@gmail.com" className="flex-1">
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
                  <Link key={p.id} href={navPath(`/products/${p.slug}`)}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] relative bg-gray-200">
                        <img src={p.images.main} alt={getProductName(p, lang)} className="object-cover w-full h-full" />
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">{getCategoryName(p.category, lang)}</Badge>
                        <h3 className="font-semibold">{getProductName(p, lang)} <span className="text-sm font-normal text-muted-foreground">({p.id})</span></h3>
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
    </>
  );
}
