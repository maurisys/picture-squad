import React from 'react'

const Overlay = () => {
  return (
    <div style={{
        zIndex: 99
    }} className='fixed top-0 left-0 bg-black/75 w-full h-[100vh]' />
  )
}

export default Overlay