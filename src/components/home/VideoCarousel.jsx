"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const REELS = [
  { id: 1, video: "/my%20reel%201.mp4", thumbnail: "https://picsum.photos/400/700?random=1", title: "Car And Bike Delivery" },
  { id: 2, video: "/my%20reel%202.mp4", thumbnail: "https://picsum.photos/400/700?random=2", title: "Concert Coverage" },
  { id: 3, video: "/my%20reel%203.mp4", thumbnail: "https://picsum.photos/400/700?random=3", title: "Brand Promo" },
  { id: 4, video: "/my%20reel%204.mp4", thumbnail: "https://picsum.photos/400/700?random=4", title: "School Event Coverage" },
  { id: 5, video: "/my%20reel%205.mp4", thumbnail: "https://picsum.photos/400/700?random=5", title: "Brand Promo" },
  { id: 6, video: "/my%20reel%206.mp4", thumbnail: "https://picsum.photos/400/700?random=6", title: "Concert Coverage" },
  { id: 7, video: "/my%20reel%207.mp4", thumbnail: "https://picsum.photos/400/700?random=7", title: "Brand Promo" },
  { id: 8, video: "/my%20reel%208.mp4", thumbnail: "https://picsum.photos/400/700?random=8", title: "Concert Coverage" },
];

export default function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 relative overflow-hidden" id="portfolio">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 uppercase italic tracking-tighter">
          Our Best <span className="text-accent underline decoration-white/10 underline-offset-8">Reels</span>
        </h2>
        <p className="text-white/40 text-lg font-medium">Swipe to see our latest instant deliveries.</p>
      </div>

      <div className="max-w-[400px] mx-auto px-4 perspective-1000">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full aspect-[9/16] rounded-2xl mx-auto"
        >
          {REELS.map((reel) => (
            <SwiperSlide key={reel.id} className="rounded-2xl overflow-hidden relative shadow-2xl bg-[#111] border border-white/10 group cursor-pointer" onClick={() => setActiveVideo(reel)}>
              <video src={`${reel.video}#t=0.1`} preload="metadata" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" muted playsInline></video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-black pl-1 shadow-[0_0_20px_rgba(245,166,35,0.4)] group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-heading font-black text-xl italic uppercase bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg inline-block border border-white/10">{reel.title}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center sm:p-6"
          >
            <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 z-50 text-white/50 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/10">
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-[500px] aspect-[9/16] bg-[#111] sm:rounded-3xl overflow-hidden relative shadow-2xl border border-white/10"
            >
              <video src={activeVideo.video} autoPlay controls className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
