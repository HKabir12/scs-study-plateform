// import { CarouselDemo } from "@/components/landingpage/Carousel";
import ExamSystem from "@/components/landingpage/ExamSystem";
import FAQSection from "@/components/landingpage/FAQSection";
import MentorSection from "@/components/landingpage/MentorSection";
import ServicesSection from "@/components/landingpage/ServicesSection";
import { SuccessTimeline } from "@/components/landingpage/TimelineDemo";
import UpcomingCourses from "@/components/landingpage/UpcomingCourses";
import WhyChooseUs from "@/components/landingpage/WhyChooseUs";
import HeroSection from "@/components/layout/HeroSection";

import MarqueeText from "@/components/utilities/MarqueeText";

export default function Home() {
  return (
    <div>
      <MarqueeText />
      <HeroSection />
      <UpcomingCourses />
      <SuccessTimeline />
      <ExamSystem />
      <MentorSection />
      <WhyChooseUs />
      <FAQSection />
      <ServicesSection />
    </div>
  );
}
