import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-dm-sans" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });

export const metadata = {
  title: "CREWSHOOT.IN — Tirupati's First & Fastest Instant Reel Service",
  description: "Get professional event reels in 30-60 minutes. Weddings, birthdays, store launches & more. Shot on iPhone, edited on-site, delivered before you leave. Book now!",
  keywords: "instant reels, tirupati reel service, chittoor reel service, wedding reels tirupati, event videography tirupati, iphone videography, instant content delivery, crewshoot, deccan branding company",
  openGraph: {
    title: "CREWSHOOT.IN — Instant Content Delivered In Minutes",
    description: "Tirupati's First Instant Reel Service. Shoot, Edit, Post – all before your event ends.",
    url: 'https://crewshoot.in',
    siteName: 'Crewshoot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CREWSHOOT.IN — Tirupati's Instant Reel Service",
    description: "Instant reels for weddings, events, and brands. Delivered in minutes.",
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${syne.variable} font-sans antialiased text-foreground bg-background min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
