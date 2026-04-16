// 客户案例数据 - 上海金铃橡胶制品有限公司

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  titleAr?: string;
  titleDe?: string;
  titleEs?: string;
  summary: string;
  summaryEn: string;
  summaryAr?: string;
  summaryDe?: string;
  summaryEs?: string;
  industry: string;
  industryEn: string;
  industryAr?: string;
  industryDe?: string;
  industryEs?: string;
  country: string;
  countryEn: string;
  countryAr?: string;
  countryDe?: string;
  countryEs?: string;
  products: string[];
  productsEn: string[];
  productsAr?: string[];
  productsDe?: string[];
  productsEs?: string[];
  challenge: string;
  challengeEn: string;
  challengeAr?: string;
  challengeDe?: string;
  challengeEs?: string;
  solution: string;
  solutionEn: string;
  solutionAr?: string;
  solutionDe?: string;
  solutionEs?: string;
  results: string[];
  resultsEn: string[];
  resultsAr?: string[];
  resultsDe?: string[];
  resultsEs?: string[];
  testimonial?: string;
  testimonialEn?: string;
  testimonialAr?: string;
  testimonialDe?: string;
  testimonialEs?: string;
  clientName?: string;
  clientNameEn?: string;
  clientPosition?: string;
  clientPositionEn?: string;
  image: string;
  logo?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'petrochemical-safety-suit',
    title: '中石化安全防护服项目',
    titleEn: 'Sinopec Petrochemical Safety Suit Project',
    titleAr: 'مشروع بدلات السلامة لشركة سينوبك البتروكيماوية',
    titleDe: 'Sinopec Petrochemisches Schutzausrüstungsprojekt',
    titleEs: 'Proyecto de Trajes de Seguridad Petroquímica Sinopec',
    summary: '为中石化提供定制化防化服，帮助其提升员工安全防护水平。',
    summaryEn: 'Provided customized chemical protective suits for Sinopec, improving worker safety protection.',
    summaryAr: 'توفير بدلات حماية كيميائية مخصصة لشركة سينوبك، لتحسين مستوى الحماية السلامة للعاملين.',
    summaryDe: 'Lieferte maßgeschneiderte chemische Schutzausrüstung für Sinopec zur Verbesserung des Arbeitsschutzes.',
    summaryEs: 'Proporcionamos trajes de protección química personalizados para Sinopec, mejorando la protección de seguridad de los trabajadores.',
    industry: '石油化工',
    industryEn: 'Petrochemical',
    industryAr: 'البتروكيماويات',
    industryDe: 'Petrochemie',
    industryEs: 'Petroquímica',
    country: '中国',
    countryEn: 'China',
    countryAr: 'الصين',
    countryDe: 'China',
    countryEs: 'China',
    products: ['防化服', '抗静电工作服'],
    productsEn: ['Chemical Protective Suits', 'Anti-static Workwear'],
    productsAr: ['بدلات الحماية الكيميائية', 'ملابس عمل مضادة للكهرباء الساكنة'],
    productsDe: ['Chemische Schutzausrüstung', 'Antistatische Arbeitskleidung'],
    productsEs: ['Trajes de Protección Química', 'Ropa de Trabajo Antiestática'],
    challenge: '中石化某炼油厂需要为一线作业人员提供专业的防化服，要求能够抵御多种化学品，同时保证穿着舒适性和作业灵活性。由于作业环境复杂，需要不同等级的防护服搭配使用。',
    challengeEn: 'A Sinopec refinery needed professional chemical protective suits for frontline workers, requiring protection against multiple chemicals while ensuring comfort and flexibility. Due to complex work environments, different levels of protective suits were needed.',
    solution: '我们为中石化提供了三级防护方案：\n\n1. **高危区域**：丁基胶全封闭防化服，防护等级最高\n2. **中危区域**：氯丁胶分体式防化服，兼顾防护与灵活性\n3. **低危区域**：PVC材质防酸工作服\n\n同时提供现场培训和技术支持，确保正确使用和维护。',
    solutionEn: 'We provided Sinopec with a three-tier protection solution:\n\n1. **High-risk areas**: Butyl rubber fully enclosed suits, highest protection level\n2. **Medium-risk areas**: Neoprene two-piece suits, balancing protection and flexibility\n3. **Low-risk areas**: PVC acid-resistant workwear\n\nWe also provided on-site training and technical support for proper use and maintenance.',
    results: [
      '供应防护服超过5000套',
      '安全事故率下降40%',
      '员工满意度提升至95%',
      '续签三年供应合同'
    ],
    resultsEn: [
      'Supplied over 5,000 protective suits',
      'Reduced accident rate by 40%',
      'Worker satisfaction increased to 95%',
      'Renewed three-year supply contract'
    ],
    resultsAr: [
      'تم توريد أكثر من 5000 بدلة حماية',
      'انخفض معدل الحوادث بنسبة 40%',
      'ارتفعت رضا العمال إلى 95%',
      'تجديد عقد التوريد لمدة ثلاث سنوات'
    ],
    resultsDe: [
      'Über 5.000 Schutzausrüstungen geliefert',
      'Unfallrate um 40% gesenkt',
      'Arbeiterzufriedenheit auf 95% gestiegen',
      'Dreijähriger Liefervertrag erneuert'
    ],
    resultsEs: [
      'Se suministraron más de 5.000 trajes de protección',
      'La tasa de accidentes se redujo un 40%',
      'La satisfacción de los trabajadores aumentó al 95%',
      'Renovación del contrato de suministro por tres años'
    ],
    testimonial: '金铃的防护服质量过硬，服务也很专业。他们不仅提供产品，还帮我们培训员工正确使用方法，大大提升了我们的安全管理水平。',
    testimonialEn: 'Jinling\'s protective suits are of excellent quality, and their service is professional. They not only provided products but also helped train our staff on proper usage, greatly improving our safety management.',
    testimonialAr: 'بدلات الحماية من جينلينج ممتازة الجودة، وخدمتهم احترافية. لم يقدموا المنتجات فقط بل ساعدوا أيضاً في تدريب موظفينا على الاستخدام الصحيح، مما حسن بشكل كبير إدارة السلامة لدينا.',
    testimonialDe: 'Jinlings Schutzausrüstung ist von ausgezeichneter Qualität und ihr Service ist professionell. Sie lieferten nicht nur Produkte, sondern halfen auch bei der Schulung unserer Mitarbeiter im richtigen Umgang, was unser Sicherheitsmanagement erheblich verbesserte.',
    testimonialEs: 'Los trajes de protección de Jinling son de excelente calidad y su servicio es profesional. No solo proporcionaron productos sino que también ayudaron a capacitar a nuestro personal en el uso adecuado, mejorando enormemente nuestra gestión de seguridad.',
    clientName: '张经理',
    clientNameEn: 'Manager Zhang',
    clientPosition: '安全环保部',
    clientPositionEn: 'Safety & Environment Department',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
  },
  {
    id: '2',
    slug: 'germany-rainwear',
    title: '德国户外用品连锁品牌雨衣项目',
    titleEn: 'German Outdoor Retailer Rainwear Project',
    titleAr: 'مشروع ملابس المطر لبائع تجزئة ألماني للمنتجات الخارجية',
    titleDe: 'Deutsches Outdoor-Einzelhändler Regenkleidungsprojekt',
    titleEs: 'Proyecto de Impermeables para Minorista Alemán de Exteriores',
    summary: '为德国知名户外用品连锁品牌提供OEM雨衣，成功打开欧洲市场。',
    summaryEn: 'Provided OEM rainwear for a well-known German outdoor retailer, successfully entering the European market.',
    summaryAr: 'توفير ملابس مطر OEM لبائع تجزئة ألماني معروف للمنتجات الخارجية، ودخول ناجح للسوق الأوروبية.',
    summaryDe: 'Lieferte OEM-Regenkleidung für einen bekannten deutschen Outdoor-Einzelhändler und erfolgreichem Markteintritt in Europa.',
    summaryEs: 'Proporcionamos impermeables OEM para un conocido minorista alemán de exteriores, entrando con éxito al mercado europeo.',
    industry: '户外用品零售',
    industryEn: 'Outdoor Retail',
    industryAr: 'تجارة التجزئة للمنتجات الخارجية',
    industryDe: 'Outdoor-Einzelhandel',
    industryEs: 'Venta Minorista de Exteriores',
    country: '德国',
    countryEn: 'Germany',
    countryAr: 'ألمانيا',
    countryDe: 'Deutschland',
    countryEs: 'Alemania',
    products: ['雨衣', '雨裤'],
    productsEn: ['Rainwear', 'Rain Pants'],
    productsAr: ['ملابس المطر', 'بنطلون المطر'],
    productsDe: ['Regenkleidung', 'Regenhosen'],
    productsEs: ['Impermeables', 'Pantalones Impermeables'],
    challenge: '德国客户对产品质量要求极高，需要满足欧盟EN标准，同时要求产品具有时尚设计感和环保特性。交货周期紧张，需在雨季前完成首批订单。',
    challengeEn: 'The German client had extremely high quality requirements, needing products to meet EU EN standards while having fashionable design and eco-friendly features. The delivery timeline was tight, requiring completion before the rainy season.',
    solution: '我们为客户提供了完整的OEM解决方案：\n\n1. **产品开发**：根据客户品牌定位设计新款雨衣\n2. **材料选择**：采用环保PVC材料，符合REACH标准\n3. **质量认证**：协助客户完成CE认证\n4. **物流方案**：提前备料，分批出货，确保按时交付',
    solutionEn: 'We provided a complete OEM solution:\n\n1. **Product Development**: Designed new rainwear based on client\'s brand positioning\n2. **Material Selection**: Used eco-friendly PVC materials compliant with REACH standards\n3. **Quality Certification**: Assisted client in obtaining CE certification\n4. **Logistics**: Pre-stocked materials and shipped in batches to ensure on-time delivery',
    results: [
      '首批订单20000件按时交付',
      '产品通过CE认证',
      '复购率100%，合作至今',
      '年销售额增长30%'
    ],
    resultsEn: [
      'First order of 20,000 pieces delivered on time',
      'Products obtained CE certification',
      '100% reorder rate, partnership continues',
      'Annual sales growth of 30%'
    ],
    resultsAr: [
      'تم تسليم الطلب الأول البالغ 20000 قطعة في الوقت المحدد',
      'حصلت المنتجات على شهادة CE',
      'معدل إعادة الطلب 100٪، الشراكة مستمرة',
      'نمو المبيعات السنوي بنسبة 30٪'
    ],
    resultsDe: [
      'Erste Bestellung von 20.000 Stück pünktlich geliefert',
      'Produkte erhielten CE-Zertifizierung',
      '100% Wiederbestellrate, Partnerschaft besteht fort',
      'Jährliches Umsatzwachstum von 30%'
    ],
    resultsEs: [
      'Primer pedido de 20.000 piezas entregado a tiempo',
      'Los productos obtuvieron certificación CE',
      'Tasa de reorden del 100%, la asociación continúa',
      'Crecimiento de ventas anual del 30%'
    ],
    testimonial: 'We have been working with Jinling for 5 years. Their quality consistency and responsiveness to our needs are impressive. The rainwear sells very well in our stores.',
    testimonialEn: 'We have been working with Jinling for 5 years. Their quality consistency and responsiveness to our needs are impressive. The rainwear sells very well in our stores.',
    clientName: 'Hans Mueller',
    clientNameEn: 'Hans Mueller',
    clientPosition: '采购总监',
    clientPositionEn: 'Procurement Director',
    image: 'https://images.unsplash.com/photo-1494168039944-59f44c12358a?w=800',
  },
  {
    id: '3',
    slug: 'japan-chemical-plant',
    title: '日本化工企业防护服项目',
    titleEn: 'Japanese Chemical Plant Protective Suit Project',
    titleAr: 'مشروع بدلات الحماية لمصنع كيميائي ياباني',
    titleDe: 'Japanisches Chemiewerk Schutzausrüstungsprojekt',
    titleEs: 'Proyecto de Trajes de Protección para Planta Química Japonesa',
    summary: '为日本大型化工企业提供定制防化服，满足严格的日本工业标准。',
    summaryEn: 'Provided customized protective suits for a major Japanese chemical company, meeting strict Japanese industrial standards.',
    summaryAr: 'توفير بدلات حماية مخصصة لشركة كيميائية يابانية كبرى، تلبي معايير الصناعة اليابانية الصارمة.',
    summaryDe: 'Lieferte maßgeschneiderte Schutzausrüstung für ein großes japanisches Chemieunternehmen, das strengen japanischen Industrienormen entspricht.',
    summaryEs: 'Proporcionamos trajes de protección personalizados para una importante empresa química japonesa, cumpliendo estrictas normas industriales japonesas.',
    industry: '化工制造',
    industryEn: 'Chemical Manufacturing',
    industryAr: 'التصنيع الكيميائي',
    industryDe: 'Chemische Fertigung',
    industryEs: 'Fabricación Química',
    country: '日本',
    countryEn: 'Japan',
    countryAr: 'اليابان',
    countryDe: 'Japan',
    countryEs: 'Japón',
    products: ['防化服', '防毒衣'],
    productsEn: ['Chemical Protective Suits', 'Gas Protection Suits'],
    productsAr: ['بدلات الحماية الكيميائية', 'بدلات الحماية من الغازات'],
    productsDe: ['Chemische Schutzausrüstung', 'Gasschutzanzüge'],
    productsEs: ['Trajes de Protección Química', 'Trajes de Protección contra Gases'],
    challenge: '日本客户对产品细节要求极为严格，需要满足JIS日本工业标准，同时对供应商的资质审核非常严格。产品需要通过日本第三方检测机构的测试。',
    challengeEn: 'The Japanese client had extremely strict requirements for product details, needing to meet JIS Japanese Industrial Standards, with rigorous supplier qualification audits. Products needed to pass testing by Japanese third-party testing agencies.',
    solution: '我们投入专项团队进行攻关：\n\n1. **技术对接**：与客户技术团队深入沟通，明确需求\n2. **标准对标**：将产品标准与JIS标准逐项对照\n3. **样品测试**：多次送样日本检测机构测试\n4. **质量体系**：接受客户现场审核，优化质量流程\n5. **本地化服务**：提供日语产品说明书和技术支持',
    solutionEn: 'We assigned a dedicated team to address the challenge:\n\n1. **Technical Alignment**: In-depth communication with client\'s technical team\n2. **Standards Mapping**: Compared product standards with JIS requirements item by item\n3. **Sample Testing**: Multiple submissions to Japanese testing agencies\n4. **Quality System**: Accepted on-site audits, optimized quality processes\n5. **Localization**: Provided Japanese product manuals and technical support',
    results: [
      '产品通过JIS标准认证',
      '成为客户指定供应商',
      '年供货量超过8000套',
      '合作周期超过8年'
    ],
    resultsEn: [
      'Products passed JIS standard certification',
      'Became designated supplier',
      'Annual supply exceeds 8,000 sets',
      'Partnership spanning over 8 years'
    ],
    resultsAr: [
      'حصلت المنتجات على شهادة معيار JIS',
      'أصبحنا المورد المعتمد',
      'التوريد السنوي يتجاوز 8000 مجموعة',
      'شراكة تمتد لأكثر من 8 سنوات'
    ],
    resultsDe: [
      'Produkte erhielten JIS-Norm-Zertifizierung',
      'Wurde zum bevorzugten Lieferanten',
      'Jährliche Lieferung übersteigt 8.000 Sets',
      'Partnerschaft über 8 Jahre'
    ],
    resultsEs: [
      'Productos obtuvieron certificación estándar JIS',
      'Nos convertimos en proveedor designado',
      'Suministro anual supera 8.000 conjuntos',
      'Asociación de más de 8 años'
    ],
    testimonial: '金铃的品质和服务让我们非常满意。他们能够理解我们的严格要求，并且总是能够按时交付符合标准的产品。',
    testimonialEn: 'We are very satisfied with Jinling\'s quality and service. They understand our strict requirements and always deliver products that meet standards on time.',
    testimonialAr: 'نحن راضون جداً عن جودة وخدمة جينلينج. إنهم يفهمون متطلباتنا الصارمة ويسلمون دائماً منتجات تلبي المعايير في الوقت المحدد.',
    testimonialDe: 'Wir sind sehr zufrieden mit Jinlings Qualität und Service. Sie verstehen unsere strengen Anforderungen und liefern immer pünktlich Produkte, die den Standards entsprechen.',
    testimonialEs: 'Estamos muy satisfechos con la calidad y el servicio de Jinling. Entienden nuestros estrictos requisitos y siempre entregan productos que cumplen los estándares a tiempo.',
    clientName: '田中部长',
    clientNameEn: 'Department Head Tanaka',
    clientPosition: '安全部',
    clientPositionEn: 'Safety Department',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800',
  },
  {
    id: '4',
    slug: 'saudi-oil-gas',
    title: '沙特石油天然气公司防护装备项目',
    titleEn: 'Saudi Oil & Gas Company Protective Equipment Project',
    titleAr: 'مشروع معدات الحماية لشركة النفط والغاز السعودية',
    titleDe: 'Saudi Öl- und Gasunternehmen Schutzausrüstungsprojekt',
    titleEs: 'Proyecto de Equipos de Protección para Empresa de Petróleo y Gas Saudí',
    summary: '为沙特石油公司提供专业防化服和高温防护服，适应沙漠气候环境。',
    summaryEn: 'Provided professional protective suits and heat-resistant gear for a Saudi oil company, adapted for desert climate conditions.',
    summaryAr: 'توفير بدلات حماية مهنية ومعدات مقاومة للحرارة لشركة نفط سعودية، متكيفة مع ظروف المناخ الصحراوي.',
    summaryDe: 'Lieferte professionelle Schutzausrüstung und hitzebeständige Ausrüstung für ein saudisches Ölunternehmen, angepasst an Wüstenklimabedingungen.',
    summaryEs: 'Proporcionamos trajes de protección profesionales y equipos resistentes al calor para una empresa petrolera saudí, adaptados a condiciones climáticas desérticas.',
    industry: '石油天然气',
    industryEn: 'Oil & Gas',
    industryAr: 'النفط والغاز',
    industryDe: 'Öl und Gas',
    industryEs: 'Petróleo y Gas',
    country: '沙特阿拉伯',
    countryEn: 'Saudi Arabia',
    countryAr: 'المملكة العربية السعودية',
    countryDe: 'Saudi-Arabien',
    countryEs: 'Arabia Saudí',
    products: ['防化服', '高温防护服', '抗静电工作服'],
    productsEn: ['Chemical Protective Suits', 'Heat-Resistant Gear', 'Anti-static Workwear'],
    productsAr: ['بدلات الحماية الكيميائية', 'معدات مقاومة للحرارة', 'ملابس عمل مضادة للكهرباء الساكنة'],
    productsDe: ['Chemische Schutzausrüstung', 'Hitzebeständige Ausrüstung', 'Antistatische Arbeitskleidung'],
    productsEs: ['Trajes de Protección Química', 'Equipo Resistente al Calor', 'Ropa de Trabajo Antiestática'],
    challenge: '沙特石油公司需要防护装备能够适应极端高温环境（可达50°C），同时具备防化功能。产品需要符合中东地区的宗教文化习惯，提供符合当地要求的款式。',
    challengeEn: 'The Saudi oil company needed protective equipment suitable for extreme high temperatures (up to 50°C) while providing chemical protection. Products needed to comply with Middle Eastern religious and cultural customs with appropriate designs.',
    solution: '我们为沙特客户提供了定制化解决方案：\n\n1. **材料研发**：开发耐高温透气材料\n2. **款式设计**：提供符合中东文化习俗的长款设计\n3. **功能整合**：结合防化、隔热、抗静电功能\n4. **认证支持**：协助获取SABER认证\n5. **物流优化**：海运至吉达港，提供清关支持',
    solutionEn: 'We provided a customized solution for the Saudi client:\n\n1. **Material Development**: Developed high-temperature resistant breathable materials\n2. **Design**: Provided longer designs suitable for Middle Eastern cultural customs\n3. **Function Integration**: Combined chemical protection, heat insulation, and anti-static functions\n4. **Certification Support**: Assisted in obtaining SABER certification\n5. **Logistics Optimization**: Shipped to Jeddah Port with customs clearance support',
    results: [
      '首批订单15000套成功交付',
      '产品通过SABER认证',
      '耐高温测试超过50°C',
      '获得客户长期合作意向'
    ],
    resultsEn: [
      'First order of 15,000 sets successfully delivered',
      'Products passed SABER certification',
      'High-temperature resistance tested above 50°C',
      'Received long-term partnership commitment'
    ],
    resultsAr: [
      'تم تسليم الطلب الأول البالغ 15000 مجموعة بنجاح',
      'حصلت المنتجات على شهادة SABER',
      'اختبار مقاومة درجات الحرارة العالية يتجاوز 50 درجة مئوية',
      'حصلنا على التزام بشراكة طويلة الأمد'
    ],
    resultsDe: [
      'Erste Bestellung von 15.000 Sets erfolgreich geliefert',
      'Produkte bestanden SABER-Zertifizierung',
      'Hochtemperaturbeständigkeit über 50°C getestet',
      'Langfristige Partnerschaftszusage erhalten'
    ],
    resultsEs: [
      'Primer pedido de 15.000 conjuntos entregado con éxito',
      'Productos aprobaron certificación SABER',
      'Resistencia a alta temperatura probada superior a 50°C',
      'Recibido compromiso de asociación a largo plazo'
    ],
    testimonial: 'Jinling understood our unique requirements for desert operations and cultural considerations. Their customized solution works perfectly in our high-temperature environment.',
    testimonialEn: 'Jinling understood our unique requirements for desert operations and cultural considerations. Their customized solution works perfectly in our high-temperature environment.',
    clientName: 'Ahmed Al-Rahman',
    clientNameEn: 'Ahmed Al-Rahman',
    clientPosition: 'HSE Manager',
    clientPositionEn: 'HSE Manager',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  },
  {
    id: '5',
    slug: 'brazil-mining',
    title: '巴西矿业公司工装项目',
    titleEn: 'Brazilian Mining Company Workwear Project',
    titleAr: 'مشروع ملابس العمل لشركة تعدين برازيلية',
    titleDe: 'Brasilianisches Bergbauunternehmen Arbeitskleidungsprojekt',
    titleEs: 'Proyecto de Ropa de Trabajo para Empresa Minera Brasileña',
    summary: '为巴西大型矿业公司提供定制工装，满足矿山作业的特殊需求。',
    summaryEn: 'Provided customized workwear for a major Brazilian mining company, meeting the special requirements of mining operations.',
    summaryAr: 'توفير ملابس عمل مخصصة لشركة تعدين برازيلية كبرى، تلبي الاحتياجات الخاصة لعمليات التعدين.',
    summaryDe: 'Lieferte maßgeschneiderte Arbeitskleidung für ein großes brasilianisches Bergbauunternehmen, das den besonderen Anforderungen des Bergbaus entspricht.',
    summaryEs: 'Proporcionamos ropa de trabajo personalizada para una importante empresa minera brasileña, cumpliendo los requisitos especiales de las operaciones mineras.',
    industry: '矿业',
    industryEn: 'Mining',
    industryAr: 'التعدين',
    industryDe: 'Bergbau',
    industryEs: 'Minería',
    country: '巴西',
    countryEn: 'Brazil',
    countryAr: 'البرازيل',
    countryDe: 'Brasilien',
    countryEs: 'Brasil',
    products: ['工装', '防护雨衣', '安全背心'],
    productsEn: ['Workwear', 'Protective Rainwear', 'Safety Vests'],
    productsAr: ['ملابس العمل', 'ملابس المطر الواقية', 'سترات السلامة'],
    productsDe: ['Arbeitskleidung', 'Schutz-Regenkleidung', 'Sicherheitswesten'],
    productsEs: ['Ropa de Trabajo', 'Impermeables de Protección', 'Chalecos de Seguridad'],
    challenge: '巴西矿区气候多变，需要既能防雨又透气的工作服。同时矿区作业对耐磨性要求高，产品需要经受恶劣环境考验。客户希望产品带有反光条，提高夜间作业安全性。',
    challengeEn: 'Brazilian mining areas have variable climates requiring rainproof yet breathable workwear. Mining operations require high durability to withstand harsh environments. The client wanted products with reflective strips for improved nighttime safety.',
    solution: '我们提供了专业的矿业工装方案：\n\n1. **材料选择**：采用耐磨尼龙牛津布，内衬透气网眼\n2. **功能设计**：可拆卸内胆，适应多变天气\n3. **安全配置**：3M反光条，提高夜间可见度\n4. **款式定制**：多口袋设计，方便携带工具\n5. **标识印刷**：为客户印刷企业Logo',
    solutionEn: 'We provided a professional mining workwear solution:\n\n1. **Material Selection**: Durable nylon oxford fabric with breathable mesh lining\n2. **Functional Design**: Detachable lining for variable weather\n3. **Safety Configuration**: 3M reflective strips for improved visibility\n4. **Custom Design**: Multi-pocket design for tool carrying\n5. **Logo Printing**: Printed client\'s corporate logo',
    results: [
      '年供货量超过10000套',
      '产品使用寿命提升50%',
      '客户投诉率降低80%',
      '拓展至南美其他矿区'
    ],
    resultsEn: [
      'Annual supply exceeds 10,000 sets',
      'Product lifespan increased by 50%',
      'Customer complaints reduced by 80%',
      'Expanded to other South American mining sites'
    ],
    resultsAr: [
      'التوريد السنوي يتجاوز 10000 مجموعة',
      'زادت مدة حياة المنتج بنسبة 50%',
      'انخفضت شكاوى العملاء بنسبة 80%',
      'التوسع إلى مواقع تعدين أخرى في أمريكا الجنوبية'
    ],
    resultsDe: [
      'Jährliche Lieferung übersteigt 10.000 Sets',
      'Produktlebensdauer um 50% erhöht',
      'Kundenbeschwerden um 80% reduziert',
      'Erweiterung auf andere südamerikanische Bergbaustandorte'
    ],
    resultsEs: [
      'Suministro anual supera 10.000 conjuntos',
      'Vida útil del producto aumentó un 50%',
      'Quejas de clientes reducidas un 80%',
      'Expansión a otros sitios mineros de Sudamérica'
    ],
    testimonial: 'Os uniformes da Jinling são de alta qualidade e durabilidade. Eles aguentam bem as condições difíceis das minas e nossos funcionários estão satisfeitos.',
    testimonialEn: 'Jinling\'s uniforms are of high quality and durability. They withstand the difficult conditions of the mines well and our employees are satisfied.',
    testimonialAr: 'زي جينلينج عالي الجودة والمتانة. يتحمل ظروف المناجم الصعبة جيداً وموظفونا راضون.',
    testimonialDe: 'Jinlings Uniformen sind von hoher Qualität und Haltbarkeit. Sie halten den schwierigen Bedingungen in den Minen gut stand und unsere Mitarbeiter sind zufrieden.',
    testimonialEs: 'Los uniformes de Jinling son de alta calidad y durabilidad. Soportan bien las condiciones difíciles de las minas y nuestros empleados están satisfechos.',
    clientName: 'Carlos Silva',
    clientNameEn: 'Carlos Silva',
    clientPosition: '采购经理',
    clientPositionEn: 'Procurement Manager',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800',
  },
];

// 获取案例的结构化数据（用于SEO）
export function getCaseStudySchema(caseStudy: CaseStudy, lang: string = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: lang === 'zh' ? caseStudy.title : caseStudy.titleEn,
    description: lang === 'zh' ? caseStudy.summary : caseStudy.summaryEn,
    image: caseStudy.image,
    author: {
      '@type': 'Organization',
      name: 'Shanghai Jinling Rubber Products Co., Ltd.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Shanghai Jinling Rubber Products Co., Ltd.',
    },
  };
}
