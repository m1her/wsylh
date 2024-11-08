import Rating from "@/components/Rating";
import Image from "next/image";
import React from "react";

export const TestimonialCard = ({
  name,
  comment,
  rating,
}: {
  name: string;
  comment: string;
  rating: number;
}) => {
  return (
    <div className="border h-full lg:min-w-[30%] border-gray-500 flex flex-col gap-4 p-8 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-4">
        <Image
          src={"/icons/ManUser.svg"}
          alt={"user"}
          width={50}
          height={50}
          className="w-16 h-16 rounded-full aspect-square flex-shrink-0 border border-primary"
        />
        <div className="flex flex-col gap-2">
          <Rating rating={rating} />
          <div className="font-bold">{name}</div>
        </div>
      </div>
      <div>{comment}</div>
    </div>
  );
};
