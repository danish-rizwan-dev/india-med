import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import DoctorsDirectory from "@/components/doctors/DoctorsDirectory";
import { doctors } from "@/components/doctors/data";
import Footer from "@/components/layout/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://indiamedservice.com";

const metadataByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "Best Doctors in India",
    description:
      "Explore India Med Service's curated list of doctors in India across cardiology, oncology, neurosurgery, gastroenterology, orthopaedics, urology, and liver transplant care.",
  },
  uz: {
    title: "Hindistondagi eng yaxshi shifokorlar",
    description:
      "India Med Service orqali Hindistondagi kardiologiya, onkologiya, neyroxirurgiya, gastroenterologiya, ortopediya, urologiya va transplantatsiya shifokorlarini ko'ring.",
  },
  ru: {
    title: "Лучшие врачи в Индии",
    description:
      "Подборка врачей India Med Service в Индии: кардиология, онкология, нейрохирургия, гастроэнтерология, ортопедия, урология и трансплантация печени.",
  },
  kk: {
    title: "Үндістандағы үздік дәрігерлер",
    description:
      "India Med Service ұсынатын Үндістандағы дәрігерлер: кардиология, онкология, нейрохирургия, гастроэнтерология, ортопедия, урология және бауыр трансплантациясы.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale.en;
  const canonical = `${SITE_URL}/${locale}/doctors`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "best doctors in India",
      "top Indian doctors",
      "India medical tourism doctors",
      "Max Hospital doctors",
      "Medanta doctors",
      "Fortis doctors",
    ],
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/doctors`,
        ru: `${SITE_URL}/ru/doctors`,
        kk: `${SITE_URL}/kk/doctors`,
        uz: `${SITE_URL}/uz/doctors`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${SITE_URL}${doctors[0].image}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
  };
}

export default async function DoctorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: metadataByLocale[locale]?.title || metadataByLocale.en.title,
    itemListElement: doctors.map((doctor, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: doctor.department,
        affiliation: doctor.hospital,
        image: `${SITE_URL}${doctor.image}`,
        url: `${SITE_URL}/${locale}/doctors/${doctor.slug}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: doctor.location,
          addressCountry: "IN",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      <DoctorsDirectory doctors={doctors} />
      <Footer />
    </>
  );
}
