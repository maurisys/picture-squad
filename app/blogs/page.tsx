import { getBlogList } from "@/ApiQuery";
import BlogCard from "@/components/Cards/BlogCard";
import React from "react";

const Blogs = async () => {
  const { data } = await getBlogList();

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center mt-[100px] px-[20px] pb-[50px]">
      <h1 className="w-max font-bold text-xl bg-primaryYellow p-[10px] rounded-[4px] font-satisfy ">
        Blogs
      </h1>

      <div className="w-full flex items-center justify-center gap-[20px] flex-wrap mt-[30px] md:mt-[70px] ">
        {data?.length > 0 &&
          data.map((item: any, index: number) => (
            <BlogCard key={index} data={item} />
          ))}
      </div>
    </div>
  );
};

export default Blogs;
