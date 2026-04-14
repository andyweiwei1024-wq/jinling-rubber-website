import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { articles, articleCategories, comments, getArticleField } from '@/lib/articles';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CommentSection } from '@/components/comment-section';
import { RelatedProducts } from '@/components/RelatedProducts';
import { Language } from '@/lib/i18n/config';

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  
  for (const lang of Object.keys(languages)) {
    for (const article of articles) {
      params.push({ lang, slug: article.slug });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) {
    return { title: 'Article Not Found' };
  }

  const title = lang === 'en' 
    ? (article.metaTitleEn || article.titleEn)
    : (article.metaTitle || article.title);
  const description = lang === 'en'
    ? (article.metaDescriptionEn || article.excerptEn)
    : (article.metaDescription || article.excerpt);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [lang === 'en' ? article.authorEn : article.author],
      images: [article.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { lang, slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const isEn = lang === 'en';
  const prefix = `/${lang}`;
  const articleComments = comments.filter(c => c.articleId === article.id && c.approved);

  const t = {
    publishedOn: isEn ? 'Published on' : '发布于',
    by: isEn ? 'by' : '作者',
    share: isEn ? 'Share' : '分享',
    relatedArticles: isEn ? 'Related Articles' : '相关文章',
    comments: isEn ? 'Comments' : '评论',
    noComments: isEn ? 'No comments yet. Be the first to comment!' : '暂无评论，快来抢沙发吧！',
    backToBlog: isEn ? 'Back to Blog' : '返回博客',
  };

  // Get related articles (same category)
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const categoryName = isEn
    ? articleCategories.find(c => c.id === article.category)?.nameEn
    : articleCategories.find(c => c.id === article.category)?.name;

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isEn ? article.titleEn : article.title,
    description: isEn ? article.excerptEn : article.excerpt,
    image: article.coverImage,
    author: {
      '@type': 'Organization',
      name: 'Shanghai Jinling Rubber Products Co., Ltd.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Shanghai Jinling Rubber Products Co., Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png',
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div className="text-white">
            <Badge className="mb-4">{categoryName}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-4xl">
              {getArticleField(article, 'title', lang)}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-blue-100">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {getArticleField(article, 'author', lang)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1">
            {/* Cover Image */}
            <div className="mb-8 -mt-16 relative z-20">
              <img
                src={article.coverImage}
                alt={getArticleField(article, 'title', lang)}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <Card className="mb-8">
              <CardContent className="prose prose-lg max-w-none py-8">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: (isEn ? article.contentEn : article.content)
                      .replace(/\n/g, '<br/>')
                      .replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                      .replace(/### /g, '<h3 class="text-xl font-bold mt-6 mb-3">')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/- /g, '<li class="ml-4">')
                      .replace(/\d\. /g, '<li class="ml-4 list-decimal">')
                  }} 
                />
              </CardContent>
            </Card>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(isEn ? article.tagsEn : article.tags).map((tag, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Related Products */}
            <RelatedProducts 
              category={article.category === 'products' ? 'protective-suits' : undefined}
              lang={lang as Language}
              maxItems={3}
            />

            {/* Share Buttons */}
            <Card className="mb-8">
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">{t.share}:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://jinling-rubber.com/${lang}/blog/${article.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://jinling-rubber.com/${lang}/blog/${article.slug}`)}&text=${encodeURIComponent(isEn ? article.titleEn : article.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://jinling-rubber.com/${lang}/blog/${article.slug}`)}&title=${encodeURIComponent(isEn ? article.titleEn : article.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">{t.comments}</h2>
              </CardHeader>
              <CardContent>
                <CommentSection 
                  articleId={article.id} 
                  comments={articleComments}
                  lang={lang}
                />
              </CardContent>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Back to Blog */}
              <Link href={`${prefix}/blog`}>
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.backToBlog}
                </Button>
              </Link>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold">{t.relatedArticles}</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        href={`${prefix}/blog/${related.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <img
                            src={related.coverImage}
                            alt=""
                            className="w-16 h-16 object-cover rounded flex-shrink-0"
                          />
                          <div>
                            <h4 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {getArticleField(related, 'title', lang)}
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              {related.publishedAt}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}

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
