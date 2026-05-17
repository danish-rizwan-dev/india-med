import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface IntroSectionProps {
  data: any;
  specLang: any;
  locale: string;
}

export default function IntroSection({
  data,
  specLang,
  locale
}: IntroSectionProps) {
  const tShared = useTranslations('SpecialityShared');
  return (
    <section className="w-full max-w-[1442px] mx-auto px-4 py-12">
      <div className="bg-[#EE4423] rounded-[80px] w-full min-h-[976px] p-12 lg:p-24 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Pill Heading "Introduction" */}
        <div className="border-2 border-white rounded-full h-[73px] flex items-center justify-center px-10 mb-12">
          <span className="text-white font-montserrat font-bold text-[42px] leading-none">
            {tShared('introduction')}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="flex flex-col gap-6 text-white">
            <h2 className="font-montserrat font-bold text-[47px] leading-none">
              {specLang.intro_title || "Discover World-Class Cardiology with India Med Services"}
            </h2>
            
            <div className="flex flex-col gap-3">
              <p className="font-montserrat font-semibold text-[18px] leading-none opacity-90">
                {specLang.intro_desc_1 || "Cardiology is a vital medical specialty dedicated to diagnosing and managing heart and blood vessel conditions. India Med Services connects you with elite departments specializing in life-saving procedures like Coronary Angioplasty, Pacemaker Implantation, and Echocardiography. India is home to world-renowned cardiologists and hospitals featuring the latest technological advancements."}
              </p>
              
              <p className="font-montserrat font-semibold text-[18px] leading-none opacity-90">
                {specLang.intro_desc_2 || "While many seek global care for specialized expertise or cost-effectiveness, we ensure you find the right match for your specific diagnosis. Outcomes depend on the condition’s severity and your overall health, making expert guidance essential."}
              </p>
            </div>

            {/* Sub-section from image */}
            <h3 className="font-montserrat font-bold text-[32px] mt-4">
              {specLang.intro_sub_title || "What is Cardiology?"}
            </h3>
            <p className="font-montserrat font-semibold text-[18px] leading-none opacity-90">
              {specLang.intro_sub_desc || "Cardiology focuses on identifying and treating disorders of the cardiovascular system. If you are diagnosed with heart issues, a cardiologist will lead your care, performing critical tests and procedures such as heart catheterizations and angioplasty to restore your health."}
            </p>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative w-full h-[671px] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl">
            <Image 
              src={`/images/specialities/${data.slug || 'cardiological-assistance'}/heartIntroSection.jpg`}
              alt="Heart Introduction"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
