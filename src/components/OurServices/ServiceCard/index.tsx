import Image from "next/image";
import React from "react";

export const ServiceCard = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="w-full border border-gray-400 text-black rounded-md md:p-8 p-6 flex flex-col md:gap-y-4 gap-y-2 hover:bg-primary hover:text-white transition-colors duration-200">
      <div className="md:w-20 md:h-20 w-16 h-16 rounded-full flex items-center justify-center bg-primary border-2 border-white">
        <Image src={icon} alt={"file"} width={35} height={35} className="md:w-9 w-6" />
      </div>
      <div className="font-medium md:text-3xl text-2xl">{title}</div>
      <div className="md:text-lg text-base font-normal opacity-90">{text}</div>
    </div>
  );
};
