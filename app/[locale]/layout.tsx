import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import JsonLd from "@/components/layout/JsonLd";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const viewport: Viewport = {
  themeColor: "#EE4423",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  // Define translation fetching logic
  let t;
  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    t = (key: string) => {
      const parts = key.split('.');
      let val: any = messages;
      for (const part of parts) {
        val = val?.[part];
      }
      return val || key;
    };
  } catch (error) {
    t = (key: string) => key;
  }

  const title = t('Metadata.title');
  const description = t('Metadata.description');
  const keywordsString = t('Metadata.keywords');
  const keywords = keywordsString.split(',').map((k: string) => k.trim());

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: keywords,
    alternates: {
      canonical: `https://indiamedservice.com/${locale}`,
      languages: {
        'en': 'https://indiamedservice.com/en',
        'ru': 'https://indiamedservice.com/ru',
        'kk': 'https://indiamedservice.com/kk',
        'uz': 'https://indiamedservice.com/uz',
      },
    },
    authors: [{ name: "India Med Service" }],
    creator: "India Med Service",
    publisher: "India Med Service",
    applicationName: "India Med Service",
    category: "Healthcare",
    classification: "Medical Tourism",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://indiamedservice.com"),
    openGraph: {
      title: title,
      description: description,
      url: `https://indiamedservice.com/${locale}`,
      siteName: title,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${title} - Premium Medical Tourism & Treatment in India`,
        },
      ],
      locale: locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : locale === 'kk' ? 'kk_KZ' : 'uz_UZ',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@indiamedservice",
      creator: "@indiamedservice",
      title: title,
      description: description,
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// ─── Replace with your actual GA4 Measurement ID from analytics.google.com ──
const GA_ID = "G-XXXXXXXXXX";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* ── RENDER-BLOCKING FIX: Preconnect resource hints ──────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ── STRUCTURED DATA (JSON-LD) ───────────────────────────── */}
        <JsonLd />
      </head>
      <body
        className={`${montserrat.variable} font-sans min-h-screen w-full flex flex-col bg-white antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1 w-full flex flex-col">{children}</main>

          {/* ── GOOGLE ANALYTICS 4: afterInteractive = NON-render-blocking */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
