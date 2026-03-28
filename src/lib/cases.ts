// 客户案例数据 - 上海金铃橡胶制品有限公司

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  industry: string;
  industryEn: string;
  country: string;
  countryEn: string;
  products: string[];
  productsEn: string[];
  challenge: string;
  challengeEn: string;
  solution: string;
  solutionEn: string;
  results: string[];
  resultsEn: string[];
  testimonial?: string;
  testimonialEn?: string;
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
    summary: '为中石化提供定制化防化服，帮助其提升员工安全防护水平。',
    summaryEn: 'Provided customized chemical protective suits for Sinopec, improving worker safety protection.',
    industry: '石油化工',
    industryEn: 'Petrochemical',
    country: '中国',
    countryEn: 'China',
    products: ['防化服', '抗静电工作服'],
    productsEn: ['Chemical Protective Suits', 'Anti-static Workwear'],
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
    testimonial: '金铃的防护服质量过硬，服务也很专业。他们不仅提供产品，还帮我们培训员工正确使用方法，大大提升了我们的安全管理水平。',
    testimonialEn: 'Jinling\'s protective suits are of excellent quality, and their service is professional. They not only provided products but also helped train our staff on proper usage, greatly improving our safety management.',
    clientName: '张经理',
    clientNameEn: 'Manager Zhang',
    clientPosition: '安全环保部',
    clientPositionEn: 'Safety & Environment Department',
    image: '/case-petrochemical.png',
  },
  {
    id: '2',
    slug: 'germany-rainwear',
    title: '德国户外用品连锁品牌雨衣项目',
    titleEn: 'German Outdoor Retailer Rainwear Project',
    summary: '为德国知名户外用品连锁品牌提供OEM雨衣，成功打开欧洲市场。',
    summaryEn: 'Provided OEM rainwear for a well-known German outdoor retailer, successfully entering the European market.',
    industry: '户外用品零售',
    industryEn: 'Outdoor Retail',
    country: '德国',
    countryEn: 'Germany',
    products: ['雨衣', '雨裤'],
    productsEn: ['Rainwear', 'Rain Pants'],
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
    testimonial: 'We have been working with Jinling for 5 years. Their quality consistency and responsiveness to our needs are impressive. The rainwear sells very well in our stores.',
    testimonialEn: 'We have been working with Jinling for 5 years. Their quality consistency and responsiveness to our needs are impressive. The rainwear sells very well in our stores.',
    clientName: 'Hans Mueller',
    clientNameEn: 'Hans Mueller',
    clientPosition: '采购总监',
    clientPositionEn: 'Procurement Director',
    image: '/case-rainwear.png',
  },
  {
    id: '3',
    slug: 'japan-chemical-plant',
    title: '日本化工企业防护服项目',
    titleEn: 'Japanese Chemical Plant Protective Suit Project',
    summary: '为日本大型化工企业提供定制防化服，满足严格的日本工业标准。',
    summaryEn: 'Provided customized protective suits for a major Japanese chemical company, meeting strict Japanese industrial standards.',
    industry: '化工制造',
    industryEn: 'Chemical Manufacturing',
    country: '日本',
    countryEn: 'Japan',
    products: ['防化服', '防毒衣'],
    productsEn: ['Chemical Protective Suits', 'Gas Protection Suits'],
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
    testimonial: '金铃的品质和服务让我们非常满意。他们能够理解我们的严格要求，并且总是能够按时交付符合标准的产品。',
    testimonialEn: 'We are very satisfied with Jinling\'s quality and service. They understand our strict requirements and always deliver products that meet standards on time.',
    clientName: '田中部长',
    clientNameEn: 'Department Head Tanaka',
    clientPosition: '安全部',
    clientPositionEn: 'Safety Department',
    image: '/case-japan.png',
  },
  {
    id: '4',
    slug: 'saudi-oil-gas',
    title: '沙特石油天然气公司防护装备项目',
    titleEn: 'Saudi Oil & Gas Company Protective Equipment Project',
    summary: '为沙特石油公司提供专业防化服和高温防护服，适应沙漠气候环境。',
    summaryEn: 'Provided professional protective suits and heat-resistant gear for a Saudi oil company, adapted for desert climate conditions.',
    industry: '石油天然气',
    industryEn: 'Oil & Gas',
    country: '沙特阿拉伯',
    countryEn: 'Saudi Arabia',
    products: ['防化服', '高温防护服', '抗静电工作服'],
    productsEn: ['Chemical Protective Suits', 'Heat-Resistant Gear', 'Anti-static Workwear'],
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
    testimonial: 'Jinling understood our unique requirements for desert operations and cultural considerations. Their customized solution works perfectly in our high-temperature environment.',
    testimonialEn: 'Jinling understood our unique requirements for desert operations and cultural considerations. Their customized solution works perfectly in our high-temperature environment.',
    clientName: 'Ahmed Al-Rahman',
    clientNameEn: 'Ahmed Al-Rahman',
    clientPosition: 'HSE Manager',
    clientPositionEn: 'HSE Manager',
    image: '/case-saudi.png',
  },
  {
    id: '5',
    slug: 'brazil-mining',
    title: '巴西矿业公司工装项目',
    titleEn: 'Brazilian Mining Company Workwear Project',
    summary: '为巴西大型矿业公司提供定制工装，满足矿山作业的特殊需求。',
    summaryEn: 'Provided customized workwear for a major Brazilian mining company, meeting the special requirements of mining operations.',
    industry: '矿业',
    industryEn: 'Mining',
    country: '巴西',
    countryEn: 'Brazil',
    products: ['工装', '防护雨衣', '安全背心'],
    productsEn: ['Workwear', 'Protective Rainwear', 'Safety Vests'],
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
    testimonial: 'Os uniformes da Jinling são de alta qualidade e durabilidade. Eles aguentam bem as condições difíceis das minas e nossos funcionários estão satisfeitos.',
    testimonialEn: 'Jinling\'s uniforms are of high quality and durability. They withstand the difficult conditions of the mines well and our employees are satisfied.',
    clientName: 'Carlos Silva',
    clientNameEn: 'Carlos Silva',
    clientPosition: '采购经理',
    clientPositionEn: 'Procurement Manager',
    image: '/case-mining.png',
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
