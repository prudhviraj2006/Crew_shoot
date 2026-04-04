"use client";
import { useState } from "react";
import { Clock, Wallet, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BecomeCreator() {
  const [formData, setFormData] = useState({
    name: "", mobile: "", instagram: "", iphone: "", apps: "", reelLink: "", location: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, instagram, iphone, apps, reelLink, location } = formData;
    const msg = `Hey Crewshoot! I'm applying to be a Creator.%0a%0aName: ${name}%0aMobile: ${mobile}%0aIG: @${instagram.replace('@', '')}%0aiPhone: ${iphone}%0aEditing App: ${apps}%0aReel Link: ${reelLink}%0aLocation: ${location}`;
    window.open(`https://wa.me/916281998732?text=${msg}`, '_blank');
  };

  const benefits = [
    { icon: <Clock size={32} />, title: "Flexible Work", desc: "Choose gigs that fit your schedule. Shoot when you want, where you want." },
    { icon: <Wallet size={32} />, title: "Quick Payments", desc: "Get paid instantly after quality-checking the assignment. No delays." },
    { icon: <TrendingUp size={32} />, title: "Grow Skills", desc: "Work with top brands and learn from other pro creators in our network." },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20 px-4">
        <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-6">
           Join the Crew
        </div>
        <h1 className="text-5xl md:text-8xl font-heading font-black mb-6 uppercase italic tracking-tighter saturate-150">
          Shoot. <span className="text-accent underline decoration-white/10 underline-offset-8">Earn.</span> Grow.
        </h1>
        <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Join Tirupati's First Instant Reel Network. Get paid gigs every week and build your creator portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {benefits.map((ben, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] group hover:bg-white/[0.05] hover:border-accent/20 transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
              {ben.icon}
            </div>
            <h3 className="text-2xl font-black font-heading uppercase italic tracking-tighter mb-4 text-white">{ben.title}</h3>
            <p className="text-white/40 leading-relaxed font-medium text-sm">{ben.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Requirements */}
        <div>
           <div className="flex items-center gap-6 mb-10">
              <h2 className="text-4xl font-heading font-black uppercase italic tracking-tighter text-white/90">Requirements</h2>
              <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent flex-grow"></div>
           </div>
           
          <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm group">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none group-hover:scale-150 transition-transform"></div>
            <ul className="space-y-8 relative z-10">
              {[
                "iPhone 12 or above (mandatory)",
                "Basic editing skills (CapCut / iMovie / Premiere)",
                "Punctual & professional attitude",
                "Based in Tirupati or Chittoor"
              ].map((req, i) => (
                <li key={i} className="flex items-center gap-5 text-white/70 text-lg font-bold">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                     <CheckCircle className="text-accent" size={18} />
                  </div>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <div className="relative">
           <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-transparent blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="bg-[#111] border border-white/10 rounded-[2.5rem] p-10 md:p-14 relative z-10 overflow-hidden shadow-2xl">
            <h3 className="text-3xl font-heading font-black uppercase italic tracking-tighter mb-10 text-white">Application Form</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Full Name*</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="e.g. Rahul Sharma" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Mobile Number*</label>
                    <input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange} className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="+91 98765 43210" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Instagram Handle*</label>
                    <input type="text" name="instagram" required value={formData.instagram} onChange={handleChange} className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="@handle" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Current Location*</label>
                    <input type="text" name="location" required value={formData.location} onChange={handleChange} className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="City Name" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">iPhone Model*</label>
                    <select name="iphone" required value={formData.iphone} onChange={handleChange} className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-accent transition-all cursor-pointer">
                      <option value="" disabled>Select Model</option>
                      <option value="iPhone 12" className="bg-[#111]">iPhone 12 Series</option>
                      <option value="iPhone 13" className="bg-[#111]">iPhone 13 Series</option>
                      <option value="iPhone 14" className="bg-[#111]">iPhone 14 Series</option>
                      <option value="iPhone 15" className="bg-[#111]">iPhone 15 Series</option>
                      <option value="iPhone 16" className="bg-[#111]">iPhone 16 Series</option>
                    </select>
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Editing App*</label>
                    <input type="text" name="apps" required value={formData.apps} onChange={handleChange} className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="e.g. CapCut, VN" />
                 </div>
              </div>

              <div className="flex flex-col gap-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Link to Best Sample Reel*</label>
                 <input type="url" name="reelLink" required value={formData.reelLink} onChange={handleChange} className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="Instagram or GDrive Link" />
              </div>

              <button type="submit" className="mt-8 w-full bg-accent hover:bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl transition-all duration-300 italic shadow-[0_10px_30px_rgba(245,166,35,0.2)]">
                Apply to Join Crewshoot ★
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
