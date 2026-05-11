"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {useTranslations, useLocale} from 'next-intl';

export default function ProcessFlow() {
  const t = useTranslations('ProcessFlow');
  const [isMounted, setIsMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    // ROW 1
    { id: 1, title: t('step_1'), icon: "/images/sections/process-flow/icons/consult.svg" },
    { id: 2, title: t('step_2'), icon: "/images/sections/process-flow/icons/plan.svg" },
    { id: 3, title: t('step_3'), icon: "/images/sections/process-flow/icons/visa.svg" },
    { id: 4, title: t('step_4'), icon: "/images/sections/process-flow/icons/transfer.svg" },
    // ROW 2 (Meeting -> Living -> Translators -> Support)
    { id: 5, title: t('step_5'), icon: "/images/sections/process-flow/icons/meetingAirport.svg" },
    { id: 6, title: t('step_6'), icon: "/images/sections/process-flow/icons/nearhospital.svg" },
    { id: 7, title: t('step_7'), icon: "/images/sections/process-flow/icons/translators.svg" },
    { id: 8, title: t('step_8'), icon: "/images/sections/process-flow/icons/supportafterreturn.svg" },
  ];
  
  const row1 = processSteps.slice(0, 4);
  const row2 = processSteps.slice(4, 8).reverse(); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-slide logic for mobile
  useEffect(() => {
    if (!isMounted || isPaused) return;
    const timer = setInterval(() => {
      const nextStep = (activeStep + 1) % processSteps.length;
      setActiveStep(nextStep);
      
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: nextStep * 280, // Card (200) + Gap (80)
          behavior: 'smooth'
        });
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [isMounted, isPaused, activeStep, processSteps.length]);

  // Handle manual scroll to update activeStep
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / 280);
      if (index !== activeStep) {
        setActiveStep(index);
      }
    }
  };

  return (
    <section className="relative w-full -mt-[80px] lg:mt-0 py-8 lg:py-24 flex flex-col items-center overflow-hidden bg-white font-montserrat">
      
      {/* BACKGROUND STROKES (Moved below cards) */}
      <div className="absolute inset-0 z-0 lg:hidden pointer-events-none flex items-center justify-center -translate-y-[40px]">
        <Image 
          src="/images/sections/process-flow/background-strokes.png" 
          alt="background strokes" 
          width={1200}
          height={600}
          className="object-contain " 
        />
      </div>

      {/* --- MOBILE AUTO CAROUSEL --- */}
      <div 
        className="relative z-10 w-full flex lg:hidden flex-col items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative w-full flex items-center overflow-x-auto no-scrollbar snap-x snap-mandatory px-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {processSteps.map((step, idx) => (
            <div key={step.id} className="flex items-center shrink-0 snap-start">
              <div className="relative">
                 <ProcessCard step={step} />
              </div>
              
              {/* Dashed Arrow (Centered in the gap) */}
              {idx < processSteps.length - 1 && (
                 <div className="w-[80px] flex items-center justify-center px-4">
                   <div className="w-full h-0 border-t-2 border-dashed border-[#EE4423] relative">
                     <div className="absolute right-[-4px] top-[-6px] border-t-[6px] border-l-[8px] border-b-[6px] border-transparent border-l-[#EE4423]" />
                   </div>
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex relative w-full max-w-[1122px] flex-col items-center z-10">
        
        {/* ROW 1: 1 -> 2 -> 3 -> 4 */}
        <div className="flex items-center justify-end w-full gap-[32px] mb-8">
          {row1.map((step, idx) => (
            <React.Fragment key={step.id}>
              <ProcessCard step={step} />
              {idx < 3 && <StepArrow />}
            </React.Fragment>
          ))}
        </div>

        {/* VERTICAL TRANSITION */}
        <div className="w-full flex justify-end mb-8" style={{ paddingRight: '84px' }}>
          <StepArrow rotate={90} />
        </div>

        {/* ROW 2: 8 <- 7 <- 6 <- 5 */}
        <div className="flex items-center justify-end w-full gap-[32px] relative left-[20px]">
          {row2.map((step, idx) => (
            <React.Fragment key={step.id}>
              <ProcessCard step={step} />
              {idx < 3 && <StepArrow rotate={180} />}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

const StepArrow = ({ rotate = 0, isVertical = false }: { rotate?: number, isVertical?: boolean }) => (
  <div 
    className="relative flex items-center justify-center shrink-0"
    style={{ 
      width: isVertical ? '30px' : '32px', 
      height: isVertical ? '64px' : '15px',
      transform: `rotate(${rotate}deg)` 
    }}
  >
    <Image 
      src="/images/sections/process-flow/icons/Arrows.svg" 
      alt="arrow" 
      width={isVertical ? 64 : 32} 
      height={isVertical ? 30 : 15} 
      className="object-contain"
    />
  </div>
);

function ProcessCard({ step }: { step: any }) {
  const isWider = step.id === 8;
  const locale = useLocale();
  const isLongLocale = locale === 'kk' || locale === 'uz' || locale === 'ru';
  
  return (
    <article className="relative group shrink-0">
      {/* Gradient Border Wrap */}
      <div 
        className="relative h-[176px] p-[1px] rounded-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)]"
        style={{
          width: isWider ? '312px' : '200px',
          background: 'linear-gradient(39.31deg, rgba(238, 68, 35, 0) 45.41%, rgba(238, 68, 35, 0.4) 113.52%), linear-gradient(222.62deg, rgba(255, 255, 255, 0) 14.53%, rgba(255, 255, 255, 0.75) 101.14%)'
        }}
      >
        <div 
          className="w-full h-full bg-white rounded-[39px] flex flex-col items-center justify-start transition-transform group-hover:scale-[1.02] duration-300"
          style={{ padding: '16px 12px' }}
        >
          {/* Icon Area */}
          <div className="relative w-[64px] h-[64px] mb-[12px] shrink-0">
            <Image 
              src={step.icon} 
              alt={`${step.title} icon`} 
              fill 
              className="object-contain" 
            />
          </div>
          
          {/* Title Area */}
          <h3 
            className={`font-bold text-[#58595B] leading-[1.2] text-center font-montserrat flex items-center justify-center ${isLongLocale ? 'text-[15px]' : 'text-[20px]'}`}
            style={{ width: '176px', minHeight: '48px' }}
          >
            {step.title}
          </h3>
        </div>
      </div>
    </article>
  );
}
