import { SpecialityData } from "../types";

export const kidneyData: SpecialityData = {
  heroBadge: "Kidney Transplant",
  icon: "/images/sections/specialities/KidneyTransplant.svg",
  doctors: [
    {
      name: "Dr. Sandeep Guleria",
      exp: "35+ Years",
      role: "Senior Consultant - Kidney Transplant Surgery",
      hospital: "Indraprastha Apollo Hospitals, New Delhi",
      initials: "SG",
      gradient: "from-blue-500 to-teal-600",
    }
  ],
  hospitals: [
    {
      name: "Indraprastha Apollo Hospitals",
      city: "New Delhi",
      accreditation: "JCI & NABH Accredited",
      desc: "Pioneering transplant center performing advanced ABO-incompatible and pediatric kidney transplants.",
    }
  ],
  procedures: [
    "Living Donor Kidney Transplant",
    "ABO-Incompatible Kidney Transplant",
    "Laparoscopic Donor Nephrectomy",
    "Pediatric Kidney Transplant",
    "Pre-Transplant Hemodialysis"
  ],
  costs: [
    { name: "Living Donor Kidney Transplant", val: "$13,500 – $16,500 USD", usaVal: "$110,000+" },
    { name: "ABO-Incompatible Transplant", val: "$18,500 – $22,000 USD", usaVal: "$160,000+" }
  ],
  translations: {
    en: {
      hero_title: "Kidney Transplant Services in India",
      hero_desc: "Receive world-class renal care and advanced laparoscopic transplant surgeries. Connect with leading transplant teams offering ABO-incompatible options and high graft survival rates.",
      discover_banner: "Access JCI-Accredited Transplant Centers and Top Nephrologists in India",
      conditions_title: "Key Renal Conditions Treated",
      techniques_title: "Laparoscopic Donor Care & ABO-Incompatible Transplants",
      techniques_desc: "Ensuring donor safety via minimally invasive laparoscopic extractions and executing complex transplants across incompatible blood groups.",
      costs_title: "Affordable & Premium Kidney Transplants",
      costs_desc: "Benefit from world-leading transplant surgeons and modular cleanrooms with up to 80% cost savings.",
      why_choose_title: "Why Choose Our Kidney Transplant Network?",
      doctors_sec_title: "Our Nephrologists & Transplant Surgeons",
      hospitals_sec_title: "Top Network Transplant Centers",
      stories_sec_title: "Renal Recovery Stories",
      procedures_sec_title: "All Renal Transplant Procedures",
      faqs_sec_title: "Kidney Transplant FAQ",
    },
    ru: {
      hero_title: "Трансплантация почки в Индии",
      hero_desc: "Пройдите трансплантацию почки у ведущих хирургов Индии. Лапароскопический забор донорского органа, несовместимые по группе крови (ABO) трансплантации.",
      discover_banner: "Свяжитесь с передовыми центрами трансплантации и нефрологами в Индии",
      conditions_title: "Основные лечимые почечные заболевания",
      techniques_title: "Лапароскопические операции и ABO-несовместимая трансплантация",
      techniques_desc: "Безопасность донора благодаря лапароскопической резекции и преодоление барьеров несовместимости крови.",
      costs_title: "Доступная стоимость трансплантации почки",
      costs_desc: "Получите помощь ведущих трансплантологов в клиниках JCI со сбережением бюджета до 80%.",
      why_choose_title: "Почему выбирают наши почечные центры?",
      doctors_sec_title: "Наши нефрологи и трансплантологи",
      hospitals_sec_title: "Лучшие центры трансплантации в сети",
      stories_sec_title: "Истории возвращения к полноценной жизни",
      procedures_sec_title: "Все виды почечных операций и диализа",
      faqs_sec_title: "Часто задаваемые вопросы по ТКП",
    },
    uz: {
      hero_title: "Hindistonda Buyrak Ko'chirish Xizmatlari",
      hero_desc: "Jahon darajasidagi buyrak ko'chirish va laporoskopik donorlik operatsiyalari. Qon guruhi mos kelmagan (ABO-incompatible) holatlarda ham muvaffaqiyatli transplantatsiya.",
      discover_banner: "Hindistondagi yetakchi buyrak ko'chirish markazlari va nefrologlari bilan bog'laning",
      conditions_title: "Davolanadigan asosiy buyrak kasalliklari",
      techniques_title: "Laporoskopik Donorlik & ABO-Mos Kelmaydigan Transplantatsiya",
      techniques_desc: "Donor xavfsizligini ta'minlaydigan minimal invaziv laporoskopik buyrak olish va turli qon guruhlari o'rtasida muvaffaqiyatli ko'chirish.",
      costs_title: "Hamyonbop va yuqori sifatli buyrak ko'chirish",
      costs_desc: "G'arb shifoxonalariga qaraganda 80% gacha arzon narxlarda eng yaxshi buyrak ko'chirish operatsiyalarini amalga oshiring.",
      why_choose_title: "Nima uchun bizning buyrak transplantatsiyasi tarmog'imiz tanlanadi?",
      doctors_sec_title: "Bizning nefrolog va transplantolog shifokorlarimiz",
      hospitals_sec_title: "Eng yaxshi buyrak transplantatsiyasi shifoxonalari",
      stories_sec_title: "Bemorlarimiz muvaffaqiyat hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha buyrak muolajalari",
      faqs_sec_title: "Buyrak ko'chirish bo'yicha savollar",
    },
    kk: {
      hero_title: "Үндістанда бүйрек аударып салу қызметтері",
      hero_desc: "Бүйректі сәтті трансплантациялау және донорды лапароскопиялық күтіммен емдеу. Қан тобы сәйкес келмейтін (ABO) күрделі оталарды сәтті жасау.",
      discover_banner: "Үндістандағы озық бүйрек трансплантациялау орталықтары мен нефрологтармен байланысыңыз",
      conditions_title: "Емделетін негізгі бүйрек аурулары",
      techniques_title: "Лапароскопиялық донорлық емдер және ABO сәйкессіз оталары",
      techniques_desc: "Аз инвазивті лапароскопия арқылы донор бүйрегін қауіпсіз алу және сәйкес емес қан топтары арасында күрделі трансплантация жасау.",
      costs_title: "Бүйректі тиімді әрі сапалы ауыстыру",
      costs_desc: "Бүйрек трансплантациясын батыс елдерінен 80%-ға дейін төмен бағамен ең үздік JCI емханаларында жасатыңыз.",
      why_choose_title: "Неліктен бүйрек трансплантациясында біздің желіні таңдайды?",
      doctors_sec_title: "Біздің нефролог және трансплантолог мамандарымыз",
      hospitals_sec_title: "Бүйрек ауыстыратын үздік орталықтар",
      stories_sec_title: "Бүйрегі сауыққан жандардың сәтті оқиғалары",
      procedures_sec_title: "Барлық бүйрек ауыстыру оталары",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "End-Stage Renal Disease (ESRD)", desc: "Complete chronic kidney failure requiring vascular blood filtration or transplantation.", iconName: "Activity" },
    { title: "Chronic Glomerulonephritis", desc: "Severe autoimmune swelling of kidney filtering units (glomeruli).", iconName: "Heart" },
    { title: "Polycystic Kidney Disease", desc: "Genetic fluid sacs growth causing kidney tissue destruction.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "ABO-Incompatible Processing", desc: "Using advanced immunoadsorption and plasma filters to safely transplant kidneys across mismatched blood groups.", iconName: "Cpu" },
    { title: "Laparoscopic Retroperitoneal donor extraction", desc: "Removing the donor organ through microscopic incisions behind the belly cavity.", iconName: "ScanFace" },
    { title: "Pediatric microvascular transplant", desc: "Performing complex vascular hookups in children utilizing high-magnification microsurgery.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Bekzod S.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "ABO-Incompatible Kidney Success" },
    { name: "Kuralay S.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Laparoscopic Donor nephrectomy" }
  ],
  faqItems: [
    {
      question: "Can family members with different blood groups donate a kidney?",
      answer: "Yes, utilizing advanced antibody filtering techniques (plasmapheresis/immunoadsorption), we perform safe and highly successful ABO-incompatible transplants."
    },
    {
      question: "What legal approvals are required for kidney transplantation in India?",
      answer: "Under Indian medical transplant laws, only close relative living donors are permitted. All cases are approved by legally constituted government authorization committees."
    }
  ]
};
