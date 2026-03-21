"use client";
import { Zap, Camera, Star, RefreshCw, HandCoins, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Zap size={32} />,
    title: "Instant Delivery",
    desc: "Shot, edited, and delivered on-site before your event even ends.",
  },
  {
    icon: <Camera size={32} />,
    title: "Raw Footage Included",
    desc: "Clients get fully edited reels plus all original raw files.",
  },
  {
    icon: <Star size={32} />,
    title: "Skilled Creators",
    desc: "Every maker passes rigorous quality checks and training.",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "2 Revisions Per Reel",
    desc: "Multiple edits to ensure you are 100% satisfied with the outcome.",
  },
  {
    icon: <HandCoins size={32} />,
    title: "Transparent Pricing",
    desc: "Starting at just ₹1,999, with zero hidden fees.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure Cloud Storage",
    desc: "Encrypted cloud back-up guarantees your moments stay safe forever.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="text-center mb-20 px-4">
        <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
           The Crewshoot Advantage
        </div>
        <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter saturate-150">
          Why <span className="text-accent underline decoration-white/10 underline-offset-8">Crewshoot</span>?
        </h2>
        <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
           We don't just shoot videos. We engineer experiences that allow you to relive your moments within minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-[#111] border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/[0.04] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 blur-3xl rounded-full group-hover:bg-accent/10 transition-colors"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
              {feature.icon}
            </div>
            
            <h3 className="text-2xl font-black font-heading mb-4 uppercase italic tracking-tighter text-white group-hover:text-accent transition-colors">
               {feature.title}
            </h3>
            
            <p className="text-white/40 leading-relaxed font-medium text-sm">
               {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
