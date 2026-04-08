"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Store, Shirt, Utensils, Car, LayoutDashboard, Dumbbell, Home, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function ReelYourStoreSection() {
  const pills = [
    { icon: <Shirt size={12} />, label: "Clothing" },
    { icon: <Utensils size={12} />, label: "Food" },
    { icon: <Car size={12} />, label: "Showroom" },
    { icon: <LayoutDashboard size={12} />, label: "Beauty" },
    { icon: <Dumbbell size={12} />, label: "Gym" },
    { icon: <Home size={12} />, label: "Real Estate" },
    { icon: <Store size={12} />, label: "D2C" },
    { icon: <ShoppingBag size={12} />, label: "Retail" },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden" id="store">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5a623]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#f5a623]/10 border border-[#f5a623]/30 text-[#f5a623] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            <span>🏪</span> FOR BUSINESSES & BRANDS
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase italic tracking-tighter">
            REEL YOUR <span className="text-[#f5a623]">STORE</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
            Scrolling reels every day is easy. Making reels that actually grow your business is not. That's where Crewshoot comes in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-[#f5a623]/30 transition-all shadow-2xl flex flex-col"
          >
            <h3 className="text-2xl font-black italic uppercase mb-2">5 Reels Package</h3>
            <div className="text-[#f5a623] text-4xl font-black italic uppercase mb-4">₹9,999 <span className="text-sm text-white/30">+GST</span></div>
            <p className="text-white/50 font-medium mb-8">Entry-level. Build visibility.</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['5 Professional Reels', 'Shot on iPhone', 'Instant Delivery', '2 Revisions Per Reel', 'Ready to Post'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-[#f5a623]" /> {item}
                </li>
              ))}
            </ul>

            <Link 
              href="https://wa.me/919360331912?text=Hey%20Crewshoot!%20I'm%20interested%20in%20the%20Reel%20Your%20Store%20package."
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white w-full py-4 rounded-xl font-black uppercase text-sm tracking-widest text-center transition-all"
            >
              Book Now
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#111] border-2 border-[#f5a623] rounded-3xl p-8 shadow-[0_0_40px_rgba(245,166,35,0.15)] flex flex-col relative scale-100 lg:scale-[1.02] z-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f5a623] text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg tracking-widest flex items-center gap-1">
              ⭐ Best for Growth
            </div>

            <h3 className="text-2xl font-black italic uppercase mb-2">10 Reels Package</h3>
            <div className="text-[#f5a623] text-4xl font-black italic uppercase mb-4">₹18,999 <span className="text-sm text-white/30">+GST</span></div>
            <p className="text-white/50 font-medium mb-8">Premium. Scale your presence.</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['10 Professional Reels', 'Advanced Editing', 'Shot on iPhone', '2 Revisions Per Reel', 'Branding Strategy', 'Ready to Post'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-[#f5a623]" /> {item}
                </li>
              ))}
            </ul>

            <Link 
               href="https://wa.me/919360331912?text=Hey%20Crewshoot!%20I'm%20interested%20in%20the%20Reel%20Your%20Store%20package."
               target="_blank"
               className="bg-[#f5a623] hover:bg-white text-black w-full py-4 rounded-xl font-black uppercase text-sm tracking-widest text-center transition-all shadow-xl"
            >
              Book Now
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {pills.map((pill, idx) => (
            <div key={idx} className="flex items-center gap-1.5 bg-background border border-white/10 px-4 py-2 rounded-full text-xs font-semibold text-white/70 hover:text-white hover:border-white/30 transition-all cursor-default">
              <span className="text-[#f5a623]">{pill.icon}</span> {pill.label}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/store" className="inline-flex items-center gap-2 text-[#f5a623] font-black uppercase text-sm tracking-widest hover:text-white transition-colors group">
            View Reel Your Store Page <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
