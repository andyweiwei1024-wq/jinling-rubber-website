import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getProductById, products, productCategories } from '@/lib/products';
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    return { title: '产品未找到' };
  }

  return {
    title: `${product.name} | 上海金铃橡胶制品`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      '防护服',
      '橡胶制品',
      '批发',
    ],
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images.main],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const category = productCategories.find(c => c.id === product.category);

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container px-4 py-3 mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-blue-600">首页</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/products" className="text-muted-foreground hover:text-blue-600">产品中心</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <main className="flex-1 py-12">
        <div className="container px-4 mx-auto">
          <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回产品列表
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] relative bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.images.main} 
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              {product.images.side && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] relative bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={product.images.side} 
                      alt={`${product.name} - 侧面`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {product.images.additional && product.images.additional[0] && (
                    <div className="aspect-[4/3] relative bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={product.images.additional[0]} 
                        alt={`${product.name} - 细节`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4">{category?.name}</Badge>
              <h1 className="text-3xl font-bold tracking-tight mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{product.nameEn}</p>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              <Separator className="my-6" />

              {/* Features */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">产品特点</h2>
                <div className="grid gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Applications */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">应用场景</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <Badge key={index} variant="outline">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/contact" className="flex-1">
                  <Button size="lg" className="w-full">
                    询价购买
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="mailto:sales@shjinling.com" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    发送邮件
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>产品规格</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="font-medium py-3 px-4 w-1/3">{key}</td>
                          <td className="py-3 px-4">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-100">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">电话咨询</h3>
                  <p className="text-sm text-muted-foreground">+86-21-XXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">邮件联系</h3>
                  <p className="text-sm text-muted-foreground">sales@shjinling.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">在线询价</h3>
                  <Link href="/contact" className="text-sm text-blue-600 hover:underline">
                    填写询价表单 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
