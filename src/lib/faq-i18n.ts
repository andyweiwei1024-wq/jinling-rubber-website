// FAQ多语言辅助函数 - 上海金铃橡胶制品有限公司
import type { Language } from './i18n/config';
import type { FAQItem, FAQCategory } from './faq';

/**
 * 获取FAQ字段的多语言值
 */
export function getFAQField(
  item: FAQItem,
  field: 'question' | 'answer' | 'category',
  lang: Language
): string {
  const record = item as unknown as Record<string, unknown>;
  
  // 构建字段名
  const langSuffix = lang === 'ar' ? 'Ar' : lang === 'de' ? 'De' : lang === 'es' ? 'Es' : '';
  const localizedField = langSuffix ? `${field}${langSuffix}` : null;
  
  // 尝试获取本地化字段
  if (localizedField && record[localizedField]) {
    return record[localizedField] as string;
  }
  
  // 对于非中文的语言，回退到英文
  if (lang !== 'zh') {
    const enField = `${field}En`;
    if (record[enField]) {
      return record[enField] as string;
    }
  }
  
  // 对于中文，返回原始字段
  if (lang === 'zh') {
    return item[field];
  }
  
  // 最后回退到英文字段
  const enField = `${field}En`;
  if (record[enField]) {
    return record[enField] as string;
  }
  
  return item[field];
}

/**
 * 获取FAQ分类名称的多语言值
 */
export function getFAQCategoryName(category: FAQCategory, lang: Language): string {
  const record = category as unknown as Record<string, unknown>;
  
  // 构建字段名
  const langSuffix = lang === 'ar' ? 'Ar' : lang === 'de' ? 'De' : lang === 'es' ? 'Es' : '';
  const localizedField = langSuffix ? `name${langSuffix}` : null;
  
  // 尝试获取本地化字段
  if (localizedField && record[localizedField]) {
    return record[localizedField] as string;
  }
  
  // 对于非中文的语言，回退到英文
  if (lang !== 'zh' && category.nameEn) {
    return category.nameEn;
  }
  
  // 对于中文，返回原始字段
  if (lang === 'zh') {
    return category.name;
  }
  
  // 最后回退到英文
  return category.nameEn || category.name;
}

/**
 * 获取本地化的FAQ项
 */
export function getLocalizedFAQ(item: FAQItem, lang: Language) {
  return {
    id: item.id,
    question: getFAQField(item, 'question', lang),
    answer: getFAQField(item, 'answer', lang),
    category: getFAQField(item, 'category', lang),
  };
}

/**
 * 获取本地化的FAQ分类
 */
export function getLocalizedFAQCategory(category: FAQCategory, lang: Language) {
  return {
    id: category.id,
    name: getFAQCategoryName(category, lang),
  };
}
