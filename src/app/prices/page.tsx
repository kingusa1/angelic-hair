"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp, GoldLineReveal, GoldCornerFrame } from "@/components/AnimatedSection";

const ukPrices = [
  { service: "Roots", price: "£50", category: "colour" },
  { service: "Full Length Tint", price: "£70", category: "colour" },
  { service: "Half Head Highlights", price: "£80", category: "colour" },
  { service: "Full Head Highlights", price: "£100", category: "colour" },
  { service: "Balayage", price: "From £120", category: "colour" },
  { service: "Toner", price: "£30", category: "colour" },
  { service: "Bleach Scalp Application", price: "£50", category: "colour" },
  { service: "Cut & Blow Dry", price: "£50", category: "styling" },
  { service: "Blow Dry", price: "£35", category: "styling" },
  { service: "Blow Dry with Extensions", price: "£80", category: "styling" },
  { service: "Extensions Installation", price: "From £50/hr", category: "extensions" },
  { service: "K18 Mask Therapy", price: "£20", category: "treatment" },
  { service: "Bridal Trial", price: "From £50", category: "bridal" },
];

const dubaiPrices = [
  { service: "Roots", price: "300 AED", category: "colour" },
  { service: "Full Tint", price: "450 AED", category: "colour" },
  { service: "Half Head Highlights", price: "600 AED", category: "colour" },
  { service: "Full Head Highlights", price: "750 AED", category: "colour" },
  { service: "Balayage", price: "From 900 AED", category: "colour" },
  { service: "Toner", price: "150 AED", category: "colour" },
  { service: "Cut & Blow Dry", price: "300 AED", category: "styling" },
  { service: "Blow Dry", price: "200 AED", category: "styling" },
  { service: "Blow Dry with Extensions", price: "400 AED", category: "styling" },
  { service: "Extensions Installation", price: "From 250 AED/hr", category: "extensions" },
  { service: "K18 Mask Treatment", price: "120 AED", category: "treatment" },
  { service: "Bridal Trial", price: "From 250 AED", category: "bridal" },
];

const signatureIncludes = [
  "Balayage, Babylights or Foilyage",
  "Cut & Blow Dry",
  "K18 Bond Repair Treatment",
  "K18 Mask Treatment",
  "Toner",
  "Luxury Finish Styling",
];

export default function PricesPage() {
  const [location, setLocation] = useState<"uk" | "dubai">("uk");
  const prices = location === "uk" ? ukPrices : dubaiPrices;

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
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">Investment</p>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">Price Guide</h1>
          </FadeInUp>
          <GoldLineReveal className="w-20" />
          <FadeInUp delay={0.15}>
            <p className="font-body text-[13px] text-white/35 mt-6 max-w-md mx-auto leading-relaxed">
              Transparent pricing for every service — select your location to view the full guide.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ LOCATION TOGGLE ═══ */}
      <section className="bg-[#0D0D0D] pt-16 pb-8">
        <div className="mx-auto max-w-md px-6 text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-6">Select Your Location</p>
          <div className="flex items-center justify-center gap-0">
            <button
              onClick={() => setLocation("uk")}
              className={`font-body text-[10px] tracking-[0.22em] uppercase px-8 py-3 border transition-all duration-400 ${
                location === "uk"
                  ? "bg-[#C9A96E] text-[#0D0D0D] border-[#C9A96E]"
                  : "bg-transparent text-white/40 border-[#C9A96E]/25 hover:border-[#C9A96E]/50"
              }`}
            >
              Leeds, UK
            </button>
            <button
              onClick={() => setLocation("dubai")}
              className={`font-body text-[10px] tracking-[0.22em] uppercase px-8 py-3 border border-l-0 transition-all duration-400 ${
                location === "dubai"
                  ? "bg-[#C9A96E] text-[#0D0D0D] border-[#C9A96E]"
                  : "bg-transparent text-white/40 border-[#C9A96E]/25 hover:border-[#C9A96E]/50"
              }`}
            >
              Dubai, UAE
            </button>
          </div>
        </div>
      </section>

      {/* ═══ PRICE LIST ═══ */}
      <section className="bg-[#0D0D0D] py-12 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {/* Location header */}
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-light text-[#C9A96E] mb-2">
                  {location === "uk" ? "UK Price Guide" : "Dubai Price Guide"}
                </h2>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40">
                  {location === "uk" ? "Leeds, United Kingdom" : "Dubai, United Arab Emirates"}
                </p>
              </div>

              {/* Price table */}
              <div className="relative border border-white/[0.06] bg-white/[0.02]">
                {/* Inner frame */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C9A96E]/12" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#C9A96E]/12" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#C9A96E]/12" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C9A96E]/12" />

                {prices.map((item, i) => (
                  <motion.div
                    key={item.service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                    className={`group flex items-center justify-between px-8 lg:px-10 py-5 hover:bg-white/[0.04] transition-colors duration-300 ${
                      i < prices.length - 1 ? "border-b border-[#C9A96E]/8" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-1 h-1 rounded-full bg-[#C9A96E]/30 group-hover:bg-[#C9A96E]/60 transition-colors duration-300" />
                      <span className="font-body text-[14px] text-white/80 group-hover:text-white transition-colors duration-300">{item.service}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden sm:block w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]/20" />
                      <span className="font-heading text-xl font-medium text-[#C9A96E]">{item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <FadeInUp delay={0.1}>
            <p className="font-accent italic text-[13px] text-white/35 text-center mt-10 leading-relaxed">
              All prices are a guide — a consultation may be required for bespoke colour work
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ SIGNATURE TRANSFORMATION ═══ */}
      <section className="bg-[#0D0D0D] py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-6 md:inset-10 border border-[#C9A96E]/8 pointer-events-none" />
        <GoldCornerFrame className="absolute inset-0" />
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C9A96E]/[0.03] rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <FadeInUp>
            <span className="inline-block font-body text-[9px] tracking-[0.35em] uppercase font-semibold px-6 py-2 bg-[#C9A96E] text-[#0D0D0D] mb-10">Signature Service</span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#D4B96A] mb-6 leading-tight">The Angelina Signature<br />Transformation</h2>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <p className="font-body text-[14px] leading-[1.8] text-white/40 mb-12 max-w-2xl mx-auto">
              The complete luxury hair experience — our most sought-after service combining premium techniques for a total transformation.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="border border-[#C9A96E]/15 bg-[#C9A96E]/5 py-8 px-6 lg:px-12 mb-12">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-white/30 mb-5">Includes</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                {signatureIncludes.map((item) => (
                  <span key={item} className="font-body text-[13px] text-[#D4B96A]/70 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C9A96E]/50" />{item}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0 mb-12">
              <div className="sm:pr-12 sm:border-r border-[#C9A96E]/20 py-4">
                <p className="font-heading text-4xl md:text-5xl font-light text-[#D4B96A]">From &pound;250</p>
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-white/30 mt-3">United Kingdom</p>
              </div>
              <div className="sm:pl-12 py-4">
                <p className="font-heading text-4xl md:text-5xl font-light text-[#D4B96A]">From 1,500 AED</p>
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-white/30 mt-3">Dubai, UAE</p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <Link href="/book" className="inline-block font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-14 py-4 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#C9A96E] transition-all duration-400 btn-gold">
              Book the Signature Transformation
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#0D0D0D] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInUp>
            <p className="font-heading text-3xl md:text-4xl font-light text-white/80 mb-4">Ready to transform your hair?</p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="font-body text-[13px] text-white/35 mb-8 leading-relaxed">
              Book your appointment or get in touch to discuss your hair goals.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-10 py-3.5 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-400 btn-gold">
                Book Now
              </Link>
              <Link href="/contact" className="font-body text-[10px] tracking-[0.22em] uppercase px-10 py-3.5 border border-[#C9A96E]/30 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0D0D0D] hover:border-[#C9A96E] transition-all duration-400">
                Contact Us
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
