// 上海金铃橡胶制品有限公司 - 产品数据库

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  images: {
    main: string;
    side?: string;
    additional?: string[];
  };
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  specifications: Record<string, string>;
  applications: string[];
  applicationsEn: string[];
  color: string;
  material: string;
}

export const productCategories = [
  { id: 'protective-suits', name: '防护服系列', nameEn: 'Protective Suits' },
  { id: 'rainwear', name: '雨衣系列', nameEn: 'Rainwear Series' },
  { id: 'workwear', name: '工装系列', nameEn: 'Workwear Series' },
];

export const products: Product[] = [
  // 防护服系列
  {
    id: '3116',
    name: '连体送风式防护服',
    nameEn: 'Full-Body Air-Fed Protective Suit',
    category: 'protective-suits',
    categoryEn: 'Protective Suits',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3116%E6%AD%A3%E9%9D%A2.jpeg&nonce=d1fb0bfe-0a26-4549-845d-f810ff966efa&project_id=7620626575964323874&sign=3bacbf2c37bd8f782c7196c22de6242de432921c20f9113247a69038259f84d7',
    },
    description: '连帽连体款式，配备外置送风软管系统，适用于存在有毒有害气体、粉尘的作业环境。通过外部送风保障呼吸安全，同时隔绝外界污染物接触皮肤。',
    descriptionEn: 'Full-body protective suit with hood and external air-fed hose system. Designed for hazardous environments with toxic gases and dust. External air supply ensures respiratory safety while isolating contaminants.',
    features: [
      '连帽连体设计',
      '外置波纹送风软管',
      '集成防护手套',
      '一体式防护靴',
      '拉链正面开合',
    ],
    featuresEn: [
      'Full-body hooded design',
      'External corrugated air hose',
      'Integrated protective gloves',
      'One-piece protective boots',
      'Front zipper closure',
    ],
    specifications: {
      '材质': 'PVC复合材料',
      '颜色': '卡其色主体/黑色配件',
      '尺码': 'S/M/L/XL/XXL',
      '认证': 'CE/ISO',
    },
    applications: ['化工行业', '矿山作业', '粉尘环境', '危险品处理'],
    applicationsEn: ['Chemical industry', 'Mining operations', 'Dusty environments', 'Hazardous material handling'],
    color: '卡其色',
    material: 'PVC复合材料',
  },
  {
    id: '3121',
    name: '连体隔热防护服',
    nameEn: 'Full-Body Heat-Resistant Protective Suit',
    category: 'protective-suits',
    categoryEn: 'Protective Suits',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3121%E6%AD%A3%E9%9D%A2.jpg&nonce=d077c6f4-fb9b-4a1f-99bc-7952e27ded91&project_id=7620626575964323874&sign=17433dd7ee5ae9d8849d3987d52c7aa5fbf4027b3a8652f61ffd56c3ef726070',
      side: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3121%E4%BE%A7%E9%9D%A2.jpg&nonce=c98f03e4-8859-4651-9a32-b49db536ef52&project_id=7620626575964323874&sign=7c143ed3f8185cee5b3d7e2d9a99e281af207c7679679d69bb9b9e17687b05d0',
    },
    description: '采用亮面隔热材质的连体防护服，能有效反射热量，隔绝高温对人体的灼伤。配备送风软管，保障高温环境下的呼吸供氧。',
    descriptionEn: 'Full-body protective suit with reflective heat-resistant material. Effectively reflects heat and prevents burns. Equipped with air supply hose for respiratory protection in high-temperature environments.',
    features: [
      '亮银色隔热材质',
      '帽檐透明挡片',
      '送风软管接口',
      '白色防护手套',
      '一体式防护靴',
    ],
    featuresEn: [
      'Bright silver heat-resistant material',
      'Transparent visor on hood',
      'Air hose connection',
      'White protective gloves',
      'One-piece protective boots',
    ],
    specifications: {
      '材质': '铝箔复合隔热材料',
      '颜色': '亮银色',
      '尺码': 'S/M/L/XL/XXL',
      '耐温': '可耐高温200°C',
    },
    applications: ['冶金炉前作业', '消防高温救援', '玻璃制造', '焊接作业'],
    applicationsEn: ['Metallurgical furnace work', 'Fire rescue', 'Glass manufacturing', 'Welding operations'],
    color: '亮银色',
    material: '铝箔复合隔热材料',
  },
  {
    id: '3218',
    name: '连体防化防护服',
    nameEn: 'Full-Body Chemical Protection Suit',
    category: 'protective-suits',
    categoryEn: 'Protective Suits',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3218%E6%AD%A3%E9%9D%A2.jpg&nonce=8c5d49cb-4c5e-4fe6-88b1-22f7427d83a0&project_id=7620626575964323874&sign=eb94a303ad43394c3a8a8ac54c835b6508008b7fa4e7d2d636eb54f04d77c1da',
      side: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3218%E4%BE%A7%E9%9D%A2.jpg&nonce=91db0c9a-8dde-470a-857c-5ab515525d60&project_id=7620626575964323874&sign=7a4250ee788076d9867651db016feaea1fd647d59b3f74e9c6bd033192d832c9',
    },
    description: '明黄色连体防化防护服，专为酸碱等腐蚀性化学品作业设计。具备优异的防腐蚀性能，能有效防护化学品喷溅，同时具备防水功能。',
    descriptionEn: 'Bright yellow full-body chemical protection suit, designed for corrosive chemical operations. Excellent corrosion resistance, effectively protects against chemical splashes while providing waterproof protection.',
    features: [
      '明黄色高可视设计',
      '腰部调节腰带',
      '集成黑色防护手套',
      '一体式防护靴',
      '开放式防护帽',
    ],
    featuresEn: [
      'High-visibility yellow design',
      'Adjustable waist belt',
      'Integrated black protective gloves',
      'One-piece protective boots',
      'Open-face protective hood',
    ],
    specifications: {
      '材质': 'PVC防化材料',
      '颜色': '明黄色',
      '尺码': 'S/M/L/XL/XXL',
      '防护等级': 'Type 3/4/5/6',
    },
    applications: ['化工酸碱处理', '危险品运输', '化学品泄漏应急', '实验室作业'],
    applicationsEn: ['Chemical acid/alkali handling', 'Hazardous material transport', 'Chemical spill response', 'Laboratory work'],
    color: '明黄色',
    material: 'PVC防化材料',
  },
  {
    id: '5061',
    name: '背带式防护工装裤',
    nameEn: 'Overall Protective Work Pants',
    category: 'workwear',
    categoryEn: 'Workwear Series',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F5061%E6%AD%A3%E9%9D%A2.jpg&nonce=adeff28c-ead6-4a98-ad44-93343ab56b11&project_id=7620626575964323874&sign=01d1407864a54e839992b0e40be138e0b96967268c75e6818307dd567778f420',
      side: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F5061%E4%BE%A7%E9%9D%A2.jpg&nonce=f69b6abf-4e1a-4c82-91be-c22f142f09ca&project_id=7620626575964323874&sign=8279e7f5dafabb74629d448cc0158b0f474ef7ca076bdb5de0d8ec8f82504e35',
    },
    description: '背带式长裤设计，采用束脚款式，便于活动。适合户外重型作业、机械维修、建筑施工等场景，能够防护腿部免受剐蹭、灰尘、轻度冲击伤害。',
    descriptionEn: 'Overall style pants with adjustable shoulder straps and cuffed design. Suitable for heavy outdoor work, mechanical maintenance, and construction. Protects legs from scratches, dust, and minor impacts.',
    features: [
      '可调节背带',
      '束脚设计',
      '耐磨材质',
      '多口袋设计',
      '宽松版型',
    ],
    featuresEn: [
      'Adjustable shoulder straps',
      'Cuffed design',
      'Wear-resistant material',
      'Multiple pockets',
      'Loose fit for mobility',
    ],
    specifications: {
      '材质': '耐磨橡胶复合材料',
      '颜色': '黑色',
      '尺码': 'S/M/L/XL/XXL',
      '特性': '防水/耐磨',
    },
    applications: ['机械维修', '建筑施工', '户外重型作业', '设备维护'],
    applicationsEn: ['Mechanical maintenance', 'Construction', 'Heavy outdoor work', 'Equipment maintenance'],
    color: '黑色',
    material: '耐磨橡胶复合材料',
  },
  {
    id: '6016',
    name: '分体式围裙袖套套装',
    nameEn: 'Split Apron & Sleeve Set',
    category: 'workwear',
    categoryEn: 'Workwear Series',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F6016%E6%AD%A3%E9%9D%A2.jpg&nonce=c4fa5e0c-61b5-4dea-8f05-f8048adc2688&project_id=7620626575964323874&sign=5326b0d175418182cb6bc957e423f91716d9e7d481aef3b606cdb3772bc99ef2',
      side: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F6016%E4%BE%A7%E9%9D%A2.jpg&nonce=01a6f28f-2c93-4a71-87d3-72a856a4a449&project_id=7620626575964323874&sign=fcbba653458fc574d3730138dacfcb2cc882e47c5432036e2b4956a89bc2eb60',
    },
    description: '挂脖式长款围裙搭配独立挂肩式防护袖套，围裙长度覆盖到大腿下部。适合餐饮后厨、屠宰加工、机械油污清理等场景，方便穿脱，不限制上半身动作。',
    descriptionEn: 'Neck-hanging long apron paired with separate shoulder-hanging protective sleeves. Apron length covers to lower thigh. Suitable for kitchen, slaughterhouse, and mechanical oil cleaning. Easy to put on and take off.',
    features: [
      '挂脖式围裙',
      '独立袖套设计',
      '长款保护',
      '防水防油',
      '易于穿脱',
    ],
    featuresEn: [
      'Neck-hanging apron',
      'Separate sleeve design',
      'Long-length protection',
      'Water and oil resistant',
      'Easy to wear and remove',
    ],
    specifications: {
      '材质': '橡胶/PVC',
      '颜色': '黑色',
      '围裙长度': '约90cm',
      '袖套长度': '长袖',
    },
    applications: ['餐饮后厨', '屠宰加工', '机械维修', '油污清理'],
    applicationsEn: ['Commercial kitchen', 'Slaughterhouse', 'Mechanical maintenance', 'Oil cleaning'],
    color: '黑色',
    material: '橡胶/PVC',
  },
  // 雨衣系列
  {
    id: '1-1',
    name: '分体式连帽雨衣套装',
    nameEn: 'Two-Piece Hooded Rain Suit',
    category: 'rainwear',
    categoryEn: 'Rainwear Series',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F1-1%E9%A6%96%E5%9B%BE.jpg&nonce=1e11b54b-8950-4dba-b5c5-d87af845c404&project_id=7620626575964323874&sign=2cca2e314202ccb544f3703df61eff8040a07fb31902bfc83bc45d4b572ab83a',
      side: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F1-1%E4%BE%A7%E9%9D%A2.jpg&nonce=ff2e659e-5ac7-4530-b6b6-f6d0bd3799eb&project_id=7620626575964323874&sign=891e8af53fb8cdea9412f67d43e0c5be682e0ab5f6cb6cc363be1dde00e711b2',
      additional: ['https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F1-1%E6%AD%A3%E9%9D%A2.jpg&nonce=82409235-dfcc-4186-b8eb-282b2fdd27f4&project_id=7620626575964323874&sign=6cc2a1b95c27a29735f9afcc4a731fea31a0699763f1842a129f85b5c6a46fed'],
    },
    description: '分体式连帽雨衣套装，上衣带立领连帽设计，胸前有反光条，两侧有贴袋。长裤为直筒束脚款式。适合户外作业人员和日常雨天出行。',
    descriptionEn: 'Two-piece hooded rain suit with stand collar. Jacket features reflective strip on chest and side pockets. Pants have straight-leg cuffed design. Suitable for outdoor workers and daily rainy day use.',
    features: [
      '连帽立领设计',
      '胸前反光条',
      '两侧贴袋',
      '束脚长裤',
      '按扣开合',
    ],
    featuresEn: [
      'Hood with stand collar',
      'Chest reflective strip',
      'Side patch pockets',
      'Cuffed pants',
      'Snap button closure',
    ],
    specifications: {
      '材质': 'PVC防水面料',
      '颜色': '浅灰蓝色',
      '尺码': 'S/M/L/XL/XXL',
      '套装': '上衣+长裤',
    },
    applications: ['路政作业', '救援工作', '户外施工', '日常出行'],
    applicationsEn: ['Road maintenance', 'Rescue work', 'Outdoor construction', 'Daily commuting'],
    color: '浅灰蓝色',
    material: 'PVC防水面料',
  },
  {
    id: '1-6',
    name: '分体式防寒雨衣套装',
    nameEn: 'Two-Piece Cold-Weather Rain Suit',
    category: 'rainwear',
    categoryEn: 'Rainwear Series',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F1-6%E9%98%B2%E5%AF%92%E6%9C%8D%E6%AD%A3%E9%9D%A2.jpg&nonce=1e481a72-1d6b-4e53-ab31-940329681411&project_id=7620626575964323874&sign=e12f6d0878dee36b23e339c1ae64656cdae1b2c081e72c5bef38a3b03fa5e116',
      side: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F1-6%E9%98%B2%E5%AF%92%E6%9C%8D%E4%BE%A7%E9%9D%A2.jpg&nonce=529ed43e-3f66-4c0e-a443-e01d275449b5&project_id=7620626575964323874&sign=cad90c4fcc71d2709d2ff02dc60082b873ea52c0c607bb0fbd8f404daa40848c',
    },
    description: '分体式立领雨衣套装，纯黑色设计，胸前有银白色反光条。适合户外作业、安保、物流运输等岗位，低调配色适合日常雨天通勤使用。',
    descriptionEn: 'Two-piece stand-collar rain suit in pure black with silver reflective strip on chest. Suitable for outdoor work, security, and logistics. Low-key color design also suitable for daily commuting.',
    features: [
      '立领设计',
      '银白反光条',
      '带盖贴袋',
      '束脚长裤',
      '按扣开合',
    ],
    featuresEn: [
      'Stand collar design',
      'Silver reflective strip',
      'Flap pockets',
      'Cuffed pants',
      'Snap button closure',
    ],
    specifications: {
      '材质': 'PVC防水面料',
      '颜色': '纯黑色',
      '尺码': 'S/M/L/XL/XXL',
      '套装': '上衣+长裤',
    },
    applications: ['安保作业', '物流运输', '户外工作', '日常通勤'],
    applicationsEn: ['Security work', 'Logistics', 'Outdoor work', 'Daily commuting'],
    color: '纯黑色',
    material: 'PVC防水面料',
  },
  {
    id: '1-23',
    name: '长款连体连帽雨衣',
    nameEn: 'Long One-Piece Hooded Raincoat',
    category: 'rainwear',
    categoryEn: 'Rainwear Series',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F1-23%E6%AD%A3%E9%9D%A2.jpg&nonce=fd120e86-3fc7-457d-8a8e-fe5c6c61f2a5&project_id=7620626575964323874&sign=856e5353b380fd4d35095fd820b14aa960e7d52f1109385419e6d5abce53b826',
    },
    description: '长款连体连帽雨衣，衣身长度到小腿位置，提供更大面积的防雨保护。简约版型适合日常雨天出行和户外短途作业。',
    descriptionEn: 'Long one-piece hooded raincoat with length to calf area. Provides extensive rain protection. Simple design suitable for daily rainy day travel and short outdoor work.',
    features: [
      '长款设计',
      '连帽款式',
      '隐藏式开合',
      '直筒袖口',
      '简约版型',
    ],
    featuresEn: [
      'Long-length design',
      'Hooded style',
      'Hidden closure',
      'Straight sleeves',
      'Simple design',
    ],
    specifications: {
      '材质': 'PVC防水面料',
      '颜色': '灰绿色',
      '尺码': 'S/M/L/XL/XXL',
      '长度': '约120cm',
    },
    applications: ['日常出行', '户外短途作业', '雨天通勤', '钓鱼户外'],
    applicationsEn: ['Daily travel', 'Short outdoor work', 'Rainy commuting', 'Fishing and outdoor'],
    color: '灰绿色',
    material: 'PVC防水面料',
  },
  {
    id: '2-3',
    name: '分体式反光雨衣套装',
    nameEn: 'Two-Piece Reflective Rain Suit',
    category: 'rainwear',
    categoryEn: 'Rainwear Series',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F2-3%E6%AD%A3%E9%9D%A2.jpg&nonce=a1d08cf2-11a3-4831-917b-f8a9b591f8d7&project_id=7620626575964323874&sign=f4f12d1afa441b0abab63bc55161c264eda67952091c0e41806bd41d98415af3',
      side: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F2-3%E4%BE%A7%E9%9D%A2.jpg&nonce=2500249e-bedb-4a3c-8ef9-1346aeec5711&project_id=7620626575964323874&sign=9b9e33c32ea00694233e4a897677d40fc49b4a1b836c102b6dacb9331012c406',
      additional: [
        'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F2-3a.jpeg&nonce=8f8e5b98-a23c-4094-93a0-79e39338f0cf&project_id=7620626575964323874&sign=bcd1ce0f236b74771a8d8836f268de6aedf033163b8e96078d22b7aecad7bac2',
        'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F2-3a1.jpeg&nonce=f725961f-8879-44c6-828a-e0c0fe44fbd4&project_id=7620626575964323874&sign=f2b122476ea59d0b4704a8273a7e71c550e1955cf2a4f8d9f7485f9d4137b43d',
      ],
    },
    description: '军绿色分体式雨衣套装，上衣带有横向反光条，提升阴雨低能见度环境下的安全性。适合户外工作者和户外探险爱好者在雨天使用。',
    descriptionEn: 'Army green two-piece rain suit with horizontal reflective strip on jacket. Enhances safety in low-visibility rainy conditions. Suitable for outdoor workers and adventure enthusiasts.',
    features: [
      '横向反光条',
      '束口袖口',
      '宽松版型',
      '束脚长裤',
      '防水耐磨',
    ],
    featuresEn: [
      'Horizontal reflective strip',
      'Cuffed sleeves',
      'Loose fit',
      'Cuffed pants',
      'Waterproof and durable',
    ],
    specifications: {
      '材质': 'PVC防水面料',
      '颜色': '军绿色',
      '尺码': 'S/M/L/XL/XXL',
      '套装': '上衣+长裤',
    },
    applications: ['路政作业', '物流运输', '户外运维', '户外探险'],
    applicationsEn: ['Road maintenance', 'Logistics', 'Outdoor maintenance', 'Outdoor adventure'],
    color: '军绿色',
    material: 'PVC防水面料',
  },
  {
    id: '2-41',
    name: '分体式拉链雨衣套装',
    nameEn: 'Two-Piece Zipper Rain Suit',
    category: 'rainwear',
    categoryEn: 'Rainwear Series',
    images: {
      main: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F2-41.jpeg&nonce=59e56256-0858-4d88-8656-64235b9b90a5&project_id=7620626575964323874&sign=c621e7496c575e7b730a6da05570d395ab58dd9ce9420f26670ec6ba59c45e78',
    },
    description: '军绿色分体式雨衣套装，上衣采用拉链+按扣的双重闭合设计，防水更严密。短款宽松版型，适合户外作业和雨天出行。',
    descriptionEn: 'Army green two-piece rain suit with dual zipper + snap button closure for enhanced waterproofing. Short loose-fit jacket design. Suitable for outdoor work and rainy day travel.',
    features: [
      '拉链+按扣双重闭合',
      '短款上衣',
      '宽松版型',
      '束脚长裤',
      '防水严密',
    ],
    featuresEn: [
      'Dual zipper + snap closure',
      'Short jacket',
      'Loose fit',
      'Cuffed pants',
      'Enhanced waterproofing',
    ],
    specifications: {
      '材质': 'PVC防水面料',
      '颜色': '军绿色',
      '尺码': 'S/M/L/XL/XXL',
      '套装': '上衣+长裤',
    },
    applications: ['户外作业', '雨天出行', '设备维护', '农业作业'],
    applicationsEn: ['Outdoor work', 'Rainy day travel', 'Equipment maintenance', 'Agricultural work'],
    color: '军绿色',
    material: 'PVC防水面料',
  },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
