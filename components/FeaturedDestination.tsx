"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  { name: "India", icon: "/images/maps/indiamap.png" },
  { name: "United Kingdom", icon: "/images/maps/ukmap.png" },
  { name: "Saudi Arab", icon: "/images/maps/saudimap.png" },
  { name: "Thailand", icon: "/images/maps/thailan.png" },
  { name: "UAE", icon: "/images/maps/uae.png" },
];

export default function FeaturedDestination() {
  return (
    <div className="relative z-20">
      <section className="relative w-full overflow-hidden bg-white lg:min-h-[750px] flex flex-col items-center justify-center py-16 lg:py-0 lg:mt-[-50px]">
        
        {/* ================= BACKGROUND ILLUSTRATION ================= */}
        {/* Center alignment fix: used left-1/2 and translate-x to keep it centered behind content */}
        <div
          className="absolute pointer-events-none z-0 hidden lg:block lg:w-[1552px] lg:h-[573px] lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <Image
            src="/images/backgrounds/featureddestinanotinbg.png"
            alt="World Landmarks Illustration"
            fill
            sizes="1552px"
            className="object-contain opacity-100 saturate-[0]"
            priority
          />
        </div>

        {/* ================= CONTENT WRAPPER ================= */}
        <div className="relative z-10 flex flex-col items-center mx-auto px-6 w-full max-w-[1200px]">
          
          {/* Header Block */}
          <div className="flex flex-col items-center mb-12 lg:mb-[60px] gap-6 lg:gap-[30px] text-center w-full lg:mt-[-120px]">
            <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full px-6 lg:px-10 py-3 lg:h-[73px] w-fit">
              <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] font-montserrat leading-tight">
                Featured Destination
              </h2>
            </div>

            <p className="text-[#58595B] font-montserrat font-medium max-w-[700px] text-base lg:text-[18px] leading-relaxed">
              Discover leading medical destinations known for world-class
              treatment, modern hospitals, and seamless patient experience.
            </p>
          </div>

          {/* ================= DESTINATION CARDS ================= */}
          {/* Ensure grid and flex logic are centered */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-center justify-center gap-4 lg:gap-[48px] w-full max-w-fit mx-auto lg:mt-[100px]">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="
                  relative flex flex-col items-center justify-center 
                  w-full min-w-[140px] lg:w-[180px] h-[150px] lg:h-[189px] 
                  rounded-[25px] lg:rounded-[35px]
                  transition-all duration-500 hover:-translate-y-2
                  bg-white/40 backdrop-blur-md overflow-hidden
                "
              >
                {/* DUAL GRADIENT BORDER SYSTEM */}
                <div 
                  className="absolute inset-0 rounded-[25px] lg:rounded-[35px] pointer-events-none"
                  style={{
                    padding: "1px",
                    background: "linear-gradient(to right, #ffffff, #ffffff)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <div className="relative w-[50px] h-[50px] lg:w-[66px] lg:h-[66px] mb-3 lg:mb-4">
                  <Image
                    src={dest.icon}
                    alt={dest.name}
                    fill
                    sizes="66px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[#58595B] font-montserrat font-bold text-center text-sm lg:text-[16px] px-2 leading-tight">
                  {dest.name}
                </span>
              </div>
            ))}
          </div>

          {/* Navigation Controls - Centered Wrapper */}
          <div className="flex justify-center items-center gap-4 mt-12 w-full">
            <button className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[#EE4423] shadow-md hover:bg-[#EE4423] hover:text-white transition-all focus:outline-none">
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[#EE4423] shadow-md hover:bg-[#EE4423] hover:text-white transition-all focus:outline-none">
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}