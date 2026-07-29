import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface IntroSectionProps {
  data: any;
  specLang: any;
  locale: string;
  specialityKey?: string;
}

export default function IntroSection({
  data,
  specLang,
  locale,
  specialityKey
}: IntroSectionProps) {
  const tShared = useTranslations('SpecialityShared');

  const specialitySlugs: Record<string, string> = {
    cardio: "cardiological-assistance",
    ortho: "orthopedics",
    cancer: "cancer-treatment",
    neuro: "neuroscience",
    gastro: "gastrosciences",
    liver: "liver-transplant",
    lungs: "lung-transplantation",
    gyno: "obstetrics-and-gynecology",
    plastic: "plastic-aesthetic-and-reconstructive-surgery",
    gynoOnco: "gynecology-and-gynecological-oncology",
    rheuma: "rheumatology-and-immunology",
    vascular: "peripheral-vascular-and-endovascular-sciences",
    ophthalmology: "ophthalmology",
    bmt: "bone-marrow-transplant",
    endo: "endocrinology-and-diabetology",
    kidney: "kidney-transplant",
    respiratory: "respiratory-medicine-and-sleep-medicine",
    ent: "ent-head-and-neck-surgery",
  };

  const urlSlug = specialityKey ? specialitySlugs[specialityKey] || "cardiological-assistance" : "cardiological-assistance";
  
  return (
    <section className="w-full max-w-[1442px] mx-auto px-4 py-6 md:py-12">
      <div className="bg-[#EE4423] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] w-full min-h-fit lg:min-h-[976px] p-6 sm:p-12 lg:p-24 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Pill Heading "Introduction" - Made fluid instead of fixed height */}
        <div className="border-2 border-white rounded-full flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 mb-8 lg:mb-12 max-w-full text-center">
          <span className="text-white font-montserrat font-bold text-xl sm:text-[32px] lg:text-[42px] leading-none whitespace-nowrap">
            {tShared('introduction')}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 w-full items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="flex flex-col gap-5 sm:gap-6 text-white order-2 lg:order-1 text-center lg:text-left">
            <h2 className="font-montserrat font-bold text-2xl sm:text-[36px] lg:text-[47px] leading-tight lg:leading-none">
              {specLang.intro_title || "Discover World-Class Cardiology with India Med Services"}
            </h2>
            
            {/* Swapped leading-none for leading-normal to support text wrapping beautifully */}
            <div className="flex flex-col gap-4 text-white/90">
              <p className="font-montserrat font-semibold text-[15px] sm:text-[18px] leading-normal opacity-90">
                {specLang.intro_desc_1 || "Cardiology is a vital medical specialty dedicated to diagnosing and managing heart and blood vessel conditions. India Med Services connects you with elite departments specializing in life-saving procedures like Coronary Angioplasty, Pacemaker Implantation, and Echocardiography. India is home to world-renowned cardiologists and hospitals featuring the latest technological advancements."}
              </p>
              
              <p className="font-montserrat font-semibold text-[15px] sm:text-[18px] leading-normal opacity-90">
                {specLang.intro_desc_2 || "While many seek global care for specialized expertise or cost-effectiveness, we ensure you find the right match for your specific diagnosis. Outcomes depend on the condition’s severity and your overall health, making expert guidance essential."}
              </p>
            </div>

            {/* Sub-section from image */}
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="font-montserrat font-bold text-[20px] sm:text-[26px] lg:text-[32px] leading-snug">
                {specLang.intro_sub_title || "What is Cardiology?"}
              </h3>
              <p className="font-montserrat font-semibold text-[15px] sm:text-[18px] leading-normal opacity-90">
                {specLang.intro_sub_desc || "Cardiology focuses on identifying and treating disorders of the cardiovascular system. If you are diagnosed with heart issues, a cardiologist will lead your care, performing critical tests and procedures such as heart catheterizations and angioplasty to restore your health."}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Image - Responsive height scales safely based on container limits */}
          <div className="relative w-full h-[260px] sm:h-[450px] lg:h-[671px] rounded-tr-[50px] sm:rounded-tr-[80px] rounded-bl-[50px] sm:rounded-bl-[80px] overflow-hidden shadow-2xl order-1 lg:order-2 flex-shrink-0">
            <Image 
              src={`/images/specialities/${urlSlug}/heartIntroSection.jpg`}
              alt="Heart Introduction"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}