import { SpecialityData } from "../types";

export const neuroData: SpecialityData = {
  heroBadge: "Neuroscience",
  icon: "/images/sections/specialities/neuro.svg",
  doctors: [
    {
      name: "Dr. Sandeep Vaishya",
      exp: "33+ Years",
      role: "Executive Director - Neurosurgery",
      hospital: "Fortis Memorial Research Institute, Gurugram",
      initials: "SV",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "Dr. Aditya Gupta",
      exp: "25+ Years",
      role: "Chief - Neurosurgery & Cyberknife",
      hospital: "Artemis Hospital, Gurugram",
      initials: "AG",
      gradient: "from-indigo-600 to-violet-500",
    }
  ],
  hospitals: [
    {
      name: "Fortis Memorial Research Institute",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "Top neurosurgical hospital with advanced intraoperative MRI guidance units.",
    },
    {
      name: "Max Super Speciality Hospital",
      city: "Saket, New Delhi",
      accreditation: "NABH & JCI Accredited",
      desc: "Specialized stroke clinics and neuro-rehabilitation departments.",
    }
  ],
  procedures: [
    "Brain Tumor Surgery (Craniotomy)",
    "Deep Brain Stimulation (DBS)",
    "Spine Decompression Surgery",
    "Microdiscectomy",
    "CyberKnife for Brain Tumors",
    "Endovascular Stroke Treatments",
    "Pediatric Neurosurgery"
  ],
  costs: [
    { name: "Brain Tumor Resection (Craniotomy)", val: "$6,500 – $8,500 USD", usaVal: "$90,000+" },
    { name: "Deep Brain Stimulation (DBS)", val: "$22,000 – $26,000 USD", usaVal: "$140,000+" },
    { name: "Microdiscectomy", val: "$4,500 – $5,500 USD", usaVal: "$32,000+" },
    { name: "Spinal Decompression", val: "$5,000 – $6,500 USD", usaVal: "$48,000+" }
  ],
  translations: {
    en: {
      hero_title: "Neuroscience & Spine Care",
      hero_desc: "Receive state-of-the-art neurological treatments in India. Connect with senior neurosurgeons for brain tumor resections, deep brain stimulation (DBS) for Parkinson's, and microdiscectomy spine surgeries.",
      discover_banner: "Access State-of-the-Art Neuro-Navigation Infrastructure via India Med Services",
      conditions_title: "Key Neurological & Spine Conditions Managed",
      techniques_title: "Robotic Neuro-navigation & iMRI Suites",
      techniques_desc: "Equipped with intraoperative MRI and precision navigation systems to maximize tumor resections while protecting normal brain tissues.",
      costs_title: "Affordable & Premium Neurological Care",
      costs_desc: "Save up to 80% on highly critical neurosurgical procedures using top FDA-approved surgical gear.",
      why_choose_title: "Why Choose Our Neuro Care Network?",
      doctors_sec_title: "Our Neurosurgeons",
      hospitals_sec_title: "Top Network Neuroscience Centers",
      stories_sec_title: "Neurological Recovery Success Stories",
      procedures_sec_title: "All Neurological Procedures Supported",
      faqs_sec_title: "Neuroscience FAQ",
    },
    ru: {
      hero_title: "Неврология и нейрохирургия",
      hero_desc: "Получите современную нейрохирургическую помощь в Индии. Удаление опухолей головного мозга, глубокая стимуляция мозга (DBS) при болезни Паркинсона и операции на позвоночнике.",
      discover_banner: "Доступ к передовой нейронавигации в Индии с India Med Services",
      conditions_title: "Основные лечимые неврологические заболевания",
      techniques_title: "Роботизированная нейронавигация и интраоперационная МРТ",
      techniques_desc: "Использование интраоперационной МРТ для максимального удаления опухолей без повреждения здоровых тканей головного мозга.",
      costs_title: "Доступная и качественная нейрохирургическая помощь",
      costs_desc: "Снизьте затраты на сложные нейрохирургические процедуры до 80% с сохранением стандартов JCI.",
      why_choose_title: "Почему выбирают нашу нейрохирургическую помощь?",
      doctors_sec_title: "Наши нейрохирурги",
      hospitals_sec_title: "Лучшие нейрохирургические центры сети",
      stories_sec_title: "Истории восстановления нервной системы",
      procedures_sec_title: "Все проводимые нейрохирургические процедуры",
      faqs_sec_title: "Часто задаваемые вопросы по нейрохирургии",
    },
    uz: {
      hero_title: "Neyroxirurgiya va Umurtqa Kasalliklari",
      hero_desc: "Hindistonda eng yaxshi neyroxirurgik yordamdan foydalaning. Miyadagi o'smalarni olib tashlash, Parkinson kasalligida DBS operatsiyasi va umurtqa drayverlari bo'yicha eng yaxshi mutaxassislar.",
      discover_banner: "India Med Services yordamida eng so'nggi neyronavigatsiya markazlariga ulaning",
      conditions_title: "Davolanadigan asosiy nevrologik kasalliklar",
      techniques_title: "Robotlashtirilgan neyronavigatsiya va iMRT",
      techniques_desc: "Miya to'qimalariga zarar yetkazmasdan o'smalarni to'liq olib tashlash imkonini beradigan operatsiya ichidagi MRT tizimlari.",
      costs_title: "Hamyonbop va sifatli neyroxirurgik yordam",
      costs_desc: "G'arbiy davlatlar klinikalariga qaraganda 80% gacha arzon narxlarda yetakchi shifoxonalarda davolaning.",
      why_choose_title: "Nima uchun bizning neyro-tarmog'imiz tanlanadi?",
      doctors_sec_title: "Bizning neyroxirurglarimiz",
      hospitals_sec_title: "Etakchi neyroxirurgiya markazlari",
      stories_sec_title: "Neyrologik sog'ayish muvaffaqiyatlari",
      procedures_sec_title: "Biz taklif qiladigan barcha neyroxirurgik muolajalar",
      faqs_sec_title: "Neyroxirurgiya bo'yicha tez-tez so'raladigan savollar",
    },
    kk: {
      hero_title: "Нейрохирургия және Неврология",
      hero_desc: "Үндістандағы ең үздік нейрохирург-мамандардан озық ми және жұлын емдерін, Паркинсон ауруына арналған DBS оталарын сәтті жасатыңыз.",
      discover_banner: "India Med Services-пен бірге нейронавигацияның озық емдерін ашыңыз",
      conditions_title: "Негізгі емделетін нейрохирургиялық аурулар",
      techniques_title: "Роботты нейронавигация және интраоперациялық МРТ",
      techniques_desc: "Мидың сау жасушаларын толық сақтай отырып, ісіктерді 100% дәлдікпен алып тастауға мүмкіндік беретін заманауи МРТ әдістері.",
      costs_title: "Нейрохирургиядағы тиімді әрі сапалы емдеу",
      costs_desc: "Ми мен жұлынға жасалатын күрделі оталарды батыс елдерінен 80%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен нейрохирургияда біздің желіні таңдайды?",
      doctors_sec_title: "Біздің нейрохирург-мамандарымыз",
      hospitals_sec_title: "Үздік нейрохирургия орталықтары",
      stories_sec_title: "Нейрохирургиялық сәтті оқиғалар",
      procedures_sec_title: "Біз ұйымдастыратын барлық нейрохирургиялық емдер",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Brain Tumors", desc: "Atypical mass growths within the cerebral skull structure.", iconName: "Activity" },
    { title: "Spinal Compression", desc: "Nerve pathway pinch conditions restricting limb control.", iconName: "Heart" },
    { title: "Epilepsy & Tremors", desc: "Chronic electrical system dysfunction of neural grids.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Robotic Neuro-navigation", desc: "Routing deep cranial pathways using high-accuracy robotic assistance.", iconName: "Cpu" },
    { title: "Functional Brain Mapping", desc: "Tracing motor and speech centers under awake micro-stimulation tests.", iconName: "ScanFace" },
    { title: "Intraoperative MRI (iMRI)", desc: "Verifying complete tumor resection before closing the surgical site.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Marcus L.", locKey: "uk", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Robotic Brain Tumor Resection" },
    { name: "Dmitriy V.", locKey: "ru", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Deep Brain Stimulation (DBS)" },
    { name: "Madina O.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Minimally Invasive Spinal Surgery" }
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
