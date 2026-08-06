"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations, useLocale } from "next-intl";

interface StoryItem {
  id: string;
  rating?: number;
  name?: string;
  location?: string;
}

export default function PatientStories() {
  const t = useTranslations("PatientStories");
  const locale = useLocale();

  const patientStories: StoryItem[] = t.raw("stories") || [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const initialSelect = () => {
      onSelect(emblaApi);
    };
    const timeoutId = setTimeout(initialSelect, 0);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      clearTimeout(timeoutId);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="patient-stories"
      className="relative flex w-full flex-col items-center bg-white py-16 lg:py-24 overflow-hidden font-sans"
    >
      <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-12 lg:mb-16 px-10 lg:px-14 py-4 lg:py-5 w-fit mx-auto">
        <h2
          className={`text-[#58595B] font-bold font-montserrat leading-none text-center ${
            locale === "en"
              ? "text-2xl md:text-4xl lg:text-[48px]"
              : "text-[20px] md:text-[28px] lg:text-[38px]"
          }`}
        >
          {t("title")}
        </h2>
      </header>

      {/* Main slider outer box bounded to your site container layout max width */}
      <div
        className="w-full max-w-[1320px] px-4 lg:px-2 overflow-hidden"
        ref={emblaRef}
      >
        {/* We use a negative margin offset here to cancel outer spacing on the grid edges */}
        <div className="flex -mx-2">
          {patientStories.map((patient) => (
            <article
              key={patient.id}
              /* Responsive layout splits:
                - Mobile viewports: Displays ~1.2 cards (85% width) to hint it scrolls horizontally
                - Medium tablet viewports: Displays exactly 2 cards (50% width)
                - Large desktop screens: Displays EXACTLY 4 cards across (25% width)
              */
              className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-2 flex flex-col group"
            >
              <button
                onClick={() => setActiveVideoId(patient.id)}
                className="relative overflow-hidden bg-gray-100 shadow-md text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EE4423] w-full aspect-[315/517]"
                style={{
                  borderRadius: "40px",
                }}
              >
                <Image
                  src={`https://img.youtube.com/vi/${patient.id}/maxresdefault.jpg`}
                  alt={patient.name || "Patient Story"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 315px"
                  unoptimized
                />

                {/* Glassmorphic Knockout Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[80px] h-[80px]">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 92 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-xl"
                    >
                      <defs>
                        <filter
                          id="glassBlur"
                          x="-20%"
                          y="-20%"
                          width="140%"
                          height="140%"
                        >
                          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                        </filter>
                      </defs>
                      <g className="backdrop-blur-[5px]">
                        <path
                          d="M46 0C71.4051 0 92 20.5949 92 46C92 71.4051 71.4051 92 46 92C20.5949 92 0 71.4051 0 46C0 20.5949 20.5949 0 46 0ZM40.4805 30.0645C38.0271 28.648 34.96 30.4191 34.96 33.252V58.748C34.9602 61.5807 38.0272 63.3509 40.4805 61.9346L62.5596 49.1865C65.0129 47.7701 65.0129 44.2289 62.5596 42.8125L40.4805 30.0645Z"
                          fill="#ECECEC"
                          fillOpacity="0.55"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>

              <div className="mt-5 px-1 text-left">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < (patient.rating ?? 5) ? "#FBBF24" : "none"}
                      className={
                        i < (patient.rating ?? 5)
                          ? "text-[#FBBF24]"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <h3 className="text-[#414042] font-bold text-lg lg:text-xl line-clamp-1">
                  {patient.name || t("patient_fallback")}
                </h3>
                <p className="text-[#58595B] text-xs font-bold mt-1 uppercase tracking-widest opacity-60">
                  {patient.location || t("location_fallback")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <nav
        aria-label="Carousel Controls"
        className="flex items-center justify-center gap-6 mt-12 w-full px-4"
      >
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className={`flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 transition-all active:scale-90 ${prevBtnDisabled ? "opacity-30 cursor-not-allowed" : "text-[#EE4423] hover:bg-gray-50"}`}
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className={`flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 transition-all active:scale-90 ${nextBtnDisabled ? "opacity-30 cursor-not-allowed" : "text-[#EE4423] hover:bg-gray-50"}`}
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </nav>

      {/* On-Demand Lazy Loaded Video Overlay Backdrop */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-[32px] overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors focus:outline-none"
              aria-label="Close Video"
            >
              <X size={22} />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&modestbranding=1&rel=0`}
              title="Patient Review Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
