"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const patientStories = [
  {
    name: "Richard Gruber",
    location: "Austria",
    videoId: "dQw4w9WgXcQ",
    rating: 4,
  },
  {
    name: "Sophie Verschueren",
    location: "Australia",
    videoId: "dQw4w9WgXcQ",
    rating: 4,
  },
  {
    name: "Dylan Walters",
    location: "United States",
    videoId: "dQw4w9WgXcQ",
    rating: 5,
  },
  {
    name: "Ella Huber",
    location: "Germany",
    videoId: "dQw4w9WgXcQ",
    rating: 3,
  },
];

export default function PatientStories() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // FIX: loop: false prevents scrolling when there are no more videos
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, 
    align: "start",
    containScroll: "trimSnaps", 
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="patient-stories" className="relative flex w-full flex-col items-center bg-white py-16 lg:py-24 overflow-hidden font-sans">
      
      <header className="relative z-10 flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-12 lg:mb-16 px-10 h-[60px] lg:h-[73px] w-fit max-w-[90vw]">
        <h2 className="text-[#58595B] font-bold text-xl lg:text-[32px] leading-none text-center">
          Patient Stories
        </h2>
      </header>

      <div className="w-full max-w-[1320px] px-0 lg:px-4 overflow-hidden" ref={emblaRef}>
        <div className="flex lg:grid lg:grid-cols-4 lg:gap-6">
          {patientStories.map((patient, index) => (
            <article 
              key={index} 
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-none min-w-0 px-3 lg:px-0 flex flex-col group"
            >
              <div 
                className="relative overflow-hidden bg-black shadow-md transition-all duration-300 cursor-pointer"
                style={{ 
                  width: "100%", 
                  height: "clamp(350px, 50vh, 517px)", 
                  borderRadius: "32px",
                }}
                onClick={() => setPlayingVideo(patient.videoId + index)}
              >
                {playingVideo === (patient.videoId + index) ? (
                  // The Actual YouTube Player
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${patient.videoId}?autoplay=1`}
                    title={`Video story of ${patient.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                ) : (
                  // The SEO-Friendly Thumbnail
                  <>
                    <Image 
                      src={`https://img.youtube.com/vi/${patient.videoId}/maxresdefault.jpg`} 
                      alt={`Watch ${patient.name}'s medical success story`} 
                      fill 
                      className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 85vw, 25vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 bg-white/30 backdrop-blur-md border border-white/40">
                        <Play size={32} fill="white" className="text-white ml-1" />
                      </div>
                    </div>
                  </>
                )}
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
        <button onClick={scrollPrev} type="button" className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white shadow-lg text-[#EE4423] border border-gray-100 hover:bg-[#EE4423] hover:text-white transition-all active:scale-90">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <button onClick={scrollNext} type="button" className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white shadow-lg text-[#EE4423] border border-gray-100 hover:bg-[#EE4423] hover:text-white transition-all active:scale-90">
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </nav>
    </section>
  );
}