import React, { useState, useEffect, useRef } from 'react'
import header from '../assets/header.mp4'
// Remove the OptimizedBackgroundVideo import
import headerPoster from '../assets/header-poster.png'
import mobile_video from '../assets/header_two.mp4'
import mobile_poster from '../assets/poster_two.png'

const One = () => {
  // Start with null to avoid hydration issues
  const [videoSrc, setVideoSrc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Set loading to true on component mount
    document.body.style.overflow = 'hidden'; // Prevent scrolling during loading
    
    // Determine if we're on mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setVideoSrc(mobile ? mobile_video : header);
      // Don't reset loading on resize as it causes flickering
      // Only set loading on initial mount
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
    // Ensure video plays after loaded
    if (videoRef.current && videoRef.current.play) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video playback started successfully
            setIsLoading(false);
            document.body.style.overflow = ''; // Restore scrolling when loading completes
          })
          .catch(error => {
            console.error("Video playback error:", error);
            // Still hide loader even if autoplay fails
            setIsLoading(false);
            document.body.style.overflow = '';
          });
      }
    } else {
      setIsLoading(false);
      document.body.style.overflow = '';
    }
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
          {/* Enhanced animated title */}
          <div className="relative overflow-hidden py-5 md:py-0 px-4">
            <h1 className="fancy-title text-5xl sm:text-5xl md:text-6xl lg:text-[7rem] font-bold mt-0 pt-0 relative z-10">
              <span className="inline-block animate-char">S</span>
              <span className="inline-block animate-char">U</span>
              <span className="inline-block animate-char">R</span>
              <span className="inline-block animate-char">Y</span>
              <span className="inline-block animate-char">A</span>
              <span className="inline-block animate-char">&nbsp;</span>
              <span className="inline-block animate-char">M</span>
              <span className="inline-block animate-char">E</span>
              <span className="inline-block animate-char">D</span>
              <span className="inline-block animate-char">I</span>
              <span className="inline-block animate-char">A</span>
            </h1>
          </div>
          
          <div className='h-[70vh] sm:h-[40vh] md:h-[80vh] w-screen relative'>
            <div className='absolute z-10 inset-0 bg-transparent md:bg-black opacity-20'></div>
            {videoSrc && (
              <div className="h-full w-full">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={isMobile ? mobile_poster : headerPoster}
                  autoPlay
                  playsInline
                  loop
                  muted
                  onLoadedData={handleVideoLoaded}
                  className="h-full w-full"
                  style={{
                    objectFit: isMobile ? '' : 'cover',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col items-end justify-items-end px-4 pt-3 sm:px-0'>
          <h1 className='text-4xl sm:text-3xl md:text-4xl lg:text-[4rem] font-bold text-[#2566b0] md:mb-5 mb-0 mr-0 sm:mr-10 md:mr-20 lg:mr-40 text-right'>One Agency. Infinite</h1>
          <h1 className='text-5xl sm:text-3xl md:text-4xl lg:text-[4rem] font-bold text-[#b0b0b0] md:mb-5 mb-0 text-right'>Possibilities</h1>
        </div>
        <h3 className='text-lg pb-5 sm:text-base font-bold md:text-lg mt-10 lg:text-[2rem] text-[2c1a47]'>From UGC to digital marketing <br/> we bring your vision to life.</h3>
      </div>
      
      {/* Enhanced animation styles */}
      <style jsx>{`
        .fancy-title {
          perspective: 1000px;
        }
        
        .animate-char {
          animation: wave-animation 2.5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, 
                     color-shift 5s linear infinite;
          transform-origin: center bottom;
          display: inline-block;
        }
        
        @keyframes wave-animation {
          0% {
            transform: translateY(0) rotateX(0);
            color: #2566b0;
          }
          25% {
            transform: translateY(-15px) rotateX(20deg);
            color: #3577c0;
          }
          50% {
            transform: translateY(0) rotateX(0);
            color: #2566b0;
          }
          75% {
            transform: translateY(5px) rotateX(-10deg);
            color: #1c4f8c;
          }
          100% {
            transform: translateY(0) rotateX(0);
            color: #2566b0;
          }
        }
        
        @keyframes color-shift {
          0%, 100% {
            text-shadow: 0 0 8px rgba(37, 102, 176, 0.3);
          }
          50% {
            text-shadow: 0 0 15px rgba(37, 102, 176, 0.6);
          }
        }
        
        /* Add staggered delays to each character */
        .animate-char:nth-child(1) { animation-delay: 0.0s; }
        .animate-char:nth-child(2) { animation-delay: 0.1s; }
        .animate-char:nth-child(3) { animation-delay: 0.2s; }
        .animate-char:nth-child(4) { animation-delay: 0.3s; }
        .animate-char:nth-child(5) { animation-delay: 0.4s; }
        .animate-char:nth-child(6) { animation-delay: 0.5s; }
        .animate-char:nth-child(7) { animation-delay: 0.6s; }
        .animate-char:nth-child(8) { animation-delay: 0.7s; }
        .animate-char:nth-child(9) { animation-delay: 0.8s; }
        .animate-char:nth-child(10) { animation-delay: 0.9s; }
        .animate-char:nth-child(11) { animation-delay: 1.0s; }
      `}</style>
    </>
  )
}

export default One