import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { products, getProductBySlug, Product } from '@/lib/products';
import { getProductName, getProductDescription, getCategoryName } from '@/lib/products-i18n';
import { Language, defaultLanguage } from '@/lib/i18n/config';
import { Package, ArrowRight } from 'lucide-react';

interface RelatedProductsProps {
  category?: string; // 产品类别
  productSlugs?: string[]; // 或具体的产品slug列表
  lang: Language;
  maxItems?: number;
  title?: string;
  showViewAll?: boolean;
}

/**
 * 相关产品推荐组件
 * 用于在文章页面、案例页面等展示相关产品
 */
export function RelatedProducts({
  category,
  productSlugs,
  lang = defaultLanguage,
  maxItems = 3,
  title,
  showViewAll = true,
}: RelatedProductsProps) {
  let relatedProducts: Product[] = [];
  
  if (productSlugs && productSlugs.length > 0) {
    // 根据slug列表获取产品
    relatedProducts = productSlugs
      .map(slug => getProductBySlug(slug))
      .filter((p): p is Product => p !== undefined)
      .slice(0, maxItems);
  } else if (category) {
    // 根据类别获取产品
    relatedProducts = products
      .filter(p => p.category === category)
      .slice(0, maxItems);
  } else {
    // 默认显示最新产品
    relatedProducts = products.slice(0, maxItems);
  }
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  const localizedTitle = title || (lang === 'zh' ? '相关产品推荐' : 'Recommended Products');
  
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Package className="h-5 w-5 text-blue-600" />
          {localizedTitle}
        </h3>
        {showViewAll && (
          <Link href={navPath('/products')}>
            <Button variant="ghost" size="sm">
              {lang === 'zh' ? '查看全部' : 'View All'}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={navPath(`/products/${product.slug}`)}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src={product.images.main}
                  alt={getProductName(product, lang)}
                  fill
                  className="object-cover w-full h-full"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 left-2 bg-white/90"
                >
                  {getCategoryName(product.category, lang)}
                </Badge>
              </div>
              <CardContent className="p-3">
                <h4 className="font-medium text-sm line-clamp-1">
                  {getProductName(product, lang)}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                  {getProductDescription(product, lang)}
                </p>
                <div className="mt-2 flex items-center text-xs text-blue-600">
                  <span>{lang === 'zh' ? '查看详情' : 'View Details'}</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * 产品链接内联组件
 * 用于在文章内容中插入产品链接
 */
export function ProductLink({
  slug,
  lang = defaultLanguage,
  children,
}: {
  slug: string;
  lang?: Language;
  children?: React.ReactNode;
}) {
  const product = getProductBySlug(slug);
  
  if (!product) {
    return null;
  }
  
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  const productName = getProductName(product, lang);
  
  return (
    <Link
      href={navPath(`/products/${slug}`)}
      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline"
    >
      {children || productName}
      <Package className="h-3 w-3" />
    </Link>
  );
}
