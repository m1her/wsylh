"use client";
import React, { useEffect, useState } from "react";
import { SlideCard } from "./SlideCard";
import { servicesSliderData } from "./servicesSliderData";

export const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % servicesSliderData.length
        );
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const bullitHandler = (idx: number) => {
    setCurrentIndex(idx);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section
      id="SERVICES_SLIDER"
      className="w-full bg-gray-100 flex flex-col items-center gap-6 md:py-16 py-12 md:px-14 px-10"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="md:text-4xl text-3xl font-semibold">وسيلة</div>
        <div className="md:text-3xl text-2xl font-semibold">
          نظام الاختبارات الورقية المتكامل
        </div>
        <div className="text-center md:text-xl text-lg text-gray-500">
          حلول مبتكرة لإنشاء وإدارة الاختبارات بكفاءة عالية
        </div>
        <div className="w-32 md:h-1 h-0.5 rounded-full bg-secondary"></div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(${currentIndex} * 100% + ${currentIndex} * 24px))`,
          }}
        >
          {servicesSliderData.map((item, idx) => (
            <SlideCard
              key={idx}
              title={item.title}
              text={item.text}
              imageHref={item.imageHref}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {servicesSliderData.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 rounded-full cursor-pointer transition-all duration-500 ease-linear
                ${currentIndex === idx ? "bg-secondary w-6" : "bg-gray-400 w-3"}
                `}
            onClick={() => bullitHandler(idx)}
          ></div>
        ))}
      </div>
    </section>
  );
};
