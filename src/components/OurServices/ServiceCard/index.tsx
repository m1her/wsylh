"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
export const ServiceCard = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardRefCur = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRefCur) observer.unobserve(cardRefCur);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      className={`w-full border border-gray-400 text-black rounded-md md:p-6 p-4 flex flex-col md:gap-y-3 gap-y-2 hover:bg-primary hover:text-white transition-colors duration-200 ${
        isVisible ? "opacity-100 animate-serviceCard" : "opacity-0"
      }`}
    >
      <div className="md:w-20 md:h-20 w-16 h-16 rounded-full flex items-center justify-center bg-primary border-2 border-white">
        <Image
          src={icon}
          alt={"file"}
          width={35}
          height={35}
          className="md:w-9 w-6"
        />
      </div>
      <div className="font-medium md:text-2xl text-xl">{title}</div>
      <div className="md:text-base text-m font-normal opacity-90">{text}</div>
    </div>
  );
};
