"use client";

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from 'next-intl';

interface Doctor {
  name: string;
  exp: string;
  role: string;
  hospital: string;
  initials: string;
  gradient: string;
  image?: string;
}

interface RelatedDoctorsCustomProps {
  doctors?: Doctor[];
}

export default function RelatedDoctorsCustom({ doctors }: RelatedDoctorsCustomProps) {
  const tShared = useTranslations('SpecialityShared');
  
  // Initialize Embla Carousel for mobile auto-scrolling
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false
  }, [
    Autoplay({ delay: 3500, stopOnInteraction: false })
  ]);
  
  const docs = doctors && doctors.length > 0 ? doctors : [];
  
  if (docs.length === 0) return null;

  return (
    <div className="w-full py-12 md:py-20 flex flex-col items-center justify-center bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 md:gap-12 px-4 w-full">
        
        {/* Heading Box */}
        <div className="border border-[#58595B] rounded-full w-full max-w-[90%] sm:max-w-[425px] min-h-[56px] sm:h-[73px] flex items-center justify-center bg-white px-6 py-2 sm:p-0">
          <h2 className="font-bold text-xl sm:text-[32px] text-[#58595B] font-montserrat text-center leading-tight">
            {tShared('related_doctors')}
          </h2>
        </div>

        {/* ================= MOBILE & TABLET AUTO-SCROLLER VIEW ================= */}
        <div className="block lg:hidden w-full overflow-hidden px-2" ref={emblaRef}>
          <div className="flex">
            {docs.slice(0, 4).map((doc, index) => (
              <div 
                key={index}
                className="flex-[0_0_82%] sm:flex-[0_0_50%] min-w-0 px-3 pb-6 flex justify-center"
              >
                <div className="w-full max-w-[315px] h-[312px] bg-white rounded-[32px] shadow-[0px_12px_25px_0px_rgba(67,41,57,0.08)] flex flex-col items-center overflow-hidden border border-gray-100">
                  
                  {/* Image Container */}
                  <div className={`w-full h-[180px] relative flex items-center justify-center bg-gradient-to-br ${doc.gradient || 'from-gray-200 to-gray-300'} flex-shrink-0`}>
                    {doc.image ? (
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="(max-w-768px) 100vw, 315px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-white text-4xl font-bold font-montserrat opacity-80">{doc.initials}</span>
                    )}
                  </div>

                  {/* Info Container */}
                  <div className="flex flex-col items-center justify-between flex-1 py-4 w-full px-4 text-center">
                    <h3 className="font-bold text-lg sm:text-[20px] text-[#58595B] font-montserrat leading-tight line-clamp-1 w-full px-1">
                      {doc.name}
                    </h3>
                    <p className="font-semibold text-sm sm:text-[15px] text-[#58595B] font-montserrat leading-normal opacity-90">
                      {doc.exp.replace(/[^0-9+]/g, '')} {tShared('years_experience')}
                    </p>
                    <button className="font-bold text-[13px] text-[#EE4423] font-montserrat flex items-center gap-1 justify-center active:scale-95 transition-transform">
                      {tShared('enquire_now')} 
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-0.5">
                        <path d="M1 9L5 5L1 1" stroke="#EE4423" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP STATIC GRID VIEW ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-8 justify-center items-center w-full">
          {docs.slice(0, 4).map((doc, index) => (
            <div 
              key={index}
              className="w-[315px] h-[312px] bg-white rounded-[32px] shadow-[0px_15px_25px_0px_rgba(67,41,57,0.1)] flex flex-col items-center overflow-hidden mx-auto border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className={`w-[315px] h-[192px] relative flex items-center justify-center bg-gradient-to-br ${doc.gradient || 'from-gray-200 to-gray-300'}`}>
                {doc.image ? (
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="315px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-white text-5xl font-bold font-montserrat opacity-80">{doc.initials}</span>
                )}
              </div>

              {/* Info Container */}
              <div className="flex flex-col items-center justify-between flex-1 py-5 w-full px-4">
                <h3 className="font-bold text-[23px] text-[#58595B] font-montserrat text-center leading-tight">
                  {doc.name}
                </h3>
                <p className="font-semibold text-[16px] text-[#58595B] font-montserrat text-center leading-none">
                  {doc.exp.replace(/[^0-9+]/g, '')} {tShared('years_experience')}
                </p>
                <button className="font-bold text-[13px] text-[#EE4423] font-montserrat flex items-center gap-1 justify-center hover:translate-x-0.5 transition-transform duration-200">
                  {tShared('enquire_now')} 
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M1 9L5 5L1 1" stroke="#EE4423" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}