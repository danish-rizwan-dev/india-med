"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceBar() {
  const services = [
    { label: "Second Opinion", icon: "/images/icons/doctor.svg" },
    { label: "Get Health Checkup", icon: "/images/icons/gethealthcheckup.svg" },
    { label: "Homecare", icon: "/images/icons/homecare.svg" },
    {
      label: "Book a Virtual Consultation",
      icon: "/images/icons/virtualConsult.svg",
    },
    { label: "Book a Test", icon: "/images/icons/booktest.svg" },
  ];

  const arrowGlassStyle = `
    absolute z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full 
    transition-all duration-300 transform cursor-pointer
    border border-white/60 bg-white/40 text-[#EE4423] backdrop-blur-md
    shadow-[0_8px_32px_rgba(0,0,0,0.1)]
    hover:scale-110 hover:bg-[#EE4423] hover:text-white 
    hover:border-transparent hidden lg:flex
  `;

  return (
    <div className="relative w-full flex justify-center px-4 lg:px-0 z-40">
      <div
        className="
          relative flex flex-col lg:flex-row items-center justify-center
          w-full max-w-[1317px]
          h-auto lg:h-[226px]
          -translate-y-[10%] lg:-translate-y-1/2
          rounded-[30px] lg:rounded-[50px]
          p-4 lg:p-[23px]
          mb-[-50px] lg:mb-[10px] lg:mt-[-200px]
        "
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* GRADIENT BORDER DIV */}
        <div
          className="absolute inset-0 rounded-[30px] lg:rounded-[50px] pointer-events-none"
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

        <button className={`${arrowGlassStyle} lg:left-[-30px]`}>
          <ChevronLeft size={32} strokeWidth={3} />
        </button>

        {/* INNER CONTENT - REMOVED overflow-hidden */}
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center w-full h-full gap-4 lg:gap-0 rounded-[20px] lg:rounded-[40px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col items-center justify-center 
                bg-white/90 group cursor-pointer transition-all duration-500 
                hover:bg-[#EE4423] 
                w-full lg:flex-1 py-6 lg:py-0 min-h-[120px] lg:h-full
                /* Added z-index and rounded corners to individual items */
                rounded-[15px] lg:rounded-none first:lg:rounded-l-[40px] last:lg:rounded-r-[40px]
                lg:border-r border-gray-100 last:border-none
                hover:z-30 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]
              `}
            >
              <div
                className="mb-3 relative transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
                style={{ width: "36px", height: "40.32px" }}
              >
                <Image
                  src={service.icon}
                  alt={service.label}
                  fill
                  className="object-contain"
                />
              </div>

              <span
                className="text-center px-4 group-hover:text-white text-[#58595B] transition-colors duration-300 font-montserrat font-bold text-sm sm:text-base lg:text-[18px] leading-tight"
                style={{ maxWidth: "180px" }}
              >
                {service.label}
              </span>
            </div>
          ))}
        </div>

        <button className={`${arrowGlassStyle} lg:right-[-30px]`}>
          <ChevronRight size={32} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}