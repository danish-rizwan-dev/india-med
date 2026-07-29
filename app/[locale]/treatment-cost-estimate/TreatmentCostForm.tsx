"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle, ArrowLeft, Hospital, DollarSign, Globe, User, Mail, MessageSquare, Heart, Shield, Clock, Upload } from "lucide-react";
import { Link } from "@/i18n/routing";

const ageOptions = [
  { value: "", label: { en: "Select age range", ru: "Выберите возраст", uz: "Yosh oralig'ini tanlang", kk: "Жас аралығын таңдаңыз" } },
  { value: "under-18", label: { en: "Under 18", ru: "До 18", uz: "18 yoshdan kichik", kk: "18 жасқа дейін" } },
  { value: "18-35", label: { en: "18 – 35", ru: "18–35", uz: "18–35", kk: "18–35" } },
  { value: "36-50", label: { en: "36 – 50", ru: "36–50", uz: "36–50", kk: "36–50" } },
  { value: "50-plus", label: { en: "50 or older", ru: "50 и старше", uz: "50 va undan katta", kk: "50 және одан үлкен" } },
];

const budgetOptions = [
  { value: "", label: { en: "Select budget range", ru: "Выберите бюджет", uz: "Byudjet oralig'ini tanlang", kk: "Бюджет аралығын таңдаңыз" } },
  { value: "under-3000", label: { en: "Under $3,000", ru: "До $3,000", uz: "$3,000 gacha", kk: "$3,000 дейін" } },
  { value: "3000-7000", label: { en: "$3,000 – $7,000", ru: "$3,000–$7,000", uz: "$3,000–$7,000", kk: "$3,000–$7,000" } },
  { value: "7000-15000", label: { en: "$7,000 – $15,000", ru: "$7,000–$15,000", uz: "$7,000–$15,000", kk: "$7,000–$15,000" } },
  { value: "15000-plus", label: { en: "$15,000+", ru: "$15,000+", uz: "$15,000+", kk: "$15,000+" } },
  { value: "not-sure", label: { en: "Not sure", ru: "Не уверен", uz: "Aniq emas", kk: "Сенімді емеспін" } },
];

type Locale = "en" | "ru" | "uz" | "kk";

const tr = (locale: Locale, labels: Record<string, string>) => labels[locale] || labels.en;

export default function TreatmentCostForm({ locale }: { locale: string }) {
  const l = locale as Locale;
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", age: "", country: "",
    condition: "", hospital: "", budget: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrescriptionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPrescriptionUploaded(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#FAFAFA] via-[#FCF9F7] to-[#FFF5F2] flex items-center justify-center px-6">
        <div className="relative w-full max-w-[520px]">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#EE4423]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#EE4423]/10 rounded-full blur-2xl" />
          <div className="relative bg-white rounded-[32px] p-10 lg:p-14 text-center shadow-xl border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-[#414042] font-bold text-2xl lg:text-3xl font-montserrat mb-3">
              {tr(l, { en: "Estimate Request Sent!", ru: "Запрос отправлен!", uz: "So'rov yuborildi!", kk: "Сұраныс жіберілді!" })}
            </h1>
            <div className="w-16 h-0.5 bg-[#EE4423] mx-auto mb-5 rounded-full" />
            <p className="text-[#58595B] font-medium leading-relaxed mb-8">
              {tr(l, {
                en: "Thank you! Our senior medical coordinator will review your information and call you back within 24 hours with a personalized treatment cost estimate.",
                ru: "Спасибо! Наш старший медицинский координатор проверит вашу информацию и перезвонит вам в течение 24 часов с индивидуальной оценкой стоимости лечения.",
                uz: "Rahmat! Katta tibbiy koordinatorimiz ma'lumotlaringizni ko'rib chiqadi va 24 soat ichida sizga shaxsiy davolanish narxini baholash bilan qo'ng'iroq qiladi.",
                kk: "Рақмет! Аға медициналық үйлестірушіміз ақпаратыңызды қарап, 24 сағат ішінде сізге жеке емдеу құнын бағалаумен қоңырау шалады.",
              })}
            </p>
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#EE4423] text-white font-bold rounded-full hover:bg-[#d63a1b] transition-all active:scale-[0.97]">
              <ArrowLeft size={18} />
              {tr(l, { en: "Back to Home", ru: "На главную", uz: "Bosh sahifaga", kk: "Басты бетке" })}
            </Link>
          </div>
        </div>
      </main>
    );
  }

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
              <Heart size={14} />
              {tr(l, { en: "Free & No Obligation", ru: "Бесплатно и без обязательств", uz: "Bepul va majburiyatsiz", kk: "Тегін және міндеттемесіз" })}
            </div>
            <h1 className="text-white font-bold text-4xl lg:text-[52px] font-montserrat leading-tight mb-4">
              {tr(l, {
                en: "Treatment Cost Estimate",
                ru: "Оценка стоимости лечения",
                uz: "Davolash narxini baholash",
                kk: "Емдеу құнын бағалау",
              })}
            </h1>
            <p className="text-white/90 text-lg lg:text-xl max-w-[580px] font-medium leading-relaxed">
              {tr(l, {
                en: "Tell us about your medical needs and we will provide a free, personalized cost estimate within 24 hours.",
                ru: "Расскажите о ваших медицинских потребностях, и мы предоставим бесплатную индивидуальную оценку стоимости в течение 24 часов.",
                uz: "Tibbiy ehtiyojlaringiz haqida gapirib bering, biz 24 soat ichida bepul, shaxsiy narx bahosini taqdim etamiz.",
                kk: "Медициналық қажеттіліктеріңіз туралы айтыңыз, біз 24 сағат ішінде тегін, жеке баға ұсынамыз.",
              })}
            </p>
          </div>
        </div>
        <div className="h-8 bg-[#FAFAFA] rounded-t-[32px] lg:rounded-t-[48px]" />
      </section>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-2 pb-20">
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-10 lg:mb-14">
          {[
            { icon: Clock, value: "24 hrs", label: { en: "Response Time", ru: "Время ответа", uz: "Javob vaqti", kk: "Жауап беру уақыты" } },
            { icon: Shield, value: "100%", label: { en: "Free Service", ru: "Бесплатно", uz: "Bepul xizmat", kk: "Тегін қызмет" } },
            { icon: Hospital, value: "50+", label: { en: "Partner Hospitals", ru: "Больниц-партнёров", uz: "Hamkor shifoxonalar", kk: "Серіктес ауруханалар" } },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 lg:p-6 text-center shadow-sm border border-gray-50">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#EE4423]/10 flex items-center justify-center mx-auto mb-2">
                <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#EE4423]" />
              </div>
              <p className="text-[#414042] font-bold text-xl lg:text-2xl font-montserrat">{stat.value}</p>
              <p className="text-[#A0A0A0] text-xs lg:text-sm font-medium">{tr(l, stat.label)}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Benefits cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-50">
              <h2 className="text-[#414042] font-bold text-lg lg:text-xl font-montserrat mb-5">
                {tr(l, { en: "Why choose us?", ru: "Почему выбирают нас?", uz: "Nega bizni tanlashadi?", kk: "Неліктен бізді таңдайды?" })}
              </h2>
              <div className="space-y-5">
                {[
                  { icon: DollarSign, title: { en: "Free Cost Estimates", ru: "Бесплатная оценка", uz: "Bepul narx bahosi", kk: "Тегін баға" }, desc: { en: "Compare treatment costs across top Indian hospitals with no obligation.", ru: "Сравните стоимость лечения в ведущих индийских больницах без обязательств.", uz: "Hech qanday majburiyatsiz Hindistonning yetakchi shifoxonalarida davolanish narxlarini solishtiring.", kk: "Ешқандай міндеттемесіз Үндістанның жетекші ауруханаларында емдеу құнын салыстырыңыз." } },
                  { icon: Hospital, title: { en: "Top Hospitals & Doctors", ru: "Лучшие больницы и врачи", uz: "Eng yaxshi shifoxonalar va shifokorlar", kk: "Үздік ауруханалар мен дәрігерлер" }, desc: { en: "Get matched with JCI/NABH accredited hospitals and expert specialists.", ru: "Получите подборку больниц с аккредитацией JCI/NABH и опытных специалистов.", uz: "JCI/NABH akkreditatsiyasidan o'tgan shifoxonalar va tajribali mutaxassislar bilan tanishing.", kk: "JCI/NABH аккредитациясы бар ауруханалар мен тәжірибелі мамандардан таңдаңыз." } },
                  { icon: Phone, title: { en: "Personal Call Back", ru: "Личный звонок", uz: "Shaxsiy qo'ng'iroq", kk: "Жеке қоңырау" }, desc: { en: "A dedicated coordinator will call you to discuss your treatment plan.", ru: "Персональный координатор позвонит вам для обсуждения плана лечения.", uz: "Maxsus koordinator siz bilan davolash rejasini muhokama qilish uchun qo'ng'iroq qiladi.", kk: "Жеке үйлестіруші емдеу жоспарын талқылау үшін сізге қоңырау шалады." } },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EE4423]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#EE4423]" />
                    </div>
                    <div>
                      <p className="text-[#414042] font-bold text-sm font-montserrat">{tr(l, item.title)}</p>
                      <p className="text-[#A0A0A0] text-xs leading-relaxed mt-0.5">{tr(l, item.desc)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#EE4423] to-[#d63a1b] rounded-2xl p-6 lg:p-8 text-white">
              <h3 className="font-bold text-lg font-montserrat mb-2">
                {tr(l, { en: "Need immediate help?", ru: "Нужна срочная помощь?", uz: "Shoshilinch yordam kerakmi?", kk: "Шұғыл көмек керек пе?" })}
              </h3>
              <p className="text-white/80 text-sm font-medium mb-4">
                {tr(l, { en: "Call us directly and speak with a medical coordinator right away.", ru: "Позвоните нам напрямую и поговорите с медицинским координатором прямо сейчас.", uz: "Bizga to'g'ridan-to'g'ri qo'ng'iroq qiling va tibbiy koordinator bilan gaplashing.", kk: "Бізге тікелей қоңырау шалып, медициналық үйлестірушімен сөйлесіңіз." })}
              </p>
              <a href="tel:+998785551171" className="inline-flex items-center gap-2 bg-white text-[#EE4423] font-bold px-5 py-2.5 rounded-full hover:bg-white/90 transition-all text-sm">
                <Phone size={16} />
                +998 78 555 11 71
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl lg:rounded-[32px] p-6 lg:p-10 shadow-sm border border-gray-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 bg-[#EE4423] rounded-full" />
                <h2 className="text-[#414042] font-bold text-xl lg:text-2xl font-montserrat">
                  {tr(l, { en: "Tell Us About Your Case", ru: "Расскажите о вашем случае", uz: "Bizga ishingiz haqida gapirib bering", kk: "Бізге жағдайыңыз туралы айтыңыз" })}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                      {tr(l, { en: "Full Name", ru: "Полное имя", uz: "To'liq ism", kk: "Толық аты" })} <span className="text-[#EE4423]">*</span>
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0] group-focus-within:text-[#EE4423] transition-colors" />
                      <input type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all"
                        placeholder={tr(l, { en: "Your full name", ru: "Ваше полное имя", uz: "To'liq ismingiz", kk: "Толық атыңыз" })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                      {tr(l, { en: "Email Address", ru: "Email адрес", uz: "Elektron pochta", kk: "Email мекенжай" })} <span className="text-[#EE4423]">*</span>
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0] group-focus-within:text-[#EE4423] transition-colors" />
                      <input type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all"
                        placeholder={tr(l, { en: "your@email.com", ru: "ваш@email.com", uz: "sizning@email.com", kk: "сіздің@email.com" })} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                      {tr(l, { en: "Phone Number", ru: "Номер телефона", uz: "Telefon raqami", kk: "Телефон нөмірі" })} <span className="text-[#EE4423]">*</span>
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0] group-focus-within:text-[#EE4423] transition-colors" />
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all"
                        placeholder="+998 00 000 00 00" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                      {tr(l, { en: "Country", ru: "Страна", uz: "Mamlakat", kk: "Ел" })} <span className="text-[#EE4423]">*</span>
                    </label>
                    <div className="relative group">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0] group-focus-within:text-[#EE4423] transition-colors z-10" />
                      <input type="text" name="country" required value={formData.country} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all"
                        placeholder={tr(l, { en: "Your country", ru: "Ваша страна", uz: "Mamlakatingiz", kk: "Еліңіз" })} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                      {tr(l, { en: "Age Range", ru: "Возраст", uz: "Yosh oralig'i", kk: "Жас аралығы" })} <span className="text-[#EE4423]">*</span>
                    </label>
                    <select name="age" required value={formData.age} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23A0A0A0' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                      {ageOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{tr(l, opt.label)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                      {tr(l, { en: "Budget Range", ru: "Бюджет", uz: "Byudjet oralig'i", kk: "Бюджет аралығы" })} <span className="text-[#EE4423]">*</span>
                    </label>
                    <select name="budget" required value={formData.budget} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23A0A0A0' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{tr(l, opt.label)}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                    {tr(l, { en: "Medical Condition / Diagnosis", ru: "Диагноз / заболевание", uz: "Tibbiy holat / tashxis", kk: "Медициналық жағдай / диагноз" })} <span className="text-[#EE4423]">*</span>
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#A0A0A0] group-focus-within:text-[#EE4423] transition-colors" />
                    <textarea name="condition" required value={formData.condition} onChange={handleChange} rows={3}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all resize-none"
                      placeholder={tr(l, {
                        en: "Describe your medical condition or diagnosis...",
                        ru: "Опишите ваш диагноз или заболевание...",
                        uz: "Tibbiy holatingiz yoki tashxisingizni tavsiflang...",
                        kk: "Медициналық жағдайыңызды немесе диагнозыңызды сипаттаңыз...",
                      })} />
                  </div>
                </div>

                <div>
                  <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                    {tr(l, { en: "Preferred Hospital (optional)", ru: "Предпочитаемая больница (опционально)", uz: "Yoqtiradigan shifoxona (ixtiyoriy)", kk: "Қалаулы аурухана (міндетті емес)" })}
                  </label>
                  <div className="relative group">
                    <Hospital className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0] group-focus-within:text-[#EE4423] transition-colors" />
                    <input type="text" name="hospital" value={formData.hospital} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all"
                      placeholder={tr(l, { en: "e.g. Medanta, Fortis, Max", ru: "например: Medanta, Fortis, Max", uz: "masalan: Medanta, Fortis, Max", kk: "мысалы: Medanta, Fortis, Max" })} />
                  </div>
                </div>

                {/* Prescription Upload */}
                <div>
                  <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                    {tr(l, { en: "Upload Prescription (optional)", ru: "Загрузить рецепт (опционально)", uz: "Retseptni yuklash (ixtiyoriy)", kk: "Рецептіні жүктеу (міндетті емес)" })}
                  </label>
                  <label className={`relative flex items-center gap-3 w-full px-4 py-3.5 rounded-xl border-2 border-dashed cursor-pointer transition-all ${prescriptionUploaded ? "border-green-400 bg-green-50" : "border-gray-200 bg-[#F9FAFB] hover:border-[#EE4423]/40 hover:bg-[#FFF5F2]"}`}>
                    <input type="file" accept="image/*,.pdf" onChange={handlePrescriptionUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                    {prescriptionUploaded ? (
                      <>
                        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-green-700 font-bold text-sm">{tr(l, { en: "Prescription uploaded", ru: "Рецепт загружен", uz: "Retsept yuklandi", kk: "Рецепт жүктелді" })}</p>
                          <p className="text-green-600 text-xs font-medium">{tr(l, { en: "We'll store it in the future", ru: "Мы сохраним его в будущем", uz: "Kelajakda saqlaymiz", kk: "Болашақта сақтаймыз" })}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-9 h-9 rounded-full bg-[#EE4423]/10 flex items-center justify-center shrink-0">
                          <Upload className="w-5 h-5 text-[#EE4423]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#58595B] font-bold text-sm">{tr(l, { en: "Tap to upload", ru: "Нажмите для загрузки", uz: "Yuklash uchun bosing", kk: "Жүктеу үшін басыңыз" })}</p>
                          <p className="text-[#A0A0A0] text-xs font-medium">{tr(l, { en: "PDF, JPG or PNG", ru: "PDF, JPG или PNG", uz: "PDF, JPG yoki PNG", kk: "PDF, JPG немесе PNG" })}</p>
                        </div>
                      </>
                    )}
                  </label>
                </div>

                <div>
                  <label className="block text-[#58595B] font-semibold text-xs mb-1.5">
                    {tr(l, { en: "Additional Notes (optional)", ru: "Дополнительные заметки (опционально)", uz: "Qo'shimcha izohlar (ixtiyoriy)", kk: "Қосымша ескертпелер (міндетті емес)" })}
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-2 focus:ring-[#EE4423]/10 transition-all resize-none"
                    placeholder={tr(l, { en: "Any additional information...", ru: "Любая дополнительная информация...", uz: "Qo'shimcha ma'lumotlar...", kk: "Кез келген қосымша ақпарат..." })} />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#EE4423] to-[#d63a1b] text-white font-bold rounded-xl hover:from-[#d63a1b] hover:to-[#c03115] transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer border-none text-lg shadow-lg shadow-[#EE4423]/20">
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {tr(l, { en: "Get Free Estimate", ru: "Получить оценку", uz: "Bepul baho olish", kk: "Тегін баға алу" })}
                    </>
                  )}
                </button>

                <p className="text-[#A0A0A0] text-xs text-center font-medium mt-3">
                  {tr(l, { en: "Your information is kept confidential. We respect your privacy.", ru: "Ваша информация конфиденциальна. Мы уважаем вашу приватность.", uz: "Sizning ma'lumotlaringiz maxfiy saqlanadi. Biz sizning shaxsiy hayotingizni hurmat qilamiz.", kk: "Сіздің ақпаратыңыз құпия сақталады. Біз сіздің жеке өміріңізді құрметтейміз." })}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
