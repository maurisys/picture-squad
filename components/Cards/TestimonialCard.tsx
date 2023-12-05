import Image from "next/image";
import React from "react";

const TestimonialCard = ({ data }: any) => {
  const { name, image, designation, summary } = data;

  return (
    <div className="w-full h-[230px] overflow-hidden bg-slate-200 flex rounded-[4px] p-[20px] shadow-lg shadow-gray-600 overflow-hidden">
      <Image
        src={image}
        alt="personImage"
        width={150}
        height={180}
        className="object-cover"
      />

      <div className="pl-[20px]">
        <div>
          <p className="font-bold text-lg">{name}</p>
          <p className="font-brunoAce text-lg font-bold">{designation}</p>
        </div>

        <div className=" mt-[20px]">
          <div
            dangerouslySetInnerHTML={{ __html: summary }}
            className="text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
