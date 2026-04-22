import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo.config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only include pages that actually exist in the app directory
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/speciality", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ].map((route) => ({
    url: `${SEO_CONFIG.url}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency as "daily" | "weekly",
    priority: route.priority,
  }));

  return routes;
}

