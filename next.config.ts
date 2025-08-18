import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 This makes Next export static files
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next image optimization
  },
  trailingSlash: true, // Ensures compatibility with static hosting
  webpack: (config: any) => {
    // Handle PDF.js worker
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    
    // Copy PDF.js worker files
    config.module.rules.push({
      test: /pdf\.worker\.(min\.)?js/,
      type: 'asset/resource',
      generator: {
        filename: 'static/worker/[hash][ext][query]',
      },
    });

    return config;
  },
};

export default nextConfig;
