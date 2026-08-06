"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import { VideoItem } from "../types";

export default function PatientVideos({ videos }: { videos?: VideoItem[] }) {
  const locale = useLocale();
  const t = useTranslations("SpecialityShared");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

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
    const initialSelect = () => onSelect(emblaApi);
    const timeoutId = setTimeout(initialSelect, 0);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      clearTimeout(timeoutId);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!videos || videos.length === 0) return null;

  return (
    <section className="relative flex w-full flex-col items-center bg-white py-16 lg:py-24 overflow-hidden font-sans">
      <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-12 lg:mb-16 px-10 lg:px-14 py-4 lg:py-5 w-fit mx-auto">
        <h2
          className={`text-[#58595B] font-bold font-montserrat leading-none text-center ${
            locale === "en"
              ? "text-2xl md:text-4xl lg:text-[48px]"
              : "text-[20px] md:text-[28px] lg:text-[38px]"
          }`}
        >
          {t("videos_title")}
        </h2>
      </header>

      <div className="w-full max-w-[1320px] px-4 lg:px-2 overflow-hidden" ref={emblaRef}>
        <div className="flex -mx-2">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideoId(video.id)}
              className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-2 group"
            >
              <div className="relative overflow-hidden bg-gray-100 shadow-md text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EE4423] w-full aspect-[9/16] rounded-[32px]">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt="Patient Video"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 280px"
                  unoptimized
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] transition-transform duration-300 group-hover:scale-110">
                    <svg width="100%" height="100%" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
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

                {video.rating && (
                  <div className="absolute bottom-3 left-3 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        fill={i < video.rating! ? "#FBBF24" : "none"}
                        className={i < video.rating! ? "text-[#FBBF24]" : "text-white/60"}
                      />
                    ))}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <nav className="flex items-center justify-center gap-6 mt-12 w-full px-4">
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
