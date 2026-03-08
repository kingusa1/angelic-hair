"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp, GoldLineReveal, GoldCornerFrame } from "@/components/AnimatedSection";

const categories = ["All", "Blondes", "Brunettes", "Balayage", "Extensions", "Bridal"];

const galleryItems = [
  { id: 1, category: "Blondes", title: "Luxury Blonde Transformation", desc: "Full head highlights with dimensional toning" },
  { id: 2, category: "Balayage", title: "Honey Balayage", desc: "Hand-painted warm honey tones through brunette base" },
  { id: 3, category: "Extensions", title: "Volume & Length", desc: "Nano extensions for natural fullness and length" },
  { id: 4, category: "Bridal", title: "Bridal Elegance", desc: "Classic bridal updo with soft face-framing pieces" },
  { id: 5, category: "Brunettes", title: "Dimensional Brunette", desc: "Rich, multi-tonal brunette with caramel highlights" },
  { id: 6, category: "Blondes", title: "Icy Platinum", desc: "Cool-toned platinum blonde with lived-in root" },
  { id: 7, category: "Balayage", title: "Foilyage Blend", desc: "Foil-applied colour for maximum brightness and blend" },
  { id: 8, category: "Extensions", title: "Keratin Bond Extensions", desc: "Premium keratin bonds for seamless integration" },
  { id: 9, category: "Bridal", title: "Destination Wedding", desc: "Glamorous Hollywood waves for Dubai wedding" },
  { id: 10, category: "Brunettes", title: "Chocolate Gloss", desc: "Deep chocolate tones with mirror-shine gloss treatment" },
  { id: 11, category: "Blondes", title: "Babylights", desc: "Ultra-fine babylights for a natural, sun-kissed look" },
  { id: 12, category: "Balayage", title: "Caramel Balayage", desc: "Warm caramel tones blended through a dark base" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-[#0D0D0D] pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-6 md:inset-10 border border-[#C9A96E]/12 pointer-events-none" />
        <GoldCornerFrame className="absolute inset-0" />
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9A96E]/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <FadeInUp>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">Portfolio</p>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">Gallery</h1>
          </FadeInUp>
          <GoldLineReveal className="w-20" />
        </div>
      </section>

      {/* ═══ FILTER ═══ */}
      <section className="bg-[#0D0D0D] pt-14 pb-6">
        <div className="mx-auto max-w-4xl px-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-[9px] tracking-[0.18em] uppercase px-5 py-2.5 border transition-all duration-400 ${
                active === cat
                  ? "bg-[#C9A96E] text-[#0D0D0D] border-[#C9A96E]"
                  : "bg-transparent text-white/40 border-[#C9A96E]/20 hover:border-[#C9A96E]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ═══ GRID ═══ */}
      <section className="bg-[#0D0D0D] py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  className="group relative bg-[#111111] aspect-[3/4] flex items-end overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8A7455]/30 via-[#3D2B0E]/50 to-[#2C1F0A]/70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F0A]/85 via-transparent to-transparent" />
                  <div className="absolute inset-2 border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/25 transition-all duration-500 pointer-events-none" />
                  <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/10 transition-all duration-500" />

                  <div className="relative z-10 p-4 lg:p-5 w-full">
                    <span className="font-body text-[8px] tracking-[0.2em] uppercase text-[#C9A96E]/70 mb-1.5 block">{item.category}</span>
                    <h3 className="font-heading text-lg lg:text-xl text-white mb-1 leading-tight">{item.title}</h3>
                    <p className="font-body text-[11px] text-white/40 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-16">
            <FadeInUp>
              <p className="font-accent italic text-[15px] text-white/40 mb-6">
                Follow @Angelicc.hair for daily transformation reveals
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <a
                href="https://www.instagram.com/angelicc.hair/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body text-[10px] tracking-[0.18em] uppercase px-10 py-3.5 border border-[#C9A96E]/40 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0D0D0D] transition-all duration-400"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                See More on Instagram
              </a>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
