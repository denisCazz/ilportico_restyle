import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti — Bar Il Portico Carmagnola",
  description: "Dove siamo, orari e come contattarci. Bar Il Portico, Piazza Sant'Agostino 18, Carmagnola.",
};

export default function ContattiPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section
        className="relative h-[55vh] min-h-[380px] w-full overflow-hidden flex items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-neutral-500 text-xs uppercase tracking-widest hover:text-white transition-colors mb-6"
          >
            ← Torna alla home
          </a>
          <span className="block text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Bar Il Portico
          </span>
          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
            Contatti
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-md leading-relaxed">
            Siamo in Piazza Sant&apos;Agostino 18, Carmagnola.<br />
            Prenota un tavolo o vieni a trovarci.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
