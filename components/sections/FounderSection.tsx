"use client";

import React from "react";
import Image from "next/image";

/**
 * FounderSection Component
 * 
 * A high-fidelity section highlighting the leadership of India Med Service.
 * Implements specific grid-based layout and premium design aesthetics.
 */
export default function FounderSection() {
  // SEO Schema for both leaders
  const leadershipSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Person",
          "name": "Mr. Faisal Iqbal",
          "jobTitle": "Founder and Managing Director",
          "worksFor": {
            "@type": "Organization",
            "name": "India Med Service"
          },
          "image": "/images/founders/Mr Faisal Iqubal.svg"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Person",
          "name": "Mr. Daniyar Aydimirov",
          "jobTitle": "Regional Director – Kazakhstan",
          "worksFor": {
            "@type": "Organization",
            "name": "India Med Service"
          },
          "image": "/images/founders/Mr. Daniyar Aydimirov.svg"
        }
      }
    ]
  };

  return (
    <section
      className="relative w-full bg-[#F14E2F] pt-12 pb-16 lg:pt-16 lg:pb-24 min-h-[1841px] overflow-hidden font-montserrat"
      id="leadership"
      aria-label="Leadership Team"
    >
      {/* Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipSchema) }}
      />

      {/* ================= BACKGROUND GRID SYSTEM ================= */}
      {/* Vertical Glass Lines */}
      <div
        className="absolute left-[96px] top-0 h-full w-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)', opacity: 0.9 }}
        aria-hidden="true"
      />
      <div
        className="absolute left-[1415px] top-0 h-full w-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)', opacity: 0.9 }}
        aria-hidden="true"
      />

      {/* Horizontal Glass Lines */}
      <div
        className="absolute top-[170px] left-[1px] w-[1511px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)', opacity: 0.8 }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[827px] left-[1px] w-[1511px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)', opacity: 0.8 }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[1290px] left-[1px] w-[1511px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)', opacity: 0.8 }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[1880px] left-[1px] w-[1511px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)', opacity: 0.8 }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1319px] mx-auto px-6 flex flex-col items-center">

        {/* ================= LEADERSHIP PILL ================= */}
        <header className="mb-10">
          <div className="inline-flex items-center justify-center border-2 border-white rounded-[50px] w-[324px] h-[73px] px-10 py-4 backdrop-blur-sm">
            <h2 className="text-white font-bold text-3xl lg:text-[42px] tracking-tight uppercase m-0">
              Leadership
            </h2>
          </div>
        </header>

        {/* ================= SECTION 1: MR. FAISAL IQBAL ================= */}
        <article className="flex flex-col lg:flex-row items-center justify-center gap-[76px] w-full mt-10 mb-[140px]">
          {/* Text Content */}
          <div className="flex-grow max-w-[635px] text-white">
            <h3 className="text-[42px] font-bold leading-[100%] mb-2">
              Mr. Faisal Iqbal
            </h3>
            <p className="text-[23px] font-bold mb-8 text-white/90">
              Founder & Managing Director – India Med Service
            </p>
            <div className="flex flex-col gap-6 text-[17px] font-semibold leading-[1.6] text-white/95">
              <p>
                Mr. Faisal Iqbal is the Founder and Director of India Med Service, a trusted medical facilitation company specializing in organizing treatment for international patients in India. With over 6 years of experience in the healthcare coordination sector, he has successfully assisted more than 1,750 patients from various countries in accessing high-quality medical care.
              </p>
              <p>
                He is highly experienced in coordinating end-to-end medical journeys, including hospital selection, doctor consultations, treatment planning, and patient support. Mr. Faisal personally ensures smooth communication between patients, hospitals, and medical professionals.
              </p>
              <p>
                Under his leadership, India Med Service has built strong collaborations with leading hospitals and specialists across India, delivering reliable, transparent, and patient-focused services.
              </p>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative flex-shrink-0 group">
            <div className="relative w-[365px] h-[441px] border-[5px] border-white/40 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-0 rounded-br-0 p-2 bg-white/10 transition-all duration-500 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden rounded-tr-[70px] rounded-bl-[70px] rounded-tl-0 rounded-br-0">
                <Image
                  src="/images/founders/Mr Faisal Iqubal.svg"
                  alt="Portrait of Mr. Faisal Iqbal, Founder of India Med Service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </article>

        {/* ================= SECTION 2: EXPERTISE CARDS ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px] w-full mt-[20px] mb-[150px]">
          {[
            {
              title: "Core Expertise",
              icon: "/images/icons/core Expertise.svg",
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
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[40px] pt-[30px] pb-[30px] px-[20px] shadow-[0px_15px_15px_0px_rgba(104,33,19,0.15)] flex flex-col transition-transform duration-300 w-full lg:w-[323px] lg:h-[329px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[52px] h-[52px] bg-[#F14E2F] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-orange-200">
                  <Image src={card.icon} alt={`${card.title} icon`} width={30} height={30} className="invert brightness-0" />
                </div>
                <h4 className="text-[#333] font-bold text-[22px] leading-tight text-left">{card.title}</h4>
              </div>

              <ul
                className="text-[#58595B] text-left space-y-3 font-semibold text-[17px] w-full lg:w-[283px] lg:h-[168px] leading-[100%]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                {card.list.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#58595B] opacity-40 shrink-0 mt-[2px]" aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= SECTION 3: MR. DANIYAR AYDIMIROV ================= */}
        <article className="flex flex-col lg:flex-row items-center justify-start lg:gap-[122px] w-full mt-[20px] lg:pl-[110px]">
          {/* Portrait Image */}
          <div className="relative flex-shrink-0 group">
            <div className="relative w-[365px] h-[441px] border-[5px] border-white/40 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-0 rounded-br-0 p-2 bg-white/10 transition-all duration-500 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden rounded-tr-[70px] rounded-bl-[70px] rounded-tl-0 rounded-br-0">
                <Image
                  src="/images/founders/Mr. Daniyar Aydimirov.svg"
                  alt="Portrait of Mr. Daniyar Aydimirov, Regional Director Kazakhstan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-grow max-w-[419px] min-h-[307px] text-white flex flex-col gap-[20px]">
            <h3 className="text-[42px] font-bold leading-[100%] mb-2">Mr. Daniyar Aydimirov</h3>
            <p className="text-[23px] font-bold mb-8 text-white/90">Regional Director – Kazakhstan</p>
            <div className="text-[17px] font-semibold leading-[1.6] text-white/95">
              <p>
                Daniyar Aydimirov oversees patient coordination in Kazakhstan, providing dedicated support to international patients. He has assisted over 1,000 patients and ensures smooth communication in Russian, Kazakh, and Uzbek, with a strong focus on patient care and trust.
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}