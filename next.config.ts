import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 14400,
  },
};

export default nextConfig;
