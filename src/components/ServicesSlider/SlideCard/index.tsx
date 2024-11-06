import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SlideCard = ({
  title,
  text,
  imageHref,
}: {
  title: string;
  text: string;
  imageHref: string;
}) => {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-white flex-shrink-0">
      <div className="lg:grid lg:grid-cols-2 grid-cols-1 flex flex-col justify-between w-full h-full">
        <div className="flex flex-col lg:gap-10 md:gap-8 gap-6 bg-white p-12">
          <div className="lg:text-6xl md:text-5xl text-4xl font-bold">
            {title}
          </div>
          <div className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-500">
            {text}
          </div>
          <div className="w-full flex justify-end">
            <Link
              href={""}
              className="bg-primary text-white hover:bg-[#2a3a73] md:text-xl text-lg font-semibold px-8 py-2 rounded-md transition-colors duration-150"
            >
              المزيد
            </Link>
          </div>
        </div>
        <div className="w-full lg:aspect-auto md:aspect-[5/2] aspect-square object-cover object-center relative rounded-xl overflow-hidden shadow-[10px_0_20px_0px_rgba(0,0,0,0.2)]">
          <Image src={imageHref} alt={"title"} fill />
        </div>
      </div>
    </div>
  );
};
