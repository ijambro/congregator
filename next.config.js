/** @type {import('next').NextConfig} */
// const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
  // Cloudflare requires Next.js Edge API Routes to deploy as serverless Cloudflare Functions (Workers)
  // experimental: {
  //   runtime: "experimental-edge"
  // }

  // Attempt to deal with "optional" pg-native require from pg
  // webpack: config => {
  //   config.plugins.push(
  //     new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
  //   );
  //   return config;
  // }
};

module.exports = nextConfig;
