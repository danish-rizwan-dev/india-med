"use client";

import React from "react";

interface SharedGradientBgProps {
  children: React.ReactNode;
}

export default function SharedGradientBg({ children }: SharedGradientBgProps) {
  return (
    /* 1. Negative Margin: Pulls the background up to overlap the ServiceBar
       2. isolate: Ensures the background stays behind the ServiceBar buttons.
    */
    <section className="relative w-full isolate mt-[-100px] md:mt-[-140px] lg:mt-[-150px] lg:pb-32 mb-16 overflow-hidden">

      {/* ================= BACKGROUND LAYER ================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 5%, black 20%, black 80%, rgba(0,0,0,0.1) 95%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 5%, black 20%, black 80%, rgba(0,0,0,0.1) 95%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        {/* Layer 1: Base Glow */}
        <div
          className="absolute inset-[-10%] w-[120%] h-[120%] opacity-60"
          style={{
            backgroundImage: "url('/images/backgrounds/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Layer 2: Texture Overlap Top */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[80%] opacity-40 scale-125"
          style={{
            backgroundImage: "url('/images/backgrounds/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        />
        {/* Layer 3: Texture Overlap Bottom */}
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[110%] h-[60%] opacity-30 rotate-180"
          style={{
            backgroundImage: "url('/images/backgrounds/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
        />

        {/* Glassmorphism base layer: Pulls it all together */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[100px]" />
      </div>





      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-10 
        /* PUSH CONTENT DOWN: This ensures IndiaMedNetwork heading 
           doesn't get buried under ServiceBar overlap.
        */
        pt-[80px] md:pt-[120px] lg:pt-[160px]"
      >
        {children}
      </div>

    </section>
  );
}