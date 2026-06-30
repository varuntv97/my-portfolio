/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      // The portfolio moved from /projects to /portfolio.
      { source: "/projects", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
