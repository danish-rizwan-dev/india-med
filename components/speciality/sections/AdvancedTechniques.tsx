"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface AdvancedTechniquesProps {
  techniques: any[];
  specLang: any;
  slug: string;
}

export default function AdvancedTechniques({
  techniques,
  specLang,
  slug
}: AdvancedTechniquesProps) {
  const tShared = useTranslations('SpecialityShared');
  
  const displayTechniques = [
    {
      title: "3D Printing",
      desc: "It helps in creating a physical model of the patient's heart, which helps doctors to better understand the anatomy and surgery planning."
    },
    {
      title: "Robotic Assisted Surgery",
      desc: "It allows for minimally invasive procedures, which helps in improving precision, reducing the risk of complications, and providing faster recovery."
    },
    {
      title: "Advanced Imaging Equipment",
      desc: "Advanced imaging equipment, such as cardiac MRI and CT, allows for more accurate and detailed images of your heart, and it is also beneficial in monitoring treatment progress."
    },
    {
      title: "Implantable Devices",
      desc: "Devices such as pacemakers and defibrillators have allowed the treatment of various heart conditions such as arrhythmias and heart failure."
    },
    {
      title: "Extracorporeal Membrane Oxygenation (ECMO)",
      desc: "It's a technology that supports the heart and lungs in severe failure. ECMO is used in critical care settings for severe heart or lung failure and requires continuous monitoring in an intensive care unit."
    },
    {
      title: "Electrophysiology (EP) Lab",
      desc: "It helps in creating a physical model of the patient's heart, which helps doctors to better understand the anatomy and surgery planning."
    }
  ];

  return (
    <div className="w-full font-montserrat overflow-x-hidden">
      
      {/* ─── TOP SECTION: HEADERS ─── */}
      <div className="bg-white py-12 md:py-16 text-center px-4">
        <h2 className="text-[#58595B] font-bold text-2xl sm:text-4xl lg:text-[47px] leading-tight mb-4 max-w-[765px] mx-auto">
          {specLang.techniques_title_full || tShared('techniques_used')}
        </h2>
        <p className="text-[#58595B] font-semibold text-sm sm:text-[18px] leading-relaxed max-w-[573px] mx-auto opacity-90">
          {specLang.techniques_subtitle_full || tShared('hospitals_equipped')}
        </p>
      </div>

      {/* ─── MIDDLE SECTION: THE BLURRED WALL ─── */}
      <div className="relative w-full min-h-fit lg:min-h-[1016px] flex flex-col items-center justify-start px-4 lg:px-0">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/specialities/cardiological-assistance/techniquesUsedInCardioSectionBg.jpg"
            alt="Techniques Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />
          <div className="absolute inset-0 shadow-[inset_0px_100px_150px_0px_rgba(39,8,2,0.85)] lg:shadow-[inset_0px_150px_200px_0px_rgba(39,8,2,1)]" />
        </div>

        {/* The Blurred Wall / Card */}
        <div className="relative z-20 w-full max-w-[1319px] bg-black/20 lg:bg-[rgba(80,18,5,0.07)] backdrop-blur-xl rounded-[24px] sm:rounded-[40px] border border-white/10 p-6 sm:p-10 lg:p-16 lg:pb-32 flex flex-col gap-2 sm:gap-4 my-8 lg:mt-[30px]">
          
          {/* Table Headers - Hidden on mobile for cleaner card UI stack */}
          <div className="hidden lg:grid grid-cols-5 gap-8 border-b border-white/20 pb-4">
            <div className="col-span-2">
              <span className="text-[#EE4423] font-bold text-[32px] xl:text-[42px] leading-none">{specLang.techniques_label || tShared('techniques')}</span>
            </div>
            <div className="col-span-3">
              <span className="text-[#EE4423] font-bold text-[32px] xl:text-[42px] leading-none">{specLang.description_label || tShared('description')}</span>
            </div>
          </div>

          {/* Table Rows */}
          {(specLang.techniques_list_custom || displayTechniques).map((item: any, idx: number) => (
            <div 
              key={idx} 
              className="flex flex-col lg:grid lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-8 border-b border-white/10 py-5 lg:py-6 last:border-b-0 text-left"
            >
              {/* Title Block */}
              <div className="lg:col-span-2">
                <span className="text-white font-bold text-[18px] sm:text-[20px] leading-snug">
                  {item.title}
                </span>
              </div>
              
              {/* Description Block */}
              <div className="lg:col-span-3">
                <p className="text-white/90 font-medium sm:font-semibold text-[14px] sm:text-[16px] leading-relaxed opacity-95">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ─── BOTTOM SECTION: ORANGE COSTS DIV ─── */}
      <div className="bg-[#EE4423] text-white py-16 sm:py-24 lg:py-32 text-center px-4 relative z-10 pt-20 lg:pt-40 -mt-12 lg:-mt-24">
        <div className="max-w-[909px] mx-auto flex flex-col gap-4 sm:gap-6">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-[47px] leading-tight flex flex-col gap-1 sm:gap-2">
            <span>{specLang.costs_title_custom || tShared('affordable_excellence')}</span>
            <span>{specLang.costs_subtitle_custom || tShared('costs_in_india')}</span>
          </h2>
          <p className="font-medium sm:font-semibold text-sm sm:text-[18px] leading-relaxed max-w-[863px] mx-auto opacity-95">
            {specLang.costs_desc_custom || tShared('affordable_desc')}
          </p>
        </div>
      </div>

    </div>
  );
}