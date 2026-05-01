"use client";

import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const reasons = [
  {
    title: "World-class Hospitals",
    description: "JCI & NABH accredited hospitals ensuring top global safety and care.",
    icon: "/images/sections/why-choose-us/hospital.svg",
  },
  {
    title: "Affordable Costs",
    description: "Up to 70–80% lower treatment costs compared to Western countries.",
    icon: "/images/sections/why-choose-us/costs.svg",
  },
  {
    title: "Expert Doctors",
    description: "Internationally trained specialists with years of proven expertise.",
    icon: "/images/sections/why-choose-us/expert-doctors.svg",
  },
  {
    title: "Complete Assistance",
    description: "End-to-end support: travel, visa, treatment, and recovery care.",
    icon: "/images/sections/why-choose-us/assistance.svg",
  },
];

export default function WhyChooseUs() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    containScroll: false 
  }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative z-10 w-full lg:mt-[-100px] overflow-hidden py-12 lg:py-0">

      <div
        className="relative flex flex-col items-center justify-center mx-auto lg:py-[120px] px-0 lg:px-0" // Changed px-6 to px-0 for mobile
        style={{ maxWidth: "1319px", fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:flex-row lg:justify-center lg:gap-[60px] xl:gap-[100px]">
          
          {/* ================= MOBILE/TABLET HEADER ================= */}
          <header className="flex flex-col items-center lg:hidden mb-12 px-6"> {/* Added px-6 here to keep text aligned */}
            <div 
              className="flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-6 px-8 py-4"
              style={{ width: "min(327px, 90vw)", height: "auto" }}
            >
              <h2 aria-hidden="true" className="text-[#58595B] font-bold text-2xl md:text-3xl leading-none">
                Why Choose Us?
              </h2>
            </div>
            <p className="text-[#58595B] text-base md:text-lg font-medium leading-relaxed max-w-[500px]">
              Trusted by international patients worldwide, India delivers advanced healthcare backed by expert doctors and complete care support.
            </p>
          </header>

          {/* ================= DESKTOP RIGHT SECTION ================= */}
          <div className="hidden lg:flex flex-col items-start text-left max-w-[530px] order-2 lg:pt-[100px] xl:pt-[150px] px-6 lg:px-0">
            <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-8 px-8 h-[73px]">
              <h2 className="text-[#58595B] font-bold text-[32px] xl:text-[42px] whitespace-nowrap leading-none">
                Why Choose Us?
              </h2>
            </header>
            <p className="text-[#58595B] text-lg xl:text-[19px] font-medium leading-relaxed mb-10">
              Trusted by international patients worldwide, India delivers advanced
              healthcare backed by internationally trained specialists and complete end-to-end support.
            </p>
            <button className="flex items-center gap-3 px-10 py-4 rounded-full bg-[#EE4423] text-white font-bold text-lg hover:bg-[#d63a1b] transition-all active:scale-95">
              Contact Now <span className="text-xl" aria-hidden="true">›</span>
            </button>
          </div>

          {/* ================= MOBILE CAROUSEL (Now edge-to-edge) ================= */}
          <div className="block lg:hidden w-full overflow-hidden mb-8" ref={emblaRef}>
            <div className="flex">
              {reasons.map((item, index) => (
                <article key={index} className="flex-[0_0_75%] md:flex-[0_0_45%] min-w-0 px-2">
                  <div
                    className="relative flex flex-col items-start bg-white/60 backdrop-blur-md p-6 h-[200px] border border-orange-100/50 rounded-[25px]"
                  >
                    <div className="w-10 h-10 mb-4">
                      <Image 
                        src={item.icon} 
                        alt={`${item.title} icon`} 
                        width={40} 
                        height={40} 
                        style={{ height: 'auto' }}
                        className="object-contain" 
                      />
                    </div>
                    <h3 className="text-[#58595B] font-bold text-base leading-tight text-left mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#58595B] text-xs font-medium leading-relaxed text-left line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ================= DESKTOP/TABLET GRID ================= */}
          <div className="hidden lg:grid grid-cols-2 w-full max-w-[680px] gap-6 xl:gap-8 order-1 px-6 lg:px-0">
            {reasons.map((item, index) => (
              <article
                key={index}
                className={`
                  relative flex flex-col items-start text-left transition-all duration-500 hover:-translate-y-2 w-full mx-auto bg-white/40 backdrop-blur-md
                  ${index % 2 !== 0 ? "lg:mt-12" : ""}
                `}
                style={{
                  maxWidth: "320px",
                  minHeight: "300px",
                  borderRadius: "40px",
                  padding: "40px",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[40px] pointer-events-none"
                  aria-hidden="true"
                  style={{
                    padding: '3px',
                    background: 'linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className="flex items-center justify-center mb-6 w-12 h-12 xl:w-[60px] xl:h-[60px] shrink-0">
                  <Image 
                    src={item.icon} 
                    alt={item.title} 
                    width={60} 
                    height={60} 
                    style={{ height: 'auto' }}
                    className="w-full h-full object-contain" 
                  />
                </div>
                <h3 className="text-[#58595B] font-bold text-xl xl:text-[22px] mb-3 leading-tight">{item.title}</h3>
                <p className="text-[#58595B] text-sm xl:text-[15px] font-medium leading-relaxed opacity-90">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile-only CTA */}
        <div className="lg:hidden w-full flex justify-center mt-8 px-6">
          <button className="flex items-center gap-3 px-10 py-4 rounded-full bg-[#EE4423] text-white font-bold text-lg active:scale-95 transition-all">
            Contact Now <span className="text-xl" aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}