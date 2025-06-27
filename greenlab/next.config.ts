const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
    ],
  },
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
