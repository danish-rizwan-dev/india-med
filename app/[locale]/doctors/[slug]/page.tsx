import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import DoctorProfile from "@/components/doctors/DoctorProfile";
import { doctors } from "@/components/doctors/data";
import Footer from "@/components/layout/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://indiamedservice.com";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    return {};
  }

  const canonical = `${SITE_URL}/${locale}/doctors/${doctor.slug}`;

  return {
    title: `${doctor.name} | ${doctor.title}`,
    description: `${doctor.name} is a ${doctor.title.toLowerCase()} at ${doctor.hospital}, ${doctor.location}. Connect with India Med Service for appointment coordination.`,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/doctors/${doctor.slug}`,
        ru: `${SITE_URL}/ru/doctors/${doctor.slug}`,
        kk: `${SITE_URL}/kk/doctors/${doctor.slug}`,
        uz: `${SITE_URL}/uz/doctors/${doctor.slug}`,
      },
    },
    openGraph: {
      title: `${doctor.name} | ${doctor.title}`,
      description: doctor.summary,
      url: canonical,
      type: "profile",
      images: [
        {
          url: `${SITE_URL}${doctor.image}`,
          width: 1200,
          height: 630,
          alt: doctor.name,
        },
      ],
    },
  };
}

export default async function DoctorPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    notFound();
  }

  const relatedDoctors = doctors
    .filter((item) => item.slug !== doctor.slug)
    .sort((a, b) => {
      const score = (item: typeof doctors[number]) =>
        Number(item.department === doctor.department) * 4 +
        Number(item.location === doctor.location) * 2 +
        Number(item.hospital === doctor.hospital);

      return score(b) - score(a);
    })
    .slice(0, 4);

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.summary,
    medicalSpecialty: doctor.department,
    affiliation: doctor.hospital,
    image: `${SITE_URL}${doctor.image}`,
    url: `${SITE_URL}/${locale}/doctors/${doctor.slug}`,
    sameAs: doctor.profileUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: doctor.location,
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      <DoctorProfile doctor={doctor} relatedDoctors={relatedDoctors} />
      <Footer />
    </>
  );
}
