/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.flaticon.com", "cdn-icons-png.flaticon.com", "th.bing.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
