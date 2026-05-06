"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const mocktails = [
  {
    name: "HUGO VANITOSO",
    description:
      "Acqua, zucchero, 3% succo di limone da concentrato, 3% succo di mela da concentrato, anidride carbonica, 0.3% infuso di fiori di sambuco, aromi naturali, limone o lime, menta",
    price: "€ 7,00",
  },
  {
    name: "GIN&TONIC",
    description: "TANQUERAY 00%, tonica Fever Tree Indian, limone",
    price: "€ 7,00",
  },
  {
    name: "GIMLET",
    description:
      "TANQUERAY 00%, succo di lime fresco, tonica, aceto di sidro di mele, scorza di lime",
    price: "€ 7,00",
  },
  {
    name: "PALOMA 00 ALPEX",
    description:
      "Alpex, Acqua, zucchero, 6% succo di pompelmo rosa da concentrato, anidride carbonica, aromi, acidificanti: acido citrico, succo di carota nera da concentrato, antiossidanti: acido ascorbico, aroma chinino, lime o pompelmo, sale dell'Himalaya",
    price: "€ 7,00",
  },
  {
    name: "SHIRLEY TEMPLE",
    description: "Granatina, succo di limone, Ginger Ale",
    price: "€ 7,00",
  },
  {
    name: "SPRITZ 00",
    description:
      "Acqua, zucchero, aromi, anidride carbonica, succo d'arancia da concentrato, acidificanti: acido citrico; sale, aroma chinino, coloranti: E122, E110, ghiaccio, fetta di arancia",
    price: "€ 6,00",
  },
];

export default function MocktailsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [query, setQuery] = useState("");

  const filtered = mocktails.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-neutral-500 text-xs uppercase tracking-widest hover:text-white transition-colors mb-12"
          >
            ← Menu
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Analcolici
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Mocktails
          </h1>
          <p className="mt-4 text-neutral-500 text-sm leading-relaxed max-w-md">
            Tutto il gusto dei grandi classici per chi non vuole rinunciare a un cocktail di
            carattere, senza alcool e con materie prime di altissima qualità, nel rispetto delle
            ricette tradizionali.
          </p>
        </motion.div>

        {/* Search */}
        <div className="mb-10">
          <input
            type="search"
            placeholder="Cerca per nome o ingrediente…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-white/25 rounded-none px-5 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
          />
          {query && (
            <p className="mt-2 text-neutral-600 text-xs px-1">
              {filtered.length} risultat{filtered.length === 1 ? "o" : "i"}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length === 0 ? (
            <p className="col-span-full text-neutral-600 text-sm py-12 text-center">Nessun risultato per &ldquo;{query}&rdquo;</p>
          ) : filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-3 p-7 border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
            >
              <span className="absolute top-5 right-5 text-[9px] uppercase tracking-widest text-neutral-600 border border-neutral-700 px-2 py-0.5 rounded-full">
                0%
              </span>
              <span className="text-neutral-700 text-xs font-mono tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-semibold text-lg leading-tight pr-14 group-hover:text-neutral-200 transition-colors">
                {item.name}
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed flex-1">{item.description}</p>
              <p className="text-white font-bold text-xl tracking-tight mt-2">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
