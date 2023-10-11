import SessionCard from '@/components/Cards/SessionCard'
import { sessionCardData } from '@/data/sessionCardData'
import React from 'react'

const Session = () => {
  return (
    <div className='w-full flex flex-col items-center px-[20px]'>
      <h1 className='mt-[100px] font-satisfy text-2xl font-bold bg-primaryYellow p-[10px] '>
        Our Session
      </h1>

      <div className='w-full flex items-center justify-center gap-[50px] flex-wrap mt-[40px] '>
            {sessionCardData?.length > 0 && sessionCardData.map((item,index)=>(
                <SessionCard key={index} title={item.title} image={item.image} slug={item.slug} />
            ))}
        </div>
    </div>
  )
}

export default Session