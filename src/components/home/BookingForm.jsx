"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Phone, Calendar, Clock, MapPin, 
  Package, PlusCircle, CheckCircle2, ChevronRight, 
  Info, AlertCircle, X, Sparkles, Send, Layout
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { supabase } from "@/lib/supabase";
import confetti from "canvas-confetti";

const PACKAGES = {
  "Single Reel Package — ₹1,999": {
    name: "Single Reel Package",
    price: 1999,
    badge: "",
    details: [
      "1 Hour Shoot",
      "1 Cinematic Reel",
      "Shot on iPhone",
      "Instant Reel Delivery",
      "2 Minor Revisions Included",
      "Crewshoot Watermark"
    ]
  },
  "Double Reel Package — ₹4,999 ⭐ Most Popular": {
    name: "Double Reel Package",
    price: 4999,
    badge: "POPULAR",
    details: [
      "Up to 3 Hours Shoot",
      "2 Cinematic Reels",
      "Shot on iPhone",
      "Instant Reel Preview",
      "2 Minor Revisions Per Reel",
      "Crewshoot Watermark"
    ],
    note: "Includes 2 free minor revisions"
  },
  "Event Starter — ₹9,999": {
    name: "Event Starter",
    price: 9999,
    badge: "",
    details: [
      "Up to 6 Hours Coverage",
      "3 Reels Delivered",
      "BTS Clips",
      "Crowd Interaction Clips",
      "Instant Reel Delivery",
      "2 Minor Revisions Per Reel",
      "Raw Footage Access"
    ]
  },
  "Event Pro — ₹14,999": {
    name: "Event Pro",
    price: 14999,
    badge: "",
    details: [
      "Up to 6 Hours Coverage",
      "5 Reels Delivered",
      "Up to 2 Reel Makers Onsite",
      "BTS Coverage",
      "Live Instagram Stories",
      "2 Minor Revisions Per Reel",
      "Raw Footage Access"
    ]
  },
  "Wedding Starter — ₹14,999": {
    name: "Wedding Starter",
    price: 14999,
    badge: "",
    details: [
      "1 Event (up to 6 hours)",
      "4 Cinematic Reels",
      "Same Day Preview",
      "2 Minor Revisions Per Reel",
      "Crewshoot Watermark",
      "Raw Footage Access"
    ]
  },
  "Wedding Classic — ₹39,999 ⭐ Most Popular": {
    name: "Wedding Classic",
    price: 39999,
    badge: "POPULAR",
    details: [
      "3 Events Covered",
      "12 Reels Delivered",
      "Up to 2 Reel Makers Onsite",
      "Same Day Previews",
      "2 Minor Revisions Per Reel",
      "Raw Footage Access"
    ]
  },
  "Wedding Premium — ₹49,999 🏆 Best Seller": {
    name: "Wedding Premium",
    price: 49999,
    badge: "BEST SELLER",
    details: [
      "4 Events Covered",
      "15 Reels Delivered",
      "Up to 2 Reel Makers Onsite",
      "Complimentary Pictures",
      "Same Day Preview",
      "2 Minor Revisions Per Reel",
      "Raw Footage Access"
    ]
  },
  "Wedding Signature — ₹74,999": {
    name: "Wedding Signature",
    price: 74999,
    badge: "",
    details: [
      "6 Events Covered",
      "25 Reels Delivered",
      "Up to 2 Reel Makers Onsite",
      "Dedicated Content Curator",
      "Social Media Management",
      "Up to 150 Pictures",
      "Live Instagram Stories",
      "2 Minor Revisions Per Reel"
    ]
  },
  "Help me choose the right package": {
    name: "Help me choose",
    price: 0,
    details: [],
    customMessage: "No worries! Fill in the other details and our team will suggest the best package for you on WhatsApp."
  }
};

const ADD_ONS = [
  { id: "extra_reel", name: "Extra Reel", price: 1250, desc: "Get one additional edited reel from your shoot" },
  { id: "extra_hour", name: "Extra Hour Shoot", price: 1250, desc: "Extend your shoot by one more hour" },
  { id: "raw_footage", name: "Raw Footage Access", price: 1250, desc: "Receive all unedited raw video files" },
  { id: "second_maker", name: "Additional Reel Maker", price: 2500, desc: "Add a second creator for bigger events" },
  { id: "drone", name: "Drone Shot", price: 3500, desc: "Cinematic aerial shots of your venue/event" },
  { id: "no_watermark", name: "Remove Watermark", price: 2500, desc: "Get your reel without the Crewshoot watermark" }
];



export default function BookingForm({ 
  initialPackage = "", 
  initialEventType = "", 
  isModal = false, 
  onClose = () => {} 
}) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    eventType: initialEventType,
    package: initialPackage,
    eventDate: "",
    eventTime: "",
    location: "",
    addOns: [], // Array of IDs
    notes: "",
    source: "",
    referralName: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [summaryExpanded, setSummaryExpanded] = useState(false);

  const selectedPackageData = useMemo(() => PACKAGES[formData.package], [formData.package]);

  const totals = useMemo(() => {
    let subtotal = selectedPackageData?.price || 0;
    const selectedAddOns = ADD_ONS.filter(a => formData.addOns.includes(a.id));
    selectedAddOns.forEach(a => subtotal += a.price);
    
    const total = subtotal;
    
    return { subtotal, total, selectedAddOns };
  }, [formData.package, formData.addOns, selectedPackageData]);

  // Auto-expand summary when required fields are filled
  useEffect(() => {
    const { name, mobile, eventType, package: pkg, eventDate, eventTime, location } = formData;
    if (name && mobile.length === 10 && eventType && pkg && eventDate && eventTime && location) {
      setSummaryExpanded(true);
    }
  }, [formData]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = "Please enter your name (min 2 characters)";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Please enter a valid 10-digit mobile number";
    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    if (!formData.package) newErrors.package = "Please select a package";
    if (!formData.eventDate) newErrors.eventDate = "Please select an event date";
    if (!formData.eventTime) newErrors.eventTime = "Please select a time slot";
    if (!formData.location || formData.location.length < 3) newErrors.location = "Please enter a location (min 3 characters)";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
       const firstError = document.querySelector('[data-error="true"]');
       if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
       return;
    }

    setIsSubmitting(true);

    try {
      // 1. Save to Supabase
      const { error } = await supabase
        .from("bookings")
        .insert([{ 
          name: formData.name,
          mobile: formData.mobile,
          eventtype: formData.eventType,
          packagename: selectedPackageData?.name || formData.package,
          packageprice: selectedPackageData?.price || 0,
          eventdate: formData.eventDate,
          eventtime: formData.eventTime,
          location: formData.location,
          addons: totals.selectedAddOns.map(a => a.name),
          notes: formData.notes,
          totalestimate: totals.total,
          referral_name: formData.referralName,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      // 2. Send via EmailJS (Commented until keys are provided)
      /*
      await emailjs.send(
        "service_xxxx", 
        "template_xxxx", 
        {
          from_name: formData.name,
          from_mobile: "+91 " + formData.mobile,
          event_type: formData.eventType,
          package_name: selectedPackageData?.name || formData.package,
          package_price: selectedPackageData?.price || 0,
          event_date: formData.eventDate,
          time_slot: formData.eventTime,
          location: formData.location,
          add_ons: totals.selectedAddOns.map(a => a.name).join(", ") || "None",
          notes: formData.notes || "None",
          total_estimate: totals.total,
          source: formData.source || "Not specified",
          referral_name: formData.referralName || "None",
        },
        "public_key_xxxx"
      );
      */

      // Redirect Logic
      setShowSuccess(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f5a623', '#ffffff', '#000000']
      });
      
      const waMsg = `Hey Crewshoot! 👋
My name is ${formData.name}.
I'd like to book an instant reel shoot.

📦 Package: ${selectedPackageData?.name || formData.package}
🎉 Event: ${formData.eventType}
📅 Date: ${formData.eventDate}
⏰ Time: ${formData.eventTime}
📍 Location: ${formData.location}
✨ Add-ons: ${totals.selectedAddOns.map(a => a.name).join(", ") || 'None'}
📝 Notes: ${formData.notes || 'None'}
👥 Referral: ${formData.referralName || 'None'}
💰 Estimated Total: ₹${totals.total.toLocaleString()}

Please confirm my booking. Thank you!`;

      setTimeout(() => {
        window.open(`https://wa.me/916281998732?text=${encodeURIComponent(waMsg)}`, '_blank');
        setIsSubmitting(false);
        if (isModal) onClose();
      }, 2000);

    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Something went wrong. Please try again or message us on WhatsApp directly.");
      setIsSubmitting(false);
    }
  };

  const toggleAddOn = (id) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(id) 
        ? prev.addOns.filter(a => a !== id) 
        : [...prev.addOns, id]
    }));
  };

  const inputStyle = (field) => `w-full bg-[#1a1a1a] border ${errors[field] ? 'border-orange-500' : 'border-white/10'} rounded-[10px] px-4 py-3 text-[#f0ede6] font-dm-sans text-sm focus:outline-none focus:border-[#f5a623] focus:ring-1 focus:ring-[#f5a623]/30 transition-all placeholder:text-white/20`;
  const labelStyle = "block text-[13px] font-dm-sans text-[#aaa] mb-1.5 ml-1";

  return (
    <div className={`w-full ${!isModal ? 'bg-[#111] border border-white/5 border-l-[3px] border-l-[#f5a623] rounded-2xl p-6 md:p-10' : ''}`}>
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase italic tracking-tighter mb-2">Book Your Instant Reel</h2>
        <p className="text-white/40 text-sm font-dm-sans">Fill in the details below — we&apos;ll confirm your slot via WhatsApp within minutes.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Field 1: Name */}
        <div data-error={!!errors.name}>
          <label className={labelStyle}>Your Name<span className="text-[#f5a623] ml-0.5">*</span></label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input 
              type="text"
              placeholder="e.g. Priya Sharma"
              className={`${inputStyle('name')} pl-12`}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          {errors.name && <p className="text-orange-500 text-[10px] font-bold uppercase mt-1.5 ml-1 italic">{errors.name}</p>}
        </div>

        {/* Field 2: Mobile */}
        <div data-error={!!errors.mobile}>
          <label className={labelStyle}>Mobile Number<span className="text-[#f5a623] ml-0.5">*</span></label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 font-black text-xs group-focus-within:text-[#f5a623]">+91</span>
            <input 
              type="tel"
              placeholder="98765 43210"
              className={`${inputStyle('mobile')} pl-12`}
              maxLength={10}
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value.replace(/\D/g, '')})}
            />
          </div>
          <p className="text-[10px] text-white/20 font-dm-sans mt-1.5 ml-1 italic">We&apos;ll confirm your booking on WhatsApp</p>
          {errors.mobile && <p className="text-orange-500 text-[10px] font-bold uppercase mt-1.5 ml-1 italic">{errors.mobile}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Field 3: Event Type */}
          <div data-error={!!errors.eventType}>
            <label className={labelStyle}>Event Type<span className="text-[#f5a623] ml-0.5">*</span></label>
            <select 
              className={inputStyle('eventType')}
              value={formData.eventType}
              onChange={(e) => setFormData({...formData, eventType: e.target.value})}
            >
              <option value="" disabled>Select event type</option>
              <option value="Wedding">💍 Wedding</option>
              <option value="Birthday Party">🎂 Birthday Party</option>
              <option value="Corporate Event">🏢 Corporate Event</option>
              <option value="Store Launch">🛍️ Store Launch</option>
              <option value="Car Delivery">🚗 Car Delivery</option>
              <option value="Concert / Live Event">🎶 Concert / Live Event</option>
              <option value="Influencer / Creator Shoot">📱 Influencer / Creator Shoot</option>
              <option value="College Event">🎓 College Event</option>
              <option value="Housewarming">🏠 Housewarming</option>
              <option value="Mehendi / Sangeet / Haldi">💃 Mehendi / Sangeet / Haldi</option>
              <option value="Other">📦 Other</option>
            </select>
            {errors.eventType && <p className="text-orange-500 text-[10px] font-bold uppercase mt-1.5 ml-1 italic">{errors.eventType}</p>}
          </div>

          {/* Field 4: Select Package */}
          <div data-error={!!errors.package}>
            <label className={labelStyle}>Select Package<span className="text-[#f5a623] ml-0.5">*</span></label>
            <select 
              className={inputStyle('package')}
              value={formData.package}
              onChange={(e) => setFormData({...formData, package: e.target.value})}
            >
              <option value="" disabled>Choose your package</option>
              <optgroup label="── 🎬 Reel Packages ──">
                <option value="Single Reel Package — ₹1,999">Single Reel Package — ₹1,999</option>
                <option value="Double Reel Package — ₹4,999 ⭐ Most Popular">Double Reel Package — ₹4,999 ⭐ Most Popular</option>
              </optgroup>
              <optgroup label="── 🎉 Event Packages ──">
                <option value="Event Starter — ₹9,999">Event Starter — ₹9,999</option>
                <option value="Event Pro — ₹14,999">Event Pro — ₹14,999</option>
              </optgroup>
              <optgroup label="── 💍 Wedding Packages ──">
                <option value="Wedding Starter — ₹14,999">Wedding Starter — ₹14,999</option>
                <option value="Wedding Classic — ₹39,999 ⭐ Most Popular">Wedding Classic — ₹39,999 ⭐ Most Popular</option>
                <option value="Wedding Premium — ₹49,999 🏆 Best Seller">Wedding Premium — ₹49,999 🏆 Best Seller</option>
                <option value="Wedding Signature — ₹74,999">Wedding Signature — ₹74,999</option>
              </optgroup>
              <optgroup label="── ❓ Not Sure ──">
                <option value="Help me choose the right package">Help me choose the right package</option>
              </optgroup>
            </select>
            {errors.package && <p className="text-orange-500 text-[10px] font-bold uppercase mt-1.5 ml-1 italic">{errors.package}</p>}
          </div>
        </div>

        {/* Dynamic Info Card */}
        <AnimatePresence mode="wait">
          {selectedPackageData && (
            <motion.div 
              key={formData.package}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#f5a623]/5 border border-[#f5a623]/25 rounded-xl p-4 sm:p-5"
            >
              <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f5a623]/20 flex items-center justify-center text-[#f5a623]">
                       <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-black text-sm uppercase italic tracking-wider leading-none">{selectedPackageData.name}</h4>
                      {selectedPackageData.price > 0 && (
                        <p className="text-[#f5a623] font-bold text-lg leading-none mt-1.5 flex items-baseline gap-1">
                          ₹{selectedPackageData.price.toLocaleString()} 
                          
                        </p>
                      )}
                    </div>
                 </div>
                 {selectedPackageData.badge && (
                   <span className="bg-[#f5a623] text-[#0d0d0d] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{selectedPackageData.badge}</span>
                 )}
              </div>
              
              {selectedPackageData.details.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 border-t border-white/5 pt-4">
                    {selectedPackageData.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-[#aaa] text-[11px] font-dm-sans">
                        <CheckCircle2 size={12} className="text-[#f5a623] flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                  {selectedPackageData.note && (
                    <div className="mt-4 bg-[#f5a623]/10 px-3 py-2 rounded-lg text-[#f5a623] text-[10px] font-bold italic flex items-center gap-2">
                       <Info size={14} className="flex-shrink-0" />
                       💬 &quot;{selectedPackageData.note}&quot;
                    </div>
                  )}
                </>
              ) : (
                <p className="text-[#aaa] text-[11px] font-dm-sans leading-relaxed italic border-t border-white/5 pt-4">
                   💬 &quot;{selectedPackageData.customMessage}&quot;
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Field 5: Date */}
          <div data-error={!!errors.eventDate}>
            <label className={labelStyle}>Preferred Shoot Date<span className="text-[#f5a623] ml-0.5">*</span></label>
            <div className="relative group">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#f5a623] transition-colors" size={18} />
              <input 
                type="date"
                min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                className={`${inputStyle('eventDate')} pl-12`}
                value={formData.eventDate}
                onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                style={{ colorScheme: 'dark' }}
              />
            </div>
            {errors.eventDate && <p className="text-orange-500 text-[10px] font-bold uppercase mt-1.5 ml-1 italic">{errors.eventDate}</p>}
          </div>

          {/* Field 6: Time Slot */}
          <div data-error={!!errors.eventTime}>
            <label className={labelStyle}>Preferred Shoot Time<span className="text-[#f5a623] ml-0.5">*</span></label>
            <div className="relative group">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#f5a623] transition-colors" size={18} />
              <select 
                className={`${inputStyle('eventTime')} pl-12`}
                value={formData.eventTime}
                onChange={(e) => setFormData({...formData, eventTime: e.target.value})}
              >
                <option value="" disabled>Select preferred time slot</option>
                <option value="Early Morning — 6:00 AM to 9:00 AM">🌅 Early Morning — 6:00 AM to 9:00 AM</option>
                <option value="Morning — 9:00 AM to 12:00 PM">🌄 Morning — 9:00 AM to 12:00 PM</option>
                <option value="Afternoon — 12:00 PM to 3:00 PM">☀️ Afternoon — 12:00 PM to 3:00 PM</option>
                <option value="Evening — 3:00 PM to 6:00 PM">🌇 Evening — 3:00 PM to 6:00 PM</option>
                <option value="Night — 6:00 PM to 10:00 PM">🌙 Night — 6:00 PM to 10:00 PM</option>
                <option value="Full Day — Flexible timing">📅 Full Day — Flexible timing</option>
                <option value="To Be Decided — Confirm via WhatsApp">🕐 To Be Decided — Confirm via WhatsApp</option>
              </select>
            </div>
            <p className="text-[10px] text-white/20 font-dm-sans mt-1.5 ml-1 italic">⏱ We&apos;ll confirm exact time via WhatsApp</p>
            {errors.eventTime && <p className="text-orange-500 text-[10px] font-bold uppercase mt-1.5 ml-1 italic">{errors.eventTime}</p>}
          </div>
        </div>

        {/* Field 7: Location */}
        <div data-error={!!errors.location}>
          <label className={labelStyle}>Event Location<span className="text-[#f5a623] ml-0.5">*</span></label>
          <div className="relative group">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#f5a623] transition-colors" size={18} />
            <input 
              type="text"
              placeholder="e.g. Venue name, Area, Tirupati"
              className={`${inputStyle('location')} pl-12`}
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
          {errors.location && <p className="text-orange-500 text-[10px] font-bold uppercase mt-1.5 ml-1 italic">{errors.location}</p>}
        </div>

        {/* Field 8: Add-Ons */}
        <div>
          <label className="block text-sm font-heading font-black text-white uppercase italic mb-1.5 ml-1 tracking-tight">Supercharge your shoot ✨ <span className="text-white/30 not-italic">(optional)</span></label>
          <p className="text-[11px] text-white/40 font-dm-sans mb-4 ml-1 italic leading-none">Select any extras you&apos;d like to add:</p>
          <div className="grid grid-cols-1 gap-3">
             {ADD_ONS.map((addon) => (
                <div 
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`group cursor-pointer flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                    formData.addOns.includes(addon.id) 
                    ? "bg-[#f5a623]/10 border-[#f5a623] shadow-[0_0_15px_rgba(245,166,35,0.1)]" 
                    : "bg-[#1a1a1a] border-white/5 hover:bg-[#f5a623]/5 hover:border-[#f5a623]/30"
                  }`}
                >
                   <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all flex-shrink-0 ${
                     formData.addOns.includes(addon.id) ? "bg-[#f5a623] border-[#f5a623]" : "bg-transparent border-white/20"
                   }`}>
                      {formData.addOns.includes(addon.id) && <CheckCircle2 size={14} className="text-[#0d0d0d]" />}
                   </div>
                   <div className="flex-grow">
                      <div className="flex justify-between items-center mb-0.5">
                         <span className="text-[13px] font-bold text-white group-hover:text-[#f5a623] transition-colors">{addon.name}</span>
                         <span className="text-[#f5a623] font-black text-[13px] italic">+₹{addon.price.toLocaleString()}</span>
                      </div>
                      <p className="text-[#888] text-[11px] font-dm-sans italic leading-tight">{addon.desc}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Live Price Estimator */}
        <div className="bg-[#0d0d0d] border border-[#f5a623]/20 rounded-2xl p-6 overflow-hidden shadow-xl">
           <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <Layout size={16} className="text-[#f5a623]" />
              <h5 className="text-[14px] font-black uppercase tracking-widest text-[#888] italic leading-none">📊 Estimated Total</h5>
           </div>
           
           <div className="space-y-3.5 border-b border-white/10 pb-6 mb-6">
              {/* Package Line */}
              {selectedPackageData ? (
                 <div className="flex justify-between items-center text-[13px] font-dm-sans">
                    <span className="text-white font-bold">{selectedPackageData.name}</span>
                    <span className="text-[#f5a623] font-black">₹{selectedPackageData.price.toLocaleString()}</span>
                 </div>
              ) : (
                <p className="text-white/20 text-[11px] italic font-medium py-2">Select a package to see pricing...</p>
              )}

              {/* Add-ons Lines */}
              {totals.selectedAddOns.map(addon => (
                <div key={addon.id} className="flex justify-between items-center text-[13px] font-dm-sans group">
                   <span className="text-white/60 flex items-center gap-2 group-hover:text-[#f5a623] transition-colors">
                      <PlusCircle size={12} /> {addon.name}
                   </span>
                   <span className="text-[#f5a623] font-bold">₹{addon.price.toLocaleString()}</span>
                </div>
              ))}
           </div>

           <div className="space-y-3">
              <div className="flex justify-between items-center text-[12px] text-white/30 font-dm-sans">
                 <span>Subtotal</span>
                 <span className="font-bold">₹{totals.subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                 <span className="text-xl font-heading font-black text-white italic tracking-tighter uppercase">Total Estimate</span>
                 <div className="text-right">
                    <motion.div 
                      key={totals.total}
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-2xl font-heading font-black text-[#f5a623] italic tracking-tighter leading-none"
                    >
                      ₹{totals.total.toLocaleString()}
                    </motion.div>
                    
                 </div>
              </div>
           </div>
           <div className="mt-8 bg-white/5 rounded-lg py-3 px-4 flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5a623] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f5a623]"></span>
              </span>
              <p className="text-[#888] text-[10px] font-black uppercase tracking-widest italic">Lightning fast confirmation on WhatsApp</p>
           </div>
        </div>

        {/* Field 9: Notes */}
        <div>
           <label className={labelStyle}>Notes for add-on / special requests <span className="text-white/20 not-italic">(optional)</span></label>
           <div className="relative group">
              <textarea 
                rows={4}
                maxLength={600}
                placeholder="e.g. Focus on entry moments, special song requests, Drone timing, etc."
                className={`${inputStyle('notes')} h-auto resize-none py-5 leading-relaxed overflow-hidden`}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/5">
                 <span className={`text-[9px] font-black tracking-widest font-dm-sans ${formData.notes.length > 500 ? 'text-[#f5a623]' : 'text-white/30'}`}>
                    {formData.notes.length} / 600
                 </span>
              </div>
           </div>
           <p className="text-[10px] text-white/30 font-dm-sans mt-3 ml-1 italic leading-relaxed">
             💡 Mention specific moments, styles, or references to help our creators prepare!
           </p>
        </div>

        {/* Field 10: Heard From */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>How did you hear about us? <span className="text-white/20 not-italic">(optional)</span></label>
            <select 
              className={inputStyle('source')}
              value={formData.source}
              onChange={(e) => setFormData({...formData, source: e.target.value})}
            >
              <option value="">Select an option</option>
              <option value="Instagram (@crewshoot.in)">📸 Instagram (@crewshoot.in)</option>
              <option value="WhatsApp">💬 WhatsApp</option>
              <option value="Friend / Family Referral">👥 Friend / Family Referral</option>
              <option value="Google Search">🔍 Google Search</option>
              <option value="Saw at an Event">📍 Saw at an Event</option>
              <option value="Saw a Reel Online">🎬 Saw a Reel Online</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
             <label className={labelStyle}>Were you referred by someone? <span className="text-white/20 not-italic">(optional)</span></label>
             <div className="relative group">
                <input 
                  type="text"
                  placeholder="e.g. Ravi Kumar, @instagram_handle"
                  maxLength={100}
                  className={`${inputStyle('referralName')}`}
                  value={formData.referralName}
                  onChange={(e) => setFormData({...formData, referralName: e.target.value})}
                />
             </div>
             <p className="text-[10px] text-white/30 font-dm-sans mt-2 ml-1 italic leading-relaxed">
               If a friend or creator referred you, enter their name here.
             </p>
          </div>
        </div>

        {/* Form Summary Preview */}
        <div className={`transition-all duration-700 ${summaryExpanded ? 'mb-10' : 'mb-6'}`}>
           <button 
             type="button"
             onClick={() => setSummaryExpanded(!summaryExpanded)}
             className="w-full flex items-center justify-between p-5 bg-[#0d0d0d] border border-[#f5a623]/20 rounded-2xl hover:bg-white/[0.03] transition-all group"
           >
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-[#f5a623]/10 flex items-center justify-center text-[#f5a623]">
                    <Layout size={16} />
                 </div>
                 <div className="text-left">
                    <span className="text-xs font-black uppercase italic tracking-[0.15em] text-[#f5a623]">📋 View Booking Summary</span>
                    <p className="text-[10px] text-white/30 mt-0.5">Check before sending</p>
                 </div>
              </div>
              <ChevronRight className={`text-[#f5a623] transition-all duration-500 ${summaryExpanded ? 'rotate-90 scale-125' : 'group-hover:translate-x-1'}`} size={20} />
           </button>
           
           <AnimatePresence>
             {summaryExpanded && (
               <motion.div 
                 initial={{ height: 0, opacity: 0, marginTop: 0 }}
                 animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                 exit={{ height: 0, opacity: 0, marginTop: 0 }}
                 className="p-6 bg-[#0d0d0d] border border-[#f5a623]/40 rounded-2xl shadow-2xl relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5a623]/5 blur-3xl pointer-events-none"></div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { label: "👤 Name", value: formData.name || "—" },
                      { label: "📱 Mobile", value: formData.mobile ? `+91 ${formData.mobile}` : "—", highlight: true },
                      { label: "🎉 Event", value: formData.eventType || "—" },
                      { label: "📦 Package", value: selectedPackageData?.name || "—" },
                      { label: "📅 Date", value: formData.eventDate || "—" },
                      { label: "⏰ Time", value: formData.eventTime ? formData.eventTime.split('—')[0].trim() : "—" },
                      { label: "📍 Location", value: formData.location || "—" },
                      { label: "✨ Add-ons", value: totals.selectedAddOns.map(a => a.name).join(", ") || "None" },
                      { label: "👥 Referral", value: formData.referralName || "None" },
                      { label: "📝 Notes", value: formData.notes ? (formData.notes.substring(0, 60) + (formData.notes.length > 60 ? "..." : "")) : "None" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start text-[12px] group py-1 border-b border-white/[0.03] last:border-0 pb-1.5 mb-1">
                         <span className="text-white/30 font-dm-sans group-hover:text-[#f5a623]/60 transition-colors">{item.label}:</span>
                         <span className={`text-right font-bold transition-all ${item.highlight ? 'text-[#f5a623]' : 'text-white'}`}>{item.value}</span>
                      </div>
                    ))}
                    <div className="border-t border-[#f5a623]/20 pt-5 mt-4 flex justify-between items-center">
                       <span className="text-sm font-heading font-black uppercase italic text-[#f5a623]">Estimated Total</span>
                       <span className="text-2xl font-heading font-black text-white italic tracking-tighter shadow-sm">₹{totals.total.toLocaleString()}</span>
                    </div>
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
           {showSuccess ? (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-[#22c55e] border border-[#22c55e]/30 p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(34,197,94,0.2)]"
             >
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white shrink-0 animate-bounce">
                      <CheckCircle2 size={32} />
                   </div>
                   <div>
                      <h5 className="text-xl font-heading font-black text-white uppercase italic leading-tight tracking-tight">Booking Received, {formData.name.split(' ')[0]}! 🎉</h5>
                      <p className="text-xs font-bold text-white/80 uppercase tracking-widest mt-1">Opening WhatsApp for confirmation...</p>
                   </div>
                </div>
             </motion.div>
           ) : (
             <motion.button
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               type="submit"
               disabled={isSubmitting}
               className={`w-full h-16 bg-[#f5a623] hover:bg-white text-[#0d0d0d] font-heading font-black text-xl uppercase italic rounded-[50px] transition-all duration-300 shadow-[0_20px_40px_rgba(245,166,35,0.3)] flex items-center justify-center gap-4 group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:saturate-150'}`}
             >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-black/20 border-t-black rounded-full animate-spin"></div>
                    <span className="tracking-tighter">Sending your booking...</span>
                  </>
                ) : (
                  <>
                    <span className="tracking-tighter">Let&apos;s Reel IT! ⚡</span>
                    <Send size={24} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-500 rotate-[-12deg]" />
                  </>
                )}
             </motion.button>
           )}
           <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-1 h-1 bg-[#f5a623]/20 rounded-full"></div>
                 ))}
                 <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] font-dm-sans italic">Shoot · Edit · Post · Instantly</p>
                 {[1,2,3].map(i => (
                   <div key={i} className="w-1 h-1 bg-[#f5a623]/20 rounded-full"></div>
                 ))}
              </div>
           </div>
        </div>
      </form>
    </div>
  );
}
