
import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogCard = ({ data }: any) => {
  const { description, image, slug, title,created_at } = data;

  return (
    <Link href={`/blogs/${slug}`} className="w-[320px] h-[420px] flex flex-col rounded-[7px] shadow-lg border border-slate-300 overflow-hidden">
      {image && (
        <div className="relative w-full h-[45%]">
          <Image
            src={image}
            alt="mainImage"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="grow p-[10px] flex flex-col gap-[5px] ">
        <p className="text-[14px] text-slate-500 ">{`${created_at}`}</p>
        <h1 className="font-bold">{title}</h1>
        <div dangerouslySetInnerHTML={{__html: description}} />
      </div>
    </Link>
  );
};

export default BlogCard;