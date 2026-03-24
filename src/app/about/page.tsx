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
  title: 'About Us | Shanghai Jinling Electronics',
  description: 'Learn about Shanghai Jinling Electronics Co., Ltd. - A leading ISO 9001 certified manufacturer of electronic components and network solutions with 20+ years of experience.',
  keywords: ['about Shanghai Jinling', 'electronics manufacturer', 'company profile', 'ISO 9001 certified'],
};

const timeline = [
  {
    year: '2003',
    title: 'Company Founded',
    description: 'Shanghai Jinling Electronics Co., Ltd. was established in Shanghai, focusing on electronic components manufacturing.',
  },
  {
    year: '2008',
    title: 'Network Solutions Division',
    description: 'Expanded product line to include network cables and communication equipment, serving domestic telecom market.',
  },
  {
    year: '2012',
    title: 'ISO 9001 Certification',
    description: 'Achieved ISO 9001:2008 quality management system certification, marking our commitment to quality.',
  },
  {
    year: '2016',
    title: 'Global Export Initiative',
    description: 'Started comprehensive export services, expanding to markets in Europe, America, and Southeast Asia.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Implemented advanced ERP systems and automated production lines for improved efficiency.',
  },
  {
    year: '2024',
    title: 'Sustainability Focus',
    description: 'Launched green manufacturing initiatives and eco-friendly product lines.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We maintain rigorous quality control standards throughout our manufacturing process, ensuring every product meets international specifications.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do. We strive to understand their needs and provide tailored solutions.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We continuously invest in research and development to bring cutting-edge products to the market.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with honesty and transparency, building long-term relationships with our partners.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We are committed to environmental responsibility through green manufacturing practices.',
  },
  {
    icon: Globe2,
    title: 'Global Vision',
    description: 'We aim to be a leading global supplier, serving customers across all continents.',
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
              <span className="text-xl font-bold text-white">JL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Shanghai Jinling</span>
              <span className="text-xs text-muted-foreground">Electronics Co., Ltd.</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About Us</Link>
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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              About Shanghai Jinling Electronics
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              A leading manufacturer of electronic components and network solutions, 
              dedicated to quality, innovation, and customer satisfaction since 2003.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                Shanghai Jinling Electronics Co., Ltd. is a professional manufacturer and exporter 
                specializing in electronic components, network cables, and communication equipment. 
                Located in Shanghai, China's economic hub, we have been serving global customers 
                with quality products and reliable services for over two decades.
              </p>
              <p className="text-muted-foreground mb-4">
                Our state-of-the-art manufacturing facility covers over 20,000 square meters, 
                equipped with advanced production lines and testing equipment. We maintain strict 
                quality control processes certified by ISO 9001:2015, ensuring every product 
                meets international standards.
              </p>
              <p className="text-muted-foreground">
                With a dedicated team of over 200 professionals, including experienced engineers 
                and quality specialists, we provide comprehensive solutions for various industries 
                including telecommunications, data centers, industrial automation, and consumer electronics.
              </p>
            </div>
            <div className="grid gap-4 grid-cols-2">
              <Card className="p-6 text-center">
                <Building2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600">20,000+</div>
                <p className="text-sm text-muted-foreground mt-1">Sq. Meters Facility</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <p className="text-sm text-muted-foreground mt-1">Team Members</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <p className="text-sm text-muted-foreground mt-1">Countries Served</p>
              </Card>
              <Card className="p-6 text-center">
                <Factory className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <p className="text-sm text-muted-foreground mt-1">Product Types</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From a local manufacturer to a global supplier, our growth story
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
            <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our business and relationships
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
            <h2 className="text-3xl font-bold tracking-tight">Certifications & Compliance</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is backed by internationally recognized certifications
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-muted-foreground">
                Quality Management System Certification
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">CE / FCC / RoHS</h3>
              <p className="text-sm text-muted-foreground">
                Product Compliance Certifications
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Leaf className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">ISO 14001</h3>
              <p className="text-sm text-muted-foreground">
                Environmental Management System
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Partner With Us</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join our global network of satisfied customers and distributors. 
            Let's build a successful partnership together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Products
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
                <li>Shanghai, China</li>
                <li>+86-21-XXXXXXXX</li>
                <li>sales@shjinling.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© {new Date().getFullYear()} Shanghai Jinling Electronics Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
