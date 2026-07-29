import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import MedicalVisaAssistance from "./MedicalVisaAssistance";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ru" ? "Медицинская виза в Индию | Оформление"
      : locale === "uz" ? "Hindistonga tibbiy viza yordami"
      : locale === "kk" ? "Үндістанға медициналық виза алуға көмек"
      : "Medical Visa Assistance for India | India Med Service",
    description: locale === "ru"
      ? "Получите помощь в оформлении медицинской визы в Индию. Мы сопровождаем подготовку документов для лечения в Индии."
      : locale === "uz"
      ? "Hindistonga tibbiy viza olishda yordam oling. Hindistonda davolanish uchun hujjatlarni tayyorlashda ko'mak beramiz."
      : locale === "kk"
      ? "Үндістанға медициналық виза алуға көмек алыңыз. Біз Үндістанда емделу үшін құжаттарды дайындауға көмектесеміз."
      : "Get assistance with your medical visa documentation for India. We guide you through the process of preparing the required documents for treatment in India.",
    alternates: { canonical: `https://indiamedservice.com/${locale}/medical-visa-assistance` },
  };
}

export default async function MedicalVisaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MedicalVisaAssistance locale={locale} />;
}
