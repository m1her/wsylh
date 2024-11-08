import React from "react";
import "./styles.css";
import {
  BoltIcon,
  FilePenIcon,
  GearsIcon,
  SitemapIcon,
} from "../AnimatedIcons";

export const AboutUs = () => {
  return (
    <section
      id="ABOUT_US_SECTION"
      className="md:px-14 px-10 py-12 bg-white flex flex-col items-center gap-y-6"
    >
      <div className="w-full flex flex-col items-center gap-6">
        <div
          className="flex flex-col items-center gap-6 text-white pt-12 py-28 px-4 tilted-border
          bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-secondary from-0% to-primary to-70%"
        >
          <div className="md:text-4xl text-3xl font-bold">وسيلة</div>
          <div className="md:w-1/2 text-center md:text-xl text-lg">
            نحن فريق من الخبراء المتخصصين في التعليم والتكنولوجيا، نعمل بشغف
            لتقديم حلول مبتكرة تلبي احتياجات المعلمين اليوم.
          </div>
        </div>
        {/* <div className="w-32 md:h-1 h-0.5 rounded-full bg-secondary"></div> */}
        <div className="grid md:grid-cols-2 w-[80%] grid-cols-1 md:gap-8 gap-6 mt-4 ">
          <div
            className="select-none flex flex-col gap-4 items-center justify-center text-center border rounded-lg overflow-hidden border-gray-700 shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] py-8 px-4 relative
          hover:-translate-y-2 transition-all duration-500 group hover:bg-primary/5
          "
          >
            <div className="shadow-[0_0_70px_70px_rgba(60,80,151,0.2)] absolute top-[20%] start-1/3 z-10 group-hover:start-2/3 group-hover:top-[80%] transition-all duration-500"></div>
            <FilePenIcon className="w-12 h-12 fill-primary" />
            <div className="md:text-2xl text-xl font-semibold z-20">
              اختبارات
            </div>
            <div className="lg:w-9/12 text-center md:text-lg text-base text-gray-800 z-20">
              نمتلك بنك اسئلة كامل يغطي جميع المواد الدراسية
            </div>
          </div>
          <div
            className="select-none flex flex-col gap-4 items-center justify-center text-center border rounded-lg overflow-hidden border-gray-700 shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] py-8 px-4 relative
          hover:-translate-y-2 transition-all duration-500 group hover:bg-accent/5"
          >
            <div className="shadow-[0_0_70px_70px_rgba(255,107,107,0.2)] absolute top-[20%] end-1/3 z-10 group-hover:end-2/3 group-hover:top-[80%] transition-all duration-500"></div>
            <BoltIcon className="w-12 h-12 fill-accent" />
            <div className="md:text-2xl text-xl font-semibold">
              سهولة الاستخدام
            </div>
            <div className="lg:w-9/12 text-center md:text-lg text-base text-gray-800">
              واجهة سهلة الاستخدام تمكنك من إنشاء وتعديل النماذج بسرعة وكفاءة
            </div>
          </div>
          <div
            className="select-none flex flex-col gap-4 items-center justify-center text-center border rounded-lg overflow-hidden border-gray-700 shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] py-8 px-4 relative
          hover:-translate-y-2 transition-all duration-500 group hover:bg-secondary/5"
          >
            <div className="shadow-[0_0_70px_70px_rgba(88,184,254,0.2)] absolute bottom-[20%] start-1/3 z-10 group-hover:start-2/3 group-hover:bottom-[80%] transition-all duration-500"></div>
            <GearsIcon className="w-12 h-12 fill-secondary" />
            <div className="md:text-2xl text-xl font-semibold">تصحيح آلي</div>
            <div className="lg:w-9/12 text-center md:text-lg text-base text-gray-800">
              تصحيح نماذج الموقع بسرعة ودقة عالية لتوفير نتائج فورية وموثوقة
            </div>
          </div>
          <div
            className="select-none flex flex-col gap-4 items-center justify-center text-center border rounded-lg overflow-hidden border-gray-700 shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] py-8 px-4 relative
          hover:-translate-y-2 transition-all duration-500 group hover:bg-primary/5"
          >
            <div className="shadow-[0_0_70px_70px_rgba(60,80,151,0.2)] absolute bottom-[20%] end-1/3 z-10 group-hover:end-2/3 group-hover:bottom-[80%] transition-all duration-500"></div>
            <SitemapIcon className="w-12 h-12 fill-primary" />
            <div className="md:text-2xl text-xl font-semibold">
              إدارة مركزية
              <span className="text-sm text-accent"> قريبا </span>
            </div>
            <div className="lg:w-9/12 text-center md:text-lg text-base text-gray-800">
              إدارة مركزية فعّالة تضمن تنسيقًا مثاليًا ومرونة عالية، لتوفير
              نتائج دقيقة وسريعة
            </div>
          </div>
        </div>
      </div>

      <div className="md:text-4xl text-3xl font-semibold mt-12">رؤيتنا</div>
      <div className="w-32 md:h-1 h-0.5 rounded-full bg-secondary"></div>
      <div className="md:w-1/2 text-center md:text-xl text-lg text-gray-400">
        نطمح لأن نكون الشريك الأمثل لكل معلم ومؤسسة تعليمية تسعى لتحسين عملية
        التقييم. نهدف إلى تمكين المعلمين من إعداد اختبارات تتسم بالدقة
        والفعالية، مع تقديم تجربة مستخدم سلسة ومتكاملة.
      </div>
    </section>
  );
};
