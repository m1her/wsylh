import { Loader } from "@/components/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
