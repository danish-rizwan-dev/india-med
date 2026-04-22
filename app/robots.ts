import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/api/", "/_next/", "/under-construction"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${SEO_CONFIG.url}/sitemap.xml`,
    host: SEO_CONFIG.url,
  };
}
