"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Filter, Send, CheckCircle2, User, MapPin, Briefcase } from "lucide-react";
import { supabase } from "@/lib/supabase";
import BookingModal from "@/components/BookingModal";

const REVIEWS_DATA = [
  // WEDDINGS
  { id: 1, rating: 5, category: "Weddings", text: "I was literally watching our wedding reel before the reception dinner even started. These guys are insanely fast and the quality was stunning. Every guest asked who did our reels!", author: "Sravanthi R.", role: "Bride", location: "Tirupati" },
  { id: 2, rating: 5, category: "Weddings", text: "We didn't want boring late wedding videos. Crewshoot gave us 3 reels before the pheras even ended. Everyone at the venue was stunned. Worth every rupee!", author: "Aditya P.", role: "Groom", location: "Tirupati" },
  { id: 3, rating: 5, category: "Weddings", text: "Booked them just a day before the wedding. They showed up with iPhones and edited the video before the baraat ended. Absolutely unreal experience.", author: "Krishna D.", role: "Groom's Brother", location: "Chittoor" },
  { id: 4, rating: 5, category: "Weddings", text: "The 2 revisions policy is amazing — I asked for one small change and it was done in minutes. Final reel was perfect for Instagram. Will book again!", author: "Meena S.", role: "Bride", location: "Tirupati" },
  
  // BIRTHDAYS
  { id: 5, rating: 5, category: "Birthdays", text: "Booked Crewshoot for my mom's 50th birthday. The video brought tears to her eyes — and we had it ready before the cake was even cut. Magical!", author: "Sahithi J.", role: "Birthday Host", location: "Tirupati" },
  { id: 6, rating: 5, category: "Birthdays", text: "My daughter's birthday reel was ready in 25 minutes. All her friends were watching it before the party ended. Crewshoot is a genius idea!", author: "Priya K.", role: "Parent", location: "Chittoor" },
  
  // STORE LAUNCH / CORPORATE
  { id: 7, rating: 5, category: "Store Launch", text: "We used Crewshoot for our store launch — got high-quality reels before the event wrapped up. Perfect for social media. Real impact.", author: "Padma M.", role: "Brand Manager", location: "Tirupati" },
  { id: 8, rating: 5, category: "Store Launch", text: "As a new business, getting professional-looking content quickly helped us gain traction online. Crewshoot is now our go-to content team.", author: "Radhika P.", role: "Small Business Owner", location: "Tirupati" },
  { id: 9, rating: 5, category: "Corporate", text: "ReelOnGo has changed how we capture events for clients. No delays, no chasing — just pure magic delivered instantly. Recommend to every event planner.", author: "Harish G.", role: "Event Planner", location: "Tirupati" },
  { id: 10, rating: 5, category: "Corporate", text: "Shot a walkthrough for one of our premium listings. The turnaround time was wild — and the quality? Absolutely cinematic. Booking again next week.", author: "Venkat B.", role: "Real Estate Marketer", location: "Tirupati" },
  
  // CAR DELIVERY
  { id: 11, rating: 5, category: "Car Delivery", text: "Got my new car delivered and Crewshoot captured the whole moment. The reel was ready before I even drove out of the showroom. Priceless memory!", author: "Ravi T.", role: "Car Owner", location: "Tirupati" },
  { id: 12, rating: 5, category: "Car Delivery", text: "We use Crewshoot for every car delivery at our showroom now. Customers love getting their reel instantly. Great for our social pages too!", author: "Suresh M.", role: "Showroom Manager", location: "Chittoor" },
  
  // CONCERTS
  { id: 13, rating: 5, category: "Concerts", text: "Managing concerts is chaos but Crewshoot handled content without needing our attention at all. Delivered fire reels the same night. Incredible!", author: "Tejaswini K.", role: "Concert Organizer", location: "Tirupati" },
  { id: 14, rating: 5, category: "Concerts", text: "The energy they captured at our live event was unreal. Fast delivery, great editing, trending music added — everything we needed. 10/10!", author: "Vikram R.", role: "Event Manager", location: "Tirupati" },
  
  // CREATORS
  { id: 15, rating: 5, category: "Creators", text: "I didn't have to do anything except show up. They shot, edited, added trending music, and gave me perfect reels within the hour. Game changer!", author: "Arjun S.", role: "Influencer", location: "Tirupati" },
  { id: 16, rating: 5, category: "Creators", text: "I shoot for Crewshoot part-time and get gigs every week. Flexible, fun, and honestly the easiest way I've made money with my iPhone.", author: "Nikhil R.", role: "Creator & Student", location: "Tirupati" },
];

const CATEGORIES = ["All", "Weddings", "Birthdays", "Corporate", "Store Launch", "Car Delivery", "Concerts", "Creators"];

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    eventType: "Wedding",
    rating: 0,
    review: "",
    role: "",
    location: ""
  });

  const filteredReviews = useMemo(() => {
    if (activeFilter === "All") return REVIEWS_DATA;
    return REVIEWS_DATA.filter(r => r.category === activeFilter);
  }, [activeFilter]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert("Please select a rating!");
      return;
    }
    
    setFormStatus("submitting");

    try {
      const { error } = await supabase
        .from("reviews")
        .insert([{ 
          name: formData.name,
          mobile: formData.mobile,
          eventtype: formData.eventType,
          rating: formData.rating,
          review: formData.review,
          role: formData.role,
          location: formData.location,
          created_at: new Date().toISOString(),
          approved: false 
        }]);

      if (error) throw error;

      setFormStatus("success");
      setFormData({ name: "", mobile: "", eventType: "Wedding", rating: 0, review: "", role: "", location: "" });
    } catch (error) {
      console.error("Error submitting review:", error);
      setFormStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="pt-32 pb-24 min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-accent/10 border border-accent/20 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6"
          >
            ★ Verified Client Reviews
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase italic tracking-tighter"
          >
            What Our <span className="text-accent underline decoration-white/10 underline-offset-8 italic">Clients Say</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-xl max-w-3xl mx-auto mb-12 font-medium"
          >
            Real moments. Real people. Real reactions — straight from clients we've served across Tirupati.
          </motion.p>

          <div className="flex flex-col items-center gap-6 mb-16">
             <div className="flex flex-col items-center">
                <span className="text-7xl font-heading font-black text-white italic">4.85<span className="text-3xl text-white/20 not-italic ml-2">/ 5</span></span>
                <div className="flex gap-1 text-accent mt-2">
                   {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
                </div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-4">Based on 200+ shoots across Tirupati & Chittoor</p>
             </div>

             <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: "200+ Happy Clients" },
                  { label: "4.85/5 Avg Rating" },
                  { label: "98% On-Time Delivery" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sticky top-24 z-40 bg-background/80 backdrop-blur-md py-4 border-b border-white/5">
           <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar scroll-smooth">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeFilter === cat 
                    ? "bg-accent text-black border-accent shadow-[0_0_15px_rgba(245,166,35,0.3)]" 
                    : "bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </section>

        {/* Reviews Masonry */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((rev) => (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-accent/30 hover:bg-white/[0.03] transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex gap-0.5 text-accent">
                        {[...Array(rev.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-accent/50 border border-accent/20 px-2 py-0.5 rounded italic">
                        {rev.category}
                     </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed italic font-medium mb-8">
                    "{rev.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent/60 group-hover:bg-accent group-hover:text-black transition-all">
                        <User size={18} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-sm font-heading font-black text-white italic">{rev.author}</span>
                        <span className="text-[10px] uppercase font-bold text-white/30 truncate max-w-[150px]">
                           {rev.role} · 📍 {rev.location}
                        </span>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Rating Breakdown */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 bg-white/[0.02] border border-white/5 rounded-[2rem] p-10">
           <h3 className="text-2xl font-heading font-black uppercase italic mb-8 text-center">Rating Breakdown</h3>
           <div className="space-y-4">
              {[
                { stars: 5, percent: 89, color: "bg-accent" },
                { stars: 4, percent: 8, color: "bg-accent/60" },
                { stars: 3, percent: 2, color: "bg-accent/40" },
                { stars: 2, percent: 1, color: "bg-accent/20" },
                { stars: 1, percent: 0, color: "bg-accent/10" },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-4">
                   <span className="text-[10px] font-bold text-white/40 w-12 flex items-center gap-1">{row.stars} <Star size={10} fill="currentColor" /></span>
                   <div className="flex-grow h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${row.color}`}
                      />
                   </div>
                   <span className="text-[10px] font-black text-white/60 w-8">{row.percent}%</span>
                </div>
              ))}
           </div>
        </section>

        {/* Submission Form */}
        <section id="submit-review" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
           <div className="bg-[#111] border-t-4 border-accent rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-accent/10">
                 <Send size={120} strokeWidth={0.5} />
              </div>

              {formStatus === "success" ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center text-center py-12"
                 >
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-black mb-8">
                       <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-heading font-black uppercase italic mb-4">Thank you for your review!</h3>
                    <p className="text-white/60 text-lg max-w-sm mx-auto mb-8 font-medium">It will appear on our page after verification. We appreciate your feedback! 🙏</p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="text-accent border-b border-accent font-black uppercase tracking-widest text-xs hover:text-white hover:border-white transition-all"
                    >
                      Submit another review
                    </button>
                 </motion.div>
              ) : (
                 <>
                    <div className="mb-12 relative z-10">
                       <h2 className="text-4xl md:text-5xl font-heading font-black uppercase italic tracking-tighter mb-4">Had a shoot with us?</h2>
                       <p className="text-white/50 text-xl font-medium">We'd love to hear your experience. Share your review!</p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Your Name*</label>
                          <input 
                            required
                            type="text" 
                            placeholder="e.g. Priya Sharma"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                       </div>

                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Mobile Number*</label>
                          <div className="relative">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-bold">+91</span>
                             <input 
                                required
                                type="tel" 
                                placeholder="98765 43210"
                                className="bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent w-full transition-all"
                                value={formData.mobile}
                                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                             />
                          </div>
                       </div>

                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Event Type*</label>
                          <select 
                            required
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-accent transition-all cursor-pointer"
                            value={formData.eventType}
                            onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                          >
                             {CATEGORIES.filter(c => c !== "All").map(c => (
                                <option key={c} value={c} className="bg-[#111]">{c}</option>
                             ))}
                             <option value="Other" className="bg-[#111]">Other</option>
                          </select>
                       </div>

                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Rating*</label>
                          <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 h-[58px] items-center">
                             {[1,2,3,4,5].map((star) => (
                               <button
                                 key={star}
                                 type="button"
                                 onClick={() => setFormData({...formData, rating: star})}
                                 className={`transition-all hover:scale-125 ${formData.rating >= star ? "text-accent" : "text-white/10"}`}
                               >
                                 <Star fill={formData.rating >= star ? "currentColor" : "none"} size={24} />
                               </button>
                             ))}
                          </div>
                       </div>

                       <div className="flex flex-col gap-2 md:col-span-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Your Review*</label>
                          <textarea 
                            required
                            rows={4}
                            maxLength={500}
                            placeholder="Tell us about your experience..."
                            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all resize-none"
                            value={formData.review}
                            onChange={(e) => setFormData({...formData, review: e.target.value})}
                          />
                       </div>

                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Your Role</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Bride"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all"
                            value={formData.role}
                            onChange={(e) => setFormData({...formData, role: e.target.value})}
                          />
                       </div>

                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Location</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Tirupati"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all"
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                          />
                       </div>

                       <div className="md:col-span-2 mt-4">
                          <button 
                             disabled={formStatus === "submitting"}
                             type="submit"
                             className="w-full bg-accent hover:bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl transition-all duration-300 italic shadow-[0_10px_20px_rgba(245,166,35,0.2)] disabled:opacity-50"
                          >
                             {formStatus === "submitting" ? "Submitting..." : "Submit My Review ★"}
                          </button>
                       </div>
                    </form>
                 </>
              )}
           </div>
        </section>

        {/* CTA SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="relative z-10"
              >
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase italic tracking-tighter mb-6 saturate-200">Ready to create your own <br />reel story?</h2>
                 <p className="text-black/60 text-xl font-bold max-w-2xl mx-auto mb-12">Book your instant reel today — delivered before your event ends.</p>
                 <button 
                   onClick={() => setIsModalOpen(true)}
                   className="inline-block bg-black text-accent hover:bg-white hover:text-black font-black uppercase tracking-widest px-12 py-6 rounded-full transition-all duration-300 italic shadow-2xl"
                 >
                   Book Now
                 </button>
              </motion.div>
           </div>
        </section>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
