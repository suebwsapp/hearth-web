import React, { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { faqs } from "@/data/data";
import IconArrowRight from "@/assets/icons/arrow-right";
import { getDefaultMessage } from "@/utils/defaultMessages";
import { AnimateInView } from "@/components/AnimateInView";
import { cn } from "@/components/ui/utils";

export default function Faq() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleOpenFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="px-6 py-24 md:px-12 border-t border-border bg-background">
      <div className="max-w-3xl mx-auto">
        <AnimateInView className="mb-12">
          <h2 className="type-heading-2 font-bold text-center">
            {t("landing.faq.section_title", "Frequently asked questions")}
          </h2>
        </AnimateInView>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimateInView key={i} delay={i * 80}>
            <div className="border rounded-2xl overflow-hidden border-border bg-card">
              <button
                className={cn(
                  "w-full px-6 py-4 text-left flex items-center justify-between font-bold",
                  openFaq === i && "accordion-open",
                )}
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
                className={cn("accordion-panel", openFaq === i && "is-open")}
              >
                <div>
                  <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground">
                    {t(faq.answerKey, getDefaultMessage(faq.answerKey))}
                  </div>
                </div>
              </div>
            </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
