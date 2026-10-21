"use client";

import Link from "next/link";
import { useApp } from "./providers";

export default function Nav() {
  const { theme, toggleTheme, locale, toggleLocale, t } = useApp();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          brunno<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-muted">
          <a href="/#projetos" className="hidden sm:block transition hover:text-foreground">
            {t.nav.projects}
          </a>
          <a href="/#sobre" className="hidden sm:block transition hover:text-foreground">
            {t.nav.about}
          </a>
          <a href="/#contato" className="hidden sm:block transition hover:text-foreground">
            {t.nav.contact}
          </a>
          <div className="flex items-center gap-2 ml-2 border-l border-border pl-4">
            <button
              onClick={toggleLocale}
              className="rounded-md px-2 py-1 text-xs font-medium border border-border hover:border-accent/40 hover:text-accent transition"
              aria-label="Toggle language"
            >
              {locale === "pt" ? "EN" : "PT"}
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-md p-1.5 border border-border hover:border-accent/40 hover:text-accent transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.4 3.4l.7.7M11.9 11.9l.7.7M3.4 12.6l.7-.7M11.9 4.1l.7-.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 9.5A6.5 6.5 0 016.5 2 5.5 5.5 0 1014 9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
