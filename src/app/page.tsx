import { HeroSection } from "@/components/HeroSection";
import { TopMenu } from "@/components/TopMenu";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopMenu />
      <HeroSection />
    </div>
  );
}
