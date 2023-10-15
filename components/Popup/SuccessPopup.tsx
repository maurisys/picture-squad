import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const SuccessPopup = ({ text, handleCross }: any) => {
  return (
    <div
      style={{
        zIndex: 100,
      }}
      className="w-[95%] md:w-[400px] h-[350px] overflow-auto fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-white rounded-[4px] shadow-lg flex flex-col justify-center items-center "
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div
          className="absolute top-[20px] bg-slate-300 cursor-pointer right-[20px] w-[35px] h-[35px] rounded-full flex items-center justify-center float-left "
          onClick={() => handleCross()}
        >
          <RxCross2 />
        </div>

        <div className="bg-green-600 text-white w-[40px] h-[40px] rounded-full flex items-center justify-center ">
          <TiTick className="text-4xl" />
        </div>
        <div>
          <p className="p-[10px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
