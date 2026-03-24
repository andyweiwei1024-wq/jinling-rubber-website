import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://www.shjinling.com'),
  title: {
    default: '上海金铃橡胶制品有限公司 | 专业防护服与橡胶制品制造商',
    template: '%s | 上海金铃橡胶制品',
  },
  description: '上海金铃橡胶制品有限公司专业生产防护服、雨衣、工装等橡胶制品。产品包括连体防护服、隔热防护服、防化服、雨衣套装等，广泛应用于化工、冶金、户外作业等行业。ISO 9001认证企业，产品出口全球50+国家。',
  keywords: [
    '上海金铃橡胶',
    '防护服',
    '隔热防护服',
    '防化防护服',
    '雨衣',
    '工装',
    '橡胶制品',
    '连体防护服',
    '防雨服',
    '防护工装',
    'PVC防护服',
    '化工防护服',
    '专业防护装备',
    '工装裤',
    '围裙袖套',
  ],
  authors: [{ name: '上海金铃橡胶制品有限公司', url: 'https://www.shjinling.com' }],
  generator: 'Next.js',
  openGraph: {
    title: '上海金铃橡胶制品有限公司 | 专业防护服与橡胶制品制造商',
    description: '专业生产防护服、雨衣、工装等橡胶制品。ISO 9001认证企业，服务全球50+国家。',
    url: 'https://www.shjinling.com',
    siteName: '上海金铃橡胶制品',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '上海金铃橡胶制品 | 专业防护服制造商',
    description: 'ISO 9001认证企业，专业生产防护服、雨衣、工装等橡胶制品。',
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
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="CN-31" />
        <meta name="geo.placename" content="Shanghai" />
        <meta name="author" content="上海金铃橡胶制品有限公司" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
