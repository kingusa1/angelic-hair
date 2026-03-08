"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/prices", label: "Prices" },
  { href: "/contact", label: "Contact" },
];

const allLinks = [...navLinks, { href: "/book", label: "Book" }];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
            ? "bg-[#0D0D0D]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(201,169,110,0.08)]"
            : "bg-transparent"
          }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-[88px]">

            {/* Logo — Left */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Image
                src="/logo.svg"
                alt="Angelic Hair by Angelina Hysko"
                width={240}
                height={110}
                className="h-12 lg:h-16 w-auto transition-all duration-500 group-hover:scale-[1.03]"
                priority
              />
            </Link>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 link-underline ${scrolled ? "text-white/50 hover:text-[#C9A96E]" : "text-white/60 hover:text-[#C9A96E]"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right — Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Instagram icon */}
              <a
                href="https://www.instagram.com/angelicc.hair/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#C9A96E] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Book Now CTA */}
              <Link
                href="/book"
                className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase px-7 py-2.5 bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] text-[#0D0D0D] hover:from-[#E8C89E] hover:to-[#C9A96E] transition-all duration-500 btn-gold rounded-full"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2 relative z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`block w-6 h-[1.5px] transition-colors duration-300 ${mobileOpen ? "bg-[#C9A96E]" : "bg-white/60"
                  }`}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`block w-6 h-[1.5px] transition-colors duration-300 ${mobileOpen ? "bg-[#C9A96E]" : "bg-white/60"
                  }`}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`block w-6 h-[1.5px] transition-colors duration-300 ${mobileOpen ? "bg-[#C9A96E]" : "bg-white/60"
                  }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D]"
          >
            {/* Corner ornaments */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="absolute top-6 left-6 w-8 h-8 border-t-[1.5px] border-l-[1.5px] border-[#C9A96E]/20" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-[#C9A96E]/20" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-[#C9A96E]/20" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-[1.5px] border-r-[1.5px] border-[#C9A96E]/20" />
            </motion.div>

            {/* Inner border */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute inset-10 border border-white/[0.04] pointer-events-none"
            />

            <div className="flex flex-col items-center justify-center h-full gap-7 pt-16">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <Image
                  src="/logo.svg"
                  alt="Angelic Hair"
                  width={200}
                  height={100}
                  className="h-20 w-auto mb-2"
                />
              </motion.div>

              {/* Gold separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent origin-center mb-2"
              />

              {allLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-[28px] font-light tracking-[0.06em] text-white/70 hover:text-[#C9A96E] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4"
              >
                <Link
                  href="/book"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block font-body text-[11px] font-semibold tracking-[0.22em] uppercase px-10 py-3.5 bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] text-[#0D0D0D] transition-all duration-300 rounded-full"
                >
                  Book Now
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-3 mt-4"
              >
                <a
                  href="https://www.instagram.com/angelicc.hair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[11px] tracking-[0.12em] text-[#C9A96E]/70 hover:text-[#C9A96E] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @Angelicc.hair
                </a>
                <p className="text-[9px] tracking-[0.35em] uppercase text-white/20">
                  Leeds, UK &middot; Dubai, UAE
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
