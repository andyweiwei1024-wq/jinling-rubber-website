import { S3Storage } from "coze-coding-dev-sdk";
import * as fs from "fs";

const storage = new S3Storage({
  endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
  accessKey: "",
  secretKey: "",
  bucketName: process.env.COZE_BUCKET_NAME,
  region: "cn-beijing",
});

async function main() {
  // 获取所有产品图片keys
  const result = await storage.listFiles({ prefix: "products/" });
  const keys = result.keys;

  console.log("重新生成所有产品图片签名URL...\n");

  const updates: { key: string; url: string }[] = [];

  for (const key of keys) {
    try {
      const url = await storage.generatePresignedUrl({ key, expireTime: -1 });
      updates.push({ key, url });
      console.log("OK: " + key);
    } catch (e) {
      console.log("ERR: " + key + " - " + (e as Error).message);
    }
  }

  // 输出更新代码
  console.log("\n\n=== USER_UPLOAD_IMAGES 配置更新 ===\n");
  for (const u of updates) {
    const keyName = u.key.replace("products/", "").replace(/\//g, "-");
    console.log(`  "${keyName}": "${u.url}",`);
  }
}

main().catch(console.error);
