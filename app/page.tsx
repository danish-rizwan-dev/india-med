import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import FeaturedDestination from "@/components/FeaturedDestination";
import ModelOfCare from "@/components/ModelOfCare";
import ServiceBar from "@/components/ServicesBar";
import ServicesSection from "@/components/ServiceSection";
import IndiaMedNetwork from "@/components/IndiaMedNetwork";

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
    </>
  );
}
