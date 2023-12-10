import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className={`sticky top-0 bg-darkGray text-white z-40 w-full hidden md:flex flex-col items-center`}
    >
      <div className="navContainer relative w-[80%] flex items-center gap-[30px] justify-center py-[20px] px-[20px] font-montserrat tracking-[2px]">
        <ul className="flex items-center gap-[30px] font-bold tracking-[1.2px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/session">Session</Link>
          </li>
          <li>
            <Link href="/packages">Package</Link>
          </li>
        </ul>

        <div
          style={{
            zIndex: 100,
          }}
          className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white "
        >
          <Link href="/">
            <Image
              src="/logo-noBg.png"
              alt="logo"
              width={120}
              height={120}
              className="object-contain rounded-full "
            />
          </Link>
        </div>

        <ul className="flex items-center gap-[30px] font-bold tracking-[1.2px]">
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>

          <li className="bg-primaryBlue p-[10px] rounded-[4px]">
            <Link href="/contact-us">Enquiry Now</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
