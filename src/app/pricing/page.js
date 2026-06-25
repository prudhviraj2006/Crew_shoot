"use client";
import { useState } from "react";
import { Check, Plus, Info } from "lucide-react";
import { motion } from "framer-motion";
import BookingModal from "@/components/BookingModal";

const crewshootEdition = [
  { title: "Crewshoot Edition — 1 Reel — ₹1,899", price: "₹1,899", features: ["1 Instant Reel (Up to 60 Seconds)", "Dedicated Reel Maker Assigned", "Up to 1 Hour Coverage", "Shot on iPhone", "Edited On-Site", "Delivered During the Event", "Crewshoot Branding Included", "High-Quality Visuals"], waLink: "https://wa.me/916281998732?text=Hey%20Crewshoot!%20I%20want%20the%20Crewshoot%20Edition%201%20Reel%20Rs1899", btn: "Book Now" },
  { title: "Crewshoot Edition — 2 Reels — ₹3,899", price: "₹3,899", badge: "🔥 MOST POPULAR", isPopular: true, features: ["2 Instant Reels (Up to 60 Seconds Each)", "Dedicated Reel Maker Assigned", "Up to 3 Hours Coverage", "Shot on iPhone", "Edited On-Site", "Delivered During the Event", "Crewshoot Branding Included", "High-Quality Visuals"], waLink: "https://wa.me/916281998732?text=Hey%20Crewshoot!%20I%20want%20the%20Crewshoot%20Edition%202%20Reels%20Rs3899", btn: "Book Now" },
];

const premiumEdition = [
  { title: "Premium Edition — 1 Reel — ₹2,499", price: "₹2,499", features: ["1 Instant Reel (Up to 60 Seconds)", "Dedicated Reel Maker Assigned", "Up to 1 Hour Coverage", "Shot on iPhone", "Edited On-Site", "Delivered During the Event", "No Crewshoot Branding", "High-Quality Visuals"], waLink: "https://wa.me/916281998732?text=Hey%20Crewshoot!%20I%20want%20the%20Premium%20Edition%201%20Reel%20Rs2499", btn: "Book Now" },
  { title: "Premium Edition — 2 Reels — ₹4,999", price: "₹4,999", features: ["2 Instant Reels (Up to 60 Seconds Each)", "Dedicated Reel Maker Assigned", "Up to 3 Hours Coverage", "Shot on iPhone", "Edited On-Site", "Delivered During the Event", "No Crewshoot Branding", "High-Quality Visuals"], waLink: "https://wa.me/916281998732?text=Hey%20Crewshoot!%20I%20want%20the%20Premium%20Edition%202%20Reels%20Rs4999", btn: "Book Now" },
];

const weddingPackages = [
  { title: "Wedding Starter — ₹8,999", name: "WEDDING STARTER", price: "₹8,999", features: ["3 Instant Wedding Reels", "Bride & Groom Highlights", "Family Reactions & Candid Moments", "Shot on iPhone", "Edited On-Site", "Delivered During the Event", "2 Minor Revisions Per Reel"], waLink: "https://wa.me/916281998732?text=Hey%20Crewshoot!%20I%20want%20the%20Wedding%20Starter%20Rs8999", btn: "Book Wedding Starter" },
  { title: "Wedding Gold — ₹14,999", name: "WEDDING GOLD", price: "₹14,999", badge: "⭐ MOST BOOKED", isPopular: true, features: ["6 Instant Wedding Reels", "Entry Reel", "Couple Highlights", "Family Reactions", "Candid Moments", "BTS Clips", "Shot on iPhone", "Edited On-Site", "Delivered During the Event", "2 Minor Revisions Per Reel"], waLink: "https://wa.me/916281998732?text=Hey%20Crewshoot!%20I%20want%20the%20Wedding%20Gold%20Rs14999", btn: "Book Wedding Gold" },
  { title: "Premium Wedding — ₹24,999", name: "PREMIUM WEDDING", price: "₹24,999", features: ["10 Instant Wedding Reels", "Full-Day Coverage", "Priority Creator Team", "Bride & Groom Storytelling", "Family & Guest Moments", "BTS & Trend Reels", "Shot on iPhone", "Edited On-Site", "All Reels Delivered Before Event Ends", "2 Minor Revisions Per Reel"], waLink: "https://wa.me/916281998732?text=Hey%20Crewshoot!%20I%20want%20the%20Premium%20Wedding%20Rs24999", btn: "Book Premium Wedding" },
];

const addOns = [
  { name: "Raw Footage", price: "₹999", desc: "Receive all unedited raw video files from your shoot" },
  { name: "Extra Reel", price: "₹1,899", desc: "Get one additional edited reel from your shoot" },
];

function PkgCard({ pkg, i }) {
  return (
    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
      className={`relative p-8 rounded-[2rem] border flex flex-col transition-all duration-500 group ${pkg.isPopular ? "border-accent bg-accent/5 shadow-[0_0_40px_rgba(245,166,35,0.15)] scale-105 z-10" : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"}`}>
      {pkg.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">{pkg.badge}</div>}
      <h3 className="text-xl font-heading font-extrabold mb-2 uppercase italic tracking-tighter text-white/90">{pkg.name || pkg.title.split('—')[0].trim()}</h3>
      <div className="mb-8 flex items-baseline gap-2 border-b border-white/5 pb-6">
        <span className="text-4xl font-black text-white">{pkg.price}</span>

      </div>
      <ul className="space-y-4 mb-10 flex-grow">
        {pkg.features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-1 rounded-full p-0.5 ${pkg.isPopular ? "bg-accent/20" : "bg-white/10"}`}><Check className="text-accent" size={12} strokeWidth={4} /></div>
            <span className="text-white/70 text-sm font-medium leading-tight">{f}</span>
          </li>
        ))}
      </ul>
      <a href={pkg.waLink} target="_blank" rel="noreferrer"
        className={`w-full text-center font-black uppercase tracking-widest py-4 rounded-xl transition-all duration-300 italic text-sm block ${pkg.isPopular ? "bg-accent text-black shadow-[0_10px_20px_rgba(245,166,35,0.3)] hover:scale-105" : "border border-white/10 hover:border-accent hover:bg-accent hover:text-black text-white"}`}>
        {pkg.btn}
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleBookNow = (t) => { setSelectedPackage(t); setIsModalOpen(true); };

  return (
    <>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-20">
          <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-6">✓ Transparent Pricing. No Hidden Fees.</div>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter saturate-150">Choose Your <span className="text-accent underline decoration-white/10 underline-offset-8">Perfect Package</span></h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium">Transparent pricing. Quick delivery. No hidden fees.</p>
        </div>

        {/* ⚡ INSTANT REELS */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-3xl font-heading font-black uppercase italic tracking-tighter text-white/90">⚡ Instant Reels</h2>
            <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent flex-grow"></div>
          </div>
          <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-12">CREWSHOOT EDITION</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-heading font-black uppercase italic text-white/80 tracking-tighter">Crewshoot Edition</h3>
                <p className="text-white/40 text-sm">With Crewshoot Branding</p>
              </div>
              <div className="grid grid-cols-1 gap-8">{crewshootEdition.map((p, i) => <PkgCard key={i} pkg={p} i={i} />)}</div>
            </div>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div>
                  <h3 className="text-lg font-heading font-black uppercase italic text-white/80 tracking-tighter">Premium Edition</h3>
                  <p className="text-white/40 text-sm">No Crewshoot Branding</p>
                </div>
                <span className="bg-orange-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">NO WATERMARK</span>
              </div>
              <div className="grid grid-cols-1 gap-8">{premiumEdition.map((p, i) => <PkgCard key={i} pkg={p} i={i} />)}</div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white/[0.03] border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <Info className="text-accent mt-0.5 flex-shrink-0" size={18} />
              <div>
                <h4 className="text-white font-bold text-sm mb-2">💡 What&apos;s the difference?</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  <strong className="text-white/70">Crewshoot Edition</strong> — includes Crewshoot branding watermark<br />
                  <strong className="text-white/70">Premium Edition</strong> — clean reels with no branding watermark
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 💍 WEDDING REELS */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-3xl font-heading font-black uppercase italic tracking-tighter text-white/90">💍 Wedding Reels</h2>
            <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent flex-grow"></div>
          </div>
          <p className="text-white/40 text-sm mb-12 max-w-xl">Cinematic wedding reels delivered before your celebrations end.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{weddingPackages.map((p, i) => <PkgCard key={i} pkg={p} i={i} />)}</div>
        </section>

        {/* ✨ ADD-ONS */}
        <section>
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-3xl font-heading font-black uppercase italic tracking-tighter text-white/90">Supercharge Your Shoot ✨</h2>
            <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent flex-grow"></div>
          </div>
          <p className="text-white/40 text-sm mb-12">Add extras to any package</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {addOns.map((addon, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex justify-between items-center group hover:bg-white/[0.04] transition-all">
                <div className="flex flex-col">
                  <span className="text-white font-bold uppercase tracking-tighter italic">➕ {addon.name}</span>
                  <span className="text-accent font-black text-xl">{addon.price}</span>
                  <p className="text-white/40 text-xs mt-1">{addon.desc}</p>
                </div>
                <button onClick={() => handleBookNow("Help me choose the right package")} className="bg-white/5 p-3 rounded-full group-hover:bg-accent group-hover:text-black transition-all"><Plus size={20} /></button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialPackage={selectedPackage} />
    </>
  );
}
