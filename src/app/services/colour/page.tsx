"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function ColourServicesPage() {
  return (
    <ServicePageTemplate
      badge="Colour Services"
      title="Colour"
      intro="From subtle root touch-ups to dramatic full-head transformations, Angelina's colour services are designed to enhance your natural beauty with precision and artistry. Every colour appointment begins with a thorough consultation to understand your vision, lifestyle and hair history."
      services={[
        { name: "Roots / Root Touch-Up", ukPrice: "£50", dubaiPrice: "300 AED", description: "Single-process root application for maintaining your colour between full appointments" },
        { name: "Full Length Tint", ukPrice: "£70", dubaiPrice: "450 AED", description: "Full head single process colour — perfect for a complete refresh or new shade" },
        { name: "Half Head Highlights", ukPrice: "£80", dubaiPrice: "600 AED", description: "Partial highlight placement for dimension and brightness through the top layers" },
        { name: "Full Head Highlights", ukPrice: "£100", dubaiPrice: "750 AED", description: "Complete highlight service for an all-over lifted, dimensional result" },
        { name: "Balayage / Foilyage", ukPrice: "From £120", dubaiPrice: "From 900 AED", description: "Hand-painted or foil-applied colour for natural, sun-kissed, seamless results" },
        { name: "Bleach Scalp Application", ukPrice: "£50", dubaiPrice: "On consultation", description: "Full bleach application — pricing may vary based on hair condition and history" },
        { name: "Toner", ukPrice: "£30", dubaiPrice: "150 AED", description: "Standalone toning service to neutralise warmth or refresh existing colour" },
        { name: "K18 Mask Therapy", ukPrice: "£20", dubaiPrice: "120 AED", description: "Add-on molecular repair treatment — recommended with any chemical service" },
      ]}
      faqs={[
        { q: "How long does a balayage appointment take?", a: "A balayage appointment typically takes 2.5 to 4 hours depending on the desired result, hair length and starting colour. Angelina always allows ample time for a beautiful, unhurried result." },
        { q: "Can I go from dark to blonde in one sitting?", a: "This depends on your current colour and hair condition. Angelina will always prioritise hair health — sometimes a gradual approach over 2-3 sessions achieves a better, healthier result than rushing the process." },
        { q: "How do I maintain my colour between appointments?", a: "Angelina provides personalised aftercare advice at every appointment, including recommended products and maintenance schedules tailored to your specific colour treatment." },
      ]}
      relatedLinks={[
        { label: "Hair Extensions", href: "/services/extensions" },
        { label: "K18 Treatments", href: "/services/k18" },
        { label: "Blow Dry & Styling", href: "/services/styling" },
      ]}
    />
  );
}
