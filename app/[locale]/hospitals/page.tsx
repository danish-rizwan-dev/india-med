import type { Metadata } from "next";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import HospitalsDirectory from "@/components/hospitals/HospitalsDirectory";
import { hospitals } from "@/components/hospitals/data";
import Footer from "@/components/layout/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://indiamedservice.com";

const metadataByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "Best Hospitals in India",
    description:
      "Explore India Med Service's curated list of top hospitals in India. JCI & NABH accredited multispeciality hospitals across Delhi, Gurugram and more.",
  },
  uz: {
    title: "Hindistondagi eng yaxshi shifoxonalar",
    description:
      "India Med Service orqali Hindistondagi eng yaxshi shifoxonalar bilan tanishing. Delhi, Gurugram va boshqa shaharlardagi JCI va NABH akkreditatsiyasiga ega ko'p tarmoqli shifoxonalar.",
  },
  ru: {
    title: "Лучшие больницы в Индии",
    description:
      "Подборка лучших больниц Индии от India Med Service. Многопрофильные больницы с аккредитацией JCI и NABH в Дели, Гургаоне и других городах.",
  },
  kk: {
    title: "Үндістандағы үздік ауруханалар",
    description:
      "India Med Service ұсынатын Үндістандағы үздік ауруханалар. Дели, Гургаон және басқа қалалардағы JCI және NABH аккредитациясы бар көпбейінді ауруханалар.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale.en;
  const canonical = `${SITE_URL}/${locale}/hospitals`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "best hospitals in India",
      "top Indian hospitals",
      "JCI accredited hospitals India",
      "NABH accredited hospitals",
      "Max Hospital",
      "Medanta Hospital",
      "Fortis Hospital",
      "Apollo Hospital",
      "medical tourism India",
    ],
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/hospitals`,
        ru: `${SITE_URL}/ru/hospitals`,
        kk: `${SITE_URL}/kk/hospitals`,
        uz: `${SITE_URL}/uz/hospitals`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${SITE_URL}${hospitals[0].image}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
  };
}

export default async function HospitalsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: metadataByLocale[locale]?.title || metadataByLocale.en.title,
    itemListElement: hospitals.map((hospital, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
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
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#EE4423] border-t-transparent rounded-full animate-spin" /></div>}>
        <HospitalsDirectory hospitals={hospitals} />
      </Suspense>
      <Footer />
    </>
  );
}
