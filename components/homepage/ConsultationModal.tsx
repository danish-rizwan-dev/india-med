"use client";

import { useState, useEffect, useMemo } from "react";
import { X, Check, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { countryPhoneCodes, type CountryPhoneCode } from "@/lib/countryPhoneCodes";

const translations: Record<string, any> = {
  en: {
    title: "Get My Treatment Plan",
    subtitle: "Fill in the details below to receive a free customized treatment plan from India's top specialists.",
    namePlaceholder: "Full Name (e.g. John Doe)",
    emailPlaceholder: "Email Address (e.g. johndoe@example.com)",
    phonePlaceholder: "Phone Number",
    ageRangeLabel: "Select Age Range",
    ageRangeOptions: ["Under 18", "18–35", "36–50", "50 or older"],
    messagePlaceholder: "Describe your medical requirements or questions...",
    submitBtn: "Submit Consultation Request",
    submitting: "Submitting...",
    successTitle: "Request Submitted!",
    successMsg: "Thank you! Your request has been submitted successfully. Our medical coordinator will contact you within 24–48 hours.",
    successClose: "Close",
    validation: {
      name: "Please enter your full name",
      email: "Please enter a valid email address",
      phone: "Please enter your phone number",
      age: "Please select an age range",
      message: "Please describe your medical requirements",
    }
  },
  kk: {
    title: "Емдеу жоспарын алу",
    subtitle: "Үндістанның үздік мамандарынан тегін жеке емдеу жоспарын алу үшін төмендегі мәліметтерді толтырыңыз.",
    namePlaceholder: "Толық аты-жөніңіз (мысалы, Әлихан Сұлтанов)",
    emailPlaceholder: "Электрондық пошта (мысалы, alikhan@example.com)",
    phonePlaceholder: "Телефон нөмірі",
    ageRangeLabel: "Жас аралығын таңдаңыз",
    ageRangeOptions: ["18 жасқа дейін", "18–35", "36–50", "50 және одан жоғары"],
    messagePlaceholder: "Медициналық талаптарыңызды немесе сұрақтарыңызды сипаттаңыз...",
    submitBtn: "Кеңес алуға сұраныс жіберу",
    submitting: "Жіберілуде...",
    successTitle: "Сұраныс сәтті жіберілді!",
    successMsg: "Рақмет! Сіздің сұранысыңыз сәтті жіберілді. Біздің медициналық үйлестіруші сізбен 24–48 сағат ішінде байланысады.",
    successClose: "Жабу",
    validation: {
      name: "Толық аты-жөніңізді енгізіңіз",
      email: "Жарамды электрондық поштаны енгізіңіз",
      phone: "Телефон нөміріңізді енгізіңіз",
      age: "Жас аралығын таңдаңыз",
      message: "Медициналық талаптарыңызды сипаттаңыз",
    }
  },
  uz: {
    title: "Davolash rejasini olish",
    subtitle: "Hindistonning eng yaxshi mutaxassislaridan bepul shaxsiy davolanish rejasini olish uchun quyidagi ma'lumotlarni to'ldiring.",
    namePlaceholder: "To'liq ismingiz (masalan, Alisher Umarov)",
    emailPlaceholder: "Elektron pochta (masalan, alisher@example.com)",
    phonePlaceholder: "Telefon raqami",
    ageRangeLabel: "Yosh oralig'ini tanlang",
    ageRangeOptions: ["18 yoshgacha", "18–35", "36–50", "50 va undan katta"],
    messagePlaceholder: "Tibbiy talablaringizni yoki savollaringizni tavsiflang...",
    submitBtn: "Maslahat olish uchun so'rov yuborish",
    submitting: "Yuborilmoqda...",
    successTitle: "So'rov yuborildi!",
    successMsg: "Rahmat! So'rovingiz muvaffaqiyatli yuborildi. Bizning tibbiy koordinatorimiz siz bilan 24–48 soat ichida bog'lanadi.",
    successClose: "Yopish",
    validation: {
      name: "Iltimos, to'liq ismingizni kiriting",
      email: "Iltimos, haqiqiy elektron pochta manzilini kiriting",
      phone: "Iltimos, telefon raqamingizni kiriting",
      age: "Iltimos, yosh oralig'ini tanlang",
      message: "Iltimos, tibbiy talablaringizni tavsiflang",
    }
  },
  ru: {
    title: "Получить план лечения",
    subtitle: "Заполните форму ниже, чтобы получить бесплатный индивидуальный план лечения от ведущих специалистов Индии.",
    namePlaceholder: "Полное имя (например, Иван Иванов)",
    emailPlaceholder: "Электронная почта (например, ivan@example.com)",
    phonePlaceholder: "Номер телефона",
    ageRangeLabel: "Выберите возрастную группу",
    ageRangeOptions: ["До 18 лет", "18–35", "36–50", "50 лет и старше"],
    messagePlaceholder: "Опишите ваши медицинские требования или вопросы...",
    submitBtn: "Отправить запрос на консультацию",
    submitting: "Отправка...",
    successTitle: "Запрос отправлен!",
    successMsg: "Спасибо! Ваш запрос успешно отправлен. Наш медицинский координатор свяжется с вами в течение 24–48 часов.",
    successClose: "Закрыть",
    validation: {
      name: "Пожалуйста, введите ваше полное имя",
      email: "Пожалуйста, введите корректный адрес почты",
      phone: "Пожалуйста, введите номер телефона",
      age: "Пожалуйста, выберите возрастную группу",
      message: "Пожалуйста, опишите ваши медицинские требования",
    }
  }
};

export default function ConsultationModal() {
  const locale = useLocale();
  const t = translations[locale] || translations.en;

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [message, setMessage] = useState("");

  const defaultCountry = countryPhoneCodes.find(c => c.localeCode.toLowerCase() === locale.toLowerCase()) || countryPhoneCodes[0];
  const [selectedCountry, setSelectedCountry] = useState<CountryPhoneCode>(defaultCountry);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredCountryCodes = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();
    if (!query) return countryPhoneCodes;

    return countryPhoneCodes.filter((country) => {
      const normalizedCode = country.code.replace(/[\s-]/g, "");
      const normalizedQuery = query.replace(/[\s-]/g, "");

      return (
        country.name.toLowerCase().includes(query) ||
        country.flag.toLowerCase().includes(query) ||
        country.localeCode.toLowerCase().includes(query) ||
        normalizedCode.includes(normalizedQuery)
      );
    });
  }, [countrySearch]);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setName("");
      setEmail("");
      setPhone("");
      setAgeRange("");
      setMessage("");
      setErrors({});
    };

    window.addEventListener("open-consultation-modal", handleOpen);
    return () => window.removeEventListener("open-consultation-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.paddingRight = originalPaddingRight;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

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
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-3 overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-[550px] bg-white rounded-[28px] shadow-[0px_20px_50px_rgba(238,68,35,0.15)] overflow-visible border border-gray-100 flex flex-col animate-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-50 flex-shrink-0">
          <h3 className="font-montserrat font-bold text-[20px] lg:text-[24px] text-[#444444] leading-tight">
            {t.title}
          </h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all active:scale-90"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center p-10 flex-grow">
            <div className="w-24 h-24 bg-[#EE4423]/10 text-[#EE4423] rounded-full flex items-center justify-center mb-6 scale-in duration-300">
              <Check size={44} strokeWidth={3} />
            </div>
            <h4 className="font-montserrat font-bold text-[22px] text-[#444444] mb-3">
              {t.successTitle}
            </h4>
            <p className="font-montserrat text-[#58595B] leading-relaxed text-[15px] max-w-[400px] mb-8">
              {t.successMsg}
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#EE4423] text-white px-10 py-3.5 rounded-full font-montserrat font-bold text-[16px] transition-transform active:scale-95 shadow-[0px_10px_20px_rgba(238,68,35,0.2)] hover:bg-[#d63a1b]"
            >
              {t.successClose}
            </button>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="px-6 pt-4 pb-5 flex-grow flex flex-col gap-3.5">
            <p className="font-montserrat font-medium text-[14px] text-[#58595B] leading-relaxed">
              {t.subtitle}
            </p>

            {/* Name Input */}
            <div className="flex flex-col gap-1 w-full">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                  }}
                  className={`w-full h-[48px] px-5 rounded-[16px] bg-[#F9FAFB] border ${errors.name ? 'border-[#EE4423]' : 'border-gray-200'} focus:border-[#EE4423] focus:bg-white transition-all outline-none font-montserrat text-[14px] font-medium text-[#444444]`}
                />
              </div>
              {errors.name && <span className="text-[11px] font-semibold text-[#EE4423] px-2">{errors.name}</span>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1 w-full">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                  }}
                  className={`w-full h-[48px] px-5 rounded-[16px] bg-[#F9FAFB] border ${errors.email ? 'border-[#EE4423]' : 'border-gray-200'} focus:border-[#EE4423] focus:bg-white transition-all outline-none font-montserrat text-[14px] font-medium text-[#444444]`}
                />
              </div>
              {errors.email && <span className="text-[11px] font-semibold text-[#EE4423] px-2">{errors.email}</span>}
            </div>

            {/* Phone Input with Custom Dropdown */}
            <div className="flex flex-col gap-1 w-full">
              <div className="flex gap-2 relative">
                {/* Flag Selector Dropdown Toggle */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCountryDropdownOpen((prev) => !prev);
                      setCountrySearch("");
                      setIsAgeDropdownOpen(false);
                    }}
                    className={`flex items-center justify-center gap-1.5 h-[48px] min-w-[70px] px-3 rounded-[16px] bg-[#F9FAFB] border ${errors.phone ? 'border-[#EE4423]' : 'border-gray-200'} hover:border-[#EE4423] transition-all`}
                  >
                    <span className="font-montserrat text-[13px] font-bold leading-none text-[#444444] tracking-normal">
                      {selectedCountry.flag}
                    </span>
                    <ChevronDown size={16} className="text-gray-500" />
                  </button>

                  {/* Flag Dropdown List */}
                  {isCountryDropdownOpen && (
                    <div className="absolute top-[54px] left-0 z-50 w-[300px] bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3 pb-2">
                        <input
                          type="text"
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          placeholder="Search country or code"
                          autoFocus
                          className="w-full h-10 px-3 rounded-xl bg-[#F9FAFB] border border-gray-200 focus:border-[#EE4423] focus:bg-white transition-all outline-none font-montserrat text-[13px] font-medium text-[#444444]"
                        />
                      </div>
                      <div className="max-h-[230px] overflow-y-auto">
                        {filteredCountryCodes.length > 0 ? (
                          filteredCountryCodes.map((c, i) => (
                            <button
                              key={`${c.localeCode}-${c.code}-${i}`}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(c);
                                setCountrySearch("");
                                setIsCountryDropdownOpen(false);
                              }}
                              className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-gray-50 text-left transition-colors"
                            >
                              <span className="w-7 shrink-0 font-montserrat font-bold text-[12px] text-gray-500">{c.flag}</span>
                              <span className="font-montserrat font-semibold text-[13px] text-[#444444] flex-1">{c.name}</span>
                              <span className="font-montserrat font-bold text-[12px] text-gray-400">{c.code}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-4 font-montserrat text-[13px] font-medium text-gray-400">
                            No country code found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Country Code & Phone Number Field */}
                <div className="flex-1 flex items-center relative rounded-[16px] bg-[#F9FAFB] border border-gray-200 focus-within:border-[#EE4423] focus-within:bg-white overflow-hidden transition-all">
                  <span className="pl-4 pr-1 font-montserrat font-bold text-[12px] text-[#444444] select-none">
                    {selectedCountry.code}
                  </span>
                  <input
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, ''));
                      if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                    }}
                    className="w-full h-full px-2 outline-none bg-transparent font-montserrat text-[14px] font-medium text-[#444444]"
                  />
                </div>
              </div>
              {errors.phone && <span className="text-[11px] font-semibold text-[#EE4423] px-2">{errors.phone}</span>}
            </div>

            {/* Custom Age Range Dropdown */}
            <div className="flex flex-col gap-1 w-full relative">
              <button
                type="button"
                onClick={() => {
                  setIsAgeDropdownOpen(!isAgeDropdownOpen);
                  setIsCountryDropdownOpen(false);
                }}
                    className={`flex items-center justify-between w-full h-[48px] px-5 rounded-[16px] bg-[#F9FAFB] border ${errors.age ? 'border-[#EE4423]' : 'border-gray-200'} focus:border-[#EE4423] hover:border-[#EE4423] transition-all text-left font-montserrat text-[14px] font-medium text-[#444444]`}
              >
                <span className={ageRange ? "text-[#444444]" : "text-gray-400"}>
                  {ageRange || t.ageRangeLabel}
                </span>
                <ChevronDown size={18} className="text-gray-400" />
              </button>

              {isAgeDropdownOpen && (
                <div className="absolute top-[58px] left-0 z-50 w-full bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  {t.ageRangeOptions.map((opt: string, i: number) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setAgeRange(opt);
                        setIsAgeDropdownOpen(false);
                        if (errors.age) setErrors(prev => ({ ...prev, age: "" }));
                      }}
                      className="w-full px-5 py-3 hover:bg-gray-50 text-left font-montserrat font-semibold text-[13px] text-[#444444] transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              {errors.age && <span className="text-[11px] font-semibold text-[#EE4423] px-2">{errors.age}</span>}
            </div>

            {/* Medical Requirement Textarea */}
            <div className="flex flex-col gap-1 w-full">
              <textarea
                placeholder={t.messagePlaceholder}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors(prev => ({ ...prev, message: "" }));
                }}
                rows={3}
                className={`w-full min-h-[104px] p-4 rounded-[16px] bg-[#F9FAFB] border ${errors.message ? 'border-[#EE4423]' : 'border-gray-200'} focus:border-[#EE4423] focus:bg-white transition-all outline-none font-montserrat text-[14px] font-medium text-[#444444] resize-none`}
              />
              {errors.message && <span className="text-[11px] font-semibold text-[#EE4423] px-2">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[52px] bg-[#EE4423] hover:bg-[#d63a1b] text-white font-montserrat font-bold text-[16px] rounded-[18px] transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none shadow-[0px_10px_25px_rgba(238,68,35,0.25)] flex-shrink-0 mt-1"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
  );
}
