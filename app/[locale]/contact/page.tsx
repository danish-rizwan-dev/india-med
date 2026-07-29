import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ContactPageContent from "./ContactPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Contact India Med Service | Medical Tourism Assistance",
    description:
      "Contact India Med Service for affordable medical treatment in India. Get a free consultation, treatment cost estimate, and complete visa & travel support.",
    alternates: { canonical: `https://indiamedservice.com/${locale}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageContent locale={locale} />;
}
