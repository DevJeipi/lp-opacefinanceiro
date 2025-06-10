import type { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const withAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
    // Otimização de imagens
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // 1 ano
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Compressão
    compress: true,

    // Otimização de build
    swcMinify: true,

    // Headers de cache
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
            {
                source: '/(.*)\\.(jpg|jpeg|png|webp|avif|ico|svg)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },

    // Experimental features para performance
    experimental: {
        optimizeCss: true,
        craCompat: true,
        optimizePackageImports: ['lucide-react', 'react-icons'],
    },
}

export default withAnalyzer(nextConfig)
