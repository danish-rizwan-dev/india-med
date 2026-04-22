"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const toggleSection = (idx: number) => {
    setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const footerSections = [
    {
      title: "For Patients",
      data: [
        "Find a Doctor", "Book Appointment", "Treatments", "Emergency 24x7",
        "Technology", "Patient Testimonials", "CPR", "Disclaimer",
        "Terms & Conditions", "Privacy Policy", "Refund & Cancellations",
        "Medicine Information", "Jaanta Hai Medanta"
      ],
    },
    {
      title: "Specialities",
      data: [
        "Cardiac Care", "Cancer Care", "Neurosciences", "Gastrosciences",
        "Orthopaedics", "Renal Care", "Liver Transplant", "Bone Marrow",
        "Lung Transplant", "Chest Surgery"
      ],
    },
    {
      title: "Our Hospitals",
      data: [
        "India Med Gurugram", "India Med Patna", "India Med Lucknow",
        "India Med Indore", "India Med Noida"
      ],
    },
    {
      title: "Corporate",
      data: ["Help Desk", "About us", "Blogs", "Feedback", "Contact Us"],
    },
  ];

  return (
    <footer className="relative bg-white pt-16 lg:pt-24 pb-10 w-full overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row lg:gap-20">
        
        {/* Brand & Contact Section */}
        <div className="flex flex-col gap-10 w-full lg:w-[380px] px-6 lg:px-0 py-10 lg:py-0 bg-[#F9FAFB] lg:bg-transparent rounded-[40px] lg:rounded-none mb-12 lg:mb-0 items-center lg:items-start text-center lg:text-left">
          <Link href="/" className="relative w-[180px] h-[64px] lg:w-[212px] lg:h-[76px] block">
            <Image
              src="/images/Logo.svg"
              alt="India Med Service Logo - Premium Medical Tourism in India"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          <p className="text-[#58595B] font-montserrat font-medium text-[15px] lg:text-[16px] leading-relaxed max-w-[320px] lg:max-w-none">
            Empowering international patients with world-class healthcare in India. 
            Trusted hospitals, transparent costs, and seamless travel support.
          </p>
          
          {/* Social Links - Professional Row */}
          <nav className="flex gap-8 text-[#58595B]" aria-label="Social Media Links">
            {[
              { Icon: Facebook, label: "Facebook", href: "https://facebook.com/indiamed" },
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com/indiamed" },
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com/indiamed" },
              { Icon: Youtube, label: "Youtube", href: "https://youtube.com/indiamed" }
            ].map(({ Icon, label, href }) => (
              <Link 
                key={label} 
                href={href} 
                aria-label={`Follow India Med on ${label}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#EE4423] transition-all hover:scale-110 opacity-80 hover:opacity-100"
              >
                <Icon size={26} />
              </Link>
            ))}
          </nav>
        </div>


        {/* Navigation Grid (Accordion on Mobile) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-10 px-6 lg:px-0">
          {footerSections.map((col, idx) => (
            <nav key={idx} className="border-b border-gray-100 lg:border-none last:border-none" aria-labelledby={`footer-col-${idx}`}>
              {/* Header: Clickable on Mobile, Static on Desktop */}
              <button 
                onClick={() => toggleSection(idx)}
                className="w-full flex items-center justify-between py-6 lg:py-0 lg:mb-10 text-left lg:cursor-default"
                aria-expanded={openSections[idx]}
              >
                <h4 id={`footer-col-${idx}`} className="text-[#EE4423] font-montserrat font-bold text-[20px] lg:text-[24px]">
                  {col.title}
                </h4>
                <ChevronDown 
                  size={24} 
                  className={`text-[#EE4423] transition-transform duration-300 lg:hidden ${openSections[idx] ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Links List */}
              <ul className={`flex flex-col gap-4 lg:gap-3 mb-6 lg:mb-0 transition-all duration-300 overflow-hidden lg:max-h-none ${openSections[idx] ? 'max-h-[600px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'}`}>
                {col.data.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#58595B] font-montserrat font-semibold text-[16px] lg:text-[17px] hover:text-[#EE4423] transition-colors opacity-90 hover:opacity-100"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1320px] mx-auto px-6 mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[#58595B] font-montserrat text-[14px] font-medium text-center opacity-80">
          © {currentYear} India Med Network. A Global Healthcare Initiative.
        </p>
        <div className="flex gap-10">
          <Link href="/privacy-policy" className="text-[#58595B] text-[14px] font-bold hover:text-[#EE4423] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-[#58595B] text-[14px] font-bold hover:text-[#EE4423] transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
