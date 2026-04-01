import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static export for CloudBase hosting
  output: 'export',
  
  // Disable Image Optimization API (not supported in static export)
  // Use external image URLs or pre-optimized images
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lf-coze-web-cdn.coze.cn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
