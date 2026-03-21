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

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">1. Data Storage & Safety</h2>
        <p>Your content is safe with us. All shoot footage and final edits are stored on encrypted cloud servers. Access is restricted only to the crew involved in the project and you, the client.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">2. Use of Content</h2>
        <p>Unless explicitly agreed otherwise, Crewshoot.in (under Deccan Branding Company) may use small fragments of finished reels for its own promotional purposes. We never share raw footage or private client details with third parties.</p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">3. Deletion Policy</h2>
        <p>Backups of project files are maintained for 60 days post-shoot to allow for additional revision requests or loss of files by the client. Projects are permanently deleted from our servers thereafter if requested.</p>
      </section>
    </LegalLayout>
  );
}
