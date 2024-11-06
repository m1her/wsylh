import React from "react";
import { HelpCard } from "./HelpCard";
import { helpData } from "./helpData";

export const HelpSection = () => {
  return (
    <div className="w-full flex flex-col md:gap-6 gap-4 items-center mt-10">
      {helpData.map((item, idx) => (
        <HelpCard
          key={idx}
          title={item.title}
          text={item.text}
          iconUrl={item.iconUrl}
        />
      ))}
    </div>
  );
};
