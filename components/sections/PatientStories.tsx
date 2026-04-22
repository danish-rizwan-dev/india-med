"use client";

import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const patientStories = [
  {
    name: "Richard Gruber",
    location: "Austria",
    image: "/images/patient Stories/img1.jpg",
    rating: 4,
  },
  {
    name: "Sophie Verschueren",
    location: "Australia",
    image: "/images/patient Stories/img2.jpg",
    rating: 4,
  },
  {
    name: "Dylan Walters",
    location: "United States",
    image: "/images/patient Stories/img3.jpg",
    rating: 5,
  },
  {
    name: "Ella Huber",
    location: "Germany",
    image: "/images/patient Stories/img1.jpg",
    rating: 3,
  },
];

export default function PatientStories() {
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
        <h2 className="text-[#58595B] font-bold text-xl lg:text-[32px] leading-none text-center">
          Patient Stories
        </h2>
      </header>

      <div className="w-full max-w-[1320px] px-0 lg:px-4" ref={emblaRef}>
        {/* Changed lg:grid to flex to ensure Embla carousel works correctly on all screens */}
        <div className="flex">
          {patientStories.map((patient, index) => (
            <article 
              key={index} 
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_25%] min-w-0 px-3 flex flex-col group"
            >
              <div 
                className="relative overflow-hidden bg-gray-100 shadow-md transition-all duration-300"
                style={{ 
                  width: "100%", 
                  height: "clamp(350px, 50vh, 517px)", 
                  borderRadius: "32px",
                }}
              >
                <Image 
                  src={patient.image} 
                  alt={patient.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 85vw, 25vw"
                />
              </div>

              <div className="mt-5 px-4 lg:px-2 text-left">
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
          className={`flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 transition-all active:scale-90 ${prevBtnDisabled ? 'opacity-30 cursor-not-allowed' : 'text-[#EE4423] hover:bg-[#EE4423] hover:text-white'}`}
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <button 
          onClick={scrollNext} 
          disabled={nextBtnDisabled}
          className={`flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 transition-all active:scale-90 ${nextBtnDisabled ? 'opacity-30 cursor-not-allowed' : 'text-[#EE4423] hover:bg-[#EE4423] hover:text-white'}`}
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </nav>
    </section>
  );
}