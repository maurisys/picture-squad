import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  price: string;
  features: any;
  slug: string;
}
const PackageCard = ({ title, price, features, slug }: Props) => {
  return (
    <div className="flex flex-col justify-between gap-[10px] font-montserrat w-[350px] h-[500px] shadow-lg shadow-primaryBlue/50 bg-white border border-slate-400 p-[20px] rounded-[5px] flex flex-col items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-primaryBlue font-bold">Rs. {price}</p>
      <div dangerouslySetInnerHTML={{ __html: features }} />
      <button className="bg-primaryBlue text-white font-bold p-[10px] rounded-[5px]">
        <Link href={`/packages/${slug}`}>Book Package</Link>
      </button>
    </div>
  );
};

export default PackageCard;
