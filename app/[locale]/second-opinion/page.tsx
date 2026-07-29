import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import SecondOpinion from "./SecondOpinion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ru" ? "Второе медицинское мнение в Индии"
      : locale === "uz" ? "Hindistonda ikkinchi tibbiy fikr"
      : locale === "kk" ? "Үндістанда екінші медициналық пікір"
      : "Second Medical Opinion in India | India Med Service",
    description: locale === "ru"
      ? "Получите экспертное второе мнение от ведущих специалистов Индии. Подтвердите диагноз и выберите оптимальный план лечения."
      : locale === "uz"
      ? "Hindistonning yetakchi mutaxassislaridan ekspert ikkinchi fikrni oling. Tashxisni tasdiqlang va optimal davolash rejasini tanlang."
      : locale === "kk"
      ? "Үндістанның жетекші мамандарынан сараптамалық екінші пікір алыңыз. Диагнозды растаңыз және оңтайлы емдеу жоспарын таңдаңыз."
      : "Get an expert second opinion from India's leading specialists. Confirm your diagnosis and choose the best treatment plan for your condition.",
    alternates: { canonical: `https://indiamedservice.com/${locale}/second-opinion` },
  };
}

export default async function SecondOpinionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SecondOpinion locale={locale} />;
}
