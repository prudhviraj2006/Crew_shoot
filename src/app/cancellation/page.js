import React from "react";
import LegalPageLayout, { HighlightBox } from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Cancellation & Refund Policy — Crewshoot.in",
  description: "Crewshoot.in cancellation and refund policy for instant reel services. Clear, transparent, and fair — owned by Deccan Branding Company.",
};

const RefundTimelineTable = () => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#161616] mt-8 mb-12 shadow-2xl">
    <div className="grid grid-cols-2 bg-accent text-black font-black uppercase text-[11px] tracking-[0.2em] py-4 px-6 italic">
      <div>Cancellation Time</div>
      <div className="text-right">Refund</div>
    </div>
    <div className="divide-y divide-white/5 font-medium">
      <div className="grid grid-cols-2 py-5 px-6 items-center hover:bg-white/[0.02] transition-colors">
        <div className="text-white">48+ hours prior</div>
        <div className="text-right text-emerald-400 font-bold">100% Refund</div>
      </div>
      <div className="grid grid-cols-2 py-5 px-6 items-center hover:bg-white/[0.02] transition-colors">
        <div className="text-white">24–48 hours</div>
        <div className="text-right text-accent font-bold">50% Refund</div>
      </div>
      <div className="grid grid-cols-2 py-5 px-6 items-center hover:bg-white/[0.02] transition-colors">
        <div className="text-white">Under 24 hours</div>
        <div className="text-right text-red-500 font-bold">No Refund</div>
      </div>
      <div className="grid grid-cols-2 py-5 px-6 items-center hover:bg-white/[0.02] transition-colors">
        <div className="text-white">No Show</div>
        <div className="text-right text-red-500 font-bold">No Refund</div>
      </div>
    </div>
  </div>
);

export default function CancellationPage() {
  const sections = [
    {
      id: "overview",
      title: "1. Overview",
      content: (
        <>
          <p>
            At Crewshoot, we understand that plans change. Our cancellation policy is designed to be fair to both clients and our creators, who travel and prepare for each shoot.
          </p>
          <HighlightBox>
            All cancellation requests must be sent to:
            <br />📧 crewshoot25@gmail.com
            <br />📱 WhatsApp: +91 93603 31912
          </HighlightBox>
        </>
      ),
    },
    {
      id: "cancellation",
      title: "2. Cancellation by Client",
      content: (
        <>
          <p>Our refund policy is based on the timeline of your cancellation request:</p>
          <RefundTimelineTable />
          <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
            <li><strong>More than 48 hours:</strong> Full refund or free rescheduling to a future date.</li>
            <li><strong>24 to 48 hours:</strong> 50% refund or free rescheduling to a future date within 30 days.</li>
            <li><strong>Less than 24 hours:</strong> No refund applicable as creators have already been assigned and prepared.</li>
            <li><strong>On the day:</strong> No refund or rescheduling credit. Full booking amount is forfeited.</li>
          </ul>
        </>
      ),
    },
    {
      id: "rescheduling",
      title: "3. Rescheduling Policy",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Rescheduling requests made more than 48 hours before shoot: FREE, unlimited.</li>
          <li>Rescheduling 24–48 hours before: ONE free reschedule allowed per booking.</li>
          <li>Same-day rescheduling: subject to creator availability, may incur a ₹500 rescheduling fee.</li>
          <li>All rescheduled shoots must be booked within 60 days of original shoot date.</li>
        </ul>
      ),
    },
    {
      id: "by-crewshoot",
      title: "4. Cancellation by Crewshoot",
      content: (
        <div className="space-y-4">
          <p>If Crewshoot cancels your booking due to creator unavailability, technical failure, or force majeure:</p>
          <HighlightBox>
            <ul className="space-y-3 font-medium italic text-[#f0ede6]/90">
              <li>• FULL REFUND of any amount paid, OR</li>
              <li>• FREE RESCHEDULING to your preferred future date with priority slot</li>
            </ul>
          </HighlightBox>
        </div>
      ),
    },
    {
      id: "refunds",
      title: "5. Refund Process",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Approved refunds are processed within 5 to 7 working days.</li>
          <li>Refunds are credited to the original payment method (UPI/bank/card).</li>
          <li>Razorpay/payment gateway charges (if any) are non-refundable.</li>
          <li>GST paid on services is non-refundable as per Indian tax law.</li>
        </ul>
      ),
    },
    {
      id: "addons",
      title: "6. Add-on Refunds",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Add-ons are refundable only if cancellation is made more than 48 hours before the shoot.</li>
          <li>Drone Shot add-on: fully refundable if cancelled by client 24+ hours prior, OR if Crewshoot cannot execute it due to weather/location restrictions.</li>
          <li>"No Watermark" add-on: non-refundable once the reel has been delivered without the watermark.</li>
        </ul>
      ),
    },
    {
      id: "disputes",
      title: "7. Revision Disputes",
      content: (
        <div className="space-y-4">
          <HighlightBox>
            If you are unhappy with your reel, please use your 2 included minor revisions first before requesting a refund.
          </HighlightBox>
          <p className="font-light text-[#ccc]/80">
            Refunds due to creative dissatisfaction are not applicable if the content was shot and delivered as per the agreed shoot brief.
          </p>
        </div>
      ),
    },
    {
      id: "partial",
      title: "8. Partial Delivery",
      content: (
        <p>
          If only part of the package was delivered (e.g., 1 reel instead of 2): A proportional refund for the undelivered portion will be issued, OR the missing reel will be delivered at no extra charge within 48 hours.
        </p>
      ),
    },
    {
      id: "weddings",
      title: "9. Wedding Packages — Special Terms",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Full package cancellation more than 7 days before: 80% refund.</li>
          <li>Full package cancellation 3–7 days before: 50% refund.</li>
          <li>Less than 3 days before: no refund.</li>
          <li>Rescheduling: free if requested 7+ days before first event.</li>
        </ul>
      ),
    },
    {
      id: "how-to",
      title: "10. How to Request a Cancellation",
      content: (
        <div className="space-y-6">
          <p>Follow these steps to request a cancellation or refund:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <span className="text-accent font-black text-2xl mb-2 block">01</span>
              <p className="text-sm">Contact us via WhatsApp or Email</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <span className="text-accent font-black text-2xl mb-2 block">02</span>
              <p className="text-sm">Provide your booking name + event date</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <span className="text-accent font-black text-2xl mb-2 block">03</span>
              <p className="text-sm">State your reason for cancellation</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <span className="text-accent font-black text-2xl mb-2 block">04</span>
              <p className="text-sm">Refund initiated within 5–7 business days</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "resolution",
      title: "11. Disputes",
      content: (
        <p>
          If you believe a refund has been unfairly denied, please email crewshoot25@gmail.com with subject: "Refund Dispute — [Booking Name]".
        </p>
      ),
    },
    {
      id: "contact",
      title: "12. Contact us",
      content: (
        <p>
          For cancellation, refund, or rescheduling:
          <br />📧 crewshoot25@gmail.com
          <br />📱 +91 93603 31912 (WhatsApp)
          <br />🌐 www.crewshoot.in
        </p>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Cancellation & Refund Policy"
      subtitle="We believe in complete transparency. Here's our fair cancellation and refund policy."
      lastUpdated="January 1, 2025"
      sections={sections}
      currentPage="/cancellation"
    />
  );
}
