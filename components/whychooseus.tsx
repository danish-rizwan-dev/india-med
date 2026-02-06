"use client";

import React from "react";
import Image from "next/image";

const reasons = [
  {
    title: "World-class Hospitals",
    description:
      "JCI & NABH accredited hospitals ensuring top global safety and care.",
    icon: "/images/icons/hospitals.png",
  },
  {
    title: "Affordable Costs",
    description:
      "Up to 70–80% lower treatment costs compared to Western countries.",
    icon: "/images/icons/cost.png",
  },
  {
    title: "Expert Doctors",
    description:
      "Internationally trained specialists with years of proven expertise.",
    icon: "/images/icons/expertdoc.png",
  },
  {
    title: "Complete Assistance",
    description:
      "End-to-end support: travel, visa, treatment, and recovery care.",
    icon: "/images/icons/assit.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 w-full overflow-hidden">
      {/* 🌍 WORLD MAP BACKGROUND */}
      <div
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none -z-20"
        style={{
          backgroundImage: "url('/images/backgrounds/worldmapsstrokes.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="relative flex flex-col-reverse lg:flex-row items-center justify-center mx-auto py-16 lg:py-[100px] px-6 lg:px-0 gap-12 lg:gap-[133px]"
        style={{ maxWidth: "1319px", fontFamily: "Montserrat, sans-serif" }}
      >
        {/* ================= LEFT GRID ================= */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 w-full"
          style={{ maxWidth: "650px", gap: "20px" }}
        >
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-start text-left transition-all duration-500 hover:-translate-y-2 w-full mx-auto bg-white/40 backdrop-blur-md ${
                index % 2 !== 0 ? "lg:mt-12" : ""
              }`}
              style={{
                maxWidth: "315px",
                height: "299px",
                borderRadius: "40px",
                padding: "40px",

                /* ✅ REAL GRADIENT BORDER (FIGMA STYLE) */
                border: "3px solid transparent",
                borderImageSlice: 1,
                borderImageSource: `
                  linear-gradient(39.31deg, rgba(255,255,255,0.05) 45.41%, rgba(255,173,157,0.6) 93.87%),
                  linear-gradient(222.62deg, rgba(245,245,245,0.2) 14.53%, rgba(227,227,227,0.8) 101.14%)
                `,

                /* ✨ WHITE + ORANGE GLOW SHADOW */
                boxShadow: `
                  inset 0 1px 2px rgba(255,255,255,0.6),
                  0 6px 18px rgba(255,173,157,0.25),
                  0 25px 60px rgba(238,68,35,0.22)
                `,
              }}
            >
              {/* ICON */}
              <div className="flex items-center justify-center mb-6 w-[70px] h-[70px] shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="w-full h-full object-contain p-1"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[#58595B] font-bold text-[22px] mb-2 leading-tight">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#58595B] text-[14px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[530px] w-full">
          <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-6 lg:mb-8 px-6 lg:px-10 h-auto lg:h-[73px] py-3 lg:py-0">
            <h2 className="text-[#58595B] font-bold text-3xl lg:text-[42px] whitespace-nowrap">
              Why Choose Us?
            </h2>
          </div>

          <p className="text-[#58595B] text-base lg:text-[18px] leading-relaxed mb-8 lg:mb-10">
            Trusted by international patients worldwide, India delivers advanced
            healthcare backed by expert doctors and complete support.
          </p>

          <button className="flex items-center gap-3 px-10 lg:px-12 py-4 lg:py-5 rounded-full bg-[#EE4423] text-white font-bold text-lg shadow-lg hover:bg-[#d63a1b] transition-all">
            Contact Now <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
