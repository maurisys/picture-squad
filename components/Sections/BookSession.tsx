import React from 'react'
import { sessionCardData } from '../../data/sessionCardData'
import SessionCard from '../Cards/SessionCard'

const BookTheSession = () => {
  return (
    <div className='bookSession w-[80%] py-[70px] mt-[30px]'>
        <div className='w-full flex items-center justify-center gap-[50px]'>
            <h1 className='whitespace-nowrap font-poppins text-lg md:text-xl font-bold tracking-[2px] underline underline-offset-8 decoration-primaryBlue'>
                Book The Session
            </h1>
            <button className='bg-primaryBlue px-[30px] py-[10px] rounded-[4px] font-montserrat text-[14px] md:text-lg font-bold tracking-[2px]'>
                View All
            </button>
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