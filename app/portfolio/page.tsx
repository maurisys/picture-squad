"use client";
import { getPrtfolioList } from "@/ApiQuery";
import GalleryCard from "@/components/Cards/GalleryCard";
import ImagePopup from "@/components/ImagePopup";
import Loader from "@/components/Loader";
import Overlay from "@/components/Overlay";
import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [clickedImageUrl, setClickedImageUrl] = useState<string>("");
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPortfolioData = async () => {
    setLoading(true);
    const { data } = await getPrtfolioList();
    console.log(data);
    setLoading(false);
    setPortfolioData(data);
  };

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center mt-[100px] px-[20px] pb-[50px]">
      <h1 className="w-max font-bold text-xl bg-primaryYellow p-[10px] rounded-[4px] font-satisfy ">
        Portfolio
      </h1>

      {loading && <Loader />}
      <div className="w-full flex items-center justify-center gap-[20px] flex-wrap mt-[30px] md:mt-[70px] ">
        {portfolioData?.length > 0 &&
          portfolioData.map((item: any, index) => (
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

export default Portfolio;
