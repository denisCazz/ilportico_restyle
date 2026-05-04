"use client";

import { Share2, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Chi siamo", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Eventi", href: "/eventi" },
  { label: "Galleria", href: "/galleria" },
  { label: "Contatti", href: "/contatti" },
];

const hours = [
  { day: "Lunedì", time: "Chiuso" },
  { day: "Mar – Mer", time: "9:00 – 22:00" },
  { day: "Gio – Ven", time: "9:00 – 2:00" },
  { day: "Sabato", time: "9:00 – 2:00" },
  { day: "Domenica", time: "9:00 – 22:00" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400">
      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <span className="text-white font-bold text-lg tracking-tight uppercase">
              Bar Il Portico
            </span>
            <p className="text-sm leading-relaxed max-w-xs text-neutral-500">
              Cocktails artigianali, musica live e aperitivi in piazza Sant&apos;Agostino,
              nel cuore di Carmagnola.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://wa.me/3428044609"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-white/40 transition-colors"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-white/40 transition-colors"
              >
                <Share2 size={14} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-5 pb-3 border-b border-white/10">
              Naviga
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Orari */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-5 pb-3 border-b border-white/10">
              Orari
            </h4>
            <ul className="flex flex-col gap-2">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="text-neutral-500">{h.day}</span>
                  <span className={h.time === "Chiuso" ? "text-neutral-700" : "text-neutral-300"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-5 pb-3 border-b border-white/10">
              Contatti
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="https://maps.google.com/?q=Piazza+Sant%27Agostino+18+Carmagnola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors leading-relaxed"
                >
                  → Piazza Sant&apos;Agostino, 18<br />10022 Carmagnola (TO)
                </a>
              </li>
              <li>
                <a
                  href="tel:+393428044609"
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  342 804 4609
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/3428044609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-white border border-white/20 px-4 py-2 inline-block hover:bg-white hover:text-black transition-colors"
                >
                  Prenota ora →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-700 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Bar Il Portico — Carmagnola (TO)</p>
          <p>P.IVA in fase di inserimento</p>
        </div>
      </div>
    </footer>
  );
}
