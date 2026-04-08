"use client";
import React from "react";
import BookingForm from "@/components/home/BookingForm";
import VideoCarousel from "@/components/home/VideoCarousel";

export default function ReelsPage() {
  const scrollToBooking = () => document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[120px] pointer-events-none -z-10"></div>
         <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter">
            Instant <span className="text-accent underline decoration-white/10 underline-offset-8">Reels</span>
         </h1>
         <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
            For individuals, birthdays, influencers, and quick personal branded content.
            Shot and edited smoothly in vertical format—delivered ready to post!
         </p>
         <button onClick={scrollToBooking} className="bg-accent text-black font-black uppercase tracking-widest px-10 py-4 rounded-full text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_10px_30px_rgba(245,166,35,0.3)] italic">
            Book a Reel Creator
         </button>
      </section>

      <VideoCarousel />

      <section id="booking-section" className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20">
         <BookingForm initialEventType="Influencer / Creator Shoot" initialPackage="Single Reel Package — ₹1,999" />
      </section>
    </div>
  );
}
