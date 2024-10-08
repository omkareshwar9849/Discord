/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
            },
        ],
        domains:[
            "utfs.io"
        ]
    },
    // just adding below line for testing will remove it later
    eslint: {
        ignoreDuringBuilds: true, // Disable ESLint during builds
    },
};

export default nextConfig;
