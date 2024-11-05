import { HeroSection } from "@/components/HeroSection";
import { OurServices } from "@/components/OurServices";
import { TopMenu } from "@/components/TopMenu";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopMenu />
      <HeroSection />
      <OurServices />
    </div>
  );
}
