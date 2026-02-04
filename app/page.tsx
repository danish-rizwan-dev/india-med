import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specialities from "@/components/Specialities";
import WhyChooseUs from "@/components/whychooseus";
import ServiceAreaWrapper from "@/components/ServiceAreaWrapper"; // New wrapper

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      {/* This wrapper ensures the background flows seamlessly through both sections */}
      <ServiceAreaWrapper>
        <Specialities />
      </ServiceAreaWrapper>
    </>
  );
}