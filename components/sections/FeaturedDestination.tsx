"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const destinations = [
  { name: "India", icon: "/images/maps/india.svg" },
  { name: "United Kingdom", icon: "/images/maps/uk.svg" },
  { name: "Saudi Arabia", icon: "/images/maps/saudisvg.svg" },
  { name: "Thailand", icon: "/images/maps/thai.svg" },
  { name: "UAE", icon: "/images/maps/uae.svg" },
];

export default function FeaturedDestination() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false
  }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);

  return (
    <section id="destinations" className="relative w-full overflow-hidden bg-white flex flex-col items-center py-12 lg:py-0 lg:min-h-[750px] lg:justify-center">
      
      {/* ================= BACKGROUND ILLUSTRATION ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Mobile: Pushed up to start below heading | Desktop: Center */}
        <div className="relative w-full h-full flex items-center justify-center pt-[150px] lg:pt-0">
          <div className="relative w-full h-full max-h-[500px] lg:max-h-[573px] lg:max-w-[1552px]">
            <Image
              src="/images/backgrounds/featureddestinanotinbg.png"
              alt="World landmarks background illustration"
              fill
              sizes="100vw"
              className="object-cover object-bottom lg:object-contain lg:object-center  grayscale"
            />
          </div>
        </div>
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10 flex flex-col items-center mx-auto w-full max-w-[1400px]">
        
        {/* Header Block */}
        <header className="flex flex-col items-center mb-10 lg:mb-[60px] gap-6 lg:gap-[30px] text-center w-full mt-[-20px] lg:mt-[-240px] px-6">
          {/* Mobile Header Pill (252x88) */}
          <div 
            className="md:hidden flex items-center justify-center border-[2px] border-[#58595B] rounded-[50px] px-[40px] py-[10px]"
            style={{ width: "252px", height: "88px", gap: "10px" }}
          >
            <h2 className="text-[#58595B] font-bold text-[22px] font-montserrat leading-[1.2] text-center">
              Featured<br/>Destination
            </h2>
          </div>

          {/* Desktop Header Pill */}
          <div className="hidden md:flex items-center justify-center border-2 border-[#58595B] rounded-full px-8 lg:px-10 h-[60px] lg:h-[73px] w-fit bg-white/50 backdrop-blur-sm">
            <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] font-montserrat leading-none">
              Featured Destination
            </h2>
          </div>

          <p className="text-[#58595B] font-montserrat font-medium max-w-[340px] lg:max-w-[700px] text-[14px] lg:text-[18px] leading-[100%] text-center opacity-90 lg:opacity-100">
            Trusted by international patients worldwide, India delivers advanced 
            healthcare backed by expert doctors, modern facilities, and complete 
            care and support at every step of the treatment journey.
          </p>
        </header>

        {/* ================= DESTINATION CARDS ================= */}
        <div className="w-full mb-20 lg:mb-0">
          {/* Mobile/Tablet View (Carousel - Square 3 items) */}
          <div className="lg:hidden overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {destinations.map((dest, index) => (
                <article key={index} className="flex-[0_0_33.33%] min-w-0 px-2 flex justify-center">
                  <div 
                    className="relative flex flex-col items-center justify-center bg-white/80 backdrop-blur-xl border border-white rounded-[25px] shadow-lg shadow-gray-200/50 overflow-hidden"
                    style={{
                      width: "110px", 
                      height: "110px",
                      padding: "10px",
                      gap: "6px"
                    }}
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image 
                        src={dest.icon} 
                        alt={`${dest.name} flag`} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <span className="text-[#58595B] font-montserrat font-bold text-center text-[10px] px-1 leading-tight line-clamp-1">
                      {dest.name}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Desktop View (Standard Look) */}
          <div className="hidden lg:flex flex-row items-center justify-center gap-[30px] xl:gap-[48px] lg:mt-[100px]">
            {destinations.map((dest, index) => (
              <article
                key={index}
                className="relative flex flex-col items-center justify-center w-[180px] h-[189px] rounded-[35px] transition-all duration-500 hover:-translate-y-2 bg-white/40 backdrop-blur-md border border-white/50 shadow-md overflow-hidden"
              >
                <div className="relative w-[66px] h-[66px] mb-4">
                  <Image 
                    src={dest.icon} 
                    alt={`${dest.name} map`} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <span className="text-[#58595B] font-montserrat font-bold text-center text-[16px] px-2 leading-tight">
                  {dest.name}
                </span>
              </article>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}