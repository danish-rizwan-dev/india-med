"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { SpecialityPatientStory } from "../types";

interface PatientStoriesCustomProps {
  stories?: SpecialityPatientStory[];
}

export default function PatientStoriesCustom({ stories }: PatientStoriesCustomProps) {
  const tShared = useTranslations('SpecialityShared');

  // Initialize Embla Carousel for mobile auto-scrolling
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const defaultStories = [
    {
      name: "Richard K.",
      locKey: "uk" as const,
      image: "/images/sections/patient-stories/img1.jpg",
      rating: 5,
    },
    {
      name: "Sophie M.",
      locKey: "kz" as const,
      image: "/images/sections/patient-stories/img2.jpg",
      rating: 5,
    },
    {
      name: "Dylan G.",
      locKey: "uz" as const,
      image: "/images/sections/patient-stories/img3.jpg",
      rating: 5,
    },
    {
      name: "Ella H.",
      locKey: "ru" as const,
      image: "/images/sections/patient-stories/img.jpg",
      rating: 5,
    },
  ];

  const patientStories = stories && stories.length > 0 ? stories : defaultStories;

  return (
    <section className="relative flex w-full flex-col items-center bg-white py-12 md:py-20 overflow-hidden font-sans">

      {/* Heading Box */}
      <div className="border border-[#58595B] rounded-full mb-8 md:mb-16 px-6 sm:px-10 py-3 sm:py-4 min-h-[56px] sm:min-h-[73px] flex items-center justify-center bg-white mx-auto text-center max-w-[90%] sm:max-w-fit">
        <h2 className="text-[#58595B] font-bold font-montserrat text-xl sm:text-[32px] leading-tight text-center">
          {tShared('patient_stories')}
        </h2>
      </div>

      {/* ================= MOBILE & TABLET AUTO-SCROLLER VIEW ================= */}
      <div className="block lg:hidden w-full overflow-hidden px-2" ref={emblaRef}>
        <div className="flex">
          {patientStories.slice(0, 4).map((patient, index) => (
            <div 
              key={index} 
              className="flex-[0_0_82%] sm:flex-[0_0_50%] min-w-0 px-3 pb-4 flex justify-center"
            >
              <article className="flex flex-col group w-full max-w-[315px]">
                {/* Scaled-down height container for mobile aesthetics */}
                <div
                  className="relative overflow-hidden bg-gray-100 shadow-md transition-all duration-300 w-full h-[380px] sm:h-[450px] rounded-[32px] sm:rounded-[40px]"
                >
                  <Image
                    src={patient.image}
                    alt={patient.name}
                    fill
                    priority={index < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 315px"
                  />

                  {/* Glassmorphic Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] transition-all duration-300 active:scale-95">
                      <svg width="100%" height="100%" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
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

                <div className="mt-4 px-2 text-left">
                  <div className="flex gap-1 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill={i < (patient.rating ?? 5) ? "#FBBF24" : "none"} className={i < (patient.rating ?? 5) ? "text-[#FBBF24]" : "text-gray-300"} />
                    ))}
                  </div>
                  <h3 className="text-[#414042] font-bold text-lg font-montserrat leading-tight">{patient.name}</h3>
                  <p className="text-[#58595B] text-xs sm:text-sm font-semibold mt-0.5 font-montserrat opacity-60">
                    {'locKey' in patient && patient.locKey ? tShared(patient.locKey) : (patient as any).location}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP STATIC GRID VIEW ================= */}
      <div className="hidden lg:block w-full max-w-[1320px] px-4">
        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {patientStories.slice(0, 4).map((patient, index) => (
            <article
              key={index}
              className="flex flex-col group w-full max-w-[315px]"
            >
              <div
                className="relative overflow-hidden bg-gray-100 shadow-md transition-all duration-300 w-full h-[517px] rounded-[40px]"
              >
                <Image
                  src={patient.image}
                  alt={patient.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="315px"
                />

                {/* Glassmorphic Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80px] h-[80px] transition-all duration-300 group-hover:scale-110">
                    <svg width="100%" height="100%" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
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

              <div className="mt-5 px-2 text-left">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < (patient.rating ?? 5) ? "#FBBF24" : "none"} className={i < (patient.rating ?? 5) ? "text-[#FBBF24]" : "text-gray-300"} />
                  ))}
                </div>
                <h3 className="text-[#414042] font-bold text-xl font-montserrat">{patient.name}</h3>
                <p className="text-[#58595B] text-sm font-semibold mt-1 font-montserrat opacity-60">
                  {'locKey' in patient && patient.locKey ? tShared(patient.locKey) : (patient as any).location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}