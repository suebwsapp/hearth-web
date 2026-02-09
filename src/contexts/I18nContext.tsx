import React, { createContext, useContext, useMemo } from "react";
import { getDefaultMessage } from "@/utils/defaultMessages";
import { siteConfig, getAbsoluteUrl } from "@/config/site";

export type Messages = Record<string, string>;

export interface I18nValue {
  lang: string;
  messages: Messages;
  t: (id: string, defaultMessage?: string) => string;
  /** Path for a locale (e.g. "" for en, "/es" for es) for use in links */
  localePath: (locale: string) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  lang,
  messages,
  children,
}: {
  lang: string;
  messages: Messages;
  children: React.ReactNode;
}) {
  const value = useMemo<I18nValue>(() => {
    const t = (id: string, defaultMessage?: string) => {
      const msg = messages[id];
      if (typeof msg === "string") return msg;
      return defaultMessage ?? getDefaultMessage(id);
    };
    const localePath = (locale: string) => {
      if (locale === "en") return "";
      return `/${locale}`;
    };
    return { lang, messages, t, localePath };
  }, [lang, messages]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
