import dynamic from "next/dynamic";
import Hero from "@/components/homepage/Hero";
import ServiceBar from "@/components/homepage/ServicesBar";
import {setRequestLocale} from 'next-intl/server';

// Dynamically import below-the-fold components for better performance
const IndiaMedNetwork = dynamic(() => import("@/components/homepage/IndiaMedNetwork"));
const Specialities = dynamic(() => import("@/components/homepage/Specialities"));
const WhyChooseUs = dynamic(() => import("@/components/homepage/WhyChooseUs"));
const FeaturedDestination = dynamic(() => import("@/components/homepage/FeaturedDestination"));
const ModelOfCare = dynamic(() => import("@/components/homepage/ModelOfCare"));
const PatientStories = dynamic(() => import("@/components/homepage/PatientStories"));
const BeyondBoundaries = dynamic(() => import("@/components/homepage/BeyondBoundaries"));
const BlogSection = dynamic(() => import("@/components/homepage/BlogSection"));
const FAQSection = dynamic(() => import("@/components/homepage/FAQSection"));
const OurOfficeSection = dynamic(() => import("@/components/homepage/OurOfficeSection"));
const FounderSection = dynamic(() => import("@/components/homepage/FounderSection"));
const ProcessFlow = dynamic(() => import("@/components/homepage/ProcessFlow"));
const EnquirySection = dynamic(() => import("@/components/homepage/EnquirySection"));
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
      <EnquirySection />
      <Footer />
    </main>
  );
}
