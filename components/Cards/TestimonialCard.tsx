import Image from "next/image";
import React from "react";

const TestimonialCard = ({ data }: any) => {
  const { name, image, designation, summary } = data;

  return (
    <div className="w-full bg-slate-200 rounded-[4px] p-[20px] shadow-lg shadow-gray-600 overflow-hidden">
      <div
        className="relative overflow-hidden"
        style={{
          width: '300px', // Adjust the desired width
          height: '180px', // Adjust the desired height
        }}
      >
        <Image
          src={image}
          alt="personImage"
          layout="fill"
          objectFit="cover"
          className=""
          style={{
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 12\'%3E%3Cpath d=\'M 0 0 H 12 C 10 6 4 4 0 8 V 0\' fill=\'white\'/%3E%3C/svg%3E")',
            maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 12\'%3E%3Cpath d=\'M 0 0 H 12 C 10 6 4 4 0 8 V 0\' fill=\'white\'/%3E%3C/svg%3E")',
            maskSize: '100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />
      </div>

      <div>
        <p>{name}</p>
        <p className="font-brunoAce text-lg font-bold">{designation}</p>
      </div>

      <div className="px-[70px] mt-[20px]">
        <div dangerouslySetInnerHTML={{ __html: summary }} className="text-xl" />
      </div>
    </div>
  );
};

export default TestimonialCard;
