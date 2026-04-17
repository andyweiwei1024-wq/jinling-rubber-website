// 产品数据 - 上海金铃橡胶制品有限公司

export interface ProductImage {
  main: string;
  side: string;
  additional?: string[];
}

// 产品分类
export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  nameAr?: string;
  nameDe?: string;
  nameEs?: string;
  description: string;
  descriptionEn: string;
  descriptionAr?: string;
  descriptionDe?: string;
  descriptionEs?: string;
  icon: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'protective-suits',
    name: '防护服系列',
    nameEn: 'Protective Suits',
    nameAr: 'بدلات الحماية',
    nameDe: 'Schutzanzüge',
    nameEs: 'Trajes de Protección',
    description: '专业防护服，包括防化服、防毒衣等，为化工、实验室等行业提供安全保障。',
    descriptionEn: 'Professional protective suits including chemical suits and gas protection suits for chemical and laboratory industries.',
    descriptionAr: 'بدلات حماية احترافية تشمل بدلات الحماية الكيميائية وبدلات الحماية من الغازات للصناعات الكيميائية والمختبرات.',
    descriptionDe: 'Professionelle Schutzanzüge einschließlich Chemikalienschutzanzügen und Gasschutzanzügen für die chemische und Laborindustrie.',
    descriptionEs: 'Trajes de protección profesionales que incluyen trajes de protección química y contra gases para industrias químicas y de laboratorio.',
    icon: 'shield',
  },
  {
    id: 'workwear',
    name: '工装系列',
    nameEn: 'Workwear Series',
    nameAr: 'ملابس العمل',
    nameDe: 'Arbeitskleidung',
    nameEs: 'Ropa de Trabajo',
    description: '功能型工装，包括下水裤、防水服、反光工作服等，适合各种工业作业环境。',
    descriptionEn: 'Functional workwear including waders, waterproof suits, and reflective work clothes for various industrial environments.',
    descriptionAr: 'ملابس عمل وظيفية تشمل بنطلونات الغطس وبدلات مقاومة للماء وبدلات العمل العاكسة لمختلف البيئات الصناعية.',
    descriptionDe: 'Funktionelle Arbeitskleidung einschließlich Wasserhosen, wasserdichter Anzüge und reflektierender Arbeitskleidung für verschiedene Industrieumgebungen.',
    descriptionEs: 'Ropa de trabajo funcional que incluye saloppes, trajes impermeables y ropa de trabajo reflectante para diversos entornos industriales.',
    icon: 'hard-hat',
  },
  {
    id: 'rainwear',
    name: '雨衣系列',
    nameEn: 'Rainwear Series',
    nameAr: 'ملابس المطر',
    nameDe: 'Regenkleidung',
    nameEs: 'Ropa de Lluvia',
    description: '防水雨衣，包括分体式、连体式、连帽式等多种款式，适合户外作业和日常防雨。',
    descriptionEn: 'Waterproof rainwear including two-piece, one-piece, and hooded styles for outdoor work and daily rain protection.',
    descriptionAr: 'ملابس مطر مقاومة للماء تشمل تصاميم من قطعتين وقطعة واحدة ومع غطاء رأس للعمل في الهواء الطلق والحماية اليومية من المطر.',
    descriptionDe: 'Wasserdichte Regenkleidung einschließlich zweiteiliger, einteiliger und kapuzenmodelle für Außenarbeiten und täglichen Regenschutz.',
    descriptionEs: 'Ropa de lluvia impermeable que incluye diseños de dos piezas, una pieza y con capucha para trabajo al aire libre y protección diaria contra la lluvia.',
    icon: 'umbrella',
  },
];

export interface Product {
  id: string;
  sku: string;
  name: string;
  nameEn: string;
  nameAr?: string;
  nameDe?: string;
  nameEs?: string;
  category: string;
  categoryEn: string;
  categoryAr?: string;
  categoryDe?: string;
  categoryEs?: string;
  images: ProductImage;
  description: string;
  descriptionEn: string;
  descriptionAr?: string;
  descriptionDe?: string;
  descriptionEs?: string;
  specifications: Record<string, string>;
  specificationsEn: Record<string, string>;
  features: string[];
  featuresEn: string[];
  featuresAr?: string[];
  featuresDe?: string[];
  featuresEs?: string[];
  applications: string[];
  applicationsEn: string[];
  applicationsAr?: string[];
  applicationsDe?: string[];
  applicationsEs?: string[];
  certifications: string[];
  certificationsEn: string[];
  moq: number;
  leadTime: string;
  priceRange: string;
  priceRangeEn: string;
}

// 上传到对象存储的产品图片永久链接
const PRODUCT_IMAGES = {
  protective_1: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_62580392-23a6-4e26-b26c-4239cd627c57_5ad0d49f.jpeg?sign=1807862030-12bb427ef7-0-4af8323a2c13214a4cbfdba8556553787f8ed7a65a4f42168f540f0e318247d7',
  protective_2: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_7516a96d-fa79-486c-9a13-ef495bbb0499_67f6bf08.jpeg?sign=1807862030-996541d007-0-52dda5eb48a4165fd78132d6793d369ba5480795b960652dc59072edec48bf2d',
  protective_3: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_f59f2e32-6efe-4514-a00e-445a16a214b3_2e0575a4.jpeg?sign=1807862031-5c26009b75-0-0a1f6dfdd162fa7199b251925b15e08a76760dd198713f993aaf9e5fd26ada78',
  protective_4: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_3ed59d70-ab67-4304-b2ca-9f1918bb5d0e_fdb07bb8.jpeg?sign=1807862031-f1628719d3-0-0cc5d0be621c922ac6990a5be794d29e6be2b63365cd8a69f54a3da846f47c06',
  rainwear_1: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_9b6d0339-cfdd-4f58-8ac1-23ab2ac7dd89_18932189.jpeg?sign=1807862032-d8644ae43c-0-9989d33e6962c3060290a8c10f0d4a75bc516bf3e8d14e6a2f82724846a19601',
  rainwear_2: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_6f37d298-7d6f-4cfa-aab2-3fbd7e13f2bf_b4226961.jpeg?sign=1807862032-da112c1a72-0-a8a04dde8f0543b7d2c214fc8df5d327679effe2f9eb1f5d4a651afce37deb04',
  rainwear_3: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_970a9386-91ec-4f93-adca-98a3a09db53e_a7730320.jpeg?sign=1807862032-358833983d-0-db5667ba52ffecfb59680a3f2ddaa6d465186c6ccc6cd4f19b0164833a837eaf',
  rainwear_4: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_79f43d39-0f8c-497c-b092-f18ac1548d3d_767100c7.jpeg?sign=1807862033-9cc31254a7-0-258b9b8054b09ceabe8b3e06b35b00743b4acc6a319961515c863c72527e2f93',
  workwear_1: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_e7498ced-5b5c-440c-8b6a-0d9f6417bcfa_cdec34a4.jpeg?sign=1807862033-c95cef625e-0-e4f44cedc2a814f6be8082a1ac59bc3fdcb09020016700725d418008f4f91e5d',
  workwear_2: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_1f0a6129-eb40-44e4-b1a6-d90b55548383_8d5dbc96.jpeg?sign=1807862034-81a7cff30f-0-028cd757e0729cf9406cacf9b58cc6cd4fb0cca033e2994127ccad795184203e',
  workwear_3: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_959de39f-1f9c-4302-a93c-7e7af8392b47_88efe656.jpeg?sign=1807862034-9f77aca42b-0-22d57bf4aca33cec8c1e9c62805849b84b532dc00ac139ea196a777e7240db58',
  workwear_4: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/generate_image_a9cb4d65-f827-4ed3-ae84-4be46ef91c36_61cc276a.jpeg?sign=1807862034-3e0993f2c6-0-79feb6a3dc60f58676f4c17bb2c3913fe52744c99496dc7f98902353ee4c0e45',
};

// 用户上传的真实产品图片
const USER_UPLOAD_IMAGES = {
  // JL-1-1 抗静电工作套装
  '1-1-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/1-1-main_5f72903a.jpg?sign=1776414056-ff8e173bf0-0-0af69f83c3cf5b541e2846ed81a395610f8b8115139006d17b3a652f7df2e86c',
  '1-1-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/1-1-side_bc4120ca.jpg?sign=1776414056-8eb4031831-0-18950364187334b41f163c9f4330bd6ab8975a58b50fd822108b39070b03c6b4',
  // JL-1-6 矿井防水棉衣
  '1-6-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/1-6-main_c4bca4c0.jpg?sign=1776414056-89d80107a4-0-95b90bfe6bb65c1c715f116f45025b8224fd5f423fca7210211b3b267654fd1b',
  '1-6-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/1-6-side_ca61b493.jpg?sign=1776414056-498b387031-0-f4056a928da51f6909ed299013877eeac2f84b8444e44ed1d145e9bb7f5fc106',
  // JL-1-23 单胶长雨衣
  '1-23-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/1-23-main_f9227bd8.jpg?sign=1776414057-078486c137-0-4abd2e029cc1b03a0613eb43505be87ca3fc0d68f1f673d7ddbf6651a1f452e4',
  '1-23-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/1-23-side_7d171bd0.jpg?sign=1776414057-76c9717d6d-0-5c2d340b3aff9bda8bb4f7bece09556c4c7c627d19e4e41c7e9049812eec991c',
  // JL-2-3 单胶连帽套装
  '2-3-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/2-3-main_de6499c9.jpg?sign=1776414058-8a6fa1f78c-0-9ea401f04cdd4d8a77dc90218b642ea198a872adaaf9689d6628d10876f74453',
  '2-3-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/2-3-side_449149d7.jpg?sign=1776414058-f21b2ed309-0-6edfdeeae576d56090b0db1cb25c3f84b2b533a18cf014f24010757185ae958f',
  // JL-2-41 单胶分体套装
  '2-41-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/2-41-main_bcd50134.jpeg?sign=1776414059-6076925c14-0-07b7383a3a90c8ba1103d87538fd022e71ced0a20a71ceefbf50fc4f774e8cd5',
  '2-41-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/2-41-side_b24e34fb.jpeg?sign=1776414058-0f0b186953-0-d231b6fc337b43580f08945871af771cd4e3406254390709e389ca1ee8bc782f',
  // JL-2-3a 蓝色分体式雨衣套装
  '2-3a-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/2-3a-main_80051910.jpeg?sign=1776414057-cf6db9749b-0-3633ee76504e34d3093dfd24aae9f7a2a1cbc937e2857accf70c0aa320d94c60',
  '2-3a-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/2-3a-side_68908fe0.jpeg?sign=1776414057-c54af1d0c6-0-66ca6a744435447ed873e5cdb13524981d2c4a8a5051dac509604cc6902b8a90',
  // JL-4-2 分体式连帽雨衣套装
  '4-2-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/4-2-main_cce5c61f.jpg?sign=1776414055-a7d6c0a43d-0-f5745b01dfdb8dc2b4d23b215527c9766a787486f63affdb433628e3d9d1b3a4',
  '4-2-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/4-2-side_afe1bedf.jpg?sign=1776414055-850affc8fb-0-fef4b1b15f91fde6fb20a9415adedb21886a7e5a047673fef10fe3f2342bdcd1',
  // JL-4-18 分体式连帽束脚雨衣套装 (只有侧面图)
  '4-18-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/4-18-side_b492cb76.jpeg?sign=1776414055-f5cfa9d10c-0-199cc03e04f235c8dacfd21e4b412449137059227a087eba46dad39b1ef97be0',
  // JL-4-18 正面图
  '4-18-front': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/4-18-front_e063a53e.jpeg?sign=1776414535-741eb03797-0-3204f046058a1cfdd7b35bb7125e68593be41f8c1fad740bb69bd40288302106',
  // JL-5-2 莹光绿警服
  '5-2-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/5-2-front_9d111750.jpeg?sign=1776414536-868b1106d9-0-414680096811570421ecd4fc8164a95c3445dac6406fa8b43cb7cf6d876a4079',
  '5-2-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/5-2-side_2e1f7a77.jpeg?sign=1776414536-7044a0a14c-0-9a262aa5ddd208f95b9aeb7bfee47a4eb6043fef1bc9bb7bad9c18eca8aa8e81',
  // JL-5-5 春亚纺相拼色套装
  '5-5-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/5-5-front_6aa4843f.jpeg?sign=1776414538-af90a989f1-0-f7e42288ed1221c640622a8c51373d91a4427305d56d25c9a99db4cbce9ef44c',
  '5-5-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/5-5-side_03e89ba1.jpg?sign=1776414537-4146b75f79-0-0fc9c3c880c30efb4775e6e466fd171ba220a154186c8fe4e97641869f52e71e',
  // JL-1610 涤丝纺套装
  '1610-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/1610-front_8ea87129.jpg?sign=1776414539-33946be3f4-0-1885958bf0a0ad995c73ae24fcd8e6764bbb2536300b6a06c095d954b4de4282',
  '1610-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/1610-side_315fdfc1.jpg?sign=1778981220-27e45d1501-0-88aea4974d62ffbf7c5c0692d8b0753abbecf1d8f1b67cfc23733ee222183810',
  // JL-3015 双胶防酸分式工作服
  '3015-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3015-front_84b7b634.jpg?sign=1776414541-204597631d-0-69088bfe2d98279a16d64063d20fe5b8cb61a80f7c91b2c3405744f6610d3fdb',
  '3015-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3015-side_5999ab72.jpg?sign=1778981220-86c01ca62d-0-601a64cebaccbea4cc35b769b60e997c06df37ecd8740fb7215e5943db7bb034',
  // JL-3019 双胶防酸长式工作服
  '3019-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3019-front_f98b8fba.jpg?sign=1776414542-91163479e7-0-43f144c954c6223361de77d974b1ef0321c3e79886ca39be290eea9731814c6e',
  '3019-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3019-side_7202d153.jpg?sign=1778981220-0a1e3d105e-0-2dce78d9c9cf8ab458a110056aaa7c32bd7a7239c39d443b29decfc06e84cd3c',
  // JL-3088 耐酸分式工作服
  '3088-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3088-front_e722849f.jpg?sign=1776414543-8bcfef0e16-0-12bcbf9f4d18c329078c5d062b689f9a56fcce90b370c996d248889ddc14df79',
  '3088-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3088-side_b97f403a.jpg?sign=1778981220-72cf3764c1-0-8c5039eaac6b984032d62941a612e2d9d1cdebb2d091483316e292e65c02aa8e',
  // JL-3112 连式防毒衣
  '3112-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3112-front_af0599e8.jpg?sign=1776414544-d360f8ed3f-0-82eddd054daddc7f86fa34ff9a84a705f6eae11ff56479729c3b8caeccfe413c',
  '3112-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3112-side_cb4d9258.jpg?sign=1778981221-9f800fa337-0-c7dab3a4fd7c14b2773e3d441ff8f928bec782cb461789afed01b90da4514571',
  // JL-3113 连式带手套靴防毒衣
  '3113-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3113-front_31df9c36.jpg?sign=1776414545-736a152ef9-0-33e236650c785934474fdf2d710071331a00c9f5ed9a5b7f68d95f54d23c5e40',
  '3113-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3113-side_6e7ce953.jpg?sign=1778981221-8a4714b121-0-890af35115049b7bf54c9728892f6e87c0d881ced7453f83bf716c3abd593382',
  // JL-3116 全封闭连式防毒衣
  '3116-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3116/side_b00d6b9d.jpg?sign=1776476596-f90f2e19bc-0-a1c19c7a0678be17768881babd20c0b7f4d25f0bc93131b5ee8f96ae140f245d',
  '3116-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3116/main_c08a732d.jpg?sign=1776476596-f54ae6d655-0-dee2bf48bf715173e869049d7cb33f2fb4415e7d8ce84acc28cb48c3fa6abe51',
  // JL-3121 全封闭分式隔热防毒衣
  '3121-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3121/main_7ec16d76.jpg?sign=1776476596-aa47763392-0-f3048c26627ccb66fe6f41bcfdde90cc7da9320530edde2d77766e49d79179dd',
  '3121-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3121/side_d7f03fa8.jpg?sign=1776476597-9348b6c294-0-deb5b9db966adcca47cf5f81234622b0f0203c386e0e36c500f0997f1fe57661',
  // JL-3218 透气防护连体服
  '3218-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3218/main_bb055e6f.jpg?sign=1776476597-e6ddb7f822-0-86298a1c4014df34c69d46deb0fbcd82c2f900813e6435ba74939f5320f1ffbb',
  '3218-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/3218/side_98cea01b.jpg?sign=1776476597-9db92e84cc-0-4ec525ecd20bdeb4f10afce2a5e41a3a9c3f3f692d5ad46b37af4cc06239786e',
  // JL-5061 防水防滑工作靴
  '5061-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/5061/main_71591034.jpg?sign=1776476597-dbe0649176-0-d704554c33caba2cdf5bef4d19c3baa903b7156ad7f0ec8cfcc0aab3ef78fdca',
  '5061-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/5061/side_0ad0cb49.jpg?sign=1776476597-8946827102-0-48f4af55cc7b54c1a9507e3d5679783199d3c06b6f6aa9344551e4ddbce80719',
  // JL-6016 挂脖式长款围裙+独立挂肩式防护袖套
  '6016-main': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/6016/main_923de427.jpg?sign=1776476598-90eda904e1-0-83e3f9ec06fef1b6f65d6841be71ade03b7e6617db86a189faf761f05ce3b69a',
  '6016-side': 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/products/6016/side_d32f9ee2.jpg?sign=1776476598-568b13be93-0-2d9e58749100e52f623216f1f6acb0c09bd4d125665c47a63ddf1297284b0b00',
};

export const products: Product[] = [
  {
    id: '3015',
    sku: 'JL-3015',
    name: '双胶防酸分式工作服',
    nameEn: 'Double Coated Acid-Resistant Two-Piece Suit',
    nameAr: 'بدلة مقاومة للأحماض بطبقتين - تصميم منفصل',
    nameDe: 'Säurebeständiger Zweiteiliger Schutzanzug mit Doppelbeschichtung',
    nameEs: 'Traje de Dos Piezas Resistente a Ácidos de Doble Capa',
    category: '防护服系列',
    categoryEn: 'Protective Suits',
    categoryAr: 'بدلات الحماية',
    categoryDe: 'Schutzanzüge',
    categoryEs: 'Trajes de Protección',
    images: {
      main: USER_UPLOAD_IMAGES['3015-main'],
      side: USER_UPLOAD_IMAGES['3015-side'],
    },
    description: '双胶防酸分式工作服，内料采用尼龙长丝布，涂层为氯丁胶主材，具有防酸碱类化学品溶剂喷溅功能。适合化工、实验室等作业环境。',
    descriptionEn: 'Double coated acid-resistant two-piece work suit, featuring nylon filament fabric with neoprene rubber coating, providing protection against acid, alkali, and chemical solvents. Suitable for chemical, laboratory environments.',
    descriptionAr: 'بدلة عمل مقاومة للأحماض بطبقتين، بطانة من نسيج النايلون الخيوط الطويلة مع طلاء المطاط النيوبرين، توفر الحماية من الأحماض والقواعد والمذيبات الكيميائية. مناسبة للبيئات الكيميائية والمختبرات.',
    descriptionDe: 'Säurebeständiger zweiteiliger Arbeitsanzug mit Doppelbeschichtung, mit Nylonfilamentgewebe und Neoprenkautschukbeschichtung, bietet Schutz gegen Säuren, Laugen und chemische Lösungsmittel.',
    descriptionEs: 'Traje de trabajo de dos piezas resistente a ácidos de doble capa, con tela de filamento de nylon y recubrimiento de caucho de neopreno, proporciona protección contra ácidos, álcalis y solventes químicos.',
    specifications: {
      '材质': '尼龙长丝布 + 氯丁胶',
      '静水压': '≥50kPa',
      '克重': '280g/m²',
      '颜色': '黄色/蓝色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': 'Nylon Filament + Neoprene',
      'Water Resistance': '≥50kPa',
      'Weight': '280g/m²',
      'Color': 'Yellow/Blue',
      'Size': 'S-5XL',
    },
    features: ['双面涂层防护', '分体式设计便于穿脱', '耐酸碱溶剂', '耐磨耐用'],
    featuresEn: ['Double-sided coating protection', 'Two-piece design for easy wear', 'Acid and alkali resistant', 'Wear-resistant and durable'],
    applications: ['化工操作', '实验室工作', '酸碱液体处理', '印刷行业'],
    applicationsEn: ['Chemical operations', 'Laboratory work', 'Acid/alkali liquid handling', 'Printing industry'],
    certifications: ['ISO 9001', 'CE'],
    certificationsEn: ['ISO 9001', 'CE'],
    moq: 100,
    leadTime: '15-20天',
    priceRange: '¥80-150',
    priceRangeEn: '$15-25',
  },
  {
    id: '3019',
    sku: 'JL-3019',
    name: '双胶防酸长式工作服',
    nameEn: 'Double Coated Acid-Resistant Long Suit',
    nameAr: 'بدلة طويلة مقاومة للأحماض بطبقتين',
    nameDe: 'Säurebeständiger Langer Schutzanzug mit Doppelbeschichtung',
    nameEs: 'Traje Largo Resistente a Ácidos de Doble Capa',
    category: '防护服系列',
    categoryEn: 'Protective Suits',
    categoryAr: 'بدلات الحماية',
    categoryDe: 'Schutzanzüge',
    categoryEs: 'Trajes de Protección',
    images: {
      main: USER_UPLOAD_IMAGES['3019-main'],
      side: USER_UPLOAD_IMAGES['3019-side'],
    },
    description: '双胶防酸长式工作服，内料采用尼龙长丝布，涂层为氯丁胶主材，具有防酸碱类化学品溶剂喷溅功能。适合化工、实验室等作业环境。',
    descriptionEn: 'Double coated acid-resistant long work suit, featuring nylon filament fabric with neoprene rubber coating, providing comprehensive protection against acid, alkali, and chemical solvents. Ideal for chemical and laboratory settings.',
    descriptionAr: 'بدلة عمل طويلة مقاومة للأحماض بطبقتين، بتغطية شاملة من الأحماض والقواعد والمذيبات الكيميائية. مثالية للبيئات الكيميائية والمختبرات.',
    descriptionDe: 'Langer säurebeständiger Arbeitsanzug mit Doppelbeschichtung, mit umfassendem Schutz gegen Säuren, Laugen und chemische Lösungsmittel. Ideal für chemische Umgebungen und Labore.',
    descriptionEs: 'Traje de trabajo largo resistente a ácidos de doble capa, con protección integral contra ácidos, álcalis y solventes químicos. Ideal para entornos químicos y laboratorios.',
    specifications: {
      '材质': '尼龙长丝布 + 氯丁胶',
      '静水压': '≥50kPa',
      '克重': '300g/m²',
      '颜色': '黄色/蓝色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': 'Nylon Filament + Neoprene',
      'Water Resistance': '≥50kPa',
      'Weight': '300g/m²',
      'Color': 'Yellow/Blue',
      'Size': 'S-5XL',
    },
    features: ['长款全身防护', '双面涂层', '高强度耐磨', '舒适内里'],
    featuresEn: ['Long full-body protection', 'Double-sided coating', 'High-strength wear-resistant', 'Comfortable lining'],
    applications: ['化工操作', '酸洗作业', '电镀车间', '废水处理'],
    applicationsEn: ['Chemical operations', 'Acid washing', 'Electroplating', 'Wastewater treatment'],
    certifications: ['ISO 9001', 'CE'],
    certificationsEn: ['ISO 9001', 'CE'],
    moq: 100,
    leadTime: '15-20天',
    priceRange: '¥100-180',
    priceRangeEn: '$18-30',
  },
  {
    id: '3088',
    sku: 'JL-3088',
    name: '耐酸分式工作服',
    nameEn: 'Acid-Resistant Two-Piece Suit',
    nameAr: 'بدلة مقاومة للأحماض - تصميم منفصل',
    nameDe: 'Säurebeständiger Zweiteiliger Anzug',
    nameEs: 'Traje de Dos Piezas Resistente a Ácidos',
    category: '防护服系列',
    categoryEn: 'Protective Suits',
    categoryAr: 'بدلات الحماية',
    categoryDe: 'Schutzanzüge',
    categoryEs: 'Trajes de Protección',
    images: {
      main: USER_UPLOAD_IMAGES['3088-main'],
      side: USER_UPLOAD_IMAGES['3088-side'],
    },
    description: '耐酸分式工作服，内料采用全棉，涂层为以氯丁胶为主双面涂层，具有防酸碱类化学品溶剂喷溅功能。分体式设计便于穿脱。',
    descriptionEn: 'Acid-resistant two-piece work suit with all-cotton inner fabric and double-sided neoprene coating, offering protection against acid, alkali, and chemical solvents. Two-piece design allows easy wearing and removal.',
    descriptionAr: 'بدلة عمل مقاومة للأحماض ذات طبقتين مع بطانة قطنية بالكامل وطلاء نيوبرين مزدوج الجانب، توفر الحماية من الأحماض والقواعد والمذيبات الكيميائية.',
    descriptionDe: 'Säurebeständiger zweiteiliger Arbeitsanzug mit vollständiger Baumwollinnenseite und beidseitiger Neoprenbeschichtung, bietet Schutz gegen Säuren, Laugen und chemische Lösungsmittel.',
    descriptionEs: 'Traje de trabajo de dos piezas resistente a ácidos con tela interior de algodón puro y recubrimiento de neopreno de doble cara, ofrece protección contra ácidos, álcalis y solventes químicos.',
    specifications: {
      '材质': '全棉 + 氯丁胶双面涂层',
      '静水压': '≥40kPa',
      '克重': '260g/m²',
      '颜色': '黄色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': '100% Cotton + Neoprene Double Coating',
      'Water Resistance': '≥40kPa',
      'Weight': '260g/m²',
      'Color': 'Yellow',
      'Size': 'S-5XL',
    },
    features: ['全棉舒适内里', '分体便于穿脱', '经济实用', '多种规格可选'],
    featuresEn: ['100% cotton comfortable lining', 'Two-piece for easy wear', 'Economical and practical', 'Multiple sizes available'],
    applications: ['轻度酸碱作业', '食品加工', '清洁工作', '一般防护'],
    applicationsEn: ['Light acid/alkali work', 'Food processing', 'Cleaning work', 'General protection'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '10-15天',
    priceRange: '¥60-120',
    priceRangeEn: '$12-20',
  },
  {
    id: '3112',
    sku: 'JL-3112',
    name: '连式防毒衣',
    nameEn: 'Gas Protection One-Piece Suit',
    nameAr: 'بدلة حماية من الغازات - تصميم متصل',
    nameDe: 'Gasschutz Einteiliger Anzug',
    nameEs: 'Traje Monopieza de Protección contra Gases',
    category: '防护服系列',
    categoryEn: 'Protective Suits',
    categoryAr: 'بدلات الحماية',
    categoryDe: 'Schutzanzüge',
    categoryEs: 'Trajes de Protección',
    images: {
      main: USER_UPLOAD_IMAGES['3112-main'],
      side: USER_UPLOAD_IMAGES['3112-side'],
    },
    description: '连式防毒衣，内料采用全棉，涂层为丁基胶，具有防空气中尘毒功能。可定制防介子气130分钟以上版本。适合化工、危险品处理等作业环境。',
    descriptionEn: 'One-piece gas protection suit with all-cotton inner and butyl rubber coating, providing protection against airborne toxins. Customizable for 130+ minutes mustard gas protection. Suitable for chemical and hazardous material handling.',
    descriptionAr: 'بدلة حماية من الغازات قطعة واحدة مع بطانة قطنية بالكامل وطلاء مطاط بوتيل، توفر الحماية من السموم المحمولة جواً. قابلة للتخصيص للحماية من غاز الخردل 130+ دقيقة.',
    descriptionDe: 'Einteiliger Gasschutzanzug mit Baumwollinnenstoff und Butylkautschukbeschichtung, bietet Schutz gegen luftgetragene Giftstoffe. Anpassbar für 130+ Minuten Senfgasschutz.',
    descriptionEs: 'Traje de protección contra gases de una pieza con interior de algodón puro y recubrimiento de caucho butílico, proporciona protección contra toxinas transportadas por el aire. Personalizable para protección contra gas mostaza 130+ minutos.',
    specifications: {
      '材质': '全棉 + 丁基胶',
      '防护时间': '≥60分钟（标准版）',
      '克重': '350g/m²',
      '颜色': '灰色/土黄色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': '100% Cotton + Butyl Rubber',
      'Protection Time': '≥60 minutes (standard)',
      'Weight': '350g/m²',
      'Color': 'Gray/Ochre',
      'Size': 'S-5XL',
    },
    features: ['丁基胶高级防护', '连体密封设计', '可定制高防护版', '耐老化'],
    featuresEn: ['Premium butyl rubber protection', 'Sealed one-piece design', 'Customizable high-protection version', 'Aging resistant'],
    applications: ['化工生产', '危险品处理', '农药喷洒', '军事防护'],
    applicationsEn: ['Chemical production', 'Hazardous material handling', 'Pesticide spraying', 'Military protection'],
    certifications: ['ISO 9001', 'CE', 'GB'],
    certificationsEn: ['ISO 9001', 'CE', 'GB'],
    moq: 50,
    leadTime: '20-30天',
    priceRange: '¥200-400',
    priceRangeEn: '$35-65',
  },
  {
    id: '3113',
    sku: 'JL-3113',
    name: '连式带手套靴防毒衣',
    nameEn: 'Gas Protection Suit with Gloves & Boots',
    nameAr: 'بدلة حماية من الغازات مع قفازات وحذاء',
    nameDe: 'Gasschutzanzug mit Handschuhen und Stiefeln',
    nameEs: 'Traje de Protección contra Gases con Guantes y Botas',
    category: '防护服系列',
    categoryEn: 'Protective Suits',
    categoryAr: 'بدلات الحماية',
    categoryDe: 'Schutzanzüge',
    categoryEs: 'Trajes de Protección',
    images: {
      main: USER_UPLOAD_IMAGES['3113-main'],
      side: USER_UPLOAD_IMAGES['3113-side'],
    },
    description: '连式带手套靴防毒衣，内料采用全棉，涂层为丁基胶，集成防护手套和靴子，具有防空气中尘毒功能。可定制防介子气130分钟以上版本。',
    descriptionEn: 'One-piece gas protection suit with integrated gloves and boots, featuring all-cotton inner and butyl rubber coating, providing protection against airborne toxins. Customizable for 130+ minutes mustard gas protection.',
    descriptionAr: 'بدلة حماية من الغازات قطعة واحدة مع قفازات وأحذية متكاملة، مع بطانة قطنية بالكامل وطلاء مطاط بوتيل، توفر الحماية من السموم المحمولة جواً.',
    descriptionDe: 'Einteiliger Gasschutzanzug mit integrierten Handschuhen und Stiefeln, mit Baumwollinnenstoff und Butylkautschukbeschichtung, bietet Schutz gegen luftgetragene Giftstoffe.',
    descriptionEs: 'Traje de protección contra gases de una pieza con guantes y botas integrados, con interior de algodón puro y recubrimiento de caucho butílico, proporciona protección contra toxinas transportadas por el aire.',
    specifications: {
      '材质': '全棉 + 丁基胶',
      '防护时间': '≥60分钟（标准版）',
      '手套': '丁基胶防护手套',
      '靴子': '丁基胶防护靴',
      '颜色': '灰色/土黄色',
    },
    specificationsEn: {
      'Material': '100% Cotton + Butyl Rubber',
      'Protection Time': '≥60 minutes (standard)',
      'Gloves': 'Butyl rubber protective gloves',
      'Boots': 'Butyl rubber protective boots',
      'Color': 'Gray/Ochre',
    },
    features: ['全身一体化防护', '丁基胶高级防护', '密封手套靴设计', '适用高危环境'],
    featuresEn: ['Full body integrated protection', 'Premium butyl rubber protection', 'Sealed glove and boot design', 'Suitable for high-risk environments'],
    applications: ['生化防护', '重大危险源处理', '疫情处理', '核污染清理'],
    applicationsEn: ['Biological and chemical protection', 'Major hazard handling', 'Epidemic response', 'Nuclear contamination cleanup'],
    certifications: ['ISO 9001', 'CE', 'GB'],
    certificationsEn: ['ISO 9001', 'CE', 'GB'],
    moq: 30,
    leadTime: '25-35天',
    priceRange: '¥400-700',
    priceRangeEn: '$65-110',
  },
  {
    id: '3116',
    sku: 'JL-3116',
    name: '全封闭连式防毒衣',
    nameEn: 'Fully Enclosed Gas Protection Suit',
    nameAr: 'بدلة حماية من الغازات مغلقة بالكامل',
    nameDe: 'Vollständig Geschlossener Gasschutzanzug',
    nameEs: 'Traje de Protección contra Gases Totalmente Cerrado',
    category: '防护服系列',
    categoryEn: 'Protective Suits',
    categoryAr: 'بدلات الحماية',
    categoryDe: 'Schutzanzüge',
    categoryEs: 'Trajes de Protección',
    images: {
      main: PRODUCT_IMAGES.protective_2,
      side: PRODUCT_IMAGES.protective_2,
    },
    description: '全封闭连式防毒衣，内料采用涤棉，涂层为以氯丁胶为主双面涂层，采用空气接入式设计，具有防空气中尘毒功能。可定制防介子气130分钟以上版本。',
    descriptionEn: 'Fully enclosed one-piece gas protection suit with polyester-cotton inner and double-sided neoprene coating, featuring air supply interface design for respiratory protection against airborne toxins.',
    descriptionAr: 'بدلة حماية من الغازات قطعة واحدة مغلقة بالكامل مع بطانة البوليستر والقطن وطلاء النيوبرين المزدوج، مع تصميم واجهة إمداد الهواء للحماية التنفسية.',
    descriptionDe: 'Vollständig geschlossener einteiliger Gasschutzanzug mit Polyester-Baumwollinnenstoff und beidseitiger Neoprenbeschichtung, mit Luftversorgungsschnittstelle für Atemschutz.',
    descriptionEs: 'Traje de protección contra gases de una pieza completamente cerrado con interior de poliéster-algodón y recubrimiento de neopreno de doble cara, con diseño de interfaz de suministro de aire.',
    specifications: {
      '材质': '涤棉 + 氯丁胶双面涂层',
      '防护类型': '空气接入式正压防护',
      '克重': '400g/m²',
      '颜色': '土黄色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': 'Polyester-Cotton + Neoprene Double Coating',
      'Protection Type': 'Air supply positive pressure',
      'Weight': '400g/m²',
      'Color': 'Ochre',
      'Size': 'S-5XL',
    },
    features: ['正压防护系统', '空气接入接口', '全面部呼吸防护', '高密封性'],
    featuresEn: ['Positive pressure protection system', 'Air supply interface', 'Full face respiratory protection', 'High sealing performance'],
    applications: ['化学品泄漏处理', '有毒气体环境', '高温作业', '军事防护'],
    applicationsEn: ['Chemical spill response', 'Toxic gas environments', 'High-temperature operations', 'Military protection'],
    certifications: ['ISO 9001', 'CE', 'GB'],
    certificationsEn: ['ISO 9001', 'CE', 'GB'],
    moq: 30,
    leadTime: '25-35天',
    priceRange: '¥350-600',
    priceRangeEn: '$55-95',
  },
  {
    id: '3121',
    sku: 'JL-3121',
    name: '全封闭分式隔热防毒衣',
    nameEn: 'Heat-Resistant Gas Protection Two-Piece Suit',
    nameAr: 'بدلة حماية من الغازات معزولة حرارياً - تصميم منفصل',
    nameDe: 'Hitzebeständiger Gasschutz Zweiteiliger Anzug',
    nameEs: 'Traje de Protección contra Gases Resistente al Calor de Dos Piezas',
    category: '防护服系列',
    categoryEn: 'Protective Suits',
    categoryAr: 'بدلات الحماية',
    categoryDe: 'Schutzanzüge',
    categoryEs: 'Trajes de Protección',
    images: {
      main: PRODUCT_IMAGES.protective_3,
      side: PRODUCT_IMAGES.protective_3,
    },
    description: '全封闭分式隔热防毒衣，内料采用全棉，涂层为丁基胶，采用空气接入式设计，具有隔热防空气中尘毒功能。适合高温有毒环境作业。',
    descriptionEn: 'Heat-resistant fully enclosed two-piece gas protection suit with all-cotton inner and butyl rubber coating, featuring air supply interface for protection against heat and airborne toxins. Suitable for high-temperature toxic environments.',
    descriptionAr: 'بدلة حماية من الغازات المعزولة حرارياً المغلقة بالكامل ذات قطعتين مع بطانة قطنية بالكامل وطلاء مطاط بوتيل، مع تصميم واجهة إمداد الهواء للحماية من الحرارة والسموم المحمولة جواً.',
    descriptionDe: 'Hitzebeständiger, vollständig geschlossener zweiteiliger Gasschutzanzug mit Baumwollinnenstoff und Butylkautschukbeschichtung, mit Luftversorgungsschnittstelle für Schutz gegen Hitze und luftgetragene Giftstoffe.',
    descriptionEs: 'Traje de protección contra gases completamente cerrado y resistente al calor de dos piezas con interior de algodón puro y recubrimiento de caucho butílico, con diseño de interfaz de suministro de aire para protección contra calor y toxinas.',
    specifications: {
      '材质': '全棉 + 丁基胶',
      '防护类型': '隔热 + 空气接入式正压防护',
      '耐温': '可达80°C环境',
      '克重': '450g/m²',
      '颜色': '土黄色/银色',
    },
    specificationsEn: {
      'Material': '100% Cotton + Butyl Rubber',
      'Protection Type': 'Heat insulation + Air supply positive pressure',
      'Temperature Resistance': 'Up to 80°C environment',
      'Weight': '450g/m²',
      'Color': 'Ochre/Silver',
    },
    features: ['隔热防护', '高温环境适用', '正压呼吸系统', '可配合空气呼吸器使用'],
    featuresEn: ['Heat insulation protection', 'Suitable for high-temperature environments', 'Positive pressure respiratory system', 'Compatible with air respirators'],
    applications: ['高温炉前作业', '钢水处理', '玻璃制造', '焊接作业'],
    applicationsEn: ['High-temperature furnace work', 'Molten steel handling', 'Glass manufacturing', 'Welding operations'],
    certifications: ['ISO 9001', 'CE'],
    certificationsEn: ['ISO 9001', 'CE'],
    moq: 30,
    leadTime: '30-40天',
    priceRange: '¥500-850',
    priceRangeEn: '$80-135',
  },
  {
    id: '3218',
    sku: 'JL-3218',
    name: '双胶防化阻燃连式工作服带手套靴',
    nameEn: 'Flame Retardant Chemical Protective Suit with Gloves & Boots',
    nameAr: 'بدلة عمل مقاومة للمواد الكيميائية ومثبطة للهب مع قفازات وحذاء',
    nameDe: 'Flammhemmender Chemikalienschutzanzug mit Handschuhen und Stiefeln',
    nameEs: 'Traje de Protección Química Ignífugo con Guantes y Botas',
    category: '防护服系列',
    categoryEn: 'Protective Suits',
    categoryAr: 'بدلات الحماية',
    categoryDe: 'Schutzanzüge',
    categoryEs: 'Trajes de Protección',
    images: {
      main: PRODUCT_IMAGES.protective_4,
      side: PRODUCT_IMAGES.protective_4,
    },
    description: '双胶防化阻燃连式工作服带手套靴，内料采用尼龙长丝布，涂层为氯丁胶主材。防多种化学品酸类、油类和溶剂类，除手套外衣服靴阻燃，可增加抗静电功能。',
    descriptionEn: 'Flame retardant one-piece chemical protective work suit with gloves and boots, featuring nylon filament fabric with neoprene rubber coating. Protects against multiple chemicals, acids, oils, and solvents. Flame retardant (except gloves). Anti-static available.',
    descriptionAr: 'بدلة عمل قطعة واحدة مقاومة للمواد الكيميائية ومثبطة للهب مع قفازات وأحذية، مع نسيج خيوط النايلون مع طلاء المطاط النيوبرين. تحمي من المواد الكيميائية المتعددة والأحماض والزيوت والمذيبات.',
    descriptionDe: 'Flammhemmender einteiliger Chemikalienschutz-Arbeitsanzug mit Handschuhen und Stiefeln, mit Nylonfilamentgewebe und Neoprenkautschukbeschichtung. Schützt gegen mehrere Chemikalien, Säuren, Öle und Lösungsmittel.',
    descriptionEs: 'Traje de trabajo de una pieza resistente a productos químicos e ignífugo con guantes y botas, con tela de filamento de nylon y recubrimiento de caucho de neopreno. Protege contra múltiples productos químicos, ácidos, aceites y solventes.',
    specifications: {
      '材质': '尼龙长丝布 + 氯丁胶',
      '阻燃等级': '离火自熄',
      '静水压': '≥60kPa',
      '克重': '380g/m²',
      '颜色': '橘红色',
    },
    specificationsEn: {
      'Material': 'Nylon Filament + Neoprene',
      'Flame Retardant': 'Self-extinguishing',
      'Water Resistance': '≥60kPa',
      'Weight': '380g/m²',
      'Color': 'Orange-red',
    },
    features: ['阻燃防护', '防化学品', '防油防水', '集成手套靴', '可加抗静电'],
    featuresEn: ['Flame retardant protection', 'Chemical resistant', 'Oil and water resistant', 'Integrated gloves and boots', 'Anti-static available'],
    applications: ['焊接作业', '石油化工', '燃气维护', '电气作业'],
    applicationsEn: ['Welding operations', 'Petroleum and chemical', 'Gas maintenance', 'Electrical work'],
    certifications: ['ISO 9001', 'CE'],
    certificationsEn: ['ISO 9001', 'CE'],
    moq: 50,
    leadTime: '20-30天',
    priceRange: '¥300-500',
    priceRangeEn: '$48-80',
  },
  {
    id: '5061',
    sku: 'JL-5061',
    name: '双胶下水裤',
    nameEn: 'Double Coated Waders',
    nameAr: 'بنطلون الغطس بطبقتين',
    nameDe: 'Hochwertige Wasserfeste Latzhose',
    nameEs: 'Saloppes Impermeables de Doble Capa',
    category: '工装系列',
    categoryEn: 'Workwear Series',
    categoryAr: 'ملابس العمل',
    categoryDe: 'Arbeitskleidung',
    categoryEs: 'Ropa de Trabajo',
    images: {
      main: PRODUCT_IMAGES.workwear_1,
      side: PRODUCT_IMAGES.workwear_1,
    },
    description: '双胶下水裤，内料采用全棉，涂层为双面氯丁混合胶，静水压≥100kPa。适合水产养殖、河道作业、渔业捕捞等水下作业环境。',
    descriptionEn: 'Double coated waders with all-cotton inner and double-sided neoprene blend coating, water resistance ≥100kPa. Suitable for aquaculture, river operations, fishing, and underwater working environments.',
    descriptionAr: 'بنطلون الغطس بطبقتين مع بطانة قطنية بالكامل وطلاء خليط النيوبرين المزدوج الجانب، مقاومة الماء ≥100kPa. مناسبة لتربية الأحياء المائية وعمليات النهر وصيد الأسماك.',
    descriptionDe: 'Hochwertige wasserdichte Latzhose mit Baumwollinnenstoff und beidseitiger Neoprenmischbeschichtung, Wasserdruckfestigkeit ≥100kPa. Geeignet für Aquakultur, Flussarbeiten und Fischerei.',
    descriptionEs: 'Saloppes impermeables de doble capa con interior de algodón puro y recubrimiento de mezcla de neopreno de doble cara, resistencia al agua ≥100kPa. Adecuado para acuicultura, operaciones fluviales y pesca.',
    specifications: {
      '材质': '全棉 + 双面氯丁混合胶',
      '静水压': '≥100kPa',
      '克重': '400g/m²',
      '颜色': '黑色/军绿色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': '100% Cotton + Neoprene Blend',
      'Water Resistance': '≥100kPa',
      'Weight': '400g/m²',
      'Color': 'Black/Military Green',
      'Size': 'S-5XL',
    },
    features: ['高强度防水', '双面涂层', '耐磨耐用', '高腰设计'],
    featuresEn: ['High-strength waterproof', 'Double-sided coating', 'Wear-resistant', 'High-waist design'],
    applications: ['水产养殖', '河道作业', '渔业捕捞', '建筑排水'],
    applicationsEn: ['Aquaculture', 'River operations', 'Fishing', 'Construction drainage'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '15-20天',
    priceRange: '¥120-200',
    priceRangeEn: '$20-32',
  },
  {
    id: '5-2',
    sku: 'JL-5-2',
    name: '莹光绿警服',
    nameEn: 'Fluorescent Green Safety Vest',
    nameAr: 'سترة سلامة خضراء فلورية',
    nameDe: 'Fluoreszierende Grüne Sicherheitsweste',
    nameEs: 'Chaleco de Seguridad Verde Fluorescente',
    category: '工装系列',
    categoryEn: 'Workwear Series',
    categoryAr: 'ملابس العمل',
    categoryDe: 'Arbeitskleidung',
    categoryEs: 'Ropa de Trabajo',
    images: {
      main: USER_UPLOAD_IMAGES['5-2-main'],
      side: USER_UPLOAD_IMAGES['5-2-side'],
    },
    description: '莹光绿警服，面料采用240T尼龙塔丝绒表面泼水处理，涂层为环保PU，内里为针织网布。配备3M反光带，适合交警、安保等户外作业。',
    descriptionEn: 'Fluorescent green safety vest with 240T nylon taslon fabric, water-repellent finish, eco-friendly PU coating, and knitted mesh lining. Equipped with 3M reflective strips, suitable for traffic police and security outdoor work.',
    descriptionAr: 'سترة سلامة خضراء فلورية مع نسيج النايلون 240T، تشطيب طارد للماء، طلاء PU صديق للبيئة، وبطانة شبكة حية. مجهزة بشريط عاكس 3M.',
    descriptionDe: 'Fluoreszierende grüne Sicherheitsweste mit 240T Nylon-Taslongewebe, wasserabweisender Ausrüstung, umweltfreundlicher PU-Beschichtung und gestrickter Mesh-Innenfutter. Ausgestattet mit 3M-Reflexstreifen.',
    descriptionEs: 'Chaleco de seguridad verde fluorescente con tela de nilón 240T, acabado repelente al agua, recubrimiento de PU ecológico y forro de malla tejida. Equipado con tiras reflectantes 3M.',
    specifications: {
      '材质': '240T尼龙塔丝绒 + 环保PU',
      '反光条': '3M Scotchlite',
      '克重': '150g/m²',
      '颜色': '莹光绿',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': '240T Nylon Taslon + Eco PU',
      'Reflective Strips': '3M Scotchlite',
      'Weight': '150g/m²',
      'Color': 'Fluorescent Green',
      'Size': 'S-5XL',
    },
    features: ['高可见度荧光色', '3M优质反光条', '透气网布内里', '轻便舒适'],
    featuresEn: ['High-visibility fluorescent color', '3M premium reflective strips', 'Breathable mesh lining', 'Lightweight and comfortable'],
    applications: ['交通指挥', '安保巡逻', '道路施工', '夜间作业'],
    applicationsEn: ['Traffic control', 'Security patrol', 'Road construction', 'Night work'],
    certifications: ['ISO 9001', 'EN ISO 20471'],
    certificationsEn: ['ISO 9001', 'EN ISO 20471'],
    moq: 200,
    leadTime: '10-15天',
    priceRange: '¥50-90',
    priceRangeEn: '$8-15',
  },
  {
    id: '5-5',
    sku: 'JL-5-5',
    name: '春亚纺相拼色套装',
    nameEn: 'Polyester Pongee Color Block Workwear Set',
    nameAr: 'بدلة عمل بألوان متدرجة من البوليستر',
    nameDe: 'Polyester-Pongee Farbblock Arbeitskleidung Set',
    nameEs: 'Conjunto de Ropa de Trabajo de Poliéster con Bloques de Color',
    category: '工装系列',
    categoryEn: 'Workwear Series',
    categoryAr: 'ملابس العمل',
    categoryDe: 'Arbeitskleidung',
    categoryEs: 'Ropa de Trabajo',
    images: {
      main: USER_UPLOAD_IMAGES['5-5-main'],
      side: USER_UPLOAD_IMAGES['5-5-side'],
    },
    description: '春亚纺相拼色套装，面料采用240T春亚纺，涂层为环保PVC，内里为190T涤纶。时尚相拼色设计，适合户外作业。',
    descriptionEn: 'Polyester pongee color block workwear set with 240T pongee fabric, eco-friendly PVC coating, and 190T polyester lining. Stylish color block design, suitable for outdoor work.',
    descriptionAr: 'بدلة عمل بألوان متدرجة مع نسيج البوليستر 240T، طلاء PVC صديق للبيئة، وبطانة البوليستر 190T. تصميم أنيق بألوان متدرجة، مناسبة للعمل في الهواء الطلق.',
    descriptionDe: 'Polyester-Pongee Farbblock-Arbeitskleidungsset mit 240T Pongee-Stoff, umweltfreundlicher PVC-Beschichtung und 190T Polyesterfutter. Modisches Farbblockdesign, geeignet für Außenarbeiten.',
    descriptionEs: 'Conjunto de ropa de trabajo de poliéster pongee con bloques de color con tela de pongee 240T, recubrimiento de PVC ecológico y forro de poliéster 190T. Diseño elegante con bloques de color, adecuado para trabajo al aire libre.',
    specifications: {
      '材质': '240T春亚纺 + 环保PVC + 190T涤纶',
      '静水压': '≥50kPa',
      '克重': '200g/m²',
      '颜色': '多色拼色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': '240T Pongee + Eco PVC + 190T Polyester',
      'Water Resistance': '≥50kPa',
      'Weight': '200g/m²',
      'Color': 'Multi-color block',
      'Size': 'S-5XL',
    },
    features: ['时尚拼色设计', '防水透气', '多口袋设计', '性价比高'],
    featuresEn: ['Stylish color block design', 'Waterproof and breathable', 'Multi-pocket design', 'High cost-effectiveness'],
    applications: ['户外工作', '仓储物流', '轻度防护', '日常作业'],
    applicationsEn: ['Outdoor work', 'Warehouse and logistics', 'Light protection', 'Daily operations'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '10-15天',
    priceRange: '¥80-140',
    priceRangeEn: '$13-23',
  },
  {
    id: '6016',
    sku: 'JL-6016',
    name: '挂脖式长款围裙+独立挂肩式防护袖套',
    nameEn: 'Bib Apron with Independent Over-Shoulder Protective Sleeves',
    nameAr: 'مريلة طويلة مع أكمام واقية معلقة مستقلة',
    nameDe: 'Lange Schürze mit Unabhängigen Über-Schulter Schutzärmeln',
    nameEs: 'Delantal Largo con Mangas Protectores Independientes',
    category: '工装系列',
    categoryEn: 'Workwear Series',
    categoryAr: 'ملابس العمل',
    categoryDe: 'Arbeitskleidung',
    categoryEs: 'Ropa de Trabajo',
    images: {
      main: PRODUCT_IMAGES.rainwear_4,
      side: PRODUCT_IMAGES.rainwear_4,
    },
    description: '挂脖式长款围裙搭配独立挂肩式防护袖套，围裙长度覆盖到大腿下部。适合餐饮后厨、屠宰加工、机械油污清理等场景，方便穿脱，不限制上半身动作。',
    descriptionEn: 'Bib apron with independent over-shoulder protective sleeves, apron length covering to upper thigh. Suitable for kitchen, slaughter processing, and mechanical oil cleaning, easy to wear and remove without restricting upper body movement.',
    descriptionAr: 'مريلة طويلة مع أكمام واقية معلقة مستقلة، طول المريلة يغطي حتى الفخذ العلوي. مناسبة للمطبخ، معالجة الذبح، وتنظيف زيوت الماكينات.',
    descriptionDe: 'Lange Schürze mit unabhängigen Über-Schulter Schutzärmeln, Schürzenlänge bis zum oberen Oberschenkel. Geeignet für Küche, Schlachthof und Maschinenölreinigung.',
    descriptionEs: 'Delantal largo con mangas protectores independientes sobre el hombro, longitud del delantal que cubre hasta el muslo superior. Adecuado para cocina, procesamiento de matanza y limpieza de aceite de maquinaria.',
    specifications: {
      '材质': 'PVC涂层布',
      '围裙长度': '到大腿上部',
      '袖套长度': '到肘部以上',
      '克重': '180g/m²',
      '颜色': '白色/蓝色',
    },
    specificationsEn: {
      'Material': 'PVC coated fabric',
      'Apron Length': 'To upper thigh',
      'Sleeve Length': 'Above elbow',
      'Weight': '180g/m²',
      'Color': 'White/Blue',
    },
    features: ['组合套装', '分离式设计', '上半身灵活', '易穿脱'],
    featuresEn: ['Combination set', 'Separate design', 'Upper body flexibility', 'Easy to wear and remove'],
    applications: ['餐饮后厨', '屠宰加工', '机械维修', '油污清理'],
    applicationsEn: ['Kitchen', 'Slaughter processing', 'Mechanical maintenance', 'Oil cleaning'],
    certifications: ['ISO 9001', '食品级材料'],
    certificationsEn: ['ISO 9001', 'Food-grade material'],
    moq: 100,
    leadTime: '10-15天',
    priceRange: '¥40-70',
    priceRangeEn: '$7-12',
  },
  {
    id: '1-1',
    sku: 'JL-1-1',
    name: '抗静电工作套装',
    nameEn: 'Anti-Static Workwear Set',
    nameAr: 'بدلة عمل مضادة للكهرباء الساكنة',
    nameDe: 'Antistatisches Arbeitskleidungsset',
    nameEs: 'Conjunto de Ropa de Trabajo Antiestática',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['1-1-main'],
      side: USER_UPLOAD_IMAGES['1-1-side'],
      additional: [USER_UPLOAD_IMAGES['1-1-main']],
    },
    description: '抗静电工作套装，面料采用100D涤纶与进口导电丝混织表面泼水处理，涂层为环保PVC，内里为涤纶190T静电布。具有抗静电功能，适合电子、石化等对静电敏感的作业环境。',
    descriptionEn: 'Anti-static workwear set with 100D polyester and imported conductive fiber blended fabric, water-repellent finish, eco-friendly PVC coating, and 190T polyester static-free lining. Anti-static, suitable for electronics and petrochemical environments.',
    descriptionAr: 'بدلة عمل مضادة للكهرباء الساكنة مع نسيج البوليستر 100D مخلوط بألياف موصلة مستوردة، تشطيب طارد للماء، طلاء PVC صديق للبيئة، وبطانة البوليستر 190T الخالية من الكهرباء الساكنة.',
    descriptionDe: 'Antistatisches Arbeitskleidungsset mit 100D Polyester und importiertem leitfähigem Faserstoffgemisch, wasserabweisender Ausrüstung, umweltfreundlicher PVC-Beschichtung und 190T Polyester-Statikfutter.',
    descriptionEs: 'Conjunto de ropa de trabajo antiestática con tela mezclada de poliéster 100D y fibra conductora importada, acabado repelente al agua, recubrimiento de PVC ecológico y forro de poliéster 190T libre de estática.',
    specifications: {
      '材质': '100D涤纶导电丝 + 环保PVC',
      '静水压': '≥50kPa',
      '抗静电': '表面电阻≤10^8Ω',
      '克重': '220g/m²',
      '颜色': '藏蓝色',
    },
    specificationsEn: {
      'Material': '100D Polyester Conductive + Eco PVC',
      'Water Resistance': '≥50kPa',
      'Anti-static': 'Surface resistance ≤10^8Ω',
      'Weight': '220g/m²',
      'Color': 'Navy Blue',
    },
    features: ['抗静电功能', '防泼水', '舒适透气', '多口袋设计'],
    featuresEn: ['Anti-static function', 'Water-repellent', 'Comfortable and breathable', 'Multi-pocket design'],
    applications: ['电子制造', '石化行业', '易燃易爆环境', '精密仪器作业'],
    applicationsEn: ['Electronics manufacturing', 'Petrochemical industry', 'Flammable environments', 'Precision instrument work'],
    certifications: ['ISO 9001', 'GB 12014'],
    certificationsEn: ['ISO 9001', 'GB 12014'],
    moq: 100,
    leadTime: '15-20天',
    priceRange: '¥120-200',
    priceRangeEn: '$20-32',
  },
  {
    id: '1-6',
    sku: 'JL-1-6',
    name: '矿井防水棉衣',
    nameEn: 'Waterproof Insulated Mining Jacket',
    nameAr: 'سترة معزولة مضادة للماء للعمالة في المناجم',
    nameDe: 'Wasserdichte Isolierte Bergbaujacke',
    nameEs: 'Chaqueta Aislante Impermeable para Minería',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['1-6-main'],
      side: USER_UPLOAD_IMAGES['1-6-side'],
    },
    description: '矿井防水棉衣，面料采用210T春亚纺，涂层为环保PVC，内里为涤纶行缝棉，静水压≥50kPa，反光带亮度≥500(欧标)。适合矿井、隧道等潮湿寒冷作业环境。',
    descriptionEn: 'Waterproof insulated mining jacket with 210T pongee fabric, eco-friendly PVC coating, quilted polyester insulation, water resistance ≥50kPa, reflective strip brightness ≥500cd/m² (EU standard). Suitable for mines, tunnels, and wet/cold environments.',
    descriptionAr: 'سترة معزولة مضادة للماء للعمالة مع نسيج البوليستر 210T، طلاء PVC صديق للبيئة، عزل البوليستر المطرز، مقاومة الماء ≥50kPa، سطوع الشريط العاكس ≥500cd/m².',
    descriptionDe: 'Wasserdichte isolierte Bergbaujacke mit 210T Pongee-Stoff, umweltfreundlicher PVC-Beschichtung, Stepploch-Polyesterisolierung, Wasserdruckfestigkeit ≥50kPa, Reflexstreifenhelligkeit ≥500cd/m².',
    descriptionEs: 'Chaqueta aislante impermeable para minería con tela de pongee 210T, recubrimiento de PVC ecológico, aislamiento de poliéster acolchado, resistencia al agua ≥50kPa, brillo de tira reflectante ≥500cd/m².',
    specifications: {
      '材质': '210T春亚纺 + 环保PVC + 涤纶行缝棉',
      '静水压': '≥50kPa',
      '填充物': '涤纶棉 200g/m²',
      '反光带': '欧标 ≥500cd/m²',
      '颜色': '荧光黄/橙',
    },
    specificationsEn: {
      'Material': '210T Pongee + Eco PVC + Quilted Polyester',
      'Water Resistance': '≥50kPa',
      'Filling': 'Polyester wadding 200g/m²',
      'Reflective Strips': 'EU standard ≥500cd/m²',
      'Color': 'Fluorescent Yellow/Orange',
    },
    features: ['防水保暖', '欧标反光条', '适合寒冷环境', '耐磨面料'],
    featuresEn: ['Waterproof and warm', 'EU standard reflective strips', 'Suitable for cold environments', 'Wear-resistant fabric'],
    applications: ['矿井作业', '隧道施工', '冬季户外', '寒冷潮湿环境'],
    applicationsEn: ['Mining operations', 'Tunnel construction', 'Winter outdoor work', 'Cold wet environments'],
    certifications: ['ISO 9001', 'EN ISO 20471'],
    certificationsEn: ['ISO 9001', 'EN ISO 20471'],
    moq: 50,
    leadTime: '20-25天',
    priceRange: '¥180-300',
    priceRangeEn: '$28-48',
  },
  {
    id: '1-23',
    sku: 'JL-1-23',
    name: '单胶长雨衣',
    nameEn: 'Single Coated Long Raincoat',
    nameAr: 'معطف مطر طويل بطبقة واحدة',
    nameDe: 'Einzelbeschichteter Langer Regenmantel',
    nameEs: 'Impermeable Largo de Capa Única',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['1-23-main'],
      side: USER_UPLOAD_IMAGES['1-23-side'],
    },
    description: '单胶长雨衣，内料采用全棉32×6058，涂层为天然橡胶，静水压≥70kPa。长款设计提供更大面积的防雨保护，适合雨天户外作业。',
    descriptionEn: 'Single coated long raincoat with all-cotton 32×6058 inner and natural rubber coating, water resistance ≥70kPa. Long design provides greater rain protection coverage, suitable for rainy outdoor work.',
    descriptionAr: 'معطف مطر طويل بطبقة واحدة مع بطانة قطنية 32×6058 وطلاء المطاط الطبيعي، مقاومة الماء ≥70kPa. التصميم الطويل يوفر تغطية حماية من المطر أكبر.',
    descriptionDe: 'Einzelbeschichteter langer Regenmantel mit Baumwollinnenstoff 32×6058 und Naturkautschukbeschichtung, Wasserdruckfestigkeit ≥70kPa. Langes Design bietet größeren Regenschutz.',
    descriptionEs: 'Impermeable largo de capa única con interior de algodón 32×6058 y recubrimiento de caucho natural, resistencia al agua ≥70kPa. El diseño largo proporciona mayor cobertura de protección contra la lluvia.',
    specifications: {
      '材质': '全棉32×6058 + 天然橡胶',
      '静水压': '≥70kPa',
      '克重': '350g/m²',
      '颜色': '黄色/蓝色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': '100% Cotton 32×6058 + Natural Rubber',
      'Water Resistance': '≥70kPa',
      'Weight': '350g/m²',
      'Color': 'Yellow/Blue',
      'Size': 'S-5XL',
    },
    features: ['长款全面防护', '天然橡胶涂层', '高防水压', '舒适透气'],
    featuresEn: ['Long full coverage', 'Natural rubber coating', 'High water resistance', 'Comfortable and breathable'],
    applications: ['雨天户外作业', '农业劳动', '户外巡逻', '一般防雨'],
    applicationsEn: ['Rainy outdoor work', 'Agricultural labor', 'Outdoor patrol', 'General rain protection'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '15-20天',
    priceRange: '¥80-140',
    priceRangeEn: '$13-23',
  },
  {
    id: '2-3',
    sku: 'JL-2-3',
    name: '单胶连帽套装',
    nameEn: 'Single Coated Hooded Rainwear Set',
    nameAr: 'بدلة مطر مع غطاء رأس بطبقة واحدة',
    nameDe: 'Einzelbeschichtete Kapuzen-Regenkleidung',
    nameEs: 'Conjunto de Lluvia con Capucha de Capa Única',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['2-3-main'],
      side: USER_UPLOAD_IMAGES['2-3-side'],
    },
    description: '单胶连帽套装，面料采用全棉32×6058，涂层为天然橡胶，静水压≥70kPa。连帽设计提供更好的头部防护，适合雨天户外作业。',
    descriptionEn: 'Single coated hooded rainwear set with all-cotton 32×6058 fabric and natural rubber coating, water resistance ≥70kPa. Hooded design provides better head protection, suitable for rainy outdoor work.',
    descriptionAr: 'بدلة مطر مع غطاء رأس بطبقة واحدة مع نسيج قطني 32×6058 وطلاء المطاط الطبيعي، مقاومة الماء ≥70kPa. تصميم الغطاء يوفر حماية رأس أفضل.',
    descriptionDe: 'Einzelbeschichtete Kapuzen-Regenkleidung mit Baumwollstoff 32×6058 und Naturkautschukbeschichtung, Wasserdruckfestigkeit ≥70kPa. Kapuzendesign bietet besseren Kopfschutz.',
    descriptionEs: 'Conjunto de lluvia con capucha de capa única con tela de algodón 32×6058 y recubrimiento de caucho natural, resistencia al agua ≥70kPa. Diseño con capucha proporciona mejor protección para la cabeza.',
    specifications: {
      '材质': '全棉32×6058 + 天然橡胶',
      '静水压': '≥70kPa',
      '克重': '380g/m²',
      '颜色': '黄色/蓝色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': '100% Cotton 32×6058 + Natural Rubber',
      'Water Resistance': '≥70kPa',
      'Weight': '380g/m²',
      'Color': 'Yellow/Blue',
      'Size': 'S-5XL',
    },
    features: ['连帽防护', '高防水压', '上下装套装', '耐撕裂'],
    featuresEn: ['Hooded protection', 'High water resistance', 'Jacket and pants set', 'Tear-resistant'],
    applications: ['雨天户外作业', '建筑施工', '交通指挥', '农业劳动'],
    applicationsEn: ['Rainy outdoor work', 'Construction', 'Traffic control', 'Agricultural labor'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '15-20天',
    priceRange: '¥100-170',
    priceRangeEn: '$16-27',
  },
  {
    id: '2-41',
    sku: 'JL-2-41',
    name: '单胶分体套装',
    nameEn: 'Single Coated Two-Piece Rainwear Set',
    nameAr: 'بدلة مطر من قطعتين بطبقة واحدة',
    nameDe: 'Einzelbeschichtetes Zweiteiliges Regenkleidungsset',
    nameEs: 'Conjunto de Lluvia de Dos Piezas de Capa Única',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['2-41-main'],
      side: USER_UPLOAD_IMAGES['2-41-side'],
    },
    description: '单胶分体套装，采用优质防水面料制作，适合各类户外雨天作业场景。分体式设计便于穿脱，提高作业效率。',
    descriptionEn: 'Single coated two-piece rainwear set made with premium waterproof fabric, suitable for various outdoor rainy work scenarios. Two-piece design for easy wear and removal, improving work efficiency.',
    descriptionAr: 'بدلة مطر من قطعتين بطبقة واحدة مصنوعة من قماش مقاوم للماء عالي الجودة، مناسبة لمختلف سيناريوهات العمل في الهواء الطلق الممطر.',
    descriptionDe: 'Einzelbeschichtetes zweiteiliges Regenkleidungsset aus hochwertigem wasserdichtem Stoff, geeignet für verschiedene Außenarbeiten bei Regen.',
    descriptionEs: 'Conjunto de lluvia de dos piezas de capa única hecho con tela impermeable premium, adecuado para varios escenarios de trabajo al aire libre en días de lluvia.',
    specifications: {
      '材质': '优质防水面料 + 橡胶涂层',
      '静水压': '≥50kPa',
      '克重': '300g/m²',
      '颜色': '黄色/蓝色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': 'Premium waterproof fabric + Rubber coating',
      'Water Resistance': '≥50kPa',
      'Weight': '300g/m²',
      'Color': 'Yellow/Blue',
      'Size': 'S-5XL',
    },
    features: ['分体便于穿脱', '优质防水面料', '经济实用', '多种颜色可选'],
    featuresEn: ['Two-piece for easy wear', 'Premium waterproof fabric', 'Economical and practical', 'Multiple colors available'],
    applications: ['户外作业', '轻度雨天防护', '仓储物流', '日常防雨'],
    applicationsEn: ['Outdoor work', 'Light rain protection', 'Warehouse and logistics', 'Daily rain protection'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '10-15天',
    priceRange: '¥70-120',
    priceRangeEn: '$11-20',
  },
  {
    id: '1610',
    sku: 'JL-1610',
    name: '涤丝纺套装',
    nameEn: 'Polyester Satin Rainwear Set',
    nameAr: 'بدلة مطر من نسيج البوليستر',
    nameDe: 'Polyester Satin Regenkleidungsset',
    nameEs: 'Conjunto de Lluvia de Seda de Poliést',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['1610-main'],
      side: USER_UPLOAD_IMAGES['1610-side'],
    },
    description: '涤丝纺套装，面料采用190T涤纶表面泼水处理，涂层为PVC，内里为190T涤纶，静水压≥50kPa，织带反光带亮度≥300。适合户外作业和雨天出行。',
    descriptionEn: 'Polyester satin rainwear set with 190T polyester water-repellent fabric, PVC coating, 190T polyester lining, water resistance ≥50kPa, webbing reflective strip brightness ≥300. Suitable for outdoor work and rainy travel.',
    descriptionAr: 'بدلة مطر من نسيج البوليستر مع نسيج البوليستر 190T المعالج طارد للماء، طلاء PVC، بطانة البوليستر 190T، مقاومة الماء ≥50kPa.',
    descriptionDe: 'Polyester Satin Regenkleidungsset mit 190T Polyester wasserabweisendem Stoff, PVC-Beschichtung, 190T Polyesterfutter, Wasserdruckfestigkeit ≥50kPa.',
    descriptionEs: 'Conjunto de lluvia de seda de poliéster con tela de poliéster 190T repelente al agua, recubrimiento de PVC, forro de poliéster 190T, resistencia al agua ≥50kPa.',
    specifications: {
      '材质': '190T涤纶 + PVC + 190T涤纶',
      '静水压': '≥50kPa',
      '反光带': '织带式 ≥300cd/m²',
      '克重': '200g/m²',
      '颜色': '荧光黄/橙',
    },
    specificationsEn: {
      'Material': '190T Polyester + PVC + 190T Polyester',
      'Water Resistance': '≥50kPa',
      'Reflective Strips': 'Webbing type ≥300cd/m²',
      'Weight': '200g/m²',
      'Color': 'Fluorescent Yellow/Orange',
    },
    features: ['反光安全设计', '防水透气', '轻便舒适', '高性价比'],
    featuresEn: ['Reflective safety design', 'Waterproof and breathable', 'Lightweight and comfortable', 'High cost-effectiveness'],
    applications: ['户外作业', '交通指挥', '建筑施工', '雨天出行'],
    applicationsEn: ['Outdoor work', 'Traffic control', 'Construction', 'Rainy travel'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '10-15天',
    priceRange: '¥60-100',
    priceRangeEn: '$10-16',
  },
  {
    id: '2-3a',
    sku: 'JL-2-3a',
    name: '蓝色分体式雨衣套装',
    nameEn: 'Blue Two-Piece Rainwear Set',
    nameAr: 'بدلة مطر زرقاء من قطعتين',
    nameDe: 'Blaues Zweiteiliges Regenkleidungsset',
    nameEs: 'Conjunto de Lluvia Azul de Dos Piezas',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['2-3a-main'],
      side: USER_UPLOAD_IMAGES['2-3a-side'],
    },
    description: '蓝色分体式雨衣套装，上衣带有反光条设计，提升阴雨低能见度环境下的安全性。适合户外工作者和雨天出行使用。',
    descriptionEn: 'Blue two-piece rainwear set with reflective strip design on jacket, improving safety in low-visibility rainy conditions. Suitable for outdoor workers and rainy travel.',
    descriptionAr: 'بدلة مطر زرقاء من قطعتين مع تصميم شريط عاكس على السترة، تحسين السلامة في ظروف الرؤية المنخفضة.',
    descriptionDe: 'Blaues zweiteiliges Regenkleidungsset mit Reflexstreifendesign an der Jacke, verbessert die Sicherheit bei schlechter Sicht.',
    descriptionEs: 'Conjunto de lluvia azul de dos piezas con diseño de tira reflectante en la chaqueta, mejora la seguridad en condiciones de baja visibilidad.',
    specifications: {
      '材质': '防水面料 + 涂层',
      '静水压': '≥50kPa',
      '反光条': '前襟和背部反光条',
      '颜色': '蓝色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': 'Waterproof fabric + Coating',
      'Water Resistance': '≥50kPa',
      'Reflective Strips': 'Front and back reflective strips',
      'Color': 'Blue',
      'Size': 'S-5XL',
    },
    features: ['蓝色时尚设计', '反光安全条', '分体便于穿脱', '高性价比'],
    featuresEn: ['Blue stylish design', 'Reflective safety strips', 'Two-piece for easy wear', 'High cost-effectiveness'],
    applications: ['户外作业', '日常防雨', '骑行出行', '轻度防护'],
    applicationsEn: ['Outdoor work', 'Daily rain protection', 'Cycling', 'Light protection'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '10-15天',
    priceRange: '¥60-100',
    priceRangeEn: '$10-16',
  },
  {
    id: '4-2',
    sku: 'JL-4-2',
    name: '分体式连帽雨衣套装',
    nameEn: 'Two-Piece Hooded Rainwear Set',
    nameAr: 'بدلة مطر مع غطاء رأس من قطعتين',
    nameDe: 'Zweiteiliges Kapuzen-Regenkleidungsset',
    nameEs: 'Conjunto de Lluvia con Capucha de Dos Piezas',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['4-2-main'],
      side: USER_UPLOAD_IMAGES['4-2-side'],
    },
    description: '分体式连帽雨衣套装，采用优质防水面料制作，上衣带有连帽设计，提供全面的防雨保护。适合户外作业和日常雨天出行。',
    descriptionEn: 'Two-piece hooded rainwear set made with premium waterproof fabric, jacket with hooded design providing comprehensive rain protection. Suitable for outdoor work and daily rainy travel.',
    descriptionAr: 'بدلة مطر مع غطاء رأس من قطعتين مصنوعة من قماش مقاوم للماء عالي الجودة، السترة مع تصميم غطاء الرأس توفير حماية شاملة من المطر.',
    descriptionDe: 'Zweiteiliges Kapuzen-Regenkleidungsset aus hochwertigem wasserdichtem Stoff, Jacke mit Kapuze für umfassenden Regenschutz.',
    descriptionEs: 'Conjunto de lluvia con capucha de dos piezas hecho con tela impermeable premium, chaqueta con diseño de capucha que proporciona protección completa contra la lluvia.',
    specifications: {
      '材质': '优质防水面料 + 涂层',
      '静水压': '≥50kPa',
      '克重': '250g/m²',
      '颜色': '黄色/蓝色',
      '尺寸': 'S-5XL',
    },
    specificationsEn: {
      'Material': 'Premium waterproof fabric + Coating',
      'Water Resistance': '≥50kPa',
      'Weight': '250g/m²',
      'Color': 'Yellow/Blue',
      'Size': 'S-5XL',
    },
    features: ['连帽全面防护', '优质防水面料', '分体便于穿脱', '实用耐用'],
    featuresEn: ['Hooded full protection', 'Premium waterproof fabric', 'Two-piece for easy wear', 'Practical and durable'],
    applications: ['户外作业', '建筑施工', '农业劳动', '日常防雨'],
    applicationsEn: ['Outdoor work', 'Construction', 'Agricultural labor', 'Daily rain protection'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '10-15天',
    priceRange: '¥80-130',
    priceRangeEn: '$13-21',
  },
  {
    id: '4-18',
    sku: 'JL-4-18',
    name: '分体式连帽束脚雨衣套装',
    nameEn: 'Two-Piece Hooded Elastic-Cuff Rainwear Set',
    nameAr: 'بدلة مطر مع غطاء رأس وساق مطاطي من قطعتين',
    nameDe: 'Zweiteiliges Kapuzen-Regenkleidungsset mit Elastischen Bündchen',
    nameEs: 'Conjunto de Lluvia con Capucha y Puños Elásticos de Dos Piezas',
    category: '雨衣系列',
    categoryEn: 'Rainwear Series',
    categoryAr: 'ملابس المطر',
    categoryDe: 'Regenkleidung',
    categoryEs: 'Ropa de Lluvia',
    images: {
      main: USER_UPLOAD_IMAGES['4-18-front'],
      side: USER_UPLOAD_IMAGES['4-18-side'],
    },
    description: '分体式连帽雨衣套装，设计简约大方，防水性能优异。上衣配有连帽，长裤为束脚款式，适合各类户外雨天作业场景。',
    descriptionEn: 'Two-piece hooded rainwear set with simple and elegant design, excellent waterproof performance. Jacket with hood, pants with elastic cuffs, suitable for various outdoor rainy work scenarios.',
    descriptionAr: 'بدلة مطر مع غطاء رأس من قطعتين بتصميم بسيط وأنيق، أداء مقاوم للماء ممتاز. السترة مع غطاء الرأس، البنطلون بساق مطاطية.',
    descriptionDe: 'Zweiteiliges Kapuzen-Regenkleidungsset mit schlichtem und elegantem Design, ausgezeichneter Wasserdichtigkeit. Jacke mit Kapuze, Hose mit elastischen Bündchen.',
    descriptionEs: 'Conjunto de lluvia con capucha de dos piezas con diseño simple y elegante, excelente rendimiento impermeable. Chaquetacon capucha, pantalones con puños elásticos.',
    specifications: {
      '材质': '优质防水面料 + 涂层',
      '静水压': '≥50kPa',
      '裤口': '束脚设计',
      '克重': '280g/m²',
      '颜色': '多色可选',
    },
    specificationsEn: {
      'Material': 'Premium waterproof fabric + Coating',
      'Water Resistance': '≥50kPa',
      'Pants Cuffs': 'Elastic cuff design',
      'Weight': '280g/m²',
      'Color': 'Multiple colors available',
    },
    features: ['束脚防止雨水进入', '简约时尚设计', '优质防水面料', '连帽防护'],
    featuresEn: ['Elastic cuffs prevent rain entry', 'Simple stylish design', 'Premium waterproof fabric', 'Hooded protection'],
    applications: ['户外作业', '骑行运动', '建筑施工', '雨天出行'],
    applicationsEn: ['Outdoor work', 'Cycling', 'Construction', 'Rainy travel'],
    certifications: ['ISO 9001'],
    certificationsEn: ['ISO 9001'],
    moq: 100,
    leadTime: '10-15天',
    priceRange: '¥90-150',
    priceRangeEn: '$15-24',
  },
];

// 获取产品多语言名称
export function getProductField(product: Product, lang: string, field: 'name' | 'description' | 'category' | 'features' | 'applications'): string | string[] {
  const langSuffix = lang === 'zh' ? '' : lang === 'en' ? 'En' : lang === 'ar' ? 'Ar' : lang === 'de' ? 'De' : 'Es';
  const fallbackSuffix = 'En';
  
  const fieldKey = `${field}${langSuffix}` as keyof Product;
  const fallbackFieldKey = `${field}${fallbackSuffix}` as keyof Product;
  
  if (fieldKey in product) {
    const value = product[fieldKey];
    if (value !== undefined && value !== null) {
      return value as string | string[];
    }
  }
  
  return product[fallbackFieldKey] as string | string[];
}

// 获取产品规格
export function getProductSpecifications(product: Product, lang: string): Record<string, string> {
  return lang === 'zh' ? product.specifications : product.specificationsEn;
}

// 获取认证信息
export function getProductCertifications(product: Product, lang: string): string[] {
  return lang === 'zh' ? product.certifications : product.certificationsEn;
}

// 获取产品图片URL
export function getProductImages(product: Product): ProductImage {
  return product.images;
}

// 通过slug获取产品
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.id === slug);
}

// 通过ID获取产品
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

// 获取分类slug
function getCategorySlug(categoryName: string): string {
  const categoryMap: Record<string, string> = {
    '防护服系列': 'protective-suits',
    'Protective Suits': 'protective-suits',
    '工装系列': 'workwear',
    'Workwear Series': 'workwear',
    '雨衣系列': 'rainwear',
    'Rainwear Series': 'rainwear',
  };
  return categoryMap[categoryName] || categoryName.toLowerCase().replace(/\s+/g, '-');
}

// 获取产品URL
export function getProductUrl(product: Product, lang: string = 'en'): string {
  const categorySlug = getCategorySlug(product.categoryEn || product.category);
  return `/${lang}/products/${product.id}`;
}

// 通过分类获取产品
export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => 
    p.category === category || p.categoryEn === category
  );
}

// 获取所有产品slug
export function getAllProductSlugs(): string[] {
  return products.map(p => p.id);
}
