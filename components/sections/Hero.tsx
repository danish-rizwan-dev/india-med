"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const CalendarIcon = () => (
    <div className="relative w-[16px] h-[16px] lg:w-[26px] lg:h-[24px] flex items-center justify-center flex-shrink-0">
      <Image
        src="/images/sections/common/appointment-calendar.svg"
        alt="Book appointment calendar icon"
        fill
        sizes="(max-width: 1024px) 16px, 26px"
        className="object-contain brightness-0 invert"
      />
    </div>
  );

  return (
    <section
      className="relative w-full bg-white overflow-hidden md:min-h-[700px] lg:min-h-[850px] h-[650px] lg:h-auto"
      aria-label="Affordable Medical Treatment in India"
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute pointer-events-none z-0 hidden md:block md:w-[400px] lg:w-[508px] lg:h-[723px] lg:top-[-70.33px] lg:right-0">
        <Image
          src="/images/sections/hero/background-grids.png"
          alt="Geometric background pattern"
          fill
          sizes="(max-width: 1024px) 400px, 508px"
          className="object-contain object-right"
          priority
        />
      </div>


      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative w-full max-w-[1512px] mx-auto h-full">

        {/* ================= DOCTOR IMAGE ================= */}
        <div
          className="
            absolute z-10
            /* Mobile Spec: 170px left */
            w-[215px] h-[287px] 
            top-[202px] left-[170px] 
            /* iPad Air & Pro Fix: Start Desktop-style layout at 'md' */
            md:z-20 md:w-[350px] md:h-[460px] md:top-[50px]
            md:left-[calc(100%-380px)] /* Keeps doctor on right for iPad Air */
            /* Desktop Spec: Matches your 853px left position exactly */
            lg:w-[426.39px] lg:h-[569.47px]
            lg:top-[22px] lg:left-[calc(max(600px,min(853px,58vw)))]
          "
        >
          <Image
            src="/images/sections/hero/doctor.png"
            alt="Expert healthcare professional in India providing world-class medical assistance"
            fill
            sizes="(max-width: 768px) 215px, (max-width: 1024px) 350px, 426px"
            priority
            className="object-contain"
          />
        </div>

        {/* ================= CONTENT BOX ================= */}
        <div
          className="
            absolute flex flex-col items-center md:items-start
            /* Mobile Spec: 19px left */
            w-[357px] h-[360px]
            top-[32px] left-[19px]
            gap-[40px] z-20
            /* iPad Air & Pro: Adjust left position to be fluid */
            md:max-w-[450px] md:top-[80px] md:left-[5vw]
            /* Desktop Spec: 208px left */
            lg:w-full lg:max-w-[584px] lg:h-auto
            lg:top-[75px] lg:left-[calc(max(40px,min(208px,14vw)))] lg:gap-[45px]
          "
        >
          {/* Brand & Heading Group */}
          <div className="flex flex-col gap-[20px] w-full text-center md:text-left">
            <span className="font-montserrat font-bold text-[20px] lg:text-[24px] text-[#EE4423] leading-[39.19px] block">
              India Med Services
            </span>

            <h1
              className="
                text-[#444444] font-montserrat font-bold
                text-[28px] md:text-[36px] lg:text-[47px]
                leading-[1.1] lg:leading-tight
              "
            >
              Affordable Medical Treatment in India with
              <span className="text-[#EE4423]"> World-Class Care</span>
            </h1>

            <p
              className="
                font-montserrat font-medium text-[#58595B]
                text-[14px] lg:text-[17px]
                leading-relaxed lg:leading-normal
                w-[203px] md:w-full 
                text-left
                mx-0
              "
            >
              Looking for medical treatment in India? We help you compare
              treatment costs in India, choose top hospitals and get complete
              visa & patient support.
            </p>
          </div>

          {/* Consult Button */}
          <Link
            href="/appointment"
            aria-label="Book a medical consultation with India Med experts"
            title="Book a medical consultation"
            className="
              flex items-center justify-center
              bg-[#EE4423] text-white
              transition-transform active:scale-95
              shadow-[0px_10px_20px_rgba(238,68,35,0.2)]
              w-[158.9px] lg:w-[252px] 
              h-[48px] lg:h-[49px]
              p-4
              rounded-full gap-[10px] px-[20px]
              mr-auto lg:mr-0
            "
          >
            <CalendarIcon />
            <span className="font-montserrat font-bold text-[14px] lg:text-[17px] whitespace-nowrap">
              Consult Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}