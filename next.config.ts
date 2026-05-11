import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);

const nextConfig: NextConfig = {
  // ── COMPRESSION ──────────────────────────────────────────────────
  compress: true,

  // ── IMAGE OPTIMISATION ───────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [398, 640, 768, 1024, 1280, 1512, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
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

  // ── 301 REDIRECTS (fix broken internal links / 404s) ─────────────
  async redirects() {
    return [
      // Unbuilt pages → nearest live parent
      { source: "/services", destination: "/speciality", permanent: true },
      { source: "/services/:slug*", destination: "/speciality", permanent: true },
      { source: "/contact", destination: "/#beyond-boundaries", permanent: false },
      { source: "/appointment", destination: "/#beyond-boundaries", permanent: false },
      { source: "/about", destination: "/", permanent: false },
      // Blog posts → under-construction until real pages are built
      { source: "/blog/:slug*", destination: "/under-construction", permanent: false },
      // Trailing slash normalisation
      { source: "/:path+/", destination: "/:path+", permanent: true },
    ];
  },

  // ── CACHE-CONTROL HEADERS (CDN-friendly) ─────────────────────────
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
      {
        source: "/_next/static/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
