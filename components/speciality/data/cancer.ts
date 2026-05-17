import { SpecialityData } from "../types";

export const cancerData: SpecialityData = {
  heroBadge: "Cancer & Oncology",
  icon: "/images/sections/specialities/cancer.svg",
  doctors: [
    {
      name: "Dr. Vinod Raina",
      exp: "37+ Years",
      role: "Executive Director - Medical Oncology",
      hospital: "Fortis Memorial Research Institute, Gurugram",
      initials: "VR",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      name: "Dr. Ashok Vaid",
      exp: "35+ Years",
      role: "Chairman - Medical & Pediatric Oncology",
      hospital: "Medanta - The Medicity, Gurugram",
      initials: "AV",
      gradient: "from-rose-600 to-purple-600",
    }
  ],
  hospitals: [
    {
      name: "Fortis Memorial Research Institute",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "Comprehensive center for advanced bone marrow transplantation and CAR-T therapies.",
    },
    {
      name: "Medanta - The Medicity",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "Cutting-edge robotic cancer surgeries and CyberKnife stereotactic radiosurgery units.",
    }
  ],
  procedures: [
    "CyberKnife Radiosurgery",
    "Bone Marrow Transplant (BMT)",
    "CAR-T Cell Therapy",
    "Chemotherapy & Targeted Therapy",
    "Robotic Cancer Resections",
    "Breast Cancer Conservative Surgery",
    "Immunotherapy Treatments"
  ],
  costs: [
    { name: "CyberKnife Radiosurgery", val: "$5,500 – $6,500 USD", usaVal: "$45,000+" },
    { name: "Bone Marrow Transplant", val: "$15,000 – $22,000 USD", usaVal: "$120,000+" },
    { name: "Robotic Prostatectomy", val: "$6,500 – $8,000 USD", usaVal: "$38,000+" },
    { name: "Chemotherapy (per cycle)", val: "From $800 USD", usaVal: "$6,000+" }
  ],
  translations: {
    en: {
      hero_title: "Oncology & BMT Care",
      hero_desc: "Access world-class cancer treatments in India. Connect with senior oncologists for CyberKnife radiosurgery, personalized immunotherapy, complex surgical resections, and bone marrow transplants.",
      discover_banner: "Connect with JCI-Accredited Multi-Disciplinary Cancer Boards via India Med Services",
      conditions_title: "Key Cancer Indicators & Types Managed",
      techniques_title: "CyberKnife & Precision Oncology Systems",
      techniques_desc: "Targeting malignant structures with sub-millimeter radiosurgical beams without open incisions.",
      costs_title: "Affordable & Premium Oncology Solutions",
      costs_desc: "Receive world-class targeted biological therapies and robotic resections at up to 80% savings.",
      why_choose_title: "Why Choose Our Oncology Network?",
      doctors_sec_title: "Our Oncology Specialists",
      hospitals_sec_title: "Leading Network Cancer Centers",
      stories_sec_title: "Stories of Victory Over Cancer",
      procedures_sec_title: "All Oncological Treatments Administered",
      faqs_sec_title: "Oncology FAQ",
    },
    ru: {
      hero_title: "Онкология и трансплантация костного мозга",
      hero_desc: "Получите передовое лечение рака в Индии. Радиохирургия CyberKnife, индивидуальная иммунотерапия, сложные резекции опухолей и ТКМ от ведущих экспертов.",
      discover_banner: "Свяжитесь с онкологическими консилиумами JCI через India Med Services",
      conditions_title: "Основные лечимые онкологические заболевания",
      techniques_title: "Системы CyberKnife и точная онкология",
      techniques_desc: "Уничтожение злокачественных опухолей с помощью субмиллиметровых радиохирургических лучей без разрезов.",
      costs_title: "Доступные и качественные онкологические решения",
      costs_desc: "Получите целевую биологическую терапию и роботизированные операции со скидкой до 80% по сравнению с Западом.",
      why_choose_title: "Почему выбирают нашу онкологическую сеть?",
      doctors_sec_title: "Наши специалисты-онкологи",
      hospitals_sec_title: "Лучшие онкологические центры сети",
      stories_sec_title: "Истории победы над раком",
      procedures_sec_title: "Все виды онкологического лечения",
      faqs_sec_title: "Часто задаваемые вопросы по онкологии",
    },
    uz: {
      hero_title: "Onkologiya va BMT Yordami",
      hero_desc: "Hindistonda saraton kasalligiga qarshi ilg'or muolajalardan foydalaning. CyberKnife radioterapiyasi, immunoterapiya va suyak ko'migi transplantatsiyasi bo'yicha eng yaxshi mutaxassislar.",
      discover_banner: "India Med Services yordamida ko'p tarmoqli onkologik konsiliumlarga ulaning",
      conditions_title: "Davolanadigan asosiy saraton turlari",
      techniques_title: "CyberKnife va aniq onkologiya tizimlari",
      techniques_desc: "Xavfli o'smalarni kesmalarsiz va og'riqsiz yo'q qiladigan yuqori aniqlikdagi CyberKnife texnologiyasi.",
      costs_title: "Hamyonbop va zamonaviy onkologik yechimlar",
      costs_desc: "G'arb mamlakatlariga qaraganda 80% gacha tejab, eng so'nggi immunoterapiya va robotlashtirilgan jarrohlikdan foydalaning.",
      why_choose_title: "Nima uchun bizning onkologik tarmog'imiz tanlanadi?",
      doctors_sec_title: "Bizning onkolog mutaxassislarimiz",
      hospitals_sec_title: "Etakchi onkologiya markazlari",
      stories_sec_title: "Saraton ustidan g'alaba hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha onkologik muolajalar",
      faqs_sec_title: "Onkologiya bo'yicha tez-tez so'raladigan savollar",
    },
    kk: {
      hero_title: "Онкология және Сүйек кемігін трансплантациялау",
      hero_desc: "Үндістандағы ең заманауи онкологиялық орталықтардың көмегімен рак ауруларын жеңіңіз және сапалы сүйек кемігін трансплантациялаудан өтіңіз.",
      discover_banner: "India Med Services онкологиялық консилиумдарымен бірге озық емдерді ашыңыз",
      conditions_title: "Негізгі емделетін онкологиялық аурулар",
      techniques_title: "CyberKnife және дәл онкология жүйелері",
      techniques_desc: "Зиянды ісіктерді тіліксіз әрі ауырсынусыз жоятын субмиллиметрлік дәл радиациялық CyberKnife технологиясы.",
      costs_title: "Қолжетімді онкологиялық емдеу шешімдері",
      costs_desc: "АҚШ немесе Еуропамен салыстырғанда онкологиялық оталарды 80%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен біздің онкологиялық желіні таңдайды?",
      doctors_sec_title: "Біздің онколог-мамандарымыз",
      hospitals_sec_title: "Үздік онкологиялық орталықтар",
      stories_sec_title: "Ракты жеңгендердің сәтті оқиғалары",
      procedures_sec_title: "Біз ұйымдастыратын барлық онкологиялық емдер",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Solid Tumors", desc: "Localised abnormal tissue growths requiring evaluation.", iconName: "Activity" },
    { title: "Blood Cancers", desc: "Malignancies of lymphatic or hematological systems.", iconName: "Heart" },
    { title: "Metastasis", desc: "Spreading neoplasms needing systemic chemotherapy.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "CyberKnife Radiosurgery", desc: "Eliminating deep-seated tumors non-invasively with high-dose focus radiation.", iconName: "Cpu" },
    { title: "Tumor Tissue Printing", desc: "Analyzing neoplastic cell behaviors on structural scaffoldings.", iconName: "ScanFace" },
    { title: "Targeted Immunotherapy", desc: "Engineering private immune cells (CAR-T) to neutralize specific receptors.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Elena P.", locKey: "ru", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "CyberKnife Prostate Treatment" },
    { name: "Kuralay S.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Stage-3 Breast Cancer Survivor" },
    { name: "Farrukh K.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Successful Bone Marrow Transplant" }
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
