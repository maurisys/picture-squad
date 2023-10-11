import GalleryCard from "@/components/Cards/GalleryCard";
import { gallleryData } from "@/data/galleryData";
import React from "react";

const Gallery = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[100px]">
      <h1 className="w-max font-bold text-xl bg-primaryBlue p-[10px] rounded-[4px] ">Gallery</h1>
      <div className="w-full flex items-center justify-center gap-[20px] flex-wrap mt-[70px] ">
        {gallleryData?.length > 0 &&
          gallleryData.map((item, index) => (
            <GalleryCard key={index} image={item.image} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
