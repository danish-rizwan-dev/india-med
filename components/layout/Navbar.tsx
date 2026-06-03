"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Search, Phone, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const isCompactSearch = locale === 'uz' || locale === 'kk';
  const isShiftRight = locale === 'en' || locale === 'ru';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('home'), href: "/" },
    { name: t('speciality'), href: "/speciality" },
    { name: t('doctors'), href: "/doctors" },
    { name: t('services'), href: "/services" },
    { name: t('contact'), href: "/contact" },
  ];

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
            className="flex items-center gap-4 xl:gap-8 font-medium text-[14px] xl:text-[16px] text-[#555555]"
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
          </ul>

          {/* RIGHT ACTION ITEMS CONTAINER */}
          <div className="flex items-center gap-3 xl:gap-4 ml-4">
            
            {/* SEARCH BAR - Uses min-width limits instead of breaking widths */}
            <form
              action={`/${locale}/speciality`}
              method="GET"
              role="search"
              className={`relative flex items-center bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#F8F8F8] rounded-full group h-[45px] xl:h-[49px] ${isCompactSearch ? 'w-[120px] xl:w-[170px]' : 'w-[140px] xl:w-[200px]'}`}
            >
              <div className={`absolute left-0 top-0 bg-[#EE4423] rounded-full flex items-center justify-center text-white h-full transition-all duration-300 group-hover:scale-105 cursor-pointer ${isCompactSearch ? 'w-[40px] xl:w-[45px]' : 'w-[45px] xl:w-[49px]'}`}>
                <Search size={isCompactSearch ? 16 : 18} strokeWidth={2.5} />
              </div>
              <input
                type="search"
                name="q"
                placeholder={t('search_placeholder')}
                className={`w-full pl-[52px] pr-3 h-full font-medium ${isCompactSearch ? 'text-[12px] xl:text-[14px]' : 'text-[13px] xl:text-[15px]'} outline-none bg-transparent placeholder:text-[#A0A0A0] text-[#555555]`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />
            </form>

            {/* REQUEST CALL BACK BUTTON - Flexible widths based on active languages */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
              className="flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] text-white rounded-full bg-[#EE4423] px-4 xl:px-6 h-[45px] xl:h-[49px] gap-2 flex-shrink-0 cursor-pointer border-none outline-none"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              <Phone className="w-4 h-4 xl:w-5 xl:h-5" fill="currentColor" stroke="none" />
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