import React from "react";
import {useTranslations, useLocale} from 'next-intl';

export default function JsonLd() {
  const t = useTranslations();
  const locale = useLocale();

  const title = t('Metadata.title');
  const description = t('Metadata.description');

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. WebSite ──────────────────
      {
        "@type": "WebSite",
        "@id": `https://indiamedservice.com/${locale}/#website`,
        "name": title,
        "alternateName": ["India Med", "India Med Services", "IndiaMed"],
        "url": `https://indiamedservice.com/${locale}`,
        "description": description,
        "inLanguage": locale === 'en' ? 'en-US' : locale === 'ru' ? 'ru-RU' : locale === 'kk' ? 'kk-KZ' : 'uz-UZ',
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `https://indiamedservice.com/${locale}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },

      // ── 2. MedicalOrganization ─────────────────
      {
        "@type": "MedicalOrganization",
        "@id": `https://indiamedservice.com/${locale}/#organization`,
        "name": title,
        "alternateName": ["India Med", "India Med Services"],
        "legalName": "India Med Service",
        "url": `https://indiamedservice.com/${locale}`,
        "logo": {
          "@type": "ImageObject",
          "url": "https://indiamedservice.com/images/Logo.svg",
          "width": 193,
          "height": 65
        },
        "image": "https://indiamedservice.com/images/og-image.jpg",
        "description": description,
        "medicalSpecialty": [
          t('Footer.links.cardiac'), 
          t('Footer.links.cancer'), 
          t('Footer.links.neuro'), 
          t('Footer.links.ortho'),
          t('Footer.links.renal'),
          t('Footer.links.liver'),
          t('Footer.links.lung')
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New Delhi",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@indiamedservice.com",
            "areaServed": ["IN", "US", "GB", "AE", "SA", "NG", "KE", "UZ", "RU", "KZ"],
            "availableLanguage": ["English", "Russian", "Kazakh", "Uzbek"]
          }
        ],
        "sameAs": [
          "https://facebook.com/indiamedservice",
          "https://twitter.com/indiamedservice",
          "https://instagram.com/indiamedservice",
          "https://linkedin.com/company/indiamedservice"
        ]
      },

      // ── 3. WebPage ─────────────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": `https://indiamedservice.com/${locale}/#webpage`,
        "url": `https://indiamedservice.com/${locale}`,
        "name": title,
        "isPartOf": { "@id": `https://indiamedservice.com/${locale}/#website` },
        "about": { "@id": `https://indiamedservice.com/${locale}/#organization` },
        "description": description,
        "inLanguage": locale === 'en' ? 'en-US' : locale === 'ru' ? 'ru-RU' : locale === 'kk' ? 'kk-KZ' : 'uz-UZ'
      },

      // ── 4. BreadcrumbList ──────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": t('Navbar.home'),
            "item": `https://indiamedservice.com/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": t('Navbar.speciality'),
            "item": `https://indiamedservice.com/${locale}/#specialities`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": t('Navbar.contact'),
            "item": `https://indiamedservice.com/${locale}/#contact`
          }
        ]
      },

      // ── 5. FAQPage ─────────────────────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": `https://indiamedservice.com/${locale}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": t('FAQ.q1'),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t('FAQ.a1')
            }
          },
          {
            "@type": "Question",
            "name": t('FAQ.q2'),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t('FAQ.a2')
            }
          },
          {
            "@type": "Question",
            "name": t('FAQ.q3'),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t('FAQ.a3')
            }
          },
          {
            "@type": "Question",
            "name": t('FAQ.q4'),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t('FAQ.a4')
            }
          },
          {
            "@type": "Question",
            "name": t('FAQ.q5'),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t('FAQ.a5')
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
