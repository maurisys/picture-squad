"use client";
import { getGalleryList } from "@/ApiQuery";
import GalleryCard from "@/components/Cards/GalleryCard";
import ImagePopup from "@/components/ImagePopup";
import Loader from "@/components/Loader";
import Overlay from "@/components/Overlay";
import { gallleryData } from "@/data/galleryData";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [clickedImageUrl, setClickedImageUrl] = useState<string>("");
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGalleryData = async () => {
    setLoading(true);
    const {data} = await getGalleryList();
    console.log(data)
    setLoading(false);
    setGalleryData(data);
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center mt-[100px] px-[20px] pb-[50px]">
      <h1 className="w-max font-bold text-xl bg-primaryYellow p-[10px] rounded-[4px] font-satisfy ">
        Gallery
      </h1>

      {
        loading && <Loader />
      }
      <div className="w-full flex items-center justify-center gap-[20px] flex-wrap mt-[30px] md:mt-[70px] ">
        {galleryData?.length > 0 &&
          galleryData.map((item: any, index) => (
            <GalleryCard
              key={index}
              image={item.image}
              handleImageClick={() => setClickedImageUrl(item.image)}
            />
          ))}
      </div>

      {clickedImageUrl && (
        <ImagePopup
          image={clickedImageUrl}
          handleCross={() => setClickedImageUrl("")}
        />
      )}

      {clickedImageUrl && <Overlay />}
    </div>
  );
};

export default Gallery;
