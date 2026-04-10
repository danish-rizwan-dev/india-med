"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Phone, ArrowUpRight } from "lucide-react";

const hospitalData = [
  { 
    location: "Gurugram",
    name: "Medanta Gurgaon",
    description: "World-class multi-super specialty hospital known for advanced cardiac and robotic surgeries.",
    image: "/images/backgrounds/patna-hosp.jpg",
  },
  {
    location: "Gurugram",
    name: "Fortis Memorial",
    description: "Premium quaternary care hospital with state-of-the-art medical technology and international standards.",
    image: "/images/backgrounds/patna-hosp.jpg",
  },
  {
    location: "Gurugram",
    name: "Artemis Hospital",
    description: "First JCI & NABH accredited hospital in Gurgaon, providing depth of expertise in advanced medical interventions.",
    image: "/images/backgrounds/patna-hosp.jpg",
  },
  {
    location: "Gurugram",
    name: "Max Hospital",
    description: "Renowned for oncology, cardiology, and neurosciences with top-tier healthcare professionals.",
    image: "/images/backgrounds/patna-hosp.jpg",
  },
  {
    location: "Gurugram",
    name: "Paras Health",
    description: "Leader in neurosciences and joint replacement, providing specialized care at accessible price points.",
    image: "/images/backgrounds/lucknow-hosp.png",
  },
  {
    location: "Gurugram",
    name: "Marengo Asia",
    description: "Modern multi-specialty facility offering high-end clinical care and a patient-centric approach.",
    image: "/images/backgrounds/patna-hosp.jpg",
  },
  {
    location: "Lucknow",
    name: "India Med Super Speciality",
    description: "Spread across an area of 12.58 acres, Medanta Lucknow is one of the largest multi-super-specialty hospitals.",
    image: "/images/backgrounds/lucknow-hosp.png",
  },
  {
    location: "Patna",
    name: "Jay Prabha Medanta",
    description: "Established in 2020, this super-specialty hospital began operations with an Out-Patient Department (OPD).",
    image: "/images/backgrounds/patna-hosp.jpg",
  },
];

const LocationIcon = () => (
  <svg width="18" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M12 21C16 17.5 19 14.4183 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 14.4183 8 17.5 12 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" fill="white" />
  </svg>
);

export default function IndiaMedNetwork() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: (viewSize) => viewSize * 0.08, 
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative w-full flex flex-col items-center bg-white py-20 overflow-hidden">
      {/* HEADING */}
      <div
        className="relative z-10 flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-16 px-10"
        style={{ width: "min(489px, 90vw)", height: "73px" }}
      >
        <h2 className="text-[#58595B] font-bold text-2xl lg:text-[38px] font-montserrat leading-none">
          India Med Network
        </h2>
      </div>

      <div className="relative w-full">
        {/* ARROWS - Moved slightly upwards from 200px to 170px */}
        <div className="absolute top-[170px] left-0 right-0 z-50 pointer-events-none flex justify-between px-4 lg:px-20">
          <button
            onClick={scrollPrev}
            className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-xl text-[#EE4423] border border-gray-100 hover:scale-110 transition-all"
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button
            onClick={scrollNext}
            className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-xl text-[#EE4423] border border-gray-100 hover:scale-110 transition-all"
          >
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {hospitalData.map((hospital, index) => {
              const total = hospitalData.length;
              const diff = (index - selectedIndex + total) % total;
              const isInFront = isMobile ? diff === 0 : diff === 0 || diff === 1;

              return (
                <div
                  key={index}
                  className="relative flex-[0_0_80%] lg:flex-[0_0_42%] px-3 min-w-0 transition-all duration-500"
                  style={{ opacity: isInFront ? 1 : 0.4 }}
                >
                  <div
                    className="relative overflow-hidden bg-[#EE4423]"
                    style={{
                      width: "100%",
                      height: "400px",
                      borderRadius: "40px",
                      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(238, 68, 35, 0.2)",
                    }}
                  >
                    <div className="relative z-20 p-8 pb-0 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-white/90">
                        <LocationIcon />
                        <span className="text-sm font-bold uppercase tracking-wider">
                          {hospital.location}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-2xl lg:text-[28px] leading-tight max-w-[320px]">
                        {hospital.name}
                      </h3>
                    </div>

                    <div
                      className="absolute top-0 right-0 w-3/5 h-[70%] z-10 overflow-hidden"
                      style={{
                        borderRadius: "0 40px 0 80px",
                        WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)",
                        maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
                      }}
                    >
                      <Image
                        src={hospital.image}
                        alt={hospital.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div
                      className="absolute bottom-4 left-4 right-4 h-[180px] z-30 p-6 flex items-end justify-between"
                      style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))",
                        backdropFilter: "blur(25px)",
                        WebkitBackdropFilter: "blur(25px)",
                        borderRadius: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                        boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.5), 0 8px 32px 0 rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="max-w-[65%]">
                        <p className="text-white text-xs lg:text-[14px] font-medium leading-relaxed line-clamp-4">
                          {hospital.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <button className="flex items-center gap-2 text-white font-bold text-sm hover:underline group">
                          Know more
                          <div className="bg-white rounded-full p-1 transition-transform group-hover:rotate-45">
                            <ArrowUpRight size={18} className="text-[#EE4423]" strokeWidth={3} />
                          </div>
                        </button>
                        <button className="bg-white/90 text-[#58595B] px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105">
                          <Phone size={16} fill="#58595B" />
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {hospitalData.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${selectedIndex === i ? "w-8 bg-[#EE4423]" : "w-2 bg-gray-200"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}