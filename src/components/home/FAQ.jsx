"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How fast will I receive my reels?", a: "Almost instantly! Most reels are delivered within 30 to 60 minutes — often before your event even ends." },
    { q: "What events do you cover?", a: "Everything from Weddings and Birthdays to Store Launches, Car Deliveries, Concerts, and Corporate events across Tirupati & Chittoor." },
    { q: "Who are the creators?", a: "Our network consists of highly-trained iPhone creators (iPhone 12+ or above) who are verified and demo-tested for quality editing." },
    { q: "Is my content safe with you?", a: "Absolutely. All content is stored on encrypted cloud servers. We never share your private moments without explicit written permission." },
    { q: "Can I request changes to my reel?", a: "Yes! Every reel package includes 2 minor revisions free of charge to ensure you're 100% happy with the final result." },
    { q: "How do I book a shoot?", a: "You can book directly via our website form, or simply send us a message on WhatsApp for instant confirmation." }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-32" id="faq">
      <div className="text-center mb-20 px-4">
        <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
           Got Questions?
        </div>
        <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter saturate-150">
          Frequently Asked <span className="text-accent underline decoration-white/10 underline-offset-8 italic">Questions</span>
        </h2>
        <p className="text-white/40 text-lg font-medium tracking-tight">Everything you need to know about Crewshoot.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${openIndex === i ? "bg-[#111] border-accent/30 shadow-2xl" : "bg-white/[0.02] border-white/5 hover:border-white/10"}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-8 py-7 text-left flex justify-between items-center transition-all bg-transparent"
            >
              <span className={`text-lg md:text-xl font-heading font-black uppercase italic tracking-tighter transition-colors ${openIndex === i ? "text-accent" : "text-white/80"}`}>
                 {faq.q}
              </span>
              <span className={`transition-transform duration-500 shrink-0 ml-4 ${openIndex === i ? "rotate-180 text-accent" : "text-white/20"}`}>
                 <ChevronDown size={24} strokeWidth={3} />
              </span>
            </button>
            
            <motion.div 
               initial={false}
               animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
               className="overflow-hidden"
            >
              <div className="px-8 pb-8 text-white/50 font-medium leading-relaxed border-t border-white/5 pt-6">
                {faq.a}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
