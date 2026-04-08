import Hero from "@/components/home/Hero";
import VideoCarousel from "@/components/home/VideoCarousel";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import PricingBestsellers from "@/components/home/PricingBestsellers";
import ReelYourStoreSection from "@/components/home/ReelYourStoreSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import BookingForm from "@/components/home/BookingForm";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <VideoCarousel />
      <BrandsMarquee />
      <PricingBestsellers />
      <ReelYourStoreSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <TestimonialCarousel />
      <BookingForm />
      <FAQ />
    </div>
  );
}
