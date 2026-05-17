import { SpecialityData } from "../types";

export const gynoOncoData: SpecialityData = {
  heroBadge: "Gynecological Oncology",
  icon: "/images/sections/specialities/GynecologicalOncology.svg",
  doctors: [
    {
      name: "Dr. Rama Joshi",
      exp: "26+ Years",
      role: "Director - Gynecology Oncology",
      hospital: "Fortis Memorial Research Institute, Gurugram",
      initials: "RJ",
      gradient: "from-pink-500 to-rose-600",
    }
  ],
  hospitals: [
    {
      name: "Fortis Memorial Research Institute",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "Advanced robotic gynecological cancer staging, radical hysterectomies and chemotherapy units.",
    }
  ],
  procedures: [
    "Robotic Radical Hysterectomy",
    "Ovarian Cancer Cytoreductive Surgery",
    "HIPEC (Hyperthermic Intraperitoneal Chemotherapy)",
    "Sentinel Lymph Node Mapping",
    "Cervical Cancer Conization"
  ],
  costs: [
    { name: "Robotic Radical Hysterectomy", val: "$4,500 – $5,500 USD", usaVal: "$32,000+" },
    { name: "Cytoreductive Surgery + HIPEC", val: "$8,500 – $11,000 USD", usaVal: "$65,000+" }
  ],
  translations: {
    en: {
      hero_title: "Gynecological Oncology Services in India",
      hero_desc: "Receive JCI-accredited cancer care for ovarian, cervical, and uterine cancers. Benefit from advanced DaVinci robotic surgeries and high-dose intraperitoneal chemotherapy (HIPEC).",
      discover_banner: "Access Expert Gynecological Oncologists & Precision Cancer Surgery in India",
      conditions_title: "Key Gynecological Cancers Treated",
      techniques_title: "DaVinci Robotic Radical Surgeries & HIPEC",
      techniques_desc: "Utilizing advanced robotic-assisted tumor resection and localized hyperthermic intraperitoneal chemotherapy for superior outcomes.",
      costs_title: "Affordable & Premium Gynecological Oncology",
      costs_desc: "Receive world-class targeted therapies and complex pelvic surgeries with up to 75% savings.",
      why_choose_title: "Why Choose Our Gynecological Cancer Care?",
      doctors_sec_title: "Our Gynecological Oncologists",
      hospitals_sec_title: "Top Network Oncology Centers",
      stories_sec_title: "Recovery Success Stories",
      procedures_sec_title: "All Gynecological Oncology Procedures",
      faqs_sec_title: "Gynecological Oncology FAQ",
    },
    ru: {
      hero_title: "Онкогинекология в Индии",
      hero_desc: "Получите гинекологическую онкологическую помощь мирового уровня при раке яичников, шейки матки и матки. Высокоточные операции DaVinci и терапия HIPEC.",
      discover_banner: "Свяжитесь с ведущими онкогинекологами и онкологическими центрами Индии",
      conditions_title: "Основные виды лечимого гинекологического рака",
      techniques_title: "Роботизированная хирургия DaVinci и HIPEC",
      techniques_desc: "Использование роботизированной резекции опухолей и локальной гипертермической внутрибрюшинной химиотерапии.",
      costs_title: "Доступная онкогинекологическая помощь",
      costs_desc: "Пройдите сложное хирургическое лечение и таргетную терапию по стандартам JCI со сбережением бюджета до 75%.",
      why_choose_title: "Почему выбирают нашу онкогинекологическую помощь?",
      doctors_sec_title: "Наши онкогинекологи",
      hospitals_sec_title: "Лучшие онкологические клиники сети",
      stories_sec_title: "Истории победы над раком",
      procedures_sec_title: "Все виды онкогинекологических процедур",
      faqs_sec_title: "Часто задаваемые вопросы по онкогинекологии",
    },
    uz: {
      hero_title: "Hindistonda Ginekologik Onkologiya Xizmatlari",
      hero_desc: "Tuxumdon, bachadon bo'yni va bachadon saratonini davolash bo'yicha JCI akkreditatsiyali onkologik yordam. Eng so'nggi DaVinci robot tizimi va HIPEC muolajalari.",
      discover_banner: "Hindistonning eng tajribali onkoginekolog shifokorlari va saraton markazlari bilan bog'laning",
      conditions_title: "Davolanadigan asosiy ginekologik saraton turlari",
      techniques_title: "DaVinci Robotik Radikal Operatsiyalar & HIPEC",
      techniques_desc: "O'smalarni robotlashtirilgan radikal olib tashlash va qorin bo'shlig'i ichidagi mahalliy issiq kimyoterapiya (HIPEC) muolajalari.",
      costs_title: "Hamyonbop va yuqori sifatli onkoginekologik yordam",
      costs_desc: "Amerika shifoxonalariga qaraganda 75% gacha arzon narxlarda yetakchi onkologik xizmatlardan foydalaning.",
      why_choose_title: "Nima uchun bizning onkoginekologik yordamimiz tanlanadi?",
      doctors_sec_title: "Bizning onkoginekologlarimiz",
      hospitals_sec_title: "Eng yaxshi ginekologik onkologiya shifoxonalari",
      stories_sec_title: "Bemorlarimiz muvaffaqiyat hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha onkoginekologik muolajalar",
      faqs_sec_title: "Onkoginekologiya bo'yicha savollar",
    },
    kk: {
      hero_title: "Үндістандағы онкогинекологиялық қызметтер",
      hero_desc: "Аналық без, жатыр мойны және жатыр обырын сәтті емдеу. DaVinci роботты хирургиясы және жергілікті құрсақішілік химиятерапия (HIPEC).",
      discover_banner: "Үндістанның білікті онкогинеколог мамандарымен және озық емханаларымен байланысыңыз",
      conditions_title: "Емделетін негізгі онкогинекологиялық аурулар",
      techniques_title: "DaVinci роботты радикалды оталары және HIPEC емдері",
      techniques_desc: "Ісіктерді робот көмегімен радикалды алып тастау және құрсақ қуысына жергілікті қыздырылған химия препараттарын енгізу (HIPEC) әдістері.",
      costs_title: "Онкогинекологияны тиімді әрі сапалы емдеу",
      costs_desc: "Қиын кіші жамбас оталары мен мақсатты терапияларды батыс елдерінен 75%-ға дейін төмен бағамен жасатыңыз.",
      why_choose_title: "Неліктен онкогинекологияда біздің желіні таңдайды?",
      doctors_sec_title: "Біздің онкогинеколог-мамандарымыз",
      hospitals_sec_title: "Үздік онкогинекологиялық орталықтар",
      stories_sec_title: "Онкологиядан сәтті айығу оқиғалары",
      procedures_sec_title: "Барлық онкогинекологиялық оталар",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Ovarian Cancer", desc: "Malignant cellular growths in the tissue of ovaries.", iconName: "Activity" },
    { title: "Cervical Cancer", desc: "Malignant tissue changes in the cervix canal, heavily treatable early.", iconName: "Heart" },
    { title: "Endometrial & Uterine Cancer", desc: "Malignant tumors affecting the internal uterine linings.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Robotic Staging Surgeries", desc: "Removing tumor nodes with minimal recovery times using small incisions.", iconName: "Cpu" },
    { title: "Intraperitoneal Chemotherapy", desc: "Delivering heated chemotherapeutic drugs directly inside the pelvic cavity.", iconName: "ScanFace" },
    { title: "Nerve-Sparing Pelvic Resection", desc: "Carefully preserving pelvic nerves to avoid functional bladder or bowel deficits.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Anna S.", locKey: "ru", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Ovarian Cancer Remission" },
    { name: "Zukhra T.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Robotic Cervical Surgery Success" }
  ],
  faqItems: [
    {
      question: "What is HIPEC and how does it help?",
      answer: "HIPEC stands for Hyperthermic Intraperitoneal Chemotherapy. Heated chemotherapy is delivered directly inside the abdomen immediately after surgical tumor removal to destroy microscopic cancer cells."
    },
    {
      question: "Are robotic hysterectomies safer than traditional open surgeries?",
      answer: "Yes, robotic surgeries provide superior visualization, precision, minimal blood loss, and significantly faster recovery times."
    }
  ]
};
