import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Globe2, 
  Factory,
  CheckCircle2,
  ArrowRight,
  Shield,
  Leaf,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: '关于我们 | 上海金铃橡胶制品',
  description: '了解上海金铃橡胶制品有限公司 - 专业防护服和橡胶制品制造商，ISO 9001认证企业，拥有20余年行业经验。',
  keywords: ['关于上海金铃', '橡胶制品制造商', '公司简介', 'ISO 9001认证', '防护服厂家'],
};

const timeline = [
  {
    year: '2003',
    title: '公司成立',
    description: '上海金铃橡胶制品有限公司在上海成立，专注于橡胶制品的研发和生产。',
  },
  {
    year: '2008',
    title: '防护服系列上线',
    description: '推出专业防护服产品线，包括防化服、隔热服等，服务于化工、冶金等行业。',
  },
  {
    year: '2012',
    title: 'ISO 9001认证',
    description: '获得ISO 9001:2008质量管理体系认证，标志着公司质量管理的全面提升。',
  },
  {
    year: '2016',
    title: '拓展海外市场',
    description: '开始大规模出口业务，产品销往欧洲、美洲、东南亚等地区。',
  },
  {
    year: '2020',
    title: '产品线扩展',
    description: '新增雨衣系列和工装系列，产品种类超过100种。',
  },
  {
    year: '2024',
    title: '持续发展',
    description: '服务全球50+国家客户，成为防护装备行业的知名品牌。',
  },
];

const values = [
  {
    icon: Shield,
    title: '品质至上',
    description: '严格的质量控制流程，确保每一件产品都符合国际标准，为客户提供可靠的防护保障。',
  },
  {
    icon: Users,
    title: '客户为本',
    description: '深入了解客户需求，提供专业的产品解决方案和贴心的售后服务。',
  },
  {
    icon: Target,
    title: '持续创新',
    description: '不断投入研发，采用新材料、新工艺，提升产品性能和舒适度。',
  },
  {
    icon: Heart,
    title: '诚信经营',
    description: '坚持诚信经营，与客户建立长期稳定的合作关系。',
  },
  {
    icon: Leaf,
    title: '环保责任',
    description: '注重环保，采用环保材料，践行绿色制造理念。',
  },
  {
    icon: Globe2,
    title: '全球视野',
    description: '立足国内，放眼全球，致力于成为国际知名的防护装备品牌。',
  },
];

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">关于我们</Link>
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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">公司简介</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              关于上海金铃橡胶制品
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              专业防护装备制造商，致力于为客户提供安全可靠的防护解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">公司概况</h2>
              <p className="text-muted-foreground mb-4">
                上海金铃橡胶制品有限公司是一家专业生产防护服、雨衣、工装等橡胶制品的企业。公司成立于2003年，位于中国经济中心上海，拥有现代化的生产设施和专业的技术团队。
              </p>
              <p className="text-muted-foreground mb-4">
                我们的产品涵盖防护服系列、雨衣系列、工装系列等多个品类，广泛应用于化工、冶金、建筑、户外作业、餐饮等多个行业。凭借优质的产品质量和专业的服务，我们的产品远销全球50多个国家和地区。
              </p>
              <p className="text-muted-foreground">
                公司始终坚持"品质至上、客户为本"的经营理念，通过了ISO 9001质量管理体系认证，所有产品均符合相关国际标准，为客户提供可靠的防护保障。
              </p>
            </div>
            <div className="grid gap-4 grid-cols-2">
              <Card className="p-6 text-center">
                <Building2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600">10000+</div>
                <p className="text-sm text-muted-foreground mt-1">平方米厂房</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <p className="text-sm text-muted-foreground mt-1">员工人数</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <p className="text-sm text-muted-foreground mt-1">出口国家</p>
              </Card>
              <Card className="p-6 text-center">
                <Factory className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <p className="text-sm text-muted-foreground mt-1">产品种类</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">发展历程</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              从创业到发展，见证金铃橡胶的成长之路
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold rounded-full">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-blue-200 mt-4" />
                  )}
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">核心价值观</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              指引我们前进的理念和原则
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <value.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">资质认证</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              国际认可的质量认证体系
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-muted-foreground">
                质量管理体系认证
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">CE / RoHS</h3>
              <p className="text-sm text-muted-foreground">
                欧洲产品合规认证
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Leaf className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">环保认证</h3>
              <p className="text-sm text-muted-foreground">
                环保材料使用认证
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">与金铃橡胶合作</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            加入我们的全球客户网络，体验专业的防护装备和优质的服务。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                联系我们
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                浏览产品
              </Button>
            </Link>
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
