import { SpecialityData } from "../types";

export const respiratoryData: SpecialityData = {
  heroBadge: "Respiratory Medicine",
  icon: "/images/sections/specialities/RespiratoryMedicine.svg",
  doctors: [
    {
      name: "Dr. Ashok Rajput",
      exp: "30+ Years",
      role: "Senior Consultant - Pulmonology & Sleep Medicine",
      hospital: "Venkateshwar Hospital, New Delhi",
      initials: "AR",
      gradient: "from-sky-600 to-indigo-700",
    }
  ],
  hospitals: [
    {
      name: "Venkateshwar Hospital",
      city: "Dwarka, New Delhi",
      accreditation: "NABH Accredited",
      desc: "Advanced diagnostic bronchoscopy suites, state-of-the-art sleep studies (polysomnography) and interstitial lung disease (ILD) clinics.",
    }
  ],
  procedures: [
    "Diagnostic & Therapeutic Bronchoscopy",
    "Endobronchial Ultrasound (EBUS)",
    "Polysomnography (Sleep Study)",
    "Pulmonary Function Testing (PFT)",
    "Non-Invasive Ventilation (NIV) Management"
  ],
  costs: [
    { name: "EBUS (Bronchoscopy Staging)", val: "$800 – $1,200 USD", usaVal: "$6,500+" },
    { name: "Polysomnography (Sleep Study)", val: "$250 – $400 USD", usaVal: "$2,800+" }
  ],
  translations: {
    en: {
      hero_title: "Respiratory & Sleep Medicine in India",
      hero_desc: "Access premier clinical care for complex lung disorders, severe asthma, interstitial lung disease, and sleep apnea. Get advanced Endobronchial Ultrasound (EBUS) diagnostics.",
      discover_banner: "Connect with World-Class Pulmonologists and Certified Sleep Laboratories in India",
      conditions_title: "Key Pulmonary & Sleep Issues Treated",
      techniques_title: "EBUS Diagnostics & Sleep Apnea Labs",
      techniques_desc: "Employing advanced endobronchial ultrasound to safely biopsy lymph nodes without incisions, and running state-of-the-art overnight sleep studies.",
      costs_title: "Affordable & Premium Respiratory Care",
      costs_desc: "Receive leading interstitial lung disease care and advanced diagnostic staging at up to 75% savings.",
      why_choose_title: "Why Choose Our Respiratory Care?",
      doctors_sec_title: "Our Pulmonologists",
      hospitals_sec_title: "Top Network Pulmonary Centers",
      stories_sec_title: "Lungs Health Recovery Stories",
      procedures_sec_title: "All Pulmonology & Sleep Care Procedures",
      faqs_sec_title: "Respiratory Care FAQ",
    },
    ru: {
      hero_title: "Пульмонология и сомнология в Индии",
      hero_desc: "Пройдите лечение сложных заболеваний легких, астмы, фиброза и апноэ во сне. Современная диагностика EBUS (эндобронхиальный ультразвук).",
      discover_banner: "Свяжитесь с ведущими пульмонологами и лабораториями сна в Индии",
      conditions_title: "Основные лечимые заболевания легких и сна",
      techniques_title: "Диагностика EBUS и лаборатории лечения апноэ",
      techniques_desc: "Использование эндобронхиального ультразвука для безопасной биопсии лимфоузлов без разрезов и проведение ночных исследований сна.",
      costs_title: "Доступная пульмонологическая помощь",
      costs_desc: "Пройдите обследование легких и терапию фиброза ILD со сбережением бюджета до 75%.",
      why_choose_title: "Почему выбирают нашу пульмонологическую помощь?",
      doctors_sec_title: "Наши пульмонологи",
      hospitals_sec_title: "Лучшие пульмонологические клиники сети",
      stories_sec_title: "Истории восстановления легкого дыхания",
      procedures_sec_title: "Все виды легочных процедур и исследований",
      faqs_sec_title: "Часто задаваемые вопросы по пульмонологии",
    },
    uz: {
      hero_title: "Hindistonda Pulmonologiya va Somnologiya",
      hero_desc: "Murakkab o'pka kasalliklari, og'ir astma, o'pka fibrozi va uyqu apnoesini davolash. Eng so'nggi endobronxial ultratovush (EBUS) diagnostikasi.",
      discover_banner: "Hindistonning eng yaxshi pulmonologlari va zamonaviy uyqu laboratoriyalari bilan bog'laning",
      conditions_title: "Davolanadigan asosiy o'pka va uyqu kasalliklari",
      techniques_title: "EBUS Diagnostikasi & Uyqu Apnoe Laboratoriyalari",
      techniques_desc: "Hech qanday kesmalarsiz limfa tugunlarini xavfsiz biopsiya qilish uchun ilg'or endobronxial ultratovush va tunda uyqu sifatini o'rganish.",
      costs_title: "Hamyonbop va yuqori sifatli o'pka yordami",
      costs_desc: "Amerika shifoxonalariga qaraganda 75% gacha arzon narxlarda o'pka fibrozini davolash va eng so'nggi diagnostika xizmatlaridan foydalaning.",
      why_choose_title: "Nima uchun bizning pulmonologik yordamimiz tanlanadi?",
      doctors_sec_title: "Bizning pulmonolog shifokorlarimiz",
      hospitals_sec_title: "Eng yaxshi pulmonologiya shifoxonalari",
      stories_sec_title: "Bemorlarimiz muvaffaqiyat hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha o'pka muolajalari",
      faqs_sec_title: "Pulmonologiya bo'yicha savollar",
    },
    kk: {
      hero_title: "Үндістандағы пульмонология және сомнология",
      hero_desc: "Күрделі өкпе ауруларын, демікпені, өкпе фиброзын және ұйқы апноэсін сәтті емдеу. EBUS (эндобронхиалды ультрадыбыс) озық диагностикалары.",
      discover_banner: "Үндістанның озық пульмонолог мамандарымен және ұйқы зертханаларымен байланысыңыз",
      conditions_title: "Емделетін негізгі өкпе және ұйқы аурулары",
      techniques_title: "EBUS диагностикалары және ұйқы апноэсін емдейтін зертханалар",
      techniques_desc: "Тілгісіз лимфа түйіндерін қауіпсіз биопсиялау үшін EBUS эндобронхиалды ультрадыбысын қолдану және түнгі ұйқы зерттеулері.",
      costs_title: "Пульмонологияны тиімді әрі сапалы емдеу",
      costs_desc: "Өкпе фиброзын емдеуді және күрделі EBUS диагностикаларын батыс елдерінен 75%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен өкпе ауруларында біздің желіні таңдайды?",
      doctors_sec_title: "Біздің пульмонолог мамандарымыз",
      hospitals_sec_title: "Үздік өкпе аурулары орталықтары",
      stories_sec_title: "Өкпесі сауығып, еркін демалған жандардың сәтті оқиғалары",
      procedures_sec_title: "Барлық өкпе ауруларының емдері",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Interstitial Lung Disease", desc: "Progressive scarring (fibrosis) of delicate deep lung tissue layers.", iconName: "Activity" },
    { title: "Obstructive Sleep Apnea", desc: "Chronic nocturnal airway collapse causing frequent breathing stops.", iconName: "Heart" },
    { title: "Severe Refractory Asthma", desc: "Aggressive chronic bronchial inflammation unresponsive to standard inhalers.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Endobronchial Ultrasound (EBUS)", desc: "Combining ultrasound and bronchoscopy to visually biopsy tumors surrounding the main airways.", iconName: "Cpu" },
    { title: "Polysomnographic Mapping", desc: "Tracking overnight brainwaves, heart rates, and chest air flows to diagnose complex sleep disorders.", iconName: "ScanFace" },
    { title: "Bronchial Thermoplasty", desc: "Delivering soft heat energy directly inside bronchial walls to reduce muscle thickness and calm severe asthma.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Robert H.", locKey: "ru", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Sleep Apnea Resolved" },
    { name: "Dilshod M.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Severe Asthma Calm Success" }
  ],
  faqItems: [
    {
      question: "Is EBUS safe and painful?",
      answer: "Endobronchial Ultrasound (EBUS) is performed under conscious sedation. It is completely safe, highly accurate, and patients experience minimal throat tickle and go home the same day."
    },
    {
      question: "What does an overnight sleep study involve?",
      answer: "Patients stay one night in a hotel-like room connected to light, painless sensors monitoring sleep stages, oxygen, and breathing cycles to check for blockages."
    }
  ]
};
