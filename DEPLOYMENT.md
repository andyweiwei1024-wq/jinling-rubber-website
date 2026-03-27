# 上海金铃橡胶网站 - Vercel 部署指南

## 概述

本指南将帮助您将网站部署到 Vercel，获得免费的 HTTPS 域名和全球 CDN 加速。

---

## 第一步：创建 GitHub 仓库

### 1.1 登录 GitHub
访问 [github.com](https://github.com) 并登录您的账号

### 1.2 创建新仓库
1. 点击右上角 **+** 号，选择 **New repository**
2. 填写仓库信息：
   - **Repository name**: `jinling-rubber-website`
   - **Description**: `Shanghai Jinling Rubber Products Co., Ltd. Official Website`
   - **Visibility**: 选择 **Public**（公开，可以部署到 Vercel）
3. 点击 **Create repository**

---

## 第二步：上传代码到 GitHub

### 方法一：使用 GitHub Desktop（推荐新手）
1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 打开 GitHub Desktop，登录您的 GitHub 账号
3. 点击 **File** → **Add Local Repository**
4. 选择项目文件夹（当前沙箱中的 `/workspace/projects` 目录）
5. 点击 **Publish repository** 上传到 GitHub

### 方法二：使用 Git 命令行
```bash
# 在项目目录下执行
git init
git add .
git commit -m "Initial commit: Shanghai Jinling Rubber website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jinling-rubber-website.git
git push -u origin main
```

> **注意**：将 `YOUR_USERNAME` 替换为您的 GitHub 用户名

---

## 第三步：连接 Vercel

### 3.1 登录 Vercel
访问 [vercel.com](https://vercel.com) 并用 GitHub 账号登录

### 3.2 导入项目
1. 在 Vercel Dashboard 点击 **Add New...** → **Project**
2. 选择 **Import Git Repository**
3. 找到并选择 `jinling-rubber-website` 仓库
4. 点击 **Import**

### 3.3 配置项目
在配置页面：
- **Framework Preset**: Next.js（自动检测）
- **Root Directory**: `./`（默认）
- **Build Command**: `pnpm run build`（默认）
- **Output Directory**: `.next`（默认）

### 3.4 环境变量（如需要）
点击 **Environment Variables** 添加：
```
# 如果有数据库或其他服务，在这里添加环境变量
```

### 3.5 部署
点击 **Deploy** 按钮，等待部署完成（约 2-5 分钟）

---

## 第四步：获取免费域名

部署成功后，Vercel 会自动分配一个域名，格式为：
```
jinling-rubber-website.vercel.app
```

您可以：
1. 在 Vercel Dashboard → Settings → Domains 查看域名
2. 直接访问这个域名测试网站

---

## 第五步：绑定自定义域名（购买域名后）

### 5.1 购买域名
推荐平台：
- [Namecheap](https://www.namecheap.com) - 价格便宜，界面友好
- [Cloudflare](https://www.cloudflare.com/products/registrar/) - 成本价，最便宜
- [GoDaddy](https://www.godaddy.com) - 知名度高

建议域名：
- `jinlingrubber.com`
- `shjinling.com`
- `jinling-safety.com`

### 5.2 在 Vercel 添加域名
1. 进入项目 → Settings → Domains
2. 输入您购买的域名，如 `jinlingrubber.com`
3. 点击 **Add**

### 5.3 配置 DNS
在域名服务商处添加 DNS 记录：

**方式一：使用 A 记录**
```
类型: A
名称: @
值: 76.76.21.21
```

**方式二：使用 CNAME（推荐）**
```
类型: CNAME
名称: www
值: cname.vercel-dns.com
```

### 5.4 等待生效
DNS 生效通常需要几分钟到几小时，生效后：
- 访问 `https://jinlingrubber.com` 即可看到网站
- Vercel 自动提供免费 SSL 证书

---

## 常见问题

### Q: 部署失败怎么办？
检查 Vercel 的构建日志（Build Logs），常见问题：
1. 依赖安装失败 → 检查 `package.json`
2. 构建超时 → 检查是否有循环依赖

### Q: 如何更新网站？
1. 在本地修改代码
2. 提交到 GitHub：
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Vercel 会自动检测并重新部署

### Q: 如何查看访问统计？
Vercel Dashboard → Analytics 可以查看：
- 访问量
- 访问来源
- 页面性能

---

## 技术支持

如有问题，请联系开发团队。
