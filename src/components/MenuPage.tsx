"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Category cards (Drink Kong style) ─── */
const categories = [
  {
    title: "Cocktail List",
    subtitle: "Signature & Classici",
    bg: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    href: "#cocktails",
  },
  {
    title: "Wine & Spirits",
    subtitle: "Selezione premium",
    bg: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    href: "#cocktails",
  },
  {
    title: "Birre",
    subtitle: "Artigianali & in bottiglia",
    bg: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
    href: "#cocktails",
  },
  {
    title: "Analcolici",
    subtitle: "Freschi & naturali",
    bg: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    href: "#cocktails",
  },
];

/* ─── Cocktail items ─── */
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

      {/* ── CATEGORY CARDS (Drink Kong style) ──────────────── */}
      <section ref={catRef} className="bg-[#0a0a0a] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.title}
                href={cat.href}
                initial={{ opacity: 0, y: 32 }}
                animate={catInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-square overflow-hidden block"
                style={{ background: "#111" }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url('${cat.bg}')` }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                {/* Border on hover */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/25 transition-all duration-300" />
                {/* Text */}
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

      {/* ── COCKTAIL LIST ───────────────────────────────────── */}
      <section id="cocktails" ref={listRef} className="bg-[#0a0a0a] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                Cocktail List
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                I nostri drink
              </h2>
            </div>
            <p className="text-neutral-500 sm:text-right max-w-xs text-sm leading-relaxed">
              Realizzati con ingredienti freschi e selezionati.<br />
              La lista cambia con le stagioni.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {cocktails.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-4 p-7 border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
              >
                {item.tag && (
                  <span className="absolute top-5 right-5 text-[9px] uppercase tracking-widest text-neutral-400 border border-neutral-700 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                )}
                <span className="text-neutral-700 text-xs font-mono tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white font-semibold text-lg leading-tight pr-14 group-hover:text-neutral-200 transition-colors">
                  {item.name}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                <p className="text-white font-bold text-2xl tracking-tight mt-2">{item.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={listInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 text-center text-neutral-600 text-xs uppercase tracking-widest"
          >
            Menu completo disponibile al bancone · Prezzi da €1 a €15
          </motion.p>
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
