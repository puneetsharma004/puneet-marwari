/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Enables a lean production build for Docker

    // Optional: Add this if you are using high-resolution images 
    // to avoid large memory usage in Docker
    images: {
        unoptimized: false,
    },
}

module.exports = nextConfig