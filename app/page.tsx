import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specialities from "@/components/Specialities";
import FeaturedDestination from "@/components/FeaturedDestination";

export default function HomePage() {
  return (
    <>
      <div className="z-0">
        <Hero />
        <Specialities />
        <FeaturedDestination />
      </div>
    </>
  );
}
