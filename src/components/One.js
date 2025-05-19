import React from 'react'
import header from '../assets/header.mp4'

const One = () => {
  return (
    <div className='overflow-hidden'>  
      <div>
        <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-[7rem] relative bottom-0 lg:-bottom-2 md:-bottom-4 font-bold text-[#f26522] mt-0 pt-0 px-4 text-left'>SURYA MEDIA</h1>
        <div className='h-[30vh] sm:h-[40vh] md:h-[80vh] w-screen'>
            <video className='w-full h-full object-cover' autoPlay loop muted>
              <source src={header} type='video/mp4' />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
        <div className='flex flex-col items-end justify-items-end px-4 sm:px-0'>
          <h1 className='text-4xl sm:text-3xl md:text-4xl lg:text-[4rem] font-bold text-[#f26522] md:mb-5 mb-0 mr-0 sm:mr-10 md:mr-20 lg:mr-40 text-right'>One Agency. Infinite</h1>
          <h1 className='text-5xl sm:text-3xl md:text-4xl lg:text-[4rem] font-bold text-[#b0b0b0] md:mb-5 mb-0 text-right'>Possibilities</h1>
        </div>
          <h3 className='text-lg aligh sm:text-base font-bold md:text-lg mt-10 lg:text-[2rem] text-[2c1a47]'>From UGC to digital marketing <br/> we bring your vision to life.</h3>
    </div>
  )
}

export default One