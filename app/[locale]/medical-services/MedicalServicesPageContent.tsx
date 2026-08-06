"use client";

import Image from "next/image";
import { ArrowRight, Globe, Stethoscope ,Sparkles , Hospital , Users} from "lucide-react";
import { Link } from "@/i18n/routing";

type Locale = "en" | "ru" | "uz" | "kk";
const tr = (locale: Locale, labels: Record<string, string>) => labels[locale] || labels.en;

export default function MedicalServicesPageContent({ locale }: { locale: string }) {
  const l = locale as Locale;

  const services = [
    {
      title: { en: "Comprehensive Medical Services", ru: "Полный спектр медицинских услуг", uz: "To'liq tibbiy xizmatlar", kk: "Кең ауқымды медициналық қызметтер" },
      description: {
        en: "India Med Service connects international patients with top-quality care across cardiology, orthopedics, oncology, neurology, and more.",
        ru: "India Med Service обеспечивает международных пациентов качественной помощью в кардиологии, ортопедии, онкологии, неврологии и других направлениях.",
        uz: "India Med Service xalqaro bemorlarni kardiologiya, ortopediya, onkologiya, nevrologiya va boshqa sohalarda yuqori sifatli yordam bilan bog'laydi.",
        kk: "India Med Service халықаралық науқастарды кардиология, ортопедия, онкология, неврология және басқа салаларда сапалы көмекпен қамтамасыз етеді.",
      },
      icon: Sparkles,
    },
    {
      title: { en: "Trusted Partner Hospitals", ru: "Надёжные партнёры", uz: "Ishonchli shifoxonalar", kk: "Сенімді серіктес ауруханалар" },
      description: {
        en: "Partner hospitals are accredited by JCI and NABH to ensure patient safety and international standards.",
        ru: "Партнёрские больницы аккредитованы JCI и NABH для обеспечения безопасности пациентов и международных стандартов.",
        uz: "Hamkor shifoxonalar XCI va NABH tomonidan akkreditatsiyalangan bo'lib, bemor xavfsizligi va xalqaro standartlarni ta'minlaydi.",
        kk: "Серіктес ауруханалар JCI және NABH аккредитациясынан өтіп, науқас қауіпсіздігі мен халықаралық стандарттарды қамтамасыз етеді.",
      },
      icon: Hospital,
    },
    {
      title: { en: "Personalised Care Pathways", ru: "Персонализированные планы", uz: "Shaxsiylashtirilgan parvarish yo'llari", kk: "Жеке күтім жоспарлары" },
      description: {
        en: "Our coordinators tailor treatment plans, hospital selection, and travel support to your medical needs.",
        ru: "Наши координаторы подбирают планы лечения, выбор больницы и поддержку поездки под ваши потребности.",
        uz: "Uzoq boshqaruvchilarimiz davolash rejalari, shifoxona tanlovi va sayohat yordamini sizning tibbiy ehtiyojlaringizga moslashtiradi.",
        kk: "Координаторларымыз емдеу жоспарын, аурухана таңдауын және сапар қолдауын сіздің медициналық қажеттіліктеріңізге бейімдейді.",
      },
      icon: Users,
    },
  ];

  const highlightCards = [
    {
      label: { en: "Cardiology", ru: "Кардиология", uz: "Kardiologiya", kk: "Кардиология" },
      description: { en: "Advanced heart care, bypass surgery, and minimally invasive interventions.", ru: "Передовая кардиологическая помощь, шунтирование и малоинвазивные вмешательства.", uz: "Yurak bo'yicha ilg'or yordam, bypass jarrohligi va kam invaziv aralashuvlar.", kk: "Көрсетілген кардиологиялық көмек, шунттеу және аз инвазивті әдістер." },
    },
    {
      label: { en: "Orthopedics", ru: "Ортопедия", uz: "Ortopediya", kk: "Ортопедия" },
      description: { en: "Joint replacements, spinal surgery, and sports injury recovery.", ru: "Замена суставов, позвоночная хирургия и восстановление после травм.", uz: "Bo'g'im almashtirish, umurtqa jarrohligi va sport jarohatlarini tiklash.", kk: "Тірек-қимыл аппараты, арқа хирургиясы және спорттық жарақаттан қалпына келтіру." },
    },
    {
      label: { en: "Oncology", ru: "Онкология", uz: "Onkologiya", kk: "Онкология" },
      description: { en: "Comprehensive cancer treatment with precision surgery and chemotherapy support.", ru: "Комплексная онкологическая помощь с точной хирургией и химиотерапией.", uz: "Aniq jarrohlik va kimyoterapiya yordami bilan to'liq onkologik davolash.", kk: "Дәл хирургия және химия терапиясы көмегімен толық онкологиялық көмек." },
    },
  ];

  const contactCards = [
    {
      title: { en: "Free Consultation", ru: "Бесплатная консультация", uz: "Bepul maslahat", kk: "Тегін кеңес" },
      description: { en: "Speak with a coordinator about your condition and treatment options.", ru: "Поговорите с координатором о вашей болезни и вариантах лечения.", uz: "Holatingiz va davolash variantlari haqida koordinator bilan gaplashing.", kk: "Жағдайыңыз және емдеу нұсқалары туралы үйлестірушімен сөйлесіңіз." },
      href: "/contact",
    },
    {
      title: { en: "Treatment Estimate", ru: "Оценка стоимости", uz: "Davolash narxini baholash", kk: "Емдеу құнын бағалау" },
      description: { en: "Receive a clear cost estimate for your planned procedure.", ru: "Получите понятную оценку стоимости вашей запланированной процедуры.", uz: "Rejalashtirilgan jarrohingiz uchun aniq narx bahosini oling.", kk: "Жоспарланған процедураңыз үшін нақты баға алыңыз." },
      href: "/treatment-cost-estimate",
    },
    {
      title: { en: "Visa Assistance", ru: "Помощь с визой", uz: "Viza yordami", kk: "Виза көмегі" },
      description: { en: "Prepare all travel and medical visa documents without stress.", ru: "Подготовьте все документы для поездки и визы без стресса.", uz: "Sayohat va tibbiy viza hujjatlarini stresslarsiz tayyorlang.", kk: "Сапар және медициналық виза құжаттарын стресссіз дайындаңыз." },
      href: "/medical-visa-assistance",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#414042]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EE4423] to-[#d63a1b] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.45),_transparent_40%)]" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <Stethoscope className="w-4 h-4" />
              {tr(l, { en: "Medical Services in India", ru: "Медицинские услуги в Индии", uz: "Hindistondagi tibbiy xizmatlar", kk: "Үндістандағы медициналық қызметтер" })}
            </span>
            <h1 className="font-montserrat font-bold text-4xl lg:text-[56px] leading-tight mb-6">
              {tr(l, { en: "World-Class Treatment Across India’s Top Hospitals", ru: "Мировой уровень лечения в лучших больницах Индии", uz: "Hindistonning eng yaxshi shifoxonalarida jahon darajasidagi davolanish", kk: "Үндістанның жетекші ауруханаларында әлемдік деңгейдегі ем" })}
            </h1>
            <p className="max-w-2xl text-base lg:text-xl text-white/90 leading-relaxed">
              {tr(l, { en: "From complex surgery to rehabilitation, India Med Service helps international patients navigate medical services, hospital appointments, and complete travel support.", ru: "От сложных операций до реабилитации — India Med Service помогает международным пациентам ориентироваться в медицинских услугах, записях в больницу и поддержке путешествий.", uz: "Murakkab jarrohlikdan tiklanishga qadar — India Med Service xalqaro bemorlarga tibbiy xizmatlar, shifoxona tayinlash va sayohat yordamida yo‘l-yo‘riq ko‘rsatadi.", kk: "Күрделі хирургиядан реабилитацияға дейін — India Med Service халықаралық науқастарға медициналық қызметтерді, аурухана қабылдауларын және толық сапар қолдауын ұйымдастыруға көмектеседі." })}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[#EE4423] font-bold shadow-lg shadow-[#00000020] hover:opacity-95 transition">
                {tr(l, { en: "Get Started", ru: "Начать", uz: "Boshlash", kk: "Бастау" })}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/treatment-cost-estimate" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/20 transition">
                {tr(l, { en: "Estimate Treatment Cost", ru: "Оценить стоимость", uz: "Davolash narxini baholash", kk: "Емдеу құнын бағалау" })}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((item, index) => (
            <div key={index} className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#EE4423]/10 text-[#EE4423] flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-xl mb-3 font-montserrat">{tr(l, item.title)}</h2>
              <p className="text-[#58595B] text-sm leading-relaxed">{tr(l, item.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF6F0] py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center rounded-full bg-[#FFE7DC] px-4 py-1 text-sm font-semibold text-[#BF4D2B] mb-4">
              {tr(l, { en: "Featured Services", ru: "Популярные услуги", uz: "Mavjud xizmatlar", kk: "Таңдамалы қызметтер" })}
            </span>
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl leading-tight">
              {tr(l, { en: "Specialist Services for Every Treatment Need", ru: "Специализированные услуги для любого лечения", uz: "Har qanday davolash ehtiyoji uchun mutaxassislik xizmatlari", kk: "Әрбір емдеу қажеттілігіне арналған мамандандырылған қызметтер" })}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {highlightCards.map((card, index) => (
              <div key={index} className="rounded-[28px] bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-xl mb-3 font-montserrat">{tr(l, card.label)}</h3>
                <p className="text-[#58595B] text-sm leading-relaxed">{tr(l, card.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {contactCards.map((card, index) => (
            <Link key={index} href={card.href} className="group rounded-[28px] border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-xl font-montserrat">{tr(l, card.title)}</h3>
                <ArrowRight className="w-5 h-5 text-[#EE4423] transition group-hover:translate-x-1" />
              </div>
              <p className="text-[#58595B] text-sm leading-relaxed">{tr(l, card.description)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#EE4423] py-16 lg:py-24 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#FFE7DC] font-bold mb-4">
                {tr(l, { en: "Need help now?", ru: "Нужна помощь сейчас?", uz: "Endi yordam kerakmi?", kk: "Қазір көмек керек пе?" })}
              </p>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl leading-tight mb-4">
                {tr(l, { en: "Speak to a medical coordinator today", ru: "Поговорите с медицинским координатором сегодня", uz: "Bugun tibbiy kordinator bilan gaplashing", kk: "Бүгін медициналық үйлестірушімен сөйлесіңіз" })}
              </h2>
              <p className="text-[#FFF4ED] text-sm lg:text-base leading-relaxed max-w-2xl">
                {tr(l, { en: "We arrange hospital appointments, treatment plans, and travel support so you can focus on recovery.", ru: "Мы организуем записи в больницы, планы лечения и поддержку поездки, чтобы вы могли сосредоточиться на восстановлении.", uz: "Biz shifoxona uchrashuvlari, davolash rejasi va sayohat yordamini tashkil qilamiz, siz tiklanishga e'tibor qaratasiz.", kk: "Біз аурухана қабылдауларын, емдеу жоспарларын және сапар қолдауын ұйымдастырамыз, сіз қалпына келуге көңіл бөле аласыз." })}
              </p>
            </div>
            <div className="rounded-[32px] bg-white p-10 text-[#414042] shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-3xl bg-[#FFE7DC] flex items-center justify-center text-[#EE4423]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#EE4423] font-bold mb-1">{tr(l, { en: "Call us", ru: "Позвоните нам", uz: "Qo'ng'iroq qiling", kk: "Бізге қоңырау шалыңыз" })}</p>
                  <p className="font-semibold text-xl">+998 78 555 11 71</p>
                </div>
              </div>
              <p className="text-[#58595B] text-sm leading-relaxed mb-8">
                {tr(l, { en: "International patients can contact us for a free medical services consultation.", ru: "Международные пациенты могут связаться с нами для бесплатной консультации по медицинским услугам.", uz: "Xalqaro bemorlar bepul tibbiy xizmatlar bo'yicha maslahat olishlari mumkin.", kk: "Халықаралық науқастар бізбен медициналық қызметтер бойынша тегін кеңес алу үшін байланыса алады." })}
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#EE4423] px-6 py-3 text-white font-bold hover:bg-[#d63a1b] transition">
                <ArrowRight className="w-4 h-4" />
                {tr(l, { en: "Contact Us", ru: "Свяжитесь с нами", uz: "Biz bilan bog'laning", kk: "Бізбен хабарласыңыз" })}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
