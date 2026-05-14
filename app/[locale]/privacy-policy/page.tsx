import React from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, FileText, UserCheck, Eye, Database, Info, MessageCircle, ExternalLink, Globe, Users, Cookie, AlertCircle } from "lucide-react";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });
 
  return {
    title: t('title'),
    description: t('intro'),
  };
}

const SectionIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'who_we_are': return <Users className="w-6 h-6 text-[#EE4423]" />;
    case 'info_collect': return <Database className="w-6 h-6 text-[#EE4423]" />;
    case 'usage': return <Eye className="w-6 h-6 text-[#EE4423]" />;
    case 'disclaimer': return <AlertCircle className="w-6 h-6 text-[#EE4423]" />;
    case 'sharing': return <ExternalLink className="w-6 h-6 text-[#EE4423]" />;
    case 'cookies': return <Cookie className="w-6 h-6 text-[#EE4423]" />;
    case 'security': return <Lock className="w-6 h-6 text-[#EE4423]" />;
    case 'links': return <ExternalLink className="w-6 h-6 text-[#EE4423]" />;
    case 'international': return <Globe className="w-6 h-6 text-[#EE4423]" />;
    case 'rights': return <UserCheck className="w-6 h-6 text-[#EE4423]" />;
    case 'children': return <Users className="w-6 h-6 text-[#EE4423]" />;
    case 'changes': return <FileText className="w-6 h-6 text-[#EE4423]" />;
    case 'contact': return <MessageCircle className="w-6 h-6 text-[#EE4423]" />;
    default: return <Info className="w-6 h-6 text-[#EE4423]" />;
  }
};

interface SectionData {
  title: string;
  content?: string;
  items?: string[];
  footer?: string;
  subsections?: {
    title: string;
    content?: string;
    items?: string[];
  }[];
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });

  const sections = [
    'who_we_are', 'info_collect', 'usage', 'disclaimer', 'sharing', 
    'cookies', 'security', 'links', 'international', 'rights', 
    'children', 'changes', 'contact'
  ];

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-24">
          
          {/* Simple Header */}
          <header className="mb-16 border-b border-gray-100 pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EE4423]/5 text-[#EE4423] rounded-full font-bold text-xs uppercase tracking-wider mb-6">
              <Shield size={14} />
              {t('legal_info_label')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#202124] mb-6">
              {t('title')}
            </h1>
            <div className="flex items-center gap-3 text-[#58595B] font-medium text-sm">
              {t('last_updated')}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#58595B] text-xl leading-relaxed mb-12 whitespace-pre-line font-medium">
              {t('intro')}
            </p>

            <div className="space-y-16">
              {sections.map((section) => {
                const data = t.raw(`sections.${section}`) as SectionData;
                
                return (
                  <section 
                    key={section} 
                    id={section} 
                    className="scroll-mt-32"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#202124] mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[#EE4423]/10 flex items-center justify-center">
                        <SectionIcon type={section} />
                      </span>
                      {data.title}
                    </h2>
                    
                    {data.content && (
                      <p className="text-[#58595B] text-lg leading-relaxed mb-6 whitespace-pre-line">
                        {data.content}
                      </p>
                    )}

                    {/* Subsections */}
                    {data.subsections && data.subsections.map((sub, idx) => (
                      <div key={idx} className="mt-8 first:mt-0 pl-4 border-l-2 border-gray-100">
                        <h3 className="text-xl font-bold text-[#202124] mb-4">{sub.title}</h3>
                        {sub.content && <p className="text-[#58595B] text-lg mb-4">{sub.content}</p>}
                        {sub.items && (
                          <ul className="space-y-3 mb-6">
                            {sub.items.map((item, i) => (
                              <li key={i} className="flex gap-3 text-[#58595B] text-lg">
                                <span className="text-[#EE4423] font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Items (Lists) */}
                    {data.items && (
                      <ul className="space-y-4 mb-6">
                        {data.items.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start text-[#58595B] text-lg">
                            <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gray-100 text-[#58595B] flex items-center justify-center text-xs font-bold mt-1">
                              {i + 1}
                            </div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {data.footer && (
                      <div className="text-[#58595B] text-lg leading-relaxed mt-6 italic bg-gray-50/50 p-6 rounded-xl border border-gray-100 whitespace-pre-line">
                        {data.footer}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
