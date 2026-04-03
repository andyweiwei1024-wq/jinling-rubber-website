# Google Analytics 配置说明

## 概述

本网站已集成 Google Analytics 4 (GA4) 用于跟踪用户行为和网站性能数据。

## 快速开始

### 1. 获取 Google Analytics 测量 ID

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 登录您的 Google 账号
3. 点击"开始测量"或创建新的账号
4. 按照提示设置账号和属性
5. 在"数据流"中获取**测量 ID**（格式：`G-XXXXXXXXXX`）

### 2. 配置环境变量

在项目根目录创建 `.env.local` 文件，添加以下内容：

```bash
# Google Analytics Configuration
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

将 `G-XXXXXXXXXX` 替换为您在步骤 1 中获取的实际测量 ID。

### 3. 重启开发服务器

```bash
# 停止当前服务器（按 Ctrl+C）
# 重新启动
pnpm dev
```

## 已实现的功能

### 自动跟踪

- ✅ **页面浏览**：自动跟踪所有页面浏览
- ✅ **单页应用导航**：使用 Next.js 路由自动跟踪页面变化
- ✅ **用户会话**：跟踪用户会话数据

### 事件跟踪

- ✅ **询盘提交**：跟踪成功和失败的询盘提交
- ✅ **产品点击**：可以扩展跟踪产品详情页访问
- ✅ **自定义事件**：使用 `event()` 函数跟踪自定义事件

## 使用示例

### 跟踪自定义事件

```typescript
import { event } from '@/lib/ga';

// 跟踪按钮点击
event({
  action: 'button_click',
  category: 'Engagement',
  label: 'Get Quote Button',
});

// 跟踪表单提交
event({
  action: 'form_submit',
  category: 'Contact',
  label: 'Contact Form',
});
```

### 跟踪页面浏览

页面浏览已自动跟踪，但如果需要手动跟踪：

```typescript
import { pageview } from '@/lib/ga';

// 手动跟踪页面浏览
pageview('/products/protective-suit');
```

### 设置自定义维度

```typescript
import { setCustomDimension } from '@/lib/ga';

// 设置自定义维度
setCustomDimension('custom_dimension_1', 'premium_user');
```

## 可用的函数

### `pageview(url: string)`

跟踪页面浏览。

**参数：**
- `url`: 页面路径（例如：`/products/protective-suit`）

### `event(options)`

跟踪自定义事件。

**参数：**
- `action`: 事件动作（必需）
- `category`: 事件类别（必需）
- `label`: 事件标签（可选）
- `value`: 事件值（可选）

**示例：**
```typescript
event({
  action: 'purchase',
  category: 'Ecommerce',
  label: 'Product A',
  value: 99.99,
});
```

### `setCustomDimension(dimensionName: string, value: string)`

设置自定义维度。

**参数：**
- `dimensionName`: 维度名称
- `value`: 维度值

## 已跟踪的事件

### 询盘表单

- **事件动作**: `submit_inquiry`
- **事件类别**: `Inquiry`
- **事件标签**: 产品类别或 "General"
- **失败事件**: `submit_inquiry_failed`

## 隐私和数据保护

- Google Analytics 仅在生产环境使用（当配置了 `NEXT_PUBLIC_GA_MEASUREMENT_ID` 时）
- 数据通过 HTTPS 安全传输
- 遵守 Google Analytics 的数据隐私政策
- 符合 GDPR 要求（可在 GA 后台配置 IP 匿名化）

## 测试

### 验证集成

1. 在浏览器中打开开发者工具（F12）
2. 进入 Network 标签页
3. 刷新页面
4. 查找 `collect` 请求到 Google Analytics 服务器

### 使用 Google Analytics 实时报告

1. 访问 [Google Analytics 实时报告](https://analytics.google.com/)
2. 选择您的属性
3. 导航到"报告" > "实时" > "概览"
4. 访问您的网站，您应该能看到实时活动

### 调试模式

如需启用 Google Analytics 调试模式，在浏览器控制台运行：

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'debug_mode': true});
```

## 故障排查

### 问题：没有看到数据

**解决方案：**
1. 检查 `.env.local` 文件是否正确配置
2. 确认测量 ID 格式正确（`G-XXXXXXXXXX`）
3. 检查浏览器控制台是否有错误
4. 确认 Google Analytics 属性已正确设置
5. 等待 24-48 小时让数据在 GA 后台显示

### 问题：TypeScript 错误

**解决方案：**
```bash
# 重新安装依赖
pnpm install

# 重新运行类型检查
pnpm ts-check
```

## 扩展功能

### 跟踪外部链接点击

```typescript
const handleExternalLink = (url: string) => {
  event({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  });
  window.open(url, '_blank');
};
```

### 跟踪文件下载

```typescript
const handleDownload = (filename: string) => {
  event({
    action: 'download',
    category: 'File',
    label: filename,
  });
  // 下载逻辑
};
```

### 跟踪滚动深度

```typescript
useEffect(() => {
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );

    if (scrollPercent === 25 || scrollPercent === 50 || scrollPercent === 75 || scrollPercent === 100) {
      event({
        action: 'scroll',
        category: 'Engagement',
        label: `${scrollPercent}%`,
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## 相关资源

- [Google Analytics 4 官方文档](https://support.google.com/analytics/answer/9213390)
- [GA4 事件跟踪指南](https://support.google.com/analytics/answer/9234069)
- [Next.js Analytics 集成](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries/google-analytics)

## 支持

如有问题或需要帮助，请联系开发团队。
