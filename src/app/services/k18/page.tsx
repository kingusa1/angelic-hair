"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function K18Page() {
  return (
    <ServicePageTemplate
      badge="K18 Treatments"
      title="K18 Bond Repair"
      intro="K18 is a revolutionary molecular repair treatment that works at the peptide level to reverse damage caused by bleach, colour, chemical treatments and heat styling. Unlike traditional masks that coat the hair, K18 actually rebuilds the internal structure of each strand — restoring strength, softness and elasticity from the inside out."
      services={[
        { name: "K18 Mask Therapy", ukPrice: "£20", dubaiPrice: "120 AED", description: "Standalone or add-on molecular repair mask — applied after any chemical service for maximum bond repair" },
        { name: "K18 Bond Repair Treatment", ukPrice: "Included in Signature", dubaiPrice: "Included in Signature", description: "Full professional bond repair treatment — included in The Angelina Signature Transformation package" },
      ]}
      faqs={[
        { q: "What is K18 and how does it work?", a: "K18 is a patented biomimetic peptide (K18Peptide) that reconnects broken keratin chains in the hair. It works at the molecular level to restore hair to its original, healthy state — not just temporarily masking damage." },
        { q: "Who should get K18 treatment?", a: "K18 is recommended for anyone with colour-treated, bleached, heat-damaged or chemically processed hair. It is particularly effective after balayage, highlights or any lightening service." },
        { q: "How often should I use K18?", a: "As a professional treatment, K18 is recommended with every colour or chemical service. For at-home maintenance, Angelina can recommend the appropriate K18 home care products." },
        { q: "Can K18 be combined with other services?", a: "Yes — K18 is most effective when applied immediately after colour or chemical treatments. It is included in The Angelina Signature Transformation and can be added to any service." },
      ]}
      relatedLinks={[
        { label: "Colour Services", href: "/services/colour" },
        { label: "Hair Extensions", href: "/services/extensions" },
        { label: "Signature Transformation", href: "/services" },
      ]}
    />
  );
}
