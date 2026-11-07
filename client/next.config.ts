import type { NextConfig } from "next";

const apiHostname = "localhost";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: apiHostname,
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
