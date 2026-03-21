"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919360331912?text=Hey%20Crewshoot%21%20I%20want%20to%20book%20an%20instant%20reel%21"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-pulse-slow hover:scale-110 active:scale-95 transition-transform flex items-center justify-center cursor-pointer group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-black/5">
        Chat with us!
      </span>
    </a>
  );
}
