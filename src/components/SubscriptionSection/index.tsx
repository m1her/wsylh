import Link from "next/link";
import React from "react";
import { CheckCircle } from "../AnimatedIcons";
import { goldenData, silverData, standardData } from "./subsData";
import "./styles.css";

export const SubscriptionSection = () => {
  return (
    <div className="grid grid-cols-3 h-full items-start gap-8 w-full">
      <div className="animate-soonSubCard h-full flex flex-col items-center-center relative overflow-hidden shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] rounded-lg">
        <div className="absolute top-3 -end-12 bg-white text-accent text-2xl font-semibold z-20 text-center px-16 py-3 rounded shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] -rotate-45">
          قريبا
        </div>
        <div className="absolute top-0 start-0 w-full h-full bg-gray-700/40 rounded-lg "></div>
        <div className="w-full flex flex-col items-center gap-8 bg-gradient-to-br from-secondary to-[#5244e8] rounded-t-lg p-8">
          <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-t-[40px] border-transparent border-t-white"></div>
          <div className="text-5xl font-light text-white -mt-2 flex justify-between items-end w-full">
            <div>الأساسية</div>
            <div className="text-xl font-semibold ">30 ريال</div>
          </div>
          <Link
            href={"#"}
            className="w-full text-center text-xl font-medium border-white border rounded-md px-6 py-3 text-white hover:text-primary bg-transparent hover:bg-white transition-colors duration-150"
          >
            إشترك الآن
          </Link>
        </div>
        <div className="h-full border-2 bg-white border-[#5244e8] rounded-b-lg p-8 flex flex-col gap-2 items-start">
          {standardData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="stroke-green-500 w-7 h-7" />
              <div className="text-gray-600 font-medium text-lg">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="animate-subCard h-full flex flex-col items-center-center shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] rounded-lg">
        <div className="w-full flex flex-col items-center gap-8 bg-gradient-to-br from-primary to-[#8a3db9] rounded-t-lg p-8">
          <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-t-[40px] border-transparent border-t-white"></div>
          <div className="text-5xl font-light text-white -mt-2 flex justify-between items-end w-full">
            <div>الفضية</div>
            <div className="text-xl font-semibold flex flex-col items-end">
              <div className="line-through">99 ريال</div>
              <div>لفترة محدودة 59 ريال</div>
            </div>
          </div>
          <Link
            href={"#"}
            className="w-full text-center text-xl font-medium border-white border rounded-md px-6 py-3 text-white hover:text-primary bg-transparent hover:bg-white transition-colors duration-150"
          >
            إشترك الآن
          </Link>
        </div>
        <div className="h-full border-2 bg-white border-primary rounded-b-lg p-8 flex flex-col gap-2 items-start">
          {silverData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="stroke-green-500 w-7 h-7" />
              <div className="text-gray-600 font-medium text-lg">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="animate-soonSubCard h-full flex flex-col items-center-center relative overflow-hidden shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] rounded-lg">
        <div className="absolute top-3 -end-12 bg-white text-accent text-2xl font-semibold z-20 text-center px-16 py-3 rounded shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] -rotate-45">
          قريبا
        </div>
        <div className="absolute top-0 start-0 w-full h-full bg-gray-700/40 rounded-lg "></div>
        <div className="w-full flex flex-col items-center gap-8 bg-gradient-to-br from-accent to-[#cf4747] rounded-t-lg p-8">
          <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-t-[40px] border-transparent border-t-white"></div>
          <div className="text-5xl font-light text-white -mt-2 flex justify-between items-end w-full">
            <div>الذهبية</div>
            <div className="text-xl font-semibold ">230 ريال</div>
          </div>
          <Link
            href={"#"}
            className="w-full text-center text-xl font-medium border-white border rounded-md px-6 py-3 text-white hover:text-primary bg-transparent hover:bg-white transition-colors duration-150"
          >
            إشترك الآن
          </Link>
        </div>
        <div className="border-2 bg-white border-[#cf4747] rounded-b-lg p-8 flex flex-col gap-2 items-start">
          {goldenData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="stroke-green-500 w-7 h-7" />
              <div className="text-gray-600 font-medium text-lg">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
