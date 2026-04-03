// 邮件配置 - 使用环境变量，方便后续更换
export const emailConfig = {
  // 接收询盘的邮箱（不会显示在网页上）
  toEmail: process.env.INQUIRY_EMAIL || 'weiwei@jinlingrubber.com.cn',
  
  // 发件人邮箱（域名验证后使用自定义域名）
  fromEmail: process.env.FROM_EMAIL || 'noreply@send.jinlingrubber.com.cn',
  
  // 公司名称
  companyName: '上海金铃橡胶制品有限公司',
  companyNameEn: 'Shanghai Jinling Rubber Products Co., Ltd.',
  
  // 网站地址
  websiteUrl: 'https://www.shjinling.com',
  
  // 是否启用邮件发送
  enabled: true,
};

// 邮件模板类型
export interface InquiryEmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  product?: string;
  message: string;
  lang: string;
  submittedAt: string;
}
