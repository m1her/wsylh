import React from "react";
import { servicesData } from "./servicesData";
import { ServiceCard } from "./ServiceCard";
import "./styles.css";

export const OurServices = () => {
  return (
    <section
      id="SERVICE_SECTION"
      className="w-full bg-white min-h-screen py-12 md:px-14 px-10"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-6 md:pt-8 pt-12 md:pb-16 pb-20 services-bg bg-gradient-to-b from-primary to-secondary text-white text-center px-4">
          <div className="md:text-4xl text-2xl font-semibold">
            ما نقدمه في إعداد الاختبارات
          </div>
          <div className="md:w-1/2 text-center md:text-xl text-base">
            نظام متكامل لإنشاء الاختبارات الورقية مع نماذج الاجابة ما عليك سوى
            الدخول على الموقع والبدء باستخدام موقعنا و ستحصل على الخدمات التالية
          </div>
          <div className="w-32 md:h-1 h-0.5 rounded-full bg-white"></div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[80%] md:gap-6 gap-2">
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
