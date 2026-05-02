import { S3Storage } from "coze-coding-dev-sdk";
import * as fs from "fs";
import * as path from "path";

const storage = new S3Storage({
  endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
  accessKey: "",
  secretKey: "",
  bucketName: process.env.COZE_BUCKET_NAME,
  region: "cn-beijing",
});

async function main() {
  // 读取当前的 products.ts
  const productsPath = path.join(process.cwd(), "src/lib/products.ts");
  let content = fs.readFileSync(productsPath, "utf-8");

  // 提取所有图片URL的正则
  const urlRegex = /'(USER_UPLOAD_IMAGES)'|('[\w-]+-main':|')([\w-]+-(?:main|side|front)['"]:\s*')(https:\/\/[^']+)(')/g;

  let match;
  let updated = 0;
  const updates: { old: string; key: string; new: string }[] = [];

  // 找到所有需要更新的URL
  while ((match = urlRegex.exec(content)) !== null) {
    if (match[1]) {
      // 匹配到 'USER_UPLOAD_IMAGES'，跳过
      continue;
    }
    
    const keyMatch = match[0].match(/'([\w-]+-(?:main|side|front))':/);
    if (!keyMatch) continue;
    
    const imageKey = keyMatch[1];
    // 转换为存储路径: 1-1-main -> products/1-1-main_xxx.jpg
    // 需要从现有URL提取文件扩展名
    const oldUrl = match[4];
    const extMatch = oldUrl.match(/\.(\w+)\?/);
    const ext = extMatch ? extMatch[1] : "jpg";
    
    // 构建存储key（使用通配符前缀匹配）
    const storagePrefix = imageKey.includes("-") ? imageKey.split("-")[0] + "-" : "";
    const searchKey = `products/${storagePrefix}${imageKey.split("-")[1]}`;
    
    // 列出文件
    try {
      const result = await storage.listFiles({ prefix: searchKey });
      const matchingKey = result.keys.find((k: string) => k.includes(imageKey));
      
      if (matchingKey) {
        const newUrl = await storage.generatePresignedUrl({ key: matchingKey, expireTime: -1 });
        
        // 只在URL不同且旧URL即将过期时更新
        const oldSignTime = parseInt(oldUrl.match(/sign=(\d+)/)?.[1] || "0");
        const newSignTime = parseInt(newUrl.match(/sign=(\d+)/)?.[1] || "0");
        
        if (newSignTime > oldSignTime) {
          updates.push({ old: oldUrl, key: imageKey, new: newUrl });
        }
      }
    } catch (e) {
      console.log(`处理 ${imageKey} 失败:`, e);
    }
  }

  console.log(`\n找到 ${updates.length} 个需要更新的URL\n`);

  // 替换URL
  for (const u of updates) {
    const oldPattern = u.old.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    content = content.replace(new RegExp(oldPattern), u.new);
    console.log(`更新: ${u.key}`);
    updated++;
  }

  if (updated > 0) {
    fs.writeFileSync(productsPath, content);
    console.log(`\n已更新 ${updated} 个URL到 products.ts`);
  } else {
    console.log("\n没有需要更新的URL");
  }
}

main().catch(console.error);
