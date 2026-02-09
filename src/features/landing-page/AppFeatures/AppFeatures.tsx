import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { features } from "@/data/data";
import { getDefaultMessage } from "@/utils/defaultMessages";

export default function AppFeatures() {
  const { t } = useI18n();
  return (
    <section className="px-6 py-24 md:px-12 bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="type-heading-2 font-bold mb-4">
            {t("landing.features.section_title", "Everything you need to grow closer")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t(
              "landing.features.section_subtitle",
              "Designed by relationship experts to help you foster intimacy, trust, and joy in your relationship.",
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:items-start items-center animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center bg-muted text-primary justify-center mb-5 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="type-heading-4 font-bold mb-3">
                {t(feature.titleKey, getDefaultMessage(feature.titleKey))}
              </h3>
              <p className="type-body leading-relaxed text-muted-foreground">
                {t(feature.descriptionKey, getDefaultMessage(feature.descriptionKey))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
