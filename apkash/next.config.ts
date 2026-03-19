import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['react-use-websocket'], // Add the problematic package here
};

export default nextConfig;
