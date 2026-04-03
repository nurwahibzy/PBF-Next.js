/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Menambahkan konfigurasi untuk mengizinkan render gambar dari sumber eksternal
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // Untuk avatar GitHub
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Untuk avatar Google
      },
      // Menambahkan sumber gambar eksternal 
      {
        protocol: "https",
        hostname: "www.static-src.com", 
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", 
      },
    ],
  },
};

module.exports = nextConfig;