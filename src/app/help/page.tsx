import { MessagesIcon, PlayIcon, UserIcon } from "@/components/AnimatedIcons";
import { HelpSection } from "@/components/HelpSection";
import Link from "next/link";
import React from "react";

const Help = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center gap-6 md:py-16 py-10 md:px-14 px-10 relative">
      <div className="w-full lg:h-[420px] md:h-[370px] h-[410px] bg-[radial-gradient(circle_at_center_700px,_var(--tw-gradient-stops))] from-secondary from-40% to-primary to-100% absolute top-0 z-10"></div>
      <div className="z-50 flex flex-col items-center gap-6">
        <div className="md:text-4xl text-3xl font-semibold mt-12 text-white">
          المساعدة
        </div>
        <div className="w-32 md:h-1 h-0.5 rounded-full bg-white"></div>
        <div className="text-center md:text-xl text-lg text-white">
          سنشرح بشكل مبسط كيف يمكنك استخدام منصتنا
        </div>
        <div className="md:flex grid grid-cols-2 items-center md:gap-4 gap-2">
          <Link
            href={"/"}
            className="lg:w-72 lg:h-72 md:w-52 md:h-52 w-28 h-28 bg-white hover:bg-[#fdfdff] hover:scale-[1.02] transition-all duration-150 flex flex-col md:gap-4 gap-1 items-center justify-center rounded-lg border border-gray-300 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]"
          >
            <UserIcon className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-8 h-8 fill-secondary" />
            <p className="font-semibold lg:text-2xl md:text-xl text-sm">
              من نحن
            </p>
          </Link>
          <Link
            href={"https://youtu.be/pmbn-EdSnxI"}
            target="_blank"
            className="lg:w-72 lg:h-72 md:w-52 md:h-52 w-28 h-28 bg-white hover:bg-[#fdfdff] hover:scale-[1.02] transition-all duration-150 flex flex-col md:gap-4 gap-1 items-center justify-center rounded-lg border border-gray-300 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]"
          >
            <PlayIcon className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-8 h-8 fill-secondary" />
            <p className="font-semibold lg:text-2xl md:text-xl text-sm">
              فيديو تعليمي
            </p>
          </Link>
          <Link
            href={"/faq"}
            className="place-self-center col-span-2 lg:w-72 lg:h-72 md:w-52 md:h-52 w-28 h-28 bg-white hover:bg-[#fdfdff] hover:scale-[1.02] transition-all duration-150 flex flex-col md:gap-4 gap-1 items-center justify-center rounded-lg border border-gray-300 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]"
          >
            <MessagesIcon className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-8 h-8 fill-secondary" />
            <p className="font-semibold lg:text-2xl md:text-xl text-sm whitespace-nowrap">
              الأسئلة الشائعة
            </p>
          </Link>
        </div>
      </div>
      <HelpSection />
    </div>
  );
};

export default Help;
