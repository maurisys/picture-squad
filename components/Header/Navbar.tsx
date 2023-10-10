import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className={`z-10 w-full hidden md:flex flex-col items-center`}>
      <div className="navContainer relative w-[80%] flex items-center gap-[30px] justify-end py-[20px] px-[20px] font-montserrat tracking-[2px]">
        <div className="absolute top-[20px] left-[20px] w-[100px] h-[100px] rounded-full flex items-center justify-center bg-white ">
          <Image
            src="/logo-noBg.png"
            alt="logo"
            width={120}
            height={120}
            className="object-contain rounded-full "
          />
        </div>

        <div className="w-max flex flex-col gap-[12px]">
          <ul className="flex items-center justify-end gap-[20px] font-poppins">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === navLinks.length - 1 &&
                  "bg-primaryBlue text-white rounded-[4px]"
                } p-[10px] hover:bg-primaryYellow transition duration-120 ease-out rounded-[4px] cursor-pointer`}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
