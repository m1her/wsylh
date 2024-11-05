import { AboutUs } from "@/components/AboutUs";
import { Ad } from "@/components/Ad";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { OurApplications } from "@/components/OurApplications";
import { OurServices } from "@/components/OurServices";
import { Pricing } from "@/components/Pricing";
import { TopMenu } from "@/components/TopMenu";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopMenu />
      <HeroSection />
      <OurServices />
      <Ad />
      <AboutUs />
      <OurApplications />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <Ad />
      <Footer />
      <Whatsapp />
    </div>
  );
}
