import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import MedicalServicesPageContent from "./MedicalServicesPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "ru" ? "Медицинские услуги в Индии | India Med Service"
    : locale === "uz" ? "Hindistonda tibbiy xizmatlar | India Med Service"
    : locale === "kk" ? "Үндістандағы медициналық қызметтер | India Med Service"
    : "Medical Services in India | India Med Service";

  const description = locale === "ru"
    ? "Исследуйте медицинские услуги в Индии с India Med Service: кардиология, ортопедия, онкология, неврология и полная поддержка пациентов."
    : locale === "uz"
    ? "India Med Service bilan Hindistondagi tibbiy xizmatlarni o'rganing: kardiologiya, ortopediya, onkologiya, nevrologiya va to'liq bemor yordami."
    : locale === "kk"
    ? "India Med Service арқылы Үндістандағы медициналық қызметтерді зерттеңіз: кардиология, ортопедия, онкология, неврология және толық пациент қолдауы."
    : "Explore medical services in India with India Med Service: cardiology, orthopedics, oncology, neuroscience, and complete patient support.";

  return {
    title,
    description,
    alternates: { canonical: `https://indiamedservice.com/${locale}/medical-services` },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MedicalServicesPageContent locale={locale} />;
}
