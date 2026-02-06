import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "./whychooseus";
import ServiceBar from "./Services";
import FeaturedDestination from "./FeaturedDestination";

const specialities = [
  { title: "Cardiac Care", icon: "/images/icons/cardiac.png" },
  { title: "Neurosciences", icon: "/images/icons/neuro.png" },
  { title: "Cancer Care", icon: "/images/icons/cancer.png" },
  { title: "Gastrosciences", icon: "/images/icons/gastro.png" },
  { title: "Gastrosciences", icon: "/images/icons/gastro.png" },
  { title: "Cancer Care", icon: "/images/icons/cancer.png" },
  { title: "Cardiac Care", icon: "/images/icons/cardiac.png" },
  { title: "Neurosciences", icon: "/images/icons/neuro.png" },
];

export default function Specialities() {
  return (
    <>
      <ServiceBar />
      {/* Changed mt to be smaller on mobile and -200px on desktop */}
      <div className="relative w-full mt-[-80px] lg:mt-[-200px]">
        {/* --- SHARED BACKGROUND SYSTEM --- */}
        <div className="absolute inset-0 ">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url('/images/backgrounds/background.png')",
              backgroundSize: "repeat-y",
              backgroundPosition: "center",
              filter: "blur(60px) saturate(1.8)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 3%, black 0%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 5%, black 0%, black 90%, transparent 00%)",
            }}
          />
          <div className="absolute inset-0 bg-white/25 backdrop-blur-3xl" />
        </div>

        {/* --- SECTION 1: SPECIALITIES --- */}
        <section className="relative z-10 flex flex-col items-center px-4 pt-[60px] lg:pt-[80px] pb-[60px] lg:pb-[100px]">
          
          {/* Section Title: Responsive width and font size */}
          <div
            className="flex items-center justify-center bg-white/40 backdrop-blur-xl border font-bold text-center shadow-sm mb-[40px] lg:mb-[60px] mt-[40px] lg:mt-[80px]"
            style={{
              width: "100%",
              maxWidth: "415px",
              minHeight: "60px",
              height: "auto",
              padding: "10px 20px",
              borderRadius: "50px",
              fontFamily: "Montserrat, sans-serif",
              color: "rgb(88, 89, 91)",
              border: "2px solid rgb(88, 89, 91)",
            }}
          >
            <h2 className="text-2xl lg:text-[42px]">Our Specialities</h2>
          </div>

          {/* Specialities Grid: Fixed width removed, replaced with max-width and grid */}
          <div className="w-full max-w-[1318px] px-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[40px] xl:gap-[78px]">
              {specialities.map((item, index) => (
                <Link
                  key={index}
                  href="/specialities"
                  className="group flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-2"
                  style={{
                    width: "100%",
                    minHeight: "220px",
                    height: "100%",
                    borderRadius: "40px",
                    padding: "30px 20px",
                    fontFamily: "Montserrat, sans-serif",
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))",
                    backdropFilter: "blur(50px)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <div className="relative w-[50px] lg:w-[65px] h-[50px] lg:h-[65px] group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-[#414042] text-lg lg:text-[20px] font-bold leading-tight group-hover:text-[#EE4423] transition-colors py-4">
                    {item.title}
                  </div>
                  <div className="px-5 py-2 bg-white/80 rounded-full text-[12px] lg:text-[13px] font-semibold text-[#EE4423] shadow-sm border border-white group-hover:bg-[#EE4423] group-hover:text-white transition-all">
                    Know More <span className="ml-1">›</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/specialities"
            className="mt-12 lg:mt-16 flex items-center gap-2 px-8 lg:px-10 py-3 lg:py-4 rounded-full bg-[#EE4423] text-white font-bold text-base lg:text-lg shadow-lg hover:bg-[#d63a1b] transition-all"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            View All Specialities <span className="text-xl">›</span>
          </Link>
          
          <WhyChooseUs />
        </section>
      </div>
    </>
  );
}