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
      className="w-full min-h-[60px] sm:min-h-[70px] md:min-h-[80px] lg:h-[95px] bg-[#FFFFFF] flex items-center sticky top-0 z-50"
      style={{ boxShadow: "0px 15px 20px 0px #68211314" }}
    >
      <nav
        className="mx-auto flex items-center justify-between w-full max-w-full md:max-w-[1512px] px-2 sm:px-4 md:px-6 lg:px-12 xl:px-[96px] py-2 sm:py-3 lg:py-0"
        aria-label="Main Medical Navigation"
      >
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="India Med Service Home">
            <Image
              src="/images/Logo.svg"
              alt="India Med Service"
              width={193}
              height={65}
              className="object-contain w-[80px] sm:w-[110px] md:w-[140px] lg:w-[193px] h-auto"
              priority
            />
          </Link>
        </div>

        {/* DESKTOP NAV ACTIONS */}
        <div className="hidden lg:flex items-center justify-between flex-grow ml-8 xl:ml-[159px]">
          <ul
            className="flex items-center gap-6 xl:gap-[35px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "500",
              fontSize: "17px",
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

          <div className="flex items-center gap-4 xl:gap-[24px]">
            {/* SEARCH BAR */}
            <form
              action="/search"
              method="GET"
              role="search"
              className="relative flex items-center bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#F8F8F8] rounded-full group"
              style={{ width: "182px", height: "49px" }}
            >
              {/* The Search Button with a small scale and shadow effect */}
              <div className="absolute left-0 top-0 bg-[#EE4423] rounded-full flex items-center justify-center text-white w-[49px] h-[49px] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(238,68,35,0.4)] cursor-pointer">
                <Search size={20} strokeWidth={2.5} />
              </div>
              <input
                type="search"
                name="q"
                placeholder="Search..."
                className="w-full pl-[60px] pr-4 h-full font-medium text-[17px] outline-none bg-transparent placeholder:text-[#A0A0A0] text-[#555555]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />
            </form>

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] text-white rounded-full bg-[#EE4423]"
              style={{
                width: "237px",
                height: "49px",
                gap: "10px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              <Phone
                style={{ width: "24px", height: "24px" }}
                fill="currentColor"
                stroke="none"
              />
              <span>Request Call Back</span>
            </Link>
          </div>
        </div>

        {/* TABLET ACTIONS (Show on md and sm) */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <Link
            href="/search"
            className="w-[45px] h-[45px] bg-[#EE4423] rounded-full flex items-center justify-center text-white"
          >
            <Search size={20} strokeWidth={2.5} />
          </Link>
          <Link
            href="/contact"
            className="w-[45px] h-[45px] bg-[#EE4423] rounded-full flex items-center justify-center text-white"
          >
            <Phone size={20} fill="currentColor" stroke="none" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden p-2 text-[#EE4423]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] sm:top-[70px] md:top-[80px] bg-black/20 z-[55] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed inset-0 top-[60px] sm:top-[70px] md:top-[80px] bg-white z-[60] lg:hidden flex flex-col p-6 animate-in slide-in-from-top duration-300">
            <ul
              className="flex flex-col gap-6 text-[18px] font-semibold text-[#555555] mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 hover:text-[#EE4423]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <form
                action="/search"
                className="relative flex items-center bg-white shadow-lg border border-[#F8F8F8] rounded-full w-full h-[50px]"
              >
                <div className="absolute left-0 top-0 bg-[#EE4423] rounded-full flex items-center justify-center text-white w-[50px] h-[50px]">
                  <Search size={20} />
                </div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-[65px] pr-4 h-full outline-none bg-transparent"
                />
              </form>
              <Link
                href="/contact"
                className="flex items-center justify-center py-4 rounded-full bg-[#EE4423] text-white font-bold gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={20} fill="currentColor" stroke="none" />
                Request Call Back
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
