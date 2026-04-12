"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const destinations = [
  { name: "India", icon: "/images/maps/india.svg" },
  { name: "United Kingdom", icon: "/images/maps/uk.svg" },
  { name: "Saudi Arab", icon: "/images/maps/saudisvg.svg" },
  { name: "Thailand", icon: "/images/maps/thai.svg" },
  { name: "UAE", icon: "/images/maps/uae.svg" },
];

export default function FeaturedDestination() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: "start", 
    containScroll: false 
  }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section id="destinations" className="relative w-full overflow-hidden bg-white lg:min-h-[750px] flex flex-col items-center justify-center py-12 lg:py-0 lg:mt-[-50px]">
      
      {/* ================= BACKGROUND ILLUSTRATION (Mobile & iPad Fix) ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* We use items-center on desktop, but items-end/pt on mobile to push it down */}
        <div className="relative w-full h-full flex items-start justify-center pt-[200px] md:pt-[250px] lg:pt-0 lg:items-center">
          <div className="relative w-full h-full max-h-[300px] md:max-h-[450px] lg:max-w-[1552px] lg:max-h-[573px] transition-all duration-700">
            <Image
              src="/images/backgrounds/featureddestinanotinbg.png"
              alt="World landmarks background illustration"
              fill
              sizes="100vw"
              className="object-contain opacity-100 lg:opacity-100 grayscale"
              priority
            />
          </div>
        </div>
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10 flex flex-col items-center mx-auto w-full max-w-[1200px]">
        
        {/* Header Block */}
        <header className="flex flex-col items-center mb-10 lg:mb-[60px] gap-6 lg:gap-[30px] text-center w-full lg:mt-[-120px] px-6">
          <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full px-8 lg:px-10 h-[60px] lg:h-[73px] w-fit bg-white/50 backdrop-blur-sm">
            <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] font-montserrat leading-none">
              Featured Destination
            </h2>
          </div>

          <p className="text-[#58595B] font-montserrat font-medium max-w-[340px] lg:max-w-[700px] text-[15px] lg:text-[18px] leading-relaxed">
            Discover leading medical destinations known for world-class
            treatment, modern hospitals, and seamless patient experience.
          </p>
        </header>

        {/* ================= DESTINATION CARDS ================= */}
        <div className="w-full">
          {/* Mobile/Tablet View (2 flags per view) */}
          <div className="lg:hidden overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {destinations.map((dest, index) => (
                <article key={index} className="flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0 px-2 flex justify-center">
                  <div 
                    className="relative flex flex-col items-center justify-center bg-white/60 backdrop-blur-md shadow-sm border border-white/80"
                    style={{
                      width: "100%", 
                      maxWidth: "150px",
                      height: "114px",
                      borderRadius: "21.15px",
                      padding: "18px 10px",
                      gap: "9px"
                    }}
                  >
                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                      <Image 
                        src={dest.icon} 
                        alt={`${dest.name} medical destination map`} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                    <span className="text-[#58595B] font-montserrat font-bold text-center text-[10px] md:text-sm px-1 leading-tight">
                      {dest.name}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Desktop View */}
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

        {/* Navigation Controls (Desktop) */}
        <nav aria-label="Destination navigation" className="hidden lg:flex justify-center items-center gap-4 mt-12 w-full">
          <button type="button" aria-label="Previous" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[#EE4423] shadow-md hover:bg-[#EE4423] hover:text-white transition-all active:scale-90">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button type="button" aria-label="Next" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[#EE4423] shadow-md hover:bg-[#EE4423] hover:text-white transition-all active:scale-90">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </nav>
      </div>
    </section>
  );
}