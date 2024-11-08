import React from "react";
import { StarIcon } from "../AnimatedIcons";

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star, idx) => {
        return (
          <div key={idx} className="w-5 h-5">
            <StarIcon
              className={`${
                rating >= star ? "fill-[#FFC400]" : "fill-[#D9D9D9]"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
