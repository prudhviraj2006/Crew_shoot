import React from "react";
import LegalPageLayout, { HighlightBox } from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Terms & Conditions — Crewshoot.in",
  description: "Read the Terms & Conditions for Crewshoot.in — Tirupati's First Instant Reel Service. Owned by Deccan Branding Company.",
};

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            By booking or using any service offered by Crewshoot.in ("Crewshoot", "we", "us", "our"), you ("Client", "you") agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
          </p>
          <p>
            Crewshoot.in is owned and operated by Deccan Branding Company, based in Tirupati, Andhra Pradesh, India.
          </p>
        </>
      ),
    },
    {
      id: "services",
      title: "2. Services Provided",
      content: (
        <>
          <p>Crewshoot provides on-location instant reel creation services including:</p>
          <ul className="list-disc pl-5 space-y-2 font-light text-[#ccc]/80">
            <li>Video shooting at client events/locations</li>
            <li>On-spot editing and delivery</li>
            <li>Reel content for personal, social, and corporate use</li>
            <li>Creator matching and coordination</li>
          </ul>
          <p>Services are delivered primarily across Tirupati & Chittoor, Andhra Pradesh.</p>
        </>
      ),
    },
    {
      id: "booking",
      title: "3. Booking & Confirmation",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>All bookings are confirmed only after receiving acknowledgement from Crewshoot via WhatsApp or email.</li>
          <li>Booking via the website form or WhatsApp to +91 93603 31912 constitutes an offer.</li>
          <li>Crewshoot reserves the right to accept or decline any booking request.</li>
          <li>Slot availability is not guaranteed until written confirmation is received.</li>
          <li>Clients must provide accurate event details including date, time, location, and type.</li>
        </ul>
      ),
    },
    {
      id: "pricing",
      title: "4. Pricing & Payment",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>All prices listed on crewshoot.in are in Indian Rupees (₹) and exclude GST unless stated otherwise.</li>
          <li>GST at 18% is applicable on all packages and add-ons.</li>
          <li>Full payment or advance (as agreed) must be made before the shoot begins.</li>
          <li>Crewshoot accepts UPI, Razorpay, NEFT, Visa, and Mastercard payments.</li>
          <li>Prices are subject to change without prior notice. Confirmed bookings are honoured at the price agreed at booking.</li>
        </ul>
      ),
    },
    {
      id: "packages",
      title: "5. Packages & Add-ons",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
            <li>Each package includes what is explicitly stated on the pricing page.</li>
            <li>Add-ons must be selected and paid for at the time of booking or before shoot.</li>
            <li>The "No Watermark" add-on (₹2,500) must be purchased to receive reels without the Crewshoot watermark.</li>
            <li>Drone shots are subject to location permissions and weather conditions. If a drone shot cannot be delivered due to these factors, a full refund for that add-on will be issued.</li>
          </ul>
        </>
      ),
    },
    {
      id: "revisions",
      title: "6. Revisions Policy",
      content: (
        <HighlightBox>
          <ul className="space-y-3 font-medium italic text-[#f0ede6]/90">
            <li>• Every reel package includes 2 minor revisions free of charge per reel.</li>
            <li>• "Minor revisions" means small edits such as music change, trim adjustments, text edits, or colour correction.</li>
            <li>• Major re-edits, reshoots, or structural changes are not covered under free revisions and will be charged separately.</li>
            <li>• Revision requests must be submitted within 48 hours of reel delivery.</li>
            <li>• Revisions beyond the 2 included are available at ₹500 per additional revision.</li>
          </ul>
        </HighlightBox>
      ),
    },
    {
      id: "delivery",
      title: "7. Content Delivery",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Reels are typically delivered within 30 to 60 minutes of shoot completion, often before the event ends.</li>
          <li>Delivery timelines may vary based on event size, package selected, and internet connectivity at the venue.</li>
          <li>Content is delivered via secure cloud download link shared on WhatsApp or email.</li>
          <li>Download links are valid for 7 days. Crewshoot is not responsible for content lost after link expiry.</li>
        </ul>
      ),
    },
    {
      id: "ip",
      title: "8. Intellectual Property",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Upon full payment, the client owns the final edited reels and raw footage (if raw footage add-on was purchased).</li>
          <li>Crewshoot retains the right to use edited reels for portfolio, marketing, social media promotion, and case studies UNLESS the client explicitly requests confidentiality in writing before the shoot.</li>
          <li>Crewshoot logo/watermark remains on reels unless the "Remove Watermark" add-on (₹2,500) is purchased.</li>
          <li>Crewshoot's brand name, logo, and website content are protected intellectual property of Deccan Branding Company.</li>
        </ul>
      ),
    },
    {
      id: "responsibilities",
      title: "9. Client Responsibilities",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Client must ensure the shoot location is accessible and safe for our creators.</li>
          <li>Client must inform Crewshoot of any restricted filming areas at the venue.</li>
          <li>Client is responsible for obtaining any necessary permissions for filming at third-party venues, temples, or events.</li>
          <li>Client must be available or designate a point of contact at the event.</li>
        </ul>
      ),
    },
    {
      id: "conduct",
      title: "10. Creator Conduct",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>All Crewshoot creators are trained, verified, and quality-checked.</li>
          <li>Creators will behave professionally and respectfully at all times.</li>
          <li>If a client is dissatisfied with creator conduct, they must report it to crewshoot25@gmail.com within 24 hours.</li>
        </ul>
      ),
    },
    {
      id: "liability",
      title: "11. Limitation of Liability",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Crewshoot is not liable for any indirect, incidental, or consequential damages arising from use of our services.</li>
          <li>In the event of technical failure, device malfunction, or force majeure preventing delivery, Crewshoot will offer a partial or full refund based on services rendered.</li>
          <li>Maximum liability is limited to the amount paid for the specific booking.</li>
        </ul>
      ),
    },
    {
      id: "force-majeure",
      title: "12. Force Majeure",
      content: (
        <p>
          Crewshoot is not responsible for failure to deliver services due to events beyond our reasonable control, including but not limited to natural disasters, power failures, government restrictions, or internet outages.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "13. Governing Law",
      content: (
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Tirupati, Andhra Pradesh.
        </p>
      ),
    },
    {
      id: "changes",
      title: "14. Changes to Terms",
      content: (
        <p>
          Crewshoot reserves the right to update these Terms at any time. Continued use of services after changes constitutes acceptance of the updated Terms.
        </p>
      ),
    },
    {
      id: "contact",
      title: "15. Contact",
      content: (
        <p>
          For any questions regarding these Terms:
          <br />📧 crewshoot25@gmail.com
          <br />📱 +91 93603 31912 (WhatsApp)
          <br />🌐 www.crewshoot.in
          <br />📍 Tirupati, Andhra Pradesh
        </p>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before booking any service with Crewshoot."
      lastUpdated="March 23, 2026"
      sections={sections}
      currentPage="/terms"
    />
  );
}
