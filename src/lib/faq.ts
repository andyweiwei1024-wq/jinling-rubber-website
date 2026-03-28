// FAQ 数据 - 上海金铃橡胶制品有限公司

export interface FAQItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: string;
  categoryEn: string;
}

export const faqCategories = [
  { id: 'products', name: '产品相关', nameEn: 'Products' },
  { id: 'ordering', name: '订单相关', nameEn: 'Ordering' },
  { id: 'shipping', name: '物流相关', nameEn: 'Shipping' },
  { id: 'customization', name: '定制服务', nameEn: 'Customization' },
  { id: 'after-sales', name: '售后服务', nameEn: 'After-Sales' },
];

export const faqItems: FAQItem[] = [
  // 产品相关问题
  {
    id: 'choose-protective-suit',
    question: '如何选择合适的防护服？',
    questionEn: 'How to choose the right protective suit?',
    answer: `选择防护服需要考虑以下因素：

1. **作业环境风险等级**
   - 高风险环境（剧毒化学品）：选择丁基胶材质的全封闭防化服
   - 中等风险环境（一般化学品）：选择氯丁胶材质的防酸工作服
   - 低风险环境（轻度防护）：PVC材质即可满足需求

2. **接触的化学品类型**
   - 酸碱类：氯丁胶或PVC材质
   - 有机溶剂：丁基胶材质
   - 有毒气体：全封闭防毒衣

3. **作业时长和环境温度**
   - 长时间作业：选择透气性好的分体式设计
   - 高温环境：选择隔热款或透气款

4. **法规标准要求**
   - 国内市场：符合GB国家标准
   - 出口市场：符合EN或NFPA标准

建议联系我们的技术团队，提供您的具体作业环境信息，我们可以为您推荐最合适的产品。`,
    answerEn: `Consider the following factors when choosing protective suits:

1. **Risk Level of Work Environment**
   - High risk (toxic chemicals): Butyl rubber fully enclosed suits
   - Medium risk (general chemicals): Neoprene acid-resistant suits
   - Low risk (light protection): PVC material is sufficient

2. **Type of Chemicals Contacted**
   - Acids/alkalis: Neoprene or PVC
   - Organic solvents: Butyl rubber
   - Toxic gases: Fully enclosed gas protection suits

3. **Work Duration and Temperature**
   - Long duration: Two-piece design for better ventilation
   - High temperature: Heat-insulated or breathable models

4. **Regulatory Standards**
   - Domestic market: GB national standards
   - Export market: EN or NFPA standards

We recommend contacting our technical team with your specific work environment details for the most suitable product recommendation.`,
    category: 'products',
    categoryEn: 'Products',
  },
  {
    id: 'material-difference',
    question: '氯丁胶、PVC和丁基胶有什么区别？',
    questionEn: 'What is the difference between Neoprene, PVC, and Butyl rubber?',
    answer: `三种材质各有特点：

**氯丁胶（Neoprene）**
- 优点：耐化学性好、柔韧舒适、耐老化
- 缺点：对某些有机溶剂抵抗有限
- 适用：化工生产、实验室、电镀行业
- 价格：中等

**PVC（聚氯乙烯）**
- 优点：价格实惠、防水性好、易于清洁
- 缺点：耐化学性较弱、低温易变硬
- 适用：水产养殖、食品加工、轻度化学品作业
- 价格：最低

**丁基胶（Butyl Rubber）**
- 优点：防护最强、气密性好、耐辐射
- 缺点：价格较高、重量较重
- 适用：化学危险品处理、应急救援、高危化学品作业
- 价格：最高

上海金铃提供多种材质的防护服，可根据您的实际需求选择最合适的材质。`,
    answerEn: `Each material has its own characteristics:

**Neoprene**
- Pros: Good chemical resistance, flexible, durable
- Cons: Limited resistance to some organic solvents
- Applications: Chemical production, laboratories, electroplating
- Price: Medium

**PVC (Polyvinyl Chloride)**
- Pros: Affordable, waterproof, easy to clean
- Cons: Weaker chemical resistance, becomes hard in cold
- Applications: Aquaculture, food processing, light chemical work
- Price: Lowest

**Butyl Rubber**
- Pros: Strongest protection, excellent air tightness, radiation resistant
- Cons: Higher price, heavier weight
- Applications: Hazardous chemical handling, emergency rescue, high-risk operations
- Price: Highest

Shanghai Jinling offers protective suits in various materials to meet your specific needs.`,
    category: 'products',
    categoryEn: 'Products',
  },
  {
    id: 'anti-static-importance',
    question: '为什么石化行业必须使用抗静电工作服？',
    questionEn: 'Why must petrochemical industry use anti-static workwear?',
    answer: `静电是石化行业的隐形杀手：

**危害风险：**
- 石化环境存在大量易燃易爆气体和液体
- 静电放电可能引发火灾甚至爆炸
- 据统计，约10%的石化事故与静电有关

**法规要求：**
- 《安全生产法》要求企业提供合格防护用品
- GB 12014《防静电服》强制标准
- 行业安全规范明确要求

**抗静电工作服原理：**
- 导电纤维将电荷导出
- 防静电涂层减少电荷积累
- 接地设计安全释放电荷

上海金铃的抗静电工作服符合国家标准，已通过ISO 9001认证，广泛应用于石油开采、化工生产、油气储运等行业。`,
    answerEn: `Static electricity is an invisible hazard in petrochemical industry:

**Risk Hazards:**
- Petrochemical environments contain flammable gases and liquids
- Static discharge can cause fires or explosions
- Statistics show ~10% of petrochemical accidents are static-related

**Regulatory Requirements:**
- Work Safety Law requires qualified protective equipment
- GB 12014 Anti-static Clothing mandatory standard
- Industry safety regulations explicitly require it

**How Anti-static Workwear Works:**
- Conductive fibers discharge static electricity
- Anti-static coating reduces charge accumulation
- Grounding design safely releases charges

Shanghai Jinling's anti-static workwear meets national standards and is ISO 9001 certified, widely used in oil extraction, chemical production, and oil/gas storage.`,
    category: 'products',
    categoryEn: 'Products',
  },
  {
    id: 'gas-suit-lifespan',
    question: '防毒衣的使用寿命是多久？',
    questionEn: 'What is the service life of gas protection suits?',
    answer: `防毒衣的使用寿命受多种因素影响：

**一般建议：**
- 常规使用：2-3年
- 高频使用或恶劣环境：1-2年
- 未使用但存放超过5年：建议检测后使用

**影响寿命的因素：**
1. 使用频率
2. 存储条件（温度、湿度、光照）
3. 接触化学品类型和浓度
4. 维护保养情况
5. 物理损伤程度

**定期检查要求：**
- 每次使用前：外观检查
- 每月：密封性检查
- 每年：专业检测

**更换标准：**
- 超过使用期限
- 损坏无法修复
- 防护性能下降
- 检测不合格

上海金铃提供定期检查服务和维护指导，确保您的防护装备始终处于最佳状态。`,
    answerEn: `Service life depends on various factors:

**General Recommendations:**
- Regular use: 2-3 years
- Frequent use or harsh conditions: 1-2 years
- Unused but stored over 5 years: test before use

**Factors Affecting Lifespan:**
1. Frequency of use
2. Storage conditions (temperature, humidity, light)
3. Type and concentration of chemicals contacted
4. Maintenance condition
5. Physical damage

**Regular Inspection Requirements:**
- Before each use: Visual inspection
- Monthly: Seal inspection
- Annually: Professional testing

**Replacement Criteria:**
- Exceeded service life
- Damaged beyond repair
- Degraded protection performance
- Failed testing

Shanghai Jinling provides regular inspection services and maintenance guidance to ensure your protective equipment is always in optimal condition.`,
    category: 'products',
    categoryEn: 'Products',
  },

  // 订单相关问题
  {
    id: 'moq',
    question: '最小起订量是多少？',
    questionEn: 'What is the minimum order quantity (MOQ)?',
    answer: `我们的起订量灵活：

**标准产品：**
- 防护服系列：10件起订
- 雨衣系列：20件起订
- 工装系列：10件起订

**定制产品：**
- 需根据具体定制要求协商
- 一般为50件起订

**样品订单：**
- 提供1-3件样品供质量检验
- 样品费用可在正式订单中抵扣

我们支持小批量试单，欢迎新客户咨询洽谈。`,
    answerEn: `Our MOQ is flexible:

**Standard Products:**
- Protective suits: 10 pieces minimum
- Rainwear: 20 pieces minimum
- Workwear: 10 pieces minimum

**Customized Products:**
- Depends on specific customization requirements
- Generally 50 pieces minimum

**Sample Orders:**
- 1-3 samples available for quality inspection
- Sample cost can be deducted from formal orders

We support small trial orders and welcome new customers to inquire.`,
    category: 'ordering',
    categoryEn: 'Ordering',
  },
  {
    id: 'lead-time',
    question: '交货期需要多长时间？',
    questionEn: 'What is the lead time?',
    answer: `交货期根据订单情况而定：

**现货产品：**
- 付款后3-5个工作日发货

**标准产品生产：**
- 小批量（50件以内）：7-10天
- 中批量（50-200件）：15-20天
- 大批量（200件以上）：协商确定

**定制产品：**
- 根据定制复杂度，一般20-30天
- 特殊定制需另行协商

**国际运输时间：**
- 空运：5-7天
- 海运：20-40天（根据目的地）

我们拥有完善的生产线，可根据客户需求加急生产。`,
    answerEn: `Lead time depends on order situation:

**Stock Products:**
- Shipped within 3-5 working days after payment

**Standard Production:**
- Small batch (<50 pcs): 7-10 days
- Medium batch (50-200 pcs): 15-20 days
- Large batch (>200 pcs): To be negotiated

**Customized Products:**
- Generally 20-30 days depending on complexity
- Special customization to be negotiated separately

**International Shipping:**
- Air freight: 5-7 days
- Sea freight: 20-40 days (depending on destination)

We have complete production lines and can expedite production based on customer needs.`,
    category: 'ordering',
    categoryEn: 'Ordering',
  },
  {
    id: 'payment-methods',
    question: '接受哪些付款方式？',
    questionEn: 'What payment methods do you accept?',
    answer: `我们接受多种付款方式：

**国际贸易：**
- T/T（电汇）：30%定金，发货前付清尾款
- L/C（信用证）：大额订单可接受
- PayPal：适用于小额订单和样品费

**国内贸易：**
- 银行转账
- 支付宝/微信支付

**付款条款：**
- 新客户：一般要求30%定金
- 老客户：可根据合作情况协商更灵活的付款方式

具体付款方式可在合同中协商确定。`,
    answerEn: `We accept multiple payment methods:

**International Trade:**
- T/T (Wire Transfer): 30% deposit, balance before shipment
- L/C (Letter of Credit): Acceptable for large orders
- PayPal: For small orders and sample fees

**Domestic Trade:**
- Bank transfer
- Alipay/WeChat Pay

**Payment Terms:**
- New customers: Generally 30% deposit required
- Regular customers: More flexible terms negotiable

Specific payment methods can be negotiated in the contract.`,
    category: 'ordering',
    categoryEn: 'Ordering',
  },

  // 物流相关问题
  {
    id: 'shipping-options',
    question: '提供哪些物流方式？',
    questionEn: 'What shipping options are available?',
    answer: `我们提供多种物流方式：

**国际运输：**
- 海运（FCL/LCL）：经济实惠，适合大批量
- 空运：快速，适合紧急订单
- 快递（DHL/FEDEX/UPS）：适合小批量样品

**国内运输：**
- 物流公司配送
- 快递配送
- 自提

**贸易术语：**
- 支持FOB、CIF、DDP等多种贸易方式
- 可根据客户需求安排物流

**包装方式：**
- 标准纸箱包装
- 木架/木箱包装（可选）
- 符合国际运输标准`,
    answerEn: `We offer multiple shipping options:

**International Shipping:**
- Sea freight (FCL/LCL): Cost-effective for large quantities
- Air freight: Fast, for urgent orders
- Express (DHL/FEDEX/UPS): For small batches/samples

**Domestic Shipping:**
- Logistics company delivery
- Express delivery
- Self pickup

**Trade Terms:**
- Support FOB, CIF, DDP, etc.
- Logistics arranged according to customer needs

**Packaging:**
- Standard carton packaging
- Wooden crate/case packaging (optional)
- Compliant with international shipping standards`,
    category: 'shipping',
    categoryEn: 'Shipping',
  },
  {
    id: 'export-countries',
    question: '产品出口到哪些国家？',
    questionEn: 'Which countries do you export to?',
    answer: `我们的产品已出口全球50+国家和地区：

**亚洲：**
日本、韩国、新加坡、马来西亚、泰国、印度尼西亚、菲律宾、越南、印度、巴基斯坦、沙特阿拉伯、阿联酋等

**欧洲：**
德国、英国、法国、意大利、西班牙、荷兰、比利时、波兰、俄罗斯等

**美洲：**
美国、加拿大、巴西、墨西哥、阿根廷、智利等

**非洲：**
南非、埃及、尼日利亚、肯尼亚等

**大洋洲：**
澳大利亚、新西兰

我们熟悉各国的进口法规和认证要求，可协助客户完成相关手续。`,
    answerEn: `Our products are exported to 50+ countries worldwide:

**Asia:**
Japan, South Korea, Singapore, Malaysia, Thailand, Indonesia, Philippines, Vietnam, India, Pakistan, Saudi Arabia, UAE, etc.

**Europe:**
Germany, UK, France, Italy, Spain, Netherlands, Belgium, Poland, Russia, etc.

**Americas:**
USA, Canada, Brazil, Mexico, Argentina, Chile, etc.

**Africa:**
South Africa, Egypt, Nigeria, Kenya, etc.

**Oceania:**
Australia, New Zealand

We are familiar with import regulations and certification requirements of various countries and can assist customers with relevant procedures.`,
    category: 'shipping',
    categoryEn: 'Shipping',
  },

  // 定制服务问题
  {
    id: 'customization-service',
    question: '可以定制产品吗？',
    questionEn: 'Can products be customized?',
    answer: `是的，我们提供全面的定制服务：

**定制内容：**
- 尺寸定制：根据客户需求调整尺寸
- 颜色定制：支持多种颜色选择
- Logo定制：印制或刺绣客户Logo
- 功能定制：增加特殊功能（如抗静电、隔热等）
- 包装定制：定制包装方式和标签

**定制流程：**
1. 提供定制需求说明
2. 确认设计方案和报价
3. 制作样品确认
4. 签订合同生产
5. 质检发货

**定制要求：**
- 一般定制产品50件起订
- 复杂定制需根据具体情况协商

我们拥有专业的研发团队，可满足各种特殊需求。`,
    answerEn: `Yes, we provide comprehensive customization services:

**Customization Options:**
- Size: Adjusted to customer requirements
- Color: Multiple color options available
- Logo: Printing or embroidery of customer logos
- Function: Special features (anti-static, heat insulation, etc.)
- Packaging: Custom packaging and labeling

**Customization Process:**
1. Provide customization requirements
2. Confirm design and quotation
3. Sample production for approval
4. Contract signing and production
5. Quality inspection and shipment

**Customization Requirements:**
- Generally 50 pieces minimum for customized products
- Complex customization to be negotiated case by case

We have a professional R&D team to meet various special requirements.`,
    category: 'customization',
    categoryEn: 'Customization',
  },
  {
    id: 'odm-oem-service',
    question: '支持OEM/ODM服务吗？',
    questionEn: 'Do you support OEM/ODM services?',
    answer: `是的，我们提供OEM和ODM服务：

**OEM服务（代工生产）：**
- 按客户提供的样品或图纸生产
- 使用客户品牌和包装
- 严格保密客户设计

**ODM服务（设计+生产）：**
- 根据客户需求设计产品
- 提供多种设计方案选择
- 专业团队支持产品开发

**服务优势：**
- 20+年行业经验
- ISO 9001认证工厂
- 完善的质量控制体系
- 快速打样能力
- 灵活的生产规模

**合作流程：**
1. 需求沟通
2. 方案确认
3. 样品制作
4. 合同签订
5. 批量生产
6. 售后支持

欢迎各类企业洽谈合作！`,
    answerEn: `Yes, we provide OEM and ODM services:

**OEM Service (Contract Manufacturing):**
- Production according to customer samples or drawings
- Use customer brand and packaging
- Strict confidentiality of customer designs

**ODM Service (Design + Production):**
- Product design based on customer requirements
- Multiple design options available
- Professional team for product development

**Service Advantages:**
- 20+ years industry experience
- ISO 9001 certified factory
- Complete quality control system
- Fast sampling capability
- Flexible production scale

**Cooperation Process:**
1. Requirement discussion
2. Solution confirmation
3. Sample production
4. Contract signing
5. Mass production
6. After-sales support

Welcome all enterprises to discuss cooperation!`,
    category: 'customization',
    categoryEn: 'Customization',
  },

  // 售后服务问题
  {
    id: 'quality-guarantee',
    question: '产品质量有问题怎么办？',
    questionEn: 'What if there are quality problems?',
    answer: `我们提供完善的售后保障：

**质量保证：**
- 所有产品出厂前经过严格质检
- 符合国家标准和认证要求
- 提供产品合格证和检测报告

**售后政策：**
- 收货后7天内：发现质量问题可退换
- 质量问题产生的退换货运费由我方承担
- 提供技术支持和解决方案

**处理流程：**
1. 发现问题后及时联系我们
2. 提供问题照片或视频
3. 我们核实后给出解决方案
4. 退换货或维修处理

**质量承诺：**
- 真材实料，不偷工减料
- 工艺精良，经久耐用
- 服务至上，客户满意

如有任何问题，请联系我们的售后团队。`,
    answerEn: `We provide comprehensive after-sales support:

**Quality Assurance:**
- All products undergo strict quality inspection before shipment
- Comply with national standards and certification requirements
- Product certificates and test reports provided

**After-Sales Policy:**
- Within 7 days of receipt: Return/exchange for quality issues
- Shipping costs for returns due to quality issues borne by us
- Technical support and solutions provided

**Handling Process:**
1. Contact us promptly after discovering issues
2. Provide photos or videos of the problem
3. We verify and provide solutions
4. Return/exchange or repair processing

**Quality Commitment:**
- Genuine materials, no shortcuts
- Excellent craftsmanship, durable
- Service first, customer satisfaction

For any issues, please contact our after-sales team.`,
    category: 'after-sales',
    categoryEn: 'After-Sales',
  },
  {
    id: 'technical-support',
    question: '提供技术支持吗？',
    questionEn: 'Do you provide technical support?',
    answer: `是的，我们提供全面的技术支持：

**技术咨询服务：**
- 产品选型指导
- 使用培训
- 维护保养指导
- 安全规范咨询

**现场服务：**
- 技术人员现场培训（大客户）
- 产品使用演示
- 问题诊断和解决

**文档支持：**
- 产品使用说明书
- 维护保养手册
- 安全操作指南
- 认证文件

**响应时间：**
- 电话/邮件咨询：24小时内回复
- 紧急技术问题：即时响应

我们的技术团队拥有丰富的行业经验，随时为您服务。`,
    answerEn: `Yes, we provide comprehensive technical support:

**Technical Consulting:**
- Product selection guidance
- Usage training
- Maintenance guidance
- Safety regulation consultation

**On-Site Services:**
- On-site training by technicians (for key accounts)
- Product usage demonstration
- Problem diagnosis and resolution

**Documentation Support:**
- Product user manuals
- Maintenance guides
- Safety operation guidelines
- Certification documents

**Response Time:**
- Phone/email inquiries: Response within 24 hours
- Urgent technical issues: Immediate response

Our technical team has rich industry experience and is always at your service.`,
    category: 'after-sales',
    categoryEn: 'After-Sales',
  },
];

// 获取FAQ的结构化数据（用于SEO）
export function getFAQSchema(items: FAQItem[], lang: string = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: lang === 'zh' ? item.question : item.questionEn,
      acceptedAnswer: {
        '@type': 'Answer',
        text: lang === 'zh' ? item.answer : item.answerEn,
      },
    })),
  };
}
