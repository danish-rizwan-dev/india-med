"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

const CalendarIcon = () => (
  <div className="relative w-[16px] h-[16px] lg:w-[26px] lg:h-[24px] flex items-center justify-center flex-shrink-0">
    <Image
      src="/images/sections/common/appointment-calendar.svg"
      alt="Book appointment calendar icon"
      fill
      sizes="(max-width: 1024px) 16px, 26px"
      className="object-contain brightness-0 invert"
    />
  </div>
);

export default function Hero() {
  const t = useTranslations("Hero");
  const doctorProfileT = useTranslations("DoctorProfile");
  const locale = useLocale();
  const doctorName = doctorProfileT("doctor_name_rajender_kumar");
  const isEn = locale === "en";
  const isLongLocale = locale === "kk" || locale === "uz" || locale === "ru";
  const brandSizeClass = isLongLocale
    ? locale === "kk"
      ? "text-[20px] md:text-[25px] lg:text-[26px] leading-tight"
      : "text-[22px] lg:text-[26px] leading-tight"
    : "text-[20px] lg:text-[24px] leading-[39.19px]";
  const headingSizeClass =
    locale === "kk"
      ? "text-[25px] md:text-[38px] lg:text-[46px] leading-[1.0]"
      : locale === "uz"
        ? "text-[30px] md:text-[38px] lg:text-[46px] leading-[1.0]"
        : locale === "ru"
          ? "text-[25px] md:text-[42px] lg:text-[52px] leading-[1.0]"
          : "text-[28px] md:text-[36px] lg:text-[47px] leading-[1.1] lg:leading-tight";
  const descriptionSizeClass =
    locale === "kk"
      ? "text-[14px] md:text-[14px] lg:text-[17px] leading-relaxed"
      : locale === "uz"
        ? "text-[14px] lg:text-[17px] leading-relaxed"
        : locale === "ru"
          ? "text-[15px] lg:text-[19px] leading-relaxed"
          : "text-[14px] lg:text-[17px] leading-relaxed lg:leading-normal";

  return (
    <section
      className="relative w-full bg-white overflow-hidden md:min-h-[700px] lg:min-h-[850px] h-[650px] lg:h-auto"
      aria-label="Affordable Medical Treatment in India"
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute pointer-events-none z-0 hidden md:block md:w-[400px] lg:w-[508px] lg:h-[723px] lg:top-[-70.33px] lg:right-0">
        <Image
          src="/images/sections/hero/background-grids.png"
          alt="Geometric background pattern"
          fill
          sizes="(max-width: 1024px) 400px, 508px"
          className="object-contain object-right"
          priority
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative w-full max-w-[1512px] mx-auto h-full">
        <Link
          href="/doctors/rajender-kumar"
          aria-label={`Open ${doctorName} profile`}
          title={`Open ${doctorName} profile`}
          className="
              absolute z-10
              w-[375px] h-[480px]
              top-[80px] left-auto right-[-60px]

              sm:w-[380px] sm:h-[480px]
              sm:top-[145px] sm:right-[-52px]

              md:z-20 md:w-[600px] md:h-[1080px] md:top-[-220px]
              md:right-[-100px]

              lg:w-[700px] lg:h-[700px]
              lg:top-[0px] lg:left-[calc(max(550px,min(700px,56vw)))] lg:right-auto
              group cursor-pointer
            "
        >
          <Image
            src="/images/sections/hero/rajender-kumar.png"
            alt="Expert healthcare professional in India providing world-class medical assistance"
            fill
            sizes="(max-width: 768px) 960px, (max-width: 1024px) 650px, 930px"
            priority
            className="object-contain"
          />
          <span
            className="
              absolute z-10 flex items-center gap-3
              left-[55px] top-[350px]
              sm:left-[20px] sm:top-[296px]
              md:left-[24px] md:top-[310px]
              lg:left-[86px] lg:top-[380px]
              max-w-max rounded-full bg-white/90 px-3 py-1.5
              shadow-[0px_12px_30px_rgba(65,64,66,0.12)]
              backdrop-blur-sm transition
              group-hover:-translate-y-0.5 group-hover:bg-white
            "
          >
            <span className="whitespace-nowrap font-montserrat text-[11px] font-bold text-[#414042] sm:text-[12px] md:text-[14px] lg:text-[15px]">
              {doctorName}
            </span>
            <span className="h-px w-7 shrink-0 bg-[#EE4423] sm:w-9 lg:w-10" aria-hidden="true" />
          </span>
        </Link>

        {/* ================= CONTENT BOX ================= */}
        <div
          className={`
            absolute flex flex-col items-center md:items-start
            /* Mobile Spec: 19px left */
            w-[357px] h-auto
            ${isLongLocale ? "top-[10px]" : "top-[32px]"} left-[19px]
            ${isLongLocale ? "gap-[20px] lg:gap-[40px]" : "gap-[40px] lg:gap-[45px]"} z-20
            /* iPad Air & Pro: Adjust left position to be fluid */
            md:max-w-[410px] md:top-[80px] md:left-[5vw]
            /* Desktop Spec: Matches your exact 75px top / 208px left specs from baseline */
            lg:w-full lg:max-w-[584px]
            lg:top-[75px] lg:left-[calc(max(40px,min(208px,14vw)))]
          `}
        >
          {/* Brand & Heading Group */}
          <div
            className={`flex flex-col w-full ${isLongLocale ? "gap-[10px] lg:gap-[16px]" : "gap-[20px]"} text-center md:text-left`}
          >
            <span
              className={`font-montserrat font-bold text-[#EE4423] block ${brandSizeClass}`}
            >
              {t("brand")}
            </span>

            <h1
              className={`
                text-[#444444] font-montserrat font-bold
                ${headingSizeClass}
              `}
            >
              {t("heading_main")}
              <span className="text-[#EE4423]"> {t("heading_highlight")}</span>
            </h1>

            <p
              className={`
                font-montserrat font-medium text-[#58595B]
                ${descriptionSizeClass}
                w-[203px] md:w-full 
                text-left
                mx-0
              `}
            >
              {t("description")}
            </p>
          </div>

          {/* Consult Button */}
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-consultation-modal"))
            }
            aria-label="Book a medical consultation with India Med experts"
            title="Book a medical consultation"
            className={`
              flex items-center justify-center
              bg-[#EE4423] text-white cursor-pointer
              transition-transform active:scale-95
              shadow-[0px_10px_20px_rgba(238,68,35,0.2)]
              rounded-full mr-auto lg:mr-0
              ${isLongLocale ? "w-fit px-[20px] md:px-[25px] h-[40px] md:h-[48px] lg:h-[49px] gap-[8px] md:gap-[10px]" : "w-[140px] md:w-[158.9px] lg:w-[252px] h-[40px] md:h-[48px] lg:h-[49px] gap-[8px] md:gap-[10px] px-[15px] md:px-[20px]"}
            `}
          >
            <CalendarIcon />
            <span
              className={`font-montserrat font-bold whitespace-nowrap ${isLongLocale ? "text-[13px] md:text-[15px] lg:text-[18px]" : "text-[13px] md:text-[14px] lg:text-[17px]"}`}
            >
              {t("button")}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}