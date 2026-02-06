"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesSection() {
  // Glassmorphic shadow and border style
  const glassStyle = {
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07), 0 1px 2px 0 rgba(255, 255, 255, 0.3) inset",
  };

  return (
    <section 
      className="relative flex flex-col items-center overflow-hidden bg-[#F9FAFB] mt-10 lg:mt-20"
      style={{ 
        width: "100%", 
        minHeight: "850px", 
        paddingTop: "100px",
        // Top and Bottom Fade Effect
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
      }}
    >
      {/* ================= BACKGROUND PATTERN ================= */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/backgrounds/backgroundlines.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'rotate(180deg)' 
        }}
      />

      {/* ================= SERVICE HEADING ================= */}
      <div 
        className="relative z-10 flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-16 bg-white/50 backdrop-blur-sm"
        style={{ width: "259px", height: "73px" }}
      >
        <h2 className="text-[#58595B] font-bold text-[32px] lg:text-[42px] font-montserrat">
          Services
        </h2>
      </div>

      {/* ================= CONTENT DIV ================= */}
      <div 
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-[23px] w-full max-w-[1311px] pb-10"
        style={{ minHeight: "528px" }}
      >
        {/* NAV ARROWS */}
        <button className="absolute left-[-80px] top-1/2 -translate-y-1/2 hidden xl:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-[#EE4423] hover:bg-[#EE4423] hover:text-white transition-all">
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        {/* 1. LEFT TALL CARD */}
        <div 
          className="relative flex flex-col rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-2 group"
          style={{ width: "399px", height: "550px", ...glassStyle }} // Increased height slightly
        >
          <div className="relative w-full h-[300px] overflow-hidden">
            <Image src="/images/backgrounds/tree.jpg" alt="Hospitals" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col p-8 gap-[12px] flex-grow">
            <h3 className="text-[#414042] font-bold text-2xl leading-tight">World-class Hospitals</h3>
            <p className="text-[#58595B] text-sm font-medium leading-relaxed max-w-[262px]">
              JCI & NABH accredited hospitals ensuring top global safety and care.
            </p>
            {/* Added margin-top to prevent overlap */}
            <Link href="#" className="mt-4 text-[#EE4423] font-bold text-sm flex items-center gap-1 group/link w-fit">
              Know More <span className="text-lg transition-transform group-hover/link:translate-x-1">›</span>
            </Link>
          </div>
        </div>

        {/* 2. MIDDLE BOXES (Vertical Stack) */}
        <div className="flex flex-col gap-[23px]" style={{ width: "467px", height: "550px" }}>
          {[1, 2].map((i) => (
            <div 
              key={i}
              className="relative flex flex-col rounded-[40px] p-8 transition-all duration-500 hover:-translate-y-1"
              style={{ width: "467px", height: "263px", ...glassStyle }}
            >
              <h3 className="text-[#414042] font-bold text-xl mb-2">World-class Hospitals</h3>
              <p className="text-[#58595B] text-sm font-medium max-w-[262px] mb-4">
                JCI & NABH accredited hospitals ensuring top global safety and care.
              </p>
              <Link href="#" className="mt-auto text-[#EE4423] font-bold text-sm flex items-center gap-1 group/link w-fit">
                Know More <span className="text-lg transition-transform group-hover/link:translate-x-1">›</span>
              </Link>
            </div>
          ))}
        </div>

        {/* 3. RIGHT TALL CARD */}
        <div 
          className="relative flex flex-col rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-2 group"
          style={{ width: "399px", height: "550px", ...glassStyle }}
        >
          <div className="relative w-full h-[300px] overflow-hidden">
            <Image src="/images/backgrounds/honey.jpg" alt="Expert Care" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col p-8 gap-[12px] flex-grow">
            <h3 className="text-[#414042] font-bold text-2xl leading-tight">World-class Hospitals</h3>
            <p className="text-[#58595B] text-sm font-medium leading-relaxed max-w-[262px]">
              JCI & NABH accredited hospitals ensuring top global safety and care.
            </p>
            <Link href="#" className="mt-auto text-[#EE4423] font-bold text-sm flex items-center gap-1 group/link w-fit">
              Know More <span className="text-lg transition-transform group-hover/link:translate-x-1">›</span>
            </Link>
          </div>
        </div>

        <button className="absolute right-[-80px] top-1/2 -translate-y-1/2 hidden xl:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-[#EE4423] hover:bg-[#EE4423] hover:text-white transition-all">
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}