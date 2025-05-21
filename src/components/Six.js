import React from 'react'
import video from '../assets/website/website.mp4'
import { OptimizedBackgroundVideo } from '../utils/VideoOptimizer'
import videoPoster from '../assets/website/website-poster.jpeg'


const Six = () => {
  return (
    <div id="website-technology" className="overflow-x-hidden overflow-y-hidden">
        <section className="relative w-full" style={{ contentVisibility: 'auto', containIntrinsicSize: '60vh md:70vh' }}>
          <OptimizedBackgroundVideo src={video} poster={videoPoster} className="w-full h-full" containerStyle={{ height: '50vh', '@media (min-width: 768px)': { height: '70vh' } }}/>
          <div className='absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 text-white p-4 md:p-8'></div>
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-center z-10 text-white p-4 md:p-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4">Smart Web Solutions That Drive Growth and Conversions</h2>
            </div>
          </div>
        </section>
        <div className='w-full px-4 md:px-8 flex flex-col md:flex-row md:justify-end mt-6 md:mt-10 items-center md:items-end'>
          <p className='font-bold w-full md:w-[80%] lg:w-[70%] xl:w-[60%] text-xl sm:text-2xl md:text-3xl'>We design and develop high-performance websites with built-in strategies to convert visitors into customers. From seamless UI/UX and automation tools to CRO, analytics, and chatbot integration, we make your digital presence work harder — and smarter — for your brand.</p>
        </div>
    </div>
  )
}

export default Six