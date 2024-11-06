"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./styles.css";
import { AddUserIcon, LoginIcon } from "../AnimatedIcons";
import { usePathname } from 'next/navigation'

export const TopMenu = () => {
  const [activeLink, setActiveLink] = useState("MAIN");
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setToggleMenu(false);
  };

  return (
    <nav className="flex justify-between items-center md:px-14 px-10 py-2 bg-white sticky top-0 left-0 z-50">
      <div className="flex gap-x-4">
        <Image
          src={"/icons/bars.svg"}
          width={25}
          height={25}
          alt={"bars icon"}
          className="lg:hidden z-50 cursor-pointer lg:w-auto w-6"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        <Image
          src={"/Logo.png"}
          width={150}
          height={100}
          alt={"Website Logo"}
          className="z-50 md:w-[150px] w-36"
        />
      </div>

      <div
        className={`flex lg:static overflow-hidden fixed lg:h-full gap-y-8 h-screen top-0 lg:start-auto start-0 lg:pt-0 pt-24 bg-white z-40 lg:flex-row flex-col lg:items-center items-start font-normal lg:text-lg text-base lg:!w-full w-full
            transition-[width] duration-500 ease-in-out
            ${toggleMenu ? "" : "px-0"}
            `}
        style={{ width: toggleMenu ? "100vw" : "0vw" }}
      >
        <div className="lg:ms-auto flex gap-y-8 lg:gap-x-8 lg:flex-row flex-col lg:items-center items-start">
          <Link
            href="/"
            className={`link ${
              activeLink === "MAIN" ? "active" : ""
            } lg:ms-0 ms-10`}
            onClick={() => handleLinkClick("MAIN")}
          >
            الرئيسية
          </Link>
          <Link
            href="/create-exam"
            className={`link ${
              activeLink === "CREATE_EXAM" ? "active" : ""
            } lg:ms-0 ms-10`}
            onClick={() => handleLinkClick("CREATE_EXAM")}
          >
            إعداد اختبار
          </Link>
          <Link
            href="our-services"
            className={`link ${
              activeLink === "SERVICES" ? "active" : ""
            } lg:ms-0 ms-10`}
            onClick={() => handleLinkClick("SERVICES")}
          >
            خدماتنا
          </Link>
          <Link
            href="help"
            className={`link ${
              activeLink === "HELP" ? "active" : ""
            } lg:ms-0 ms-10`}
            onClick={() => handleLinkClick("HELP")}
          >
            مساعدة
          </Link>
        </div>

        <div className="flex md:gap-x-6 gap-x-4 lg:ms-auto ms-10">
          <Link
            href=""
            className="flex whitespace-nowrap items-center gap-x-2 md:px-6 px-4 md:py-3 py-2 border border-black bg-white hover:bg-primary hover:text-white font-semibold hover:border-primary rounded-md text-sm transition-colors duration-150 group"
          >
            تسجيل الدخول
            <LoginIcon className="w-5 stroke-black group-hover:stroke-white transition-colors duration-150" />
          </Link>
          <Link
            href=""
            className="flex whitespace-nowrap items-center gap-x-2 md:px-6 px-4 md:py-3 py-2 bg-primary text-white font-semibold hover:bg-[#2a3a76] rounded-md text-sm transition-colors duration-150"
          >
            إنشاء حساب
            <AddUserIcon className="w-5 stroke-white" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

{
  /* 
        <Link
          href="https://api.whatsapp.com/send/?phone=966553576290&text&type=phone_number&app_absent=0"
          className="md:ms-0 ms-10 link"
        >
          اتصل بنا
        </Link> */
}
