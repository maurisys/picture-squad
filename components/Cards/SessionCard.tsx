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
    <Link
      href={`/packages/${slug}`}
      className="group relative w-[250px] h-[250px] rounded-xl overflow-hidden shadow-md shadow-primaryBlue "
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
      <div className="absolute w-full h-full flex items-center justify-end rounded-full bg-white/75 left-0 bottom-0 transform -translate-x-[100%] translate-y-[100%] group-hover:-translate-x-[30%] group-hover:translate-y-[50%] transition duration-150 ease-out" />
      <button className="hidden group-hover:block absolute bottom-[20px] left-[20px] px-[20px] py-[12px] rounded-[4px] border border-primaryBlue bg-primaryBlue font-brunoAce tracking-[1.5px] hover:bg-transparent hover:border hover:border-black transition duration-150 ease-out ">
        Book Now
      </button>
    </Link>
  );
};

export default SessionCard;
