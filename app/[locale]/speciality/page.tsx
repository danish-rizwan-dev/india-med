
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Footer from "@/components/layout/Footer";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  return {
    title: locale === 'ru' 
      ? 'Медицинские направления в Индии' 
      : locale === 'uz'
      ? 'Tibbiy Yo\'nalishlar Hindistonda'
      : locale === 'kk'
      ? 'Үндістандағы Медициналық Бағыттар'
      : 'Our Medical Specialities',
    description: "Explore our range of medical specialities in India including Cardiac Care, Neurosciences, Oncology, and Orthopaedics with affordable world-class treatment.",
    keywords: ["Medical Specialities India", "Best Cardiology India", "Cancer Treatment India", "Neuroscience Hospitals India"],
    alternates: { canonical: `https://indiamedservice.com/${locale}/speciality` },
  };
}

export default async function SpecialityPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tTitle = locale === 'ru' 
    ? 'Наши медицинские направления' 
    : locale === 'uz'
    ? 'Bizning Tibbiy Yo\'nalishlarimiz'
    : locale === 'kk'
    ? 'Біздің Медициналық Бағыттарымыз'
    : 'Our Specialities';

  const tButton = locale === 'ru'
    ? 'Подробнее'
    : locale === 'uz'
    ? 'Batafsil'
    : locale === 'kk'
    ? 'Толығырақ'
    : 'Know More';

  const specialities = [
    {
      title: locale === 'ru' ? "Кардиология" : locale === 'uz' ? "Kardiologiya" : locale === 'kk' ? "Кардиология" : "Cardiological Assistance",
      slug: "cardiological-assistance",
      icon: "/images/sections/specialities/cardiac.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Ортопедия" : locale === 'uz' ? "Ortopediya" : locale === 'kk' ? "Ортопедия" : "Orthopedics",
      slug: "orthopedics",
      icon: "/images/sections/specialities/ortho.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Лечение рака" : locale === 'uz' ? "Saratonni Davolash" : locale === 'kk' ? "Ракты Емдеу" : "Cancer Treatment",
      slug: "cancer-treatment",
      icon: "/images/sections/specialities/cancer.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Неврология" : locale === 'uz' ? "Nevrologiya" : locale === 'kk' ? "Неврология" : "Neuroscience",
      slug: "neuroscience",
      icon: "/images/sections/specialities/neuro.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Гастроэнтерология" : locale === 'uz' ? "Gastroenterologiya" : locale === 'kk' ? "Гастроэнтерология" : "Gastrosciences",
      slug: "gastrosciences",
      icon: "/images/sections/specialities/gastro.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Трансплантация печени" : locale === 'uz' ? "Jigar Ko'chirish" : locale === 'kk' ? "Бауыр Аударып Салу" : "Liver Transplant",
      slug: "liver-transplant",
      icon: "/images/sections/specialities/liver.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Трансплантация легких" : locale === 'uz' ? "O'pka Ko'chirish" : locale === 'kk' ? "Өкпе Аударып Салу" : "Lung Transplantation",
      slug: "lung-transplantation",
      icon: "/images/sections/specialities/lungs.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Акушерство и гинекология" : locale === 'uz' ? "Akusherlik va Ginekologiya" : locale === 'kk' ? "Акушерлік және гинекология" : "Obstetrics And Gynecology",
      slug: "obstetrics-and-gynecology",
      icon: "/images/sections/specialities/gyno.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Пластическая хирургия" : locale === 'uz' ? "Plastik Jarrohlik" : locale === 'kk' ? "Пластикалық Хирургия" : "Plastic & Aesthetic Surgery",
      slug: "plastic-aesthetic-and-reconstructive-surgery",
      icon: "/images/sections/specialities/plasticSurgery.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Онкогинекология" : locale === 'uz' ? "Ginekologik Onkologiya" : locale === 'kk' ? "Онкогинекология" : "Gynecological Oncology",
      slug: "gynecology-and-gynecological-oncology",
      icon: "/images/sections/specialities/GynecologicalOncology.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Ревматология и иммунология" : locale === 'uz' ? "Revmatologiya va Immunologiya" : locale === 'kk' ? "Ревматология және Иммунология" : "Rheumatology & Immunology",
      slug: "rheumatology-and-immunology",
      icon: "/images/sections/specialities/RheumatologyImmunology.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Сосудистая хирургия" : locale === 'uz' ? "Qon Tomir Jarrohligi" : locale === 'kk' ? "Қантамыр Хирургиясы" : "Vascular Surgery",
      slug: "peripheral-vascular-and-endovascular-sciences",
      icon: "/images/sections/specialities/PeripheralVascularandEndovascularSciences.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Офтальмология" : locale === 'uz' ? "Oftalmologiya" : locale === 'kk' ? "Офтальмология" : "Ophthalmology",
      slug: "ophthalmology",
      icon: "/images/sections/specialities/Ophthalmology.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Трансплантация костного мозга" : locale === 'uz' ? "Suyak Ko'migi Transplantatsiyasi" : locale === 'kk' ? "Сүйек кемігін трансплантациялау" : "Bone Marrow Transplant",
      slug: "bone-marrow-transplant",
      icon: "/images/sections/specialities/Bonemarrowtransplant.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Эндокринология и диабетология" : locale === 'uz' ? "Endokrinologiya va Diabetologiya" : locale === 'kk' ? "Эндокринология және Диабетология" : "Endocrinology & Diabetology",
      slug: "endocrinology-and-diabetology",
      icon: "/images/sections/specialities/EndocrinologyDiabetology.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Трансплантация почки" : locale === 'uz' ? "Buyrak Ko'chirish" : locale === 'kk' ? "Бүйрек Аударып Салу" : "Kidney Transplant",
      slug: "kidney-transplant",
      icon: "/images/sections/specialities/KidneyTransplant.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "Пульмонология" : locale === 'uz' ? "Pulmonologiya" : locale === 'kk' ? "Пульмонология" : "Respiratory Medicine",
      slug: "respiratory-medicine-and-sleep-medicine",
      icon: "/images/sections/specialities/RespiratoryMedicine.svg",
      implemented: true
    },
    {
      title: locale === 'ru' ? "ЛОР и хирургия головы/шеи" : locale === 'uz' ? "LOR va Bosh-Bo'yin Jarrohligi" : locale === 'kk' ? "ЛОР және Бас-Мойын Хирургиясы" : "ENT & Head-Neck Surgery",
      slug: "ent-head-and-neck-surgery",
      icon: "/images/sections/specialities/ENTHeadNeckSurgery.svg",
      implemented: true
    }
  ];

  return (
    <main className="bg-gradient-to-tr from-[#FAFAFA] via-[#FCF9F7] to-[#FFF5F2] pt-24 pb-20 relative overflow-hidden">
      
      {/* Subtle Flowing Background Strokes Layer */}
      <div className="absolute inset-x-0 top-80 h-[100px] xl:h-[1000px] z-0 pointer-events-none opacity-[0.80]" aria-hidden="true">
        <Image
          src="/images/sections/process-flow/background-strokes.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Ambient Blurred Background blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-rose-200/35 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-orange-100/35 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[30%] w-[350px] h-[350px] rounded-full bg-amber-100/25 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center px-6 py-8">
        
        {/* Pill Header */}
        <header className="flex items-center justify-center border-2 border-[#58595B] rounded-full mb-15 px-10 lg:px-14 py-4 lg:py-5 w-fit mx-auto bg-white/70 backdrop-blur shadow-sm">
          <h1 className="text-[#58595B] font-bold font-montserrat leading-none text-center tracking-[0px] capitalize text-2xl md:text-3xl lg:text-[42px]">
            {tTitle}
          </h1>
        </header>

       

        {/* 18 Specialties grid */}
        <div className="w-full max-w-[1317px] px-2 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[36px] gap-y-[40px] justify-items-center w-full">
            {specialities.map((item, index) => (
              <Link
                key={index}
                href={item.implemented ? `/speciality/${item.slug}` : "/under-construction"}
                className={`group relative flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-[8px] hover:shadow-2xl hover:![background:linear-gradient(rgba(255,255,255,0.95),rgba(255,255,255,0.95))_padding-box,#EE4423_border-box] cursor-pointer ${index === 16 ? "lg:col-start-2" : ""}`}
                style={{
                  width: "271.04px",
                  height: "253.62px",
                  borderRadius: "40px",
                  border: "3px solid transparent",
                  background: `
                    linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.72)) padding-box,
                    linear-gradient(39.31deg, rgba(255, 255, 255, 0.05) 45.41%, rgba(255, 173, 157, 0.6) 93.87%) border-box,
                    linear-gradient(222.62deg, rgba(255, 255, 255, 0.2) 14.53%, rgba(255, 255, 255, 0.8) 101.14%) border-box
                  `,
                  boxShadow: "10px 24px 50px 0px rgba(67, 41, 57, 0.1)",
                  backdropFilter: "blur(50px)",
                  WebkitBackdropFilter: "blur(50px)",
                  paddingTop: "34px",
                  paddingRight: "24px",
                  paddingBottom: "34px",
                  paddingLeft: "24px",
                }}
              >
                {/* Inner Content Wrapper - Static vertical alignment */}
                <div className="flex flex-col items-center justify-between w-full h-full">
                  
                  {/* Brand-red vector icon wrapper using local SVG files */}
                  <div 
                    className="relative z-20 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      width: "75.7px",
                      height: "78px",
                    }}
                  >
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Perfectly centered wrap text */}
                  <h2 
                    className="relative z-20 text-[#414042] font-montserrat flex items-center justify-center transition-colors duration-300 group-hover:text-[#EE4423]"
                    style={{
                      width: "222px",
                      height: "48px",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "100%",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </h2>

                  {/* Clean text link with Sleek Chevron matching screenshot */}
                  <div className="flex items-center justify-center gap-[8px] mt-1 select-none">
                    <span 
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "100%",
                        color: "#58595B",
                      }}
                      className="group-hover:text-[#EE4423] transition-colors duration-300"
                    >
                      {tButton}
                    </span>
                    <svg 
                      width="8" 
                      height="14" 
                      viewBox="0 0 8 14" 
                      fill="none" 
                      className="text-[#58595B] group-hover:text-[#EE4423] transition-colors duration-300"
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M1 1l6 6-6 6" />
                    </svg>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
