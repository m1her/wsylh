import React from "react";
import { servicesData } from "./servicesData";
import { ServiceCard } from "./ServiceCard";

export const OurServices = () => {
  return (
    <section
      id="SERVICE_SECTION"
      className="w-full bg-white min-h-screen py-12 md:px-14 px-10"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="md:text-4xl text-3xl font-semibold">خدماتنا</div>
        <div className="md:w-1/2 text-center md:text-xl text-lg text-gray-400">
          اعداد اختبارات ورقية مع نماذج الاجابة ما عليك سوى الدخول على الموقع
          واختيار المرحلة وستحصل على المزايا التالية
        </div>
        <div className="w-32 md:h-1 h-0.5 rounded-full bg-secondary"></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
          {servicesData.map((item, idx) => (
            <ServiceCard
              key={idx}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
