"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, Building2, Music, Palette } from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState("");

  const services = [
    {
      id: "personal",
      icon: <PartyPopper size={48} />,
      title: "Personal & Social Events",
      eventType: "Wedding", 
      events: ["Weddings", "Birthdays", "Mehendi/Sangeet/Haldi", "Housewarmings", "Proposals", "Airport Send-Offs", "Baby Showers", "Graduation Days", "Family Gatherings"],
      color: "from-accent/20 to-transparent",
    },
    {
      id: "corporate",
      icon: <Building2 size={48} />,
      title: "Corporate & Brand",
      eventType: "Corporate Event",
      events: ["Store Launches", "Startup Meetups", "Real Estate Tours", "Product Reveals", "Brand Campaigns", "Influencer Moments", "Political Events", "NGO Campaigns"],
      color: "from-blue-500/20 to-transparent",
    },
    {
      id: "community",
      icon: <Music size={48} />,
      title: "Community & Public",
      eventType: "Concert / Live Event",
      events: ["Pet Shows", "Sports Tournaments", "Marathons", "Diwali / Holi / Eid / Christmas Festivals"],
      color: "from-green-500/20 to-transparent",
    },
    {
      id: "creators",
      icon: <Palette size={48} />,
      title: "Creators & Influencers",
      eventType: "Influencer / Creator Shoot",
      events: ["Influencer Reels", "Daily Vlogs", "Brand Collabs", "Fashion Shows", "Dance Battles", "Art Installations"],
      color: "from-purple-500/20 to-transparent",
    }
  ];

  const handleBookNow = (eventType) => {
    setSelectedEventType(eventType);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-20 px-4">
          <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
             ✓ 2 Minor Revisions Included per Reel
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter saturate-150">
            Our <span className="text-accent underline decoration-white/10 underline-offset-8 italic">Services</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Instant reels for any occasion. Shot on iPhone, edited on-site, and delivered before you leave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/[0.04] hover:border-white/20 transition-all group relative overflow-hidden flex flex-col`}
            >
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${svc.color} blur-[100px] rounded-full pointer-events-none transition-transform group-hover:scale-150 opacity-40`}></div>
              
              <div className="text-accent mb-8 bg-white/5 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                {svc.icon}
              </div>
              
              <h2 className="text-3xl font-heading font-black mb-6 text-white relative z-10 uppercase italic tracking-tighter">
                 {svc.title}
              </h2>
              
              <div className="flex flex-wrap gap-2.5 mb-12 relative z-10 flex-grow">
                {svc.events.map((evt, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/5 text-white/40 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest hover:border-accent/30 hover:text-white cursor-default transition-all duration-300">
                    {evt}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => handleBookNow(svc.eventType)}
                className="w-fit relative z-10 bg-white/5 hover:bg-accent text-white hover:text-black font-black uppercase tracking-widest px-10 py-4 rounded-xl transition-all duration-300 italic text-xs border border-white/5"
              >
                Book Now &rarr;
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialEventType={selectedEventType}
      />
    </>
  );
}
