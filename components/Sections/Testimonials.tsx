"use client"
import React, { useRef } from "react";
import Slider from "react-slick";
import { testimonials } from "../../data/testimonialsData";
import TestimonialCard from "../Cards/TestimonialCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = ({ testimonialData }: any) => {

  const sliderRef: any = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust the number of slides shown
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:w-[90%] py-[30px] lg:py-[70px]">
      <p className="font-brunoAce underline underline-offset-8 decoration-primaryBlue text-center font-bold text-xl tracking-[2px]">
        Testimonials
      </p>

      <div className="relative w-full mt-[50px] font-montserrat">
        <div className="z-10 absolute top-0 left-0 w-[50px] h-full rounded-r-[25px] flex items-center justify-center">
          <div onClick={previous} className="bg-primaryBlue cursor-pointer w-[35px] h-[35px] rounded-full flex items-center justify-center text-white ">
            <IoIosArrowBack />
          </div>
        </div>
        {testimonialData?.length > 0 && (
          <Slider ref={sliderRef} {...settings}>
            {testimonialData.map((item: any, index: number) => (
              <div key={index} className="w-full lg:w-[30%] p-[15px]">
                <TestimonialCard data={item} />
              </div>
            ))}
          </Slider>
        )}
        <div className="z-10 absolute top-0 right-0 w-[50px] h-full rounded-l-[25px] flex items-center justify-center">
          <div onClick={next} className="bg-primaryBlue cursor-pointer w-[35px] h-[35px] rounded-full flex items-center justify-center text-white ">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
