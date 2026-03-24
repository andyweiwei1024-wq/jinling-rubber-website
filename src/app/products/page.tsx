import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  ArrowRight,
  Filter,
  Grid,
  List
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products | Shanghai Jinling Electronics',
  description: 'Browse our comprehensive range of electronic components, network cables, fiber optic cables, and communication equipment. Quality products for global markets.',
  keywords: ['electronic components', 'network cables', 'fiber optic', 'Ethernet cables', 'network switches', 'wholesale electronics'],
};

const categories = [
  {
    id: 'network-cables',
    name: 'Network Cables',
    description: 'High-performance Ethernet and fiber optic cables',
  },
  {
    id: 'communication-equipment',
    name: 'Communication Equipment',
    description: 'Network switches, routers, and wireless solutions',
  },
  {
    id: 'electronic-components',
    name: 'Electronic Components',
    description: 'Resistors, capacitors, ICs, and connectors',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Cable management, tools, and installation kits',
  },
];

const products = [
  // Network Cables
  {
    id: 'cat6-ethernet-cable',
    name: 'Cat6 Ethernet Cable',
    category: 'network-cables',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'High-speed Cat6 UTP/FTP network cable for Gigabit Ethernet applications. Available in various lengths and colors.',
    features: ['1000Mbps speed', '250MHz bandwidth', 'Pure copper conductor', 'PVC/LSZH jacket'],
    specifications: {
      'Conductor': '24AWG pure copper',
      'Bandwidth': '250 MHz',
      'Speed': 'Up to 1000 Mbps',
      'Jacket': 'PVC / LSZH',
      'Length': '0.5m - 100m',
    },
  },
  {
    id: 'cat6a-ethernet-cable',
    name: 'Cat6a Ethernet Cable',
    category: 'network-cables',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Enhanced Cat6a cable supporting 10-Gigabit Ethernet with superior shielding for reduced crosstalk.',
    features: ['10Gbps speed', '500MHz bandwidth', 'S/FTP shielding', 'High-performance'],
    specifications: {
      'Conductor': '23AWG pure copper',
      'Bandwidth': '500 MHz',
      'Speed': 'Up to 10 Gbps',
      'Shielding': 'S/FTP',
      'Length': '0.5m - 50m',
    },
  },
  {
    id: 'fiber-optic-cable',
    name: 'Fiber Optic Cable',
    category: 'network-cables',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
    description: 'Single-mode and multi-mode fiber optic cables for long-distance data transmission.',
    features: ['Low attenuation', 'High bandwidth', 'Single/Multi mode', 'Various connectors'],
    specifications: {
      'Type': 'Single-mode / Multi-mode',
      'Core': '9μm / 50μm / 62.5μm',
      'Connector': 'LC, SC, FC, ST',
      'Jacket': 'Indoor / Outdoor',
      'Length': 'Custom',
    },
  },
  {
    id: 'patch-cable',
    name: 'Patch Cable',
    category: 'network-cables',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'High-quality patch cables for data centers and network closets.',
    features: ['Various lengths', 'Multiple colors', 'Snagless boot', 'Gold-plated contacts'],
    specifications: {
      'Category': 'Cat5e / Cat6 / Cat6a',
      'Length': '0.3m - 10m',
      'Color': 'Blue, Yellow, Red, etc.',
      'Boot': 'Snagless',
      'Warranty': 'Lifetime',
    },
  },
  // Communication Equipment
  {
    id: 'managed-switch',
    name: 'Managed Network Switch',
    category: 'communication-equipment',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    description: 'Enterprise-grade managed switches with advanced features for network management.',
    features: ['Layer 2/3', 'PoE+ support', 'VLAN management', 'Web/SNMP management'],
    specifications: {
      'Ports': '8/16/24/48 ports',
      'Speed': '10/100/1000 Mbps',
      'PoE': 'Optional PoE+',
      'Management': 'Web, CLI, SNMP',
      'Power': 'AC 100-240V',
    },
  },
  {
    id: 'unmanaged-switch',
    name: 'Unmanaged Network Switch',
    category: 'communication-equipment',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    description: 'Plug-and-play unmanaged switches for simple network expansion.',
    features: ['Plug-and-play', 'Auto-negotiation', 'Metal housing', 'Desktop/Rackmount'],
    specifications: {
      'Ports': '5/8/16/24 ports',
      'Speed': '10/100/1000 Mbps',
      'Case': 'Metal',
      'Mounting': 'Desktop / Rack',
      'Power': 'External adapter',
    },
  },
  {
    id: 'wireless-access-point',
    name: 'Wireless Access Point',
    category: 'communication-equipment',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
    description: 'High-performance wireless access points for enterprise WiFi solutions.',
    features: ['WiFi 6 (802.11ax)', 'Dual-band', 'PoE powered', 'MU-MIMO'],
    specifications: {
      'Standard': '802.11a/b/g/n/ac/ax',
      'Speed': 'Up to 1775 Mbps',
      'Frequency': '2.4GHz + 5GHz',
      'Power': 'PoE / DC adapter',
      'Mount': 'Ceiling / Wall',
    },
  },
  // Electronic Components
  {
    id: 'ic-connectors',
    name: 'IC Connectors',
    category: 'electronic-components',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    description: 'High-quality IC sockets and connectors for various applications.',
    features: ['Various pin counts', 'Low contact resistance', 'High reliability', 'Gold-plated contacts'],
    specifications: {
      'Type': 'DIP, SOP, PLCC, PGA',
      'Pins': '8-240 pins',
      'Pitch': '0.5mm - 2.54mm',
      'Material': 'Phosphor bronze',
      'Contact': 'Gold-plated',
    },
  },
  {
    id: 'terminal-blocks',
    name: 'Terminal Blocks',
    category: 'electronic-components',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    description: 'Industrial-grade terminal blocks for secure wire connections.',
    features: ['Screw clamp', 'Spring clamp', 'High current', 'Modular design'],
    specifications: {
      'Type': 'Screw / Spring clamp',
      'Current': 'Up to 30A',
      'Voltage': 'Up to 400V',
      'Pitch': '2.54mm - 15mm',
      'Material': 'Nylon 66',
    },
  },
  {
    id: 'wire-harness',
    name: 'Wire Harness Assembly',
    category: 'electronic-components',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    description: 'Custom wire harness assemblies for automotive and industrial applications.',
    features: ['Custom design', 'High quality', 'Various connectors', 'Shielded options'],
    specifications: {
      'Wire': 'UL recognized',
      'Connectors': 'JST, Molex, TE, etc.',
      'Shielding': 'Optional',
      'Certification': 'UL, RoHS',
      'MOQ': '100 pcs',
    },
  },
  // Accessories
  {
    id: 'cable-manager',
    name: 'Cable Manager',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    description: 'Professional cable management solutions for organized installations.',
    features: ['Horizontal/Vertical', '1U/2U sizes', 'Metal construction', 'Easy installation'],
    specifications: {
      'Type': 'Horizontal / Vertical',
      'Size': '1U, 2U',
      'Material': 'Steel',
      'Finish': 'Powder coated',
      'Mount': '19" rack',
    },
  },
  {
    id: 'patch-panel',
    name: 'Patch Panel',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    description: 'Cat5e/Cat6 patch panels for structured cabling systems.',
    features: ['12/24/48 ports', 'Cat5e/Cat6', '110/punch down', 'Numbered ports'],
    specifications: {
      'Ports': '12/24/48',
      'Category': 'Cat5e / Cat6',
      'Type': '110 punch down',
      'Mount': '19" rack, 1U',
      'Labeling': 'Numbered',
    },
  },
];

export default function ProductsPage() {
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
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="/products" className="text-sm font-medium hover:text-blue-600 transition-colors">Products</Link>
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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Explore our comprehensive range of electronic components and network solutions
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
                <TabsTrigger value="all">All Products</TabsTrigger>
                {categories.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id} className="hidden sm:inline-flex">
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="name-az">Name (A-Z)</SelectItem>
                    <SelectItem value="name-za">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* All Products */}
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                    <div className="aspect-[4/3] relative bg-gray-200">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="secondary" className="w-fit mb-2">
                        {categories.find(c => c.id === product.category)?.name}
                      </Badge>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
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
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Category Tabs */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {products
                    .filter(p => p.category === category.id)
                    .map((product) => (
                      <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                        <div className="aspect-[4/3] relative bg-gray-200">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
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
                              View Details
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Need Custom Solutions?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            We offer customization services for specific requirements. Contact our team for OEM/ODM inquiries.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Request Custom Quote
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
