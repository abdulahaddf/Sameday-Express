const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = withNextIntl(nextConfig);