"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Umbrella, Music, Star } from "lucide-react";

const highlights = [
  { icon: Umbrella, label: "Outdoor Seating", desc: "Tavolini in piazza, all'ombra del portico" },
  { icon: Star, label: "Great Cocktails", desc: "Mixology curata con prodotti di qualità" },
  { icon: Music, label: "Live Music", desc: "Serate con artisti locali e nazionali" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-36 bg-[#111111]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Chi siamo</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-2xl">
            Un angolo di convivialità nel cuore di Carmagnola
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-neutral-400 text-lg leading-relaxed">
              Bar Il Portico nasce come punto di riferimento per chi ama godersi
              il tempo con stile. Situato in Piazza Sant&apos;Agostino, nel centro
              storico di Carmagnola, è il posto giusto per un aperitivo al
              tramonto, un cocktail dopo cena o semplicemente per fermarsi e
              respirare la bellezza della piazza.
            </p>
            <p className="text-neutral-500 leading-relaxed">
              Il nostro staff seleziona con cura ogni ingrediente, ogni bottiglia,
              ogni atmosfera. Dall&apos;aperitivo al dopocena, passando per le serate
              con musica dal vivo — al Portico trovi sempre qualcosa che vale la
              pena vivere.
            </p>

            {/* Highlights */}
            <div className="mt-4 flex flex-col gap-5">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                    <Icon size={16} className="text-white group-hover:text-gray-900 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">{label}</p>
                    <p className="text-sm text-neutral-500 mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="https://duccarmagnola.it/wp-content/uploads/2023/11/DAN07152.jpg"
                alt="Staff del Bar Il Portico"
                fill
                className="object-cover object-top"
                unoptimized
              />
              {/* Info card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Orari</p>
                  <p className="font-semibold text-white text-sm mt-0.5">Aperto fino alle 2:00</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Posto</p>
                  <p className="font-semibold text-white text-sm mt-0.5">Piazza S. Agostino 18</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-white/10 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
