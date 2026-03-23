"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const HighlightBox = ({ children }) => (
  <div className="bg-accent/10 border-l-[3px] border-accent rounded-lg p-6 my-8">
    <div className="text-[15px] leading-[1.8] text-[#f0ede6]/90 font-medium italic">
      {children}
    </div>
  </div>
);

export default function LegalPageLayout({ 
  title, 
  subtitle, 
  lastUpdated, 
  sections, 
  currentPage 
}) {
  const otherPages = [
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Cancellation & Refund", href: "/cancellation" },
  ].filter(page => page.href !== currentPage);

  return (
    <div className="bg-[#0d0d0d] text-[#f0ede6] min-h-screen pt-32 pb-20 font-sans selection:bg-accent selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#ccc]/40 mb-10 font-bold">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={10} className="text-[#ccc]/20" />
          <span className="text-[#ccc]/40">Legal</span>
          <ChevronRight size={10} className="text-[#ccc]/20" />
          <span className="text-accent/80 tracking-widest">{title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32">
              <h4 className="font-heading font-black text-[11px] uppercase tracking-[0.3em] text-accent mb-8">Navigation</h4>
              <nav className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className="text-[14px] text-[#ccc]/60 hover:text-accent transition-all block border-l-2 border-white/5 pl-5 py-2 hover:border-accent font-medium leading-tight"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="max-w-[800px] w-full mx-auto lg:mx-0">
            {/* Header */}
            <header className="mb-20">
              <div className="inline-block bg-[#1a1a1a] text-[#888] text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-8 border border-white/5 shadow-2xl">
                Last updated: {lastUpdated}
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter capitalize leading-[1.1]">{title}</h1>
              <p className="text-[#ccc] text-xl font-light leading-relaxed max-w-2xl">{subtitle}</p>
            </header>

            {/* Sections */}
            <div className="space-y-16">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="font-heading font-bold text-[18px] text-white pl-[12px] border-l-[3px] border-accent mb-8 leading-none py-1 uppercase tracking-tight">
                    {section.title}
                  </h2>
                  <div className="text-[15px] font-light text-[#ccc] leading-[1.9] space-y-6">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer Legal Section */}
            <footer className="mt-32 pt-16 border-t border-white/10">
              <h4 className="text-xs font-black text-white/40 mb-6 uppercase tracking-[0.3em]">Quick Links:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                {otherPages.map((page) => (
                  <Link 
                    key={page.href} 
                    href={page.href}
                    className="group flex items-center justify-between bg-white/[0.02] hover:bg-accent/5 border border-white/5 px-8 py-5 rounded-2xl text-[15px] font-bold transition-all hover:border-accent/40"
                  >
                    <span>{page.title}</span>
                    <ChevronRight size={16} className="text-white/20 group-hover:text-accent transition-colors" />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 border-t border-white/5">
                <p className="text-[11px] text-[#555] font-black uppercase tracking-[0.2em]">
                  CREWSHOOT.IN © 2026
                </p>
                <p className="text-[11px] text-[#555] font-black uppercase tracking-[0.2em]">
                  Owned by Deccan Branding Company
                </p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
