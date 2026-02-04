import React from "react";

export default function ServiceAreaWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{"marginTop": "-250px", "marginBottom": "100px"}}>
      {/* --- UNIFIED BACKGROUND SYSTEM --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Blurred Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(50px) saturate(.2) brightness(1)",
            /* Mask creates the 'dissolve' effect at the very top and bottom of the whole area */
            WebkitMaskImage: "linear-gradient(to bottom, transparent 60%, black 15%, black 85%, transparent 20%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 40%)",
          }}
        />

        {/* Milky Glass Overlay */}
        <div
          className="absolute inset-0 bg-white/30 backdrop-blur-3xl"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />
      </div>

      {/* --- CONTENT (Specialities & WhyChooseUs) --- */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}