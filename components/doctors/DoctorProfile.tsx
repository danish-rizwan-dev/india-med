"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  Copy,
  Facebook,
  MapPin,
  Search,
  Send,
  Share2,
  Stethoscope,
} from "lucide-react";
import type { Doctor } from "./data";

type Props = {
  doctor: Doctor;
  relatedDoctors: Doctor[];
};

const sections = [
  { id: "about", labelKey: "about" },
  { id: "qualification", labelKey: "qualification" },
  { id: "experience", labelKey: "experience" },
  { id: "interests", labelKey: "interests" },
  { id: "highlights", labelKey: "highlights" },
  { id: "research", labelKey: "research" },
  { id: "awards", labelKey: "awards" },
  { id: "treatments", labelKey: "treatments" },
];

export default function DoctorProfile({ doctor, relatedDoctors }: Props) {
  const t = useTranslations("DoctorProfile");
  const doctorKey = doctor.slug.replace(/-/g, "_");

  // Fix: Use t.has() to safely inspect keys instead of relying solely on try/catch
  const translateOrFallback = (key: string, fallback: string) => {
    if (t.has(key)) {
      try {
        return t(key);
      } catch {
        return fallback;
      }
    }
    return fallback;
  };

  // Fix: Base the array maps directly on the availability of database array items
  const aboutParagraphs = (doctor.profile.about || []).map((para, index) =>
    translateOrFallback(`doctor_about_${doctorKey}_${index + 1}`, para)
  );

  const department = translateOrFallback(`doctor_department_${doctorKey}`, doctor.department);
  const title = translateOrFallback(`doctor_title_${doctorKey}`, doctor.title);
  const hospital = translateOrFallback(`doctor_hospital_${doctorKey}`, doctor.hospital);
  const doctorName = translateOrFallback(`doctor_name_${doctorKey}`, doctor.name);
  const location = translateOrFallback(`doctor_location_${doctorKey}`, doctor.location);
  
  const experienceValue = translateOrFallback(`doctor_experience_${doctorKey}`, doctor.experience);
  const experienceLabel = t("experience_label", { years: experienceValue });

  const translateListItems = (section: string, items: string[] = []) =>
    items.map((item, index) =>
      translateOrFallback(`doctor_${section}_${doctorKey}_${index + 1}`, item)
    );

  const getDoctorLabel = (related: Doctor, field: "name" | "title") => {
    const relatedDoctorKey = related.slug.replace(/-/g, "_");
    return translateOrFallback(`doctor_${field}_${relatedDoctorKey}`, related[field]);
  };

  const qualifications = translateListItems("qualification", doctor.profile.qualifications);
  const professionalExperience = translateListItems("experience", doctor.profile.professionalExperience);
  const specialInterests = translateListItems("interests", doctor.profile.specialInterests);
  const careerHighlights = translateListItems("highlights", doctor.profile.careerHighlights);
  const researchFellowships = translateListItems("research", doctor.profile.researchFellowships);
  const awards = translateListItems("awards", doctor.profile.awards);
  const treatments = translateListItems("treatments", doctor.profile.treatments);

  const copyLink = () => navigator.clipboard?.writeText(window.location.href);
  const openShare = (baseUrl: string) => {
    window.open(`${baseUrl}${encodeURIComponent(window.location.href)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full overflow-visible bg-gradient-to-tr from-[#FAFAFA] via-[#FCF9F7] to-[#FFF5F2] text-[#414042]">
      <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden="true">
        <Image src="/images/sections/process-flow/background-strokes.png" alt="" fill className="object-cover object-top" priority />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-10 md:px-8 lg:py-14">
        <div className="mb-7 grid gap-5 lg:grid-cols-[1fr_620px] lg:items-center">
          <nav className="flex flex-wrap items-center gap-3 text-[15px] font-bold text-[#58595B]">
            <Link href="/" className="transition hover:text-[#EE4423]">{t("home")}</Link>
            <span>/</span>
            <Link href="/doctors" className="transition hover:text-[#EE4423]">{t("doctors")}</Link>
            <span>/</span>
            <span className="text-[#414042]">{doctorName}</span>
          </nav>

          <label className="relative block">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#EE4423]" />
            <input
              type="search"
              placeholder={t("search_placeholder")}
              className="h-[56px] w-full rounded-full border border-[#E9DAD4] bg-white/90 pl-14 pr-5 text-[15px] font-semibold text-[#414042] shadow-sm outline-none transition focus:border-[#EE4423]"
            />
          </label>
        </div>

        <div className="grid gap-6 rounded-[30px] border border-white bg-white/82 p-4 shadow-[10px_24px_50px_rgba(67,41,57,0.08)] backdrop-blur md:p-6 lg:grid-cols-[1fr_330px] xl:grid-cols-[1fr_370px]">
          <main className="min-w-0">
            <header className="mb-8 grid gap-6 rounded-[26px] bg-white/70 p-4 md:grid-cols-[300px_1fr] md:items-center lg:p-5">
              <div className="w-full max-w-[300px] rounded-[24px] bg-[#FFF5F2] p-3 shadow-[10px_20px_40px_rgba(238,68,35,0.10)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-white">
                  <Image
                    src={doctor.image}
                    alt={`${doctorName}, ${doctor.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              <div className="min-w-0">
                <p className="mb-3 w-fit rounded-full bg-[#EE4423]/10 px-4 py-2 text-[12px] font-bold uppercase text-[#EE4423]">
                  {department}
                </p>
                <h1 className="text-[34px] font-bold leading-tight text-[#414042] md:text-[46px]">
                  {doctorName}
                </h1>
                <p className="mt-3 text-[18px] font-bold text-[#EE4423] md:text-[20px]">{title}</p>

                <div className="mt-6 grid gap-3 text-[14px] font-bold text-[#414042] sm:grid-cols-3">
                  <Fact icon={<Building2 className="h-4 w-4" />} text={hospital} />
                  <Fact icon={<MapPin className="h-4 w-4" />} text={location} />
                  <Fact icon={<CalendarDays className="h-4 w-4" />} text={experienceLabel} />
                </div>

                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#EE4423] px-7 text-[15px] font-bold text-white shadow-[0px_10px_25px_rgba(238,68,35,0.25)] transition hover:bg-[#d63a1b]"
                >
                  <Stethoscope className="h-4 w-4" />
                  {t("contact_now")}
                </button>
              </div>
            </header>

            <ContentSection id="about" title={t("about")}>
              <div className="space-y-3">
                {aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-[15px] font-medium leading-7 text-[#58595B] md:text-[16px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ContentSection>

            <ListSection id="qualification" title={t("qualification")} items={qualifications} />
            <ListSection id="experience" title={t("experience")} items={professionalExperience} />
            <ListSection id="interests" title={t("interests")} items={specialInterests} columns />
            <ListSection id="highlights" title={t("highlights")} items={careerHighlights} />
            <ListSection id="research" title={t("research")} items={researchFellowships} />
            <ListSection id="awards" title={t("awards")} items={awards} />
            <ListSection id="treatments" title={t("treatments")} items={treatments} columns />

            {relatedDoctors.length > 0 ? (
              <ContentSection id="related" title={t("related_doctors")}>
                <div className="grid gap-4 md:grid-cols-2">
                  {relatedDoctors.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/doctors/${related.slug}`}
                      className="grid grid-cols-[78px_1fr] gap-4 rounded-[18px] bg-[#FFF5F2] p-3 transition hover:bg-[#FFE9E1]"
                    >
                      <span className="relative aspect-square overflow-hidden rounded-[14px] bg-white">
                        <Image src={related.image} alt={related.name} fill sizes="78px" className="object-contain object-bottom" />
                      </span>
                      <span className="min-w-0 self-center">
                        <span className="block text-[16px] font-bold text-[#414042]">{getDoctorLabel(related, "name")}</span>
                        <span className="mt-1 block truncate text-[13px] font-bold text-[#EE4423]">{getDoctorLabel(related, "title")}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </ContentSection>
            ) : null}
          </main>

          <aside className="sticky top-[96px] h-fit space-y-5">
            <div className="rounded-[24px] border border-white bg-white/90 p-6 shadow-[10px_24px_50px_rgba(67,41,57,0.08)]">
              <h2 className="mb-5 text-center text-[24px] font-bold text-[#414042]">{t("table_of_content")}</h2>
              <div className="flex flex-col gap-3">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`rounded-full px-4 py-2 text-[15px] font-bold transition hover:bg-[#FFF5F2] hover:text-[#EE4423] ${
                      index === 0 ? "bg-[#FFF5F2] text-[#EE4423]" : "text-[#58595B]"
                    }`}
                  >
                    {t(section.labelKey)}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white bg-white/90 p-5 shadow-[10px_24px_50px_rgba(67,41,57,0.08)]">
              <h2 className="mb-4 text-[16px] font-bold text-[#414042]">{t("share_doctor")}</h2>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => openShare("https://wa.me/?text=")}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#E9DAD4] bg-[#FFF5F2] px-4 text-[14px] font-bold text-[#414042] transition hover:border-[#EE4423] hover:text-[#EE4423]"
                >
                  <Share2 className="h-4 w-4" />
                  {t("whatsapp")}
                </button>
                <button
                  type="button"
                  onClick={() => openShare("https://t.me/share/url?url=")}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#E9DAD4] bg-white px-4 text-[14px] font-bold text-[#414042] transition hover:border-[#EE4423] hover:text-[#EE4423]"
                >
                  <Send className="h-4 w-4" />
                  {t("telegram")}
                </button>
                <button
                  type="button"
                  onClick={() => openShare("https://www.facebook.com/sharer/sharer.php?u=")}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#E9DAD4] bg-white px-4 text-[14px] font-bold text-[#414042] transition hover:border-[#EE4423] hover:text-[#EE4423]"
                >
                  <Facebook className="h-4 w-4" />
                  {t("facebook")}
                </button>
                <button
                  type="button"
                  onClick={copyLink}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#EE4423] bg-[#EE4423] px-4 text-[14px] font-bold text-white shadow-[0px_10px_25px_rgba(238,68,35,0.20)] transition hover:bg-[#d63a1b]"
                >
                  <Copy className="h-4 w-4" />
                  {t("copy_link")}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContentSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-5 scroll-mt-28 rounded-[24px] border border-white bg-white/78 p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-[24px] font-bold leading-tight text-[#414042] md:text-[28px]">{title}</h2>
      {children}
    </section>
  );
}

function ListSection({ id, title, items, columns = false }: { id: string; title: string; items: string[]; columns?: boolean }) {
  // If no translations or fallback elements are present, do not show an empty styled box on UI
  if (!items || items.length === 0) return null;

  return (
    <ContentSection id={id} title={title}>
      <ul className={columns ? "grid gap-3 md:grid-cols-2" : "space-y-3"}>
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="flex gap-3 rounded-[16px] bg-[#FFF5F2] px-4 py-3 text-[14px] font-semibold leading-6 text-[#414042]">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#EE4423]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ContentSection>
  );
}

function Fact({ icon, text }: { icon: React.ReactNode; text: string }) {
  if (!text) return null;
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#FFF5F2] px-4 py-3">
      <span className="shrink-0 text-[#EE4423]">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}
