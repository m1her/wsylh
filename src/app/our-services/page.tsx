import { Ad } from "@/components/Ad";
import { FAQ } from "@/components/FAQ";
import { HowItWorks } from "@/components/HowItWorks";
import { OurServices } from "@/components/OurServices";
import { Pricing } from "@/components/Pricing";
import React from "react";

const Our_Services = () => {
  return (
    <div className="flex flex-col">
      <OurServices />
      <Ad />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <Ad />
    </div>
  );
};

export default Our_Services;
