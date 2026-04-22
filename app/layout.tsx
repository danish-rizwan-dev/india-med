import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import JsonLd from "@/components/layout/JsonLd";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  themeColor: "#EE4423",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "India Med Service | Affordable Medical Treatment & Top Hospitals in India",
    template: "%s | India Med Service",
  },
  description:
    "India Med Service is your trusted medical tourism partner in India. India Med Service connects international patients with top multispecialty hospitals, expert doctors, and complete visa & travel support for affordable world-class treatment.",
  keywords: [
    "India Med Service",
    "India Med",
    "India Med Services",
    "India Med hospital",
    "India Med medical tourism",
    "India Med treatment",
    "Affordable Medical Treatment India",
    "Best Hospitals India",
    "Medical Tourism India",
    "Surgery in India",
    "Medical Visa India",
    "Healthcare India",
    "Top Doctors India",
  ],
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "India Med Service | Affordable Medical Treatment & Top Hospitals in India",
    description: "India Med Service — your trusted gateway to world-class medical treatment in India. Compare hospital costs, consult top doctors, and get complete patient support.",
    url: "https://indiamedservice.com",
    siteName: "India Med Service",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "India Med Service - Premium Medical Tourism & Treatment in India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@indiamedservice",
    creator: "@indiamedservice",
    title: "India Med Service | Medical Treatment in India",
    description: "India Med Service connects you with the best hospitals & doctors in India for affordable, world-class medical care.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={`${montserrat.variable} font-sans min-h-screen w-full flex flex-col bg-white antialiased`}>
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
