import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import HospitalProfile from "@/components/hospitals/HospitalProfile";
import { hospitals } from "@/components/hospitals/data";
import Footer from "@/components/layout/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://indiamedservice.com";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return hospitals.map((hospital) => ({ slug: hospital.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const hospital = hospitals.find((item) => item.slug === slug);

  if (!hospital) return {};

  const canonical = `${SITE_URL}/${locale}/hospitals/${hospital.slug}`;

  return {
    title: `${hospital.name} | Best Hospitals in India`,
    description: `${hospital.name} is a leading hospital in ${hospital.location}. Established in ${hospital.established}, it offers ${hospital.beds} beds across multiple specialities.`,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/hospitals/${hospital.slug}`,
        ru: `${SITE_URL}/ru/hospitals/${hospital.slug}`,
        kk: `${SITE_URL}/kk/hospitals/${hospital.slug}`,
        uz: `${SITE_URL}/uz/hospitals/${hospital.slug}`,
      },
    },
    openGraph: {
      title: `${hospital.name} | Best Hospitals in India`,
      description: hospital.summary,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${SITE_URL}${hospital.image}`,
          width: 1200,
          height: 630,
          alt: hospital.name,
        },
      ],
    },
  };
}

export default async function HospitalPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const hospital = hospitals.find((item) => item.slug === slug);

  if (!hospital) {
    notFound();
  }

  const relatedHospitals = hospitals
    .filter((item) => item.slug !== hospital.slug)
    .sort((a, b) => {
      const score = (item: typeof hospitals[number]) =>
        Number(item.city === hospital.city) * 3 +
        Number(item.location === hospital.location) * 2;

      return score(b) - score(a);
    })
    .slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospital.name,
    description: hospital.summary,
    image: `${SITE_URL}${hospital.image}`,
    url: `${SITE_URL}/${locale}/hospitals/${hospital.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: hospital.location,
      addressCountry: "IN",
    },
    foundingDate: hospital.established,
    numberOfBeds: hospital.beds,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HospitalProfile hospital={hospital} relatedHospitals={relatedHospitals} />
      <Footer />
    </>
  );
}
