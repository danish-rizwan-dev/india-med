"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/**
 * FounderSection Component
 * 
 * A high-fidelity section highlighting the leadership of India Med Service.
 */
export default function FounderSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    duration: 30
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const leaders = [
    {
      name: "Mr. Faisal Iqbal",
      title: "Founder & Managing Director – India Med Service",
      image: "/images/founders/Mr-Faisal-Iqbal.svg",
      bio: [
        "Mr. Faisal Iqbal is the Founder and Director of India Med Service, a trusted medical facilitation company specializing in organizing treatment for international patients in India. With over 6 years of experience in the healthcare coordination sector, he has successfully assisted more than 1,750 patients from various countries in accessing high-quality medical care.",
        "He is highly experienced in coordinating end-to-end medical journeys, including hospital selection, doctor consultations, treatment planning, and patient support. Mr. Faisal personally ensures smooth communication between patients, hospitals, and medical professionals.",
        "Under his leadership, India Med Service has built strong collaborations with leading hospitals and specialists across India, delivering reliable, transparent, and patient-focused services."
      ]
    },
    {
      name: "Mr. Daniyar Aydimirov",
      title: "Regional Director – Kazakhstan",
      image: "/images/founders/Mr-Daniyar-Aydimirov.svg",
      bio: [
        "Daniyar Aydimirov oversees patient coordination in Kazakhstan, providing dedicated support to international patients. He has assisted over 1,000 patients and ensures smooth communication in Russian, Kazakh, and Uzbek, with a strong focus on patient care and trust."
      ]
    }
  ];

  const expertiseCards = [
    {
      title: "Core Expertise",
      icon: "/images/icons/core-expertise.svg",
      list: ["International Patient Coordination", "Hospital & Doctor Network Management", "Medical Treatment Planning & Assistance", "End-to-End Patient Support Services"]
    },
    {
      title: "Key Achievements",
      icon: "/images/icons/keyAcheivements.svg",
      list: ["6+ years of experience in medical facilitation", "2500+ international patients successfully served", "Strong network with top hospitals across India"]
    },
    {
      title: "Services Offered",
      icon: "/images/icons/servicesOffered.svg",
      list: ["Medical visa assistance", "Flight & accommodation arrangements", "Appointment scheduling with top doctors", "Treatment coordination and monitoring", "Post-treatment follow-up and care"]
    }
  ];

  return (
    <section
      className="relative w-full bg-[#F14E2F] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden font-montserrat"
      id="leadership"
      aria-label="Leadership Team"
    >
      {/* ================= BACKGROUND LINES (Desktop Only) ================= */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute left-[96px] top-0 h-full w-[1px] bg-white/20" />
        <div className="absolute left-[1415px] top-0 h-full w-[1px] bg-white/20" />
        <div className="absolute top-[170px] left-0 w-full h-[1px] bg-white/10" />
        <div className="absolute top-[827px] left-0 w-full h-[1px] bg-white/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1319px] mx-auto px-6 flex flex-col items-center">

        {/* ================= LEADERSHIP HEADER ================= */}
        <header className="mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center border-2 border-white rounded-full w-[240px] lg:w-[324px] h-[54px] lg:h-[73px] backdrop-blur-sm">
            <h2 className="text-white font-bold text-2xl lg:text-[42px] tracking-tight m-0">
              Leadership
            </h2>
          </div>
        </header>

        {/* ================= LEADER 1: FAISAL IQBAL ================= */}
        <div className="w-full flex flex-col items-center mb-12 lg:mb-[100px]">
          <article className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[76px] w-full">
            {/* Portrait Image */}
            <div className="relative flex-shrink-0 order-1 lg:order-2">
              <div className="relative w-[300px] h-[360px] lg:w-[365px] lg:h-[441px] border-[5px] border-white/40 rounded-tr-[60px] lg:rounded-tr-[80px] rounded-bl-[60px] lg:rounded-bl-[80px] p-2 bg-white/10 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden rounded-tr-[50px] lg:rounded-tr-[70px] rounded-bl-[50px] lg:rounded-bl-[70px]">
                  <Image
                    src={leaders[0].image}
                    alt={leaders[0].name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow max-w-[635px] text-white order-2 lg:order-1 text-left lg:text-left">
              <h3 className="text-3xl lg:text-[42px] font-bold leading-tight mb-2">
                {leaders[0].name}
              </h3>
              <p className="text-lg lg:text-[23px] font-bold mb-6 text-white/90">
                {leaders[0].title}
              </p>
              <div className="flex flex-col gap-4 lg:gap-6 text-sm lg:text-[17px] font-medium lg:font-semibold leading-relaxed">
                {leaders[0].bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* ================= EXPERTISE CARDS (Clipped Carousel on Mobile) ================= */}
        <div className="w-full mb-16 lg:mb-[150px]">
          {isMobile ? (
            <div className="w-full pr-[15px]"> {/* 15px Orange gap on the right edge */}
              <div className="w-full " ref={emblaRef}>
                <div className="flex">
                  {expertiseCards.map((card, i) => (
                    <div key={i} className="flex-[0_0_85%] pr-4 min-w-0">
                      <ExpertiseCard card={card} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[1319px] mx-auto px-6 flex flex-row justify-center gap-8 xl:gap-[60px]">
              {expertiseCards.map((card, i) => (
                <ExpertiseCard key={i} card={card} />
              ))}
            </div>
          )}
        </div>

        {/* ================= LEADER 2: DANIYAR AYDIMIROV ================= */}
        <div className="w-full flex flex-col items-center">
          <article className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[122px] w-full">
            {/* Portrait Image */}
            <div className="relative flex-shrink-0">
              <div className="relative w-[300px] h-[360px] lg:w-[365px] lg:h-[441px] border-[5px] border-white/40 rounded-tr-[60px] lg:rounded-tr-[80px] rounded-bl-[60px] lg:rounded-bl-[80px] p-2 bg-white/10 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden rounded-tr-[50px] lg:rounded-tr-[70px] rounded-bl-[50px] lg:rounded-bl-[70px]">
                  <Image
                    src={leaders[1].image}
                    alt={leaders[1].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow max-w-[635px] text-white text-left">
              <h3 className="text-3xl lg:text-[42px] font-bold leading-tight mb-2">
                {leaders[1].name}
              </h3>
              <p className="text-lg lg:text-[23px] font-bold mb-6 text-white/90">
                {leaders[1].title}
              </p>
              <div className="flex flex-col gap-4 lg:gap-6 text-sm lg:text-[17px] font-medium lg:font-semibold leading-relaxed">
                {leaders[1].bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}

function ExpertiseCard({ card }: { card: any }) {
  return (
    <div className="bg-white rounded-[30px] lg:rounded-[40px] pt-6 lg:pt-[30px] pb-6 lg:pb-[30px] px-5 lg:px-[20px] shadow-xl flex flex-col w-full lg:w-[323px] h-full min-h-[300px] lg:h-[329px]">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[45px] h-[45px] lg:w-[52px] lg:h-[52px] bg-[#F14E2F] rounded-full flex items-center justify-center shrink-0 shadow-lg">
          <Image src={card.icon} alt={card.title} width={26} height={26} className="invert brightness-0" />
        </div>
        <h4 className="text-[#333] font-bold text-lg lg:text-[22px] leading-tight">{card.title}</h4>
      </div>

      <ul className="text-[#58595B] text-left space-y-3 font-semibold text-sm lg:text-[17px] leading-tight">
        {card.list.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[#58595B] opacity-40 shrink-0 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}