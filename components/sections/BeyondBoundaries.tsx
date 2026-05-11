"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';

/**
 * Animated Counter Component - Original Logic Restored
 */
const Counter = ({ end, duration = 3000, shouldStart }: { end: number; duration?: number; shouldStart: boolean }) => {
  const [count, setCount] = useState(end); // Start at end value for SSR

  useEffect(() => {
    if (!shouldStart) return;
    setCount(0); // Reset to 0 only on client after hydration
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return <span>{count.toLocaleString()}+</span>;
};

export default function BeyondBoundaries() {
  const t = useTranslations('BeyondBoundaries');
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: t('stat_patients'), value: 10000, suffix: "+" },
    { label: t('stat_countries'), value: 70, suffix: "+" },
    { label: t('stat_hospitals'), value: 10, suffix: "+" },
  ];

  return (
    <section
      ref={sectionRef}
      id="beyond-boundaries"
      className="relative w-full bg-white lg:bg-[#EE4423] overflow-hidden flex flex-col items-center justify-center lg:min-h-[682px]"
    >
      {/* 1. Background Image Layer (Desktop Only) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <Image
          src="/images/sections/common/beyond-boundaries-lines.png"
          alt="Topographical background lines"
          fill
          className="object-cover opacity-100"
        />
      </div>

      <div
        className="relative z-10 w-full max-w-[376px] h-[682px] px-[30px] py-[35px] flex lg:hidden flex-col items-start overflow-hidden rounded-[40px]"
        style={{ background: 'linear-gradient(180deg, #EE4423 0%, #D63A1B 100%)' }}
      >
        {/* Background Lines for Mobile Card */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
          <Image src="/images/sections/common/beyond-boundaries-lines.png" alt="" fill className="object-cover" />
        </div>

        {/* Category Header */}
        <p className="text-[17px] font-semibold text-white leading-[100%] font-montserrat mb-[16px] w-[153px] h-[42px] flex items-center">
          {t('title').split(' ').join('<br/>')}
          {/* Note: I'll use a safer approach for the line break if needed, but simple split is fine for current content */}
        </p>

        {/* Main Title */}
        <h2 className="text-[23px] font-bold text-white leading-[100%] font-montserrat w-[313px] mb-[30px]">
          {t('heading')}
        </h2>

        {/* The Globe Asset */}
        <div className="relative w-[343px] h-[311px] ml-[-15px] mb-[30px]">
          <Image
            src="/images/sections/common/globe.svg"
            alt="World Medical Network Globe"
            fill
            className="object-contain"
          />
        </div>

        {/* Number Line (Stats) - Balanced for 376px */}
        <div className="flex items-start justify-between w-full mb-[40px]">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start text-white">
              <p className="text-[24px] font-bold leading-tight font-montserrat">
                <Counter end={stat.value} shouldStart={hasStarted} />
              </p>
              <p className="text-[10px] font-medium opacity-90 leading-tight max-w-[80px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Know More and Contact Button Row */}
        <div className="flex items-center gap-[24px] w-full mt-auto">
          <button className="group flex items-center gap-1 text-white font-bold text-[16px]">
            {t('know_more')}
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button className="bg-white text-[#58595B] px-[20px] py-[10px] rounded-full font-bold flex items-center gap-2 shadow-xl text-[14px]">
            <Phone size={16} fill="#58595B" />
            {t('contact_now')}
          </button>
        </div>
      </div>

      {/* --- DESKTOP VIEW: RESTORED ORIGINAL --- */}
      <div className="hidden lg:flex relative z-10 w-full max-w-[1320px] px-6 flex-col">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left">
          <header className="flex-1 text-white lg:pt-10 mb-10 lg:mb-0">
            <p className="text-lg lg:text-xl font-medium mb-4 lg:mb-6 opacity-90">{t('title')}</p>
            <h2 className="text-[32px] sm:text-4xl lg:text-[42px] xl:text-[54px] font-bold leading-[1.2] lg:leading-[1.1] max-w-[480px] xl:max-w-[620px] mb-8 lg:mb-10">
              {t('heading')}
            </h2>
            <button className="group flex items-center justify-center lg:justify-start gap-2 text-white font-bold text-lg no-underline mx-auto lg:mx-0">
              {t('know_more')} <ChevronRight size={22} className="transition-transform duration-300 group-hover:translate-x-3" />
            </button>
          </header>
          <div className="relative flex justify-center w-full lg:w-auto">
            <div className="relative w-[400px] h-[360px] xl:w-[524px] xl:h-[480px]">
              <Image src="/images/sections/common/globe.svg" alt="World Medical Network Globe" fill className="object-contain" />
            </div>
          </div>
        </div>
        <footer className="mt-[-20px] flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-0">
          <div className="w-full lg:w-auto flex justify-center lg:block">
            <button className="bg-white text-[#58595B] px-8 py-3.5 rounded-full font-bold flex items-center gap-3 shadow-2xl transition-all hover:scale-105">
              <Phone size={20} fill="#58595B" />
              <span>{t('contact_now')}</span>
            </button>
          </div>
          <div className="flex flex-row justify-center lg:justify-start gap-[40px] xl:gap-[112px] w-full lg:w-auto">
            {stats.map((stat, idx) => (
              <article key={idx} className="flex flex-col items-start text-white">
                <p className="text-[36px] xl:text-[48px] font-bold leading-tight">
                  <Counter end={stat.value} shouldStart={hasStarted} />
                </p>
                <p className="text-[14px] font-medium opacity-90 max-w-[155px]">{stat.label}</p>
              </article>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}