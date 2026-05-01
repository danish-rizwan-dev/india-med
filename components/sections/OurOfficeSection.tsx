"use client";

import React from "react";
import Image from "next/image";

export default function OurOfficeSection() {
  const officeSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "India Med",
    "url": "https://indiamed.com",
    "logo": "https://indiamed.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+998-78-555-11-71",
        "contactType": "customer service",
        "areaServed": ["UZ", "KZ"],
        "availableLanguage": ["Uzbek", "Russian", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+998-99-929-11-66",
        "contactType": "customer service"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shifokorlar ko'chasi, 6B-uy",
      "addressLocality": "Toshkent",
      "addressCountry": "UZ"
    }
  };

  return (
    <section className="relative w-full flex items-center justify-center py-12 lg:py-32 mt-[-200px] lg:mt-[-20px] min-h-screen lg:min-h-[853px] overflow-hidden bg-white" id="our-office">
      {/* Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(officeSchema) }}
      />

      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="relative w-full max-w-[1533px] h-[853px] rounded-[40px] overflow-hidden lg:mt-[-200px]"
          style={{ transform: "rotate(180deg)" }}
        >
          <Image
            src="/images/backgrounds/OurOfficeBackground.png"
            alt="office section background grid"
            fill
            className="object-cover opacity-50 lg:opacity-100"
            priority={true}
          />
        </div>
      </div>

      {/* ================= MAIN CONTENT DIV ================= */}
      <div
        className="relative z-10 w-full max-w-[1330px] mx-auto px-6 flex flex-col items-center"
        style={{ gap: "60px" }}
      >

        {/* ================= OUR OFFICE HEADING ================= */}
        <div
          className="inline-flex items-center justify-center border-2 border-[#58595B] bg-white shadow-sm w-[240px] lg:w-[329px] h-[54px] lg:h-[73px] rounded-full px-5 lg:px-[40px]"
        >
          <h2
            className="text-[#58595B] font-bold text-2xl lg:text-[42px] whitespace-nowrap"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              lineHeight: "1",
              textAlign: "center"
            }}
          >
            Our Offices
          </h2>
        </div>

        {/* ================= CONTENT DIV ================= */}
        <div
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-[40px] lg:gap-[110px] lg:h-[462px]"
        >
          {/* Left: Details and QR Div */}
          <div
            className="flex flex-col w-full lg:max-w-[758px] gap-10 lg:gap-[40px]"
          >
            {/* Toshkent Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[#E84E36] font-bold text-2xl lg:text-[32px] leading-tight text-center lg:text-left">
                Toshkent:
              </h3>
              <div className="flex flex-row items-start justify-center lg:justify-start gap-4 lg:gap-8">
                {/* QR Code */}
                <div
                  className="relative bg-white rounded-[15px] lg:rounded-[20px] p-1 lg:p-2 shadow-sm border border-gray-100 flex-shrink-0 w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] mt-[-10px]"
                >
                  <Image
                    src="/images/icons/QRTOSHKENT.svg"
                    alt="Tashkent QR Code"
                    fill
                    className="p-1 lg:p-2 object-contain"
                  />
                </div>

                {/* Info Div */}
                <div
                  className="flex flex-col items-start lg:pt-4 w-full lg:w-[536px] justify-start gap-3 lg:gap-12"
                >
                  {/* Phones */}
                  <div className="flex flex-col lg:flex-row lg:flex-nowrap items-start gap-2 lg:gap-x-12">
                    <div className="flex items-center gap-2 lg:gap-4 text-[#58595B]">
                      <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 relative">
                        <Image src="/images/icons/phoneicon.svg" alt="phone" fill className="object-contain orange-icon" />
                      </div>
                      <span
                        className="text-sm lg:text-[23px] whitespace-nowrap"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "100%" }}
                      >
                        +998 78 555 11 71
                      </span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4 text-[#58595B]">
                      <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 relative">
                        <Image src="/images/icons/phoneicon.svg" alt="phone" fill className="object-contain orange-icon" />
                      </div>
                      <span
                        className="text-sm lg:text-[23px] whitespace-nowrap"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "100%" }}
                      >
                        +998 99 929 11 66
                      </span>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-start gap-2 lg:gap-4 text-[#58595B]">
                    <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 relative mt-1 lg:mt-0">
                      <Image src="/images/icons/loctionicon.svg" alt="location" fill className="object-contain orange-icon" />
                    </div>
                    <span
                      className="text-sm lg:text-[23px] text-left break-words lg:whitespace-nowrap max-w-[200px] lg:max-w-none"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "1.2" }}
                    >
                      Toshkent shahri, Shifokorlar ko'chasi, 6B-uy
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Qozog’iston Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[#E84E36] font-bold text-2xl lg:text-[32px] leading-tight text-center lg:text-left">
                Qozog’iston:
              </h3>
              <div className="flex flex-row items-start justify-center lg:justify-start gap-4 lg:gap-8">
                {/* QR Code */}
                <div
                  className="relative bg-white rounded-[15px] lg:rounded-[20px] p-1 lg:p-2 shadow-sm border border-gray-100 flex-shrink-0 w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] mt-[-10px]"
                >
                  <Image
                    src="/images/icons/QR-Qozogiston.png"
                    alt="Kazakhstan QR Code"
                    fill
                    className="p-1 lg:p-2 object-contain"
                  />
                </div>

                {/* Info Div */}
                <div
                  className="flex flex-col items-start lg:pt-4 w-full lg:w-[536px] justify-start gap-3 lg:gap-12"
                >
                  {/* Phones */}
                  <div className="flex flex-col lg:flex-row lg:flex-nowrap items-start gap-2 lg:gap-x-12">
                    <div className="flex items-center gap-2 lg:gap-4 text-[#58595B]">
                      <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 relative">
                        <Image src="/images/icons/phoneicon.svg" alt="phone" fill className="object-contain orange-icon" />
                      </div>
                      <span
                        className="text-sm lg:text-[23px] whitespace-nowrap"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "100%" }}
                      >
                        +777 688 414 93
                      </span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4 text-[#58595B]">
                      <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 relative">
                        <Image src="/images/icons/phoneicon.svg" alt="phone" fill className="object-contain orange-icon" />
                      </div>
                      <span
                        className="text-sm lg:text-[23px] whitespace-nowrap"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "100%" }}
                      >
                        +7777 884 14 93
                      </span>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-start gap-2 lg:gap-4 text-[#58595B]">
                    <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 relative mt-1 lg:mt-0">
                      <Image src="/images/icons/loctionicon.svg" alt="location" fill className="object-contain orange-icon" />
                    </div>
                    <span
                      className="text-sm lg:text-[23px] text-left break-words lg:whitespace-nowrap max-w-[200px] lg:max-w-none"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "1.2" }}
                    >
                      Chimkent shahri, Tauke xon shohko'chasi, 130
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Icon of location (Desktop Only) */}
          <div
            className="hidden lg:block relative flex-shrink-0 w-[250px] h-[250px] lg:w-[462px] lg:h-[462px] animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          >
            <Image
              src="/images/icons/3dmapicon.svg"
              alt="3D Map Location Icon"
              fill
              className="object-contain"
            />
          </div>
          
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            .animate-float {
              animation: float 2s ease-in-out infinite;
            }
            @media (max-width: 1023px) {
              .orange-icon {
                filter: invert(41%) sepia(91%) saturate(2335%) hue-rotate(345deg) brightness(96%) contrast(97%);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
