"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from 'next-intl';

export default function ModelOfCare() {
  const t = useTranslations('ModelOfCare');
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const steps = [
    {
      title: t('step_1_title'),
      desc: t('step_1_desc'),
      circlePos: { cx: 150, cy: 360 },
    },
    {
      title: t('step_2_title'),
      desc: t('step_2_desc'),
      circlePos: { cx: 380, cy: 250 },
    },
    {
      title: t('step_3_title'),
      desc: t('step_3_desc'),
      circlePos: { cx: 600, cy: 360 },
    },
    {
      title: t('step_4_title'),
      desc: t('step_4_desc'),
      circlePos: { cx: 820, cy: 250 },
    },
    {
      title: t('step_5_title'),
      desc: t('step_5_desc'),
      circlePos: { cx: 1050, cy: 360 },
    },
  ];

  return (
    <section className="relative flex flex-col items-center bg-white md:bg-white mx-auto py-10 md:py-16 w-full max-w-[1355px] px-0 md:px-0">

      {/* MOBILE BACKGROUND */}
      <div className="absolute inset-x-0 bg-[#EE4423] md:hidden -top-12 h-[450px]" />

      {/* DESKTOP HEADER */}
      <div className="hidden lg:flex items-center justify-center border-[2px] border-[#58595B] rounded-[50px] mb-20 px-8 md:px-[40px] w-full max-w-[650px] h-[73px]">
        <h2 className={`text-[#58595B] font-bold font-montserrat tracking-[-0.38px] text-center ${locale === 'en' ? 'text-[30px]' : 'text-[22px] lg:text-[26px]'
          }`}>
          {t('title')}
        </h2>
      </div>

      {/* MOBILE/TABLET HEADER */}
      <div
        className="lg:hidden relative z-10 flex items-center justify-center border-[2px] border-[#58595B] lg:border-white rounded-[50px] mb-12 px-6 py-2"
        style={{ width: "min(300px, 90vw)", height: "88px" }}
      >
        <h2 aria-hidden="true" className={`text-[#58595B] lg:text-white font-bold font-montserrat text-center leading-[1.2] ${locale === 'en' ? 'text-[22px]' : 'text-[18px]'
          }`}>
          {t('title')}
        </h2>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:block relative w-full max-w-[1200px] h-[650px] lg:scale-[0.8] xl:scale-100 origin-center">
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
            <Card title={steps[1].title} desc={steps[1].desc} knowMoreText={t('know_more')} />
          </div>
          <div onMouseEnter={() => setActiveIndex(3)} onMouseLeave={() => setActiveIndex(null)} className="transform -translate-y-8">
            <Card title={steps[3].title} desc={steps[3].desc} knowMoreText={t('know_more')} />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-4">
          <div onMouseEnter={() => setActiveIndex(0)} onMouseLeave={() => setActiveIndex(null)} className="transform translate-y-12">
            <Card title={steps[0].title} desc={steps[0].desc} knowMoreText={t('know_more')} />
          </div>
          <div onMouseEnter={() => setActiveIndex(2)} onMouseLeave={() => setActiveIndex(null)} className="transform translate-y-12">
            <Card title={steps[2].title} desc={steps[2].desc} knowMoreText={t('know_more')} />
          </div>
          <div onMouseEnter={() => setActiveIndex(4)} onMouseLeave={() => setActiveIndex(null)} className="transform translate-y-12">
            <Card title={steps[4].title} desc={steps[4].desc} knowMoreText={t('know_more')} />
          </div>
        </div>
      </div>

      {/* MOBILE/TABLET VIEW */}
      <div
        className={`lg:hidden relative z-10 bg-white flex flex-col items-center pt-[56px] gap-[24px] mb-8 transition-all duration-500 overflow-hidden px-4`}
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
                  <div
                    className={`w-[26px] h-[26px] transition-all duration-300 ${isActive ? 'rotate-180' : 'rotate-0'} ${isHighlighted ? 'brightness-0 saturate-100 invert-[34%] sepia-[90%] saturate-[3241%] hue-rotate-[349deg] brightness-[101%] contrast-[96%]' : ''}`}
                    style={{
                      backgroundImage: `url('/images/sections/model-of-care/icon.svg')`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#58595B] font-montserrat font-medium text-[14px] leading-[1.3] text-center">
                    {step.desc}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-gray-200/80 mt-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, isMobile, knowMoreText }: { title: string; desc: string; isMobile?: boolean; knowMoreText: string }) {
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
        href="/speciality"
        className="flex items-center justify-center bg-[#EE4423] text-white rounded-[50px] font-bold transition-all active:scale-95 md:hover:scale-105 shadow-md"
        style={{ width: "159.36px", height: "40px", gap: "10px" }}
      >
        <span className="text-[14px] md:text-[16px]">{knowMoreText}</span>
        <span className="text-xl">›</span>
      </Link>
    </div>
  );
}