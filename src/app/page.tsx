import { AboutUs } from "@/components/AboutUs";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSlider } from "@/components/ServicesSlider";
import { Testimonials } from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WSYLH Landing Page Main link</title>
        <meta
          name="description"
          content="hero section about wsylh, about us section, slider shows wsylh services, testimonials of users used wsylh"
        />
        <meta
          name="keywords"
          content="services, about us, testimonials, hero section"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Welcome to WSYLH" />
        <meta property="og:description" content="انضم الينا لإنشاء اختباراتك بكل احترافية" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col">
        <HeroSection />
        <AboutUs />
        <ServicesSlider />
        <Testimonials />
      </div>
    </>
  );
}
