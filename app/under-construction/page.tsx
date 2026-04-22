import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Under Construction | India Med Service",
  description: "This page is currently under construction. Please visit our homepage for information about affordable medical treatment in India.",
  robots: { index: false, follow: false },
};

export default function UnderConstructionPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="max-w-[520px]">
        <div
          className="w-20 h-20 rounded-full bg-[#EE4423]/10 flex items-center justify-center mx-auto mb-8"
          aria-hidden="true"
        >
          <span className="text-4xl">🚧</span>
        </div>
        <h1 className="text-[#414042] font-bold text-3xl lg:text-4xl font-montserrat mb-4 leading-tight">
          Coming Soon
        </h1>
        <p className="text-[#58595B] text-lg font-medium mb-8 leading-relaxed">
          We're working hard to bring you this page. In the meantime, explore our
          specialities or contact us for any medical queries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-3 bg-[#EE4423] text-white font-bold rounded-full hover:bg-[#d63a1b] transition-all"
          >
            Back to Home
          </a>
          <a
            href="/speciality"
            className="px-8 py-3 border-2 border-[#EE4423] text-[#EE4423] font-bold rounded-full hover:bg-[#EE4423] hover:text-white transition-all"
          >
            View Specialities
          </a>
        </div>
      </div>
    </main>
  );
}
