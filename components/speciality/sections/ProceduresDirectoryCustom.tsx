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

  // Default procedures from the image if none provided
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
    <section className="py-16 bg-white">
      {/* Header with Search (Centered) */}
      <div className="max-w-[1320px] mx-auto px-4 mb-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-[36px] font-bold text-[#EE4423] font-montserrat">
            {tShared('procedures_directory')}
          </h2>

          {/* Search Bar */}
          <div className="relative w-full md:w-[376px] h-[49px] rounded-full border border-[#EE4423] bg-white">
            <div className="absolute left-0 top-0 w-[49px] h-[49px] bg-[#EE4423] rounded-full flex items-center justify-center text-white">
              <Search size={18} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder={tShared('search_procedures')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full pl-[60px] pr-[40px] rounded-full focus:outline-none font-montserrat text-[14px] font-semibold text-[#58595B] placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Scrollable Container (Styled Card Aligned with Heading) */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-0">
        <div
          className="pl-4 pr-6 md:pr-10 py-10 flex flex-col"
          style={{
            width: '100%',
            height: '462px',
            borderRadius: '50px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(238, 68, 35, 0.08) 100%)',
            boxShadow: '0px 15px 25px 0px rgba(67,41,57,0.02)'
          }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-4 custom-scrollbar flex-1 overflow-y-scroll"
          >
            {filteredProcedures.length > 0 ? (
              filteredProcedures.map((proc, index) => (
                <div
                  key={index}
                  className="procedure-pill px-6 py-4 flex items-center justify-center text-center transition-all cursor-pointer h-[60px] whitespace-pre-wrap"
                >
                  <span className="text-[#58595B] font-semibold text-[20px] font-montserrat line-clamp-2 leading-none">
                    {proc}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 py-10 font-montserrat">
                {tShared('no_procedures_found')} &quot;{searchQuery}&quot;
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .procedure-pill {
          background: #FFFFFF;
          border: 1px solid #FFE4E0;
          border-radius: 50px;
          box-shadow: 0px 4px 10px 0px rgba(104, 33, 19, 0.05);
        }
        .procedure-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0px 6px 15px 0px rgba(104, 33, 19, 0.1);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #B3B3B3 #F3F4F6;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F3F4F6;
          border-radius: 40px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #B3B3B3;
          border-radius: 40px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #999999;
        }
      `}</style>
    </section>
  );
}
