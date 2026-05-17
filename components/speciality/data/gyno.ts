import { SpecialityData } from "../types";

export const gynoData: SpecialityData = {
  heroBadge: "Obstetrics & Gynecology",
  icon: "/images/sections/specialities/gyno.svg",
  doctors: [
    {
      name: "Dr. Sabhyata Gupta",
      exp: "28+ Years",
      role: "Chairperson - Gynecology & Robotics",
      hospital: "Medanta - The Medicity, Gurugram",
      initials: "SG",
      gradient: "from-fuchsia-500 to-pink-600",
    }
  ],
  hospitals: [
    {
      name: "Medanta - The Medicity",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "Advanced robotic gynecological oncology surgeries and high-risk maternity units.",
    }
  ],
  procedures: [
    "Robotic Gynecological Surgery",
    "Laparoscopic Hysterectomy",
    "Fibroid Removal (Myomectomy)",
    "High-Risk Pregnancy Management",
    "Ovarian Cystectomy Surgery"
  ],
  costs: [
    { name: "Laparoscopic Hysterectomy", val: "$3,500 – $4,500 USD", usaVal: "$22,000+" },
    { name: "Myomectomy (Fibroid Removal)", val: "$3,200 – $4,200 USD", usaVal: "$18,000+" }
  ],
  translations: {
    en: {
      hero_title: "Obstetrics & Gynecology Services",
      hero_desc: "Receive world-class women's health treatments in India. Connect with expert gynecologists for robotic myomectomies, advanced laparoscopic hysterectomies, and high-risk maternity care.",
      discover_banner: "Access State-of-the-Art Women's Health Infrastructure via India Med Services",
      conditions_title: "Key Women's Health Issues Treated",
      techniques_title: "Robotic & Minimally Invasive Myomectomies",
      techniques_desc: "Preserving fertility through advanced robotic surgical precision and fast-healing micro-incisions.",
      costs_title: "Affordable & Premium Gynecological Care",
      costs_desc: "Receive leading robotic maternity and gynecological oncology services at up to 75% savings.",
      why_choose_title: "Why Choose Our Gynecology Care?",
      doctors_sec_title: "Our Gynecologists",
      hospitals_sec_title: "Top Network Gyno Centers",
      stories_sec_title: "Gynecology Success Stories",
      procedures_sec_title: "All Women's Health Care Procedures",
      faqs_sec_title: "Gynecology FAQ",
    },
    ru: {
      hero_title: "Акушерство и гинекология",
      hero_desc: "Получите гинекологическую помощь мирового уровня в Индии. Роботизированные миомэктомии, лапароскопические операции и ведение беременности высокого риска.",
      discover_banner: "Высококлассное женское здоровье в Индии с India Med Services",
      conditions_title: "Основные лечимые гинекологические заболевания",
      techniques_title: "Малоинвазивные роботизированные операции",
      techniques_desc: "Сохранение фертильности с помощью точности робота DaVinci и быстрого заживления проколов.",
      costs_title: "Доступная и качественная гинекологическая помощь",
      costs_desc: "Снизьте затраты на роботизированную миомэктомию и онкогинекологию до 75% с сохранением стандартов JCI.",
      why_choose_title: "Почему выбирают нашу гинекологическую помощь?",
      doctors_sec_title: "Наши гинекологи",
      hospitals_sec_title: "Лучшие женские клиники сети",
      stories_sec_title: "Истории успешного выздоровления женщин",
      procedures_sec_title: "Все проводимые гинекологические процедуры",
      faqs_sec_title: "Часто задаваемые вопросы по гинекологии",
    },
    uz: {
      hero_title: "Akusherlik va Ginekologiya",
      hero_desc: "Hindistonda ayollar salomatligi bo'yiga jahon darajasidagi xizmatlardan foydalaning. Murakkab miomalar va robotlashtirilgan ginekologik jarrohlik bo'yicha eng yaxshi mutaxassislar.",
      discover_banner: "India Med Services yordamida ayollar salomatligini saqlash tizimlariga ulaning",
      conditions_title: "Davolanadigan asosiy ginekologik kasalliklar",
      techniques_title: "Robotlashtirilgan Ginekologik Operatsiyalar",
      techniques_desc: "Fertillikni saqlashga yordam beradigan eng so'nggi DaVinci robot tizimi va minimal kesmalar yordamida davolash.",
      costs_title: "Hamyonbop va sifatli ginekologik parvarish",
      costs_desc: "Amerika shifoxonalariga qaraganda 75% gacha arzon narxlarda yetakchi robotlashtirilgan ginekologiya yordamidan foydalaning.",
      why_choose_title: "Nima uchun bizning ginekologik yordamimiz tanlanadi?",
      doctors_sec_title: "Bizning ginekolog mutaxassislarimiz",
      hospitals_sec_title: "Eng yaxshi ayollar salomatligi shifoxonalari",
      stories_sec_title: "Bemorlarimiz muvaffaqiyat hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha ginekologik muolajalar",
      faqs_sec_title: "Ginekologiya bo'yicha savollar",
    },
    kk: {
      hero_title: "Акушерлік және гинекология",
      hero_desc: "Үндістандағы ең үздік гинеколог-мамандардан озық гинекологиялық емдерді, лапароскопиялық және роботты миома алып тастау оталарын сәтті жасатыңыз.",
      discover_banner: "India Med Services-пен бірге әйелдер денсаулығын сақтаудың озық емдерін ашыңыз",
      conditions_title: "Әйелдер денсаулығының негізгі емделетін аурулары",
      techniques_title: "Роботты және аз инвазивті гинекологиялық оталар",
      techniques_desc: "DaVinci robotты хирургиясының көмегімен әйелдердің бала сүю мүмкіндігін толық сақтай отырып жасалатын дәл оталар.",
      costs_title: "Әйелдер денсаулығын тиімді әрі сапалы емдеу",
      costs_desc: "Роботизацияланған гинекологиялық және онкогинекологиялық оталарды батыс елдерінен 75%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен гинекологияда біздің желіні таңдайды?",
      doctors_sec_title: "Біздің гинеколог-мамандарымыз",
      hospitals_sec_title: "Үздік әйелдер денсаулығы орталықтары",
      stories_sec_title: "Әйелдер денсаулығының сәтті оқиғалары",
      procedures_sec_title: "Әйелдер денсаулығын сақтауға арналған барлық емдер",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Fibroids & Polyps", desc: "Benign uterine growths causing severe pain and bleeding.", iconName: "Activity" },
    { title: "Endometriosis", desc: "Uterine-like tissue growing outside the womb structure.", iconName: "Heart" },
    { title: "Ovarian Cysts", desc: "Fluid-filled sacs on ovaries affecting hormone balances.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Robotic Fertility Preservation", desc: "Removing fibroids and cysts while meticulously conserving reproductive tissue.", iconName: "Cpu" },
    { title: "3D Pelvic Reconstructions", desc: "Visualizing complex anatomy to plan urogynecological and oncology surgeries.", iconName: "ScanFace" },
    { title: "Single-Port Laparoscopy", desc: "Accessing the abdominal cavity through a single hidden umbilical entry point.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Anna S.", locKey: "ru", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Robotic Myomectomy Success" },
    { name: "Gaukhar Y.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "High-Risk Pregnancy Delivery" },
    { name: "Zukhra T.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Laparoscopic Hysterectomy Care" }
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
