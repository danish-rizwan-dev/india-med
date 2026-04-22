import React from "react";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "India Med Service",
    "url": "https://indiamed.com",
    "logo": "https://indiamed.com/images/Logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://facebook.com/indiamed",
      "https://twitter.com/indiamed",
      "https://linkedin.com/company/indiamed"
    ],
    "description": "Affordable Medical Treatment in India with World-Class Care. We help patients compare costs and choose top hospitals."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
