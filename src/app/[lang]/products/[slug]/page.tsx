import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
import { Language, defaultLanguage, languageList, isValidLanguage } from '@/lib/i18n/config';
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
  Package,
  CheckCircle2,
  FileText,
  HelpCircle,
  Factory,
  Users,
  Globe2,
  Clock,
  Award,
  Truck
} from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

// Generate static params for all products
export function generateStaticParams() {
  const params = [];

  for (const lang of languageList) {
    for (const product of products) {
      params.push({ lang, slug: product.id });
    }
  }

  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  const lang = isValidLanguage(langParam) ? langParam : defaultLanguage;
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
      type: 'website',
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
  const { lang: langParam, slug } = await params;
  const lang = isValidLanguage(langParam) ? langParam : defaultLanguage;
  const product = getProductBySlug(slug);

  // If not found by slug, try to find by id (for backward compatibility)
  if (!product) {
    const productById = getProductById(slug);
    if (productById) {
      // Redirect to new slug URL
      redirect(`/${lang}/products/${productById.id}`);
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
  const specs = getLocalizedSpecs(product, lang);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: t('nav.home', 'Home'), url: navPath('/') },
    { name: t('nav.products', 'Products'), url: navPath('/products') },
    { name: categoryName, url: navPath(`/products?category=${product.category}`) },
    { name: productName, url: navPath(`/products/${product.id}`) },
  ];

  // Product-specific FAQs
  const productFAQs = [
    {
      question: t('productDetails.faqs.materialQuestion', `What material is this ${productName} made of?`),
      answer: t('productDetails.faqs.materialAnswer', `The ${productName} is made of premium materials, offering excellent durability and protection. Please check the specifications for detailed material parameters.`),
    },
    {
      question: t('productDetails.faqs.customQuestion', 'Can this product be customized?'),
      answer: t('productDetails.faqs.customAnswer', 'Yes, we offer customization services including size, color, and logo printing. Customized products generally require a minimum order of 50 pieces. Please contact us for details.'),
    },
    {
      question: t('productDetails.faqs.moqQuestion', 'What is the minimum order quantity?'),
      answer: t('productDetails.faqs.moqAnswer', 'Standard products have a minimum order of 10 pieces, and customized products require 50 pieces. We support small trial orders and welcome new customers.'),
    },
    {
      question: t('productDetails.faqs.leadTimeQuestion', 'What is the lead time?'),
      answer: t('productDetails.faqs.leadTimeAnswer', 'Stock products ship within 3-5 working days after payment. Standard production takes 7-20 days, and customized products take 20-30 days. Please confirm with our sales team.'),
    },
  ];

  // Application scenarios
  const applicationScenarios = [
    {
      icon: Factory,
      title: t('productDetails.applicationScenarios.industrial.title', 'Industrial Production'),
      description: t('productDetails.applicationScenarios.industrial.description', 'Suitable for chemical, metallurgical, and electronics production environments.'),
    },
    {
      icon: Shield,
      title: t('productDetails.applicationScenarios.safety.title', 'Safety Operations'),
      description: t('productDetails.applicationScenarios.safety.description', 'Meets safety standards to protect workers from chemicals, heat, and other hazards.'),
    },
    {
      icon: Users,
      title: t('productDetails.applicationScenarios.team.title', 'Team Protection'),
      description: t('productDetails.applicationScenarios.team.description', 'Provides uniform protective equipment for enterprise employees.'),
    },
    {
      icon: Globe2,
      title: t('productDetails.applicationScenarios.global.title', 'Global Certification'),
      description: t('productDetails.applicationScenarios.global.description', 'Products certified by CE, ISO, and other international standards.'),
    },
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

              <p className="text-muted-foreground mb-6">{productDesc}</p>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Card className="bg-blue-50 border-blue-100">
                  <CardContent className="p-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">{t('productDetails.isoCertified', 'ISO 9001 Certified')}</span>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-100">
                  <CardContent className="p-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">{t('productDetails.qualityAssured', 'Quality Assured')}</span>
                  </CardContent>
                </Card>
                <Card className="bg-orange-50 border-orange-100">
                  <CardContent className="p-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium">{t('productDetails.fastDelivery', 'Fast Delivery')}</span>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50 border-purple-100">
                  <CardContent className="p-3 flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium">{t('productDetails.globalExport', 'Global Export')}</span>
                  </CardContent>
                </Card>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">{t('productDetails.features', 'Key Features')}</h3>
                <div className="grid gap-2">
                  {productFeatures.map((feature, index) => {
                    const Icon = getFeatureIcon(index);
                    return (
                      <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full flex-shrink-0">
                          <Icon className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href={navPath('/contact')} className="flex-1">
                  <Button className="w-full" size="lg">
                    {t('products.requestQuote', 'Request Quote')}
                  </Button>
                </Link>
                <a href="mailto:weiwei@jinlingrubber.com.cn" className="flex-1">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    {t('products.emailUs', 'Email Us')}
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>{t('productDetails.securePayment', 'Secure Payment')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4 text-blue-600" />
                  <span>{t('productDetails.worldwideShipping', 'Worldwide Shipping')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specifications" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('productDetails.specifications', 'Specifications')}</span>
                </TabsTrigger>
                <TabsTrigger value="applications" className="flex items-center gap-2">
                  <Factory className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('productDetails.applications', 'Applications')}</span>
                </TabsTrigger>
                <TabsTrigger value="faq" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">FAQ</span>
                </TabsTrigger>
                <TabsTrigger value="documents" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('productDetails.documents', 'Documents')}</span>
                </TabsTrigger>
              </TabsList>

              {/* Specifications Tab */}
              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('productDetails.detailedSpecs', 'Detailed Specifications')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <dl className="divide-y">
                        {specs.map((spec, index) => (
                          <div key={index} className="py-3 flex justify-between items-center">
                            <dt className="text-muted-foreground font-medium">{spec.label}</dt>
                            <dd className="font-semibold text-right">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                      {/* Additional Specs */}
                      <div className="pt-4 border-t">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t('productDetails.certifications', 'Certifications')}:</span>
                            <span className="font-medium">CE / ISO 9001</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t('productDetails.warranty', 'Warranty')}:</span>
                            <span className="font-medium">{t('productDetails.warrantyPeriod', '12 months')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t('productDetails.moq', 'MOQ')}:</span>
                            <span className="font-medium">10 {t('productDetails.pieces', 'pieces')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t('productDetails.leadTime', 'Lead Time')}:</span>
                            <span className="font-medium">7-15 {t('productDetails.days', 'days')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Applications Tab */}
              <TabsContent value="applications" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {applicationScenarios.map((scenario, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                            <scenario.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">{scenario.title}</h4>
                            <p className="text-sm text-muted-foreground">{scenario.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Application Tags */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>{t('productDetails.suitableIndustries', 'Suitable Industries')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {productApplications.map((app, index) => (
                        <Badge key={index} variant="secondary" className="py-1 px-3">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('productDetails.frequentlyAsked', 'Frequently Asked Questions')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {productFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="mt-6 pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('productDetails.moreQuestions', 'Have more questions?')}
                      </p>
                      <Link href={navPath('/faq')}>
                        <Button variant="outline" size="sm">
                          {t('productDetails.viewAllFAQ', 'View All FAQ')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('productDetails.productDocuments', 'Product Documents')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{t('productDetails.productManual', 'Product Manual')}</p>
                            <p className="text-sm text-muted-foreground">PDF, 2.5 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">{t('productDetails.download', 'Download')}</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">{t('productDetails.certificate', 'Quality Certificate')}</p>
                            <p className="text-sm text-muted-foreground">PDF, 1.2 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">{t('productDetails.download', 'Download')}</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-orange-600" />
                          <div>
                            <p className="font-medium">{t('productDetails.testReport', 'Test Report')}</p>
                            <p className="text-sm text-muted-foreground">PDF, 3.1 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">{t('productDetails.download', 'Download')}</Button>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {t('productDetails.documentsNote', 'Need more documents? Please contact our sales team.')}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{t('products.relatedProducts', 'Related Products')}</h2>
                <Link href={navPath('/products')}>
                  <Button variant="outline">
                    {t('products.viewAll', 'View All')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedProducts.map((p) => (
                  <Link key={p.id} href={navPath(`/products/${p.id}`)}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
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
