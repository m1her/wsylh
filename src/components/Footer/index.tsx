import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full text-center flex justify-center items-center md:px-14 px-10 py-12 bg-white">
      <p className="md:text-lg text-base font-medium">
        جميع الحقوق محفوظة لمتجر
        <Link
          href={"https://wsyelh.com/"}
          className="text-secondary hover:text-primary"
          target="_blank"
        >
          {" وسيلة "}
        </Link>
        للخدمات التعليمية © 2024 -
        <Link
          href={"https://exams.wsyelhi.com/privacy"}
          className="text-secondary hover:text-primary"
          target="_blank"
        >
          {" سياسة الخصوصية "}
        </Link>
      </p>
    </div>
  );
};
