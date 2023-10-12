import Image from "next/image";
import React from "react";
import { VscSend } from "react-icons/vsc";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center p-[20px] bg-darkGray">
      <h1 className="font-satisfy tracking-[1.3px] w-max mt-[100px] font-bold text-2xl bg-primaryYellow p-[10px] rounded-[4px]">
        Get in touch with us
      </h1>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[20px] mt-[20px]">
        <form className="w-full lg:w-[500px] mt-[30px] flex flex-col gap-[20px] text-white ">
          <div className="flex flex-col gap-[5px] ">
            <label>Fullname</label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="outline-none bg-slate-300 p-[8px] rounded-[4px] border-none "
            />
          </div>

          <div className="flex flex-col gap-[5px] ">
            <label>Contact Number</label>
            <input
              type="number"
              placeholder="Enter Contact Number"
              className="outline-none bg-slate-300 p-[8px] rounded-[4px] border-none "
            />
          </div>

          <div className="flex flex-col gap-[5px] ">
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="outline-none bg-slate-300 p-[8px] rounded-[4px] border-none "
            />
          </div>

          <div className="flex flex-col gap-[5px] ">
            <label>Message</label>
            <textarea
              placeholder="Write message"
              className="outline-none bg-slate-300 p-[8px] rounded-[4px] border-none "
            />
          </div>

          <button className="w-max rounded-[4px] flex items-center gap-[5px] bg-primaryBlue p-[10px] ">
            <VscSend /> Send
          </button>
        </form>

        <div className="hidden lg:block w-[2px] h-[400px] bg-primaryYellow " />

        <div className="relative w-full lg:w-[500px] h-[400px] ">
          <Image
            src="/photography2.jpg"
            alt="photographyImage"
            fill
            className="absolute top-0 right-0 object-cover"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-darkGray to-transparent" />
          <div className="px-[10px] lg:px-0 z-10 absolute top-[50%] transform -translate-y-[50%] text-white flex flex-col justify-start gap-[20px] ">
            <div className="flex items-center gap-[5px]">
              <MdLocationOn className="text-primaryBlue text-[19px] " />
              <span>Kathmandu, Nepal</span>
            </div>

            <div className="flex items-center gap-[5px]">
              <TbPhoneCall className="text-primaryBlue text-[19px] " />
              <span>9807717694</span>
            </div>

            <div className="flex items-center gap-[5px]">
              <HiOutlineMail className="text-primaryBlue text-[19px] " />
              <span>abcd@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
