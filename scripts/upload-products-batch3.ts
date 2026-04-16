import { S3Storage } from "coze-coding-dev-sdk";
import * as fs from "fs";
import * as path from "path";
import https from "https";

// 初始化存储
const storage = new S3Storage({
  endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
  bucketName: process.env.COZE_BUCKET_NAME,
  region: "cn-beijing",
});

// 下载图片
async function downloadImage(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          downloadImage(redirectUrl, destPath).then(resolve).catch(reject);
          return;
        }
      }
      response.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { fs.unlink(destPath, () => {}); reject(err); });
  });
}

// 图片URL和存储键映射
const imageMapping = [
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3116%E6%AD%A3%E9%9D%A2.jpeg&nonce=5b59b818-85a5-4e0a-8ffe-28a0f28130e8&project_id=7620626575964323874&sign=7e53cacb8099c559f790cd91887bb95417253727769dfa67dd520c990a4ce950", key: "products/3116-front.jpeg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3121%E4%BE%A7%E9%9D%A2.jpg&nonce=4fb6a1ea-94cb-49bb-b6c8-129f33fa5ec2&project_id=7620626575964323874&sign=0c759fa26c725fc510ac58a5a050d14fe9b4c3c7aa1154953f8cca4208b02d77", key: "products/3121-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3121%E6%AD%A3%E9%9D%A2.jpg&nonce=3676685c-9dc0-4057-8048-950ddffaa9c9&project_id=7620626575964323874&sign=79f39c0f249ba6e5daa63fd00dd74fdbfd6877015af41c7ee03a5d6515aa104e", key: "products/3121-front.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3218%E4%BE%A7%E9%9D%A2.jpg&nonce=7559cd6c-f40a-4419-b594-f81c8d1b5480&project_id=7620626575964323874&sign=132bd38362c9a80fbdc1d0208fbf5a9d3d38d0ffeb9ceb8458ef2f95240d1b1a", key: "products/3218-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3218%E6%AD%A3%E9%9D%A2.jpg&nonce=33cac6bc-8e35-48b0-a481-2d8004fc83ac&project_id=7620626575964323874&sign=b1409754804158e91ea106559b1685af4995f44f37c0d9d4d371c28c8cfe808e", key: "products/3218-front.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F5061%E4%BE%A7%E9%9D%A2.jpg&nonce=0f6c9840-dca1-4c6e-98cc-4e5aaff33c68&project_id=7620626575964323874&sign=fe11eb5deb81139cb2fbff728465b48628e3e79367ca26939628f4a4a67e7c68", key: "products/5061-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F5061%E6%AD%A3%E9%9D%A2.jpg&nonce=c93a5d92-5f05-4d4d-bd09-64f58c905250&project_id=7620626575964323874&sign=fe8c779f5d5b8d9d443b5dfce126899c81c7c19d48a97e3bc44663068d6f5bc7", key: "products/5061-front.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F6016%E4%BE%A7%E9%9D%A2.jpg&nonce=ca1f44ac-416b-43a5-8a60-a7961fb33357&project_id=7620626575964323874&sign=61deefb50a4ce6c5ddd13163fee5d848b04c76b43b358124c03f6f7968f4b14a", key: "products/6016-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F6016%E6%AD%A3%E9%9D%A2.jpg&nonce=02b93f36-2167-49fa-9b55-aea018580e68&project_id=7620626575964323874&sign=00d69f004d6db69a48f48ea39f5645f06fa2254d6d4ec81abebdeecc47badfc7", key: "products/6016-front.jpg", contentType: "image/jpeg" },
];

const tempDir = "/tmp/product-images-batch3";
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

async function main() {
  console.log("开始上传产品图片 (批次3)...\n");
  const results: { product: string; type: string; url: string }[] = [];

  for (const item of imageMapping) {
    const tempPath = path.join(tempDir, path.basename(item.key));
    try {
      console.log(`下载: ${item.key}`);
      await downloadImage(item.url, tempPath);
      
      console.log(`上传: ${item.key}`);
      const fileContent = fs.readFileSync(tempPath);
      const fileKey = await storage.uploadFile({
        fileContent,
        fileName: item.key,
        contentType: item.contentType,
      });

      const url = await storage.generatePresignedUrl({ key: fileKey, expireTime: -1 });

      const match = item.key.match(/products\/(\d+-\w*)-(\w+)\./);
      if (match) {
        results.push({ product: `JL-${match[1]}`, type: match[2], url });
      }

      console.log(`成功: ${item.key}`);
      fs.unlinkSync(tempPath);
    } catch (error) {
      console.error(`失败: ${item.key}`, error);
    }
  }

  console.log("\n=== 上传结果 ===");
  for (const r of results) {
    console.log(`${r.product} ${r.type}: ${r.url}`);
  }
}

main().catch(console.error);
