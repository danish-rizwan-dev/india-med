"use client";

import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import {useTranslations, useLocale} from 'next-intl';

export default function PatientStories() {
  const t = useTranslations('PatientStories');
  const locale = useLocale();

  const patientStories = [
    {
      name: t('richard_name'),
      location: t('richard_loc'),
      image: "/images/sections/patient-stories/img1.jpg",
      rating: 4,
    },
    {
      name: t('sophie_name'),
      location: t('sophie_loc'),
      image: "/images/sections/patient-stories/img2.jpg",
      rating: 4,
    },
    {
      name: t('dylan_name'),
      location: t('dylan_loc'),
      image: "/images/sections/patient-stories/img3.jpg",
      rating: 5,
    },
    {
      name: t('ella_name'),
      location: t('ella_loc'),
      image: "/images/sections/patient-stories/img1.jpg",
      rating: 3,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  // State to handle button disabled states for better UX
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="patient-stories" className="relative flex w-full flex-col items-center bg-white py-16 lg:py-24 overflow-hidden font-sans">

      <header className="relative z-10 flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-12 lg:mb-16 px-10 h-[60px] lg:h-[73px] w-fit max-w-[90vw]">
        <h2 className={`text-[#58595B] font-bold leading-none text-center whitespace-nowrap ${
          locale === 'en' ? 'text-xl lg:text-[32px]' : 'text-lg lg:text-[24px]'
        }`}>
          {t('title')}
        </h2>
      </header>

      <div className="w-full max-w-[1320px] px-0 lg:px-4 " ref={emblaRef}>
        <div className="flex gap-4">
          {patientStories.map((patient, index) => (
            <article
              key={index}
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_315px] min-w-0 px-[10px] flex flex-col group"
            >
              <div
                className="relative overflow-hidden bg-gray-100 shadow-md transition-all duration-300 group"
                style={{
                  width: "315px",
                  height: "517px",
                  borderRadius: "40px",
                }}
              >
                <Image
                  src={patient.image}
                  alt={patient.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="315px"
                />

                {/* Glassmorphic Knockout Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[80px] h-[80px] transition-all duration-300 group-hover:scale-110">
                    <svg width="100%" height="100%" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                      <defs>
                        <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                        </filter>
                      </defs>
                      <g className="backdrop-blur-[5px]">
                        <path
                          d="M46 0C71.4051 0 92 20.5949 92 46C92 71.4051 71.4051 92 46 92C20.5949 92 0 71.4051 0 46C0 20.5949 20.5949 0 46 0ZM40.4805 30.0645C38.0271 28.648 34.96 30.4191 34.96 33.252V58.748C34.9602 61.5807 38.0272 63.3509 40.4805 61.9346L62.5596 49.1865C65.0129 47.7701 65.0129 44.2289 62.5596 42.8125L40.4805 30.0645Z"
                          fill="#ECECEC"
                          fillOpacity="0.55"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-5 px-0 text-left">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < patient.rating ? "#FBBF24" : "none"} className={i < patient.rating ? "text-[#FBBF24]" : "text-gray-300"} />
                  ))}
                </div>
                <h3 className="text-[#414042] font-bold text-lg lg:text-xl">{patient.name}</h3>
                <p className="text-[#58595B] text-xs font-bold mt-1 uppercase tracking-widest opacity-60">{patient.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <nav aria-label="Carousel Controls" className="flex items-center justify-center gap-6 mt-12 w-full px-4">
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className={`flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 transition-all active:scale-90 ${prevBtnDisabled ? 'opacity-30 cursor-not-allowed' : 'text-[#EE4423] hover:bg-gray-50'}`}
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className={`flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 transition-all active:scale-90 ${nextBtnDisabled ? 'opacity-30 cursor-not-allowed' : 'text-[#EE4423] hover:bg-gray-50'}`}
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </nav>
    </section>
  );
}