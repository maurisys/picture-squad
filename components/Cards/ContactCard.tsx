import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className="flex items-center flex-wrap gap-[30px]">
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
  );
};

export default ContactCard;
