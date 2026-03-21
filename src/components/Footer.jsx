import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, CreditCard, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center group w-fit">
            <div className="relative w-16 h-16 transition-transform group-hover:scale-105 duration-300">
              <img 
                src="/logo.png" 
                alt="CrewShoot Logo" 
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </Link>
          
          <p className="text-white/60 text-base max-w-xs leading-relaxed">
            Instant content, zero hassle. <br />
            Shot. Edited. Delivered — before your event ends.
          </p>

          <div className="flex gap-4">
             <a href="https://instagram.com/crewshoot.in" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-accent hover:text-black transition-all">
                <Instagram size={20} />
             </a>
             <a href="mailto:crewshoot25@gmail.com" className="bg-white/5 p-3 rounded-full hover:bg-accent hover:text-black transition-all">
                <Mail size={20} />
             </a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Explore</h4>
            <ul className="flex flex-col gap-4 text-white/50 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="/reviews" className="hover:text-accent transition-colors">Reviews</Link></li>
              <li><Link href="/#process" className="hover:text-accent transition-colors">Process</Link></li>
              <li><Link href="/#testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="/become-a-creator" className="hover:text-accent transition-colors">Become a Creator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-4 text-white/50 text-sm">
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cancellation" className="hover:text-accent transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider text-left">Contact Us</h4>
            <ul className="flex flex-col gap-5 text-white/60 text-sm">
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-accent shrink-0" />
                <a href="mailto:crewshoot25@gmail.com" className="hover:text-white transition-colors">crewshoot25@gmail.com</a>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-accent shrink-0" />
                <a href="https://wa.me/919360331912" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">+91 93603 31912</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-accent shrink-0" />
                <span>Tirupati & Chittoor, <br />Andhra Pradesh</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-white/5">
            <h5 className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-4 font-bold">Secure Payments via</h5>
            <div className="flex gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">
              <span className="px-2 py-1 border border-white/20 rounded-md text-[10px] font-bold">UPI</span>
              <span className="px-2 py-1 border border-white/20 rounded-md text-[10px] font-bold tracking-tighter">RAZORPAY</span>
              <span className="px-2 py-1 border border-white/20 rounded-md text-[10px] font-bold">VISA</span>
              <span className="px-2 py-1 border border-white/20 rounded-md text-[10px] font-bold">MASTERCARD</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[13px] text-white/40">
        <p>&copy; {currentYear} Crewshoot.in · All rights reserved</p>
        <p className="mt-4 md:mt-0 font-medium">Crewshoot is owned by <span className="text-white/60 underline underline-offset-4 decoration-accent/30">Deccan Branding Company</span></p>
      </div>
    </footer>
  );
}
