"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/data/i18n";
import { translations } from "@/data/i18n";

type Theme = "dark" | "light";

type Translations = (typeof translations)[Locale];

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  locale: Locale;
  toggleLocale: () => void;
  t: Translations;
}

const AppContext = createContext<AppContextType | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [locale, setLocale] = useState<Locale>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme") as Theme | null;
      if (saved) setTheme(saved);
      const savedLocale = localStorage.getItem("portfolio-locale") as Locale | null;
      if (savedLocale) setLocale(savedLocale);
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    try { localStorage.setItem("portfolio-locale", locale); } catch {}
  }, [locale, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleLocale = () => setLocale((l) => (l === "pt" ? "en" : "pt"));

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, locale, toggleLocale, t: translations[locale] }}
    >
      {children}
    </AppContext.Provider>
  );
}
