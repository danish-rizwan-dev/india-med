"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceBar() {
  const services = [
    { label: "Second Opinion", icon: "/images/icons/docicon.png" },
    { label: "Get Health Checkup", icon: "/images/icons/checkup.png" },
    { label: "Homecare", icon: "/images/icons/homecare.png" },
    { label: "Book a Virtual Consultation", icon: "/images/icons/vc.png" },
    { label: "Book a Test", icon: "/images/icons/test.png" },
  ];

  const arrowGlassStyle = `
    hidden lg:flex lg:absolute z-50 lg:h-[60px] lg:w-[60px] items-center justify-center rounded-full 
    transition-all duration-300 transform cursor-pointer
    border border-white/60 bg-white/40 text-[#EE4423] lg:backdrop-blur-md
    shadow-[0_8px_32px_rgba(0,0,0,0.1)]
    hover:scale-110 
    hover:bg-[#EE4423] 
    hover:text-white 
    hover:border-transparent
    hover:shadow-[0_20px_40px_rgba(238,68,35,0.4)]
  `;

  return (
    <div className="relative lg:static w-full flex justify-center px-4 lg:px-0 overflow-x-hidden">
     <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-20"
            style={{
              backgroundImage: "url('/images/backgrounds/background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              /* Soft fade only at the VERY TOP and VERY BOTTOM of the entire combined block */
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 20%)",
              maskImage:
                "linear-gradient(to bottom, transparent 10%, black 10%, black 90%, transparent 20%)",
            }}
          />
        </div>
      <div
        className="
          relative z-30 flex flex-col lg:flex-row items-center justify-center
          w-full max-w-[1317px] lg:absolute lg:top-[613px] lg:left-[98px]
          h-auto lg:h-[226px]
          rounded-[30px] lg:rounded-[50px]
          p-6 lg:p-0
          my-8 lg:my-0
        "
        style={{
          border: "3px solid rgba(255, 140, 0, 0.18)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* LEFT ARROW */}
        <button className={`${arrowGlassStyle} lg:left-[-30px]`}>
          <ChevronLeft size={32} strokeWidth={3} />
        </button>

        {/* INNER CONTENT */}
        <div
          className="
            relative z-10 flex flex-col lg:flex-row items-center justify-center 
            w-full lg:w-[1256.49px] h-auto lg:h-[179px] gap-4 lg:gap-1
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center 
                bg-white/90 group cursor-pointer transition-all duration-300 hover:bg-white
                w-full lg:flex-1 h-[140px] lg:h-full
                rounded-[20px]
                ${index === 0 ? "lg:rounded-l-[40px] lg:rounded-r-none" : ""}
                ${index === services.length - 1 ? "lg:rounded-r-[40px] lg:rounded-l-none" : ""}
                ${index > 0 && index < services.length - 1 ? "lg:rounded-none" : ""}
              `}
            >
              {/* ICON */}
              <div
                className="mb-3 relative transition-all duration-300 group-hover:scale-110 lg:w-[36px] lg:h-[40.32px] w-[36px] h-[40.32px]"
              >
                <Image
                  src={service.icon}
                  alt={service.label}
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <span
                className="text-center px-2 group-hover:text-[#EE4423] text-[#58595B] transition-colors duration-300 lg:w-[180px] lg:h-[44px] w-auto h-auto flex items-center justify-center"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                }}
              >
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button className={`${arrowGlassStyle} lg:right-[-30px]`}>
          <ChevronRight size={32} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}