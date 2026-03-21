"use client";
import React from "react";

const LegalLayout = ({ title, children }) => (
  <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen font-sans">
    <h1 className="text-4xl md:text-7xl font-heading font-black mb-12 uppercase italic tracking-tighter text-accent saturate-150">
      {title}
    </h1>
    <div className="prose prose-invert prose-orange max-w-none text-white/50 leading-relaxed space-y-12">
      {children}
    </div>
    <div className="mt-16 pt-8 border-t border-white/5 text-[10px] text-white/30 uppercase tracking-widest font-black">
      Last Updated: March 20, 2026 <br />
      Contact: <a href="mailto:crewshoot25@gmail.com" className="text-accent underline font-bold">@crewshoot25@gmail.com</a>
    </div>
  </div>
);

export default function CancellationPolicy() {
  return (
    <LegalLayout title="Cancellation Policy">
      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">1. Rescheduling</h2>
        <p>You can reschedule your booked slot at no extra charge if you notify us at least 48 hours in advance, subject to Creator availability.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">2. Cancellation Fees</h2>
        <p>Cancellations made within 24 hours of the shoot time may incur a 20% convenience fee. Advance deposits are fully refundable for cancellations requested more than 48 hours prior to the shoot.</p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">3. Force Majeure</h2>
        <p>Crewshoot (Deccan Branding Company) is not liable for missed shoots due to extreme weather or technical failure outside of team control, in which case full refunds or free rescheduling will be offered.</p>
      </section>
    </LegalLayout>
  );
}
