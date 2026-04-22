import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── COMPRESSION ──────────────────────────────────────────────────
  compress: true,

  // ── IMAGE OPTIMISATION ───────────────────────────────────────────
  images: {
    // Modern formats: AVIF first (60% smaller than JPEG), then WebP
    formats: ["image/avif", "image/webp"],

    // Precise breakpoints matching the site's responsive design
    deviceSizes: [398, 640, 768, 1024, 1280, 1512, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],

    // Aggressive caching: 7 days browser cache for optimised images
    minimumCacheTTL: 604800,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },

  // ── CACHE-CONTROL HEADERS (CDN-friendly) ─────────────────────────
  async headers() {
    return [
      {
        // Static assets: 1 year immutable cache
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Images: 7-day cache
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Fonts: 1-year cache
        source: "/_next/static/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // HTML pages: revalidate frequently for SEO freshness
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;