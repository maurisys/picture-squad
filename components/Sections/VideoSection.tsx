"use client";
import React from "react";

const VideoSection = ({ data }: any) => {

  return (
    <div className="w-full lg:w-[90%] py-[30px] lg:py-[70px]">
      <p className="font-brunoAce underline underline-offset-8 decoration-primaryBlue text-center font-bold text-xl tracking-[2px]">
        Captured Videos
      </p>

      <div className="w-full mt-[50px] font-montserrat grid grid-cols-1 md:grid-cols-3 gap-[40px]">
        {data?.length > 0 &&
          data.map((item: any, index: number) => (
            <div key={index} className="">
              <iframe
                width="100%"
                height="275"
                src={`https://www.youtube.com/embed/${item.slug}`}
                allowFullScreen
                title="YouTube Video"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoSection;
