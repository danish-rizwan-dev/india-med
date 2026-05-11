"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isEn = locale === 'en';
  const isLongLocale = locale === 'kk' || locale === 'uz' || locale === 'ru';

  const CalendarIcon = () => (
    <div className="relative w-[16px] h-[16px] lg:w-[26px] lg:h-[24px] flex items-center justify-center flex-shrink-0">
      <Image
        src="/images/sections/common/appointment-calendar.svg"
        alt="Book appointment calendar icon"
        fill
        sizes="(max-width: 1024px) 16px, 26px"
        className="object-contain brightness-0 invert"
      />
    </div>
  );

  return (
    <section
      className="relative w-full bg-white overflow-hidden md:min-h-[700px] lg:min-h-[850px] h-[650px] lg:h-auto"
      aria-label="Affordable Medical Treatment in India"
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute pointer-events-none z-0 hidden md:block md:w-[400px] lg:w-[508px] lg:h-[723px] lg:top-[-70.33px] lg:right-0">
        <Image
          src="/images/sections/hero/background-grids.png"
          alt="Geometric background pattern"
          fill
          sizes="(max-width: 1024px) 400px, 508px"
          className="object-contain object-right"
          priority
        />
      </div>


      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative w-full max-w-[1512px] mx-auto h-full">

        {/* ================= DOCTOR IMAGE ================= */}
        <div
          className="
            absolute z-10
            /* Mobile Spec: 170px left */
            w-[215px] h-[287px] 
            top-[202px] left-[170px] 
            /* iPad Air & Pro Fix: Start Desktop-style layout at 'md' */
            md:z-20 md:w-[350px] md:h-[460px] md:top-[50px]
            md:left-[calc(100%-380px)] /* Keeps doctor on right for iPad Air */
            /* Desktop Spec: Matches your 853px left position exactly */
            lg:w-[426.39px] lg:h-[569.47px]
            lg:top-[22px] lg:left-[calc(max(600px,min(853px,58vw)))]
          "
        >
          <Image
            src="/images/sections/hero/doctor.png"
            alt="Expert healthcare professional in India providing world-class medical assistance"
            fill
            sizes="(max-width: 768px) 215px, (max-width: 1024px) 350px, 426px"
            priority
            className="object-contain"
          />
        </div>

        {/* ================= CONTENT BOX ================= */}
        <div
          className={`
            absolute flex flex-col items-center md:items-start
            /* Mobile Spec: 19px left */
            w-[357px] h-auto
            ${isLongLocale ? 'top-[10px]' : 'top-[32px]'} left-[19px]
            ${isLongLocale ? 'gap-[20px] lg:gap-[40px]' : 'gap-[40px] lg:gap-[45px]'} z-20
            /* iPad Air & Pro: Adjust left position to be fluid */
            md:max-w-[450px] md:top-[80px] md:left-[5vw]
            /* Desktop Spec: Matches your exact 75px top / 208px left specs from baseline */
            lg:w-full lg:max-w-[584px]
            lg:top-[75px] lg:left-[calc(max(40px,min(208px,14vw)))]
          `}
        >
          {/* Brand & Heading Group */}
          <div className={`flex flex-col w-full ${isLongLocale ? 'gap-[10px] lg:gap-[16px]' : 'gap-[20px]'} text-center md:text-left`}>
            <span
              className={`font-montserrat font-bold text-[#EE4423] block ${isLongLocale ? 'text-[22px] lg:text-[26px] leading-tight' : 'text-[20px] lg:text-[24px] leading-[39.19px]'}`}
            >
              {t('brand')}
            </span>

            <h1
              className={`
                text-[#444444] font-montserrat font-bold
                ${locale === 'kk' || locale === 'uz' ? 'text-[30px] md:text-[38px] lg:text-[46px] leading-[1.0]' :
                  locale === 'ru' ? 'text-[32px] md:text-[42px] lg:text-[52px] leading-[1.0]' :
                    'text-[28px] md:text-[36px] lg:text-[47px] leading-[1.1] lg:leading-tight'}
              `}
            >
              {t('heading_main')}
              <span className="text-[#EE4423]"> {t('heading_highlight')}</span>
            </h1>

            <p
              className={`
                font-montserrat font-medium text-[#58595B]
                ${locale === 'kk' || locale === 'uz' ? 'text-[14px] lg:text-[17px] leading-relaxed' :
                  locale === 'ru' ? 'text-[15px] lg:text-[19px] leading-relaxed' :
                    'text-[14px] lg:text-[17px] leading-relaxed lg:leading-normal'}
                w-[203px] md:w-full 
                text-left
                mx-0
              `}
            >
              {t('description')}
            </p>
          </div>

          {/* Consult Button */}
          <Link
            href="/appointment"
            aria-label="Book a medical consultation with India Med experts"
            title="Book a medical consultation"
            className={`
              flex items-center justify-center
              bg-[#EE4423] text-white
              transition-transform active:scale-95
              shadow-[0px_10px_20px_rgba(238,68,35,0.2)]
              rounded-full mr-auto lg:mr-0
              ${isLongLocale ? 'w-fit px-[25px] h-[48px] lg:h-[49px] gap-[10px]' : 'w-[158.9px] lg:w-[252px] h-[48px] lg:h-[49px] gap-[10px] px-[20px]'}
            `}
          >
            <CalendarIcon />
            <span className={`font-montserrat font-bold whitespace-nowrap ${isLongLocale ? 'text-[15px] lg:text-[18px]' : 'text-[14px] lg:text-[17px]'}`}>
              {t('button')}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
