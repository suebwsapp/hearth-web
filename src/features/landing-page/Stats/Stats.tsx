import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { stats } from "@/data/stats";
import { formatStatValue } from "@/utils/formatStat";

const statLabelDefaults: Record<string, string> = {
  "landing.stats.couples_connected": "Couples Connected",
  "landing.stats.questions_answered": "Questions Answered",
  "landing.stats.memories_shared": "Memories Shared",
  "landing.stats.countries": "Countries",
};

export default function Stats() {
  const { t } = useI18n();
  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-2 p-2 rounded-full bg-muted text-primary">
              {stat.icon}
            </div>
            <div className="type-heading-2 font-bold mb-1 text-foreground">
              {typeof stat.value === "number"
                ? formatStatValue(stat.value)
                : stat.value}
            </div>
            <div className="type-body font-medium text-muted-foreground">
              {t(stat.labelKey, statLabelDefaults[stat.labelKey] ?? stat.labelKey)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
