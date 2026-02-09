"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const patientStories = [
  {
    name: "Richard Gruber",
    location: "Austria",
    image: "/images/patient Stories/img1.jpg",
    rating: 4,
  },
  {
    name: "Sophie Verschueren",
    location: "Australia",
    image: "/images/patient Stories/img2.jpg",
    rating: 4,
  },
  {
    name: "Dylan Walters",
    location: "United States",
    image: "/images/patient Stories/img3.jpg",
    rating: 5,
  },
  {
    name: "Ella Huber",
    location: "Germany",
    image: "/images/patient Stories/img.jpg",
    rating: 3,
  },
];

export default function PatientStories() {
  return (
    <section className="relative flex w-full flex-col items-center bg-white py-20 overflow-hidden font-sans">
      
      {/* ================= HEADING ================= */}
      <div 
        className="relative z-10 flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-16 px-10"
        style={{ width: "min(489px, 90vw)", height: "73px" }}
      >
        <h2 className="text-[#58595B] font-bold text-2xl lg:text-[32px] leading-none">
          Patient Stories
        </h2>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1320px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {patientStories.map((patient, index) => (
            <div key={index} className="flex flex-col cursor-pointer">
              
              {/* Media Container */}
              <div 
                className="relative overflow-hidden bg-gray-100 shadow-md"
                style={{ 
                  width: "100%", 
                  height: "517px", 
                  borderRadius: "40px",
                }}
              >
                <Image 
                  src={patient.image} 
                  alt={patient.name} 
                  fill 
                  className="object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  {/* The Button Body with Glass Effect */}
                  <div 
                    className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-3"
                    style={{
                      background: "rgba(236, 236, 236, 0.55)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      /* This mask creates the hollow 'cutout' play triangle in the center */
                      maskImage: "radial-gradient(circle, transparent 100%, black 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M8 5v14l11-7z'/%3E%3C/svg%3E\")",
                      WebkitMaskImage: "linear-gradient(black, black), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M8 5v14l11-7z'/%3E%3C/svg%3E\")",
                      maskComposite: "exclude",
                      WebkitMaskComposite: "xor",
                      maskPosition: "center",
                      maskRepeat: "no-repeat",
                      maskSize: "100%, 40px"
                    }}
                  >
                    {/* Empty container because the 'icon' is now a mask cutout */}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-6 px-4 text-left">
                <div className="flex gap-1 mb-2 justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < patient.rating ? "#FBBF24" : "none"} 
                      className={i < patient.rating ? "text-[#FBBF24]" : "text-gray-300"}
                    />
                  ))}
                </div>
                
                <h3 className="text-[#414042] font-bold text-xl">
                  {patient.name}
                </h3>
                <p className="text-[#58595B] text-sm font-medium mt-1 uppercase tracking-widest opacity-80">
                  {patient.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM NAVIGATION ================= */}
      <div className="flex items-center justify-center gap-6 mt-16 w-full px-4">
        <button className="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg text-[#EE4423] border border-gray-100 hover:bg-[#EE4423] hover:text-white transition-all duration-300 active:scale-90">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        <button className="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg text-[#EE4423] border border-gray-100 hover:bg-[#EE4423] hover:text-white transition-all duration-300 active:scale-90">
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  );
}