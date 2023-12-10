import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  image: string;
  slug: string;
}
const SessionCard = ({ title, image, slug }: Props) => {
  return (
    <div
      className="group relative w-full md:w-[250px] h-[250px] rounded-xl overflow-hidden shadow-md shadow-primaryBlue "
    >
      <div className="relative w-full h-full "></div>
      <Image
        src={image}
        alt="sessionImage"
        fill
        className="object-cover absolute  top-0 left-0 right-0 bottom-0"
      />
      <p className="absolute bottom-0 w-full bg-gradient-to-r from-black to-transparent text-white p-[15px] font-montserrat text-lg font-bold tracking-[1.5px]">
        {title}
      </p>
      <div className="absolute hidden w-full h-full group-hover:flex items-center bg-white/25 backdrop-blur-sm left-0 top-0 transition duration-150 ease-out" />
      <div className="w-full hidden absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:flex items-center justify-center gap-[10px]">
        <Link
          href={`/session/${slug}`}>
          <button className="px-[5px] py-[7px] rounded-[4px] border border-primaryBlue bg-primaryBlue font-brunoAce tracking-[1.5px] hover:bg-transparent hover:border hover:border-black transition duration-150 ease-out ">
            Book Now
          </button>
        </Link>
        <Link
          href={`/session`}>
          <button className="px-[5px] py-[7px] rounded-[4px] border border-slate-600 bg-slate-600 text-white hover:text-black font-brunoAce tracking-[1.5px] hover:bg-transparent hover:border hover:border-black transition duration-150 ease-out ">
            View more
          </button>
        </Link>
      </div>

    </div>
  );
};

export default SessionCard;
