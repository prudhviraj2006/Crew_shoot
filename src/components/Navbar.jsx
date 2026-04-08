"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isModalOpen, setIsModalOpen] = useState(false); // Booking modal state
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pricing", href: "/#pricing" },
    { name: "Services", href: "/services", isDropdown: true },
    { name: "Process", href: "/#process" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Testimonials", href: "/#testimonials" }
  ];

  const serviceLinks = [
    { name: "🎬 Instant Reels", href: "/reels" },
    { name: "🎉 Event Reels", href: "/events" },
    { name: "💍 Wedding Reels", href: "/weddings" },
    { name: "🏪 Reel Your Store", href: "/store", badge: "NEW" },
    { name: "📋 All Services", href: "/services" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 w-full z-[100] transition-all duration-300 py-1.5 md:py-2 px-4 md:px-[2.5rem] bg-background/80 backdrop-blur-[12px] border-b border-white/5 ${
          isScrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full bg-transparent !border-none !p-0 md:h-[56px]">
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Logo className="block object-contain w-[110px] h-[110px] md:w-[70px] md:h-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.isDropdown && setShowServicesDropdown(true)}
                onMouseLeave={() => link.isDropdown && setShowServicesDropdown(false)}
              >
                <Link 
                  href={link.href} 
                  className="text-sm font-medium hover:text-[#f5a623] transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.isDropdown && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown for Services */}
                {link.isDropdown && (
                  <AnimatePresence>
                    {showServicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 w-60 bg-[#1a1a1a] border border-[#f5a623]/20 rounded-xl overflow-hidden shadow-2xl z-50 flex flex-col"
                      >
                        {serviceLinks.map((sublink) => (
                          <Link 
                            key={sublink.name} 
                            href={sublink.href}
                            className="px-4 py-3 text-sm font-medium hover:text-[#f5a623] hover:bg-white/5 transition-colors border-b border-white/5 flex items-center justify-between"
                          >
                            <span>{sublink.name}</span>
                            {sublink.badge && (
                              <span className="bg-[#f5a623] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                                {sublink.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center gap-3 md:gap-8 shrink-0">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block bg-[#f5a623] text-[#0d0d0d] font-[800] uppercase rounded-full px-[14px] py-[6px] text-[12px] md:px-[24px] md:py-[10px] md:text-[13px] transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(245,166,35,0.2)] shrink-0 whitespace-nowrap"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Book
              <span className="hidden sm:inline"> Now</span>
            </button>
            <div className="md:hidden flex items-center shrink-0">
              <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-[#f5a623] p-1 flex items-center justify-center">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }} 
              className="md:hidden absolute top-full left-0 w-full bg-[#111]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2 flex flex-col">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link 
                      href={link.href} 
                      onClick={() => !link.isDropdown && setIsOpen(false)} 
                      className="block px-3 py-3 text-sm font-black uppercase tracking-widest hover:text-[#f5a623] text-center border-b border-white/5 italic"
                    >
                      {link.name}
                    </Link>
                    {link.isDropdown && (
                      <div className="flex flex-col bg-white/5 py-2 mt-1 rounded-lg">
                         {serviceLinks.map(sublink => (
                           <Link 
                              key={sublink.name} 
                              href={sublink.href} 
                              onClick={() => setIsOpen(false)}
                              className="px-6 py-2 text-xs font-medium hover:text-[#f5a623] text-center"
                            >
                              {sublink.name}
                            </Link>
                         ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
