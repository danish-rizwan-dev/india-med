import React from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ServiceBar() {
  const services = [
    { label: "Second Opinion", icon: "/doctor _icon.png" },
    { label: "Get Health Checkup", icon: "/get health checup icon 6574 1.png" },
    { label: "Homecare", icon: "/homecare.png" },
    { label: "Book a Virtual Consultation", icon: "/virtual consultaion.png" },
    { label: "Book a Test", icon: "/book a test.png" },
  ];

  // Common glass style for the arrows
// This ensures the button starts as semi-transparent white and turns orange on hover
const arrowGlassStyle = `
  absolute z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full 
  transition-all duration-300 transform cursor-pointer
  
  /* DEFAULT STATE: White Glass */
  border border-white/60 bg-white/40 text-[#EE4423] backdrop-blur-md
  shadow-[0_8px_32px_rgba(0,0,0,0.1)]
  
  /* HOVER STATE: Orange Background + White Arrow + Scale */
  hover:scale-110 
  hover:bg-[#EE4423] 
  hover:text-white 
  hover:border-transparent
  hover:shadow-[0_20px_40px_rgba(238,68,35,0.4)]
`;
  return (
    <div
      className="absolute z-30 flex items-center justify-center"
      style={{
        top: "613px",
        left: "98px",
        width: "1317px",
        height: "226px",
        borderRadius: "50px",
        /* ORIGINAL BORDER LOGIC */
        border: "3px solid rgba(255, 140, 0, 0.18)", 
        /* GLASS EFFECT FOR MAIN BAR */
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* LEFT BUTTON (GLASS) */}
      <button className={`${arrowGlassStyle} left-[-30px]`}>
        <ChevronLeft size={32} strokeWidth={3} />
      </button>

      {/* INNER CONTENT */}
      <div
        className="relative z-10 flex items-center justify-center overflow-hidden"
        style={{
          width: "1256.49px",
          height: "179px",
          gap: "4px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/90 h-full flex-1 group cursor-pointer transition-all duration-300 hover:bg-white"
            style={{
              borderRadius:
                index === 0
                  ? "40px 0 0 40px"
                  : index === services.length - 1
                  ? "0 40px 40px 0"
                  : "0px",
            }}
          >
            {/* ICON - EXACT PROPS */}
            <div 
              className="mb-3 relative transition-all duration-300 group-hover:scale-110"
              style={{
                width: "36px",
                height: "40.31999969482422px",
                opacity: 1,
              }}
            >
              <Image
                src={service.icon}
                alt={service.label}
                fill
                className="object-contain"
              />
            </div>

            {/* TEXT - EXACT PROPS */}
            <span
              className="text-center px-2 group-hover:text-[#EE4423] text-[#58595B] transition-colors duration-300"
              style={{
                width: "180px", 
                height: "44px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {service.label}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON (GLASS) */}
      <button className={`${arrowGlassStyle} right-[-30px]`}>
        <ChevronRight size={32} strokeWidth={3} />
      </button>
    </div>
  );
}