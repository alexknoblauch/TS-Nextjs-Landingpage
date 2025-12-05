import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
    ],
  },
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,  
  },
    turbopack: {
    root: 'C:\\Users\\Alex\\Desktop\\Portfolio\\40. NEXTJS project'
  }
};

export default nextConfig;
