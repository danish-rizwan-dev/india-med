"use client";

import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "./whychooseus";

const specialities = [
  { title: "Cardiac Care", icon: "/images/icons/cardiac.svg" },
  { title: "Neurosciences", icon: "/images/icons/neuro.svg" },
  { title: "Cancer Care", icon: "/images/icons/cancer.svg" },
  { title: "Gastrosciences", icon: "/images/icons/gastro.svg" },
  { title: "Cardiac Care", icon: "/images/icons/cardiac.svg" },
  { title: "Neurosciences", icon: "/images/icons/neuro.svg" },
  { title: "Cancer Care", icon: "/images/icons/cancer.svg" },
  { title: "Gastrosciences", icon: "/images/icons/gastro.svg" },
];

export default function Specialities() {
  return (
    <>
      {/* Background and Layout Container */}
      <div className="relative w-full mt-[-60px] lg:mt-[-150px] overflow-hidden">
        {/* --- SHARED GLASSMORPHIC BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-full opacity-60"
            style={{
              backgroundImage: "url('/images/backgrounds/background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(40px) saturate(1.5)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            }}
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl" />
        </div>

        {/* --- SECTION CONTENT --- */}
        <section className="relative z-10 flex flex-col items-center px-6 py-16 lg:py-24">
          
          {/* Section Heading */}
          <div
            className="flex items-center justify-center bg-white/40 backdrop-blur-xl border-2 border-[#58595B] rounded-[50px] mb-12 lg:mb-20 px-10 py-4 shadow-sm"
            style={{ maxWidth: "450px", width: "100%" }}
          >
            <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] font-montserrat">
              Our Specialities
            </h2>
          </div>

          {/* Grid Container */}
          <div className="w-full max-w-[1318px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {specialities.map((item, index) => (
                <Link
                  key={index}
                  href="/specialities"
                  className="group flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-3 p-8 rounded-[40px] h-full min-h-[250px]"
                  style={{
                    background: "linear-gradient(145deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2))",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* SVG ICON */}
                  <div className="relative w-[65px] h-[65px] transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <div className="text-[#414042] text-[20px] font-bold font-montserrat mt-6 mb-8 group-hover:text-[#EE4423] transition-colors">
                    {item.title}
                  </div>

                  {/* Button-style Link */}
                  <div className="px-6 py-2 bg-white rounded-full text-[13px] font-bold text-[#EE4423] shadow-md border border-white group-hover:bg-[#EE4423] group-hover:text-white transition-all">
                    Know More ›
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <Link
            href="/specialities"
            className="mt-16 flex items-center gap-3 px-10 py-4 rounded-full bg-[#EE4423] text-white font-bold text-lg shadow-xl hover:bg-[#d63a1b] hover:shadow-2xl transition-all"
          >
            View All Specialities <span className="text-xl">›</span>
          </Link>
          
          <div className="mt-24 w-full">
            <WhyChooseUs />
          </div>
        </section>
      </div>
    </>
  );
}