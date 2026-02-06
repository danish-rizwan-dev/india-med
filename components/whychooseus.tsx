"use client";

import Image from "next/image";

const reasons = [
  {
    title: "World-class Hospitals",
    description: "JCI & NABH accredited hospitals ensuring top global safety and care.",
    icon: "/images/icons/Hospital.svg", // Updated to SVG
  },
  {
    title: "Affordable Costs",
    description: "Up to 70–80% lower treatment costs compared to Western countries.",
    icon: "/images/icons/Costs.svg", // Updated to SVG
  },
  {
    title: "Expert Doctors",
    description: "Internationally trained specialists with years of proven expertise.",
    icon: "/images/icons/ExpertDoctors.svg", // Updated to SVG
  },
  {
    title: "Complete Assistance",
    description: "End-to-end support: travel, visa, treatment, and recovery care.",
    icon: "/images/icons/Assistance.svg", // Updated to SVG
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 w-full lg:mt-[-100px]">
      {/* 🌍 WORLD MAP BACKGROUND */}
      <div
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none -z-20"
        style={{
          backgroundImage: "url('/images/backgrounds/worldmapsstrokes.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="relative flex flex-col-reverse lg:flex-row items-center justify-center mx-auto py-16 lg:py-[120px] px-6 lg:px-0 gap-12 lg:gap-[100px]"
        style={{ maxWidth: "1319px", fontFamily: "Montserrat, sans-serif" }}
      >
        {/* ================= LEFT GRID ================= */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 w-full"
          style={{ maxWidth: "680px", gap: "24px" }}
        >
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col items-start text-left transition-all duration-500 hover:-translate-y-2 w-full mx-auto bg-white/40 backdrop-blur-md
                ${index % 2 !== 0 ? "lg:mt-12" : ""}
              `}
              style={{
                maxWidth: "320px",
                height: "300px",
                borderRadius: "40px",
                padding: "40px",
                /* ✨ MULTI-LAYERED GLASS SHADOW */
                boxShadow: `
                  inset 0 1px 2px rgba(255,255,255,0.6),
                  0 10px 25px -5px rgba(255,173,157,0.3),
                  0 20px 50px -10px rgba(238,68,35,0.15)
                `,
              }}
            >
              {/* ✅ GRADIENT BORDER FIX (Works with rounded corners) */}
              <div 
                className="absolute inset-0 rounded-[40px] pointer-events-none"
                style={{
                  padding: '3px',
                  background: 'linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* ICON */}
              <div className="flex items-center justify-center mb-6 w-[60px] h-[60px] shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[#58595B] font-bold text-[22px] mb-3 leading-tight">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#58595B] text-[15px] font-medium leading-relaxed opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full lg:max-w-[530px] w-full">
          <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-8 px-8 h-[60px] lg:h-[73px]">
            <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] whitespace-nowrap leading-none">
              Why Choose Us?
            </h2>
          </div>

          <p className="text-[#58595B] text-base lg:text-[19px] font-medium leading-relaxed mb-10">
            Trusted by international patients worldwide, India delivers advanced
            healthcare backed by internationally trained specialists and complete end-to-end support.
          </p>

          <button className="flex items-center gap-3 px-10 py-4 rounded-full bg-[#EE4423] text-white font-bold text-lg shadow-[0_10px_20px_rgba(238,68,35,0.3)] hover:bg-[#d63a1b] hover:shadow-[0_15px_30px_rgba(238,68,35,0.4)] transition-all active:scale-95">
            Contact Now <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}