"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const taglieri = [
  {
    name: '"TRASTEVERE"',
    subtitle: "il tagliere di salumi e formaggi",
    description:
      "Mozzarella di Bufala su letto di insalatina condita con pomodorini crudi, Toma di Fossa, Pecorino Romano, Arrosto di Tacchino, Manzo affumicato, Mortadella IGP, Salame Milano, prosciutto crudo Valtellina",
    price: "€ 18,00",
    tag: null,
  },
  {
    name: '"La BUZZICONA"',
    subtitle: "il tagliere di focaccia romana · 8pz",
    description:
      "Battutina di Bufalo carmagnolese condita con peperoni cotti al forno, olive verdi, patè di olive, olive taggiasche, crema al parmigiano, crema al cacio e pepe, salame Milano, mortadella IGP, manzo affumicato, arrosto di tacchino, olio Evo, pepe nero",
    price: "€ 12,00",
    tag: null,
  },
  {
    name: '"TESTACCIO"',
    subtitle: "tagliere di focaccia romana · 8pz",
    description:
      "Manzo affumicato, peperoni arrostiti, olive taggiasche, patè di olive, pomodorini ciliegini",
    price: "€ 10,00",
    tag: null,
  },
  {
    name: '"LA PIMPINELLA"',
    subtitle: "tagliere di focaccia romana · 8pz",
    description: "Mozzarella fiordilatte, pomodoro pachino, basilico, olio Evo, sale",
    price: "€ 10,00",
    tag: null,
  },
  {
    name: '"LA SORA SILVI"',
    subtitle: "tagliere di frutta fresca di stagione",
    description: "",
    price: "€ 14,00",
    tag: null,
  },
];

const mocktails = [
  {
    name: "HUGO VANITOSO",
    subtitle: "",
    description:
      "Acqua, zucchero, 3% succo di limone da concentrato, 3% succo di mela da concentrato, anidride carbonica, 0.3% infuso di fiori di sambuco, aromi naturali, limone o lime, menta",
    price: "€ 7,00",
    tag: "Analcolico",
  },
  {
    name: "GIN&TONIC",
    subtitle: "",
    description: "TANQUERAY 00%, tonica Fever Tree Indian, limone",
    price: "€ 7,00",
    tag: "Analcolico",
  },
  {
    name: "GIMLET",
    subtitle: "",
    description:
      "TANQUERAY 00%, succo di lime fresco, tonica, aceto di sidro di mele, scorza di lime",
    price: "€ 7,00",
    tag: "Analcolico",
  },
  {
    name: "PALOMA 00 ALPEX",
    subtitle: "",
    description:
      "Alpex, Acqua, zucchero, 6% succo di pompelmo rosa da concentrato, anidride carbonica, aromi, acidificanti: acido citrico, succo di carota nera da concentrato, antiossidanti: acido ascorbico, aroma chinino, lime o pompelmo, sale dell'Himalaya",
    price: "€ 7,00",
    tag: "Analcolico",
  },
  {
    name: "SHIRLEY TEMPLE",
    subtitle: "",
    description: "Granatina, succo di limone, Ginger Ale",
    price: "€ 7,00",
    tag: "Analcolico",
  },
  {
    name: "SPRITZ 00",
    subtitle: "",
    description:
      "Acqua, zucchero, aromi, anidride carbonica, succo d'arancia da concentrato, acidificanti: acido citrico; sale, aroma chinino, coloranti: E122, E110, ghiaccio, fetta di arancia",
    price: "€ 6,00",
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
              I Nostri Taglieri
            </h2>
          </div>
          <p className="text-neutral-500 sm:text-right max-w-xs text-sm leading-relaxed">
            Salumi, formaggi e focaccia romana.<br />Ingredienti selezionati per ogni occasione.
          </p>
        </motion.div>

        {/* Taglieri grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {taglieri.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-3 p-7 border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
            >
              <span className="text-neutral-700 text-xs font-mono tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-semibold text-base leading-tight group-hover:text-neutral-200 transition-colors italic">
                {item.name}
              </h3>
              {item.subtitle && (
                <p className="text-neutral-500 text-xs uppercase tracking-wide">{item.subtitle}</p>
              )}
              {item.description && (
                <p className="text-neutral-600 text-xs leading-relaxed flex-1">{item.description}</p>
              )}
              <p className="text-white font-bold text-xl tracking-tight mt-2">{item.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Mocktails section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Analcolici</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Mocktails
            </h2>
          </div>
          <p className="text-neutral-500 sm:text-right max-w-xs text-sm leading-relaxed">
            Tutto il gusto dei grandi classici, senza alcool.<br />Materie prime di altissima qualità.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {mocktails.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.45 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-3 p-7 border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
            >
              <span className="absolute top-5 right-5 text-[9px] uppercase tracking-widest text-neutral-500 border border-neutral-700 px-2 py-0.5 rounded-full">
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

