import { NextRequest, NextResponse } from 'next/server';

// 测试邮件发送 API
export async function POST(request: NextRequest) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@send.jinlingrubber.com.cn';
    const INQUIRY_EMAIL = process.env.INQUIRY_EMAIL || 'weiwei@jinlingrubber.com.cn';

    // 检查 API Key
    if (!RESEND_API_KEY) {
      return NextResponse.json({
        success: false,
        error: 'RESEND_API_KEY 未配置',
        hint: '请在 .env.local 中添加 RESEND_API_KEY'
      }, { status: 500 });
    }

    console.log('📧 开始测试邮件发送...');
    console.log('📧 发件人:', FROM_EMAIL);
    console.log('📧 收件人:', INQUIRY_EMAIL);

    // 发送测试邮件
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: INQUIRY_EMAIL,
        subject: '【测试邮件】金铃橡胶网站邮件系统测试',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 20px; border-radius: 8px; }
              .content { background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px; }
              .success { color: #22c55e; font-size: 24px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✅ 邮件发送测试成功</h1>
              </div>
              <div class="content">
                <p class="success">🎉 恭喜！您的邮件系统配置正确！</p>
                <p><strong>测试时间：</strong>${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
                <p><strong>发件人：</strong>${FROM_EMAIL}</p>
                <p><strong>收件人：</strong>${INQUIRY_EMAIL}</p>
                <hr style="margin: 20px 0;">
                <p>这说明您的 Resend 邮件服务已经正常工作。</p>
                <p>接下来，当客户提交询盘时，您将收到通知邮件。</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
✅ 邮件发送测试成功！

测试时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
发件人：${FROM_EMAIL}
收件人：${INQUIRY_EMAIL}

这说明您的 Resend 邮件服务已经正常工作。
接下来，当客户提交询盘时，您将收到通知邮件。
        `.trim(),
      }),
    });

    const result = await response.json();
    console.log('📧 Resend API 响应:', response.status, result);

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: '测试邮件发送成功！请检查收件箱',
        data: {
          from: FROM_EMAIL,
          to: INQUIRY_EMAIL,
          messageId: result.id,
          timestamp: new Date().toISOString(),
        }
      });
    } else {
      return NextResponse.json({
        success: false,
        error: '邮件发送失败',
        details: result,
      }, { status: 500 });
    }

  } catch (error) {
    console.error('❌ 测试邮件发送错误:', error);
    return NextResponse.json({
      success: false,
      error: '邮件发送出错',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
