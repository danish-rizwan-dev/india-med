import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import FeaturedDestination from "@/components/FeaturedDestination";
import ServiceBar from "@/components/ServicesBar";
import ServicesSection from "@/components/ServiceSection";
import IndiaMedNetwork from "@/components/IndiaMedNetwork";
import PatientStories from "@/components/PatientStories";
import BeyondBoundaries from "@/components/BeyondBoundries";
import BlogSection from "@/components/BlogsSection";
import FAQSection from "@/components/FaqsSection";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/whychooseus";
import SharedGradientBg from "@/components/SharedGradientBg";

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
      <ServicesSection />
      <PatientStories />
      <BeyondBoundaries />
      <BlogSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
