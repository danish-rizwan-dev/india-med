"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react";

/**
 * Animated Counter Component - Original Logic Restored
 */
const Counter = ({ end, duration = 3000, shouldStart }: { end: number; duration?: number; shouldStart: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
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
    { label: "Average International Patients Per Year", value: 10000 },
    { label: "Countries", value: 70 },
    { label: "Hospitals in India", value: 10 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="beyond-boundaries"
      className="relative w-full bg-[#EE4423] overflow-hidden flex flex-col items-center justify-center min-h-[700px] lg:min-h-[682px] py-20 lg:py-0"
    >
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image 
          src="/images/backgrounds/beyoundboundriesbglines.png"
          alt="Topographical background lines"
          fill
          priority
          className="object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] px-6 flex flex-col">
        
        {/* 2. Top Content Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left">
          
          {/* Left Text Column */}
          <header className="flex-1 text-white lg:pt-10 mb-10 lg:mb-0">
            <p className="text-lg lg:text-xl font-medium mb-4 lg:mb-6 opacity-90">Beyond Boundaries</p>
            <h2 className="text-[32px] sm:text-4xl lg:text-[54px] font-bold leading-[1.2] lg:leading-[1.1] max-w-[620px] mb-8 lg:mb-10">
              Fostering health with cutting-edge medical services across 130+ countries
            </h2>
            
            <button 
              aria-label="Learn more about medical services"
              className="group flex items-center justify-center lg:justify-start gap-2 text-white font-bold text-lg no-underline mx-auto lg:mx-0"
            >
              Know More 
              <ChevronRight 
                size={22} 
                className="transition-transform duration-300 group-hover:translate-x-3" 
                aria-hidden="true"
              />
            </button>
          </header>

          {/* Right Globe Column */}
          <div className="relative flex justify-center w-full lg:w-auto">
            <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[524px] lg:h-[480px]">
              <Image 
                src="/images/backgrounds/globe.png" 
                alt="World Medical Network Globe" 
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 524px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3. Bottom Row: Aligned Contact Button & Stats */}
        <footer className="mt-16 lg:mt-[-20px] flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-0">
          
          {/* Contact Button */}
          <div className="w-full lg:w-auto flex justify-center lg:block">
            <button 
              aria-label="Contact us now"
              className="bg-white text-[#58595B] px-10 py-4 lg:px-8 lg:py-3.5 rounded-full font-bold flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <Phone size={20} fill="#58595B" aria-hidden="true" />
              <span className="text-lg lg:text-base">Contact Now</span>
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row justify-center lg:justify-start gap-x-8 gap-y-10 md:gap-12 lg:gap-[112px] w-full lg:w-auto">
            {stats.map((stat, idx) => (
              <article 
                key={idx} 
                className={`flex flex-col items-center lg:items-start text-white ${idx === 0 ? 'col-span-2' : 'col-span-1'}`}
              >
                <p className="text-[36px] sm:text-4xl lg:text-[48px] font-bold leading-tight">
                  <Counter end={stat.value} shouldStart={hasStarted} />
                </p>
                <p className="text-[12px] lg:text-[14px] font-medium opacity-90 text-center lg:text-left max-w-[155px]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </footer>

      </div>
    </section>
  );
}