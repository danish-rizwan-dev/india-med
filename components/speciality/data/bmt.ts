import { SpecialityData } from "../types";

export const bmtData: SpecialityData = {
  heroBadge: "Bone Marrow Transplant",
  icon: "/images/sections/specialities/Bonemarrowtransplant.svg",
  doctors: [
    {
      name: "Dr. Dharma Choudhary",
      exp: "26+ Years",
      role: "Senior Director - Bone Marrow Transplant",
      hospital: "BLK-Max Super Speciality Hospital, New Delhi",
      initials: "DC",
      gradient: "from-blue-600 to-indigo-700",
    }
  ],
  hospitals: [
    {
      name: "BLK-Max Super Speciality Hospital",
      city: "New Delhi",
      accreditation: "JCI & NABH Accredited",
      desc: "One of the largest bone marrow transplant centers in Asia with dedicated HEPA-filtered intensive care suites.",
    }
  ],
  procedures: [
    "Autologous Bone Marrow Transplant",
    "Allogeneic Bone Marrow Transplant",
    "Haploidentical Stem Cell Transplant",
    "Umbilical Cord Blood Transplant",
    "CAR-T Cell Immunotherapy"
  ],
  costs: [
    { name: "Autologous Transplant", val: "$15,000 – $18,000 USD", usaVal: "$120,000+" },
    { name: "Allogeneic Transplant", val: "$22,000 – $28,000 USD", usaVal: "$250,000+" }
  ],
  translations: {
    en: {
      hero_title: "Bone Marrow Transplant in India",
      hero_desc: "Access world-leading hematology-oncology care and advanced stem cell transplantation. Get JCI-accredited autologous and allogeneic transplants with unmatched survival rates.",
      discover_banner: "Connect with Advanced BMT Centers and Global Hematology Experts in India",
      conditions_title: "Key Hematological Conditions Treated",
      techniques_title: "Advanced Stem Cell & Haplo-Transplants",
      techniques_desc: "Employing advanced HLA matching, highly-purified stem cell grafts, and haploidentical donor transplants.",
      costs_title: "Affordable & Premium BMT Procedures",
      costs_desc: "Receive world-class transplant care in HEPA-filtered cleanrooms at a fraction of Western treatment costs.",
      why_choose_title: "Why Choose Our BMT Care Network?",
      doctors_sec_title: "Our Hematologists & BMT Specialists",
      hospitals_sec_title: "Top Network BMT Centers",
      stories_sec_title: "BMT Success Stories",
      procedures_sec_title: "All Bone Marrow Transplant Procedures",
      faqs_sec_title: "Bone Marrow Transplant FAQ",
    },
    ru: {
      hero_title: "Трансплантация костного мозга в Индии",
      hero_desc: "Получите доступ к передовому гематологическому лечению и трансплантации стволовых клеток в клиниках JCI с высокими показателями выживаемости.",
      discover_banner: "Свяжитесь с ведущими центрами ТКМ и гематологами мирового уровня в Индии",
      conditions_title: "Основные лечимые заболевания крови",
      techniques_title: "Передовые технологии ТКМ и Гаплотрансплантация",
      techniques_desc: "Использование высокоточного HLA-типирования, очищенных трансплантатов и гаплоидентичных доноров.",
      costs_title: "Доступная стоимость трансплантации костного мозга",
      costs_desc: "Пройдите лечение мирового уровня в стерильных боксах с HEPA-фильтрацией со сбережением бюджета до 80%.",
      why_choose_title: "Почему выбирают наши центры ТКМ?",
      doctors_sec_title: "Наши специалисты по ТКМ",
      hospitals_sec_title: "Лучшие центры ТКМ в сети",
      stories_sec_title: "Истории успешной трансплантации",
      procedures_sec_title: "Все проводимые виды ТКМ",
      faqs_sec_title: "Часто задаваемые вопросы по ТКМ",
    },
    uz: {
      hero_title: "Hindistonda Suyak Ko'migi Transplantatsiyasi",
      hero_desc: "Gematologik onkologiya va o'zak hujayralar transplantatsiyasi bo'yicha jahon darajasidagi xizmatlar. JCI akkreditatsiyali shifoxonalarda yuqori muvaffaqiyat ko'rsatkichlari.",
      discover_banner: "Hindistondagi yetakchi BMT markazlari va gematologiya mutaxassislari bilan bog'laning",
      conditions_title: "Davolanadigan asosiy gematologik kasalliklar",
      techniques_title: "O'zak Hujayra & Gaploidentik Transplantatsiya",
      techniques_desc: "HLA mosligini aniqlash, yuqori darajada tozalangan transplantatlar va ota-onadan yarim mos keluvchi donor transplantatsiyasi.",
      costs_title: "Hamyonbop va sifatli suyak ko'migi ko'chirish",
      costs_desc: "G'arb mamlakatlariga qaraganda 80% gacha arzon narxlarda eng steril HEPA-filtrlangan xonalarda davolaning.",
      why_choose_title: "Nima uchun bizning BMT tizimimiz tanlanadi?",
      doctors_sec_title: "Bizning gematolog va BMT shifokorlarimiz",
      hospitals_sec_title: "Eng yaxshi BMT shifoxonalarimiz",
      stories_sec_title: "BMT muvaffaqiyat hikoyalari",
      procedures_sec_title: "Suyak ko'migi ko'chirish muolajalari",
      faqs_sec_title: "TKM bo'yicha tez-tez beriladigan savollar",
    },
    kk: {
      hero_title: "Үндістанда сүйек кемігін трансплантациялау",
      hero_desc: "Гематологиялық және озық діңгекті жасушаларды трансплантациялау оталары. Ең үздік JCI емханаларындағы жоғары сәттілік көрсеткіштері.",
      discover_banner: "Үндістандағы озық СКТ орталықтары мен әлемдік гематолог мамандармен байланысыңыз",
      conditions_title: "Емделетін қан жүйесінің негізгі аурулары",
      techniques_title: "Озық діңгекті жасушалар және Гаплотрансплантациялау",
      techniques_desc: "HLA сәйкестендірудің озық әдістері, тазартылған діңгекті жасушалар және гаплоидентичный донорлық емдер.",
      costs_title: "Сүйек кемігін тиімді әрі сапалы трансплантациялау",
      costs_desc: "Батыс елдерінен 80%-ға дейін төмен бағамен арнайы стерильді HEPA бокстарда ота жасатыңыз.",
      why_choose_title: "Неліктен СКТ-да біздің желіні таңдайды?",
      doctors_sec_title: "Біздің СКТ және гематолог мамандарымыз",
      hospitals_sec_title: "Сүйек кемігін ауыстыратын үздік орталықтар",
      stories_sec_title: "СКТ сәтті оқиғалары",
      procedures_sec_title: "Сүйек кемігін ауыстырудың барлық оталары",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
    }
  },
  conditions: [
    { title: "Leukemia & Lymphoma", desc: "Malignant cancers affecting blood and bone marrow systems.", iconName: "Activity" },
    { title: "Aplastic Anemia", desc: "Failure of bone marrow to produce healthy blood cells.", iconName: "Heart" },
    { title: "Thalassemia & Sickle Cell", desc: "Genetic blood disorders requiring structural cell replacement.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "HLA High-Resolution Typing", desc: "Next-generation sequencing to secure highly compatible donor tissues.", iconName: "Cpu" },
    { title: "T-Cell Depletion Techniques", desc: "Advanced graft engineering to minimize severe graft-versus-host-disease (GVHD).", iconName: "ScanFace" },
    { title: "Haploidentical Transplants", desc: "Performing safe transplants using half-matched parent or sibling donors.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Farrukh K.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Leukemia Remission Success" },
    { name: "Kuralay S.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Thalassemia Major Recovery" }
  ],
  faqItems: [
    {
      question: "How long is the hospital stay for a Bone Marrow Transplant?",
      answer: "Patients typically spend 3 to 4 weeks in highly sterilized isolation rooms to allow the new stem cells to engraft and recover safely."
    },
    {
      question: "Can international patients bring their own donor?",
      answer: "Yes, family donors (parents, siblings, children) are highly encouraged and thoroughly screened to ensure maximum tissue compatibility."
    }
  ]
};
