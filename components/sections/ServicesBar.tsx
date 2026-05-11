"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import React from "react";
import { useTranslations } from 'next-intl';

export default function ServiceBar() {
  const t = useTranslations('ServiceBar');

  const services = [
    { label: t('opinion'), icon: "/images/sections/common/doctor.svg", slug: "second-opinion" },
    { label: t('cost'), icon: "/images/sections/common/treatment-cost.svg", slug: "treatment-cost-estimate" },
    { label: t('services'), icon: "/images/sections/common/medical-services.svg", slug: "medical-services" },
    { label: t('visa'), icon: "/images/sections/process-flow/icons/visa.svg", slug: "medical-visa-assistance" },
    { label: t('consult'), icon: "/images/sections/common/free-consult.svg", slug: "free-consultation" },
  ];

  const mobileTopServices = services.slice(0, 4);
  const mobileCTA = services[4];

  return (
    <nav id="services" className="relative w-full flex justify-center px-4 lg:px-0 z-40" aria-label="Quick Services">

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[300px] h-[300px] bg-[#EE4423]/15 blur-[100px] rounded-full pointer-events-none" style={{ zIndex: -1 }} />

      <div className="flex md:hidden justify-center translate-y-[-55%] mb-[10px]">
        <div
          className="relative flex items-center justify-center bg-white/10 backdrop-blur-md"
          style={{ width: "351.11px", height: "328px", borderRadius: "33.76px", padding: "25px", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)" }}
        >
          <div className="relative z-10 flex flex-col gap-[4px] w-[301.11px] h-[278px]">
            <div className="grid grid-cols-2 gap-[2px] w-full bg-[#EE4423]/20 overflow-hidden" style={{ borderRadius: "21.6px 21.6px 0 0" }}>
              {mobileTopServices.map((service, idx) => (
                <Link
                  href={`/${service.slug}`}
                  key={idx}
                  className="group flex flex-col items-center justify-center bg-white text-center px-2 hover:bg-[#EE4423]"
                  style={{ width: "149.5px", height: "90px" }}
                >
                  <div className="relative w-7 h-7 mb-1 transition-all group-hover:scale-110 group-hover:brightness-0 group-hover:invert">
                    <Image
                      src={service.icon}
                      alt={`${service.label} icon`}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#58595B] font-montserrat leading-tight group-hover:text-white">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/free-consultation"
              className="flex items-center justify-center gap-2 bg-[#EE4423] w-full h-[90px] active:scale-[0.98] px-4"
              style={{ borderBottomLeftRadius: "21.6px", borderBottomRightRadius: "21.6px" }}
            >
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src={mobileCTA.icon}
                  alt={`${mobileCTA.label} icon`}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className={`text-white font-bold font-montserrat leading-tight text-center ${mobileCTA.label.length > 20 ? 'text-[14px]' : 'text-[18px]'}`}>
                {mobileCTA.label}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* --- TABLET & DESKTOP VIEW --- */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[180px] bg-[#EE4423]/20 blur-[120px] rounded-full pointer-events-none hidden md:block"
        style={{ zIndex: -1 }}
      />

      <div className="relative flex items-center justify-center w-full max-w-[1400px] -translate-y-1/2 mt-[-100px] lg:mt-[-160px]">

        {/* Glassmorphic Left Arrow */}
        <button
          onClick={() => { }}
          className="hidden md:flex absolute left-[-15px] lg:left-[5px] xl:left-[15px] top-1/2 -translate-y-[38%] z-50 w-20 h-20 items-center justify-center transition-all hover:scale-110 active:scale-95 group pointer-events-auto"
          aria-label="Previous service"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <foreignObject x="0" y="0" width="80" height="80">
                <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_service_left_clip)", height: "100%", width: "100%" }}></div>
              </foreignObject>
              <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="3" />
              <path fillRule="evenodd" clipRule="evenodd" d="M34.7071 37.7071L41.3417 31.0726L43 32.731L37.1946 38.5363L43 44.3417L41.3417 46L34.7071 39.3655C34.4873 39.1456 34.3638 38.8473 34.3638 38.5363C34.3638 38.2253 34.4873 37.9271 34.7071 37.7071Z" fill="#EE4423" />
            </g>
            <defs>
              <clipPath id="bgblur_service_left_clip">
                <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <div
          className="hidden md:flex relative flex-row items-center justify-center w-full max-w-[95%] lg:max-w-[1000px] xl:max-w-[1317px] h-[160px] lg:h-[226px] rounded-[30px] lg:rounded-[50px] p-[10px] lg:p-[23px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(50px)",
            boxShadow: "10px 20px 30px 0px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div className="relative z-10 flex flex-row items-stretch justify-center w-full h-full rounded-[25px] lg:rounded-[40px] overflow-hidden">
            {services.map((service, index) => (
              <Link
                href={`/${service.slug}`}
                key={index}
                className="relative flex flex-col lg:flex-row items-center justify-center bg-white/90 group transition-all hover:bg-[#EE4423] flex-1 h-full px-2 lg:px-4 gap-2 lg:gap-4"
              >
                <div className="relative w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] transition-all group-hover:scale-110 group-hover:brightness-0 group-hover:invert flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={`${service.label} service icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-center lg:text-left group-hover:text-white text-[#58595B] font-montserrat font-bold text-[12px] lg:text-[15px] xl:text-[18px] leading-tight max-w-[120px] lg:max-w-[130px] xl:max-w-[160px]">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Glassmorphic Right Arrow */}
        <button
          onClick={() => { }}
          className="hidden md:flex absolute right-[-15px] lg:right-[5px] xl:right-[15px] top-1/2 -translate-y-[62%] z-50 w-20 h-20 items-center justify-center transition-all hover:scale-110 active:scale-95 group pointer-events-auto"
          aria-label="Next service"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
            <g>
              <foreignObject x="0" y="0" width="80" height="80">
                <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_service_right_clip)", height: "100%", width: "100%" }}></div>
              </foreignObject>
              <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="3" />
              <path fillRule="evenodd" clipRule="evenodd" d="M34.7071 37.7071L41.3417 31.0726L43 32.731L37.1946 38.5363L43 44.3417L41.3417 46L34.7071 39.3655C34.4873 39.1456 34.3638 38.8473 34.3638 38.5363C34.3638 38.2253 34.4873 37.9271 34.7071 37.7071Z" fill="#EE4423" />
            </g>
            <defs>
              <clipPath id="bgblur_service_right_clip">
                <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </nav>
  );
}
