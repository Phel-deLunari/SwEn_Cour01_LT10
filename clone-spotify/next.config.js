
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skanoxtwagvragtretkd.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;