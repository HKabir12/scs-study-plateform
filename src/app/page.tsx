// import { CarouselDemo } from "@/components/landingpage/Carousel";
import FAQSection from "@/components/landingpage/FAQSection";
import ServicesSection from "@/components/landingpage/ServicesSection";
import { SuccessTimeline } from "@/components/landingpage/TimelineDemo";
import WhyChooseUs from "@/components/landingpage/WhyChooseUs";

import HeroSection from "@/components/layout/HeroSection";
import MarqueeText from "@/components/utilities/MarqueeText";

export default function Home() {
  return (
    <div>
      <MarqueeText />
      <HeroSection />
      {/* <CarouselDemo /> */}
      <SuccessTimeline />
      <WhyChooseUs />
      <FAQSection />
      <ServicesSection />
    </div>
  );
}
