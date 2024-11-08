import Image from "next/image";
import React from "react";
import { ClockIcon, DegreeHatIcon } from "../AnimatedIcons";
import "./styles.css";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      id="HERO_SECTION"
      className="w-full min-h-screen md:px-14 px-10 bg-gradient-to-r from-secondary to-primary to-40%"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full gap-x-8 gap-y-24 md:py-20 py-16">
        <div className="w-full h-full flex flex-col gap-y-6 justify-center text-white relative">
          <p
            className="title font-kufi font-bold md:text-5xl text-4xl font-display-swap"
            style={{ lineHeight: "60px" }}
          
          >
            سهّل إعداد اختباراتك باحترافية تامة
          </p>
          <p className="sub-title font-semibold md:text-xl text-lg opacity-90">
            نظام متكامل يتيح للمعلمين إنشاء وإدارة الاختبارات بسهولة ومرونة،
            يحتوي على بنك كامل يغطي جميع المواد مع التصحيح الآلي و اصدار تقارير
            فورية
          </p>

          <div className="btn w-full flex gap-10 items-center lg:justify-end lg:pe-20 md:justify-start justify-center">
            <Link
              href={""}
              className="px-12 md:py-4 py-3 whitespace-nowrap text-white bg-accent rounded-md md:text-xl text-lg font-bold hover:bg-[#bf4949] transition-all duration-200 ease-linear"
            >
              ابدأ الآن
            </Link>
          </div>
        </div>
        <div className="fadeIn w-full h-full flex items-center justify-center relative">
          <Image
            src={"/teachIllustrations.svg"}
            alt={"Teacher Illustration"}
            width={400}
            height={400}
            priority
            loading="eager"
          />
          <div className="clock w-32 h-32 aspect-square bg-secondary rounded-full absolute top-0 right-0 flex items-center justify-center">
            <ClockIcon className="w-10 h-10" />
          </div>
          <div className="degree-hat w-20 h-20 aspect-square bg-primary rounded-full absolute -top-10 left-0 flex items-center justify-center">
            <DegreeHatIcon className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};
