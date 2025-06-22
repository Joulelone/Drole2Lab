import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  /* config options here */
=======
  async redirects() {
    return [
      {
        source: "/",
        destination: "/accueil",
        permanent: true, // true pour SEO, false si c'est temporaire
      },
    ];
  },
>>>>>>> f0749c8 (Premier commit — ajout des fichiers du projet)
};

export default nextConfig;
