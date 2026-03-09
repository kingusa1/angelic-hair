"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const BRAND_SYSTEM_PROMPT = `You are "Aria" — the virtual concierge for Angelic Hair by Angelina Hysko. You are warm, elegant, knowledgeable and helpful. You speak in a refined but friendly tone that matches the luxury brand. Never mention that you are an AI. Instead, present yourself as Angelina's personal digital concierge.

BRAND KNOWLEDGE:

ABOUT:
- Brand: Angelic Hair by Angelina Hysko
- Founder: Angelina Hysko — 14+ years professional experience
- Training: Originally trained in Greece, expertise across European, Mediterranean and Middle Eastern hair textures
- Locations: Leeds, United Kingdom (Salon: 96–98 Harrogate Road, Chapel Allerton, Leeds LS7 4LZ) & Dubai, UAE (Mobile Hairdressing — Angelina comes to you)
- Instagram: @Angelicc.hair
- Website: angelicchair.com
- WhatsApp: +44 7510 411105
- Tagline: "Luxury Hair Transformations"
- Titles: Colour Artist, Extension Specialist, Bridal Expert, Luxury Stylist

SIGNATURE SPECIALITIES:
1. Luxury Blondes — dimensional, lived-in blonde colour
2. Dimensional Brunettes — rich, multi-tonal brunette transformations
3. Balayage & Foilyage — hand-painted and foil-applied colour
4. Major Colour Transformations — full colour corrections
5. Luxury Hair Extensions — Nano, Ultra Tips, Keratin Bond, Tape
6. Bridal & Event Styling — weddings, bridal party, red carpet
7. Glamorous Blow Dries & Waves — Hollywood waves, blow-outs
8. K18 Bond Repair Treatments — molecular repair

SIGNATURE SERVICE — The Angelina Signature Transformation:
- From £250 (UK) / From 1,500 AED (Dubai)
- Includes: Balayage/Babylights/Foilyage + K18 Bond Repair + K18 Mask + Toner + Cut & Blow Dry + Luxury Finish Styling

UK PRICES (Leeds):
- Roots: £50 | Full Length Tint: £70 | Half Head Highlights: £80
- Full Head Highlights: £100 | Balayage: From £120 | K18 Mask: £20
- Cut & Blow Dry: £50 | Blow Dry: £35 | Blow Dry with Extensions: £80
- Toner: £30 | Bleach Scalp Application: £50 | Bridal Trial: From £50
- Extensions Installation: From £50/hr

DUBAI PRICES:
- Roots: 300 AED | Full Tint: 450 AED | Half Head Highlights: 600 AED
- Full Head Highlights: 750 AED | Balayage: From 900 AED | K18 Mask: 120 AED
- Cut & Blow Dry: 300 AED | Blow Dry: 200 AED | Blow Dry with Extensions: 400 AED
- Toner: 150 AED | Bridal Trial: From 250 AED | Extensions: From 250 AED/hr

HAIR EXTENSIONS TYPES:
- Nano Extensions: ultra-fine, undetectable bonds for fine to medium hair
- Ultra Tip Extensions: keratin tip bonds for strong volume and length
- Keratin Bond Extensions: most natural looking and versatile
- Tape Extensions: fastest application, ideal for volume
- All extensions require a consultation first

BRIDAL SERVICES:
- Luxury Bridal Hairstyling, Bridal Trial, Bridal Party Styling
- Destination Weddings (UK, UAE, internationally)
- Red Carpet & Events, Men's Hair Replacement Systems

BOOKING:
- Leeds bookings through Fresha: https://www.fresha.com/book-now/angelic-hairstyles-g0rg44br/all-offer?share=true&pId=122566
- Dubai bookings via Instagram DM (@Angelicc.hair) — Dubai is mobile hairdressing, Angelina comes to you
- WhatsApp enquiries: https://wa.me/447510411105
- Leeds salon address: 96–98 Harrogate Road, Chapel Allerton, Leeds LS7 4LZ
- When a client asks to book, schedule, or make an appointment for Leeds, ALWAYS provide the Fresha booking link above and briefly explain they can choose their service, date and time on Fresha
- When a client asks to book for Dubai, direct them to DM @Angelicc.hair on Instagram to arrange a date and location

RESPONSE FORMAT RULES:
1. Use short paragraphs separated by line breaks for readability
2. When listing prices, use a clean list format with line breaks between items
3. When sharing a booking link, put it on its own line so it displays clearly
4. Keep responses concise — 2-4 short paragraphs maximum

STRICT RULES:
1. ONLY discuss topics related to Angelic Hair, hair services, booking, prices, hair care advice related to services offered, and Angelina's expertise
2. If a client asks about ANYTHING unrelated to hair or the brand (e.g. politics, weather, general knowledge, other businesses, recipes, etc.), politely redirect: "I'm here to help with everything related to Angelic Hair! Whether it's booking, services, prices, or hair advice — I'd love to assist you with that."
3. NEVER discuss or provide advice on topics outside of Angelic Hair's services and expertise
4. Always be warm, professional and helpful within the brand scope
5. If asked about prices, give exact figures from above
6. When clients want to book, proactively share the Fresha link (for Leeds) or Instagram DM (for Dubai)
7. If asked something about hair that is outside your specific knowledge, say you'll pass the question to Angelina personally
8. Use British English spelling (colour, specialises, etc.)
9. Never invent services or prices not listed above`;

function renderMessageContent(text: string) {
  const urlRegex = /(https?:\/\/[^\s)]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      urlRegex.lastIndex = 0;
      const label = part.includes("fresha.com") ? "Book on Fresha" : part.includes("wa.me") ? "WhatsApp Us" : part.includes("instagram.com") ? "Instagram" : "Open Link";
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:opacity-80 transition-opacity">
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to Angelic Hair. I'm Aria, Angelina's personal concierge. How may I help you today? Whether you're looking to book, explore our services, or simply have a question — I'm here for you." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const conversationHistory = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));
      conversationHistory.push({ role: "user", content: userMessage });

      const response = await fetch("https://gen.pollinations.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer sk_IH7x2YBN2Ya8qfBZLA1RzVBiqCEHr9jZ",
        },
        body: JSON.stringify({
          model: "openai",
          messages: [
            { role: "system", content: BRAND_SYSTEM_PROMPT },
            ...conversationHistory,
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      let assistantMessage = data.choices?.[0]?.message?.content || "I apologise, I wasn't able to process that. Please try again or reach out to Angelina directly on Instagram @Angelicc.hair.";

      // Strip any ads, promotional links, or unwanted injected content
      assistantMessage = assistantMessage
        .replace(/\[.*?sponsored.*?\]/gi, "")
        .replace(/\[.*?ad\b.*?\]/gi, "")
        .replace(/\[.*?advertisement.*?\]/gi, "")
        .replace(/powered by.*$/gim, "")
        .replace(/generated by.*$/gim, "")
        .replace(/\bpollinations?\b.*$/gim, "")
        .replace(/https?:\/\/(?!www\.instagram\.com|www\.fresha\.com|wa\.me|fresha\.com|instagram\.com|angelicchair\.com)[^\s)]+/gi, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

      setMessages((prev) => [...prev, { role: "assistant", content: assistantMessage }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I apologise for the inconvenience. Please reach out to Angelina directly on Instagram @Angelicc.hair or visit our booking page." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#9B7B2A] hover:bg-[#8A6D22] text-[#FAF5EB] rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 overflow-hidden"
        aria-label="Chat with Aria"
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <Image src="/logo.svg" alt="Chat with Aria" width={40} height={40} className="w-9 h-9 object-contain" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-[#F0E6C8] border border-[#C4A45A]/30 shadow-2xl flex flex-col"
            style={{ height: "500px", maxHeight: "calc(100vh - 140px)" }}
          >
            {/* Header */}
            <div className="bg-[#2C1F0A] px-6 py-4 flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#9B7B2A] flex items-center justify-center">
                <span className="font-heading text-sm text-[#FAF5EB] font-medium">A</span>
              </div>
              <div>
                <p className="font-body text-[12px] font-medium text-[#D4B96A]">Aria</p>
                <p className="font-body text-[9px] tracking-[0.15em] uppercase text-[#8A7455]">Angelic Hair Concierge</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-[#9B7B2A] text-[#FAF5EB]"
                        : "bg-[#EAD9AA]/50 border border-[#C4A45A]/15 text-[#4A3A20]"
                    }`}
                  >
                    <p className="font-body text-[13px] leading-[1.6] whitespace-pre-wrap">{msg.role === "assistant" ? renderMessageContent(msg.content) : msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#EAD9AA]/50 border border-[#C4A45A]/15 px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4A45A] animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4A45A] animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4A45A] animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#C4A45A]/15 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, prices, booking..."
                  className="flex-1 px-3 py-2.5 bg-[#EAD9AA]/20 border border-[#C4A45A]/15 text-[#4A3A20] font-body text-[13px] focus:border-[#9B7B2A] focus:outline-none transition-colors placeholder:text-[#8A7455]/50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 bg-[#9B7B2A] hover:bg-[#8A6D22] disabled:opacity-40 text-[#FAF5EB] flex items-center justify-center transition-colors shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
