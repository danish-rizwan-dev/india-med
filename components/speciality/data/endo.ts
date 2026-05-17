import { SpecialityData } from "../types";

export const endoData: SpecialityData = {
  heroBadge: "Endocrinology & Diabetology",
  icon: "/images/sections/specialities/EndocrinologyDiabetology.svg",
  doctors: [
    {
      name: "Dr. Ambrish Mithal",
      exp: "35+ Years",
      role: "Chairman & Head - Endocrinology & Diabetes",
      hospital: "Max Super Speciality Hospital, Saket, New Delhi",
      initials: "AM",
      gradient: "from-amber-500 to-orange-600",
    }
  ],
  hospitals: [
    {
      name: "Max Super Speciality Hospital",
      city: "Saket, New Delhi",
      accreditation: "JCI & NABH Accredited",
      desc: "Advanced diagnostic hormone assays, diabetic foot clinics, metabolic syndrome management units.",
    }
  ],
  procedures: [
    "Continuous Glucose Monitoring (CGM)",
    "Insulin Pump Therapy Integration",
    "Thyroid Fine Needle Aspiration (FNAC)",
    "Metabolic & Weight Management",
    "Pituitary & Adrenal Care Panels"
  ],
  costs: [
    { name: "Continuous Glucose Monitor Hookup", val: "$300 – $500 USD", usaVal: "$2,200+" },
    { name: "Comprehensive Metabolic Panel", val: "$150 – $250 USD", usaVal: "$1,200+" }
  ],
  translations: {
    en: {
      hero_title: "Endocrinology & Diabetes Care in India",
      hero_desc: "Receive world-class management for hormonal, metabolic, and diabetic conditions. Access leading JCI-partner endocrinologists equipped with advanced continuous monitoring technologies.",
      discover_banner: "Connect with World-Class Endocrinologists and Metabolic Experts in India",
      conditions_title: "Key Hormonal & Metabolic Issues Treated",
      techniques_title: "Continuous Monitoring & Insulin Pumps",
      techniques_desc: "Utilizing advanced continuous sensor arrays and automated micro-dose insulin pumps to achieve perfect glycemic targets.",
      costs_title: "Affordable & Premium Endocrinology",
      costs_desc: "Get state-of-the-art diagnostic screens and hormone regulation profiles with up to 75% savings.",
      why_choose_title: "Why Choose Our Endocrinology Care?",
      doctors_sec_title: "Our Endocrinologists",
      hospitals_sec_title: "Top Network Metabolic Centers",
      stories_sec_title: "Patient Recovery Success Stories",
      procedures_sec_title: "All Endocrinology & Diabetes Procedures",
      faqs_sec_title: "Endocrinology FAQ",
    },
    ru: {
      hero_title: "Эндокринология и диабетология в Индии",
      hero_desc: "Пройдите лечение гормональных нарушений, метаболического синдрома и диабета у лучших специалистов Индии с использованием передовых сенсорных систем мониторинга.",
      discover_banner: "Свяжитесь с ведущими эндокринологами и центрами метаболического здоровья в Индии",
      conditions_title: "Основные лечимые эндокринные нарушения",
      techniques_title: "Непрерывный мониторинг и инсулиновые помпы",
      techniques_desc: "Использование интеллектуальных сенсоров глюкозы и автоматических помп для точной регулировки сахара.",
      costs_title: "Доступная эндокринологическая помощь",
      costs_desc: "Пройдите высокоточную диагностику уровня гормонов и метаболическую терапию со сбережением бюджета до 75%.",
      why_choose_title: "Почему выбирают нашу эндокринологическую помощь?",
      doctors_sec_title: "Наши эндокринологи",
      hospitals_sec_title: "Лучшие эндокринологические центры сети",
      stories_sec_title: "Истории возвращения к здоровому балансу",
      procedures_sec_title: "Все виды эндокринных процедур",
      faqs_sec_title: "Часто задаваемые вопросы по эндокринологии",
    },
    uz: {
      hero_title: "Hindistonda Endokrinologiya va Diabetologiya",
      hero_desc: "Gormonal buzilishlar, metabolik sindrom va diabetni davolash bo'yicha eng ilg'or xizmatlar. Eng so'nggi uzluksiz glyukoza monitoringi va insulin pompalari.",
      discover_banner: "Hindistonning eng tajribali endokrinologlari va diabet mutaxassislari bilan bog'laning",
      conditions_title: "Davolanadigan asosiy gormonal kasalliklar",
      techniques_title: "Uzluksiz Monitoring & Insulin Nasoslari",
      techniques_desc: "Aqlli glyukoza datchiklari va avtomatlashtirilgan mikro-dozali insulin nasoslari yordamida qon shakarini ideal darajada saqlash.",
      costs_title: "Hamyonbop va sifatli endokrinologik yordam",
      costs_desc: "Amerika shifoxonalariga qaraganda 75% gacha arzon narxlarda yetakchi gormonal tahlillar va metabolizm diagnostikasidan foydalaning.",
      why_choose_title: "Nima uchun bizning endokrinologik yordamimiz tanlanadi?",
      doctors_sec_title: "Bizning endokrinolog shifokorlarimiz",
      hospitals_sec_title: "Eng yaxshi endokrinologiya shifoxonalari",
      stories_sec_title: "Bemorlarimiz muvaffaqiyat hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha endokrinologik muolajalar",
      faqs_sec_title: "Endokrinologiya bo'yicha savollar",
    },
    kk: {
      hero_title: "Үндістандағы эндокринология және диабетология",
      hero_desc: "Гормондық бұзылуларды, метаболизмдік синдромды және сусамырды (диабетті) сәтті емдеу. Озық үздіксіз қант деңгейін өлшеу жүйелері.",
      discover_banner: "Үндістанның білікті эндокринолог мамандарымен және орталықтарымен байланысыңыз",
      conditions_title: "Емделетін негізгі эндокриндік аурулар",
      techniques_title: "Үздіксіз мониторинг және автоматты инсулин помпалары",
      techniques_desc: "Озық сенсорлар мен интеллектуалды инсулин помпаларының көмегімен қандағы қант мөлшерін сәтті қалыпқа келтіру емдері.",
      costs_title: "Эндокринологияны тиімді әрі сапалы емдеу",
      costs_desc: "Күрделі гормондық тексерулер мен метаболизмдік терапияларды батыс елдерінен 75%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен эндокринологияда біздің желіні таңдайды?",
      doctors_sec_title: "Біздің эндокринолог мамандарымыз",
      hospitals_sec_title: "Үздік эндокринологиялық орталықтар",
      stories_sec_title: "Гормондық теңгерімі сауыққан жандардың сәтті оқиғалары",
      procedures_sec_title: "Барлық эндокриндік емдер",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Diabetes Mellitus", desc: "Type 1 and Type 2 insulin deficiencies causing high vascular sugars.", iconName: "Activity" },
    { title: "Thyroid Disorders", desc: "Hypothyroidism, hyperthyroidism, and suspicious nodules.", iconName: "Heart" },
    { title: "Metabolic Syndrome", desc: "Co-occurring endocrine weight issues, fatty liver, and pre-diabetes.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Sensor-Augmented Infusions", desc: "Coupling continuous glucose feeds to insulin pumps to automate delivery stops before lows occur.", iconName: "Cpu" },
    { title: "Fine Needle Aspiration (FNA)", desc: "Using high-resolution ultrasound guidance to biopsy microscopic thyroid nodules safely.", iconName: "ScanFace" },
    { title: "Targeted metabolic control", desc: "Customizing endocrine profiles using cellular insulin sensitizers.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Elena P.", locKey: "ru", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Diabetic Foot Ulcer Recovery" },
    { name: "Zukhra T.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Thyroid Goiter Management" }
  ],
  faqItems: [
    {
      question: "What is Continuous Glucose Monitoring (CGM)?",
      answer: "CGM is a painless sensor placed on the skin that automatically measures interstitial fluid sugars every 5 minutes, allowing you to see dynamic trends."
    },
    {
      question: "Are diabetic foot complications treatable without amputation?",
      answer: "Yes, our network clinics feature specialized diabetic foot clinics focusing on vascular re-opening and advanced hyperbaric oxygen wound therapies."
    }
  ]
};
