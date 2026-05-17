import { SpecialityData } from "../types";

export const rheumaData: SpecialityData = {
  heroBadge: "Rheumatology & Immunology",
  icon: "/images/sections/specialities/RheumatologyImmunology.svg",
  doctors: [
    {
      name: "Dr. Sonal Mehra",
      exp: "18+ Years",
      role: "Director & Head - Rheumatology & Clinical Immunology",
      hospital: "Jaypee Hospital, Noida",
      initials: "SM",
      gradient: "from-purple-500 to-indigo-600",
    }
  ],
  hospitals: [
    {
      name: "Jaypee Hospital",
      city: "Noida, Delhi NCR",
      accreditation: "NABH Accredited",
      desc: "Comprehensive diagnostic autoimmune profile matching, biological infusion therapies, and rehabilitation.",
    }
  ],
  procedures: [
    "Biological Infusion Therapy",
    "Intra-articular Joint Injections",
    "Immunosuppressive Drug Management",
    "Autoimmune Profile Screening",
    "Plasmaseparation (Plasmapheresis)"
  ],
  costs: [
    { name: "Biological Infusion (per session)", val: "$800 – $1,200 USD", usaVal: "$4,500+" },
    { name: "Autoimmune Diagnostic Panel", val: "$250 – $400 USD", usaVal: "$1,800+" }
  ],
  translations: {
    en: {
      hero_title: "Rheumatology & Clinical Immunology in India",
      hero_desc: "Access specialized care for complex autoimmune and musculoskeletal diseases. Get advanced biological therapies and targeted immunotherapies under leading JCI-partner rheumatologists.",
      discover_banner: "Connect with World-Class Autoimmune and Joint Treatment Specialists in India",
      conditions_title: "Key Autoimmune Conditions Treated",
      techniques_title: "Targeted Biologicals & Immunomodulators",
      techniques_desc: "Arresting aggressive joint damage and systemic inflammation through advanced targeted biological drugs and clinical infusions.",
      costs_title: "Affordable & Premium Rheumatology Care",
      costs_desc: "Receive world-class diagnostic profiling and specialized clinical therapies at up to 75% savings.",
      why_choose_title: "Why Choose Our Rheumatology Care?",
      doctors_sec_title: "Our Rheumatologists",
      hospitals_sec_title: "Top Network Rheumatology Centers",
      stories_sec_title: "Recovery Success Stories",
      procedures_sec_title: "All Rheumatology & Immunology Procedures",
      faqs_sec_title: "Rheumatology FAQ",
    },
    ru: {
      hero_title: "Ревматология и клиническая иммунология в Индии",
      hero_desc: "Получите специализированную помощь при сложных аутоиммунных и костно-мышечных заболеваниях. Передовые методы биологической терапии.",
      discover_banner: "Свяжитесь со специалистами по лечению аутоиммунных заболеваний суставов в Индии",
      conditions_title: "Основные лечимые аутоиммунные заболевания",
      techniques_title: "Таргетные биологические препараты",
      techniques_desc: "Остановка разрушения суставов и системного воспаления с помощью передовых биологических инфузий.",
      costs_title: "Доступная ревматологическая помощь",
      costs_desc: "Пройдите высокоточную диагностику и специализированную иммунотерапию со сбережением бюджета до 75%.",
      why_choose_title: "Почему выбирают наше ревматологическое лечение?",
      doctors_sec_title: "Наши ревматологи",
      hospitals_sec_title: "Лучшие ревматологические центры сети",
      stories_sec_title: "Истории возвращения к активной жизни",
      procedures_sec_title: "Все проводимые ревматологические процедуры",
      faqs_sec_title: "Часто задаваемые вопросы по ревматологии",
    },
    uz: {
      hero_title: "Hindistonda Revmatologiya va Klinik Immunologiya",
      hero_desc: "Murakkab autoimmun va tayanch-harakat tizimi kasalliklarini davolash bo'yicha ixtisoslashtirilgan yordam. Zamonaviy biologik va immunoterapiya xizmatlari.",
      discover_banner: "Hindistonning eng yaxshi autoimmun va bo'g'im kasalliklari shifokorlari bilan bog'laning",
      conditions_title: "Davolanadigan asosiy autoimmun kasalliklar",
      techniques_title: "Hujayra Darajasidagi Biologik Terapiya",
      techniques_desc: "Eng so'nggi maqsadli biologik dorilar va infuziyalar yordamida bo'g'imlar yemirilishi va yallig'lanishini to'xtatish.",
      costs_title: "Hamyonbop va sifatli revmatologiya yordami",
      costs_desc: "Amerika shifoxonalariga qaraganda 75% gacha arzon narxlarda yetakchi revmatologiya va diagnostika xizmatlaridan foydalaning.",
      why_choose_title: "Nima uchun bizning revmatologik yordamimiz tanlanadi?",
      doctors_sec_title: "Bizning revmatolog shifokorlarimiz",
      hospitals_sec_title: "Eng yaxshi revmatologiya klinikalarimiz",
      stories_sec_title: "Bemorlarimiz muvaffaqiyat hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha revmatologik muolajalar",
      faqs_sec_title: "Revmatologiya bo'yicha savollar",
    },
    kk: {
      hero_title: "Үндістандағы ревматология және клиникалық иммунология",
      hero_desc: "Күрделі аутоиммундық және буын ауруларын сәтті емдеу. Озық биологиялық терапиялар және білікті ревматолог мамандардың көмегі.",
      discover_banner: "Үндістанның озық аутоиммундық және буын емдеу мамандарымен байланысыңыз",
      conditions_title: "Емделетін негізгі аутоиммундық аурулар",
      techniques_title: "Мақсатты биологиялық терапиялар мен инфузиялар",
      techniques_desc: "Озық мақсатты биологиялық препараттардың көмегімен буындардың бұзылуын және жүйелі қабынуды сәтті тоқтату емдері.",
      costs_title: "Ревматологияны тиімді әрі сапалы емдеу",
      costs_desc: "Күрделі аутоиммундық диагностика мен биологиялық терапияларды батыс елдерінен 75%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен ревматологияда біздің желіні таңдайды?",
      doctors_sec_title: "Біздің ревматолог мамандарымыз",
      hospitals_sec_title: "Үздік ревматологиялық орталықтар",
      stories_sec_title: "Буын ауруларынан сәтті айығу оқиғалары",
      procedures_sec_title: "Барлық ревматологиялық емдер",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Rheumatoid Arthritis", desc: "Chronic inflammatory joint auto-attack causing painful swelling and bone erosion.", iconName: "Activity" },
    { title: "Systemic Lupus (SLE)", desc: "Autoimmune disease attacking healthy organs, skin, and vascular systems.", iconName: "Heart" },
    { title: "Ankylosing Spondylitis", desc: "Inflammatory spine fusion disease heavily reducing spine flexibility.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Monoclonal Antibody biologicals", desc: "Injecting targeted agents (e.g. anti-TNF) to chemically block joint inflammatory proteins.", iconName: "Cpu" },
    { title: "Intra-articular Ultrasound", desc: "Performing high-accuracy joint fluid drains and biological drug injections.", iconName: "ScanFace" },
    { title: "Therapeutic Plasmapheresis", desc: "Filtering dangerous circulating immune complexes and autoantibodies directly from the plasma.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Kuralay S.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "SLE Remission Success" },
    { name: "David M.", locKey: "ru", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Ankylosing Spondylitis Management" }
  ],
  faqItems: [
    {
      question: "What are biological therapies and are they better than standard pills?",
      answer: "Biologicals are genetically engineered proteins that target specific parts of the immune system causing joint inflammation. They provide superior protection for patients who do not respond to traditional tablets."
    },
    {
      question: "Are autoimmune diagnosis tests fast in India?",
      answer: "Yes, our network clinics feature advanced laboratory screening suites providing complete diagnostic autoimmune screens within 2-3 days."
    }
  ]
};
