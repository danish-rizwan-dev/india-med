"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPageContent({ locale }: { locale: string }) {
  const t = useTranslations("Navbar");
  const o = useTranslations("OurOffices");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const offices = [
    {
      city: o("uzbekistan"),
      phones: ["+998 78 555 11 71", "+998 99 929 11 66"],
      address: o("tashkent_addr"),
      qr: "/images/sections/our-offices/qr-toshkent.svg",
    },
    {
      city: o("kazakhstan"),
      phones: ["+777 688 414 93", "+7777 884 14 93"],
      address: o("shymkent_addr"),
      qr: "/images/sections/our-offices/qr-qozogiston.png",
    },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact India Med Service",
    url: `https://indiamedservice.com/${locale}/contact`,
    description: "Get in touch with India Med Service for affordable medical treatment in India.",
    mainEntity: {
      "@type": "MedicalOrganization",
      name: "India Med Service",
      url: "https://indiamedservice.com",
      email: "info@indiamedservice.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#EE4423] to-[#d63a1b] text-white py-20 lg:py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,#fff_0%,transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <h1 className="text-3xl lg:text-[52px] font-bold font-montserrat leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-lg lg:text-xl opacity-90 max-w-[600px] mx-auto font-medium">
            Our medical coordinators are ready to help you find the best hospital
            and treatment plan in India.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-[1100px] mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center bg-white rounded-[24px] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#EE4423]/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#EE4423]" />
            </div>
            <h3 className="text-[#414042] font-bold text-lg mb-2">Email</h3>
            <a href="mailto:info@indiamedservice.com" className="text-[#EE4423] font-medium hover:underline">
              info@indiamedservice.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-[24px] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#EE4423]/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#EE4423]" />
            </div>
            <h3 className="text-[#414042] font-bold text-lg mb-2">Phone</h3>
            <a href="tel:+998785551171" className="text-[#EE4423] font-medium hover:underline">
              +998 78 555 11 71
            </a>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-[24px] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#EE4423]/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#EE4423]" />
            </div>
            <h3 className="text-[#414042] font-bold text-lg mb-2">Head Office</h3>
            <p className="text-[#58595B] font-medium">India Med Service, New Delhi, India</p>
          </div>
        </div>
      </section>

      {/* Offices & Form */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Office Locations */}
          <div>
            <h2 className="text-[#58595B] font-bold text-2xl lg:text-3xl font-montserrat mb-8">
              Our Offices
            </h2>

            <div className="space-y-8">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9FAFB] rounded-[24px] p-6 lg:p-8 border border-gray-100"
                >
                  <h3 className="text-[#EE4423] font-bold text-xl lg:text-2xl mb-4">
                    {office.city}
                  </h3>

                  <div className="flex gap-4">
                    <div className="relative w-[100px] h-[100px] shrink-0 bg-white rounded-[10px] p-2 shadow-sm border border-gray-100">
                      <Image
                        src={office.qr}
                        alt={`${office.city} QR`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-[#EE4423] mt-1 shrink-0" />
                        <div className="flex flex-col">
                          {office.phones.map((phone, i) => (
                            <a
                              key={i}
                              href={`tel:${phone.replace(/\s/g, "")}`}
                              className="text-[#58595B] font-medium hover:text-[#EE4423] transition-colors"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#EE4423] mt-1 shrink-0" />
                        <p className="text-[#58595B] font-medium">{office.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#F9FAFB] rounded-[24px] p-6 lg:p-8 border border-gray-100">
              <h3 className="text-[#414042] font-bold text-lg mb-3">Working Hours</h3>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#EE4423] mt-1 shrink-0" />
                <p className="text-[#58595B] font-medium">
                  Monday - Saturday: 9:00 AM - 6:00 PM (IST)
                </p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <h2 className="text-[#58595B] font-bold text-2xl lg:text-3xl font-montserrat mb-4">
              Send Us a Message
            </h2>
            <p className="text-[#58595B] font-medium mb-8">
              Fill in the form below and our medical coordinators will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-green-50 rounded-[24px] p-10 text-center border border-green-100">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-[#414042] font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-[#58595B] font-medium">
                  Thank you for reaching out. Our senior medical coordinators will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[#58595B] font-semibold text-sm mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-full border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-1 focus:ring-[#EE4423] transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-[#58595B] font-semibold text-sm mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-full border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-1 focus:ring-[#EE4423] transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#58595B] font-semibold text-sm mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-full border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-1 focus:ring-[#EE4423] transition-all"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label className="block text-[#58595B] font-semibold text-sm mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-[20px] border border-gray-200 bg-[#F9FAFB] text-[#58595B] font-medium outline-none focus:border-[#EE4423] focus:ring-1 focus:ring-[#EE4423] transition-all resize-none"
                    placeholder="Tell us about your medical needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#EE4423] text-white font-bold rounded-full hover:bg-[#d63a1b] transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer border-none"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EE4423] text-white py-16 px-6 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold font-montserrat mb-4">
          Need Immediate Assistance?
        </h2>
        <p className="text-lg opacity-90 max-w-[600px] mx-auto mb-8 font-medium">
          Call us directly or request a callback and our team will reach out to you promptly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+998785551171"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#EE4423] font-bold rounded-full hover:bg-gray-100 transition-all"
          >
            <Phone className="w-5 h-5" />
            +998 78 555 11 71
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all cursor-pointer"
          >
            Request Call Back
          </button>
        </div>
      </section>
    </main>
  );
}
