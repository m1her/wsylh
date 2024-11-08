"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export const HelpCard = ({
  title,
  text,
  iconUrl,
}: {
  title: string;
  text: string;
  iconUrl: string;
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
      { threshold: 1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRefCur) observer.unobserve(cardRefCur);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`md:w-2/3 w-full px-6 py-6 bg-white rounded-lg flex md:flex-row flex-col items-center gap-6 border border-gray-300 shadow-[0_0_15px_0px_rgba(0,0,0,0.15)] 
        hover:shadow-[0_0_15px_0px_rgba(0,0,0,0.2)] hover:border-gray-500 transition-opacity duration-700 ${
          isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
    >
      <Image
        src={iconUrl}
        alt={"add"}
        width={100}
        height={100}
        className="w-12 h-12"
      />
      <div className="flex flex-col md:items-start items-center md:text-start text-center gap-2">
        <div className="text-xl font-bold text-primary">{title}</div>
        <div className="text-gray-600 font-semibold">{text}</div>
      </div>
    </div>
  );
};
