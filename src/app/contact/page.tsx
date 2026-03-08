"use client";

import { useState } from "react";
import { FadeInUp, GoldLineReveal, GoldCornerFrame } from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", location: "leeds", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(`Angelic Hair Enquiry — ${formData.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location === "leeds" ? "Leeds, UK" : "Dubai, UAE"}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:angelichairbyah@gmail.com?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
  };

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
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">Reach Out</p>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">Contact</h1>
          </FadeInUp>
          <GoldLineReveal className="w-20" />
          <FadeInUp delay={0.15}>
            <p className="font-body text-[13px] text-white/35 mt-6 max-w-md mx-auto leading-relaxed">
              Whether you have a question or you&apos;re ready to book — we&apos;d love to hear from you.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ LOCATIONS + FORM ═══ */}
      <section className="bg-[#0D0D0D] py-24 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

            {/* Left — Locations */}
            <div>
              <FadeInUp>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-white/80 mb-3">Get in Touch</h2>
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-10" />
              </FadeInUp>

              {/* Leeds */}
              <FadeInUp delay={0.1}>
                <div className="group relative mb-10 pb-10 border-b border-[#C9A96E]/15">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 border border-[#C9A96E]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold mb-3">Leeds, United Kingdom</h3>
                      <p className="font-body text-[14px] text-white/80 leading-[1.8] font-medium">
                        96–98 Harrogate Road<br />Chapel Allerton, Leeds LS7 4LZ
                      </p>
                      <p className="font-body text-[13px] text-white/40 leading-[1.8] mt-2">
                        Salon appointments available. Book via Fresha or contact Angelina directly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 ml-12">
                    <a href="https://www.instagram.com/angelicc.hair/" target="_blank" rel="noopener noreferrer" className="font-body text-[11px] tracking-[0.1em] text-[#C9A96E] hover:text-[#B8943D] transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      @Angelicc.hair
                    </a>
                  </div>
                </div>
              </FadeInUp>

              {/* Dubai */}
              <FadeInUp delay={0.2}>
                <div className="group relative mb-12">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 border border-[#C9A96E]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold mb-3">Dubai, United Arab Emirates</h3>
                      <p className="font-body text-[14px] text-white/80 leading-[1.8] font-medium">
                        Mobile Hairdressing
                      </p>
                      <p className="font-body text-[13px] text-white/40 leading-[1.8] mt-2">
                        Angelina comes to you. Mobile luxury hair services available across Dubai. Get in touch via Instagram to arrange your appointment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 ml-12">
                    <a href="https://www.instagram.com/angelicc.hair/" target="_blank" rel="noopener noreferrer" className="font-body text-[11px] tracking-[0.1em] text-[#C9A96E] hover:text-[#B8943D] transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      @Angelicc.hair
                    </a>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <a href="https://www.fresha.com/book-now/angelic-hairstyles-g0rg44br/all-offer?share=true&pId=122566" target="_blank" rel="noopener noreferrer" className="inline-block font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-10 py-3.5 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-400 btn-gold">
                    Book on Fresha
                  </a>
                  <a href="https://www.instagram.com/angelicc.hair/" target="_blank" rel="noopener noreferrer" className="inline-block font-body text-[10px] tracking-[0.22em] uppercase px-10 py-3.5 border border-[#C9A96E]/30 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0D0D0D] hover:border-[#C9A96E] transition-all duration-400">
                    Message on Instagram
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right — Form */}
            <div>
              <FadeInUp>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-white/80 mb-3">Send an Enquiry</h2>
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-10" />
              </FadeInUp>

              {submitted ? (
                <FadeInUp>
                  <div className="relative border border-[#C9A96E]/20 bg-white/[0.02] p-12 lg:p-16 text-center">
                    <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A96E]/15" />
                    <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A96E]/15" />
                    <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A96E]/15" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A96E]/15" />
                    <div className="w-12 h-12 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="font-heading text-3xl text-[#C9A96E] mb-4">Thank You</h3>
                    <p className="font-body text-[14px] text-white/40 leading-relaxed">Your enquiry has been prepared. Please send the email from your mail client and Angelina will get back to you shortly.</p>
                  </div>
                </FadeInUp>
              ) : (
                <FadeInUp delay={0.1}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-[10px] tracking-[0.22em] uppercase text-white/40 block mb-2.5">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[#111111] border border-white/[0.08] text-white/80 font-body text-[14px] focus:border-[#C9A96E] focus:outline-none transition-all duration-300 placeholder:text-white/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="font-body text-[10px] tracking-[0.22em] uppercase text-white/40 block mb-2.5">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[#111111] border border-white/[0.08] text-white/80 font-body text-[14px] focus:border-[#C9A96E] focus:outline-none transition-all duration-300 placeholder:text-white/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-[10px] tracking-[0.22em] uppercase text-white/40 block mb-2.5">Location</label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[#111111] border border-white/[0.08] text-white/80 font-body text-[14px] focus:border-[#C9A96E] focus:outline-none transition-all duration-300"
                        >
                          <option value="leeds">Leeds, United Kingdom</option>
                          <option value="dubai">Dubai, UAE (Mobile)</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-body text-[10px] tracking-[0.22em] uppercase text-white/40 block mb-2.5">Interested In</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[#111111] border border-white/[0.08] text-white/80 font-body text-[14px] focus:border-[#C9A96E] focus:outline-none transition-all duration-300"
                        >
                          <option value="">Select a service...</option>
                          <option value="colour">Colour Services</option>
                          <option value="extensions">Hair Extensions</option>
                          <option value="bridal">Bridal &amp; Events</option>
                          <option value="k18">K18 Treatment</option>
                          <option value="styling">Blow Dry &amp; Styling</option>
                          <option value="signature">Signature Transformation</option>
                          <option value="other">Other / General Enquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-[10px] tracking-[0.22em] uppercase text-white/40 block mb-2.5">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#111111] border border-white/[0.08] text-white/80 font-body text-[14px] focus:border-[#C9A96E] focus:outline-none transition-all duration-300 resize-none placeholder:text-white/20"
                        placeholder="Tell us about your hair goals..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full font-body text-[10px] font-semibold tracking-[0.22em] uppercase py-4 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-400 btn-gold"
                    >
                      Send Enquiry
                    </button>
                  </form>
                </FadeInUp>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GOOGLE MAPS ═══ */}
      <section className="bg-[#111111] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <FadeInUp className="text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-4">Find Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[#C9A96E] mb-3">Our Leeds Salon</h2>
            <p className="font-body text-[14px] text-white/80">96–98 Harrogate Road, Chapel Allerton, Leeds LS7 4LZ</p>
            <GoldLineReveal className="w-16 mt-4" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="relative border border-[#C9A96E]/15 overflow-hidden">
              <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#C9A96E]/15 z-10" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#C9A96E]/15 z-10" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#C9A96E]/15 z-10" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#C9A96E]/15 z-10" />
              <iframe
                src="https://maps.google.com/maps?q=96-98+Harrogate+Road,+Chapel+Allerton,+Leeds+LS7+4LZ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Angelic Hair Salon — 96–98 Harrogate Road, Chapel Allerton, Leeds"
                className="w-full"
              />
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2} className="text-center mt-8">
            <a
              href="https://www.google.com/maps/dir//96-98+Harrogate+Road,+Chapel+Allerton,+Leeds+LS7+4LZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.18em] uppercase px-8 py-3 border border-[#C9A96E]/30 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0D0D0D] hover:border-[#C9A96E] transition-all duration-400"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Get Directions
            </a>
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
            <p className="font-heading text-2xl md:text-3xl font-light text-[#D4B96A] mb-4">Prefer a quicker response?</p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="font-body text-[13px] text-white/35 mb-8 leading-relaxed">
              Message Angelina directly on Instagram for the fastest reply.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <a
              href="https://www.instagram.com/angelicc.hair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-[10px] tracking-[0.18em] uppercase px-10 py-3.5 border border-[#C9A96E]/30 text-[#C9A96E]/80 hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#0D0D0D] transition-all duration-400"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Message on Instagram
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
