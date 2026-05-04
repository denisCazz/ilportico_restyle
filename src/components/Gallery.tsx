"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://duccarmagnola.it/wp-content/uploads/2023/11/DAN07152.jpg",
    alt: "Staff Bar Il Portico",
    className: "col-span-2 row-span-2",
    unoptimized: true,
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    alt: "Cocktail al bar",
    className: "",
    unoptimized: false,
  },
  {
    src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&q=80",
    alt: "Atmosfera serata",
    className: "",
    unoptimized: false,
  },
  {
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&q=80",
    alt: "Drink artigianali",
    className: "",
    unoptimized: false,
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
    alt: "Bar atmosfera serale",
    className: "",
    unoptimized: false,
  },
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80",
    alt: "Cocktail della casa",
    className: "",
    unoptimized: false,
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-24 lg:py-36 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Galleria</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Momenti & atmosfere
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-none overflow-hidden bg-neutral-900 ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                unoptimized={img.unoptimized}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
