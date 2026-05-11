"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {useTranslations, useLocale} from 'next-intl';

export default function FeaturedDestination() {
  const t = useTranslations('FeaturedDestination');
  const locale = useLocale();

  const destinations = [
    { name: t('countries.uzbekistan'), icon: "/images/sections/maps/Uzbekistan.svg" },
    { name: t('countries.russia'), icon: "/images/sections/maps/Russia.svg" },
    { name: t('countries.kazakhstan'), icon: "/images/sections/maps/Kazakhstan.svg" },
    { name: t('countries.krikistan'), icon: "/images/sections/maps/Krikistan.svg" },
    { name: t('countries.turkmenistan'), icon: "/images/sections/maps/Turkmenistan.svg" },
    { name: t('countries.tajikistan'), icon: "/images/sections/maps/Tajikistan.svg" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false
  }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="destinations" className="relative w-full bg-transparent flex flex-col items-center py-12 lg:py-0 lg:min-h-[750px] lg:justify-center">

      {/* ================= BACKGROUND ILLUSTRATION LAYERS ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            width: "1562.78px",
            height: "1000px",
            left: "-10px",
            top: "-550px",
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <Image
            src="/images/sections/featured-destinations/featureddestinanotincolorbg.png"
            alt="Colored background texture"
            fill
            sizes="1562.78px"
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-full flex items-center justify-center pt-[150px] lg:pt-0">
          <div className="relative w-full h-full max-h-[500px] lg:max-h-[573px] lg:max-w-[1552px]">
            <Image
              src="/images/sections/featured-destinations/featureddestinanotinbg.png"
              alt="World landmarks background illustration"
              fill
              sizes="100vw"
              className="object-cover object-bottom lg:object-contain lg:object-center grayscale"
            />
          </div>
        </div>
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10 flex flex-col items-center mx-auto w-full max-w-[1400px]">

        {/* Header Block */}
        <header className="flex flex-col items-center mb-10 lg:mb-[60px] gap-6 lg:gap-[30px] text-center w-full mt-[-20px] lg:mt-[-140px] px-6">
          <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full px-8 lg:px-10 h-[60px] lg:h-[73px] w-fit bg-white/50 backdrop-blur-sm shadow-sm max-w-[90vw]">
            <h2 className={`text-[#58595B] font-bold font-montserrat leading-none whitespace-nowrap ${
              locale === 'en' ? 'text-2xl lg:text-[42px]' : 'text-xl lg:text-[28px]'
            }`}>
              {t('title')}
            </h2>
          </div>

          <p className="text-[#58595B] font-montserrat font-medium max-w-[340px] lg:max-w-[700px] text-[14px] lg:text-[18px] leading-[1.2] text-center opacity-90">
            {t('desc')}
          </p>
        </header>

        {/* ================= DESTINATION CARDS ================= */}
        <div className="w-full mb-10 lg:mb-0">
          <div className="lg:hidden overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {destinations.map((dest, index) => (
                <article key={index} className="flex-[0_0_40%] sm:flex-[0_0_33.33%] min-w-0 px-2 flex justify-center">
                  <div
                    className="relative flex flex-col items-center justify-center bg-white/80 backdrop-blur-xl border border-white rounded-[25px] shadow-lg shadow-gray-200/50 overflow-hidden"
                    style={{
                      width: "140px",
                      height: "140px",
                      padding: "15px",
                      gap: "10px"
                    }}
                  >
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src={dest.icon}
                        alt={dest.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <span className="text-[#58595B] font-montserrat font-bold text-center text-[12px] px-1 leading-tight">
                      {dest.name}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-row flex-wrap items-center justify-center gap-[30px] xl:gap-[40px] lg:mt-[40px]">
            {destinations.map((dest, index) => (
              <article
                key={index}
                className="group relative flex flex-col items-center justify-center w-[180px] h-[189px] rounded-[35px] transition-all duration-500 bg-white/40 hover:bg-white/90 backdrop-blur-md border border-white/50 shadow-md overflow-hidden cursor-pointer"
              >
                <div className="relative w-[70px] h-[70px] mb-4 transition-opacity duration-500 group-hover:opacity-100 opacity-80">
                  <Image
                    src={dest.icon}
                    alt={`${dest.name} map illustration`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[#58595B] font-montserrat font-bold text-center text-[16px] px-2 leading-tight transition-colors duration-500 group-hover:text-[#EE4423]">
                  {dest.name}
                </span>

                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </article>
            ))}
          </div>
        </div>

        {/* ================= NAVIGATION BUTTONS ================= */}
        <div className="hidden lg:flex items-center justify-center gap-6 mt-10 lg:mt-16">
          <button
            onClick={scrollPrev}
            className="pointer-events-auto w-20 h-20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            aria-label="Previous destination"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <foreignObject x="0" y="0" width="80" height="80">
                  <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_dest_left_clip_hf)", height: "100%", width: "100%" }}></div>
                </foreignObject>
                <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="3"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M34.7071 37.7071L41.3417 31.0726L43 32.731L37.1946 38.5363L43 44.3417L41.3417 46L34.7071 39.3655C34.4873 39.1456 34.3638 38.8473 34.3638 38.5363C34.3638 38.2253 34.4873 37.9271 34.7071 37.7071Z" fill="#EE4423"/>
              </g>
              <defs>
                <clipPath id="bgblur_dest_left_clip_hf">
                  <rect x="11.5" y="11.5" width="57" height="57" rx="28.5"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="pointer-events-auto w-20 h-20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            aria-label="Next destination"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <g>
                <foreignObject x="0" y="0" width="80" height="80">
                  <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_dest_right_clip_hf)", height: "100%", width: "100%" }}></div>
                </foreignObject>
                <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="3"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M34.7071 37.7071L41.3417 31.0726L43 32.731L37.1946 38.5363L43 44.3417L41.3417 46L34.7071 39.3655C34.4873 39.1456 34.3638 38.8473 34.3638 38.5363C34.3638 38.2253 34.4873 37.9271 34.7071 37.7071Z" fill="#EE4423"/>
              </g>
              <defs>
                <clipPath id="bgblur_dest_right_clip_hf">
                  <rect x="11.5" y="11.5" width="57" height="57" rx="28.5"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}