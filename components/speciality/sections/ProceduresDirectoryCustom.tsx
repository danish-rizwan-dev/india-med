"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ProceduresDirectoryCustomProps {
  procedures?: string[];
}

export default function ProceduresDirectoryCustom({ procedures: propProcedures }: ProceduresDirectoryCustomProps) {
  const tShared = useTranslations('SpecialityShared');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultProcedures = [
    "Heart Valve Replacement",
    "Tetralogy of Fallot (TOF)",
    "Heart Bypass Surgery",
    "Heart Transplant",
    "VSD Closure",
    "Coronary Artenary angiography (CAG)",
    "Bentall Surgery",
    "Arterial Switch Operation (ASO)",
    "Fontan Procedure",
    "Open Heart Surgery",
    "ASD Closure",
    "(MVR) Mitral Valve Replacement",
    "PA Banding",
    "DVR (Double Valve Replacement)",
    "Angioplasty (PTCA)",
    "PPI- Permanent Pacemaker Implant",
    "AVR (Aortic Valve Replacement)",
    "ASD Closure Pediatric",
    "VSD Closure Pediatric",
    "BD Shunt",
    "CABG",
    "AVR/MVR",
    "EPS & RFA",
    "Rotablation",
    "ASD Closure/ Repair\n( Adult)",
    "VSD Closure/Repair (Adult)"
  ];

  const proceduresList = propProcedures || defaultProcedures;

  const filteredProcedures = proceduresList.filter(proc =>
    proc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-12 md:py-16 bg-white">
      {/* Header Container with Input Field */}
      <div className="max-w-[1320px] mx-auto px-4 mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#EE4423] font-montserrat leading-tight">
            {tShared('procedures_directory')}
          </h2>

          {/* Search Field Box */}
          <div className="relative w-full md:w-[376px] h-[49px] rounded-full border border-[#EE4423] bg-white flex-shrink-0 shadow-sm">
            <div className="absolute right-0 top-0 w-[49px] h-[49px] bg-[#EE4423] rounded-full flex items-center justify-center text-white z-10">
              <Search size={18} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder={tShared('search_procedures')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full pl-5 pr-[60px] rounded-full focus:outline-none font-montserrat text-[14px] font-semibold text-[#58595B] placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-[1320px] mx-auto px-4">
        <div
          className="pl-4 pr-3 sm:pl-6 sm:pr-6 py-6 sm:py-10 flex flex-col h-[400px] md:h-[462px] rounded-[32px] sm:rounded-[50px] shadow-[0px_15px_25px_0px_rgba(67,41,57,0.02)]"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(238, 68, 35, 0.08) 100%)',
          }}
        >
          {/* UNIVERSAL SCROLLABLE GRID CONTAINER:
            - "h-[400px] md:h-[462px]" sets the physical height limits
            - "overflow-y-auto" ensures the vertical scrollbar appears dynamically as text scales or items increase
            - Simple inline webkit styles color the track beautifully across devices
          */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pr-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
              [&::-webkit-scrollbar]:w-1.5
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              [&::-webkit-scrollbar-thumb]:rounded-full
              hover:[&::-webkit-scrollbar-thumb]:bg-gray-400"
          >
            {filteredProcedures.length > 0 ? (
              filteredProcedures.map((proc, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#FFE4E0] rounded-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center text-center shadow-[0px_4px_10px_0px_rgba(104,33,19,0.04)] h-[60px] whitespace-pre-wrap hover:-translate-y-0.5 hover:shadow-[0px_6px_15px_0px_rgba(104,33,19,0.09)] active:scale-98 transition-all duration-200 cursor-pointer"
                >
                  <span className="text-[#58595B] font-semibold text-[15px] sm:text-[17px] lg:text-[20px] font-montserrat line-clamp-2 leading-tight">
                    {proc}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 py-16 font-montserrat text-sm sm:text-base">
                {tShared('no_procedures_found')} &quot;{searchQuery}&quot;
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}