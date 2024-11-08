import { SubscriptionSection } from "@/components/SubscriptionSection";
import React from "react";

const Subscription = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-center gap-6 relative">
      <div className="w-full md:px-14 px-10 md:pt-12 pt-10 md:pb-52 pb-48 bg-gradient-to-b from-primary to-secondary text-center bg-cover bg-center flex flex-col items-center gap-6">
        <div className="text-white font-semibold md:text-3xl text-2xl">
          استثمر وقتك في تعليم طلابك، ودع &quot;إعداد الاختبارات&quot; يتولى
          الباقي!
        </div>
        <div className="md:text-4xl text-3xl font-semibold text-white">
          خطط الاشتراك لدينا
        </div>
        <div className="w-32 md:h-1 h-0.5 rounded-full bg-white"></div>
        <div className="text-white font-semibold md:text-2xl text-lg">
          اختر الخطة المثالية لك وابدأ تجربتك الآن
        </div>
      </div>

      <div className="z-50 flex flex-col -mt-56 items-center gap-6 w-full md:py-10 py-8 md:px-14 px-10">
        <SubscriptionSection />
      </div>
    </div>
  );
};

export default Subscription;
