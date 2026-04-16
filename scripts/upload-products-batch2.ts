import { S3Storage } from "coze-coding-dev-sdk";
import * as fs from "fs";
import * as path from "path";
import https from "https";
import http from "http";

// 初始化存储
const storage = new S3Storage({
  endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
  accessKey: "",
  secretKey: "",
  bucketName: process.env.COZE_BUCKET_NAME,
  region: "cn-beijing",
});

// 下载图片到临时目录
async function downloadImage(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const protocol = url.startsWith("https") ? https : http;

    protocol.get(url, (response) => {
      // 处理重定向
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          downloadImage(redirectUrl, destPath).then(resolve).catch(reject);
          return;
        }
      }

      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// 图片URL和存储键映射
const imageMapping: { url: string; key: string; contentType: string }[] = [
  // JL-4-18
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F4-18%E6%AD%A3%E9%9D%A2.jpeg&nonce=ec41ba38-9fc9-4c74-9e2e-e218728d3755&project_id=7620626575964323874&sign=c325d97a11cc31ee216c3a5a8b065e491058967f86613289080b4c3ec65a53b0", key: "products/4-18-front.jpeg", contentType: "image/jpeg" },

  // JL-5-2
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F5-2%E4%BE%A7%E9%9D%A2.jpeg&nonce=253422ed-daa8-4482-9af9-3bfcc58132bd&project_id=7620626575964323874&sign=70b5fd90adac7e835beb24c3e63c8b53c5e6d43fd0e91fd9d208121189b3b4d5", key: "products/5-2-side.jpeg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F5-2%E6%AD%A3%E9%9D%A2.jpeg&nonce=baf97666-4290-4c8f-9c97-dbf6e0095478&project_id=7620626575964323874&sign=dbef2d61c3a59a72b4ea7c478989028d44736686fad1f9b13ea19b779d74150c", key: "products/5-2-front.jpeg", contentType: "image/jpeg" },

  // JL-5-5
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F5-5%E4%BE%A7%E9%9D%A2.jpg&nonce=dae7e999-19df-446a-bbd4-89a0634d6ae6&project_id=7620626575964323874&sign=90dde6001ce042157c3744fd2d15c3210f4c53daffdd200a4d15d2c397b28aff", key: "products/5-5-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F5-5%E6%AD%A3%E9%9D%A2.jpeg&nonce=e644c642-576d-45f3-a327-facb6905f85d&project_id=7620626575964323874&sign=5181a6ca58df4b8be241da3585df11b58c31c0fd2ee310fc571f63ba23002c29", key: "products/5-5-front.jpeg", contentType: "image/jpeg" },

  // JL-1610
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F1610%E4%BE%A7%E9%9D%A2.jpg&nonce=b9807c57-cebf-4527-835f-4ce2930eb53a&project_id=7620626575964323874&sign=bf079d3a752eddd46448f8711fc883c6ab93b00a86b6c979944c9c9c4e202e84", key: "products/1610-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F1610%E6%AD%A3%E9%9D%A2.jpg&nonce=7861bd1c-447d-4687-bb21-b0b2e875b34a&project_id=7620626575964323874&sign=cecad4fb741d2599b2f5d551ac1d0031e7184024e6f530cc39f96bf344e3916e", key: "products/1610-front.jpg", contentType: "image/jpeg" },

  // JL-3015
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3015%E4%BE%A7%E9%9D%A2.jpg&nonce=504ec618-ad14-42f9-b506-f662d366cda1&project_id=7620626575964323874&sign=c5392fd223d2ceacac26f8d48921932d981d56ac5a76ebc93fde4c97662ca016", key: "products/3015-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3015%E6%AD%A3%E9%9D%A2.jpg&nonce=a5dd02fe-e6a6-433a-9dbe-9df9a0f815a4&project_id=7620626575964323874&sign=8a6559d3cd033724409dde8b9925ecda53ee24ab22edf66a1e1e894332787013", key: "products/3015-front.jpg", contentType: "image/jpeg" },

  // JL-3019
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3019%E4%BE%A7%E9%9D%A2.jpg&nonce=eb9f2a28-4c4c-4472-be5e-6200c2517e2b&project_id=7620626575964323874&sign=b87a9af3f2a14f18b60cd4b6ba1e8216d31d7167d66e0cba84962963f3927658", key: "products/3019-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3019%E6%AD%A3%E9%9D%A2.jpg&nonce=9ebd0db8-2e37-4efd-a3c2-4db8b24c4561&project_id=7620626575964323874&sign=b1d10f671a1af5e87c7066bc05b6ce9a74fca7321737e6bf3e266d70fe26097f", key: "products/3019-front.jpg", contentType: "image/jpeg" },

  // JL-3088
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3088%E4%BE%A7%E9%9D%A2.jpg&nonce=8285f4ee-f58a-4bf6-b560-824ef62324f5&project_id=7620626575964323874&sign=978cb1a2152df4ad68479c89e7bc4f61149ea35b5d1920cefbfc025aa7800ab2", key: "products/3088-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3088%E6%AD%A3%E9%9D%A2.jpg&nonce=61a7a8f8-f790-405b-98e5-c5388843f62a&project_id=7620626575964323874&sign=ef696698e906583a389038496fb9dceff6b14fe1727e090e22cb39204a3ac1ca", key: "products/3088-front.jpg", contentType: "image/jpeg" },

  // JL-3112
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3112%E4%BE%A7%E9%9D%A2.jpg&nonce=a23cabbf-08bd-45ef-b8bb-55babb38271e&project_id=7620626575964323874&sign=4bba100e870187f2d16b43c94cc3878100ef547b71e0f956ce9f0a70811f93d8", key: "products/3112-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3112%E6%AD%A3%E9%9D%A2.jpg&nonce=c05ee7d2-1c48-4143-9bb6-fe818490d88b&project_id=7620626575964323874&sign=4d69b143f5353af31e29c0350a6789aa54425533fc1932c0c78115d878508610", key: "products/3112-front.jpg", contentType: "image/jpeg" },

  // JL-3113
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3113%E4%BE%A7%E9%9D%A2.jpg&nonce=272fb5fb-a956-419e-93dd-bbc5492864cf&project_id=7620626575964323874&sign=a15b6bed3a62e8d3342c477bbed76931ca9783cd5a2e3d70fb37e20d75a10e20", key: "products/3113-side.jpg", contentType: "image/jpeg" },
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3113%E6%AD%A3%E9%9D%A2.jpg&nonce=13b959d7-8de1-42bd-924d-fc0ccb9e3005&project_id=7620626575964323874&sign=8835b86f3af7536a173e001f07903279d56a28745776cd6811d271bc608b637a", key: "products/3113-front.jpg", contentType: "image/jpeg" },

  // JL-3116
  { url: "https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3116%E4%BE%A7%E9%9D%A2.jpeg&nonce=5f9bed45-4055-4b3f-88b8-35bc88a1ce03&project_id=7620626575964323874&sign=2f5e7c9c65036fb7653eea95cb5e3ffb78f7b8bd8a1afc614069d83211e40f1b", key: "products/3116-side.jpeg", contentType: "image/jpeg" },
];

const tempDir = "/tmp/product-images";
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

async function main() {
  console.log("开始上传产品图片...\n");

  const results: { product: string; type: string; url: string }[] = [];

  for (const item of imageMapping) {
    const tempPath = path.join(tempDir, path.basename(item.key));
    
    try {
      console.log(`下载: ${item.key}`);
      await downloadImage(item.url, tempPath);
      
      console.log(`上传到对象存储: ${item.key}`);
      const fileContent = fs.readFileSync(tempPath);
      const fileKey = await storage.uploadFile({
        fileContent,
        fileName: item.key,
        contentType: item.contentType,
      });

      // 生成永久签名URL
      const url = await storage.generatePresignedUrl({
        key: fileKey,
        expireTime: -1, // 永久有效
      });

      // 提取产品型号和图片类型
      const match = item.key.match(/products\/(\d+-?\w*)-(\w+)\.(\w+)/);
      if (match) {
        const product = match[1].replace(/-(\d+)$/, '-$1'); // 保持原格式
        results.push({ product: `JL-${product}`, type: match[2], url });
      } else {
        results.push({ product: item.key, type: "unknown", url });
      }

      console.log(`成功: ${item.key}`);
      
      // 删除临时文件
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
