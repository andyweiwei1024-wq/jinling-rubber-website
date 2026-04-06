import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { articles } from '@/lib/articles';
import { languageList, defaultLanguage } from '@/lib/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  // 优先使用 Vercel 环境变量，否则使用 COZE 环境变量，最后使用默认域名
  // 去除末尾空格，避免 URL 格式错误
  const baseUrl = (
    process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.COZE_PROJECT_DOMAIN_DEFAULT
      ? process.env.COZE_PROJECT_DOMAIN_DEFAULT.replace(/^http:\/\//, 'https://')
      : 'https://www.shjinling.com'
  ).trim().replace(/\/+$/, ''); // 去除首尾空格和末尾斜杠

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
          'zh-cn': `${baseUrl}/zh${path}`,
          'ar': `${baseUrl}/ar${path}`,
          'de': `${baseUrl}/de${path}`,
          'es': `${baseUrl}/es${path}`,
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
              'zh-cn': `${baseUrl}/zh${path}`,
              'ar': `${baseUrl}/ar${path}`,
              'de': `${baseUrl}/de${path}`,
              'es': `${baseUrl}/es${path}`,
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
  addUrlWithLanguages('/blog', 0.8, 'weekly');
  addUrlWithLanguages('/contact', 0.7, 'monthly');

  // Product detail pages
  for (const product of products) {
    addUrlWithLanguages(`/products/${product.slug}`, 0.8, 'monthly');
  }

  // Blog article pages
  for (const article of articles) {
    addUrlWithLanguages(`/blog/${article.slug}`, 0.7, 'monthly');
  }

  return urls;
}
