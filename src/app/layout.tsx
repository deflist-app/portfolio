import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/providers";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
        <AppProvider>
          <Nav />
          <main className="flex-1 pt-14">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
