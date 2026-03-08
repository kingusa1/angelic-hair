"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function StylingPage() {
  return (
    <ServicePageTemplate
      badge="Blow Dry & Styling"
      title="Styling"
      intro="From glamorous Hollywood waves to sleek blow-outs and special occasion styling, Angelina creates polished, luxurious finishes that last. Whether it is a night out, a special event or simply wanting to feel your best, every styling appointment is an indulgent experience."
      services={[
        { name: "Cut & Blow Dry", ukPrice: "£50", dubaiPrice: "300 AED", description: "Precision cut with luxury blow dry styling — refreshed shape and polished finish" },
        { name: "Blow Dry", ukPrice: "£35", dubaiPrice: "200 AED", description: "Luxury blow dry styling — bouncy, voluminous, salon-perfect hair" },
        { name: "Blow Dry with Extensions", ukPrice: "£80", dubaiPrice: "400 AED", description: "Extended blow dry service for clients with hair extensions — gentle, thorough styling" },
        { name: "Glamorous Blow Dries & Waves", ukPrice: "From £50", dubaiPrice: "From 300 AED", description: "Hollywood waves, old-glamour curls and statement styling for special occasions" },
      ]}
      faqs={[
        { q: "How long does a blow dry last?", a: "A professional blow dry typically lasts 2-3 days with proper care. Angelina can advise on how to maintain your style overnight and between washes." },
        { q: "Can I request a specific style for an event?", a: "Absolutely. Bring reference images and Angelina will work with you to create the perfect look for your event, whether it is a gala, party or photoshoot." },
        { q: "Is the blow dry with extensions different?", a: "Yes — extensions require a gentler, more thorough approach. Angelina uses techniques specifically designed to protect the bonds while creating a beautiful, blended result." },
      ]}
      relatedLinks={[
        { label: "Colour Services", href: "/services/colour" },
        { label: "Bridal & Events", href: "/services/bridal" },
        { label: "K18 Treatments", href: "/services/k18" },
      ]}
    />
  );
}
