"use client";

import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations, useLocale } from 'next-intl';

export default function WhyChooseUs() {
  const t = useTranslations('WhyChooseUs');
  const locale = useLocale();

  const reasons = [
    {
      title: t('reason_1_title'),
      description: t('reason_1_desc'),
      icon: "/images/sections/why-choose-us/hospital.svg",
    },
    {
      title: t('reason_2_title'),
      description: t('reason_2_desc'),
      icon: "/images/sections/why-choose-us/costs.svg",
    },
    {
      title: t('reason_3_title'),
      description: t('reason_3_desc'),
      icon: "/images/sections/why-choose-us/expert-doctors.svg",
    },
    {
      title: t('reason_4_title'),
      description: t('reason_4_desc'),
      icon: "/images/sections/why-choose-us/assistance.svg",
    },
  ];

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false
  }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative z-10 w-full lg:mt-0 overflow-hidden py-12 lg:py-6">
      <div
        className="relative flex flex-col items-center justify-center mx-auto lg:pt-[80px] lg:pb-20 px-0 lg:px-0"
        style={{ maxWidth: "1319px", fontFamily: "Montserrat, sans-serif" }}
      >
        
        {/* ================= HEADER SEGMENTATION ================= */}
        {/* Mobile & LG Desktop Header wrapper (Kept original side-by-side framework for lg) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:flex-row lg:justify-center lg:gap-[30px] xl:gap-[80px]">

          {/* ORIGINAL MOBILE HEADER (Hidden on MD/Tablet and Desktop LG) */}
          <header className="flex flex-col items-center md:hidden mb-12 px-6">
            <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-6 px-10 py-4 w-fit mx-auto">
              <h2 className={`text-[#58595B] font-bold font-montserrat leading-none text-center tracking-[0px] capitalize ${locale === 'en' ? "text-2xl" : "text-[20px]"}`}>
                {t('title')}
              </h2>
            </div>
            <p className="text-[#58595B] text-base font-medium leading-relaxed max-w-[500px]">
              {t('header_desc')}
            </p>
          </header>

          {/* TARGETED TABLET/IPAD HEADER (Renders directly on top ONLY on md layout views) */}
          <header className="hidden md:max-lg:flex flex-col items-center text-center mb-12 px-6 w-full">
            <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-6 px-10 py-4 w-fit mx-auto bg-white">
              <h2 className={`text-[#58595B] font-bold font-montserrat leading-none text-center tracking-[0px] capitalize ${locale === 'en' ? "text-3xl" : "text-[28px]"}`}>
                {t('title')}
              </h2>
            </div>
            <p className="text-[#58595B] text-lg font-medium leading-relaxed max-w-[600px]">
              {t('header_desc')}
            </p>
          </header>

          {/* ORIGINAL DESKTOP RIGHT SECTION (Unchanged layout structural positioning on lg) */}
          <div className="hidden lg:flex flex-col items-start text-left max-w-[340px] xl:max-w-[440px] order-2 lg:pt-[50px] xl:pt-[70px] px-6 lg:px-0">
            <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-6 px-10 lg:px-12 py-4 lg:py-4 w-fit">
              <h2 className={`text-[#58595B] font-bold font-montserrat leading-none text-center tracking-[0px] capitalize ${locale === 'en' ? "text-2xl md:text-4xl lg:text-[38px]" : "text-[20px] md:text-[28px] lg:text-[34px]"}`}>
                {t('title')}
              </h2>
            </header>
            <p className="text-[#58595B] text-lg xl:text-[18px] font-medium leading-relaxed mb-8">
              {t('header_desc')}
            </p>
            <button className="flex items-center gap-3 px-10 py-4 rounded-full bg-[#EE4423] text-white font-bold text-lg hover:bg-[#d63a1b] transition-all active:scale-95">
              {t('contact_button')} <span className="text-xl" aria-hidden="true">›</span>
            </button>
          </div>

          {/* ================= CAROUSEL LAYOUTS (Mobile Only) ================= */}
          {/* Strict breakpoint check hides the mobile embla component on MD screens */}
          <div className="block md:hidden w-full overflow-hidden mb-8" ref={emblaRef}>
            <div className="flex">
              {reasons.map((item, index) => (
                <article key={index} className="flex-[0_0_75%] min-w-0 px-2">
                  <div className="relative flex flex-col items-start bg-white/60 backdrop-blur-md p-6 h-[200px] border border-orange-100/50 rounded-[25px]">
                    <div className="w-10 h-10 mb-4">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={40}
                        height={40}
                        style={{ height: 'auto' }}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[#58595B] font-bold text-base leading-tight text-left mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#58595B] text-xs font-medium leading-relaxed text-left line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ================= CARD DISPLAYS (iPad Grid & Desktop Grid Split) ================= */}
          
          {/* TARGETED TABLET/IPAD 2x2 CENTERING GRID (Runs exclusively on md screens) */}
          <div className="hidden md:max-lg:grid grid-cols-2 w-full max-w-[640px] gap-6 px-6 mb-4">
            {reasons.map((item, index) => (
              <article
                key={index}
                className={`relative flex flex-col items-start text-left bg-white/40 backdrop-blur-md ${index % 2 !== 0 ? "mt-6" : ""}`}
                style={{
                  maxWidth: "290px",
                  minHeight: "220px",
                  borderRadius: "36px",
                  padding: "24px",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[36px] pointer-events-none"
                  aria-hidden="true"
                  style={{
                    padding: '3px',
                    background: 'linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className="flex items-center justify-center mb-5 w-11 h-11 shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    style={{ height: 'auto' }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[#58595B] font-bold text-base mb-3 leading-tight">{item.title}</h3>
                <p className="text-[#58595B] text-xs font-medium leading-relaxed opacity-90">{item.description}</p>
              </article>
            ))}
          </div>

          {/* ORIGINAL DESKTOP GRID (Runs exclusively on lg and up) */}
          <div className="hidden lg:grid grid-cols-2 w-full max-w-[500px] xl:max-w-[620px] gap-4 xl:gap-6 order-1 px-6 lg:px-0">
            {reasons.map((item, index) => (
              <article
                key={index}
                className={`relative flex flex-col items-start text-left transition-all duration-500 hover:-translate-y-2 w-full mx-auto bg-white/40 backdrop-blur-md ${index % 2 !== 0 ? "lg:mt-8" : ""}`}
                style={{
                  maxWidth: "280px",
                  minHeight: "240px",
                  borderRadius: "36px",
                  padding: "var(--card-padding, 30px)",
                }}
              >
                <style jsx>{`
                  @media (min-width: 1024px) and (max-width: 1279px) {
                    article {
                      max-width: 260px !important;
                      padding: 25px !important;
                    }
                  }
                `}</style>
                <div
                  className="absolute inset-0 rounded-[36px] pointer-events-none"
                  aria-hidden="true"
                  style={{
                    padding: '3px',
                    background: 'linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className="flex items-center justify-center mb-5 w-11 h-11 xl:w-[56px] xl:h-[56px] shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    style={{ height: 'auto' }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[#58595B] font-bold text-lg xl:text-[20px] mb-3 leading-tight">{item.title}</h3>
                <p className="text-[#58595B] text-sm xl:text-[14px] font-medium leading-relaxed opacity-90">{item.description}</p>
              </article>
            ))}
          </div>

        </div>

        {/* ORIGINAL MOBILE CTA BUTTON (Hidden on Desktop, Visible on Mobile & iPad View) */}
        <div className="lg:hidden w-full flex justify-center mt-8 px-6">
          <button className="flex items-center gap-3 px-10 py-4 rounded-full bg-[#EE4423] text-white font-bold text-lg active:scale-95 transition-all">
            {t('contact_button')} <span className="text-xl" aria-hidden="true">›</span>
          </button>
        </div>

      </div>
    </section>
  );
}