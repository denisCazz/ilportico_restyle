"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Category cards ─── */
const categories = [
  {
    title: "I Nostri Taglieri",
    subtitle: "Salumi, formaggi & focaccia",
    bg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    href: "#taglieri",
  },
  {
    title: "Mocktails",
    subtitle: "Analcolici di carattere",
    bg: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    href: "#mocktails",
  },
];

/* ─── Taglieri ─── */
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

/* ─── Mocktails ─── */
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

/* ─── Gallery images ─── */
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=600&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&q=80", tall: false },
];

export default function MenuPage() {
  const heroRef = useRef(null);
  const catRef = useRef(null);
  const listRef = useRef(null);
  const gallRef = useRef(null);

  const catInView = useInView(catRef, { once: true, margin: "-60px" });
  const listInView = useInView(listRef, { once: true, margin: "-60px" });
  const gallInView = useInView(gallRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── HERO BANNER ────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[55vh] min-h-[380px] w-full overflow-hidden flex items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Bar Il Portico
          </span>
          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
            Menu
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-md leading-relaxed">
            Cocktail artigianali, vini selezionati, birre e analcolici.<br />
            Tutto ciò che rende speciale una serata al Portico.
          </p>
        </div>
      </section>

      {/* ── CATEGORY CARDS ──────────────────────────────────── */}
      <section ref={catRef} className="bg-[#0a0a0a] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.title}
                href={cat.href}
                initial={{ opacity: 0, y: 32 }}
                animate={catInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-video overflow-hidden block"
                style={{ background: "#111" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url('${cat.bg}')` }}
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/25 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight leading-tight uppercase">
                    {cat.title}
                  </span>
                  <span className="mt-2 text-neutral-400 text-xs uppercase tracking-widest">
                    {cat.subtitle}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAGLIERI ────────────────────────────────────────── */}
      <section id="taglieri" ref={listRef} className="bg-[#0a0a0a] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                Il Portico
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                I Nostri Taglieri
              </h2>
            </div>
            <p className="text-neutral-500 sm:text-right max-w-xs text-sm leading-relaxed">
              Salumi, formaggi e focaccia romana.<br />
              Ingredienti selezionati per ogni occasione.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {taglieri.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
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
        </div>
      </section>

      {/* ── MOCKTAILS ───────────────────────────────────────── */}
      <section id="mocktails" className="bg-[#0a0a0a] pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                Analcolici
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Mocktails
              </h2>
            </div>
            <p className="text-neutral-500 sm:text-right max-w-sm text-sm leading-relaxed">
              Tutto il gusto dei grandi classici per chi non vuole rinunciare a un cocktail di carattere, senza alcool e con materie prime di altissima qualità.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {mocktails.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.35 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-3 p-7 border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
              >
                <span className="absolute top-5 right-5 text-[9px] uppercase tracking-widest text-neutral-500 border border-neutral-700 px-2 py-0.5 rounded-full">
                  0%
                </span>
                <span className="text-neutral-700 text-xs font-mono tabular-nums">
                  {String(i + 1).padStart(2, "00")}
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

      {/* ── MASONRY GALLERY ─────────────────────────────────── */}
      <section ref={gallRef} className="bg-[#0a0a0a] pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gallInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
              Atmosfera
            </span>
          </motion.div>

          {/* Masonry-style grid using columns */}
          <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-2 lg:gap-3 space-y-0">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={gallInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="break-inside-avoid mb-2 lg:mb-3 overflow-hidden group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                  style={{ aspectRatio: img.tall ? "2/3" : "1/1" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
