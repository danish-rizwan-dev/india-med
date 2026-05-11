"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from 'next-intl';

export default function Specialities() {
  const t = useTranslations('Specialities');
  const locale = useLocale();

  const specialities = [
    { title: t('cardio'), icon: "/images/sections/specialities/cardiac.svg", slug: "cardiological-assistance" },
    { title: t('ortho'), icon: "/images/sections/specialities/ortho.svg", slug: "orthopedics" },
    { title: t('cancer'), icon: "/images/sections/specialities/cancer.svg", slug: "cancer-treatment" },
    { title: t('neuro'), icon: "/images/sections/specialities/neuro.svg", slug: "neuroscience" },
    { title: t('gastro'), icon: "/images/sections/specialities/gastro.svg", slug: "gastrosciences" },
    { title: t('liver'), icon: "/images/sections/specialities/liver.svg", slug: "liver-transplant" },
    { title: t('lungs'), icon: "/images/sections/specialities/lungs.svg", slug: "lung-transplantation" },
    { title: t('gyno'), icon: "/images/sections/specialities/gyno.svg", slug: "obstetrics-and-gynecology" },
  ];

  const [search, setSearch] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (search || isExpanded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 4) % specialities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [search, isExpanded, specialities.length]);

  const filtered = specialities.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  const showScrolling = !search && !isExpanded;

  return (
    <section id="specialities" className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full opacity-80 pointer-events-none -z-20 hidden lg:block"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/sections/process-flow/background-strokes.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 flex flex-col items-center px-6 py-16 lg:py-24">

        <header className="flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-12 lg:mb-20 px-6 md:px-12 py-4 w-fit mx-auto max-w-[90vw]">
          <h2 className={`text-[#58595B] font-bold font-montserrat text-center whitespace-nowrap ${locale === 'en'
              ? 'text-2xl lg:text-[42px]'
              : 'text-lg md:text-xl lg:text-[24px]'
            }`}>
            {t('title')}
          </h2>
        </header>

        {/* --- MOBILE/IPAD VIEW --- */}
        <div className="flex md:hidden flex-col items-center bg-white/60 backdrop-blur-3xl border-[2.03px] border-white/80 rounded-[33.76px] p-[25px] gap-[20px] w-full max-w-[351px] transition-all duration-500 overflow-hidden">

          {showScrolling ? (
            <div className="w-full h-[328px] overflow-hidden relative">
              <nav
                className="w-full flex flex-col gap-[32px] transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentIndex * 82}px)` }}
                aria-label="Scrolling specialities list"
              >
                {[...specialities, ...specialities].map((item, index) => (
                  <Link
                    key={index}
                    href={`/specialities/${item.slug}`}
                    className="group flex items-center justify-between w-full h-[50px] border-b border-black/5 pb-2 shrink-0 transition-colors"
                    title={`Learn more about ${item.title}`}
                  >
                    <div className="flex items-center gap-[20px]">
                      <div className="relative w-[35px] h-[35px]">
                        <Image src={item.icon} alt={item.title} fill className="object-contain" />
                      </div>
                      <span className="font-montserrat font-bold text-[#58595B] text-lg">
                        {item.title}
                      </span>
                    </div>
                    <div className="bg-[#58595B] group-hover:bg-[#EE4423] rounded-full p-1 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          ) : (
            <nav className="w-full flex flex-col gap-[32px]" aria-label="Static specialities list">
              {filtered.map((item, index) => (
                <Link
                  key={index}
                  href={`/specialities/${item.slug}`}
                  className="group flex items-center justify-between w-full h-[50px] border-b border-black/5 pb-2 transition-colors"
                >
                  <div className="flex items-center gap-[20px]">
                    <div className="relative w-[35px] h-[35px]">
                      <Image src={item.icon} alt={item.title} fill className="object-contain" />
                    </div>
                    <span className="font-montserrat font-bold text-[#58595B] text-lg">
                      {item.title}
                    </span>
                  </div>
                  <div className="bg-[#58595B] group-hover:bg-[#EE4423] rounded-full p-1 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </nav>
          )}

          <div className="relative w-full h-[49px] mt-4">
            <label htmlFor="speciality-search" className="sr-only">Search Specialities</label>
            <input
              id="speciality-search"
              type="search"
              placeholder={t('search_placeholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full rounded-full border border-[#EE4423] px-12 focus:outline-none text-sm font-montserrat placeholder:text-gray-400"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE4423]" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          {!search && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center w-full h-[49px] bg-[#EE4423] rounded-full text-white font-bold pl-[40px] pr-[30px] active:scale-95 transition-all hover:bg-[#d63a1b] whitespace-nowrap"
            >
              <span className="mr-3">{isExpanded ? t('show_less') : t('view_all')}</span>
              <span className={`text-xl transition-transform ${isExpanded ? "-rotate-90" : "rotate-0"}`}>›</span>
            </button>
          )}
        </div>

        {/* --- DESKTOP & TABLET VIEW --- */}
        <div className="hidden md:block w-full max-w-[1318px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {specialities.map((item, index) => (
              <Link
                key={index}
                href={`/specialities/${item.slug}`}
                className="group relative flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 p-8 lg:p-10 rounded-[40px] h-full min-h-[260px] lg:min-h-[300px] overflow-hidden bg-white shadow-[0px_15px_35px_rgba(0,0,0,0.05)] border border-gray-100"
              >
                <div className="relative z-20 w-[60px] h-[60px] lg:w-[85px] lg:h-[85px] mb-6 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="relative z-20 text-[#414042] text-[18px] lg:text-[22px] font-bold font-montserrat mb-4 group-hover:text-[#EE4423] transition-colors leading-tight">
                  {item.title}
                </h3>
                <div className="relative z-20 text-[14px] font-bold text-gray-400 group-hover:text-[#EE4423] transition-all flex items-center gap-1">
                  {t('know_more')} <span>›</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12 lg:mt-16">
            <Link
              href="/specialities"
              className="group relative z-20 flex items-center gap-3 px-8 lg:px-10 py-3 lg:py-4 rounded-full bg-[#EE4423] text-white font-bold text-base lg:text-lg hover:bg-[#d63a1b] transition-all"
            >
              {t('view_all')}
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                ›
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}