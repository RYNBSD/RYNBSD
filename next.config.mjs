import { createSecureHeaders } from "next-secure-headers";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  productionBrowserSourceMaps: true,
  crossOrigin: "anonymous",
  poweredByHeader: false,
  optimizeFonts: true,
  compress: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "development",
    },
  },
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders(),
      },
    ];
  },
};

export default nextConfig;
