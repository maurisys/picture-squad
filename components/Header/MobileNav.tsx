import Image from "next/image";
import React from "react";
import { CgMenuLeft } from "react-icons/cg";

const MobileNav = () => {
  return (
    <div className="mt-[-30px] z-40 fixed top-0 left-0 lg:hidden w-full flex items-center justify-between p-[10px]">
      <div>
        <Image
          src="/logo-noBg.png"
          alt="logo"
          width={120}
          height={120}
          className="object-contain rounded-full mt-[10px] "
        />
      </div>

      <div className="bg-primaryYellow w-[40px] h-[40px] rounded-full flex items-center justify-center ">
        <CgMenuLeft className="text-[21px] font-bold " />
      </div>
    </div>
  );
};

export default MobileNav;
