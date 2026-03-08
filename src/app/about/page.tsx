"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FadeIn, GoldLineReveal, GoldCornerFrame, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const milestones = [
  { year: "2010", text: "Began professional training in Greece, mastering European colour techniques and the foundations of luxury hairdressing" },
  { year: "2014", text: "Expanded expertise to Mediterranean and Middle Eastern hair textures, building a loyal international clientele" },
  { year: "2018", text: "Relocated to Leeds, UK — launched Angelic Hair as a premium personal brand dedicated to luxury hair transformations" },
  { year: "2022", text: "Expanded to Dubai, UAE — offering mobile hairdressing and destination bridal styling across two continents" },
  { year: "Now", text: "14+ years of excellence — creating beautiful transformations for clients between Leeds and Dubai" },
];

const credentials = [
  { label: "Colour Artist", desc: "Balayage, foilyage, blondes, brunettes and colour correction" },
  { label: "Extension Specialist", desc: "Nano, Ultra Tips, Keratin Bond and Tape extensions" },
  { label: "Bridal Expert", desc: "Destination weddings, bridal parties and red carpet styling" },
  { label: "Luxury Stylist", desc: "Hollywood waves, blow-outs and occasion hair" },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-[#0D0D0D] pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-6 md:inset-10 border border-[#C9A96E]/12 pointer-events-none" />
        <GoldCornerFrame className="absolute inset-0" />
        <div className="absolute inset-0 texture-overlay" />

        {/* Atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9A96E]/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <FadeInUp>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">The Artist</p>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">About Angelina</h1>
          </FadeInUp>
          <GoldLineReveal className="w-20" />
        </div>
      </section>

      {/* ═══ BIO SPLIT ═══ */}
      <section className="grid grid-cols-1 lg:grid-cols-5 min-h-[75vh]">
        {/* Left — Dark Panel */}
        <div className="lg:col-span-2 bg-[#111111] flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden">
          <div className="absolute inset-5 border border-[#C9A96E]/10 pointer-events-none" />
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#C9A96E]/20" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#C9A96E]/20" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#C9A96E]/20" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#C9A96E]/20" />

          {/* Atmospheric glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#C9A96E]/[0.04] rounded-full blur-[80px]" />

          <FadeIn>
            <Image src="/logo.svg" alt="AH" width={240} height={110} className="h-28 w-auto mb-8 opacity-60" />
          </FadeIn>
          <FadeInUp delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#D4B96A] text-center mb-3">Angelina Hysko</h2>
          </FadeInUp>
          <GoldLineReveal className="w-12 my-6" />
          <FadeInUp delay={0.2}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 text-center mb-8">14+ Years of Excellence</p>
          </FadeInUp>
          <FadeInUp delay={0.25}>
            <div className="w-10 h-[1px] bg-[#C9A96E]/20 mx-auto mb-4" />
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-white/25 text-center mb-8">Greece &middot; Leeds &middot; Dubai</p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <div className="flex flex-wrap justify-center gap-2">
              {["Colour Artist", "Extension Specialist", "Bridal Expert", "Luxury Stylist"].map((tag) => (
                <span key={tag} className="font-body text-[8px] tracking-[0.18em] uppercase px-4 py-1.5 border border-[#C9A96E]/25 text-[#C9A96E]/70">{tag}</span>
              ))}
            </div>
          </FadeInUp>
        </div>

        {/* Right — Ivory Panel */}
        <div className="lg:col-span-3 bg-[#0D0D0D] flex flex-col justify-center py-24 px-8 lg:px-16 xl:px-20 relative">
          <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-[#C9A96E]/12" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-[#C9A96E]/12" />

          <SlideInRight>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">Her Story</p>
          </SlideInRight>
          <FadeInUp delay={0.05}>
            <p className="font-body text-[15px] leading-[2] text-white/80 mb-6 max-w-xl">
              A hair artist with over 14 years of professional experience, Angelina specialises in luxury colour transformations, hair extensions and bridal styling. Originally trained in Greece, she brings a rare depth of expertise across European, Mediterranean and Middle Eastern hair textures.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <p className="font-body text-[15px] leading-[2] text-white/80 mb-6 max-w-xl">
              Her passion lies in creating beautiful transformations — from dimensional blondes to rich brunettes and luxurious extension work. Each client receives a completely personalised experience, with Angelina taking the time to understand their lifestyle, preferences and hair goals.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.25}>
            <p className="font-body text-[15px] leading-[2] text-white/80 mb-10 max-w-xl">
              Now working between Leeds and Dubai, she offers premium services in both locations, including destination bridal styling for weddings across the UK, UAE and internationally. Her approach combines technical precision with artistic vision — always prioritising the health and integrity of the hair.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.35}>
            <blockquote className="font-accent italic text-lg text-[#C9A96E] leading-[1.8] pl-6 border-l-[1.5px] border-[#C9A96E]/40 max-w-lg">
              &ldquo;My goal with every client is not only to transform their hair, but to make them feel confident, glamorous, and truly looked after.&rdquo;
            </blockquote>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ CREDENTIALS ═══ */}
      <section className="bg-[#111111] py-28 lg:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/15 to-transparent" />

        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <FadeInUp>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">Expertise</p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-[#C9A96E] mb-6">Areas of Specialism</h2>
            </FadeInUp>
            <GoldLineReveal className="w-20" />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.08}>
            {credentials.map((c) => (
              <StaggerItem key={c.label}>
                <div className="relative bg-white/[0.03] border border-white/[0.06] p-9 hover:border-[#C9A96E]/30 transition-all duration-500 group">
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />

                  <h3 className="font-heading text-2xl font-light text-white/80 mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">{c.label}</h3>
                  <p className="font-body text-[13px] text-white/40 leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="bg-[#0D0D0D] py-28 lg:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/15 to-transparent" />

        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <FadeInUp>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">Career</p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-[#C9A96E] mb-6">The Journey</h2>
            </FadeInUp>
            <GoldLineReveal className="w-20" />
          </div>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <FadeInUp key={m.year} delay={i * 0.06}>
                <div className="flex gap-8 lg:gap-12 py-9 border-b border-[#C9A96E]/12 last:border-b-0 group">
                  <span className="font-heading text-3xl md:text-4xl font-light text-[#C9A96E]/50 group-hover:text-[#C9A96E] transition-colors duration-400 min-w-[85px]">{m.year}</span>
                  <p className="font-body text-[14px] leading-[1.9] text-white/80 pt-2">{m.text}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#0D0D0D] py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-6 md:inset-10 border border-[#C9A96E]/8 pointer-events-none" />
        <GoldCornerFrame className="absolute inset-0" />
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9A96E]/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <FadeInUp>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#D4B96A] mb-6">Ready for Your Transformation?</h2>
          </FadeInUp>
          <GoldLineReveal className="w-20 mb-10" />
          <FadeInUp delay={0.15}>
            <p className="font-body text-[14px] text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
              Book a consultation with Angelina and begin your luxury hair journey.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-12 py-4 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-400 btn-gold">
                Book with Angelina
              </Link>
              <Link href="/services" className="font-body text-[10px] tracking-[0.22em] uppercase px-12 py-4 border border-[#C9A96E]/30 text-[#C9A96E]/80 hover:border-[#C9A96E]/60 hover:text-[#D4B96A] transition-all duration-400">
                View Services
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
