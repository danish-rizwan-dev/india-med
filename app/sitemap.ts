import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo.config";
import { doctors } from "@/components/doctors/data";

// Map of URL slugs
const slugs = [
  "cardiological-assistance",
  "orthopedics",
  "cancer-treatment",
  "neuroscience",
  "gastrosciences",
  "liver-transplant",
  "lung-transplantation",
  "obstetrics-and-gynecology",
  "plastic-aesthetic-and-reconstructive-surgery",
  "gynecology-and-gynecological-oncology",
  "rheumatology-and-immunology",
  "peripheral-vascular-and-endovascular-sciences",
  "ophthalmology",
  "bone-marrow-transplant",
  "endocrinology-and-diabetology",
  "kidney-transplant",
  "respiratory-medicine-and-sleep-medicine",
  "ent-head-and-neck-surgery",
];

const locales = ["en", "ru", "kk", "uz"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const currentDate = new Date().toISOString();

  // 1. Core static routes across all locales
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/speciality", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/doctors", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/terms-and-conditions", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${SEO_CONFIG.url}/${locale}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  // 2. Dynamic specialty detail pages across all locales
  for (const locale of locales) {
    for (const slug of slugs) {
      entries.push({
        url: `${SEO_CONFIG.url}/${locale}/speciality/${slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }
  }

  // 3. Doctor profile pages across all locales
  for (const locale of locales) {
    for (const doctor of doctors) {
      entries.push({
        url: `${SEO_CONFIG.url}/${locale}/doctors/${doctor.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.75,
      });
    }
  }

  return entries;
}
