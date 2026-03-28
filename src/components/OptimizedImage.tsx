'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  containerClassName?: string;
}

/**
 * 优化的图片组件，用于SEO和性能优化
 * - 自动添加alt属性
 * - 支持懒加载
 * - 支持响应式尺寸
 * - 支持占位符
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  fill = false,
  containerClassName,
}: OptimizedImageProps) {
  // 检查是否为外部URL
  const isExternal = src.startsWith('http://') || src.startsWith('https://');
  
  // 对于外部URL，使用常规img标签
  if (isExternal) {
    if (fill) {
      return (
        <div className={cn('relative overflow-hidden', containerClassName)}>
          <img
            src={src}
            alt={alt}
            className={cn('object-cover w-full h-full', className)}
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
      );
    }
    
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
      />
    );
  }
  
  // 对于本地图片，使用Next.js Image组件
  if (fill) {
    return (
      <div className={cn('relative overflow-hidden', containerClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          className={cn('object-cover', className)}
          priority={priority}
        />
      </div>
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}

/**
 * 产品图片组件
 * 专门用于产品展示，包含SEO优化的alt属性
 */
export function ProductImage({
  src,
  productName,
  view = 'main',
  className,
  priority = false,
  fill = false,
}: {
  src: string;
  productName: string;
  view?: 'main' | 'side' | 'detail';
  className?: string;
  priority?: boolean;
  fill?: boolean;
}) {
  // 构建SEO友好的alt属性
  const altText = `${productName} - ${view === 'main' ? 'Front View' : view === 'side' ? 'Side View' : 'Detail View'} | Shanghai Jinling Rubber Products`;
  
  return (
    <OptimizedImage
      src={src}
      alt={altText}
      className={className}
      priority={priority}
      fill={fill}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

/**
 * 横幅图片组件
 * 用于页面横幅，包含SEO优化的alt属性
 */
export function HeroImage({
  src,
  title,
  subtitle,
  className,
}: {
  src: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  const altText = `${title}${subtitle ? ` - ${subtitle}` : ''} | Shanghai Jinling Rubber Products`;
  
  return (
    <OptimizedImage
      src={src}
      alt={altText}
      className={className}
      priority
      sizes="100vw"
    />
  );
}

/**
 * Logo图片组件
 * 用于显示品牌Logo
 */
export function LogoImage({
  src,
  companyName,
  className,
}: {
  src: string;
  companyName: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={`${companyName} Logo - Professional Protective Equipment Manufacturer`}
      className={className}
      loading="eager"
    />
  );
}
