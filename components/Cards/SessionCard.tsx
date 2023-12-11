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
      className="sessionCard group relative w-full md:w-[250px] h-[250px] rounded-xl overflow-hidden shadow-md shadow-primaryBlue "
    >
      <div className="relative w-full h-full "></div>
      <Image
        src={image}
        alt="sessionImage"
        fill
        className="object-cover absolute  top-0 left-0 right-0 bottom-0"
      />
      <p className="absolute bottom-0 w-full bg-black/75 backdrop-blur-sm text-white p-[10px] font-montserrat text-lg font-semibold tracking-[1.5px]">
        {title}
      </p>
      <div className="absolute hidden w-full h-full group-hover:flex items-center bg-white/75 backdrop-blur-sm left-0 top-0 transition duration-150 ease-out" />
      <div className="z-10 w-full hidden absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:flex flex-col items-center justify-center gap-[10px]">
        <Link
          href={`/session/${slug}`}>
          <button className="px-[20px] py-[7px] rounded-[25px] border border-primaryBlue bg-primaryBlue text-white hover:text-white font-brunoAce tracking-[1.5px] transition duration-150 ease-out ">
            Book Now
          </button>
        </Link>
        <Link
          href={`/packages`}>
          <button className="px-[20px] py-[7px] rounded-[25px] border border-slate-600 bg-pink-600 text-white hover:text-white font-brunoAce tracking-[1.5px] transition duration-150 ease-out ">
            View more
          </button>
        </Link>
      </div>

    </div>
  );
};

export default SessionCard;
