import { SpecialityData } from "../types";

export const cardioData: SpecialityData = {
  heroBadge: "Cardiology Excellence",
  icon: "/images/sections/specialities/cardiac.svg",
  doctors: [
    {
      name: "Dr. Praveer Agarwal",
      exp: "42+ Years",
      role: "Chairman & Chief Cardiac Surgeon",
      hospital: "Medanta - The Medicity, Gurugram",
      initials: "PA",
      gradient: "from-rose-500 to-red-600",
      image: "/images/doctors/228-Dr.-Praveer-Agarwal.jpg",
    },
    {
      name: "Dr. Suman Bhandari",
      exp: "40+ Years",
      role: "Chairman - Fortis Escorts Heart Institute",
      hospital: "Fortis Escorts, New Delhi",
      initials: "SB",
      gradient: "from-red-600 to-amber-600",
      image: "/images/doctors/565-Dr.-Suman-Bhandari.jpg",
    },
    {
      name: "Dr. Vijay Kumar",
      exp: "38+ Years",
      role: "Senior Director - Interventional Cardiology",
      hospital: "Max Super Speciality Hospital, New Delhi",
      initials: "VK",
      gradient: "from-red-600 to-orange-500",
      image: "/images/doctors/600-Dr.-Vijay-Kumar.jpg",
    },
    {
      name: "Dr. Vivudh Pratap Singh",
      exp: "35+ Years",
      role: "Chairman - Metro Group of Hospitals",
      hospital: "Metro Hospital, Noida",
      initials: "VS",
      gradient: "from-rose-600 to-red-700",
      image: "/images/doctors/870-Dr.-Vivudh-Pratap-Singh.jpg",
    }
  ],
  hospitals: [
    {
      name: "Medanta - The Medicity",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "India's largest multi-speciality cardiac center with advanced hybrid cath labs.",
      image: "/images/hospitals/621-Medanta-The-Medicity-Hospital.jpg",
    },
    {
      name: "Fortis Escorts Heart Institute",
      city: "Okhla, New Delhi",
      accreditation: "JCI Accredited",
      desc: "Pioneer in cardiac care with over 30 years of clinical and surgical excellence.",
      image: "/images/hospitals/848-Fortis-Escorts-Heart-Institute.jpg",
    },
    {
      name: "Max Super Speciality Hospital",
      city: "Saket, New Delhi",
      accreditation: "NABH & JCI Accredited",
      desc: "Advanced imaging and robotic surgical suites for complex cardiac cases.",
      image: "/images/hospitals/262-Max-Super-Speciality-Hospital-Saket.jpg",
    },
    {
      name: "Artemis Hospital",
      city: "Gurugram, Delhi NCR",
      accreditation: "JCI & NABH Accredited",
      desc: "State-of-the-art cardiovascular ICU and post-operative care units.",
      image: "/images/hospitals/500-Fortis-Memorial-Research-Institute.jpg",
    }
  ],
  procedures: [
    "Heart Bypass Surgery (CABG)",
    "Tetralogy of Fallot (TOF)",
    "Heart Valve Replacement Surgery",
    "Bentall Procedure",
    "Fontan Procedure",
    "Coronary Angioplasty & Stenting",
    "ASD/VSD/PDA Device Closure",
    "Pacemaker Implantation",
    "ICD Device Implantation",
    "TAVI / TAVR (Transcatheter Aortic Valve)"
  ],
  costs: [
    { name: "Pacemaker Implantation", val: "$4,500 – $5,500 USD", usaVal: "$25,000+" },
    { name: "ICD Device Implantation", val: "From $13,500 USD", usaVal: "$45,000+" },
    { name: "Heart Bypass Surgery (CABG)", val: "From $5,500 USD", usaVal: "$80,000+" },
    { name: "Heart Valve Replacement", val: "$6,000 – $8,000 USD", usaVal: "$65,000+" }
  ],
  translations: {
    en: {
      hero_title: "Cardiological Assistance",
      hero_desc: "India Med Services connects you to the Medanta Institute of Cardiac Sciences, where elite surgeons offer a second chance at life for end-stage heart disease. This multidisciplinary program integrates advanced diagnostics, high-risk surgery, and mechanical circulatory support under one roof.",
      discover_banner: "Discover Premium Cardiology in India with India Med Services",
      conditions_title: "Key Cardiac Conditions Treated",
      techniques_title: "Advanced Heart Bypass & Valve Surgery",
      techniques_desc: "Equipped with state-of-the-art Hybrid Operating Rooms and advanced visual modeling for maximum precision.",
      costs_title: "Affordable & World-Class Heart Care",
      costs_desc: "Avail cutting-edge surgeries at a fraction of Western costs, backed by top JCI-accredited surgical infrastructure.",
      why_choose_title: "Why Choose India Med Service?",
      doctors_sec_title: "Our Cardiac Specialists",
      hospitals_sec_title: "Top Network Cardiology Hospitals",
      stories_sec_title: "Patient Success Stories",
      procedures_sec_title: "All Cardiac Procedures Supported",
      faqs_sec_title: "Cardiology FAQ",
      intro_title: "Discover World-Class Cardiology with India Med Services",
      intro_desc_1: "Cardiology is a vital medical specialty dedicated to diagnosing and managing heart and blood vessel conditions. India Med Services connects you with elite departments specializing in life-saving procedures like Coronary Angioplasty, Pacemaker Implantation, and Echocardiography. India is home to world-renowned cardiologists and hospitals featuring the latest technological advancements.",
      intro_desc_2: "While many seek global care for specialized expertise or cost-effectiveness, we ensure you find the right match for your specific diagnosis. Outcomes depend on the condition’s severity and your overall health, making expert guidance essential.",
      intro_sub_title: "What is Cardiology?",
      intro_sub_desc: "Cardiology focuses on identifying and treating disorders of the cardiovascular system. If you are diagnosed with heart issues, a cardiologist will lead your care, performing critical tests and procedures such as heart catheterizations and angioplasty to restore your health.",
      techniques_list_custom: [
        {
          title: "3D Printing",
          desc: "It helps in creating a physical model of the patient's heart, which helps doctors to better understand the anatomy and surgery planning."
        },
        {
          title: "Robotic Assisted Surgery",
          desc: "It allows for minimally invasive procedures, which helps in improving precision, reducing the risk of complications, and providing faster recovery."
        },
        {
          title: "Advanced Imaging Equipment",
          desc: "Advanced imaging equipment, such as cardiac MRI and CT, allows for more accurate and detailed images of your heart, and it is also beneficial in monitoring treatment progress."
        },
        {
          title: "Implantable Devices",
          desc: "Devices such as pacemakers and defibrillators have allowed the treatment of various heart conditions such as arrhythmias and heart failure."
        },
        {
          title: "Extracorporeal Membrane Oxygenation (ECMO)",
          desc: "It's a technology that supports the heart and lungs in severe failure. ECMO is used in critical care settings for severe heart or lung failure and requires continuous monitoring in an intensive care unit."
        },
        {
          title: "Electrophysiology (EP) Lab",
          desc: "It helps in creating a physical model of the patient's heart, which helps doctors to better understand the anatomy and surgery planning."
        }
      ],
      procedures_list: [
        "Heart Valve Replacement",
        "Tetralogy of Fallot (TOF)",
        "Heart Bypass Surgery",
        "Heart Transplant",
        "VSD Closure",
        "Coronary Artery Angiography (CAG)",
        "Bentall Surgery",
        "Arterial Switch Operation (ASO)",
        "Fontan Procedure",
        "Open Heart Surgery",
        "ASD Closure",
        "(MVR) Mitral Valve Replacement",
        "PA Banding",
        "DVR (Double Valve Replacement)",
        "Angioplasty (PTCA)",
        "PPI- Permanent Pacemaker Implant"
      ],
      conditions_desc: "Our network specializes in managing complex cardiovascular issues, including:",
      conditions_footer: "Trust India Med Services to navigate your path to heart health with precision and care.",
      conditions: [
        { title: "Hypertension", desc: "Monitoring blood pressure to avoid long-term vessel wear.", iconName: "Activity" },
        { title: "Heart Disease", desc: "Structural/functional cardiovascular blockages.", iconName: "Heart" },
        { title: "Heart Attack", desc: "Obstruction of muscular blood flow needing fast care.", iconName: "BriefcaseMedical" }
      ],
      faq_items: [
        {
          q: "Can lifestyle changes treat heart disease?",
          a: "Yes, lifestyle changes such as a healthy diet, regular exercise, and quitting smoking can significantly improve heart health and even reverse some damage."
        },
        {
          q: "What are the risk factors of heart bypass treatment in India?",
          a: "Risk factors are similar to those worldwide, including age, overall health, and pre-existing conditions. Indian hospitals maintain international safety standards to minimize risks."
        },
        {
          q: "How to prevent heart disease?",
          a: "Prevention involves managing blood pressure, cholesterol, and diabetes, maintaining a healthy weight, eating a balanced diet, and staying physically active."
        },
        {
          q: "Is it possible to never get heart disease?",
          a: "While genetics play a role, maintaining a healthy lifestyle can drastically reduce your risk, making it possible to avoid heart disease entirely."
        },
        {
          q: "Are heart attack and cardiac arrest different?",
          a: "Yes. A heart attack is a circulation problem (blocked artery), while a cardiac arrest is an electrical problem (heart stops beating suddenly)."
        },
        {
          q: "What happens during a cardiac catheterization procedure?",
          a: "A thin tube is guided through a blood vessel to your heart to diagnose or treat conditions, such as clearing blockages or placing stents."
        },
        {
          q: "What are the symptoms of heart disease?",
          a: "Symptoms include chest pain (angina), shortness of breath, fatigue, and pain in the neck, jaw, or throat."
        },
        {
          q: "Which hospital is best for cardiology in India?",
          a: "Top hospitals include Fortis Escorts Heart Institute, Medanta, and Apollo Hospitals, all equipped with world-class technology and surgeons."
        },
        {
          q: "Which country is famous for cardiology?",
          a: "India is globally recognized for high-success rates in complex cardiac surgeries at a fraction of Western costs."
        },
        {
          q: "Who is the Indian No. 1 cardiologist?",
          a: "India has many world-renowned cardiologists. Dr. Naresh Trehan and Dr. Ashok Seth are among the top-rated pioneers in the field."
        }
      ]
    },
    ru: {
      hero_title: "Кардиология мирового уровня",
      hero_desc: "Свяжитесь с ведущими кардиологами Индии, выполняющими сложные кардиошунтирования, роботизированные операции и имплантации кардиостимуляторов с полным уходом.",
      discover_banner: "Откройте для себя кардиологию премиум-класса с India Med Services",
      conditions_title: "Основные лечимые заболевания сердца",
      techniques_title: "Современное шунтирование и замена клапанов",
      techniques_desc: "Использование гибридных операционных залов и 3D-моделирования для максимальной точности хирургического вмешательства.",
      costs_title: "Доступное лечение сердца высокого качества",
      costs_desc: "Получите квалифицированную помощь в ведущих клиниках JCI в несколько раз дешевле, чем в западных странах.",
      why_choose_title: "Почему выбирают India Med Service?",
      doctors_sec_title: "Наши специалисты-кардиологи",
      hospitals_sec_title: "Лучшие кардиологические клиники сети",
      stories_sec_title: "Истории успешного выздоровления",
      procedures_sec_title: "Все проводимые кардиологические процедуры",
      faqs_sec_title: "Часто задаваемые вопросы по кардиологии",
      intro_title: "Откройте для себя кардиологию мирового класса с India Med Services",
      intro_desc_1: "Кардиология — это жизненно важная медицинская специальность, занимающаяся диагностикой и лечением заболеваний сердца и кровеносных сосудов. India Med Services связывает вас с ведущими отделениями, специализирующимися на таких жизненно важных процедурах, как коронарная ангиопластика, имплантация кардиостимулятора и эхокардиография. В Индии работают всемирно известные кардиологи и клиники, оснащенные по последнему слову техники.",
      intro_desc_2: "Хотя многие ищут лечение за рубежом ради специализированного опыта или экономической эффективности, мы гарантируем, что вы найдете правильный вариант для вашего конкретного диагноза. Результаты зависят от тяжести состояния и общего состояния здоровья, поэтому экспертное руководство имеет важное значение.",
      intro_sub_title: "Что такое кардиология?",
      intro_sub_desc: "Кардиология фокусируется на выявлении и лечении заболеваний сердечно-сосудистой системы. Если у вас диагностированы проблемы с сердцем, кардиолог возглавит ваше лечение, проведет критически важные тесты и процедуры, такие как катетеризация сердца и ангиопластика, чтобы восстановить ваше здоровье.",
      techniques_list_custom: [
        {
          title: "3D-печать",
          desc: "Она помогает создать физическую модель сердца пациента, что позволяет врачам лучше понять анатомию и спланировать операцию."
        },
        {
          title: "Роботизированная хирургия",
          desc: "Она позволяет проводить минимально инвазивные процедуры, что помогает повысить точность, снизить риск осложнений и обеспечить более быстрое восстановление."
        },
        {
          title: "Современное оборудование для визуализации",
          desc: "Современное оборудование для визуализации, такое как МРТ и КТ сердца, позволяет получать более точные и детальные изображения вашего сердца, а также полезно для мониторинга хода лечения."
        },
        {
          title: "Имплантируемые устройства",
          desc: "Такие устройства, как кардиостимуляторы и дефибрилляторы, позволили лечить различные заболевания сердца, такие как аритмия и сердечная недостаточность."
        },
        {
          title: "Экстракорпоральная мембранная оксигенация (ЭКМО)",
          desc: "Это технология, которая поддерживает сердце и легкие при тяжелой недостаточности. ЭКМО используется в отделениях интенсивной терапии при тяжелой сердечной или легочной недостаточности и требует непрерывного мониторинга."
        },
        {
          title: "Лаборатория электрофизиологии (ЭФИ)",
          desc: "Она помогает создать физическую модель сердца пациента, что позволяет врачам лучше понять анатомию и спланировать операцию."
        }
      ],
      procedures_list: [
        "Замена клапана сердца",
        "Тетрада Фалло",
        "Аортокоронарное шунтирование",
        "Трансплантация сердца",
        "Закрытие ДМЖП",
        "Коронарография",
        "Операция Бенталла",
        "Операция артериального переключения",
        "Операция Фонтена",
        "Операция на открытом сердце",
        "Закрытие ДМПП",
        "Замена митрального клапана",
        "Суживание легочной артерии",
        "Двойное протезирование клапанов",
        "Ангиопластика",
        "Имплантация постоянного кардиостимулятора"
      ],
      conditions_desc: "Наша сеть специализируется на лечении сложных сердечно-сосудистых заболеваний, включая:",
      conditions_footer: "Доверьтесь India Med Services, чтобы пройти путь к здоровью сердца с точностью и заботой.",
      conditions: [
        { title: "Гипертония", desc: "Мониторинг артериального давления во избежание длительного износа сосудов.", iconName: "Activity" },
        { title: "Болезнь сердца", desc: "Структурные/функциональные блокады сердечно-сосудистой системы.", iconName: "Heart" },
        { title: "Сердечный приступ", desc: "Непроходимость мышечного кровотока, требующая быстрой помощи.", iconName: "BriefcaseMedical" }
      ],
      faq_items: [
        {
          q: "Могут ли изменения образа жизни вылечить болезнь сердца?",
          a: "Да, изменения образа жизни, такие как здоровая диета, регулярные физические упражнения и отказ от курения, могут значительно улучшить здоровье сердца и даже обратить вспять некоторые повреждения."
        },
        {
          q: "Каковы факторы риска операции шунтирования сердца в Индии?",
          a: "Факторы риска аналогичны общемировым, включая возраст, общее состояние здоровья и сопутствующие заболевания. Индийские больницы соблюдают международные стандарты безопасности для минимизации рисков."
        },
        {
          q: "Как предотвратить болезни сердца?",
          a: "Профилактика включает контроль артериального давления, уровня холестерина и диабета, поддержание здорового веса, сбалансированное питание и физическую активность."
        },
        {
          q: "Возможно ли никогда не заболеть сердцем?",
          a: "Хотя генетика играет роль, поддержание здорового образа жизни может значительно снизить риск, что позволяет полностью избежать сердечных заболеваний."
        },
        {
          q: "Отличаются ли сердечный приступ и остановка сердца?",
          a: "Да. Сердечный приступ — это проблема кровообращения (закупорка артерии), а остановка сердца — электрическая проблема (сердце внезапно перестает биться)."
        },
        {
          q: "Что происходит во время катетеризации сердца?",
          a: "Тонкая трубка проводится через кровеносный сосуд к сердцу для диагностики или лечения заболеваний, таких как устранение закупорок или установка стентов."
        },
        {
          q: "Каковы симптомы болезней сердца?",
          a: "Симптомы включают боль в груди (стенокардию), одышку, усталость и боль в шее, челюсти или горле."
        },
        {
          q: "Какая больница лучшая для кардиологии в Индии?",
          a: "Лучшие больницы включают Институт сердца Fortis Escorts, Medanta и Apollo Hospitals, все они оснащены технологиями мирового класса и хирургами."
        },
        {
          q: "Какая страна известна своей кардиологией?",
          a: "Индия признана во всем мире благодаря высоким показателям успеха в сложных кардиологических операциях за долю от стоимости на Западе."
        },
        {
          q: "Кто является кардиологом №1 в Индии?",
          a: "В Индии много всемирно известных кардиологов. Доктор Нареш Трехан и доктор Ашок Сет являются одними из лучших пионеров в этой области."
        }
      ],
      heroBadge: "Кардиология Превосходство",
      doctors: [
        {
          name: "Dr. Naresh Trehan",
          exp: "42+ Years",
          role: "Председатель и главный кардиохирург",
          hospital: "Medanta - The Medicity, Gurugram",
          initials: "NT",
          gradient: "from-rose-500 to-red-600",
          image: "/images/doctors/228-Dr.-Praveer-Agarwal.jpg",
        },
        {
          name: "Dr. Ashok Seth",
          exp: "40+ Years",
          role: "Председатель - Институт сердца Fortis Escorts",
          hospital: "Fortis Escorts, New Delhi",
          initials: "AS",
          gradient: "from-red-600 to-amber-600",
          image: "/images/doctors/565-Dr.-Suman-Bhandari.jpg",
        },
        {
          name: "Dr. S.N. Gupta",
          exp: "38+ Years",
          role: "Старший директор отделения интервенционной кардиологии",
          hospital: "Max Super Speciality Hospital, New Delhi",
          initials: "SG",
          gradient: "from-red-600 to-orange-500",
          image: "/images/doctors/600-Dr.-Vijay-Kumar.jpg",
        },
        {
          name: "Dr. Purushottam Lal",
          exp: "35+ Years",
          role: "Председатель - Группа больниц Метро",
          hospital: "Metro Hospital, Noida",
          initials: "PL",
          gradient: "from-rose-600 to-red-700",
          image: "/images/doctors/870-Dr.-Vivudh-Pratap-Singh.jpg",
        }
      ],
      hospitals: [
        {
          name: "Medanta - The Medicity",
          city: "Гуруграм, Дели, НКР",
          accreditation: "Аккредитация JCI и NABH",
          desc: "Крупнейший в Индии многопрофильный кардиологический центр с передовыми лабораториями гибридной катетеризации.",
          image: "/images/hospitals/621-Medanta-The-Medicity-Hospital.jpg",
        },
        {
          name: "Fortis Escorts Heart Institute",
          city: "Охла, Нью-Дели",
          accreditation: "Аккредитация JCI",
          desc: "Пионер в области кардиологической помощи с более чем 30-летним клиническим и хирургическим опытом.",
          image: "/images/hospitals/848-Fortis-Escorts-Heart-Institute.jpg",
        },
        {
          name: "Max Super Speciality Hospital",
          city: "Сакет, Нью-Дели",
          accreditation: "Аккредитация NABH и JCI",
          desc: "Передовые методы визуализации и роботизированные хирургические комплексы для сложных кардиологических случаев.",
          image: "/images/hospitals/262-Max-Super-Speciality-Hospital-Saket.jpg",
        },
        {
          name: "Artemis Hospital",
          city: "Гуруграм, Дели, НКР",
          accreditation: "Аккредитация JCI и NABH",
          desc: "Современные сердечно-сосудистые отделения интенсивной терапии и послеоперационного ухода.",
          image: "/images/hospitals/500-Fortis-Memorial-Research-Institute.jpg",
        }
      ],
    },
    uz: {
      hero_title: "Jahon darajasidagi kardiologiya",
      hero_desc: "Hindistonning eng yaxshi kardiologlari bilan bog'laning, ular murakkab va yuqori xavfli bypass operatsiyalarini va apparat o'rnatishlarini amalga oshiradilar.",
      discover_banner: "India Med Services bilan Hindistonda premium kardiologiyani kashf eting",
      conditions_title: "Davolanadigan asosiy yurak kasalliklari",
      techniques_title: "Zamonaviy bypass va klapanlarni almashtirish",
      techniques_desc: "Maksimal aniqlik uchun gibrid operatsiya xonalari va zamonaviy 3D modellashtirish bilan jihozlangan.",
      costs_title: "Hamyonbop va sifatli yurak davolash",
      costs_desc: "G'arbiy mamlakatlarga qaraganda bir necha barobar arzon narxlarda yetakchi kardiologlar yordamida yuqori sifatli davolaning.",
      why_choose_title: "Nima uchun India Med Service tanlanadi?",
      doctors_sec_title: "Bizning kardiologlarimiz",
      hospitals_sec_title: "Tarmoqdagi eng yaxshi kardiologiya shifoxonalari",
      stories_sec_title: "Bemorlarimiz muvaffaqiyat hikoyalari",
      procedures_sec_title: "Biz taklif qiladigan barcha kardiologik muolajalar",
      faqs_sec_title: "Kardiologiya bo'yicha tez-tez so'raladigan savollar",
      intro_title: "India Med Services bilan jahon darajasidagi kardiologiyani kashf eting",
      intro_desc_1: "Kardiologiya yurak va qon tomir kasalliklarini aniqlash va davolashga bag'ishlangan muhim tibbiyot sohasidir. India Med Services sizni koronar angioplastika, kardiostimulyator o'rnatish va exokardiografiya kabi hayotni saqlab qoluvchi muolajalarga ixtisoslashgan elita bo'limlar bilan bog'laydi. Hindiston dunyoga mashhur kardiologlar va eng so'nggi texnologik yutuqlarga ega shifoxonalar vatanidir.",
      intro_desc_2: "Ko'pchilik ixtisoslashtirilgan tajriba yoki tejamkorlik uchun global g'amxo'rlik izlayotgan bo'lsa-da, biz sizning maxsus tashxisingiz uchun to'g'ri shifoxonani topishingizni ta'minlaymiz. Natijalar kasallikning og'irligiga va sizning umumiy sog'lig'ingizga bog'liq bo'lib, mutaxassislarning rahbarligi juda muhimdir.",
      intro_sub_title: "Kardiologiya nima?",
      intro_sub_desc: "Kardiologiya yurak-qon tomir tizimi kasalliklarini aniqlash va davolashga qaratilgan. Agar sizda yurak kasalliklari aniqlansa, kardiolog sizning davolanishingizga rahbarlik qiladi, sog'lig'ingizni tiklash uchun yurak kateterizatsiyasi va angioplastika kabi muhim testlar va muolajalarni amalga oshiradi.",
      techniques_list_custom: [
        {
          title: "3D bosib chiqarish",
          desc: "Bu bemor yuragining jismoniy modelini yaratishga yordam beradi, bu shifokorlarga anatomiya va jarrohlik amaliyotini rejalashtirishni yaxshiroq tushunishga imkon beradi."
        },
        {
          title: "Robotlashtirilgan jarrohlik",
          desc: "Bu minimal invaziv muolajalarni amalga oshirishga imkon beradi, bu aniqlikni oshirishga, asoratlar xavfini kamaytirishga va tezroq tiklanishni ta'minlashga yordam beradi."
        },
        {
          title: "Ilg'or tasvirlash uskunalari",
          desc: "Yurak MRT va KT kabi ilg'or tasvirlash uskunalari yuragingizning yanada aniq va batafsil tasvirlarini olish imkonini beradi va u davolanish jarayonini kuzatishda ham foydalidir."
        },
        {
          title: "Implantatsiya qilinadigan qurilmalar",
          desc: "Kardiostimulyator va defibrilator kabi qurilmalar aritmiya va yurak yetishmovchiligi kabi turli xil yurak kasalliklarini davolashga imkon berdi."
        },
        {
          title: "Ekstrakorporeal membrana oksigenatsiyasi (ECMO)",
          desc: "Bu og'ir yetishmovchilikda yurak va o'pkalarni qo'llab-quvvatlaydigan texnologiya. ECMO og'ir yurak yoki o'pka yetishmovchiligi bo'lgan reanimatsiya bo'limlarida qo'llaniladi va doimiy monitoringni talab qiladi."
        },
        {
          title: "Elektrofiziologiya (EF) laboratoriyasi",
          desc: "Bu bemor yuragining jismoniy modelini yaratishga yordam beradi, bu shifokorlarga anatomiya va jarrohlik amaliyotini rejalashtirishni yaxshiroq tushunishga imkon beradi."
        }
      ],
      procedures_list: [
        "Yurak klapanlarini almashtirish",
        "Fallot tetradasi (TOF)",
        "Yurak aylanma jarrohligi (Bypass)",
        "Yurak transplantatsiyasi",
        "VSD yopilishi",
        "Koronar arteriya angiografiyasi (CAG)",
        "Bentall operatsiyasi",
        "Arterial almashtirish operatsiyasi (ASO)",
        "Fontan operatsiyasi",
        "Ochiq yurak jarrohligi",
        "ASD yopilishi",
        "(MVR) Mitral klapanni almashtirish",
        "PA bog'lash",
        "DVR (Ikki klapanni almashtirish)",
        "Angioplastika (PTCA)",
        "Doimiy kardiostimulyator o'rnatish"
      ],
      conditions_desc: "Bizning tarmog'imiz murakkab yurak-qon tomir kasalliklarini davolashga ixtisoslashgan, jumladan:",
      conditions_footer: "Yurak sog'lig'iga bo'lgan yo'lingizni aniqlik va g'amxo'rlik bilan o'tishda India Med Services-ga ishoning.",
      conditions: [
        { title: "Gipertoniya", desc: "Qon tomirlarining uzoq muddatli eskirishini oldini olish uchun qon bosimini kuzatish.", iconName: "Activity" },
        { title: "Yurak kasalligi", desc: "Yurak-qon tomir tizimining tarkibiy/funktsional blokadalari.", iconName: "Heart" },
        { title: "Yurak xuruji", desc: "Tez yordam talab qiladigan mushak qon oqimining to'silishi.", iconName: "BriefcaseMedical" }
      ],
      faq_items: [
        {
          q: "Turmush tarzini o'zgartirish yurak kasalliklarini davolay oladimi?",
          a: "Ha, sog'lom ovqatlanish, muntazam jismoniy mashqlar va chekishni tashlash kabi turmush tarzini o'zgartirish yurak sog'lig'ini sezilarli darajada yaxshilaydi va hatto ba'zi zararlarni ortga qaytarishi mumkin."
        },
        {
          q: "Hindistonda yurak bypass operatsiyasining xavf omillari qanday?",
          a: "Xavf omillari butun dunyoda bo'lgani kabi yosh, umumiy salomatlik va qo'shimcha kasalliklarni o'z ichiga oladi. Hindiston shifoxonalari xavflarni minimallashtirish uchun xalqaro xavfsizlik standartlariga qat'iy rioya qiladilar."
        },
        {
          q: "Yurak kasalliklarining oldini qanday olish mumkin?",
          a: "Oldini olish qon bosimi, xolesterin darajasi va diabetni nazorat qilish, sog'lom vaznni saqlash, muvozanatli ovqatlanish va jismoniy faollikni o'z ichiga oladi."
        },
        {
          q: "Yurak xuruji va yurak to'xtashi farq qiladimi?",
          a: "Ha. Yurak xuruji - bu qon aylanishining buzilishi (arteriyaning to'silishi), yurak to'xtashi esa elektr muammosi (yurak birdan urishni to'xtatadi)."
        },
        {
          q: "Yurak kateterizatsiyasi jarayonida nima sodir bo'ladi?",
          a: "Diagnostika yoki davolash uchun, masalan, tiqilib qolgan qon tomirlarini tozalash yoki stent o'rnatish uchun yupqa naycha qon tomiri orqali yuragingizga kiritiladi."
        },
        {
          q: "Yurak kasalliklarining belgilari qanday?",
          a: "Belgilar orasida ko'krak qafasidagi og'riq (angina), nafas qisilishi, charchoq va bo'yin, jag' yoki tomoqdagi og'riqlar mavjud."
        },
        {
          q: "Hindistonda kardiologiya bo'yicha eng yaxshi shifoxona qaysi?",
          a: "Eng yaxshi shifoxonalar qatoriga Fortis Escorts Heart Institute, Medanta va Apollo Hospitals kiradi. Ularning barchasi jahon darajasidagi texnologiyalar va jarrohlar bilan jihozlangan."
        },
        {
          q: "Kardiologiya bo'yicha qaysi davlat mashhur?",
          a: "Hindiston g'arb mamlakatlariga qaraganda ancha arzon narxlarda murakkab yurak operatsiyalarini muvaffaqiyatli amalga oshirishi bilan dunyoga mashhur."
        },
        {
          q: "Hindistonning 1-raqamli kardiologi kim?",
          a: "Hindistonda dunyoga mashhur kardiologlar ko'p. Doktor Naresh Trehan va doktor Ashok Seth ushbu sohadagi eng yaxshi kashshoflar qatoriga kiradi."
        }
      ],
      heroBadge: "Kardiologiya mukammalligi",
      doctors: [
        {
          name: "Dr. Naresh Trehan",
          exp: "42+ Years",
          role: "Rais va bosh kardiojarroh",
          hospital: "Medanta - The Medicity, Gurugram",
          initials: "NT",
          gradient: "from-rose-500 to-red-600",
          image: "/images/doctors/228-Dr.-Praveer-Agarwal.jpg",
        },
        {
          name: "Dr. Ashok Seth",
          exp: "40+ Years",
          role: "Rais - Fortis Escorts Heart Institute",
          hospital: "Fortis Escorts, New Delhi",
          initials: "AS",
          gradient: "from-red-600 to-amber-600",
          image: "/images/doctors/565-Dr.-Suman-Bhandari.jpg",
        },
        {
          name: "Dr. S.N. Gupta",
          exp: "38+ Years",
          role: "Katta direktor - Interventsion kardiologiya",
          hospital: "Max Super Speciality Hospital, New Delhi",
          initials: "SG",
          gradient: "from-red-600 to-orange-500",
          image: "/images/doctors/600-Dr.-Vijay-Kumar.jpg",
        },
        {
          name: "Dr. Purushottam Lal",
          exp: "35+ Years",
          role: "Rais - Metro kasalxonalar guruhi",
          hospital: "Metro Hospital, Noida",
          initials: "PL",
          gradient: "from-rose-600 to-red-700",
          image: "/images/doctors/870-Dr.-Vivudh-Pratap-Singh.jpg",
        }
      ],
      hospitals: [
        {
          name: "Medanta - The Medicity",
          city: "Gurugram, Dehli NCR",
          accreditation: "JCI & NABH tomonidan akkreditatsiya qilingan",
          desc: "Ilg'or gibrid kateter laboratoriyalariga ega Hindistonning eng yirik ko'p ixtisoslashgan yurak markazi.",
          image: "/images/hospitals/621-Medanta-The-Medicity-Hospital.jpg",
        },
        {
          name: "Fortis Escorts Heart Institute",
          city: "Okhla, Yangi Dehli",
          accreditation: "JCI akkreditatsiyasi",
          desc: "30 yildan ortiq klinik va jarrohlik mukammallikka ega bo'lgan yurak kasalliklari bo'yicha kashshof.",
          image: "/images/hospitals/848-Fortis-Escorts-Heart-Institute.jpg",
        },
        {
          name: "Max Super Speciality Hospital",
          city: "Saket, Nyu-Dehli",
          accreditation: "NABH & JCI akkreditatsiyadan o'tgan",
          desc: "Murakkab yurak kasalliklari uchun ilg'or tasvirlash va robotli jarrohlik to'plamlari.",
          image: "/images/hospitals/262-Max-Super-Speciality-Hospital-Saket.jpg",
        },
        {
          name: "Artemis Hospital",
          city: "Gurugram, Dehli NCR",
          accreditation: "JCI & NABH tomonidan akkreditatsiya qilingan",
          desc: "Zamonaviy yurak-qon tomir ICU va operatsiyadan keyingi yordam bo'limlari.",
          image: "/images/hospitals/500-Fortis-Memorial-Research-Institute.jpg",
        }
      ],
    },
    kk: {
      hero_title: "Кардиологиялық Көмек",
      hero_desc: "India Med Services сізді Medanta Кардиология ғылымдары институтымен байланыстырады, онда білікті хирургтар жүрек ауруының соңғы сатыларында өмірге екінші мүмкіндік береді.",
      discover_banner: "India Med Services-пен бірге әлемдік деңгейдегі кардиологияны ашыңыз",
      conditions_title: "Емделетін негізгі аурулар",
      techniques_title: "Үндістандағы кардиологиялық емдеу әдістері",
      techniques_desc: "Үндістан ауруханалары оталарды ең аз қауіппен орындауға мүмкіндік беретін заманауи технологиялармен жабдықталған.",
      costs_title: "Кардиологиядағы тиімді әрі сапалы емдеу",
      costs_desc: "Батыс елдерімен салыстырғанда бірнеше есе арзан бағамен, білікті хирургтардың озық медициналық көмегін алыңыз.",
      why_choose_title: "Неліктен India Med Services таңдайды?",
      doctors_sec_title: "Біздің мамандар",
      hospitals_sec_title: "Ауруханалар желісі",
      stories_sec_title: "Науқастарымыздың табысты оқиғалары",
      procedures_sec_title: "Бізи ұйымдастыратын кардиохирургиялық оталар",
      faqs_sec_title: "Жиі қойылатын сұрақтар",
      intro_title: "India Med Services арқылы әлемдік деңгейдегі кардиологияны ашыңыз",
      intro_desc_1: "Кардиология – жүрек пен қан тамырлары ауруларын диагностикалауға және емдеуге арналған өмірлік маңызды медициналық мамандық. India Med Services сізді коронарлық ангиопластика, кардиостимулятор орнату және эхокардиография сияқты өмірді сақтап қалатын процедураларға маманданған элиталық бөлімдермен байланыстырады. Үндістан әлемге әйгілі кардиологтар мен ең жаңа технологиялық жетістіктерге ие ауруханалардың отаны.",
      intro_desc_2: "Көптеген адамдар мамандандырылған тәжірибе немесе үнемділік үшін жаһандық күтімді іздесе де, біз сіздің нақты диагнозыңызға дұрыс сәйкестікті табуға кепілдік береміз. Нәтижелер жағдайдың ауырлығына және сіздің жалпы денсаулығыңызға байланысты, сондықтан сарапшылық басшылық өте маңызды.",
      intro_sub_title: "Кардиология дегеніміз не?",
      intro_sub_desc: "Кардиология жүрек-қан тамырлары жүйесінің ауруларын анықтауға және емдеуге бағытталған. Егер сізге жүрек ауруы диагнозы қойылса, кардиолог сіздің еміңізді басқарады, денсаулығыңызды қалпына келтіру үшін жүрек катетеризациясы және ангиопластика сияқты маңызды сынақтар мен процедураларды орындайды.",
      techniques_list_custom: [
        {
          title: "3D басып шығару",
          desc: "Бұл науқас жүрегінің физикалық моделін жасауға көмектеседі, бұл дәрігерлерге анатомияны және хирургиялық отаны жоспарлауды жақсырақ түсінуге мүмкіндік береді."
        },
        {
          title: "Роботтандырылған хирургия",
          desc: "Ол минималды инвазивті процедураларды жүргізуге мүмкіндік береді, бұл дәлдікті арттыруға, асқыну қаупін азайтуға және тезірек қалпына келуді қамтамасыз етуге көмектеседі."
        },
        {
          title: "Озық бейнелеу жабдықтары",
          desc: "Жүрек МРТ және КТ сияқты озық бейнелеу жабдықтары жүрегіңіздің дәлірек және егжей-тегжейлі суреттерін алуға мүмкіндік береді, сонымен қатар емдеу барысын бақылауда пайдалы."
        },
        {
          title: "Имплантацияланатын құрылғылар",
          desc: "Кардиостимуляторлар мен дефибрилляторлар сияқты құрылғылар аритмия және жүрек жеткіліксіздігі сияқты әртүрлі жүрек ауруларын емдеуге мүмкіндік берді."
        },
        {
          title: "Экстракорпоральды мембраналық оксигенация (ЭКМО)",
          desc: "Бұл ауыр жеткіліксіздік кезінде жүрек пен өкпені қолдайтын технология. ЭКМО ауыр жүрек немесе өкпе жеткіліксіздігі кезінде жансақтау бөлімдерінде қолданылады және тұрақты бақылауды қажет етеді."
        },
        {
          title: "Электрофизиология (ЭФ) зертханасы",
          desc: "Бұл науқас жүрегінің физикалық моделін жасауға көмектеседі, бұл дәрігерлерге анатомияны және хирургиялық отаны жоспарлауды жақсырақ түсінуге мүмкіндік береді."
        }
      ],
      procedures_list: [
        "Жүрек қақпақшасын ауыстыру",
        "Фалло тетрадасы (TOF)",
        "Аортокоронарлық шунттау",
        "Жүрек трансплантациясы",
        "Қарыншааралық қалқанша ақауын (VSD) жабу",
        "Коронарлық артерия ангиографиясы (CAG)",
        "Бенталл отасы",
        "Артериялық ауыстыру отасы (ASO)",
        "Фонтен отасы",
        "Ашық жүрекке жасалатын ота",
        "Жүрекшеаралық қалқанша ақауын (ASD) жабу",
        "(MVR) Митральды қақпақшаны ауыстыру",
        "Өкпе артериясын тарылту",
        "DVR (Қос қақпақшаны ауыстыру)",
        "Ангиопластика (PTCA)",
        "Тұрақты кардиостимулятор орнату"
      ],
      conditions_desc: "Біздің желі күрделі жүрек-қан тамырлары ауруларын емдеуге маманданған, соның ішінде:",
      conditions_footer: "Жүрек саулығына барар жолда дәлдік пен қамқорлықпен өту үшін India Med Services-ке сеніңіз.",
      conditions: [
        { title: "Гипертония", desc: "Тамырлардың ұзақ мерзімді тозуын болдырмау үшін қан қысымын бақылау.", iconName: "Activity" },
        { title: "Жүрек ауруы", desc: "Жүрек-қан тамырлары жүйесінің құрылымдық/функционалдық блоктары.", iconName: "Heart" },
        { title: "Жүрек талмасы", desc: "Тез көмекті қажет ететін бұлшықет қанының ағымының бұзылуы.", iconName: "BriefcaseMedical" }
      ],
      faq_items: [
        {
          q: "Өмір салтын өзгерту жүрек ауруын емдей ала ма?",
          a: "Иә, дұрыс тамақтану, тұрақты физикалық жаттығулар және шылым шегуден бас тарту сияқты өмір салтын өзгерту жүрек саулығын айтарлықтай жақсартып, тіпті кейбір зақымдарды қалпына келтіруі мүмкін."
        },
        {
          q: "Үндістанда жүрекке шунттау отасының қауіп факторлары қандай?",
          a: "Қауіп факторлары бүкіл әлемдегідей жасқа, жалпы денсаулыққа және қосымша ауруларға байланысты. Үндістан ауруханалары қауіпті барынша азайту үшін халықаралық қауіпсіздік стандарттарын қатаң сақтайды."
        },
        {
          q: "Жүрек ауруларының алдын қалай алуға болады?",
          a: "Алдын алу шаралары қан қысымын, холестерин деңгейін және қант диабетін бақылауды, салауатты салмақты сақтауды, теңгерімді тамақтануды және физикалық белсенділікті қамтиды."
        },
        {
          q: "Жүрек талмасы мен жүректің тоқтап қалуының айырмашылығы бар ма?",
          a: "Иә. Жүрек талмасы – қан айналымының бұзылуы (артерияның бітелуі), ал жүректің тоқтап қалуы – электрлік мәселе (жүректің кенеттен соқпай қалуы)."
        },
        {
          q: "Жүрек катетеризациясы кезінде не болады?",
          a: "Жіңішке түтікше қан тамыры арқылы жүрекке жеткізіліп, бітелген тамырларды ашу немесе стент қою сияқты диагностика немесе емдеу шараларын жүргізеді."
        },
        {
          q: "Жүрек ауруының белгілері қандай?",
          a: "Белгілеріне кеудедегі ауырсыну (стенокардия), ентігу, шаршау және мойын, жақ немесе тамақтағы ауырсыну жатады."
        },
        {
          q: "Үндістанда кардиология бойынша ең жақсы аурухана қайсысы?",
          a: "Ең үздік ауруханалар қатарына Fortis Escorts Heart Institute, Medanta және Apollo Hospitals кіреді. Олардың барлығы әлемдік деңгейдегі технологиялармен және хирургтармен жабдықталған."
        },
        {
          q: "Кардиология бойынша қай ел танымал?",
          a: "Үндістан Батыс елдеріне қарағанда әлдеқайда арзан бағамен күрделі жүрек оталарын сәтті жасауымен әлемге танымал."
        },
        {
          q: "Үндістанның №1 кардиологы кім?",
          a: "Үндістанда әлемге әйгілі кардиологтар өте көп. Доктор Нареш Трехан мен доктор Ашок Сет осы саладағы ең үздік ізашарлардың қатарында."
        }
      ],
      heroBadge: "Кардиология үздігі",
      doctors: [
        {
          name: "Dr. Naresh Trehan",
          exp: "42+ Years",
          role: "Төраға және бас кардиохирург",
          hospital: "Medanta - The Medicity, Gurugram",
          initials: "NT",
          gradient: "from-rose-500 to-red-600",
          image: "/images/doctors/228-Dr.-Praveer-Agarwal.jpg",
        },
        {
          name: "Dr. Ashok Seth",
          exp: "40+ Years",
          role: "Төраға - Fortis Escorts жүрек институты",
          hospital: "Fortis Escorts, New Delhi",
          initials: "AS",
          gradient: "from-red-600 to-amber-600",
          image: "/images/doctors/565-Dr.-Suman-Bhandari.jpg",
        },
        {
          name: "Dr. S.N. Gupta",
          exp: "38+ Years",
          role: "Аға директор – интервенциялық кардиология",
          hospital: "Max Super Speciality Hospital, New Delhi",
          initials: "SG",
          gradient: "from-red-600 to-orange-500",
          image: "/images/doctors/600-Dr.-Vijay-Kumar.jpg",
        },
        {
          name: "Dr. Purushottam Lal",
          exp: "35+ Years",
          role: "Төраға – Метро ауруханалар тобы",
          hospital: "Metro Hospital, Noida",
          initials: "PL",
          gradient: "from-rose-600 to-red-700",
          image: "/images/doctors/870-Dr.-Vivudh-Pratap-Singh.jpg",
        }
      ],
      hospitals: [
        {
          name: "Medanta - The Medicity",
          city: "Гуруграм, Дели NCR",
          accreditation: "JCI & NABH аккредиттелген",
          desc: "Үндістандағы гибридті катокологиялық зертханалары бар ең ірі көп мамандандырылған кардиологиялық орталық.",
          image: "/images/hospitals/621-Medanta-The-Medicity-Hospital.jpg",
        },
        {
          name: "Fortis Escorts Heart Institute",
          city: "Окла, Нью-Дели",
          accreditation: "JCI аккредиттелген",
          desc: "30 жылдан астам клиникалық және хирургиялық жетістіктері бар кардиологиялық көмек көрсету саласындағы пионер.",
          image: "/images/hospitals/848-Fortis-Escorts-Heart-Institute.jpg",
        },
        {
          name: "Max Super Speciality Hospital",
          city: "Сакет, Нью-Дели",
          accreditation: "NABH & JCI аккредиттелген",
          desc: "Күрделі кардиологиялық жағдайларға арналған кеңейтілген бейнелеу және роботты хирургиялық люкс.",
          image: "/images/hospitals/262-Max-Super-Speciality-Hospital-Saket.jpg",
        },
        {
          name: "Artemis Hospital",
          city: "Гуруграм, Дели NCR",
          accreditation: "JCI & NABH аккредиттелген",
          desc: "Соңғы үлгідегі жүрек-қантамырлық реанимация және операциядан кейінгі күтім бөлімшелері.",
          image: "/images/hospitals/500-Fortis-Memorial-Research-Institute.jpg",
        }
      ],
    }
  },
  conditions: [
    { title: "Hypertension", desc: "Monitoring blood pressure to avoid long-term vessel wear.", iconName: "Activity" },
    { title: "Heart Disease", desc: "Structural/functional cardiovascular blockages.", iconName: "Heart" },
    { title: "Heart Attack", desc: "Obstruction of muscular blood flow needing fast care.", iconName: "BriefcaseMedical" }
  ],
  techniques: [
    { title: "Robotic Coronary Bypass", desc: "Performing bypasses on beating hearts with sub-millimeter precision.", iconName: "Cpu" },
    { title: "3D Heart Modeling", desc: "Simulating blood flow and valve structures before surgery.", iconName: "ScanFace" },
    { title: "Hybrid Cath Labs", desc: "Combining angiography and surgical suites for immediate action.", iconName: "Activity" }
  ],
  patientStories: [
    { name: "Richard K.", locKey: "uk", image: "/images/sections/patient-stories/img1.jpg", rating: 5, outcome: "Successful Heart Bypass Recovery" },
    { name: "Sophie M.", locKey: "kz", image: "/images/sections/patient-stories/img2.jpg", rating: 5, outcome: "Complex Valve Replacement Success" },
    { name: "Dylan G.", locKey: "uz", image: "/images/sections/patient-stories/img3.jpg", rating: 5, outcome: "Double Chamber Pacemaker Care" },
    { name: "Ella H.", locKey: "ru", image: "/images/sections/patient-stories/img.jpg", rating: 5, outcome: "Successful Cardiac Rehabilitation" }
  ],
  faqItems: [
    {
      question: "What are the average success rates for cardiac bypass in India?",
      answer: "JCI-accredited partner cardiac centers in India report success rates exceeding 98.5% for bypass surgeries and complex valve repairs, aligning with top Western hospitals."
    },
    {
      question: "How long must I remain in India before flying back after heart surgery?",
      answer: "We advise patients to plan for a 10 to 14 day stay post-discharge to complete all recovery evaluations before taking a return flight."
    },
    {
      question: "Are medical visa invitations provided for cardiac treatments?",
      answer: "Yes, we coordinate directly with the hospital's clinical desk to issue priority medical visa invitation letters within 24-48 hours."
    }
  ]
};
