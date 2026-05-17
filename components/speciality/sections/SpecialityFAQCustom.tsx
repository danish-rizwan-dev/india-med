"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface FAQItem {
  question: string;
  answer: string;
}

interface SpecialityFAQCustomProps {
  faqItems: FAQItem[];
}

export default function SpecialityFAQCustom({ faqItems }: SpecialityFAQCustomProps) {
  const tShared = useTranslations('SpecialityShared');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Split faqItems into left and right columns (max 5 each as per design)
  const leftItems = faqItems.slice(0, 5);
  const rightItems = faqItems.slice(5, 10);

  return (
    <div className="relative w-full min-h-[607px] py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/sections/faq/background.png"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Blur Overlay from Homepage */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[50px]" />
        
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-10" />
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col items-center gap-12 px-4">
        
        {/* Heading Box */}
        <div className="border border-[#58595B] rounded-full w-fit px-10 py-4 min-h-[73px] flex items-center justify-center bg-white mx-auto">
          <h2 className="font-bold text-[32px] text-[#58595B] font-montserrat text-center leading-tight">
            {tShared('faqs')}
          </h2>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start w-full">
          
          {/* Left Side Questions */}
          <div className="flex flex-col gap-5 w-full max-w-[650px] mx-auto lg:mx-0">
            {leftItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="relative transition-all duration-500 bg-white/40 cursor-pointer"
                  style={{
                    borderRadius: "30px",
                    width: "100%",
                  }}
                >
                  {/* Gradient Border Mask from Homepage */}
                  <div
                    className="absolute inset-0 rounded-[30px] pointer-events-none"
                    style={{
                      padding: "3px",
                      background:
                        "linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  <button className="relative w-full flex items-center justify-between p-6 text-left z-10">
                    <span className="text-[#414042] font-bold text-[18px]">
                      {item.question}
                    </span>

                    {/* Plus/Cross Button from Homepage */}
                    <div className="shrink-0 w-4 h-4 flex items-center justify-center relative scale-90 ml-4">
                      <div
                        className={`absolute w-full h-[3px] bg-[#58595B] rounded-full transition-transform duration-300 ${isOpen ? "rotate-[135deg]" : "rotate-0"}`}
                      />
                      <div
                        className={`absolute h-full w-[3px] bg-[#58595B] rounded-full transition-transform duration-300 ${isOpen ? "rotate-[135deg]" : "rotate-0"}`}
                      />
                    </div>
                  </button>

                  <div
                    className={`relative z-10 px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-[#58595B] text-[15px] leading-relaxed border-t border-gray-100/50 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side Questions */}
          <div className="flex flex-col gap-5 w-full max-w-[650px] mx-auto lg:mx-0">
            {rightItems.map((item, index) => {
              const realIndex = index + 5;
              const isOpen = openIndex === realIndex;
              return (
                <div 
                  key={index} 
                  onClick={() => setOpenIndex(isOpen ? null : realIndex)}
                  className="relative transition-all duration-500 bg-white/40 cursor-pointer"
                  style={{
                    borderRadius: "30px",
                    width: "100%",
                  }}
                >
                  {/* Gradient Border Mask from Homepage */}
                  <div
                    className="absolute inset-0 rounded-[30px] pointer-events-none"
                    style={{
                      padding: "3px",
                      background:
                        "linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  <button className="relative w-full flex items-center justify-between p-6 text-left z-10">
                    <span className="text-[#414042] font-bold text-[18px]">
                      {item.question}
                    </span>

                    {/* Plus/Cross Button from Homepage */}
                    <div className="shrink-0 w-4 h-4 flex items-center justify-center relative scale-90 ml-4">
                      <div
                        className={`absolute w-full h-[3px] bg-[#58595B] rounded-full transition-transform duration-300 ${isOpen ? "rotate-[135deg]" : "rotate-0"}`}
                      />
                      <div
                        className={`absolute h-full w-[3px] bg-[#58595B] rounded-full transition-transform duration-300 ${isOpen ? "rotate-[135deg]" : "rotate-0"}`}
                      />
                    </div>
                  </button>

                  <div
                    className={`relative z-10 px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-[#58595B] text-[15px] leading-relaxed border-t border-gray-100/50 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
