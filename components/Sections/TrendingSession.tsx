import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingSession = ({ trendingSessionData, banner1, banner2 }: any) => {
  return (
    <div className="w-full lg:w-[90%] h-full flex flex-col items-center gap-[30px] mt-[30px] lg:mt-[70px] p-[20px]">
      <div className="w-full flex flex-col gap-[30px] items-center rounded-xl ">
        <h1 className="underline underline-offset-8 decoration-primaryBlue text-xl font-bold tracking-[2px]">
          Trending Session
        </h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[20px] lg:gap-[30px]">
          {trendingSessionData[0] && (
            <div className="relative w-full md:w-1/2 h-[350px] ">
              <Image
                src={trendingSessionData[0].image}
                alt="image1"
                fill
                className="rounded-xl object-cover "
              />
              <div className="bg-gradient-to-r from-transparent to-white absolute bottom-[0px] p-[10px] w-full flex flex-col items-center gap-[10px] ">
                <p className="bg-gradient-to-r from-primaryYellow to-primarYellow/75 p-[10px] text-lg font-bold">
                  {trendingSessionData[0].title}
                </p>
                <button className="bg-primaryBlue text-lg px-[20px] py-[10px] rounded-[4px]">
                  <Link href={`/session/${trendingSessionData[0].slug}`}>
                    Book Now
                  </Link>
                </button>
              </div>
            </div>
          )}

          {trendingSessionData[1] && (
            <div className="relative w-full md:w-1/2 h-[350px] ">
              <Image
                src={trendingSessionData[1].image}
                alt="image1"
                fill
                className="rounded-xl object-cover "
              />
              <div className="bg-gradient-to-r from-transparent to-white absolute bottom-[0px] p-[10px] w-full flex flex-col items-center gap-[10px] ">
                <p className="bg-gradient-to-r from-primaryYellow to-primarYellow/75 p-[10px] text-lg font-bold">
                  {trendingSessionData[1].title}
                </p>
                <button className="bg-primaryBlue text-lg px-[20px] py-[10px] rounded-[4px]">
                  <Link href={`/session/${trendingSessionData[1].slug}`}>
                    Book Now
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-full rounded-xl flex flex-col gap-[30px] mt-[30px] ">
        {/* special offer bannner */}
        {banner1[0] && (
          <div className="relative w-full h-[250px] flex items-center justify-center rounded-lg overflow-hidden shadow-xl">
            {banner1[0]?.image && (
              <div className="relative w-full h-[250px] ">
                <Image
                  src={banner1[0]?.image}
                  alt="banner"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <p className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-primaryBlue/75 to-primaryRed/75 p-[20px] font-satisfy text-center font-bold text-lg">
              {banner1[0]?.title}
            </p>
          </div>
        )}

        {/* upcoming session bannner */}
        {banner2[0] && (
          <div className="relative w-full h-[250px] flex items-center justify-center rounded-lg overflow-hidden shadow-xl ">
            {banner2[0]?.image && (
              <div className="relative w-full h-[250px] ">
                <Image
                  src={banner2[0]?.image}
                  alt="banner"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-primaryBlue/75 to-primaryRed/75 p-[20px] font-satisfy text-center font-bold text-lg">
              {banner2[0]?.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingSession;
