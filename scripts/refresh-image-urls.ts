// 重新检查并更新产品图片签名URL
import { S3Storage } from "coze-coding-dev-sdk";
import { writeFileSync } from "fs";

const storage = new S3Storage({
  endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
  bucketName: process.env.COZE_BUCKET_NAME,
  region: "cn-beijing",
});

// 需要检查和重新生成签名的图片文件
const filesToCheck = [
  // 这些之前返回 403
  { key: "products/3121-front_8ea87129.jpg", name: "3121-front" },
  { key: "products/3218-front_84b7b634.jpg", name: "3218-front" },
  { key: "products/5061-front_f98b8fba.jpg", name: "5061-front" },
  { key: "products/6016-front_e722849f.jpg", name: "6016-front" },
  { key: "products/3116-front_e063a53e.jpeg", name: "3116-front" },
  // 其他需要检查的
  { key: "products/1610-side_315fdfc1.jpg", name: "1610-side" },
  { key: "products/3015-side_5999ab72.jpg", name: "3015-side" },
  { key: "products/3019-side_7202d153.jpg", name: "3019-side" },
  { key: "products/3088-side_b97f403a.jpg", name: "3088-side" },
  { key: "products/3112-side_cb4d9258.jpg", name: "3112-side" },
  { key: "products/3113-side_6e7ce953.jpg", name: "3113-side" },
  { key: "products/3121-side_315fdfc1.jpg", name: "3121-side" },
  { key: "products/3218-side_5999ab72.jpg", name: "3218-side" },
  { key: "products/5061-side_7202d153.jpg", name: "5061-side" },
  { key: "products/6016-side_b97f403a.jpg", name: "6016-side" },
];

async function main() {
  const results: Record<string, { exists: boolean; url?: string; error?: string }> = {};
  
  for (const file of filesToCheck) {
    try {
      console.log(`检查: ${file.name}...`);
      const exists = await storage.fileExists({ fileKey: file.key });
      
      if (exists) {
        // 生成新的签名 URL (30天有效期)
        const url = await storage.generatePresignedUrl({ 
          key: file.key, 
          expireTime: 30 * 24 * 60 * 60 
        });
        console.log(`  ✅ 存在，生成新签名 URL`);
        results[file.name] = { exists: true, url };
      } else {
        console.log(`  ❌ 不存在`);
        results[file.name] = { exists: false };
      }
    } catch (err) {
      console.log(`  ❌ 错误: ${err}`);
      results[file.name] = { exists: false, error: String(err) };
    }
  }
  
  // 输出结果
  console.log("\n=== 检查结果 ===");
  const workingUrls: string[] = [];
  const brokenUrls: string[] = [];
  
  for (const [name, result] of Object.entries(results)) {
    if (result.exists && result.url) {
      workingUrls.push(`  '${name}': '${result.url}',`);
    } else {
      brokenUrls.push(`  '${name}': 需要重新上传`);
    }
  }
  
  console.log("\n✅ 正常工作的图片:");
  console.log(workingUrls.join("\n"));
  
  console.log("\n❌ 需要修复的图片:");
  console.log(brokenUrls.join("\n"));
  
  // 保存结果到文件
  const output = {
    timestamp: new Date().toISOString(),
    working: Object.fromEntries(
      Object.entries(results)
        .filter(([_, r]) => r.exists && r.url)
        .map(([k, r]) => [k, r.url])
    ),
    broken: Object.keys(results).filter(name => !results[name].exists),
  };
  
  writeFileSync("./image-check-result.json", JSON.stringify(output, null, 2));
  console.log("\n结果已保存到 image-check-result.json");
}

main().catch(console.error);
