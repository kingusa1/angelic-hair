"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp, GoldLineReveal, GoldCornerFrame } from "@/components/AnimatedSection";

const categories = ["All", "Blondes", "Brunettes", "Balayage", "Extensions", "Bridal", "Styling"];

const galleryItems = [
  { id: 1, category: "Blondes", title: "Luxury Blonde Waves", desc: "Full blonde transformation with dimensional waves and lived-in toning", image: "/gallery/gallery-1.jpg" },
  { id: 2, category: "Balayage", title: "Ash Caramel Balayage", desc: "Hand-painted ash and caramel tones through a dark base", image: "/gallery/gallery-2.jpg" },
  { id: 3, category: "Extensions", title: "Nano Bond Extensions", desc: "Ultra-fine nano bond extensions for seamless length and volume", image: "/gallery/gallery-3.jpg" },
  { id: 4, category: "Bridal", title: "Bridal Hollywood Waves", desc: "Glamorous Hollywood waves with crystal hair accessory", image: "/gallery/gallery-4.jpg" },
  { id: 5, category: "Brunettes", title: "Dimensional Brunette", desc: "Long, voluminous brunette curls with gorgeous movement", image: "/gallery/gallery-5.jpg" },
  { id: 6, category: "Blondes", title: "Blonde Balayage", desc: "Warm blonde balayage with soft waves and natural root blend", image: "/gallery/gallery-6.jpg" },
  { id: 7, category: "Balayage", title: "Ash Blonde Foilyage", desc: "Cool-toned ash blonde foilyage for seamless dimension", image: "/gallery/gallery-7.jpg" },
  { id: 8, category: "Styling", title: "Hollywood Waves", desc: "Classic glamorous Hollywood waves blow dry finish", image: "/gallery/gallery-8.jpg" },
  { id: 9, category: "Bridal", title: "Bridal Half-Up", desc: "Romantic half-up style with crystal vine hair accessory", image: "/gallery/gallery-9.jpg" },
  { id: 10, category: "Brunettes", title: "Chocolate Caramel", desc: "Rich chocolate brunette with caramel highlights and waves", image: "/gallery/gallery-10.jpg" },
  { id: 11, category: "Blondes", title: "Babylights Blend", desc: "Natural brown-to-blonde babylights for a sun-kissed glow", image: "/gallery/gallery-11.jpg" },
  { id: 12, category: "Balayage", title: "Caramel Ombre", desc: "Warm caramel balayage ombre blended through a dark base", image: "/gallery/gallery-12.jpg" },
  { id: 13, category: "Bridal", title: "Bridal Updo", desc: "Elegant curly updo with highlighted tendrils", image: "/gallery/gallery-13.jpg" },
  { id: 14, category: "Brunettes", title: "Brunette Bob", desc: "Chic dark brunette bob with soft face-framing waves", image: "/gallery/gallery-14.jpg" },
  { id: 15, category: "Styling", title: "Glamour Waves", desc: "Hollywood glamour waves with beautiful side sweep", image: "/gallery/gallery-15.jpg" },
  { id: 16, category: "Bridal", title: "Blonde Bridal", desc: "Blonde bridal half-up with pearl and flower hair accessories", image: "/gallery/gallery-16.jpg" },
  { id: 17, category: "Blondes", title: "Golden Highlights", desc: "Long golden blonde highlights with bouncy curled ends", image: "/gallery/gallery-17.jpg" },
  { id: 18, category: "Brunettes", title: "Rich Chocolate", desc: "Deep rich chocolate brunette waves with glossy finish", image: "/gallery/gallery-18.jpg" },
  { id: 19, category: "Balayage", title: "Honey Balayage", desc: "Warm honey tones with long flowing waves", image: "/gallery/gallery-19.jpg" },
  { id: 20, category: "Bridal", title: "Blonde Curly Half-Up", desc: "Beautiful blonde curly half-up with crystal flower accessory", image: "/gallery/gallery-20.jpg" },
  { id: 21, category: "Bridal", title: "Gold Leaf Updo", desc: "Romantic brunette updo with gold leaf and pearl accessory", image: "/gallery/gallery-21.jpg" },
  { id: 22, category: "Extensions", title: "Nano Tip Application", desc: "Nano tip extensions installation for natural-looking fullness", image: "/gallery/gallery-22.jpg" },
  { id: 23, category: "Bridal", title: "Twisted Ponytail", desc: "Elegant blonde twisted low ponytail with floral accessory", image: "/gallery/gallery-23.jpg" },
  { id: 24, category: "Brunettes", title: "Chocolate Waves", desc: "Long flowing dark chocolate brunette waves", image: "/gallery/gallery-24.jpg" },
  { id: 25, category: "Balayage", title: "Caramel Brunette", desc: "Brunette balayage with warm caramel face-framing tones", image: "/gallery/gallery-25.jpg" },
  { id: 26, category: "Balayage", title: "Warm Honey Waves", desc: "Gorgeous warm honey balayage waves from behind", image: "/gallery/gallery-26.jpg" },
  { id: 27, category: "Balayage", title: "Dark Caramel Blend", desc: "Dark brunette with caramel balayage ombre ends", image: "/gallery/gallery-27.jpg" },
  { id: 28, category: "Balayage", title: "Golden Balayage", desc: "Brown to golden blonde balayage with beautiful shine", image: "/gallery/gallery-28.jpg" },
  { id: 29, category: "Blondes", title: "Clean Blonde", desc: "Bright clean blonde with soft medium-length movement", image: "/gallery/gallery-29.jpg" },
  { id: 30, category: "Styling", title: "Curly Updo", desc: "Elegant curly updo with golden highlighted tendrils", image: "/gallery/gallery-30.jpg" },
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
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-[#0D0D0D]/20 to-transparent" />
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

          {/* ═══ TRANSFORMATION VIDEOS ═══ */}
          <div className="mt-20 mb-16">
            <FadeInUp className="text-center mb-10">
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-4">Behind the Chair</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-[#C9A96E] mb-3">Transformation Videos</h2>
              <GoldLineReveal className="w-16" />
            </FadeInUp>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <FadeInUp key={n} delay={n * 0.05}>
                  <div className="relative aspect-[9/16] bg-[#111111] overflow-hidden group">
                    <video
                      src={`/videos/transformation-${n}.mp4`}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e) => { const v = e.target as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-12 h-12 border border-[#C9A96E]/50 rounded-full flex items-center justify-center bg-[#0D0D0D]/40">
                        <svg className="w-5 h-5 text-[#C9A96E] ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

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
