import Image from "next/image";
import { comma } from "postcss/lib/list";
import React from "react";

const TestimonialCard = ({ data }: any) => {
  const { name, image, designation, summary } = data;
  return (
    <div className="w-full bg-slate-200 rounded-[4px] p-[20px] shadow-lg shadow-gray-600 overflow-hidden">
      <div className="flex items-center gap-[20px]">
        <div className="relative min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]">
          <Image
            src={image}
            alt="personImage"
            fill
            className="object-cover rounded-full "
          />
        </div>

        <div>
          <p>{name}</p>
          <p className="font-brunoAce text-lg font-bold">{designation}</p>
        </div>
      </div>

      <div className="px-[70px] mt-[20px]">
        <div dangerouslySetInnerHTML={{__html: summary}} className="text-xl" />
      </div>
    </div>
  );
};

export default TestimonialCard;
