"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const specialities = [
  { title: "Cardiac Care", icon: "/images/icons/cardiac.svg" },
  { title: "Neurosciences", icon: "/images/icons/Neuro.svg" },
  { title: "Cancer Care", icon: "/images/icons/cancer.svg" },
  { title: "Gastrosciences", icon: "/images/icons/Gastro.svg" },
  { title: "Orthopaedics", icon: "/images/icons/cardiac.svg" },
  { title: "Nephrology", icon: "/images/icons/Neuro.svg" },
  { title: "Pulmonology", icon: "/images/icons/cancer.svg" },
  { title: "Urology", icon: "/images/icons/Gastro.svg" },
];

export default function Specialities() {
  const [search, setSearch] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const filtered = specialities.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  const mobileList = search || isExpanded ? filtered : filtered.slice(0, 4);

  return (
    <section className="relative w-full mt-[-60px] lg:mt-[-150px] overflow-hidden">
      {/* --- SECTION CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 lg:py-24">
        
        {/* SEO Header */}
        <header className="flex items-center justify-center bg-white/40 backdrop-blur-xl border-2 border-[#58595B] rounded-[50px] mb-12 lg:mb-20 px-10 py-4 shadow-sm max-w-[450px] w-full">
          <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] font-montserrat text-center">
            Our Specialities
          </h2>
        </header>

        {/* --- MOBILE/IPAD VIEW: LIST LAYOUT (md: hidden keeps it mobile-only) --- */}
        <div className="flex md:hidden flex-col items-center bg-white/60 backdrop-blur-3xl border-[2.03px] border-white/80 rounded-[33.76px] p-[25px] gap-[20px] w-full max-w-[351px] transition-all duration-500 shadow-2xl">
          
          <nav className="w-full flex flex-col gap-[32px] overflow-hidden transition-all duration-500" aria-label="Specialities list">
            {mobileList.map((item, index) => (
              <Link
                key={index}
                href={`/specialities/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center justify-between w-full h-[50px] border-b border-black/5 pb-2 transition-colors"
                title={`Learn more about ${item.title}`}
              >
                <div className="flex items-center gap-[20px]">
                  <div className="relative w-[35px] h-[35px] transition-transform group-active:scale-110">
                    <Image
                      src={item.icon}
                      alt={`${item.title} medical icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-[#58595B] text-lg group-hover:text-[#EE4423] transition-colors">
                    {item.title}
                  </span>
                </div>
                <div className="bg-[#58595B] group-hover:bg-[#EE4423] rounded-full p-1 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </Link>
            ))}
          </nav>

          {/* Search Bar - SEO/Accessibility Optimized */}
          <div className="relative w-full h-[49px] mt-4">
            <label htmlFor="speciality-search" className="sr-only">Search Specialities</label>
            <input
              id="speciality-search"
              type="search"
              placeholder="Search specialities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full rounded-full border border-[#EE4423] px-12 focus:outline-none text-sm font-montserrat placeholder:text-gray-400"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE4423]"
              width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          {!isExpanded && !search && (
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center w-full h-[49px] bg-[#EE4423] rounded-full text-white font-bold pl-[40px] pr-[30px] shadow-lg active:scale-95 transition-all hover:bg-[#d63a1b] whitespace-nowrap"
            >
              <span className="mr-3">View All Specialities</span>
              <span className="text-xl">›</span>
            </button>
          )}

          {isExpanded && !search && (
            <button onClick={() => setIsExpanded(false)} className="text-[#EE4423] font-bold text-sm underline mt-2">
              Show Less
            </button>
          )}
        </div>

        {/* --- DESKTOP & TABLET VIEW: GRID LAYOUT --- */}
        {/* Shows from md (768px) upwards. Changed grid from 4 to 2 on tablets (md) */}
        <div className="hidden md:block w-full max-w-[1318px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {specialities.map((item, index) => (
              <Link
                key={index}
                href={`/specialities/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-3 p-6 lg:p-8 rounded-[40px] h-full min-h-[220px] lg:min-h-[250px] overflow-hidden bg-white/40 backdrop-blur-xl shadow-sm border border-white/20"
                style={{
                  background: "linear-gradient(145deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2))",
                }}
              >
                <div className="relative z-20 w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative z-20 text-[#414042] text-lg lg:text-[20px] font-bold font-montserrat mt-4 lg:mt-6 mb-6 lg:mb-8 group-hover:text-[#EE4423] transition-colors">
                  {item.title}
                </div>
                <div className="relative z-20 px-6 py-2 bg-white rounded-full text-[12px] lg:text-[13px] font-bold text-[#EE4423] shadow-md border group-hover:bg-[#EE4423] group-hover:text-white transition-all">
                  Know More ›
                </div>
                
                {/* Gradient Border Overlay */}
                <div
                  className="absolute inset-0 rounded-[40px] pointer-events-none z-10 border-2 border-transparent"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,173,157,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.8) 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12 lg:mt-16">
            <Link
              href="/specialities"
              className="group relative z-20 flex items-center gap-3 px-8 lg:px-10 py-3 lg:py-4 rounded-full bg-[#EE4423] text-white font-bold text-base lg:text-lg shadow-xl hover:bg-[#d63a1b] transition-all"
            >
              View All Specialities
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                ›
              </span>
            </Link>
          </div>
        </div> 
      </div>
    </section>
  );
}