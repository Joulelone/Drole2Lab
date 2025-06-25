import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/accueil",
        permanent: true, // true pour SEO, false si c'est temporaire
      },
    ];
  },
};

export default nextConfig;
