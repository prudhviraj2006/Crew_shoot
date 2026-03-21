"use client";
import React from "react";
import Link from "next/link";

const LegalLayout = ({ title, children }) => (
  <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
    <h1 className="text-4xl md:text-7xl font-heading font-black mb-12 uppercase italic tracking-tighter text-accent saturate-150">
      {title}
    </h1>
    <div className="prose prose-invert prose-orange max-w-none text-white/60 leading-relaxed space-y-12 font-medium">
      {children}
    </div>
    <div className="mt-16 pt-8 border-t border-white/5 text-[10px] text-white/30 uppercase tracking-widest font-bold">
      Last Updated: March 20, 2026 <br />
      Contact: <a href="mailto:crewshoot25@gmail.com" className="text-accent underline">crewshoot25@gmail.com</a>
    </div>
  </div>
);

export default function Terms() {
  return (
    <LegalLayout title="Terms & Conditions">
      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">1. Acceptance of Terms</h2>
        <p>By using Crewshoot.in, you agree to these terms. Crewshoot is owned and operated by Deccan Branding Company.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">2. Services</h2>
        <p>We provide instant reel shooting and editing services. All packages include 2 minor revisions per reel free of charge. Any additional revisions may incur extra costs.</p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">3. Deliverables</h2>
        <p>Reels are delivered via secure cloud links. Raw footage is provided only if included in the purchased package or paid as an add-on.</p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">4. Intellectual Property</h2>
        <p>Crewshoot retains the right to use the content for its own portfolio and social media promotion unless a "No Watermark" or "Private Content" add-on is purchased or agreed upon in writing.</p>
      </section>
    </LegalLayout>
  );
}
