import Image from "next/image";
import React from "react";

const TestimonialCard = ({ data }: any) => {
  const { name, image, designation, summary } = data;

  return (
    <div className="w-full h-[230px] overflow-hidden bg-slate-200 flex rounded-[4px] p-[20px] shadow-lg shadow-gray-600 overflow-hidden">
      <div className="hidden md:block">
        <Image
          src={image}
          alt="personImage"
          width={150}
          height={180}
          className="object-cover"
        />
      </div>

      <div className="flex-grow pl-[20px]">
        <div>
          <p className="hidden md:block font-bold text-lg">{name}</p>
        </div>
        <div className="md:hidden flex items-center gap-[10px]">
          <Image
            src={image}
            alt="personImage"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <p className="font-bold text-lg">{name}</p>
        </div>
        <div className=" mt-[20px]">
          <div
            dangerouslySetInnerHTML={{ __html: summary.length > 150 ? summary.slice(0, 80) + "..." : summary }}
            className="text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
