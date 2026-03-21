"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Book Instantly", desc: "Share event details online and get your slot confirmed in minutes." },
  { num: "02", title: "Get Matched", desc: "A nearest highly-trained creator is assigned instantly." },
  { num: "03", title: "On-Ground Shoot", desc: "Creator arrives equipped with the latest iPhone, shooting to your references." },
  { num: "04", title: "On-Spot Editing", desc: "Our creators edit live during or right after the shoot." },
  { num: "05", title: "Instant Delivery", desc: "Reels and photos delivered via a secure pristine cloud link." },
  { num: "06", title: "Feedback & Support", desc: "1-2 revisions included. No constant follow-ups needed." },
];

export default function ProcessTimeline() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-32 relative" id="process">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-24">
        <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
           Step-by-Step Experience
        </div>
        <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter saturate-150">
          Our <span className="text-accent underline decoration-white/10 underline-offset-8 italic">Process</span>
        </h2>
        <p className="text-white/50 text-xl font-medium tracking-tight">Real-time. Simple. Hassle-free. Reel-ready within the hour.</p>
      </div>

      <div className="relative isolate">
        {/* Line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 -z-10"></div>
        <div className="md:hidden absolute top-0 bottom-0 left-8 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -z-10"></div>

        <div className="flex flex-col gap-16 md:gap-4 flex-nowrap">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Central point for desktop */}
              <div className="hidden md:flex absolute left-1/2 w-4 h-4 rounded-full bg-accent border-[3px] border-background -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(245,166,35,0.6)]"></div>
              
              <div className="md:w-1/2 w-full flex">
                <div className={`w-full bg-[#111] border border-white/5 p-10 rounded-[2.5rem] relative ml-12 md:ml-0 md:mx-12 group hover:border-accent/30 transition-all duration-500 shadow-2xl ${i % 2 === 0 ? "md:mr-12 md:ml-0 text-right md:items-end flex flex-col" : "md:ml-12 md:mr-0 text-left md:items-start flex flex-col"}`}>
                  
                  {/* Mobile nav point */}
                  <div className="md:hidden absolute -left-12 top-10 w-4 h-4 rounded-full bg-accent border-[3px] border-background z-10 shadow-[0_0_15px_rgba(245,166,35,0.6)]"></div>
                  
                  <span className={`text-8xl font-heading font-black text-white/[0.02] absolute -top-8 ${i % 2 === 0 ? "-left-4" : "-right-4"} pointer-events-none select-none italic group-hover:text-accent/[0.03] transition-colors`}>
                    {step.num}
                  </span>

                  <div className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                    <span className="text-accent font-heading font-black italic tracking-tighter text-2xl">{step.num}</span> 
                    <div className="w-12 h-[1px] bg-white/10 group-hover:bg-accent/30 transition-colors"></div>
                  </div>

                  <h3 className="text-3xl font-black font-heading mb-4 uppercase italic tracking-tighter text-white/90 group-hover:text-white transition-colors">
                     {step.title}
                  </h3>
                  
                  <p className="text-white/40 leading-relaxed font-medium text-sm lg:text-base max-w-sm">
                     {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
