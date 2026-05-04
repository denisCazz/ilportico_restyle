"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=2000&q=90"
          alt="Bar Il Portico — atmosfera notturna"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        {/* Dark gradient overlay — heavier, Drink Kong style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6"
        >
          {/* Location tag */}
          <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest">
            <MapPin size={12} />
            <span>Carmagnola, Torino</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[9rem] font-bold text-white leading-none tracking-tighter uppercase">
            Il<br />Portico
          </h1>

          {/* Tagline */}
          <p className="text-white/70 text-base sm:text-lg tracking-wide max-w-md">
            Cocktails artigianali · Musica live · Aperitivi in piazza
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="https://wa.me/3428044609"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Prenota su WhatsApp
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Scopri di più
            </a>
          </div>
        </motion.div>
      </div>

      {/* Rating badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 right-6 lg:right-12 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white text-center"
      >
        <div className="text-2xl font-bold">4.3</div>
        <div className="flex items-center justify-center gap-0.5 my-1">
          {[1,2,3,4].map(i => (
            <span key={i} className="text-yellow-400 text-xs">★</span>
          ))}
          <span className="text-yellow-400/50 text-xs">★</span>
        </div>
        <div className="text-white/60 text-xs">296 recensioni</div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-white/40"
        />
      </motion.div>
    </section>
  );
}
