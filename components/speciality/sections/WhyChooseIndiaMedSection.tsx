import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { SpecialityTranslations } from "../types";

interface WhyChooseIndiaMedSectionProps {
  specLang: SpecialityTranslations;
}

function getCareName(title: string) {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("cardio")) return "Heart Care";
  if (lowerTitle.includes("cancer") || lowerTitle.includes("onco")) return "Cancer Care";
  if (lowerTitle.includes("neuro")) return "Neuro Care";
  if (lowerTitle.includes("ortho")) return "Orthopedic Care";

  return title.replace(/ assistance$/i, " Care");
}

export default function WhyChooseIndiaMedSection({ specLang }: WhyChooseIndiaMedSectionProps) {
  const t = useTranslations("SpecialityWhyChoose");
  const careName = getCareName(specLang.hero_title);
  const points = ["point_1", "point_2", "point_3", "point_4"] as const;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="h-[8px] w-full bg-[#EE4423]" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 px-6 py-12 md:px-10 lg:grid-cols-[590px_1fr] lg:gap-[130px] lg:px-0 lg:py-14">
        <div className="flex flex-col items-start">
          <header className="w-full max-w-[590px] rounded-tl-[34px] rounded-br-[34px] border border-[#58595B] px-8 py-5">
            <h2 className="font-montserrat text-[30px] font-bold leading-[1.08] tracking-[0px] text-[#58595B] md:text-[38px]">
              {t("title_line_1")}
              <br />
              {t("title_line_2")}
              <br />
              {t("title_line_3_prefix")} <span className="text-[#EE4423]">{careName}?</span>
            </h2>
          </header>

          <p className="mt-6 max-w-[560px] text-[15px] font-semibold leading-tight text-[#58595B]">
            {t("intro", { care: careName.toLowerCase() })}
          </p>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#EE4423] px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#d63a1b]"
          >
            {t("contact_now")}
            <span aria-hidden="true">›</span>
          </Link>

          <div className="relative mt-14 h-[300px] w-full max-w-[590px] overflow-hidden rounded-tr-[64px]">
            <Image
              src="/images/specialities/cardiological-assistance/whychosseIndiaMedserviceSectionHospitalImage.png"
              alt="India Med Services hospital building"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 590px, 100vw"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:pt-10">
          {points.map((pointKey) => (
            <article key={pointKey} className="flex gap-4">
              <span className="mt-[7px] h-[10px] w-[10px] shrink-0 rounded-full bg-[#EE4423]" />
              <div>
                <h3 className="text-[17px] font-bold leading-tight text-[#58595B]">
                  {t(`${pointKey}.title`)}
                </h3>
                <p className="mt-1 max-w-[470px] whitespace-pre-line text-[14px] font-medium leading-tight text-[#58595B]">
                  {t(`${pointKey}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
