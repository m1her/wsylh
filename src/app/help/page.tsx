import React from "react";

const Help = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center gap-6 md:py-16 py-12 md:px-14 px-10">
      <div className="md:text-4xl text-3xl font-semibold mt-12">المساعدة</div>
      <div className="w-32 md:h-1 h-0.5 rounded-full bg-secondary"></div>
      <div className="md:w-1/2 text-center md:text-xl text-lg text-gray-400">
        سنشرح بشكل مبسط كيف يمكنك استخدام منصتنا
      </div>
    </div>
  );
};

export default Help;
