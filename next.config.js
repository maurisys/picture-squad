/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["ps.maurisys.com"]
    }
}

module.exports = nextConfig
