"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Chi siamo", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Eventi", href: "/eventi" },
  { label: "Galleria", href: "/galleria" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZrAT1pY1c8vKj5mX4JLciDJOFEfqs3-xCw&s"
            alt="Bar Il Portico logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
            unoptimized
          />
          <span
            className="font-semibold tracking-tight text-sm uppercase text-white"
          >
            Il Portico
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest font-medium transition-colors text-white hover:opacity-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/3428044609"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-medium px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            Prenota
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Apri menu"
        >
          {open ? (
            <X className="text-white" size={22} />
          ) : (
            <Menu className="text-white" size={22} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest font-medium text-white hover:text-neutral-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/3428044609"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest font-medium px-4 py-3 bg-gray-900 text-white rounded-full text-center hover:bg-gray-700 transition-colors"
          >
            Prenota su WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
