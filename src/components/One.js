import React, { useState, useEffect } from 'react'
import header from '../assets/header.mp4'
import { OptimizedBackgroundVideo } from '../utils/VideoOptimizer'
// You'll need to create this poster image from a video frame
import headerPoster from '../assets/header-poster.png'
import mobile_video from '../assets/header_two.mp4'
import mobile_poster from '../assets/poster_two.png'

const One = () => {
  // Start with null to avoid hydration issues
  const [videoSrc, setVideoSrc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Set loading to true on component mount
    document.body.style.overflow = 'hidden'; // Prevent scrolling during loading
    
    // Determine if we're on mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setVideoSrc(mobile ? mobile_video : header);
      setIsLoading(true); // Reset loading state when video source changes
    };
    
    // Set initial video source
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.style.overflow = ''; // Restore scrolling when component unmounts
    };
  }, []);
  
  // Handle video loaded event
  const handleVideoLoaded = () => {
    setIsLoading(false);
    document.body.style.overflow = ''; // Restore scrolling when loading completes
  };
  
  return (
    <>
      {/* Full-page loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center" style={{ minHeight: '100vh', width: '100vw' }}>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 border-8 border-[#2566b0] border-t-transparent rounded-full animate-spin mb-4"></div>
            <h2 className="text-xl font-bold text-[#2566b0]">Loading...</h2>
          </div>
        </div>
      )}
      
      <div className={`overflow-hidden transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>  
        <div id='home'>
          <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-[7rem] relative bottom-0 lg:-bottom-2 md:-bottom-4 font-bold text-[#2566b0] mt-0 pt-0 py-5 md:py-0 px-4 text-left'>SURYA MEDIA</h1>
          <div className='h-[70vh] sm:h-[40vh] md:h-[80vh] w-screen relative'>
            <div className='absolute z-10 inset-0 bg-transparent md:bg-black opacity-20'></div>
            {videoSrc && (
              <OptimizedBackgroundVideo
                src={videoSrc}
                poster={isMobile ? mobile_poster : headerPoster}
                autoplay={true}
                loop={true}
                muted={true}
                isPriority={true}
                key={isMobile ? "mobile" : "desktop"}
                onLoadedData={handleVideoLoaded}
                containerStyle={{
                  height: '100%',
                  width: '100%'
                }}
                videoStyle={{
                  objectFit: isMobile ? '' : 'cover'
                }}
              />
            )}
          </div>
        </div>
        <div className='flex flex-col items-end justify-items-end px-4 pt-3 sm:px-0'>
          <h1 className='text-4xl sm:text-3xl md:text-4xl lg:text-[4rem] font-bold text-[#2566b0] md:mb-5 mb-0 mr-0 sm:mr-10 md:mr-20 lg:mr-40 text-right'>One Agency. Infinite</h1>
          <h1 className='text-5xl sm:text-3xl md:text-4xl lg:text-[4rem] font-bold text-[#b0b0b0] md:mb-5 mb-0 text-right'>Possibilities</h1>
        </div>
        <h3 className='text-lg pb-5 sm:text-base font-bold md:text-lg mt-10 lg:text-[2rem] text-[2c1a47]'>From UGC to digital marketing <br/> we bring your vision to life.</h3>
      </div>
    </>
  )
}

export default One