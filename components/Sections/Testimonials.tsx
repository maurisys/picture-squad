import React from "react";
import { testimonials } from "../../data/testimonialsData";
import TestimonialCard from "../Cards/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="w-full lg:w-[90%] py-[30px] lg:py-[70px] ">
      <p className="font-brunoAce underline underline-offset-8 decoration-primaryBlue text-center font-bold text-xl tracking-[2px]">
        Testimonials
      </p>

      <div className="w-full mt-[50px] font-montserrat">
        {testimonials?.length > 0 && (
          <div className="px-[20px] w-full flex items-center justify-center gap-[30px] flex-wrap">
            {testimonials.map((item, index) => (
              <div key={index} className="w-full lg:w-[40%]">
                <TestimonialCard data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
