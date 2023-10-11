import React from 'react'

const PackageCard = ({ title, price, features }: any) => {
    return (
        <div className='flex flex-col gap-[10px] font-montserrat w-[350px] h-[400px] shadow-lg shadow-primaryBlue/50 bg-white border-slate-800 p-[20px] rounded-[5px] flex flex-col items-center'>
            <h1 className='text-xl font-bold'>
                {title}
            </h1>
            <p className=''>{price}</p>
            <ul className='flex flex-col gap-[7px]'>
                {features.map((item: any, index: number) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <button className='bg-primaryBlue text-white font-bold p-[10px] rounded-[5px]'>
                Book Session
            </button>
        </div>
    )
}

export default PackageCard