"use client";

import Link from "next/link";
import { FadeInUp, GoldLineReveal, GoldCornerFrame, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const categories = [
  {
    title: "Colour Services",
    desc: "Roots, tints, highlights, balayage, foilyage and colour corrections — tailored to your unique hair goals.",
    href: "/services/colour",
    price: "From \u00a350",
    num: "01",
  },
  {
    title: "Hair Extensions",
    desc: "Nano, Ultra Tips, Keratin Bond and Tape extensions for natural-looking volume and length transformations.",
    href: "/services/extensions",
    price: "From \u00a350/hr",
    num: "02",
  },
  {
    title: "Bridal & Events",
    desc: "Luxury bridal hairstyling, bridal party, destination weddings, red carpet and special event styling.",
    href: "/services/bridal",
    price: "Trial From \u00a350",
    num: "03",
  },
  {
    title: "K18 Treatments",
    desc: "Advanced molecular bond repair treatment that reverses damage from bleach, colour and heat styling.",
    href: "/services/k18",
    price: "From \u00a320",
    num: "04",
  },
  {
    title: "Blow Dry & Styling",
    desc: "Glamorous blow dries, Hollywood waves, and luxury finish styling for any occasion.",
    href: "/services/styling",
    price: "From \u00a335",
    num: "05",
  },
];

const signatureIncludes = [
  "Balayage, Babylights or Foilyage",
  "Cut & Blow Dry",
  "K18 Bond Repair Treatment",
  "K18 Mask Treatment",
  "Toner",
  "Luxury Finish Styling",
];

export default function ServicesPage() {
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
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">What We Offer</p>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">Our Services</h1>
          </FadeInUp>
          <GoldLineReveal className="w-20" />
        </div>
      </section>

      {/* ═══ SERVICE CATEGORIES ═══ */}
      <section className="bg-[#0D0D0D] py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="space-y-5">
            {categories.map((cat, i) => (
              <FadeInUp key={cat.title} delay={i * 0.06}>
                <Link href={cat.href} className="group block">
                  <div className="relative bg-white/[0.03] border border-[#C9A96E]/12 p-9 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 hover:border-[#C9A96E]/35 hover:bg-white/[0.06] transition-all duration-500">
                    {/* Corner accents on hover */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />

                    <div className="flex items-start gap-6 lg:max-w-2xl">
                      <span className="font-heading text-3xl font-light text-[#C9A96E]/25 hidden sm:block">{cat.num}</span>
                      <div>
                        <h2 className="font-heading text-3xl md:text-4xl font-light text-white/80 mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">{cat.title}</h2>
                        <p className="font-body text-[14px] leading-[1.8] text-white/40">{cat.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 lg:flex-col lg:items-end lg:gap-3 pl-12 sm:pl-16 lg:pl-0">
                      <p className="font-accent italic text-xl text-[#C9A96E]">{cat.price}</p>
                      <span className="font-body text-[10px] tracking-[0.15em] uppercase text-[#C9A96E] flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-all duration-300">
                        View Details
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
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
              The flagship service — a complete luxury hair experience combining the most sought-after techniques for a total transformation.
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
    </>
  );
}
