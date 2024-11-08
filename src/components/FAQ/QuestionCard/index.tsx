import Image from "next/image";
import React from "react";

export const QuestionCard = ({
  isOpen,
  setOpen,
  question,
  answer,
  id,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
  question: string;
  answer: string;
  id: number;
}) => {
  const handleClick = () => {
    if (isOpen) {
      setOpen(0);
    } else {
      setOpen(id);
    }
  };
  return (
    <div
      className="h-fit cursor-pointer px-6 py-4 bg-white w-full flex flex-col rounded border border-gray-100 shadow-[0_0_7px_-2px_rgba(0,0,0,0.1)] group"
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <Image
          src={"/icons/question.svg"}
          width={10}
          height={10}
          alt={"?"}
          className="self-start mt-2"
        />
        <p
          className={`text-lg font-semibold group-hover:text-primary
            ${isOpen ? "text-primary" : "text-black"}
            transition-all duration-150 ease-linear
            `}
        >
          {question}
        </p>
        <div className="w-5 h-5 ms-auto relative">
          <div
            className={`w-full h-0.5 rounded-full bg-black absolute top-1/2
                ${isOpen ? "rotate-45" : "rotate-0"}
                transition-all duration-150 ease-linear
                `}
          ></div>
          <div
            className={`w-full h-0.5 rounded-full bg-black absolute top-1/2
                ${isOpen ? "-rotate-45" : "rotate-0"}
                transition-all duration-150 ease-linear
                `}
          ></div>
        </div>
      </div>
      <div
        className={`grid ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-all duration-150 ease-linear`}
      >
        <div className="overflow-hidden">
          <div className="w-full h-[1px] my-3 bg-gray-100"></div>
          {answer}
        </div>
      </div>
    </div>
  );
};
