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
  const specLabels: Record<string, Record<string, string>> = {
    '材质': { en: 'Material', de: 'Material', es: 'Material', ru: 'Материал', el: 'Υλικό', ja: '素材', it: 'Materiale', pt: 'Material', zh: '材质' },
    '颜色': { en: 'Color', de: 'Farbe', es: 'Color', ru: 'Цвет', el: 'Χρώμα', ja: '色', it: 'Colore', pt: 'Cor', zh: '颜色' },
    '尺码': { en: 'Size', de: 'Größe', es: 'Talla', ru: 'Размер', el: 'Μέγεθος', ja: 'サイズ', it: 'Taglia', pt: 'Tamanho', zh: '尺码' },
    '认证': { en: 'Certification', de: 'Zertifizierung', es: 'Certificación', ru: 'Сертификация', el: 'Πιστοποίηση', ja: '認証', it: 'Certificazione', pt: 'Certificação', zh: '认证' },
    '耐温': { en: 'Temperature Resistance', de: 'Temperaturbeständigkeit', es: 'Resistencia térmica', ru: 'Термостойкость', el: 'Αντοχή θερμοκρασίας', ja: '耐熱温度', it: 'Resistenza termica', pt: 'Resistência térmica', zh: '耐温' },
    '防水等级': { en: 'Waterproof Rating', de: 'Wasserdichtigkeit', es: 'Impermeabilidad', ru: 'Водонепроницаемость', el: 'Στεγανοποίηση', ja: '防水等級', it: 'Impermeabilità', pt: 'Impermeabilidade', zh: '防水等级' },
    '包装': { en: 'Package', de: 'Verpackung', es: 'Paquete', ru: 'Упаковка', el: 'Συσκευασία', ja: '梱包', it: 'Confezione', pt: 'Embalagem', zh: '包装' },
    '重量': { en: 'Weight', de: 'Gewicht', es: 'Peso', ru: 'Вес', el: 'Βάρος', ja: '重量', it: 'Peso', pt: 'Peso', zh: '重量' },
    '厚度': { en: 'Thickness', de: 'Dicke', es: 'Grosor', ru: 'Толщина', el: 'Πάχος', ja: '厚さ', it: 'Spessore', pt: 'Espessura', zh: '厚度' },
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
