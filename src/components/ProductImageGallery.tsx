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
  // 收集所有图片
  const allImages = React.useMemo(() => {
    const images = [mainImage];
    if (sideImage) images.push(sideImage);
    if (additionalImages.length > 0) images.push(...additionalImages);
    return images;
  }, [mainImage, sideImage, additionalImages]);

  const [selectedImage, setSelectedImage] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  // 处理鼠标移动
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const currentImage = allImages[selectedImage];

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
        {/* 主图片 */}
        <div className="aspect-square sm:aspect-[4/3] lg:aspect-square max-h-[500px] mx-auto relative">
          <img 
            src={currentImage} 
            alt={productName}
            className="w-full h-full object-contain p-4 transition-transform duration-200"
            style={{
              transform: isHovering ? 'scale(3)' : 'scale(1)',
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
            }}
          />
        </div>
        
        {/* 放大提示 */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded pointer-events-none">
          {isHovering ? '🔍 放大中' : '🔍 悬停放大'}
        </div>
      </div>

      {/* 缩略图区域 */}
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {allImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index 
                  ? 'border-blue-500 ring-2 ring-blue-200' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img 
                src={img} 
                alt={`${productName} ${index + 1}`}
                className="w-full h-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}

      {/* 图片计数器 */}
      {allImages.length > 1 && (
        <div className="text-center text-sm text-muted-foreground">
          {selectedImage + 1} / {allImages.length}
        </div>
      )}
    </div>
  );
}
