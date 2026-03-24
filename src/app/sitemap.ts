import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shjinling.com';
  
  // Product IDs from the products page
  const productIds = [
    'cat6-ethernet-cable',
    'cat6a-ethernet-cable',
    'fiber-optic-cable',
    'patch-cable',
    'managed-switch',
    'unmanaged-switch',
    'wireless-access-point',
    'ic-connectors',
    'terminal-blocks',
    'wire-harness',
    'cable-manager',
    'patch-panel',
  ];

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Product detail pages
  const productPages = productIds.map((id) => ({
    url: `${baseUrl}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...productPages];
}
