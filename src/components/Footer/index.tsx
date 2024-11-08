import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AppGalleryIcon,
  ApplePayIcon,
  AppStoreIcon,
  GooglePlayIcon,
  InstagramIcon,
  MadaIcon,
  SaudiBC,
  VisaIcon,
  XTwitterICon,
} from "../AnimatedIcons";
import { TextPopup } from "./TextPopup";
import { footerData } from "./footerData";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center md:px-14 px-10 py-12 bg-white border-t border-gray-200 shadow-[0_-5px_10px_-7px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between w-full">
        <div className="flex md:flex-row flex-col md:gap-32 gap-8 justify-between ">
          <div className="flex flex-col gap-2 text-gray-700 text-sm ">
            <div className="text-lg font-semibold">وسيلة</div>
            <TextPopup
              title={"عن وسيلة"}
              text={[
                "نحن فريق من المحترفين المتحمسين الذين جمعوا بين الخبرة في التعليم والتكنولوجيا لنقدم لكم حلاً مبتكرًا يلبي احتياجات المعلمين في العصر الحديث.",
              ]}
            />
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
          <div className="flex flex-col gap-2 text-gray-700 text-sm ">
            <div className="text-lg font-semibold">تعرف علينا</div>
            {footerData.map((item, idX) => (
              <TextPopup key={idX} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={"/Logo.png"} alt={"Logo"} width={150} height={50} />
          <div className="w-full flex justify-center">
            <Link
              className="md:w-52 md:h-20 w-40 h-14 shadow-[0_0_7px_-1px_rgba(0,0,0,0.2)] rounded bg-white hover:bg-purple-50 transition-colors duration-150"
              target="_blank"
              href={
                "https://eauthenticate.saudibusiness.gov.sa/certificate-details"
              }
            >
              <SaudiBC className={"md:w-52 md:h-20 w-40 h-14"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center items-start gap-4 justify-between w-full text-gray-700 text-lg font-semibold">
        <div className="flex flex-col md:items-center items-start">
          <div>وسائل الدفع المتاحة</div>
          <div className="flex items-center gap-2 mt-1">
            <MadaIcon className={"w-12 h-8 border border-gray-500 rounded"} />
            <VisaIcon className={"w-12 h-8 border border-gray-500 rounded"} />
            <ApplePayIcon
              className={"border border-gray-500 rounded w-12 h-8"}
            />
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
              <Link
                target="_blank"
                href={
                  "https://apps.apple.com/sa/app/%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF-%D8%A7%D9%84%D8%A5%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA/id6733244610?l=ar"
                }
              >
                <AppStoreIcon
                  className={
                    "fill-gray-700 hover:fill-gray-500 cursor-pointer w-24 h-24 absolute top-1/2 -translate-y-1/2"
                  }
                />
              </Link>
            </div>
            <div className="relative w-24 h-10 overflow-hidden">
              <Link
                target="_blank"
                href={
                  "https://play.google.com/store/apps/details?id=com.wsyelhi.wepapp&pcampaignid=web_share"
                }
              >
                <GooglePlayIcon
                  className={
                    "fill-gray-700 hover:fill-gray-500 cursor-pointer w-24 h-24 absolute top-1/2 -translate-y-1/2"
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-start ">
        <div className="flex flex-col items-center">
          <div className="text-gray-700 text-lg font-semibold">تابعنا على</div>
          <div className="flex items-center gap-1">
            <Link
              className="w-7 h-7 rounded-full bg-gray-500 hover:bg-gray-600 flex items-center justify-center"
              href={"https://x.com/wsyl147686"}
            >
              <XTwitterICon className="w-4 h-4 fill-white" />
            </Link>
            <Link
              className="w-7 h-7 rounded-full bg-gray-500 hover:bg-gray-600 flex items-center justify-center"
              href={"https://www.instagram.com/wsyelh/"}
            >
              <InstagramIcon className="w-4 h-4 fill-white" />
            </Link>
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
