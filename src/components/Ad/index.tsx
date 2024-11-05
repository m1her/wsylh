import Link from "next/link";
import React from "react";

export const Ad = () => {
  return (
    <div className="md:px-14 px-10 md:py-12 py-10 bg-gradient-to-b to-primary from-secondary from-5% to-40%  text-center bg-cover bg-center flex flex-col items-center gap-6">
      <div className="text-white font-semibold md:text-3xl text-2xl">
        استثمر وقتك في تعليم طلابك، ودع &quot;إعداد الاختبارات&quot; يتولى
        الباقي!
      </div>
      <div className="text-white font-semibold md:text-xl text-base">
        نحن ندرك تحديات إعداد وتصحيح الاختبارات، ونؤمن بأن كل دقيقة يتم توفيرها
        تعني تعليمًا أفضل. انضم إلينا اليوم، ودع &quot;إعداد الاختبارات&quot;
        يكون شريكك لتحقيق تجربة تعليمية مميزة.
      </div>
      <Link
        href={"https://exams.wsyelhi.com/register"}
        className="px-8 md:py-3 py-2.5 rounded-full text-white md:font-bold font-semibold md:text-xl text-lg bg-accent hover:text-white hover:bg-[#c94d4d] transition-colors duration-200"
      >
        اشترك الآن
      </Link>
    </div>
  );
};
