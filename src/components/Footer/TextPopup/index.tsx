"use client";
import React, { useEffect, useState } from "react";

export const TextPopup = ({
  title,
  text,
}: {
  title: string;
  text: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 7000);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <div
        className="mt-2 hover:text-gray-800 cursor-pointer select-none"
        onClick={() => setIsOpen(true)}
      >
        {title}
      </div>
      {isOpen && (
        <>
          <div className="absolute w-[400px] flex flex-col gap-1 text-xs top-8 start-0 z-50 shadow-[0_0_7px_-1px_rgba(0,0,0,0.2)] p-4 bg-white border border-gray-500 rounded-lg">
            {text.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <div
            className="fixed top-0 left-0 z-40 w-full h-screen"
            onClick={() => setIsOpen(false)}
          ></div>
        </>
      )}
    </div>
  );
};
