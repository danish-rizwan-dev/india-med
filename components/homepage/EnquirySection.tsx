"use client";

import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import {
  countryPhoneCodes,
  type CountryPhoneCode,
} from "@/lib/countryPhoneCodes";

interface Country {
  code: string;
  name: string;
  flag: string;
  localeCode: string;
}

const countries: Country[] = [
  { code: "+7", name: "Kazakhstan", flag: "🇰🇿", localeCode: "KZ" },
  { code: "+7", name: "Russia", flag: "🇷🇺", localeCode: "RU" },
  { code: "+998", name: "Uzbekistan", flag: "🇺🇿", localeCode: "UZ" },
  { code: "+91", name: "India", flag: "🇮🇳", localeCode: "IN" },
  { code: "+1", name: "USA / Canada", flag: "🇺🇸", localeCode: "US" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧", localeCode: "GB" },
  { code: "+971", name: "UAE", flag: "🇦🇪", localeCode: "AE" },
];

const translations: Record<string, any> = {
  en: {
    sectionTitle: "Start Your Treatment Journey",
    sectionSubtitle:
      "Get a free cost estimate and custom medical plan from India's premium JCI-accredited hospitals.",
    benefit1: "Free Medical Cost Estimates",
    benefit2: "Direct Connection with Top Doctors",
    benefit3: "Full Visa & Airport Assistance",
    namePlaceholder: "Full Name (e.g. John Doe)",
    emailPlaceholder: "Email Address (e.g. johndoe@example.com)",
    phonePlaceholder: "Phone Number",
    ageRangeLabel: "Select Age Range",
    ageRangeOptions: ["Under 18", "18–35", "36–50", "50 or older"],
    messagePlaceholder: "Describe your medical requirements or questions...",
    submitBtn: "Submit Enquiry Now",
    submitting: "Submitting...",
    successTitle: "Enquiry Submitted!",
    successMsg:
      "Thank you! Your enquiry has been received. One of our senior medical coordinators will contact you within 24 hours.",
    validation: {
      name: "Please enter your full name",
      email: "Please enter a valid email address",
      phone: "Please enter your phone number",
      age: "Please select an age range",
      message: "Please describe your medical requirements",
    },
  },
  kk: {
    sectionTitle: "Емделу жолын бастаңыз",
    sectionSubtitle:
      "Үндістанның JCI аккредиттелген үздік ауруханаларынан тегін құн есебін және жеке емдеу жоспарын алыңыз.",
    benefit1: "Тегін медициналық шығындарды бағалау",
    benefit2: "Үздік дәрігерлермен тікелей байланыс",
    benefit3: "Виза және әуежайда күтіп алу бойынша толық көмек",
    namePlaceholder: "Толық аты-жөніңіз (мысалы, Әлихан Сұлтанов)",
    emailPlaceholder: "Электрондық пошта (мысалы, alikhan@example.com)",
    phonePlaceholder: "Телефон нөмірі",
    ageRangeLabel: "Жас аралығын таңдаңыз",
    ageRangeOptions: [
      "18 жасқа дейін",
      "18–35",
      "36–50",
      "50 және одан жоғары",
    ],
    messagePlaceholder:
      "Медициналық талаптарыңызды немесе сұрақтарыңызды сипаттаңыз...",
    submitBtn: "Сұранысты қазір жіберу",
    submitting: "Жіберілуде...",
    successTitle: "Сұраныс сәтті жіберілді!",
    successMsg:
      "Рақмет! Сіздің сұранысыңыз қабылданды. Біздің аға медициналық үйлестірушіміз сізбен 24 сағат ішінде байланысады.",
    validation: {
      name: "Толық аты-жөніңізді енгізіңіз",
      email: "Жарамды электрондық поштаны енгізіңіз",
      phone: "Телефон нөміріңізді енгізіңіз",
      age: "Жас аралығын таңдаңыз",
      message: "Медициналық талаптарыңызды сипаттаңыз",
    },
  },
  uz: {
    sectionTitle: "Davolanish yo'lini boshlang",
    sectionSubtitle:
      "Hindistonning eng yaxshi JCI-akkreditatsiyalangan shifoxonalaridan bepul narx smetasi va shaxsiy tibbiy rejasini oling.",
    benefit1: "Bepul davolanish narxini hisoblash",
    benefit2: "Eng yaxshi shifokorlar bilan to'g'ridan-to'g'ri aloqa",
    benefit3: "Viza va aeroportda kutib olish bo'yicha to'liq yordam",
    namePlaceholder: "To'liq ismingiz (masalan, Alisher Umarov)",
    emailPlaceholder: "Elektron pochta (masalan, alisher@example.com)",
    phonePlaceholder: "Telefon raqami",
    ageRangeLabel: "Yosh oralig'ini tanlang",
    ageRangeOptions: ["18 yoshgacha", "18–35", "36–50", "50 va undan katta"],
    messagePlaceholder:
      "Tibbiy talablaringizni yoki savollaringizni tavsiflang...",
    submitBtn: "So'rovni hozir yuborish",
    submitting: "Yuborilmoqda...",
    successTitle: "So'rov muvaffaqiyatli yuborildi!",
    successMsg:
      "Rahmat! So'rovingiz qabul qilindi. Bizning katta tibbiy koordinatorimiz siz bilan 24 soat ichida bog'lanadi.",
    validation: {
      name: "Iltimos, to'liq ismingizni kiriting",
      email: "Iltimos, haqiqiy elektron pochta manzilini kiriting",
      phone: "Iltimos, telefon raqamingizni kiriting",
      age: "Iltimos, yosh oralig'ini tanlang",
      message: "Iltimos, tibbiy talablaringizni tavsiflang",
    },
  },
  ru: {
    sectionTitle: "Начните свой путь к выздоровлению",
    sectionSubtitle:
      "Получите бесплатную оценку стоимости и индивидуальный медицинский план от ведущих аккредитованных больниц Индии.",
    benefit1: "Бесплатный расчет стоимости лечения",
    benefit2: "Прямая связь с ведущими врачами",
    benefit3: "Полная поддержка при получении визы и трансфере",
    namePlaceholder: "Полное имя (например, Иван Иванов)",
    emailPlaceholder: "Электронная почта (например, ivan@example.com)",
    phonePlaceholder: "Номер телефона",
    ageRangeLabel: "Выберите возрастную группу",
    ageRangeOptions: ["До 18 лет", "18–35", "36–50", "50 лет и старше"],
    messagePlaceholder: "Опишите ваши медицинские требования или вопросы...",
    submitBtn: "Отправить запрос сейчас",
    submitting: "Отправка...",
    successTitle: "Запрос отправлен!",
    successMsg:
      "Спасибо! Ваш запрос успешно получен. Один из наших ведущих медицинских координаторов свяжется с вами в течение 24 часов.",
    validation: {
      name: "Пожалуйста, введите ваше полное имя",
      email: "Пожалуйста, введите корректный адрес почты",
      phone: "Пожалуйста, введите номер телефона",
      age: "Пожалуйста, выберите возрастную группу",
      message: "Пожалуйста, опишите ваши медицинские требования",
    },
  },
};

export default function EnquirySection() {
  const locale = useLocale();
  const t = translations[locale] || translations.en;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [message, setMessage] = useState("");

  const defaultCountry =
    countryPhoneCodes.find(
      (c) => c.localeCode.toLowerCase() === locale.toLowerCase(),
    ) || countryPhoneCodes[0];
  const [selectedCountry, setSelectedCountry] =
    useState<CountryPhoneCode>(defaultCountry);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = t.validation.name;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = t.validation.email;

    if (!phone.trim()) newErrors.phone = t.validation.phone;
    if (!ageRange) newErrors.age = t.validation.age;
    if (!message.trim()) newErrors.message = t.validation.message;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section
      className="relative w-full py-16 lg:py-24 bg-[#FAF9F9] overflow-hidden"
      aria-label="Enquiry Section"
    >
      {/* Background Gradients & Effects */}
      <div className="absolute top-[20%] left-[-100px] w-[350px] h-[350px] bg-[#EE4423]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-100px] w-[400px] h-[400px] bg-[#EE4423]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side: Copywriting & Benefits */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
            <span className="font-montserrat font-bold text-[14px] lg:text-[16px] text-[#EE4423] tracking-[2px] uppercase mb-4">
              {locale === "en"
                ? "Instant Consultation"
                : locale === "kk"
                  ? "Шұғыл кеңес"
                  : locale === "uz"
                    ? "Tezkor maslahat"
                    : "Быстрая консультация"}
            </span>
            <h2 className="font-montserrat font-bold text-[32px] lg:text-[46px] text-[#444444] leading-[1.1] mb-6">
              {t.sectionTitle}
            </h2>
            <p className="font-montserrat font-medium text-[15px] lg:text-[18px] text-[#58595B] leading-relaxed mb-10 max-w-[550px]">
              {t.sectionSubtitle}
            </p>

            {/* Premium Benefits List */}
            <div className="flex flex-col gap-5 w-full">
              {[t.benefit1, t.benefit2, t.benefit3].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EE4423]/10 text-[#EE4423] flex items-center justify-center flex-shrink-0">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="font-montserrat font-bold text-[14px] lg:text-[16px] text-[#58595B]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Embedded Form Card */}
          <div className="w-full lg:w-[50%] max-w-[550px]">
            <div className="w-full bg-white rounded-[32px] shadow-[10px_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-8 relative overflow-hidden">
              {isSuccess ? (
                /* Success screen */
                <div className="flex flex-col items-center justify-center text-center py-10 animate-in fade-in duration-300">
                  <div className="w-20 h-20 bg-[#EE4423]/10 text-[#EE4423] rounded-full flex items-center justify-center mb-6">
                    <Check size={36} strokeWidth={3} />
                  </div>
                  <h4 className="font-montserrat font-bold text-[22px] text-[#444444] mb-3">
                    {t.successTitle}
                  </h4>
                  <p className="font-montserrat text-[#58595B] leading-relaxed text-[15px] max-w-[360px] mx-auto mb-6">
                    {t.successMsg}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#EE4423] text-white px-8 py-3 rounded-full font-montserrat font-bold text-[14px] transition-transform active:scale-95 shadow-[0px_8px_16px_rgba(238,68,35,0.2)] hover:bg-[#d63a1b]"
                  >
                    {locale === "en"
                      ? "Submit Another Enquiry"
                      : locale === "kk"
                        ? "Басқа сұраныс жіберу"
                        : locale === "uz"
                          ? "Yana so'rov yuborish"
                          : "Отправить еще один запрос"}
                  </button>
                </div>
              ) : (
                /* Interactive Form fields */
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 text-left"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1 w-full">
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name)
                          setErrors((prev) => ({ ...prev, name: "" }));
                      }}
                      className={`w-full h-[50px] px-5 rounded-[16px] bg-[#F9FAFB] border ${errors.name ? "border-[#EE4423]" : "border-gray-200"} focus:border-[#EE4423] focus:bg-white transition-all outline-none font-montserrat text-[14px] font-medium text-[#444444]`}
                    />
                    {errors.name && (
                      <span className="text-[11px] font-semibold text-[#EE4423] px-2">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1 w-full">
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email)
                          setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      className={`w-full h-[50px] px-5 rounded-[16px] bg-[#F9FAFB] border ${errors.email ? "border-[#EE4423]" : "border-gray-200"} focus:border-[#EE4423] focus:bg-white transition-all outline-none font-montserrat text-[14px] font-medium text-[#444444]`}
                    />
                    {errors.email && (
                      <span className="text-[11px] font-semibold text-[#EE4423] px-2">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone with Flags */}
                  <div className="flex flex-col gap-1 w-full relative">
                    <div className="flex gap-2">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setIsCountryDropdownOpen(!isCountryDropdownOpen);
                            setIsAgeDropdownOpen(false);
                          }}
                          className={`flex items-center justify-center gap-1.5 h-[50px] min-w-[70px] px-3 rounded-[16px] bg-[#F9FAFB] border ${errors.phone ? "border-[#EE4423]" : "border-gray-200"} hover:border-[#EE4423] transition-all`}
                        >
                          <span className="font-montserrat text-[13px] font-bold leading-none text-[#444444] tracking-normal">
                            {selectedCountry.flag}
                          </span>
                          <ChevronDown size={16} className="text-gray-500" />
                        </button>

                        {isCountryDropdownOpen && (
                          <div className="absolute top-[56px] left-0 z-50 w-[280px] max-h-[260px] overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                            {countryPhoneCodes.map((c, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsCountryDropdownOpen(false);
                                }}
                                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-gray-50 text-left transition-colors"
                              >
                                <span className="w-7 shrink-0 font-montserrat font-bold text-[12px] text-gray-500">
                                  {c.flag}
                                </span>
                                <span className="font-montserrat font-semibold text-[13px] text-[#444444] flex-1">
                                  {c.name}
                                </span>
                                <span className="font-montserrat font-bold text-[12px] text-gray-400">
                                  {c.code}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex-1 flex items-center relative rounded-[16px] bg-[#F9FAFB] border border-gray-200 focus-within:border-[#EE4423] focus-within:bg-white overflow-hidden transition-all">
                        <span className="pl-4 pr-1 font-montserrat font-bold text-[12px] text-[#444444] select-none">
                          {selectedCountry.code}
                        </span>
                        <input
                          type="tel"
                          placeholder={t.phonePlaceholder}
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value.replace(/\D/g, ""));
                            if (errors.phone)
                              setErrors((prev) => ({ ...prev, phone: "" }));
                          }}
                          className="w-full h-full px-2 outline-none bg-transparent font-montserrat text-[14px] font-medium text-[#444444]"
                        />
                      </div>
                    </div>
                    {errors.phone && (
                      <span className="text-[11px] font-semibold text-[#EE4423] px-2">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Age selector */}
                  <div className="flex flex-col gap-1 w-full relative">
                    <button
                      type="button"
                      onClick={() => {
                        setIsAgeDropdownOpen(!isAgeDropdownOpen);
                        setIsCountryDropdownOpen(false);
                      }}
                      className={`flex items-center justify-between w-full h-[50px] px-5 rounded-[16px] bg-[#F9FAFB] border ${errors.age ? "border-[#EE4423]" : "border-gray-200"} focus:border-[#EE4423] hover:border-[#EE4423] transition-all text-left font-montserrat text-[14px] font-medium text-[#444444]`}
                    >
                      <span
                        className={
                          ageRange ? "text-[#444444]" : "text-gray-400"
                        }
                      >
                        {ageRange || t.ageRangeLabel}
                      </span>
                      <ChevronDown size={16} className="text-gray-400" />
                    </button>

                    {isAgeDropdownOpen && (
                      <div className="absolute top-[56px] left-0 z-50 w-full bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                        {t.ageRangeOptions.map((opt: string, i: number) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => {
                              setAgeRange(opt);
                              setIsAgeDropdownOpen(false);
                              if (errors.age)
                                setErrors((prev) => ({ ...prev, age: "" }));
                            }}
                            className="w-full px-5 py-3 hover:bg-gray-50 text-left font-montserrat font-semibold text-[13px] text-[#444444] transition-colors"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.age && (
                      <span className="text-[11px] font-semibold text-[#EE4423] px-2">
                        {errors.age}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1 w-full">
                    <textarea
                      placeholder={t.messagePlaceholder}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message)
                          setErrors((prev) => ({ ...prev, message: "" }));
                      }}
                      rows={3}
                      className={`w-full p-5 rounded-[16px] bg-[#F9FAFB] border ${errors.message ? "border-[#EE4423]" : "border-gray-200"} focus:border-[#EE4423] focus:bg-white transition-all outline-none font-montserrat text-[14px] font-medium text-[#444444] resize-none`}
                    />
                    {errors.message && (
                      <span className="text-[11px] font-semibold text-[#EE4423] px-2">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[52px] bg-[#EE4423] hover:bg-[#d63a1b] text-white font-montserrat font-bold text-[16px] rounded-[18px] transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none shadow-[0px_8px_20px_rgba(238,68,35,0.2)] mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>{t.submitting}</span>
                      </>
                    ) : (
                      <span>{t.submitBtn}</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
