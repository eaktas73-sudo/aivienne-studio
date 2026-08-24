import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/eski-hatali-sayfa',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
