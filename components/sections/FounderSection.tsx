"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations, useLocale } from 'next-intl';

/**
 * FounderSection Component
 * 
 * A high-fidelity section highlighting the leadership of India Med Service.
 */
export default function FounderSection() {
  const t = useTranslations('Leadership');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    duration: 30
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const leaders = [
    {
      name: t('faisal_name'),
      title: t('faisal_title'),
      image: "/images/sections/leadership/faisal-iqbal.svg",
      bio: [
        t('faisal_bio_1'),
        t('faisal_bio_2'),
        t('faisal_bio_3')
      ]
    },
    {
      name: t('daniyar_name'),
      title: t('daniyar_title'),
      image: "/images/sections/leadership/daniyar-aydimirov.svg",
      bio: [
        t('daniyar_bio')
      ]
    }
  ];

  const expertiseCards = [
    {
      title: t('expertise_title'),
      icon: "/images/sections/leadership/core-expertise.svg",
      list: t.raw('expertise_list') as string[]
    },
    {
      title: t('achievements_title'),
      icon: "/images/sections/leadership/key-achievements.svg",
      list: t.raw('achievements_list') as string[]
    },
    {
      title: t('services_title'),
      icon: "/images/sections/leadership/services-offered.svg",
      list: t.raw('services_list') as string[]
    }
  ];

  return (
    <section
      className="relative w-full bg-[#F14E2F] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden font-montserrat"
      id="leadership"
      aria-label="Leadership Team"
    >
      {/* ================= PREMIUM DECORATIVE STROKE ================= */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1511px] h-[1px] z-20"
        style={{
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)",
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.4)"
        }}
        aria-hidden="true"
      />

      {/* ================= BACKGROUND LINES (Desktop Only) ================= */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-[96px] top-0 h-full w-[1px]"
          style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%)" }} />
        <div className="absolute left-[1415px] top-0 h-full w-[1px]"
          style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%)" }} />
        <div className="absolute top-[170px] left-0 w-full h-[1px]"
          style={{ background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)" }} />
        <div className="absolute top-[780px] left-0 w-full h-[1px]"
          style={{ background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)" }} />
        <div className="absolute top-[1217px] left-0 w-full h-[1px]"
          style={{ background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-[1319px] mx-auto px-6 flex flex-col items-center">

        {/* ================= LEADERSHIP HEADER ================= */}
        <header className="mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center border-2 border-white rounded-full w-[240px] lg:w-[324px] h-[54px] lg:h-[73px] backdrop-blur-sm">
            <h2 className="text-white font-bold text-2xl lg:text-[42px] tracking-tight m-0">
              {t('title')}
            </h2>
          </div>
        </header>

        {/* ================= LEADER 1: FAISAL IQBAL ================= */}
        <div className="w-full flex flex-col items-center mb-12 lg:mb-[100px]">
          <article className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[76px] w-full">
            {/* Portrait Image */}
            <div className="relative flex-shrink-0 order-1 lg:order-2">
              <div className="relative w-[300px] h-[360px] lg:w-[365px] lg:h-[441px] border-[5px] border-white/40 rounded-tr-[60px] lg:rounded-tr-[80px] rounded-bl-[60px] lg:rounded-bl-[80px] p-2 bg-white/10 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden rounded-tr-[50px] lg:rounded-tr-[70px] rounded-bl-[50px] lg:rounded-bl-[70px]">
                  <Image
                    src={leaders[0].image}
                    alt={leaders[0].name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow max-w-[635px] text-white order-2 lg:order-1 text-left lg:text-left">
              <h3 className="text-3xl lg:text-[42px] font-bold leading-tight mb-2">
                {leaders[0].name}
              </h3>
              <p className="text-lg lg:text-[23px] font-bold mb-6 text-white/90">
                {leaders[0].title}
              </p>
              <div className="flex flex-col gap-4 lg:gap-6 text-sm lg:text-[17px] font-medium lg:font-semibold leading-relaxed">
                {leaders[0].bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* ================= EXPERTISE CARDS (Clipped Carousel on Mobile) ================= */}
        <div className="w-full mb-20 lg:mb-[180px]">
          {isMobile ? (
            <div className="w-full pr-[15px]"> {/* 15px Orange gap on the right edge */}
              <div className="w-full " ref={emblaRef}>
                <div className="flex items-stretch">
                  {expertiseCards.map((card, i) => (
                    <div key={i} className="flex-[0_0_85%] pr-4 min-w-0">
                      <ExpertiseCard card={card} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[1319px] mx-auto px-6 flex flex-row justify-center gap-8 xl:gap-[60px] items-stretch">
              {expertiseCards.map((card, i) => (
                <ExpertiseCard key={i} card={card} />
              ))}
            </div>
          )}
        </div>

        {/* ================= LEADER 2: DANIYAR AYDIMIROV ================= */}
        <div className="w-full flex flex-col items-center">
          <article className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[122px] w-full">
            {/* Portrait Image */}
            <div className="relative flex-shrink-0">
              <div className="relative w-[300px] h-[360px] lg:w-[365px] lg:h-[441px] border-[5px] border-white/40 rounded-tr-[60px] lg:rounded-tr-[80px] rounded-bl-[60px] lg:rounded-bl-[80px] p-2 bg-white/10 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden rounded-tr-[50px] lg:rounded-tr-[70px] rounded-bl-[50px] lg:rounded-bl-[70px]">
                  <Image
                    src={leaders[1].image}
                    alt={leaders[1].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow max-w-[635px] text-white text-left">
              <h3 className="text-3xl lg:text-[42px] font-bold leading-tight mb-2">
                {leaders[1].name}
              </h3>
              <p className="text-lg lg:text-[23px] font-bold mb-6 text-white/90">
                {leaders[1].title}
              </p>
              <div className="flex flex-col gap-4 lg:gap-6 text-sm lg:text-[17px] font-medium lg:font-semibold leading-relaxed">
                {leaders[1].bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}

function ExpertiseCard({ card }: { card: any }) {
  const locale = useLocale();
  const isEn = locale === 'en';

  return (
    <div className={`bg-white rounded-[40px] pt-[30px] pb-[30px] px-[20px] shadow-xl flex flex-col w-full lg:w-[323px] min-h-[319px] ${isEn ? 'lg:h-[319px]' : 'h-auto'}`}>
      <div className="flex items-center gap-[16px] mb-4">
        <div className="w-[45px] h-[45px] lg:w-[52px] lg:h-[52px] bg-[#F14E2F] rounded-full flex items-center justify-center shrink-0 shadow-lg">
          <Image src={card.icon} alt={card.title} width={26} height={26} className="invert brightness-0" />
        </div>
        <h4 className={`text-[#333] font-bold leading-tight ${isEn ? 'text-lg lg:text-[22px]' : 'text-base lg:text-[19px]'}`}>
          {card.title}
        </h4>
      </div>

      <ul className={`text-[#58595B] text-left space-y-1.5 font-montserrat font-semibold tracking-normal leading-[120%] ${isEn ? 'text-[17px]' : 'text-[15px]'}`}>
        {card.list.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 h-auto">
            <span className={`text-[#58595B] shrink-0 w-[5px] h-[5px] rounded-full bg-[#58595B] block ${isEn ? 'mt-[6px]' : 'mt-[5px]'}`}></span>
            <span className="break-words">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}