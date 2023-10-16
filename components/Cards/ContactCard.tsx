import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { getSiteInfo } from "@/ApiQuery";

const ContactCard = async() => {

  const {data} = await getSiteInfo();

  const {email,contact_no,address} = data;
  return (
    <div className="bg-slate-300 p-[20px] flex items-center justify-center flex-wrap gap-[30px]">
      <div className="flex items-center gap-[5px]">
        <MdLocationOn className="text-primaryBlue text-[19px] " />
        <span>{address || "...."}</span>
      </div>

      <div className="flex items-center gap-[5px]">
        <TbPhoneCall className="text-primaryBlue text-[19px] " />
        <span>{contact_no || "...."}</span>
      </div>

      <div className="flex items-center gap-[5px]">
        <HiOutlineMail className="text-primaryBlue text-[19px] " />
        <span>{email || "...."}</span>
      </div>
    </div>
  );
};

export default ContactCard;
