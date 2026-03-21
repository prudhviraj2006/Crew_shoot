"use client";
import React from 'react';

const brands = [
  "Tata Motors", "Royal Enfield", "Malabar Gold", "KFC", "Apollo Hospitals", 
  "Maruti Suzuki", "Tirumala Tirupati Devasthanams", "Sri Chaitanya", 
  "Reliance Smart", "PVR Cinemas", "Max Fashion", "Trendz"
];

export default function BrandsMarquee() {
  return (
    <section className="py-20 bg-white/5 border-y border-white/10 overflow-hidden relative" id="brands">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="text-center mb-12 relative z-20">
        <h3 className="text-white/40 uppercase tracking-[0.2em] text-sm font-bold">Brands We Worked With</h3>
      </div>
      
      <div className="flex flex-col gap-8 group">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div key={`row1-${i}`} className="mx-8 flex items-center justify-center text-xl font-heading font-bold text-white/50 hover:text-white transition-colors">
              {brand}
            </div>
          ))}
        </div>
        
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
          {[...brands.reverse(), ...brands.reverse()].map((brand, i) => (
            <div key={`row2-${i}`} className="mx-8 flex items-center justify-center text-xl font-heading font-bold text-white/50 hover:text-white transition-colors">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
