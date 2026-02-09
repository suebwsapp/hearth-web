import React from "react";
import { I18nProvider } from "@/contexts/I18nContext";
import LandingPage from "@/features/landing-page/LandingPage";
import type { Messages } from "@/contexts/I18nContext";

export interface LandingPageWithI18nProps {
  lang: string;
  messages: Messages;
}

export default function LandingPageWithI18n({ lang, messages }: LandingPageWithI18nProps) {
  return (
    <I18nProvider lang={lang} messages={messages}>
      <LandingPage />
    </I18nProvider>
  );
}
