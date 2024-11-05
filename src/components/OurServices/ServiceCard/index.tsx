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
    <div className="w-full border border-gray-400 text-black rounded-md p-8 flex flex-col gap-y-4 hover:bg-primary hover:text-white transition-colors duration-200">
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-primary border-2 border-white">
        <Image src={icon} alt={"file"} width={35} height={35} />
      </div>
      <div className="font-medium text-3xl">{title}</div>
      <div className="text-lg font-normal opacity-90">{text}</div>
    </div>
  );
};
