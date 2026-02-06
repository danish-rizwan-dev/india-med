"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Phone, ArrowUpRight } from "lucide-react";

const hospitalData = [
  {
    location: "Lucknow",
    name: "India Med Super Speciality Hospital",
    description: "Spread across an area of 12.58 acres, Medanta Lucknow is one of the largest multi-super-specialty hospitals in Uttar Pradesh. Built with the aim to provide highest standard of tertiary healthcare...",
    image: "/images/backgrounds/lucknow-hosp.png",
  },
  {
    location: "Patna",
    name: "Jay Prabha Medanta Super Specialty Hospital",
    description: "Established in 2020, this super-specialty hospital began operations with an Out-Patient Department (OPD), followed by the operationalisation of the In-Patient Department (IPD) in 2021.",
    image: "/images/backgrounds/patna-hosp.jpg",
  }
];

export default function IndiaMedNetwork() {
  return (
    <section className="relative w-full flex flex-col items-center bg-white py-20 overflow-hidden">
      
      {/* ================= HEADING ================= */}
      {/* Width: 489px, Height: 73px, Border-radius: 50px */}
      <div 
        className="relative z-10 flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-16 px-10"
        style={{ width: "min(489px, 90vw)", height: "73px", gap: "10px" }}
      >
        <h2 className="text-[#58595B] font-bold text-2xl lg:text-[38px] font-montserrat leading-none">
          India Med Network
        </h2>
      </div>

      {/* ================= NETWORK CARDS WRAPPER ================= */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-[20px] w-full max-w-[1320px] px-4">
        
        {/* Navigation Arrows (Absolute positioned relative to cards) */}
        <button className="absolute left-[-20px] z-20 h-12 w-12 hidden xl:flex items-center justify-center rounded-full bg-white shadow-xl text-[#EE4423] border border-gray-100 hover:bg-[#EE4423] hover:text-white transition-all">
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        {hospitalData.map((hospital, index) => (
          <div 
            key={index}
            className="relative overflow-hidden bg-[#EE4423] transition-all duration-500 hover:shadow-2xl"
            style={{ 
              width: "min(650px, 100%)", 
              height: "400px", 
              borderRadius: "40px" 
            }}
          >
            {/* 1. TOP SECTION (Location & Title) */}
            <div className="p-8 pb-0 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin size={16} fill="white" />
                <span className="text-sm font-bold uppercase tracking-wider">{hospital.location}</span>
              </div>
              <h3 className="text-white font-bold text-2xl lg:text-[28px] leading-tight max-w-[300px]">
                {hospital.name}
              </h3>
            </div>

            {/* 2. HOSPITAL IMAGE (Top Right) */}
            <div className="absolute top-0 right-0 w-1/2 h-2/3 rounded-bl-[60px] overflow-hidden">
              <Image 
                src={hospital.image} 
                alt={hospital.name} 
                fill 
                className="object-cover"
              />
            </div>

            {/* 3. GLASSMORPHIC BOTTOM OVERLAY */}
            <div 
              className="absolute bottom-4 left-4 right-4 h-[180px] p-6 flex items-end justify-between"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "30px",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              <div className="flex flex-col gap-3 max-w-[65%]">
                <p className="text-white text-xs lg:text-[14px] font-medium leading-relaxed line-clamp-4">
                  {hospital.description}
                </p>
              </div>

              <div className="flex flex-col items-end gap-3">
                <button className="flex items-center gap-2 text-white font-bold text-sm hover:underline">
                  Know more 
                  <div className="bg-white rounded-full p-1 shadow-md">
                    <ArrowUpRight size={18} className="text-[#EE4423]" strokeWidth={3} />
                  </div>
                </button>
                
                <button className="bg-white text-[#58595B] px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105">
                  <Phone size={16} fill="#58595B" />
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        ))}

        <button className="absolute right-[-20px] z-20 h-12 w-12 hidden xl:flex items-center justify-center rounded-full bg-white shadow-xl text-[#EE4423] border border-gray-100 hover:bg-[#EE4423] hover:text-white transition-all">
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}