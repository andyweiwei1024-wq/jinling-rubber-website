import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { articles, articleCategories, getArticleField } from '@/lib/articles';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  
  return {
    title: isEn ? 'Blog - Industry News & Product Guides | Shanghai Jinling Rubber' : '博客 - 行业动态与产品指南 | 上海金铃橡胶',
    description: isEn 
      ? 'Explore our latest articles on industrial safety, product guides, and industry news. Expert insights from Shanghai Jinling Rubber Products Co., Ltd.'
      : '探索我们的最新文章，包括行业动态、产品指南和安全知识。上海金铃橡胶制品有限公司专业分享。',
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const prefix = `/${lang}`;

  const t = {
    title: isEn ? 'Blog' : '博客',
    subtitle: isEn ? 'Industry News & Product Guides' : '行业动态与产品指南',
    readMore: isEn ? 'Read More' : '阅读全文',
    featured: isEn ? 'Featured' : '推荐',
    allArticles: isEn ? 'All Articles' : '全部文章',
    filterByCategory: isEn ? 'Filter by Category' : '按分类筛选',
    allCategories: isEn ? 'All Categories' : '全部分类',
    publishedOn: isEn ? 'Published on' : '发布于',
    by: isEn ? 'by' : '作者',
  };

  const featuredArticles = articles.filter(a => a.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-100">{t.subtitle}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">
                    {t.featured}
                  </Badge>
                  {t.featured}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredArticles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative">
                        <img
                          src={article.coverImage}
                          alt={getArticleField(article, 'title', lang)}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 left-3 bg-yellow-500">
                          {t.featured}
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Badge variant="outline">
                            {lang === 'ar' 
                              ? articleCategories.find(c => c.id === article.category)?.nameAr 
                              : lang === 'de'
                              ? articleCategories.find(c => c.id === article.category)?.nameDe
                              : lang === 'es'
                              ? articleCategories.find(c => c.id === article.category)?.nameEs
                              : isEn 
                              ? articleCategories.find(c => c.id === article.category)?.nameEn 
                              : articleCategories.find(c => c.id === article.category)?.name}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold line-clamp-2">
                          <Link href={`${prefix}/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                            {getArticleField(article, 'title', lang)}
                          </Link>
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3">
                          {getArticleField(article, 'excerpt', lang)}
                        </p>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.publishedAt}
                          </span>
                        </div>
                        <Link href={`${prefix}/blog/${article.slug}`}>
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            {t.readMore} <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.allArticles}</h2>
              <div className="space-y-6">
                {articles.map((article) => (
                  <Card key={article.id} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:w-64 md:flex-shrink-0">
                      <img
                        src={article.coverImage}
                        alt={getArticleField(article, 'title', lang)}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Badge variant="outline">
                          {lang === 'ar' 
                            ? articleCategories.find(c => c.id === article.category)?.nameAr 
                            : lang === 'de'
                            ? articleCategories.find(c => c.id === article.category)?.nameDe
                            : lang === 'es'
                            ? articleCategories.find(c => c.id === article.category)?.nameEs
                            : isEn 
                            ? articleCategories.find(c => c.id === article.category)?.nameEn 
                            : articleCategories.find(c => c.id === article.category)?.name}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.publishedAt}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href={`${prefix}/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                          {getArticleField(article, 'title', lang)}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {getArticleField(article, 'excerpt', lang)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {getArticleField(article, 'author', lang)}
                        </div>
                        <Link href={`${prefix}/blog/${article.slug}`}>
                          <Button variant="outline" size="sm">
                            {t.readMore} <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">{t.filterByCategory}</h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href={`${prefix}/blog`} className="block py-2 px-3 rounded hover:bg-gray-100 transition-colors">
                    {t.allCategories}
                  </Link>
                  {articleCategories.map((category) => (
                    <Link 
                      key={category.id}
                      href={`${prefix}/blog?category=${category.id}`}
                      className="block py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                    >
                      {lang === 'ar' 
                        ? category.nameAr 
                        : lang === 'de'
                        ? category.nameDe
                        : lang === 'es'
                        ? category.nameEs
                        : isEn 
                        ? category.nameEn 
                        : category.name}
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-blue-600 text-white">
                <CardHeader>
                  <h3 className="font-semibold">
                    {isEn ? 'Need Products?' : '需要产品？'}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4 text-sm">
                    {isEn 
                      ? 'Contact us for professional protective equipment solutions.'
                      : '联系我们获取专业防护装备解决方案。'}
                  </p>
                  <Link href={`${prefix}/contact`}>
                    <Button variant="secondary" className="w-full">
                      {isEn ? 'Contact Us' : '联系我们'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
