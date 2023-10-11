import GalleryCard from "@/components/Cards/GalleryCard";
import { gallleryData } from "@/data/galleryData";
import React from "react";

const Gallery = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[100px] px-[20px]">
      <h1 className="w-max font-bold text-xl bg-primaryYellow p-[10px] rounded-[4px] font-satisfy ">Gallery</h1>
      <div className="w-full flex items-center justify-center gap-[20px] flex-wrap mt-[30px] md:mt-[70px] ">
        {gallleryData?.length > 0 &&
          gallleryData.map((item, index) => (
            <GalleryCard key={index} image={item.image} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
