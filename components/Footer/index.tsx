import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = ({siteInfo}: any) => {

  const {facebook_link,instagram_link} = siteInfo
  return (
    <div className="w-full bg-black text-white flex flex-col items-center gap-[20px] px-[20px] py-[30px]">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-[30px]">
        <div>
          <Image
            src="/logo-noBg.png"
            alt="logo"
            width={120}
            height={120}
            className="object-contain rounded-full "
          />
        </div>

        <div className="text-smoke flex items-center justify-center gap-[20px] text-center flex-wrap">
          {navLinks?.map((item, index) => (
            <Link key={index} href={item.link} className="font-bold">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[95%] h-[2px] bg-slate-300" />
      <div className="flex items-center gap-[20px]">
        <Link href={facebook_link} target="_blank" className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-slate-300 ">
          <FaFacebookF className="text-[19px] font-bold " />
        </Link>

        <Link href={instagram_link} target="_blank" className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-slate-300 ">
          <FaInstagram className="text-[19px] font-bold " />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
