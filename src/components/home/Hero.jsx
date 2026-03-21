"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

const TypewriterText = () => {
  const words = ["D2C Brands", "Weddings", "Social Events", "Corporate", "Birthdays", "Car Deliveries"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex items-center text-[10px] md:text-xs text-white/40 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full w-max mb-8 uppercase tracking-[0.2em] font-black">
      <span className="mr-3">Just Reel it for your &rarr;</span>
      <span className="text-accent underline decoration-accent/20 underline-offset-4 inline-block h-4 overflow-hidden min-w-[100px]">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="block"
        >
          {words[index]}
        </motion.span>
      </span>
    </div>
  );
};

const MasonryGrid = () => {
  // SAMPLE VIDEO URLS - User can replace these with files like "/videos/wedding1.mp4" in public folder
  const VIDEO_SOURCES = [
    "/my reel 1.mp4",
    "/my reel 2.mp4",
    "/my reel 3.mp4",
    "/my reel 4.mp4",
    "/my reel 5.mp4",
    "/my reel 6.mp4",
    "/my reel 7.mp4",
    "/my reel 8.mp4",
  ];

  const cols = [
    [VIDEO_SOURCES[0], VIDEO_SOURCES[1], VIDEO_SOURCES[2]], // Left
    [VIDEO_SOURCES[3], VIDEO_SOURCES[4], VIDEO_SOURCES[5]], // Center
    [VIDEO_SOURCES[6], VIDEO_SOURCES[7]],                   // Right
  ];

  return (
    <div className="hidden lg:grid grid-cols-3 gap-4 h-[700px] overflow-hidden rounded-[3rem] shrink-0 w-[450px] ml-auto relative rotate-[-6deg] scale-110">
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-background via-background/50 to-transparent z-10"></div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>

      {cols.map((colVideos, cIdx) => (
        <div key={cIdx} className="flex flex-col gap-4 overflow-hidden relative">
          <motion.div
            animate={{ y: cIdx === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 25 + cIdx * 5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col gap-4"
          >
            {[...colVideos, ...colVideos].map((videoSrc, i) => (
              <div key={i} className="bg-white/5 aspect-[9/16] rounded-2xl border border-white/5 relative overflow-hidden group shadow-2xl">
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Play size={40} className="text-white drop-shadow-2xl scale-75 group-hover:scale-100 transition-all duration-500" fill="currentColor" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

import BookingModal from "@/components/BookingModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative z-10">
            <TypewriterText />

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.9] mb-8 uppercase italic tracking-tighter saturate-150"
            >
              Tirupati's <span className="text-accent underline decoration-white/10 underline-offset-[12px]">First & Fastest</span> Instant Reel Service
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-2xl md:text-3xl text-white/50 font-medium mb-12 italic tracking-tight"
            >
              Shoot, Edit, Deliver in Minutes!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-accent hover:bg-white text-black font-black uppercase text-sm tracking-widest px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(245,166,35,0.2)] italic"
              >
                Book Now ★
              </button>
              <Link
                href="/become-a-creator"
                className="bg-white/5 border border-white/10 hover:border-accent hover:text-accent text-white font-black uppercase text-sm tracking-widest px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 italic"
              >
                Become a Creator
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-20 flex flex-wrap gap-12 pt-10 border-t border-white/5"
            >
              {[
                { val: "200+", label: "Reels Delivered" },
                { val: "4.85/5", label: "Client Rating" },
                { val: "30+", label: "Reel Makers" },
                { val: "50+", label: "Brands Served" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="text-3xl font-heading font-black text-white italic tracking-tighter uppercase">{stat.val}</div>
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex-1 w-full lg:w-auto overflow-visible relative hidden lg:block group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 blur-[150px] rounded-full point-events-none -z-10 group-hover:bg-accent/20 transition-all duration-1000"></div>
            <MasonryGrid />
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
