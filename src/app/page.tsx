import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/structured-data';
import { 
  Cpu, 
  Network, 
  Zap, 
  Globe2, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Electronic Components',
    description: 'High-quality electronic components including resistors, capacitors, ICs, and connectors for various industries.',
  },
  {
    icon: Network,
    title: 'Network Cables',
    description: 'Professional-grade Ethernet cables, fiber optic cables, and structured cabling solutions for reliable connectivity.',
  },
  {
    icon: Zap,
    title: 'Communication Equipment',
    description: 'Advanced network switches, routers, and wireless equipment for enterprise and telecom applications.',
  },
  {
    icon: Globe2,
    title: 'Global Export',
    description: 'Serving customers in 50+ countries with efficient logistics and comprehensive export services.',
  },
];

const stats = [
  { label: 'Years Experience', value: '20+' },
  { label: 'Countries Served', value: '50+' },
  { label: 'Products Categories', value: '1000+' },
  { label: 'Quality Certifications', value: 'ISO 9001' },
];

const products = [
  {
    name: 'Ethernet Cables',
    category: 'Network Cables',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Cat5e, Cat6, Cat6a, Cat7 Ethernet cables for high-speed data transmission.',
  },
  {
    name: 'Fiber Optic Cables',
    category: 'Network Cables',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
    description: 'Single-mode and multi-mode fiber optic cables for long-distance communication.',
  },
  {
    name: 'Network Switches',
    category: 'Communication Equipment',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    description: 'Enterprise-grade managed and unmanaged switches for scalable networks.',
  },
  {
    name: 'Electronic Connectors',
    category: 'Electronic Components',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    description: 'Industrial and consumer connectors with reliable performance.',
  },
];

export default function Home() {
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
              <span className="text-xl font-bold text-white">JL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Shanghai Jinling</span>
              <span className="text-xs text-muted-foreground">Electronics Co., Ltd.</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">Products</Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button>Get Quote</Button>
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
              ISO 9001 Certified Manufacturer
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Professional Electronic Components & Network Solutions
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl">
              Trusted by global enterprises for over 20 years. We provide high-quality electronic components, network cables, and communication equipment with reliable export services.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
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
            <h2 className="text-3xl font-bold tracking-tight">Our Product Range</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for electronic components and network infrastructure
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
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore our best-selling products trusted by customers worldwide
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products">
              <Button size="lg">
                View All Products
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
              <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Shanghai Jinling?</h2>
              <div className="space-y-4">
                {[
                  'ISO 9001:2015 Quality Management System Certified',
                  '20+ years of manufacturing and export experience',
                  'Competitive wholesale pricing for bulk orders',
                  'Comprehensive product range with customization options',
                  'Fast delivery worldwide with reliable logistics partners',
                  'Dedicated technical support and after-sales service',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block mt-8">
                <Button variant="outline">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="p-6">
                <Award className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous quality control processes ensure every product meets international standards.
                </p>
              </Card>
              <Card className="p-6">
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Global Partners</h3>
                <p className="text-sm text-muted-foreground">
                  Trusted by distributors and enterprises in over 50 countries worldwide.
                </p>
              </Card>
              <Card className="p-6">
                <Globe2 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Export Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Professional export team handles customs, documentation, and logistics.
                </p>
              </Card>
              <Card className="p-6">
                <Zap className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Fast Response</h3>
                <p className="text-sm text-muted-foreground">
                  Quick quotation turnaround and responsive customer support team.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact our sales team for product inquiries, quotations, and technical support. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Request a Quote
              </Button>
            </Link>
            <a href="mailto:sales@shjinling.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Email Us Directly
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
                  <span className="text-xl font-bold text-white">JL</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">Shanghai Jinling</span>
                  <span className="text-xs text-gray-400">Electronics Co., Ltd.</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-md">
                Leading manufacturer and exporter of electronic components, network cables, and communication equipment. Serving global markets since 2003.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Shanghai, China</span>
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
            <p>© {new Date().getFullYear()} Shanghai Jinling Electronics Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
