import React, { useState, useEffect } from "react";
import IconSun from "@/assets/icons/sun";
import IconMoon from "@/assets/icons/moon";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

function getEffectiveTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const stored = document.documentElement.getAttribute("data-theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // ignore
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (window.localStorage.getItem(THEME_KEY) ?? getEffectiveTheme()) as Theme;
    applyTheme(stored);
    setTheme(stored);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Toggle theme"
      >
        <IconSun className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <IconSun className="w-5 h-5" />
      ) : (
        <IconMoon className="w-5 h-5" />
      )}
    </button>
  );
}
