import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AppGalleryIcon,
  AppStoreIcon,
  GooglePlayIcon,
  MasterCardIcon,
  PayPalIcon,
  VisaIcon,
} from "../AnimatedIcons";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center md:px-14 px-10 py-12 bg-white border-t border-gray-200 shadow-[0_-5px_10px_-7px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2 text-gray-700 text-sm ">
          <div className="text-lg font-semibold">وسيلة</div>
          <Link href={""} className="mt-2 hover:text-gray-800">
            عن وسيلة
          </Link>
          <Link href={"/faq"} className="">
            الأسئلة الشائعة
          </Link>
          <Link href={""} className="">
            شروط الاستخدام
          </Link>
          <Link href={""} className="">
            بيان الخصوصية
          </Link>
        </div>
        <div className="">
          <Image src={"/Logo.png"} alt={"Logo"} width={150} height={50} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center items-start gap-4 justify-between w-full text-gray-700 text-lg font-semibold">
        <div className="flex flex-col md:items-center items-start">
          <div>وسائل الدفع المتاحة</div>
          <div className="flex items-center gap-2">
            <PayPalIcon className={"fill-gray-500 w-10 h-10"} />
            <VisaIcon className={"fill-gray-500 w-10 h-10"} />
            <MasterCardIcon className={"fill-gray-500 w-10 h-10"} />
          </div>
        </div>
        <div className="flex flex-col md:items-center items-start">
          <div>أدر اختباراتك اينما كنت</div>
          <div className="flex items-center gap-2">
            <div className="relative w-24 h-10 overflow-hidden">
              <AppGalleryIcon
                className={
                  "fill-gray-700 hover:fill-gray-500 cursor-pointer w-24 h-24 absolute top-1/2 -translate-y-1/2"
                }
              />
            </div>
            <div className="relative w-24 h-10 overflow-hidden">
              <AppStoreIcon
                className={
                  "fill-gray-700 hover:fill-gray-500 cursor-pointer w-24 h-24 absolute top-1/2 -translate-y-1/2"
                }
              />
            </div>
            <div className="relative w-24 h-10 overflow-hidden">
              <GooglePlayIcon
                className={
                  "fill-gray-700 hover:fill-gray-500 cursor-pointer w-24 h-24 absolute top-1/2 -translate-y-1/2"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div className="w-full flex md:flex-row flex-col gap-2 justify-between pb-8">
        <p className="text-sm text-gray-500 font-medium">
          © 2024 وسيلة. جميع الحقوق محفوظة
        </p>
        <p className="text-sm text-gray-500 font-medium" dir="ltr">
          © 2024 Wsylh. All rights reserved.
        </p>
      </div>
    </div>
  );
};
