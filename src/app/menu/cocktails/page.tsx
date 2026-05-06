import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocktail & Drink – Bar Il Portico",
  description: "La selezione di cocktail e drink del Bar Il Portico di Carmagnola.",
};

export default function Cocktails() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <section className="py-24 lg:py-36 bg-[#0a0a0a] min-h-[60vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-neutral-500 text-xs uppercase tracking-widest hover:text-white transition-colors mb-12"
          >
            ← Menu
          </Link>
          <span className="block text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Bar Il Portico
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Cocktail & Drink
          </h1>
          <p className="mt-6 text-neutral-500 text-sm leading-relaxed max-w-xs">
            Menu in aggiornamento.<br />Chiedi al bancone la lista completa.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
