import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

// Product data (in real app, this would come from a database)
const products = [
  {
    id: 'cat6-ethernet-cable',
    name: 'Cat6 Ethernet Cable',
    category: 'Network Cables',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'High-speed Cat6 UTP/FTP network cable for Gigabit Ethernet applications. Engineered for superior performance in both commercial and residential installations.',
    longDescription: `Our Cat6 Ethernet cables are manufactured to exceed industry standards, providing reliable high-speed connectivity for demanding network applications. 

With 250MHz bandwidth support and pure copper conductors, these cables deliver consistent performance for Gigabit Ethernet, VoIP, video streaming, and other bandwidth-intensive applications.

Available in multiple lengths and jacket types (PVC for indoor use, LSZH for plenum spaces), our Cat6 cables are the professional choice for structured cabling systems.`,
    features: [
      '1000Mbps speed capability',
      '250MHz bandwidth',
      'Pure copper conductor',
      'PVC/LSZH jacket options',
      'Available in various lengths (0.5m - 100m)',
      'Multiple color options',
      'UL certified',
      'RoHS compliant',
    ],
    specifications: {
      'Conductor': '24AWG pure copper',
      'Bandwidth': '250 MHz',
      'Speed': 'Up to 1000 Mbps',
      'Jacket': 'PVC / LSZH',
      'Length Options': '0.5m - 100m',
      'Color Options': 'Blue, Yellow, Red, Black, White, Green',
      'Certifications': 'UL, RoHS, CE',
      'Packaging': 'Individual bag or bulk box',
    },
    applications: [
      'Office networks',
      'Data centers',
      'Home networking',
      'Security systems',
      'VoIP phones',
      'PoE applications',
    ],
  },
  {
    id: 'cat6a-ethernet-cable',
    name: 'Cat6a Ethernet Cable',
    category: 'Network Cables',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'Enhanced Cat6a cable supporting 10-Gigabit Ethernet with superior shielding for reduced crosstalk.',
    longDescription: `Cat6a cables represent the next generation of Ethernet cabling, designed to support 10-Gigabit speeds over the full 100-meter channel distance.

The enhanced S/FTP shielding effectively eliminates alien crosstalk, making these cables ideal for dense installations where multiple cables run in close proximity.

Perfect for data centers, enterprise networks, and any application requiring future-proof bandwidth capacity.`,
    features: [
      '10Gbps speed capability',
      '500MHz bandwidth',
      'S/FTP shielding',
      'Pure copper conductor',
      'High-performance',
      'Future-proof design',
    ],
    specifications: {
      'Conductor': '23AWG pure copper',
      'Bandwidth': '500 MHz',
      'Speed': 'Up to 10 Gbps',
      'Shielding': 'S/FTP (foil + braid)',
      'Length Options': '0.5m - 50m',
      'Certifications': 'UL, RoHS, CE',
    },
    applications: [
      'Data centers',
      'Enterprise networks',
      'High-performance computing',
      'Video production',
      'Medical imaging',
    ],
  },
  {
    id: 'fiber-optic-cable',
    name: 'Fiber Optic Cable',
    category: 'Network Cables',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    description: 'Single-mode and multi-mode fiber optic cables for long-distance data transmission.',
    longDescription: `Our fiber optic cables provide the ultimate solution for high-bandwidth, long-distance data transmission. Available in both single-mode and multi-mode variants.

Single-mode fiber is ideal for long-distance applications (up to 100km) with minimal signal loss, while multi-mode fiber is perfect for campus and building backbones (up to 2km).

All cables feature tight-buffered or loose-tube construction options, with various connector types including LC, SC, FC, and ST.`,
    features: [
      'Low attenuation',
      'High bandwidth',
      'Single/Multi mode options',
      'Various connector types',
      'Indoor/Outdoor rated',
      'Custom lengths available',
    ],
    specifications: {
      'Type': 'Single-mode / Multi-mode',
      'Core/Cladding': '9/125μm, 50/125μm, 62.5/125μm',
      'Connector Options': 'LC, SC, FC, ST',
      'Jacket': 'OFNR (Indoor) / OFNR (Outdoor)',
      'Attenuation': '<0.35 dB/km (SM), <3.0 dB/km (MM)',
    },
    applications: [
      'Telecommunications',
      'Data centers',
      'Campus networks',
      'FTTH/FTTB',
      'CATV networks',
    ],
  },
  {
    id: 'patch-cable',
    name: 'Patch Cable',
    category: 'Network Cables',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'High-quality patch cables for data centers and network closets.',
    longDescription: `Our factory-terminated patch cables ensure consistent quality and reliable performance. Each cable is 100% tested before shipping.

Available in various categories (Cat5e, Cat6, Cat6a) with snagless boot design to protect the latch during installation and removal.

Color-coded options make cable management and troubleshooting easier in complex network environments.`,
    features: [
      'Various lengths available',
      'Multiple color options',
      'Snagless boot design',
      'Gold-plated contacts',
      '100% tested',
      'Lifetime warranty',
    ],
    specifications: {
      'Category': 'Cat5e / Cat6 / Cat6a',
      'Length Range': '0.3m - 10m',
      'Color Options': 'Blue, Yellow, Red, Green, Black, White',
      'Boot Type': 'Snagless',
      'Contact Material': 'Gold-plated phosphor bronze',
      'Warranty': 'Lifetime',
    },
    applications: [
      'Patch panels',
      'Network switches',
      'Server connections',
      'Workstations',
      'Network closets',
    ],
  },
  {
    id: 'managed-switch',
    name: 'Managed Network Switch',
    category: 'Communication Equipment',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    description: 'Enterprise-grade managed switches with advanced features for network management.',
    longDescription: `Our managed switches provide comprehensive network control with advanced features including VLAN configuration, QoS management, and SNMP monitoring.

Layer 2 and Layer 3 options available, with PoE+ power delivery for IP cameras, VoIP phones, and wireless access points.

Built-in redundancy features including link aggregation, spanning tree protocol, and redundant power supply options ensure maximum uptime.`,
    features: [
      'Layer 2/3 switching',
      'PoE+ support',
      'VLAN management',
      'QoS capabilities',
      'Web/SNMP management',
      'IPv4/IPv6 support',
    ],
    specifications: {
      'Port Options': '8/16/24/48 ports',
      'Port Speed': '10/100/1000 Mbps',
      'PoE Budget': 'Up to 740W',
      'Management': 'Web UI, CLI, SNMP v3',
      'Redundancy': 'STP/RSTP/MSTP, LACP',
      'Power Input': 'AC 100-240V, redundant option',
    },
    applications: [
      'Enterprise networks',
      'Data centers',
      'Campus networks',
      'Industrial environments',
      'Surveillance systems',
    ],
  },
  {
    id: 'unmanaged-switch',
    name: 'Unmanaged Network Switch',
    category: 'Communication Equipment',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    description: 'Plug-and-play unmanaged switches for simple network expansion.',
    longDescription: `Our unmanaged switches offer cost-effective network expansion with zero configuration required. Simply plug in and start using.

Auto-negotiation on all ports automatically detects and configures the optimal speed and duplex settings for connected devices.

Available in desktop and rack-mountable form factors, with fanless options for quiet environments.`,
    features: [
      'Plug-and-play',
      'Auto-negotiation',
      'Auto-MDI/MDIX',
      'Metal housing',
      'Desktop/Rackmount options',
      'Energy efficient',
    ],
    specifications: {
      'Port Options': '5/8/16/24 ports',
      'Port Speed': '10/100/1000 Mbps',
      'Housing': 'Metal',
      'Mounting': 'Desktop / 19" Rack',
      'Power': 'External power adapter',
      'Operating Temp': '0°C - 40°C',
    },
    applications: [
      'Small offices',
      'Home networks',
      'Retail stores',
      'Temporary setups',
      'Simple network expansion',
    ],
  },
  {
    id: 'wireless-access-point',
    name: 'Wireless Access Point',
    category: 'Communication Equipment',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    description: 'High-performance wireless access points for enterprise WiFi solutions.',
    longDescription: `Our wireless access points deliver enterprise-grade WiFi performance with the latest WiFi 6 (802.11ax) technology.

Dual-band operation with MU-MIMO and OFDMA provides efficient connectivity for high-density environments with multiple simultaneous users.

PoE powered for flexible installation, with centralized management options for large-scale deployments.`,
    features: [
      'WiFi 6 (802.11ax)',
      'Dual-band (2.4GHz + 5GHz)',
      'PoE powered',
      'MU-MIMO technology',
      'OFDMA support',
      'WPA3 security',
    ],
    specifications: {
      'WiFi Standard': '802.11a/b/g/n/ac/ax',
      'Max Speed': 'Up to 1775 Mbps',
      'Frequency': '2.4GHz + 5GHz',
      'Power': '802.3af/at PoE / DC adapter',
      'Mounting': 'Ceiling / Wall',
      'Management': 'Standalone / Controller-based',
    },
    applications: [
      'Enterprise WiFi',
      'Hotels and hospitality',
      'Educational institutions',
      'Healthcare facilities',
      'Retail environments',
    ],
  },
  {
    id: 'ic-connectors',
    name: 'IC Connectors',
    category: 'Electronic Components',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    description: 'High-quality IC sockets and connectors for various applications.',
    longDescription: `Our IC connectors and sockets provide reliable interconnection solutions for PCB designs.

Available in various package types including DIP, SOP, PLCC, PGA, and BGA, with different pin counts and pitch options.

Gold-plated contacts ensure low contact resistance and long-term reliability in demanding applications.`,
    features: [
      'Various package types',
      'Multiple pin counts',
      'Low contact resistance',
      'High reliability',
      'Gold-plated contacts',
      'High-temperature rated',
    ],
    specifications: {
      'Package Types': 'DIP, SOP, PLCC, PGA, BGA',
      'Pin Counts': '8 - 240 pins',
      'Pitch': '0.5mm - 2.54mm',
      'Contact Material': 'Phosphor bronze, gold-plated',
      'Operating Temp': '-55°C to +125°C',
      'Current Rating': 'Up to 3A per pin',
    },
    applications: [
      'Consumer electronics',
      'Industrial equipment',
      'Telecommunications',
      'Automotive electronics',
      'Medical devices',
    ],
  },
  {
    id: 'terminal-blocks',
    name: 'Terminal Blocks',
    category: 'Electronic Components',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    description: 'Industrial-grade terminal blocks for secure wire connections.',
    longDescription: `Our terminal blocks provide reliable wire termination for industrial and commercial applications.

Available in screw clamp and spring clamp variants, with various pitch sizes and current ratings to suit different applications.

Modular design allows for flexible configuration, with clear labeling for easy identification and maintenance.`,
    features: [
      'Screw clamp or spring clamp',
      'High current capacity',
      'Modular design',
      'Clear labeling',
      'Multiple colors',
      'UL/VDE certified',
    ],
    specifications: {
      'Clamp Type': 'Screw / Spring',
      'Current Rating': 'Up to 30A',
      'Voltage Rating': 'Up to 400V',
      'Pitch': '2.54mm - 15mm',
      'Wire Range': '0.08mm² - 6mm²',
      'Material': 'Nylon 66, flame retardant',
    },
    applications: [
      'Industrial control panels',
      'Power supplies',
      'Automation equipment',
      'HVAC systems',
      'Building automation',
    ],
  },
  {
    id: 'wire-harness',
    name: 'Wire Harness Assembly',
    category: 'Electronic Components',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    description: 'Custom wire harness assemblies for automotive and industrial applications.',
    longDescription: `Our custom wire harness solutions are designed and manufactured to your exact specifications.

Using high-quality UL-recognized wires and connectors from leading brands (JST, Molex, TE Connectivity), we ensure reliable performance in demanding applications.

Complete in-house capabilities include design assistance, prototyping, and volume production with rigorous quality control.`,
    features: [
      'Custom design service',
      'UL-recognized wires',
      'Brand name connectors',
      'Shielding options',
      '100% electrical testing',
      'Just-in-time delivery',
    ],
    specifications: {
      'Wire Types': 'UL1007, UL1015, UL1032, etc.',
      'Connector Brands': 'JST, Molex, TE, Hirose, etc.',
      'Shielding': 'Foil, braid, or combination',
      'Certifications': 'UL, RoHS, REACH',
      'Testing': 'Continuity, hipot, pull test',
      'MOQ': '100 pieces',
    },
    applications: [
      'Automotive',
      'Industrial machinery',
      'Medical equipment',
      'Consumer electronics',
      'Aerospace',
    ],
  },
  {
    id: 'cable-manager',
    name: 'Cable Manager',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    description: 'Professional cable management solutions for organized installations.',
    longDescription: `Our cable managers keep your network installations neat and professional while facilitating easy maintenance.

Available in horizontal and vertical configurations, with 1U and 2U heights to match standard rack dimensions.

Durable steel construction with powder-coated finish ensures long-lasting performance in data center environments.`,
    features: [
      'Horizontal/Vertical options',
      '1U/2U heights',
      'Steel construction',
      'Powder-coated finish',
      'Easy installation',
      'Cable routing rings',
    ],
    specifications: {
      'Type': 'Horizontal / Vertical',
      'Height': '1U, 2U',
      'Material': 'Cold-rolled steel',
      'Finish': 'Powder coated (black)',
      'Mounting': '19" rack compatible',
      'Weight Capacity': 'Up to 50kg',
    },
    applications: [
      'Server racks',
      'Network cabinets',
      'Data centers',
      'Telecom rooms',
      'Broadcast installations',
    ],
  },
  {
    id: 'patch-panel',
    name: 'Patch Panel',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    description: 'Cat5e/Cat6 patch panels for structured cabling systems.',
    longDescription: `Our patch panels provide the central termination point for structured cabling systems.

Available with 12, 24, or 48 ports in Cat5e or Cat6 configurations, with numbered ports for easy identification and documentation.

Industry-standard 110 punch-down blocks allow for quick and reliable wire termination.`,
    features: [
      '12/24/48 port options',
      'Cat5e or Cat6 versions',
      '110 punch-down type',
      'Numbered ports',
      '19" rack mount',
      'Rear cable management',
    ],
    specifications: {
      'Port Counts': '12, 24, 48 ports',
      'Categories': 'Cat5e, Cat6',
      'Termination': '110 punch-down',
      'Form Factor': '1U 19" rack mount',
      'Labeling': 'Silk-screened numbers',
      'Material': 'Steel frame, ABS ports',
    },
    applications: [
      'Server rooms',
      'Network closets',
      'Data centers',
      'Telecommunications',
      'Office buildings',
    ],
  },
];

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} | Shanghai Jinling Electronics`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      'electronic components',
      'network cables',
      'wholesale',
    ],
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
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
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container px-4 py-3 mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-blue-600">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/products" className="text-muted-foreground hover:text-blue-600">Products</Link>
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
            Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div>
              <div className="aspect-[4/3] relative bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-3xl font-bold tracking-tight mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

              <Separator className="my-6" />

              {/* Features */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Key Features</h2>
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
                <h2 className="text-lg font-semibold mb-4">Applications</h2>
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
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="mailto:sales@shjinling.com" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                  {product.longDescription}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specifications Table */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
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
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+86-21-XXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-sm text-muted-foreground">sales@shjinling.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Get Quote</h3>
                  <Link href="/contact" className="text-sm text-blue-600 hover:underline">
                    Request quotation →
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
