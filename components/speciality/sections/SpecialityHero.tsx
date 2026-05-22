import React from "react";
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface SpecialityHeroProps {
  data: {
    heroBadge?: string;
  };
  specLang: {
    hero_title: string;
    hero_desc: string;
    image_alt?: string;
  };
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
    <section className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-12 xl:gap-[140px] font-montserrat overflow-hidden">
      
      {/* LEFT SIDE CONTENT - SEO SEMANTICS */}
      <div className="w-full flex-1 flex flex-col gap-5 md:gap-6 text-left items-start lg:-translate-y-6 order-1">
        {/* H1 Main Keyword Heading for Search Engines */}
        <h1 className="text-[#58595B] font-bold text-[28px] sm:text-[40px] lg:text-[47px] leading-tight lg:leading-none tracking-tight">
          {specLang.hero_title}
        </h1>
        
        <p className="text-[#58595B] font-medium text-[15px] sm:text-[18px] leading-relaxed max-w-[600px]">
          {specLang.hero_desc}
        </p>

        {/* DESKTOP-ONLY CTA (Hidden on mobile to avoid duplication) */}
        <div className="hidden sm:block mt-2">
          <Link 
            href="#enquire"
            className="w-fit min-h-[48px] px-8 py-2.5 bg-[#EE4423] text-white font-bold text-[17px] rounded-[50px] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md leading-tight hover:bg-[#d63a1b]"
            aria-label={`${tShared('enquire_now')} for ${badgeText}`}
          >
            <Phone className="text-white shrink-0" size={16} strokeWidth={3} />
            <span>{tShared('enquire_now')}</span>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE CONTENT - CLEANER MOBILE GRID */}
      <div className="w-full lg:w-auto max-w-[538px] grid grid-cols-2 gap-3 sm:gap-6 mx-auto order-2">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-3 sm:gap-6">
          {/* Card 1: Main Visual Asset */}
          <figure className="relative w-full h-[150px] sm:h-[256px] rounded-[20px] sm:rounded-[25.26px] overflow-hidden shadow-sm m-0">
            <Image 
              src="/images/specialities/cardiological-assistance/HeartimageHeroSection.jpg" 
              alt={specLang.image_alt || specLang.hero_title}
              fill
              priority
              sizes="(max-w: 640px) 50vw, 256px"
              className="object-cover"
            />
          </figure>

          {/* Card 2: Top Hospitals */}
          <div className="bg-[#F5F5F5] w-full min-h-[170px] sm:h-[256px] rounded-[20px] sm:rounded-[25.26px] p-3 sm:p-[24px_19px_33px_19px] flex flex-col justify-between shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Image 
                src="/images/specialities/cardiological-assistance/hospital-buildingHeroSection.svg"
                alt="" 
                width={36}
                height={36}
                className="mb-1 sm:mb-2"
              />
              <h2 className="text-[#EE4423] font-bold text-[14px] sm:text-[20px] leading-tight">{tShared('top_hospitals')}</h2>
              <p className="text-[#58595B] text-[11px] sm:text-[14px] font-medium mt-0.5 line-clamp-2">{tShared('for_treatment', { badge: badgeText })}</p>
            </div>
            <Link href="#hospitals" className="bg-[#EE4423] text-white font-bold text-[11px] sm:text-[14px] px-3 py-2 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all hover:bg-[#d63a1b] mt-1.5">
              <span className="truncate">{tShared('explore_hospitals')}</span> <ChevronRight size={12} strokeWidth={3} className="shrink-0" />
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3 sm:gap-6 lg:-translate-y-10">
          {/* Card 3: Get Free Quote */}
          <div className="bg-[#F5F5F5] w-full min-h-[170px] sm:h-[256px] rounded-[20px] sm:rounded-[25.26px] p-3 sm:p-[34px_19px_33px_19px] flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-[#EE4423] font-bold text-[14px] sm:text-[22px] mb-1 text-left">{tShared('get_free_quote')}</h2>
              <p className="text-[#58595B] text-[11px] sm:text-[14px] font-medium leading-tight text-left line-clamp-3 sm:line-clamp-none">
                {tShared('quote_desc')}
              </p>
            </div>
            <Link href="#quote" className="bg-[#EE4423] text-white font-bold text-[11px] sm:text-[14px] px-3 py-2 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all hover:bg-[#d63a1b] mt-1.5">
              <span className="truncate">{tShared('quote_request')}</span> <ChevronRight size={12} strokeWidth={3} className="shrink-0" />
            </Link>
          </div>

          {/* Card 4: Top Doctors */}
          <div className="bg-[#EE4423] w-full min-h-[170px] sm:h-[256px] rounded-[20px] sm:rounded-[25.26px] p-3 sm:p-[24px_19px_33px_19px] flex flex-col justify-between text-white shadow-md">
            <div className="flex flex-col items-center text-center">
              <Image 
                src="/images/specialities/cardiological-assistance/doctorHeroSection.svg"
                alt="" 
                width={36}
                height={36}
                className="brightness-0 invert mb-1 sm:mb-2"
              />
              <h2 className="font-bold text-[14px] sm:text-[20px] leading-tight">{tShared('top_doctors')}</h2>
              <p className="text-white/90 text-[11px] sm:text-[14px] font-medium mt-0.5 line-clamp-2">{tShared('for_badge', { badge: badgeText })}</p>
            </div>
            <Link href="#doctors" className="bg-white text-[#EE4423] font-bold text-[11px] sm:text-[14px] px-3 py-2 rounded-full flex items-center justify-center gap-1 w-full active:scale-95 transition-all hover:bg-white/90 mt-1.5">
              <span className="truncate">{tShared('find_doctors')}</span> <ChevronRight size={12} strokeWidth={3} className="shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE-ONLY CTA (Appears naturally below everything on mobile layout) */}
      <div className="w-full sm:hidden order-3 mt-4">
        <Link 
          href="#enquire"
          className="w-full min-h-[48px] px-8 py-3 bg-[#EE4423] text-white font-bold text-[16px] rounded-[50px] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md text-center leading-tight hover:bg-[#d63a1b]"
          aria-label={`${tShared('enquire_now')} for ${badgeText}`}
        >
          <Phone className="text-white shrink-0" size={18} strokeWidth={2.5} />
          <span>{tShared('enquire_now')}</span>
        </Link>
      </div>

    </section>
  );
}