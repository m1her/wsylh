import { AboutUs } from "@/components/AboutUs";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSlider } from "@/components/ServicesSlider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUs />
      <ServicesSlider />
    </div>
  );
}
