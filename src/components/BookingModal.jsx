"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "./home/BookingForm";

export default function BookingModal({ isOpen, onClose, initialPackage = "", initialEventType = "" }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4 sm:p-6"
          >
            <div className="bg-[#111] w-full max-w-2xl max-h-[90vh] rounded-[2rem] border border-white/5 shadow-2xl overflow-y-auto pointer-events-auto relative scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              {/* Form padding wrapper */}
              <div className="p-4 sm:p-2">
                <BookingForm 
                  isModal={true} 
                  onClose={onClose} 
                  initialPackage={initialPackage}
                  initialEventType={initialEventType}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
