import React, { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { faqs } from "@/data/data";
import IconArrowRight from "@/assets/icons/arrow-right";
import { getDefaultMessage } from "@/utils/defaultMessages";

export default function Faq() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleOpenFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="px-6 py-24 md:px-12 border-t border-border bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="type-heading-2 font-bold mb-12 text-center">
          {t("landing.faq.section_title", "Frequently asked questions")}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-2xl overflow-hidden border-border bg-card"
            >
              <button
                className={`w-full px-6 py-4 text-left flex items-center justify-between font-bold ${openFaq === i ? "accordion-open" : ""}`}
                onClick={() => handleOpenFaq(i)}
              >
                <span>
                  {t(faq.questionKey, getDefaultMessage(faq.questionKey))}
                </span>
                <span className="accordion-chevron inline-flex" aria-hidden>
                  <IconArrowRight className="w-4 h-4 transform rotate-90" />
                </span>
              </button>
              <div
                className={`accordion-panel ${openFaq === i ? "is-open" : ""}`}
              >
                <div>
                  <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground">
                    {t(faq.answerKey, getDefaultMessage(faq.answerKey))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
