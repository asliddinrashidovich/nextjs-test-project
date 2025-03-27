import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
    domains: ["fakestoreapi.com", "m.media-amazon.com"],
  },
};

export default nextConfig;
