"use client";

import { useState } from "react";

export default function ImageUploadPage() {
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<Array<{ name: string; url: string; status: "success" | "error" }>>([]);
  const [dragOver, setDragOver] = useState(false);

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    setResult([]);

    const results: Array<{ name: string; url: string; status: "success" | "error" }> = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          results.push({
            name: file.name,
            url: data.url,
            status: "success",
          });
        } else {
          results.push({
            name: file.name,
            url: data.error || "上传失败",
            status: "error",
          });
        }
      } catch (error) {
        results.push({
          name: file.name,
          url: "上传出错",
          status: "error",
        });
      }
    }

    setResult(results);
    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleUpload(e.dataTransfer.files);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          图片上传工具
        </h1>

        {/* 上传区域 */}
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
            dragOver
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white hover:border-blue-400"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          <p className="text-lg text-gray-600 mb-4">
            拖拽图片到这里，或点击下方按钮选择
          </p>

          <input
            type="file"
            id="fileInput"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
          />

          <label
            htmlFor="fileInput"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
          >
            {uploading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                上传中...
              </>
            ) : (
              "选择图片"
            )}
          </label>
        </div>

        {/* 使用说明 */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">使用说明</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>选择或拖拽本地图片文件（支持多选）</li>
            <li>图片会自动上传到对象存储</li>
            <li>上传成功后，复制显示的 URL 链接</li>
            <li>将链接粘贴到产品数据中使用</li>
          </ol>
        </div>

        {/* 上传结果 */}
        {result.length > 0 && (
          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">上传结果</h2>
            <div className="space-y-4">
              {result.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    item.status === "success" ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-800">{item.name}</span>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        item.status === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status === "success" ? "成功" : "失败"}
                    </span>
                  </div>

                  {item.status === "success" && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value={item.url}
                        className="flex-1 px-3 py-2 text-sm border rounded bg-white"
                      />
                      <button
                        onClick={() => copyToClipboard(item.url)}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                      >
                        复制
                      </button>
                    </div>
                  )}

                  {item.status === "error" && (
                    <p className="text-red-600 text-sm">{item.url}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
