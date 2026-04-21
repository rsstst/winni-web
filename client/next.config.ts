import type { NextConfig } from "next";

const apiHostname = process.env.STRAPI_MEDIA_URL
  ? new URL(process.env.STRAPI_MEDIA_URL).hostname
  : "localhost";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: apiHostname,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
