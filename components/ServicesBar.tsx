"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceBar() {
  const services = [
    { label: "Second Opinion", icon: "/images/icons/doctor.svg" },
    { label: "Get Health Checkup", icon: "/images/icons/gethealthcheckup.svg" },
    { label: "Homecare", icon: "/images/icons/homecare.svg" },
    {
      label: "Book a Virtual Consultation",
      icon: "/images/icons/virtualConsult.svg",
    },
    { label: "Book a Test", icon: "/images/icons/booktest.svg" },
  ];

  const mobileTopServices = services.slice(0, 4);
  const mobileCTA = services[4];

  return (
    <nav className="relative w-full flex justify-center px-4 lg:px-0 z-40" aria-label="Quick Services">
      
      {/* --- MOBILE VIEW --- */}
      <div className="flex md:hidden justify-center translate-y-[-55%] mb-[50px]">
        <div
          className="relative flex items-center justify-center bg-white/10 backdrop-blur-md"
          style={{ width: "351.11px", height: "328px", borderRadius: "33.76px", padding: "25px", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)" }}
        >
          <div className="relative z-10 flex flex-col gap-[4px] w-[301.11px] h-[278px]">
            <div className="grid grid-cols-2 gap-[2px] w-full bg-[#EE4423]/20 overflow-hidden" style={{ borderRadius: "21.6px 21.6px 0 0" }}>
              {mobileTopServices.map((service, idx) => (
                <Link
                  href={`/${service.label.toLowerCase().replace(/\s+/g, "-")}`}
                  key={idx}
                  className="group flex flex-col items-center justify-center bg-white text-center px-2 hover:bg-[#EE4423]"
                  style={{ width: "149.5px", height: "90px" }}
                >
                  {/* FIX: Use a fixed-size container and fill the image inside it */}
                  <div className="relative w-7 h-7 mb-1 transition-all group-hover:scale-110 group-hover:brightness-0 group-hover:invert">
                    <Image
                      src={service.icon}
                      alt=""
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#58595B] font-montserrat leading-tight group-hover:text-white">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/book-test"
              className="flex items-center justify-center gap-[10px] bg-[#EE4423] w-full h-[90px] active:scale-[0.98]"
              style={{ borderBottomLeftRadius: "21.6px", borderBottomRightRadius: "21.6px" }}
            >
              <div className="relative w-10 h-10">
                <Image
                  src={mobileCTA.icon}
                  alt=""
                  
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-white font-bold text-[18px] font-montserrat">
                {mobileCTA.label}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* --- TABLET & DESKTOP VIEW --- */}
      <div
        className="hidden md:flex relative flex-row items-center justify-center w-full max-w-[95%] lg:max-w-[1317px] h-[160px] lg:h-[226px] -translate-y-1/2 rounded-[30px] lg:rounded-[50px] p-[10px] lg:p-[23px] mb-[10px] mt-[-140px] lg:mt-[-200px]"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(40px)", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)" }}
      >
        <div className="relative z-10 flex flex-row items-stretch justify-center w-full h-full rounded-[25px] lg:rounded-[40px] overflow-hidden">
          {services.map((service, index) => (
            <Link
              href={`/${service.label.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
              className="relative flex flex-col lg:flex-row items-center justify-center bg-white/90 group transition-all hover:bg-[#EE4423] flex-1 h-full border-r border-gray-100 last:border-none px-2 lg:px-4 gap-2 lg:gap-4"
            >
              <div className="relative w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] transition-all group-hover:scale-110 group-hover:brightness-0 group-hover:invert flex-shrink-0">
                <Image
                  src={service.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-center lg:text-left group-hover:text-white text-[#58595B] font-montserrat font-bold text-[12px] lg:text-[18px] leading-tight max-w-[120px] lg:max-w-[160px]">
                {service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}