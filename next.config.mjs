/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com","i.postimg.cc"], // Aggiunti i domini per le immagini esterne
  },
};

export default nextConfig;
