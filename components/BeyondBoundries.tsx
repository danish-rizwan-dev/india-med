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
      className="relative w-full bg-[#EE4423] overflow-hidden flex flex-col items-center justify-center min-h-[682px] py-16 lg:py-0"
    >
      {/* 1. Background Image Layer - SEO optimized */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
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
          <header className="flex-1 text-white pt-10">
            <p className="text-xl font-medium mb-6">Beyond Boundaries</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-bold leading-[1.1] max-w-[620px] mb-10">
              Fostering health with cutting-edge medical services across 130+ countries
            </h2>
            
            <button 
              aria-label="Learn more about medical services"
              className="group flex items-center gap-2 text-white font-bold text-lg no-underline"
            >
              Know More 
              <ChevronRight 
                size={22} 
                className="transition-transform duration-300 group-hover:translate-x-3" 
                aria-hidden="true"
              />
            </button>
          </header>

          {/* Right Globe Column - Fixed responsive width */}
          <div className="relative mt-10 lg:mt-0 flex justify-center lg:block">
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[524px] lg:h-[480px]">
              <Image 
                src="/images/backgrounds/globe.png" 
                alt="World Medical Network Map" 
                fill
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 450px, 524px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3. Bottom Row: Aligned Contact Button & Stats */}
        <footer className="mt-12 lg:mt-[-20px] flex flex-col lg:flex-row items-center justify-between w-full">
          
          {/* Contact Button */}
          <div className="mb-10 lg:mb-0 w-full lg:w-auto flex justify-center lg:block">
            <button 
              aria-label="Contact us for medical services"
              className="bg-white text-[#58595B] px-8 py-3.5 rounded-full font-bold flex items-center gap-3 shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <Phone size={18} fill="#58595B" aria-hidden="true" />
              Contact Now
            </button>
          </div>

          {/* Statistics Grid - Responsive Wrap */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 md:gap-12 lg:gap-[112px]">
            {stats.map((stat, idx) => (
              <article key={idx} className="flex flex-col items-center lg:items-start text-white">
                <p className="text-4xl lg:text-[48px] font-bold leading-tight">
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