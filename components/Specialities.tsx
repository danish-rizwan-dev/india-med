import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "./whychooseus";
import ServiceBar from "./Services";

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
      <div className="relative w-full mt-[-200px]">
        {/* --- SHARED BACKGROUND SYSTEM --- */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-full -mt-50 "
            style={{
              backgroundImage: "url('/images/backgrounds/background.png')",
              backgroundSize: "repeat-y",
              backgroundPosition: "center",
              filter: "blur(60px) saturate(1.8)",
              /* Soft fade only at the VERY TOP and VERY BOTTOM of the entire combined block */
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 0%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 0%)",
            }}
          />
          {/* Shared Milky Overlay */}
          <div
            className="absolute inset-0 bg-white/25 backdrop-blur-3xl"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          />
        </div>

        {/* --- SECTION 1: SPECIALITIES --- */}
        <section className="relative z-10 flex flex-col items-center pt-[80px] pb-[100px] ">
          <div
            className="flex items-center justify-center bg-white/40 backdrop-blur-xl border font-bold text-center shadow-sm mb-[60px] mt-[80px]"
            style={{
              width: "415px",
              height: "73px",
              borderRadius: "50px",
              fontFamily: "Montserrat, sans-serif",
              color: "rgb(88, 89, 91)",
              border: "2px solid rgb(88, 89, 91)",
              fontSize: "42px",
            }}
          >
            Our Specialities
          </div>

          <div
            className="flex flex-col gap-[60px]"
            style={{ width: "1318.14px" }}
          >
            {[0, 1].map((row) => (
              <div key={row} className="flex justify-between gap-[78px]">
                {specialities.slice(row * 4, row * 4 + 4).map((item, index) => (
                  <Link
                    key={index}
                    href="/specialities"
                    className="group flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-2"
                    style={{
                      width: "271px",
                      height: "253px",
                      borderRadius: "40px",
                      padding: "34px 24px",
                      fontFamily: "Montserrat, sans-serif",
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))",
                      backdropFilter: "blur(50px)",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <div className="relative w-[65px] h-[65px] group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-[#414042] text-[20px] font-bold leading-tight group-hover:text-[#EE4423] transition-colors">
                      {item.title}
                    </div>
                    <div className="px-5 py-2 bg-white/80 rounded-full text-[13px] font-semibold text-[#EE4423] shadow-sm border border-white group-hover:bg-[#EE4423] group-hover:text-white transition-all">
                      Know More <span className="ml-1">›</span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <Link
            href="/specialities"
            className="mt-16 flex items-center gap-2 px-10 py-4 rounded-full bg-[#EE4423] text-white font-bold text-lg shadow-lg hover:bg-[#d63a1b] transition-all"
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
