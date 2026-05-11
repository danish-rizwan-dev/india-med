"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "English", symbol: "EN", flag: "🇺🇸" },
    { code: "ru", name: "Русский", symbol: "RU", flag: "🇷🇺" },
    { code: "kk", name: "Қазақ", symbol: "KK", flag: "🇰🇿" },
    { code: "uz", name: "O'zbek", symbol: "UZ", flag: "🇺🇿" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  function onLanguageSelect(nextLocale: string) {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* TRIGGER BUTTON - COMPACT VERSION */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all duration-300 ${
          isOpen 
            ? "border-[#EE4423] bg-[#EE4423] text-white shadow-md" 
            : "border-[#E5E7EB] bg-white text-[#58595B] hover:border-[#EE4423] hover:text-[#EE4423]"
        } ${isPending ? "opacity-50 cursor-wait" : "cursor-pointer"}`}
      >
        <span className="text-[14px] leading-none mb-[2px]">{currentLanguage.flag}</span>
        <span className="font-montserrat font-bold text-[13px] tracking-tight uppercase">
          {currentLanguage.symbol}
        </span>
        <ChevronDown 
          size={12} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-[180px] bg-white rounded-[20px] shadow-[0px_15px_30px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden z-[100] animate-in fade-in zoom-in-95 duration-200"
          style={{ transformOrigin: "top right" }}
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageSelect(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors font-montserrat font-semibold text-[14px] ${
                  locale === lang.code 
                    ? "bg-[#FFF5F3] text-[#EE4423]" 
                    : "text-[#58595B] hover:bg-[#F9FAFB] hover:text-[#EE4423]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[16px]">{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
                {locale === lang.code && <Check size={14} strokeWidth={3} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
