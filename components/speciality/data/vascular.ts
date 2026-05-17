import { SpecialityData } from "../types";

export const vascularData: SpecialityData = {
  heroBadge: "Vascular Surgery",
  icon: "/images/sections/specialities/PeripheralVascularandEndovascularSciences.svg",
  doctors: [
    {
      name: "Dr. Rajiv Parakh",
      exp: "35+ Years",
      role: "Chairman - Peripheral Vascular & Endovascular Sciences",
      hospital: "Medanta - The Medicity, Gurugram",
      initials: "RP",
      gradient: "from-red-500 to-rose-700",
    }
  ],
  hospitals: [
    {
      name: "Medanta - The Medicity",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "Advanced hybrid operating theaters, laser vein resections, endovascular aneurysm repair units.",
    }
  ],
  procedures: [
    "Endovascular Aneurysm Repair (EVAR)",
    "Carotid Endarterectomy",
    "Laser Varicose Veins Ablation (EVLT)",
    "Femoral-Popliteal Bypass Surgery",
    "Angioplasty & Vascular Stenting"
  ],
  costs: [
    { name: "EVLT (Laser Varicose Veins)", val: "$2,200 – $3,200 USD", usaVal: "$14,000+" },
    { name: "Carotid Endarterectomy", val: "$5,500 – $7,200 USD", usaVal: "$34,000+" }
  ],
  translations: {
    en: {
      hero_title: "Vascular & Endovascular Sciences in India",
      hero_desc: "Receive world-class treatment for complex arterial and venous conditions. Access advanced minimally invasive vascular stenting, aneurysm repairs, and endovenous laser vein treatments.",
      discover_banner: "Access State-of-the-Art Hybrid Operating Theaters and Top Vascular Surgeons in India",
      conditions_title: "Key Vascular Conditions Treated",
      techniques_title: "Hybrid Endovascular Interventions & EVLT",
      techniques_desc: "Combining open microsurgery and advanced catheter interventions inside high-tech hybrid operating suites for maximum precision.",
      costs_title: "Affordable & Premium Vascular Surgery",
      costs_desc: "Get leading laser varicose vein treatments and high-stakes arterial bypasses with up to 75% savings.",
      why_choose_title: "Why Choose Our Vascular Care?",
      doctors_sec_title: "Our Vascular Surgeons",
      hospitals_sec_title: "Top Network Vascular Centers",
      stories_sec_title: "Patient Recovery Success Stories",
      procedures_sec_title: "All Vascular & Endovascular Procedures",
      faqs_sec_title: "Vascular Surgery FAQ",
    },
    ru: {
      hero_title: "Сосудистая и эндоваскулярная хирургия в Индии",
      hero_desc: "Получите лечение сосудистых заболеваний мирового уровня. Малоинвазивное стентирование, лечение аневризм и лазерное удаление варикоза.",
      discover_banner: "Современные гибридные операционные и ведущие сосудистые хирурги Индии",
      conditions_title: "Основные лечимые заболевания сосудов",
      techniques_title: "Гибридные вмешательства и лазерное лечение EVLT",
      techniques_desc: "Сочетание открытой микрохирургии и катетерных вмешательств в высокотехнологичных операционных.",
      costs_title: "Доступная сосудистая хирургия",
      costs_desc: "Пройдите лазерное лечение варикоза и шунтирование сосудов по стандартам JCI со сбережением бюджета до 75%.",
      why_choose_title: "Почему выбирают нашу сосудистую хирургию?",
      doctors_sec_title: "Наши сосудистые хирурги",
      hospitals_sec_title: "Лучшие сосудистые клиники сети",
      stories_sec_title: "Истории восстановления сосудистого здоровья",
      procedures_sec_title: "Все проводимые сосудистые операции",
      faqs_sec_title: "Часто задаваемые вопросы по сосудистой хирургии",
    },
    uz: {
      hero_title: "Hindistonda Qon Tomir va Endovaskulyar Jarrohlik",
      hero_desc: "Arteriya va vena qon tomir kasalliklarini davolash bo'yicha eng so'nggi xizmatlar. Qon tomirlarini stenting qilish, anevrizmalarni lazer yordamida davolash.",
      discover_banner: "Hindistonning eng yaxshi qon tomir jarrohlari va gibrid operatsiya xonalariga ulaning",
      conditions_title: "Davolanadigan asosiy qon tomir kasalliklari",
      techniques_title: "Gibrid Endovaskulyar Muolajalar & Lazer Terapiyalari",
      techniques_desc: "Ochiq jarrohlik va ilg'or kateter muolajalarini birlashtirgan gibrid operatsiya xonalarida yuqori aniqlikda davolash.",
      costs_title: "Hamyonbop va sifatli qon tomir jarrohligi",
      costs_desc: "Amerika shifoxonalariga qaraganda 75% gacha arzon narxlarda eng so'nggi lazer muolajalari va arteriya bypass operatsiyalaridan foydalaning.",
      why_choose_title: "Nima uchun bizning qon tomir yordamimiz tanlanadi?",
      doctors_sec_title: "Bizning qon tomir jarrohlarimiz",
      hospitals_sec_title: "Eng yaxshi qon tomir tibbiyot markazlarimiz",
      stories_sec_title: "Bemorlarimiz muvaffaqiyat hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha qon tomir muolajalari",
      faqs_sec_title: "Qon tomir jarrohligi bo'yicha savollar",
    },
    kk: {
      hero_title: "Үндістандағы қантамырлық және эндоваскулярлық хирургия",
      hero_desc: "Күрделі қантамыр және көктамыр ауруларын сәтті емдеу. Озық стенттеу, аневризмаларды лазерлік емдеу және білікті қантамыр хирургтарының көмегі.",
      discover_banner: "Үндістандағы ең озық гибридті операциялық орталықтар мен қантамыр хирургтарымен байланысыңыз",
      conditions_title: "Емделетін негізгі қантамыр аурулары",
      techniques_title: "Гибридті эндоваскулярлық емдер және лазерлік оталар",
      techniques_desc: "Ашық микрохирургия мен катетерлік емдерді біріктіретін жоғары технологиялық гибридті операциялық бөлмелердегі емдер.",
      costs_title: "Қантамыр хирургиясын тиімді әрі сапалы емдеу",
      costs_desc: "Лазерлік варикозды емдеуді және күрделі шунттау оталарын батыс елдерінен 75%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен қантамыр хирургиясында бізді таңдайды?",
      doctors_sec_title: "Біздің қантамыр хирургтарымыз",
      hospitals_sec_title: "Үздік қантамыр орталықтары",
      stories_sec_title: "Қантамырлары сауыққан жандардың сәтті оқиғалары",
      procedures_sec_title: "Барлық қантамырлық оталар",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Abdominal Aortic Aneurysm", desc: "A dangerous enlargement of the aorta artery requiring structural repair.", iconName: "Activity" },
    { title: "Deep Vein Thrombosis", desc: "Venous blood clots obstructing leg blood circulation.", iconName: "Heart" },
    { title: "Varicose Veins", desc: "Twisted, swollen veins in legs causing chronic venous pain.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Endovenous Laser Vein Ablation", desc: "Using local laser heat energy inside blood vessels to collapse damaged veins.", iconName: "Cpu" },
    { title: "Carotid artery Stenting", desc: "Deploying high-precision mesh stents to safely prevent stroke events.", iconName: "ScanFace" },
    { title: "Hybrid bypass surgeries", desc: "Combining bypass graft placement and stenting inside single hybrid suites.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Elena P.", locKey: "ru", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Varicose Veins Laser Success" },
    { name: "Bekzod S.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Aorta Aneurysm Rescue" }
  ],
  faqItems: [
    {
      question: "What is a hybrid operating room and why is it important?",
      answer: "A hybrid suite is a state-of-the-art surgical operating room equipped with advanced medical imaging systems, allowing surgeons to seamlessly perform both open surgery and catheter-based stenting simultaneously."
    },
    {
      question: "Is laser treatment for varicose veins permanent?",
      answer: "Yes, Endovenous Laser Therapy (EVLT) permanently closes damaged varicose veins with success rates exceeding 95-98%."
    }
  ]
};
