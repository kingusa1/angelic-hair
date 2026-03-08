"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function BridalPage() {
  return (
    <ServicePageTemplate
      badge="Bridal & Events"
      title="Bridal"
      intro="Your wedding day deserves nothing less than perfection. Angelina brings over 14 years of experience to every bridal appointment, creating bespoke looks that complement your dress, venue and personal style. Available for weddings in Leeds, Dubai and destination events worldwide."
      services={[
        { name: "Luxury Bridal Hairstyling", ukPrice: "On consultation", dubaiPrice: "On consultation", description: "On-the-day bridal hair — a bespoke, luxury styling experience for your wedding day" },
        { name: "Bridal Trial Session", ukPrice: "From £50", dubaiPrice: "From 250 AED", description: "Pre-wedding consultation and style rehearsal to perfect your look before the big day" },
        { name: "Bridal Party Styling", ukPrice: "On consultation", dubaiPrice: "On consultation", description: "Bridesmaids, mother of the bride, flower girls — the full party styled together" },
        { name: "Destination Weddings", ukPrice: "On consultation", dubaiPrice: "On consultation", description: "Angelina travels to your wedding location across UK, UAE and internationally" },
        { name: "Red Carpet & Events", ukPrice: "On consultation", dubaiPrice: "On consultation", description: "Glamorous styling for film premieres, galas, awards nights and black-tie events" },
        { name: "Men's Hair Replacement Systems", ukPrice: "On consultation", dubaiPrice: "On consultation", description: "Specialist natural hair replacement service — discreet and personalised" },
      ]}
      faqs={[
        { q: "How far in advance should I book my bridal hair?", a: "We recommend booking 6-12 months before your wedding date, especially for peak season. This ensures availability and allows time for a thorough trial session." },
        { q: "What happens during the bridal trial?", a: "The trial is a full rehearsal of your wedding day look. Angelina will discuss your dress, accessories, venue and vision, then create and refine the style until it is exactly right." },
        { q: "Does Angelina travel for destination weddings?", a: "Yes — Angelina is available for destination weddings across the UK, UAE and internationally. Travel and accommodation costs are quoted separately depending on location." },
        { q: "Can the entire bridal party be styled?", a: "Absolutely. Angelina can coordinate styling for the entire bridal party including bridesmaids, mother of the bride, flower girls and other family members." },
      ]}
      relatedLinks={[
        { label: "Colour Services", href: "/services/colour" },
        { label: "Hair Extensions", href: "/services/extensions" },
        { label: "Blow Dry & Styling", href: "/services/styling" },
      ]}
    />
  );
}
