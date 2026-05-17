import React from "react";
import Image from "next/image";
import { Phone, ChevronRight, Hospital, UserRound } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface SpecialityHeroProps {
  data: any;
  specLang: any;
  locale: string;
}

export default function SpecialityHero({
  data,
  specLang,
  locale
}: SpecialityHeroProps) {
  // Fallback to "Cardiology" if heroBadge is not available
  const badgeText = data.heroBadge || "Cardiology";
  const tShared = useTranslations('SpecialityShared');
  
  return (
    <section className="relative w-full max-w-[1320px] mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-[244px] font-montserrat">
      {/* LEFT SIDE CONTENT */}
      <div className="flex-1 flex flex-col gap-6 -translate-y-6">
        <h1 className="text-[#58595B] font-bold text-[47px] leading-none">
          {specLang.hero_title}
        </h1>
        
        <p className="text-[#58595B] font-semibold text-[18px] leading-none max-w-[600px]">
          {specLang.hero_desc}
        </p>

        <Link 
          href="#enquire"
          className="w-fit min-h-[40px] px-6 py-2 bg-[#EE4423] text-white font-bold text-[17px] rounded-[50px] flex items-center justify-center gap-[5px] active:scale-95 transition-all shadow-md mt-4 text-center leading-tight"
        >
          <Phone className="text-white shrink-0" size={16} strokeWidth={3} />
          <span>{tShared('enquire_now')}</span>
        </Link>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-[538px] flex gap-6">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Card 1: Dynamic Image */}
          <div className="relative w-[256.37px] h-[256.37px] rounded-[25.26px] overflow-hidden shadow-sm">
            <Image 
              src={`/images/specialities/${data.slug || 'cardiological-assistance'}/HeartimageHeroSection.jpg`} 
              alt={specLang.hero_title}
              fill
              className="object-cover"
            />
          </div>

          {/* Card 3: Top Hospitals */}
          <div className="bg-[#F5F5F5] w-[256.37px] h-[256.37px] rounded-[25.26px] pt-[34px] pr-[19px] pb-[33px] pl-[19px] flex flex-col justify-between shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Image 
                src={`/images/specialities/${data.slug || 'cardiological-assistance'}/hospital-buildingHeroSection.svg`}
                alt="Hospital Icon"
                width={40}
                height={40}
                className="mb-2"
              />
              <h3 className="text-[#EE4423] font-bold text-[20px]">{tShared('top_hospitals')}</h3>
              <p className="text-[#58595B] text-[14px] font-medium">{tShared('for_treatment', { badge: badgeText })}</p>
            </div>
            <Link href="#hospitals" className="bg-[#EE4423] text-white font-bold text-[14px] px-4 py-2.5 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all">
              {tShared('explore_hospitals')} <ChevronRight size={14} strokeWidth={3} />
            </Link>
          </div>
        </div>

        {/* Right Column (Staggered / Shifted Up) */}
        <div className="flex-1 flex flex-col gap-6 -translate-y-10">
          {/* Card 2: Get Free Quote */}
          <div className="bg-[#F5F5F5] w-[256.37px] h-[256.37px] rounded-[25.26px] pt-[34px] pr-[19px] pb-[33px] pl-[19px] flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-[#EE4423] font-bold text-[22px] mb-2">{tShared('get_free_quote')}</h3>
              <p className="text-[#58595B] text-[14px] font-medium leading-tight">
                {tShared('quote_desc')}
              </p>
            </div>
            <Link href="#quote" className="bg-[#EE4423] text-white font-bold text-[14px] px-4 py-2.5 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all">
              {tShared('quote_request')} <ChevronRight size={14} strokeWidth={3} />
            </Link>
          </div>

          {/* Card 4: Top Doctors (Highlighted) */}
          <div className="bg-[#EE4423] w-[256.37px] h-[256.37px] rounded-[25.26px] pt-[34px] pr-[19px] pb-[33px] pl-[19px] flex flex-col justify-between text-white shadow-md">
            <div className="flex flex-col items-center text-center">
              <Image 
                src={`/images/specialities/${data.slug || 'cardiological-assistance'}/doctorHeroSection.svg`}
                alt="Doctor Icon"
                width={40}
                height={40}
                className="brightness-0 invert mb-2"
              />
              <h3 className="font-bold text-[20px]">{tShared('top_doctors')}</h3>
              <p className="text-white/90 text-[14px] font-medium">{tShared('for_badge', { badge: badgeText })}</p>
            </div>
            <Link href="#doctors" className="bg-white text-[#EE4423] font-bold text-[14px] px-4 py-2.5 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all">
              {tShared('find_doctors')} <ChevronRight size={14} strokeWidth={3} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
