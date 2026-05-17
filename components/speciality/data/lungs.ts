import { SpecialityData } from "../types";

export const lungsData: SpecialityData = {
  heroBadge: "Lung Transplantation",
  icon: "/images/sections/specialities/lung.svg",
  doctors: [
    {
      name: "Dr. Sandeep Attawar",
      exp: "28+ Years",
      role: "Director & Chair - Heart & Lung Transplant",
      hospital: "KIMS Hospital, Hyderabad",
      initials: "SA",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      name: "Dr. Jnanesh Thacker",
      exp: "30+ Years",
      role: "Program Director - Cardiopulmonary Transplant",
      hospital: "Yashoda Hospitals, Hyderabad",
      initials: "JT",
      gradient: "from-blue-600 to-teal-500",
    }
  ],
  hospitals: [
    {
      name: "KIMS Hospital",
      city: "Hyderabad, Telangana",
      accreditation: "JCI & NABH Accredited",
      desc: "One of India's leading centers for complex cardiopulmonary transplant and ECMO care.",
    },
    {
      name: "MGM Healthcare",
      city: "Chennai, Tamil Nadu",
      accreditation: "NABH & JCI Accredited",
      desc: "Pioneer in mechanical circulatory support and ex-vivo lung perfusion techniques.",
    }
  ],
  procedures: [
    "Double Lung Transplant",
    "Single Lung Transplant",
    "Heart-Lung Transplant",
    "ECMO Support Therapy",
    "Robotic VATS Lobectomy",
    "Tracheal Reconstruction Surgeries",
    "Bronchial Airway Stenting"
  ],
  costs: [
    { name: "Double Lung Transplant", val: "$30,000 – $40,000 USD", usaVal: "$320,000+" },
    { name: "Single Lung Transplant", val: "$22,000 – $28,000 USD", usaVal: "$220,000+" },
    { name: "Heart-Lung Transplant", val: "$35,000 – $45,000 USD", usaVal: "$400,000+" },
    { name: "Robotic VATS Lobectomy", val: "$6,500 – $8,500 USD", usaVal: "$45,000+" }
  ],
  translations: {
    en: {
      hero_title: "Lung Transplantation",
      hero_desc: "Receive world-class double/single lung transplantations and complex thoracic surgeries in India. Access expert transplant boards offering advanced ECMO and ex-vivo perfusion therapies.",
      discover_banner: "Breathe Freely Again with Pioneer Thoracic and Lung Teams via India Med Services",
      conditions_title: "Key Pulmonary & Thoracic Conditions Managed",
      techniques_title: "Robotic VATS Thoracics & Ex-Vivo Perfusion",
      techniques_desc: "Performing video-assisted keyhole thoracic surgeries (VATS) to minimize chest wall incisions and facilitate faster lung healing.",
      costs_title: "Affordable & World-Class Lung Care",
      costs_desc: "Access premier cardiac-thoracic transplants at a fraction of US/EU costs in JCI facilities.",
      why_choose_title: "Why Choose Our Lung Transplant Network?",
      doctors_sec_title: "Our Lung Specialists",
      hospitals_sec_title: "Top Network Lung Centers",
      stories_sec_title: "Stories of Restored Breathing",
      procedures_sec_title: "All Lung & Thoracic Procedures Supported",
      faqs_sec_title: "Lung Transplant FAQ",
    },
    ru: {
      hero_title: "Трансплантация легких",
      hero_desc: "Получите передовую торакальную помощь в Индии. Одно- и двухсторонняя пересадка легких, высокоэффективная поддержка ЭКМО и инновационные методы реабилитации.",
      discover_banner: "Дышите свободно благодаря программам лечения легких с India Med Services",
      conditions_title: "Основные лечимые заболевания легких и плевры",
      techniques_title: "Роботизированная VATS-хирургия легких",
      techniques_desc: "Минимально инвазивные операции через небольшие проколы (VATS), обеспечивающие быстрое восстановление.",
      costs_title: "Доступная пересадка легких и торакальная хирургия",
      costs_desc: "Снизьте затраты на двухстороннюю пересадку легких до 80% в клиниках JCI с высочайшей выживаемостью.",
      why_choose_title: "Почему выбирают нашу легочную сеть?",
      doctors_sec_title: "Наши специалисты по легким",
      hospitals_sec_title: "Лучшие легочные центры сети",
      stories_sec_title: "Истории восстановления свободного дыхания",
      procedures_sec_title: "Все виды торакальных процедур",
      faqs_sec_title: "Часто задаваемые вопросы по пересадке легких",
    },
    uz: {
      hero_title: "O'pka Transplantatsiyasi",
      hero_desc: "Hindistonda o'pka ko'chirish va ko'krak qafasi a'zolari murakkab operatsiyalaridan foydalaning, intensiv reabilitatsiya tizimi yordamida tezroq sog'ayib keting.",
      discover_banner: "India Med Services yordamida erkin nafas olishni tiklang",
      conditions_title: "Davolanadigan o'pka va nafas yo'llari kasalliklari",
      techniques_title: "Robotlashtirilgan Ko'krak Qafasi Jarrohligi",
      techniques_desc: "Ko'krak qafasi a'zolarini minimal kesmalar orqali og'riqsiz operatsiya qiladigan VATS texnologiyasi.",
      costs_title: "Hamyonbop o'pka transplantatsiyasi yechimlari",
      costs_desc: "Evropa va Amerika klinikalariga qaraganda bir necha barobar arzon narxda eng yuqori darajadagi o'pka ko'chirish yordamini oling.",
      why_choose_title: "Nima uchun bizning torakal tarmog'imiz tanlanadi?",
      doctors_sec_title: "Bizning o'pka mutaxassislarimiz",
      hospitals_sec_title: "Yetakchi o'pka davolash markazlari",
      stories_sec_title: "Nafas olishni tiklash muvaffaqiyatlari",
      procedures_sec_title: "Biz taklif qiladigan barcha o'pka muolajalari",
      faqs_sec_title: "O'pka ko'chirish bo'yicha savollar",
    },
    kk: {
      hero_title: "Өкпе трансплантациясы және кеуде хирургиясы",
      hero_desc: "Үндістандағы ең үздік трансплантологтардың көмегімен өкпе ауыстыру оталарын сәтті жасатыңыз және сапалы оңалтудан өтіңіз.",
      discover_banner: "India Med Services өкпе емдеу бағдарламаларымен еркін тыныс алуға оралыңыз",
      conditions_title: "Негізгі емделетін өкпе аурулары",
      techniques_title: "Роботизацияланған торакальды хирургия (VATS)",
      techniques_desc: "Кеуде қуысын тіліксіз әрі жылдам қалпына келтіруге мүмкіндік беретін заманауи эндоскопиялық оталар.",
      costs_title: "Өкпе трансплантациясын тиімді бағамен жасату",
      costs_desc: "Еуропа немесе батыс елдерімен салыстырғанда өте қолжетімді бағамен өкпе ауыстыру отасын жасатыңыз.",
      why_choose_title: "Неліктен біздің торакальды желіні таңдайды?",
      doctors_sec_title: "Біздің торакальды хирург-мамандарымыз",
      hospitals_sec_title: "Үздік өкпе емдеу орталықтары",
      stories_sec_title: "Өкпе емдеудің сәтті оқиғалары",
      procedures_sec_title: "Кеуде қуысына жасалатын барлық оталар",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "COPD & Emphysema", desc: "Progressive lung disease restricting air flow and oxygenation.", iconName: "Activity" },
    { title: "Pulmonary Fibrosis", desc: "Scarring of lung tissues making breathing increasingly stiff.", iconName: "Heart" },
    { title: "Lung Tumors", desc: "Primary or secondary neoplasms within bronchial pathways.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "VATS Keyhole Thoracics", desc: "Performing lung lobectomies using small chest ports instead of open thoracotomy.", iconName: "Cpu" },
    { title: "Bronchial Airway Stenting", desc: "Deploying structural meshes internally to maintain open breathing passages.", iconName: "ScanFace" },
    { title: "Ex-Vivo Lung Perfusion", desc: "Evaluating and treating donor lungs outside the body to maximize viability.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Robert H.", locKey: "us", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Double Lung Transplant Recipient" },
    { name: "Nurlan B.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Robotic VATS Lobectomy Success" },
    { name: "Dilshod M.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Tracheal Reconstruction Recovery" }
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
