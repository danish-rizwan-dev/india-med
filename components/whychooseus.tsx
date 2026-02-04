import Image from "next/image";

const reasons = [
  { title: "World-class Hospitals", description: "JCI & NABH accredited hospitals ensuring top global safety and care.", icon: "/icons/hospital.png" },
  { title: "Affordable Costs", description: "Up to 70–80% lower treatment costs compared to Western countries.", icon: "/icons/costs.png" },
  { title: "Expert Doctors", description: "Internationally trained specialists with years of proven expertise.", icon: "/icons/doctor.png" },
  { title: "Complete Assistance", description: "End-to-end support: travel, visa, treatment, and recovery care.", icon: "/icons/assistance.png" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative flex items-center justify-center mx-auto py-[100px]" style={{ width: "1319px", gap: "133px", fontFamily: "Montserrat, sans-serif" }}>
      {/* Local World Map Strokes Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none -z-10"
        style={{ backgroundImage: "url('/worldmapsstrokes.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      />

      <div className="grid grid-cols-2" style={{ width: "650px", gap: "20px" }}>
        {reasons.map((item, index) => (
          <div key={index} className={`flex flex-col items-start text-left transition-all duration-500 hover:-translate-y-2 ${index % 2 !== 0 ? "mt-12" : ""}`}
            style={{
              width: "315px", height: "299px", borderRadius: "40px", border: "3px solid rgba(255, 255, 255, 0.7)", padding: "40px",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2))",
              backdropFilter: "blur(15px)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex items-center justify-center mb-6 w-[66px] h-[66px] bg-[#EE4423] rounded-full">
              <div className="relative w-8 h-8">
                <Image src={item.icon} alt={item.title} fill className="object-contain invert brightness-0" />
              </div>
            </div>
            <h3 className="text-[#58595B] font-bold text-[22px] mb-2">{item.title}</h3>
            <p className="text-[#58595B] text-[14px] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start max-w-[530px]">
        <div className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-8 px-10 h-[73px]">
          <h2 className="text-[#58595B] font-bold text-[42px]">Why Choose Us?</h2>
        </div>
        <p className="text-[#58595B] text-[18px] leading-relaxed mb-10">
          Trusted by international patients worldwide, India delivers advanced healthcare backed by expert doctors and complete support.
        </p>
        <button className="flex items-center gap-3 px-12 py-5 rounded-full bg-[#EE4423] text-white font-bold text-lg shadow-lg hover:bg-[#d63a1b] transition-all">
          Contact Now <span className="text-xl">›</span>
        </button>
      </div>
    </section>
  );
}