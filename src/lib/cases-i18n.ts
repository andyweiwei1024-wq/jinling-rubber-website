// 案例多语言辅助函数 - 上海金铃橡胶制品有限公司
import type { Language } from './i18n/config';
import type { CaseStudy } from './cases';

/**
 * 获取案例字段的本地化值
 * 优先级: 语言特定字段 > 英文字段 > 中文 > 默认值
 */
export function getCaseField(
  caseStudy: CaseStudy,
  field: keyof CaseStudy,
  lang: Language
): string | string[] | undefined {
  // 构建字段名
  const langSuffix = lang === 'ar' ? 'Ar' : lang === 'de' ? 'De' : lang === 'es' ? 'Es' : '';
  const localizedField = langSuffix ? `${field}${langSuffix}` : null;
  
  const record = caseStudy as unknown as Record<string, unknown>;
  
  // 尝试获取本地化字段
  if (localizedField && record[localizedField]) {
    return record[localizedField] as string | string[];
  }
  
  // 对于非中文、英文的语言，回退到英文
  if (lang !== 'zh') {
    const enField = `${field}En`;
    if (record[enField]) {
      return record[enField] as string | string[];
    }
  }
  
  // 对于中文，返回原始字段
  if (lang === 'zh') {
    return caseStudy[field];
  }
  
  // 最后回退到英文字段
  const enField = `${field}En`;
  if (record[enField]) {
    return record[enField] as string | string[];
  }
  
  return caseStudy[field];
}

/**
 * 获取本地化的案例对象
 */
export function getLocalizedCase(caseStudy: CaseStudy, lang: Language) {
  return {
    id: caseStudy.id,
    slug: caseStudy.slug,
    title: getCaseField(caseStudy, 'title', lang) as string,
    summary: getCaseField(caseStudy, 'summary', lang) as string,
    industry: getCaseField(caseStudy, 'industry', lang) as string,
    country: getCaseField(caseStudy, 'country', lang) as string,
    products: getCaseField(caseStudy, 'products', lang) as string[],
    challenge: getCaseField(caseStudy, 'challenge', lang) as string,
    solution: getCaseField(caseStudy, 'solution', lang) as string,
    results: getCaseField(caseStudy, 'results', lang) as string[],
    testimonial: getCaseField(caseStudy, 'testimonial', lang) as string | undefined,
    clientName: getCaseField(caseStudy, 'clientName', lang) as string | undefined,
    clientPosition: getCaseField(caseStudy, 'clientPosition', lang) as string | undefined,
    image: caseStudy.image,
    logo: caseStudy.logo,
  };
}
