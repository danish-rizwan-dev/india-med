import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "India Med | Affordable Medical Treatment in India",
  description:
    "India Med delivers high-quality, integrated care through expert clinicians, a doctor-led approach, and strong multispecialty collaboration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + " min-h-screen w-full flex flex-col bg-white"}>
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
