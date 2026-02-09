"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react";

/**
 * Animated Counter Component
 */
const Counter = ({ end, duration = 2000, shouldStart }: { end: number; duration?: number; shouldStart: boolean }) => {
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
      className="relative w-full bg-[#EE4423] overflow-hidden flex flex-col items-center justify-center min-h-[682px] py-16 lg:py-0"
    >
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgrounds/beyoundboundriesbglines.png"
          alt="background lines"
          fill
          priority
          className="object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] px-6 flex flex-col">
        
        {/* 2. Top Content Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between">
          
          {/* Left Text Column */}
          <div className="flex-1 text-white pt-10">
            <p className="text-xl font-medium mb-6">Beyond Boundaries</p>
            <h2 className="text-4xl lg:text-[54px] font-bold leading-[1.1] max-w-[620px] mb-10">
              Fostering health with cutting-edge medical services across 130+countries
            </h2>
            
            {/* Know More with Animated Arrow */}
            <button className="group flex items-center gap-2 text-white font-bold text-lg no-underline">
              Know More 
              <ChevronRight 
                size={22} 
                className="transition-transform duration-300 group-hover:translate-x-3" 
              />
            </button>
          </div>

          {/* Right Globe Column */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[524px] lg:h-[480px]">
              <Image 
                src="/images/backgrounds/globe.png" 
                alt="World Medical Network" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3. Bottom Row: Aligned Contact Button & Stats */}
        <div className="mt-12 lg:mt-[-20px] flex flex-col lg:flex-row items-center justify-between w-full">
          
          {/* Contact Button - Now aligned to the baseline of numbers */}
          <div className="mb-10 lg:mb-0 w-full lg:w-auto">
            <button className="bg-white text-[#58595B] px-8 py-3.5 rounded-full font-bold flex items-center gap-3 shadow-xl transition-transform hover:scale-105 active:scale-95">
              <Phone size={18} fill="#58595B" />
              Contact Now
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-[112px]">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-white">
                <p className="text-4xl lg:text-[48px] font-bold leading-tight">
                  <Counter end={stat.value} shouldStart={hasStarted} />
                </p>
                <p className="text-[12px] lg:text-[14px] font-medium opacity-90 text-center lg:text-left max-w-[140px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}