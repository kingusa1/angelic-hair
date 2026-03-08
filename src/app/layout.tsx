import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angelic-hair.vercel.app"),
  title: "Angelic Hair by Angelina Hysko | Luxury Hair Transformations",
  description:
    "Luxury hair transformations by Angelina Hysko. Specialising in colour, extensions, bridal styling and K18 treatments across Leeds, UK and Dubai, UAE. 14+ years of excellence.",
  keywords: [
    "luxury hair salon Leeds",
    "balayage specialist Leeds",
    "hair extensions Leeds",
    "bridal hair stylist Leeds",
    "luxury hair salon Dubai",
    "hair extensions Dubai",
    "balayage specialist Dubai",
    "K18 treatment",
    "Angelic Hair",
    "Angelina Hysko",
  ],
  openGraph: {
    title: "Angelic Hair by Angelina Hysko",
    description: "Luxury Hair Transformations — Leeds, UK & Dubai, UAE",
    type: "website",
    locale: "en_GB",
    siteName: "Angelic Hair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelic Hair by Angelina Hysko",
    description: "Luxury Hair Transformations — Leeds, UK & Dubai, UAE",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
