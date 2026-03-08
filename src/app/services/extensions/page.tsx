"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function ExtensionsPage() {
  return (
    <ServicePageTemplate
      badge="Hair Extensions"
      title="Extensions"
      intro="Angelic Hair offers a complete range of premium hair extension methods, each selected for quality, longevity and natural results. Every extension service begins with a thorough consultation to assess your hair, discuss your goals and recommend the ideal method for your lifestyle."
      services={[
        { name: "Nano Extensions", ukPrice: "From £50/hr", dubaiPrice: "From 250 AED/hr", description: "Ultra-fine, virtually undetectable bonds — ideal for fine to medium hair textures" },
        { name: "Ultra Tip Extensions", ukPrice: "From £50/hr", dubaiPrice: "From 250 AED/hr", description: "Keratin tip bonds for strong, natural-looking volume and length" },
        { name: "Keratin Bond Extensions", ukPrice: "From £50/hr", dubaiPrice: "From 250 AED/hr", description: "Premium keratin bonds — the most natural looking and versatile method" },
        { name: "Tape Extensions", ukPrice: "From £50/hr", dubaiPrice: "From 250 AED/hr", description: "Weft tape method — fastest application, ideal for adding volume quickly" },
        { name: "Volume & Length Transformations", ukPrice: "Consultation", dubaiPrice: "Consultation", description: "Dramatic before-and-after results for special occasions or complete transformations" },
      ]}
      faqs={[
        { q: "Which extension method is right for me?", a: "This depends on your hair type, thickness, lifestyle and desired result. During your consultation, Angelina will assess your hair and recommend the method that will give you the most natural, long-lasting result." },
        { q: "How long do extensions last?", a: "Most extension methods last 3-6 months with proper care. Nano and keratin bonds typically last 4-6 months, while tape extensions may need re-application every 6-8 weeks." },
        { q: "Will extensions damage my natural hair?", a: "When applied and maintained correctly by an experienced specialist, high-quality extensions should not damage your natural hair. Angelina uses only premium bonds and follows strict application protocols to protect your hair." },
        { q: "Do I need a consultation before getting extensions?", a: "Yes — a consultation is essential. Angelina needs to assess your hair condition, discuss your expectations and ensure the right method and hair quality is selected for your needs." },
      ]}
      relatedLinks={[
        { label: "Colour Services", href: "/services/colour" },
        { label: "Bridal & Events", href: "/services/bridal" },
        { label: "Blow Dry & Styling", href: "/services/styling" },
      ]}
    />
  );
}
