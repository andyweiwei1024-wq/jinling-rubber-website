'use client';

import Script from 'next/script';

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shanghai Jinling Electronics Co., Ltd.',
    url: 'https://www.shjinling.com',
    logo: 'https://www.shjinling.com/logo.png',
    description: 'Leading manufacturer and exporter of electronic components, network cables, and communication equipment. ISO 9001 certified with 20+ years experience.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Shanghai',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-21-XXXXXXXX',
      contactType: 'sales',
      email: 'sales@shjinling.com',
      availableLanguage: ['English', 'Chinese'],
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
    name: 'Shanghai Jinling Electronics',
    url: 'https://www.shjinling.com',
    description: 'Professional manufacturer of electronic components and network solutions',
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

export function ProductSchema({ name, description, image, category, brand = 'Shanghai Jinling' }: ProductSchemaProps) {
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
      name: 'Shanghai Jinling Electronics Co., Ltd.',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: {
        '@type': 'Organization',
        name: 'Shanghai Jinling Electronics Co., Ltd.',
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
    name: 'Shanghai Jinling Electronics Co., Ltd.',
    description: 'Professional manufacturer and exporter of electronic components and network solutions',
    url: 'https://www.shjinling.com',
    telephone: '+86-21-XXXXXXXX',
    email: 'sales@shjinling.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Shanghai',
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
    currenciesAccepted: 'USD, EUR, CNY',
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
