const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.wixstatic.com', 'i.ibb.co'],
  },
};

module.exports = withPlugins([
  withPWA({
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  }),
  nextConfig,
]);
