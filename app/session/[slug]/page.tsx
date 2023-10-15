import { getSessionDetails } from "@/ApiQuery";
import ContactCard from "@/components/Cards/ContactCard";
import React from "react";

const SessionDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { data } = await getSessionDetails(slug);
  const { title, description, image } = data;

  return (
    <div className="bg-darkGray min-h-[100vh] w-full flex flex-col items-center px-[20px] py-[50px]">
      <div className="mt-[50px]">
        <h1 className="bg-primaryYellow w-max font-montserrat font-bold text-xl p-[10px] rounded-[4px]">
          Book Package
        </h1>
      </div>
      <div className="px-[5px] bg-white w-full lg:w-[90%] flex flex-col lg:flex-row items-center gap-[20px] mt-[20px] lg:mt-[50px] shadow-lg rounded-[4px]">
        <div className="w-full lg:w-[40%] h-full flex flex-col items-center justify-center">
          <h1 className="mt-[10px] font-satisfy text-primaryBlue font-bold text-[29px] text-center underline underline-offset-8 decoration-primaryYellow">
            {title}
          </h1>

          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="mt-[20px] text-justify px-[20px]"
          />
          
          <div className="mt-[20px]">
            <ContactCard />
          </div>
        </div>
        <form className="border-2 border-l-primaryBlue p-[20px] w-full md:w-[500px] flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[5px]">
            <label className="font-medium">Name</label>
            <input
              type="text"
              placeholder="Name..."
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="font-medium">Phone Number</label>
            <input
              type="number"
              placeholder="Phone number..."
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="font-medium">Address</label>
            <input
              type="text"
              placeholder="Address..."
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="font-medium">Date</label>
            <input
              type="date"
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="font-medium">Time</label>
            <input
              type="time"
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div>
            <button className="bg-primaryBlue px-[20px] py-[8px] text-white rounded-[10px] text-lg">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessionDetails;
