import { Language, defaultLanguage } from './i18n/config';
import { products as productsData, productCategories as categoriesData, Product } from './products';

// Feature translations for all languages
const featureTranslations: Record<string, Record<string, string>> = {
  // Design features
  'Double-coated design': {
    en: 'Double-coated design',
    zh: '双胶涂层',
    ar: 'تصميم مزدوج الطلاء',
    de: 'Doppelt beschichtetes Design',
    es: 'Diseño de doble recubrimiento'
  },
  '双胶涂层': {
    en: 'Double-coated design',
    zh: '双胶涂层',
    ar: 'تصميم مزدوج الطلاء',
    de: 'Doppelt beschichtetes Design',
    es: 'Diseño de doble recubrimiento'
  },
  'Two-piece design': {
    en: 'Two-piece design',
    zh: '分体式设计',
    ar: 'تصميم قطعتين',
    de: 'Zweiteiliges Design',
    es: 'Diseño de dos piezas'
  },
  '分体式设计': {
    en: 'Two-piece design',
    zh: '分体式设计',
    ar: 'تصميم قطعتين',
    de: 'Zweiteiliges Design',
    es: 'Diseño de dos piezas'
  },
  'One-piece design': {
    en: 'One-piece design',
    zh: '连体设计',
    ar: 'تصميم قطعة واحدة',
    de: 'Einteiliges Design',
    es: 'Diseño de una pieza'
  },
  '连体设计': {
    en: 'One-piece design',
    zh: '连体设计',
    ar: 'تصميم قطعة واحدة',
    de: 'Einteiliges Design',
    es: 'Diseño de una pieza'
  },
  'Long-style design': {
    en: 'Long-style design',
    zh: '长款设计',
    ar: 'تصميم طويل',
    de: 'Langes Design',
    es: 'Diseño largo'
  },
  '长款设计': {
    en: 'Long-style design',
    zh: '长款设计',
    ar: 'تصميم طويل',
    de: 'Langes Design',
    es: 'Diseño largo'
  },
  'Fully enclosed design': {
    en: 'Fully enclosed design',
    zh: '全封闭设计',
    ar: 'تصميم مغلق بالكامل',
    de: 'Vollständig geschlossenes Design',
    es: 'Diseño totalmente cerrado'
  },
  '全封闭设计': {
    en: 'Fully enclosed design',
    zh: '全封闭设计',
    ar: 'تصميم مغلق بالكامل',
    de: 'Vollständig geschlossenes Design',
    es: 'Diseño totalmente cerrado'
  },
  'Hooded design': {
    en: 'Hooded design',
    zh: '连帽设计',
    ar: 'تصميم بغطاء رأس',
    de: 'Design mit Kapuze',
    es: 'Diseño con capucha'
  },
  '连帽设计': {
    en: 'Hooded design',
    zh: '连帽设计',
    ar: 'تصميم بغطاء رأس',
    de: 'Design mit Kapuze',
    es: 'Diseño con capucha'
  },
  'Overall design': {
    en: 'Overall design',
    zh: '背带设计',
    ar: 'تصميم أحمال',
    de: 'Latzhosen-Design',
    es: 'Diseño de tirantes'
  },
  '背带设计': {
    en: 'Overall design',
    zh: '背带设计',
    ar: 'تصميم أحمال',
    de: 'Latzhosen-Design',
    es: 'Diseño de tirantes'
  },
  
  // Protection features
  'Acid and alkali splash resistant': {
    en: 'Acid and alkali splash resistant',
    zh: '防酸碱喷溅',
    ar: 'مقاومة لرشاش الأحماض والقلويات',
    de: 'Säure- und alkalibeständig',
    es: 'Resistente a salpicaduras de ácidos y álcalis'
  },
  '防酸碱喷溅': {
    en: 'Acid and alkali splash resistant',
    zh: '防酸碱喷溅',
    ar: 'مقاومة لرشاش الأحماض والقلويات',
    de: 'Säure- und alkalibeständig',
    es: 'Resistente a salpicaduras de ácidos y álcalis'
  },
  'Dust and toxin protection': {
    en: 'Dust and toxin protection',
    zh: '防尘毒',
    ar: 'حماية من الغبار والسموم',
    de: 'Schutz gegen Staub und Gifte',
    es: 'Protección contra polvo y toxinas'
  },
  '防尘毒': {
    en: 'Dust and toxin protection',
    zh: '防尘毒',
    ar: 'حماية من الغبار والسموم',
    de: 'Schutz gegen Staub und Gifte',
    es: 'Protección contra polvo y toxinas'
  },
  'Water and oil resistant': {
    en: 'Water and oil resistant',
    zh: '防水防油',
    ar: 'مقاوم للماء والزيت',
    de: 'Wasser- und ölabweisend',
    es: 'Resistente al agua y al aceite'
  },
  '防水防油': {
    en: 'Water and oil resistant',
    zh: '防水防油',
    ar: 'مقاوم للماء والزيت',
    de: 'Wasser- und ölabweisend',
    es: 'Resistente al agua y al aceite'
  },
  'Waterproof and warm': {
    en: 'Waterproof and warm',
    zh: '防水保暖',
    ar: 'مقاوم للماء ودافئ',
    de: 'Wasserdicht und warm',
    es: 'Impermeable y cálido'
  },
  '防水保暖': {
    en: 'Waterproof and warm',
    zh: '防水保暖',
    ar: 'مقاوم للماء ودافئ',
    de: 'Wasserdicht und warm',
    es: 'Impermeable y cálido'
  },
  'Heat insulation': {
    en: 'Heat insulation',
    zh: '隔热功能',
    ar: 'عزل حراري',
    de: 'Wärmeisolierung',
    es: 'Aislamiento térmico'
  },
  '隔热功能': {
    en: 'Heat insulation',
    zh: '隔热功能',
    ar: 'عزل حراري',
    de: 'Wärmeisolierung',
    es: 'Aislamiento térmico'
  },
  
  // Material features
  'Nylon filament lining': {
    en: 'Nylon filament lining',
    zh: '尼龙长丝内料',
    ar: 'بطانة من خيوط النايلون',
    de: 'Nylon-Filamentfutter',
    es: 'Forro de filamento de nailon'
  },
  '尼龙长丝内料': {
    en: 'Nylon filament lining',
    zh: '尼龙长丝内料',
    ar: 'بطانة من خيوط النايلون',
    de: 'Nylon-Filamentfutter',
    es: 'Forro de filamento de nailon'
  },
  'Cotton lining': {
    en: 'Cotton lining',
    zh: '全棉内料',
    ar: 'بطانة قطنية',
    de: 'Baumwollfutter',
    es: 'Forro de algodón'
  },
  '全棉内料': {
    en: 'Cotton lining',
    zh: '全棉内料',
    ar: 'بطانة قطنية',
    de: 'Baumwollfutter',
    es: 'Forro de algodón'
  },
  'Neoprene coating': {
    en: 'Neoprene coating',
    zh: '氯丁胶涂层',
    ar: 'طلاء النيوبرين',
    de: 'Neopren-Beschichtung',
    es: 'Recubrimiento de neopreno'
  },
  '氯丁胶涂层': {
    en: 'Neoprene coating',
    zh: '氯丁胶涂层',
    ar: 'طلاء النيوبرين',
    de: 'Neopren-Beschichtung',
    es: 'Recubrimiento de neopreno'
  },
  'Butyl rubber coating': {
    en: 'Butyl rubber coating',
    zh: '丁基胶涂层',
    ar: 'طلاء مطاط البيوتيل',
    de: 'Butylkautschuk-Beschichtung',
    es: 'Recubrimiento de caucho de butilo'
  },
  '丁基胶涂层': {
    en: 'Butyl rubber coating',
    zh: '丁基胶涂层',
    ar: 'طلاء مطاط البيوتيل',
    de: 'Butylkautschuk-Beschichtung',
    es: 'Recubrimiento de caucho de butilo'
  },
  'Double-sided coating': {
    en: 'Double-sided coating',
    zh: '双面涂层',
    ar: 'طلاء مزدوج',
    de: 'Doppelseitige Beschichtung',
    es: 'Recubrimiento de doble cara'
  },
  '双面涂层': {
    en: 'Double-sided coating',
    zh: '双面涂层',
    ar: 'طلاء مزدوج',
    de: 'Doppelseitige Beschichtung',
    es: 'Recubrimiento de doble cara'
  },
  
  // Additional features
  'Integrated gloves and boots': {
    en: 'Integrated gloves and boots',
    zh: '集成手套靴',
    ar: 'قفازات وأحذية مدمجة',
    de: 'Integrierte Handschuhe und Stiefel',
    es: 'Guantes y botas integrados'
  },
  '集成手套靴': {
    en: 'Integrated gloves and boots',
    zh: '集成手套靴',
    ar: 'قفازات وأحذية مدمجة',
    de: 'Integrierte Handschuhe und Stiefel',
    es: 'Guantes y botas integrados'
  },
  'Air-fed system': {
    en: 'Air-fed system',
    zh: '空气接入式',
    ar: 'نظام تغذية هوائية',
    de: 'Luftversorgungssystem',
    es: 'Sistema de alimentación de aire'
  },
  '空气接入式': {
    en: 'Air-fed system',
    zh: '空气接入式',
    ar: 'نظام تغذية هوائية',
    de: 'Luftversorgungssystem',
    es: 'Sistema de alimentación de aire'
  },
  'High hydrostatic pressure': {
    en: 'High hydrostatic pressure',
    zh: '高静水压',
    ar: 'ضغط هيدروستاتيكي عالي',
    de: 'Hoher hydrostatischer Druck',
    es: 'Alta presión hidrostática'
  },
  '高静水压': {
    en: 'High hydrostatic pressure',
    zh: '高静水压',
    ar: 'ضغط هيدروستاتيكي عالي',
    de: 'Hoher hydrostatischer Druck',
    es: 'Alta presión hidrostática'
  },
  'Custom mustard gas protection available': {
    en: 'Custom mustard gas protection available',
    zh: '可定制防介子气',
    ar: 'حماية من غاز الخردل متاحة حسب الطلب',
    de: 'Senfgas-Schutz auf Anfrage verfügbar',
    es: 'Protección contra gas mostaza disponible bajo pedido'
  },
  '可定制防介子气': {
    en: 'Custom mustard gas protection available',
    zh: '可定制防介子气',
    ar: 'حماية من غاز الخردل متاحة حسب الطلب',
    de: 'Senfgas-Schutz auf Anfrage verfügbar',
    es: 'Protección contra gas mostaza disponible bajo pedido'
  },
  'Anti-static function': {
    en: 'Anti-static function',
    zh: '抗静电功能',
    ar: 'وظيفة مضادة للكهرباء الساكنة',
    de: 'Antistatische Funktion',
    es: 'Función antiestática'
  },
  '抗静电功能': {
    en: 'Anti-static function',
    zh: '抗静电功能',
    ar: 'وظيفة مضادة للكهرباء الساكنة',
    de: 'Antistatische Funktion',
    es: 'Función antiestática'
  },
  'Conductive wire blended': {
    en: 'Conductive wire blended',
    zh: '导电丝混织',
    ar: 'سلك موصل مختلط',
    de: 'Leitfähigkeitsdraht gemischt',
    es: 'Hilo conductor mezclado'
  },
  '导电丝混织': {
    en: 'Conductive wire blended',
    zh: '导电丝混织',
    ar: 'سلك موصل مختلط',
    de: 'Leitfähigkeitsdraht gemischt',
    es: 'Hilo conductor mezclado'
  },
  'Anti-static lining': {
    en: 'Anti-static lining',
    zh: '静电布内里',
    ar: 'بطانة مضادة للكهرباء الساكنة',
    de: 'Antistatisches Futter',
    es: 'Forro antiestático'
  },
  '静电布内里': {
    en: 'Anti-static lining',
    zh: '静电布内里',
    ar: 'بطانة مضادة للكهرباء الساكنة',
    de: 'Antistatisches Futter',
    es: 'Forro antiestático'
  },
  'High-brightness reflective strips': {
    en: 'High-brightness reflective strips',
    zh: '高亮反光带',
    ar: 'شرائط عاكسة عالية السطوع',
    de: 'Hochreflektierende Streifen',
    es: 'Tiras reflectantes de alto brillo'
  },
  '高亮反光带': {
    en: 'High-brightness reflective strips',
    zh: '高亮反光带',
    ar: 'شرائط عاكسة عالية السطوع',
    de: 'Hochreflektierende Streifen',
    es: 'Tiras reflectantes de alto brillo'
  },
  '3M reflective strips': {
    en: '3M reflective strips',
    zh: '3M反光带',
    ar: 'شرائط عاكسة 3M',
    de: '3M-Reflektorstreifen',
    es: 'Tiras reflectantes 3M'
  },
  '3M反光带': {
    en: '3M reflective strips',
    zh: '3M反光带',
    ar: 'شرائط عاكسة 3M',
    de: '3M-Reflektorstreifen',
    es: 'Tiras reflectantes 3M'
  },
  'High-visibility fluorescent green': {
    en: 'High-visibility fluorescent green',
    zh: '莹光绿高可视',
    ar: 'أخضر فلورسنت عالي الرؤية',
    de: 'Hochsichtbares fluoreszierendes Grün',
    es: 'Verde fluorescente de alta visibilidad'
  },
  '莹光绿高可视': {
    en: 'High-visibility fluorescent green',
    zh: '莹光绿高可视',
    ar: 'أخضر فلورسنت عالي الرؤية',
    de: 'Hochsichtbares fluoreszierendes Grün',
    es: 'Verde fluorescente de alta visibilidad'
  },
  'Water-repellent treatment': {
    en: 'Water-repellent treatment',
    zh: '泼水处理',
    ar: 'معالجة طاردة للماء',
    de: 'Wasserabweisende Behandlung',
    es: 'Tratamiento repelente al agua'
  },
  '泼水处理': {
    en: 'Water-repellent treatment',
    zh: '泼水处理',
    ar: 'معالجة طاردة للماء',
    de: 'Wasserabweisende Behandlung',
    es: 'Tratamiento repelente al agua'
  },
  'Environmental PVC coating': {
    en: 'Environmental PVC coating',
    zh: '环保PVC涂层',
    ar: 'طلاء PVC صديق للبيئة',
    de: 'Umweltfreundliche PVC-Beschichtung',
    es: 'Recubrimiento de PVC ecológico'
  },
  '环保PVC涂层': {
    en: 'Environmental PVC coating',
    zh: '环保PVC涂层',
    ar: 'طلاء PVC صديق للبيئة',
    de: 'Umweltfreundliche PVC-Beschichtung',
    es: 'Recubrimiento de PVC ecológico'
  },
  'Environmental PU coating': {
    en: 'Environmental PU coating',
    zh: '环保PU涂层',
    ar: 'طلاء PU صديق للبيئة',
    de: 'Umweltfreundliche PU-Beschichtung',
    es: 'Recubrimiento de PU ecológico'
  },
  '环保PU涂层': {
    en: 'Environmental PU coating',
    zh: '环保PU涂层',
    ar: 'طلاء PU صديق للبيئة',
    de: 'Umweltfreundliche PU-Beschichtung',
    es: 'Recubrimiento de PU ecológico'
  },
  'Chemical and flame resistant': {
    en: 'Chemical and flame resistant',
    zh: '防化阻燃',
    ar: 'مقاوم للمواد الكيميائية واللهب',
    de: 'Chemikalien- und flammbeständig',
    es: 'Resistente a químicos y llamas'
  },
  '防化阻燃': {
    en: 'Chemical and flame resistant',
    zh: '防化阻燃',
    ar: 'مقاوم للمواد الكيميائية واللهب',
    de: 'Chemikalien- und flammbeständig',
    es: 'Resistente a químicos y llamas'
  },
  'Lightweight and comfortable': {
    en: 'Lightweight and comfortable',
    zh: '轻便舒适',
    ar: 'خفيف ومريح',
    de: 'Leicht und bequem',
    es: 'Ligero y cómodo'
  },
  '轻便舒适': {
    en: 'Lightweight and comfortable',
    zh: '轻便舒适',
    ar: 'خفيف ومريح',
    de: 'Leicht und bequem',
    es: 'Ligero y cómodo'
  },
  'Easy to wear and remove': {
    en: 'Easy to wear and remove',
    zh: '易于穿脱',
    ar: 'سهل اللبس والخلع',
    de: 'Leicht an- und auszuziehen',
    es: 'Fácil de poner y quitar'
  },
  '易于穿脱': {
    en: 'Easy to wear and remove',
    zh: '易于穿脱',
    ar: 'سهل اللبس والخلع',
    de: 'Leicht an- und auszuziehen',
    es: 'Fácil de poner y quitar'
  },
  'Comfortable and durable': {
    en: 'Comfortable and durable',
    zh: '舒适耐用',
    ar: 'مريح ومتين',
    de: 'Bequem und langlebig',
    es: 'Cómodo y duradero'
  },
  '舒适耐用': {
    en: 'Comfortable and durable',
    zh: '舒适耐用',
    ar: 'مريح ومتين',
    de: 'Bequem und langlebig',
    es: 'Cómodo y duradero'
  },
  'Long-length protection': {
    en: 'Long-length protection',
    zh: '长款保护',
    ar: 'حماية بطول طويل',
    de: 'Langschutz',
    es: 'Protección de longitud larga'
  },
  '长款保护': {
    en: 'Long-length protection',
    zh: '长款保护',
    ar: 'حماية بطول طويل',
    de: 'Langschutz',
    es: 'Protección de longitud larga'
  },
  'Neck-hanging apron': {
    en: 'Neck-hanging apron',
    zh: '挂脖式围裙',
    ar: 'مئزر معلق على الرقبة',
    de: 'Halsgetragene Schürze',
    es: 'Delantal de cuello'
  },
  '挂脖式围裙': {
    en: 'Neck-hanging apron',
    zh: '挂脖式围裙',
    ar: 'مئزر معلق على الرقبة',
    de: 'Halsgetragene Schürze',
    es: 'Delantal de cuello'
  },
  'Separate sleeve design': {
    en: 'Separate sleeve design',
    zh: '独立袖套设计',
    ar: 'تصميم أكمام منفصلة',
    de: 'Separates Ärmeldesign',
    es: 'Diseño de mangas separadas'
  },
  '独立袖套设计': {
    en: 'Separate sleeve design',
    zh: '独立袖套设计',
    ar: 'تصميم أكمام منفصلة',
    de: 'Separates Ärmeldesign',
    es: 'Diseño de mangas separadas'
  },
  'Double-sided natural rubber': {
    en: 'Double-sided natural rubber',
    zh: '双面天然橡胶',
    ar: 'مطاط طبيعي مزدوج الوجه',
    de: 'Doppelseitiger Naturkautschuk',
    es: 'Caucho natural de doble cara'
  },
  '双面天然橡胶': {
    en: 'Double-sided natural rubber',
    zh: '双面天然橡胶',
    ar: 'مطاط طبيعي مزدوج الوجه',
    de: 'Doppelseitiger Naturkautschuk',
    es: 'Caucho natural de doble cara'
  },
  'Natural rubber coating': {
    en: 'Natural rubber coating',
    zh: '天然橡胶涂层',
    ar: 'طلاء مطاطي طبيعي',
    de: 'Naturkautschuk-Beschichtung',
    es: 'Recubrimiento de caucho natural'
  },
  '天然橡胶': {
    en: 'Natural rubber',
    zh: '天然橡胶',
    ar: 'مطاط طبيعي',
    de: 'Naturkautschuk',
    es: 'Caucho natural'
  },
  'Double-sided neoprene mixed rubber': {
    en: 'Double-sided neoprene mixed rubber',
    zh: '双面氯丁混合胶',
    ar: 'مطاط نيوبرين مختلط مزدوج الوجه',
    de: 'Doppelseitiger Neopren-Mischkautschuk',
    es: 'Caucho mezclado de neopreno de doble cara'
  },
  '双面氯丁混合胶': {
    en: 'Double-sided neoprene mixed rubber',
    zh: '双面氯丁混合胶',
    ar: 'مطاط نيوبرين مختلط مزدوج الوجه',
    de: 'Doppelseitiger Neopren-Mischkautschuk',
    es: 'Caucho mezclado de neopreno de doble cara'
  },
  'Designed for mines': {
    en: 'Designed for mines',
    zh: '矿井专用',
    ar: 'مصمم للمناجم',
    de: 'Für Bergwerke entwickelt',
    es: 'Diseñado para minas'
  },
  '矿井专用': {
    en: 'Designed for mines',
    zh: '矿井专用',
    ar: 'مصمم للمناجم',
    de: 'Für Bergwerke entwickelt',
    es: 'Diseñado para minas'
  },
  'Waterproof and durable': {
    en: 'Waterproof and durable',
    zh: '防水耐磨',
    ar: 'مقاوم للماء ومتين',
    de: 'Wasserdicht und langlebig',
    es: 'Impermeable y duradero'
  },
  '防水耐磨': {
    en: 'Waterproof and durable',
    zh: '防水耐磨',
    ar: 'مقاوم للماء ومتين',
    de: 'Wasserdicht und langlebig',
    es: 'Impermeable y duradero'
  },
  'Nylon taffeta fabric': {
    en: 'Nylon taffeta fabric',
    zh: '尼龙塔丝绒面料',
    ar: 'قماش تافتا النايلون',
    de: 'Nylon-Taffeta-Stoff',
    es: 'Tela de tafetán de nailon'
  },
  '尼龙塔丝绒面料': {
    en: 'Nylon taffeta fabric',
    zh: '尼龙塔丝绒面料',
    ar: 'قماش تافتا النايلون',
    de: 'Nylon-Taffeta-Stoff',
    es: 'Tela de tafetán de nailon'
  },
  'Knitted mesh lining': {
    en: 'Knitted mesh lining',
    zh: '针织网布内里',
    ar: 'بطانة شبكية محيكة',
    de: 'Gestricktes Netz-Futter',
    es: 'Forro de malla de punto'
  },
  '针织网布内里': {
    en: 'Knitted mesh lining',
    zh: '针织网布内里',
    ar: 'بطانة شبكية محيكة',
    de: 'Gestricktes Netz-Futter',
    es: 'Forro de malla de punto'
  },
  'Splicing color design': {
    en: 'Splicing color design',
    zh: '相拼色设计',
    ar: 'تصميم ألوان متقاطعة',
    de: 'Farblich abgestimmtes Design',
    es: 'Diseño de colores combinados'
  },
  '相拼色设计': {
    en: 'Splicing color design',
    zh: '相拼色设计',
    ar: 'تصميم ألوان متقاطعة',
    de: 'Farblich abgestimmtes Design',
    es: 'Diseño de colores combinados'
  },
  'Stylish appearance': {
    en: 'Stylish appearance',
    zh: '时尚外观',
    ar: 'مظهر عصري',
    de: 'Stilvolles Aussehen',
    es: 'Apariencia elegante'
  },
  '时尚外观': {
    en: 'Stylish appearance',
    zh: '时尚外观',
    ar: 'مظهر عصري',
    de: 'Stilvolles Aussehen',
    es: 'Apariencia elegante'
  },
  'Simple and elegant': {
    en: 'Simple and elegant',
    zh: '简约大方',
    ar: 'بسيط وأنيق',
    de: 'Einfach und elegant',
    es: 'Simple y elegante'
  },
  '简约大方': {
    en: 'Simple and elegant',
    zh: '简约大方',
    ar: 'بسيط وأنيق',
    de: 'Einfach und elegant',
    es: 'Simple y elegante'
  },
  'Excellent waterproof': {
    en: 'Excellent waterproof',
    zh: '防水优异',
    ar: 'مقاومة ممتازة للماء',
    de: 'Ausgezeichnet wasserdicht',
    es: 'Excelente impermeabilidad'
  },
  '防水优异': {
    en: 'Excellent waterproof',
    zh: '防水优异',
    ar: 'مقاومة ممتازة للماء',
    de: 'Ausgezeichnet wasserdicht',
    es: 'Excelente impermeabilidad'
  },
  'Cuffed pants': {
    en: 'Cuffed pants',
    zh: '束脚长裤',
    ar: 'بنطلون بأكواع مضغوطة',
    de: 'Bundhose mit Bündchen',
    es: 'Pantalones con puños'
  },
  '束脚长裤': {
    en: 'Cuffed pants',
    zh: '束脚长裤',
    ar: 'بنطلون بأكواع مضغوطة',
    de: 'Bundhose mit Bündchen',
    es: 'Pantalones con puños'
  },
  'Reflective strip design': {
    en: 'Reflective strip design',
    zh: '反光条设计',
    ar: 'تصميم شريط عاكس',
    de: 'Reflektorstreifen-Design',
    es: 'Diseño de tira reflectante'
  },
  '反光条设计': {
    en: 'Reflective strip design',
    zh: '反光条设计',
    ar: 'تصميم شريط عاكس',
    de: 'Reflektorstreifen-Design',
    es: 'Diseño de tira reflectante'
  },
  'Two-piece set': {
    en: 'Two-piece set',
    zh: '分体式套装',
    ar: 'طقم من قطعتين',
    de: 'Zweiteiliges Set',
    es: 'Conjunto de dos piezas'
  },
  '分体式套装': {
    en: 'Two-piece set',
    zh: '分体式套装',
    ar: 'طقم من قطعتين',
    de: 'Zweiteiliges Set',
    es: 'Conjunto de dos piezas'
  },
  'Comfortable and breathable': {
    en: 'Comfortable and breathable',
    zh: '舒适透气',
    ar: 'مريح ويسمح بالتنفس',
    de: 'Bequem und atmungsaktiv',
    es: 'Cómodo y transpirable'
  },
  '舒适透气': {
    en: 'Comfortable and breathable',
    zh: '舒适透气',
    ar: 'مريح ويسمح بالتنفس',
    de: 'Bequem und atmungsaktiv',
    es: 'Cómodo y transpirable'
  },
  'Waterproof material': {
    en: 'Waterproof material',
    zh: '防水材质',
    ar: 'مادة مقاومة للماء',
    de: 'Wasserdichtes Material',
    es: 'Material impermeable'
  },
  '防水材质': {
    en: 'Waterproof material',
    zh: '防水材质',
    ar: 'مادة مقاومة للماء',
    de: 'Wasserdichtes Material',
    es: 'Material impermeable'
  },
  'Quilted cotton lining': {
    en: 'Quilted cotton lining',
    zh: '行缝棉内里',
    ar: 'بطانة قطنية مبطنة',
    de: 'Gesteppte Baumwollfütterung',
    es: 'Forro de algodón acolchado'
  },
  '行缝棉内里': {
    en: 'Quilted cotton lining',
    zh: '行缝棉内里',
    ar: 'بطانة قطنية مبطنة',
    de: 'Gesteppte Baumwollfütterung',
    es: 'Forro de algodón acolchado'
  },
  'Spring yarn fabric': {
    en: 'Spring yarn fabric',
    zh: '春亚纺面料',
    ar: 'قماش خيط الربيع',
    de: 'Frühjahrsgarn-Stoff',
    es: 'Tela de hilo de primavera'
  },
  '春亚纺面料': {
    en: 'Spring yarn fabric',
    zh: '春亚纺面料',
    ar: 'قماش خيط الربيع',
    de: 'Frühjahrsgarn-Stoff',
    es: 'Tela de hilo de primavera'
  },
  'Polyester taffeta fabric': {
    en: 'Polyester taffeta fabric',
    zh: '涤丝纺面料',
    ar: 'قماش تافتا البوليستر',
    de: 'Polyester-Taffeta-Stoff',
    es: 'Tela de tafetán de poliéster'
  },
  '涤丝纺面料': {
    en: 'Polyester taffeta fabric',
    zh: '涤丝纺面料',
    ar: 'قماش تافتا البوليستر',
    de: 'Polyester-Taffeta-Stoff',
    es: 'Tela de tafetán de poliéster'
  },
  'Reflective tape': {
    en: 'Reflective tape',
    zh: '反光织带',
    ar: 'شريط عاكس',
    de: 'Reflektorband',
    es: 'Cinta reflectante'
  },
  '反光织带': {
    en: 'Reflective tape',
    zh: '反光织带',
    ar: 'شريط عاكس',
    de: 'Reflektorband',
    es: 'Cinta reflectante'
  },
  'Single-coated design': {
    en: 'Single-coated design',
    zh: '单胶涂层',
    ar: 'تصميم طلاء أحادي',
    de: 'Einfach beschichtetes Design',
    es: 'Diseño de recubrimiento simple'
  },
  '单胶涂层': {
    en: 'Single-coated design',
    zh: '单胶涂层',
    ar: 'تصميم طلاء أحادي',
    de: 'Einfach beschichtetes Design',
    es: 'Diseño de recubrimiento simple'
  },
  'Cotton fabric': {
    en: 'Cotton fabric',
    zh: '全棉面料',
    ar: 'قماش قطني',
    de: 'Baumwollstoff',
    es: 'Tela de algodón'
  },
  '全棉面料': {
    en: 'Cotton fabric',
    zh: '全棉面料',
    ar: 'قماش قطني',
    de: 'Baumwollstoff',
    es: 'Tela de algodón'
  },
  'Two-piece structure': {
    en: 'Two-piece structure',
    zh: '分体式结构',
    ar: 'هيكل من قطعتين',
    de: 'Zweiteilige Struktur',
    es: 'Estructura de dos piezas'
  },
  '分体式结构': {
    en: 'Two-piece structure',
    zh: '分体式结构',
    ar: 'هيكل من قطعتين',
    de: 'Zweiteilige Struktur',
    es: 'Estructura de dos piezas'
  },
  'Anti-static option available': {
    en: 'Anti-static option available',
    zh: '可选抗静电功能',
    ar: 'خيار مضاد للكهرباء الساكنة متاح',
    de: 'Antistatik-Option verfügbar',
    es: 'Opción antiestática disponible'
  },
  '可选抗静电功能': {
    en: 'Anti-static option available',
    zh: '可选抗静电功能',
    ar: 'خيار مضاد للكهرباء الساكنة متاح',
    de: 'Antistatik-Option verfügbar',
    es: 'Opción antiestática disponible'
  },
};

// Get localized product name
export function getProductName(product: Product, lang: Language): string {
  if (lang === 'zh') {
    return product.name;
  }
  if (lang === 'ar' && product.nameAr) {
    return product.nameAr;
  }
  if (lang === 'de' && product.nameDe) {
    return product.nameDe;
  }
  if (lang === 'es' && product.nameEs) {
    return product.nameEs;
  }
  return product.nameEn || product.name;
}

// Get localized product description
export function getProductDescription(product: Product, lang: Language): string {
  if (lang === 'zh') {
    return product.description;
  }
  if (lang === 'ar' && product.descriptionAr) {
    return product.descriptionAr;
  }
  if (lang === 'de' && product.descriptionDe) {
    return product.descriptionDe;
  }
  if (lang === 'es' && product.descriptionEs) {
    return product.descriptionEs;
  }
  return product.descriptionEn || product.description;
}

// Get localized product features
export function getProductFeatures(product: Product, lang: Language): string[] {
  // Get the appropriate feature list based on language
  let features: string[];
  if (lang === 'zh') {
    features = product.features;
  } else {
    features = product.featuresEn.length > 0 ? product.featuresEn : product.features;
  }
  
  // Translate each feature if translation exists
  return features.map(feature => {
    const translation = featureTranslations[feature]?.[lang];
    return translation || feature;
  });
}

// Get localized product applications
export function getProductApplications(product: Product, lang: Language): string[] {
  if (lang === 'zh') {
    return product.applications;
  }
  if (lang === 'ar' && product.applicationsAr) {
    return product.applicationsAr;
  }
  if (lang === 'de' && product.applicationsDe) {
    return product.applicationsDe;
  }
  if (lang === 'es' && product.applicationsEs) {
    return product.applicationsEs;
  }
  return product.applicationsEn.length > 0 ? product.applicationsEn : product.applications;
}

// Category translations for all languages
const categoryTranslations: Record<string, Record<string, string>> = {
  'protective-suits': { 
    en: 'Protective Suits', 
    zh: '防护服系列', 
    ar: 'بدلات الحماية', 
    de: 'Schutzanzüge', 
    es: 'Trajes de Protección' 
  },
  'rainwear': { 
    en: 'Rainwear Series', 
    zh: '雨衣系列', 
    ar: 'سلسلة الملابس المقاومة للمطر', 
    de: 'Regenkleidung', 
    es: 'Ropa Impermeable' 
  },
  'workwear': { 
    en: 'Workwear Series', 
    zh: '工装系列', 
    ar: 'سلسلة ملابس العمل', 
    de: 'Arbeitskleidung', 
    es: 'Ropa de Trabajo' 
  },
};

// Get localized category name
export function getCategoryName(categoryId: string, lang: Language): string {
  // First check if we have a translation for this category
  if (categoryTranslations[categoryId]?.[lang]) {
    return categoryTranslations[categoryId][lang];
  }
  
  // Fallback to product data
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
