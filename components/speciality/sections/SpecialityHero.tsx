import React from "react";
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react";
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
  const badgeText = data.heroBadge || "Cardiology";
  const tShared = useTranslations('SpecialityShared');
  
  return (
    <section className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-12 xl:gap-[140px] font-montserrat overflow-hidden">
      
      {/* LEFT SIDE CONTENT */}
      <div className="w-full flex-1 flex flex-col gap-5 md:gap-6 text-center lg:text-left items-center lg:items-start lg:-translate-y-6">
        <h1 className="text-[#58595B] font-bold text-[32px] sm:text-[40px] lg:text-[47px] leading-tight lg:leading-none">
          {specLang.hero_title}
        </h1>
        
        <p className="text-[#58595B] font-semibold text-[15px] sm:text-[18px] leading-normal lg:leading-none max-w-[600px]">
          {specLang.hero_desc}
        </p>

        <Link 
          href="#enquire"
          className="w-full sm:w-fit min-h-[44px] px-8 py-2.5 bg-[#EE4423] text-white font-bold text-[17px] rounded-[50px] flex items-center justify-center gap-[5px] active:scale-95 transition-all shadow-md mt-2 text-center leading-tight hover:bg-[#d63a1b]"
        >
          <Phone className="text-white shrink-0" size={16} strokeWidth={3} />
          <span>{tShared('enquire_now')}</span>
        </Link>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-full lg:w-auto max-w-[538px] flex flex-col sm:flex-row gap-4 sm:gap-6 mx-auto">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 items-center sm:items-stretch">
          {/* Card 1: Dynamic Image */}
          <div className="relative w-full max-w-[256px] sm:w-[256px] h-[240px] sm:h-[256px] rounded-[25.26px] overflow-hidden shadow-sm flex-shrink-0">
            <Image 
              src="/images/specialities/cardiological-assistance/HeartimageHeroSection.jpg" 
              alt={specLang.hero_title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Card 3: Top Hospitals */}
          <div className="bg-[#F5F5F5] w-full max-w-[256px] sm:w-[256px] h-[256px] rounded-[25.26px] pt-[34px] pr-[19px] pb-[33px] pl-[19px] flex flex-col justify-between shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Image 
                src="/images/specialities/cardiological-assistance/hospital-buildingHeroSection.svg"
                alt="Hospital Icon"
                width={40}
                height={40}
                className="mb-2"
              />
              <h3 className="text-[#EE4423] font-bold text-[18px] sm:text-[20px]">{tShared('top_hospitals')}</h3>
              <p className="text-[#58595B] text-[13px] sm:text-[14px] font-medium mt-0.5">{tShared('for_treatment', { badge: badgeText })}</p>
            </div>
            <Link href="#hospitals" className="bg-[#EE4423] text-white font-bold text-[14px] px-4 py-2.5 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all hover:bg-[#d63a1b]">
              {tShared('explore_hospitals')} <ChevronRight size={14} strokeWidth={3} />
            </Link>
          </div>
        </div>

        {/* Right Column (Staggered / Shifted Up on Desktop Only) */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 items-center sm:items-stretch lg:-translate-y-10">
          {/* Card 2: Get Free Quote */}
          <div className="bg-[#F5F5F5] w-full max-w-[256px] sm:w-[256px] h-[256px] rounded-[25.26px] pt-[34px] pr-[19px] pb-[33px] pl-[19px] flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-[#EE4423] font-bold text-[20px] sm:text-[22px] mb-2 text-center sm:text-left">{tShared('get_free_quote')}</h3>
              <p className="text-[#58595B] text-[13px] sm:text-[14px] font-medium leading-tight text-center sm:text-left">
                {tShared('quote_desc')}
              </p>
            </div>
            <Link href="#quote" className="bg-[#EE4423] text-white font-bold text-[14px] px-4 py-2.5 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all hover:bg-[#d63a1b]">
              {tShared('quote_request')} <ChevronRight size={14} strokeWidth={3} />
            </Link>
          </div>

          {/* Card 4: Top Doctors */}
          <div className="bg-[#EE4423] w-full max-w-[256px] sm:w-[256px] h-[256px] rounded-[25.26px] pt-[34px] pr-[19px] pb-[33px] pl-[19px] flex flex-col justify-between text-white shadow-md">
            <div className="flex flex-col items-center text-center">
              <Image 
                src="/images/specialities/cardiological-assistance/doctorHeroSection.svg"
                alt="Doctor Icon"
                width={40}
                height={40}
                className="brightness-0 invert mb-2"
              />
              <h3 className="font-bold text-[18px] sm:text-[20px]">{tShared('top_doctors')}</h3>
              <p className="text-white/90 text-[13px] sm:text-[14px] font-medium mt-0.5">{tShared('for_badge', { badge: badgeText })}</p>
            </div>
            <Link href="#doctors" className="bg-white text-[#EE4423] font-bold text-[14px] px-4 py-2.5 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all hover:bg-white/90">
              {tShared('find_doctors')} <ChevronRight size={14} strokeWidth={3} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}