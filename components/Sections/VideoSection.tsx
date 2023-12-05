"use client";
import React from "react";

const VideoSection = ({ data }: any) => {
  return (
    <div className="w-full lg:w-[90%] py-[30px] lg:py-[70px]">
      <p className="font-brunoAce underline underline-offset-8 decoration-primaryBlue text-center font-bold text-xl tracking-[2px]">
        Captured Videos
      </p>

      <div className="w-full mt-[50px] font-montserrat">
        {data?.length > 0 &&
          data.map((item: any, index: number) => (
            <div key={index} className="w-full lg:w-[30%] p-[15px]">
              <iframe
                width="100%"
                height="275"
                src="https://www.youtube.com/embed/DGm_rLTrduI"
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
