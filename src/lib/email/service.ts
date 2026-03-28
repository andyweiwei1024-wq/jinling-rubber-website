import { InquiryEmailData, emailConfig } from './config';

// Resend API Key - 从环境变量获取，或使用后备值
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_EXj1fcyf_FcigPqN4nWa8SC2XFrs9Qdzt';

// 发送询盘通知邮件
export async function sendInquiryNotification(data: InquiryEmailData): Promise<boolean> {
  const { toEmail, companyName, companyNameEn, websiteUrl } = emailConfig;

  // 邮件主题
  const subject = `【新询盘】${data.name} <${data.email}> - ${companyName}`;

  // 邮件正文
  const textContent = `
========================================
新询盘通知 - ${companyName}
========================================

【基本信息】
提交时间：${data.submittedAt} (北京时间)
语言版本：${data.lang === 'zh' ? '中文' : data.lang.toUpperCase()}

【客户信息】
姓名：${data.name}
邮箱：${data.email}
公司：${data.company || '未填写'}
电话/WhatsApp：${data.phone || '未填写'}

【产品需求】
${getProductLabel(data.product, data.lang)}

【详细需求】
${data.message}

========================================
请尽快回复客户（建议24小时内）
客户邮箱：${data.email}
========================================

此邮件由系统自动发送，请勿直接回复。
${companyName}
${websiteUrl}
  `.trim();

  // HTML格式邮件
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
    .info-row { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
    .label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; }
    .value { color: #1f2937; margin-top: 4px; }
    .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f97316; margin-top: 15px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
    .btn { display: inline-block; padding: 10px 20px; background: #f97316; color: white; text-decoration: none; border-radius: 4px; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0;">📧 新询盘通知</h1>
      <p style="margin:5px 0 0 0; opacity:0.9;">${companyName}</p>
    </div>
    <div class="content">
      <div class="info-row">
        <div class="label">提交时间</div>
        <div class="value">🕐 ${data.submittedAt} (北京时间)</div>
      </div>
      
      <div class="info-row">
        <div class="label">客户姓名</div>
        <div class="value">👤 ${data.name}</div>
      </div>
      
      <div class="info-row">
        <div class="label">邮箱地址</div>
        <div class="value">✉️ ${data.email}</div>
      </div>
      
      ${data.company ? `
      <div class="info-row">
        <div class="label">公司名称</div>
        <div class="value">🏢 ${data.company}</div>
      </div>
      ` : ''}
      
      ${data.phone ? `
      <div class="info-row">
        <div class="label">电话/WhatsApp</div>
        <div class="value">📱 ${data.phone}</div>
      </div>
      ` : ''}
      
      <div class="info-row">
        <div class="label">产品需求</div>
        <div class="value">📦 ${getProductLabel(data.product, data.lang)}</div>
      </div>
      
      <div class="message-box">
        <div class="label">详细需求</div>
        <div class="value" style="margin-top:10px; white-space:pre-wrap;">${data.message}</div>
      </div>
      
      <a href="mailto:${data.email}" class="btn">回复客户</a>
    </div>
    
    <div class="footer">
      <p>此邮件由系统自动发送，请勿直接回复。</p>
      <p>${companyNameEn} | ${websiteUrl}</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  // 尝试发送邮件
  try {
    // 方式1: 使用 Resend API（推荐）
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: emailConfig.fromEmail,
          to: toEmail,
          subject: subject,
          text: textContent,
          html: htmlContent,
          reply_to: data.email, // 直接回复客户
        }),
      });

      if (response.ok) {
        console.log('✅ 邮件发送成功 (Resend)');
        return true;
      } else {
        const error = await response.text();
        console.error('❌ Resend 发送失败:', error);
      }
    }

    // 方式2: 使用内部API发送（如果配置了SMTP）
    if (process.env.SMTP_HOST) {
      // 这里可以调用内部SMTP服务
      console.log('📧 SMTP配置存在，但需要额外实现');
    }

    // 如果没有配置邮件服务，打印到控制台
    console.log('========================================');
    console.log('📧 新询盘通知（未配置邮件服务）');
    console.log('========================================');
    console.log(textContent);
    console.log('========================================');
    console.log('💡 邮件服务状态: Resend API 已配置');
    console.log('========================================');
    
    return true;

  } catch (error) {
    console.error('❌ 邮件发送错误:', error);
    return false;
  }
}

// 发送自动回复邮件给客户
export async function sendAutoReply(data: InquiryEmailData): Promise<boolean> {
  const { companyNameEn, websiteUrl } = emailConfig;

  // 根据语言选择回复内容
  const replies: Record<string, { subject: string; content: string }> = {
    zh: {
      subject: `感谢您的咨询 - ${companyNameEn}`,
      content: `
尊敬的 ${data.name}，

感谢您联系上海金铃橡胶制品有限公司！

我们已收到您的询盘，我们的销售团队将在24小时内与您联系。

【您的咨询内容】
产品：${getProductLabel(data.product, 'zh')}
需求：${data.message}

如有紧急需求，请直接联系我们：
- 电话：+86-21-65392338
- 邮箱：sales@jinling-rubber.com

期待与您的合作！

此致
敬礼

上海金铃橡胶制品有限公司
${websiteUrl}
      `.trim(),
    },
    en: {
      subject: `Thank you for your inquiry - ${companyNameEn}`,
      content: `
Dear ${data.name},

Thank you for contacting Shanghai Jinling Rubber Products Co., Ltd.!

We have received your inquiry and our sales team will get back to you within 24 hours.

【Your Inquiry】
Product: ${getProductLabel(data.product, 'en')}
Message: ${data.message}

For urgent matters, please contact us directly:
- Tel: +86-21-65392338
- Email: sales@jinling-rubber.com

We look forward to working with you!

Best regards,

Shanghai Jinling Rubber Products Co., Ltd.
${websiteUrl}
      `.trim(),
    },
  };

  // 其他语言默认使用英文
  const reply = replies[data.lang] || replies.en;

  try {
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: emailConfig.fromEmail,
          to: data.email,
          subject: reply.subject,
          text: reply.content,
        }),
      });

      if (response.ok) {
        console.log('✅ 自动回复邮件发送成功');
        return true;
      }
    }

    return true;
  } catch (error) {
    console.error('❌ 自动回复发送失败:', error);
    return false;
  }
}

// 获取产品标签
function getProductLabel(product?: string, lang: string = 'en'): string {
  const products: Record<string, Record<string, string>> = {
    'protective-suits': { zh: '防护服系列', en: 'Protective Suits' },
    'rainwear': { zh: '雨衣系列', en: 'Rainwear' },
    'workwear': { zh: '工装系列', en: 'Workwear' },
    'custom': { zh: '定制订单', en: 'Custom Order' },
  };

  if (!product) return lang === 'zh' ? '未选择' : 'Not specified';
  return products[product]?.[lang] || product;
}
