"use client";

import Image from "next/image";
import { CheckCircle, ArrowRight, FileText, Plane, Globe, Users, IdCard, Stamp, BookOpen } from "lucide-react";
import { Link } from "@/i18n/routing";

type Locale = "en" | "ru" | "uz" | "kk";

const tr = (locale: Locale, labels: Record<string, string>) => labels[locale] || labels.en;

export default function MedicalVisaAssistance({ locale }: { locale: string }) {
  const l = locale as Locale;

  const steps = [
    { icon: FileText, title: { en: "Share Travel Details", ru: "Сообщите данные поездки", uz: "Sayohat ma'lumotlarini bering", kk: "Сапар деректеріңізді беріңіз" },
      desc: { en: "Tell us about your nationality, treatment plan, and travel preferences.", ru: "Расскажите о гражданстве, плане лечения и предпочтениях.", uz: "Fuqaroligingiz, davolanish rejangiz va sayohat afzalliklaringiz haqida ma'lumot bering.", kk: "Азаматтығыңыз, емдеу жоспарыңыз және сапар қалауларыңыз туралы айтыңыз." } },
    { icon: BookOpen, title: { en: "Document Checklist", ru: "Список документов", uz: "Hujjatlar ro'yxati", kk: "Құжаттар тізімі" },
      desc: { en: "We provide a clear checklist of required documents based on your case.", ru: "Мы предоставляем чёткий список необходимых документов.", uz: "Sizning holatingizga qarab kerakli hujjatlar ro'yxatini taqdim etamiz.", kk: "Сіздің жағдайыңызға байланысты қажетті құжаттар тізімін ұсынамыз." } },
    { icon: Stamp, title: { en: "Hospital Document Support", ru: "Поддержка документов больницы", uz: "Shifoxona hujjatlarini qo'llab-quvvatlash", kk: "Аурухана құжаттарын қолдау" },
      desc: { en: "We coordinate treatment-related documents from partner hospitals.", ru: "Мы помогаем получить документы от больниц-партнёров.", uz: "Hamkor shifoxonalardan davolanish bilan bog'liq hujjatlarni olishga yordam beramiz.", kk: "Серіктес ауруханалардан емдеуге байланысты құжаттарды алуға көмектесеміз." } },
    { icon: Users, title: { en: "Companion Visa Guidance", ru: "Виза для сопровождающего", uz: "Hamroh vizasi bo'yicha ko'mak", kk: "Еріп жүрушіге виза алуға көмек" },
      desc: { en: "Assistance with attendant or companion visa documentation.", ru: "Помощь в оформлении визы для сопровождающего лица.", uz: "Hamroh uchun viza hujjatlarini tayyorlashda yordam.", kk: "Еріп жүрушіге виза құжаттарын дайындауға көмек." } },
  ];

  const docs = [
    { en: "Passport copy with minimum 6 months validity", ru: "Копия паспорта (срок действия от 6 месяцев)", uz: "Kamida 6 oy amal qiladigan pasport nusxasi", kk: "Кемінде 6 ай әрекет ететін паспорт көшірмесі" },
    { en: "Medical summary or treatment recommendation letter", ru: "Медицинское заключение или направление на лечение", uz: "Tibbiy xulosa yoki davolanish uchun tavsiyanoma", kk: "Медициналық қорытынды немесе емдеуге жолдама" },
    { en: "Hospital appointment or treatment plan documents", ru: "Документы из больницы о плане лечения", uz: "Shifoxonadagi davolanish rejasi hujjatlari", kk: "Ауруханадағы емдеу жоспарының құжаттары" },
    { en: "Proof of funds or sponsorship documents", ru: "Подтверждение финансов или спонсорства", uz: "Moliyaviy mablag'lar yoki homiylik hujjatlari", kk: "Қаржылық қаражатты немесе демеушілікті растау" },
    { en: "Attendant or companion details (if applicable)", ru: "Данные сопровождающего (если применимо)", uz: "Hamroh ma'lumotlari (agar kerak bo'lsa)", kk: "Еріп жүрушінің деректері (қажет болса)" },
    { en: "Travel itinerary and accommodation details", ru: "Маршрут и данные о проживании", uz: "Sayohat marshruti va turar joy ma'lumotlari", kk: "Сапар бағыты және тұру орны туралы мәліметтер" },
  ];

  const faqs = [
    {
      q: { en: "Do you issue medical visas directly?", ru: "Вы выдаёте медицинские визы напрямую?", uz: "Siz to'g'ridan-to'g'ri tibbiy viza berasizmi?", kk: "Сіз тікелей медициналық виза бересіз бе?" },
      a: { en: "No. We provide documentation guidance and coordination only. Visa approval decisions are made solely by the respective embassy or consulate.", ru: "Нет. Мы только помогаем с документами. Решение о выдаче визы принимает посольство.", uz: "Yo'q. Biz faqat hujjatlar bo'yicha yordam beramiz. Viza qarori tegishli elchixona tomonidan qabul qilinadi.", kk: "Жоқ. Біз тек құжаттар бойынша көмек көрсетеміз. Виза шешімін тиісті елшілік қабылдайды." } },
    {
      q: { en: "What documents will I need for a medical visa to India?", ru: "Какие документы нужны для медицинской визы в Индию?", uz: "Hindistonga tibbiy viza olish uchun qanday hujjatlar kerak?", kk: "Үндістанға медициналық виза алу үшін қандай құжаттар қажет?" },
      a: { en: "Required documents typically include a valid passport, medical summary from your doctor, hospital appointment letter, proof of funds, and travel details. We will provide a complete checklist based on your country of origin.", ru: "Обычно требуются загранпаспорт, медицинское заключение, письмо из больницы, подтверждение финансов и данные поездки. Мы предоставим полный список.", uz: "Odatda, amaldagi pasport, shifokor xulosasi, shifoxona chaqiruvi, mablag'lar tasdiqnomasi va sayohat ma'lumotlari kerak. Biz to'liq ro'yxatni taqdim etamiz.", kk: "Әдетте, қолданыстағы паспорт, дәрігердің қорытындысы, аурухана шақыруы, қаражатты растау және сапар деректері қажет. Біз толық тізімді ұсынамыз." } },
    {
      q: { en: "Can a family member travel with me?", ru: "Может ли родственник поехать со мной?", uz: "Birga oila a'zosi sayohat qilishi mumkinmi?", kk: "Менімен бірге отбасы мүшесі сапар шеге ала ма?" },
      a: { en: "Yes. Family members or attendants can apply for a medical attendant visa. We assist with preparing the required supporting documentation.", ru: "Да. Родственники могут оформить визу сопровождающего. Мы помогаем с документами.", uz: "Ha. Oila a'zolari hamrohlik vizasiga murojaat qilishlari mumkin. Biz kerakli hujjatlarni tayyorlashda yordam beramiz.", kk: "Иә. Отбасы мүшелері еріп жүруші визасына өтініш бере алады. Біз қажетті құжаттарды дайындауға көмектесеміз." } },
    {
      q: { en: "How long does the visa process take?", ru: "Сколько времени занимает оформление визы?", uz: "Viza jarayoni qancha vaqt oladi?", kk: "Виза рәсімі қанша уақыт алады?" },
      a: { en: "Processing times vary by embassy. We recommend starting the process at least 3-4 weeks before your planned travel date.", ru: "Сроки зависят от посольства. Рекомендуем начинать за 3-4 недели до поездки.", uz: "Muddatlar elchixonaga bog'liq. Sayohatdan kamida 3-4 hafta oldin jarayonni boshlashni tavsiya qilamiz.", kk: "Мерзімдер елшілікке байланысты. Сапардан кемінде 3-4 апта бұрын бастауды ұсынамыз." } },
    {
      q: { en: "Is my personal information kept confidential?", ru: "Мои данные останутся конфиденциальными?", uz: "Mening shaxsiy ma'lumotlarim maxfiymi?", kk: "Менің жеке деректерім құпия ма?" },
      a: { en: "Yes. All personal and medical information shared for visa assistance is used only for documentation and coordination purposes. Information is never sold or misused.", ru: "Да. Все данные используются только для оформления документов. Информация никогда не передаётся третьим лицам.", uz: "Ha. Barcha ma'lumotlar faqat hujjatlarni rasmiylashtirish uchun ishlatiladi. Ma'lumotlar hech qachon uchinchi shaxslarga berilmaydi.", kk: "Иә. Барлық деректер тек құжаттарды ресімдеу үшін пайдаланылады. Ақпарат ешқашан үшінші тұлғаларға берілмейді." } },
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
              <Plane size={14} />
              {tr(l, { en: "Visa Documentation Support", ru: "Помощь с визовыми документами", uz: "Viza hujjatlari bo'yicha yordam", kk: "Виза құжаттары бойынша көмек" })}
            </div>
            <h1 className="text-white font-bold text-4xl lg:text-[52px] font-montserrat leading-tight mb-4">
              {tr(l, { en: "Medical Visa Assistance", ru: "Помощь с медицинской визой", uz: "Tibbiy viza yordami", kk: "Медициналық виза алуға көмек" })}
            </h1>
            <p className="text-white/90 text-lg lg:text-xl max-w-[580px] font-medium leading-relaxed">
              {tr(l, {
                en: "Planning treatment in India? We help international patients prepare clear and complete visa documentation so you can focus on your medical journey.",
                ru: "Планируете лечение в Индии? Мы помогаем пациентам подготовить документы для визы, чтобы вы могли сосредоточиться на лечении.",
                uz: "Hindistonda davolanishni rejalashtiryapsizmi? Biz xalqaro bemorlarga aniq va to'liq viza hujjatlarini tayyorlashda yordam beramiz.",
                kk: "Үндістанда емделуді жоспарлап отырсыз ба? Біз халықаралық науқастарға нақты және толық виза құжаттарын дайындауға көмектесеміз.",
              })}
            </p>
          </div>
        </div>
        <div className="h-8 bg-[#FAFAFA] rounded-t-[32px] lg:rounded-t-[48px]" />
      </section>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20 -mt-2">
        {/* Why visa assistance matters */}
        <section className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-50 mb-6 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[#414042] font-bold text-2xl lg:text-[32px] font-montserrat leading-tight mb-6">
                {tr(l, { en: "Why Medical Visa Assistance Matters", ru: "Почему важна помощь с визой", uz: "Nima uchun viza yordami muhim", kk: "Неліктен визалық көмек маңызды" })}
              </h2>
              <p className="text-[#58595B] font-medium mb-4">
                {tr(l, { en: "Medical visa procedures vary by country and case type. Incomplete documentation or unclear treatment details can cause unnecessary delays in your treatment journey.", ru: "Процедуры получения медицинской визы различаются в зависимости от страны. Неполные документы могут вызвать задержки.", uz: "Tibbiy viza tartiblari mamlakatga qarab farqlanadi. To'liq bo'lmagan hujjatlar kechikishlarga olib kelishi mumkin.", kk: "Медициналық виза рәсімдері елге байланысты әртүрлі. Толық емес құжаттар кешіктіруге әкелуі мүмкін." })}
              </p>
              <ul className="space-y-3">
                {[
                  { en: "Documentation becomes clearer and more organized", ru: "Документы становятся понятнее и организованнее", uz: "Hujjatlar aniq va tartibli bo'ladi", kk: "Құжаттар түсінікті және ұйымдасқан болады" },
                  { en: "Common errors and omissions are reduced", ru: "Снижается количество ошибок и пропусков", uz: "Xatolar va kamchiliklar kamayadi", kk: "Қателер мен кемшіліктер азаяды" },
                  { en: "Treatment timelines can be planned more confidently", ru: "Сроки лечения можно планировать с уверенностью", uz: "Davolash muddatlarini ishonch bilan rejalashtirish mumkin", kk: "Емдеу мерзімдерін сенімді жоспарлауға болады" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EE4423] shrink-0 mt-0.5" />
                    <span className="text-[#58595B] font-medium text-[15px]">{tr(l, item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FFF5F2] order-1 lg:order-2">
              <Image src="/images/sections/process-flow/background-strokes.png" alt="" fill className="object-cover opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <IdCard className="w-16 h-16 text-[#EE4423]/30 mx-auto mb-4" />
                  <p className="text-[#414042] font-bold text-lg">{tr(l, { en: "Smooth documentation, smooth journey", ru: "Чёткие документы — спокойная поездка", uz: "Aniq hujjatlar — tinch sayohat", kk: "Нақты құжаттар — тыныш сапар" })}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-6 lg:mb-8">
          <div className="text-center mb-8">
            <h2 className="text-[#414042] font-bold text-2xl lg:text-[32px] font-montserrat">
              {tr(l, { en: "How We Help", ru: "Как мы помогаем", uz: "Qanday yordam beramiz", kk: "Қалай көмектесеміз" })}
            </h2>
            <p className="text-[#58595B] font-medium mt-2 max-w-2xl mx-auto">
              {tr(l, { en: "Step-by-step visa documentation support for your medical travel.", ru: "Пошаговая поддержка в оформлении визовых документов.", uz: "Tibbiy sayohatingiz uchun bosqichma-bosqich viza hujjatlarini qo'llab-quvvatlash.", kk: "Медициналық сапарыңызға арналған қадамдық виза құжаттарын қолдау." })}
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

        {/* Required documents */}
        <section className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-50 mb-6 lg:mb-8">
          <h2 className="text-[#414042] font-bold text-2xl lg:text-[32px] font-montserrat text-center mb-8">
            {tr(l, { en: "Documents That May Be Required", ru: "Документы, которые могут потребоваться", uz: "Kerak bo'lishi mumkin bo'lgan hujjatlar", kk: "Қажет болуы мүмкін құжаттар" })}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-3">
              {docs.map((doc, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#F9FAFB] rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-[#EE4423] shrink-0 mt-0.5" />
                  <span className="text-[#58595B] text-sm font-medium">{tr(l, doc)}</span>
                </div>
              ))}
            </div>
            <p className="text-[#A0A0A0] text-xs font-medium text-center mt-4">
              {tr(l, { en: "Requirements vary by country and embassy. We guide you based on the latest available information.", ru: "Требования различаются в зависимости от страны. Мы консультируем на основе актуальной информации.", uz: "Talablar mamlakatga qarab farqlanadi. Biz eng so'nggi ma'lumotlar asosida maslahat beramiz.", kk: "Таланттар елге байланысты өзгереді. Біз соңғы ақпарат негізінде кеңес береміз." })}
            </p>
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
            {tr(l, { en: "Ready to Start Your Visa Process?", ru: "Готовы начать оформление визы?", uz: "Viza jarayonini boshlashga tayyormisiz?", kk: "Виза рәсімін бастауға дайынсыз ба?" })}
          </h2>
          <p className="text-white/80 font-medium mb-6 max-w-2xl mx-auto">
            {tr(l, { en: "Share your details and our team will guide you through the visa documentation process.", ru: "Оставьте свои данные, и мы поможем с оформлением визовых документов.", uz: "Ma'lumotlaringizni qoldiring, biz viza hujjatlarini rasmiylashtirishda yordam beramiz.", kk: "Деректеріңізді қалдырыңыз, біз виза құжаттарын ресімдеуге көмектесеміз." })}
          </p>
          <Link href="/treatment-cost-estimate" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#EE4423] font-bold rounded-full hover:bg-white/90 transition-all">
            <Globe className="w-4 h-4" />
            {tr(l, { en: "Get Visa Assistance", ru: "Получить помощь", uz: "Yordam olish", kk: "Көмек алу" })}
          </Link>
        </section>
      </div>
    </main>
  );
}
