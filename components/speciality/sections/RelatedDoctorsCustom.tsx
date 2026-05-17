import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Doctor {
  name: string;
  exp: string;
  role: string;
  hospital: string;
  initials: string;
  gradient: string;
  image?: string;
}

interface RelatedDoctorsCustomProps {
  doctors?: Doctor[];
}

export default function RelatedDoctorsCustom({ doctors }: RelatedDoctorsCustomProps) {
  const tShared = useTranslations('SpecialityShared');
  
  // Use provided doctors or empty array
  const docs = doctors && doctors.length > 0 ? doctors : [];
  
  if (docs.length === 0) return null;

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 px-4">
        
        {/* Heading Box */}
        <div className="border border-[#58595B] rounded-full w-full max-w-[425px] h-[73px] flex items-center justify-center bg-white">
          <h2 className="font-bold text-[32px] text-[#58595B] font-montserrat text-center">
            {tShared('related_doctors')}
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center w-full">
          {docs.slice(0, 4).map((doc, index) => (
            <div 
              key={index}
              className="w-[315px] h-[312px] bg-white rounded-[32px] shadow-[0px_15px_25px_0px_rgba(67,41,57,0.1)] flex flex-col items-center overflow-hidden mx-auto"
            >
              {/* Image Container */}
              <div className={`w-[315px] h-[192px] relative flex items-center justify-center bg-gradient-to-br ${doc.gradient || 'from-gray-200 to-gray-300'}`}>
                {doc.image ? (
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  /* Fallback to Initials */
                  <span className="text-white text-5xl font-bold font-montserrat opacity-80">{doc.initials}</span>
                )}
              </div>

              {/* Info Container */}
              <div className="flex flex-col items-center justify-between flex-1 py-5 w-full">
                <h3 className="font-bold text-[23px] text-[#58595B] font-montserrat text-center leading-none">
                  {doc.name}
                </h3>
                <p className="font-semibold text-[16px] text-[#58595B] font-montserrat text-center leading-none">
                  {doc.exp.replace(/[^0-9+]/g, '')} {tShared('years_experience')}
                </p>
                <button className="font-bold text-[13px] text-[#EE4423] font-montserrat flex items-center gap-1 justify-center">
                  {tShared('enquire_now')} 
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M1 9L5 5L1 1" stroke="#EE4423" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
