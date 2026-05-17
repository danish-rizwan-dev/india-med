"use client";

import React, { useState } from "react";
import { Plus, X, Calendar } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface SpecialityFAQProps {
  faqTitle: string;
  faqSubtitle: string;
  bookTitle: string;
  bookDesc: string;
  bookButton: string;
  faqItems: FAQItem[];
}

export default function SpecialityFAQ({
  faqTitle,
  faqSubtitle,
  bookTitle,
  bookDesc,
  bookButton,
  faqItems,
}: SpecialityFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-gray-50/50">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-[1320px] gap-12 px-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-[360px] xl:w-[427px] text-center lg:text-left">
          {/* FAQs Heading Badge */}
          <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full px-8 py-3.5 w-fit mx-auto lg:mx-0 bg-white shadow-sm">
            <h2 className="text-[#58595B] font-bold font-montserrat leading-none text-center tracking-[0px] capitalize text-lg md:text-xl lg:text-[22px]">
              {faqTitle}
            </h2>
          </header>

          <h3 className="text-[#414042] font-montserrat font-bold text-3xl md:text-[38px] leading-[1.1] tracking-tight mt-4">
            {faqSubtitle}
          </h3>

          {/* Book Call Card with Shadow */}
          <div
            className="relative mt-8 p-8 md:p-10 flex flex-col items-center text-center bg-white border border-gray-100 rounded-[40px] w-full justify-center shadow-xl"
            style={{ boxShadow: "13px 10px 25px 0px rgba(104, 33, 19, 0.05)" }}
          >
            <h4 className="text-[20px] font-bold text-[#414042] mb-3">
              {bookTitle}
            </h4>
            <p className="text-[#58595B] text-[15px] mb-6 max-w-[240px] leading-relaxed">
              {bookDesc}
            </p>

            <a
              href="#enquire-section"
              className="bg-[#EE4423] text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-3 font-bold shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98] w-full text-center"
            >
              <Calendar size={18} strokeWidth={2.5} />
              <span>{bookButton}</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="relative transition-all duration-300 bg-white border border-gray-100/80 shadow-sm"
                style={{
                  borderRadius: "24px",
                  width: "100%",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="relative w-full flex items-center justify-between p-6 lg:p-7 text-left z-10 transition-colors group"
                >
                  <span className="text-[#414042] font-bold text-[18px] lg:text-[20px] pr-4 group-hover:text-[#EE4423] transition-colors leading-snug">
                    {faq.question}
                  </span>

                  <div className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-[#EE4423]/10 transition-colors">
                    {isOpen ? (
                      <X size={14} className="text-[#EE4423] transition-transform duration-300 rotate-90" strokeWidth={3} />
                    ) : (
                      <Plus size={14} className="text-[#58595B] group-hover:text-[#EE4423] transition-transform duration-300" strokeWidth={3} />
                    )}
                  </div>
                </button>

                <div
                  className={`relative z-10 px-6 lg:px-7 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] pb-6 lg:pb-7 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-[#58595B] text-[15px] lg:text-[16px] leading-relaxed border-t border-gray-50 pt-4 whitespace-pre-line">
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
