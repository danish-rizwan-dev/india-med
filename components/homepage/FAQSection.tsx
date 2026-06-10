"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('FAQ');
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
    { question: t('q5'), answer: t('a5') },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section
      className="relative w-full flex items-center justify-center min-h-[539px] lg:h-[539px] overflow-hidden py-12 md:py-16 lg:py-0"
      aria-label="Frequently Asked Questions"
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Image
        src="/images/sections/common/FAQSBG.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[60px] z-0 pointer-events-none" />
      <div
        className="absolute inset-x-0 bottom-0 h-[360px] md:h-[280px] lg:h-[210px] z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.86) 42%, rgba(255,255,255,1) 78%, rgba(255,255,255,1) 100%)",
        }}
      />

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      {/* TABLET FIX: Added clean padding steps and container spacing */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-[1000px] xl:max-w-[1320px] gap-10 lg:gap-8 xl:gap-12 px-6 md:px-10 py-4 lg:py-0">
        
        {/* LEFT COLUMN: Stacked on mobile, premium split-row on iPad, side column on desktop */}
        <div className="flex flex-col md:flex-row lg:flex-col items-center md:justify-between lg:justify-start gap-6 w-full lg:w-[320px] xl:w-[427px] text-center md:text-left">
          
          {/* Header Title + Subtitle Wrapper */}
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-3 w-full md:max-w-[380px] lg:max-w-none">
            {/* FAQs Badge Heading */}
            <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full px-8 lg:px-9 py-3 w-fit bg-white/10">
              <h2 className={`text-[#58595B] font-bold font-montserrat leading-none text-center tracking-[0px] capitalize ${locale === 'en'
                  ? "text-2xl md:text-2xl lg:text-[36px]"
                  : "text-[20px] md:text-[24px] lg:text-[32px]"
                }`}>
                {t('title')}
              </h2>
            </header>

            {/* Main Subtitle */}
            <h3 className="text-[#58595B] font-montserrat font-bold text-[30px] md:text-[34px] lg:text-[38px] leading-[115%] tracking-[0px]">
              {t('subtitle')}
            </h3>
          </div>

          {/* Book Call Card with Balanced Shading */}
          <div
            className="relative p-8 flex flex-col items-center text-center bg-white/25 backdrop-blur-[20px] rounded-[34px] h-[236px] w-full max-w-[356px] justify-center shrink-0 md:mt-2 lg:mt-5"
            style={{ boxShadow: "13px 10px 25px 0px rgba(104, 33, 19, 0.08)" }}
          >
            {/* Gradient Border Mask */}
            <div
              className="absolute inset-0 rounded-[34px] pointer-events-none"
              style={{
                padding: "2px",
                background:
                  "linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            <h4 className="text-[20px] font-bold text-[#414042] mb-3">
              {t('book_title')}
            </h4>
            <p className="text-[#58595B] text-[15px] font-semibold mb-5 max-w-[240px] leading-tight">
              {t('book_desc')}
            </p>

            <button className="bg-[#EE4423] text-white px-5 py-3 rounded-full flex items-center gap-3 font-bold shadow-lg transition-all hover:scale-105 active:scale-95">
              <Image
                src="/images/sections/common/appointment-calendar.svg"
                width={20}
                height={20}
                alt="calendar"
                className="brightness-0 invert"
                style={{ width: "auto", height: "auto" }}
              />
              {t('book_button')}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Expands fully across tablet screen layout */}
        <div className="w-full lg:flex-1 flex flex-col gap-3.5 md:items-center lg:items-start">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="relative transition-all duration-500 bg-white/30 backdrop-blur-[20px] w-full max-w-full lg:max-w-[762px]"
                style={{ borderRadius: "30px" }}
              >
                {/* Gradient Border Mask */}
                <div
                  className="absolute inset-0 rounded-[30px] pointer-events-none"
                  style={{
                    padding: "2px",
                    background:
                      "linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="relative w-full flex items-center justify-between px-6 md:px-8 py-5 text-left z-10 select-none"
                >
                  <span className="text-[#414042] font-bold text-[17px] md:text-[19px] lg:text-[20px] leading-tight pr-4">
                    {faq.question}
                  </span>

                  {/* Plus/Cross Button */}
                  <div className="shrink-0 w-4 h-4 flex items-center justify-center relative scale-90">
                    <div
                      className={`absolute w-full h-[2.5px] bg-[#58595B] rounded-full transition-transform duration-300 ${isOpen ? "rotate-[135deg]" : "rotate-0"}`}
                    />
                    <div
                      className={`absolute h-full w-[2.5px] bg-[#58595B] rounded-full transition-transform duration-300 ${isOpen ? "rotate-[135deg]" : "rotate-0"}`}
                    />
                  </div>
                </button>

                <div
                  className={`relative z-10 px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[220px] pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-[#58595B] text-[14px] md:text-[15px] font-semibold leading-relaxed max-w-[96%]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}