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

// Specification value translations (common values across all products)
const specValueTranslations: Record<string, Record<string, string>> = {
  // Materials - Lining
  'Nylon Filament Cloth': { en: 'Nylon Filament Cloth', zh: '尼龙长丝布', ar: 'قماش النايلون الفيلاميني', de: 'Nylon-Filamentgewebe', es: 'Tela de Filamento de Nailon' },
  'Cotton': { en: 'Cotton', zh: '全棉', ar: 'قطن', de: 'Baumwolle', es: 'Algodón' },
  'Polyester-Cotton': { en: 'Polyester-Cotton', zh: '涤棉', ar: 'بوليستر قطن', de: 'Polyester-Baumwolle', es: 'Poliéster-Algodón' },
  '全棉': { en: 'Cotton', zh: '全棉', ar: 'قطن', de: 'Baumwolle', es: 'Algodón' },
  '尼龙长丝布': { en: 'Nylon Filament Cloth', zh: '尼龙长丝布', ar: 'قماش النايلون الفيلاميني', de: 'Nylon-Filamentgewebe', es: 'Tela de Filamento de Nailon' },
  '涤棉': { en: 'Polyester-Cotton', zh: '涤棉', ar: 'بوليستر قطن', de: 'Polyester-Baumwolle', es: 'Poliéster-Algodón' },
  
  // Coatings
  'Neoprene Main Material': { en: 'Neoprene Main Material', zh: '氯丁胶主材', ar: 'مادة النيوبرين الرئيسية', de: 'Neopren-Hauptmaterial', es: 'Material Principal de Neopreno' },
  'Butyl Rubber': { en: 'Butyl Rubber', zh: '丁基胶', ar: 'مطاط البيوتيل', de: 'Butylkautschuk', es: 'Caucho de Butilo' },
  'Double-sided Neoprene Coating': { en: 'Double-sided Neoprene Coating', zh: '以氯丁胶为主双面涂层', ar: 'طلاء النيوبرين المزدوج', de: 'Doppelseitige Neopren-Beschichtung', es: 'Recubrimiento de Neopreno Doble Cara' },
  'Double-sided Natural Rubber': { en: 'Double-sided Natural Rubber', zh: '双面天然橡胶', ar: 'مطاط طبيعي مزدوج', de: 'Doppelseitiger Naturkautschuk', es: 'Caucho Natural Doble Cara' },
  'Natural Rubber': { en: 'Natural Rubber', zh: '天然橡胶', ar: 'مطاط طبيعي', de: 'Naturkautschuk', es: 'Caucho Natural' },
  'Environmental PVC': { en: 'Environmental PVC', zh: '环保PVC', ar: 'PVC صديق للبيئة', de: 'Umweltfreundliches PVC', es: 'PVC Ecológico' },
  'Environmental PU': { en: 'Environmental PU', zh: '环保PU', ar: 'PU صديق للبيئة', de: 'Umweltfreundliches PU', es: 'PU Ecológico' },
  'PVC': { en: 'PVC', zh: 'PVC', ar: 'PVC', de: 'PVC', es: 'PVC' },
  '氯丁胶主材': { en: 'Neoprene Main Material', zh: '氯丁胶主材', ar: 'مادة النيوبرين الرئيسية', de: 'Neopren-Hauptmaterial', es: 'Material Principal de Neopreno' },
  '丁基胶': { en: 'Butyl Rubber', zh: '丁基胶', ar: 'مطاط البيوتيل', de: 'Butylkautschuk', es: 'Caucho de Butilo' },
  '以氯丁胶为主双面涂层': { en: 'Double-sided Neoprene Coating', zh: '以氯丁胶为主双面涂层', ar: 'طلاء النيوبرين المزدوج', de: 'Doppelseitige Neopren-Beschichtung', es: 'Recubrimiento de Neopreno Doble Cara' },
  '双面天然橡胶': { en: 'Double-sided Natural Rubber', zh: '双面天然橡胶', ar: 'مطاط طبيعي مزدوج', de: 'Doppelseitiger Naturkautschuk', es: 'Caucho Natural Doble Cara' },
  '天然橡胶': { en: 'Natural Rubber', zh: '天然橡胶', ar: 'مطاط طبيعي', de: 'Naturkautschuk', es: 'Caucho Natural' },
  '环保PVC': { en: 'Environmental PVC', zh: '环保PVC', ar: 'PVC صديق للبيئة', de: 'Umweltfreundliches PVC', es: 'PVC Ecológico' },
  '双面氯丁混合胶': { en: 'Double-sided Neoprene Mixed Rubber', zh: '双面氯丁混合胶', ar: 'مطاط النيوبرين المختلط المزدوج', de: 'Doppelseitiger Neopren-Mischkautschuk', es: 'Caucho Mezclado de Neopreno Doble Cara' },
  
  // Functions
  'Acid and Alkali Chemical Splash Protection': { en: 'Acid and Alkali Chemical Splash Protection', zh: '防酸碱类化学品溶剂喷溅', ar: 'حماية من رشاش المواد الكيميائية الحمضية والقلوية', de: 'Schutz gegen Säure- und Alkali-Chemikalienspritzer', es: 'Protección contra Salpicaduras de Ácidos y Álcalis' },
  'Airborne Dust and Toxin Protection': { en: 'Airborne Dust and Toxin Protection', zh: '防空气中尘毒', ar: 'حماية من الغبار والسموم المحمولة جوا', de: 'Schutz gegen luftgetragenen Staub und Gifte', es: 'Protección contra Polvo y Toxinas Aéreas' },
  'Air-fed Airborne Dust and Toxin Protection': { en: 'Air-fed Airborne Dust and Toxin Protection', zh: '防空气中尘毒空气接入式', ar: 'حماية من الغبار والسموم المحمولة جوا مع تغذية هوائية', de: 'Luftversorgter Schutz gegen Staub und Gifte', es: 'Protección con Suministro de Aire contra Polvo y Toxinas' },
  'Heat-insulated Air-fed Dust and Toxin Protection': { en: 'Heat-insulated Air-fed Dust and Toxin Protection', zh: '隔热防空气中尘毒空气接入式', ar: 'حماية معزولة حرارياً مع تغذية هوائية', de: 'Wärmegedämmter luftversorgter Schutz', es: 'Protección Térmica con Suministro de Aire' },
  'Multiple Chemical/Acid/Oil/Solvent Protection': { en: 'Multiple Chemical/Acid/Oil/Solvent Protection', zh: '防多种化学品酸类、油类和溶剂类', ar: 'حماية متعددة المواد الكيميائية والأحماض والزيوت والمذيبات', de: 'Schutz gegen verschiedene Chemikalien/Säuren/Öle/Lösemittel', es: 'Protección Múltiple contra Químicos/Ácidos/Aceites/Disolventes' },
  '防酸碱类化学品溶剂喷溅': { en: 'Acid and Alkali Chemical Splash Protection', zh: '防酸碱类化学品溶剂喷溅', ar: 'حماية من رشاش المواد الكيميائية الحمضية والقلوية', de: 'Schutz gegen Säure- und Alkali-Chemikalienspritzer', es: 'Protección contra Salpicaduras de Ácidos y Álcalis' },
  '防空气中尘毒': { en: 'Airborne Dust and Toxin Protection', zh: '防空气中尘毒', ar: 'حماية من الغبار والسموم المحمولة جوا', de: 'Schutz gegen luftgetragenen Staub und Gifte', es: 'Protección contra Polvo y Toxinas Aéreas' },
  
  // Sizes
  'S/M/L/XL/XXL': { en: 'S/M/L/XL/XXL', zh: 'S/M/L/XL/XXL', ar: 'S/M/L/XL/XXL', de: 'S/M/L/XL/XXL', es: 'S/M/L/XL/XXL' },
  
  // Certifications
  'CE/ISO': { en: 'CE/ISO', zh: 'CE/ISO', ar: 'CE/ISO', de: 'CE/ISO', es: 'CE/ISO' },
  
  // Notes
  'Mustard gas protection over 130 mins requires customization': { en: 'Mustard gas protection over 130 mins requires customization', zh: '防介子气130分钟以上要定制', ar: 'حماية من غاز الخردل لأكثر من 130 دقيقة تتطلب التخصيص', de: 'Senfgas-Schutz über 130 Min. erfordert Anpassung', es: 'Protección contra gas mostaga >130 min requiere personalización' },
  'Flame-retardant body and boots, anti-static optional': { en: 'Flame-retardant body and boots, anti-static optional', zh: '除手套外衣服靴阻燃，可增加抗静电功能', ar: 'الجسم والأحذية مقاومة للهب، مضاد للكهرباء الساكنة اختياري', de: 'Schwerentflammbares Kleid und Stiefel, antistatisch optional', es: 'Cuerpo y botas ignífugos, antiestático opcional' },
  '防介子气130分钟以上要定制': { en: 'Mustard gas protection over 130 mins requires customization', zh: '防介子气130分钟以上要定制', ar: 'حماية من غاز الخردل لأكثر من 130 دقيقة تتطلب التخصيص', de: 'Senfgas-Schutz über 130 Min. erfordert Anpassung', es: 'Protección contra gas mostaga >130 min requiere personalización' },
  
  // Fabrics
  '100D Polyester with Conductive Wire Water-Repellent': { en: '100D Polyester with Conductive Wire Water-Repellent', zh: '100D涤纶与进口导电丝混织表面泼水处理', ar: 'بوليستر 100D مع سلك موصل مقاوم للماء', de: '100D Polyester mit Leitfähigkeitsdraht wasserabweisend', es: 'Poliéster 100D con Hilo Conductor Repelente al Agua' },
  '240T Nylon Taffeta Water-Repellent': { en: '240T Nylon Taffeta Water-Repellent', zh: '240T尼龙塔丝绒表面泼水处理', ar: 'نايلون تافتا 240T مقاوم للماء', de: '240T Nylon-Taffeta wasserabweisend', es: 'Nailon Tafetán 240T Repelente al Agua' },
  '240T Spring Yarn': { en: '240T Spring Yarn', zh: '240T春亚纺', ar: 'خيط الربيع 240T', de: '240T Frühlingsgarn', es: 'Hilo de Primavera 240T' },
  '190T Polyester Water-Repellent': { en: '190T Polyester Water-Repellent', zh: '190T涤纶表面泼水处理', ar: 'بوليستر 190T مقاوم للماء', de: '190T Polyester wasserabweisend', es: 'Poliéster 190T Repelente al Agua' },
  'Cotton 32×6058': { en: 'Cotton 32×6058', zh: '全棉32×6058', ar: 'قطن 32×6058', de: 'Baumwolle 32×6058', es: 'Algodón 32×6058' },
  '210T Spring Yarn': { en: '210T Spring Yarn', zh: '210T春亚纺', ar: 'خيط الربيع 210T', de: '210T Frühlingsgarn', es: 'Hilo de Primavera 210T' },
  
  // Linings
  '190T Anti-Static Polyester': { en: '190T Anti-Static Polyester', zh: '涤纶190T静电布', ar: 'بوليستر 190T مضاد للكهرباء الساكنة', de: '190T Antistatik-Polyester', es: 'Poliéster Antiestático 190T' },
  'Polyester Quilted Cotton': { en: 'Polyester Quilted Cotton', zh: '涤纶行缝棉', ar: 'قطن مبطن بالبوليستر', de: 'Polyester-Steppbaumwolle', es: 'Algodón Acolchado de Poliéster' },
  '190T Polyester': { en: '190T Polyester', zh: '190T涤纶', ar: 'بوليستر 190T', de: '190T Polyester', es: 'Poliéster 190T' },
  'Knitted Mesh (White)': { en: 'Knitted Mesh (White)', zh: '针织网布(白色)', ar: 'شبكة محيكة (بيضاء)', de: 'Gestricktes Netz (Weiß)', es: 'Malla de Punto (Blanca)' },
  
  // Brightness
  '≥500 (EN Standard)': { en: '≥500 (EN Standard)', zh: '≥500 (欧标)', ar: '≥500 (المعيار الأوروبي)', de: '≥500 (EN-Norm)', es: '≥500 (Norma EN)' },
  '≥500 (3M Reflective)': { en: '≥500 (3M Reflective)', zh: '≥500 (3M反光带)', ar: '≥500 (عاكس 3M)', de: '≥500 (3M-Reflektor)', es: '≥500 (Reflectante 3M)' },
  '≥300': { en: '≥300', zh: '≥300', ar: '≥300', de: '≥300', es: '≥300' },
  
  // Hydrostatic Pressure
  '≥50 kPa': { en: '≥50 kPa', zh: '≥50 kPa', ar: '≥50 كيلوباسكال', de: '≥50 kPa', es: '≥50 kPa' },
  '≥70 kPa': { en: '≥70 kPa', zh: '≥70 kPa', ar: '≥70 كيلوباسكال', de: '≥70 kPa', es: '≥70 kPa' },
  '≥100 kPa': { en: '≥100 kPa', zh: '≥100 kPa', ar: '≥100 كيلوباسكال', de: '≥100 kPa', es: '≥100 kPa' },
  
  // Materials
  'Rubber/PVC': { en: 'Rubber/PVC', zh: '橡胶/PVC', ar: 'مطاط/PVC', de: 'Gummi/PVC', es: 'Caucho/PVC' },
  'PVC Waterproof Fabric': { en: 'PVC Waterproof Fabric', zh: 'PVC防水面料', ar: 'قماش PVC مقاوم للماء', de: 'PVC-wasserdichter Stoff', es: 'Tela Impermeable PVC' },
  
  // Colors
  'Black': { en: 'Black', zh: '黑色', ar: 'أسود', de: 'Schwarz', es: 'Negro' },
  'Blue': { en: 'Blue', zh: '蓝色', ar: 'أزرق', de: 'Blau', es: 'Azul' },
  'Various Colors': { en: 'Various Colors', zh: '多色可选', ar: 'ألوان متعددة متاحة', de: 'Verschiedene Farben', es: 'Varios Colores' },
  '多色可选': { en: 'Various Colors', zh: '多色可选', ar: 'ألوان متعددة متاحة', de: 'Verschiedene Farben', es: 'Varios Colores' },
  
  // Lengths
  'Approx. 90cm': { en: 'Approx. 90cm', zh: '约90cm', ar: 'حوالي 90 سم', de: 'Ca. 90 cm', es: 'Aprox. 90 cm' },
  'Long Sleeve': { en: 'Long Sleeve', zh: '长袖', ar: 'كم طويل', de: 'Langarm', es: 'Manga Larga' },
  
  // Sets
  'Jacket + Pants': { en: 'Jacket + Pants', zh: '上衣+长裤', ar: 'جاكيت + بنطلون', de: 'Jacke + Hose', es: 'Chaqueta + Pantalón' },
};

// Get localized specifications
export function getLocalizedSpecs(product: Product, lang: Language): { label: string; value: string }[] {
  // For non-Chinese languages, use English specifications if available
  const specs = (lang !== 'zh' && product.specificationsEn) 
    ? product.specificationsEn 
    : product.specifications;
  
  return Object.entries(specs).map(([key, value]) => ({
    label: specKeyTranslations[key]?.[lang] || specKeyTranslations[key]?.['en'] || key,
    value: specValueTranslations[value]?.[lang] || value
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
