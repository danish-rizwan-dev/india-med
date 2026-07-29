"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Search, Phone, Menu, X, ChevronDown, Stethoscope, Building2, Sparkles } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations, useLocale } from 'next-intl';
import { doctors } from "@/components/doctors/data";

type SearchItem = {
  label: string;
  description: string;
  href: string;
  category: "doctor" | "speciality" | "service";
};

export default function Navbar() {
  const t = useTranslations('Navbar');
  const s = useTranslations('ServiceBar');
  const tSpec = useTranslations('Specialities');
  const tDoc = useTranslations('DoctorProfile');
  const locale = useLocale();
  const isCompactSearch = locale === 'uz' || locale === 'kk';
  const isShiftRight = locale === 'en' || locale === 'ru';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('home'), href: "/" },
    { name: t('speciality'), href: "/speciality" },
    { name: t('doctors'), href: "/doctors" },
    { name: t('hospitals'), href: "/hospitals" },
    { name: t('contact'), href: "/contact" },
  ];

  const services = useMemo(() => [
    { label: s('opinion'), slug: "second-opinion" },
    { label: s('cost'), slug: "treatment-cost-estimate" },
    { label: s('services'), slug: "medical-services" },
    { label: s('visa'), slug: "medical-visa-assistance" },
    { label: s('consult'), slug: "free-consultation" },
  ], [s]);

  const specialities = useMemo(() => {
    const specLabel = (slug: string): string => {
      const map: Record<string, string> = {
        "cardiological-assistance": tSpec('cardio'),
        "orthopedics": tSpec('ortho'),
        "cancer-treatment": tSpec('cancer'),
        "neuroscience": tSpec('neuro'),
        "gastrosciences": tSpec('gastro'),
        "liver-transplant": tSpec('liver'),
        "lung-transplantation": tSpec('lungs'),
        "obstetrics-and-gynecology": tSpec('gyno'),
      };
      if (map[slug]) return map[slug];
      const inline: Record<string, Record<string, string>> = {
        "plastic-aesthetic-and-reconstructive-surgery": {
          en: "Plastic & Aesthetic Surgery", ru: "Пластическая хирургия", uz: "Plastik Jarrohlik", kk: "Пластикалық Хирургия",
        },
        "gynecology-and-gynecological-oncology": {
          en: "Gynecological Oncology", ru: "Онкогинекология", uz: "Ginekologik Onkologiya", kk: "Онкогинекология",
        },
        "rheumatology-and-immunology": {
          en: "Rheumatology & Immunology", ru: "Ревматология и иммунология", uz: "Revmatologiya va Immunologiya", kk: "Ревматология және Иммунология",
        },
        "peripheral-vascular-and-endovascular-sciences": {
          en: "Vascular Surgery", ru: "Сосудистая хирургия", uz: "Qon Tomir Jarrohligi", kk: "Қантамыр Хирургиясы",
        },
        "ophthalmology": {
          en: "Ophthalmology", ru: "Офтальмология", uz: "Oftalmologiya", kk: "Офтальмология",
        },
        "bone-marrow-transplant": {
          en: "Bone Marrow Transplant", ru: "Трансплантация костного мозга", uz: "Suyak Ko'migi Transplantatsiyasi", kk: "Сүйек кемігін трансплантациялау",
        },
        "endocrinology-and-diabetology": {
          en: "Endocrinology & Diabetology", ru: "Эндокринология и диабетология", uz: "Endokrinologiya va Diabetologiya", kk: "Эндокринология және Диабетология",
        },
        "kidney-transplant": {
          en: "Kidney Transplant", ru: "Трансплантация почки", uz: "Buyrak Ko'chirish", kk: "Бүйрек Аударып Салу",
        },
        "respiratory-medicine-and-sleep-medicine": {
          en: "Respiratory Medicine", ru: "Пульмонология", uz: "Pulmonologiya", kk: "Пульмонология",
        },
        "ent-head-and-neck-surgery": {
          en: "ENT & Head-Neck Surgery", ru: "ЛОР и хирургия головы/шеи", uz: "LOR va Bosh-Bo'yin Jarrohligi", kk: "ЛОР және Бас-Мойын Хирургиясы",
        },
      };
      return inline[slug]?.[locale] || slug;
    };

    const slugs = [
      "cardiological-assistance", "orthopedics", "cancer-treatment", "neuroscience",
      "gastrosciences", "liver-transplant", "lung-transplantation", "obstetrics-and-gynecology",
      "plastic-aesthetic-and-reconstructive-surgery", "gynecology-and-gynecological-oncology",
      "rheumatology-and-immunology", "peripheral-vascular-and-endovascular-sciences",
      "ophthalmology", "bone-marrow-transplant", "endocrinology-and-diabetology",
      "kidney-transplant", "respiratory-medicine-and-sleep-medicine", "ent-head-and-neck-surgery",
    ];
    return slugs.map((slug) => ({ label: specLabel(slug), slug }));
  }, [tSpec, locale]);

  const docTranslationKey = (slug: string): string => `doctor_name_${slug.replace(/-/g, "_")}`;
  const docDeptKey = (slug: string): string => `doctor_department_${slug.replace(/-/g, "_")}`;

  const searchItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    doctors.forEach((doc) => {
      const nameKey = docTranslationKey(doc.slug);
      const deptKey = docDeptKey(doc.slug);
      const docName = tDoc.has(nameKey) ? tDoc(nameKey) : doc.name;
      const deptLabel = tDoc.has(deptKey) ? tDoc(deptKey) : doc.department;
      items.push({
        label: docName,
        description: `${deptLabel} — ${doc.hospital}`,
        href: `/doctors/${doc.slug}`,
        category: "doctor",
      });
    });

    specialities.forEach((spec) => {
      items.push({
        label: spec.label,
        description: t('speciality'),
        href: `/speciality/${spec.slug}`,
        category: "speciality",
      });
    });

    services.forEach((svc) => {
      items.push({
        label: svc.label,
        description: t('services'),
        href: `/${svc.slug}`,
        category: "service",
      });
    });

    return items;
  }, [services, specialities, tDoc, t]);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return searchItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [searchQuery, searchItems]);

  const groupedResults = useMemo(() => {
    const groups: { category: SearchItem["category"]; items: SearchItem[] }[] = [];
    const categories: SearchItem["category"][] = ["doctor", "speciality", "service"];
    categories.forEach((cat) => {
      const items = filteredResults.filter((r) => r.category === cat);
      if (items.length > 0) groups.push({ category: cat, items });
    });
    return groups;
  }, [filteredResults]);

  const categoryIcon = {
    doctor: Stethoscope,
    speciality: Building2,
    service: Sparkles,
  };

  const categoryLabel = {
    doctor: t('doctors'),
    speciality: t('speciality'),
    service: t('services'),
  };

  return (
    <header
      className="w-full sticky top-0 z-50 bg-[#FFFFFF]"
      style={{ boxShadow: "0px 15px 20px 0px #68211314" }}
    >
      <nav
        className="mx-auto flex items-center justify-between w-full h-[70px] lg:h-[95px] px-4 md:px-8 xl:px-12"
        style={{ maxWidth: "1512px" }}
        aria-label="Main Medical Navigation"
      >
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="India Med Service Home" className="relative block w-[130px] lg:w-[170px] xl:w-[202px] h-[35px] lg:h-[46px] xl:h-[56px]">
            <Image
              src="/images/indiaMedServiceLogo.svg"
              alt="India Med Service"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* DESKTOP CONTAINER (Hidden on Mobile/Tablet screens dynamically) */}
        <div className={`hidden lg:flex items-center flex-grow justify-between ${isShiftRight ? 'ml-15 xl:ml-35' : 'ml-6 xl:ml-12'}`}>
          
          {/* NAVIGATION LINKS -  Fluid and non-wrapping */}
          <ul
            className={`flex items-center font-medium text-[#555555] ${isShiftRight ? 'gap-3 xl:gap-6 text-[14px] xl:text-[16px]' : 'gap-2 xl:gap-5 text-[13px] xl:text-[15px]'}`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-all hover:text-[#EE4423] whitespace-nowrap"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li ref={servicesDropdownRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 transition-all hover:text-[#EE4423] whitespace-nowrap cursor-pointer"
              >
                {t('services')}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[220px] bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {services.map((service) => {
                    if (service.slug === "free-consultation") {
                      return (
                        <button
                          key={service.slug}
                          onClick={() => {
                            setIsServicesOpen(false);
                            window.dispatchEvent(new CustomEvent("open-consultation-modal"));
                          }}
                          className="w-full text-left px-4 py-2.5 text-[14px] text-[#555555] hover:text-[#EE4423] hover:bg-gray-50 transition-colors cursor-pointer"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {service.label}
                        </button>
                      );
                    }
                    return (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2.5 text-[14px] text-[#555555] hover:text-[#EE4423] hover:bg-gray-50 transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {service.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </li>
          </ul>

          {/* RIGHT ACTION ITEMS CONTAINER */}
          <div className="flex items-center gap-2 xl:gap-3 ml-2">
            
            {/* SEARCH BAR - Interactive site-wide search */}
            <div ref={searchRef} className="relative">
              <div
                role="search"
                className={`relative flex items-center bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#F8F8F8] rounded-full ${isShiftRight ? 'h-[45px] xl:h-[49px]' : 'h-[40px] xl:h-[45px]'} ${isCompactSearch ? 'w-[100px] xl:w-[150px]' : 'w-[120px] xl:w-[180px]'} ${isSearchOpen && searchQuery ? 'ring-2 ring-[#EE4423]/30' : ''}`}
              >
                <div className={`absolute left-0 top-0 bg-[#EE4423] rounded-full flex items-center justify-center text-white h-full transition-all duration-300 ${isCompactSearch ? 'w-[36px] xl:w-[40px]' : isShiftRight ? 'w-[45px] xl:w-[49px]' : 'w-[40px] xl:w-[44px]'}`}>
                  <Search size={isCompactSearch ? 14 : isShiftRight ? 18 : 16} strokeWidth={2.5} />
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.trim()) setIsSearchOpen(true);
                  }}
                  onFocus={() => { if (searchQuery.trim()) setIsSearchOpen(true); }}
                  placeholder={t('search_placeholder')}
                  className={`w-full h-full font-medium outline-none bg-transparent placeholder:text-[#A0A0A0] text-[#555555] ${isCompactSearch ? 'pl-[38px] xl:pl-[42px] pr-2 text-[11px] xl:text-[13px]' : isShiftRight ? 'pl-[50px] xl:pl-[55px] pr-3 text-[13px] xl:text-[15px]' : 'pl-[44px] pr-2 text-[12px] xl:text-[14px]'}`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              {/* Search Results Dropdown */}
              {isSearchOpen && searchQuery.trim() && (
                <div className="absolute top-full right-0 mt-2 w-[400px] xl:w-[480px] bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 max-h-[70vh] overflow-y-auto">
                  {groupedResults.length > 0 ? (
                    groupedResults.map((group) => {
                      const Icon = categoryIcon[group.category];
                      return (
                        <div key={group.category}>
                          <div className="px-4 py-2 text-[11px] font-bold text-[#A0A0A0] uppercase tracking-wider flex items-center gap-1.5">
                            <Icon size={12} />
                            {categoryLabel[group.category]}
                          </div>
                          {group.items.slice(0, 5).map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                              className="flex items-start gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-full bg-[#EE4423]/10 flex items-center justify-center shrink-0 mt-0.5">
                                <Icon size={14} className="text-[#EE4423]" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-[14px] font-semibold text-[#414042] truncate">{item.label}</p>
                                <p className="text-[12px] text-[#A0A0A0] truncate">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      );
                    })
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <p className="text-[#58595B] font-medium">
                        {locale === 'ru' ? "Ничего не найдено" : locale === 'uz' ? "Hech narsa topilmadi" : locale === 'kk' ? "Ештеңе табылмады" : "No results found"}
                      </p>
                      <p className="text-[#A0A0A0] text-[13px] mt-1">
                        {locale === 'ru' ? "Попробуйте поискать врача, направление или услугу" : locale === 'uz' ? "Shifokor, mutaxassislik yoki xizmatni qidirib ko'ring" : locale === 'kk' ? "Дәрігер, мамандық немесе қызметті іздеп көріңіз" : "Try searching for a doctor, speciality, or service"}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* REQUEST CALL BACK BUTTON - Flexible widths based on active languages */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
              className={`flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] text-white rounded-full bg-[#EE4423] flex-shrink-0 cursor-pointer border-none outline-none ${isShiftRight ? 'px-4 xl:px-6 h-[45px] xl:h-[49px] gap-2' : 'px-3 xl:px-5 h-[40px] xl:h-[45px] gap-1.5'}`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "600",
                fontSize: isShiftRight ? "14px" : "13px",
              }}
            >
              <Phone className={`${isShiftRight ? 'w-5 h-5 xl:w-[22px] xl:h-[22px]' : 'w-4 h-4 xl:w-5 xl:h-5'}`} fill="currentColor" stroke="none" />
              <span className="whitespace-nowrap">{t('request_call')}</span>
            </button>

            {/* LANGUAGE SWITCHER */}
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET INTERFACE ACTIONS */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="flex items-center justify-center text-[#EE4423] p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY DRAWER */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[70px] bg-black/20 z-[55] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div id="mobile-menu" className="fixed inset-y-0 right-0 top-[70px] w-full max-w-[320px] bg-white z-[60] lg:hidden flex flex-col p-6 shadow-xl animate-in slide-in-from-right duration-300">
            <ul
              className="flex flex-col gap-5 text-[16px] font-semibold text-[#555555] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 border-b border-gray-100 transition-colors hover:text-[#EE4423]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-2.5 border-b border-gray-100 transition-colors hover:text-[#EE4423] cursor-pointer"
                >
                  {t('services')}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4">
                    {services.map((service) => {
                      if (service.slug === "free-consultation") {
                        return (
                          <button
                            key={service.slug}
                            onClick={() => {
                              setIsServicesOpen(false);
                              setIsMenuOpen(false);
                              window.dispatchEvent(new CustomEvent("open-consultation-modal"));
                            }}
                            className="block w-full text-left py-2.5 border-b border-gray-50 transition-colors hover:text-[#EE4423] cursor-pointer"
                          >
                            {service.label}
                          </button>
                        );
                      }
                      return (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block py-2.5 border-b border-gray-50 transition-colors hover:text-[#EE4423]"
                        >
                          {service.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>
            </ul>
            <button
              className="flex items-center justify-center py-3.5 rounded-full bg-[#EE4423] text-white font-bold gap-3 cursor-pointer border-none outline-none mt-auto"
              onClick={() => {
                setIsMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-consultation-modal"));
              }}
            >
              <Phone size={18} fill="currentColor" stroke="none" />
              {t('request_call')}
            </button>
          </div>
        </>
      )}
    </header>
  );
}