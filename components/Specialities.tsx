import Image from "next/image";
import Link from "next/link";
import React from "react";

const specialities = [
  { title: "Cardiac Care", icon: "/icons/cardiac.png" },
  { title: "Neurosciences", icon: "/icons/neuro.png" },
  { title: "Cancer Care", icon: "/icons/cancer.png" },
  { title: "Gastrosciences", icon: "/icons/gastro.png" },
  { title: "Gastrosciences", icon: "/icons/gastro.png" },
  { title: "Cancer Care", icon: "/icons/cancer.png" },
  { title: "Cardiac Care", icon: "/icons/cardiac.png" },
  { title: "Neurosciences", icon: "/icons/neuro.png" },
];

const reasons = [
  {
    title: "World-class Hospitals",
    description: "JCI & NABH accredited hospitals ensuring top global safety and care.",
    icon: "/icons/hospital.png",
  },
  {
    title: "Affordable Costs",
    description: "Up to 70–80% lower treatment costs compared to Western countries.",
    icon: "/icons/costs.png",
  },
  {
    title: "Expert Doctors",
    description: "Internationally trained specialists with years of proven expertise.",
    icon: "/icons/doctor.png",
  },
  {
    title: "Complete Assistance",
    description: "End-to-end support: travel, visa, treatment, and recovery care.",
    icon: "/icons/assistance.png",
  },
];

export default function CombinedSections() {
  return (
    <div className="relative w-full">
      {/* --- SHARED BACKGROUND SYSTEM --- */}
      <div className="absolute inset-0 z-0">
        {/* Unified Base Image Layer */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(70px) saturate(.6) brightness(1.1)",
            /* Soft fade only at the VERY TOP and VERY BOTTOM of the entire combined block */
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 20%)",
            maskImage: "linear-gradient(to bottom, transparent 10%, black 10%, black 90%, transparent 20%)",
          }}
        />
        
        {/* Shared Milky Overlay */}
        <div 
          className="absolute inset-0 bg-white/25 backdrop-blur-3xl"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        />
      </div>

      {/* --- SECTION 1: SPECIALITIES --- */}
      <section className="relative z-10 flex flex-col items-center pt-[150px] pb-[100px] ">
        <div
          className="flex items-center justify-center bg-white/40 backdrop-blur-xl border font-bold text-center shadow-sm mb-[60px] mt-[80px]"
          style={{
            width: "415px",
            height: "73px",
            borderRadius: "50px",
            fontFamily: "Montserrat, sans-serif",
            color: "rgb(88, 89, 91)",
            border: "2px solid rgb(88, 89, 91)", 
            fontSize: "42px",
          }}
        >
          Our Specialities
        </div>

        <div className="flex flex-col gap-[60px]" style={{ width: "1318.14px" }}>
          {[0, 1].map((row) => (
            <div key={row} className="flex justify-between gap-[78px]">
              {specialities.slice(row * 4, row * 4 + 4).map((item, index) => (
                <Link
                  key={index}
                  href="/specialities"
                  className="group flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-2"
                  style={{
                    width: "271px",
                    height: "253px",
                    borderRadius: "40px",
                    padding: "34px 24px",
                    fontFamily: "Montserrat, sans-serif",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.04)",
                  }}
                >
                  <div className="relative w-[65px] h-[65px] group-hover:scale-110 transition-transform duration-300">
                    <Image src={item.icon} alt={item.title} fill className="object-contain" />
                  </div>
                  <div className="text-[#414042] text-[20px] font-bold leading-tight group-hover:text-[#EE4423] transition-colors">
                    {item.title}
                  </div>
                  <div className="px-5 py-2 bg-white/80 rounded-full text-[13px] font-semibold text-[#EE4423] shadow-sm border border-white group-hover:bg-[#EE4423] group-hover:text-white transition-all">
                    Know More <span className="ml-1">›</span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        
        <Link
          href="/specialities"
          className="mt-16 flex items-center gap-2 px-10 py-4 rounded-full bg-[#EE4423] text-white font-bold text-lg shadow-lg hover:bg-[#d63a1b] transition-all"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          View All Specialities <span className="text-xl">›</span>
        </Link>
      </section>

      {/* --- SECTION 2: WHY CHOOSE US --- */}
      <section 
        className="relative z-10 flex items-center justify-center mx-auto pb-[150px]"
        style={{ width: "1319px", gap: "133px", fontFamily: "Montserrat, sans-serif" }}
      >
        {/* World Map Overlay (Specific to this bottom section) */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: "url('/worldmapsstrokes.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -1
          }}
        />

        {/* BOXES GRID */}
        <div className="grid grid-cols-2" style={{ width: "650px", gap: "20px" }}>
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start text-left transition-all duration-500 hover:-translate-y-2 ${index % 2 !== 0 ? "mt-12" : ""}`}
              style={{
                width: "315px",
                height: "299px",
                borderRadius: "40px",
                border: "3px solid rgba(255, 255, 255, 0.7)",
                padding: "40px",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2))",
                backdropFilter: "blur(15px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center justify-center mb-6 w-[66px] h-[66px] bg-[#EE4423] rounded-full">
                <div className="relative w-8 h-8">
                  <Image src={item.icon} alt={item.title} fill className="object-contain invert brightness-0" />
                </div>
              </div>
              <h3 className="text-[#58595B] font-bold text-[22px] mb-2">{item.title}</h3>
              <p className="text-[#58595B] text-[14px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col items-start max-w-[530px]">
          <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-8 px-10 h-[73px]">
            <h2 className="text-[#58595B] font-bold text-[42px]">Why Choose Us?</h2>
          </div>
          <p className="text-[#58595B] text-[18px] leading-relaxed mb-10">
            Trusted by international patients worldwide, India delivers advanced healthcare 
            backed by expert doctors, modern facilities, and complete care and support 
            at every step of the treatment journey.
          </p>
          <button className="flex items-center gap-3 px-12 py-5 rounded-full bg-[#EE4423] text-white font-bold text-lg shadow-lg hover:bg-[#d63a1b] transition-all">
            Contact Now <span className="text-xl">›</span>
          </button>
        </div>
      </section>
    </div>
  );
}