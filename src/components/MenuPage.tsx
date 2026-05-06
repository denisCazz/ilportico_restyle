"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "I Nostri Taglieri",
    subtitle: "Salumi, formaggi & focaccia",
    bg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    href: "/menu/taglieri",
  },
  {
    title: "Mocktails",
    subtitle: "Analcolici di carattere",
    bg: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    href: "/menu/mocktails",
  },
  {
    title: "Cocktail & Drink",
    subtitle: "Signature & classici",
    bg: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    href: "/menu/cocktails",
  },
  {
    title: "Birre & Vini",
    subtitle: "Selezione premium",
    bg: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    href: "/menu/birre",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="px-6 pt-20 pb-6 text-center">
        <p className="text-[10px] uppercase tracking-widest text-neutral-600">Bar Il Portico</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">Menu</h1>
      </div>
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-px bg-white/[0.04]">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={cat.href}
              className="group relative flex h-full min-h-[36vh] items-end overflow-hidden bg-[#111]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                style={{ backgroundImage: `url('${cat.bg}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 p-5 sm:p-6">
                <p className="text-white font-bold text-sm sm:text-base uppercase tracking-tight leading-tight">
                  {cat.title}
                </p>
                <p className="mt-1 text-neutral-400 text-[10px] uppercase tracking-widest">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
