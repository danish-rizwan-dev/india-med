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
  // Hardcoded techniques from the image to match high-fidelity design
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
    <div className="w-full font-montserrat">
      
      {/* ─── TOP SECTION: HEADERS ─── */}
      <div className="bg-white py-16 text-center px-4">
        <h2 className="text-[#58595B] font-bold text-[47px] leading-none mb-4 max-w-[765px] mx-auto">
          {specLang.techniques_title_full || tShared('techniques_used')}
        </h2>
        <p className="text-[#58595B] font-semibold text-[18px] leading-none max-w-[573px] mx-auto">
          {specLang.techniques_subtitle_full || tShared('hospitals_equipped')}
        </p>
      </div>

      {/* ─── MIDDLE SECTION: THE BLURRED TABLE ON BG IMAGE ─── */}
      <div className="relative w-full min-h-[1016px] flex flex-col items-center justify-start">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <Image 
            src="/images/specialities/cardiological-assistance/techniquesUsedInCardioSectionBg.jpg"
            alt="Techniques Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          {/* Inner Shadow simulated with gradient */}
          <div className="absolute inset-0 shadow-[inset_0px_150px_200px_0px_rgba(39,8,2,1)]" />
        </div>

        {/* The Blurred Wall / Card */}
        <div className="relative z-20 w-full max-w-[1319px] min-h-[900px] bg-[rgba(80,18,5,0.07)] backdrop-blur-md rounded-[40px] border border-white/10 p-12 lg:p-16 lg:pb-32 flex flex-col gap-8 mx-4 mt-[30px]">
          
          {/* Table Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 border-b border-white/20 pb-4">
            <div className="lg:col-span-1">
              <span className="text-[#EE4423] font-bold text-[42px] leading-none">{specLang.techniques_label || tShared('techniques')}</span>
            </div>
            <div className="lg:col-span-3 lg:col-start-3">
              <span className="text-[#EE4423] font-bold text-[42px] leading-none">{specLang.description_label || tShared('description')}</span>
            </div>
          </div>

          {/* Table Rows */}
          {(specLang.techniques_list_custom || displayTechniques).map((item: any, idx: number) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-5 gap-8 border-b border-white/10 py-6 last:border-b-0 items-center">
              <div className="lg:col-span-1">
                <span className="text-white font-bold text-[20px] leading-none">
                  {item.title}
                </span>
              </div>
              <div className="lg:col-span-3 lg:col-start-3">
                <p className="text-white font-semibold text-[16px] leading-normal opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ─── BOTTOM SECTION: ORANGE COSTS DIV ─── */}
      <div className="bg-[#EE4423] text-white py-32 text-center px-4 relative z-10 pt-40 -mt-24">
        <div className="max-w-[909px] mx-auto flex flex-col gap-6">
          <h2 className="font-bold text-[47px] leading-none flex flex-col gap-2">
            <span>{specLang.costs_title_custom || tShared('affordable_excellence')}</span>
            <span>{specLang.costs_subtitle_custom || tShared('costs_in_india')}</span>
          </h2>
          <p className="font-semibold text-[18px] leading-relaxed max-w-[863px] mx-auto opacity-95">
            {specLang.costs_desc_custom || tShared('affordable_desc')}
          </p>
        </div>
      </div>

    </div>
  );
}
