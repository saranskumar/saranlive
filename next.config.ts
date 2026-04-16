import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect www -> apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.saranskumar.live" }],
        destination: "https://saranskumar.live/:path*",
        permanent: true,
      },
      // Redirect Vercel preview URL -> apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "saranlive.vercel.app" }],
        destination: "https://saranskumar.live/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
