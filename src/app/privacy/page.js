import React from "react";
import LegalPageLayout, { HighlightBox } from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy — Crewshoot.in",
  description: "How Crewshoot.in collects, uses, and protects your personal data. Owned by Deccan Branding Company, Tirupati.",
};

export default function PrivacyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <>
          <p>
            Crewshoot.in ("we", "us", "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and share your data when you visit www.crewshoot.in or book our services.
          </p>
          <p>
            Crewshoot.in is owned by Deccan Branding Company, Tirupati, Andhra Pradesh, India.
            <br />Contact: crewshoot25@gmail.com
          </p>
        </>
      ),
    },
    {
      id: "collection",
      title: "2. Information We Collect",
      content: (
        <div className="space-y-6">
          <p>We collect the following information when you:</p>
          <div>
            <h4 className="text-white font-bold mb-2">(a) Fill the booking form:</h4>
            <ul className="list-disc pl-5 space-y-1 font-light text-[#ccc]/80">
              <li>Full name, Mobile number</li>
              <li>Event type and date, Location</li>
              <li>Package selected, Add-ons</li>
              <li>How you heard about us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">(b) Submit a review:</h4>
            <ul className="list-disc pl-5 space-y-1 font-light text-[#ccc]/80">
              <li>Name, mobile (for verification only)</li>
              <li>Event type, rating, review text</li>
              <li>Optional: photo, role, location</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">(c) Apply to become a creator:</h4>
            <ul className="list-disc pl-5 space-y-1 font-light text-[#ccc]/80">
              <li>Name, mobile, Instagram handle</li>
              <li>iPhone model, editing app, sample reel link</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">(d) Browse our website:</h4>
            <ul className="list-disc pl-5 space-y-1 font-light text-[#ccc]/80">
              <li>IP address, browser type, device info</li>
              <li>Pages visited and referral source</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>We use your data to:</p>
          <ul className="list-disc pl-5 space-y-2 font-light text-[#ccc]/80">
            <li>Confirm and manage your booking</li>
            <li>Assign the right creator to your event</li>
            <li>Communicate via WhatsApp and email</li>
            <li>Send your reel delivery link</li>
            <li>Process revisions and feedback</li>
            <li>Verify and display approved reviews</li>
            <li>Improve our website and services</li>
          </ul>
          <HighlightBox>
            We do NOT use your data for selling to third parties, unsolicited spam, or any purpose not listed above.
          </HighlightBox>
        </div>
      ),
    },
    {
      id: "whatsapp",
      title: "4. WhatsApp Communication",
      content: (
        <p>
          By submitting a booking form, you consent to receiving WhatsApp messages from +91 93603 31912 regarding your booking, delivery updates, and follow-ups. You may opt out at any time by messaging "STOP" to our WhatsApp number.
        </p>
      ),
    },
    {
      id: "security",
      title: "5. Data Storage & Security",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Booking and review data is stored securely via Firebase Firestore and/or EmailJS, protected by encryption.</li>
          <li>All reel and video content is stored on encrypted cloud servers.</li>
          <li>We implement reasonable technical measures to prevent unauthorized access.</li>
          <li>But no online transmission is 100% secure. We cannot guarantee absolute data security.</li>
        </ul>
      ),
    },
    {
      id: "content",
      title: "6. Content & Media",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Video and photo content created during your shoot is stored on our secure cloud.</li>
          <li>Your content is NEVER shared publicly without your explicit written consent.</li>
          <li>If you prefer your content remain private, please inform us in writing before the shoot.</li>
          <li>Crewshoot may use anonymized shoot statistics for marketing without identifying clients.</li>
        </ul>
      ),
    },
    {
      id: "cookies",
      title: "7. Cookies",
      content: (
        <p>
          Our website may use cookies to remember your preferences and analyse website traffic (Google Analytics). You can disable cookies in your browser settings.
        </p>
      ),
    },
    {
      id: "third-party",
      title: "8. Third-Party Services",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>WhatsApp (Meta) — booking communication</li>
          <li>Firebase (Google) — data storage</li>
          <li>EmailJS — form submissions</li>
          <li>Razorpay — payment processing</li>
          <li>Vercel — website hosting</li>
        </ul>
      ),
    },
    {
      id: "rights",
      title: "9. Your Rights",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Access, correct, or delete your personal data.</li>
          <li>Withdraw consent for marketing messages.</li>
          <li>Request a copy of your data via email: crewshoot25@gmail.com</li>
        </ul>
      ),
    },
    {
      id: "retention",
      title: "10. Data Retention",
      content: (
        <ul className="list-disc pl-5 space-y-3 font-light text-[#ccc]/80">
          <li>Booking data: 1 year | Review data: indefinite</li>
          <li>Creator application data: 6 months</li>
          <li>Video content: 30 days after delivery (unless cloud storage add-on purchased)</li>
        </ul>
      ),
    },
    {
      id: "children",
      title: "11. Children's Privacy",
      content: (
        <p>
          Our services are not directed to children under 13. We do not knowingly collect personal data from children.
        </p>
      ),
    },
    {
      id: "changes",
      title: "12. Changes to Policy",
      content: (
        <p>
          We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.
        </p>
      ),
    },
    {
      id: "contact",
      title: "13. Contact Us",
      content: (
        <p>
          For any privacy-related queries:
          <br />📧 crewshoot25@gmail.com
          <br />📱 +91 93603 31912 (WhatsApp)
          <br />🌐 www.crewshoot.in
        </p>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Your privacy matters to us. Here's exactly how we collect, use, and protect your data."
      lastUpdated="January 1, 2025"
      sections={sections}
      currentPage="/privacy"
    />
  );
}
