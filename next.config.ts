import type { NextConfig } from 'next';

// Detect deployment platform
// - VERCEL=1: Deploy to Vercel (use standalone for SSR/API support)
// - Default (no VERCEL env): Deploy to CloudBase (use export for static hosting)
const isVercel = process.env.VERCEL === '1';

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
// This is the default when VERCEL env is not set
const cloudBaseConfig: NextConfig = {
  ...baseConfig,
  output: 'export',
  images: {
    ...baseConfig.images,
    unoptimized: true, // Static export doesn't support Image Optimization API
  },
};

// Export configuration based on deployment target
// Default to CloudBase (static export), use Vercel config when VERCEL=1
const nextConfig = isVercel ? vercelConfig : cloudBaseConfig;

export default nextConfig;
