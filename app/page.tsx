import Hero from "@/components/sections/Hero";
import Specialities from "@/components/sections/Specialities";
import FeaturedDestination from "@/components/sections/FeaturedDestination";
import ServiceBar from "@/components/sections/ServicesBar";
import ServicesSection from "@/components/sections/ServiceSection";
import IndiaMedNetwork from "@/components/sections/IndiaMedNetwork";
import PatientStories from "@/components/sections/PatientStories";
import BeyondBoundaries from "@/components/sections/BeyondBoundaries";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ModelOfCare from "@/components/sections/ModelOfCare";
import SharedGradientBg from "@/components/layout/SharedGradientBg";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <ServiceBar />

      {/* This wrapper now handles all background logic for these three */}
      <SharedGradientBg>
        <IndiaMedNetwork />
        <Specialities />
        <WhyChooseUs />
      </SharedGradientBg>

    
      {/* 3. Outer Sections: Non-Gradient Layouts */}
      <FeaturedDestination />
      <ModelOfCare />
      <ServicesSection />
      <PatientStories />
      <BeyondBoundaries />
      <BlogSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
