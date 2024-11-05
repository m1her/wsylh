import React from "react";

export const HowItWorks = () => {
  return (
    <div className="md:px-14 px-10 py-12 bg-gray-100 flex flex-col items-center gap-6">
      <div className="md:text-4xl text-3xl font-semibold">كيف يعمل الموقع؟</div>
      <div className="w-32 md:h-1 h-0.5 rounded-full bg-secondary"></div>
      <div className="flex items-center justify-center w-full">
        <iframe
          className="w-[70%] aspect-video self-stretch md:min-h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/mSF7Bko4jVw"
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};
