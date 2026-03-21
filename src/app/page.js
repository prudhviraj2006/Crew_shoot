import Hero from "@/components/home/Hero";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import PricingBestsellers from "@/components/home/PricingBestsellers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import BookingForm from "@/components/home/BookingForm";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <BrandsMarquee />
      <PricingBestsellers />
      <WhyChooseUs />
      <ProcessTimeline />
      <TestimonialCarousel />
      <BookingForm />
      <FAQ />
    </div>
  );
}
