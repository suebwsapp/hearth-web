import React from "react";
import IconHeart from "@/assets/icons/heart";
import { useI18n } from "@/contexts/I18nContext";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Logo from "@/assets/icons/logo";

export default function Header() {
  const { t } = useI18n();
  const onGetStarted = () => {
    // TODO: link to app store or signup
  };
  return (
    <nav className="flex items-center justify-between bg-background border border-border px-6 py-4 md:px-12 md:py-6 sticky top-0 z-50 border-b transition-colors duration-200">
      <div className="flex items-center gap-2">
        <Logo className="w-8 h-8" />
        <span className="text-xl font-bold tracking-tight">Hearth</span>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          onClick={onGetStarted}
          className="rounded-full px-6 bg-primary text-white"
        >
          {t("landing.header.get_app", "Get App")}
        </Button>
      </div>
    </nav>
  );
}
