import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bar Il Portico — Carmagnola",
  description: "Bar Il Portico a Carmagnola. Cocktails artigianali, musica live e aperitivi in piazza. Piazza Sant'Agostino 18, Carmagnola TO.",
  keywords: ["bar", "cocktail", "Carmagnola", "aperitivo", "musica live", "Il Portico"],
  openGraph: {
    title: "Bar Il Portico — Carmagnola",
    description: "Cocktails artigianali, musica live e aperitivi in piazza.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
