"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {Link} from "@/i18n/routing";
import {useTranslations, useLocale} from 'next-intl';

export default function BlogSection() {
  const t = useTranslations('Blog');
  const locale = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const blogs = [
    {
      title: t('blog1_title'),
      date: t('blog1_date'),
      image: "/images/sections/blog/blog1.jpg",
      slug: "/under-construction"
    },
    {
      title: t('blog2_title'),
      date: t('blog2_date'),
      image: "/images/sections/blog/liver_blog.jpg",
      slug: "/under-construction"
    },
    {
      title: t('blog3_title'),
      date: t('blog3_date'),
      image: "/images/sections/blog/whitespot_blog.jpg",
      slug: "/under-construction"
    },
    {
      title: t('blog4_title'),
      date: t('blog4_date'),
      image: "/images/sections/blog/yoga_blog.jpg",
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
      <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-12 lg:mb-16 px-10 lg:px-14 py-4 lg:py-5 w-fit mx-auto">
        <h2 className={`text-[#58595B] font-bold font-montserrat leading-none text-center tracking-[0px] capitalize ${locale === 'en'
            ? "text-2xl md:text-3xl lg:text-[42px]"
            : "text-[20px] md:text-[28px] lg:text-[38px]"
          }`}>
          {t('title')}
        </h2>
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
                    {t('read_more')} <ChevronRight size={14} strokeWidth={3} />
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
          {t('view_all')} <ChevronRight size={20} strokeWidth={3} />
        </Link>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex flex-col items-center w-full max-w-[1318px] bg-white rounded-[60px] p-12 shadow-sm mb-16">
        <div className="flex flex-row gap-12 w-full">
          {/* Left Column: One Large Card */}
          <article className="flex-[1.2] flex flex-col">
            <Link href={blogs[0].slug} className="group">
              <div className="relative overflow-hidden w-full h-[450px] rounded-[40px]">
                <Image 
                  src={blogs[0].image} 
                  alt={blogs[0].title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                />
              </div>
              <h3 className="mt-8 text-[#414042] font-bold text-[36px] leading-[1.2] group-hover:text-[#EE4423] transition-colors line-clamp-3">
                {blogs[0].title}
              </h3>
            </Link>
            <div className="flex items-center justify-between w-full mt-6">
              <time className="text-gray-500 font-medium text-lg">{blogs[0].date}</time>
              <Link href={blogs[0].slug} className="flex items-center gap-1 text-[#EE4423] font-bold text-lg group">
                {t('read_more')} <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>

          {/* Right Column: Three Smaller Cards */}
          <div className="flex-[1] flex flex-col gap-6">
            {blogs.slice(1).map((blog, idx) => (
              <article key={idx} className="flex gap-6 group">
                <Link href={blog.slug} className="relative shrink-0 overflow-hidden w-[240px] h-[150px] rounded-[30px]">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform group-hover:scale-105" />
                </Link>
                <div className="flex flex-col justify-between flex-grow py-1">
                  <h4 className="text-[#414042] font-bold text-[20px] leading-tight group-hover:text-[#EE4423] transition-colors line-clamp-3">
                    {blog.title}
                  </h4>
                  <div className="flex items-center justify-between w-full mt-auto">
                    <span className="text-gray-400 text-[14px] font-medium">{blog.date}</span>
                    <Link href={blog.slug} className="flex items-center gap-1 text-[#EE4423] font-bold text-[14px] group">
                      {t('read_more')} <ChevronRight size={14} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Button at bottom right */}
        <div className="w-full flex justify-end mt-8">
          <Link 
            href="/under-construction"
            className="bg-[#EE4423] text-white font-bold text-[16px] px-10 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
          >
            {t('view_all')} <ChevronRight size={18} strokeWidth={3} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}