import { SpecialityData } from "../types";

export const gastroData: SpecialityData = {
  heroBadge: "Gastrosciences",
  icon: "/images/sections/specialities/gastro.svg",
  doctors: [
    {
      name: "Dr. Randhir Sud",
      exp: "39+ Years",
      role: "Chairman - Gastrosciences & Endoscopy",
      hospital: "Medanta - The Medicity, Gurugram",
      initials: "RS",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      name: "Dr. Adarsh Chaudhary",
      exp: "36+ Years",
      role: "Chairman - GI Surgery & GI Oncology",
      hospital: "Medanta - The Medicity, Gurugram",
      initials: "AC",
      gradient: "from-orange-600 to-yellow-600",
    }
  ],
  hospitals: [
    {
      name: "Medanta - The Medicity",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "Comprehensive center for advanced gastrointestinal surgeries and therapeutic endoscopies.",
    },
    {
      name: "Fortis Memorial Research Institute",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "Cutting-edge robotic GI oncology resections and minimal access surgeries.",
    }
  ],
  procedures: [
    "Robotic Whipple Surgery",
    "Therapeutic ERCP & EUS",
    "Laparoscopic Hernia Repair",
    "Gastric Bypass Surgery (Bariatric)",
    "GI Oncology Tumor Resections",
    "Sleeve Gastrectomy",
    "Advanced Colorectal Surgeries"
  ],
  costs: [
    { name: "Sleeve Gastrectomy", val: "$4,000 – $5,500 USD", usaVal: "$22,000+" },
    { name: "Robotic Whipple Procedure", val: "$9,000 – $11,500 USD", usaVal: "$70,000+" },
    { name: "Laparoscopic Hernia Repair", val: "$2,800 – $3,800 USD", usaVal: "$14,000+" },
    { name: "Therapeutic ERCP", val: "$1,200 – $1,800 USD", usaVal: "$8,500+" }
  ],
  translations: {
    en: {
      hero_title: "Gastrosciences & GI Surgery",
      hero_desc: "Avail premier gastroenterology and gastrointestinal surgeries in India. Connect with senior doctors for robotic GI oncology surgeries, sleeve gastrectomies, and advanced therapeutic endoscopy (ERCP/EUS).",
      discover_banner: "Get Connected to Pioneer GI Surgery Boards via India Med Services",
      conditions_title: "Key Gastrointestinal Conditions Managed",
      techniques_title: "Advanced Robotic GI Resections & Mucosal Imaging",
      techniques_desc: "Utilizing narrow-band high-definition endoscopes and robotic suites to identify and excise deep-seated intestinal pathologies.",
      costs_title: "Affordable & Professional GI Healthcare",
      costs_desc: "Receive world-class metabolic, bariatric, and GI oncology treatments at up to 75% savings.",
      why_choose_title: "Why Choose Our Gastrosciences Network?",
      doctors_sec_title: "Our Gastrointestinal Specialists",
      hospitals_sec_title: "Top Network Gastrosciences Hospitals",
      stories_sec_title: "Gastrointestinal Health Journeys",
      procedures_sec_title: "All GI Procedures Supported",
      faqs_sec_title: "Gastrosciences FAQ",
    },
    ru: {
      hero_title: "Гастроэнтерология и хирургия ЖКТ",
      hero_desc: "Получите помощь ведущих гастроэнтерологов Индии. Роботизированные операции на ЖКТ, рукавная резекция желудка и современные терапевтические эндоскопии (ERCP/EUS).",
      discover_banner: "Свяжитесь с лучшими хирургами ЖКТ через India Med Services",
      conditions_title: "Основные лечимые заболевания ЖКТ",
      techniques_title: "Передовые роботизированные резекции ЖКТ",
      techniques_desc: "Использование высокоточных эндоскопов высокого разрешения для точного удаления патологий кишечника.",
      costs_title: "Доступная и качественная помощь при заболеваниях ЖКТ",
      costs_desc: "Снизьте затраты на бариатрические операции и онкохирургию ЖКТ до 75% с сохранением стандартов JCI.",
      why_choose_title: "Почему выбирают нашу гастроэнтерологическую сеть?",
      doctors_sec_title: "Наши гастроэнтерологи",
      hospitals_sec_title: "Лучшие клиники ЖКТ сети",
      stories_sec_title: "Истории восстановления здоровья ЖКТ",
      procedures_sec_title: "Все проводимые процедуры на ЖКТ",
      faqs_sec_title: "Часто задаваемые вопросы по гастроэнтерологии",
    },
    uz: {
      hero_title: "Gastroenterologiya va GI Jarrohligi",
      hero_desc: "Hindistonda oshqozon-ichak tizimi bo'yicha yuqori sifatli yordam oling. Oshqozonni kichraytirish va robotlashtirilgan onko-jarrohlik bo'yicha eng yaxshi mutaxassislar.",
      discover_banner: "India Med Services yordamida yetakchi GI jarrohlari bilan bog'laning",
      conditions_title: "Davolanadigan asosiy oshqozon-ichak kasalliklari",
      techniques_title: "Robotlashtirilgan oshqozon-ichak operatsiyalari",
      techniques_desc: "Maksimal aniqlik bilan ichak muammolarini davolaydigan eng so'nggi endoskopik visual texnologiyalari.",
      costs_title: "Hamyonbop oshqozon-ichak kasalliklari parvarishi",
      costs_desc: "G'arbiy klinikalar narxlaridan 75% gacha tejagan holda yetakchi shifoxonalarda davolanish imkoniyati.",
      why_choose_title: "Nima uchun bizning gastroenterologiya tarmog'imiz tanlanadi?",
      doctors_sec_title: "Bizning oshqozon-ichak mutaxassislarimiz",
      hospitals_sec_title: "Eng yaxshi gastro-klinikalar tarmog'i",
      stories_sec_title: "Sog'lom hayotga qaytish muvaffaqiyatlari",
      procedures_sec_title: "Biz taklif qiladigan barcha oshqozon muolajalari",
      faqs_sec_title: "Gastroenterologiya bo'yicha savollar",
    },
    kk: {
      hero_title: "Гастроэнтерология және ЖКТ хирургиясы",
      hero_desc: "Үндістандағы ең үздік гастроэнтерологтардан озық асқазан, ішек емдерін, асқазанды кішірейту оталарын сәтті жасатыңыз.",
      discover_banner: "India Med Services-пен бірге асқорыту жүйесінің озық емдерін ашыңыз",
      conditions_title: "Негізгі емделетін асқазан-ішек аурулары",
      techniques_title: "Роботты және аз инвазивті ЖКТ оталары",
      techniques_desc: "Ішектің ең терең ауруларын толық емдеуге мүмкіндік беретін заманауи эндоскопиялық және роботты әдістер.",
      costs_title: "Асқорыту жүйесін емдеудің қолжетімді бағалары",
      costs_desc: "Асқазан мен ішекке жасалатын күрделі оталарды батыс елдерінен 75%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен гастроэнтерологияда біздің желіні таңдайды?",
      doctors_sec_title: "Біздің гастроэнтеролог-мамандарымыз",
      hospitals_sec_title: "Үздік асқазан-ішек емдеу орталықтары",
      stories_sec_title: "Асқорыту жүйесін емдеудің сәтті оқиғалары",
      procedures_sec_title: "Біз ұйымдастыратын барлық асқазан-ішек емдері",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Acid Reflux (GERD)", desc: "Corrosive stomach acids backwashing into the esophagus.", iconName: "Activity" },
    { title: "Crohn's & Colitis", desc: "Chronic inflammatory bowel diseases damaging intestinal linings.", iconName: "Heart" },
    { title: "Gallstones & Polyps", desc: "Hardened deposits and growths blocking bile pathways.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Advanced Robotic Resections", desc: "Performing delicate bowel and gastric surgeries via micro-port robotics.", iconName: "Cpu" },
    { title: "High-Definition Endoscopy", desc: "Visualizing mucosal cells using narrow-band imaging to spot early changes.", iconName: "ScanFace" },
    { title: "Therapeutic EUS & ERCP", desc: "Treating bile ducts and pancreatic cysts internally without external incisions.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Sarah J.", locKey: "au", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Advanced GERD Fundoplication" },
    { name: "Timur R.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Crohn's Disease Management" },
    { name: "Shoira A.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Sleeve Gastrectomy Recovery" }
  ],
  faqItems: [
    {
      question: "What is the CyberKnife system and is it invasive?",
      answer: "CyberKnife is a completely non-invasive radiation delivery system that targets tumors with sub-millimeter precision without standard incisions."
    },
    {
      question: "How is chemotherapy managed for international patients?",
      answer: "Chemotherapy is customized based on personalized genetic tumor profiling. We arrange localized delivery schedules and coordinate care with your home oncologist."
    },
    {
      question: "What is the success rate for Bone Marrow Transplants in India?",
      answer: "Our partner hematology departments report success rates of 85-90% for autologous transplants and 70-80% for allogeneic transplants in complex cases."
    }
  ]
};
