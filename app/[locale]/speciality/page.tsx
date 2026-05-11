import SharedGradientBg from "@/components/layout/SharedGradientBg";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "World-Class Medical Specialities",
  description: "Explore our range of medical specialities in India including Cardiac Care, Neurosciences, Oncology, and Orthopaedics with affordable world-class treatment.",
  keywords: ["Medical Specialities India", "Best Cardiology India", "Cancer Treatment India", "Neuroscience Hospitals India"],
};


export default function SpecialityPage() {
  return (
    <main className="bg-white">
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-[#EE4423] mb-6">Our Medical Specialities</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide access to world-class medical treatments across various super-specialities in India's top hospitals.
        </p>
      </section>
      <Footer />
    </main>
  );
}
