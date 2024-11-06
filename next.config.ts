import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/ProjectIxian/IXI-Labs-website' : '',
  assetPrefix: isProd ? '/ProjectIxian/IXI-Labs-website' : '',
};

export default withNextIntl(nextConfig);
