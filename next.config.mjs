import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '',
          pathname: '/**',
        },
      ],
    },
    // webpack(config) {
    //   Object.defineProperty(config, 'devtool', {
    //     get() {
    //       return 'source-map';
    //     },
    //     set() {},
    //   });
    //   return config;
    // },
    webpack: (config, { dev }) => {
      if (dev) {
        // set DEVTOOL in .env.local (e.g. "DEVTOOL=eval-cheap-source-map")
        // more options here: https://webpack.js.org/configuration/devtool/
        config.devtool = false || 'eval-source-map';
      }
      return config;
    },
  }),

);
