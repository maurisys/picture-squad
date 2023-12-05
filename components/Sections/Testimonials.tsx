"use client"
import React from "react";
import Slider from "react-slick";
import { testimonials } from "../../data/testimonialsData";
import TestimonialCard from "../Cards/TestimonialCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = ({ testimonialData }: any) => {
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

      <div className="w-full mt-[50px] font-montserrat">
        {testimonialData?.length > 0 && (
          <Slider {...settings}>
            {testimonialData.map((item: any, index: number) => (
              <div key={index} className="w-full lg:w-[30%] p-[15px]">
                <TestimonialCard data={item} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
