import React from 'react'
import { gallleryData } from '../../data/galleryData'
import GalleryCard from '../Cards/GalleryCard'


const GallerySection = () => {
  return (
    <div className='gallerySection w-full md:w-[90%] px-[20px] py-[50px] flex flex-col items-center '>
         <div className='w-full flex items-center justify-center gap-[50px]'>
            <h1 className='font-poppins text-xl font-bold tracking-[2px] underline underline-offset-8 decoration-primaryBlue'>
                Our Gallery
            </h1>
        </div>

        <div className='w-full flex items-center justify-center gap-[20px] flex-wrap mt-[70px] '>
            {
                gallleryData?.length > 0 && gallleryData.map((item,index)=>(
                    <GalleryCard key={index} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default GallerySection