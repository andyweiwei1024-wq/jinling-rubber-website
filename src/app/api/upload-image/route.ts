import { NextRequest, NextResponse } from "next/server";
import { S3Storage } from "coze-coding-dev-sdk";

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

    // 生成文件名：原始名_时间戳.扩展名
    const timestamp = Date.now();
    const originalName = file.name.replace(/\.[^/.]+$/, ""); // 移除扩展名
    const extension = file.name.split(".").pop() || "jpg";
    const fileName = `uploads/${originalName}_${timestamp}.${extension}`;

    // 上传文件
    const key = await storage.uploadFile({
      fileContent: buffer,
      fileName,
      contentType: file.type,
    });

    // 生成永久访问 URL
    const url = await storage.generatePresignedUrl({
      key,
      expireTime: -1, // 永久有效
    });

    return NextResponse.json({
      success: true,
      url,
      key,
    });
  } catch (error) {
    console.error("上传失败:", error);
    return NextResponse.json(
      { success: false, error: "上传失败" },
      { status: 500 }
    );
  }
}
