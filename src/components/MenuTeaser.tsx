"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GlassWater } from "lucide-react";

const highlights = ["Cocktail · Signature", "Vini · Birre", "Analcolici"];

export default function MenuTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] border-y border-white/[0.06]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 max-w-xl"
          >
            <div className="flex items-center gap-2 text-neutral-500 text-xs uppercase tracking-widest">
              <GlassWater size={12} />
              <span>Cocktail & Drinks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Una carta pensata<br />per ogni ora.
            </h2>
            <p className="text-neutral-500 leading-relaxed text-sm max-w-sm">
              Dai cocktail signature alle birre artigianali, dai vini selezionati agli analcolici freschi.
              Scopri tutto il menu del Portico.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs uppercase tracking-widest text-neutral-400 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>
            <a
              href="/menu"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-neutral-200 transition-colors w-fit"
            >
              Sfoglia il menu
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
