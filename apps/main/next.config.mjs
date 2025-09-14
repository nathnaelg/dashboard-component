/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@monorepo/ui-components',
    '@monorepo/utils',
    '@monorepo/feature-client-management',
    '@monorepo/feature-gaming-analytics'
  ],
  experimental: {
    externalDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
