import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const ImagePopup = ({ image,handleCross }: any) => {
  return (
    <div style={{
        zIndex: 100
    }} className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
      <div className="relative w-[95%] lg:w-[80vw] h-[80vh]">
        <div onClick={handleCross} className="z-10 absolute top-[20px] right-[20px] cursor-pointer bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center ">
            <RxCross2 className="text-[21] " />
        </div>
        <Image src={image} alt="clickedImage" fill className="object-cover" />
      </div>
    </div>
  );
};

export default ImagePopup;
