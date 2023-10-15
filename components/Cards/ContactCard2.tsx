import React from 'react'
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { getSiteInfo } from '@/ApiQuery';

const ContactCard2 = async() => {
    const {data} = await getSiteInfo();

    const {email,contact_no,address} = data;

  return (
    <div className="px-[10px] lg:px-0 z-10 absolute top-[50%] transform -translate-y-[50%] text-white flex flex-col justify-start gap-[20px] ">
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
  )
}

export default ContactCard2