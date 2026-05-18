import React from "react";
import { setRequestLocale } from "next-intl/server";
import SpecialityTemplate from "@/components/speciality/SpecialityTemplate";
import { notFound } from "next/navigation";
import { specialitiesData } from "@/components/speciality/data";

// Map of URL slugs to dynamic keys used in clinical data loaders
const slugToKeyMap: Record<string, keyof typeof specialitiesData> = {
  "cardiological-assistance": "cardio",
  "orthopedics": "ortho",
  "cancer-treatment": "cancer",
  "neuroscience": "neuro",
  "gastrosciences": "gastro",
  "liver-transplant": "liver",
  "lung-transplantation": "lungs",
  "obstetrics-and-gynecology": "gyno",
  "plastic-aesthetic-and-reconstructive-surgery": "plastic",
  "gynecology-and-gynecological-oncology": "gynoOnco",
  "rheumatology-and-immunology": "rheuma",
  "peripheral-vascular-and-endovascular-sciences": "vascular",
  "ophthalmology": "ophthalmology",
  "bone-marrow-transplant": "bmt",
  "endocrinology-and-diabetology": "endo",
  "kidney-transplant": "kidney",
  "respiratory-medicine-and-sleep-medicine": "respiratory",
  "ent-head-and-neck-surgery": "ent",
};

// Clinical names mapping for high-fidelity SEO meta titles
const metaTitleMap: Record<string, string> = {
  "cardiological-assistance": "Cardiac Care & Heart Surgery",
  "orthopedics": "Orthopedics & Joint Replacements",
  "cancer-treatment": "Oncology & Cancer Treatment",
  "neuroscience": "Neuroscience & Brain Surgery",
  "gastrosciences": "Gastroenterology & Hepatology",
  "liver-transplant": "Liver Transplant Surgery",
  "lung-transplantation": "Lung Transplantation",
  "obstetrics-and-gynecology": "Obstetrics & Gynecology",
  "plastic-aesthetic-and-reconstructive-surgery": "Plastic & Reconstructive Surgery",
  "gynecology-and-gynecological-oncology": "Gynecological Oncology Care",
  "rheumatology-and-immunology": "Rheumatology & Immunology",
  "peripheral-vascular-and-endovascular-sciences": "Vascular & Endovascular Sciences",
  "ophthalmology": "Ophthalmology & Laser Eye Treatments",
  "bone-marrow-transplant": "Bone Marrow Transplant",
  "endocrinology-and-diabetology": "Endocrinology & Diabetes",
  "kidney-transplant": "Kidney Transplant Surgery",
  "respiratory-medicine-and-sleep-medicine": "Respiratory & Sleep Medicine",
  "ent-head-and-neck-surgery": "ENT, Head & Neck Surgery",
};

export async function generateStaticParams() {
  const locales = ["en", "ru", "uz", "kk"];
  const slugs = Object.keys(slugToKeyMap);
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params;
  const specKey = slugToKeyMap[slug];
  if (!specKey) return {};

  const englishTitle = metaTitleMap[slug] || "Medical Speciality";
  
  const title = locale === "ru"
    ? `${englishTitle} в Индии`
    : locale === "uz"
    ? `${englishTitle} Hindistonda`
    : locale === "kk"
    ? `${englishTitle} Үндістанда`
    : `${englishTitle} in India`;

  return {
    title,
    description: `Get world-class treatment for ${englishTitle} in India. Access JCI accredited hospitals, top-tier clinical teams and premium surgical suites at highly affordable packages.`,
    alternates: { canonical: `https://indiamedservice.com/${locale}/speciality/${slug}` },
  };
}

export default async function SpecialityDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const specialityKey = slugToKeyMap[slug];
  if (!specialityKey) {
    notFound();
  }

  return <SpecialityTemplate specialityKey={specialityKey} locale={locale} />;
}
