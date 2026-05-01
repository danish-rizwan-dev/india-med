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
      className="w-full sticky top-0 z-50 bg-[#FFFFFF] flex items-center"
      style={{ boxShadow: "0px 15px 20px 0px #68211314" }}
    >
      <nav
        className="mx-auto flex items-center justify-between w-full h-[60px] lg:h-[95px]"
        style={{ maxWidth: "1512px" }}
        aria-label="Main Medical Navigation"
      >
        {/* MAIN WRAPPER */}
        <div className="flex items-center justify-between w-full px-[25px] md:px-[50px] lg:px-[96px]">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="India Med Service Home">
              <Image
                src="/images/logo.svg"
                alt="India Med Service"
                width={203}
                height={56}
                className="object-contain w-[120px] lg:w-[202.52px] h-[33px] lg:h-[56px] opacity-100"
                priority
              />
            </Link>
          </div>

          {/* DESKTOP & IPAD PRO NAV */}
          <div className="hidden lg:flex items-center flex-grow justify-between ml-4 xl:ml-[159px]">
            <ul
              className="flex items-center gap-[15px] xl:gap-[35px]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                fontSize: "min(17px, 1.2vw)",
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

            <div className="flex items-center gap-[12px] xl:gap-[24px]">
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
                  placeholder="Search..."
                  className="w-full pl-[55px] pr-2 h-full font-medium text-[15px] xl:text-[17px] outline-none bg-transparent placeholder:text-[#A0A0A0] text-[#555555]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </form>

              {/* REQUEST CALL BACK BUTTON */}
              <Link
                href="/contact"
                className="flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] text-white rounded-full bg-[#EE4423] w-[180px] xl:w-[237px] h-[49px] gap-[6px] xl:gap-[10px] flex-shrink-0"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "600",
                  fontSize: "min(17px, 1.1vw)",
                }}
              >
                <Phone 
                  className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px]" 
                  fill="currentColor" 
                  stroke="none" 
                />
                <span className="whitespace-nowrap">Request Call Back</span>
              </Link>
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
              Request Call Back
            </Link>
          </div>
        </>
      )}
    </header>
  );
} 