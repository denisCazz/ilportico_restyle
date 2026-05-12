"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const hours = [
  { day: "Lunedì", time: "7:30 – 24:00" },
  { day: "Martedì", time: "Chiuso" },
  { day: "Mercoledì", time: "7:30 – 24:00" },
  { day: "Giovedì", time: "7:30 – 24:00" },
  { day: "Venerdì", time: "7:30 – 2:00" },
  { day: "Sabato", time: "7:30 – 2:00" },
  { day: "Domenica", time: "8:30 – 24:00" },
];

const today = new Date().toLocaleDateString("it-IT", { weekday: "long" });

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-600 font-medium">Contatti</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Vieni a trovarci
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-neutral-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-1">Indirizzo</p>
                  <p className="text-white font-medium">Piazza Sant&apos;Agostino, 18</p>
                  <p className="text-neutral-500 text-sm">10022 Carmagnola (TO)</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-neutral-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-1">Telefono</p>
                  <a href="tel:+393428044609" className="text-white font-medium hover:text-neutral-400 transition-colors">
                    342 804 4609
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-neutral-400" />
                </div>
                <div className="w-full">
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">Orari</p>
                  <div className="flex flex-col gap-2">
                    {hours.map((h) => {
                      const isToday = today.toLowerCase() === h.day.toLowerCase();
                      return (
                        <div
                          key={h.day}
                          className={`flex justify-between text-sm border-b border-white/[0.05] pb-2 ${isToday ? "text-white font-semibold" : "text-neutral-500"}`}
                        >
                          <span className="flex items-center gap-2">
                            {isToday && <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />}
                            {h.day}
                          </span>
                          <span>{h.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/3428044609"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-widest hover:bg-[#20c05c] transition-colors"
            >
              <MessageCircle size={16} />
              Prenota su WhatsApp
            </a>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="overflow-hidden aspect-square lg:aspect-auto lg:h-full min-h-[400px] border border-white/10">
              <iframe
                title="Mappa Bar Il Portico Carmagnola"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.5!2d7.7148!3d44.8458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d25b25a5f3b3e7%3A0x6a1e6a3b9c7f8d0e!2sPiazza%20Sant&#39;Agostino%2C%2018%2C%2010022%20Carmagnola%20TO!5e0!3m2!1sit!2sit!4v1714000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
