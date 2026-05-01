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
    <section className="relative w-full flex items-center justify-center py-12 lg:py-32 mt-[-40px] lg:mt-[-80px] min-h-screen lg:min-h-[853px] overflow-hidden bg-white" id="our-office">
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
            className="object-cover"
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
          className="inline-flex items-center justify-center border-2 border-[#58595B] bg-white shadow-sm w-full max-w-[329px] h-[60px] lg:h-[73px] rounded-full px-5 lg:px-[40px]"
          style={{ gap: "10px" }}
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
            Our Office
          </h2>
        </div>

        {/* ================= CONTENT DIV ================= */}
        <div
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-[60px] lg:gap-[110px] lg:h-[462px]"
        >
          {/* Left: Details and QR Div */}
          <div
            className="flex flex-col w-full lg:max-w-[758px] gap-8 lg:gap-[40px]"
          >
            {/* Toshkent Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[#E84E36] font-bold text-2xl lg:text-[32px] leading-tight text-center lg:text-left">
                Toshkent:
              </h3>
              <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 lg:gap-8">
                {/* QR Code */}
                <div
                  className="relative bg-white rounded-[20px] p-2 shadow-sm border border-gray-100 flex-shrink-0 w-[120px] h-[120px] lg:w-[140px] lg:h-[140px]"
                >
                  <Image
                    src="/images/icons/QRTOSHKENT.svg"
                    alt="Tashkent QR Code"
                    fill
                    className="p-2 object-contain"
                  />
                </div>

                {/* Info Div */}
                <div
                  className="flex flex-col items-center lg:items-start pt-0 lg:pt-4 pl-0 lg:pl-6 w-full lg:w-[536px] lg:h-[140px] justify-end gap-12"
                >
                  {/* Phones */}
                  <div className="flex flex-row flex-nowrap items-center lg:items-start gap-4 lg:gap-x-12">
                    <div className="flex items-center gap-2 lg:gap-4 text-[#58595B]">
                      <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 relative">
                        <Image src="/images/icons/phoneicon.svg" alt="phone" fill className="object-contain" />
                      </div>
                      <span
                        className="text-sm lg:text-[23px] whitespace-nowrap"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "100%" }}
                      >
                        +998 78 555 11 71
                      </span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4 text-[#58595B]">
                      <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 relative">
                        <Image src="/images/icons/phoneicon.svg" alt="phone" fill className="object-contain" />
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
                  <div className="flex items-center gap-4 text-[#58595B]">
                    <div className="flex-shrink-0 w-6 h-6 relative">
                      <Image src="/images/icons/loctionicon.svg" alt="location" fill className="object-contain" />
                    </div>
                    <span
                      className="text-base lg:text-[23px] text-center lg:text-left break-words lg:whitespace-nowrap"
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
              <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 lg:gap-8">
                {/* QR Code */}
                <div
                  className="relative bg-white rounded-[20px] p-2 shadow-sm border border-gray-100 flex-shrink-0 w-[120px] h-[120px] lg:w-[140px] lg:h-[140px]"
                >
                  <Image
                    src="/images/icons/QRQozog’iston.png"
                    alt="Kazakhstan QR Code"
                    fill
                    className="p-2 object-contain"
                  />
                </div>

                {/* Info Div */}
                <div
                  className="flex flex-col items-center lg:items-start pt-0 lg:pt-4 pl-0 lg:pl-6 w-full lg:w-[536px] lg:h-[140px] justify-end gap-12"
                >
                  {/* Phones */}
                  <div className="flex flex-row flex-nowrap items-center lg:items-start gap-4 lg:gap-x-12">
                    <div className="flex items-center gap-2 lg:gap-4 text-[#58595B]">
                      <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 relative">
                        <Image src="/images/icons/phoneicon.svg" alt="phone" fill className="object-contain" />
                      </div>
                      <span
                        className="text-sm lg:text-[23px] whitespace-nowrap"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "100%" }}
                      >
                        +998 78 555 11 71
                      </span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4 text-[#58595B]">
                      <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 relative">
                        <Image src="/images/icons/phoneicon.svg" alt="phone" fill className="object-contain" />
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
                  <div className="flex items-center gap-4 text-[#58595B]">
                    <div className="flex-shrink-0 w-6 h-6 relative">
                      <Image src="/images/icons/loctionicon.svg" alt="location" fill className="object-contain" />
                    </div>
                    <span
                      className="text-base lg:text-[23px] text-center lg:text-left break-words lg:whitespace-nowrap"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, lineHeight: "1.2" }}
                    >
                      Toshkent shahri, Shifokorlar ko'chasi, 6B-uy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Icon of location */}
          <div
            className="relative flex-shrink-0 transition-transform duration-500 hover:scale-105 w-[250px] h-[250px] lg:w-[462px] lg:h-[462px]"
          >
            <Image
              src="/images/icons/3dmapicon.svg"
              alt="3D Map Location Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
