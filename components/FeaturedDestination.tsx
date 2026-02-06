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
   <div className=" relative z-20">
     <section className="relative w-full overflow-hidden bg-white lg:min-h-[850px] ">
      {/* ================= BACKGROUND ILLUSTRATION ================= */}
      {/* Figma Specs: Width: 1552px, Height: 573px, Left: -20px */}
      <div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          width: "1552px",
          height: "573px",
          top: "0px",
          left: "-20px",
        }}
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
      <div className="relative z-10 flex flex-col items-center mx-auto px-6 py-16 lg:py-0 w-full lg:max-w-[1080px]">
        {/* ================= CONTENT WRAPPER ================= */}
        <div className="relative z-10 flex flex-col items-center mx-auto px-6 py-16 lg:py-0 w-full lg:max-w-[1080px]">
          {/* Header Block: Adjusted mt from [50px] to [0px] to lift it up */}
          <div className="flex flex-col items-center mt-0 lg:mt-0 lg:-translate-y-[20px] mb-12 lg:mb-[60px] gap-[30px]">
            <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full px-10 h-[73px]">
              <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] font-montserrat">
                Featured Destination
              </h2>
            </div>

            <p className="text-[#58595B] text-center font-montserrat font-medium max-w-[700px] text-base lg:text-[18px] leading-relaxed">
              Discover leading medical destinations known for world-class
              treatment, modern hospitals, and seamless patient experience.
            </p>
          </div>

          {/* Remaining components follow... */}
        </div>

        {/* ================= DESTINATION CARDS (lg:h: 189px) ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row justify-center gap-6 lg:gap-[48px] w-full">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="
                relative flex flex-col items-center justify-center 
                w-full max-w-[180px] h-[170px] rounded-[35px]
                transition-all duration-500 hover:-translate-y-2
                bg-white/40 backdrop-blur-md
                border 3px solid gradient-to-r from-[#FF8C00] to-[#EE4423] border-transparent bg-origin-border bg-clip-padding
                /* DUAL GRADIENT BORDER SYSTEM */
                before:content-[''] before:absolute before:inset-0 before:rounded-[35px] 
                before:p-[3px] 
                before:pointer-events-none
                before:[mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                before:[mask-composite:exclude]
                before:[Webkit-mask-composite:xor]
              "
            >
              <div className="relative w-[66px] h-[66px] mb-4">
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

        {/* Navigation Controls */}
        <div className="flex gap-4 mt-12 lg:mt-10">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[#EE4423] shadow-md hover:bg-[#EE4423] hover:text-white transition-all">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[#EE4423] shadow-md hover:bg-[#EE4423] hover:text-white transition-all">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
   </div>
  );
}
