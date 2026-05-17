"use client";

import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { SpecialityPatientStory } from "../types";

interface PatientStoriesCustomProps {
  stories?: SpecialityPatientStory[];
}

export default function PatientStoriesCustom({ stories }: PatientStoriesCustomProps) {
  const defaultStories = [
    {
      name: "Richard K.",
      location: "Austria",
      image: "/images/sections/patient-stories/img1.jpg",
      rating: 5,
    },
    {
      name: "Sophie M.",
      location: "Australia",
      image: "/images/sections/patient-stories/img2.jpg",
      rating: 5,
    },
    {
      name: "Dylan G.",
      location: "United States",
      image: "/images/sections/patient-stories/img3.jpg",
      rating: 5,
    },
    {
      name: "Ella H.",
      location: "Germany",
      image: "/images/sections/patient-stories/img.jpg",
      rating: 5,
    },
  ];

  const patientStories = stories && stories.length > 0 ? stories : defaultStories;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

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
    <section className="relative flex w-full flex-col items-center bg-white py-20 overflow-hidden font-sans">

      {/* Heading Box */}
      <div className="border border-[#58595B] rounded-full mb-16 px-10 py-5 w-fit mx-auto bg-white">
        <h2 className="text-[#58595B] font-bold font-montserrat text-[32px] leading-none text-center">
          Patient Stories
        </h2>
      </div>

      <div className="w-full max-w-[1320px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {patientStories.slice(0, 4).map((patient, index) => (
            <article
              key={index}
              className="flex flex-col group w-full max-w-[315px]"
            >
              <div
                className="relative overflow-hidden bg-gray-100 shadow-md transition-all duration-300 group"
                style={{
                  width: "100%",
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
                    <Star key={i} size={14} fill={i < patient.rating ? "#FBBF24" : "none"} className={i < patient.rating ? "text-[#FBBF24]" : "text-gray-300"} />
                  ))}
                </div>
                <h3 className="text-[#414042] font-bold text-xl font-montserrat">{patient.name}</h3>
                <p className="text-[#58595B] text-sm font-semibold mt-1 font-montserrat opacity-60">{patient.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
