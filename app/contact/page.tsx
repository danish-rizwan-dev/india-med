import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact India Med Service | Medical Tourism Assistance",
  description:
    "Contact India Med Service for affordable medical treatment in India. Get a free consultation, treatment cost estimate, and complete visa & travel support.",
  alternates: { canonical: "https://indiamedservice.com/contact" },
};

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "info@indiamedservice.com",
    href: "mailto:info@indiamedservice.com",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "www.indiamedservice.com",
    href: "https://indiamedservice.com",
  },
  {
    icon: "📍",
    label: "Address",
    value: "India Med Service, New Delhi, India",
    href: null,
  },
];

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact India Med Service",
    url: "https://indiamedservice.com/contact",
    description:
      "Get in touch with India Med Service for affordable medical treatment in India.",
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
      <section className="bg-[#EE4423] text-white py-20 px-6 text-center">
        <h1 className="text-3xl lg:text-[52px] font-bold font-montserrat leading-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-lg lg:text-xl opacity-90 max-w-[600px] mx-auto font-medium">
          Our medical coordinators are ready to help you find the best hospital
          and treatment plan in India.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="max-w-[900px] mx-auto px-6 py-16">
        <h2 className="text-[#58595B] font-bold text-2xl lg:text-3xl font-montserrat text-center mb-12">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactDetails.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center bg-[#F9FAFB] rounded-[24px] p-8"
            >
              <span className="text-4xl mb-4" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="text-[#414042] font-bold text-lg mb-2">
                {item.label}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-[#EE4423] font-medium hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-[#58595B] font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#58595B] text-lg mb-6 font-medium">
            Need a treatment cost estimate? Upload your medical reports and our
            experts will respond within 24–48 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#EE4423] text-white font-bold rounded-full hover:bg-[#d63a1b] transition-all text-lg"
          >
            Back to Home →
          </Link>
        </div>
      </section>
    </main>
  );
}
