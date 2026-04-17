'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/lib/products';
import { getProductName, getProductDescription, getProductFeatures, getCategoryName } from '@/lib/products-i18n';
import { Language } from '@/lib/i18n/config';

interface ProductCardProps {
  product: Product;
  lang: Language;
  viewDetailsText: string;
}

export function ProductCard({ product, lang, viewDetailsText }: ProductCardProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navPath = (path: string) => lang === 'en' ? path : `/${lang}${path}`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="aspect-square relative bg-gray-200">
        {/* 加载状态 */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* 错误状态 */}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center text-gray-400 p-4">
              <svg 
                className="w-12 h-12 mx-auto mb-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <p className="text-xs">图片加载失败</p>
            </div>
          </div>
        ) : (
          <Image 
            src={product.images.main} 
            alt={getProductName(product, lang)}
            fill
            className="object-contain p-2 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}"
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setHasError(true)}
            onLoad={() => setIsLoading(false)}
          />
        )}
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
        <Link href={navPath(`/products/${product.id}`)}>
          <Button className="w-full">
            {viewDetailsText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
