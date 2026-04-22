import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "daily" },
    { path: "/speciality", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/appointment", priority: 0.7, changeFrequency: "monthly" },
    // Specialty dynamic routes could be added here if fetched from a DB
    { path: "/specialities/cardiac-care", priority: 0.8, changeFrequency: "weekly" },
    { path: "/specialities/neurosciences", priority: 0.8, changeFrequency: "weekly" },
    { path: "/specialities/cancer-care", priority: 0.8, changeFrequency: "weekly" },
  ].map((route) => ({
    url: `${SEO_CONFIG.url}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency as "daily" | "weekly" | "monthly",
    priority: route.priority,
  }));

  return routes;
}

