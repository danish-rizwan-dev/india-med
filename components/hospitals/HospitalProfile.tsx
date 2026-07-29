"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Bed,
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
import type { Hospital } from "./data";

type Props = {
  hospital: Hospital;
  relatedHospitals: Hospital[];
};

const sections = [
  { id: "about", labelKey: "about" },
  { id: "departments", labelKey: "departments" },
  { id: "specialities", labelKey: "specialities" },
  { id: "facilities", labelKey: "facilities" },
  { id: "procedures", labelKey: "procedures" },
  { id: "awards", labelKey: "awards" },
];

export default function HospitalProfile({ hospital, relatedHospitals }: Props) {
  const t = useTranslations("HospitalProfile");
  const key = hospital.slug.replace(/-/g, "_");

  const tr = (k: string, fallback: string) => {
    if (t.has(k)) {
      try { return t(k); } catch { return fallback; }
    }
    return fallback;
  };

  const aboutParagraphs = (hospital.profile.about || []).map((para, i) =>
    tr(`hospital_about_${key}_${i + 1}`, para)
  );

  const name = tr(`hospital_name_${key}`, hospital.name);
  const location = tr(`hospital_location_${key}`, hospital.location);
  const city = tr(`hospital_city_${key}`, hospital.city);

  const translateList = (section: string, items: string[] = []) =>
    items.map((item, i) => tr(`hospital_${section}_${key}_${i + 1}`, item));

  const getLabel = (related: Hospital, field: "name") => {
    const rk = related.slug.replace(/-/g, "_");
    return tr(`hospital_${field}_${rk}`, related[field]);
  };

  const departments = translateList("departments", hospital.profile.departments);
  const specialities = translateList("specialities", hospital.profile.specialities);
  const facilities = translateList("facilities", hospital.profile.facilities);
  const procedures = translateList("procedures", hospital.profile.procedures);
  const awards = translateList("awards", hospital.profile.awards);

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
            <Link href="/hospitals" className="transition hover:text-[#EE4423]">{t("hospitals")}</Link>
            <span>/</span>
            <span className="text-[#414042]">{name}</span>
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
                    src={hospital.image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              <div className="min-w-0">
                <p className="mb-3 w-fit rounded-full bg-[#EE4423]/10 px-4 py-2 text-[12px] font-bold uppercase text-[#EE4423]">
                  {city}
                </p>
                <h1 className="text-[34px] font-bold leading-tight text-[#414042] md:text-[46px]">
                  {name}
                </h1>

                <div className="mt-6 grid gap-3 text-[14px] font-bold text-[#414042] sm:grid-cols-3">
                  <Fact icon={<MapPin className="h-4 w-4" />} text={location} />
                  <Fact icon={<CalendarDays className="h-4 w-4" />} text={t("established_label", { year: hospital.established })} />
                  <Fact icon={<Bed className="h-4 w-4" />} text={t("beds_label", { count: hospital.beds })} />
                </div>

                <Link
                  href="/treatment-cost-estimate"
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#EE4423] px-7 text-[15px] font-bold text-white shadow-[0px_10px_25px_rgba(238,68,35,0.25)] transition hover:bg-[#d63a1b]"
                >
                  <Stethoscope className="h-4 w-4" />
                  {t("get_estimate")}
                </Link>
              </div>
            </header>

            <ContentSection id="about" title={t("about")}>
              <div className="space-y-3">
                {aboutParagraphs.map((para, i) => (
                  <p key={i} className="text-[15px] font-medium leading-7 text-[#58595B] md:text-[16px]">
                    {para}
                  </p>
                ))}
              </div>
            </ContentSection>

            <ListSection id="departments" title={t("departments")} items={departments} />
            <ListSection id="specialities" title={t("specialities")} items={specialities} columns />
            <ListSection id="facilities" title={t("facilities")} items={facilities} columns />
            <ListSection id="procedures" title={t("procedures")} items={procedures} columns />
            <ListSection id="awards" title={t("awards")} items={awards} />

            {relatedHospitals.length > 0 ? (
              <ContentSection id="related" title={t("related_hospitals")}>
                <div className="grid gap-4 md:grid-cols-2">
                  {relatedHospitals.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/hospitals/${related.slug}`}
                      className="grid grid-cols-[78px_1fr] gap-4 rounded-[18px] bg-[#FFF5F2] p-3 transition hover:bg-[#FFE9E1]"
                    >
                      <span className="relative aspect-square overflow-hidden rounded-[14px] bg-white">
                        <Image src={related.image} alt={related.name} fill sizes="78px" className="object-contain object-bottom" />
                      </span>
                      <span className="min-w-0 self-center">
                        <span className="block text-[16px] font-bold text-[#414042]">{getLabel(related, "name")}</span>
                        <span className="mt-1 block truncate text-[13px] font-bold text-[#EE4423]">{related.location}</span>
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
                {sections.map((sec, i) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className={`rounded-full px-4 py-2 text-[15px] font-bold transition hover:bg-[#FFF5F2] hover:text-[#EE4423] ${
                      i === 0 ? "bg-[#FFF5F2] text-[#EE4423]" : "text-[#58595B]"
                    }`}
                  >
                    {t(sec.labelKey)}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white bg-white/90 p-5 shadow-[10px_24px_50px_rgba(67,41,57,0.08)]">
              <h2 className="mb-4 text-[16px] font-bold text-[#414042]">{t("share_hospital")}</h2>
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
  if (!items || items.length === 0) return null;
  return (
    <ContentSection id={id} title={title}>
      <ul className={columns ? "grid gap-3 md:grid-cols-2" : "space-y-3"}>
        {items.map((item, i) => (
          <li key={`${item}-${i}`} className="flex gap-3 rounded-[16px] bg-[#FFF5F2] px-4 py-3 text-[14px] font-semibold leading-6 text-[#414042]">
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
