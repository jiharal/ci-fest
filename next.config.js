/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/ci-fest',
    images: {
      unoptimized: true
    },
    assetPrefix: '/ci-fest'
  }
  
  module.exports = nextConfig