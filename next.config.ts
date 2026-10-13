import type { NextConfig } from "next";

// GitHub Pages는 정적 파일만 서비스하므로 HTML로 내보낸다.
// 저장소 이름이 주소 경로에 붙기 때문에 배포 시 NEXT_PUBLIC_BASE_PATH로 전달받는다.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;
