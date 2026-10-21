import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brunno Seneguini — Product Builder",
  description:
    "Portfólio de Brunno Seneguini. Product Builder com background em finanças e 3 projetos publicados: DefList, PorcoLab e Dash Vendas.",
  openGraph: {
    title: "Brunno Seneguini — Product Builder",
    description:
      "Product Builder com background em finanças. 3 projetos publicados do zero ao deploy.",
    type: "website",
  },
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          brunno<span className="text-accent">.</span>
        </Link>
        <div className="flex gap-6 text-sm text-muted">
          <a href="/#projetos" className="transition hover:text-foreground">
            Projetos
          </a>
          <a href="/#sobre" className="transition hover:text-foreground">
            Sobre
          </a>
          <a href="/#contato" className="transition hover:text-foreground">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      <div className="mx-auto max-w-5xl px-6">
        © 2026 Brunno Seneguini. Construído com Next.js e Tailwind CSS.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
