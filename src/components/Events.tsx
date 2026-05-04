"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Music2, Clock } from "lucide-react";

const events = [
  {
    date: "Ven 9 Mag",
    name: "Jazz Night",
    description: "Una serata di jazz acustico con il trio locale Piazza Note. Apertura porte ore 21:00.",
    time: "21:00 – 2:00",
    genre: "Jazz · Acustico",
  },
  {
    date: "Sab 17 Mag",
    name: "Vinyl Session",
    description: "DJ set con vinili originali anni '70–'90. Funk, soul e rare groove sotto il portico.",
    time: "22:00 – 2:00",
    genre: "Funk · Soul",
  },
  {
    date: "Ven 23 Mag",
    name: "Indie Live",
    description: "Set acustico di cantautori emergenti del territorio. Ingresso libero, prenotazione consigliata.",
    time: "21:30 – 1:00",
    genre: "Indie · Cantautorato",
  },
  {
    date: "Sab 31 Mag",
    name: "Summer Opening",
    description: "La grande serata inaugurale dell'estate. Aperitivo rinforzato, dj set e cocktail speciali.",
    time: "19:00 – 2:00",
    genre: "Electronic · Pop",
  },
];

export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="events" className="py-24 lg:py-36 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Live Music</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Prossimi<br />eventi
            </h2>
          </div>
          <a
            href="https://wa.me/3428044609"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-end text-xs uppercase tracking-widest font-medium px-5 py-2.5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
          >
            Prenota il tuo posto
          </a>
        </motion.div>

        {/* Events list */}
        <div className="flex flex-col divide-y divide-white/10">
          {events.map((ev, i) => (
            <motion.div
              key={ev.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 grid sm:grid-cols-[auto_1fr_auto] gap-6 items-start group hover:bg-white/5 px-4 -mx-4 rounded-xl transition-colors"
            >
              {/* Date */}
              <div className="flex items-center gap-3 min-w-[120px]">
                <Calendar size={14} className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-300">{ev.date}</span>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{ev.name}</h3>
                  <span className="text-[10px] uppercase tracking-wider bg-white/10 text-gray-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Music2 size={9} />
                    {ev.genre}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-lg">{ev.description}</p>
              </div>

              {/* Time */}
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock size={13} />
                <span>{ev.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-gray-600 text-xs uppercase tracking-widest"
        >
          Ingresso libero salvo indicazione contraria · Prenotazione consigliata via WhatsApp
        </motion.p>
      </div>
    </section>
  );
}
