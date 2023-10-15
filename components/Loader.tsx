import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = () => {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center ">
      <div className="w-max flex flex-col items-center">
        <AiOutlineLoading3Quarters className="animate-spin font-bold text-[30px] text-primaryYellow " />
        <p className="text-xl font-bold text-slate-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
