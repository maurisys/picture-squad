import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  handleImageClick?: any
}

const GalleryCard = ({ image, handleImageClick }: Props) => {
  return (
    <div className="relative w-full md:w-[290px] h-[200px] rounded-lg overflow-hidden cursor-pointer ">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="galleryImage"
          fill
          onClick={handleImageClick}
          className="absolute top-0 left-0 right-0 bottom-0 object-cover hover:scale-110 hover:sepia transition duration-150 ease-out"
        />
      </div>
    </div>
  );
};

export default GalleryCard;
