import React from "react";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. WebSite (enables Sitelinks Search Box) ──────────────────
      {
        "@type": "WebSite",
        "@id": "https://indiamedservice.com/#website",
        "name": "India Med Service",
        "alternateName": ["India Med", "India Med Services", "IndiaMed"],
        "url": "https://indiamedservice.com",
        "description": "India Med Service — Affordable Medical Treatment & Top Hospitals in India for international patients.",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://indiamedservice.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },

      // ── 2. MedicalOrganization (core brand entity) ─────────────────
      {
        "@type": "MedicalOrganization",
        "@id": "https://indiamedservice.com/#organization",
        "name": "India Med Service",
        "alternateName": ["India Med", "India Med Services"],
        "legalName": "India Med Service",
        "url": "https://indiamedservice.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://indiamedservice.com/images/Logo.svg",
          "width": 193,
          "height": 65
        },
        "image": "https://indiamedservice.com/images/og-image.jpg",
        "description": "India Med Service is a leading medical tourism company connecting international patients with top JCI & NABH accredited hospitals and expert doctors across India for affordable, world-class healthcare.",
        "medicalSpecialty": [
          "Cardiology", "Oncology", "Neurosciences", "Orthopaedics",
          "Gastrosciences", "Nephrology", "Pulmonology", "Urology"
        ],
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "JCI Accredited Partner Hospitals" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "NABH Accredited Partner Hospitals" }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New Delhi",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Worldwide"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@indiamedservice.com",
            "areaServed": ["IN", "US", "GB", "AE", "SA", "NG", "KE"],
            "availableLanguage": ["English", "Hindi", "Arabic"]
          }
        ],
        "sameAs": [
          "https://facebook.com/indiamedservice",
          "https://twitter.com/indiamedservice",
          "https://instagram.com/indiamedservice",
          "https://linkedin.com/company/indiamedservice",
          "https://youtube.com/indiamedservice"
        ],
        "knowsAbout": [
          "Medical Tourism", "Hospital Selection India", "Cardiac Surgery India",
          "Cancer Treatment India", "Affordable Healthcare India", "Medical Visa India"
        ]
      },

      // ── 3. WebPage ─────────────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": "https://indiamedservice.com/#webpage",
        "url": "https://indiamedservice.com",
        "name": "Affordable Medical Treatment in India | India Med Service",
        "isPartOf": { "@id": "https://indiamedservice.com/#website" },
        "about": { "@id": "https://indiamedservice.com/#organization" },
        "description": "Connect with top hospitals & expert doctors in India. Affordable surgery, medical visa support, and complete care for international patients.",
        "inLanguage": "en-US"
      },

      // ── 4. BreadcrumbList ──────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://indiamedservice.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Specialities",
            "item": "https://indiamedservice.com/speciality"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Contact",
            "item": "https://indiamedservice.com/contact"
          }
        ]
      },

      // ── 5. FAQPage ─────────────────────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": "https://indiamedservice.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does India Med Service help with medical treatments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "India Med Service connects you with top JCI & NABH accredited hospitals in India, helps compare treatment options and costs, arranges medical visas, and provides complete support throughout your medical journey."
            }
          },
          {
            "@type": "Question",
            "name": "What medical specialities does India Med Service cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover a wide range of specialities including Cardiac Care, Cancer (Oncology), Neurosciences, Orthopaedics, Gastrosciences, Nephrology, Pulmonology, and Urology."
            }
          },
          {
            "@type": "Question",
            "name": "How can I get a treatment cost estimate for India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact us via our website and share your medical reports. Our expert coordinators will provide a detailed cost estimate within 24–48 hours, comparing prices across top hospitals in India."
            }
          },
          {
            "@type": "Question",
            "name": "Does India Med Service offer international patient services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide full concierge services for international patients including medical visa assistance, airport transfers, hospital accommodation, language interpretation, and post-treatment follow-up support."
            }
          },
          {
            "@type": "Question",
            "name": "How much can I save on medical treatment in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Medical treatment costs in India are typically 60–80% lower than in the US, UK, or Australia. For example, heart bypass surgery costs $5,000–$7,000 in India compared to $70,000–$100,000 in the US."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
