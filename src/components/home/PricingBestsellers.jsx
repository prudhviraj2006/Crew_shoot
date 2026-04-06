"use client";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import BookingModal from "@/components/BookingModal";
import { useState } from "react";

export default function PricingBestsellers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleBookNow = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 uppercase tracking-tighter italic saturate-150">Bestseller Packages</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Instant Reels. Transparent Pricing. No Hidden Fees.</p>
          <div className="mt-4 inline-block bg-accent/10 border border-accent/20 text-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            ✓ 2 Minor Revisions Included per Reel
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] relative overflow-hidden flex flex-col group hover:border-accent/30 transition-all duration-500"
          >
            <div className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-4 bg-accent/10 w-fit px-3 py-1 rounded">PERFECT FOR QUICK CONTENT</div>
            <h3 className="text-3xl font-heading font-extrabold mb-4 uppercase italic">Single Reel Package</h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">₹1,999</span>
              
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "1 Hour Shoot",
                "1 Cinematic Reel",
                "Shot on iPhone",
                "Instant Reel Delivery",
                "2 Minor Revisions Included",
                "Crewshoot Watermark",
              ].map((feature, i) => (
                <li key={i} className="flex flex-row items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="text-accent" size={12} strokeWidth={4} />
                  </div>
                  <span className="text-white/70 text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleBookNow("Single Reel Package — ₹1,999")}
              className="w-full block text-center border-2 border-white/10 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-black text-white font-black uppercase tracking-widest py-5 rounded-2xl transition-all duration-300 italic"
            >
              Book Your Session
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-accent/20 to-transparent border-2 border-accent p-8 rounded-[2rem] relative overflow-hidden shadow-[0_20px_50px_rgba(245,166,35,0.1)] flex flex-col group scale-105 z-10"
          >
            <div className="absolute top-6 right-6 bg-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Most Popular 🔥</div>
            <div className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-4 bg-accent/20 w-fit px-3 py-1 rounded">BEST FOR CREATORS & EVENTS</div>
            <h3 className="text-3xl font-heading font-extrabold mb-4 uppercase italic">Double Reel Package</h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">₹4,999</span>
              
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Up to 3 Hours Shoot",
                "2 Cinematic Reels",
                "Shot on iPhone",
                "Instant Reel Preview",
                "2 Minor Revisions Per Reel",
                "Crewshoot Watermark",
              ].map((feature, i) => (
                <li key={i} className="flex flex-row items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="text-accent" size={12} strokeWidth={4} />
                  </div>
                  <span className="text-white/70 text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleBookNow("Double Reel Package — ₹4,999 ⭐ Most Popular")}
              className="w-full block text-center bg-accent hover:bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl transition-all duration-300 italic shadow-[0_10px_20px_rgba(245,166,35,0.3)]"
            >
              Book Your Session
            </button>
          </motion.div>
        </div>

        <div className="text-center mt-20">
          <Link href="/pricing" className="group inline-flex items-center gap-2 text-white/40 hover:text-accent transition-all font-black uppercase tracking-widest text-sm italic">
            View All Packages 
            <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </Link>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPackage={selectedPackage}
      />
    </>
  );
}
