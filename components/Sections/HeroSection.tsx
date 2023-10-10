import React from "react";
import Slider from "../Slider";
import { videoSliderData } from "@/data/videoSliderData";

const HeroSection = () => {
  return (
    <div className="w-full bg-darkGray h-[90vh] flex items-center">
      {/* left section */}
      <div className="min-w-[52%] flex flex-col text-white px-[50px]">
        <h1 className="text-6xl font-bold">
          <span className="text-primaryBlue">Capture</span>{" "}
          <span className="text-primaryBlue">Moments</span>, Create <br />
          Memories
        </h1>
        <div className="w-full">
          <p className="max-w-[500px] text-slate-300 mt-[30px]">
            Welcome to Picture Squad Studio, where every click tells a story.
            Explore our diverse range of photography sessions and packages, and
            let us help you capture the moments that matter most.
          </p>
        </div>

        <div className="flex items-center gap-[20px] mt-[30px]">
          <button className="bg-primaryYellow cursor-pointer hover:scale-105 hover:opacity-[85%] px-[20px] py-[8px] rounded-[25px] text-black text-lg font-bold tracking-wider transition duration-120 ease-out">
            Book Session
          </button>
          <button className="bg-white border px-[20px] py-[8px] rounded-[25px] text-black text-lg font-bold tracking-wider">
            View Portfolio
          </button>
        </div>
      </div>
      {/* right section */}
      <div className="relative grow h-full">
        <Slider data={videoSliderData} />
        {/* overlay */}
        <div className="radientOverlay" />
      </div>
    </div>
  );
};

export default HeroSection;
