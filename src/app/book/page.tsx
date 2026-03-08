"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeInUp, GoldLineReveal, GoldCornerFrame } from "@/components/AnimatedSection";

export default function BookPage() {
  const [location, setLocation] = useState<"leeds" | "dubai">("leeds");

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
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">Appointments</p>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">Book Now</h1>
          </FadeInUp>
          <GoldLineReveal className="w-20" />
        </div>
      </section>

      {/* ═══ LOCATION SELECTOR ═══ */}
      <section className="bg-[#0D0D0D] pt-16 pb-8">
        <div className="mx-auto max-w-md px-6 text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-6">Select Your Location</p>
          <div className="flex items-center justify-center gap-0">
            <button
              onClick={() => setLocation("leeds")}
              className={`font-body text-[10px] tracking-[0.22em] uppercase px-8 py-3 border transition-all duration-400 ${
                location === "leeds"
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

      {/* ═══ BOOKING AREA ═══ */}
      <section className="bg-[#0D0D0D] py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="relative border border-[#C9A96E]/15 bg-white/[0.02] p-12 lg:p-16 text-center min-h-[400px] flex flex-col items-center justify-center">
            {/* Inner gold frame */}
            <div className="absolute inset-4 border border-[#C9A96E]/8 pointer-events-none" />
            <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#C9A96E]/15" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#C9A96E]/15" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#C9A96E]/15" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#C9A96E]/15" />

            <div className="relative z-10">
              {location === "leeds" ? (
                <>
                  <FadeInUp>
                    <h2 className="font-heading text-3xl md:text-4xl font-light text-[#C9A96E] mb-4">
                      Book in Leeds
                    </h2>
                  </FadeInUp>
                  <FadeInUp delay={0.1}>
                    <p className="font-body text-[14px] text-white/80 font-medium mb-2">
                      96–98 Harrogate Road, Chapel Allerton, Leeds LS7 4LZ
                    </p>
                    <p className="font-body text-[13px] text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
                      Select your preferred service, date and time on Fresha — our secure booking platform.
                    </p>
                  </FadeInUp>

                  <FadeInUp delay={0.2}>
                    <a
                      href="https://www.fresha.com/book-now/angelic-hairstyles-g0rg44br/all-offer?share=true&pId=122566"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-12 py-4 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-400 btn-gold mb-6"
                    >
                      Book on Fresha
                    </a>
                    <p className="font-body text-[11px] text-white/25">
                      Secure booking powered by{" "}
                      <a href="https://www.fresha.com/book-now/angelic-hairstyles-g0rg44br/all-offer?share=true&pId=122566" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E]/70 hover:text-[#C9A96E] transition-colors underline">
                        Fresha
                      </a>
                    </p>
                  </FadeInUp>
                </>
              ) : (
                <>
                  <FadeInUp>
                    <h2 className="font-heading text-3xl md:text-4xl font-light text-[#C9A96E] mb-4">
                      Book in Dubai
                    </h2>
                  </FadeInUp>
                  <FadeInUp delay={0.1}>
                    <div className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase px-5 py-2 border border-[#C9A96E]/25 text-[#C9A96E] mb-6">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Mobile Hairdressing
                    </div>
                    <p className="font-body text-[13px] text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
                      Angelina comes to you. For Dubai appointments, message directly on Instagram to discuss your requirements and arrange a visit.
                    </p>
                  </FadeInUp>

                  <FadeInUp delay={0.2}>
                    <a
                      href="https://www.instagram.com/angelicc.hair/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-12 py-4 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-400 btn-gold mb-6"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      Enquire on Instagram
                    </a>
                    <p className="font-body text-[11px] text-white/25">
                      @Angelicc.hair
                    </p>
                  </FadeInUp>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GOOGLE MAPS — Leeds Location ═══ */}
      <section className="bg-[#0D0D0D] pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <FadeInUp className="text-center mb-10">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-3">Our Salon</p>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#C9A96E]">96–98 Harrogate Road, Chapel Allerton</h3>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="border border-[#C9A96E]/15 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=96-98+Harrogate+Road,+Chapel+Allerton,+Leeds+LS7+4LZ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Angelic Hair Salon — 96–98 Harrogate Road, Chapel Allerton, Leeds"
                className="w-full"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ ALTERNATIVE CONTACT ═══ */}
      <section className="bg-[#0D0D0D] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-6 md:inset-10 border border-[#C9A96E]/8 pointer-events-none" />
        <GoldCornerFrame className="absolute inset-0" />
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#C9A96E]/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <FadeInUp>
            <p className="font-heading text-2xl md:text-3xl font-light text-[#D4B96A] mb-4">Prefer to get in touch directly?</p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="font-body text-[13px] text-white/35 mb-8 leading-relaxed">
              Send a message via Instagram and Angelina will get back to you personally.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://www.instagram.com/angelicc.hair/" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] tracking-[0.18em] uppercase px-8 py-3 border border-[#C9A96E]/30 text-[#C9A96E]/80 hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#0D0D0D] transition-all duration-400">
                Message on Instagram
              </a>
              <Link href="/contact" className="font-body text-[10px] tracking-[0.18em] uppercase px-8 py-3 border border-[#C9A96E]/30 text-[#C9A96E]/80 hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#0D0D0D] transition-all duration-400">
                Contact Page
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
