import React from "react";

export const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-primary text-4xl animate-spin flex items-center justify-center border-t-primary rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-accent text-2xl animate-spin flex items-center justify-center border-t-accent rounded-full">
          <div className="w-12 h-12 border-4 border-transparent text-secondary text-xl animate-spin flex items-center justify-center border-t-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
