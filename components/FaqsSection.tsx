"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "How does India Med help with medical treatments?",
    answer: "India Med connects you with top-tier healthcare providers, helps compare treatment options, and provides support throughout your medical journey."
  },
  {
    question: "What specialties does India Med cover?",
    answer: "We cover a wide range of specialties including Cardiology, Oncology, Orthopedics, and more."
  },
  {
    question: "How can I get a treatment quote?",
    answer: "You can upload your medical reports through our portal, and our experts will provide a detailed cost estimate within 24-48 hours."
  },
  {
    question: "Does India Med offer international patient services?",
    answer: "Yes, we provide full concierge services including visa assistance, airport transfers, and language interpretation."
  },
  {
    question: "How do I schedule an appointment with a doctor?",
    answer: "Simply book a call through our website or use the appointment feature to select your preferred specialist."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-24 min-h-[539px]">
      
      {/* ================= BACKGROUND LAYER ================= */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{ 
            width: "1562.78px", 
            height: "538.92px", 
            left: "-25px",
            top: "0"
        }}
      >
        <div className="relative w-full h-full">
          <Image 
            src="/images/backgrounds/background.png" 
            alt="background" 
            fill 
            className="object-cover"
          />
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[50px]" />
          {/* Fade out applied ONLY to background layer */}
          <div 
            className="absolute inset-0 bg-white" 
            style={{
              maskImage: "linear-gradient(to bottom, transparent 80%, white 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 80%, white 100%)"
            }}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-[1320px] gap-12 px-6">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-5 w-full lg:w-[427px]">
          {/* FAQs Heading */}
          <div 
            className="flex items-center justify-center border-2 border-[#58595B]"
            style={{ 
                width: "193px", 
                height: "73px", 
                borderRadius: "50px",
                paddingLeft: "40px",
                paddingRight: "40px",
                gap: "10px"
            }}
          >
            <span className="text-[#58595B] font-bold text-[28px] uppercase">FAQs</span>
          </div>

          {/* Frequently asked together / Questions below */}
          <h2 className="text-[#58595B] font-montserrat font-bold text-[42px] leading-[100%] tracking-[0px]">
            Frequently asked <br /> questions
          </h2>

          {/* Book Call Card with Shadow */}
          <div 
            className="relative mt-8 p-10 flex flex-col items-center text-center bg-white/40 rounded-[40px] h-[284px] justify-center"
            style={{ boxShadow: "13px 10px 25px 0px rgba(104, 33, 19, 0.1)" }}
          >
             {/* Gradient Border Mask */}
             <div
                className="absolute inset-0 rounded-[40px] pointer-events-none"
                style={{
                  padding: "3px",
                  background: "linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            
            <h4 className="text-[22px] font-bold text-[#414042] mb-3">Book a 15 min call</h4>
            <p className="text-[#58595B] text-[15px] mb-8 max-w-[240px] leading-snug">
              If you have any questions, just book a 15-minute call with us.
            </p>
            
            <button className="bg-[#EE4423] text-white px-8 py-3 rounded-full flex items-center gap-3 font-bold shadow-lg transition-all hover:scale-105">
              <Image 
                src="/images/icons/appointmentCalender.svg" 
                width={20} 
                height={20} 
                alt="calendar" 
              />
              Book Appointment
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col gap-5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="relative transition-all duration-500 bg-white/40"
                style={{ borderRadius: "30px", width: "100%", maxWidth: "762px" }}
              >
                {/* Gradient Border Mask */}
                <div
                  className="absolute inset-0 rounded-[30px] pointer-events-none"
                  style={{
                    padding: "3px",
                    background: "linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="relative w-full flex items-center justify-between p-7 text-left z-10"
                >
                  <span className="text-[#414042] font-bold text-[20px] lg:text-[22px]">{faq.question}</span>
                  
                  {/* Plus/Cross Button - Bold and Smaller */}
                  <div className="shrink-0 w-4 h-4 flex items-center justify-center relative scale-90">
                      <div className={`absolute w-full h-[3px] bg-[#58595B] rounded-full transition-transform duration-300 ${isOpen ? 'rotate-[135deg]' : 'rotate-0'}`} />
                      <div className={`absolute h-full w-[3px] bg-[#58595B] rounded-full transition-transform duration-300 ${isOpen ? 'rotate-[135deg]' : 'rotate-0'}`} />
                  </div>
                </button>

                <div 
                  className={`relative z-10 px-7 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[200px] pb-7 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#58595B] text-[16px] leading-relaxed max-w-[95%]">
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