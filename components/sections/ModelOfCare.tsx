"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function ModelOfCare() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const steps = [
    {
      title: "Exceptional Clinical Talent",
      desc: "India Med delivers high-quality, integrated care through expert clinicians, a doctor-led approach, and strong multispecialty collaboration.",
      circlePos: { cx: 150, cy: 360 },
    },
    {
      title: "World-class Infrastructure",
      desc: "India Med provides advanced infrastructure, high OT & ICU capacity, and strict infection control to support complex care and faster patient recovery.",
      circlePos: { cx: 380, cy: 250 },
    },
    {
      title: "Latest High-end Technology",
      desc: "India Med delivers advanced tertiary and quaternary care using cutting-edge technology, enabling doctors to perform complex diagnostics and treatments with precision.",
      circlePos: { cx: 600, cy: 360 },
    },
    {
      title: "Caring Systems And Processes",
      desc: "India Med uses advanced digital solutions to improve access and quality of care, supported by uniform clinical standards that ensure safe, effective treatment.",
      circlePos: { cx: 820, cy: 250 },
    },
    {
      title: "Trust-based Compassionate Care",
      desc: "India Med delivers advanced healthcare through integrated centres of excellence, combining care, research, and learning with a patient-first philosophy.",
      circlePos: { cx: 1050, cy: 360 },
    },
  ];

  return (
    <section className="relative flex flex-col items-center bg-white md:bg-white mx-auto py-10 md:py-16 w-full max-w-[1355px] px-0 md:px-0">

      {/* MOBILE BACKGROUND (Touching Above Section & Covering Half the Box) */}
      <div className="absolute inset-x-0 bg-[#EE4423] md:hidden -top-12 h-[450px]" />

      {/* DESKTOP HEADER */}
      <div className="hidden md:flex items-center justify-center border-[2px] border-[#58595B] rounded-[50px] mb-20 px-[40px] w-full max-w-[598px] h-[73px]">
        <h2 className="text-[#58595B] font-bold text-[30px] font-montserrat tracking-[-0.38px] text-center">
          India Med Model of Care
        </h2>
      </div>

      {/* MOBILE HEADER (283x88) */}
      <div
        className="md:hidden relative z-10 flex items-center justify-center border-[2px] border-white rounded-[50px] mb-12 px-[40px] py-[10px]"
        style={{ width: "283px", height: "88px", gap: "10px" }}
      >
        <h2 aria-hidden="true" className="text-white font-bold text-[22px] font-montserrat text-center leading-[1.2]">
          India Med<br />Model of Care
        </h2>
      </div>

      {/* DESKTOP VIEW */}
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
            {steps.map((step, idx) => (
              <circle
                key={idx}
                cx={step.circlePos.cx}
                cy={step.circlePos.cy}
                r={activeIndex === idx ? "10" : "8"}
                fill={activeIndex === idx ? "#EE4423" : "white"}
                stroke="#EE4423"
                strokeWidth="2"
                className="transition-all duration-300"
              />
            ))}
          </svg>
        </div>

        {/* TOP ROW */}
        <div className="absolute top-0 left-0 w-full flex justify-center gap-[140px] px-10">
          <div onMouseEnter={() => setActiveIndex(1)} onMouseLeave={() => setActiveIndex(null)} className="transform -translate-y-8">
            <Card title={steps[1].title} desc={steps[1].desc} />
          </div>
          <div onMouseEnter={() => setActiveIndex(3)} onMouseLeave={() => setActiveIndex(null)} className="transform -translate-y-8">
            <Card title={steps[3].title} desc={steps[3].desc} />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-4">
          <div onMouseEnter={() => setActiveIndex(0)} onMouseLeave={() => setActiveIndex(null)} className="transform translate-y-12">
            <Card title={steps[0].title} desc={steps[0].desc} />
          </div>
          <div onMouseEnter={() => setActiveIndex(2)} onMouseLeave={() => setActiveIndex(null)} className="transform translate-y-12">
            <Card title={steps[2].title} desc={steps[2].desc} />
          </div>
          <div onMouseEnter={() => setActiveIndex(4)} onMouseLeave={() => setActiveIndex(null)} className="transform translate-y-12">
            <Card title={steps[4].title} desc={steps[4].desc} />
          </div>
        </div>
      </div>

      <div
        className={`md:hidden relative z-10 bg-white flex flex-col items-center pt-[56px] gap-[24px] mb-8 transition-all duration-500 overflow-hidden px-4`}
        style={{
          width: "min(352px, 92vw)",
          minHeight: "428px",
          borderRadius: "34px",
          boxShadow: "0px 15px 25px 0px rgba(67, 41, 57, 0.1)"
        }}
      >
        <div className="flex flex-col gap-[24px] w-full items-center">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            const isHighlighted = isActive || (activeIndex === null && index === 0);

            return (
              <div
                key={index}
                role="button"
                aria-expanded={isActive}
                className="flex flex-col gap-[10px] cursor-pointer w-full max-w-[272px]"
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-montserrat font-bold text-[16px] leading-tight flex-1 transition-colors duration-300 ${isHighlighted ? 'text-[#EE4423]' : 'text-[#58595B]'}`}
                  >
                    {step.title}
                  </span>
                  {/* Custom SVG Icon */}
                  <div
                    className={`w-[26px] h-[26px] transition-all duration-300 ${isActive ? 'rotate-180' : 'rotate-0'} ${isHighlighted ? 'brightness-0 saturate-100 invert-[34%] sepia-[90%] saturate-[3241%] hue-rotate-[349deg] brightness-[101%] contrast-[96%]' : ''}`}
                    style={{
                      backgroundImage: `url('/images/icons/modelofcareIcon.svg')`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>

                {/* Description (Accordion Content) */}
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#58595B] font-montserrat font-medium text-[14px] leading-[1.3] text-center">
                    {step.desc}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-200/80 mt-1" />
              </div>
            );
          })}
        </div>
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
          lineHeight: "1.2",
          letterSpacing: "-0.28px",
          minHeight: isMobile ? "auto" : "90px"
        }}
      >
        {desc}
      </p>

      <Link
        href="#"
        className="flex items-center justify-center bg-[#EE4423] text-white rounded-[50px] font-bold transition-all active:scale-95 md:hover:scale-105 shadow-md"
        style={{ width: "159.36px", height: "40px", gap: "10px" }}
      >
        <span className="text-[14px] md:text-[16px]">Know More</span>
        <span className="text-xl">›</span>
      </Link>
    </div>
  );
}