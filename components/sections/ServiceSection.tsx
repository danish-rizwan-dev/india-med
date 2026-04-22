"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesSection() {
  // SEO-friendly services data for easier maintenance
  const services = [
    {
      title: "World-class Hospitals",
      desc: "JCI & NABH accredited hospitals ensuring top global safety and care.",
      img: "/images/backgrounds/tree.jpg",
    },
    {
      title: "Medical Expert Consultation",
      desc: "Connect with internationally trained specialists for precise diagnostics.",
      img: null,
    },
    {
      title: "Personalized Care Support",
      desc: "Dedicated assistance for travel, visa, and recovery management.",
      img: null,
    },
    {
      title: "Advanced Technology",
      desc: "Access to the latest robotic surgeries and precision medicine treatments.",
      img: "/images/backgrounds/honey.jpg",
    },
  ];

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07), 0 1px 2px 0 rgba(255, 255, 255, 0.3) inset",
  };

  return (
    <section
      id="services"
      className="relative flex flex-col items-center overflow-hidden bg-[#F9FAFB] py-16 lg:py-24"
      style={{
        width: "100%",
        minHeight: "850px",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
      }}
    >
      {/* ================= BACKGROUND PATTERN ================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "url('/images/backgrounds/backgroundlines.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'rotate(180deg)'
        }}
        aria-hidden="true"
      />

      {/* ================= SERVICE HEADING ================= */}
      <header className="relative z-10 flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-12 lg:mb-16 bg-white/50 backdrop-blur-sm px-10 py-4 h-[60px] lg:h-[73px]">
        <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] font-montserrat leading-none">
          Services
        </h2>
      </header>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 w-full max-w-[1311px] px-4 lg:px-6">
        
        {/* Navigation Arrows (Desktop Only) */}
        <button 
          aria-label="Previous service"
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 hidden xl:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-[#EE4423] hover:bg-[#EE4423] hover:text-white transition-all z-20"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        {/* LAYOUT GRID 
            - Vertically stacks on mobile (flex-col)
            - Horizontal on Desktop (lg:flex-row)
        */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-[23px]">
          
          {/* 1. LEFT TALL CARD */}
          <article
            className="relative flex flex-col rounded-[32px] lg:rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-2 group w-full lg:w-[399px] min-h-[450px] lg:h-[550px]"
            style={glassStyle}
          >
            <div className="relative w-full h-[240px] lg:h-[300px] overflow-hidden">
              <Image 
                src={services[0].img || ""} 
                alt={services[0].title} 
                fill 
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col p-6 lg:p-8 gap-3 flex-grow">
              <h3 className="text-[#414042] font-bold text-xl lg:text-2xl leading-tight">{services[0].title}</h3>
              <p className="text-[#58595B] text-sm font-medium leading-relaxed max-w-[262px]">
                {services[0].desc}
              </p>
              <Link href="/services" title={`Learn more about ${services[0].title}`} className="mt-auto pt-4 text-[#EE4423] font-bold text-sm flex items-center gap-1 group/link w-fit">
                Know More <span className="text-lg transition-transform group-hover/link:translate-x-1">›</span>
              </Link>
            </div>
          </article>

          {/* 2. MIDDLE BOXES (Vertical Stack) */}
          <div className="flex flex-col gap-6 lg:gap-[23px] w-full lg:w-[467px]">
            {services.slice(1, 3).map((service, i) => (
              <article
                key={i}
                className="relative flex flex-col rounded-[32px] lg:rounded-[40px] p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 w-full lg:h-[263px]"
                style={glassStyle}
              >
                <h3 className="text-[#414042] font-bold text-lg lg:text-xl mb-2">{service.title}</h3>
                <p className="text-[#58595B] text-sm font-medium max-w-[320px] mb-4">
                  {service.desc}
                </p>
                <Link href="/services" title={`Learn more about ${service.title}`} className="mt-auto text-[#EE4423] font-bold text-sm flex items-center gap-1 group/link w-fit">
                  Know More <span className="text-lg transition-transform group-hover/link:translate-x-1">›</span>
                </Link>
              </article>
            ))}
          </div>

          {/* 3. RIGHT TALL CARD */}
          <article
            className="relative flex flex-col rounded-[32px] lg:rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-2 group w-full lg:w-[399px] min-h-[450px] lg:h-[550px]"
            style={glassStyle}
          >
            <div className="relative w-full h-[240px] lg:h-[300px] overflow-hidden">
              <Image 
                src={services[3].img || ""} 
                alt={services[3].title} 
                fill 
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col p-6 lg:p-8 gap-3 flex-grow">
              <h3 className="text-[#414042] font-bold text-xl lg:text-2xl leading-tight">{services[3].title}</h3>
              <p className="text-[#58595B] text-sm font-medium leading-relaxed max-w-[262px]">
                {services[3].desc}
              </p>
              <Link href="/services" title={`Learn more about ${services[3].title}`} className="mt-auto pt-4 text-[#EE4423] font-bold text-sm flex items-center gap-1 group/link w-fit">
                Know More <span className="text-lg transition-transform group-hover/link:translate-x-1">›</span>
              </Link>
            </div>
          </article>
        </div>

        <button 
          aria-label="Next service"
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 hidden xl:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-[#EE4423] hover:bg-[#EE4423] hover:text-white transition-all z-20"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>

      </div>
    </section>
  );
}