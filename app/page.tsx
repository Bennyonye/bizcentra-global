import Hero from "@/app/sections/Hero";
import ServicesOverview from "@/app/sections/ServicesOverview";
import WhyChooseUs from "@/app/sections/WhyChooseUs";
import Testimonials from "@/app/sections/Testimonials";
import CTASection from "@/app/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}