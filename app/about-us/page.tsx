import { getAboutPageData } from '@/ApiQuery'
import Image from 'next/image';
import React from 'react'

const AboutUs = async () => {

    const { data } = await getAboutPageData();
    const { title, subtitle, description, image } = data

    return (
        <article className='w-full pb-[50px] min-h-[100vh] flex flex-col items-center px-[20px] lg:px-[50px]'>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='text-center mt-[70px] underline underline-offset-8 decoration-primaryBlue font-bold text-3xl'>
                    {title}
                </h1>
                <p>
                    {subtitle}
                </p>
            </div>

            <div className='relative mt-[50px] w-full lg:max-w-[85%]'>
                <Image src={image} alt="mainImage" width={400} height={500} className='object-cover lg:float-right rounded-lg shadow-xl' />
                <p>
                    {description}
                </p>

            </div>
        </article>
    )
}

export default AboutUs