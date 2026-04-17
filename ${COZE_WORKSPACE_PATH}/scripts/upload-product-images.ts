/**
 * 上传产品图片到对象存储
 */
import { S3Storage } from "coze-coding-dev-sdk";
import { readFileSync } from "fs";
import { join } from "path";

const storage = new S3Storage({
  endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
  bucketName: process.env.COZE_BUCKET_NAME,
  region: "cn-beijing",
});

// 产品图片映射
const images = [
  { productId: "3116", view: "main", file: "3116-main.jpeg" },
  { productId: "3116", view: "side", file: "3116-side.jpeg" },
  { productId: "3121", view: "main", file: "3121-main.jpg" },
  { productId: "3121", view: "side", file: "3121-side.jpg" },
  { productId: "3218", view: "main", file: "3218-main.jpg" },
  { productId: "3218", view: "side", file: "3218-side.jpg" },
  { productId: "5061", view: "main", file: "5061-main.jpg" },
  { productId: "5061", view: "side", file: "5061-side.jpg" },
  { productId: "6016", view: "main", file: "6016-main.jpg" },
  { productId: "6016", view: "side", file: "6016-side.jpg" },
];

async function uploadImages() {
  const results: Array<{
    productId: string;
    view: string;
    key: string;
    url: string;
  }> = [];

  for (const img of images) {
    try {
      const imagePath = join("/tmp/product_images", img.file);
      const fileBuffer = readFileSync(imagePath);

      const key = await storage.uploadFile({
        fileContent: fileBuffer,
        fileName: `products/${img.productId}/${img.view}.jpg`,
        contentType: "image/jpeg",
      });

      const url = await storage.generatePresignedUrl({
        key,
        expireTime: -1, // 永久有效
      });

      results.push({
        productId: img.productId,
        view: img.view,
        key,
        url,
      });

      console.log(`✅ ${img.productId}-${img.view}: ${url}`);
    } catch (error) {
      console.error(`❌ ${img.productId}-${img.view} 上传失败:`, error);
    }
  }

  // 输出更新 products.ts 所需的代码
  console.log("\n\n=== 更新 products.ts 的代码 ===");
  for (const r of results) {
    console.log(`  "${r.productId}-${r.view}": "${r.url}",`);
  }
}

uploadImages().catch(console.error);
