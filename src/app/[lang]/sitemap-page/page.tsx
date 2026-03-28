import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Language, defaultLanguage, languages, isValidLanguage } from '@/lib/i18n/config';
import { getTranslation } from '@/lib/i18n/server';
import { products, productCategories } from '@/lib/products';
import { articles, articleCategories } from '@/lib/articles';
import { caseStudies } from '@/lib/cases';
import { 
  Home, 
  Package, 
  FileText, 
  HelpCircle, 
  Users,
  Award,
  Mail,
  Building2,
  ChevronRight
} from 'lucide-react';

interface SitemapLink {
  name: string;
  href: string;
  isSubItem?: boolean;
}

interface SitemapSection {
  title: string;
  icon: React.ElementType;
  links: SitemapLink[];
}

export const metadata: Metadata = {
  title: 'Sitemap | Shanghai Jinling Rubber',
  description: 'Complete sitemap of Shanghai Jinling Rubber Products Co., Ltd. website. Find all our products, articles, and resources.',
};

interface PageProps {
  params?: Promise<{ lang?: string }>;
}

export default async function SitemapPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined };
  const langParam = resolvedParams?.lang;
  const lang = (langParam && isValidLanguage(langParam) ? langParam : defaultLanguage) as Language;
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;
  
  const isEn = lang === 'en';
  
  const sections: SitemapSection[] = [
    {
      title: isEn ? 'Main Pages' : '主要页面',
      icon: Home,
      links: [
        { name: isEn ? 'Home' : '首页', href: navPath('/') },
        { name: isEn ? 'About Us' : '关于我们', href: navPath('/about') },
        { name: isEn ? 'Contact Us' : '联系我们', href: navPath('/contact') },
        { name: isEn ? 'Certifications' : '资质认证', href: navPath('/certifications') },
      ],
    },
    {
      title: isEn ? 'Products' : '产品中心',
      icon: Package,
      links: [
        { name: isEn ? 'All Products' : '全部产品', href: navPath('/products') },
        ...productCategories.map(cat => ({
          name: isEn ? cat.nameEn : cat.name,
          href: navPath(`/products?category=${cat.id}`),
        })),
        ...products.slice(0, 10).map(product => ({
          name: isEn ? product.nameEn : product.name,
          href: navPath(`/products/${product.slug}`),
          isSubItem: true,
        })),
      ],
    },
    {
      title: isEn ? 'Articles & Blog' : '文章博客',
      icon: FileText,
      links: [
        { name: isEn ? 'All Articles' : '全部文章', href: navPath('/blog') },
        ...articleCategories.map(cat => ({
          name: isEn ? cat.nameEn : cat.name,
          href: navPath(`/blog?category=${cat.id}`),
        })),
        ...articles.slice(0, 5).map(article => ({
          name: isEn ? article.titleEn : article.title,
          href: navPath(`/blog/${article.slug}`),
          isSubItem: true,
        })),
      ],
    },
    {
      title: isEn ? 'Case Studies' : '客户案例',
      icon: Users,
      links: [
        { name: isEn ? 'All Case Studies' : '全部案例', href: navPath('/cases') },
        ...caseStudies.map(cs => ({
          name: isEn ? cs.titleEn : cs.title,
          href: navPath(`/cases/${cs.slug}`),
          isSubItem: true,
        })),
      ],
    },
    {
      title: isEn ? 'Help & Support' : '帮助支持',
      icon: HelpCircle,
      links: [
        { name: isEn ? 'FAQ' : '常见问题', href: navPath('/faq') },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-blue-100 mb-6">
            <Link href={navPath('/')} className="hover:text-white">{isEn ? 'Home' : '首页'}</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">{isEn ? 'Sitemap' : '网站地图'}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">
            {isEn ? 'Sitemap' : '网站地图'}
          </h1>
          <p className="text-blue-100 text-lg">
            {isEn 
              ? 'Find all pages and resources on our website.'
              : '查找我们网站上的所有页面和资源。'}
          </p>
        </div>
      </section>
      
      {/* Sitemap Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <Card key={index} className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <section.icon className="h-5 w-5 text-blue-600" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-2 text-sm hover:text-blue-600 transition-colors ${
                            link.isSubItem ? 'pl-4 text-muted-foreground' : 'font-medium'
                          }`}
                        >
                          <ChevronRight className="h-3 w-3" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Contact CTA */}
          <Card className="mt-12 bg-blue-600 text-white">
            <CardContent className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {isEn ? 'Need Help Finding Something?' : '需要帮助查找吗？'}
              </h2>
              <p className="text-blue-100 mb-6">
                {isEn
                  ? 'Contact our team if you have any questions or need assistance.'
                  : '如有任何问题或需要帮助，请联系我们的团队。'}
              </p>
              <Link href={navPath('/contact')}>
                <Badge className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 text-sm cursor-pointer">
                  <Mail className="h-4 w-4 mr-2" />
                  {isEn ? 'Contact Us' : '联系我们'}
                </Badge>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
