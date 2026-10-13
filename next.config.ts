import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Files in /public aren't fingerprinted, so use a week rather than
        // "immutable". If an image is replaced under the same name, visitors
        // see the new one within a week (or sooner via revalidation).
        source: "/:path*\.(webp|png|jpg|jpeg|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
