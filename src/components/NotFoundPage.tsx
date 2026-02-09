import React from "react";
import IconHome from "@/assets/icons/home";
import { I18nProvider } from "@/contexts/I18nContext";
import Header from "@/features/landing-page/Header";
import Footer from "@/features/landing-page/Footer/Footer";
import { Button } from "@/components/ui/Button";
import type { Messages } from "@/contexts/I18nContext";

export interface NotFoundPageProps {
  lang: string;
  messages: Messages;
}

export default function NotFoundPage({ lang, messages }: NotFoundPageProps) {
  const t = (id: string, fallback?: string) => messages[id] ?? fallback ?? id;

  return (
    <I18nProvider lang={lang} messages={messages}>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6 py-24 md:px-12">
          <div className="max-w-7xl mx-auto w-full text-center">
            <p
              className="text-8xl md:text-9xl font-bold text-muted/50 tabular-nums mb-4"
              aria-hidden
            >
              404
            </p>
            <h1 className="type-heading-1 font-bold text-foreground mb-4">
              {t("notfound.header", "Page not found")}
            </h1>
            <Button
              asChild
              className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="/"
                className="inline-flex items-center gap-2"
                aria-label={t("go_back", "Go back to the homepage")}
              >
                <IconHome className="w-4 h-4" aria-hidden />
                {t("go_back", "Go back to the homepage")}
              </a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
