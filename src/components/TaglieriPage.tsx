"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const taglieri = [
  {
    name: '"TRASTEVERE"',
    subtitle: "il tagliere di salumi e formaggi",
    description:
      "Mozzarella di Bufala su letto di insalatina condita con pomodorini crudi, Toma di Fossa, Pecorino Romano, Arrosto di Tacchino, Manzo affumicato, Mortadella IGP, Salame Milano, prosciutto crudo Valtellina",
    price: "€ 18,00",
  },
  {
    name: '"La BUZZICONA"',
    subtitle: "il tagliere di focaccia romana · 8pz",
    description:
      "Battutina di Bufalo carmagnolese condita con peperoni cotti al forno, olive verdi, patè di olive, olive taggiasche, crema al parmigiano, crema al cacio e pepe, salame Milano, mortadella IGP, manzo affumicato, arrosto di tacchino, olio Evo, pepe nero",
    price: "€ 12,00",
  },
  {
    name: '"TESTACCIO"',
    subtitle: "tagliere di focaccia romana · 8pz",
    description:
      "Manzo affumicato, peperoni arrostiti, olive taggiasche, patè di olive, pomodorini ciliegini",
    price: "€ 10,00",
  },
  {
    name: '"LA PIMPINELLA"',
    subtitle: "tagliere di focaccia romana · 8pz",
    description: "Mozzarella fiordilatte, pomodoro pachino, basilico, olio Evo, sale",
    price: "€ 10,00",
  },
  {
    name: '"LA SORA SILVI"',
    subtitle: "tagliere di frutta fresca di stagione",
    description: "",
    price: "€ 14,00",
  },
];

export default function TaglieriPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [query, setQuery] = useState("");

  const filtered = taglieri.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
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
            Bar Il Portico
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            I Nostri Taglieri
          </h1>
          <p className="mt-4 text-neutral-500 text-sm leading-relaxed max-w-sm">
            Salumi, formaggi e focaccia romana.<br />
            Ingredienti selezionati per ogni occasione.
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
              className="flex flex-col gap-3 p-7 border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
            >
              <span className="text-neutral-700 text-xs font-mono tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-semibold text-base leading-tight italic group-hover:text-neutral-200 transition-colors">
                {item.name}
              </h3>
              {item.subtitle && (
                <p className="text-neutral-500 text-xs uppercase tracking-wide">{item.subtitle}</p>
              )}
              {item.description && (
                <p className="text-neutral-600 text-xs leading-relaxed flex-1">
                  {item.description}
                </p>
              )}
              <p className="text-white font-bold text-xl tracking-tight mt-2">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
