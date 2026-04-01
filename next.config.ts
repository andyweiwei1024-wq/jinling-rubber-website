import type { NextConfig } from 'next';

// Detect deployment platform
// - VERCEL=1: Deploy to Vercel (use standalone for SSR/API support)
// - DEPLOY_TARGET=cloudbase: Deploy to CloudBase (use export for static hosting)
const isVercel = process.env.VERCEL === '1';
const isCloudBase = process.env.DEPLOY_TARGET === 'cloudbase';

// Base configuration
const baseConfig: NextConfig = {
  // Image optimization settings
  images: {
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

// Vercel-specific configuration (supports SSR, API routes, etc.)
const vercelConfig: NextConfig = {
  ...baseConfig,
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

// CloudBase-specific configuration (static export)
const cloudBaseConfig: NextConfig = {
  ...baseConfig,
  output: 'export',
  images: {
    ...baseConfig.images,
    unoptimized: true, // Static export doesn't support Image Optimization API
  },
};

// Export configuration based on deployment target
const nextConfig = isCloudBase ? cloudBaseConfig : vercelConfig;

export default nextConfig;
