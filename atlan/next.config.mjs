/** @type {import('next').NextConfig} */
const nextConfig = {
  // Docker uses the standalone output for smaller production images.
  // Netlify's Next.js/OpenNext adapter works best when it controls the build output,
  // so we disable standalone output automatically during Netlify builds.
  ...(process.env.NETLIFY === 'true' ? {} : { output: 'standalone' }),
  reactStrictMode: true,
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
