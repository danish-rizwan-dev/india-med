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
  const isEn = locale === 'en';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('home'), href: "/" },
    { name: t('speciality'), href: "/speciality" },
    { name: t('services'), href: "/services" },
    { name: t('contact'), href: "/contact" },
  ];

  return (
    <header
      className="w-full sticky top-0 z-50 bg-[#FFFFFF] flex items-center"
      style={{ boxShadow: "0px 15px 20px 0px #68211314" }}
    >
      <nav
        className="mx-auto flex items-center justify-between w-full h-[60px] lg:h-[95px]"
        style={{ maxWidth: "1512px" }}
        aria-label="Main Medical Navigation"
      >
        {/* MAIN WRAPPER */}
        <div className="flex items-center justify-between w-full px-[25px] md:px-[50px] lg:pl-[96px] lg:pr-[60px]">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="India Med Service Home" className="relative block w-[120px] lg:w-[202.52px] h-[33px] lg:h-[56px]">
              <Image
                src="/images/Logo.svg"
                alt="India Med Service"
                fill
                className="object-contain opacity-100"
                priority
              />
            </Link>
          </div>

          {/* DESKTOP & IPAD PRO NAV */}
          <div className="hidden lg:flex items-center flex-grow">
            {/* LINKS - Locale-aware positioning & Pixel-Perfect Dimensions */}
            <ul
              className={`flex items-center gap-[35px] ${isEn ? "ml-12 xl:ml-[191px] w-[400px] h-[21px]" : "ml-6 xl:ml-[60px]"}`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                fontSize: isEn ? "min(17px, 1.2vw)" : "min(15px, 1.1vw)",
                lineHeight: "100%",
                color: "#555555",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#EE4423] transition-all whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SPACER TO CREATE THE LARGE GAP SHOWN IN SCREENSHOT */}
            <div className="flex-grow" />

            {/* SEARCH + CALL + LANG - RIGHT END */}
            <div className="flex items-center gap-[12px] xl:gap-[16px] ml-6 xl:ml-12">
              {/* SEARCH BAR */}
              <form
                action="/search"
                method="GET"
                role="search"
                className="relative flex items-center bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#F8F8F8] rounded-full group w-[140px] xl:w-[182px] h-[49px] transition-all"
              >
                <div className="absolute left-0 top-0 bg-[#EE4423] rounded-full flex items-center justify-center text-white w-[49px] h-[49px] transition-all duration-300 group-hover:scale-105 cursor-pointer">
                  <Search size={20} strokeWidth={2.5} />
                </div>
                <input
                  type="search"
                  name="q"
                  placeholder={t('search_placeholder')}
                  className="w-full pl-[55px] pr-2 h-full font-medium text-[15px] xl:text-[17px] outline-none bg-transparent placeholder:text-[#A0A0A0] text-[#555555]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </form>

              {/* REQUEST CALL BACK BUTTON */}
              <Link
                href="/contact"
                className="flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] text-white rounded-full bg-[#EE4423] min-w-[180px] xl:min-w-[237px] w-fit px-4 xl:px-6 h-[49px] gap-[6px] xl:gap-[10px] flex-shrink-0"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "600",
                  fontSize: isEn ? "min(17px, 1.1vw)" : "min(13px, 0.9vw)",
                }}
              >
                <Phone
                  className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px]"
                  fill="currentColor"
                  stroke="none"
                />
                <span className="whitespace-nowrap">{t('request_call')}</span>
              </Link>

              {/* COMPACT LANGUAGE SWITCHER */}
              <div className="ml-[12px] xl:ml-[17px]">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden flex items-center justify-center text-[#EE4423]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] bg-black/20 z-[55] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div id="mobile-menu" className="fixed inset-0 top-[60px] bg-white z-[60] lg:hidden flex flex-col p-6 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="mb-6 pb-6 border-b border-gray-100 flex justify-center">
              <LanguageSwitcher />
            </div>
            <ul
              className="flex flex-col gap-6 text-[18px] font-semibold text-[#555555] mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 border-b border-gray-50 hover:text-[#EE4423]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="flex items-center justify-center py-4 rounded-full bg-[#EE4423] text-white font-bold gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={20} fill="currentColor" stroke="none" />
              {t('request_call')}
            </Link>
          </div>
        </>
      )}
    </header>
  );
}