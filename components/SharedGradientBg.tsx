"use client";

import React from "react";

interface SharedGradientBgProps {
  children: React.ReactNode;
}

export default function SharedGradientBg({ children }: SharedGradientBgProps) {
  return (
    /* 1. Negative Margin: Pulls the background up to overlap the ServiceBar.
       2. isolate: Ensures the background stays behind the ServiceBar buttons.
    */
    <section className="relative w-full isolate  mt-[-100px] md:mt-[-140px] lg:-mt-16 lg:pb-32 mb-16">
      
      {/* ================= BACKGROUND LAYER ================= */}
      <div
        className="absolute inset-0 z-0 -top-1 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 w-full h-full opacity-60 mt-[-200px] md:mt-[-70px] lg:mt-[-220px]"
          style={{
            backgroundImage: "url('/images/backgrounds/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(60px) saturate(1.3)",
            /* Fading Mask: 
               Starts transparent at the very top (overlapping ServiceBar) 
               and becomes fully visible (black) as it reaches the content.
            */
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 98%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 98%, transparent 100%)",
          }}
        />
        {/* Glassmorphism base layer */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl" />
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-10 
        /* PUSH CONTENT DOWN: This is the fix. 
           We add padding-top equal to (or slightly more than) the negative margin 
           so the IndiaMedNetwork content starts AFTER the ServiceBar.
        */
        pt-[120px] md:pt-[160px] lg:pt-20"
      >
        {children}
      </div>
    </section>
  );
}