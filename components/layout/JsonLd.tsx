import React from "react";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://indiamedservice.com/#website",
        "name": "India Med Service",
        "alternateName": ["India Med", "India Med Services", "IndiaMed"],
        "url": "https://indiamedservice.com",
        "description": "India Med Service - Affordable Medical Treatment & Top Hospitals in India for international patients.",
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
        "description": "India Med Service is a leading medical tourism company connecting international patients with top multispecialty hospitals and expert doctors across India for affordable, world-class healthcare.",
        "medicalSpecialty": [
          "Cardiac Care",
          "Cancer Care",
          "Neurosciences",
          "Orthopaedics",
          "Gastrosciences",
          "Nephrology"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressLocality": "India"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": ["IN", "US", "GB", "AE", "SA"],
            "availableLanguage": ["English", "Hindi", "Arabic"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "medical advice",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "sameAs": [
          "https://facebook.com/indiamedservice",
          "https://twitter.com/indiamedservice",
          "https://instagram.com/indiamedservice",
          "https://linkedin.com/company/indiamedservice",
          "https://youtube.com/indiamedservice"
        ],
        "hasMap": "https://indiamedservice.com/#map",
        "knowsAbout": [
          "Medical Tourism",
          "Hospital Selection India",
          "Cardiac Surgery India",
          "Cancer Treatment India",
          "Affordable Healthcare India"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://indiamedservice.com/#webpage",
        "url": "https://indiamedservice.com",
        "name": "India Med Service | Affordable Medical Treatment & Top Hospitals in India",
        "isPartOf": { "@id": "https://indiamedservice.com/#website" },
        "about": { "@id": "https://indiamedservice.com/#organization" },
        "description": "India Med Service — trusted by international patients for affordable medical treatment in India. Find top hospitals, compare costs, and get complete support.",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "ReadAction",
          "target": ["https://indiamedservice.com"]
        }
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
