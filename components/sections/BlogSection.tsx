"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogSection() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Safely check for mobile view after hydration
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sideBlogs = [
    {
      title: "Liver Detox: Best Foods and Fruits for Natural Liver Cleansi...",
      date: "2020-01-27",
      displayDate: "Jan 27, 2020",
      image: "/images/backgrounds/liver_blog.jpg",
      slug: "/blog/liver-detox"
    },
    {
      title: "White Spots on Skin: Causes, Symptoms, and Treatments",
      date: "2020-01-22",
      displayDate: "Jan 22, 2020",
      image: "/images/backgrounds/whitespot_blog.jpg",
      slug: "/blog/white-spots"
    },
    {
      title: "Yoga in Cancer Patients: Expectations, Benefits and Risks",
      date: "2020-01-22",
      displayDate: "Jan 22, 2020",
      image: "/images/backgrounds/yoga_blog.jpg",
      slug: "/blog/yoga-cancer"
    },
  ];

  // If we are on mobile AND 'showAll' is false, we only show 1 side blog.
  // Otherwise (Desktop or Expanded Mobile), we show all.
  const displayedSideBlogs = (!isMobile || showAll) ? sideBlogs : sideBlogs.slice(0, 1);

  return (
    <section className="relative w-full flex flex-col items-center py-12 lg:py-20 bg-[#F5F5F5]">
      
      <header className="flex items-center justify-center border-2 border-[#58595B] mb-8 lg:mb-12 px-6 py-2" style={{ borderRadius: "50px", minWidth: "180px", height: "60px" }}>
        <h2 className="text-[#58595B] font-bold text-[22px] lg:text-[28px] leading-none">Latest Blogs</h2>
      </header>

      <div className="relative bg-white flex flex-col lg:flex-row items-start justify-center p-6 lg:p-12 gap-10 shadow-sm transition-all duration-500" style={{ width: "min(1450px, 95vw)", borderRadius: "40px" }}>
        
        {/* LEFT COLUMN: Main Feature */}
        <article className="flex flex-col gap-6 w-full lg:w-[650px]">
          <Link href="/under-construction" className="group">
            <div className="relative overflow-hidden w-full h-[240px] lg:h-[380px] rounded-[30px] lg:rounded-[40px]">
              <Image 
                src="/images/backgrounds/blog1.jpg" 
                alt="Patient undergoing 4D-Phaco Cataract Surgery" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
            <h3 className="mt-6 text-[#414042] font-montserrat font-bold text-[24px] lg:text-[42px] leading-[1.1] tracking-tight group-hover:text-[#EE4423] transition-colors">
              4D-Phaco Cataract Surgery in India: Technology, Results and Costs
            </h3>
          </Link>
          <div className="flex items-center justify-between w-full">
            <time dateTime="2020-02-01" className="text-gray-500 font-medium text-sm lg:text-base">Feb 01, 2020</time>
            <Link href="/under-construction" className="flex items-center gap-1 text-[#EE4423] font-bold group text-sm lg:text-base">
              Read More <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>

        {/* RIGHT COLUMN: Side Blogs */}
        <div className="flex flex-col gap-8 lg:gap-[20px] w-full lg:w-[650px]">
          {displayedSideBlogs.map((blog, idx) => (
            <article key={idx} className="flex flex-col sm:flex-row gap-4 lg:gap-[20px] items-start sm:items-center group">
              <Link href={blog.slug} className="relative shrink-0 overflow-hidden w-full sm:w-[240px] lg:w-[315px] h-[160px] lg:h-[190px] rounded-[24px] lg:rounded-[40px]">
                <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 315px" />
              </Link>
              <div className="flex flex-col justify-between py-1 w-full lg:w-[315px] lg:h-[190px]">
                <Link href={blog.slug}>
                  <h4 className="text-[#414042] font-bold text-lg lg:text-xl leading-snug group-hover:text-[#EE4423] transition-colors">{blog.title}</h4>
                </Link>
                <div className="flex items-center justify-between w-full mt-3 sm:mt-auto">
                  <time dateTime={blog.date} className="text-gray-400 text-xs lg:text-sm font-medium">{blog.displayDate}</time>
                  <Link href={blog.slug} className="flex items-center gap-1 text-[#EE4423] font-bold text-xs lg:text-sm group">
                    Read More <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* VIEW ALL BUTTON: Only visible on mobile/tablets */}
        {!showAll && isMobile && (
          <div className="w-full flex justify-center mt-4">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-[#EE4423] text-white font-bold flex items-center justify-center gap-[10px] transition-all hover:bg-[#d63a1b] active:scale-95 shadow-lg px-8 h-[45px] rounded-full"
            >
              View all blogs <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}