"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Music2 } from "lucide-react";

const upcomingDates = ["Ven 9 Mag", "Sab 17 Mag", "Ven 23 Mag", "Sab 31 Mag"];

export default function EventiTeaser() {
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
              <Music2 size={12} />
              <span>Live Music & Serate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ogni weekend<br />qualcosa di vivo.
            </h2>
            <p className="text-neutral-500 leading-relaxed text-sm max-w-sm">
              Dj set, live jazz, indie e molto altro. Guarda il calendario completo
              delle serate e prenota il tuo posto in anticipo.
            </p>
          </motion.div>

          {/* Right: dates + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Upcoming dates preview */}
            <div className="flex flex-wrap gap-2">
              {upcomingDates.map((d) => (
                <span
                  key={d}
                  className="text-xs uppercase tracking-widest text-neutral-400 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {d}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/eventi"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-neutral-200 transition-colors w-fit"
            >
              Tutti gli eventi
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
