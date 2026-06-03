"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Facebook, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react";
import { useTranslations } from 'next-intl';

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

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EE4423]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const VisaLogo = () => (
  <svg viewBox="0 0 24 15" className="h-full w-full object-contain">
    <path fill="#1A1F71" d="M9.16 14h2.2l1.38-8.54H10.5L9.16 14z"/>
    <path fill="#1A1F71" d="M18.23 6.3c-.46-.18-1.18-.38-2.08-.38-2.29 0-3.9 1.2-3.9 2.92-.01 1.27 1.15 1.97 2.03 2.4.9.44 1.2.72 1.2 1.1 0 .6-.72.87-1.39.87-.93 0-1.43-.14-2.19-.47l-.3-.15-.33 2c.55.25 1.57.47 2.63.47 2.43 0 4-1.2 4.04-3.03.01-1-.61-1.78-1.95-2.4-.81-.4-1.31-.67-1.31-1.08 0-.37.43-.76 1.35-.76.77-.01 1.33.16 1.76.34l.21.1.33-1.98z"/>
    <path fill="#F7A600" d="M5.93 5.46L3.86 11.08l-.22-1.13C3.25 8.6 2.03 7.13.68 6.42l1.92 7.58h2.3l3.43-8.54H5.93z"/>
    <path fill="#1A1F71" d="M8.22 5.46L6.22 14h2.14l2-8.54H8.22z"/>
  </svg>
);

const MastercardLogo = () => (
  <svg viewBox="0 0 24 15" className="h-full w-full object-contain">
    <circle cx="7.5" cy="7.5" r="7.5" fill="#EB001B"/>
    <circle cx="16.5" cy="7.5" r="7.5" fill="#F79E1B" fillOpacity="0.8"/>
    <path fill="#FF5F00" d="M12 2.85c1.37 1.14 2.25 2.86 2.25 4.65s-.88 3.51-2.25 4.65c-1.37-1.14-2.25-2.86-2.25-4.65s.88-3.51 2.25-4.65z"/>
  </svg>
);

const AmexLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full object-contain">
    <rect width="24" height="24" rx="4" fill="#007bc1"/>
    <text x="12" y="15" fontFamily="'Courier New', Courier, monospace" fontWeight="900" fontSize="7.5" fill="#FFF" textAnchor="middle" letterSpacing="0.5">AMEX</text>
  </svg>
);

const PayPalLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full object-contain">
    <path fill="#003087" d="M17.3 7.8c0-3.8-3.1-6.8-6.9-6.8H4.2c-.4 0-.8.3-.9.7L1.1 18.2c0 .4.3.8.7.8h3.7l1-6.5c0-.4.3-.7.7-.7h2.2c3.8 0 6.9-3.1 6.9-6.9v-0.1z"/>
    <path fill="#0079C1" d="M19.1 9.8c0-3.8-3.1-6.8-6.9-6.8H6l-1.9 12c0 .4.3.8.7.8h3.7l1-6.5c0-.4.3-.7.7-.7h2.2c3.8 0 6.9-3.1 6.9-6.9v-0.1z" opacity="0.85"/>
  </svg>
);

const ApplePayLogo = () => (
  <svg viewBox="0 0 60 18" className="h-full w-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#000"
      d="M12.2 3.15c.5-.62.84-1.47.74-2.35-.75.04-1.66.5-2.2 1.12-.48.55-.9 1.43-.78 2.27.84.07 1.7-.42 2.24-1.04ZM14.5 10.6c-.02-2.1 1.72-3.1 1.8-3.16-1-.14-1.94-.57-2.78-1.28-.8-.68-1.5-.7-2.3-.7-.98 0-1.88.58-2.37.58-.5 0-1.27-.55-2.1-.53-1.08.02-2.08.63-2.64 1.6-1.13 1.96-.29 4.86.82 6.45.54.78 1.18 1.65 2.02 1.62.81-.03 1.12-.52 2.1-.52.97 0 1.25.52 2.1.5.87-.01 1.42-.79 1.95-1.57.62-.9.88-1.78.9-1.83-.02-.01-1.48-.57-1.5-2.16Z"
    />
    <text x="22" y="13.2" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="9.5" fill="#000">Pay</text>
  </svg>
);

const GooglePayLogo = () => (
  <svg viewBox="0 0 45 18" className="h-full w-full object-contain">
    <path fill="#4285F4" d="M12.5 6h-6v3h4.3C10.4 10.3 9.1 11 7.5 11c-2.5 0-4.5-2-4.5-4.5S5 2 7.5 2c1.2 0 2.3.5 3.1 1.3l2.2-2.2C11.3.4 9.5 0 7.5 0 3.4 0 0 3.4 0 7.5S3.4 15 7.5 15c4.2 0 7.5-3 7.5-7.5 0-.5 0-1-.1-1.5h-2.4z"/>
    <text x="17" y="11.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="9" fill="currentColor">Pay</text>
  </svg>
);

const SwiftLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full object-contain text-gray-600" fill="currentColor">
    <path d="M12 2L1 7v2h22V7L12 2zm0 18H2v2h20v-2h-10zm-9-9v7h3v-7H3zm6 0v7h3v-7H9zm6 0v7h3v-7h-3zm6 0v7h3v-7h-3z"/>
  </svg>
);

const UpiLogo = () => (
  <svg viewBox="0 0 48 18" className="h-full w-full object-contain">
    <text x="2" y="11.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontStyle="italic" fontSize="12" fill="#005691">U</text>
    <text x="11" y="11.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontStyle="italic" fontSize="12" fill="#097939">P</text>
    <text x="20" y="11.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontStyle="italic" fontSize="12" fill="#005691">I</text>
    <rect x="2" y="13.5" width="13" height="1.8" fill="#E27325" transform="skewX(-15)" />
    <rect x="17" y="13.5" width="13" height="1.8" fill="#097939" transform="skewX(-15)" />
  </svg>
);

const RupayLogo = () => (
  <svg viewBox="0 0 48 18" className="h-full w-full object-contain">
    <text x="2" y="12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontStyle="italic" fontSize="11" fill="#0A5B9C">RuPay</text>
    <polygon points="36,2 41,2 38,7 33,7" fill="#E57820" />
    <polygon points="34,8 39,8 36,13 31,13" fill="#1CA74C" />
  </svg>
);

const PaytmLogo = () => (
  <svg viewBox="0 0 48 18" className="h-full w-full object-contain">
    <text x="2" y="12.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="12" fill="#002E6E">pay</text>
    <text x="22" y="12.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="12" fill="#00B9F5">tm</text>
  </svg>
);

const PhonePeLogo = () => (
  <svg viewBox="0 0 86 18" className="h-full w-full object-contain">
    <rect x="2" y="2" width="14" height="14" rx="3.5" fill="#5F259F"/>
    <path d="M7 5h4.3c1.7 0 2.9 1 2.9 2.6S13 10.2 11.3 10.2H9.5V13H7V5Zm2.5 2v1.2h1.5c.45 0 .72-.23.72-.6 0-.38-.27-.6-.72-.6H9.5Z" fill="#FFF"/>
    <text x="22" y="12.5" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="10.5" fill="#5F259F">PhonePe</text>
  </svg>
);

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
        { label: t('links.find_doctor'), href: "/doctors" },
        { label: t('links.book_apt'), href: "/contact" },
        { label: t('links.treatments'), href: "/speciality" },
        { label: t('links.emergency'), href: "/contact" },
        { label: t('links.technology'), href: "/speciality" },
        { label: t('links.testimonials'), href: "/#patient-stories" },
        { label: t('links.disclaimer'), href: "/terms-and-conditions" },
        { label: t('links.privacy'), href: "/privacy-policy" },
        { label: t('links.terms'), href: "/terms-and-conditions" }
      ],
    },
    {
      title: t('col_2_title'),
      data: [
        { label: t('links.cardiac'), href: "/speciality/cardiological-assistance" },
        { label: t('links.cancer'), href: "/speciality/cancer-treatment" },
        { label: t('links.neuro'), href: "/speciality/neuroscience" },
        { label: t('links.ortho'), href: "/speciality/orthopedics" },
        { label: t('links.renal'), href: "/speciality/kidney-transplant" },
        { label: t('links.liver'), href: "/speciality/liver-transplant" },
        { label: t('links.bone'), href: "/speciality/bone-marrow-transplant" },
        { label: t('links.lung'), href: "/speciality/lung-transplantation" }
      ],
    },
    {
      title: t('col_3_title'),
      data: [
        { label: t('links.gurugram'), href: "/#destinations" },
        { label: t('links.patna'), href: "/#destinations" },
        { label: t('links.lucknow'), href: "/#destinations" },
        { label: t('links.indore'), href: "/#destinations" },
        { label: t('links.noida'), href: "/#destinations" }
      ],
    },
    {
      title: t('col_4_title'),
      data: [
        { label: t('links.help'), href: "/contact" },
        { label: t('links.about'), href: "/#beyond-boundaries" },
        { label: t('links.blogs'), href: "/#blogs" },
        { label: t('links.feedback'), href: "/contact" },
        { label: t('links.contact'), href: "/contact" }
      ],
    },
  ];

  return (
    <footer className="relative bg-white pt-16 lg:pt-24 pb-10 w-full overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden lg:block max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-20">

          {/* Brand & Contact Section */}
          <div className="flex flex-col gap-10 w-full lg:w-[280px] xl:w-[380px] px-6 lg:px-0 py-10 lg:py-0 items-start text-left">
            <Link href="/" className="relative w-[212px] h-[76px] block">
              <Image
                src="/images/indiaMedServiceLogo.svg"
                alt="India Med Service Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            <p className="text-[#58595B] font-montserrat font-medium text-[14px] xl:text-[16px] leading-relaxed">
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
          <div className="flex-1 grid grid-cols-4 gap-4 xl:gap-10">
            {footerSections.map((col, idx) => (
              <nav key={idx} aria-labelledby={`footer-col-${idx}`}>
                <h4 id={`footer-col-${idx}`} className="text-[#EE4423] font-montserrat font-bold text-[18px] xl:text-[24px] mb-6 xl:mb-10">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.data.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="text-[#58595B] font-montserrat font-semibold text-[14px] xl:text-[17px] hover:text-[#EE4423] transition-colors opacity-90 hover:opacity-100"
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

        {/* Desktop Payments Section */}
        <div className="mt-16 pt-10 border-t border-gray-100 w-full px-6 lg:px-0">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
            {/* Info */}
            <div className="flex gap-4 max-w-xl text-left">
              <div className="mt-1 flex-shrink-0">
                <ShieldCheckIcon />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[#58595B] font-montserrat font-bold text-[16px] xl:text-[18px]">
                  {t('secure_payments')}
                </h4>
                <p className="text-[#58595B] font-montserrat font-medium text-[13px] xl:text-[14px] opacity-90 leading-relaxed">
                  {t('payments_desc')}
                </p>
              </div>
            </div>
            {/* Cards */}
            <div className="flex flex-wrap gap-3 items-center justify-start xl:justify-end">
              <div className="flex flex-wrap gap-2 items-center">
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="Visa"><VisaLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="Mastercard"><MastercardLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="American Express"><AmexLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="PayPal"><PayPalLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-3 py-1 flex items-center justify-center h-8 min-w-[72px] shadow-sm hover:shadow-md hover:scale-105 transition-all text-[#292929]" title="Apple Pay"><ApplePayLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="Google Pay"><GooglePayLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="SWIFT / Wire Transfer"><SwiftLogo /></div>
              </div>
              <div className="hidden sm:block h-6 w-[1px] bg-gray-200 mx-1"></div>
              <div className="flex flex-wrap gap-2 items-center">
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="UPI"><UpiLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="RuPay"><RupayLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-8 w-14 shadow-sm hover:shadow-md hover:scale-105 transition-all" title="Paytm"><PaytmLogo /></div>
                <div className="bg-white border border-gray-200 rounded-md px-3 py-1 flex items-center justify-center h-8 min-w-[96px] shadow-sm hover:shadow-md hover:scale-105 transition-all" title="PhonePe"><PhonePeLogo /></div>
              </div>
            </div>
          </div>
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
              src="/images/indiaMedServiceLogo.svg"
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

        {/* Mobile Payments Section */}
        <div className="w-full pt-8 pb-4 border-t border-gray-200 mb-8 flex flex-col items-center gap-6">
          <div className="flex gap-3 items-center text-center justify-center max-w-[340px]">
            <ShieldCheckIcon />
            <h4 className="text-[#58595B] font-montserrat font-bold text-[16px]">
              {t('secure_payments')}
            </h4>
          </div>
          <p className="text-[#58595B] font-montserrat font-medium text-[13px] text-center opacity-90 leading-relaxed max-w-[340px] -mt-2">
            {t('payments_desc')}
          </p>
          
          <div className="flex flex-col gap-4 items-center w-full">
            {/* International Group */}
            <div className="flex flex-wrap gap-2 items-center justify-center px-2">
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="Visa"><VisaLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="Mastercard"><MastercardLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="American Express"><AmexLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="PayPal"><PayPalLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-3 py-1 flex items-center justify-center h-7 min-w-[72px] shadow-sm" title="Apple Pay"><ApplePayLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="Google Pay"><GooglePayLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="SWIFT / Wire Transfer"><SwiftLogo /></div>
            </div>

            {/* Indian Group */}
            <div className="flex flex-wrap gap-2 items-center justify-center px-2">
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="UPI"><UpiLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="RuPay"><RupayLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center justify-center h-7 w-12 shadow-sm" title="Paytm"><PaytmLogo /></div>
              <div className="bg-white border border-gray-200 rounded-md px-3 py-1 flex items-center justify-center h-7 min-w-[96px] shadow-sm" title="PhonePe"><PhonePeLogo /></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-2 text-[#58595B] font-montserrat text-[14px] font-medium opacity-80 mb-6">
          <div className="border border-[#58595B] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">C</div>
          <span>Copyright by Triolzs, All rights reserved</span>
        </div>
      </div>

      {/* Desktop Footer Bottom */}
      <div className="hidden lg:flex max-w-[1320px] mx-auto px-6 mt-8 pt-6 border-t border-gray-100 justify-between items-center gap-8">
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
