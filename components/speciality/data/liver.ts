import { SpecialityData } from "../types";

export const liverData: SpecialityData = {
  heroBadge: "Liver Transplant",
  icon: "/images/sections/specialities/liver.svg",
  doctors: [
    {
      name: "Dr. Arvinder Singh Soin",
      exp: "34+ Years",
      role: "Chairman & Chief Surgeon - Liver Transplant",
      hospital: "Medanta - The Medicity, Gurugram",
      initials: "AS",
      gradient: "from-amber-600 to-orange-700",
    },
    {
      name: "Dr. Subhash Gupta",
      exp: "32+ Years",
      role: "Chairman - Max Centre for Liver & Biliary Sciences",
      hospital: "Max Hospital, Saket",
      initials: "SG",
      gradient: "from-orange-600 to-red-600",
    }
  ],
  hospitals: [
    {
      name: "Medanta - The Medicity",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "World's most active living donor liver transplant institute with over 4,000 successful transplants.",
    },
    {
      name: "Max Super Speciality Hospital",
      city: "Saket, New Delhi",
      accreditation: "NABH & JCI Accredited",
      desc: "Pioneer in pediatric and complex adult liver transplants with state-of-the-art HPB ICUs.",
    }
  ],
  procedures: [
    "Living Donor Liver Transplant (LDLT)",
    "Deceased Donor Liver Transplant (DDLT)",
    "Pediatric Liver Transplant",
    "Hepatocellular Carcinoma (HCC) Surgery",
    "Hepatectomy (Liver Resection)",
    "Treatment for Bile Duct Strictures",
    "Complex Hepato-Pancreato-Biliary (HPB) Surgery"
  ],
  costs: [
    { name: "Living Donor Liver Transplant", val: "$20,000 – $25,000 USD", usaVal: "$250,000+" },
    { name: "Pediatric Liver Transplant", val: "$18,000 – $22,000 USD", usaVal: "$180,000+" },
    { name: "Hepatectomy (Liver Resection)", val: "$6,500 – $8,500 USD", usaVal: "$45,000+" },
    { name: "Gallbladder Cancer Surgery", val: "$5,500 – $7,500 USD", usaVal: "$38,000+" }
  ],
  translations: {
    en: {
      hero_title: "Liver Transplant in India",
      hero_desc: "Connect with the world's most active living donor liver transplant teams. India offers up to 90% survival rates using advanced dual-team micro-surgical procedures at affordable packages.",
      discover_banner: "Connect with Pioneer Living Donor Liver Transplant Teams via India Med Services",
      conditions_title: "Key Hepatic & Biliary Issues Managed",
      techniques_title: "Precision Micro-suturing & 3D Graft Volumetry",
      techniques_desc: "Advanced vascular mapping and donor tissue sizing protocols to guarantee perfect organ match and recipient safety.",
      costs_title: "Affordable Hepatic Transplant & Surgery",
      costs_desc: "Receive world-class transplant surgeries using modern sterile ICUs at up to 90% savings compared to the West.",
      why_choose_title: "Why Choose Our Liver Care Network?",
      doctors_sec_title: "Our Liver Specialists",
      hospitals_sec_title: "Leading Liver Transplant Centers",
      stories_sec_title: "Stories of Reclaimed Lives",
      procedures_sec_title: "All Hepato-Biliary Procedures Supported",
      faqs_sec_title: "Liver Transplant FAQ",
    },
    ru: {
      hero_title: "Трансплантация печени в Индии",
      hero_desc: "Свяжитесь с ведущими командами по трансплантации печени от живого донора. Индия предлагает выживаемость до 90% благодаря передовым микрохирургическим операциям.",
      discover_banner: "Успешная пересадка печени в Индии с India Med Services",
      conditions_title: "Основные заболевания печени и желчных путей",
      techniques_title: "Микрохирургические швы и 3D-волюметрия трансплантата",
      techniques_desc: "Современное картирование сосудов и расчет размера донорской доли для безопасности донора и реципиента.",
      costs_title: "Доступная трансплантация и хирургия печени",
      costs_desc: "Снизьте затраты на сложнейшую пересадку печени до 90% при полном соответствии стандартам JCI.",
      why_choose_title: "Почему выбирают нашу сеть по лечению печени?",
      doctors_sec_title: "Наши специалисты по трансплантации",
      hospitals_sec_title: "Лучшие центры трансплантации печени",
      stories_sec_title: "Истории возвращения к здоровой жизни",
      procedures_sec_title: "Все проводимые гепатобилиарные процедуры",
      faqs_sec_title: "Часто задаваемые вопросы по пересадке печени",
    },
    uz: {
      hero_title: "Hindistonda Jigar Transplantatsiyasi",
      hero_desc: "Dunyoning eng faol tirik donor jigar ko'chirish jamoalari bilan bog'laning. Hindistonda ilg'or mikro-jarrohlik orqali 90% gacha muvaffaqiyatli natijalarga erishing.",
      discover_banner: "India Med Services yordamida jigar transplantatsiyasi yetakchilariga ulaning",
      conditions_title: "Davolanadigan asosiy jigar va o't yo'li kasalliklari",
      techniques_title: "Aniq mikro-suturing va 3D visual modellashtirish",
      techniques_desc: "Donor xavfsizligini ta'minlash uchun qon tomirlarini kompyuterda xaritalash va transplant hajmini aniqlash texnologiyalari.",
      costs_title: "Hamyonbop jigar ko'chirish yechimlari",
      costs_desc: "G'arb mamlakatlariga qaraganda 90% gacha tejab, eng yuqori darajadagi HPB shifoxonalarida davolaning.",
      why_choose_title: "Nima uchun bizning jigar davolash tarmog'imiz tanlanadi?",
      doctors_sec_title: "Bizning jigar mutaxassislarimiz",
      hospitals_sec_title: "Etakchi jigar transplantatsiyasi shifoxonalari",
      stories_sec_title: "Yangi hayotga qaytish muvaffaqiyatlari",
      procedures_sec_title: "Biz taklif qiladigan barcha jigar muolajalari",
      faqs_sec_title: "Jigar transplantatsiyasi bo'yicha savollar",
    },
    kk: {
      hero_title: "Бауыр трансплантациясы және гепатология",
      hero_desc: "Үндістандағы ең үздік бауыр трансплантологтарымен байланысып, тірі донордан бауыр ауыстыру оталарын сәтті жасатыңыз.",
      discover_banner: "India Med Services-пен бірге бауыр емдеудің озық емдерін ашыңыз",
      conditions_title: "Бауыр мен өт жолдарының негізгі аурулары",
      techniques_title: "Қос командалық микро-тігу және 3D бауыр өлшемін жоспарлау",
      techniques_desc: "Донор мен реципиенттің толық қауіпсіздігін қамтамасыз ететін заманауи бауыр көлемін есептеу бағдарламалары.",
      costs_title: "Бауыр ауыстыруды қолжетімді бағамен жасату",
      costs_desc: "Бауыр ауыстыру сияқты күрделі оталарды АҚШ немесе Еуропамен салыстырғанда 90%-ға дейін үнемді бағамен жасатыңыз.",
      why_choose_title: "Неліктен бауыр емдеуде біздің желіні таңдайды?",
      doctors_sec_title: "Біздің трансплантолог-мамандарымыз",
      hospitals_sec_title: "Үздік бауыр трансплантациялау орталықтары",
      stories_sec_title: "Бауыр емдеудің сәтті оқиғалары",
      procedures_sec_title: "Бауыр мен өт жолдарына жасалатын барлық оталар",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Cirrhosis", desc: "Advanced scarring of the liver tissue limiting filtration.", iconName: "Activity" },
    { title: "Liver Failure", desc: "End-stage organ exhaustion requiring urgent replacement.", iconName: "Heart" },
    { title: "Hepatitis & Tumors", desc: "Chronic viral infections and neoplasms in liver tissue.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Dual-Team Micro-Suturing", desc: "Coordinating donor extraction and patient grafting in parallel operations.", iconName: "Cpu" },
    { title: "3D Graft Volume Planning", desc: "Mapping vascular trees to ensure the liver donor graft perfectly fits the recipient.", iconName: "ScanFace" },
    { title: "Advanced Liver ICU MARS", desc: "Employing molecular adsorbent recirculating systems (MARS) for liver support.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "David M.", locKey: "uk", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Successful Living Donor Liver Transplant" },
    { name: "Assem K.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Pediatric Liver Transplant Victory" },
    { name: "Bekzod S.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Complex Hepatobiliary Care" }
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
