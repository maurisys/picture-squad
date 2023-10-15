import { getBlogDetails } from "@/ApiQuery";
import Image from "next/image";
import React from "react";

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { data } = await getBlogDetails(slug);
  const { title, description, image } = data;

  return (
    <div className="w-full min-h-[100vh] flex flex-col intems-center">
      <div className="relative w-full h-[30vh] flex items-center justify-center">
        {image && (
          <Image
            src={image}
            alt="mainImage"
            fill
            className="object-cover"
          />
        )}

        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] ">
            <h1 className="z-10 text-3xl font-bold bg-primaryBlue p-[20px]">
                {title}
            </h1>
        </div>
        {/*...Overlay...*/}
        <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-darkGray to-transparent " />
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-darkGray to-transparent " />
      </div>

      <div dangerouslySetInnerHTML={{__html: description}} className="w-full flex flex-col gap-[15px] p-[20px]" />
    </div>
  );
};

export default BlogDetails;
