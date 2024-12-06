/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/ci-fest',
    assetPrefix: '/ci-fest/',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  };
  
  module.exports = nextConfig;