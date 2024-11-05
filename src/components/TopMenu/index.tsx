"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./styles.css";

export const TopMenu = () => {
  const [activeLink, setActiveLink] = useState("#main"); // Default active link
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
          className="md:hidden z-50 cursor-pointer md:w-auto w-6"
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
        className={`flex md:static overflow-hidden fixed top-0 md:start-auto start-0 md:pt-0 pt-24 bg-white h-full z-40 md:flex-row flex-col md:items-center items-start gap-y-8 lg:gap-x-6 md:gap-x-4 font-normal lg:text-lg text-base md:!w-fit w-full
            transition-[width] duration-500 ease-in-out
            ${toggleMenu ? "" : "px-0"}
            `}
        style={{ width: toggleMenu ? "100vw" : "0vw" }}
      >
        <Link
          href="#main"
          className={`${activeLink === "#main" ? "active" : ""} md:ms-0 ms-10`}
          onClick={() => handleLinkClick("#main")}
        >
          الرئيسية
        </Link>
        <Link
          href="#services"
          className={`${
            activeLink === "#services" ? "active" : ""
          } md:ms-0 ms-10`}
          onClick={() => handleLinkClick("#services")}
        >
          خدماتنا
        </Link>
        <Link
          href="#applications"
          className={`${
            activeLink === "#applications" ? "active" : ""
          } md:ms-0 ms-10`}
          onClick={() => handleLinkClick("#applications")}
        >
          التطبيقات
        </Link>
        <Link
          href="#about_us"
          className={`${
            activeLink === "#about_us" ? "active" : ""
          } md:ms-0 ms-10`}
          onClick={() => handleLinkClick("#about_us")}
        >
          من نحن
        </Link>
        <Link
          href="#prices"
          className={`${
            activeLink === "#prices" ? "active" : ""
          } md:ms-0 ms-10`}
          onClick={() => handleLinkClick("#prices")}
        >
          الأسعار
        </Link>
        <Link
          href="#questions"
          className={`${
            activeLink === "#questions" ? "active" : ""
          } md:ms-0 ms-10`}
          onClick={() => handleLinkClick("#questions")}
        >
          أسئلة شائعة
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=966553576290&text&type=phone_number&app_absent=0"
          className="md:ms-0 ms-10"
        >
          اتصل بنا
        </Link>
      </div>
    </nav>
  );
};
