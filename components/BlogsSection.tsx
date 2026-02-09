"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function BlogSection() {
  const sideBlogs = [
    {
      title: "Liver Detox: Best Foods and Fruits for Natural Liver Cleansi...",
      date: "Jan 27, 2020",
      image: "/images/backgrounds/liver_blog.jpg",
    },
    {
      title: "White Spots on Skin: Causes, Symptoms, and Treatments",
      date: "Jan 22, 2020",
      image: "/images/backgrounds/whitespot_blog.jpg",
    },
    {
      title: "Yoga in Cancer Patients: Expectations, Benefits and Risks",
      date: "Jan 22, 2020",
      image: "/images/backgrounds/yoga_blog.jpg",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center py-12 lg:py-20 bg-[#F5F5F5]">
      
      {/* ================= BLOGS HEADING ================= */}
      <div 
        className="flex items-center justify-center border-2 border-[#58595B] mb-8 lg:mb-12"
        style={{ 
          width: "min(202px, 50vw)", 
          height: "60px", // Reduced height for mobile
          borderRadius: "50px",
          gap: "10px"
        }}
      >
        <h2 className="text-[#58595B] font-bold text-[22px] lg:text-[28px] leading-none">
          Blogs
        </h2>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div 
        className="relative bg-white flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 gap-10 shadow-sm"
        style={{ 
          width: "min(1450px, 95vw)", 
          height: "auto", // Changed from fixed 846px to auto for responsiveness
          minHeight: "auto",
          borderRadius: "40px" 
        }}
      >
        
        {/* LEFT COLUMN: Main Feature Blog */}
        <div className="flex flex-col gap-6 w-full lg:w-[650px]">
          <div 
            className="relative overflow-hidden w-full h-[240px] lg:h-[380px]" 
            style={{ borderRadius: "30px lg:40px" }}
          >
            <Image 
              src="/images/backgrounds/blog1.jpg" 
              alt="Cataract Surgery" 
              fill 
              className="object-cover"
            />
          </div>
          
          <h3 className="text-[#414042] font-montserrat font-bold text-[28px] lg:text-[42px] leading-[110%] lg:leading-[100%] tracking-tight">
            4D-Phaco Cataract Surgery in India: Technology, Results and...
          </h3>

          <div className="flex items-center justify-between w-full">
            <span className="text-gray-500 font-medium text-sm lg:text-base">Feb 01, 2020</span>
            <button className="flex items-center gap-1 text-[#EE4423] font-bold group text-sm lg:text-base">
              Read More <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Three Side Blogs */}
        <div className="flex flex-col gap-6 lg:gap-[20px] w-full lg:w-[650px]">
          {sideBlogs.map((blog, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row gap-4 lg:gap-[20px] items-start sm:items-center" 
            >
              {/* Image Box */}
              <div 
                className="relative shrink-0 overflow-hidden w-full sm:w-[240px] lg:w-[315px] h-[160px] lg:h-[190px]" 
                style={{ borderRadius: "24px lg:40px" }}
              >
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </div>

              {/* Text Box */}
              <div className="flex flex-col justify-between py-1 w-full lg:w-[315px] lg:h-[190px]">
                <h4 className="text-[#414042] font-bold text-lg lg:text-xl leading-snug">
                  {blog.title}
                </h4>
                
                <div className="flex items-center justify-between w-full mt-3 sm:mt-auto">
                  <span className="text-gray-400 text-xs lg:text-sm font-medium">{blog.date}</span>
                  <button className="flex items-center gap-1 text-[#EE4423] font-bold text-xs lg:text-sm group">
                    Read More <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="w-full flex justify-center lg:justify-end lg:absolute lg:bottom-12 lg:right-12 mt-4 lg:mt-0">
          <button 
            className="bg-[#EE4423] text-white font-bold flex items-center justify-center gap-[10px] transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{ 
              width: "181.36px", 
              height: "40px", 
              borderRadius: "50px",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            View all blogs <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}