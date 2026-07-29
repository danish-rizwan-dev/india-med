import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import TreatmentCostForm from "./TreatmentCostForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ru" ? "Оценка стоимости лечения в Индии"
      : locale === "uz" ? "Hindistonda davolanish narxini baholash"
      : locale === "kk" ? "Үндістанда емдеу құнын бағалау"
      : "Treatment Cost Estimate in India | India Med Service",
    description: locale === "ru"
      ? "Получите бесплатную оценку стоимости лечения в Индии. Наши координаторы свяжутся с вами в течение 24 часов."
      : locale === "uz"
      ? "Hindistonda davolanish narxining bepul bahosini oling. Koordinatorlarimiz 24 soat ichida siz bilan bog'lanadi."
      : locale === "kk"
      ? "Үндістанда емдеу құнының тегін бағасын алыңыз. Үйлестірушілеріміз 24 сағат ішінде сізге хабарласады."
      : "Get a free treatment cost estimate in India. Our medical coordinators will contact you within 24 hours.",
    alternates: { canonical: `https://indiamedservice.com/${locale}/treatment-cost-estimate` },
  };
}

export default async function TreatmentCostEstimatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TreatmentCostForm locale={locale} />;
}
