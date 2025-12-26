import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed "output: export" to enable server-side features on Vercel
  // This allows dynamic sitemap, API routes, and SSR for Firebase content
};

export default nextConfig;
