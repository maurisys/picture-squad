import Image from "next/image";
import React from "react";

const TrendingSession = () => {
  return (
    <div className="w-full lg:w-[90%] h-full flex flex-col items-center gap-[30px] mt-[30px] lg:mt-[70px] p-[20px]">
      <div className="w-full flex flex-col gap-[30px] items-center rounded-xl ">
        <h1 className="underline underline-offset-8 decoration-primaryBlue text-xl font-bold tracking-[2px]">
          Trending Session
        </h1>
        <div className="w-full flex items-center justify-center gap-[10px] lg:gap-[30px]">
          <div className="relative w-1/2 h-[350px] ">
            <Image
              src="/image1.jpg"
              alt="image1"
              fill
              className="rounded-xl object-cover "
            />
          </div>

          <div className="relative w-1/2 h-[350px] ">
            <Image
              src="/image2.jpg"
              alt="image1"
              fill
              className="rounded-xl object-cover "
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full rounded-xl flex flex-col gap-[30px] mt-[30px] ">
        {/* special offer bannner */}
        <div className="relative w-full h-[250px] flex items-center justify-center rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full h-[250px] ">
            <Image
              src="/photography.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>

          <p className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-primaryBlue/75 to-primaryRed/75 p-[20px] font-satisfy text-center font-bold text-lg">
            Banner of special offer
          </p>
        </div>
        {/* upcoming session bannner */}
        <div className="relative w-full h-[250px] flex items-center justify-center rounded-lg overflow-hidden shadow-xl ">
          <div className="relative w-full h-[250px] ">
            <Image
              src="/photography2.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
          <p className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-primaryBlue/75 to-primaryRed/75 p-[20px] font-satisfy text-center font-bold text-lg">
            Banner of upcoming offer
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingSession;
