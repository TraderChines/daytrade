import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // assetPrefix and basePath are needed for GitHub Pages deployment
  assetPrefix: isProd ? '/daytrade/' : undefined,
  basePath: isProd ? '/daytrade' : undefined,
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
