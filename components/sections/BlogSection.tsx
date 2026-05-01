"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const blogs = [
    {
      title: "4D-Phaco Cataract Surgery in India: Tech...",
      date: "Feb 01:2020",
      image: "/images/backgrounds/blog1.jpg",
      slug: "/under-construction"
    },
    {
      title: "Liver Detox: Best Foods and Fruits for Nat...",
      date: "Jan 27:2020",
      image: "/images/backgrounds/liver_blog.jpg",
      slug: "/under-construction"
    },
    {
      title: "White Spots on Skin: Causes, Symptom...",
      date: "Jan 22:2020",
      image: "/images/backgrounds/whitespot_blog.jpg",
      slug: "/under-construction"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -335 : 335;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center py-12 lg:py-24 bg-[#F5F5F5] font-montserrat">
      
      {/* HEADER */}
      <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-12 px-10 py-3">
        <h2 className="text-[#58595B] font-bold text-[28px] leading-none">Blogs</h2>
      </header>

      {/* --- MOBILE VIEW: HORIZONTAL CAROUSEL --- */}
      <div className="lg:hidden w-full flex flex-col items-center relative">
        {/* Global Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute top-[176px] left-2 z-20 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
        >
           <ChevronRight className="rotate-180 text-[#EE4423]" size={16} strokeWidth={3} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute top-[176px] right-2 z-20 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
        >
           <ChevronRight className="text-[#EE4423]" size={16} strokeWidth={3} />
        </button>

        <div 
          ref={scrollRef}
          className="w-full flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 gap-[20px] pb-8 scroll-smooth"
        >
          {blogs.map((blog, idx) => (
            <article 
              key={idx} 
              className="relative shrink-0 w-[315px] h-[353px] bg-white rounded-[32px] overflow-hidden snap-start shadow-sm flex flex-col"
            >
              <Link href={blog.slug} className="relative w-[315px] h-[192px] shrink-0">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </Link>

              <div className="p-[25px] flex flex-col justify-between flex-grow">
                <Link href={blog.slug}>
                  <h3 className="text-[#58595B] font-bold text-[24px] leading-[100%] w-[265px] h-[87px] line-clamp-3">
                    {blog.title}
                  </h3>
                </Link>
                
                <div className="flex items-center justify-between w-[265px] mt-auto">
                  <span className="text-gray-400 font-medium text-[14px]">{blog.date}</span>
                  <Link href={blog.slug} className="flex items-center gap-1 text-[#EE4423] font-bold text-[14px]">
                    Read More <ChevronRight size={14} strokeWidth={3} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <Link 
          href="/under-construction"
          className="mt-4 bg-[#EE4423] text-white font-bold text-[18px] px-8 py-3 rounded-[40px] flex items-center gap-2 shadow-lg active:scale-95 transition-all"
        >
          View all blogs <ChevronRight size={20} strokeWidth={3} />
        </Link>
      </div>

      {/* --- DESKTOP VIEW: ORIGINAL GRID --- */}
      <div className="hidden lg:flex relative bg-white flex-row items-start justify-center p-12 gap-10 shadow-sm rounded-[40px] w-full max-w-[1450px]">
         {/* (Desktop content remains as high-fidelity grid) */}
         <div className="flex flex-col lg:flex-row gap-10 w-full">
            <article className="flex flex-col gap-6 flex-1">
              <Link href="/under-construction" className="group">
                <div className="relative overflow-hidden w-full h-[380px] rounded-[40px]">
                  <Image src="/images/backgrounds/blog1.jpg" alt="Blog 1" fill className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="mt-6 text-[#414042] font-bold text-[42px] leading-[1.1] group-hover:text-[#EE4423] transition-colors">
                  4D-Phaco Cataract Surgery in India: Technology, Results and Costs
                </h3>
              </Link>
              <div className="flex items-center justify-between w-full">
                <time className="text-gray-500 font-medium">Feb 01, 2020</time>
                <Link href="/under-construction" className="flex items-center gap-1 text-[#EE4423] font-bold group">
                  Read More <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>

            <div className="flex flex-col gap-8 flex-1">
              {blogs.slice(1).map((blog, idx) => (
                <article key={idx} className="flex gap-6 items-center group">
                  <Link href={blog.slug} className="relative shrink-0 overflow-hidden w-[315px] h-[190px] rounded-[40px]">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform group-hover:scale-105" />
                  </Link>
                  <div className="flex flex-col justify-between h-[190px] py-2">
                    <h4 className="text-[#414042] font-bold text-xl leading-snug group-hover:text-[#EE4423] transition-colors">{blog.title}</h4>
                    <div className="flex items-center justify-between w-full mt-auto">
                      <span className="text-gray-400 text-sm font-medium">{blog.date}</span>
                      <Link href={blog.slug} className="flex items-center gap-1 text-[#EE4423] font-bold text-sm group">
                        Read More <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
         </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}