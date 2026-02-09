"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Unique keys fix included
  const forPatients = [
    "Find a Doctor",
    "Book Appointment",
    "Treatments",
    "Emergency 24x7",
    "Technology",
    "Patient Testimonials",
    "CPR",
    "Disclaimer",
    "Terms & Conditions",
    "Privacy Policy",
    "Refund & Cancellations",
    "Medicine Information",
    "Jaanta Hai Medanta",
  ];
  const specialities = [
    "Cardiac Care",
    "Cancer Care",
    "Neurosciences",
    "Gastrosciences",
    "Orthopaedics",
    "Renal Care",
    "Liver Transplant",
    "Bone Marrow",
    "Transplant",
    "Lung Transplant",
    "Chest Surgery",
    "More +",
  ];
  const ourHospitals = [
    "India Med Ranchi",
    "India Med Gurugram",
    "India Med Patna",
    "India Med Lucknow",
    "India Med Indore",
    "India Med Noida",
    "India Med Subhash Chowk",
    "India Med Cybercity",
    "India Med Defence Colony",
    "India Med Golf course",
  ];
  const corporate = [
    "Help Desk",
    "About us",
    "Blogs",
    "Feedback",
    "Contact Us",
  ];

  return (
    <footer className="relative bg-white pt-20 pb-10 w-full overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Logo & Description */}
        <div className="flex flex-col gap-8 w-full lg:w-[320px] items-center lg:items-start text-center lg:text-left">
          <div className="relative w-[180px] h-[64px] lg:w-[212px] lg:h-[76px]">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[#58595B] font-montserrat font-medium text-[15px] lg:text-[16px] leading-[24px]">
            From treatment planning to recovery, we support international
            patients at every step - transparent costs, trusted hospitals, and
            hassle-free medical travel to India.
          </p>
          <div className="flex gap-6 text-[#58595B]">
            <Link href="#">
              <Facebook size={24} />
            </Link>
            <Link href="#">
              <Twitter size={24} />
            </Link>
            <Link href="#">
              <Instagram size={24} />
            </Link>
            <Link href="#">
              <Youtube size={24} />
            </Link>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { title: "For Patients", data: forPatients },
            { title: "Specialities", data: specialities },
            { title: "Our Hospitals", data: ourHospitals },
            { title: "Corporate", data: corporate },
          ].map((col, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <h4 className="text-[#EE4423] font-montserrat font-bold text-[20px] lg:text-[23px] mb-6">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.data.map((item, i) => (
                  <li key={`${idx}-${i}`}>
                    <Link
                      href="#"
                      className="text-[#58595B] font-montserrat font-semibold text-[15px] lg:text-[17px] leading-[26px] lg:leading-[30px] hover:text-[#EE4423]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1320px] mx-auto px-6 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#58595B] font-montserrat text-sm text-center">
          © Copyright by Triolzs, All rights reserved
        </p>
        <div className="flex gap-8">
          <Link href="#" className="text-[#58595B] text-sm font-medium">
            Privacy Policy
          </Link>
          <Link href="#" className="text-[#58595B] text-sm font-medium">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
