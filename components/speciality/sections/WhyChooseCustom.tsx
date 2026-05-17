import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function WhyChooseCustom() {
  const tWhy = useTranslations('WhyChooseUs');
  return (
    <div className="relative w-full py-24 flex flex-col items-center justify-center bg-white overflow-hidden ">
      {/* Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <Image 
          src="/images/backgrounds/backgroundlines.jpg"
          alt="bg-lines"
          fill
          className="object-cover opacity-50"
        />
      </div>

      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 relative z-10">
        
        {/* Left Column - Cards (Staggered Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1: World-class Hospitals */}
          <div className="bg-white rounded-[40px] p-8 shadow-[0px_15px_25px_0px_rgba(67,41,57,0.05)] flex flex-col gap-4 border border-gray-50 h-[260px] justify-center">
            <div className="flex items-center justify-center mb-4 w-12 h-12 xl:w-[60px] xl:h-[60px] shrink-0">
              <Image
                src="/images/sections/why-choose-us/hospital.svg"
                alt="Hospital"
                width={60}
                height={60}
                style={{ height: 'auto' }}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] text-[#58595B] font-montserrat">{tWhy('reason_1_title')}</h3>
            <p className="text-[#58595B] text-[14px] font-semibold opacity-80">{tWhy('reason_1_desc')}</p>
          </div>

          {/* Card 2: Affordable Costs */}
          <div className="bg-white rounded-[40px] p-8 shadow-[0px_15px_25px_0px_rgba(67,41,57,0.05)] flex flex-col gap-4 border border-gray-50 h-[260px] justify-center md:mt-12">
            <div className="flex items-center justify-center mb-4 w-12 h-12 xl:w-[60px] xl:h-[60px] shrink-0">
              <Image
                src="/images/sections/why-choose-us/costs.svg"
                alt="Costs"
                width={60}
                height={60}
                style={{ height: 'auto' }}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] text-[#58595B] font-montserrat">{tWhy('reason_2_title')}</h3>
            <p className="text-[#58595B] text-[14px] font-semibold opacity-80">{tWhy('reason_2_desc')}</p>
          </div>

          {/* Card 3: Expert Doctors */}
          <div className="bg-white rounded-[40px] p-8 shadow-[0px_15px_25px_0px_rgba(67,41,57,0.05)] flex flex-col gap-4 border border-gray-50 h-[260px] justify-center md:-mt-12">
            <div className="flex items-center justify-center mb-4 w-12 h-12 xl:w-[60px] xl:h-[60px] shrink-0">
              <Image
                src="/images/sections/why-choose-us/expert-doctors.svg"
                alt="Doctors"
                width={60}
                height={60}
                style={{ height: 'auto' }}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] text-[#58595B] font-montserrat">{tWhy('reason_3_title')}</h3>
            <p className="text-[#58595B] text-[14px] font-semibold opacity-80">{tWhy('reason_3_desc')}</p>
          </div>

          {/* Card 4: Complete Assistance */}
          <div className="bg-white rounded-[40px] p-8 shadow-[0px_15px_25px_0px_rgba(67,41,57,0.05)] flex flex-col gap-4 border border-gray-50 h-[260px] justify-center">
            <div className="flex items-center justify-center mb-4 w-12 h-12 xl:w-[60px] xl:h-[60px] shrink-0">
              <Image
                src="/images/sections/why-choose-us/assistance.svg"
                alt="Assistance"
                width={60}
                height={60}
                style={{ height: 'auto' }}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] text-[#58595B] font-montserrat">{tWhy('reason_4_title')}</h3>
            <p className="text-[#58595B] text-[14px] font-semibold opacity-80">{tWhy('reason_4_desc')}</p>
          </div>
        </div>

        {/* Right Column - Text & CTA */}
        <div className="flex flex-col gap-6 items-start">
          <div className="border-2 border-[#58595B] rounded-full px-10 py-4 bg-white">
            <h2 className="font-bold text-[36px] text-[#58595B] font-montserrat text-center leading-none">
              {tWhy('title')}
            </h2>
          </div>
          <p className="text-[#58595B] text-[18px] font-semibold leading-relaxed font-montserrat">
            {tWhy('header_desc')}
          </p>
          <button className="bg-[#EE4423] text-white font-bold py-4 px-10 rounded-full flex items-center gap-2 hover:bg-[#D33D1E] transition-colors text-[16px] font-montserrat shadow-lg">
            {tWhy('contact_button')}
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M1 9L5 5L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
