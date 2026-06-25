// CREWSHOOT - ORIGINAL STABLE VERSION
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-dm-sans" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });

export const metadata = {
  metadataBase: new URL('https://www.crewshoot.in'),
  title: "CREWSHOOT.IN — Tirupati's First & Fastest Instant Reel Service",
  description: "Get professional event reels in 30-60 minutes. Weddings, birthdays, store launches & more. Shot on iPhone, edited on-site, delivered before you leave. Book now!",
  keywords: "instant reels tirupati, reel making tirupati, content creation tirupati, crewshoot reels, wedding reels tirupati, event reels tirupati, store reels tirupati",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CREWSHOOT.IN — Instant Content Delivered In Minutes",
    description: "Tirupati's First Instant Reel Service. Shoot, Edit, Post – all before your event ends.",
    url: 'https://www.crewshoot.in',
    siteName: 'Crewshoot',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CREWSHOOT.IN — Tirupati's Instant Reel Service",
    description: "Instant reels for weddings, events, and brands. Delivered in minutes.",
    images: ['/logo.png'],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Crewshoot",
    "description": "Tirupati's First Instant Reel Service. Shoot, Edit, Deliver in Minutes.",
    "url": "https://www.crewshoot.in",
    "telephone": "+916281998732",
    "email": "crewshoot25@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tirupati",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.6288",
      "longitude": "79.4192"
    },
    "openingHours": "Mo-Su 06:00-22:00",
    "priceRange": "₹₹",
    "image": "https://www.crewshoot.in/logo.png",
    "sameAs": [
      "https://www.instagram.com/crewshoot.in",
      "https://wa.me/916281998732"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.85",
      "reviewCount": "200",
      "bestRating": "5"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${syne.variable} font-sans antialiased text-foreground bg-background min-h-screen flex flex-col`}>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
