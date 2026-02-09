import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import FeaturedDestination from "@/components/FeaturedDestination";
import ModelOfCare from "@/components/ModelOfCare";
import ServiceBar from "@/components/ServicesBar";
import ServicesSection from "@/components/ServiceSection";
import IndiaMedNetwork from "@/components/IndiaMedNetwork";
import PatientStories from "@/components/PatientStories";
import BeyondBoundaries from "@/components/BeyondBoundries";
import BlogSection from "@/components/BlogsSection";
import FAQSection from "@/components/FaqsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceBar />
      <Specialities />
      <FeaturedDestination />
      <ModelOfCare />
      <ServicesSection />
      <IndiaMedNetwork />
      <PatientStories />
      <BeyondBoundaries />
      <BlogSection />
      <FAQSection />
      <Footer />
    </>
  );
}
