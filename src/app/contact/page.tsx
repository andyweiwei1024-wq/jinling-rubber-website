'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Globe2
} from 'lucide-react';
import { productCategories } from '@/lib/products';

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    content: '上海市',
    description: '欢迎来访考察',
  },
  {
    icon: Phone,
    title: '联系电话',
    content: '+86-21-XXXXXXXX',
    description: '工作日 9:00-18:00',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: 'sales@shjinling.com',
    description: '24小时内回复',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周五 9:00-18:00',
    description: '北京时间 (GMT+8)',
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

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
            <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">产品中心</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">联系我们</Link>
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
              联系我们
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              获取产品报价、技术支持或合作咨询
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">联系方式</h2>
                  <p className="text-muted-foreground">
                    期待与您的合作，请通过以下方式联系我们。
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{info.title}</h3>
                          <p className="text-base font-medium">{info.content}</p>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-blue-50 border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg flex-shrink-0">
                      <Globe2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">全球出口服务</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        我们提供完善的出口服务，包括报关、物流、单证等一站式解决方案。
                      </p>
                      <Badge>服务50+国家客户</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>发送询价</CardTitle>
                  <CardDescription>
                    填写以下表单，我们将在24小时内回复您。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">提交成功！</h3>
                      <p className="text-muted-foreground mb-6">
                        感谢您的咨询，我们将在24小时内回复您。
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        继续询价
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">姓名 *</Label>
                          <Input 
                            id="name" 
                            placeholder="请输入您的姓名" 
                            required 
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">公司名称</Label>
                          <Input 
                            id="company" 
                            placeholder="请输入公司名称" 
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">电子邮箱 *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your@email.com" 
                            required 
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">电话号码</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+86 xxx xxxx xxxx" 
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="country">国家/地区 *</Label>
                          <Input 
                            id="country" 
                            placeholder="请输入国家/地区" 
                            required 
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="product">感兴趣的产品</Label>
                          <Select disabled={isLoading}>
                            <SelectTrigger>
                              <SelectValue placeholder="请选择产品类别" />
                            </SelectTrigger>
                            <SelectContent>
                              {productCategories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                              <SelectItem value="other">其他</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">主题 *</Label>
                        <Input 
                          id="subject" 
                          placeholder="产品询价 / 技术咨询 / 合作洽谈" 
                          required 
                          disabled={isLoading}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">详细内容 *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="请描述您的需求，包括产品型号、数量、规格等详细信息..."
                          rows={6}
                          required 
                          disabled={isLoading}
                        />
                      </div>

                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>
                          我们通常会在24小时内回复工作日的询价。如有紧急需求，请直接电话联系。
                        </span>
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                          '提交中...'
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            提交询价
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">常见问题</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              关于产品和服务的常见问题解答
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">最小起订量是多少？</h3>
                  <p className="text-sm text-muted-foreground">
                    不同产品的起订量有所不同，一般为100件起。具体请咨询我们的销售团队。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">可以提供样品吗？</h3>
                  <p className="text-sm text-muted-foreground">
                    可以提供样品供质量评估，样品费用和运费另计。请联系我们了解详情。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">付款方式有哪些？</h3>
                  <p className="text-sm text-muted-foreground">
                    支持T/T、L/C、PayPal等多种付款方式。标准条款为30%定金，70%发货前付款。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">支持定制吗？</h3>
                  <p className="text-sm text-muted-foreground">
                    是的！我们提供OEM/ODM定制服务，可根据您的需求设计和生产专属产品。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">交货期需要多久？</h3>
                  <p className="text-sm text-muted-foreground">
                    标准产品一般为7-15天，定制产品根据复杂程度需15-30天。具体交期以报价为准。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">产品有哪些认证？</h3>
                  <p className="text-sm text-muted-foreground">
                    公司通过ISO 9001:2015认证，产品符合CE、RoHS等相关国际标准。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">准备开始合作？</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            无论您需要标准产品还是定制解决方案，我们的团队随时准备为您提供专业服务。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sales@shjinling.com">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Mail className="mr-2 h-5 w-5" />
                发送邮件：sales@shjinling.com
              </Button>
            </a>
            <a href="tel:+8621XXXXXXXX">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                电话咨询
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
