
import { getSiteInfo } from "@/ApiQuery";
import React from "react";

const Slider = async() => {
  const { data } = await getSiteInfo();

  return (
    <div className="w-full h-full">
      <div className="relative bg-deepBlue w-full h-full flex justify-center items-center">
          <div className="relative w-full h-full overflow-hidden">
            {/* Display the active slide */}
           <video src={data?.banner || "/video1.mp4"} className="video" autoPlay={true} loop muted={true} >
           </video>
          </div>
      </div>
    </div>
  );
};

export default Slider;
