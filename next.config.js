/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  agentRules: false, // 停用 next dev 自動產生 AGENTS.md / CLAUDE.md
  images: {
    unoptimized: true, // static export 不支援 Image Optimization API
  },
  devIndicators: false,
};

module.exports = nextConfig;
