import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { languageList, defaultLanguage } from '@/lib/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://www.shjinling.com';
  
  const urls: MetadataRoute.Sitemap = [];
  
  // Helper to add URL with all language alternates
  const addUrlWithLanguages = (path: string, priority: number, changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never') => {
    // Add default language URL (no prefix)
    urls.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          'en': `${baseUrl}${path}`,
          'de': `${baseUrl}/de${path}`,
          'es': `${baseUrl}/es${path}`,
          'ru': `${baseUrl}/ru${path}`,
          'el': `${baseUrl}/el${path}`,
          'ja': `${baseUrl}/ja${path}`,
          'it': `${baseUrl}/it${path}`,
          'pt': `${baseUrl}/pt${path}`,
          'zh-cn': `${baseUrl}/zh${path}`,
        }
      }
    });
    
    // Add non-default language URLs
    for (const lang of languageList) {
      if (lang !== defaultLanguage) {
        urls.push({
          url: `${baseUrl}/${lang}${path}`,
          lastModified: new Date(),
          changeFrequency,
          priority,
          alternates: {
            languages: {
              'en': `${baseUrl}${path}`,
              'de': `${baseUrl}/de${path}`,
              'es': `${baseUrl}/es${path}`,
              'ru': `${baseUrl}/ru${path}`,
              'el': `${baseUrl}/el${path}`,
              'ja': `${baseUrl}/ja${path}`,
              'it': `${baseUrl}/it${path}`,
              'pt': `${baseUrl}/pt${path}`,
              'zh-cn': `${baseUrl}/zh${path}`,
            }
          }
        });
      }
    }
  };
  
  // Main pages
  addUrlWithLanguages('/', 1, 'weekly');
  addUrlWithLanguages('/about', 0.8, 'monthly');
  addUrlWithLanguages('/products', 0.9, 'weekly');
  addUrlWithLanguages('/contact', 0.7, 'monthly');

  // Product detail pages
  for (const product of products) {
    addUrlWithLanguages(`/products/${product.id}`, 0.8, 'monthly');
  }

  return urls;
}
