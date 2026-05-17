import { SpecialityData } from "../types";

export const orthoData: SpecialityData = {
  heroBadge: "Orthopedics & Spine",
  icon: "/images/sections/specialities/ortho.svg",
  doctors: [
    {
      name: "Dr. IPS Oberoi",
      exp: "28+ Years",
      role: "Chairman - Orthopedics & Joint Replacement",
      hospital: "Artemis Hospital, Gurugram",
      initials: "IO",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Dr. Harshavardhan Hegde",
      exp: "30+ Years",
      role: "Senior Consultant - Spine Surgery",
      hospital: "Max Hospital, Saket",
      initials: "HH",
      gradient: "from-blue-600 to-cyan-500",
    }
  ],
  hospitals: [
    {
      name: "Artemis Hospital",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "State-of-the-art center for navigation-guided joint replacement surgeries.",
    },
    {
      name: "Medanta - The Medicity",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "World-class institute for bone, joint, and complex spine reconstruction.",
    }
  ],
  procedures: [
    "Total Knee Replacement (TKR)",
    "Total Hip Replacement (THR)",
    "Robotic Joint Replacement",
    "Spinal Fusion Surgery",
    "Herniated Disc Surgery",
    "Arthroscopic Shoulder Surgery",
    "ACL Reconstruction",
    "Pediatric Orthopedics Surgery"
  ],
  costs: [
    { name: "Total Knee Replacement", val: "$4,000 – $6,000 USD", usaVal: "$35,000+" },
    { name: "Total Hip Replacement", val: "$4,500 – $6,500 USD", usaVal: "$40,000+" },
    { name: "Spine Fusion Surgery", val: "From $6,500 USD", usaVal: "$75,000+" },
    { name: "ACL Reconstruction", val: "$3,000 – $4,000 USD", usaVal: "$20,000+" }
  ],
  translations: {
    en: {
      hero_title: "Orthopedic & Spine Assistance",
      hero_desc: "Experience world-class bone and joint healthcare in India. Connect with orthopedic surgeons for robotic joint replacements, navigation-guided knee/hip procedures, and minimally invasive spine surgeries.",
      discover_banner: "Reclaim Pain-Free Mobility With India Med Services Joint Care Programs",
      conditions_title: "Key Orthopedic Issues Treated",
      techniques_title: "Robotic Joint Replacement & Navigation Systems",
      techniques_desc: "Accredited orthopedic theaters offering computer-assisted navigation and robotics for high durability and perfect alignment.",
      costs_title: "Affordable Knee, Hip & Spine Reconstruction",
      costs_desc: "Save up to 75% on orthopedic procedures using premium FDA-approved implants and rapid rehabilitation care.",
      why_choose_title: "Why Choose Our Orthopedics Support?",
      doctors_sec_title: "Our Orthopedic Surgeons",
      hospitals_sec_title: "Partner Orthopedic Centers",
      stories_sec_title: "Orthopedic Recovery Success",
      procedures_sec_title: "All Bone & Joint Procedures Supported",
      faqs_sec_title: "Orthopedics FAQ",
    },
    ru: {
      hero_title: "Ортопедия и хирургия позвоночника",
      hero_desc: "Верните безболезненную подвижность суставов с помощью роботизированного эндопротезирования, малоинвазивных операций на позвоночнике и спортивной медицины в Индии.",
      discover_banner: "Восстановите подвижность суставов с программами India Med Services",
      conditions_title: "Основные лечимые ортопедические заболевания",
      techniques_title: "Роботизированное эндопротезирование суставов",
      techniques_desc: "Ортопедические операционные залы, оснащенные компьютерной навигацией для точного выравнивания сустава.",
      costs_title: "Доступная реконструкция коленей, тазобедренных суставов и позвоночника",
      costs_desc: "Экономьте до 75% на ортопедии с имплантатами, сертифицированными FDA, и быстрой реабилитацией.",
      why_choose_title: "Почему выбирают нашу ортопедическую поддержку?",
      doctors_sec_title: "Наши хирурги-ортопеды",
      hospitals_sec_title: "Клиники-партнеры по ортопедии",
      stories_sec_title: "Успешные истории восстановления",
      procedures_sec_title: "Все виды ортопедических процедур",
      faqs_sec_title: "Часто задаваемые вопросы по ортопедии",
    },
    uz: {
      hero_title: "Ortopediya va umurtqa pog'onasi",
      hero_desc: "Hindistonda og'riqsiz harakatlanish erkinligini tiklang. Robotlashtirilgan bo'g'imlarni almashtirish va umurtqa pog'onasi operatsiyalari uchun eng yaxshi shifokorlar bilan bog'laning.",
      discover_banner: "India Med Services bilan og'riqsiz harakatlanishni tiklang",
      conditions_title: "Davolanadigan asosiy tayanch-harakat muammolari",
      techniques_title: "Robotlashtirilgan bo'g'imlarni almashtirish",
      techniques_desc: "Mukammal tekislash va yuqori chidamlilik uchun kompyuter yordamida harakatlanadigan navigatsiya texnologiyalari.",
      costs_title: "Hamyonbop tizza, chanoq va umurtqa rekonstruktsiyasi",
      costs_desc: "FDA tomonidan tasdiqlangan implantlar va tezkor reabilitatsiya yordamida 75% gacha mablag'ni tejang.",
      why_choose_title: "Nima uchun bizning ortopedik yordamimiz tanlanadi?",
      doctors_sec_title: "Bizning ortopedik jarrohlarimiz",
      hospitals_sec_title: "Hamkor ortopediya markazlari",
      stories_sec_title: "Harakatlanishni tiklash muvaffaqiyatlari",
      procedures_sec_title: "Biz taklif qiladigan barcha bo'g'im muolajalari",
      faqs_sec_title: "Ortopediya bo'yicha savollar",
    },
    kk: {
      hero_title: "Ортопедия және омыртқа хирургиясы",
      hero_desc: "Үндістанда буын мен сүйек денсаулығын қалпына келтіріңіз. Роботты буын ауыстыру оталары мен омыртқа хирургиясының білікті мамандарына жүгініңіз.",
      discover_banner: "India Med Services буын оңалту бағдарламаларымен ауырсынусыз өмірге оралыңыз",
      conditions_title: "Негізгі емделетін ортопедиялық аурулар",
      techniques_title: "Буынды роботтандырылған ауыстыру жүйелері",
      techniques_desc: "Ең жоғары дәлдік пен жылдам жазылуды қамтамасыз ететін заманауи компьютерлік навигация әдістері.",
      costs_title: "Омыртқа мен буындарды қолжетімді бағамен қалпына келтіру",
      costs_desc: "АҚШ-пен салыстырғанда сапалы FDA-мақұлданған импланттардың көмегімен 75%-ға дейін үнемдеңіз.",
      why_choose_title: "Неліктен біздің ортопедиялық қолдауды таңдайды?",
      doctors_sec_title: "Біздің ортопед-хирургтарымыз",
      hospitals_sec_title: "Серіктес ортопедиялық орталықтар",
      stories_sec_title: "Сәтті қалпына келтіру оқиғалары",
      procedures_sec_title: "Омыртқа мен буынға жасалатын барлық оталар",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Arthritis", desc: "Degenerative joint disease limiting daily activities.", iconName: "Activity" },
    { title: "Spinal Issues", desc: "Herniated discs, stenosis, or spinal instabilities.", iconName: "Heart" },
    { title: "Ligament Tears", desc: "Joint instabilities, ACL, or meniscus ruptures.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Computer-Navigated Joint Replacement", desc: "Aligning prosthetic knee and hip joints perfectly using optical tracking.", iconName: "Cpu" },
    { title: "3D Joint Mapping", desc: "Reconstructing pre-wear skeletal configurations for custom-fit implants.", iconName: "ScanFace" },
    { title: "Minimally Invasive Decompressions", desc: "Accessing spine channels through micro-ports to minimize muscle trauma.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "John D.", locKey: "ca", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Robotic Knee Replacement Success" },
    { name: "Aigerim T.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Minimally Invasive Spine Fusion" },
    { name: "Jasur B.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Arthroscopic Shoulder Recovery" }
  ],
  faqItems: [
    {
      question: "How long does a robotic knee replacement last?",
      answer: "Robotic joint replacements using premium FDA-approved materials have an expected lifespan of 20 to 25 years due to sub-millimeter placement accuracy."
    },
    {
      question: "When can I walk after joint replacement surgery?",
      answer: "Most patients stand and take their first assisted steps within 24 hours of surgery under our rapid rehabilitation protocols."
    },
    {
      question: "What support is provided for physical therapy?",
      answer: "We include dedicated in-hospital physical therapy sessions and provide detailed home-exercise guides for post-operative recovery."
    }
  ]
};
