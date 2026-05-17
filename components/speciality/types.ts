export interface Doctor {
  name: string;
  exp: string;
  role: string;
  hospital: string;
  initials: string;
  gradient: string;
  image?: string;
}

export interface Hospital {
  name: string;
  city: string;
  accreditation: string;
  desc: string;
}

export interface CostItem {
  name: string;
  val: string;
  usaVal: string;
}

export interface SpecialityCondition {
  title: string;
  desc: string;
  iconName: string; // maps to dynamic Lucide icons e.g. "Activity", "Heart", "BriefcaseMedical", "Stethoscope", "UserCheck"
}

export interface SpecialityTechnique {
  title: string;
  desc: string;
  iconName: string; // maps to dynamic Lucide icons e.g. "Cpu", "ScanFace", "Activity", "Sparkles"
}

export interface SpecialityPatientStory {
  name: string;
  locKey?: "uk" | "kz" | "uz" | "ru" | "ca" | "au" | "us"; // dynamic location translation
  location?: string;
  image: string;
  rating: number;
  outcome?: string; // e.g. "Successfully Treated"
}

export interface SpecialityFAQItem {
  question: string;
  answer: string;
}

export interface SpecialityTranslations {
  hero_title: string;
  hero_desc: string;
  discover_banner: string;
  conditions_title: string;
  techniques_title: string;
  techniques_desc: string;
  costs_title: string;
  costs_desc: string;
  why_choose_title: string;
  doctors_sec_title: string;
  hospitals_sec_title: string;
  stories_sec_title: string;
  procedures_sec_title: string;
  faqs_sec_title: string;
  procedures_list?: string[];
  faq_items?: { q: string; a: string; }[];
  conditions_desc?: string;
  conditions_footer?: string;
  conditions?: SpecialityCondition[];
  techniques_list_custom?: any[];
  intro_badge?: string;
  intro_title?: string;
  intro_desc_1?: string;
  intro_desc_2?: string;
  intro_sub_title?: string;
  intro_sub_desc?: string;
  techniques_title_full?: string;
  techniques_subtitle_full?: string;
  techniques_label?: string;
  description_label?: string;
  costs_title_custom?: string;
  costs_subtitle_custom?: string;
  costs_desc_custom?: string;
}

export interface SpecialityData {
  heroBadge: string;
  icon: string;
  slug?: string;
  doctors: Doctor[];
  hospitals: Hospital[];
  procedures: string[];
  costs: CostItem[];
  translations: Record<string, SpecialityTranslations>;
  conditions: SpecialityCondition[];
  techniques: SpecialityTechnique[];
  patientStories: SpecialityPatientStory[];
  faqItems: SpecialityFAQItem[];
}
