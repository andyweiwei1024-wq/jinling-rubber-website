'use client';

import * as React from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  mainImage: string;
  sideImage?: string;
  additionalImages?: string[];
  productName: string;
}

export function ProductImageGallery({ 
  mainImage, 
  sideImage, 
  additionalImages = [], 
  productName 
}: ProductImageGalleryProps) {
  // 图片加载错误状态
  const [imageErrors, setImageErrors] = React.useState<Set<number>>(new Set());
  const [isAnyLoading, setIsAnyLoading] = React.useState(true);
  
  // 收集所有图片
  const allImages = React.useMemo(() => {
    const images = [mainImage];
    if (sideImage) images.push(sideImage);
    if (additionalImages.length > 0) images.push(...additionalImages);
    return images;
  }, [mainImage, sideImage, additionalImages]);
  
  // 过滤掉加载失败的图片
  const validImages = React.useMemo(() => {
    return allImages.filter((_, index) => !imageErrors.has(index));
  }, [allImages, imageErrors]);

  const [selectedImage, setSelectedImage] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  // 确保选中的图片索引有效
  React.useEffect(() => {
    if (selectedImage >= validImages.length && validImages.length > 0) {
      setSelectedImage(0);
    }
  }, [validImages.length, selectedImage]);

  // 处理图片加载错误
  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  // 处理图片加载完成
  const handleImageLoad = () => {
    setIsAnyLoading(false);
  };

  // 处理鼠标移动
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const currentImage = validImages[selectedImage];

  // 如果没有有效图片，显示占位图
  if (validImages.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center border">
        <div className="text-center text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">暂无图片</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* 主图区域 - 带放大镜效果 */}
      <div 
        ref={containerRef}
        className="relative bg-gray-50 rounded-xl overflow-hidden border cursor-zoom-in"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {/* 加载指示器 */}
        {isAnyLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* 主图片 */}
        <div className="aspect-square max-h-[500px] mx-auto relative">
          <Image 
            src={currentImage} 
            alt={productName}
            fill
            className="object-contain p-4 transition-transform duration-200"
            style={{
              transform: isHovering ? 'scale(3)' : 'scale(1)',
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
            }}
            quality={90}
            priority={selectedImage === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={handleImageLoad}
            onError={() => handleImageError(selectedImage)}
          />
        </div>
        
        {/* 放大提示 */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded pointer-events-none">
          {isHovering ? '🔍 放大中' : '🔍 悬停放大'}
        </div>
      </div>

      {/* 缩略图区域 */}
      {validImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {validImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all relative ${
                selectedImage === index 
                  ? 'border-blue-500 ring-2 ring-blue-200' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image 
                src={img} 
                alt={`${productName} ${index + 1}`}
                fill
                className="object-contain p-1"
                quality={75}
                loading="lazy"
                sizes="80px"
                onError={() => handleImageError(index)}
              />
            </button>
          ))}
        </div>
      )}

      {/* 图片计数器 */}
      {validImages.length > 1 && (
        <div className="text-center text-sm text-muted-foreground">
          {selectedImage + 1} / {validImages.length}
        </div>
      )}
    </div>
  );
}
