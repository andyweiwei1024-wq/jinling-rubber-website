import { NextRequest, NextResponse } from 'next/server';

// 在服务端加载环境变量
if (typeof process !== 'undefined') {
  try {
    // 尝试加载 dotenv
    const dotenv = require('dotenv');
    const path = require('path');
    const envPath = path.join(process.cwd(), '.env.local');
    dotenv.config({ path: envPath });
    console.log('📧 环境变量加载状态:', process.env.RESEND_API_KEY ? 'RESEND_API_KEY 已设置' : 'RESEND_API_KEY 未设置');
  } catch (e) {
    console.log('📧 dotenv 加载失败，使用默认环境变量');
  }
}

import { sendInquiryNotification, sendAutoReply } from '@/lib/email/service';

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

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
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

    // 构建询盘数据
    const inquiryData = {
      name,
      email,
      company,
      phone,
      product,
      message,
      lang: lang || 'en',
      submittedAt: timeStr,
    };

    // 发送通知邮件给您（不会显示在网页上）
    const notificationSent = await sendInquiryNotification(inquiryData);
    
    // 发送自动回复邮件给客户
    const autoReplySent = await sendAutoReply(inquiryData);

    console.log('========================================');
    console.log('📧 询盘提交成功');
    console.log('========================================');
    console.log('客户:', name, '<', email, '>');
    console.log('时间:', timeStr);
    console.log('通知邮件:', notificationSent ? '已发送' : '未配置邮件服务');
    console.log('自动回复:', autoReplySent ? '已发送' : '未配置邮件服务');
    console.log('========================================');

    // 返回成功响应
    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: {
        name,
        email,
        submittedAt: timeStr,
        notificationSent,
        autoReplySent,
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

// 获取询盘列表（管理员用）- 需要添加验证
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Admin endpoint - requires authentication',
    hint: '询盘记录可通过邮件通知接收，或配置数据库存储后查询'
  });
}
