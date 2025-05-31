/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    // Fast Refreshの安定性を向上
    forceSwcTransforms: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Use memory-based caching in development to avoid file system issues
    if (dev && !isServer) {
      config.cache = {
        type: 'memory'
      }
    }
    return config
  },
  // プロセス終了時のエラーを防ぐ
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;