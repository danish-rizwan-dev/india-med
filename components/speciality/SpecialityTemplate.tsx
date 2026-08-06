
import { useTranslations } from "next-intl";
import { specialitiesData } from "./data";
import SpecialityFAQCustom from "./sections/SpecialityFAQCustom";
import RelatedDoctorsCustom from "./sections/RelatedDoctorsCustom";
import RelatedHospitalsCustom from "./sections/RelatedHospitalsCustom";
import PatientVideos from "./sections/PatientVideos";
import WhyChooseIndiaMedSection from "./sections/WhyChooseIndiaMedSection";
import ProceduresDirectoryCustom from "./sections/ProceduresDirectoryCustom";
import Footer from "@/components/layout/Footer";

// Section Component Imports
import SpecialityHero from "./sections/SpecialityHero";
import IntroSection from "./sections/IntroSection";
import KeyConditions from "./sections/KeyConditions";
import AdvancedTechniques from "./sections/AdvancedTechniques";
import WhyChooseUs from "../homepage/WhyChooseUs";

interface SpecialityTemplateProps {
  specialityKey: keyof typeof specialitiesData;
  locale: string;
}

export default function SpecialityTemplate({
  specialityKey,
  locale
}: SpecialityTemplateProps) {
  const data = specialitiesData[specialityKey];
  const tFaq = useTranslations('FAQ');

  // Safe localization helper with fallback to English if the current locale is unsupported
  const specLang = data.translations[locale] || data.translations["en"];

  // Standard FAQs matching the speciality with clean custom fallbacks
  const rawFaqs = specLang.faq_items && specLang.faq_items.length > 0 ? specLang.faq_items : data.faqItems;
  const faqItems = (rawFaqs || []).map((item: any) => ({
    question: item.q || item.question,
    answer: item.a || item.answer
  }));

  const conditionsToUse = specLang.conditions && specLang.conditions.length > 0 ? specLang.conditions : data.conditions;
  const proceduresToUse = specLang.procedures_list && specLang.procedures_list.length > 0 ? specLang.procedures_list : data.procedures;
  const doctorsToUse = specLang.doctors && specLang.doctors.length > 0 ? specLang.doctors : data.doctors;
  const hospitalsToUse = specLang.hospitals && specLang.hospitals.length > 0 ? specLang.hospitals : data.hospitals;

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#414042]">

      {/* ─── 1. HERO SECTION ─── */}
      <SpecialityHero data={data} specLang={specLang} locale={locale} specialityKey={specialityKey} />

      {/* ─── 2. INTRO SECTION ─── */}
      <IntroSection data={data} specLang={specLang} locale={locale} specialityKey={specialityKey} />

      {/* ─── 3. KEY CONDITIONS MANAGED ─── */}
      <KeyConditions conditions={conditionsToUse} specLang={specLang} slug={data.slug || ""} />


      {/* ─── 5. ADVANCED TECHNIQUES SECTION ─── */}
      <AdvancedTechniques techniques={data.techniques} specLang={specLang} slug={data.slug || ""} />

      <WhyChooseIndiaMedSection specLang={specLang} />

      {/* ─── 5.6 FAQ ACCORDION (Custom Layout) ─── */}
      <SpecialityFAQCustom
        faqItems={faqItems}
      />

      {/* ─── 5.7 RELATED DOCTORS (Custom Layout) ─── */}
      <RelatedDoctorsCustom doctors={doctorsToUse} />

      {/* ─── 5.8 RELATED HOSPITALS (Custom Layout) ─── */}
      <RelatedHospitalsCustom hospitals={hospitalsToUse} />

      {/* ─── PATIENT VIDEOS ─── */}
      <PatientVideos videos={data.videos} />

      {/* ─── 5.5 WHY CHOOSE SECTION (Custom Layout) ─── */}
      <WhyChooseUs />
      {/* ─── 5.10 PROCEDURES DIRECTORY (Custom Layout) ─── */}
      <ProceduresDirectoryCustom procedures={proceduresToUse} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
