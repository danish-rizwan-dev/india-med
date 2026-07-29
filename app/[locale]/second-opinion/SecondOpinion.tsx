"use client";

import Image from "next/image";
import { CheckCircle, ArrowRight, FileSearch, ClipboardList, Stethoscope, MessageSquareText, Shield, Brain, Heart, FileText } from "lucide-react";
import { Link } from "@/i18n/routing";

type Locale = "en" | "ru" | "uz" | "kk";

const tr = (locale: Locale, labels: Record<string, string>) => labels[locale] || labels.en;

export default function SecondOpinion({ locale }: { locale: string }) {
  const l = locale as Locale;

  const steps = [
    { icon: FileText, title: { en: "Share Your Records", ru: "Поделитесь документами", uz: "Hujjatlaringizni ulashing", kk: "Құжаттарыңызбен бөлісіңіз" },
      desc: { en: "Send us your medical reports, scans, and a brief description of your condition.", ru: "Отправьте нам медицинские заключения, снимки и краткое описание.", uz: "Bizga tibbiy hisobotlar, skaner va holatingiz haqida qisqacha ma'lumot yuboring.", kk: "Бізге медициналық есептерді, сканерлерді және жағдайыңыздың қысқаша сипаттамасын жіберіңіз." } },
    { icon: Stethoscope, title: { en: "Expert Review", ru: "Экспертная оценка", uz: "Ekspert baholash", kk: "Сараптамалық бағалау" },
      desc: { en: "Your case is reviewed by a specialist whose expertise matches your condition.", ru: "Ваш случай изучает специалист соответствующего профиля.", uz: "Sizning holatingiz tegishli mutaxassis tomonidan ko'rib chiqiladi.", kk: "Сіздің жағдайыңызды тиісті маман қарайды." } },
    { icon: ClipboardList, title: { en: "Detailed Report", ru: "Подробный отчет", uz: "Batafsil hisobot", kk: "Егжей-тегжейлі есеп" },
      desc: { en: "Receive a clear written summary with diagnosis confirmation and treatment options.", ru: "Получите письменное заключение с подтверждением диагноза и вариантами лечения.", uz: "Tashxis tasdiqlanishi va davolash variantlari bilan yozma xulosa oling.", kk: "Диагнозды растау және емдеу нұсқаларымен жазбаша қорытынды алыңыз." } },
    { icon: MessageSquareText, title: { en: "Follow-up Guidance", ru: "Последующие рекомендации", uz: "Keyingi tavsiyalar", kk: "Кейінгі ұсыныстар" },
      desc: { en: "Our team helps you understand the opinion and plan your next steps.", ru: "Наша команда поможет вам понять заключение и спланировать дальнейшие шаги.", uz: "Jamoamiz sizga xulosani tushunishga va keyingi qadamlarni rejalashtirishga yordam beradi.", kk: "Біздің команда сізге қорытындыны түсінуге және келесі қадамдарды жоспарлауға көмектеседі." } },
  ];

  const benefits = [
    { icon: Brain, title: { en: "Diagnostic Clarity", ru: "Ясность диагноза", uz: "Tashxis anielligi", kk: "Диагноздың нақтылығы" },
      desc: { en: "Confirm or refine your diagnosis before committing to a treatment plan.", ru: "Подтвердите или уточните диагноз перед началом лечения.", uz: "Davolashni boshlashdan oldin tashxisni tasdiqlang yoki aniqlang.", kk: "Емдеуді бастамас бұрын диагнозды растаңыз немесе нақтылаңыз." } },
    { icon: Shield, title: { en: "Avoid Unnecessary Procedures", ru: "Избежать лишних процедур", uz: "Keraksiz muolajalardan saqlaning", kk: "Қажетсіз процедуралардан аулақ болыңыз" },
      desc: { en: "A second opinion may help identify less invasive or more suitable alternatives.", ru: "Второе мнение может помочь найти менее инвазивные альтернативы.", uz: "Ikkinchi fikr kamroq invaziv muqobil variantlarni topishga yordam beradi.", kk: "Екінші пікір инвазивті емес балама нұсқаларды табуға көмектесуі мүмкін." } },
    { icon: Heart, title: { en: "Peace of Mind", ru: "Уверенность и спокойствие", uz: "Ishonch va xotirjamlik", kk: "Сенімділік пен тыныштық" },
      desc: { en: "Proceed with confidence after having your case reviewed by another expert.", ru: "Действуйте уверенно после консультации другого специалиста.", uz: "Boshqa mutaxassis tomonidan ko'rib chiqilgandan so'ng ishonch bilan harakat qiling.", kk: "Басқа маманның қарауынан кейін сенімді әрекет етіңіз." } },
  ];

  const whenToSeek = [
    { en: "Surgery has been recommended and you want confirmation", ru: "Рекомендована операция, и вы хотите подтверждения", uz: "Operatsiya tavsiya etilgan va siz tasdiqlashni xohlaysiz", kk: "Операция ұсынылды және сіз растауды қалайсыз" },
    { en: "Symptoms persist despite ongoing treatment", ru: "Симптомы сохраняются, несмотря на лечение", uz: "Davolanishga qaramay alomatlar davom etmoqda", kk: "Емдеуге қарамастан белгілер сақталады" },
    { en: "The diagnosis is unclear or incomplete", ru: "Диагноз неясен или неполон", uz: "Tashxis noaniq yoki to'liq emas", kk: "Диагноз анық емес немесе толық емес" },
    { en: "You want to explore alternative or less invasive options", ru: "Вы хотите рассмотреть альтернативные методы", uz: "Siz muqobil yoki kamroq invaziv variantlarni ko'rib chiqmoqchisiz", kk: "Сіз балама немесе аз инвазивті нұсқаларды қарастырғыңыз келеді" },
    { en: "Multiple opinions have created uncertainty", ru: "Разные мнения создали неопределенность", uz: "Turli fikrlar noaniqlikni keltirib chiqardi", kk: "Әртүрлі пікірлер белгісіздік тудырды" },
  ];

  const faqs = [
    {
      q: { en: "What is a second opinion and why should I seek one?", ru: "Что такое второе мнение и зачем его получать?", uz: "Ikkinchi fikr nima va nega uni olish kerak?", kk: "Екінші пікір дегеніміз не және неге оны алу керек?" },
      a: { en: "A second opinion is an independent evaluation of your diagnosis or treatment plan by another qualified specialist. It helps confirm your diagnosis, identify alternative treatments, or provide reassurance before making major medical decisions.", ru: "Второе мнение — это независимая оценка вашего диагноза или плана лечения другим специалистом. Это помогает подтвердить диагноз, найти альтернативы или получить уверенность перед важными решениями.", uz: "Ikkinchi fikr - bu sizning tashxisingiz yoki davolash rejangizning boshqa mutaxassis tomonidan mustaqil baholanishi. Bu tashxisni tasdiqlash, muqobil davolash usullarini topish yoki muhim qarorlar qabul qilishdan oldin ishonch hosil qilishga yordam beradi.", kk: "Екінші пікір - бұл сіздің диагнозыңызды немесе емдеу жоспарыңызды басқа білікті маманның тәуелсіз бағалауы. Бұл диагнозды растауға, балама емдеу әдістерін табуға немесе маңызды шешімдер қабылдау алдында сенімділік алуға көмектеседі." } },
    {
      q: { en: "What documents should I share?", ru: "Какие документы нужно предоставить?", uz: "Qanday hujjatlarni taqdim etishim kerak?", kk: "Қандай құжаттарды ұсынуым керек?" },
      a: { en: "You may share doctor consultation notes, imaging reports (MRI, CT, X-ray), lab test results, biopsy reports, current treatment plan, medication list, and any specific questions you want the specialist to address.", ru: "Вы можете поделиться записями врача, результатами МРТ, КТ, рентгена, лабораторными анализами, биопсией, планом лечения и списком лекарств.", uz: "Siz shifokor konsultatsiyasi yozuvlari, MRI, KT, rentgen natijalari, laboratoriya tahlillari, biopsiya, davolash rejasi va dori-darmonlar ro'yxatini ulashingiz mumkin.", kk: "Сіз дәрігердің жазбаларымен, МРТ, КТ, рентген нәтижелерімен, зертханалық талдаулармен, биопсиямен, емдеу жоспарымен және дәрі-дәрмек тізімімен бөлісе аласыз." } },
    {
      q: { en: "How long does it take to receive the second opinion?", ru: "Сколько времени занимает получение второго мнения?", uz: "Ikkinchi fikrni olish qancha vaqt oladi?", kk: "Екінші пікірді алу қанша уақыт алады?" },
      a: { en: "Typically, you will receive the written second opinion within 3-5 business days after all your medical records have been submitted.", ru: "Обычно письменное второе мнение приходит в течение 3-5 рабочих дней после предоставления всех документов.", uz: "Odatda, barcha tibbiy hujjatlar taqdim etilganidan keyin 3-5 ish kuni ichida yozma ikkinchi fikrni olasiz.", kk: "Әдетте, барлық медициналық құжаттар ұсынылғаннан кейін 3-5 жұмыс күні ішінде жазбаша екінші пікір аласыз." } },
    {
      q: { en: "Will my medical information remain confidential?", ru: "Останется ли моя информация конфиденциальной?", uz: "Mening tibbiy ma'lumotlarim maxfiy qoladimi?", kk: "Менің медициналық ақпаратым құпия болып қала ма?" },
      a: { en: "Yes. All medical information you share is used solely for evaluation and care coordination. Your data is never sold, published, or shared without your consent.", ru: "Да. Вся информация используется только для оценки и координации. Ваши данные никогда не продаются и не публикуются.", uz: "Ha. Barcha ma'lumotlar faqat baholash va muvofiqlashtirish uchun ishlatiladi. Ma'lumotlaringiz hech qachon sotilmaydi yoki nashr etilmaydi.", kk: "Иә. Барлық ақпарат тек бағалау және үйлестіру үшін пайдаланылады. Деректеріңіз ешқашан сатылмайды немесе жарияланбайды." } },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#EE4423] to-[#d63a1b] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <Stethoscope size={14} />
              {tr(l, { en: "Independent Medical Review", ru: "Независимая экспертиза", uz: "Mustaqil tibbiy ko'rib chiqish", kk: "Тәуелсіз медициналық сараптама" })}
            </div>
            <h1 className="text-white font-bold text-4xl lg:text-[52px] font-montserrat leading-tight mb-4">
              {tr(l, { en: "Second Medical Opinion", ru: "Второе медицинское мнение", uz: "Ikkinchi tibbiy fikr", kk: "Екінші медициналық пікір" })}
            </h1>
            <p className="text-white/90 text-lg lg:text-xl max-w-[580px] font-medium leading-relaxed">
              {tr(l, {
                en: "Get clarity and confidence before making treatment decisions. Our network of specialists provides independent case reviews to help you choose the right path.",
                ru: "Получите ясность и уверенность перед принятием решений о лечении. Наши специалисты проведут независимую оценку вашего случая.",
                uz: "Davolash qarorlarini qabul qilishdan oldin aniqlik va ishonchga ega bo'ling. Mutaxassislarimiz mustaqil baholashni taqdim etadi.",
                kk: "Емдеу туралы шешім қабылдамас бұрын нақтылық пен сенімділікке ие болыңыз. Біздің мамандар тәуелсіз бағалауды ұсынады.",
              })}
            </p>
          </div>
        </div>
        <div className="h-8 bg-[#FAFAFA] rounded-t-[32px] lg:rounded-t-[48px]" />
      </section>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20 -mt-2">
        {/* When to seek */}
        <section className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-50 mb-6 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-[#414042] font-bold text-2xl lg:text-[32px] font-montserrat leading-tight mb-6">
                {tr(l, { en: "When to Seek a Second Opinion", ru: "Когда стоит получить второе мнение", uz: "Qachon ikkinchi fikr olish kerak", kk: "Қашан екінші пікір алу керек" })}
              </h2>
              <ul className="space-y-3">
                {whenToSeek.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EE4423] shrink-0 mt-0.5" />
                    <span className="text-[#58595B] font-medium text-[15px]">{tr(l, item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FFF5F2]">
              <Image src="/images/sections/process-flow/background-strokes.png" alt="" fill className="object-cover opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <Stethoscope className="w-16 h-16 text-[#EE4423]/30 mx-auto mb-4" />
                  <p className="text-[#414042] font-bold text-lg">{tr(l, { en: "Clarity leads to confidence", ru: "Ясность ведёт к уверенности", uz: "Aniqlik ishonchga olib keladi", kk: "Нақтылық сенімділікке әкеледі" })}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-6 lg:mb-8">
          <div className="text-center mb-8">
            <h2 className="text-[#414042] font-bold text-2xl lg:text-[32px] font-montserrat">
              {tr(l, { en: "How It Works", ru: "Как это работает", uz: "Qanday ishlaydi", kk: "Қалай жұмыс істейді" })}
            </h2>
            <p className="text-[#58595B] font-medium mt-2 max-w-2xl mx-auto">
              {tr(l, { en: "A simple four-step process to get an expert medical opinion.", ru: "Простой процесс из четырёх шагов.", uz: "Ekspert tibbiy fikr olish uchun to'rt qadam.", kk: "Сараптамалық медициналық пікір алудың қарапайым төрт қадамы." })}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-50 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#EE4423]/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-[#EE4423]" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#EE4423] font-bold text-sm">{tr(l, { en: "Step", ru: "Шаг", uz: "Qadam", kk: "Қадам" })} {i + 1}</span>
                </div>
                <h3 className="text-[#414042] font-bold text-lg font-montserrat mb-1">{tr(l, step.title)}</h3>
                <p className="text-[#58595B] text-sm font-medium">{tr(l, step.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-50 mb-6 lg:mb-8">
          <h2 className="text-[#414042] font-bold text-2xl lg:text-[32px] font-montserrat text-center mb-8">
            {tr(l, { en: "Key Benefits", ru: "Основные преимущества", uz: "Asosiy afzalliklar", kk: "Негізгі артықшылықтар" })}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((ben, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#EE4423]/10 flex items-center justify-center mx-auto mb-4">
                  <ben.icon className="w-7 h-7 text-[#EE4423]" />
                </div>
                <h3 className="text-[#414042] font-bold text-lg font-montserrat mb-2">{tr(l, ben.title)}</h3>
                <p className="text-[#58595B] text-sm font-medium">{tr(l, ben.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-50 mb-6 lg:mb-8">
          <h2 className="text-[#414042] font-bold text-2xl lg:text-[32px] font-montserrat text-center mb-8">
            {tr(l, { en: "Frequently Asked Questions", ru: "Часто задаваемые вопросы", uz: "Tez-tez so'raladigan savollar", kk: "Жиі қойылатын сұрақтар" })}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-gray-100 bg-[#F9FAFB] open:bg-white transition-all">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-[#414042] font-bold text-[15px]">
                  {tr(l, faq.q)}
                  <ArrowRight className="w-4 h-4 text-[#EE4423] shrink-0 group-open:rotate-90 transition-transform ml-4" />
                </summary>
                <div className="px-5 pb-4 text-[#58595B] text-sm font-medium leading-relaxed">
                  {tr(l, faq.a)}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#EE4423] to-[#d63a1b] rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="font-bold text-2xl lg:text-[32px] font-montserrat mb-4">
            {tr(l, { en: "Ready to Get a Second Opinion?", ru: "Готовы получить второе мнение?", uz: "Ikkinchi fikr olishga tayyormisiz?", kk: "Екінші пікір алуға дайынсыз ба?" })}
          </h2>
          <p className="text-white/80 font-medium mb-6 max-w-2xl mx-auto">
            {tr(l, { en: "Share your case details and our team will connect you with the right specialist.", ru: "Расскажите о вашем случае, и мы подберём подходящего специалиста.", uz: "Holatingiz haqida ma'lumot bering, biz sizga mos mutaxassisni topamiz.", kk: "Жағдайыңыз туралы айтыңыз, біз сізге сәйкес маманды табамыз." })}
          </p>
          <Link href="/treatment-cost-estimate" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#EE4423] font-bold rounded-full hover:bg-white/90 transition-all">
            <FileSearch className="w-4 h-4" />
            {tr(l, { en: "Start Your Review", ru: "Начать проверку", uz: "Ko'rib chiqishni boshlash", kk: "Қарауды бастау" })}
          </Link>
        </section>
      </div>
    </main>
  );
}
