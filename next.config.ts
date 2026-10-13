import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Files in /public aren't fingerprinted, so they are cached for a year as
        // immutable. When replacing an image, give the new file a new name
        // (e.g. WF-v2.webp) or visitors will keep seeing the old one.
        source: "/:path*\.(webp|png|jpg|jpeg|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
