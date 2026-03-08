import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/prices", label: "Prices" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/15 to-transparent" />

      {/* Atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A96E]/[0.015] rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12 lg:pt-28 lg:pb-16">
        {/* Logo */}
        <div className="flex flex-col items-center mb-14">
          <Image
            src="/logo.svg"
            alt="Angelic Hair"
            width={240}
            height={110}
            className="h-20 w-auto mb-3 opacity-70"
          />
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent mt-4" />
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-14">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-[#C9A96E] transition-colors duration-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-14 text-center">
          <div>
            <h4 className="font-body text-[9px] tracking-[0.35em] uppercase text-[#C9A96E]/50 font-semibold mb-2">
              Leeds, United Kingdom
            </h4>
            <p className="font-body text-[12px] text-white/20 leading-relaxed">
              96–98 Harrogate Road<br />Chapel Allerton, Leeds LS7 4LZ
            </p>
          </div>
          <div>
            <h4 className="font-body text-[9px] tracking-[0.35em] uppercase text-[#C9A96E]/50 font-semibold mb-2">
              Dubai, United Arab Emirates
            </h4>
            <p className="font-body text-[12px] text-white/20 leading-relaxed">
              Mobile hairdressing services<br />available across Dubai
            </p>
          </div>
        </div>

        {/* Social + Booking */}
        <div className="flex flex-col items-center gap-6 mb-14">
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/angelicc.hair/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-[#C9A96E] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/angelicc.hair/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-[#C9A96E] transition-colors duration-300"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46 6.3 6.3 0 001.86-4.47V8.73a8.18 8.18 0 004.72 1.5v-3.4a4.85 4.85 0 01-1-.14z"/>
              </svg>
            </a>
          </div>
          <Link
            href="/book"
            className="font-body text-[10px] tracking-[0.18em] uppercase px-10 py-3 border border-[#C9A96E]/20 text-[#C9A96E]/60 hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#0D0D0D] transition-all duration-500 rounded-full btn-outline"
          >
            Book Your Transformation
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[9px] tracking-[0.12em] text-white/20">
            &copy; {new Date().getFullYear()} Angelic Hair by Angelina Hysko. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="font-body text-[9px] tracking-[0.1em] text-white/20 hover:text-[#C9A96E]/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-[9px] tracking-[0.1em] text-white/20 hover:text-[#C9A96E]/50 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
