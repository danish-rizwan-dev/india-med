import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Hospital {
  name: string;
  city: string;
  accreditation: string;
  desc: string;
  image?: string;
}

interface RelatedHospitalsCustomProps {
  hospitals?: Hospital[];
}

export default function RelatedHospitalsCustom({ hospitals }: RelatedHospitalsCustomProps) {
  const tShared = useTranslations('SpecialityShared');
  
  // Use provided hospitals or empty array
  const hosps = hospitals && hospitals.length > 0 ? hospitals : [];
  
  if (hosps.length === 0) return null;

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 px-4">
        
        {/* Heading Box */}
        <div className="border border-[#58595B] rounded-full w-fit px-10 py-4 min-h-[73px] flex items-center justify-center bg-white mx-auto">
          <h2 className="font-bold text-[32px] text-[#58595B] font-montserrat text-center leading-tight">
            {tShared('related_hospitals')}
          </h2>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center w-full">
          {hosps.slice(0, 4).map((hospital, index) => (
            <div 
              key={index}
              className="w-[315px] h-[312px] bg-white rounded-[32px] shadow-[0px_15px_25px_0px_rgba(67,41,57,0.1)] flex flex-col items-center overflow-hidden mx-auto"
            >
              {/* Image Container */}
              <div className="w-[315px] h-[192px] relative bg-gray-100 flex items-center justify-center">
                <Image 
                  src={hospital.image || "/images/specialities/cardiological-assistance/whychosseIndiaMedserviceSectionHospitalImage.png"}
                  alt={hospital.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info Container */}
              <div className="flex flex-col items-center justify-between flex-1 py-4 w-full px-4">
                <h3 className="font-bold text-[18px] text-[#58595B] font-montserrat text-center leading-tight">
                  {hospital.name}
                </h3>
                
                {/* Location and Bed */}
                <div className="flex items-center gap-6 text-[#58595B] text-[14px] font-semibold">
                  <div className="flex items-center gap-1">
                    {/* Location Icon */}
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 15 6 15C6 15 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8.25C4.75736 8.25 3.75 7.24264 3.75 6C3.75 4.75736 4.75736 3.75 6 3.75C7.24264 3.75 8.25 4.75736 8.25 6C8.25 7.24264 7.24264 8.25 6 8.25Z" fill="#EE4423"/>
                    </svg>
                    <span>{hospital.city.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* Bed Icon */}
                    <Image 
                      src="/images/specialities/cardiological-assistance/relatedhospitalsBEDICON.svg"
                      width={16}
                      height={12}
                      alt="bed"
                    />
                    <span>{250} {tShared('beds')}</span>
                  </div>
                </div>

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
