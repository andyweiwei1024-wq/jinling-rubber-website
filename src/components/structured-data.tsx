import Script from 'next/script';

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '上海金铃橡胶制品有限公司',
    alternateName: 'Shanghai Jinling Rubber Products Co., Ltd.',
    url: 'https://www.shjinling.com',
    logo: 'https://www.shjinling.com/logo.png',
    description: '专业生产防护服、雨衣、工装等橡胶制品的企业。ISO 9001认证，产品出口全球50+国家。',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room 603, Building 1, Lane 1550 Pingliang Road',
      addressLocality: 'Yangpu District, Shanghai',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-21-65392338',
      contactType: 'sales',
      email: 'weiwei@jinlingrubber.com.cn',
      availableLanguage: ['中文', 'English'],
    },
    sameAs: [],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '上海金铃橡胶制品',
    url: 'https://www.shjinling.com',
    description: '专业防护服和橡胶制品制造商',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.shjinling.com/products?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Schema
interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  category: string;
  brand?: string;
}

export function ProductSchema({ name, description, image, category, brand = '上海金铃' }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    category,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    manufacturer: {
      '@type': 'Organization',
      name: '上海金铃橡胶制品有限公司',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'CNY',
      seller: {
        '@type': 'Organization',
        name: '上海金铃橡胶制品有限公司',
      },
    },
  };

  return (
    <Script
      id={`product-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.shjinling.com',
    name: '上海金铃橡胶制品有限公司',
    description: '专业生产防护服、雨衣、工装等橡胶制品的企业',
    url: 'https://www.shjinling.com',
    telephone: '+86-21-65392338',
    email: 'weiwei@jinlingrubber.com.cn',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room 603, Building 1, Lane 1550 Pingliang Road',
      addressLocality: 'Yangpu District, Shanghai',
      addressCountry: 'CN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '31.2304',
      longitude: '121.4737',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'CNY, USD, EUR',
    paymentAccepted: 'T/T, L/C, PayPal',
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
