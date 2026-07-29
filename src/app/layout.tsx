import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Soraia — Sua assistente financeira",
  description:
    "Registre gastos, acompanhe contas, organize metas e entenda como seu saldo ficará conversando com uma assistente financeira pelo celular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05060c] text-[#f4f5fb]">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
