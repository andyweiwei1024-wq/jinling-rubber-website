// 上海金铃橡胶制品有限公司 - 文章数据

export interface Article {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  author: string;
  authorEn: string;
  category: string;
  categoryEn: string;
  tags: string[];
  tagsEn: string[];
  coverImage: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  metaTitle?: string;
  metaTitleEn?: string;
  metaDescription?: string;
  metaDescriptionEn?: string;
}

export interface Comment {
  id: string;
  articleId: string;
  name: string; // Commenter's name
  email: string;
  content: string;
  createdAt: string;
  approved: boolean;
  replyTo?: string;
}

export const articleCategories = [
  { id: 'industry-news', name: '行业动态', nameEn: 'Industry News' },
  { id: 'product-guide', name: '产品指南', nameEn: 'Product Guide' },
  { id: 'safety-knowledge', name: '安全知识', nameEn: 'Safety Knowledge' },
  { id: 'company-news', name: '公司新闻', nameEn: 'Company News' },
];

// 示例文章数据
export const articles: Article[] = [
  {
    id: '1',
    slug: 'how-to-choose-acid-resistant-workwear',
    title: '如何选择防酸工作服：完整选购指南',
    titleEn: 'How to Choose Acid-Resistant Workwear: A Complete Guide',
    excerpt: '本文详细介绍防酸工作服的选购要点，包括材质选择、防护等级、适用场景等关键因素，帮助您选择最适合的防护装备。',
    excerptEn: 'This article introduces the key points for selecting acid-resistant workwear, including material selection, protection levels, and applicable scenarios.',
    content: `
## 为什么需要防酸工作服？

在化工、电镀、实验室等行业，工作人员经常接触到各种酸碱化学品。这些化学品一旦溅到皮肤上，可能造成严重的灼伤。因此，选择合适的防酸工作服至关重要。

## 防酸工作服的分类

根据国家标准，防酸工作服分为以下几个等级：

1. **一级防护**：适用于高浓度酸液喷溅环境
2. **二级防护**：适用于中等浓度酸液喷溅环境
3. **三级防护**：适用于低浓度酸液喷溅环境

## 材质选择

### 氯丁胶涂层
氯丁胶是一种优秀的防酸材料，具有以下特点：
- 耐酸碱性能优异
- 耐老化性能好
- 柔软舒适

### PVC涂层
PVC涂层工作服具有：
- 价格实惠
- 防水性能好
- 易于清洁

### 丁基胶涂层
丁基胶是高端防化材料：
- 防护性能最强
- 可防多种化学品
- 适合高危环境

## 选购建议

1. **确定防护等级**：根据工作环境中酸碱浓度选择对应等级
2. **选择合适款式**：连体式提供全面防护，分体式便于穿脱
3. **注意认证标识**：确保产品通过国家相关认证
4. **考虑舒适度**：长时间作业需要透气舒适的工作服

## 上海金铃橡胶制品有限公司推荐产品

我们提供多款防酸工作服，包括：
- 3015型双胶防酸分式工作服
- 3019型双胶防酸长式工作服
- 3088型耐酸分式工作服

欢迎联系我们获取详细产品信息和报价。
    `,
    contentEn: `
## Why Acid-Resistant Workwear is Essential

In industries such as chemical processing, electroplating, and laboratories, workers are frequently exposed to various acidic and alkaline chemicals. These chemicals can cause severe burns if they come into contact with skin. Therefore, choosing the right acid-resistant workwear is crucial.

## Classification of Acid-Resistant Workwear

According to national standards, acid-resistant workwear is classified into the following levels:

1. **Level 1 Protection**: For environments with high-concentration acid splashes
2. **Level 2 Protection**: For environments with medium-concentration acid splashes
3. **Level 3 Protection**: For environments with low-concentration acid splashes

## Material Selection

### Neoprene Coating
Neoprene is an excellent acid-resistant material with the following characteristics:
- Excellent acid and alkali resistance
- Good aging resistance
- Soft and comfortable

### PVC Coating
PVC coated workwear features:
- Affordable pricing
- Good waterproof performance
- Easy to clean

### Butyl Rubber Coating
Butyl rubber is a premium chemical protection material:
- Strongest protection performance
- Resistant to multiple chemicals
- Suitable for high-risk environments

## Purchasing Recommendations

1. **Determine protection level**: Choose the appropriate level based on acid/alkali concentration in your work environment
2. **Select appropriate style**: One-piece suits provide full protection, two-piece suits are easier to wear
3. **Check certification marks**: Ensure products meet national certifications
4. **Consider comfort**: Long-term operations require breathable and comfortable workwear

## Shanghai Jinling Rubber Products Co., Ltd. Recommended Products

We offer multiple acid-resistant workwear options, including:
- Model 3015 Double-coated acid-resistant two-piece suit
- Model 3019 Double-coated acid-resistant long suit
- Model 3088 Acid-resistant two-piece suit

Contact us for detailed product information and quotations.
    `,
    author: '金铃技术团队',
    authorEn: 'Jinling Technical Team',
    category: 'product-guide',
    categoryEn: 'Product Guide',
    tags: ['防酸工作服', '选购指南', '防护装备', '化工安全'],
    tagsEn: ['Acid-resistant workwear', 'Buying guide', 'Protective equipment', 'Chemical safety'],
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    featured: true,
    metaTitle: '如何选择防酸工作服 - 完整选购指南 | 上海金铃橡胶',
    metaTitleEn: 'How to Choose Acid-Resistant Workwear | Shanghai Jinling Rubber',
    metaDescription: '详细介绍防酸工作服的选购要点，包括材质选择、防护等级、适用场景等，帮助您选择最适合的防护装备。',
    metaDescriptionEn: 'Complete guide for choosing acid-resistant workwear, including material selection, protection levels, and application scenarios.',
  },
  {
    id: '2',
    slug: 'gas-protection-suit-maintenance-guide',
    title: '防毒衣的日常维护与保养指南',
    titleEn: 'Daily Maintenance and Care Guide for Gas Protection Suits',
    excerpt: '正确的维护保养可以延长防毒衣的使用寿命，确保防护效果。本文介绍防毒衣的清洁、存储和检查方法。',
    excerptEn: 'Proper maintenance can extend the service life of gas protection suits and ensure protection effectiveness. This article covers cleaning, storage, and inspection methods.',
    content: `
## 防毒衣维护的重要性

防毒衣是保护工作人员免受有毒气体和蒸汽伤害的重要装备。正确的维护保养不仅能延长使用寿命，更能确保关键时刻的防护效果。

## 清洁方法

### 日常清洁
1. 使用后用温水和中性洗涤剂清洗表面
2. 避免使用强酸强碱清洁剂
3. 用清水彻底冲洗干净
4. 在通风阴凉处自然晾干

### 深度清洁
对于严重污染的防毒衣，建议：
- 使用专用清洁剂
- 由专业人员处理
- 必要时送回厂家清洁

## 存储要求

### 存储环境
- 温度：5°C - 35°C
- 湿度：相对湿度不超过70%
- 避免阳光直射
- 远离热源和化学品

### 存储方式
- 悬挂存放，避免折叠
- 保持通风干燥
- 远离尖锐物品
- 定期检查状态

## 定期检查

### 检查频率
- 日常检查：每次使用前
- 月度检查：每月一次
- 年度检查：每年一次或按厂家要求

### 检查内容
1. 外观检查：有无破损、老化、变形
2. 密封检查：拉链、接缝是否完好
3. 功能检查：手套、靴子连接是否紧密
4. 标识检查：认证标识是否清晰

## 使用寿命

防毒衣的使用寿命受以下因素影响：
- 使用频率
- 存储条件
- 接触化学品类型
- 维护保养情况

建议按照厂家推荐的使用期限更换，即使外观完好。

## 上海金铃橡胶制品有限公司服务

我们提供：
- 专业维护指导
- 定期检查服务
- 配件更换服务
- 技术支持

如有任何问题，欢迎联系我们。
    `,
    contentEn: `
## Importance of Gas Protection Suit Maintenance

Gas protection suits are critical equipment that protect workers from toxic gases and vapors. Proper maintenance not only extends service life but also ensures protection when it matters most.

## Cleaning Methods

### Daily Cleaning
1. Clean the surface with warm water and neutral detergent after use
2. Avoid using strong acid or alkali cleaners
3. Rinse thoroughly with clean water
4. Air dry in a ventilated, cool place

### Deep Cleaning
For heavily contaminated suits, it is recommended to:
- Use specialized cleaners
- Have professionals handle it
- Send back to manufacturer if necessary

## Storage Requirements

### Storage Environment
- Temperature: 5°C - 35°C
- Humidity: Relative humidity not exceeding 70%
- Avoid direct sunlight
- Keep away from heat sources and chemicals

### Storage Method
- Hang for storage, avoid folding
- Maintain ventilation and dryness
- Keep away from sharp objects
- Regularly check condition

## Regular Inspection

### Inspection Frequency
- Daily inspection: Before each use
- Monthly inspection: Once a month
- Annual inspection: Once a year or as required by manufacturer

### Inspection Content
1. Visual inspection: Check for damage, aging, deformation
2. Seal inspection: Check zippers, seams for integrity
3. Function inspection: Check gloves, boots connections
4. Label inspection: Check if certification marks are clear

## Service Life

The service life of gas protection suits is affected by:
- Frequency of use
- Storage conditions
- Types of chemicals contacted
- Maintenance condition

It is recommended to replace according to manufacturer's recommended service life, even if appearance is good.

## Shanghai Jinling Rubber Products Co., Ltd. Services

We provide:
- Professional maintenance guidance
- Regular inspection services
- Parts replacement services
- Technical support

Contact us if you have any questions.
    `,
    author: '金铃技术团队',
    authorEn: 'Jinling Technical Team',
    category: 'safety-knowledge',
    categoryEn: 'Safety Knowledge',
    tags: ['防毒衣', '维护保养', '安全知识', '防护装备'],
    tagsEn: ['Gas protection suit', 'Maintenance', 'Safety knowledge', 'Protective equipment'],
    coverImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    featured: true,
    metaTitle: '防毒衣维护保养指南 | 上海金铃橡胶',
    metaTitleEn: 'Gas Protection Suit Maintenance Guide | Shanghai Jinling Rubber',
    metaDescription: '详细介绍防毒衣的清洁、存储和检查方法，帮助您延长装备使用寿命。',
    metaDescriptionEn: 'Detailed introduction to cleaning, storage, and inspection methods for gas protection suits.',
  },
  {
    id: '3',
    slug: 'chemical-industry-safety-standards-2024',
    title: '2024年化工行业劳动防护用品最新标准解读',
    titleEn: '2024 Chemical Industry Labor Protection Equipment Standards Interpretation',
    excerpt: '解读最新的化工行业劳动防护用品国家标准，了解合规要求，确保企业安全生产。',
    excerptEn: 'Interpretation of the latest national standards for labor protection equipment in the chemical industry.',
    content: `
## 概述

化工行业是高风险行业，劳动防护用品的标准化管理直接关系到员工的生命安全。本文解读2024年最新的国家标准和行业规范。

## 主要标准更新

### 防护服标准
- **GB 24539-2021** 防护服装 化学防护服
- 新增了对新型化学品防护的要求
- 更新了测试方法和合格判定标准

### 防毒面具标准
- **GB 2626-2019** 呼吸防护 自吸过滤式防颗粒物呼吸器
- 提高了过滤效率要求
- 增加了舒适性测试项目

### 防护手套标准
- **GB 10213-2006** 一次性使用医用橡胶检查手套
- **GB 7543-2006** 橡胶医用手套
- 新增了防化学品渗透测试

## 企业合规要求

### 基本要求
1. 选择符合国家标准的产品
2. 建立防护用品管理制度
3. 定期培训员工正确使用
4. 建立发放和更换记录

### 选购要求
1. 查看产品认证标识
2. 核对检测报告
3. 选择正规渠道采购
4. 注意产品有效期

## 上海金铃橡胶制品有限公司合规产品

我们的产品严格遵循国家标准：

- ✅ ISO 9001质量管理体系认证
- ✅ 特种劳动防护用品安全标志
- ✅ 全国劳保行业推荐品牌
- ✅ 国家安全生产许可证

## 总结

合规使用劳动防护用品不仅是法律要求，更是企业社会责任的体现。选择合格产品，保护员工安全。

如需了解更多信息或获取产品认证文件，请联系我们。
    `,
    contentEn: `
## Overview

The chemical industry is a high-risk sector. Standardized management of labor protection equipment is directly related to employee safety. This article interprets the latest national standards and industry regulations for 2024.

## Major Standard Updates

### Protective Clothing Standards
- **GB 24539-2021** Protective clothing - Chemical protective clothing
- Added requirements for protection against new chemicals
- Updated testing methods and qualification criteria

### Respirator Standards
- **GB 2626-2019** Respiratory protection - Non-powered air-purifying particle respirator
- Increased filtration efficiency requirements
- Added comfort testing items

### Protective Glove Standards
- **GB 10213-2006** Single-use medical rubber examination gloves
- **GB 7543-2006** Rubber surgical gloves
- Added chemical permeation testing

## Corporate Compliance Requirements

### Basic Requirements
1. Select products that meet national standards
2. Establish protective equipment management system
3. Regularly train employees on proper use
4. Maintain distribution and replacement records

### Purchasing Requirements
1. Check product certification marks
2. Verify test reports
3. Purchase through legitimate channels
4. Note product expiration dates

## Shanghai Jinling Rubber Products Co., Ltd. Compliant Products

Our products strictly follow national standards:

- ✅ ISO 9001 Quality Management System Certification
- ✅ Special Labor Protection Equipment Safety Mark
- ✅ National Labor Protection Industry Recommended Brand
- ✅ National Safety Production License

## Summary

Compliant use of labor protection equipment is not only a legal requirement but also a reflection of corporate social responsibility. Choose qualified products to protect employee safety.

Contact us for more information or to obtain product certification documents.
    `,
    author: '金铃技术团队',
    authorEn: 'Jinling Technical Team',
    category: 'industry-news',
    categoryEn: 'Industry News',
    tags: ['化工标准', '劳动防护', '国家标准', '企业合规'],
    tagsEn: ['Chemical standards', 'Labor protection', 'National standards', 'Corporate compliance'],
    coverImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800',
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    featured: false,
    metaTitle: '2024化工行业防护用品标准解读 | 上海金铃橡胶',
    metaTitleEn: '2024 Chemical Industry Protection Standards | Shanghai Jinling Rubber',
    metaDescription: '解读最新化工行业劳动防护用品国家标准，帮助企业合规选购。',
    metaDescriptionEn: 'Interpretation of latest national standards for chemical industry labor protection equipment.',
  },
];

// 获取文章的评论（模拟数据）
export const comments: Comment[] = [
  {
    id: '1',
    articleId: '1',
    name: '张工程师',
    email: 'zhang@example.com',
    content: '非常实用的选购指南！我们化工厂正在采购防酸工作服，这篇文章帮了大忙。',
    createdAt: '2024-01-16T10:30:00Z',
    approved: true,
  },
  {
    id: '2',
    articleId: '1',
    name: '李安全员',
    email: 'li@example.com',
    content: '请问氯丁胶和PVC涂层哪种更适合长时间作业？',
    createdAt: '2024-01-17T14:20:00Z',
    approved: true,
  },
];

// 辅助函数：根据语言获取文章字段
export function getArticleField(article: Article, field: keyof Article, lang: string): string {
  if (lang === 'zh' || lang === 'zh-CN') {
    return String(article[field]);
  }
  const enField = `${String(field)}En` as keyof Article;
  return String(article[enField] || article[field]);
}
