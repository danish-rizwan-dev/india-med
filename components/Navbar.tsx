"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Speciality", href: "/speciality" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header 
      className="w-full min-h-[70px] sm:min-h-[80px] lg:h-[95px] bg-[#FFFFFF] flex items-center sticky top-0 z-50"
      style={{ boxShadow: "0px 15px 20px 0px #68211314" }}
    >
      <nav
        className="mx-auto flex items-center justify-between w-full max-w-[1512px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[96px] py-3 lg:py-0"
        aria-label="Main Medical Navigation"
      >
        {/* LOGO - Responsive sizing */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="India Med Service Home">
            <Image
              src="/images/logo.png" 
              alt="India Med Service - Healthcare Solutions in India"
              width={193} 
              height={65}
              className="object-contain w-[110px] sm:w-[140px] md:w-[160px] lg:w-[193px] h-auto"
              priority
            />
          </Link>
        </div>

        {/* DESKTOP NAV ACTIONS - Hidden on Mobile/Tablet */}
        <div className="hidden lg:flex items-center justify-between flex-grow ml-8 xl:ml-[159px]">
          <ul 
            className="flex items-center gap-6 xl:gap-[35px]"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "100%",
              color: "#555555"
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#EE4423] transition-all whitespace-nowrap">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 xl:gap-[24px]">
            {/* SEARCH BAR */}
            <form action="/search" method="GET" role="search"
              className="relative flex items-center bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#F8F8F8] rounded-full"
              style={{ width: "182px", height: "49px", padding: "10px 50px 10px 60px" }}
            >
              <div className="absolute left-0 top-0 bg-[#EE4423] rounded-full flex items-center justify-center text-white w-[49px] h-[49px]">
                <Search size={20} strokeWidth={2.5} />
              </div>
              <input
                type="search"
                name="q"
                placeholder="Search..."
                className="w-[72px] h-[18px] font-medium text-[17px] outline-none bg-transparent placeholder:text-[#A0A0A0] text-[#555555]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />
            </form>

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] text-white rounded-full"
              style={{
                width: "237px",
                height: "49px",
                paddingLeft: "20px",
                paddingRight: "20px",
                gap: "10px",
                backgroundColor: "#EE4423",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "600",
                fontSize: "17px"
              }}
            >
              <Phone style={{ width: "28px", height: "28px" }} fill="currentColor" stroke="none" />
              <span>Request Call Back</span>
            </Link>
          </div>
        </div>

        {/* TABLET/MOBILE ACTIONS - Show between md and lg */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          {/* Search Icon Only */}
          <Link
            href="/search"
            className="w-[45px] h-[45px] bg-[#EE4423] rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={2.5} />
          </Link>
          
          {/* Call Button Icon Only */}
          <Link
            href="/contact"
            className="w-[45px] h-[45px] bg-[#EE4423] rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform"
            aria-label="Request Call Back"
          >
            <Phone size={20} fill="currentColor" stroke="none" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden p-2 text-[#EE4423] -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} className="sm:w-8 sm:h-8" /> : <Menu size={28} className="sm:w-8 sm:h-8" />}
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 top-[70px] sm:top-[80px] lg:top-[95px] bg-black/20 z-[55] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Content */}
          <div className="fixed inset-0 top-[70px] sm:top-[80px] lg:top-[95px] bg-white z-[60] lg:hidden flex flex-col p-6 sm:p-8 animate-in fade-in slide-in-from-top duration-300 overflow-y-auto">
            <ul className="flex flex-col gap-5 sm:gap-6 text-[18px] sm:text-[20px] font-semibold text-[#555555] mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="block py-2 hover:text-[#EE4423] active:text-[#EE4423] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col gap-4 mt-auto">
              {/* Search Bar for Mobile */}
              <form action="/search" method="GET" role="search"
                className="relative flex items-center bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#F8F8F8] rounded-full w-full h-[50px] sm:h-[54px]"
              >
                <div className="absolute left-0 top-0 bg-[#EE4423] rounded-full flex items-center justify-center text-white w-[50px] h-[50px] sm:w-[54px] sm:h-[54px]">
                  <Search size={20} strokeWidth={2.5} />
                </div>
                <input
                  type="search"
                  name="q"
                  placeholder="Search..."
                  className="w-full pl-[60px] sm:pl-[70px] pr-6 h-full font-medium text-[16px] sm:text-[17px] outline-none bg-transparent placeholder:text-[#A0A0A0] text-[#555555]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </form>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="flex items-center justify-center py-4 sm:py-[14px] rounded-full bg-[#EE4423] text-white font-bold text-[17px] sm:text-lg gap-3 hover:bg-[#D63D1F] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={22} className="sm:w-6 sm:h-6" fill="currentColor" stroke="none" />
                Request Call Back
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}