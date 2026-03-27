import { Language, defaultLanguage } from './i18n/config';
import { products as productsData, productCategories as categoriesData, Product } from './products';

// Get localized product name
export function getProductName(product: Product, lang: Language): string {
  // 中文返回中文名称，其他语言返回英文名称
  if (lang === 'zh') {
    return product.name;
  }
  return product.nameEn || product.name;
}

// Get localized product description
export function getProductDescription(product: Product, lang: Language): string {
  if (lang === 'zh') {
    return product.description;
  }
  return product.descriptionEn || product.description;
}

// Get localized product features
export function getProductFeatures(product: Product, lang: Language): string[] {
  if (lang === 'zh') {
    return product.features;
  }
  return product.featuresEn.length > 0 ? product.featuresEn : product.features;
}

// Get localized product applications
export function getProductApplications(product: Product, lang: Language): string[] {
  if (lang === 'zh') {
    return product.applications;
  }
  return product.applicationsEn.length > 0 ? product.applicationsEn : product.applications;
}

// Get localized category name
export function getCategoryName(categoryId: string, lang: Language): string {
  const category = categoriesData.find(c => c.id === categoryId);
  if (!category) return categoryId;
  
  if (lang === 'zh') {
    return category.name;
  }
  return category.nameEn || category.name;
}

// Get localized specifications
export function getLocalizedSpecs(specs: Record<string, string>, lang: Language): { label: string; value: string }[] {
  // 支持多语言：英语、中文、阿拉伯语、德语、西班牙语
  const specLabels: Record<string, Record<string, string>> = {
    '材质': { en: 'Material', zh: '材质', ar: 'المادة', de: 'Material', es: 'Material' },
    '颜色': { en: 'Color', zh: '颜色', ar: 'اللون', de: 'Farbe', es: 'Color' },
    '尺码': { en: 'Size', zh: '尺码', ar: 'الحجم', de: 'Größe', es: 'Talla' },
    '认证': { en: 'Certification', zh: '认证', ar: 'الشهادة', de: 'Zertifizierung', es: 'Certificación' },
    '耐温': { en: 'Temperature Resistance', zh: '耐温', ar: 'مقاومة الحرارة', de: 'Temperaturbeständigkeit', es: 'Resistencia a la Temperatura' },
    '防水等级': { en: 'Waterproof Rating', zh: '防水等级', ar: 'معدل مقاومة الماء', de: 'Wasserdichtigkeit', es: 'Clasificación Impermeable' },
    '包装': { en: 'Package', zh: '包装', ar: 'التغليف', de: 'Verpackung', es: 'Embalaje' },
    '重量': { en: 'Weight', zh: '重量', ar: 'الوزن', de: 'Gewicht', es: 'Peso' },
    '厚度': { en: 'Thickness', zh: '厚度', ar: 'السمك', de: 'Dicke', es: 'Grosor' },
  };
  
  return Object.entries(specs).map(([key, value]) => ({
    label: specLabels[key]?.[lang] || specLabels[key]?.['en'] || key,
    value: value
  }));
}

// Re-export products and functions
export { productsData as products, categoriesData as productCategories };
export type { Product };

// Helper to get product by ID
export function getProductById(id: string): Product | undefined {
  return productsData.find(p => p.id === id);
}

// Helper to get products by category
export function getProductsByCategory(category: string): Product[] {
  return productsData.filter(p => p.category === category);
}
