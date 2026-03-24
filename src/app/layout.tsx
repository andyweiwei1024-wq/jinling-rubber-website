import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://example.com'),
  title: {
    default: 'Shanghai Jinling | Professional Electronic Components & Network Solutions',
    template: '%s | Shanghai Jinling',
  },
  description: 'Shanghai Jinling specializes in high-quality electronic components, network cables, communication equipment, and comprehensive network solutions for global markets. ISO 9001 certified manufacturer with 20+ years experience.',
  keywords: [
    'electronic components',
    'network cables',
    'communication equipment',
    'network solutions',
    'Ethernet cables',
    'fiber optic cables',
    'network switches',
    'wireless solutions',
    'structured cabling',
    'data center solutions',
    'Shanghai Jinling',
    'electronics manufacturer',
    'wholesale electronics',
    'B2B electronics',
  ],
  authors: [{ name: 'Shanghai Jinling Electronics Co., Ltd.', url: 'https://www.shjinling.com' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Shanghai Jinling | Leading Electronic Components Manufacturer',
    description: 'Professional manufacturer of electronic components, network cables, and communication equipment. Serving global markets with quality products and reliable service.',
    url: 'https://www.shjinling.com',
    siteName: 'Shanghai Jinling',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanghai Jinling | Electronic Components & Network Solutions',
    description: 'ISO 9001 certified manufacturer specializing in electronic components, network cables, and communication equipment.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.shjinling.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="CN-31" />
        <meta name="geo.placename" content="Shanghai" />
        <meta name="author" content="Shanghai Jinling Electronics Co., Ltd." />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
