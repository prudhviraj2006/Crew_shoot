"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isModalOpen, setIsModalOpen] = useState(false); // Booking modal state

  const navLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/#process" },
    { name: "Reviews", href: "/reviews" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center group">
              <div className="bg-black p-2.5 rounded-xl border border-white/10 flex flex-col items-center justify-center leading-none">
                <span className="font-heading font-extrabold text-xl tracking-widest text-white">CREW</span>
                <div className="flex items-center font-heading font-extrabold text-xl text-white mt-0.5">
                  <span>SH</span>
                  <span className="flex text-accent mx-[1px] group-hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={14} className="mr-[-3px]" />
                    <Play fill="currentColor" size={14} />
                  </span>
                  <span className="lowercase">t</span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-accent hover:bg-white text-black font-black uppercase text-xs tracking-widest px-8 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(245,166,35,0.2)] italic"
              >
                Book Now
              </button>
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-accent p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }} 
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl absolute w-full left-0 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-sm font-black uppercase tracking-widest hover:text-accent w-full text-center border-b border-white/5 last:border-0 italic">
                    {link.name}
                  </Link>
                ))}
                <button 
                  onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                  className="mt-4 bg-accent text-black font-black uppercase italic tracking-widest px-8 py-4 rounded-full w-[90%] text-center shadow-2xl"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
