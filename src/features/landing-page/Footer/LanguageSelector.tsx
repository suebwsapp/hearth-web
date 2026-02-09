import React, { useState } from "react";
import IconGlobe from "@/assets/icons/globe";
import { useI18n } from "@/contexts/I18nContext";
import { siteConfig } from "@/config/site";
import { LOCALES } from "@/data/locales";
import { cn } from "@/components/ui/utils";

export default function LanguageSelector() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, lang, localePath } = useI18n();

  return (
    <div className="relative flex items-center gap-4">
      <button
        type="button"
        onClick={() => setLangMenuOpen((o) => !o)}
        className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-expanded={langMenuOpen}
        aria-haspopup="true"
        aria-label={t("landing.footer.aria_language", "Select language")}
      >
        <IconGlobe className="w-5 h-5" />
      </button>
      {langMenuOpen && (
        <div
          className="absolute right-0 bottom-8 py-1 w-40 rounded-lg border border-border bg-background shadow-lg z-50 max-h-[18rem] overflow-y-auto"
          role="menu"
        >
          {siteConfig.locales.map((locale) => (
            <a
              key={locale}
              href={localePath(locale) || "/"}
              role="menuitem"
              onClick={() => setLangMenuOpen(false)}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm transition-colors",
                lang === locale
                  ? "bg-muted text-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
              )}
            >
              {LOCALES[locale] ?? locale}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
