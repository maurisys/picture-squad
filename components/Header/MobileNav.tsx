"use client";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import Overlay from "../Overlay";

const MobileNav = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <div className=" z-40 h-max fixed top-0 left-0 lg:hidden w-full flex items-center justify-between p-[10px]">
      <div className="bg-black/50 backdrop-blur-sm w-[110px] h-[110px] rounded-full flex items-center justify-center ">
        <Link href="/">
          <Image
            src="/logo-noBg.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain rounded-full"
          />
        </Link>
      </div>

      <div
        onClick={() => {
          setIsMobileMenuActive(true);
        }}
        className="bg-primaryYellow w-[40px] h-[40px] rounded-full flex items-center justify-center "
      >
        <CgMenuLeft className="text-[21px] font-bold " />
      </div>

      {isMobileMenuActive && (
        <div
          style={{
            zIndex: 100,
            animation: "navbarAnimate ease 0.2s",
          }}
          className="px-[20px] w-[80%] h-[100vh] md:hidden fixed top-[0px] right-0 flex flex-col gap-[30px] overflow-y-scroll scrollbar-hide bg-white transition ease-out delay-1000"
        >
          {/*....Cross...*/}
          <div
            onClick={() => setIsMobileMenuActive(false)}
            className="bg-primaryYellow cursor-pointer absolute top-[20px] right-[20px] w-[30px] h-[30px] rounded-full shadow-lg flex justify-center items-center"
          >
            <RxCross2 className="text-xl text-deepBlue" />
          </div>

          {/*..Nav Items...*/}
          <div className="mt-[70px] flex flex-col gap-[20px]">
            <div className="text-smoke flex flex-col items-center gap-[20px] text-center">
              {navLinks?.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="font-bold text-primaryBlue"
                  onClick={() => setIsMobileMenuActive(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobileMenuActive && <Overlay />}
    </div>
  );
};

export default MobileNav;
