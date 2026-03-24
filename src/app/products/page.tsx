import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger,
  TabsContent 
} from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { products, productCategories, getProductsByCategory } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '产品中心 | 上海金铃橡胶制品',
  description: '浏览上海金铃橡胶制品有限公司的产品系列，包括防护服、雨衣、工装等专业防护装备。适用于化工、冶金、户外作业等行业。',
  keywords: ['防护服', '雨衣', '工装', '橡胶制品', '防化服', '隔热服', '防雨服', '工装裤'],
};

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <span className="text-xl font-bold text-white">金铃</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">上海金铃橡胶</span>
              <span className="text-xs text-muted-foreground">Shanghai Jinling Rubber</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">首页</Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">关于我们</Link>
            <Link href="/products" className="text-sm font-medium hover:text-blue-600 transition-colors">产品中心</Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">联系我们</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button>获取报价</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              产品中心
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              专业防护装备，满足不同行业需求
            </p>
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <TabsList className="flex-wrap">
                <TabsTrigger value="all">全部产品</TabsTrigger>
                {productCategories.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id} className="hidden sm:inline-flex">
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* All Products */}
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                    <div className="aspect-[4/3] relative bg-gray-200">
                      <img 
                        src={product.images.main} 
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="secondary" className="w-fit mb-2">
                        {productCategories.find(c => c.id === product.category)?.name}
                      </Badge>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <span className="text-xs text-muted-foreground">{product.nameEn}</span>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Link href={`/products/${product.id}`}>
                        <Button className="w-full">
                          查看详情
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Category Tabs */}
            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {getProductsByCategory(category.id).map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                      <div className="aspect-[4/3] relative bg-gray-200">
                        <img 
                          src={product.images.main} 
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <span className="text-xs text-muted-foreground">{product.nameEn}</span>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
                        <Link href={`/products/${product.id}`}>
                          <Button className="w-full">
                            查看详情
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">需要定制产品？</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            我们提供OEM/ODM定制服务，可根据您的需求设计和生产专属产品。请联系我们的团队了解详情。
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              询价定制产品
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                  <span className="text-lg font-bold text-white">金铃</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">上海金铃橡胶制品</span>
                  <span className="text-xs text-gray-400">Shanghai Jinling Rubber</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-md">
                上海金铃橡胶制品有限公司是一家专业生产防护服、雨衣、工装等橡胶制品的企业。拥有20余年生产经验，产品出口全球50+国家。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">快速链接</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">首页</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">关于我们</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">产品中心</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">联系方式</h3>
              <ul className="space-y-3 text-sm">
                <li>上海市</li>
                <li>+86-21-XXXXXXXX</li>
                <li>sales@shjinling.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© {new Date().getFullYear()} 上海金铃橡胶制品有限公司 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
