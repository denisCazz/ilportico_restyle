"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cocktails = [
  {
    name: "Negroni Portico",
    description: "Gin, Campari, Vermouth Rosso. Il classico in versione barrel aged",
    price: "€9",
    tag: "Signature",
  },
  {
    name: "Aperol Spritz",
    description: "Aperol, Prosecco doc, soda, arancia fresca",
    price: "€7",
    tag: "Bestseller",
  },
  {
    name: "Mojito della Piazza",
    description: "Rum bianco, lime fresco, menta, zucchero di canna, soda",
    price: "€8",
    tag: null,
  },
  {
    name: "Hugo",
    description: "Sambuco, Prosecco, menta, lime, soda — fresco e floreale",
    price: "€7",
    tag: null,
  },
  {
    name: "Whisky Sour",
    description: "Bourbon, succo di limone, sciroppo, albume — equilibrio perfetto",
    price: "€10",
    tag: "New",
  },
  {
    name: "Pornstar Martini",
    description: "Vodka alla vaniglia, passion fruit, lime, shot di Prosecco a lato",
    price: "€11",
    tag: null,
  },
  {
    name: "Gin Tonic Selection",
    description: "Selezione di gin premium con tonica artigianale e botaniche fresche",
    price: "€9–12",
    tag: null,
  },
  {
    name: "Mocktail Tramonto",
    description: "Succo d'arancia, sciroppo di granatina, lime, soda — analcolico",
    price: "€5",
    tag: "Analcolico",
  },
];

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="py-24 lg:py-36 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Menu</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Cocktail & Drinks
            </h2>
          </div>
          <p className="text-neutral-500 sm:text-right max-w-xs text-sm leading-relaxed">
            Realizzati con ingredienti freschi e selezionati.<br />La lista cambia con le stagioni.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {cocktails.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-4 p-7 border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
            >
              {/* Tag */}
              {item.tag && (
                <span className="absolute top-5 right-5 text-[9px] uppercase tracking-widest text-neutral-400 border border-neutral-700 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              )}

              {/* Number */}
              <span className="text-neutral-700 text-xs font-mono tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Name */}
              <h3 className="text-white font-semibold text-lg leading-tight pr-14 group-hover:text-neutral-200 transition-colors">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-neutral-500 text-sm leading-relaxed flex-1">{item.description}</p>

              {/* Price */}
              <p className="text-white font-bold text-2xl tracking-tight mt-2">{item.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center text-neutral-600 text-xs uppercase tracking-widest"
        >
          Menu completo disponibile al bancone · Prezzi da €1 a €15
        </motion.p>
      </div>
    </section>
  );
}

