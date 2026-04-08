"use client";
import React from "react";
import BookingForm from "@/components/home/BookingForm";
import VideoCarousel from "@/components/home/VideoCarousel";
import { CheckCircle2 } from "lucide-react";

export default function StoreReelsPage() {
  const packages = [
    {
      name: "Package 1",
      badge: "5 Reels",
      price: "₹9,999",
      features: [
        "Entry-level package for business visibility",
        "Professional reels tailored to your business",
        "Attracts local customers and starts online growth"
      ]
    },
    {
      name: "Package 2",
      badge: "10 Reels",
      price: "₹18,999",
      isPopular: true,
      features: [
        "Premium package for consistent branding",
        "Advanced editing and strong engagement",
        "Ideal for scaling business presence"
      ]
    }
  ];

  const scrollToBooking = () => {
    document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[120px] pointer-events-none -z-10"></div>
         <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter">
            Reel Your <span className="text-accent underline decoration-white/10 underline-offset-8">Store</span>
         </h1>
         <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
            Boost your footfall and online presence with professionally shot, instantly edited reels specifically tailored for retail stores, boutiques, and outlets.
         </p>
         <button onClick={scrollToBooking} className="bg-accent text-black font-black uppercase tracking-widest px-10 py-4 rounded-full text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_10px_30px_rgba(245,166,35,0.3)] italic">
            Book a Store Shoot
         </button>
      </section>

      {/* Samples */}
      <VideoCarousel />

      {/* Pricing Packages */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-20">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase italic tracking-tighter">
               Store <span className="text-accent">Packages</span>
            </h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, i) => (
               <div key={i} className={`bg-[#111] border rounded-[2rem] p-8 flex flex-col relative transition-all duration-300 shadow-2xl ${pkg.isPopular ? 'border-accent shadow-[0_0_30px_rgba(245,166,35,0.15)] scale-100 md:scale-105 z-10' : 'border-white/5 hover:border-white/20'}`}>
                  {pkg.isPopular && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black font-black uppercase italic text-[10px] tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                        MOST POPULAR
                     </div>
                  )}
                  <h3 className="text-2xl font-heading font-black text-white italic uppercase tracking-tighter mb-2">{pkg.name} — <span className="text-accent">{pkg.badge}</span></h3>
                  <div className="text-4xl font-heading font-black text-white italic tracking-tighter mb-8">{pkg.price}</div>
                  
                  <ul className="flex-1 space-y-4 mb-10">
                     {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-3 text-white/70 font-medium text-sm leading-relaxed">
                           <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <button onClick={scrollToBooking} className={`w-full py-4 rounded-full font-black uppercase italic tracking-widest text-sm transition-all shadow-xl ${pkg.isPopular ? 'bg-accent text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                     Book {pkg.badge}
                  </button>
               </div>
            ))}
         </div>
      </section>

      {/* Booking Integration */}
      <section id="booking-section" className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20">
         <BookingForm initialEventType="Store Launch" />
      </section>
    </div>
  );
}
