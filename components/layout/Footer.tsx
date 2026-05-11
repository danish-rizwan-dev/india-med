"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Facebook, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const toggleSection = (idx: number) => {
    setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const footerSections = [
    {
      title: t('col_1_title'),
      data: [
        { label: t('links.find_doctor'), href: "/find-doctor" },
        { label: t('links.book_apt'), href: "/book-appointment" },
        { label: t('links.treatments'), href: "/treatments" },
        { label: t('links.emergency'), href: "/emergency-24x7" },
        { label: t('links.technology'), href: "/technology" },
        { label: t('links.testimonials'), href: "/patient-testimonials" },
        { label: t('links.disclaimer'), href: "/disclaimer" },
        { label: t('links.privacy'), href: "/privacy-policy" }
      ],
    },
    {
      title: t('col_2_title'),
      data: [
        { label: t('links.cardiac'), href: "/cardiac-care" },
        { label: t('links.cancer'), href: "/cancer-care" },
        { label: t('links.neuro'), href: "/neurosciences" },
        { label: t('links.ortho'), href: "/orthopaedics" },
        { label: t('links.renal'), href: "/renal-care" },
        { label: t('links.liver'), href: "/liver-transplant" },
        { label: t('links.bone'), href: "/bone-marrow" },
        { label: t('links.lung'), href: "/lung-transplant" }
      ],
    },
    {
      title: t('col_3_title'),
      data: [
        { label: t('links.gurugram'), href: "/india-med-gurugram" },
        { label: t('links.patna'), href: "/india-med-patna" },
        { label: t('links.lucknow'), href: "/india-med-lucknow" },
        { label: t('links.indore'), href: "/india-med-indore" },
        { label: t('links.noida'), href: "/india-med-noida" }
      ],
    },
    {
      title: t('col_4_title'),
      data: [
        { label: t('links.help'), href: "/help-desk" },
        { label: t('links.about'), href: "/about-us" },
        { label: t('links.blogs'), href: "/blogs" },
        { label: t('links.feedback'), href: "/feedback" },
        { label: t('links.contact'), href: "/contact-us" }
      ],
    },
  ];

  const FacebookIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.3337 16.0003C29.3337 8.64033 23.3603 2.66699 16.0003 2.66699C8.64033 2.66699 2.66699 8.64033 2.66699 16.0003C2.66699 22.4537 7.25366 27.827 13.3337 29.067V20.0003H10.667V16.0003H13.3337V12.667C13.3337 10.0937 15.427 8.00033 18.0003 8.00033H21.3337V12.0003H18.667C17.9337 12.0003 17.3337 12.6003 17.3337 13.3337V16.0003H21.3337V20.0003H17.3337V29.267C24.067 28.6003 29.3337 22.9203 29.3337 16.0003Z" fill="currentColor"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1071_6135" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path d="M0 0H24V24H0V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_1071_6135)">
        <path d="M18.9 1.125H22.5806L14.5406 10.3376L24 22.8759H16.5943L10.7897 15.273L4.15543 22.8759H0.471429L9.07029 13.0187L0 1.12671H7.59429L12.8331 8.07471L18.9 1.125ZM17.6057 20.6679H19.6457L6.48 3.21814H4.29257L17.6057 20.6679Z" fill="currentColor"/>
      </g>
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3343 4C23.1024 4 24.7981 4.70238 26.0484 5.95262C27.2986 7.20286 28.001 8.89856 28.001 10.6667V21.3333C28.001 23.1014 27.2986 24.7971 26.0484 26.0474C24.7981 27.2976 23.1024 28 21.3343 28H10.6676C8.89953 28 7.20384 27.2976 5.9536 26.0474C4.70336 24.7971 4.00098 23.1014 4.00098 21.3333V10.6667C4.00098 8.89856 4.70336 7.20286 5.9536 5.95262C7.20384 4.70238 8.89953 4 10.6676 4H21.3343ZM16.001 10.6667C14.5865 10.6667 13.2299 11.2286 12.2297 12.2288C11.2295 13.229 10.6676 14.5855 10.6676 16C10.6676 17.4145 11.2295 18.771 12.2297 19.7712C13.2299 20.7714 14.5865 21.3333 16.001 21.3333C17.4155 21.3333 18.772 20.7714 19.7722 19.7712C20.7724 18.771 21.3343 17.4145 21.3343 16C21.3343 14.5855 20.7724 13.229 19.7722 12.2288C18.772 11.2286 17.4155 10.6667 16.001 10.6667ZM16.001 13.3333C16.7082 13.3333 17.3865 13.6143 17.8866 14.1144C18.3867 14.6145 18.6676 15.2928 18.6676 16C18.6676 16.7072 18.3867 17.3855 17.8866 17.8856C17.3865 18.3857 16.7082 18.6667 16.001 18.6667C15.2937 18.6667 14.6155 18.3857 14.1154 17.8856C13.6153 17.3855 13.3343 16.7072 13.3343 16C13.3343 15.2928 13.6153 14.6145 14.1154 14.1144C14.6155 13.6143 15.2937 13.3333 16.001 13.3333ZM22.001 8.66667C21.6474 8.66667 21.3082 8.80714 21.0582 9.05719C20.8081 9.30724 20.6676 9.64638 20.6676 10C20.6676 10.3536 20.8081 10.6928 21.0582 10.9428C21.3082 11.1929 21.6474 11.3333 22.001 11.3333C22.3546 11.3333 22.6937 11.1929 22.9438 10.9428C23.1938 10.6928 23.3343 10.3536 23.3343 10C23.3343 9.64638 23.1938 9.30724 22.9438 9.05719C22.6937 8.80714 22.3546 8.66667 22.001 8.66667Z" fill="currentColor"/>
    </svg>
  );

  const YoutubeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2.66699C8.636 2.66699 2.66699 8.63633 2.66699 16.0003C2.66699 23.3643 8.636 29.3337 16 29.3337C23.364 29.3337 29.3337 23.3643 29.3337 16.0003C29.3337 8.63633 23.364 2.66699 16 2.66699ZM22.1867 18.5203C22.0627 19.347 21.3147 20.011 20.4853 20.103C19.0013 20.267 16.0013 20.267 16.0013 20.267C16.0013 20.267 13.0013 20.267 11.5173 20.103C10.688 20.011 9.94 19.347 9.816 18.5203C9.66666 17.5203 9.66666 16.0003 9.66666 16.0003C9.66666 16.0003 9.66666 14.4803 9.816 13.4803C9.94 12.6537 10.688 11.9897 11.5173 11.8977C13.0013 11.7337 16.0013 11.7337 16.0013 11.7337C16.0013 11.7337 19.0013 11.7337 20.4853 11.8977C21.3147 11.9897 22.0627 12.6537 22.1867 13.4803C22.336 14.4803 22.336 16.0003 22.336 16.0003C22.336 16.0003 22.336 17.5203 22.1867 18.5203ZM14.0013 13.0003V19.0003L19.3347 16.0003L14.0013 13.0003Z" fill="currentColor"/>
    </svg>
  );

  return (
    <footer className="relative bg-white pt-16 lg:pt-24 pb-10 w-full overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden lg:flex max-w-[1320px] mx-auto flex-col lg:flex-row lg:gap-20">

        {/* Brand & Contact Section */}
        <div className="flex flex-col gap-10 w-full lg:w-[380px] px-6 lg:px-0 py-10 lg:py-0 items-start text-left">
          <Link href="/" className="relative w-[212px] h-[76px] block">
            <Image
              src="/images/Logo.svg"
              alt="India Med Service Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <p className="text-[#58595B] font-montserrat font-medium text-[16px] leading-relaxed">
            {t('desc')}
          </p>

          <nav className="flex gap-8 text-[#58595B]" aria-label="Social Media Links">
            {[
              { Icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/indiamed" },
              { Icon: TwitterIcon, label: "Twitter", href: "https://twitter.com/indiamed" },
              { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/indiamed" },
              { Icon: YoutubeIcon, label: "Youtube", href: "https://youtube.com/indiamed" }
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={`Follow India Med on ${label}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EE4423] transition-all hover:scale-110 opacity-80 hover:opacity-100"
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>

        {/* Navigation Grid */}
        <div className="flex-1 grid grid-cols-4 gap-10">
          {footerSections.map((col, idx) => (
            <nav key={idx} aria-labelledby={`footer-col-${idx}`}>
              <h4 id={`footer-col-${idx}`} className="text-[#EE4423] font-montserrat font-bold text-[24px] mb-10">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.data.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-[#58595B] font-montserrat font-semibold text-[17px] hover:text-[#EE4423] transition-colors opacity-90 hover:opacity-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* ================= MOBILE VIEW (NEW DESIGN) ================= */}
      <div className="lg:hidden flex flex-col items-center px-6">
        
        {/* Navigation List */}
        <div className="w-full flex flex-col mb-12">
          {[
            { title: t('col_2_title'), href: "/#specialities" },
            { title: t('col_1_title'), href: "/#services" },
            { title: t('links.contact'), href: "/#contact" }
          ].map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href}
              className="flex items-center justify-between py-6 border-b border-gray-200"
            >
              <span className="text-[#58595B] font-bold text-[18px] font-montserrat">{item.title}</span>
              <div className="flex items-center justify-center">
                <Image 
                  src="/images/sections/patient-stories/playbutton.svg" 
                  alt="arrow" 
                  width={28} 
                  height={28} 
                  className="object-contain brightness-0 opacity-70"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Logo & Description */}
        <div className="flex flex-col items-center text-center gap-6 mb-10">
          <Link href="/" className="relative w-[180px] h-[64px] block">
            <Image
              src="/images/Logo.svg"
              alt="India Med Service Logo"
              fill
              className="object-contain"
            />
          </Link>
          <p className="text-[#58595B] font-montserrat font-medium text-[14px] leading-relaxed max-w-[340px]">
            {t('desc')}
          </p>
        </div>

        {/* Social Links */}
        <nav className="flex gap-8 text-[#58595B] mb-12 items-center" aria-label="Social Media Links">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </nav>

        {/* Legal Links */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <Link href="/privacy-policy" className="text-[#58595B] text-[15px] font-bold underline decoration-1 underline-offset-4">
            {t('privacy')}
          </Link>
          <Link href="/terms-and-conditions" className="text-[#58595B] text-[15px] font-bold underline decoration-1 underline-offset-4">
            {t('terms')}
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-2 text-[#58595B] font-montserrat text-[14px] font-medium opacity-80">
          <div className="border border-[#58595B] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">C</div>
          <span>Copyright by Triolzs, All rights reserved</span>
        </div>
      </div>

      {/* Desktop Footer Bottom */}
      <div className="hidden lg:flex max-w-[1320px] mx-auto px-6 mt-16 pt-10 border-t border-gray-100 justify-between items-center gap-8">
        <p className="text-[#58595B] font-montserrat text-[14px] font-medium opacity-80">
          {t('copyright', { year: currentYear })}
        </p>
        <div className="flex gap-10">
          <Link href="/privacy-policy" className="text-[#58595B] text-[14px] font-bold hover:text-[#EE4423] transition-colors">
            {t('privacy')}
          </Link>
          <Link href="/terms-and-conditions" className="text-[#58595B] text-[14px] font-bold hover:text-[#EE4423] transition-colors">
            {t('terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
