"use client";

import { useApp } from "./providers";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-border py-6 text-center text-sm text-muted">
      <div className="mx-auto max-w-5xl px-6">
        © 2026 Brunno Seneguini. {t.footer}
      </div>
    </footer>
  );
}
