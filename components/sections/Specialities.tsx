"use client";

import { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Cycling logic: Moves the items up by 4 every 3000ms
  useEffect(() => {
    if (search || isExpanded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 4) % specialities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [search, isExpanded]);

  const filtered = specialities.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  // When searching/expanded, show full or filtered list
  const showScrolling = !search && !isExpanded;

  return (
    <section className="relative w-full overflow-hidden">
      {/* --- SECTION CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 lg:py-24">

        {/* SEO Header */}
        <header className="flex items-center justify-center bg-white/20 backdrop-blur-xl border-2 border-[#58595B] rounded-[50px] mb-12 lg:mb-20 px-10 py-4 max-w-[450px] w-full">
          <h2 className="text-[#58595B] font-bold text-2xl lg:text-[42px] font-montserrat text-center">
            Our Specialities
          </h2>
        </header>

        {/* --- MOBILE/IPAD VIEW: LIST LAYOUT --- */}
        <div className="flex md:hidden flex-col items-center bg-white/60 backdrop-blur-3xl border-[2.03px] border-white/80 rounded-[33.76px] p-[25px] gap-[20px] w-full max-w-[351px] transition-all duration-500 overflow-hidden">

          {showScrolling ? (
            <div className="w-full h-[328px] overflow-hidden relative">
              <nav 
                className="w-full flex flex-col gap-[32px] transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentIndex * 82}px)` }}
                aria-label="Scrolling specialities list"
              >
                {/* Double the list for seamless looping feel */}
                {[...specialities, ...specialities].map((item, index) => (
                  <Link
                    key={index}
                    href={`/specialities/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex items-center justify-between w-full h-[50px] border-b border-black/5 pb-2 shrink-0 transition-colors"
                    title={`Learn more about ${item.title}`}
                  >
                    <div className="flex items-center gap-[20px]">
                      <div className="relative w-[35px] h-[35px]">
                        <Image src={item.icon} alt={item.title} fill className="object-contain" />
                      </div>
                      <span className="font-montserrat font-bold text-[#58595B] text-lg">
                        {item.title}
                      </span>
                    </div>
                    <div className="bg-[#58595B] group-hover:bg-[#EE4423] rounded-full p-1 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          ) : (
            <nav className="w-full flex flex-col gap-[32px]" aria-label="Static specialities list">
              {filtered.map((item, index) => (
                <Link
                  key={index}
                  href={`/specialities/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center justify-between w-full h-[50px] border-b border-black/5 pb-2 transition-colors"
                >
                  <div className="flex items-center gap-[20px]">
                    <div className="relative w-[35px] h-[35px]">
                      <Image src={item.icon} alt={item.title} fill className="object-contain" />
                    </div>
                    <span className="font-montserrat font-bold text-[#58595B] text-lg">
                      {item.title}
                    </span>
                  </div>
                  <div className="bg-[#58595B] group-hover:bg-[#EE4423] rounded-full p-1 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </nav>
          )}

          {/* Search Bar */}
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
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE4423]" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          {!search && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center w-full h-[49px] bg-[#EE4423] rounded-full text-white font-bold pl-[40px] pr-[30px] active:scale-95 transition-all hover:bg-[#d63a1b] whitespace-nowrap"
            >
              <span className="mr-3">{isExpanded ? "Show Less" : "View All Specialities"}</span>
              <span className={`text-xl transition-transform ${isExpanded ? "-rotate-90" : "rotate-0"}`}>›</span>
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
                className="group relative flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-3 p-6 lg:p-8 rounded-[40px] h-full min-h-[220px] lg:min-h-[250px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/20"
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
                <div className="relative z-20 px-6 py-2 bg-white rounded-full text-[12px] lg:text-[13px] font-bold text-[#EE4423] border group-hover:bg-[#EE4423] group-hover:text-white transition-all">
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
              className="group relative z-20 flex items-center gap-3 px-8 lg:px-10 py-3 lg:py-4 rounded-full bg-[#EE4423] text-white font-bold text-base lg:text-lg hover:bg-[#d63a1b] transition-all"
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