import { NextRequest, NextResponse } from 'next/server';

// 询盘提交API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, product, message, lang } = body;

    // 验证必填字段
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 获取当前时间（北京时间）
    const now = new Date();
    const beijingTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    const timeStr = beijingTime.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    // 产品类别映射
    const productMap: Record<string, { zh: string; en: string }> = {
      'protective-suits': { zh: '防护服系列', en: 'Protective Suits' },
      'rainwear': { zh: '雨衣系列', en: 'Rainwear' },
      'workwear': { zh: '工装系列', en: 'Workwear' },
      'custom': { zh: '定制订单', en: 'Custom Order' },
    };

    const productInfo = product ? (productMap[product] || { zh: product, en: product }) : { zh: '未选择', en: 'Not selected' };

    // 构建邮件内容
    const emailContent = `
========================================
新询盘通知 - 上海金铃橡胶制品有限公司
========================================

【基本信息】
提交时间：${timeStr} (北京时间)
语言版本：${lang || 'en'}

【客户信息】
姓名：${name}
邮箱：${email}
公司：${company || '未填写'}
电话/WhatsApp：${phone || '未填写'}

【产品需求】
${lang === 'zh' ? productInfo.zh : productInfo.en}

【详细需求】
${message}

========================================
请尽快回复客户（建议24小时内）
========================================
    `;

    // 在生产环境中，这里应该发送邮件
    // 可以使用 Resend、SendGrid、Nodemailer 等服务
    // 示例：
    // await sendEmail({
    //   to: 'sales@jinling-rubber.com',
    //   subject: `新询盘 - ${name} <${email}>`,
    //   text: emailContent,
    // });

    // 开发环境：打印到控制台
    console.log('========================================');
    console.log('📧 新询盘通知');
    console.log('========================================');
    console.log(emailContent);

    // 存储到数据库（可选）
    // 可以使用 Supabase、MongoDB 等存储询盘记录

    // 返回成功响应
    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: {
        name,
        email,
        submittedAt: timeStr,
      }
    });

  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// 获取询盘列表（管理员用）
export async function GET(request: NextRequest) {
  // 这里可以从数据库获取询盘列表
  // 需要添加管理员验证
  
  return NextResponse.json({
    message: 'Admin endpoint - requires authentication'
  });
}
