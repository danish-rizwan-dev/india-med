"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Building2, ChevronLeft, ChevronRight, Filter, MapPin, Search, Stethoscope, X, Bed } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { Hospital } from "./data";

type Props = {
  hospitals: Hospital[];
};

const unique = (items: string[]) => Array.from(new Set(items)).sort();
const PER_PAGE = 5;

export default function HospitalsDirectory({ hospitals }: Props) {
  const t = useTranslations("HospitalsPage");
  const td = useTranslations("HospitalProfile");
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const translateOrFallback = useMemo(() => (key: string, fallback: string) => {
    if (typeof td.has === "function" && !td.has(key)) {
      return fallback;
    }
    try {
      return td(key);
    } catch {
      return fallback;
    }
  }, [td]);

  const cities = useMemo(() => {
    return unique(hospitals.map((h) => h.city)).map((c) => {
      const hosp = hospitals.find((h) => h.city === c);
      const key = hosp?.slug.replace(/-/g, "_");
      const label = key ? translateOrFallback(`hospital_location_${key}`, c) : c;
      return { value: c, label };
    });
  }, [hospitals, translateOrFallback]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return hospitals.filter((h) => {
      const text = [h.name, h.location, h.city, h.summary].join(" ").toLowerCase();
      return (!q || text.includes(q)) && (!city || h.city === city);
    });
  }, [hospitals, query, city]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = filtered.length === 0 ? 0 : (safePage - 1) * PER_PAGE + 1;
  const pageEnd = Math.min(safePage * PER_PAGE, filtered.length);
  const visible = filtered.slice(pageStart - 1, pageEnd);

  const clear = () => { setQuery(""); setCity(""); setCurrentPage(1); };
  const hasFilters = query || city;

  return (
    <section className="relative w-full overflow-visible bg-gradient-to-tr from-[#FAFAFA] via-[#FCF9F7] to-[#FFF5F2]">
      <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden="true">
        <Image src="/images/sections/process-flow/background-strokes.png" alt="" fill className="object-cover object-top" priority />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-5 py-14 md:px-8 lg:py-20">
        <header className="max-w-3xl">
          <p className="mb-4 w-fit rounded-full border border-[#EE4423]/20 bg-white px-4 py-2 text-[13px] font-bold uppercase tracking-[0px] text-[#EE4423] shadow-sm">
            {t("eyebrow")}
          </p>
          <h1 className="text-[34px] font-bold leading-tight text-[#414042] md:text-[48px] lg:text-[56px]">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] font-medium leading-7 text-[#58595B] md:text-[18px]">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
          <aside className="sticky top-[92px] z-20 rounded-[28px] border border-white bg-white/90 p-5 shadow-[10px_24px_50px_rgba(67,41,57,0.08)] backdrop-blur lg:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3 text-[#414042]">
                <Filter className="h-5 w-5 text-[#EE4423]" />
                <h2 className="text-[20px] font-bold">{t("filters")}</h2>
              </div>
              {hasFilters ? (
                <button onClick={clear} className="flex items-center gap-1 text-[13px] font-bold text-[#EE4423]">
                  <X className="h-4 w-4" />
                  {t("clear")}
                </button>
              ) : null}
            </div>

            <label className="mb-5 block">
              <span className="mb-2 block text-[13px] font-bold text-[#58595B]">{t("search_label")}</span>
              <span className="relative block">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#EE4423]" />
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setCurrentPage(1); }}
                  placeholder={t("search_placeholder")}
                  className="h-12 w-full rounded-full border border-[#E9DAD4] bg-white pl-11 pr-4 text-[14px] font-semibold text-[#414042] outline-none transition focus:border-[#EE4423]"
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-[13px] font-bold text-[#58595B]">{t("city")}</span>
              <select
                value={city}
                onChange={(e) => { setCity(e.target.value); setCurrentPage(1); }}
                className="h-12 w-full rounded-full border border-[#E9DAD4] bg-white px-4 text-[14px] font-semibold text-[#414042] outline-none transition focus:border-[#EE4423]"
              >
                <option value="">{t("all_cities")}</option>
                {cities.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </label>
          </aside>

          <div className="flex flex-col gap-5 pr-2 lg:pr-3">
            {filtered.length > 0 ? (
              <>
                {visible.map((hospital) => <HospitalCard key={hospital.slug} hospital={hospital} />)}
                <Pagination
                  currentPage={safePage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  pageStart={pageStart}
                  pageEnd={pageEnd}
                  totalResults={filtered.length}
                />
              </>
            ) : (
              <div className="rounded-[28px] border border-white bg-white/80 p-10 text-center shadow-sm">
                <h3 className="text-[24px] font-bold text-[#414042]">{t("empty_title")}</h3>
                <p className="mt-3 text-[15px] font-medium text-[#58595B]">{t("empty_text")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pagination({
  currentPage, totalPages, onPageChange, pageStart, pageEnd, totalResults,
}: {
  currentPage: number; totalPages: number; onPageChange: (p: number) => void;
  pageStart: number; pageEnd: number; totalResults: number;
}) {
  const t = useTranslations("HospitalsPage");
  const visiblePages = Array.from(
    new Set([1, currentPage - 1, currentPage, currentPage + 1, totalPages].filter((p) => p >= 1 && p <= totalPages))
  ).sort((a, b) => a - b);

  return (
    <nav className="mt-4 rounded-[22px] border border-white bg-white/75 px-5 py-8 text-center shadow-sm" aria-label="Hospitals pagination">
      <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold text-[#111827]">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="inline-flex h-11 items-center gap-2 rounded-full px-3 text-[#777777] transition hover:text-[#EE4423] disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ChevronLeft className="h-5 w-5" />
          {t("previous")}
        </button>
        {visiblePages.map((page, index) => {
          const prev = visiblePages[index - 1];
          const gap = prev !== undefined && page - prev > 1;
          return (
            <span key={page} className="inline-flex items-center gap-2">
              {gap ? <span className="px-2 text-[#111827]">...</span> : null}
              <button
                type="button"
                onClick={() => onPageChange(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={`h-11 min-w-11 rounded-lg px-4 transition ${
                  page === currentPage
                    ? "border border-[#E7E7E7] bg-white text-[#111827] shadow-sm"
                    : "text-[#111827] hover:bg-[#FFF5F2] hover:text-[#EE4423]"
                }`}
              >
                {page}
              </button>
            </span>
          );
        })}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="inline-flex h-11 items-center gap-2 rounded-full px-3 text-[#111827] transition hover:text-[#EE4423] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {t("next")}
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-6 text-[16px] font-medium text-[#425466]">
        {t("showing_range", { start: pageStart, end: pageEnd, total: totalResults })}
      </p>
    </nav>
  );
}

function HospitalCard({ hospital }: { hospital: Hospital }) {
  const t = useTranslations("HospitalsPage");
  const td = useTranslations("HospitalProfile");
  const key = hospital.slug.replace(/-/g, "_");

  const tr = (k: string, fallback: string) => {
    if (typeof td.has === "function" && !td.has(k)) return fallback;
    try { return td(k); } catch { return fallback; }
  };

  const name = tr(`hospital_name_${key}`, hospital.name);
  const location = tr(`hospital_location_${key}`, hospital.location);
  const city = tr(`hospital_city_${key}`, hospital.city);
  const summary = tr(`hospital_about_${key}_2`, hospital.summary);

  return (
    <article className="grid gap-5 rounded-[28px] border border-white bg-white/82 p-4 shadow-[10px_24px_50px_rgba(67,41,57,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[10px_28px_60px_rgba(67,41,57,0.12)] md:grid-cols-[230px_1fr] lg:p-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#F4F4F4] md:aspect-[1/1.12]">
        <Image
          src={hospital.image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 230px"
          className="object-cover object-center"
        />
      </div>

      <div className="flex min-w-0 flex-col">
        <div>
          <p className="mb-2 w-fit rounded-full bg-[#EE4423]/10 px-3 py-1 text-[12px] font-bold text-[#EE4423]">
            {city}
          </p>
          <h2 className="text-[24px] font-bold leading-tight text-[#414042] md:text-[28px]">{name}</h2>
        </div>

        <p className="mt-4 text-[15px] font-medium leading-7 text-[#58595B] line-clamp-3">
          {summary}
        </p>

        <div className="mt-5 grid gap-3 text-[14px] font-bold text-[#414042] md:grid-cols-3">
          <Info icon={<MapPin className="h-4 w-4" />} text={location} />
          <Info icon={<Building2 className="h-4 w-4" />} text={t("established", { year: hospital.established })} />
          <Info icon={<Bed className="h-4 w-4" />} text={t("beds_count", { count: hospital.beds })} />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Link
            href={`/hospitals/${hospital.slug}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#EE4423] px-6 text-[15px] font-bold text-[#EE4423] transition hover:bg-[#EE4423] hover:text-white"
          >
            <Stethoscope className="h-4 w-4" />
            {t("view_profile")}
          </Link>
          <Link
            href="/treatment-cost-estimate"
            className="h-12 rounded-full bg-[#EE4423] px-7 text-[15px] font-bold text-white shadow-[0px_10px_25px_rgba(238,68,35,0.25)] transition hover:bg-[#d63a1b] inline-flex items-center justify-center"
          >
            {t("get_estimate")}
          </Link>
        </div>
      </div>
    </article>
  );
}

function Info({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#FFF5F2] px-4 py-3">
      <span className="shrink-0 text-[#EE4423]">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}
