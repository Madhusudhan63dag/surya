import React from 'react'
import video from '../assets/website/website.mp4'
import { OptimizedBackgroundVideo } from '../utils/VideoOptimizer'
// Import a poster image (you'll need to create this)
import videoPoster from '../assets/website/website-poster.png' // Create this from a video frame

const Six = () => {
  return (
    <div id="website-technology">
        <section className="relative w-full" style={{ contentVisibility: 'auto', containIntrinsicSize: '70vh' }}>
          <OptimizedBackgroundVideo src={video} poster={videoPoster}  className="w-full h-full" containerStyle={{ height: '70vh' }}/>
          <div className='absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 text-white p-8'></div>
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 flex items-center justify-center z-10  text-white p-8">
            <div className="max-w-4xl">
              <h2 className="text-6xl font-bold mb-4">Smart Web Solutions That Drive Growth and Conversions</h2>
            </div>
          </div>
        </section>
        <div className='w-screen flex justify-end mt-10 items-end'>
          <p className='font-bold w-[60%] text-3xl'>We design and develop high-performance websites with built-in strategies to convert visitors into customers. From seamless UI/UX and automation tools to CRO, analytics, and chatbot integration, we make your digital presence work harder — and smarter — for your brand.</p>
        </div>
    </div>
  )
}

export default Six