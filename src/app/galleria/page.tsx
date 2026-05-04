import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galleria — Bar Il Portico Carmagnola",
  description: "Foto e atmosfere del Bar Il Portico di Carmagnola: cocktail, serate e momenti speciali.",
};

export default function GalleriaPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section
        className="relative h-[55vh] min-h-[380px] w-full overflow-hidden flex items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
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
            Galleria
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-md leading-relaxed">
            Momenti, atmosfere e cocktail che raccontano<br />
            la nostra storia in Piazza Sant&apos;Agostino.
          </p>
        </div>
      </section>

      <Gallery />
      <Footer />
    </main>
  );
}
