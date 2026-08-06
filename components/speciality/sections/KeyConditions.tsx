"use client";


import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Heart, Activity, BriefcaseMedical, Stethoscope, UserCheck, HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { SpecialityCondition } from "../types";

const getIcon = (name: string) => {
  switch (name) {
    case "Heart": return Heart;
    case "Activity": return Activity;
    case "BriefcaseMedical": return BriefcaseMedical;
    case "Stethoscope": return Stethoscope;
    case "UserCheck": return UserCheck;
    default: return HelpCircle;
  }
};

interface KeyConditionsProps {
  conditions: SpecialityCondition[];
  specLang: any;
  slug: string;
}

export default function KeyConditions({
  conditions,
  specLang,
  slug
}: KeyConditionsProps) {
  const tShared = useTranslations('SpecialityShared');

  // Initialize Embla Carousel for Mobile Slider View
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false
  }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  if (!conditions || conditions.length === 0) return null;

  return (
    <section className="py-12 md:py-20 bg-white font-montserrat overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-[#EE4423] font-bold text-[28px] sm:text-[36px] lg:text-[47px] leading-tight mb-3 text-center">
          {specLang.conditions_title || tShared('key_conditions')}
        </h2>
        
        <p className="text-[#58595B] font-semibold text-[15px] sm:text-[18px] leading-relaxed lg:leading-none mb-10 lg:mb-12 text-center max-w-[550px] mx-auto opacity-90">
          {specLang.conditions_desc || "Our network specializes in managing complex cardiovascular issues, including:"}
        </p>

        {/* ================= MOBILE & TABLET SLIDER VIEW ================= */}
        <div className="block lg:hidden overflow-hidden px-2" ref={emblaRef}>
          <div className="flex">
            {conditions.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-[0_0_88%] sm:flex-[0_0_55%] min-w-0 px-3 pb-6 flex justify-center"
              >
                <div className="w-full max-w-[315px] min-h-[310px] bg-white rounded-[40px] p-8 flex flex-col items-start text-left relative shadow-[0px_15px_35px_0px_rgba(67,41,57,0.08)] border border-gray-100">
                  
                  {/* Gradient Border Overlay */}
                  <div className="absolute inset-0 rounded-[40px] pointer-events-none" style={{ padding: "2px", background: "linear-gradient(135deg, rgba(255,173,157,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.4) 100%)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
                  
                  <div className="w-[50px] h-[50px] flex items-center justify-center mb-5">
                    <Image 
                      src="/images/specialities/cardiological-assistance/keyConstionTreatedIcon.svg"
                      alt="Condition Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  
                  <h3 className="font-bold text-[18px] text-[#58595B] mb-3 leading-snug">{item.title}</h3>
                  
                  <p className="font-semibold text-[14px] sm:text-[15px] text-[#58595B] leading-normal opacity-85">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP STATIC FLEX-WRAP GRID ================= */}
        <div className="hidden lg:flex flex-wrap justify-center gap-8">
          {conditions.map((item, idx) => {
            return (
              <div 
                key={idx} 
                className="w-[315px] h-[310px] bg-white/30 backdrop-blur-md rounded-[40px] p-[40px] flex flex-col items-start text-left relative group shadow-[10px_24px_50px_0px_rgba(67,41,57,0.1)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-[40px] pointer-events-none" style={{ padding: "3px", background: "linear-gradient(135deg, rgba(255,173,157,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(227,227,227,0.4) 100%)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
                
                <div className="w-[60px] h-[60px] flex items-center justify-center mb-6">
                  <Image 
                    src="/images/specialities/cardiological-assistance/keyConstionTreatedIcon.svg"
                    alt="Condition Icon"
                    width={60}
                    height={60}
                  />
                </div>
                
                <h3 className="font-bold text-[20px] text-[#58595B] mb-4 leading-tight">{item.title}</h3>
                
                <p className="font-semibold text-[15px] lg:text-[16px] text-[#58595B] leading-normal opacity-90">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-[#58595B] font-semibold text-[15px] sm:text-[18px] leading-relaxed lg:leading-none mt-8 lg:mt-12 text-center max-w-[550px] mx-auto opacity-90">
          {specLang.conditions_footer || tShared('trust_footer')}
        </p>

      </div>
    </section>
  );
}