import ContactCard2 from "@/components/Cards/ContactCard2";
import ContactForm from "@/components/Forms/ContactForm";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center p-[20px] bg-darkGray">
      <h1 className="font-satisfy tracking-[1.3px] w-max mt-[100px] font-bold text-2xl bg-primaryYellow p-[10px] rounded-[4px]">
        Get in touch with us
      </h1>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[20px] mt-[20px]">
        <ContactForm />

        <div className="hidden lg:block w-[2px] h-[400px] bg-primaryYellow " />

        <div className="relative w-full lg:w-[500px] h-[400px] ">
          <Image
            src="/photography2.jpg"
            alt="photographyImage"
            fill
            className="absolute top-0 right-0 object-cover"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-darkGray to-transparent" />
          <ContactCard2 />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
