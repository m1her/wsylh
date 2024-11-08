"use client";
import React, { useState, useEffect } from "react";
import { TestimonialCard } from "./TestimonialCard";
import Image from "next/image";
import { TestimonialsData } from "./TestimonialsData";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const maxIndex = TestimonialsData.length - itemsToShow;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 md:py-16 py-12 md:px-14 px-10">
      <div className="w-full flex justify-start relative mt-6">
        <div className="absolute flex justify-center items-center bottom-0 start-0 w-20 h-20 bg-secondary rounded-full z-10">
          <div className="bg-[url('/icons/quote-left.svg')] bg-no-repeat me-8 w-12 h-12"></div>
        </div>
        <div className="md:text-3xl text-2xl font-semibold ms-8 z-20">
          ماذا يقول عملاؤنا عنا
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {TestimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 px-2`}
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <TestimonialCard
                name={testimonial.name}
                comment={testimonial.comment}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Carousel Controls */}
      <div className="w-full flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 rounded-full disabled:opacity-30 disabled:scale-90"
        >
          <Image
            src={"/icons/arrow-right.svg"}
            alt={"left"}
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="p-2 rounded-full disabled:opacity-30 disabled:scale-90"
        >
          <Image
            src={"/icons/arrow-left.svg"}
            alt={"left"}
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </button>
      </div>
    </div>
  );
};
