'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

export function ProductImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  quality = 85,
  priority = false,
  loading = 'lazy',
  sizes,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${fill ? 'absolute inset-0' : ''}`}>
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
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-200 ${fill ? '' : ''}`}>
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        quality={quality}
        priority={priority}
        loading={loading}
        sizes={sizes}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
