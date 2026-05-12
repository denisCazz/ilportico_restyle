import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Birre & Vini – Bar Il Portico",
  description: "Selezione di birre e vini del Bar Il Portico di Carmagnola.",
};

export default function Birre() {
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
            Birre & Vini
          </h1>
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "Beck's",
              "Corona",
              "Tennent's",
              "Heineken",
              "Ichnusa non filtrata",
              "Corona alcool free",
            ].map((birra) => (
              <li key={birra} className="flex items-center gap-3 text-white text-sm border-b border-white/[0.06] pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0" />
                {birra}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
