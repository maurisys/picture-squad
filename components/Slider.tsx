"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
interface props {
  data: {
    videoSource: string;
  }[];
}

const Slider = ({ data }: props) => {
  const videoRef: any = useRef();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data?.length > 0) {
        showNextSlide();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [data, activeIndex]);

  const showNextSlide = () => {
    if (activeIndex >= data.length - 1) {
      setActiveIndex(0);
      console.log(videoRef.current.src)
      videoRef.current.src = data[activeIndex]?.videoSource;
    } else {
      setActiveIndex((prev) => prev + 1);
      videoRef.current.src = data[activeIndex]?.videoSource;
    }
  };

  return (
    <div className="w-full h-full">
      <div className="relative bg-deepBlue w-full h-full flex justify-center items-center">
        {data?.length > 0 ? (
          <div className="relative w-full h-full overflow-hidden">
            {/* Display the active slide */}
           <video ref={videoRef} className="video" autoPlay={true} muted={true} >
           </video>
          </div>
        ) : (
            <div className="relative w-full h-full overflow-hidden">
            {/* Display the active slide */}
           <video className="video" src="/video1.mp4" autoPlay={true} muted={true}>
           </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
