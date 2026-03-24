import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/structured-data';
import { products, productCategories, getProductsByCategory } from '@/lib/products';
import { 
  Shield, 
  CloudRain, 
  HardHat, 
  Globe2, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Factory,
  Truck,
  Leaf
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '防护服系列',
    titleEn: 'Protective Suits',
    description: '专业级连体防护服，包括送风式防护服、隔热防护服、防化防护服，适用于化工、冶金、危险品处理等特殊作业环境。',
  },
  {
    icon: CloudRain,
    title: '雨衣系列',
    titleEn: 'Rainwear Series',
    description: '分体式/连体式雨衣套装，防水透气，配备反光条设计，适用于户外作业、路政施工、雨天通勤等场景。',
  },
  {
    icon: HardHat,
    title: '工装系列',
    titleEn: 'Workwear Series',
    description: '背带式工装裤、围裙袖套套装等，耐磨防水，适用于机械维修、餐饮后厨、建筑施工等多种作业环境。',
  },
  {
    icon: Globe2,
    title: '全球出口',
    titleEn: 'Global Export',
    description: '产品出口至全球50+国家和地区，提供完善的出口物流服务和产品认证支持。',
  },
];

const stats = [
  { label: '年行业经验', value: '20+' },
  { label: '出口国家', value: '50+' },
  { label: '产品种类', value: '100+' },
  { label: '质量认证', value: 'ISO 9001' },
];

export default function Home() {
  // 获取各系列的代表性产品
  const protectiveProducts = getProductsByCategory('protective-suits').slice(0, 3);
  const rainwearProducts = getProductsByCategory('rainwear').slice(0, 3);
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <LocalBusinessSchema />
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
              <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">首页</Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">关于我们</Link>
              <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">产品中心</Link>
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
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
          <div className="absolute inset-0 bg-white/5 opacity-20" />
          <div className="container relative px-4 py-20 mx-auto sm:py-32">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-0">
                ISO 9001 认证企业
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                专业防护服与橡胶制品制造商
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-2xl">
                上海金铃橡胶制品有限公司专注防护服装20余年，产品涵盖防护服、雨衣、工装等橡胶制品，服务全球50+国家客户。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    浏览产品
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    联系我们
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 border-y">
          <div className="container px-4 py-12 mx-auto">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">产品系列</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                专业防护装备，满足不同行业需求
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-blue-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <span className="text-xs text-muted-foreground">{feature.titleEn}</span>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">热门产品</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                浏览我们的明星产品，深受全球客户信赖
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
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
            <div className="mt-10 text-center">
              <Link href="/products">
                <Button size="lg">
                  查看全部产品
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">为什么选择上海金铃？</h2>
                <div className="space-y-4">
                  {[
                    'ISO 9001:2015 质量管理体系认证',
                    '20+年橡胶制品生产和出口经验',
                    '专业的防护装备研发团队',
                    '支持OEM/ODM定制服务',
                    '快速交付，全球物流网络',
                    '完善的售后服务体系',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="inline-block mt-8">
                  <Button variant="outline">
                    了解更多
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-6">
                  <Award className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">品质保证</h3>
                  <p className="text-sm text-muted-foreground">
                    严格的质量控制流程，确保每一件产品都符合国际标准。
                  </p>
                </Card>
                <Card className="p-6">
                  <Users className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">全球客户</h3>
                  <p className="text-sm text-muted-foreground">
                    产品销往全球50多个国家和地区，深受客户信赖。
                  </p>
                </Card>
                <Card className="p-6">
                  <Factory className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">自主研发</h3>
                  <p className="text-sm text-muted-foreground">
                    拥有专业的研发团队，持续创新防护装备技术。
                  </p>
                </Card>
                <Card className="p-6">
                  <Truck className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">快速交付</h3>
                  <p className="text-sm text-muted-foreground">
                    完善的供应链体系，确保订单准时交付。
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">准备开始合作？</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              无论您需要标准产品还是定制解决方案，我们的团队随时为您提供专业服务。24小时内响应您的询盘。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  立即询价
                </Button>
              </Link>
              <a href="mailto:sales@shjinling.com">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" />
                  发送邮件
                </Button>
              </a>
            </div>
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
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>上海市</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>+86-21-XXXXXXXX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>sales@shjinling.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
              <p>© {new Date().getFullYear()} 上海金铃橡胶制品有限公司 版权所有</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
