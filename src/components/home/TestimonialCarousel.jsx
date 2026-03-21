"use client";
import { Star } from "lucide-react";

export default function TestimonialCarousel() {
  const row1 = [
    { review: "Watching our wedding reel before reception dinner started. Insanely fast!", author: "Sravanthi R.", role: "Bride" },
    { review: "No delays, no chasing. Pure magic delivered instantly.", author: "Harish G.", role: "Event Planner" },
    { review: "High-quality reels before the store event wrapped up.", author: "Padma M.", role: "Brand Manager" },
    { review: "Edited before the baraat ended. Unreal.", author: "Krishna D.", role: "Groom's Brother" },
    { review: "Professional content helped us gain traction fast.", author: "Radhika P.", role: "Small Business Owner" },
    { review: "Shot, edited, trending music — perfect reels within the hour.", author: "Arjun S.", role: "Influencer" }
  ];

  const row2 = [
    { review: "Video ready before the cake was cut. Tears in her eyes.", author: "Sahithi J.", role: "Birthday Host" },
    { review: "Turnaround was wild. Drone shots were cinematic!", author: "Venkat B.", role: "Real Estate" },
    { review: "Fire reels delivered same night. No attention needed.", author: "Tejaswini K.", role: "Concert Organizer" },
    { review: "3 reels before the pheras even ended. Everyone stunned!", author: "Aditya P.", role: "Groom" },
    { review: "Gigs every week. Easiest way to earn with my iPhone.", author: "Nikhil R.", role: "Creator" },
    { review: "Passion turned into paid work. Quick payments. Great team.", author: "Madhavi V.", role: "Freelancer" }
  ];

  return (
    <section className="py-32 border-t border-white/5 overflow-hidden relative" id="testimonials">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/[0.02] blur-[150px] pointer-events-none -z-10"></div>

      <div className="text-center mb-24 px-4">
        <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
           What People Are Saying
        </div>
        <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter saturate-150">
          Client <span className="text-accent underline decoration-white/10 underline-offset-8 italic">Insights</span>
        </h2>
        <p className="text-white/40 text-lg font-medium tracking-tight">Real-time reactions from our satisfied customers.</p>
      </div>

      <div className="flex flex-col gap-10 relative group">
        <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 (Right) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-8 pl-8">
          {[...row1, ...row1].map((t, i) => (
            <div key={`r1-${i}`} className="bg-[#111] border border-white/5 p-8 rounded-[2rem] w-[400px] hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl group/card">
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/80 whitespace-normal text-lg mb-8 italic font-medium leading-relaxed">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-heading font-black text-xs text-accent uppercase tracking-tighter italic">
                   {t.author.substring(0, 2)}
                </div>
                <div className="flex flex-col">
                   <span className="text-sm font-heading font-black text-white italic tracking-tighter uppercase">{t.author}</span>
                   <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Left) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap gap-8 pl-8">
          {[...row2, ...row2].map((t, i) => (
            <div key={`r2-${i}`} className="bg-[#111] border border-white/5 p-8 rounded-[2rem] w-[400px] hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl group/card">
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/80 whitespace-normal text-lg mb-8 italic font-medium leading-relaxed">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-heading font-black text-xs text-accent uppercase tracking-tighter italic">
                   {t.author.substring(0, 2)}
                </div>
                <div className="flex flex-col">
                   <span className="text-sm font-heading font-black text-white italic tracking-tighter uppercase">{t.author}</span>
                   <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
