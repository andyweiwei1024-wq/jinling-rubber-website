// FAQ 数据 - 上海金铃橡胶制品有限公司

export interface FAQItem {
  id: string;
  question: string;
  questionEn: string;
  questionAr?: string;
  questionDe?: string;
  questionEs?: string;
  answer: string;
  answerEn: string;
  answerAr?: string;
  answerDe?: string;
  answerEs?: string;
  category: string;
  categoryEn: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  nameEn: string;
  nameAr?: string;
  nameDe?: string;
  nameEs?: string;
}

export const faqCategories: FAQCategory[] = [
  { id: 'products', name: '产品相关', nameEn: 'Products', nameAr: 'المنتجات', nameDe: 'Produkte', nameEs: 'Productos' },
  { id: 'ordering', name: '订单相关', nameEn: 'Ordering', nameAr: 'الطلبات', nameDe: 'Bestellung', nameEs: 'Pedidos' },
  { id: 'shipping', name: '物流相关', nameEn: 'Shipping', nameAr: 'الشحن', nameDe: 'Versand', nameEs: 'Envío' },
  { id: 'customization', name: '定制服务', nameEn: 'Customization', nameAr: 'التخصيص', nameDe: 'Anpassung', nameEs: 'Personalización' },
  { id: 'after-sales', name: '售后服务', nameEn: 'After-Sales', nameAr: 'خدمة ما بعد البيع', nameDe: 'Kundendienst', nameEs: 'Posventa' },
];

export const faqItems: FAQItem[] = [
  // 产品相关问题
  {
    id: 'choose-protective-suit',
    question: '如何选择合适的防护服？',
    questionEn: 'How to choose the right protective suit?',
    questionAr: 'كيف تختار بدلة الحماية المناسبة؟',
    questionDe: 'Wie wählt man den richtigen Schutanzug?',
    questionEs: '¿Cómo elegir el traje de protección adecuado?',
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
    answerAr: `ضع العوامل التالية في الاعتبار عند اختيار بدلات الحماية:

1. **مستوى الخطر في بيئة العمل**
   - خطر عالي (مواد كيميائية سامة): بدلات مطاط البوتيل المغلقة بالكامل
   - خطر متوسط (مواد كيميائية عامة): بدلات مقاومة للأحماض من النيوبرين
   - خطر منخفض (حماية خفيفة): مادة PVC كافية

2. **نوع المواد الكيميائية المتلامسة**
   - الأحماض/القلويات: النيوبرين أو PVC
   - المذيبات العضوية: مطاط البوتيل
   - الغازات السامة: بدلات حماية من الغازات مغلقة بالكامل

3. **مدة العمل ودرجة الحرارة**
   - مدة طويلة: تصميم قطعتين لتهوية أفضل
   - درجة حرارة عالية: نماذج معزولة أو قابلة للتنفس

4. **المعايير التنظيمية**
   - السوق المحلي: معايير GB الوطنية
   - سوق التصدير: معايير EN أو NFPA

نوصي بالاتصال بفريقنا الفني مع تفاصيل بيئة عملك المحددة للحصول على توصية المنتج الأنسب.`,
    answerDe: `Berücksichtigen Sie folgende Faktoren bei der Auswahl von Schutanzügen:

1. **Risikostufe der Arbeitsumgebung**
   - Hohes Risiko (giftige Chemikalien): Geschlossene Butylkautschuk-Anzüge
   - Mittleres Risiko (allgemeine Chemikalien): Neopren säurebeständige Anzüge
   - Niedriges Risiko (leichter Schutz): PVC-Material ausreichend

2. **Art der kontaktierten Chemikalien**
   - Säuren/Laugen: Neopren oder PVC
   - Organische Lösungsmittel: Butylkautschuk
   - Giftige Gase: Geschlossene Gasschutzanzüge

3. **Arbeitsdauer und Temperatur**
   - Lange Dauer: Zweiteiliges Design für bessere Belüftung
   - Hohe Temperatur: Wärmeisolierte oder atmungsaktive Modelle

4. **Regulatorische Standards**
   - Inlandsmarkt: GB-Nationalstandards
   - Exportmarkt: EN- oder NFPA-Standards

Wir empfehlen, unser technisches Team mit Ihren spezifischen Arbeitsumgebungsdaten zu kontaktieren.`,
    answerEs: `Considere los siguientes factores al elegir trajes de protección:

1. **Nivel de Riesgo del Ambiente de Trabajo**
   - Alto riesgo (químicos tóxicos): Trajes cerrados de caucho butílico
   - Riesgo medio (químicos generales): Trajes resistentes al ácido de neopreno
   - Bajo riesgo (protección ligera): Material PVC suficiente

2. **Tipo de Químicos Contactados**
   - Ácidos/álcalis: Neopreno o PVC
   - Solventes orgánicos: Caucho butílico
   - Gases tóxicos: Trajes de protección contra gases cerrados

3. **Duración del Trabajo y Temperatura**
   - Larga duración: Diseño de dos piezas para mejor ventilación
   - Alta temperatura: Modelos aislados o transpirables

4. **Estándares Regulatorios**
   - Mercado nacional: Estándares nacionales GB
   - Mercado de exportación: Estándares EN o NFPA

Recomendamos contactar a nuestro equipo técnico con los detalles específicos de su ambiente de trabajo.`,
    category: 'products',
    categoryEn: 'Products',
  },
  {
    id: 'material-difference',
    question: '氯丁胶、PVC和丁基胶有什么区别？',
    questionEn: 'What is the difference between Neoprene, PVC, and Butyl rubber?',
    questionAr: 'ما الفرق بين النيوبرين وPVC ومطاط البوتيل؟',
    questionDe: 'Was ist der Unterschied zwischen Neopren, PVC und Butylkautschuk?',
    questionEs: '¿Cuál es la diferencia entre Neopreno, PVC y Caucho Butílico?',
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
    answerAr: `لكل مادة خصائصه الخاصة:

**النيوبرين**
- المزايا: مقاومة كيميائية جيدة، مرن، متين
- العيوب: مقاومة محدودة لبعض المذيبات العضوية
- التطبيقات: الإنتاج الكيميائي، المختبرات، الطلاء الكهربائي
- السعر: متوسط

**PVC (بولي فينيل كلوريد)**
- المزايا: سعر معقول، مقاوم للماء، سهل التنظيف
- العيوب: مقاومة كيميائية أضعف، يتصلب في البرد
- التطبيقات: الاستزراع المائي، معالجة الأغذية، العمل الكيميائي الخفيف
- السعر: الأقل

**مطاط البوتيل**
- المزايا: أقوى حماية، إحكام ممتاز للهواء، مقاوم للإشعاع
- العيوب: سعر أعلى، وزن أثقل
- التطبيقات: التعامل مع المواد الكيميائية الخطرة، الإنقاذ الطارئ
- السعر: الأعلى`,
    answerDe: `Jedes Material hat seine eigenen Eigenschaften:

**Neopren**
- Vorteile: Gute Chemikalienbeständigkeit, flexibel, langlebig
- Nachteile: Begrenzte Beständigkeit gegen einige organische Lösungsmittel
- Anwendungen: Chemische Produktion, Laboratorien, Galvanik
- Preis: Mittel

**PVC (Polyvinylchlorid)**
- Vorteile: Erschwinglich, wasserdicht, leicht zu reinigen
- Nachteile: Schwächere Chemikalienbeständigkeit, wird im Kalten hart
- Anwendungen: Aquakultur, Lebensmittelverarbeitung, leichte Chemiearbeit
- Preis: Niedrigste

**Butylkautschuk**
- Vorteile: Stärkster Schutz, hervorragende Luftdichtheit, strahlenbeständig
- Nachteile: Höherer Preis, schwerer
- Anwendungen: Gefahrgutumschlag, Notfallrettung, Hochrisikoarbeiten
- Preis: Höchste`,
    answerEs: `Cada material tiene sus propias características:

**Neopreno**
- Ventajas: Buena resistencia química, flexible, duradero
- Desventajas: Resistencia limitada a algunos solventes orgánicos
- Aplicaciones: Producción química, laboratorios, galvanoplastia
- Precio: Medio

**PVC (Policloruro de Vinilo)**
- Ventajas: Asequible, impermeable, fácil de limpiar
- Desventajas: Resistencia química más débil, se endurece en frío
- Aplicaciones: Acuicultura, procesamiento de alimentos, trabajo químico ligero
- Precio: Más bajo

**Caucho Butílico**
- Ventajas: La protección más fuerte, excelente hermeticidad, resistente a radiación
- Desventajas: Precio más alto, más pesado
- Aplicaciones: Manejo de químicos peligrosos, rescate de emergencia
- Precio: Más alto`,
    category: 'products',
    categoryEn: 'Products',
  },
  {
    id: 'anti-static-importance',
    question: '为什么石化行业必须使用抗静电工作服？',
    questionEn: 'Why must petrochemical industry use anti-static workwear?',
    questionAr: 'لماذا يجب على صناعة البتروكيماويات استخدام ملابس عمل مضادة للكهرباء الساكنة؟',
    questionDe: 'Warum muss die petrochemische Industrie antistatische Arbeitskleidung verwenden?',
    questionEs: '¿Por qué la industria petroquímica debe usar ropa de trabajo antiestática?',
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
    answerAr: `الكهرباء الساكنة خطر غير مرئي في صناعة البتروكيماويات:

**مخاطر الخطر:**
- بيئات البتروكيماويات تحتوي على غازات وسوائل قابلة للاشتعال
- تفريغ الشحنات الساكنة يمكن أن يسبب حرائق أو انفجارات
- الإحصائيات تظهر أن ~10٪ من حوادث البتروكيماويات مرتبطة بالكهرباء الساكنة

**المتطلبات التنظيمية:**
- قانون سلامة العمل يتطلب معدات حماية مؤهلة
- معيار GB 12014 للملابس المضادة للكهرباء الساكنة إلزامي
- لوائح سلامة الصناعة تتطلب ذلك صراحة

**كيف تعمل ملابس العمل المضادة للكهرباء الساكنة:**
- الألياف الموصلة تفرغ الكهرباء الساكنة
- الطلاء المضاد للكهرباء الساكنة يقلل من تراكم الشحنات
- تصميم التأريض يطلق الشحنات بأمان`,
    answerDe: `Statistische Elektrizität ist eine unsichtbare Gefahr in der petrochemischen Industrie:

**Risikogefahren:**
- Petrochemische Umgebungen enthalten brennbare Gase und Flüssigkeiten
- Statische Entladung kann Brände oder Explosionen verursachen
- Statistiken zeigen, dass ~10% der petrochemischen Unfälle statisch bedingt sind

**Regulatorische Anforderungen:**
- Arbeitsschutzgesetz erfordert qualifizierte Schutzausrüstung
- GB 12014 Antistatische Kleidung Pflichtstandard
- Industriesicherheitsvorschriften schreiben dies ausdrücklich vor

**Wie antistatische Arbeitskleidung funktioniert:**
- Leitfähige Fasern entladen statische Elektrizität
- Antistatische Beschichtung reduziert Ladungsansammlung
- Erdungsdesign gibt Ladungen sicher ab`,
    answerEs: `La electricidad estática es un peligro invisible en la industria petroquímica:

**Peligros de Riesgo:**
- Los ambientes petroquímicos contienen gases y líquidos inflamables
- La descarga estática puede causar incendios o explosiones
- Las estadísticas muestran que ~10% de los accidentes petroquímicos están relacionados con estática

**Requisitos Regulatorios:**
- La Ley de Seguridad Laboral requiere equipos de protección calificados
- GB 12014 Ropa Anti-estática es estándar obligatorio
- Los reglamentos de seguridad de la industria lo requieren explícitamente

**Cómo funciona la ropa de trabajo anti-estática:**
- Las fibras conductoras descargan la electricidad estática
- El recubrimiento anti-estático reduce la acumulación de carga
- El diseño de conexión a tierra libera cargas de forma segura`,
    category: 'products',
    categoryEn: 'Products',
  },
  {
    id: 'gas-suit-lifespan',
    question: '防毒衣的使用寿命是多久？',
    questionEn: 'What is the service life of gas protection suits?',
    questionAr: 'ما هي مدة خدمة بدلات الحماية من الغازات؟',
    questionDe: 'Was ist die Lebensdauer von Gasschutzanzügen?',
    questionEs: '¿Cuál es la vida útil de los trajes de protección contra gases?',
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
    answerAr: `تعتمد مدة الخدمة على عوامل مختلفة:

**التوصيات العامة:**
- الاستخدام العادي: 2-3 سنوات
- الاستخدام المتكرر أو الظروف القاسية: 1-2 سنة
- غير مستخدم لكن مخزن لأكثر من 5 سنوات: اختبر قبل الاستخدام

**العوامل المؤثرة على العمر الافتراضي:**
1. تكرار الاستخدام
2. ظروف التخزين (الحرارة، الرطوبة، الضوء)
3. نوع وتركيز المواد الكيميائية المتلامسة
4. حالة الصيانة
5. الأضرار المادية

**متطلبات الفحص المنتظم:**
- قبل كل استخدام: فحص بصري
- شهرياً: فحص الإحكام
- سنوياً: فحص احترافي

**معايير الاستبدال:**
- تجاوز مدة الخدمة
- تالف بما لا يمكن إصلاحه
- انخفاض أداء الحماية
- عدم اجتياز الفحص`,
    answerDe: `Die Lebensdauer hängt von verschiedenen Faktoren ab:

**Allgemeine Empfehlungen:**
- Normale Nutzung: 2-3 Jahre
- Häufige Nutzung oder raue Bedingungen: 1-2 Jahre
- Ungenutzt aber über 5 Jahre gelagert: Vor Gebrauch testen

**Einflussfaktoren auf die Lebensdauer:**
1. Nutzungshäufigkeit
2. Lagerungsbedingungen (Temperatur, Feuchtigkeit, Licht)
3. Art und Konzentration der kontaktierten Chemikalien
4. Wartungszustand
5. Physische Schäden

**Regelmäßige Inspektionsanforderungen:**
- Vor jedem Gebrauch: Sichtprüfung
- Monatlich: Dichtigkeitsprüfung
- Jährlich: Professionelle Prüfung

**Austauschkriterien:**
- Lebensdauer überschritten
- Unreparierbar beschädigt
- Verminderte Schutzeistung
- Durchgefallene Prüfung`,
    answerEs: `La vida útil depende de varios factores:

**Recomendaciones Generales:**
- Uso regular: 2-3 años
- Uso frecuente o condiciones adversas: 1-2 años
- Sin usar pero almacenado más de 5 años: probar antes de usar

**Factores que Afectan la Vida Útil:**
1. Frecuencia de uso
2. Condiciones de almacenamiento (temperatura, humedad, luz)
3. Tipo y concentración de químicos contactados
4. Condición de mantenimiento
5. Daños físicos

**Requisitos de Inspección Regular:**
- Antes de cada uso: Inspección visual
- Mensualmente: Inspección de hermeticidad
- Anualmente: Prueba profesional

**Criterios de Reemplazo:**
- Vida útil excedida
- Daño irreparable
- Rendimiento de protección degradado
- Prueba fallida`,
    category: 'products',
    categoryEn: 'Products',
  },

  // 订单相关问题
  {
    id: 'moq',
    question: '最小起订量是多少？',
    questionEn: 'What is the minimum order quantity (MOQ)?',
    questionAr: 'ما هي الحد الأدنى لكمية الطلب (MOQ)؟',
    questionDe: 'Was ist die Mindestbestellmenge (MOQ)?',
    questionEs: '¿Cuál es la cantidad mínima de pedido (MOQ)?',
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
    answerAr: `الحد الأدنى لكمية الطلب لدينا مرن:

**المنتجات القياسية:**
- بدلات الحماية: 10 قطع كحد أدنى
- ملابس المطر: 20 قطعة كحد أدنى
- ملابس العمل: 10 قطع كحد أدنى

**المنتجات المخصصة:**
- تعتمد على متطلبات التخصيص المحددة
- عادة 50 قطعة كحد أدنى

**طلبات العينات:**
- 1-3 عينات متاحة لفحص الجودة
- يمكن خصم تكلفة العينة من الطلبات الرسمية

ندعم الطلبات التجريبية الصغيرة ونرحب بالعملاء الجدد للاستفسار.`,
    answerDe: `Unsere Mindestbestellmenge ist flexibel:

**Standardprodukte:**
- Schutzanzüge: Mindestens 10 Stück
- Regenkleidung: Mindestens 20 Stück
- Arbeitskleidung: Mindestens 10 Stück

**Kundenspezifische Produkte:**
- Hängt von den spezifischen Anpassungsanforderungen ab
- Normalerweise mindestens 50 Stück

**Musterbestellungen:**
- 1-3 Muster für Qualitätsprüfung verfügbar
- Musterkosten können von offiziellen Bestellungen abgezogen werden

Wir unterstützen kleine Testbestellungen und begrüßen neue Kundenanfragen.`,
    answerEs: `Nuestro MOQ es flexible:

**Productos Estándar:**
- Trajes de protección: mínimo 10 piezas
- Impermeables: mínimo 20 piezas
- Ropa de trabajo: mínimo 10 piezas

**Productos Personalizados:**
- Depende de los requisitos específicos de personalización
- Generalmente mínimo 50 piezas

**Pedidos de Muestras:**
- 1-3 muestras disponibles para inspección de calidad
- El costo de la muestra puede deducirse de pedidos formales

Apoyamos pedidos de prueba pequeños y damos la bienvenida a consultas de nuevos clientes.`,
    category: 'ordering',
    categoryEn: 'Ordering',
  },
  {
    id: 'lead-time',
    question: '交货期需要多长时间？',
    questionEn: 'What is the lead time?',
    questionAr: 'ما هي مدة التسليم؟',
    questionDe: 'Wie lange ist die Lieferzeit?',
    questionEs: '¿Cuál es el tiempo de entrega?',
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
    answerAr: `تعتمد مدة التسليم على حالة الطلب:

**المنتجات المتوفرة:**
- الشحن خلال 3-5 أيام عمل بعد الدفع

**الإنتاج القياسي:**
- دفعة صغيرة (أقل من 50 قطعة): 7-10 أيام
- دفعة متوسطة (50-200 قطعة): 15-20 يوم
- دفعة كبيرة (أكثر من 200 قطعة): للتفاوض

**المنتجات المخصصة:**
- عادة 20-30 يوم حسب التعقيد
- التخصيص الخاص للتفاوض بشكل منفصل

**الشحن الدولي:**
- الشحن الجوي: 5-7 أيام
- الشحن البحري: 20-40 يوم (حسب الوجهة)

لدينا خطوط إنتاج كاملة ويمكننا تسريع الإنتاج حسب احتياجات العميل.`,
    answerDe: `Die Lieferzeit hängt von der Bestellungssituation ab:

**Lagerware:**
- Versand innerhalb von 3-5 Arbeitstagen nach Zahlungseingang

**Standardproduktion:**
- Kleine Charge (<50 Stück): 7-10 Tage
- Mittlere Charge (50-200 Stück): 15-20 Tage
- Große Charge (>200 Stück): Zu verhandeln

**Kundenspezifische Produkte:**
- Normalerweise 20-30 Tage je nach Komplexität
- Sonderanfertigungen separat zu verhandeln

**Internationaler Versand:**
- Luftfracht: 5-7 Tage
- Seefracht: 20-40 Tage (je nach Zielort)

Wir haben vollständige Produktionslinien und können die Produktion nach Kundenwünschen beschleunigen.`,
    answerEs: `El tiempo de entrega depende de la situación del pedido:

**Productos en Stock:**
- Enviados dentro de 3-5 días laborables después del pago

**Producción Estándar:**
- Lote pequeño (<50 piezas): 7-10 días
- Lote mediano (50-200 piezas): 15-20 días
- Lote grande (>200 piezas): A negociar

**Productos Personalizados:**
- Generalmente 20-30 días dependiendo de la complejidad
- Personalización especial a negociar por separado

**Envío Internacional:**
- Carga aérea: 5-7 días
- Carga marítima: 20-40 días (según destino)

Tenemos líneas de producción completas y podemos acelerar la producción según las necesidades del cliente.`,
    category: 'ordering',
    categoryEn: 'Ordering',
  },
  {
    id: 'payment-methods',
    question: '接受哪些付款方式？',
    questionEn: 'What payment methods do you accept?',
    questionAr: 'ما هي طرق الدفع المقبولة؟',
    questionDe: 'Welche Zahlungsmethoden akzeptieren Sie?',
    questionEs: '¿Qué métodos de pago aceptan?',
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
    answerAr: `نقبل طرق دفع متعددة:

**التجارة الدولية:**
- T/T (تحويل بنكي): 30% وديعة، الرصيد قبل الشحن
- L/C (خطاب الاعتماد): مقبول للطلبات الكبيرة
- PayPal: للطلبات الصغيرة ورسوم العينات

**التجارة المحلية:**
- تحويل بنكي
- Alipay/WeChat Pay

**شروط الدفع:**
- العملاء الجدد: عادة مطلوب وديعة 30%
- العملاء المنتظمون: شروط أكثر مرونة قابلة للتفاوض

يمكن التفاوض على طرق الدفع المحددة في العقد.`,
    answerDe: `Wir akzeptieren mehrere Zahlungsmethoden:

**Internationaler Handel:**
- T/T (Banküberweisung): 30% Anzahlung, Restbetrag vor Versand
- L/C (Akkreditiv): Für große Bestellungen akzeptabel
- PayPal: Für kleine Bestellungen und Mustergebühren

**Inlandshandel:**
- Banküberweisung
- Alipay/WeChat Pay

**Zahlungsbedingungen:**
- Neukunden: Normalerweise 30% Anzahlung erforderlich
- Stammkunden: Flexiblere Bedingungen verhandelbar

Spezifische Zahlungsmethoden können im Vertrag verhandelt werden.`,
    answerEs: `Aceptamos múltiples métodos de pago:

**Comercio Internacional:**
- T/T (Transferencia Bancaria): 30% de depósito, saldo antes del envío
- L/C (Carta de Crédito): Aceptable para pedidos grandes
- PayPal: Para pedidos pequeños y tarifas de muestras

**Comercio Nacional:**
- Transferencia bancaria
- Alipay/WeChat Pay

**Términos de Pago:**
- Nuevos clientes: Generalmente se requiere 30% de depósito
- Clientes regulares: Términos más flexibles negociables

Los métodos de pago específicos pueden negociarse en el contrato.`,
    category: 'ordering',
    categoryEn: 'Ordering',
  },

  // 物流相关问题
  {
    id: 'shipping-options',
    question: '提供哪些物流方式？',
    questionEn: 'What shipping options are available?',
    questionAr: 'ما هي خيارات الشحن المتاحة؟',
    questionDe: 'Welche Versandoptionen sind verfügbar?',
    questionEs: '¿Qué opciones de envío están disponibles?',
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
    answerAr: `نقدم خيارات شحن متعددة:

**الشحن الدولي:**
- الشحن البحري (FCL/LCL): اقتصادي للكميات الكبيرة
- الشحن الجوي: سريع، للطلبات العاجلة
- البريد السريع (DHL/FEDEX/UPS): للدفعات الصغيرة/العينات

**الشحن المحلي:**
- توصيل عبر شركات اللوجستيات
- توصيل سريع
- استلام ذاتي

**شروط التجارة:**
- دعم FOB، CIF، DDP، إلخ.
- ترتيب اللوجستيات حسب احتياجات العميل

**التغليف:**
- تغليف كرتون قياسي
- تغليف صندوق خشبي (اختياري)
- متوافق مع معايير الشحن الدولية`,
    answerDe: `Wir bieten verschiedene Versandoptionen an:

**Internationaler Versand:**
- Seefracht (FCL/LCL): Kostengünstig für große Mengen
- Luftfracht: Schnell, für dringende Bestellungen
- Express (DHL/FEDEX/UPS): Für kleine Chargen/Muster

**Inlandsversand:**
- Lieferung durch Spediteure
- Expresslieferung
- Selbstabholung

**Handelsbedingungen:**
- Unterstützung von FOB, CIF, DDP usw.
- Logistik nach Kundenwünschen arrangiert

**Verpackung:**
- Standard-Kartonverpackung
- Holzkistenverpackung (optional)
- Konform mit internationalen Versandstandards`,
    answerEs: `Ofrecemos múltiples opciones de envío:

**Envío Internacional:**
- Carga marítima (FCL/LCL): Económico para grandes cantidades
- Carga aérea: Rápido, para pedidos urgentes
- Express (DHL/FEDEX/UPS): Para pequeños lotes/muestras

**Envío Nacional:**
- Entrega por empresa de logística
- Entrega express
- Autoservicio

**Términos Comerciales:**
- Soporte FOB, CIF, DDP, etc.
- Logística organizada según necesidades del cliente

**Embalaje:**
- Embalaje de cartón estándar
- Embalaje de caja de madera (opcional)
- Conforme con estándares de envío internacional`,
    category: 'shipping',
    categoryEn: 'Shipping',
  },
  {
    id: 'export-countries',
    question: '产品出口到哪些国家？',
    questionEn: 'Which countries do you export to?',
    questionAr: 'إلى أي دول تصدرون؟',
    questionDe: 'In welche Länder exportieren Sie?',
    questionEs: '¿A qué países exportan?',
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
    answerAr: `منتجاتنا مصدرة إلى أكثر من 50 دولة حول العالم:

**آسيا:**
اليابان، كوريا الجنوبية، سنغافورة، ماليزيا، تايلاند، إندونيسيا، الفلبين، فيتنام، الهند، باكستان، السعودية، الإمارات، إلخ.

**أوروبا:**
ألمانيا، بريطانيا، فرنسا، إيطاليا، إسبانيا، هولندا، بلجيكا، بولندا، روسيا، إلخ.

**الأمريكتين:**
أمريكا، كندا، البرازيل، المكسيك، الأرجنتين، تشيلي، إلخ.

**أفريقيا:**
جنوب أفريقيا، مصر، نيجيريا، كينيا، إلخ.

**أوقيانوسيا:**
أستراليا، نيوزيلندا

نحن ملمون بلوائح الاستيراد ومتطلبات الشهادات لمختلف الدول ويمكننا مساعدة العملاء في الإجراءات ذات الصلة.`,
    answerDe: `Unsere Produkte werden in über 50 Länder weltweit exportiert:

**Asien:**
Japan, Südkorea, Singapur, Malaysia, Thailand, Indonesien, Philippinen, Vietnam, Indien, Pakistan, Saudi-Arabien, UAE usw.

**Europa:**
Deutschland, Großbritannien, Frankreich, Italien, Spanien, Niederlande, Belgien, Polen, Russland usw.

**Amerika:**
USA, Kanada, Brasilien, Mexiko, Argentinien, Chile usw.

**Afrika:**
Südafrika, Ägypten, Nigeria, Kenia usw.

**Ozeanien:**
Australien, Neuseeland

Wir sind mit den Importvorschriften und Zertifizierungsanforderungen verschiedener Länder vertraut und können Kunden bei entsprechenden Verfahren unterstützen.`,
    answerEs: `Nuestros productos se exportan a más de 50 países en todo el mundo:

**Asia:**
Japón, Corea del Sur, Singapur, Malasia, Tailandia, Indonesia, Filipinas, Vietnam, India, Pakistán, Arabia Saudita, EAU, etc.

**Europa:**
Alemania, Reino Unido, Francia, Italia, España, Países Bajos, Bélgica, Polonia, Rusia, etc.

**Américas:**
EE.UU., Canadá, Brasil, México, Argentina, Chile, etc.

**África:**
Sudáfrica, Egipto, Nigeria, Kenia, etc.

**Oceanía:**
Australia, Nueva Zelanda

Estamos familiarizados con las regulaciones de importación y requisitos de certificación de varios países y podemos asistir a los clientes con los procedimientos relevantes.`,
    category: 'shipping',
    categoryEn: 'Shipping',
  },

  // 定制服务问题
  {
    id: 'customization-service',
    question: '可以定制产品吗？',
    questionEn: 'Can products be customized?',
    questionAr: 'هل يمكن تخصيص المنتجات؟',
    questionDe: 'Können Produkte maßgeschneidert werden?',
    questionEs: '¿Se pueden personalizar los productos?',
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
    answerAr: `نعم، نقدم خدمات تخصيص شاملة:

**خيارات التخصيص:**
- الحجم: معدل حسب متطلبات العميل
- اللون: خيارات ألوان متعددة متاحة
- الشعار: طباعة أو تطريز شعارات العملاء
- الوظيفة: ميزات خاصة (مضاد للكهرباء الساكنة، عزل حراري، إلخ)
- التغليف: تغليف ووسم مخصص

**عملية التخصيص:**
1. تقديم متطلبات التخصيص
2. تأكيد التصميم والتسعير
3. إنتاج عينة للموافقة
4. توقيع العقد والإنتاج
5. فحص الجودة والشحن

**متطلبات التخصيص:**
- عادة 50 قطعة كحد أدنى للمنتجات المخصصة
- التخصيص المعقد للتفاوض حالة بحالة

لدينا فريق تطوير مهني لتلبية المتطلبات الخاصة المختلفة.`,
    answerDe: `Ja, wir bieten umfassende Anpassungsdienste an:

**Anpassungsoptionen:**
- Größe: An Kundenanforderungen angepasst
- Farbe: Mehrere Farboptionen verfügbar
- Logo: Druck oder Stickerei von Kundenlogos
- Funktion: Sonderfunktionen (antistatisch, Wärmedämmung usw.)
- Verpackung: Maßgeschneiderte Verpackung und Kennzeichnung

**Anpassungsprozess:**
1. Anpassungsanforderungen bereitstellen
2. Design und Angebot bestätigen
3. Musterproduktion zur Genehmigung
4. Vertragsunterzeichnung und Produktion
5. Qualitätsprüfung und Versand

**Anpassungsanforderungen:**
- Normalerweise mindestens 50 Stück für maßgeschneiderte Produkte
- Komplexe Anpassungen fallweise zu verhandeln

Wir haben ein professionelles F&E-Team, um verschiedene Sonderanforderungen zu erfüllen.`,
    answerEs: `Sí, ofrecemos servicios de personalización integrales:

**Opciones de Personalización:**
- Tamaño: Ajustado a los requisitos del cliente
- Color: Múltiples opciones de color disponibles
- Logo: Impresión o bordado de logos del cliente
- Función: Características especiales (anti-estático, aislamiento térmico, etc.)
- Embalaje: Embalaje y etiquetado personalizado

**Proceso de Personalización:**
1. Proporcionar requisitos de personalización
2. Confirmar diseño y cotización
3. Producción de muestra para aprobación
4. Firma de contrato y producción
5. Inspección de calidad y envío

**Requisitos de Personalización:**
- Generalmente mínimo 50 piezas para productos personalizados
- Personalización compleja a negociar caso por caso

Tenemos un equipo profesional de I+D para satisfacer diversos requisitos especiales.`,
    category: 'customization',
    categoryEn: 'Customization',
  },
  {
    id: 'odm-oem-service',
    question: '支持OEM/ODM服务吗？',
    questionEn: 'Do you support OEM/ODM services?',
    questionAr: 'هل تدعمون خدمات OEM/ODM؟',
    questionDe: 'Bieten Sie OEM/ODM-Dienste an?',
    questionEs: '¿Ofrecen servicios OEM/ODM?',
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
    answerAr: `نعم، نقدم خدمات OEM و ODM:

**خدمة OEM (التصنيع التعاقدي):**
- الإنتاج حسب عينات أو رسومات العميل
- استخدام علامة العميل التجارية والتغليف
- سرية تامة لتصاميم العميل

**خدمة ODM (تصميم + إنتاج):**
- تصميم المنتج حسب متطلبات العميل
- خيارات تصميم متعددة متاحة
- فريق محترف لتطوير المنتج

**مزايا الخدمة:**
- أكثر من 20 سنة خبرة في الصناعة
- مصنع معتمد ISO 9001
- نظام كامل لمراقبة الجودة
- قدرة سريعة على إنتاج العينات
- مرونة في حجم الإنتاج

**عملية التعاون:**
1. مناقشة المتطلبات
2. تأكيد الحل
3. إنتاج العينة
4. توقيع العقد
5. الإنتاج الكمي
6. دعم ما بعد البيع

نرحب بجميع المؤسسات لمناقشة التعاون!`,
    answerDe: `Ja, wir bieten OEM- und ODM-Dienste an:

**OEM-Service (Auftragsfertigung):**
- Produktion nach Kundenmustern oder Zeichnungen
- Verwendung von Kundenmarke und Verpackung
- Strenge Vertraulichkeit der Kundendesigns

**ODM-Service (Design + Produktion):**
- Produktdesign nach Kundenanforderungen
- Mehrere Designoptionen verfügbar
- Professionelles Team für Produktentwicklung

**Servicevorteile:**
- Über 20 Jahre Industrieerfahrung
- ISO 9001 zertifiziertes Werk
- Vollständiges Qualitätskontrollsystem
- Schnelle Musterfertigung
- Flexible Produktionskapazität

**Kooperationsprozess:**
1. Anforderungsbesprechung
2. Lösungsbestätigung
3. Musterproduktion
4. Vertragsunterzeichnung
5. Serienproduktion
6. Kundendienst

Willkommen an alle Unternehmen zur Kooperationsbesprechung!`,
    answerEs: `Sí, ofrecemos servicios OEM y ODM:

**Servicio OEM (Fabricación por Contrato):**
- Producción según muestras o dibujos del cliente
- Uso de marca y embalaje del cliente
- Estricta confidencialidad de los diseños del cliente

**Servicio ODM (Diseño + Producción):**
- Diseño de producto según requisitos del cliente
- Múltiples opciones de diseño disponibles
- Equipo profesional para desarrollo de productos

**Ventajas del Servicio:**
- Más de 20 años de experiencia en la industria
- Fábrica certificada ISO 9001
- Sistema completo de control de calidad
- Capacidad rápida de producción de muestras
- Escala de producción flexible

**Proceso de Cooperación:**
1. Discusión de requisitos
2. Confirmación de solución
3. Producción de muestra
4. Firma de contrato
5. Producción en masa
6. Soporte posventa

¡Bienvenidas todas las empresas para discutir cooperación!`,
    category: 'customization',
    categoryEn: 'Customization',
  },

  // 售后服务问题
  {
    id: 'quality-guarantee',
    question: '产品质量有问题怎么办？',
    questionEn: 'What if there are quality problems?',
    questionAr: 'ماذا لو كانت هناك مشاكل في الجودة؟',
    questionDe: 'Was ist bei Qualitätsproblemen zu tun?',
    questionEs: '¿Qué pasa si hay problemas de calidad?',
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
    answerAr: `نقدم دعم ما بعد البيع شامل:

**ضمان الجودة:**
- جميع المنتجات تخضع لفحص جودة صارم قبل الشحن
- تتوافق مع المعايير الوطنية ومتطلبات الشهادات
- يتم توفير شهادات المنتج وتقارير الاختبار

**سياسة ما بعد البيع:**
- خلال 7 أيام من الاستلام: إرجاع/استبدال لمشاكل الجودة
- تكاليف الشحن للإرجاع بسبب مشاكل الجودة تتحملها شركتنا
- يتم توفير الدعم الفني والحلول

**عملية المعالجة:**
1. اتصل بنا فوراً بعد اكتشاف المشاكل
2. قدم صوراً أو فيديوهات للمشكلة
3. نتحقق ونقدم الحلول
4. معالجة الإرجاع/الاستبدال أو الإصلاح

**التزام الجودة:**
- مواد أصلية، لا اختصارات
- حرفية ممتازة، متين
- الخدمة أولاً، رضا العميل

لأي مشاكل، يرجى الاتصال بفريق ما بعد البيع لدينا.`,
    answerDe: `Wir bieten umfassenden Kundendienst:

**Qualitätssicherung:**
- Alle Produkte werden vor dem Versand streng geprüft
- Erfüllen nationale Standards und Zertifizierungsanforderungen
- Produktzertifikate und Prüfberichte werden bereitgestellt

**Kundendienstpolitik:**
- Innerhalb von 7 Tagen nach Erhalt: Rückgabe/Umtausch bei Qualitätsmängeln
- Versandkosten für Rücksendungen aufgrund von Qualitätsmängeln von uns getragen
- Technische Unterstützung und Lösungen werden angeboten

**Bearbeitungsprozess:**
1. Kontaktieren Sie uns umgehend nach Entdeckung von Problemen
2. Stellen Sie Fotos oder Videos des Problems bereit
3. Wir überprüfen und bieten Lösungen an
4. Rückgabe/Umtausch oder Reparaturabwicklung

**Qualitätsverpflichtung:**
- Echtes Material, keine Abkürzungen
- Ausgezeichnete Handwerkskunst, langlebig
- Service first, Kundenzufriedenheit

Bei Problemen kontaktieren Sie bitte unser Kundendienstteam.`,
    answerEs: `Ofrecemos soporte posventa integral:

**Garantía de Calidad:**
- Todos los productos pasan por estricta inspección de calidad antes del envío
- Cumplen con estándares nacionales y requisitos de certificación
- Se proporcionan certificados de producto e informes de prueba

**Política Posventa:**
- Dentro de 7 días de recepción: Devolución/cambio por problemas de calidad
- Los costos de envío por devoluciones debido a problemas de calidad son cubiertos por nosotros
- Se proporciona soporte técnico y soluciones

**Proceso de Manejo:**
1. Contáctenos promptly después de descubrir problemas
2. Proporcione fotos o videos del problema
3. Verificamos y proporcionamos soluciones
4. Procesamiento de devolución/cambio o reparación

**Compromiso de Calidad:**
- Materiales genuinos, sin atajos
- Excelente artesanía, duradero
- Servicio primero, satisfacción del cliente

Para cualquier problema, contacte a nuestro equipo posventa.`,
    category: 'after-sales',
    categoryEn: 'After-Sales',
  },
  {
    id: 'technical-support',
    question: '提供技术支持吗？',
    questionEn: 'Do you provide technical support?',
    questionAr: 'هل تقدمون دعماً تقنياً؟',
    questionDe: 'Bieten Sie technischen Support an?',
    questionEs: '¿Ofrecen soporte técnico?',
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
    answerAr: `نعم، نقدم دعماً تقنياً شاملاً:

**الاستشارات الفنية:**
- إرشادات اختيار المنتج
- تدريب الاستخدام
- إرشادات الصيانة
- استشارات لوائح السلامة

**الخدمات الميدانية:**
- تدريب ميداني من فنيين (للعملاء الرئيسيين)
- عرض استخدام المنتج
- تشخيص وحل المشاكل

**دعم الوثائق:**
- أدلة مستخدم المنتج
- أدلة الصيانة
- إرشادات التشغيل الآمن
- وثائق الشهادات

**وقت الاستجابة:**
- استفسارات الهاتف/البريد الإلكتروني: الرد خلال 24 ساعة
- المشاكل التقنية العاجلة: استجابة فورية

فريقنا التقني لديه خبرة صناعية غنية ودائماً في خدمتكم.`,
    answerDe: `Ja, wir bieten umfassenden technischen Support:

**Technische Beratung:**
- Produktauswahlberatung
- Nutzungsschulung
- Wartungsberatung
- Sicherheitsvorschriften-Beratung

**Vor-Ort-Services:**
- Vor-Ort-Schulung durch Techniker (für Hauptkunden)
- Produktnutzungsdemonstration
- Problemdiagnose und -lösung

**Dokumentationsunterstützung:**
- Produktbedienungsanleitungen
- Wartungshandbücher
- Sicherheitsrichtlinien
- Zertifikatsdokumente

**Reaktionszeit:**
- Telefon/E-Mail-Anfragen: Antwort innerhalb von 24 Stunden
- Dringende technische Probleme: Sofortige Reaktion

Unser technisches Team hat umfangreiche Industrieerfahrung und steht Ihnen jederzeit zur Verfügung.`,
    answerEs: `Sí, ofrecemos soporte técnico integral:

**Consultoría Técnica:**
- Orientación en selección de productos
- Capacitación de uso
- Orientación de mantenimiento
- Consulta de normativas de seguridad

**Servicios In Situ:**
- Capacitación in situ por técnicos (para clientes clave)
- Demostración de uso de productos
- Diagnóstico y resolución de problemas

**Soporte de Documentación:**
- Manuales de usuario de productos
- Guías de mantenimiento
- Directrices de operación segura
- Documentos de certificación

**Tiempo de Respuesta:**
- Consultas telefónicas/email: Respuesta dentro de 24 horas
- Problemas técnicos urgentes: Respuesta inmediata

Nuestro equipo técnico tiene amplia experiencia en la industria y siempre está a su servicio.`,
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
