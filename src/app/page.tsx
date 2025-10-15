import { CarouselDemo } from "@/components/landingpage/Carousel";
import ServicesSection from "@/components/landingpage/ServicesSection";
import { SuccessTimeline } from "@/components/landingpage/TimelineDemo";

import HeroSection from "@/components/layout/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CarouselDemo />
      <SuccessTimeline />
      <ServicesSection />
    </div>
  );
}
