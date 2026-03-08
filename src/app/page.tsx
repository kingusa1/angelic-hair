"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FadeInUp,
  FadeIn,
  GoldLineReveal,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

/* ── Data ── */
const specialities = [
  { name: "Luxury Blondes", desc: "Dimensional, lived-in blonde colour with depth and movement", icon: "01" },
  { name: "Dimensional Brunettes", desc: "Rich, multi-tonal brunette transformations with luminosity", icon: "02" },
  { name: "Balayage & Foilyage", desc: "Hand-painted and foil-applied colour for seamless results", icon: "03" },
  { name: "Major Colour Transformations", desc: "Full head colour corrections and dramatic transformations", icon: "04" },
  { name: "Luxury Hair Extensions", desc: "Nano, Ultra Tips, Keratin Bond, Tape and Volume extensions", icon: "05" },
  { name: "Bridal & Event Styling", desc: "Destination weddings, bridal party, red carpet and events", icon: "06" },
  { name: "Glamorous Blow Dries", desc: "Hollywood waves, blow-out styling, special occasion hair", icon: "07" },
  { name: "K18 Bond Repair", desc: "Advanced molecular repair treatment for damaged hair", icon: "08" },
];

const signatureIncludes = [
  "Balayage, Babylights or Foilyage",
  "Cut & Blow Dry",
  "K18 Bond Repair Treatment",
  "K18 Mask Treatment",
  "Toner",
  "Luxury Finish Styling",
];

const testimonials = [
  { name: "Sophie", service: "Balayage", text: "Angelina completely transformed my hair. I walked in with flat, dull colour and left with the most beautiful dimensional blonde. Absolutely incredible.", rating: 5 },
  { name: "Fatima", service: "Bridal Styling", text: "My wedding day hair was beyond perfect. Angelina understood exactly what I wanted and made me feel like a queen. Everyone commented on how stunning it looked.", rating: 5 },
  { name: "Rachel", service: "Extensions", text: "The nano extensions are undetectable. I finally have the volume and length I have always dreamed of. Angelina is truly an artist with extensions.", rating: 5 },
  { name: "Amira", service: "Signature Transformation", text: "The full signature transformation experience was worth every penny. My hair has never looked or felt this healthy and beautiful.", rating: 5 },
];

const services = [
  { title: "Colour Services", desc: "Roots, highlights, balayage, foilyage and colour correction", href: "/services/colour", price: "From £50" },
  { title: "Hair Extensions", desc: "Nano, Ultra Tips, Keratin Bond and Tape extensions", href: "/services/extensions", price: "From £50/hr" },
  { title: "Bridal & Events", desc: "Luxury bridal styling and destination wedding hair", href: "/services/bridal", price: "From £50" },
  { title: "K18 Treatment", desc: "Advanced molecular bond repair for damaged hair", href: "/services/k18", price: "From £20" },
  { title: "Blow Dry & Styling", desc: "Hollywood waves, blow-outs and special occasion hair", href: "/services/styling", price: "From £35" },
];

/* ── Hero Scroll Parallax ── */
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Luxury hair transformation"
          fill
          className="object-cover"
          priority
          quality={75}
        />
      </div>

      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/40 to-[#0D0D0D]/90 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/50 via-transparent to-[#0D0D0D]/50 z-[1]" />

      {/* Gold atmospheric glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#C9A96E]/[0.04] blur-[120px] z-[2]" />

      {/* Noise texture */}
      <div className="absolute inset-0 z-[3] texture-overlay" />

      {/* Content */}
      <motion.div style={{ y: textY, opacity, scale }} className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/logo.svg"
            alt="Angelic Hair"
            width={480}
            height={220}
            className="h-32 md:h-44 lg:h-56 w-auto mx-auto mb-8"
            priority
          />
        </motion.div>

        {/* Tagline + line + location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-10" />

          <h1 className="font-accent italic text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 tracking-wide mb-5 leading-relaxed">
            Luxury Hair Transformations
          </h1>

          <p className="font-body text-[11px] tracking-[0.4em] uppercase text-[#C9A96E]/70 mb-16">
            By Angelina Hysko &middot; Leeds &amp; Dubai
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/book"
            className="group font-body text-[11px] font-semibold tracking-[0.22em] uppercase px-12 py-4.5 bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] text-[#0D0D0D] hover:from-[#E8C89E] hover:to-[#C9A96E] transition-all duration-500 btn-gold"
          >
            Book Your Transformation
          </Link>
          <Link
            href="/services"
            className="font-body text-[11px] tracking-[0.22em] uppercase px-12 py-4.5 border border-white/20 text-white/80 hover:border-[#C9A96E]/60 hover:text-[#C9A96E] hover:bg-white/5 transition-all duration-500"
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/25">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#C9A96E]/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ── Stats Bar ── */
function StatsBar() {
  return (
    <section className="bg-[#0D0D0D] border-y border-white/[0.04] py-16 lg:py-20 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { number: "14+", label: "Years of Excellence" },
            { number: "2", label: "Global Locations" },
            { number: "1000+", label: "Transformations" },
            { number: "5.0", label: "Client Rating" },
          ].map((stat, i) => (
            <FadeInUp key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-light text-gradient-gold mb-2">
                  {stat.number}
                </p>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-white/40">
                  {stat.label}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main Page ── */
export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <HeroSection />

      {/* ═══ STATS ═══ */}
      <StatsBar />

      {/* ═══ ABOUT ANGELINA ═══ */}
      <section className="bg-[#0D0D0D] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          {/* Left — Image */}
          <div className="relative h-[60vh] lg:h-auto overflow-hidden img-hover-zoom">
            <Image
              src="/about-bg.png"
              alt="Angelina Hysko hair artistry"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D0D]/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0D0D0D]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center py-20 px-8 lg:py-28 lg:px-20 relative">
            {/* Decorative corner */}
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#C9A96E]/15" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#C9A96E]/15" />

            <SlideInRight>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5">
                Meet the Artist
              </p>
            </SlideInRight>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white mb-10 leading-tight">
                About<br />
                <span className="text-gradient-gold">Angelina Hysko</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <p className="font-body text-[15px] leading-[2] text-white/60 mb-6 max-w-lg">
                A hair artist with over 14 years of professional experience spanning Greece, Leeds and Dubai. Angelina specialises in luxury colour transformations, hair extensions and bridal styling, working with European, Mediterranean and Middle Eastern hair textures.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.25}>
              <p className="font-body text-[15px] leading-[2] text-white/60 mb-12 max-w-lg">
                Her passion lies in creating beautiful, personalised transformations that leave every client feeling confident, glamorous and truly looked after.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.35}>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Colour Artist", "Extension Specialist", "Bridal Expert", "Luxury Stylist"].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[9px] tracking-[0.18em] uppercase px-5 py-2.5 border border-[#C9A96E]/20 text-[#C9A96E]/80 hover:bg-[#C9A96E]/10 hover:border-[#C9A96E]/40 transition-all duration-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeInUp>
            <FadeInUp delay={0.45}>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.15em] uppercase text-[#C9A96E] hover:text-[#E8C89E] transition-colors group"
              >
                Read Full Story
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ═══ SIGNATURE SPECIALITIES ═══ */}
      <section className="bg-[#111111] py-28 lg:py-40 relative overflow-hidden">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/10 to-transparent" />

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C9A96E]/[0.015] rounded-full blur-[150px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <div className="text-center mb-20">
            <FadeInUp>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/70 mb-5">What We Do</p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                Signature Specialities
              </h2>
            </FadeInUp>
            <GoldLineReveal className="w-20" />
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5" staggerDelay={0.06}>
            {specialities.map((item) => (
              <StaggerItem key={item.name}>
                <Link href="/services" className="group block h-full">
                  <div className="relative bg-white/[0.03] border border-white/[0.06] p-8 lg:p-9 text-center hover:bg-[#C9A96E]/[0.06] hover:border-[#C9A96E]/20 transition-all duration-500 h-full overflow-hidden rounded-lg card-hover">
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C9A96E]/0 group-hover:border-[#C9A96E]/25 transition-all duration-500" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C9A96E]/0 group-hover:border-[#C9A96E]/25 transition-all duration-500" />

                    {/* Number */}
                    <span className="font-heading text-3xl font-light text-[#C9A96E]/15 mb-3 block group-hover:text-[#C9A96E]/30 transition-colors duration-500">
                      {item.icon}
                    </span>

                    <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-white/70 font-medium mb-3 leading-relaxed group-hover:text-[#C9A96E] transition-colors duration-300">
                      {item.name}
                    </h3>

                    {/* Description reveals on hover */}
                    <p className="font-body text-[12px] text-white/30 leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ BRAND QUOTE ═══ */}
      <section className="bg-[#0D0D0D] py-32 lg:py-44 relative overflow-hidden">
        {/* Atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C9A96E]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute inset-0 texture-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#C9A96E]/15 mb-12">
              <svg className="w-6 h-6 text-[#C9A96E]/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849H10v10H0z" />
              </svg>
            </div>
          </FadeIn>
          <FadeInUp>
            <blockquote className="font-accent italic text-xl md:text-2xl lg:text-3xl font-normal leading-[1.9] text-white/85">
              My goal with every client is not only to transform their hair, but to make them feel confident, glamorous, and truly looked after.
            </blockquote>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <GoldLineReveal className="w-16 mt-14 mb-6" />
          </FadeInUp>
          <FadeInUp delay={0.25}>
            <p className="font-body text-[13px] tracking-[0.06em] text-[#C9A96E] mb-1">Angelina Hysko</p>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/25 mt-3">
              Founder &middot; @Angelicc.hair
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ SIGNATURE TRANSFORMATION ═══ */}
      <section className="bg-[#111111] py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/10 to-transparent" />

        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center relative z-10">
          <FadeInUp>
            <span className="inline-block font-body text-[9px] tracking-[0.35em] uppercase font-semibold px-6 py-2 bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] text-[#0D0D0D] rounded-full mb-10">
              Signature Service
            </span>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white mb-6 leading-[1.15]">
              The Angelina Signature<br />
              <span className="text-gradient-gold">Transformation</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <p className="font-body text-[14px] text-white/40 max-w-xl mx-auto mb-14 leading-relaxed">
              The flagship experience combining the most sought-after techniques for a complete luxury hair transformation.
            </p>
          </FadeInUp>

          {/* Dual Pricing */}
          <FadeInUp delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0 mb-14">
              <div className="sm:pr-14 sm:border-r border-white/10 py-4">
                <p className="font-heading text-[2.8rem] md:text-5xl font-light text-gradient-gold leading-none">From &pound;250</p>
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-white/35 mt-3">United Kingdom</p>
              </div>
              <div className="sm:pl-14 py-4">
                <p className="font-heading text-[2.8rem] md:text-5xl font-light text-gradient-gold leading-none">From 1,500 AED</p>
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-white/35 mt-3">Dubai, UAE</p>
              </div>
            </div>
          </FadeInUp>

          {/* Inclusions */}
          <FadeInUp delay={0.3}>
            <div className="border border-white/[0.06] bg-white/[0.02] py-8 px-6 lg:px-12 mb-14 rounded-xl">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-[#C9A96E]/60 mb-5">Includes</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                {signatureIncludes.map((item) => (
                  <span key={item} className="font-body text-[13px] text-white/50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]/60" />{item}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <Link
              href="/book"
              className="inline-block font-body text-[11px] font-semibold tracking-[0.22em] uppercase px-14 py-4.5 bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] text-[#0D0D0D] hover:from-[#E8C89E] hover:to-[#C9A96E] transition-all duration-500 btn-gold"
            >
              Book the Signature Transformation
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="bg-[#0D0D0D] py-28 lg:py-40 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <FadeInUp>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/70 mb-5">Explore</p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Our Services</h2>
            </FadeInUp>
            <GoldLineReveal className="w-20" />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link href={s.href} className="group block h-full">
                  <div className="relative bg-white/[0.02] border border-white/[0.06] p-10 lg:p-12 hover:border-[#C9A96E]/20 hover:bg-[#C9A96E]/[0.04] transition-all duration-500 h-full rounded-xl card-hover">
                    {/* Hover corner accents */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />

                    <h3 className="font-heading text-2xl md:text-[1.65rem] font-light text-white/85 mb-4 group-hover:text-[#C9A96E] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="font-body text-[13px] text-white/35 leading-relaxed mb-8">{s.desc}</p>

                    <div className="flex items-center justify-between">
                      <span className="font-accent italic text-lg text-[#C9A96E]">{s.price}</span>
                      <span className="font-body text-[10px] tracking-[0.15em] uppercase text-[#C9A96E]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5">
                        View
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.3} className="text-center mt-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.15em] uppercase text-[#C9A96E] hover:text-[#E8C89E] transition-colors group"
            >
              View All Services
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="bg-[#111111] py-28 lg:py-40 relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <FadeInUp>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/70 mb-5">Testimonials</p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Client Experiences</h2>
            </FadeInUp>
            <GoldLineReveal className="w-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <FadeInUp key={t.name} delay={i * 0.08}>
                <div className="relative bg-white/[0.02] border border-white/[0.06] p-9 lg:p-11 hover:border-[#C9A96E]/15 transition-all duration-500 rounded-xl card-hover">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6">
                    <svg className="w-8 h-8 text-[#C9A96E]/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849H10v10H0z" />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <svg key={idx} className="w-3.5 h-3.5 text-[#C9A96E]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="font-accent italic text-[15px] leading-[1.9] text-white/65 mb-8">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="font-body text-[12px] font-medium text-[#C9A96E]">{t.name}</span>
                    <span className="font-body text-[9px] tracking-[0.2em] uppercase text-white/30">{t.service}</span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY PREVIEW ═══ */}
      <section className="bg-[#0D0D0D] py-28 lg:py-36 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <FadeInUp>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/70 mb-5">Portfolio</p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Transformations</h2>
            </FadeInUp>
            <GoldLineReveal className="w-20" />
          </div>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4" staggerDelay={0.06}>
            {[
              { cat: "Brunettes", title: "Rich Brunette", img: "/gallery-brunette.png" },
              { cat: "Bridal", title: "Bridal Elegance", img: "/gallery-bridal.png" },
              { cat: "Extensions", title: "Volume & Length", img: "/gallery-extensions.png" },
              { cat: "Balayage", title: "Honey Balayage", img: "/about-bg.png" },
              { cat: "Blondes", title: "Luxury Blonde", img: "/hero-bg.png" },
              { cat: "Balayage", title: "Caramel Tones", img: "/gallery-brunette.png" },
              { cat: "Bridal", title: "Wedding Day Glam", img: "/gallery-bridal.png" },
              { cat: "Extensions", title: "Keratin Bonds", img: "/gallery-extensions.png" },
            ].map((item, idx) => (
              <StaggerItem key={`${item.title}-${idx}`}>
                <Link href="/gallery" className="group block relative aspect-[3/4] overflow-hidden rounded-lg img-hover-zoom">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover zoom-target"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={75}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-[#0D0D0D]/10 to-transparent" />

                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/10 transition-all duration-500" />

                  {/* Gold frame on hover */}
                  <div className="absolute inset-2 border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 rounded-md transition-all duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <span className="font-body text-[8px] tracking-[0.2em] uppercase text-[#C9A96E]/80 block mb-1">
                      {item.cat}
                    </span>
                    <h3 className="font-heading text-lg text-white leading-tight">{item.title}</h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="text-center mt-14">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.15em] uppercase px-10 py-3.5 border border-[#C9A96E]/25 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0D0D0D] transition-all duration-500 rounded-full btn-outline"
            >
              Explore the Gallery
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ DUAL LOCATION BOOKING ═══ */}
      <section className="bg-[#111111] py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/10 to-transparent" />
        <div className="absolute inset-0 texture-overlay" />

        {/* Atmospheric glow */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-[#C9A96E]/[0.02] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-[#C9A96E]/[0.015] rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <FadeInUp>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/50 mb-5">Two Locations</p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Book Your Appointment</h2>
            </FadeInUp>
            <GoldLineReveal className="w-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInUp delay={0.1}>
              <div className="relative border border-white/[0.06] bg-white/[0.02] p-10 lg:p-14 text-center hover:border-[#C9A96E]/20 transition-all duration-500 group rounded-xl card-hover">
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />

                {/* Location icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#C9A96E]/15 mb-6">
                  <svg className="w-5 h-5 text-[#C9A96E]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="font-body text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-semibold mb-2">Leeds, United Kingdom</h3>
                <p className="font-body text-[12px] text-white/50 mb-1">96–98 Harrogate Road</p>
                <p className="font-body text-[13px] text-white/35 leading-relaxed mb-10">
                  Chapel Allerton, Leeds LS7 4LZ
                </p>
                <Link
                  href="/book"
                  className="inline-block font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-10 py-3.5 bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] text-[#0D0D0D] hover:from-[#E8C89E] hover:to-[#C9A96E] transition-all duration-500 btn-gold rounded-full"
                >
                  Book in Leeds
                </Link>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="relative border border-white/[0.06] bg-white/[0.02] p-10 lg:p-14 text-center hover:border-[#C9A96E]/20 transition-all duration-500 group rounded-xl card-hover">
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500" />

                {/* Location icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#C9A96E]/15 mb-6">
                  <svg className="w-5 h-5 text-[#C9A96E]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="font-body text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-semibold mb-4">Dubai, United Arab Emirates</h3>
                <p className="font-body text-[13px] text-white/35 leading-relaxed mb-10">
                  Mobile hairdressing services available across Dubai
                </p>
                <a
                  href="https://www.instagram.com/angelicc.hair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-10 py-3.5 bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] text-[#0D0D0D] hover:from-[#E8C89E] hover:to-[#C9A96E] transition-all duration-500 btn-gold rounded-full"
                >
                  Enquire via Instagram
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ═══ INSTAGRAM FEED ═══ */}
      <section className="bg-[#0D0D0D] py-28 lg:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <FadeInUp>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/50 mb-5">Follow the Journey</p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">@Angelicc.hair</h2>
            </FadeInUp>
            <GoldLineReveal className="w-16 mb-8" />
            <FadeInUp delay={0.15}>
              <p className="font-body text-[14px] text-white/35 max-w-md mx-auto leading-relaxed">
                Follow for daily hair inspiration, transformation reveals and behind-the-scenes of luxury hair artistry.
              </p>
            </FadeInUp>
          </div>

          {/* Instagram-style Grid */}
          <StaggerContainer className="grid grid-cols-3 md:grid-cols-6 gap-2 lg:gap-3 mb-14" staggerDelay={0.05}>
            {[
              { img: "/gallery-brunette.png", alt: "Brunette transformation" },
              { img: "/gallery-bridal.png", alt: "Bridal styling" },
              { img: "/gallery-extensions.png", alt: "Hair extensions" },
              { img: "/hero-bg.png", alt: "Luxury blonde" },
              { img: "/about-bg.png", alt: "Balayage" },
              { img: "/gallery-brunette.png", alt: "Dimensional colour" },
            ].map((post, idx) => (
              <StaggerItem key={idx}>
                <a
                  href="https://www.instagram.com/angelicc.hair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative aspect-square overflow-hidden rounded-md"
                >
                  <Image
                    src={post.img}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 33vw, 16vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/40 transition-all duration-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Instagram CTA */}
          <FadeInUp className="text-center">
            <a
              href="https://www.instagram.com/angelicc.hair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.18em] uppercase px-10 py-3.5 border border-[#C9A96E]/25 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0D0D0D] transition-all duration-500 rounded-full btn-outline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow on Instagram
            </a>
          </FadeInUp>

          {/*
            TO ADD LIVE INSTAGRAM FEED:
            Replace the grid above with one of these free services:
            1. Elfsight (elfsight.com/instagram-feed-widget) — Add their script tag
            2. Behold (behold.so) — Free for 1 feed, add embed code
            3. LightWidget (lightwidget.com) — Free forever, paste iframe
            Example: <iframe src="//lightwidget.com/widgets/YOUR_ID.html" className="w-full" style={{border:0, overflow:'hidden', height:'400px'}} />
          */}
        </div>
      </section>
    </>
  );
}
