import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ServiceBar from "@/components/sections/ServicesBar";
import {setRequestLocale} from 'next-intl/server';

// Dynamically import below-the-fold components for better performance
const IndiaMedNetwork = dynamic(() => import("@/components/sections/IndiaMedNetwork"));
const Specialities = dynamic(() => import("@/components/sections/Specialities"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const FeaturedDestination = dynamic(() => import("@/components/sections/FeaturedDestination"));
const ModelOfCare = dynamic(() => import("@/components/sections/ModelOfCare"));
const PatientStories = dynamic(() => import("@/components/sections/PatientStories"));
const BeyondBoundaries = dynamic(() => import("@/components/sections/BeyondBoundaries"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const OurOfficeSection = dynamic(() => import("@/components/sections/OurOfficeSection"));
const FounderSection = dynamic(() => import("@/components/sections/FounderSection"));
const ProcessFlow = dynamic(() => import("@/components/sections/ProcessFlow"));
const SharedGradientBg = dynamic(() => import("@/components/layout/SharedGradientBg"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-white">
      {/* Above the fold - Critical for LCP */}
      <Hero />
      <ServiceBar />
      <ProcessFlow />

      {/* Below the fold - Lazy loaded / Code split */}
      <Specialities />
      <IndiaMedNetwork />
      <WhyChooseUs />

      <FeaturedDestination />
      <ModelOfCare />
      <PatientStories />
      <BeyondBoundaries />
      <BlogSection />
      <FAQSection />
      <OurOfficeSection />
      <FounderSection />
      <Footer />
    </main>
  );
}
