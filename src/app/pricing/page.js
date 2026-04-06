"use client";
import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { motion } from "framer-motion";
import BookingModal from "@/components/BookingModal";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const reelPackages = [
    { title: "Single Reel Package — ₹1,999", price: "₹1,999", features: ["1 Hour Shoot", "1 Cinematic Reel", "Shot on iPhone", "Instant Delivery", "2 Minor Revisions", "Crewshoot Watermark"] },
    { title: "Double Reel Package — ₹4,999 ⭐ Most Popular", price: "₹4,999", badge: "Most Popular 🔥", isPopular: true, features: ["3 Hours Shoot", "2 Cinematic Reels", "Shot on iPhone", "Instant Preview", "2 Minor Revisions", "Crewshoot Watermark"] },
  ];

  const eventPackages = [
    { title: "Event Starter — ₹9,999", price: "₹9,999", features: ["6 Hours Coverage", "3 Cinematic Reels", "BTS Clips Included", "Crowd & Vibe Clips", "Instant Delivery", "2 Revisions Per Reel", "Raw Footage Access"] },
    { title: "Event Pro — ₹14,999", price: "₹14,999", features: ["6 Hours Coverage", "5 Cinematic Reels", "2 Reel Makers Onsite", "BTS Content", "Live Instagram Stories", "2 Revisions Per Reel", "Raw Footage Access"] },
  ];

  const weddingPackages = [
    { title: "Wedding Starter — ₹14,999", price: "₹14,999", features: ["1 Event (6hrs)", "4 Cinematic Reels", "Same Day Preview", "2 Revisions Per Reel", "Crewshoot Watermark", "Raw Footage Included"] },
    { title: "Wedding Classic — ₹39,999 ⭐ Most Popular", price: "₹39,999", badge: "Most Popular 🔥", isPopular: true, features: ["3 Events Covered", "12 Cinematic Reels", "2 Reel Makers Onsite", "Same Day Preview", "2 Revisions Per Reel", "Raw Footage Included"] },
    { title: "Wedding Premium — ₹49,999 🏆 Best Seller", price: "₹49,999", badge: "Best Seller ⭐", isBestSeller: true, features: ["4 Events Covered", "15 Cinematic Reels", "2 Reel Makers Onsite", "High Quality Photos", "Same Day Preview", "2 Revisions Per Reel", "Raw Footage Included"] },
    { title: "Wedding Signature — ₹74,999", price: "₹74,999", features: ["6 Events Covered", "25 Cinematic Reels", "2 Reel Makers Onsite", "Dedicated Content Curator", "Social Media Management", "150 Professional Photos", "Live Stories Coverage", "2 Revisions Per Reel"] },
  ];

  const addOns = [
    { name: "Extra Reel", price: "₹1,250" },
    { name: "Extra Hour Shoot", price: "₹1,250" },
    { name: "Raw Footage Access", price: "₹1,250" },
    { name: "Additional Reel Maker", price: "₹2,500" },
    { name: "Drone Shot", price: "₹3,500" },
    { name: "No Watermark", price: "₹2,500" },
  ];

  const handleBookNow = (pkgTitle) => {
    setSelectedPackage(pkgTitle);
    setIsModalOpen(true);
  };

  const renderCard = (pkg, i, theme = "default") => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className={`relative p-8 rounded-[2rem] border flex flex-col transition-all duration-500 group ${
        pkg.isBestSeller ? "border-accent bg-accent/5 shadow-[0_0_40px_rgba(245,166,35,0.15)] scale-105 z-10" : 
        pkg.isPopular ? "border-accent/40 bg-white/[0.03] shadow-xl" : 
        "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
      }`}
    >
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
          {pkg.badge}
        </div>
      )}
      
      <h3 className="text-xl font-heading font-extrabold mb-2 uppercase italic tracking-tighter text-white/90">
        {pkg.title.split('—')[0].trim()}
      </h3>
      
      <div className="mb-8 flex items-baseline gap-2 border-b border-white/5 pb-6">
        <span className="text-4xl font-black text-white">{pkg.price}</span>
        
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-1 rounded-full p-0.5 ${pkg.isBestSeller || pkg.isPopular ? "bg-accent/20" : "bg-white/10"}`}>
               <Check className="text-accent" size={12} strokeWidth={4} />
            </div>
            <span className="text-white/70 text-sm font-medium leading-tight">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleBookNow(pkg.title)}
        className={`w-full text-center font-black uppercase tracking-widest py-4 rounded-xl transition-all duration-300 italic text-sm ${
          pkg.isBestSeller ? "bg-accent text-black shadow-[0_10px_20px_rgba(245,166,35,0.3)] hover:scale-105" : 
          "border border-white/10 hover:border-accent hover:bg-accent hover:text-black"
        }`}
      >
        Book Your Session
      </button>
    </motion.div>
  );

  return (
    <>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-20">
          <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-6">
             ✓ 2 Minor Revisions per Reel
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter saturate-150">
            Choose Your <span className="text-accent underline decoration-white/10 underline-offset-8">Perfect Package</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium">Transparent pricing. Quick delivery. No hidden fees.</p>
        </div>

        {/* Reel Packages */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
             <h2 className="text-3xl font-heading font-black uppercase italic tracking-tighter text-white/90">Reel Packages</h2>
             <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reelPackages.map((pkg, i) => renderCard(pkg, i))}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/[0.01] border-2 border-dashed border-white/5 rounded-[2rem] p-8 flex flex-col justify-center text-center items-center"
            >
              <Plus className="text-white/10 mb-4" size={48} />
              <h3 className="text-xl font-black font-heading uppercase italic mb-2 text-white/40">Custom Content?</h3>
              <p className="text-white/30 text-sm mb-8">Need a tailored plan for your project?</p>
              <button 
                onClick={() => handleBookNow("Help me choose the right package")}
                className="text-accent border-b border-accent font-black uppercase italic tracking-widest text-xs hover:text-white hover:border-white transition-all"
              >
                Talk to us
              </button>
            </motion.div>
          </div>
        </section>

        {/* Event Packages */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
             <h2 className="text-3xl font-heading font-black uppercase italic tracking-tighter text-white/90">Event Packages</h2>
             <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {eventPackages.map((pkg, i) => renderCard(pkg, i))}
          </div>
        </section>

        {/* Wedding Packages */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
             <h2 className="text-3xl font-heading font-black uppercase italic tracking-tighter text-white/90">Wedding Packages</h2>
             <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingPackages.map((pkg, i) => renderCard(pkg, i))}
          </div>
        </section>

        {/* Add-ons */}
        <section>
          <div className="flex items-center gap-6 mb-12">
             <h2 className="text-3xl font-heading font-black uppercase italic tracking-tighter text-white/90">Available Add-ons</h2>
             <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex justify-between items-center group hover:bg-white/[0.04] transition-all"
              >
                <div className="flex flex-col">
                   <span className="text-white font-bold uppercase tracking-tighter italic">{addon.name}</span>
                   <span className="text-accent font-black text-xl">{addon.price}</span>
                </div>
                <button 
                  onClick={() => handleBookNow("Help me choose the right package")}
                  className="bg-white/5 p-3 rounded-full group-hover:bg-accent group-hover:text-black transition-all"
                >
                  <Plus size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPackage={selectedPackage}
      />
    </>
  );
}
