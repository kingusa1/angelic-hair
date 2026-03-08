"use client";

import Link from "next/link";
import { FadeInUp, GoldLineReveal } from "@/components/AnimatedSection";

interface ServiceItem {
  name: string;
  ukPrice: string;
  dubaiPrice: string;
  description: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  intro: string;
  services: ServiceItem[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}

export function ServicePageTemplate({ badge, title, intro, services, faqs, relatedLinks }: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-8 md:inset-12 border border-[#C9A96E]/15 pointer-events-none" />
        <div className="absolute top-6 left-6 md:top-10 md:left-10 w-6 h-6 border-t border-l border-[#C9A96E]/40" />
        <div className="absolute top-6 right-6 md:top-10 md:right-10 w-6 h-6 border-t border-r border-[#C9A96E]/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <FadeInUp>
            <span className="inline-block font-body text-[9px] tracking-[0.3em] uppercase px-4 py-1 border border-[#C9A96E]/30 text-[#C9A96E] mb-6">{badge}</span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">{title}</h1>
            <GoldLineReveal className="w-16" />
          </FadeInUp>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#0D0D0D] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <FadeInUp>
            <p className="font-body text-[15px] leading-[1.9] text-white/80 text-center">{intro}</p>
          </FadeInUp>
        </div>
      </section>

      {/* Service List */}
      <section className="bg-white/[0.04] py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[#C9A96E] mb-4">Services &amp; Pricing</h2>
            <GoldLineReveal className="w-16" />
          </FadeInUp>

          <div className="space-y-0">
            {services.map((s, i) => (
              <FadeInUp key={s.name} delay={i * 0.05}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between py-7 border-b border-[#C9A96E]/15 gap-3">
                  <div className="lg:max-w-xl">
                    <h3 className="font-heading text-xl md:text-2xl font-light text-white/80 mb-1">{s.name}</h3>
                    <p className="font-body text-[13px] text-white/40 leading-relaxed">{s.description}</p>
                  </div>
                  <div className="flex items-center gap-6 lg:text-right">
                    <div>
                      <p className="font-heading text-xl text-[#C9A96E]">{s.ukPrice}</p>
                      <p className="font-body text-[9px] tracking-[0.2em] uppercase text-white/40">UK</p>
                    </div>
                    <div className="w-[1px] h-8 bg-[#C9A96E]/20" />
                    <div>
                      <p className="font-heading text-xl text-[#C9A96E]">{s.dubaiPrice}</p>
                      <p className="font-body text-[9px] tracking-[0.2em] uppercase text-white/40">Dubai</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.3} className="mt-12 text-center">
            <Link href="/book" className="inline-block font-body text-[11px] font-semibold tracking-[0.2em] uppercase px-12 py-4 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-300">
              Book This Service
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-[#0D0D0D] py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <FadeInUp className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-light text-[#C9A96E] mb-4">Frequently Asked</h2>
              <GoldLineReveal className="w-16" />
            </FadeInUp>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <FadeInUp key={i} delay={i * 0.06}>
                  <details className="group border border-[#C9A96E]/15 bg-white/[0.03]">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-body text-[14px] font-medium text-white/80 pr-4">{faq.q}</h3>
                      <span className="text-[#C9A96E] text-xl transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="font-body text-[13px] leading-[1.8] text-white/40">{faq.a}</p>
                    </div>
                  </details>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="bg-white/[0.04] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40 mb-6">Also Explore</p>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-body text-[11px] tracking-[0.15em] uppercase px-6 py-2.5 border border-[#C9A96E]/30 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0D0D0D] transition-all duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
