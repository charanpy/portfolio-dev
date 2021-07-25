const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.wixstatic.com', 'i.ibb.co'],
  },
};
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx'],
//   nextConfig,
// });

module.exports = nextConfig;
