import React from 'react'
import { sessionCardData } from '../../data/sessionCardData'
import SessionCard from '../Cards/SessionCard'

const BookTheSession = () => {
  return (
    <div className='bookSession w-full lg:w-[90%] px-[20px] py-[30px] lg:py-[70px] mt-[30px]'>
        <div className='w-full flex items-center justify-center gap-[50px]'>
            <h1 className='whitespace-nowrap font-poppins text-lg md:text-xl font-bold tracking-[2px] underline underline-offset-8 decoration-primaryBlue'>
                Book The Session
            </h1>
        </div>

        <div className='w-full flex items-center justify-center gap-[50px] flex-wrap mt-[40px] '>
            {sessionCardData?.length > 0 && sessionCardData.map((item,index)=>(
                <SessionCard key={index} title={item.title} image={item.image} slug={item.slug} />
            ))}
        </div>
    </div>
  )
}

export default BookTheSession