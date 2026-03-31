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

// Specification key translations (supports both Chinese and English keys)
const specKeyTranslations: Record<string, Record<string, string>> = {
  // Chinese keys
  '型号': { en: 'Model', zh: '型号', ar: 'الطراز', de: 'Modell', es: 'Modelo' },
  '品名': { en: 'Product Name', zh: '品名', ar: 'اسم المنتج', de: 'Produktname', es: 'Nombre del Producto' },
  '内料': { en: 'Lining', zh: '内料', ar: 'البطانة', de: 'Futter', es: 'Forro' },
  '涂层': { en: 'Coating', zh: '涂层', ar: 'الطلاء', de: 'Beschichtung', es: 'Recubrimiento' },
  '功能': { en: 'Function', zh: '功能', ar: 'الوظيفة', de: 'Funktion', es: 'Función' },
  '尺码': { en: 'Size', zh: '尺码', ar: 'الحجم', de: 'Größe', es: 'Talla' },
  '认证': { en: 'Certification', zh: '认证', ar: 'الشهادة', de: 'Zertifizierung', es: 'Certificación' },
  '备注': { en: 'Note', zh: '备注', ar: 'ملاحظة', de: 'Hinweis', es: 'Nota' },
  '特点': { en: 'Features', zh: '特点', ar: 'الميزات', de: 'Eigenschaften', es: 'Características' },
  '面料': { en: 'Fabric', zh: '面料', ar: 'القماش', de: 'Stoff', es: 'Tela' },
  '内里': { en: 'Lining', zh: '内里', ar: 'البطانة', de: 'Futter', es: 'Forro' },
  '静水压': { en: 'Hydrostatic Pressure', zh: '静水压', ar: 'ضغط هيدروليكي', de: 'Hydrostatischer Druck', es: 'Presión Hidrostática' },
  '反光带亮度': { en: 'Reflective Strip Brightness', zh: '反光带亮度', ar: 'سطوع الشريط العاكس', de: 'Reflektorstreifen-Helligkeit', es: 'Brillo de Tira Reflectante' },
  '织带反光带亮度': { en: 'Reflective Tape Brightness', zh: '织带反光带亮度', ar: 'سطوع شريط العاكس', de: 'Reflektorband-Helligkeit', es: 'Brillo de Cinta Reflectante' },
  '材质': { en: 'Material', zh: '材质', ar: 'المادة', de: 'Material', es: 'Material' },
  '颜色': { en: 'Color', zh: '颜色', ar: 'اللون', de: 'Farbe', es: 'Color' },
  '围裙长度': { en: 'Apron Length', zh: '围裙长度', ar: 'طول المئزر', de: 'Schürzenlänge', es: 'Longitud del Delantal' },
  '袖套长度': { en: 'Sleeve Length', zh: '袖套长度', ar: 'طول الكم', de: 'Ärmellänge', es: 'Longitud de la Manga' },
  '套装': { en: 'Set', zh: '套装', ar: 'طقم', de: 'Set', es: 'Conjunto' },
  // English keys (for specificationsEn)
  'Model': { en: 'Model', zh: '型号', ar: 'الطراز', de: 'Modell', es: 'Modelo' },
  'Product Name': { en: 'Product Name', zh: '品名', ar: 'اسم المنتج', de: 'Produktname', es: 'Nombre del Producto' },
  'Lining': { en: 'Lining', zh: '内料', ar: 'البطانة', de: 'Futter', es: 'Forro' },
  'Coating': { en: 'Coating', zh: '涂层', ar: 'الطلاء', de: 'Beschichtung', es: 'Recubrimiento' },
  'Function': { en: 'Function', zh: '功能', ar: 'الوظيفة', de: 'Funktion', es: 'Función' },
  'Size': { en: 'Size', zh: '尺码', ar: 'الحجم', de: 'Größe', es: 'Talla' },
  'Certification': { en: 'Certification', zh: '认证', ar: 'الشهادة', de: 'Zertifizierung', es: 'Certificación' },
  'Note': { en: 'Note', zh: '备注', ar: 'ملاحظة', de: 'Hinweis', es: 'Nota' },
  'Features': { en: 'Features', zh: '特点', ar: 'الميزات', de: 'Eigenschaften', es: 'Características' },
  'Fabric': { en: 'Fabric', zh: '面料', ar: 'القماش', de: 'Stoff', es: 'Tela' },
  'Hydrostatic Pressure': { en: 'Hydrostatic Pressure', zh: '静水压', ar: 'ضغط هيدروليكي', de: 'Hydrostatischer Druck', es: 'Presión Hidrostática' },
  'Reflective Strip Brightness': { en: 'Reflective Strip Brightness', zh: '反光带亮度', ar: 'سطوع الشريط العاكس', de: 'Reflektorstreifen-Helligkeit', es: 'Brillo de Tira Reflectante' },
  'Reflective Tape Brightness': { en: 'Reflective Tape Brightness', zh: '织带反光带亮度', ar: 'سطوع شريط العاكس', de: 'Reflektorband-Helligkeit', es: 'Brillo de Cinta Reflectante' },
  'Material': { en: 'Material', zh: '材质', ar: 'المادة', de: 'Material', es: 'Material' },
  'Color': { en: 'Color', zh: '颜色', ar: 'اللون', de: 'Farbe', es: 'Color' },
  'Apron Length': { en: 'Apron Length', zh: '围裙长度', ar: 'طول المئزر', de: 'Schürzenlänge', es: 'Longitud del Delantal' },
  'Sleeve Length': { en: 'Sleeve Length', zh: '袖套长度', ar: 'طول الكم', de: 'Ärmellänge', es: 'Longitud de la Manga' },
  'Set': { en: 'Set', zh: '套装', ar: 'طقم', de: 'Set', es: 'Conjunto' },
};

// Get localized specifications
export function getLocalizedSpecs(product: Product, lang: Language): { label: string; value: string }[] {
  // For non-Chinese languages, use English specifications if available
  const specs = (lang !== 'zh' && product.specificationsEn) 
    ? product.specificationsEn 
    : product.specifications;
  
  return Object.entries(specs).map(([key, value]) => ({
    label: specKeyTranslations[key]?.[lang] || specKeyTranslations[key]?.['en'] || key,
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
