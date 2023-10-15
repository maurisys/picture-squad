import React from 'react'

interface Props{
    title: string;
    price: string;
    features: any
}
const PackageCard = ({ title, price, features }: Props) => {
    return (
        <div className='flex flex-col gap-[10px] font-montserrat w-[350px] h-[400px] shadow-lg shadow-primaryBlue/50 bg-white border-slate-800 p-[20px] rounded-[5px] flex flex-col items-center'>
            <h1 className='text-xl font-bold'>
                {title}
            </h1>
            <p className=''>Rs. {price}</p>
           <div dangerouslySetInnerHTML={{__html: features}} />
            <button className='bg-primaryBlue text-white font-bold p-[10px] rounded-[5px]'>
                Book Package
            </button>
        </div>
    )
}

export default PackageCard