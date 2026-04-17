import { NextRequest, NextResponse } from "next/server";
import { S3Storage } from "coze-coding-dev-sdk";
import sharp from "sharp";

// 图片压缩配置
const IMAGE_CONFIG = {
  maxWidth: 2000,      // 最大宽度
  maxHeight: 2000,     // 最大高度
  quality: 80,         // 输出质量 80%
  format: "webp" as const, // 转换为 WebP 格式（体积更小）
};

// 压缩图片
async function compressImage(buffer: Buffer, contentType: string): Promise<Buffer> {
  const image = sharp(buffer);
  const metadata = await image.metadata();

  // 如果图片已经小于最大尺寸，直接返回原图
  if (metadata.width && metadata.width <= IMAGE_CONFIG.maxWidth && 
      metadata.height && metadata.height <= IMAGE_CONFIG.maxHeight) {
    // 仅进行质量压缩，不改变尺寸
    if (contentType === "image/jpeg") {
      return await image.jpeg({ quality: IMAGE_CONFIG.quality }).toBuffer();
    } else if (contentType === "image/png") {
      return await image.png({ compressionLevel: 9, quality: IMAGE_CONFIG.quality }).toBuffer();
    }
  }

  // 调整尺寸并转换格式
  return await image
    .resize(IMAGE_CONFIG.maxWidth, IMAGE_CONFIG.maxHeight, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: IMAGE_CONFIG.quality })
    .toBuffer();
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "没有上传文件" },
        { status: 400 }
      );
    }

    // 验证文件类型
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { success: false, error: "只能上传图片文件" },
        { status: 400 }
      );
    }

    // 初始化存储
    const storage = new S3Storage({
      endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
      bucketName: process.env.COZE_BUCKET_NAME,
      region: "cn-beijing",
    });

    // 读取文件内容
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 压缩图片
    const originalSize = buffer.length;
    const compressedBuffer = await compressImage(buffer, file.type);
    const compressedSize = compressedBuffer.length;
    const compressionRatio = Math.round((1 - compressedSize / originalSize) * 100);

    console.log(`图片压缩: ${(originalSize / 1024).toFixed(1)}KB → ${(compressedSize / 1024).toFixed(1)}KB (减少 ${compressionRatio}%)`);

    // 生成文件名：时间戳.webp
    const timestamp = Date.now();
    const fileName = `uploads/${timestamp}.webp`;

    // 上传压缩后的文件
    const key = await storage.uploadFile({
      fileContent: compressedBuffer,
      fileName,
      contentType: "image/webp",
    });

    // 生成永久访问 URL
    const url = await storage.generatePresignedUrl({
      key,
      expireTime: -1,
    });

    return NextResponse.json({
      success: true,
      url,
      key,
      originalSize,
      compressedSize,
      compressionRatio,
    });
  } catch (error) {
    console.error("上传失败:", error);
    return NextResponse.json(
      { success: false, error: "上传失败" },
      { status: 500 }
    );
  }
}
