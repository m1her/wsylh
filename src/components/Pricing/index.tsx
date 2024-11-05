import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Pricing = () => {
  return (
    <div className="w-full md:px-14 px-10 md:py-12 py-10 md:bg-gradient-to-r bg-gradient-to-t from-primary to-secondary from-40% to-80% grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-12">
      <div className="w-full h-full">
        <Image
          src={"/discount.svg"}
          alt={"discount"}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-white md:text-4xl text-3xl font-bold text-center">
          احصل على باقة
          <span className="font-black text-accent"> التميز الكاملة </span>
        </div>
        <div className="text-white font-semibold md:text-3xl text-2xl">
          السعر{" "}
          <span className="md:text-4xl text-3xl font-bold text-accent">99</span>{" "}
          فقط بعد الخصم
        </div>
        <div className="line-through decoration-acctext-accent text-white font-semibold md:text-3xl text-2xl ">
          السعر الأصلي:{" "}
          <span className="text-accent font-bold md:text-4xl text-3xl">
            299
          </span>
        </div>
        <div className="text-white font-semibold md:text-3xl text-2xl">
          فقط لأول <span className="text-accent">1000</span> مشترك
        </div>
        <div className="flex items-center gap-x-4">
          <div className="text-white font-semibold md:text-3xl text-2xl">
            لا تفوّت الفرصة
          </div>
          <Link
            href={"https://exams.wsyelhi.com/register"}
            className="px-8 md:py-3 py-2.5 rounded-full text-white md:font-bold font-semibold md:text-xl text-lg bg-accent hover:text-white hover:bg-[#c94d4d] transition-colors duration-200"
          >
            اشترك الآن
          </Link>
        </div>
      </div>
    </div>
  );
};
