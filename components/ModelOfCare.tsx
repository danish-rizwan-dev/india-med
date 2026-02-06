"use client";

import React from "react";
import Link from "next/link";

export default function ModelOfCare() {
  const steps = [
    {
      title: "Exceptional Clinical Talent",
      desc: "India Med delivers high-quality, integrated care through expert clinicians, a doctor-led approach, and strong multispecialty collaboration.",
    },
    {
      title: "World-class Infrastructure",
      desc: "India Med provides advanced infrastructure, high OT & ICU capacity, and strict infection control to support complex care and faster patient recovery.",
    },
    {
      title: "Latest High-end Technology",
      desc: "India Med delivers advanced tertiary and quaternary care using cutting-edge technology, enabling doctors to perform complex diagnostics and treatments with precision.",
    },
    {
      title: "Caring Systems And Processes",
      desc: "India Med uses advanced digital solutions to improve access and quality of care, supported by uniform clinical standards that ensure safe, effective treatment.",
    },
    {
      title: "Trust-based Compassionate Care",
      desc: "India Med delivers advanced healthcare through integrated centres of excellence, combining care, research, and learning with a patient-first philosophy.",
    },
  ];

  return (
    <section className="relative flex flex-col items-center bg-white mx-auto py-10 w-full max-w-[1355px] px-4 md:px-0">
      {/* HEADER: 598px x 73px */}
      <div
        className="flex items-center justify-center border-[2px] border-[#58595B] rounded-[50px] mb-12 md:mb-20 px-6 md:px-[40px] w-full max-w-[598px] h-[60px] md:h-[73px]"
      >
        <h2 className="text-[#58595B] font-bold text-[20px] md:text-[30px] font-montserrat tracking-[-0.38px] text-center">
          India Med Model of Care
        </h2>
      </div>

      {/* DESKTOP VIEW (MD and up) */}
      <div className="hidden md:block relative w-full max-w-[1200px] h-[650px]">
        {/* SVG PATH */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
            <path 
              d="M 0 300 Q 75 300, 150 360 C 220 360, 280 250, 380 250 S 530 360, 600 360 S 720 250, 820 250 S 980 360, 1050 360 Q 1125 360, 1200 300" 
              stroke="#EE4423" 
              strokeWidth="2" 
              strokeDasharray="10 10" 
              className="opacity-20"
            />
            <circle cx="380" cy="250" r="8" fill="white" stroke="#EE4423" strokeWidth="2" />
            <circle cx="820" cy="250" r="8" fill="white" stroke="#EE4423" strokeWidth="2" />
            <circle cx="150" cy="360" r="8" fill="white" stroke="#EE4423" strokeWidth="2" />
            <circle cx="600" cy="360" r="8" fill="white" stroke="#EE4423" strokeWidth="2" />
            <circle cx="1050" cy="360" r="8" fill="white" stroke="#EE4423" strokeWidth="2" />
          </svg>
        </div>

        {/* TOP ROW (Items 1 & 2) */}
        <div className="absolute top-0 left-0 w-full flex justify-center gap-[140px] px-10">
          <div className="transform -translate-y-8">
            <Card title={steps[0].title} desc={steps[0].desc} />
          </div>
          <div className="transform -translate-y-8">
            <Card title={steps[1].title} desc={steps[1].desc} />
          </div>
        </div>

        {/* BOTTOM ROW (Items 3, 4, 5) */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-4">
          <div className="transform translate-y-12">
            <Card title={steps[2].title} desc={steps[2].desc} />
          </div>
          <div className="transform translate-y-12">
            <Card title={steps[3].title} desc={steps[3].desc} />
          </div>
          <div className="transform translate-y-12">
            <Card title={steps[4].title} desc={steps[4].desc} />
          </div>
        </div>
      </div>

      {/* MOBILE VIEW (Below MD) */}
      <div className="md:hidden flex flex-col items-center gap-12 w-full relative">
        {/* Vertical Dashed Line Background */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-[#EE4423] opacity-20 pointer-events-none" />
        
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex flex-col items-center w-full max-w-[320px]">
            {/* Mobile Node Circle */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#EE4423]" />
            <Card title={step.title} desc={step.desc} isMobile />
          </div>
        ))}
      </div>
    </section>
  );
}

function Card({ title, desc, isMobile }: { title: string; desc: string; isMobile?: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center ${isMobile ? 'w-full' : 'w-[300px]'}`}>
      <h3 className="text-[#58595B] font-bold mb-3 text-[18px] md:text-[23px] font-montserrat leading-[1.2] tracking-[-0.38px]">
        {title}
      </h3>
      
      <p 
        className="text-[#58595B] mb-6 font-montserrat"
        style={{
          fontWeight: 600,
          fontSize: isMobile ? "15px" : "17px",
          lineHeight: "1.2", // Increased slightly from 100% for better mobile readability
          letterSpacing: "-0.28px",
          minHeight: isMobile ? "auto" : "90px"
        }}
      >
        {desc}
      </p>

      <Link
        href="#"
        className="flex items-center justify-center bg-[#EE4423] text-white rounded-[50px] font-bold transition-transform active:scale-95 md:hover:scale-105"
        style={{ width: "159.36px", height: "40px", gap: "10px" }}
      >
        <span className="text-[14px] md:text-[16px]">Know More</span>
        <span className="text-xl">›</span>
      </Link>
    </div>
  );
}