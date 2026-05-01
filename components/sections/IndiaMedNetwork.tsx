"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Phone, ArrowUpRight } from "lucide-react";

// 1. SEO: Moved data outside to prevent re-renders and added better Alt metadata
const hospitalData = [
  {
    location: "Gurugram",
    name: "Medanta Gurgaon",
    description: "World-class multi-super specialty hospital known for advanced cardiac and robotic surgeries.",
    image: "/images/sections/network/patna-hosp.jpg",
    alt: "Medanta Hospital building in Gurgaon"
  },
  {
    location: "Gurugram",
    name: "Fortis Memorial",
    description: "Premium quaternary care hospital with state-of-the-art medical technology and international standards.",
    image: "/images/sections/network/patna-hosp.jpg",
    alt: "Fortis Memorial Research Institute Gurgaon"
  },
  {
    location: "Gurugram",
    name: "Artemis Hospital",
    description: "First JCI & NABH accredited hospital in Gurgaon, providing depth of expertise in advanced medical interventions.",
    image: "/images/sections/network/patna-hosp.jpg",
    alt: "Artemis Hospital exterior view"
  },
  {
    location: "Gurugram",
    name: "Max Hospital",
    description: "Renowned for oncology, cardiology, and neurosciences with top-tier healthcare professionals.",
    image: "/images/sections/network/patna-hosp.jpg",
    alt: "Max Super Speciality Hospital Gurgaon"
  },
  {
    location: "Gurugram",
    name: "Paras Health",
    description: "Leader in neurosciences and joint replacement, providing specialized care at accessible price points.",
    image: "/images/sections/network/lucknow-hosp.png",
    alt: "Paras Health Hospital Gurgaon"
  },
  {
    location: "Gurugram",
    name: "Marengo Asia",
    description: "Modern multi-specialty facility offering high-end clinical care and a patient-centric approach.",
    image: "/images/sections/network/patna-hosp.jpg",
    alt: "Marengo Asia Hospital facility"
  },
  {
    location: "Lucknow",
    name: "India Med Super Speciality",
    description: "Spread across an area of 12.58 acres, Medanta Lucknow is one of the largest multi-super-specialty hospitals.",
    image: "/images/sections/network/lucknow-hosp.png",
    alt: "India Med Super Speciality Hospital Lucknow"
  },
  {
    location: "Patna",
    name: "Jay Prabha Medanta",
    description: "Established in 2020, this super-specialty hospital began operations with an Out-Patient Department (OPD).",
    image: "/images/sections/network/patna-hosp.jpg",
    alt: "Jay Prabha Medanta Super Speciality Hospital Patna"
  },
];

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
    <path d="M12 21C16 17.5 19 14.4183 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 14.4183 8 17.5 12 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" fill="white" />
  </svg>
);

export default function IndiaMedNetwork() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: (viewSize) => viewSize * 0.08,
      skipSnaps: false,
      duration: 35,
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    // 2. Responsive: Passive listener for performance
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    // 3. SEO: Using <section> and meaningful margin/padding classes
    <section className="relative w-full bg-transparent flex flex-col items-center mt-8 lg:-mt-0 mb-16 overflow-hidden">

      {/* HEADING */}
      <div
        className="relative z-10 flex items-center justify-center border-2 border-[#58595B] rounded-[50px] mb-12 lg:mb-16 px-6 lg:px-10"
        style={{ width: "min(489px, 92vw)", height: "73px" }}
      >
        <h2 className="text-[#58595B] font-bold text-xl md:text-2xl lg:text-[38px] font-montserrat leading-none text-center">
          India Med Network
        </h2>
      </div>

      <div className="relative w-full">
        {/* ================= NAVIGATION BUTTONS - HIGH-FIDELITY SVG ================= */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 lg:-translate-y-[65%] lg:-mt-[3px] left-0 right-0 z-50 pointer-events-none flex justify-between px-4 lg:px-20">
          <button
            onClick={scrollPrev}
            className="pointer-events-auto w-20 h-20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            aria-label="Previous hospital"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <foreignObject x="0" y="0" width="80" height="80">
                  <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_network_left_clip)", height: "100%", width: "100%" }}></div>
                </foreignObject>
                <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="3" />
                <path fillRule="evenodd" clipRule="evenodd" d="M34.7071 37.7071L41.3417 31.0726L43 32.731L37.1946 38.5363L43 44.3417L41.3417 46L34.7071 39.3655C34.4873 39.1456 34.3638 38.8473 34.3638 38.5363C34.3638 38.2253 34.4873 37.9271 34.7071 37.7071Z" fill="#EE4423" />
              </g>
              <defs>
                <clipPath id="bgblur_network_left_clip">
                  <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="pointer-events-auto w-20 h-20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            aria-label="Next hospital"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <g>
                <foreignObject x="0" y="0" width="80" height="80">
                  <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_network_right_clip)", height: "100%", width: "100%" }}></div>
                </foreignObject>
                <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="3" />
                <path fillRule="evenodd" clipRule="evenodd" d="M34.7071 37.7071L41.3417 31.0726L43 32.731L37.1946 38.5363L43 44.3417L41.3417 46L34.7071 39.3655C34.4873 39.1456 34.3638 38.8473 34.3638 38.5363C34.3638 38.2253 34.4873 37.9271 34.7071 37.7071Z" fill="#EE4423" />
              </g>
              <defs>
                <clipPath id="bgblur_network_right_clip">
                  <rect x="11.5" y="11.5" width="57" height="57" rx="28.5" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {hospitalData.map((hospital, index) => {
              const total = hospitalData.length;
              const diff = (index - selectedIndex + total) % total;
              const isInFront = isMobile ? diff === 0 : diff === 0 || diff === 1;

              return (
                <article
                  key={index}
                  className="relative flex-[0_0_88%] md:flex-[0_0_60%] lg:flex-[0_0_42%] px-3 min-w-0 transition-opacity duration-700"
                  style={{ opacity: isInFront ? 1 : 0.4 }}
                >
                  <div
                    className="relative overflow-hidden bg-[#EE4423]"
                    style={{
                      width: "100%",
                      height: "clamp(350px, 50vh, 400px)", // 4. Responsive: Fluid height
                      borderRadius: "40px",
                    }}
                  >
                    {/* Content Header */}
                    <div className="relative z-20 pt-12 px-6 lg:p-8 pb-0 flex flex-col gap-1 lg:gap-2">
                      <address className="flex items-center gap-2 text-white/90 not-italic">
                        <LocationIcon />
                        <span className="text-xs lg:text-sm font-bold uppercase tracking-wider">
                          {hospital.location}
                        </span>
                      </address>
                      <h3 className="text-white font-bold text-[23px] lg:text-[28px] leading-[100%] lg:leading-tight max-w-[45%] lg:max-w-[320px]">
                        {hospital.name}
                      </h3>
                    </div>

                    {/* Image Section */}
                    <div
                      className="absolute top-0 right-0 w-3/5 h-[65%] lg:h-[70%] z-10 overflow-hidden"
                      style={{
                        borderRadius: "0 40px 0 80px",
                        WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)",
                        maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
                      }}
                    >
                      <Image
                        src={hospital.image}
                        alt={hospital.alt} // 5. SEO: Descriptive alt tags
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 42vw"
                        priority={index < 2} // 6. Performance: Priority for first two slides
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Glassmorphism Bottom Card */}
                    <div
                      className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4 h-[160px] lg:h-[185px] z-30 p-5 lg:p-6 flex items-start justify-between"
                      style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))",
                        backdropFilter: "blur(25px)",
                        WebkitBackdropFilter: "blur(25px)",
                        borderRadius: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                      }}
                    >
                      <div className="max-w-[55%] lg:max-w-[60%]">
                        <p className="text-white text-[12px] lg:text-[15px] font-medium leading-snug lg:leading-relaxed line-clamp-5 lg:line-clamp-none">
                          {hospital.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-3 lg:gap-4 shrink-0 pt-1">
                        <Link
                          href={`/hospitals/${hospital.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center gap-3 text-white font-bold text-[14px] lg:text-[18px] hover:underline group"
                        >
                          <span className="max-w-[60px] lg:max-w-none leading-tight text-right">Know more</span>
                          <div className="bg-white rounded-full p-2 lg:p-3 transition-transform group-hover:rotate-45 flex items-center justify-center">
                            <ArrowUpRight size={18} className="text-[#EE4423] lg:w-[24px] lg:h-[24px]" strokeWidth={3} />
                          </div>
                        </Link>

                        <a
                          href="tel:+91XXXXXXXXXX"
                          className="bg-white text-[#58595B] px-4 py-2.5 lg:px-6 lg:py-3 rounded-full font-bold text-[12px] lg:text-[15px] flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                        >
                          <Phone size={16} className="lg:w-[18px]" fill="#58595B" />
                          <span className="whitespace-nowrap">Contact Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* DOTS */}
        <nav className="flex justify-center gap-2 mt-8" aria-label="Carousel Pagination">
          {hospitalData.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={selectedIndex === i ? "true" : "false"}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${selectedIndex === i ? "w-8 bg-[#EE4423]" : "w-2 bg-gray-200"}`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}