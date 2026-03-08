"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/* ── Fade In Up — the workhorse ── */
export function FadeInUp({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Fade In — simple opacity ── */
export function FadeIn({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Scale In — subtle zoom entry ── */
export function ScaleIn({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Slide In from Left ── */
export function SlideInLeft({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Slide In from Right ── */
export function SlideInRight({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Gold Line Reveal — expanding separator ── */
export function GoldLineReveal({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent origin-center mx-auto ${className}`}
    />
  );
}

/* ── Parallax Section — subtle depth on scroll ── */
export function ParallaxSection({ children, className = "", offset = 50 }: { children: ReactNode; className?: string; offset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ── Stagger Children — animate children one by one ── */
export function StaggerContainer({ children, className = "", staggerDelay = 0.08 }: { children: ReactNode; className?: string; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Text Reveal — characters animate in like editorial ── */
export function TextReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ── Gold Corner Frame — animated border corners ── */
export function GoldCornerFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-10 md:h-10 border-t-[1.5px] border-l-[1.5px] border-[#C9A96E]/30" />
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-10 md:h-10 border-t-[1.5px] border-r-[1.5px] border-[#C9A96E]/30" />
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-10 md:h-10 border-b-[1.5px] border-l-[1.5px] border-[#C9A96E]/30" />
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-10 md:h-10 border-b-[1.5px] border-r-[1.5px] border-[#C9A96E]/30" />
      </motion.div>
    </div>
  );
}

/* ── Counting Number — animates from 0 to target ── */
export function CountUp({ target, suffix = "", className = "" }: { target: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {target}{suffix}
        </motion.span>
      ) : (
        <>0{suffix}</>
      )}
    </motion.span>
  );
}

/* ── Magnetic Hover — subtle follow-cursor effect ── */
export function MagneticHover({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Shimmer Text — gold shimmer effect on text ── */
export function ShimmerText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ backgroundPosition: "-200% 0" }}
      whileInView={{ backgroundPosition: "200% 0" }}
      viewport={{ once: true }}
      transition={{ duration: 3, ease: "linear" }}
      className={`bg-gradient-to-r from-[#C9A96E] via-[#E8C89E] to-[#C9A96E] bg-clip-text text-transparent bg-[length:200%_100%] ${className}`}
    >
      {children}
    </motion.span>
  );
}

/* ── Reveal Mask — content reveals from behind a mask ── */
export function RevealMask({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
