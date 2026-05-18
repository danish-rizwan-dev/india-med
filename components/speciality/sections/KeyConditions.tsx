import React from "react";
import Image from "next/image";
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
  if (!conditions || conditions.length === 0) return null;

  return (
    <section className="py-20 bg-white font-montserrat">
      <div className="max-w-[1320px] mx-auto px-6 text-center">
        
        <h2 className="text-[#EE4423] font-bold text-[47px] leading-none mb-2 text-center">
          {specLang.conditions_title || tShared('key_conditions')}
        </h2>
        
        <p className="text-[#58595B] font-semibold text-[18px] leading-none mb-12 text-center max-w-[432px] mx-auto">
          {specLang.conditions_desc || "Our network specializes in managing complex cardiovascular issues, including:"}
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {conditions.map((item, idx) => {
            return (
              <div 
                key={idx} 
                className="w-[315px] h-[299px] bg-white/30 backdrop-blur-md rounded-[40px] p-[40px] flex flex-col items-start text-left relative group shadow-[10px_24px_50px_0px_rgba(67,41,57,0.1)] transition-all duration-300 hover:shadow-2xl"
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
                
                <h3 className="font-bold text-[20px] text-[#58595B] mb-4 leading-none">{item.title}</h3>
                
                <p className="font-semibold text-[18px] text-[#58595B] leading-none opacity-90">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-[#58595B] font-semibold text-[18px] leading-none mt-12 text-center max-w-[432px] mx-auto">
          {specLang.conditions_footer || tShared('trust_footer')}
        </p>

      </div>
    </section>
  );
}
